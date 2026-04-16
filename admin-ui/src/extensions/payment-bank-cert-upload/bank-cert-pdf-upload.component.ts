import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
    DataService,
    FormInputComponent,
    InputComponentConfig,
    NotificationService,
    SharedModule,
} from '@vendure/admin-ui/core';

@Component({
    selector: 'vdr-bank-cert-pdf-upload',
    standalone: true,
    imports: [SharedModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="bank-cert-pdf-upload">
            <label class="btn btn-primary btn-sm" [class.disabled]="readonly || uploading">
                {{ uploading ? 'Subiendo...' : 'Subir PDF' }}
                <input
                    type="file"
                    accept="application/pdf,.pdf"
                    [disabled]="readonly || uploading"
                    hidden
                    (change)="onFileSelected($event)"
                />
            </label>

            <a
                *ngIf="formControl?.value"
                [href]="formControl.value"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-link btn-sm"
            >
                Ver documento
            </a>

            <button
                *ngIf="formControl?.value && !readonly"
                type="button"
                class="btn btn-sm btn-danger-outline"
                [disabled]="uploading"
                (click)="clear()"
            >
                Quitar
            </button>
        </div>
    `,
    styles: [
        `
            .bank-cert-pdf-upload {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                flex-wrap: wrap;
            }
        `,
    ],
})
export class BankCertPdfUploadComponent implements FormInputComponent<InputComponentConfig> {
    readonly = false;
    formControl!: FormControl<string | null>;
    config!: InputComponentConfig;
    uploading = false;

    constructor(
        private dataService: DataService,
        private notificationService: NotificationService,
        private cdr: ChangeDetectorRef,
    ) {}

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;

        const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
        if (!isPdf) {
            this.notificationService.error('Solo se permiten archivos PDF.');
            return;
        }

        this.uploading = true;
        this.cdr.markForCheck();

        this.dataService.product.createAssets([file]).subscribe({
            next: result => {
                this.uploading = false;
                const created = result.createAssets?.[0];
                if (!created) {
                    this.notificationService.error('No fue posible subir el documento.');
                    this.cdr.markForCheck();
                    return;
                }
                if (created.__typename === 'MimeTypeError') {
                    this.notificationService.error(created.message);
                    this.cdr.markForCheck();
                    return;
                }
                if (!('source' in created)) {
                    this.notificationService.error('No fue posible obtener el archivo subido.');
                    this.cdr.markForCheck();
                    return;
                }

                this.formControl.setValue(created.source);
                this.formControl.markAsDirty();
                this.notificationService.success('Documento cargado correctamente.');
                this.cdr.markForCheck();
            },
            error: err => {
                this.uploading = false;
                this.notificationService.error(err?.message ?? 'Error al subir el PDF.');
                this.cdr.markForCheck();
            },
        });
    }

    clear(): void {
        this.formControl.setValue(null);
        this.formControl.markAsDirty();
        this.cdr.markForCheck();
    }
}
