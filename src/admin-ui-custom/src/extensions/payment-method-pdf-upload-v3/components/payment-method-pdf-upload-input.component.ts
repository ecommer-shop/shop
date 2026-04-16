import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DataService,
  FormInputComponent,
  NotificationService,
} from '@vendure/admin-ui/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'vdr-payment-method-pdf-upload-input',
  template: `
    <div class="pdf-upload-input">
      <div class="mb-2">
        <input
          type="file"
          accept=".pdf,application/pdf"
          [disabled]="readonly || uploading"
          (change)="onSelectFile($event)"
        />
      </div>

      <p class="text-sm text-subdued" *ngIf="assetId">
        PDF cargado (asset id): {{ assetId }}
      </p>

      <button
        class="btn btn-sm btn-ghost"
        type="button"
        [disabled]="readonly || uploading || !assetId"
        (click)="clear()"
      >
        Quitar PDF
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PaymentMethodPdfUploadInputComponent implements FormInputComponent {
  readonly: boolean;
  formControl: FormControl;
  config: Record<string, any>;

  uploading = false;

  constructor(
    private dataService: DataService,
    private notificationService: NotificationService,
  ) {}

  get assetId(): string | null {
    const rawValue = this.formControl?.value;
    if (!rawValue) {
      return null;
    }
    if (typeof rawValue === 'string' || typeof rawValue === 'number') {
      return String(rawValue);
    }
    if (typeof rawValue === 'object' && rawValue.id) {
      return String(rawValue.id);
    }
    return null;
  }

  async onSelectFile(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      this.notificationService.error('Solo se permite cargar archivos PDF');
      input.value = '';
      return;
    }

    this.uploading = true;

    try {
      const result = await firstValueFrom(this.dataService.product.createAssets([file]));
      const created = result.createAssets?.[0];

      if (!created || created.__typename !== 'Asset') {
        this.notificationService.error('No se pudo cargar el PDF');
        return;
      }

      this.formControl.setValue(created.id);
      this.formControl.markAsDirty();
      this.notificationService.success('PDF cargado correctamente');
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Error al cargar PDF';
      this.notificationService.error(message);
    } finally {
      this.uploading = false;
      input.value = '';
    }
  }

  clear(): void {
    this.formControl.setValue(null);
    this.formControl.markAsDirty();
  }

}
