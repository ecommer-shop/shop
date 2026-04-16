import {
  ActionBarComponent,
  ActionBarDropdownMenuComponent,
  ActionBarItemsComponent,
  ActionBarLeftComponent,
  ActionBarRightComponent,
  AssignPromotionsToChannelDocument,
  BulkActionMenuComponent,
  BulkActionRegistryService,
  CardComponent,
  ChipComponent,
  ConfigurableInputComponent,
  CustomDetailComponentHostComponent,
  DataService,
  DataTable2ColumnComponent,
  DataTable2Component,
  DataTable2SearchComponent,
  DataTableCustomFieldColumnComponent,
  DatetimePickerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuComponent,
  DropdownTriggerDirective,
  DuplicateEntityDialogComponent,
  FormFieldComponent,
  FormFieldControlDirective,
  GetPromotionDetailDocument,
  GetPromotionListDocument,
  HasPermissionPipe,
  IfPermissionsDirective,
  LanguageSelectorComponent,
  LocaleDatePipe,
  LogicalOperator,
  ModalService,
  NotificationService,
  PROMOTION_FRAGMENT,
  PageBlockComponent,
  PageComponent,
  PageDetailLayoutComponent,
  PageDetailSidebarComponent,
  PageEntityInfoComponent,
  PageService,
  Permission,
  RemovePromotionsFromChannelDocument,
  RichTextEditorComponent,
  SharedModule,
  TabbedCustomFieldsComponent,
  TypedBaseDetailComponent,
  TypedBaseListComponent,
  createBulkAssignToChannelAction,
  createBulkDeleteAction,
  createBulkRemoveFromChannelAction,
  createUpdatedTranslatable,
  detailBreadcrumb,
  detailComponentWithResolver,
  encodeConfigArgValue,
  findTranslation,
  getConfigArgValue,
  getCustomFieldsDefaults,
  getDefaultConfigArgValue,
  gql
} from "./chunk-YDQAHX43.js";
import {
  ClrCheckbox,
  ClrCheckboxWrapper,
  ClrIconCustomTag,
  ClrLabel
} from "./chunk-SWTGRTQU.js";
import "./chunk-QP2DF7NU.js";
import {
  TranslatePipe
} from "./chunk-NCKUJY74.js";
import "./chunk-ZBGAUCDP.js";
import "./chunk-IG62BV2I.js";
import "./chunk-3PLGJBEQ.js";
import "./chunk-DCTM64NI.js";
import "./chunk-GV6YQ3QV.js";
import "./chunk-GIMEV65A.js";
import "./chunk-5QDPBDBW.js";
import "./chunk-MXLQ55RW.js";
import "./chunk-7RVA7R7J.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  Validators,
  ɵNgNoValidate
} from "./chunk-XNNVMMYZ.js";
import {
  ROUTES,
  RouterLink,
  RouterModule
} from "./chunk-A2BPDF5Y.js";
import "./chunk-FRAMVYFW.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf
} from "./chunk-3WBC65NO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgModule,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OXIDPESK.js";
import {
  combineLatest,
  map,
  mergeMap,
  take
} from "./chunk-OGZ4D63M.js";
import {
  marker
} from "./chunk-D3BILYUK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// ../../node_modules/@vendure/admin-ui/fesm2022/vendure-admin-ui-marketing.mjs
function PromotionDetailComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵlistener("click", function PromotionDetailComponent_button_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.create());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", !ctx_r2.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function PromotionDetailComponent_ng_template_12_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵlistener("click", function PromotionDetailComponent_ng_template_12_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r2.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function PromotionDetailComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PromotionDetailComponent_ng_template_12_button_0_Template, 3, 4, "button", 28);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", "UpdatePromotion");
  }
}
function PromotionDetailComponent_vdr_card_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card")(1, "clr-toggle-wrapper");
    ɵɵelement(2, "input", 29);
    ɵɵelementStart(3, "label");
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 1, "common.enabled"));
  }
}
function PromotionDetailComponent_vdr_card_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r5);
  }
}
function PromotionDetailComponent_vdr_card_51_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 31);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 32);
    ɵɵpipe(3, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r2.customFields)("customFieldsFormGroup", ctx_r2.detailForm.get("customFields"))("readonly", !ɵɵpipeBind1(3, 6, "UpdatePromotion"));
  }
}
function PromotionDetailComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "vdr-configurable-input", 33);
    ɵɵpipe(2, "hasPermission");
    ɵɵlistener("remove", function PromotionDetailComponent_div_55_Template_vdr_configurable_input_remove_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.removeCondition($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const condition_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("position", i_r8)("readonly", !ɵɵpipeBind1(2, 5, "UpdatePromotion"))("operation", condition_r7)("operationDefinition", ctx_r2.getConditionDefinition(condition_r7))("formControlName", i_r8);
  }
}
function PromotionDetailComponent_vdr_dropdown_57_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function PromotionDetailComponent_vdr_dropdown_57_button_6_Template_button_click_0_listener() {
      const condition_r10 = ɵɵrestoreView(_r9).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.addCondition(condition_r10));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const condition_r10 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", condition_r10.description, " ");
  }
}
function PromotionDetailComponent_vdr_dropdown_57_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown")(1, "button", 34);
    ɵɵelement(2, "clr-icon", 35);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-dropdown-menu", 36);
    ɵɵtemplate(6, PromotionDetailComponent_vdr_dropdown_57_button_6_Template, 2, 1, "button", 37);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "marketing.add-condition"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.getAvailableConditions());
  }
}
function PromotionDetailComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "vdr-configurable-input", 39);
    ɵɵpipe(2, "hasPermission");
    ɵɵlistener("remove", function PromotionDetailComponent_div_60_Template_vdr_configurable_input_remove_1_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.removeAction($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const action_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("position", i_r13)("operation", action_r12)("readonly", !ɵɵpipeBind1(2, 5, "UpdatePromotion"))("operationDefinition", ctx_r2.getActionDefinition(action_r12))("formControlName", i_r13);
  }
}
function PromotionDetailComponent_vdr_dropdown_62_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function PromotionDetailComponent_vdr_dropdown_62_button_6_Template_button_click_0_listener() {
      const action_r15 = ɵɵrestoreView(_r14).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.addAction(action_r15));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r15 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", action_r15.description, " ");
  }
}
function PromotionDetailComponent_vdr_dropdown_62_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown")(1, "button", 34);
    ɵɵelement(2, "clr-icon", 35);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-dropdown-menu", 36);
    ɵɵtemplate(6, PromotionDetailComponent_vdr_dropdown_62_button_6_Template, 2, 1, "button", 37);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "marketing.add-action"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.getAvailableActions());
  }
}
var _c0 = () => ["./create"];
var _c1 = (a0) => ["./", a0];
function PromotionListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 17);
    ɵɵelement(1, "clr-icon", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c0));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "marketing.create-new-promotion"), " ");
  }
}
function PromotionListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const promotion_r1 = ctx.item;
    ɵɵtextInterpolate(promotion_r1.id);
  }
}
function PromotionListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const promotion_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, promotion_r2.createdAt, "short"), " ");
  }
}
function PromotionListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const promotion_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, promotion_r3.updatedAt, "short"), " ");
  }
}
function PromotionListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 19)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const promotion_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c1, promotion_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", promotion_r4.name, "");
  }
}
function PromotionListComponent_ng_template_32_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 23);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.enabled"));
  }
}
function PromotionListComponent_ng_template_32_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 24);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.disabled"));
  }
}
function PromotionListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PromotionListComponent_ng_template_32_vdr_chip_0_Template, 3, 3, "vdr-chip", 21)(1, PromotionListComponent_ng_template_32_vdr_chip_1_Template, 3, 3, "vdr-chip", 22);
  }
  if (rf & 2) {
    const promotion_r5 = ctx.item;
    ɵɵproperty("ngIf", promotion_r5.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !promotion_r5.enabled);
  }
}
function PromotionListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const promotion_r6 = ctx.item;
    ɵɵtextInterpolate1(" ", promotion_r6.couponCode, " ");
  }
}
function PromotionListComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const promotion_r7 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, promotion_r7.startsAt, "short"), " ");
  }
}
function PromotionListComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const promotion_r8 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, promotion_r8.endsAt, "short"), " ");
  }
}
function PromotionListComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const promotion_r9 = ctx.item;
    ɵɵtextInterpolate1(" ", promotion_r9.perCustomerUsageLimit, " ");
  }
}
function PromotionListComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const promotion_r10 = ctx.item;
    ɵɵtextInterpolate1(" ", promotion_r10.usageLimit, " ");
  }
}
function PromotionListComponent_vdr_dt2_custom_field_column_48_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 25);
  }
  if (rf & 2) {
    const customField_r11 = ctx.$implicit;
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r11)("sorts", ctx_r11.sorts);
  }
}
var GET_PROMOTION_DETAIL = gql`
    query GetPromotionDetail($id: ID!) {
        promotion(id: $id) {
            ...Promotion
        }
    }
    ${PROMOTION_FRAGMENT}
`;
var PromotionDetailComponent = class _PromotionDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("Promotion");
    this.detailForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: "",
      enabled: true,
      couponCode: null,
      perCustomerUsageLimit: null,
      usageLimit: null,
      startsAt: null,
      endsAt: null,
      conditions: this.formBuilder.array([]),
      actions: this.formBuilder.array([]),
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.conditions = [];
    this.actions = [];
    this.allConditions = [];
    this.allActions = [];
    this.customFields = this.getCustomFieldConfig("Promotion");
  }
  ngOnInit() {
    this.init();
    this.dataService.promotion.getPromotionActionsAndConditions().single$.subscribe((data) => {
      this.allActions = data.promotionActions;
      this.allConditions = data.promotionConditions;
      this.changeDetector.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  getAvailableConditions() {
    return this.allConditions.filter((o) => !this.conditions.find((c) => c.code === o.code));
  }
  getConditionDefinition(condition) {
    return this.allConditions.find((c) => c.code === condition.code);
  }
  getAvailableActions() {
    return this.allActions.filter((o) => !this.actions.find((a) => a.code === o.code));
  }
  getActionDefinition(action) {
    return this.allActions.find((c) => c.code === action.code);
  }
  saveButtonEnabled() {
    return !!(this.detailForm.dirty && this.detailForm.valid && (this.conditions.length !== 0 || this.detailForm.value.couponCode) && this.actions.length !== 0);
  }
  addCondition(condition) {
    this.addOperation("conditions", condition);
    this.detailForm.markAsDirty();
  }
  addAction(action) {
    this.addOperation("actions", action);
    this.detailForm.markAsDirty();
  }
  removeCondition(condition) {
    this.removeOperation("conditions", condition);
    this.detailForm.markAsDirty();
  }
  removeAction(action) {
    this.removeOperation("actions", action);
    this.detailForm.markAsDirty();
  }
  formArrayOf(key) {
    return this.detailForm.get(key);
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const input = this.getUpdatedPromotion({
      id: "",
      createdAt: "",
      updatedAt: "",
      startsAt: "",
      endsAt: "",
      name: "",
      description: "",
      couponCode: null,
      perCustomerUsageLimit: null,
      usageLimit: null,
      enabled: false,
      conditions: [],
      actions: [],
      translations: []
    }, this.detailForm, this.languageCode);
    this.dataService.promotion.createPromotion(input).subscribe(({
      createPromotion
    }) => {
      switch (createPromotion.__typename) {
        case "Promotion":
          this.notificationService.success(marker("common.notify-create-success"), {
            entity: "Promotion"
          });
          this.detailForm.markAsPristine();
          this.changeDetector.markForCheck();
          this.router.navigate(["../", createPromotion.id], {
            relativeTo: this.route
          });
          break;
        case "MissingConditionsError":
          this.notificationService.error(createPromotion.message);
          break;
      }
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "Promotion"
      });
    });
  }
  save() {
    if (!this.detailForm.dirty) {
      return;
    }
    combineLatest(this.entity$, this.languageCode$).pipe(take(1), mergeMap(([paymentMethod, languageCode]) => {
      const input = this.getUpdatedPromotion(paymentMethod, this.detailForm, languageCode);
      return this.dataService.promotion.updatePromotion(input);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Promotion"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Promotion"
      });
    });
  }
  /**
   * Given a PaymentMethod and the value of the detailForm, this method creates an updated copy of it which
   * can then be persisted to the API.
   */
  getUpdatedPromotion(promotion, formGroup, languageCode) {
    const formValue = formGroup.value;
    const input = createUpdatedTranslatable({
      translatable: promotion,
      updatedFields: formValue,
      customFieldConfig: this.customFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: promotion.name || "",
        description: promotion.description || ""
      }
    });
    return __spreadProps(__spreadValues({}, input), {
      conditions: this.mapOperationsToInputs(this.conditions, formValue.conditions),
      actions: this.mapOperationsToInputs(this.actions, formValue.actions)
    });
  }
  /**
   * Update the form values when the entity changes.
   */
  setFormValues(entity, languageCode) {
    const currentTranslation = findTranslation(entity, languageCode);
    this.detailForm.patchValue({
      name: currentTranslation?.name,
      description: currentTranslation?.description,
      enabled: entity.enabled,
      couponCode: entity.couponCode,
      perCustomerUsageLimit: entity.perCustomerUsageLimit,
      usageLimit: entity.usageLimit,
      startsAt: entity.startsAt,
      endsAt: entity.endsAt
    });
    entity.conditions.forEach((o) => {
      this.addOperation("conditions", o);
    });
    entity.actions.forEach((o) => this.addOperation("actions", o));
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), entity, currentTranslation);
    }
  }
  /**
   * Maps an array of conditions or actions to the input format expected by the GraphQL API.
   */
  mapOperationsToInputs(operations, formValueOperations) {
    return operations.map((o, i) => ({
      code: o.code,
      arguments: Object.values(formValueOperations[i].args).map((value, j) => ({
        name: o.args[j].name,
        value: encodeConfigArgValue(value)
      }))
    }));
  }
  /**
   * Adds a new condition or action to the promotion.
   */
  addOperation(key, operation) {
    const operationsArray = this.formArrayOf(key);
    const collection = key === "conditions" ? this.conditions : this.actions;
    const index = operationsArray.value.findIndex((o) => o.code === operation.code);
    if (index === -1) {
      const argsHash = operation.args.reduce((output, arg) => __spreadProps(__spreadValues({}, output), {
        [arg.name]: getConfigArgValue(arg.value) ?? this.getDefaultArgValue(key, operation, arg.name)
      }), {});
      operationsArray.push(this.formBuilder.control({
        code: operation.code,
        args: argsHash
      }));
      collection.push({
        code: operation.code,
        args: operation.args.map((a) => ({
          name: a.name,
          value: getConfigArgValue(a.value)
        }))
      });
    }
  }
  getDefaultArgValue(key, operation, argName) {
    const def = key === "conditions" ? this.allConditions.find((c) => c.code === operation.code) : this.allActions.find((a) => a.code === operation.code);
    if (def) {
      const argDef = def.args.find((a) => a.name === argName);
      if (argDef) {
        return getDefaultConfigArgValue(argDef);
      }
    }
    throw new Error(`Could not determine default value for "argName"`);
  }
  /**
   * Removes a condition or action from the promotion.
   */
  removeOperation(key, operation) {
    const operationsArray = this.formArrayOf(key);
    const collection = key === "conditions" ? this.conditions : this.actions;
    const index = operationsArray.value.findIndex((o) => o.code === operation.code);
    if (index !== -1) {
      operationsArray.removeAt(index);
      collection.splice(index, 1);
    }
  }
  static {
    this.ɵfac = function PromotionDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PromotionDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PromotionDetailComponent,
      selectors: [["vdr-promotion-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 63,
      vars: 73,
      consts: [["updateButton", ""], [1, "flex", "clr-align-items-center"], [3, "languageCodeChange", "disabled", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "promotion-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "vdrIfPermissions"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["formControlName", "description", 1, "form-grid-span", 3, "readonly", "label"], ["for", "startsAt", 3, "label"], ["formControlName", "startsAt"], ["for", "endsAt", 3, "label"], ["formControlName", "endsAt"], ["for", "couponCode", 3, "label"], ["id", "couponCode", "type", "text", "formControlName", "couponCode", 3, "readonly"], ["for", "perCustomerUsageLimit", 3, "label", "tooltip"], ["id", "perCustomerUsageLimit", "type", "number", "min", "1", "max", "999", "formControlName", "perCustomerUsageLimit", 3, "readonly"], ["for", "usageLimit", 3, "label", "tooltip"], ["id", "usageLimit", "type", "number", "min", "1", "max", "9999999", "formControlName", "usageLimit", 3, "readonly"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "promotion-detail", 3, "entity$", "detailForm"], ["formArrayName", "conditions", 3, "title"], [4, "ngFor", "ngForOf"], ["formArrayName", "actions", 3, "title"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], ["type", "checkbox", "clrToggle", "", "name", "enabled", "formControlName", "enabled"], [3, "entity"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Promotion", 3, "customFields", "customFieldsFormGroup", "readonly"], [3, "remove", "position", "readonly", "operation", "operationDefinition", "formControlName"], ["vdrDropdownTrigger", "", 1, "btn", "btn-outline"], ["shape", "plus"], ["vdrPosition", "bottom-left"], ["type", "button", "vdrDropdownItem", "", "class", "item-wrap", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "vdrDropdownItem", "", 1, "item-wrap", 3, "click"], [3, "remove", "position", "operation", "readonly", "operationDefinition", "formControlName"]],
      template: function PromotionDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "div", 1)(4, "vdr-language-selector", 2);
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "async");
          ɵɵpipe(7, "async");
          ɵɵlistener("languageCodeChange", function PromotionDetailComponent_Template_vdr_language_selector_languageCodeChange_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setLanguage($event));
          });
          ɵɵelementEnd()()();
          ɵɵelementStart(8, "vdr-ab-right");
          ɵɵelement(9, "vdr-action-bar-items", 3);
          ɵɵtemplate(10, PromotionDetailComponent_button_10_Template, 3, 4, "button", 4);
          ɵɵpipe(11, "async");
          ɵɵtemplate(12, PromotionDetailComponent_ng_template_12_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(14, "vdr-action-bar-dropdown-menu", 3);
          ɵɵelementEnd()()();
          ɵɵelementStart(15, "form", 5)(16, "vdr-page-detail-layout")(17, "vdr-page-detail-sidebar");
          ɵɵtemplate(18, PromotionDetailComponent_vdr_card_18_Template, 6, 3, "vdr-card", 6)(19, PromotionDetailComponent_vdr_card_19_Template, 2, 1, "vdr-card", 7);
          ɵɵpipe(20, "async");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-page-block")(22, "vdr-card")(23, "div", 8)(24, "vdr-form-field", 9);
          ɵɵpipe(25, "translate");
          ɵɵelement(26, "input", 10);
          ɵɵpipe(27, "hasPermission");
          ɵɵelementEnd();
          ɵɵelement(28, "vdr-rich-text-editor", 11);
          ɵɵpipe(29, "hasPermission");
          ɵɵpipe(30, "translate");
          ɵɵelementStart(31, "vdr-form-field", 12);
          ɵɵpipe(32, "translate");
          ɵɵelement(33, "vdr-datetime-picker", 13);
          ɵɵelementEnd();
          ɵɵelementStart(34, "vdr-form-field", 14);
          ɵɵpipe(35, "translate");
          ɵɵelement(36, "vdr-datetime-picker", 15);
          ɵɵelementEnd();
          ɵɵelementStart(37, "vdr-form-field", 16);
          ɵɵpipe(38, "translate");
          ɵɵelement(39, "input", 17);
          ɵɵpipe(40, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(41, "vdr-form-field", 18);
          ɵɵpipe(42, "translate");
          ɵɵpipe(43, "translate");
          ɵɵelement(44, "input", 19);
          ɵɵpipe(45, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(46, "vdr-form-field", 20);
          ɵɵpipe(47, "translate");
          ɵɵpipe(48, "translate");
          ɵɵelement(49, "input", 21);
          ɵɵpipe(50, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(51, PromotionDetailComponent_vdr_card_51_Template, 4, 8, "vdr-card", 22);
          ɵɵelement(52, "vdr-custom-detail-component-host", 23);
          ɵɵelementStart(53, "vdr-card", 24);
          ɵɵpipe(54, "translate");
          ɵɵtemplate(55, PromotionDetailComponent_div_55_Template, 3, 7, "div", 25);
          ɵɵelementStart(56, "div");
          ɵɵtemplate(57, PromotionDetailComponent_vdr_dropdown_57_Template, 7, 4, "vdr-dropdown", 6);
          ɵɵelementEnd()();
          ɵɵelementStart(58, "vdr-card", 26);
          ɵɵpipe(59, "translate");
          ɵɵtemplate(60, PromotionDetailComponent_div_60_Template, 3, 7, "div", 25);
          ɵɵelementStart(61, "div");
          ɵɵtemplate(62, PromotionDetailComponent_vdr_dropdown_62_Template, 7, 4, "vdr-dropdown", 6);
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          const updateButton_r16 = ɵɵreference(13);
          ɵɵadvance(4);
          ɵɵproperty("disabled", ɵɵpipeBind1(5, 31, ctx.isNew$))("availableLanguageCodes", ɵɵpipeBind1(6, 33, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(7, 35, ctx.languageCode$));
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(11, 37, ctx.isNew$))("ngIfElse", updateButton_r16);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("vdrIfPermissions", "UpdatePromotion");
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(20, 39, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(25, 41, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(27, 43, "UpdatePromotion"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(29, 45, "UpdatePromotion"))("label", ɵɵpipeBind1(30, 47, "common.description"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(32, 49, "marketing.starts-at"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(35, 51, "marketing.ends-at"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(38, 53, "marketing.coupon-code"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(40, 55, "UpdatePromotion"));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(42, 57, "marketing.per-customer-limit"))("tooltip", ɵɵpipeBind1(43, 59, "marketing.per-customer-limit-tooltip"));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(45, 61, "UpdatePromotion"));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(47, 63, "marketing.usage-limit"))("tooltip", ɵɵpipeBind1(48, 65, "marketing.usage-limit-tooltip"));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(50, 67, "UpdatePromotion"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(54, 69, "marketing.conditions"));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.conditions);
          ɵɵadvance(2);
          ɵɵproperty("vdrIfPermissions", "UpdatePromotion");
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(59, 71, "marketing.actions"));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.actions);
          ɵɵadvance(2);
          ɵɵproperty("vdrIfPermissions", "UpdatePromotion");
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ConfigurableInputComponent, FormFieldComponent, FormFieldControlDirective, LanguageSelectorComponent, RichTextEditorComponent, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, IfPermissionsDirective, ActionBarItemsComponent, DatetimePickerComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      styles: [".item-wrap[_ngcontent-%COMP%]{white-space:normal}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromotionDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-promotion-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left>
            <div class="flex clr-align-items-center">
                <vdr-language-selector
                    [disabled]="isNew$ | async"
                    [availableLanguageCodes]="availableLanguages$ | async"
                    [currentLanguageCode]="languageCode$ | async"
                    (languageCodeChange)="setLanguage($event)"
                ></vdr-language-selector>
            </div>
        </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="promotion-detail" />
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="!saveButtonEnabled()"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    class="btn btn-primary"
                    (click)="save()"
                    *vdrIfPermissions="'UpdatePromotion'"
                    [disabled]="!saveButtonEnabled()"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="promotion-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card *vdrIfPermissions="'UpdatePromotion'">
                <clr-toggle-wrapper>
                    <input type="checkbox" clrToggle name="enabled" formControlName="enabled" />
                    <label>{{ 'common.enabled' | translate }}</label>
                </clr-toggle-wrapper>
            </vdr-card>
            <vdr-card *ngIf="entity$ | async as entity">
                <vdr-page-entity-info [entity]="entity" />
            </vdr-card>
        </vdr-page-detail-sidebar>
        <vdr-page-block>
            <vdr-card>
                <div class="form-grid">
                    <vdr-form-field [label]="'common.name' | translate" for="name">
                        <input
                            id="name"
                            [readonly]="!('UpdatePromotion' | hasPermission)"
                            type="text"
                            formControlName="name"
                        />
                    </vdr-form-field>
                    <vdr-rich-text-editor
                        class="form-grid-span"
                        formControlName="description"
                        [readonly]="!('UpdatePromotion' | hasPermission)"
                        [label]="'common.description' | translate"
                    ></vdr-rich-text-editor>
                    <vdr-form-field [label]="'marketing.starts-at' | translate" for="startsAt">
                        <vdr-datetime-picker formControlName="startsAt"></vdr-datetime-picker>
                    </vdr-form-field>
                    <vdr-form-field [label]="'marketing.ends-at' | translate" for="endsAt">
                        <vdr-datetime-picker formControlName="endsAt"></vdr-datetime-picker>
                    </vdr-form-field>
                    <vdr-form-field [label]="'marketing.coupon-code' | translate" for="couponCode">
                        <input
                            id="couponCode"
                            [readonly]="!('UpdatePromotion' | hasPermission)"
                            type="text"
                            formControlName="couponCode"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'marketing.per-customer-limit' | translate"
                        [tooltip]="'marketing.per-customer-limit-tooltip' | translate"
                        for="perCustomerUsageLimit"
                    >
                        <input
                            id="perCustomerUsageLimit"
                            [readonly]="!('UpdatePromotion' | hasPermission)"
                            type="number"
                            min="1"
                            max="999"
                            formControlName="perCustomerUsageLimit"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'marketing.usage-limit' | translate"
                        [tooltip]="'marketing.usage-limit-tooltip' | translate"
                        for="usageLimit"
                    >
                        <input
                            id="usageLimit"
                            [readonly]="!('UpdatePromotion' | hasPermission)"
                            type="number"
                            min="1"
                            max="9999999"
                            formControlName="usageLimit"
                        />
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                [title]="'common.custom-fields' | translate"
                formGroupName="customFields"
                *ngIf="customFields.length"
            >
                <vdr-tabbed-custom-fields
                    entityName="Promotion"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                    [readonly]="!('UpdatePromotion' | hasPermission)"
                ></vdr-tabbed-custom-fields>
            </vdr-card>

            <vdr-custom-detail-component-host
                locationId="promotion-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>

            <vdr-card [title]="'marketing.conditions' | translate" formArrayName="conditions">
                <div *ngFor="let condition of conditions; index as i">
                    <vdr-configurable-input
                        (remove)="removeCondition($event)"
                        [position]="i"
                        [readonly]="!('UpdatePromotion' | hasPermission)"
                        [operation]="condition"
                        [operationDefinition]="getConditionDefinition(condition)"
                        [formControlName]="i"
                    ></vdr-configurable-input>
                </div>
                <div>
                    <vdr-dropdown *vdrIfPermissions="'UpdatePromotion'">
                        <button class="btn btn-outline" vdrDropdownTrigger>
                            <clr-icon shape="plus"></clr-icon>
                            {{ 'marketing.add-condition' | translate }}
                        </button>
                        <vdr-dropdown-menu vdrPosition="bottom-left">
                            <button
                                *ngFor="let condition of getAvailableConditions()"
                                type="button"
                                vdrDropdownItem
                                class="item-wrap"
                                (click)="addCondition(condition)"
                            >
                                {{ condition.description }}
                            </button>
                        </vdr-dropdown-menu>
                    </vdr-dropdown>
                </div>
            </vdr-card>
            <vdr-card [title]="'marketing.actions' | translate" formArrayName="actions">
                <div *ngFor="let action of actions; index as i">
                    <vdr-configurable-input
                        (remove)="removeAction($event)"
                        [position]="i"
                        [operation]="action"
                        [readonly]="!('UpdatePromotion' | hasPermission)"
                        [operationDefinition]="getActionDefinition(action)"
                        [formControlName]="i"
                    ></vdr-configurable-input>
                </div>
                <div>
                    <vdr-dropdown *vdrIfPermissions="'UpdatePromotion'">
                        <button class="btn btn-outline" vdrDropdownTrigger>
                            <clr-icon shape="plus"></clr-icon>
                            {{ 'marketing.add-action' | translate }}
                        </button>
                        <vdr-dropdown-menu vdrPosition="bottom-left">
                            <button
                                *ngFor="let action of getAvailableActions()"
                                type="button"
                                vdrDropdownItem
                                class="item-wrap"
                                (click)="addAction(action)"
                            >
                                {{ action.description }}
                            </button>
                        </vdr-dropdown-menu>
                    </vdr-dropdown>
                </div>
            </vdr-card>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`,
      styles: [".item-wrap{white-space:normal}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DataService
  }, {
    type: FormBuilder
  }, {
    type: NotificationService
  }], null);
})();
var ASSIGN_PROMOTIONS_TO_CHANNEL = gql`
    mutation AssignPromotionsToChannel($input: AssignPromotionsToChannelInput!) {
        assignPromotionsToChannel(input: $input) {
            id
            name
        }
    }
`;
var REMOVE_PROMOTIONS_FROM_CHANNEL = gql`
    mutation RemovePromotionsFromChannel($input: RemovePromotionsFromChannelInput!) {
        removePromotionsFromChannel(input: $input) {
            id
            name
        }
    }
`;
var deletePromotionsBulkAction = createBulkDeleteAction({
  location: "promotion-list",
  requiresPermission: Permission.DeletePromotion,
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.promotion.deletePromotions(ids).pipe(map((res) => res.deletePromotions))
});
var assignPromotionsToChannelBulkAction = createBulkAssignToChannelAction({
  location: "promotion-list",
  requiresPermission: Permission.UpdatePromotion,
  getItemName: (item) => item.name,
  bulkAssignToChannel: (dataService, promotionIds, channelIds) => {
    return channelIds.map((channelId) => dataService.mutate(AssignPromotionsToChannelDocument, {
      input: {
        channelId,
        promotionIds
      }
    }).pipe(map((res) => res.assignPromotionsToChannel)));
  }
});
var removePromotionsFromChannelBulkAction = createBulkRemoveFromChannelAction({
  location: "promotion-list",
  requiresPermission: Permission.DeleteCatalog,
  getItemName: (item) => item.name,
  bulkRemoveFromChannel: (dataService, promotionIds, channelId) => dataService.mutate(RemovePromotionsFromChannelDocument, {
    input: {
      channelId,
      promotionIds
    }
  }).pipe(map((res) => res.removePromotionsFromChannel))
});
var duplicatePromotionsBulkAction = {
  location: "promotion-list",
  label: marker("common.duplicate"),
  icon: "copy",
  onClick: ({
    injector,
    selection,
    hostComponent,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    modalService.fromComponent(DuplicateEntityDialogComponent, {
      locals: {
        entities: selection,
        entityName: "Promotion",
        title: marker("marketing.duplicate-promotions"),
        getEntityName: (entity) => entity.name
      }
    }).subscribe((result) => {
      if (result) {
        clearSelection();
        hostComponent.refresh();
      }
    });
  }
};
var GET_PROMOTION_LIST = gql`
    query GetPromotionList($options: PromotionListOptions) {
        promotions(options: $options) {
            items {
                ...Promotion
            }
            totalItems
        }
    }
    ${PROMOTION_FRAGMENT}
`;
var PromotionListComponent = class _PromotionListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "promotion-list";
    this.customFields = this.getCustomFieldConfig("Promotion");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilters([{
      name: "startsAt",
      type: {
        kind: "dateRange"
      },
      label: marker("marketing.starts-at"),
      filterField: "startsAt"
    }, {
      name: "endsAt",
      type: {
        kind: "dateRange"
      },
      label: marker("marketing.ends-at"),
      filterField: "endsAt"
    }, {
      name: "enabled",
      type: {
        kind: "boolean"
      },
      label: marker("common.enabled"),
      filterField: "enabled"
    }, {
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }, {
      name: "couponCode",
      type: {
        kind: "text"
      },
      label: marker("marketing.coupon-code"),
      filterField: "couponCode"
    }, {
      name: "desc",
      type: {
        kind: "text"
      },
      label: marker("common.description"),
      filterField: "description"
    }, {
      name: "perCustomerUsageLimit",
      type: {
        kind: "number"
      },
      label: marker("marketing.per-customer-limit"),
      filterField: "perCustomerUsageLimit"
    }, {
      name: "usageLimit",
      type: {
        kind: "number"
      },
      label: marker("marketing.usage-limit"),
      filterField: "usageLimit"
    }]).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSorts([{
      name: "createdAt"
    }, {
      name: "updatedAt"
    }, {
      name: "startsAt"
    }, {
      name: "endsAt"
    }, {
      name: "name"
    }, {
      name: "couponCode"
    }, {
      name: "perCustomerUsageLimit"
    }, {
      name: "usageLimit"
    }]).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetPromotionListDocument,
      getItems: (data) => data.promotions,
      setVariables: (skip, take2) => this.createQueryOptions(skip, take2, this.searchTermControl.value),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  createQueryOptions(skip, take2, searchTerm) {
    const filter = this.filters.createFilterInput();
    const sort = this.sorts.createSortInput();
    let filterOperator = LogicalOperator.AND;
    if (searchTerm) {
      filter.couponCode = {
        contains: searchTerm
      };
      filter.name = {
        contains: searchTerm
      };
      filterOperator = LogicalOperator.OR;
    }
    return {
      options: {
        skip,
        take: take2,
        filter,
        filterOperator,
        sort
      }
    };
  }
  static {
    this.ɵfac = function PromotionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PromotionListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PromotionListComponent,
      selectors: [["vdr-promotion-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 49,
      vars: 72,
      consts: [[3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "promotion-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "promotion-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "enabled", 3, "heading"], ["id", "coupon-code", 3, "heading", "sort"], ["id", "starts-at", 3, "heading", "sort"], ["id", "ends-at", 3, "heading", "sort"], ["id", "per-customer-limit", 3, "heading", "sort", "hiddenByDefault"], ["id", "usage-limit", 3, "heading", "sort", "hiddenByDefault"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success"], ["colorType", "warning"], [3, "customField", "sorts"]],
      template: function PromotionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 0);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵlistener("languageCodeChange", function PromotionListComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(6, "vdr-ab-right");
          ɵɵelement(7, "vdr-action-bar-items", 1);
          ɵɵtemplate(8, PromotionListComponent_a_8_Template, 4, 5, "a", 2);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "vdr-data-table-2", 3);
          ɵɵpipe(11, "async");
          ɵɵpipe(12, "async");
          ɵɵpipe(13, "async");
          ɵɵpipe(14, "async");
          ɵɵlistener("pageChange", function PromotionListComponent_Template_vdr_data_table_2_pageChange_10_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function PromotionListComponent_Template_vdr_data_table_2_itemsPerPageChange_10_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function PromotionListComponent_Template_vdr_data_table_2_visibleColumnsChange_10_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(15, "vdr-bulk-action-menu", 4)(16, "vdr-dt2-search", 5);
          ɵɵpipe(17, "translate");
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, PromotionListComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, PromotionListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, PromotionListComponent_ng_template_26_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, PromotionListComponent_ng_template_29_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 10);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, PromotionListComponent_ng_template_32_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 11);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, PromotionListComponent_ng_template_35_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(36, "vdr-dt2-column", 12);
          ɵɵpipe(37, "translate");
          ɵɵtemplate(38, PromotionListComponent_ng_template_38_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(39, "vdr-dt2-column", 13);
          ɵɵpipe(40, "translate");
          ɵɵtemplate(41, PromotionListComponent_ng_template_41_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(42, "vdr-dt2-column", 14);
          ɵɵpipe(43, "translate");
          ɵɵtemplate(44, PromotionListComponent_ng_template_44_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(45, "vdr-dt2-column", 15);
          ɵɵpipe(46, "translate");
          ɵɵtemplate(47, PromotionListComponent_ng_template_47_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(48, PromotionListComponent_vdr_dt2_custom_field_column_48_Template, 1, 2, "vdr-dt2-custom-field-column", 16);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(4, 38, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(5, 40, ctx.contentLanguage$));
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", "CreatePromotion");
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(11, 42, ctx.items$))("itemsPerPage", ɵɵpipeBind1(12, 44, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(13, 46, ctx.totalItems$))("currentPage", ɵɵpipeBind1(14, 48, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(17, 50, "marketing.search-by-name-or-coupon-code"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 52, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 54, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 56, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 58, "common.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 60, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 62, "marketing.coupon-code"))("sort", ctx.sorts.get("couponCode"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(37, 64, "marketing.starts-at"))("sort", ctx.sorts.get("startsAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(40, 66, "marketing.ends-at"))("sort", ctx.sorts.get("endsAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(43, 68, "marketing.per-customer-limit"))("sort", ctx.sorts.get("perCustomerUsageLimit"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(46, 70, "marketing.usage-limit"))("sort", ctx.sorts.get("usageLimit"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, LanguageSelectorComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: [".search-form[_ngcontent-%COMP%]{padding:0}.search-input[_ngcontent-%COMP%]{margin:6px 8px 0 0;min-width:200px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromotionListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-promotion-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left>
            <vdr-language-selector
                [availableLanguageCodes]="availableLanguages$ | async"
                [currentLanguageCode]="contentLanguage$ | async"
                (languageCodeChange)="setLanguage($event)"
            />
        </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="promotion-list" />
            <a class="btn btn-primary" [routerLink]="['./create']" *vdrIfPermissions="'CreatePromotion'">
                <clr-icon shape="plus"></clr-icon>
                {{ 'marketing.create-new-promotion' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="promotion-list" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<vdr-data-table-2
    [id]="dataTableListId"
    [items]="items$ | async"
    [itemsPerPage]="itemsPerPage$ | async"
    [totalItems]="totalItems$ | async"
    [currentPage]="currentPage$ | async"
    [filters]="filters"
    (pageChange)="setPageNumber($event)"
    (itemsPerPageChange)="setItemsPerPage($event)"
    (visibleColumnsChange)="setVisibleColumns($event)"
>
    <vdr-bulk-action-menu
        locationId="promotion-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'marketing.search-by-name-or-coupon-code' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-promotion="item">{{ promotion.id }}</ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate"
        id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-promotion="item">
            {{ promotion.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate"
        id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-promotion="item">
            {{ promotion.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.name' | translate"
        id="name"
        [optional]="false"
        [sort]="sorts.get('name')"
    >
        <ng-template let-promotion="item">
            <a class="button-ghost" [routerLink]="['./', promotion.id]"
                ><span> {{ promotion.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.enabled' | translate" id="enabled">
        <ng-template let-promotion="item">
            <vdr-chip *ngIf="promotion.enabled" colorType="success">{{
                'common.enabled' | translate
            }}</vdr-chip>
            <vdr-chip *ngIf="!promotion.enabled" colorType="warning">{{
                'common.disabled' | translate
            }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'marketing.coupon-code' | translate"
        id="coupon-code"
        [sort]="sorts.get('couponCode')"
    >
        <ng-template let-promotion="item">
            {{ promotion.couponCode }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'marketing.starts-at' | translate"
        id="starts-at"
        [sort]="sorts.get('startsAt')"
    >
        <ng-template let-promotion="item">
            {{ promotion.startsAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'marketing.ends-at' | translate" id="ends-at" [sort]="sorts.get('endsAt')">
        <ng-template let-promotion="item">
            {{ promotion.endsAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'marketing.per-customer-limit' | translate"
        id="per-customer-limit"
        [sort]="sorts.get('perCustomerUsageLimit')"
        [hiddenByDefault]="true"
    >
        <ng-template let-promotion="item">
            {{ promotion.perCustomerUsageLimit }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'marketing.usage-limit' | translate"
        id="usage-limit"
        [sort]="sorts.get('usageLimit')"
        [hiddenByDefault]="true"
    >
        <ng-template let-promotion="item">
            {{ promotion.usageLimit }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let customField of customFields"
        [customField]="customField"
        [sorts]="sorts"
    />
</vdr-data-table-2>
`,
      styles: [".search-form{padding:0}.search-input{margin:6px 8px 0 0;min-width:200px}\n"]
    }]
  }], () => [], null);
})();
var createRoutes = (pageService) => [{
  path: "promotions",
  component: PageComponent,
  data: {
    locationId: "promotion-list",
    breadcrumb: marker("breadcrumb.promotions")
  },
  children: pageService.getPageTabRoutes("promotion-list")
}, {
  path: "promotions/:id",
  component: PageComponent,
  data: {
    locationId: "promotion-detail",
    breadcrumb: {
      label: marker("breadcrumb.promotions"),
      link: ["../", "promotions"]
    }
  },
  children: pageService.getPageTabRoutes("promotion-detail")
}];
function promotionBreadcrumb(data, params) {
  return detailBreadcrumb({
    entity: data.entity,
    id: params.id,
    breadcrumbKey: "breadcrumb.promotions",
    getName: (promotion) => promotion.name,
    route: "promotions"
  });
}
var MarketingModule = class _MarketingModule {
  static {
    this.hasRegisteredTabsAndBulkActions = false;
  }
  constructor(bulkActionRegistryService, pageService) {
    if (_MarketingModule.hasRegisteredTabsAndBulkActions) {
      return;
    }
    bulkActionRegistryService.registerBulkAction(assignPromotionsToChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(duplicatePromotionsBulkAction);
    bulkActionRegistryService.registerBulkAction(removePromotionsFromChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(deletePromotionsBulkAction);
    pageService.registerPageTab({
      priority: 0,
      location: "promotion-list",
      tab: marker("breadcrumb.promotions"),
      route: "",
      component: PromotionListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "promotion-detail",
      tab: marker("marketing.promotion"),
      route: "",
      component: detailComponentWithResolver({
        component: PromotionDetailComponent,
        query: GetPromotionDetailDocument,
        entityKey: "promotion",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("marketing.create-new-promotion"),
          link: [entity?.id]
        }]
      })
    });
    _MarketingModule.hasRegisteredTabsAndBulkActions = true;
  }
  static {
    this.ɵfac = function MarketingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarketingModule)(ɵɵinject(BulkActionRegistryService), ɵɵinject(PageService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MarketingModule,
      declarations: [PromotionListComponent, PromotionDetailComponent],
      imports: [SharedModule, RouterModule, SharedModule, AsyncPipe, SharedModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: ROUTES,
        useFactory: (pageService) => createRoutes(pageService),
        multi: true,
        deps: [PageService]
      }],
      imports: [SharedModule, RouterModule.forChild([]), SharedModule, SharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarketingModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, RouterModule.forChild([]), SharedModule, AsyncPipe, SharedModule],
      providers: [{
        provide: ROUTES,
        useFactory: (pageService) => createRoutes(pageService),
        multi: true,
        deps: [PageService]
      }],
      declarations: [PromotionListComponent, PromotionDetailComponent]
    }]
  }], () => [{
    type: BulkActionRegistryService
  }, {
    type: PageService
  }], null);
})();
export {
  GET_PROMOTION_DETAIL,
  GET_PROMOTION_LIST,
  MarketingModule,
  PromotionDetailComponent,
  PromotionListComponent,
  assignPromotionsToChannelBulkAction,
  createRoutes,
  deletePromotionsBulkAction,
  duplicatePromotionsBulkAction,
  promotionBreadcrumb,
  removePromotionsFromChannelBulkAction
};
//# sourceMappingURL=@vendure_admin-ui_marketing.js.map
