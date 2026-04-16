import {
  ADDRESS_FRAGMENT,
  ActionBarComponent,
  ActionBarDropdownMenuComponent,
  ActionBarItemsComponent,
  ActionBarLeftComponent,
  ActionBarRightComponent,
  AddressFormComponent,
  AdjustmentType,
  AffixedInputComponent,
  AssetPreviewPipe,
  BulkActionMenuComponent,
  CardComponent,
  CardControlsDirective,
  ChannelService,
  ChipComponent,
  ConfigurableInputComponent,
  CurrencyInputComponent,
  CustomDetailComponentHostComponent,
  CustomFieldControlComponent,
  CustomFieldLabelPipe,
  CustomerLabelComponent,
  DataService,
  DataTable2ColumnComponent,
  DataTable2Component,
  DataTable2SearchComponent,
  DataTableColumnPickerComponent,
  DataTableCustomFieldColumnComponent,
  DataTableFiltersComponent,
  DeletionResult,
  DialogButtonsDirective,
  DialogTitleDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuComponent,
  DropdownTriggerDirective,
  EditNoteDialogComponent,
  EmptyPlaceholderComponent,
  FormFieldComponent,
  FormFieldControlDirective,
  FormattedAddressComponent,
  GetAddManualPaymentMethodListDocument,
  GetCouponCodeSelectorPromotionListDocument,
  GetCustomerAddressesDocument,
  GetOrderListDocument,
  GlobalFlag,
  HasPermissionPipe,
  HistoryEntryComponentService,
  HistoryEntryDetailComponent,
  HistoryEntryType,
  I18nService,
  IfPermissionsDirective,
  LabeledDataComponent,
  LocaleCurrencyPipe,
  LocaleDatePipe,
  LogicalOperator,
  ModalService,
  NotificationService,
  ORDER_DETAIL_FRAGMENT,
  ObjectTreeComponent,
  OrderDetailQueryDocument,
  OrderStateLabelComponent,
  OrderType,
  PageBlockComponent,
  PageComponent,
  PageDetailLayoutComponent,
  PageDetailSidebarComponent,
  PageEntityInfoComponent,
  PageService,
  ProductVariantSelectorComponent,
  RadioCardComponent,
  RadioCardFieldsetComponent,
  SelectToggleComponent,
  ServerConfigService,
  SetOrderCustomerDocument,
  SharedModule,
  SortOrder,
  StateI18nTokenPipe,
  TabbedCustomFieldsComponent,
  TimeAgoPipe,
  TimelineEntryComponent,
  TypedBaseDetailComponent,
  TypedBaseListComponent,
  UiExtensionPointComponent,
  configurableDefinitionToInstance,
  configurableOperationValueIsValid,
  detailComponentWithResolver,
  getAppConfig,
  getCustomFieldsDefaults,
  getOrderStateTranslationToken,
  gql,
  require_pick,
  require_shared_constants,
  require_shared_utils,
  require_simple_deep_clone,
  toConfigurableOperationInput,
  transformRelationCustomFieldInputs
} from "./chunk-YDQAHX43.js";
import {
  ActiveOompaLoompa,
  ClrAlert,
  ClrAlertItem,
  ClrCheckbox,
  ClrCheckboxWrapper,
  ClrIconCustomTag,
  ClrIfActive,
  ClrInput,
  ClrInputContainer,
  ClrLabel,
  ClrRadio,
  ClrRadioWrapper,
  ClrTab,
  ClrTabContent,
  ClrTabLink,
  ClrTabs,
  TabsWillyWonka
} from "./chunk-SWTGRTQU.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent
} from "./chunk-QP2DF7NU.js";
import {
  TranslatePipe
} from "./chunk-NCKUJY74.js";
import {
  PaginatePipe
} from "./chunk-ZBGAUCDP.js";
import "./chunk-IG62BV2I.js";
import "./chunk-3PLGJBEQ.js";
import "./chunk-DCTM64NI.js";
import {
  Dir
} from "./chunk-GV6YQ3QV.js";
import "./chunk-GIMEV65A.js";
import "./chunk-5QDPBDBW.js";
import "./chunk-MXLQ55RW.js";
import "./chunk-7RVA7R7J.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-XNNVMMYZ.js";
import {
  ROUTES,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-A2BPDF5Y.js";
import "./chunk-FRAMVYFW.js";
import {
  AsyncPipe,
  CurrencyPipe,
  DecimalPipe,
  NgClass,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  PercentPipe
} from "./chunk-3WBC65NO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OXIDPESK.js";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  combineLatest,
  concat,
  debounceTime,
  delay,
  distinctUntilChanged,
  forkJoin,
  map,
  mapTo,
  of,
  retryWhen,
  shareReplay,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-OGZ4D63M.js";
import {
  marker
} from "./chunk-D3BILYUK.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TXDUYLVM.js";

// ../../node_modules/@vendure/admin-ui/fesm2022/vendure-admin-ui-order.mjs
var import_shared_utils = __toESM(require_shared_utils(), 1);
var import_pick = __toESM(require_pick(), 1);
var import_shared_constants = __toESM(require_shared_constants(), 1);
var import_simple_deep_clone = __toESM(require_simple_deep_clone(), 1);
function AddManualPaymentDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.add-payment-to-order"));
  }
}
function AddManualPaymentDialogComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function AddManualPaymentDialogComponent_ng_template_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 8);
    ɵɵlistener("click", function AddManualPaymentDialogComponent_ng_template_9_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submit());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵpipe(6, "localeCurrency");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 4, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.form.invalid || ctx_r1.form.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(5, 6, "order.add-payment"), " (", ɵɵpipeBind2(6, 8, ctx_r1.outstandingAmount, ctx_r1.currencyCode), ") ");
  }
}
function CancelOrderDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.cancel-order"));
  }
}
function CancelOrderDialogComponent_tr_22_input_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 19);
    ɵɵtwoWayListener("ngModelChange", function CancelOrderDialogComponent_tr_22_input_14_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const line_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.lineQuantities[line_r2.id], $event) || (ctx_r2.lineQuantities[line_r2.id] = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("input", function CancelOrderDialogComponent_tr_22_input_14_Template_input_input_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.checkIfAllSelected());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵtwoWayProperty("ngModel", ctx_r2.lineQuantities[line_r2.id]);
    ɵɵproperty("disabled", ctx_r2.cancelAll)("max", line_r2.quantity);
  }
}
function CancelOrderDialogComponent_tr_22_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate(line_r2.quantity);
  }
}
function CancelOrderDialogComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 11)(1, "td", 12);
    ɵɵelement(2, "img", 13);
    ɵɵpipe(3, "assetPreview");
    ɵɵelementEnd();
    ɵɵelementStart(4, "td", 14);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "td", 15);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "td", 16);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "td", 16);
    ɵɵtext(11);
    ɵɵpipe(12, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(13, "td", 17);
    ɵɵtemplate(14, CancelOrderDialogComponent_tr_22_input_14_Template, 1, 3, "input", 18)(15, CancelOrderDialogComponent_tr_22_ng_template_15_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const nonEditable_r4 = ɵɵreference(16);
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("is-disabled", ctx_r2.cancelAll)("is-cancelled", line_r2.quantity === 0);
    ɵɵadvance(2);
    ɵɵproperty("src", ɵɵpipeBind2(3, 11, line_r2.featuredAsset, "tiny"), ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵtextInterpolate(line_r2.productVariant.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r2.productVariant.sku);
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r2.quantity);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(12, 14, line_r2.unitPriceWithTax, ctx_r2.order.currencyCode), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", line_r2.quantity > 0 && !ctx_r2.order.active)("ngIfElse", nonEditable_r4);
  }
}
function CancelOrderDialogComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "clr-radio-wrapper")(2, "input", 20);
    ɵɵtwoWayListener("ngModelChange", function CancelOrderDialogComponent_ng_container_24_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.cancelAll, $event) || (ctx_r2.cancelAll = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function CancelOrderDialogComponent_ng_container_24_Template_input_ngModelChange_2_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.radioChanged());
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label");
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "clr-radio-wrapper")(7, "input", 20);
    ɵɵtwoWayListener("ngModelChange", function CancelOrderDialogComponent_ng_container_24_Template_input_ngModelChange_7_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.cancelAll, $event) || (ctx_r2.cancelAll = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function CancelOrderDialogComponent_ng_container_24_Template_input_ngModelChange_7_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.radioChanged());
    });
    ɵɵelementEnd();
    ɵɵelementStart(8, "label");
    ɵɵtext(9);
    ɵɵpipe(10, "translate");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("value", true);
    ɵɵtwoWayProperty("ngModel", ctx_r2.cancelAll);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 6, "order.cancel-entire-order"));
    ɵɵadvance(3);
    ɵɵproperty("value", false);
    ɵɵtwoWayProperty("ngModel", ctx_r2.cancelAll);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 8, "order.cancel-specified-items"));
  }
}
function CancelOrderDialogComponent_ng_template_29_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.cancel-selected-items"), " ");
  }
}
function CancelOrderDialogComponent_ng_template_29_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.cancel-order"), " ");
  }
}
function CancelOrderDialogComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵlistener("click", function CancelOrderDialogComponent_ng_template_29_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 22);
    ɵɵlistener("click", function CancelOrderDialogComponent_ng_template_29_Template_button_click_3_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.select());
    });
    ɵɵtemplate(4, CancelOrderDialogComponent_ng_template_29_ng_container_4_Template, 3, 3, "ng-container", 7)(5, CancelOrderDialogComponent_ng_template_29_ng_container_5_Template, 3, 3, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 4, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r2.reason || !ctx_r2.order.active && ctx_r2.selectionCount === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.order.active);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.order.active);
  }
}
function CouponCodeSelectorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "vdr-chip", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r1.code);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r1.promotionName);
  }
}
function SelectAddressDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.select-address"));
  }
}
function SelectAddressDialogComponent_clr_tabs_1_clr_tab_1_ng_template_4_vdr_radio_card_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-radio-card", 7);
    ɵɵelement(1, "vdr-formatted-address", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const address_r5 = ctx.$implicit;
    ɵɵproperty("item", address_r5);
    ɵɵadvance();
    ɵɵproperty("address", address_r5);
  }
}
function SelectAddressDialogComponent_clr_tabs_1_clr_tab_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "clr-tab-content")(1, "vdr-radio-card-fieldset", 5);
    ɵɵlistener("selectItem", function SelectAddressDialogComponent_clr_tabs_1_clr_tab_1_ng_template_4_Template_vdr_radio_card_fieldset_selectItem_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.selectedAddress = $event);
    });
    ɵɵtemplate(2, SelectAddressDialogComponent_clr_tabs_1_clr_tab_1_ng_template_4_vdr_radio_card_2_Template, 2, 2, "vdr-radio-card", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const addresses_r6 = ɵɵnextContext(2).ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("idFn", ctx_r3.addressIdFn)("selectedItemId", ctx_r3.selectedAddress && ctx_r3.addressIdFn(ctx_r3.selectedAddress));
    ɵɵadvance();
    ɵɵproperty("ngForOf", addresses_r6);
  }
}
function SelectAddressDialogComponent_clr_tabs_1_clr_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "clr-tab")(1, "button", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, SelectAddressDialogComponent_clr_tabs_1_clr_tab_1_ng_template_4_Template, 3, 3, "ng-template", 4);
    ɵɵtwoWayListener("clrIfActiveChange", function SelectAddressDialogComponent_clr_tabs_1_clr_tab_1_Template_ng_template_clrIfActiveChange_4_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r3.useExisting, $event) || (ctx_r3.useExisting = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "order.existing-address"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("clrIfActive", ctx_r3.useExisting);
  }
}
function SelectAddressDialogComponent_clr_tabs_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-tab-content");
    ɵɵelement(1, "vdr-address-form", 9);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r3.addressForm)("availableCountries", ɵɵpipeBind1(2, 2, ctx_r3.availableCountries$));
  }
}
function SelectAddressDialogComponent_clr_tabs_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "clr-tabs");
    ɵɵtemplate(1, SelectAddressDialogComponent_clr_tabs_1_clr_tab_1_Template, 5, 4, "clr-tab", 1);
    ɵɵelementStart(2, "clr-tab")(3, "button", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(6, SelectAddressDialogComponent_clr_tabs_1_ng_template_6_Template, 3, 4, "ng-template", 4);
    ɵɵtwoWayListener("clrIfActiveChange", function SelectAddressDialogComponent_clr_tabs_1_Template_ng_template_clrIfActiveChange_6_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r3.createNew, $event) || (ctx_r3.createNew = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const addresses_r6 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.customerId && addresses_r6.length);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 3, "customer.create-new-address"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("clrIfActive", ctx_r3.createNew);
  }
}
function SelectAddressDialogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function SelectAddressDialogComponent_ng_template_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 11);
    ɵɵlistener("click", function SelectAddressDialogComponent_ng_template_3_Template_button_click_3_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.select());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r3.useExisting && !ctx_r3.selectedAddress || ctx_r3.createNew && ctx_r3.addressForm.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.okay"), " ");
  }
}
function SelectCustomerDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, ctx_r0.title));
  }
}
function SelectCustomerDialogComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SelectCustomerDialogComponent_ng_container_1_vdr_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-form-field", 7);
    ɵɵpipe(1, "translate");
    ɵɵelementStart(2, "textarea", 8);
    ɵɵtwoWayListener("ngModelChange", function SelectCustomerDialogComponent_ng_container_1_vdr_form_field_2_Template_textarea_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r0.note, $event) || (ctx_r0.note = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "common.add-note"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r0.note);
  }
}
function SelectCustomerDialogComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectCustomerDialogComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 5)(2, SelectCustomerDialogComponent_ng_container_1_vdr_form_field_2_Template, 3, 4, "vdr-form-field", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const customerSelect_r3 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", customerSelect_r3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeNoteInput);
  }
}
function SelectCustomerDialogComponent_clr_tabs_2_ng_template_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SelectCustomerDialogComponent_clr_tabs_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-tab-content")(1, "div", 12);
    ɵɵtemplate(2, SelectCustomerDialogComponent_clr_tabs_2_ng_template_5_ng_container_2_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const customerSelect_r3 = ɵɵreference(4);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", customerSelect_r3);
  }
}
function SelectCustomerDialogComponent_clr_tabs_2_clr_tab_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-tab-content")(1, "form", 13)(2, "vdr-form-field", 14);
    ɵɵpipe(3, "translate");
    ɵɵelement(4, "input", 15);
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-form-field", 16);
    ɵɵpipe(6, "translate");
    ɵɵelement(7, "input", 17);
    ɵɵelementEnd();
    ɵɵelementStart(8, "vdr-form-field", 18);
    ɵɵpipe(9, "translate");
    ɵɵelement(10, "input", 19);
    ɵɵelementEnd();
    ɵɵelementStart(11, "vdr-form-field", 20);
    ɵɵpipe(12, "translate");
    ɵɵelement(13, "input", 21);
    ɵɵelementEnd();
    ɵɵelementStart(14, "vdr-form-field", 22);
    ɵɵpipe(15, "translate");
    ɵɵelement(16, "input", 23);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r0.customerForm);
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(3, 6, "customer.title"));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(6, 8, "customer.first-name"));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(9, 10, "customer.last-name"));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(12, 12, "customer.email-address"));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(15, 14, "customer.phone-number"));
  }
}
function SelectCustomerDialogComponent_clr_tabs_2_clr_tab_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "clr-tab")(1, "button", 10);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, SelectCustomerDialogComponent_clr_tabs_2_clr_tab_6_ng_template_4_Template, 17, 16, "ng-template", 11);
    ɵɵtwoWayListener("clrIfActiveChange", function SelectCustomerDialogComponent_clr_tabs_2_clr_tab_6_Template_ng_template_clrIfActiveChange_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r0.createNew, $event) || (ctx_r0.createNew = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "customer.create-new-customer"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("clrIfActive", ctx_r0.createNew);
  }
}
function SelectCustomerDialogComponent_clr_tabs_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "clr-tabs", 9)(1, "clr-tab")(2, "button", 10);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(5, SelectCustomerDialogComponent_clr_tabs_2_ng_template_5_Template, 3, 1, "ng-template", 11);
    ɵɵtwoWayListener("clrIfActiveChange", function SelectCustomerDialogComponent_clr_tabs_2_Template_ng_template_clrIfActiveChange_5_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r0.useExisting, $event) || (ctx_r0.useExisting = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵtemplate(6, SelectCustomerDialogComponent_clr_tabs_2_clr_tab_6_Template, 5, 4, "clr-tab", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, "order.existing-customer"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("clrIfActive", ctx_r0.useExisting);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.canCreateNew);
  }
}
function SelectCustomerDialogComponent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 27);
    ɵɵelement(1, "clr-icon", 28);
    ɵɵelementStart(2, "span", 29);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-chip");
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    ɵɵadvance(3);
    ɵɵtextInterpolate2("", item_r7.firstName, " ", item_r7.lastName, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r7.emailAddress);
  }
}
function SelectCustomerDialogComponent_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 27);
    ɵɵelement(1, "clr-icon", 28);
    ɵɵelementStart(2, "span", 29);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-chip");
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.item;
    ɵɵadvance(3);
    ɵɵtextInterpolate2("", item_r8.firstName, " ", item_r8.lastName, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r8.emailAddress);
  }
}
function SelectCustomerDialogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ng-select", 24);
    ɵɵpipe(1, "async");
    ɵɵtwoWayListener("ngModelChange", function SelectCustomerDialogComponent_ng_template_3_Template_ng_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r0.selectedCustomer, $event) || (ctx_r0.selectedCustomer = $event);
      return ɵɵresetView($event);
    });
    ɵɵtemplate(2, SelectCustomerDialogComponent_ng_template_3_ng_template_2_Template, 6, 3, "ng-template", 25)(3, SelectCustomerDialogComponent_ng_template_3_ng_template_3_Template, 6, 3, "ng-template", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("items", ɵɵpipeBind1(1, 9, ctx_r0.customers$))("addTag", false)("multiple", true)("hideSelected", true)("trackByFn", ctx_r0.trackByFn)("minTermLength", 2)("loading", ctx_r0.isLoading)("typeahead", ctx_r0.input$);
    ɵɵtwoWayProperty("ngModel", ctx_r0.selectedCustomer);
  }
}
function SelectCustomerDialogComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function SelectCustomerDialogComponent_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 31);
    ɵɵlistener("click", function SelectCustomerDialogComponent_ng_template_5_Template_button_click_3_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.select());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r0.useExisting && ctx_r0.selectedCustomer.length === 0 || ctx_r0.createNew && ctx_r0.customerForm.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.okay"), " ");
  }
}
function SelectShippingMethodDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.select-shipping-method"));
  }
}
function SelectShippingMethodDialogComponent_vdr_radio_card_2_vdr_object_tree_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-object-tree", 9);
  }
  if (rf & 2) {
    const quote_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("value", quote_r1.metadata);
  }
}
function SelectShippingMethodDialogComponent_vdr_radio_card_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-radio-card", 4)(1, "div", 5)(2, "vdr-labeled-data", 6);
    ɵɵpipe(3, "translate");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 7)(6, "vdr-labeled-data", 6);
    ɵɵpipe(7, "translate");
    ɵɵtext(8);
    ɵɵpipe(9, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(10, "vdr-labeled-data", 6);
    ɵɵpipe(11, "translate");
    ɵɵtext(12);
    ɵɵpipe(13, "localeCurrency");
    ɵɵelementEnd()();
    ɵɵtemplate(14, SelectShippingMethodDialogComponent_vdr_radio_card_2_vdr_object_tree_14_Template, 1, 1, "vdr-object-tree", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const quote_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("item", quote_r1);
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(3, 8, "settings.shipping-method"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", quote_r1.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(7, 10, "common.price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(9, 12, quote_r1.price, ctx_r1.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(11, 15, "common.price-with-tax"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(13, 17, quote_r1.priceWithTax, ctx_r1.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", quote_r1.metadata);
  }
}
function SelectShippingMethodDialogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function SelectShippingMethodDialogComponent_ng_template_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 11);
    ɵɵlistener("click", function SelectShippingMethodDialogComponent_ng_template_3_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.select());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r1.selectedMethod);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.okay"), " ");
  }
}
var _c0 = (a0) => ({
  state: a0
});
function OrderStateSelectDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.select-state"));
  }
}
function OrderStateSelectDialogComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵpipe(2, "stateI18nToken");
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const state_r1 = ctx.$implicit;
    ɵɵproperty("value", state_r1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, ɵɵpipeBind1(2, 2, state_r1)), " ");
  }
}
function OrderStateSelectDialogComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function OrderStateSelectDialogComponent_ng_template_7_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "common.cancel"), " ");
  }
}
function OrderStateSelectDialogComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵtemplate(0, OrderStateSelectDialogComponent_ng_template_7_button_0_Template, 3, 3, "button", 5);
    ɵɵelementStart(1, "button", 6);
    ɵɵlistener("click", function OrderStateSelectDialogComponent_ng_template_7_Template_button_click_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.select());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "stateI18nToken");
    ɵɵpipe(4, "translate");
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r3.cancellable);
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r3.selectedState);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 7, "order.transition-to-state", ɵɵpureFunction1(10, _c0, ɵɵpipeBind1(4, 5, ɵɵpipeBind1(3, 3, ctx_r3.selectedState)))), " ");
  }
}
function OrderCustomFieldsCardComponent_div_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function OrderCustomFieldsCardComponent_div_0_button_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.editable = true);
    });
    ɵɵelement(1, "clr-icon", 10);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "common.edit"), " ");
  }
}
function OrderCustomFieldsCardComponent_div_0_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function OrderCustomFieldsCardComponent_div_0_button_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onUpdateClick());
    });
    ɵɵelement(1, "clr-icon", 12);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.customFieldForm.pristine || ctx_r1.customFieldForm.invalid);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "common.update"), " ");
  }
}
function OrderCustomFieldsCardComponent_div_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function OrderCustomFieldsCardComponent_div_0_button_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCancelClick());
    });
    ɵɵelement(1, "clr-icon", 13);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "common.cancel"), " ");
  }
}
function OrderCustomFieldsCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 3)(5, "div", 4);
    ɵɵelement(6, "vdr-tabbed-custom-fields", 5);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 6);
    ɵɵtemplate(8, OrderCustomFieldsCardComponent_div_0_button_8_Template, 4, 3, "button", 7)(9, OrderCustomFieldsCardComponent_div_0_button_9_Template, 4, 4, "button", 8)(10, OrderCustomFieldsCardComponent_div_0_button_10_Template, 4, 3, "button", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 10, "common.custom-fields"), " ");
    ɵɵadvance(3);
    ɵɵclassProp("editable", ctx_r1.editable);
    ɵɵadvance();
    ɵɵproperty("customFields", ctx_r1.customFieldsConfig)("customFieldsFormGroup", ctx_r1.customFieldForm)("readonly", !ctx_r1.editable)("compact", true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.editable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.editable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.editable);
  }
}
var _c1 = (a0, a1) => ({
  total: a0,
  count: a1
});
var _c2 = (a0) => ({
  count: a0
});
function LineFulfillmentComponent_vdr_dropdown_0_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 9);
  }
}
function LineFulfillmentComponent_vdr_dropdown_0_clr_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 10);
  }
}
function LineFulfillmentComponent_vdr_dropdown_0_clr_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 11);
  }
}
function LineFulfillmentComponent_vdr_dropdown_0_label_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.line-fulfillment-all"), " ");
  }
}
function LineFulfillmentComponent_vdr_dropdown_0_label_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "order.line-fulfillment-partial", ɵɵpureFunction2(4, _c1, ctx_r0.line.quantity, ctx_r0.fulfilledCount)), " ");
  }
}
function LineFulfillmentComponent_vdr_dropdown_0_label_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.line-fulfillment-none"), " ");
  }
}
function LineFulfillmentComponent_vdr_dropdown_0_div_9_vdr_labeled_data_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 15);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.tracking-code"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r2.fulfillment.trackingCode, " ");
  }
}
function LineFulfillmentComponent_vdr_dropdown_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "div", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-labeled-data", 15);
    ɵɵpipe(6, "translate");
    ɵɵtext(7);
    ɵɵpipe(8, "localeDate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "vdr-labeled-data", 15);
    ɵɵpipe(10, "translate");
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵtemplate(12, LineFulfillmentComponent_vdr_dropdown_0_div_9_vdr_labeled_data_12_Template, 3, 4, "vdr-labeled-data", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate3(" ", ɵɵpipeBind1(3, 8, "order.fulfillment"), " #", item_r2.fulfillment.id, " (", ɵɵpipeBind2(4, 10, "order.item-count", ɵɵpureFunction1(20, _c2, item_r2.count)), ") ");
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(6, 13, "common.created-at"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(8, 15, item_r2.fulfillment.createdAt, "medium"), " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(10, 18, "order.fulfillment-method"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r2.fulfillment.method, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.fulfillment.trackingCode);
  }
}
function LineFulfillmentComponent_vdr_dropdown_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown", 1)(1, "button", 2);
    ɵɵtemplate(2, LineFulfillmentComponent_vdr_dropdown_0_clr_icon_2_Template, 1, 0, "clr-icon", 3)(3, LineFulfillmentComponent_vdr_dropdown_0_clr_icon_3_Template, 1, 0, "clr-icon", 4)(4, LineFulfillmentComponent_vdr_dropdown_0_clr_icon_4_Template, 1, 0, "clr-icon", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-dropdown-menu", 6);
    ɵɵtemplate(6, LineFulfillmentComponent_vdr_dropdown_0_label_6_Template, 3, 3, "label", 7)(7, LineFulfillmentComponent_vdr_dropdown_0_label_7_Template, 3, 7, "label", 7)(8, LineFulfillmentComponent_vdr_dropdown_0_label_8_Template, 3, 3, "label", 7)(9, LineFulfillmentComponent_vdr_dropdown_0_div_9_Template, 13, 22, "div", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.fulfillmentStatus === "full");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.fulfillmentStatus === "partial");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.fulfillmentStatus === "none");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.fulfillmentStatus === "full");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.fulfillmentStatus === "partial");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.fulfillmentStatus === "none");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.fulfillments);
  }
}
function LineRefundsComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "clr-icon", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind2(1, 1, "order.refunded-count", ɵɵpureFunction1(4, _c2, ctx_r0.getRefundedCount())));
  }
}
var _c3 = [[["vdr-bulk-action-menu"]]];
var _c4 = ["vdr-bulk-action-menu"];
var _c5 = (a0, a1, a2, a3) => ({
  id: a0,
  itemsPerPage: a1,
  currentPage: a2,
  totalItems: a3
});
var _c6 = (a0) => ({
  rowItem: a0
});
var _c7 = (a0, a1) => ({
  item: a0,
  index: a1
});
function OrderDataTableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 19)(1, "input", 20);
    ɵɵlistener("change", function OrderDataTableComponent_th_6_Template_input_change_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onToggleAllClick());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r1.selectionManager == null ? null : ctx_r1.selectionManager.areAllCurrentItemsSelected());
  }
}
function OrderDataTableComponent_th_7_div_5_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 30);
  }
}
function OrderDataTableComponent_th_7_div_5_clr_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 31);
  }
}
function OrderDataTableComponent_th_7_div_5_clr_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 32);
  }
}
function OrderDataTableComponent_th_7_div_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sort_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate(sort_r4.sortOrder);
  }
}
function OrderDataTableComponent_th_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24)(1, "button", 25);
    ɵɵlistener("click", function OrderDataTableComponent_th_7_div_5_Template_button_click_1_listener() {
      const sort_r4 = ɵɵrestoreView(_r3).ngIf;
      return ɵɵresetView(sort_r4.toggleSortOrder());
    });
    ɵɵtemplate(2, OrderDataTableComponent_th_7_div_5_clr_icon_2_Template, 1, 0, "clr-icon", 26)(3, OrderDataTableComponent_th_7_div_5_clr_icon_3_Template, 1, 0, "clr-icon", 27)(4, OrderDataTableComponent_th_7_div_5_clr_icon_4_Template, 1, 0, "clr-icon", 28);
    ɵɵelementEnd();
    ɵɵtemplate(5, OrderDataTableComponent_th_7_div_5_div_5_Template, 2, 1, "div", 29);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sort_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵclassProp("active", sort_r4.sortOrder);
    ɵɵadvance();
    ɵɵproperty("ngIf", !sort_r4.sortOrder);
    ɵɵadvance();
    ɵɵproperty("ngIf", sort_r4.sortOrder === "ASC");
    ɵɵadvance();
    ɵɵproperty("ngIf", sort_r4.sortOrder === "DESC");
    ɵɵadvance();
    ɵɵproperty("ngIf", sort_r4.sortOrder);
  }
}
function OrderDataTableComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th")(1, "div", 21)(2, "vdr-ui-extension-point", 22)(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵtemplate(5, OrderDataTableComponent_th_7_div_5_Template, 6, 6, "div", 23);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("expand", column_r5.expand);
    ɵɵadvance();
    ɵɵproperty("ngClass", column_r5.align);
    ɵɵadvance();
    ɵɵproperty("locationId", ctx_r1.id)("metadata", column_r5.id)("topPx", -6)("leftPx", -24);
    ɵɵadvance(2);
    ɵɵtextInterpolate(column_r5.heading);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r5.sort);
  }
}
function OrderDataTableComponent_tr_12_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderDataTableComponent_tr_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderDataTableComponent_tr_12_ng_container_8_vdr_data_table_filters_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-data-table-filters", 42);
  }
  if (rf & 2) {
    const activeFilter_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("filterWithValue", activeFilter_r7)("filters", ctx_r1.filters);
  }
}
function OrderDataTableComponent_tr_12_ng_container_8_vdr_data_table_filters_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-data-table-filters", 43);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("filters", ctx_r1.filters);
  }
}
function OrderDataTableComponent_tr_12_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 39);
    ɵɵtemplate(2, OrderDataTableComponent_tr_12_ng_container_8_vdr_data_table_filters_2_Template, 1, 2, "vdr-data-table-filters", 40)(3, OrderDataTableComponent_tr_12_ng_container_8_vdr_data_table_filters_3_Template, 1, 1, "vdr-data-table-filters", 41);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.filters.activeFilters);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filters.length);
  }
}
function OrderDataTableComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr")(1, "th", 34)(2, "button", 35);
    ɵɵpipe(3, "translate");
    ɵɵlistener("click", function OrderDataTableComponent_tr_12_Template_button_click_2_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleSearchFilterRow());
    });
    ɵɵelement(4, "clr-icon", 36);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 37);
    ɵɵtemplate(6, OrderDataTableComponent_tr_12_ng_container_6_Template, 1, 0, "ng-container", 38)(7, OrderDataTableComponent_tr_12_ng_container_7_Template, 1, 0, "ng-container", 38)(8, OrderDataTableComponent_tr_12_ng_container_8_Template, 4, 2, "ng-container", 9);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("active", ctx_r1.showSearchFilterRow);
    ɵɵattribute("colspan", ctx_r1.visibleSortedColumns.length + (ctx_r1.selectionManager ? 2 : 1));
    ɵɵadvance();
    ɵɵclassProp("active", ctx_r1.showSearchFilterRow);
    ɵɵproperty("title", ɵɵpipeBind1(3, 11, "common.search-and-filter-list"));
    ɵɵadvance(3);
    ɵɵclassProp("hidden", !ctx_r1.showSearchFilterRow);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.searchComponent == null ? null : ctx_r1.searchComponent.template);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.customSearchTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filters);
  }
}
function OrderDataTableComponent_tr_14_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 19)(1, "input", 46);
    ɵɵlistener("click", function OrderDataTableComponent_tr_14_td_1_Template_input_click_1_listener($event) {
      ɵɵrestoreView(_r8);
      const item_r9 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRowClick(item_r9, $event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    const item_r9 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r1.activeIndex === i_r11);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r1.selectionManager == null ? null : ctx_r1.selectionManager.isSelected(item_r9));
  }
}
function OrderDataTableComponent_tr_14_td_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderDataTableComponent_tr_14_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderDataTableComponent_tr_14_td_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 48);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const componentConfig_r12 = ctx.ngIf;
    const item_r9 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", componentConfig_r12.config.component)("ngComponentOutletInputs", ɵɵpureFunction1(3, _c6, item_r9))("ngComponentOutletInjector", componentConfig_r12.injector);
  }
}
function OrderDataTableComponent_tr_14_td_2_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderDataTableComponent_tr_14_td_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderDataTableComponent_tr_14_td_2_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 49);
  }
  if (rf & 2) {
    const column_r13 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext();
    const item_r9 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    ɵɵproperty("ngTemplateOutlet", column_r13.template)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c7, item_r9, i_r11));
  }
}
function OrderDataTableComponent_tr_14_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td")(1, "div", 21);
    ɵɵtemplate(2, OrderDataTableComponent_tr_14_td_2_ng_container_2_Template, 2, 5, "ng-container", 47)(3, OrderDataTableComponent_tr_14_td_2_ng_template_3_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    const defaultComponent_r14 = ɵɵreference(4);
    const i_r11 = ɵɵnextContext().index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r1.activeIndex === i_r11);
    ɵɵadvance();
    ɵɵproperty("ngClass", column_r13.align);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.customComponents.get(column_r13.id))("ngIfElse", defaultComponent_r14);
  }
}
function OrderDataTableComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, OrderDataTableComponent_tr_14_td_1_Template, 2, 3, "td", 44)(2, OrderDataTableComponent_tr_14_td_2_Template, 5, 5, "td", 45);
    ɵɵelement(3, "td");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.selectionManager);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.visibleSortedColumns);
    ɵɵadvance();
    ɵɵclassProp("active", ctx_r1.activeIndex === i_r11);
  }
}
function OrderDataTableComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵelement(2, "vdr-empty-placeholder", 50);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.visibleSortedColumns.length + (ctx_r1.selectionManager ? 2 : 1));
    ɵɵadvance();
    ɵɵproperty("emptyStateLabel", ɵɵpipeBind1(3, 2, "order.order-is-empty"));
  }
}
function OrderDataTableComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 51)(1, "td", 52);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 53);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelement(5, "td", 54);
    ɵɵelementStart(6, "td", 55);
    ɵɵtext(7);
    ɵɵpipe(8, "localeCurrency");
    ɵɵelementStart(9, "div", 15);
    ɵɵpipe(10, "translate");
    ɵɵtext(11);
    ɵɵpipe(12, "localeCurrency");
    ɵɵelementEnd()();
    ɵɵelement(13, "td");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const surcharge_r15 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(surcharge_r15.description);
    ɵɵadvance(2);
    ɵɵtextInterpolate(surcharge_r15.sku);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.visibleSortedColumns.length - 4);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(8, 6, surcharge_r15.priceWithTax, ctx_r1.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(10, 9, "order.net-price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(12, 11, surcharge_r15.price, ctx_r1.order.currencyCode), " ");
  }
}
function OrderDataTableComponent_ng_container_19_tr_1_vdr_chip_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const couponCode_r16 = ctx.ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate(couponCode_r16);
  }
}
function OrderDataTableComponent_ng_container_19_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 57)(1, "td", 3)(2, "a", 58);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, OrderDataTableComponent_ng_container_19_tr_1_vdr_chip_4_Template, 2, 1, "vdr-chip", 9);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td", 3);
    ɵɵtext(6);
    ɵɵpipe(7, "localeCurrency");
    ɵɵelementStart(8, "div", 15);
    ɵɵpipe(9, "translate");
    ɵɵtext(10);
    ɵɵpipe(11, "localeCurrency");
    ɵɵelementEnd()();
    ɵɵelement(12, "td");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const discount_r17 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.visibleSortedColumns.length - 1);
    ɵɵadvance();
    ɵɵproperty("routerLink", ctx_r1.getPromotionLink(discount_r17));
    ɵɵadvance();
    ɵɵtextInterpolate(discount_r17.description);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getCouponCodeForAdjustment(ctx_r1.order, discount_r17));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 7, discount_r17.amountWithTax, ctx_r1.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(9, 10, "order.net-price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(11, 12, discount_r17.amount, ctx_r1.order.currencyCode), " ");
  }
}
function OrderDataTableComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderDataTableComponent_ng_container_19_tr_1_Template, 13, 15, "tr", 56);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const discount_r17 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", discount_r17.type !== "OTHER");
  }
}
function OrderDataTableComponent_vdr_chip_38_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 59);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const shippingLine_r18 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", shippingLine_r18.shippingMethod.name, " ");
  }
}
var _c8 = (a0) => ["/catalog/products", a0];
var _c9 = (a0, a1) => ["/catalog/products", a0, "variants", a1];
function OrderTableComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", line_r1.id, " ");
  }
}
function OrderTableComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const line_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, line_r2.createdAt, "short"), " ");
  }
}
function OrderTableComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const line_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, line_r3.updatedAt, "short"), " ");
  }
}
function OrderTableComponent_ng_template_12_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 17);
    ɵɵpipe(1, "assetPreview");
  }
  if (rf & 2) {
    const asset_r4 = ctx.ngIf;
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, asset_r4, "tiny"), ɵɵsanitizeUrl);
  }
}
function OrderTableComponent_ng_template_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵelement(1, "clr-icon", 19);
    ɵɵelementEnd();
  }
}
function OrderTableComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, OrderTableComponent_ng_template_12_img_1_Template, 2, 4, "img", 16)(2, OrderTableComponent_ng_template_12_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r5 = ctx.item;
    const imagePlaceholder_r6 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", line_r5.featuredAsset)("ngIfElse", imagePlaceholder_r6);
  }
}
function OrderTableComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 20)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r7 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c8, line_r7.productVariant.product.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r7.productVariant.product.name);
  }
}
function OrderTableComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 20)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r8 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction2(2, _c9, line_r8.productVariant.product.id, line_r8.productVariant.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r8.productVariant.name);
  }
}
function OrderTableComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r9 = ctx.item;
    ɵɵtextInterpolate1(" ", line_r9.productVariant.sku, " ");
  }
}
function OrderTableComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "localeCurrency");
    ɵɵelementStart(3, "div", 23);
    ɵɵpipe(4, "translate");
    ɵɵtext(5);
    ɵɵpipe(6, "localeCurrency");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const line_r10 = ctx.item;
    const ctx_r10 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 3, line_r10.unitPriceWithTax, ctx_r10.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(4, 6, "order.net-price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 8, line_r10.unitPrice, ctx_r10.order.currencyCode), " ");
  }
}
function OrderTableComponent_ng_template_27_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r12 = ɵɵnextContext(2).item;
    ɵɵproperty("title", ɵɵpipeBind1(1, 2, "order.original-quantity-at-checkout"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", line_r12.orderPlacedQuantity, " ");
  }
}
function OrderTableComponent_ng_template_27_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 27);
    ɵɵtemplate(2, OrderTableComponent_ng_template_27_ng_container_0_div_2_Template, 3, 4, "div", 28);
    ɵɵelementStart(3, "div");
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const line_r12 = ɵɵnextContext().item;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", line_r12.orderPlacedQuantity && line_r12.quantity !== line_r12.orderPlacedQuantity);
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r12.quantity);
  }
}
function OrderTableComponent_ng_template_27_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "input", 30, 2);
    ɵɵlistener("blur", function OrderTableComponent_ng_template_27_ng_template_1_Template_input_blur_1_listener() {
      ɵɵrestoreView(_r13);
      const qtyInput_r14 = ɵɵreference(2);
      const line_r12 = ɵɵnextContext().item;
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.draftInputBlur(line_r12, qtyInput_r14.valueAsNumber));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 31);
    ɵɵlistener("click", function OrderTableComponent_ng_template_27_ng_template_1_Template_button_click_3_listener() {
      ɵɵrestoreView(_r13);
      const line_r12 = ɵɵnextContext().item;
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.remove.emit({
        lineId: line_r12.id
      }));
    });
    ɵɵelement(4, "clr-icon", 32);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const line_r12 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵproperty("value", line_r12.quantity);
  }
}
function OrderTableComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderTableComponent_ng_template_27_ng_container_0_Template, 5, 2, "ng-container", 24)(1, OrderTableComponent_ng_template_27_ng_template_1_Template, 5, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelement(3, "vdr-line-refunds", 25)(4, "vdr-line-fulfillment", 26);
  }
  if (rf & 2) {
    const line_r12 = ctx.item;
    const draft_r15 = ɵɵreference(2);
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r10.isDraft)("ngIfElse", draft_r15);
    ɵɵadvance(3);
    ɵɵproperty("line", line_r12)("payments", ctx_r10.order.payments);
    ɵɵadvance();
    ɵɵproperty("line", line_r12)("orderState", ctx_r10.order.state)("allOrderFulfillments", ctx_r10.order.fulfillments);
  }
}
function OrderTableComponent_vdr_dt2_custom_field_column_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 33);
  }
  if (rf & 2) {
    const customField_r16 = ctx.$implicit;
    ɵɵproperty("customField", customField_r16);
  }
}
function OrderTableComponent_ng_template_31_ng_container_7_vdr_dropdown_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 37)(1, "a", 38);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 39);
    ɵɵtext(4);
    ɵɵpipe(5, "localeCurrency");
    ɵɵelementStart(6, "div", 23);
    ɵɵpipe(7, "translate");
    ɵɵtext(8);
    ɵɵpipe(9, "localeCurrency");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const discount_r17 = ctx.$implicit;
    const ctx_r10 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("routerLink", ctx_r10.getPromotionLink(discount_r17));
    ɵɵadvance();
    ɵɵtextInterpolate(discount_r17.description);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, discount_r17.amountWithTax, ctx_r10.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(7, 8, "order.net-price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(9, 10, discount_r17.amount, ctx_r10.order.currencyCode), " ");
  }
}
function OrderTableComponent_ng_template_31_ng_container_7_vdr_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown")(1, "div", 35);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-dropdown-menu");
    ɵɵtemplate(5, OrderTableComponent_ng_template_31_ng_container_7_vdr_dropdown_1_div_5_Template, 10, 13, "div", 36);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const discounts_r18 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "order.promotions-applied"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", discounts_r18);
  }
}
function OrderTableComponent_ng_template_31_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderTableComponent_ng_template_31_ng_container_7_vdr_dropdown_1_Template, 6, 4, "vdr-dropdown", 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const discounts_r18 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", discounts_r18.length);
  }
}
function OrderTableComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "localeCurrency");
    ɵɵelementStart(3, "div", 23);
    ɵɵpipe(4, "translate");
    ɵɵtext(5);
    ɵɵpipe(6, "localeCurrency");
    ɵɵelementEnd()();
    ɵɵtemplate(7, OrderTableComponent_ng_template_31_ng_container_7_Template, 2, 1, "ng-container", 34);
  }
  if (rf & 2) {
    const line_r19 = ctx.item;
    const ctx_r10 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 4, line_r19.linePriceWithTax, ctx_r10.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(4, 7, "order.net-price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 9, line_r19.linePrice, ctx_r10.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r10.getLineDiscounts(line_r19));
  }
}
function DraftOrderVariantSelectorComponent_div_6_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "vdr-tabbed-custom-fields", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("customFields", ctx_r1.orderLineCustomFields)("customFieldsFormGroup", ctx_r1.customFieldsFormGroup);
  }
}
function DraftOrderVariantSelectorComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "div", 5);
    ɵɵelement(2, "img", 6);
    ɵɵpipe(3, "assetPreview");
    ɵɵelementStart(4, "div", 7)(5, "div");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 8);
    ɵɵtext(8);
    ɵɵelementEnd()();
    ɵɵelementStart(9, "div", 9)(10, "div", 8);
    ɵɵtext(11);
    ɵɵpipe(12, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 8);
    ɵɵtext(14);
    ɵɵpipe(15, "translate");
    ɵɵelementEnd()();
    ɵɵelement(16, "div", 10);
    ɵɵelementStart(17, "div", 7)(18, "div");
    ɵɵtext(19);
    ɵɵpipe(20, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(21, "div", 11);
    ɵɵpipe(22, "translate");
    ɵɵtext(23);
    ɵɵpipe(24, "localeCurrency");
    ɵɵelementEnd()();
    ɵɵelementStart(25, "div")(26, "input", 12);
    ɵɵtwoWayListener("ngModelChange", function DraftOrderVariantSelectorComponent_div_6_Template_input_ngModelChange_26_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.quantity, $event) || (ctx_r1.quantity = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
    ɵɵelementStart(27, "button", 13);
    ɵɵlistener("click", function DraftOrderVariantSelectorComponent_div_6_Template_button_click_27_listener() {
      const selectedVariant_r3 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addItemClick(selectedVariant_r3));
    });
    ɵɵtext(28);
    ɵɵpipe(29, "translate");
    ɵɵelementEnd()();
    ɵɵtemplate(30, DraftOrderVariantSelectorComponent_div_6_ng_container_30_Template, 2, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selectedVariant_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("src", ɵɵpipeBind2(3, 15, selectedVariant_r3.featuredAsset || selectedVariant_r3.product.featuredAsset, 32), ɵɵsanitizeUrl);
    ɵɵadvance(4);
    ɵɵtextInterpolate(selectedVariant_r3 == null ? null : selectedVariant_r3.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(selectedVariant_r3 == null ? null : selectedVariant_r3.sku);
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(12, 18, "catalog.stock-on-hand"), ": ", selectedVariant_r3.stockOnHand, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(15, 20, "catalog.stock-allocated"), ": ", selectedVariant_r3.stockAllocated, " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind2(20, 22, selectedVariant_r3 == null ? null : selectedVariant_r3.priceWithTax, ctx_r1.currencyCode));
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(22, 25, "order.net-price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(24, 27, selectedVariant_r3 == null ? null : selectedVariant_r3.price, ctx_r1.currencyCode), " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", !selectedVariant_r3);
    ɵɵtwoWayProperty("ngModel", ctx_r1.quantity);
    ɵɵadvance();
    ɵɵproperty("disabled", !selectedVariant_r3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(29, 30, "order.add-item-to-order"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.orderLineCustomFields.length);
  }
}
function DraftOrderDetailComponent_vdr_action_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-action-bar")(1, "vdr-ab-left")(2, "div", 1);
    ɵɵelement(3, "vdr-order-state-label", 2);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "vdr-ab-right");
    ɵɵelement(5, "vdr-action-bar-items", 3);
    ɵɵelementStart(6, "button", 4);
    ɵɵlistener("click", function DraftOrderDetailComponent_vdr_action_bar_1_Template_button_click_6_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.completeOrder());
    });
    ɵɵelement(7, "clr-icon", 5);
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "vdr-action-bar-dropdown-menu", 6)(11, "button", 7);
    ɵɵlistener("click", function DraftOrderDetailComponent_vdr_action_bar_1_Template_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.deleteOrder());
    });
    ɵɵelement(12, "clr-icon", 8);
    ɵɵtext(13);
    ɵɵpipe(14, "translate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.ngIf;
    ɵɵadvance(3);
    ɵɵproperty("state", order_r3.state);
    ɵɵadvance(3);
    ɵɵproperty("disabled", !order_r3.customer || !order_r3.lines.length || !order_r3.shippingLines.length);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 5, "order.complete-draft-order"), " ");
    ɵɵadvance(2);
    ɵɵproperty("alwaysShow", true);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 7, "order.delete-draft-order"), " ");
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_clr_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 24);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_clr_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 25);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_clr_icon_0_Template, 1, 0, "clr-icon", 22)(1, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_clr_icon_1_Template, 1, 0, "clr-icon", 23);
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngIf", !order_r5.customer);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r5.customer);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_vdr_customer_label_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-customer-label", 26);
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("customer", order_r5.customer);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_11_clr_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 24);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_11_clr_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 25);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_11_clr_icon_0_Template, 1, 0, "clr-icon", 22)(1, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_11_clr_icon_1_Template, 1, 0, "clr-icon", 23);
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngIf", !order_r5.billingAddress.streetLine1);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r5.billingAddress.streetLine1);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_vdr_formatted_address_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-formatted-address", 27);
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("address", order_r5.billingAddress);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_18_clr_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 24);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_18_clr_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 25);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_18_clr_icon_0_Template, 1, 0, "clr-icon", 22)(1, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_18_clr_icon_1_Template, 1, 0, "clr-icon", 23);
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngIf", !order_r5.shippingAddress.streetLine1 || !order_r5.shippingLines.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r5.shippingAddress.streetLine1 && order_r5.shippingLines.length);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_vdr_formatted_address_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-formatted-address", 27);
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("address", order_r5.shippingAddress);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const shippingLine_r6 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", shippingLine_r6.shippingMethod.name, " ");
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function DraftOrderDetailComponent_vdr_page_detail_layout_3_button_28_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.displayCouponCodeInput = !ctx_r1.displayCouponCodeInput);
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.set-coupon-codes"), " ");
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-coupon-code-selector", 28);
    ɵɵlistener("addCouponCode", function DraftOrderDetailComponent_vdr_page_detail_layout_3_div_29_Template_vdr_coupon_code_selector_addCouponCode_4_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.applyCouponCode($event));
    })("removeCouponCode", function DraftOrderDetailComponent_vdr_page_detail_layout_3_div_29_Template_vdr_coupon_code_selector_removeCouponCode_4_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.removeCouponCode($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "order.set-coupon-codes"));
    ɵɵadvance(2);
    ɵɵproperty("couponCodes", order_r5.couponCodes);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_vdr_page_entity_info_31_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-page-entity-info", 29);
  }
  if (rf & 2) {
    const entity_r9 = ctx.ngIf;
    ɵɵproperty("entity", entity_r9);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_container_39_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵpipe(5, "percent");
    ɵɵelementEnd();
    ɵɵelementStart(6, "td");
    ɵɵtext(7);
    ɵɵpipe(8, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(9, "td");
    ɵɵtext(10);
    ɵɵpipe(11, "localeCurrency");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const order_r5 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(row_r10.description);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, row_r10.taxRate / 100));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(8, 6, row_r10.taxBase, order_r5.currencyCode));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(11, 9, row_r10.taxTotal, order_r5.currencyCode));
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "table", 30)(2, "thead")(3, "tr")(4, "th");
    ɵɵtext(5);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "th");
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "th");
    ɵɵtext(11);
    ɵɵpipe(12, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "th");
    ɵɵtext(14);
    ɵɵpipe(15, "translate");
    ɵɵelementEnd()()();
    ɵɵelementStart(16, "tbody");
    ɵɵtemplate(17, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_container_39_tr_17_Template, 12, 12, "tr", 15);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 5, "common.description"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 7, "order.tax-rate"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 9, "order.tax-base"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(15, 11, "order.tax-total"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", order_r5.taxSummary);
  }
}
function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-page-detail-layout")(1, "vdr-page-detail-sidebar")(2, "vdr-card", 9);
    ɵɵpipe(3, "translate");
    ɵɵtemplate(4, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_Template, 2, 2, "ng-template", 10)(5, DraftOrderDetailComponent_vdr_page_detail_layout_3_vdr_customer_label_5_Template, 1, 1, "vdr-customer-label", 11);
    ɵɵelementStart(6, "button", 12);
    ɵɵlistener("click", function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template_button_click_6_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setCustomer());
    });
    ɵɵtext(7);
    ɵɵpipe(8, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "vdr-card", 9);
    ɵɵpipe(10, "translate");
    ɵɵtemplate(11, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_11_Template, 2, 2, "ng-template", 10)(12, DraftOrderDetailComponent_vdr_page_detail_layout_3_vdr_formatted_address_12_Template, 1, 1, "vdr-formatted-address", 13);
    ɵɵelementStart(13, "button", 12);
    ɵɵlistener("click", function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template_button_click_13_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setBillingAddress());
    });
    ɵɵtext(14);
    ɵɵpipe(15, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(16, "vdr-card", 9);
    ɵɵpipe(17, "translate");
    ɵɵtemplate(18, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_template_18_Template, 2, 2, "ng-template", 10)(19, DraftOrderDetailComponent_vdr_page_detail_layout_3_vdr_formatted_address_19_Template, 1, 1, "vdr-formatted-address", 13);
    ɵɵelementStart(20, "button", 14);
    ɵɵlistener("click", function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template_button_click_20_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setShippingAddress());
    });
    ɵɵtext(21);
    ɵɵpipe(22, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(23, DraftOrderDetailComponent_vdr_page_detail_layout_3_div_23_Template, 2, 1, "div", 15);
    ɵɵelementStart(24, "button", 12);
    ɵɵlistener("click", function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template_button_click_24_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setShippingMethod());
    });
    ɵɵtext(25);
    ɵɵpipe(26, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(27, "vdr-card");
    ɵɵtemplate(28, DraftOrderDetailComponent_vdr_page_detail_layout_3_button_28_Template, 3, 3, "button", 16)(29, DraftOrderDetailComponent_vdr_page_detail_layout_3_div_29_Template, 5, 4, "div", 0);
    ɵɵelementEnd();
    ɵɵelementStart(30, "vdr-card");
    ɵɵtemplate(31, DraftOrderDetailComponent_vdr_page_detail_layout_3_vdr_page_entity_info_31_Template, 1, 1, "vdr-page-entity-info", 17);
    ɵɵpipe(32, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(33, "vdr-page-block")(34, "vdr-card")(35, "vdr-draft-order-variant-selector", 18);
    ɵɵlistener("addItem", function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template_vdr_draft_order_variant_selector_addItem_35_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addItemToOrder($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(36, "vdr-order-table", 19);
    ɵɵlistener("adjust", function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template_vdr_order_table_adjust_36_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.adjustOrderLine($event));
    })("remove", function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template_vdr_order_table_remove_36_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.removeOrderLine($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(37, "vdr-card", 9);
    ɵɵpipe(38, "translate");
    ɵɵtemplate(39, DraftOrderDetailComponent_vdr_page_detail_layout_3_ng_container_39_Template, 18, 13, "ng-container", 0);
    ɵɵelementEnd();
    ɵɵelement(40, "vdr-custom-detail-component-host", 20);
    ɵɵelementStart(41, "vdr-order-custom-fields-card", 21);
    ɵɵlistener("updateClick", function DraftOrderDetailComponent_vdr_page_detail_layout_3_Template_vdr_order_custom_fields_card_updateClick_41_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateCustomFields($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(3, 25, "order.customer"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r5.customer);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 27, "order.set-customer-for-order"), " ");
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(10, 29, "order.billing-address"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r5.billingAddress);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 31, "order.set-billing-address"), " ");
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(17, 33, "order.shipping"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r5.shippingAddress);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 35, "order.set-shipping-address"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", order_r5.shippingLines);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(26, 37, "order.set-shipping-method"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r5.couponCodes.length === 0 && !ctx_r1.displayCouponCodeInput);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r5.couponCodes.length || ctx_r1.displayCouponCodeInput);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(32, 39, ctx_r1.entity$));
    ɵɵadvance(4);
    ɵɵproperty("orderLineCustomFields", ctx_r1.orderLineCustomFields)("currencyCode", order_r5.currencyCode);
    ɵɵadvance();
    ɵɵproperty("order", order_r5)("orderLineCustomFields", ctx_r1.orderLineCustomFields)("isDraft", true);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(38, 41, "order.tax-summary"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r5.taxSummary.length);
    ɵɵadvance();
    ɵɵproperty("entity$", ctx_r1.entity$)("detailForm", ctx_r1.detailForm);
    ɵɵadvance();
    ɵɵproperty("customFieldsConfig", ctx_r1.customFields)("customFieldValues", order_r5.customFields);
  }
}
function FulfillOrderDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.fulfill-order"));
  }
}
function FulfillOrderDialogComponent_tr_22_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 17);
    ɵɵpipe(1, "assetPreview");
  }
  if (rf & 2) {
    const line_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, line_r1.featuredAsset, "tiny"), ɵɵsanitizeUrl);
  }
}
function FulfillOrderDialogComponent_tr_22_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 18);
    ɵɵtwoWayListener("ngModelChange", function FulfillOrderDialogComponent_tr_22_input_12_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const line_r1 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.fulfillmentQuantities[line_r1.id].fulfillCount, $event) || (ctx_r2.fulfillmentQuantities[line_r1.id].fulfillCount = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r1 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.getUnfulfilledCount(line_r1) === 0);
    ɵɵtwoWayProperty("ngModel", ctx_r2.fulfillmentQuantities[line_r1.id].fulfillCount);
    ɵɵproperty("max", ctx_r2.fulfillmentQuantities[line_r1.id].max);
  }
}
function FulfillOrderDialogComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 9)(1, "td", 10);
    ɵɵtemplate(2, FulfillOrderDialogComponent_tr_22_img_2_Template, 2, 4, "img", 11);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 12);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td", 13);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "td", 14);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "td", 14);
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "td", 15);
    ɵɵtemplate(12, FulfillOrderDialogComponent_tr_22_input_12_Template, 1, 3, "input", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("ignore", ctx_r2.getUnfulfilledCount(line_r1) === 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", line_r1.featuredAsset);
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r1.productVariant.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r1.productVariant.sku);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.getUnfulfilledCount(line_r1));
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r1.productVariant.stockOnHand);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.fulfillmentQuantities[line_r1.id]);
  }
}
function FulfillOrderDialogComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 19);
    ɵɵlistener("click", function FulfillOrderDialogComponent_ng_template_33_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 20);
    ɵɵlistener("click", function FulfillOrderDialogComponent_ng_template_33_Template_button_click_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.select());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r2.canSubmit());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "order.create-fulfillment"), " ");
  }
}
function SimpleItemListComponent_li_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r1.quantity);
  }
}
function SimpleItemListComponent_li_2_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 6);
  }
}
function SimpleItemListComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 2);
    ɵɵtemplate(1, SimpleItemListComponent_li_2_div_1_Template, 2, 1, "div", 3)(2, SimpleItemListComponent_li_2_clr_icon_2_Template, 1, 0, "clr-icon", 4);
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("title", item_r1.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r1.quantity != null);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r1.quantity != null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1.name, " ");
  }
}
function FulfillmentDetailComponent_vdr_labeled_data_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.tracking-code"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.fulfillment == null ? null : ctx_r0.fulfillment.trackingCode, "\n");
  }
}
function FulfillmentDetailComponent_ng_container_11_vdr_custom_field_control_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-custom-field-control", 5);
  }
  if (rf & 2) {
    const customField_r2 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("readonly", true)("compact", true)("customField", customField_r2)("customFieldsFormGroup", ctx_r0.customFieldFormGroup);
  }
}
function FulfillmentDetailComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FulfillmentDetailComponent_ng_container_11_vdr_custom_field_control_1_Template, 1, 4, "vdr-custom-field-control", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const customField_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.customFieldFormGroup.get(customField_r2.name));
  }
}
function FulfillmentStateLabelComponent_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 2);
  }
}
function FulfillmentCardComponent_vdr_fulfillment_detail_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-fulfillment-detail", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("fulfillmentId", ctx_r0.fulfillment == null ? null : ctx_r0.fulfillment.id)("order", ctx_r0.order);
  }
}
function FulfillmentCardComponent_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 15);
    ɵɵlistener("click", function FulfillmentCardComponent_div_9_ng_container_1_Template_button_click_1_listener() {
      const suggestedState_r3 = ɵɵrestoreView(_r2).ngIf;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.transitionState.emit(suggestedState_r3));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "stateI18nToken");
    ɵɵpipe(4, "translate");
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const suggestedState_r3 = ctx.ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, "order.set-fulfillment-state", ɵɵpureFunction1(8, _c0, ɵɵpipeBind1(4, 3, ɵɵpipeBind1(3, 1, suggestedState_r3)))), " ");
  }
}
function FulfillmentCardComponent_div_9_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "clr-icon", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "stateI18nToken");
    ɵɵpipe(4, "translate");
    ɵɵpipe(5, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const nextState_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, "order.transition-to-state", ɵɵpureFunction1(8, _c0, ɵɵpipeBind1(4, 3, ɵɵpipeBind1(3, 1, nextState_r5)))), " ");
  }
}
function FulfillmentCardComponent_div_9_ng_container_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.cancel-fulfillment"), " ");
  }
}
function FulfillmentCardComponent_div_9_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 16);
    ɵɵlistener("click", function FulfillmentCardComponent_div_9_ng_container_6_Template_button_click_1_listener() {
      const nextState_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.transitionState.emit(nextState_r5));
    });
    ɵɵtemplate(2, FulfillmentCardComponent_div_9_ng_container_6_ng_container_2_Template, 6, 10, "ng-container", 17)(3, FulfillmentCardComponent_div_9_ng_container_6_ng_template_3_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const nextState_r5 = ctx.$implicit;
    const cancel_r6 = ɵɵreference(4);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", nextState_r5 !== "Cancelled")("ngIfElse", cancel_r6);
  }
}
function FulfillmentCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, FulfillmentCardComponent_div_9_ng_container_1_Template, 6, 10, "ng-container", 10);
    ɵɵelementStart(2, "vdr-dropdown")(3, "button", 11);
    ɵɵelement(4, "clr-icon", 12);
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-dropdown-menu", 13);
    ɵɵtemplate(6, FulfillmentCardComponent_div_9_ng_container_6_Template, 5, 2, "ng-container", 14);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.nextSuggestedState());
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r0.nextOtherStates());
  }
}
function ModificationDetailComponent_vdr_labeled_data_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.note"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.modification.note);
  }
}
function ModificationDetailComponent_vdr_labeled_data_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵpipe(3, "localeCurrency");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const surcharge_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 3, "order.surcharges"));
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", (tmp_3_0 = ctx_r0.getSurcharge(surcharge_r2.id)) == null ? null : tmp_3_0.description, " ", ɵɵpipeBind2(3, 5, (tmp_3_0 = ctx_r0.getSurcharge(surcharge_r2.id)) == null ? null : tmp_3_0.priceWithTax, ctx_r0.order.currencyCode), "");
  }
}
function ModificationDetailComponent_vdr_labeled_data_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-simple-item-list", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.added-items"));
    ɵɵadvance(2);
    ɵɵproperty("items", ctx_r0.getAddedItems());
  }
}
function ModificationDetailComponent_vdr_labeled_data_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-simple-item-list", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.removed-items"));
    ɵɵadvance(2);
    ɵɵproperty("items", ctx_r0.getRemovedItems());
  }
}
function ModificationDetailComponent_vdr_labeled_data_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-simple-item-list", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.modified-items"));
    ɵɵadvance(2);
    ɵɵproperty("items", ctx_r0.getModifiedItems());
  }
}
function OrderProcessNodeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", 4)(2, "clr-icon", 5);
    ɵɵelementStart(3, "div", 6);
    ɵɵtext(4);
    ɵɵpipe(5, "stateI18nToken");
    ɵɵpipe(6, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 3, ɵɵpipeBind1(5, 1, ctx_r0.cancelledState)), " ");
  }
}
function OrderProcessGraphComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "vdr-order-process-node", 1);
    ɵɵpipe(2, "async");
    ɵɵlistener("mouseenter", function OrderProcessGraphComponent_ng_container_0_Template_vdr_order_process_node_mouseenter_1_listener() {
      const state_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMouseOver(state_r2.name));
    })("mouseleave", function OrderProcessGraphComponent_ng_container_0_Template_vdr_order_process_node_mouseleave_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMouseOut());
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const state_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("node", state_r2)("index", i_r4)("active", ɵɵpipeBind1(2, 3, ctx_r2.activeState$) === state_r2.name);
  }
}
function OrderProcessGraphComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "vdr-order-process-edge", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const edge_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("from", edge_r5.from)("to", edge_r5.to)("index", edge_r5.index);
  }
}
function OrderProcessGraphDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.order-state-diagram"));
  }
}
function PaymentForRefundSelectorComponent_vdr_card_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-select-toggle", 6);
    ɵɵpipe(1, "translate");
    ɵɵpipe(2, "translate");
    ɵɵtwoWayListener("selectedChange", function PaymentForRefundSelectorComponent_vdr_card_0_ng_template_2_Template_vdr_select_toggle_selectedChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const payment_r2 = ɵɵnextContext().$implicit;
      ɵɵtwoWayBindingSet(payment_r2.selected, $event) || (payment_r2.selected = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("selectedChange", function PaymentForRefundSelectorComponent_vdr_card_0_ng_template_2_Template_vdr_select_toggle_selectedChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const payment_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.paymentSelected.emit({
        payment: payment_r2,
        selected: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const payment_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "order.refund-this-payment"))("label", ɵɵpipeBind1(2, 6, "order.refund-this-payment"))("disabled", ctx_r2.refundablePayments.length === 1);
    ɵɵtwoWayProperty("selected", payment_r2.selected);
  }
}
function PaymentForRefundSelectorComponent_vdr_card_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 1);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, PaymentForRefundSelectorComponent_vdr_card_0_ng_template_2_Template, 3, 8, "ng-template", 2);
    ɵɵelementStart(3, "div", 3)(4, "vdr-labeled-data", 4);
    ɵɵpipe(5, "translate");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "vdr-labeled-data", 4);
    ɵɵpipe(8, "translate");
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "vdr-labeled-data", 4);
    ɵɵpipe(11, "translate");
    ɵɵtext(12);
    ɵɵpipe(13, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(14, "vdr-labeled-data", 4);
    ɵɵpipe(15, "translate");
    ɵɵtext(16);
    ɵɵpipe(17, "localeCurrency");
    ɵɵelementEnd()();
    ɵɵelementStart(18, "vdr-form-field", 4);
    ɵɵpipe(19, "translate");
    ɵɵelement(20, "vdr-currency-input", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const payment_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("selected", payment_r2.selected)("unselected", !payment_r2.selected);
    ɵɵproperty("title", ɵɵpipeBind1(1, 17, "order.payment"));
    ɵɵadvance(4);
    ɵɵproperty("label", ɵɵpipeBind1(5, 19, "order.payment-method"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", payment_r2.method, " ");
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(8, 21, "order.transaction-id"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", payment_r2.transactionId, " ");
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(11, 23, "order.payment-amount"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(13, 25, payment_r2.amount, ctx_r2.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(15, 28, "order.refundable-amount"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(17, 30, payment_r2.refundableAmount, ctx_r2.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(19, 33, "order.refund-amount"));
    ɵɵadvance(2);
    ɵɵproperty("readonly", !payment_r2.selected)("currencyCode", ctx_r2.order.currencyCode)("formControl", payment_r2.amountToRefundControl);
  }
}
var _c10 = (a0) => ({
  amount: a0
});
var _c11 = (a0, a1) => ({
  min: a0,
  max: a1
});
function RefundOrderDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.refund-and-cancel-order"));
  }
}
function RefundOrderDialogComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", line_r1.id, " ");
  }
}
function RefundOrderDialogComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const line_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, line_r2.createdAt, "short"), " ");
  }
}
function RefundOrderDialogComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const line_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, line_r3.updatedAt, "short"), " ");
  }
}
function RefundOrderDialogComponent_ng_template_14_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 26);
    ɵɵpipe(1, "assetPreview");
  }
  if (rf & 2) {
    const asset_r4 = ctx.ngIf;
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, asset_r4, "tiny"), ɵɵsanitizeUrl);
  }
}
function RefundOrderDialogComponent_ng_template_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵelement(1, "clr-icon", 28);
    ɵɵelementEnd();
  }
}
function RefundOrderDialogComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, RefundOrderDialogComponent_ng_template_14_img_1_Template, 2, 4, "img", 25)(2, RefundOrderDialogComponent_ng_template_14_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r5 = ctx.item;
    const imagePlaceholder_r6 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", line_r5.featuredAsset)("ngIfElse", imagePlaceholder_r6);
  }
}
function RefundOrderDialogComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r7 = ctx.item;
    ɵɵtextInterpolate1(" ", line_r7.productVariant.name, " ");
  }
}
function RefundOrderDialogComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r8 = ctx.item;
    ɵɵtextInterpolate1(" ", line_r8.productVariant.sku, " ");
  }
}
function RefundOrderDialogComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const line_r9 = ctx.item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, line_r9.unitPriceWithTax, ctx_r9.order.currencyCode), " ");
  }
}
function RefundOrderDialogComponent_ng_template_26_ng_container_2_vdr_dropdown_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34);
    ɵɵtext(1);
    ɵɵelementStart(2, "div", 35);
    ɵɵtext(3);
    ɵɵpipe(4, "number");
    ɵɵpipe(5, "currency");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const discount_r11 = ctx.$implicit;
    const line_r12 = ɵɵnextContext(3).item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", discount_r11.description, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, ɵɵpipeBind2(4, 2, discount_r11.amount / 100 / line_r12.quantity, "1.0-2"), ctx_r9.order.currencyCode), " ");
  }
}
function RefundOrderDialogComponent_ng_template_26_ng_container_2_vdr_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown")(1, "div", 30)(2, "button", 31);
    ɵɵelement(3, "clr-icon", 32);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "vdr-dropdown-menu");
    ɵɵtemplate(5, RefundOrderDialogComponent_ng_template_26_ng_container_2_vdr_dropdown_1_div_5_Template, 6, 8, "div", 33);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const discounts_r13 = ɵɵnextContext().ngIf;
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", discounts_r13);
  }
}
function RefundOrderDialogComponent_ng_template_26_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RefundOrderDialogComponent_ng_template_26_ng_container_2_vdr_dropdown_1_Template, 6, 1, "vdr-dropdown", 29);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const discounts_r13 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", discounts_r13.length);
  }
}
function RefundOrderDialogComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
    ɵɵtemplate(2, RefundOrderDialogComponent_ng_template_26_ng_container_2_Template, 2, 1, "ng-container", 29);
  }
  if (rf & 2) {
    const line_r12 = ctx.item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 2, line_r12.proratedUnitPriceWithTax, ctx_r9.order.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", line_r12.discounts);
  }
}
function RefundOrderDialogComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵelement(1, "vdr-line-refunds", 36);
  }
  if (rf & 2) {
    const line_r14 = ctx.item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", line_r14.quantity, " ");
    ɵɵadvance();
    ɵɵproperty("line", line_r14)("payments", ctx_r9.order.payments);
  }
}
function RefundOrderDialogComponent_ng_template_32_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 38);
    ɵɵlistener("ngModelChange", function RefundOrderDialogComponent_ng_template_32_input_0_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r15);
      const line_r16 = ɵɵnextContext().item;
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onRefundQuantityChange(line_r16.id, $event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r16 = ɵɵnextContext().item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r9.lineQuantities[line_r16.id].quantity)("max", line_r16.quantity);
  }
}
function RefundOrderDialogComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RefundOrderDialogComponent_ng_template_32_input_0_Template, 1, 2, "input", 37);
  }
  if (rf & 2) {
    const line_r16 = ctx.item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r9.lineCanBeRefundedOrCancelled(line_r16));
  }
}
function RefundOrderDialogComponent_ng_template_35_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 43);
    ɵɵtwoWayListener("ngModelChange", function RefundOrderDialogComponent_ng_template_35_input_2_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r17);
      const line_r18 = ɵɵnextContext().item;
      const ctx_r9 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r9.lineQuantities[line_r18.id].cancel, $event) || (ctx_r9.lineQuantities[line_r18.id].cancel = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r18 = ɵɵnextContext().item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("disabled", 0 === ctx_r9.lineQuantities[line_r18.id].quantity);
    ɵɵtwoWayProperty("ngModel", ctx_r9.lineQuantities[line_r18.id].cancel);
  }
}
function RefundOrderDialogComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 39)(1, "label", 40);
    ɵɵtemplate(2, RefundOrderDialogComponent_ng_template_35_input_2_Template, 1, 2, "input", 41);
    ɵɵelementStart(3, "span", 42);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const line_r18 = ctx.item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r9.lineCanBeRefundedOrCancelled(line_r18));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 2, "order.return-to-stock"));
  }
}
function RefundOrderDialogComponent_label_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 44)(1, "input", 45);
    ɵɵlistener("change", function RefundOrderDialogComponent_label_39_Template_input_change_1_listener() {
      const shippingLine_r20 = ɵɵrestoreView(_r19).$implicit;
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.toggleShippingRefund(shippingLine_r20.id));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 42);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "span", 42);
    ɵɵtext(8);
    ɵɵpipe(9, "localeCurrency");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const shippingLine_r20 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "order.refund-shipping"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", shippingLine_r20.shippingMethod.name, ":");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ɵɵpipeBind2(9, 5, shippingLine_r20.discountedPriceWithTax, ctx_r9.order.currencyCode), " ");
  }
}
function RefundOrderDialogComponent_ng_template_49_clr_alert_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-alert", 51)(1, "clr-alert-item");
    ɵɵtext(2);
    ɵɵpipe(3, "currency");
    ɵɵpipe(4, "localeCurrency");
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("clrAlertType", "danger")("clrAlertClosable", false);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 9, "order.refund-total-error", ɵɵpureFunction2(12, _c11, ɵɵpipeBind2(3, 3, 0, ctx_r9.order.currencyCode), ɵɵpipeBind2(4, 6, ctx_r9.totalRefundableAmount, ctx_r9.order.currencyCode))), " ");
  }
}
function RefundOrderDialogComponent_ng_template_49_clr_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-alert", 51)(1, "clr-alert-item");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵproperty("clrAlertType", "danger")("clrAlertClosable", false);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "order.refund-total-warning"), " ");
  }
}
function RefundOrderDialogComponent_ng_template_49_clr_alert_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-alert", 51)(1, "clr-alert-item");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵproperty("clrAlertType", "danger")("clrAlertClosable", false);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "order.refund-cancellation-reason-required"), " ");
  }
}
function RefundOrderDialogComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "div", 46);
    ɵɵtemplate(2, RefundOrderDialogComponent_ng_template_49_clr_alert_2_Template, 6, 15, "clr-alert", 47)(3, RefundOrderDialogComponent_ng_template_49_clr_alert_3_Template, 4, 5, "clr-alert", 47)(4, RefundOrderDialogComponent_ng_template_49_clr_alert_4_Template, 4, 5, "clr-alert", 47);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 48)(6, "button", 49);
    ɵɵlistener("click", function RefundOrderDialogComponent_ng_template_49_Template_button_click_6_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.cancel());
    });
    ɵɵtext(7);
    ɵɵpipe(8, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 50);
    ɵɵlistener("click", function RefundOrderDialogComponent_ng_template_49_Template_button_click_9_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.select());
    });
    ɵɵtext(10);
    ɵɵpipe(11, "localeCurrency");
    ɵɵpipe(12, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r9.refundTotal < 0 || ctx_r9.totalRefundableAmount < ctx_r9.refundTotal);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r9.amountToRefundTotal < ctx_r9.refundTotal || ctx_r9.refundTotal < ctx_r9.amountToRefundTotal);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r9.amountToRefundTotal && !ctx_r9.reason);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 6, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r9.canSubmit());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(12, 11, "order.refund-with-amount", ɵɵpureFunction1(14, _c10, ɵɵpipeBind2(11, 8, ctx_r9.amountToRefundTotal, ctx_r9.order.currencyCode))), " ");
  }
}
var _c12 = (a0) => ({
  method: a0
});
function SettleRefundDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.settle-refund"));
  }
}
function SettleRefundDialogComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function SettleRefundDialogComponent_ng_template_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 5);
    ɵɵlistener("click", function SettleRefundDialogComponent_ng_template_9_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submit());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r1.transactionId);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "order.settle-refund"), " ");
  }
}
function PaymentStateLabelComponent_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 2);
  }
}
function RefundStateLabelComponent_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 2);
  }
}
function PaymentDetailComponent_vdr_labeled_data_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.error-message"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.payment.errorMessage, "\n");
  }
}
function PaymentDetailComponent_vdr_labeled_data_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.transaction-id"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.payment.transactionId, "\n");
  }
}
function OrderPaymentCardComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "localeCurrency");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, ctx_r0.payment.amount, ctx_r0.currencyCode));
  }
}
function OrderPaymentCardComponent_ng_container_10_vdr_labeled_data_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 14);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const refund_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.transaction-id"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", refund_r2.transactionId, " ");
  }
}
function OrderPaymentCardComponent_ng_container_10_vdr_labeled_data_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 14);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const refund_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.refund-reason"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", refund_r2.reason, " ");
  }
}
function OrderPaymentCardComponent_ng_container_10_vdr_labeled_data_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 14);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-object-tree", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const refund_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.refund-metadata"));
    ɵɵadvance(2);
    ɵɵproperty("value", refund_r2.metadata);
  }
}
function OrderPaymentCardComponent_ng_container_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17)(1, "button", 18);
    ɵɵlistener("click", function OrderPaymentCardComponent_ng_container_10_div_20_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const refund_r2 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.settleRefund.emit(refund_r2));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "order.settle-refund"), " ");
  }
}
function OrderPaymentCardComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10)(2, "div", 11);
    ɵɵelement(3, "clr-icon", 12);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelement(6, "div", 13)(7, "vdr-refund-state-label", 5);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 6)(9, "vdr-labeled-data", 14);
    ɵɵpipe(10, "translate");
    ɵɵtext(11);
    ɵɵpipe(12, "localeDate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "vdr-labeled-data", 14);
    ɵɵpipe(14, "translate");
    ɵɵtext(15);
    ɵɵpipe(16, "localeCurrency");
    ɵɵelementEnd();
    ɵɵtemplate(17, OrderPaymentCardComponent_ng_container_10_vdr_labeled_data_17_Template, 3, 4, "vdr-labeled-data", 15)(18, OrderPaymentCardComponent_ng_container_10_vdr_labeled_data_18_Template, 3, 4, "vdr-labeled-data", 15)(19, OrderPaymentCardComponent_ng_container_10_vdr_labeled_data_19_Template, 3, 4, "vdr-labeled-data", 15);
    ɵɵelementEnd();
    ɵɵtemplate(20, OrderPaymentCardComponent_ng_container_10_div_20_Template, 4, 3, "div", 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const refund_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(5, 11, "order.refund"), " #", refund_r2.id, " ");
    ɵɵadvance(3);
    ɵɵproperty("state", refund_r2.state);
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(10, 13, "common.created-at"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(12, 15, refund_r2.createdAt, "medium"), " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(14, 18, "order.refund-total"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(16, 20, refund_r2.total, ctx_r0.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", refund_r2.transactionId);
    ɵɵadvance();
    ɵɵproperty("ngIf", refund_r2.reason);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.refundHasMetadata(refund_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", refund_r2.state === "Pending");
  }
}
function OrderPaymentCardComponent_div_11_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function OrderPaymentCardComponent_div_11_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.settlePayment.emit(ctx_r0.payment));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.settle-payment"), " ");
  }
}
function OrderPaymentCardComponent_div_11_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "clr-icon", 25);
    ɵɵtext(2);
    ɵɵpipe(3, "stateI18nToken");
    ɵɵpipe(4, "translate");
    ɵɵpipe(5, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const nextState_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, "order.transition-to-state", ɵɵpureFunction1(8, _c0, ɵɵpipeBind1(4, 3, ɵɵpipeBind1(3, 1, nextState_r6)))), " ");
  }
}
function OrderPaymentCardComponent_div_11_ng_container_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 26);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.cancel-payment"), " ");
  }
}
function OrderPaymentCardComponent_div_11_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 23);
    ɵɵlistener("click", function OrderPaymentCardComponent_div_11_ng_container_6_Template_button_click_1_listener() {
      const nextState_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.transitionPaymentState.emit({
        payment: ctx_r0.payment,
        state: nextState_r6
      }));
    });
    ɵɵtemplate(2, OrderPaymentCardComponent_div_11_ng_container_6_ng_container_2_Template, 6, 10, "ng-container", 24)(3, OrderPaymentCardComponent_div_11_ng_container_6_ng_template_3_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const nextState_r6 = ctx.$implicit;
    const cancel_r7 = ɵɵreference(4);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", nextState_r6 !== "Cancelled")("ngIfElse", cancel_r7);
  }
}
function OrderPaymentCardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, OrderPaymentCardComponent_div_11_button_1_Template, 3, 3, "button", 19);
    ɵɵelementStart(2, "vdr-dropdown")(3, "button", 20);
    ɵɵelement(4, "clr-icon", 21);
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-dropdown-menu", 22);
    ɵɵtemplate(6, OrderPaymentCardComponent_div_11_ng_container_6_Template, 5, 2, "ng-container", 8);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.payment.nextStates.includes("Settled"));
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r0.nextOtherStates());
  }
}
var _c13 = ["portal"];
var _c14 = (a0, a1) => ({
  from: a0,
  to: a1
});
var _c15 = (a0, a1, a2) => ({
  from: a0,
  to: a1,
  id: a2
});
var _c16 = (a0) => ["/marketing", "promotions", a0];
var _c17 = (a0) => ({
  newCustomerName: a0
});
var _c18 = (a0) => ["/customer", "customers", a0];
function OrderHistoryComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.note-only-visible-to-administrators"), " ");
  }
}
function OrderHistoryComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.note-visible-to-customer"), " ");
  }
}
function OrderHistoryComponent_ng_container_15_vdr_order_history_entry_host_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-order-history-entry-host", 18);
    ɵɵlistener("expandClick", function OrderHistoryComponent_ng_container_15_vdr_order_history_entry_host_1_Template_vdr_order_history_entry_host_expandClick_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.expanded = !ctx_r1.expanded);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("order", ctx_r1.order)("entry", entry_r3)("expanded", ctx_r1.expanded);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.history-order-fulfilled"), " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.history-order-cancelled"), " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(3).$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "order.history-order-transition", ɵɵpureFunction2(4, _c14, entry_r3.data.from, entry_r3.data.to)), " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_2_div_1_Template, 3, 3, "div", 23)(2, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_2_div_2_Template, 3, 3, "div", 23)(3, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_2_ng_template_3_Template, 2, 7, "ng-template", 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r3.data.to === "Delivered");
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r3.data.to === "Cancelled");
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r3.data.to !== "Cancelled" && entry_r3.data.to !== "Delivered");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_3_div_4_vdr_chip_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 30);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "order.modification-settled"));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_3_div_4_vdr_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 31);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "order.modification-not-settled"));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "strong");
    ɵɵtext(4);
    ɵɵpipe(5, "localeCurrency");
    ɵɵelementEnd();
    ɵɵtemplate(6, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_3_div_4_vdr_chip_6_Template, 3, 3, "vdr-chip", 27)(7, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_3_div_4_vdr_chip_7_Template, 3, 3, "vdr-chip", 28);
    ɵɵelementStart(8, "vdr-history-entry-detail");
    ɵɵelement(9, "vdr-modification-detail", 29);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const modification_r5 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 6, "order.modify-order-price-difference"), ": ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 8, modification_r5.priceChange, ctx_r1.order.currencyCode));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", modification_r5.isSettled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !modification_r5.isSettled);
    ɵɵadvance(2);
    ɵɵproperty("order", ctx_r1.order)("modification", modification_r5);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_3_div_4_Template, 10, 11, "div", 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "order.history-order-modified"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.getModification(entry_r3.data.modificationId));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_ng_container_1_vdr_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 35);
    ɵɵtext(1);
    ɵɵpipe(2, "localeCurrency");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const payment_r6 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, payment_r6.amount, ctx_r1.order.currencyCode));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_ng_container_1_vdr_history_entry_detail_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-history-entry-detail");
    ɵɵelement(1, "vdr-payment-detail", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const payment_r7 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("payment", payment_r7)("currencyCode", ctx_r1.order.currencyCode);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 26);
    ɵɵtemplate(5, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_ng_container_1_vdr_chip_5_Template, 3, 4, "vdr-chip", 33)(6, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_ng_container_1_vdr_history_entry_detail_6_Template, 2, 2, "vdr-history-entry-detail", 34);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "order.history-payment-settled"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.getPayment(entry_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getPayment(entry_r3));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    let tmp_7_0;
    const entry_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "order.history-payment-transition", ɵɵpureFunction3(4, _c15, entry_r3.data.from, entry_r3.data.to, (tmp_7_0 = ctx_r1.getPayment(entry_r3)) == null ? null : tmp_7_0.transactionId)), " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_ng_container_1_Template, 7, 5, "ng-container", 32)(2, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_ng_template_2_Template, 2, 8, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const regularPaymentTransition_r8 = ɵɵreference(3);
    const entry_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r3.data.to === "Settled")("ngIfElse", regularPaymentTransition_r8);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 26)(5, "vdr-chip", 37);
    ɵɵtext(6);
    ɵɵpipe(7, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(8, "vdr-history-entry-detail")(9, "vdr-labeled-data", 38);
    ɵɵpipe(10, "translate");
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementStart(12, "vdr-labeled-data", 38);
    ɵɵpipe(13, "translate");
    ɵɵelement(14, "vdr-simple-item-list", 39);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const refund_r9 = ctx.ngIf;
    const entry_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", ɵɵpipeBind1(3, 7, "order.refund"), " #", refund_r9.id, "");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind2(7, 9, refund_r9.total, ctx_r1.order.currencyCode));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(10, 12, "order.cancellation-reason"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", entry_r3.data.reason, " ");
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(13, 14, "order.contents"));
    ɵɵadvance(2);
    ɵɵproperty("items", ctx_r1.getCancelledItems(refund_r9.lines));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_5_ng_container_1_ng_container_1_Template, 15, 16, "ng-container", 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getRefund(entry_r3));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(3).$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "order.history-refund-transition", ɵɵpureFunction3(4, _c15, entry_r3.data.from, entry_r3.data.to, entry_r3.data.refundId)), " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 32)(2, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_5_ng_template_2_Template, 2, 8, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const regularRefundTransition_r10 = ɵɵreference(3);
    const entry_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r3.data.to === "Settled")("ngIfElse", regularRefundTransition_r10);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_6_vdr_history_entry_detail_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-history-entry-detail")(1, "vdr-labeled-data", 38);
    ɵɵpipe(2, "translate");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-labeled-data", 38);
    ɵɵpipe(5, "translate");
    ɵɵelement(6, "vdr-simple-item-list", 39);
    ɵɵelementEnd();
    ɵɵelementStart(7, "vdr-labeled-data", 38);
    ɵɵpipe(8, "translate");
    ɵɵtext(9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const items_r11 = ctx.ngIf;
    const entry_r3 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(2, 6, "order.cancellation-reason"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", entry_r3.data.reason, " ");
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(5, 8, "order.contents"));
    ɵɵadvance(2);
    ɵɵproperty("items", items_r11);
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(8, 10, "order.shipping-cancelled"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", entry_r3.data.shippingCancelled, " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵtemplate(3, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_6_vdr_history_entry_detail_3_Template, 10, 12, "vdr-history-entry-detail", 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 2, "order.history-items-cancelled", ɵɵpureFunction1(5, _c2, ctx_r1.getCancelledQuantity(entry_r3))), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.getCancelledItems(entry_r3.data.lines));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_7_vdr_history_entry_detail_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-history-entry-detail");
    ɵɵelement(1, "vdr-fulfillment-detail", 40);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fulfillment_r12 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("fulfillmentId", fulfillment_r12.id)("order", ctx_r1.order);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵtemplate(3, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_7_vdr_history_entry_detail_3_Template, 2, 2, "vdr-history-entry-detail", 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "order.history-fulfillment-created"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.getFulfillment(entry_r3));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const entry_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "order.history-fulfillment-delivered"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(5, 5, "order.tracking-code"), ": ", (tmp_7_0 = ctx_r1.getFulfillment(entry_r3)) == null ? null : tmp_7_0.trackingCode, " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const entry_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "order.history-fulfillment-shipped"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(5, 5, "order.tracking-code"), ": ", (tmp_7_0 = ctx_r1.getFulfillment(entry_r3)) == null ? null : tmp_7_0.trackingCode, " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "order.history-fulfillment-transition", ɵɵpureFunction2(4, _c14, entry_r3.data.from, entry_r3.data.to)), " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_vdr_history_entry_detail_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-history-entry-detail");
    ɵɵelement(1, "vdr-fulfillment-detail", 40);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fulfillment_r13 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("fulfillmentId", fulfillment_r13.id)("order", ctx_r1.order);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_ng_container_1_Template, 6, 7, "ng-container", 34)(2, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_ng_container_2_Template, 6, 7, "ng-container", 34)(3, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_ng_container_3_Template, 3, 7, "ng-container", 34)(4, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_vdr_history_entry_detail_4_Template, 2, 2, "vdr-history-entry-detail", 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r3.data.to === "Delivered");
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r3.data.to === "Shipped");
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r3.data.to !== "Delivered" && entry_r3.data.to !== "Shipped");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getFulfillment(entry_r3));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 53);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.public"));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 54);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.private"));
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 41)(2, "div", 42);
    ɵɵtemplate(3, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_9_span_3_Template, 3, 3, "span", 43)(4, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_9_span_4_Template, 3, 3, "span", 44);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelement(6, "div", 45);
    ɵɵelementStart(7, "vdr-dropdown")(8, "button", 46);
    ɵɵelement(9, "clr-icon", 47);
    ɵɵelementEnd();
    ɵɵelementStart(10, "vdr-dropdown-menu", 48)(11, "button", 49);
    ɵɵpipe(12, "hasPermission");
    ɵɵlistener("click", function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_9_Template_button_click_11_listener() {
      ɵɵrestoreView(_r14);
      const entry_r3 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateNote.emit(entry_r3));
    });
    ɵɵelement(13, "clr-icon", 50);
    ɵɵtext(14);
    ɵɵpipe(15, "translate");
    ɵɵelementEnd();
    ɵɵelement(16, "div", 51);
    ɵɵelementStart(17, "button", 49);
    ɵɵpipe(18, "hasPermission");
    ɵɵlistener("click", function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_9_Template_button_click_17_listener() {
      ɵɵrestoreView(_r14);
      const entry_r3 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.deleteNote.emit(entry_r3));
    });
    ɵɵelement(19, "clr-icon", 52);
    ɵɵtext(20);
    ɵɵpipe(21, "translate");
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(3);
    ɵɵproperty("ngIf", entry_r3.isPublic);
    ɵɵadvance();
    ɵɵproperty("ngIf", !entry_r3.isPublic);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", entry_r3.data.note, " ");
    ɵɵadvance(6);
    ɵɵproperty("disabled", !ɵɵpipeBind1(12, 7, "UpdateOrder"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 9, "common.edit"), " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", !ɵɵpipeBind1(18, 11, "UpdateOrder"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 13, "common.delete"), " ");
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "vdr-chip")(4, "a", 55);
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "order.history-coupon-code-applied"), ": ");
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpureFunction1(5, _c16, entry_r3.data.promotionId));
    ɵɵadvance();
    ɵɵtextInterpolate(entry_r3.data.couponCode);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "vdr-chip")(4, "span", 56);
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "order.history-coupon-code-removed"), ": ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(entry_r3.data.couponCode);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_12_a_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 58);
    ɵɵelement(1, "clr-icon", 59);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "clr-icon", 60);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c18, entry_r3.data.previousCustomerId));
    ɵɵadvance(3);
    ɵɵtextInterpolate(entry_r3.data.previousCustomerName);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_12_a_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 58);
    ɵɵelement(1, "clr-icon", 59);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "clr-icon", 60);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c18, entry_r3.data.newCustomerId));
    ɵɵadvance(3);
    ɵɵtextInterpolate(entry_r3.data.newCustomerName);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 41)(5, "div", 42);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelement(7, "div", 45);
    ɵɵelementStart(8, "vdr-history-entry-detail")(9, "vdr-labeled-data", 38);
    ɵɵpipe(10, "translate");
    ɵɵtemplate(11, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_12_a_11_Template, 5, 4, "a", 57);
    ɵɵelementEnd();
    ɵɵelementStart(12, "vdr-labeled-data", 38);
    ɵɵpipe(13, "translate");
    ɵɵtemplate(14, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_12_a_14_Template, 5, 4, "a", 57);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 6, "order.history-customer-updated", ɵɵpureFunction1(13, _c17, entry_r3.data.newCustomerName)), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", entry_r3.data.note, " ");
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(10, 9, "order.previous-customer"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entry_r3.data.previousCustomerId);
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(13, 11, "order.new-customer"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entry_r3.data.newCustomerId);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_13_vdr_history_entry_detail_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-history-entry-detail");
    ɵɵelement(1, "vdr-object-tree", 61);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("value", entry_r3.data);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_13_vdr_history_entry_detail_4_Template, 2, 1, "vdr-history-entry-detail", 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, entry_r3.type), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entry_r3.data);
  }
}
function OrderHistoryComponent_ng_container_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-timeline-entry", 19);
    ɵɵlistener("expandClick", function OrderHistoryComponent_ng_container_15_ng_template_2_Template_vdr_timeline_entry_expandClick_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.expanded = !ctx_r1.expanded);
    });
    ɵɵelementContainerStart(1, 20);
    ɵɵtemplate(2, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_2_Template, 4, 3, "ng-container", 21)(3, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_3_Template, 5, 4, "ng-container", 21)(4, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_4_Template, 4, 2, "ng-container", 21)(5, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_5_Template, 4, 2, "ng-container", 21)(6, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_6_Template, 4, 7, "ng-container", 21)(7, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_7_Template, 4, 4, "ng-container", 21)(8, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_8_Template, 5, 4, "ng-container", 21)(9, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_9_Template, 22, 15, "ng-container", 21)(10, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_10_Template, 6, 7, "ng-container", 21)(11, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_11_Template, 6, 4, "ng-container", 21)(12, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_12_Template, 15, 15, "ng-container", 21)(13, OrderHistoryComponent_ng_container_15_ng_template_2_ng_container_13_Template, 5, 4, "ng-container", 22);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("displayType", ctx_r1.getDisplayType(entry_r3))("iconShape", ctx_r1.getTimelineIcon(entry_r3))("createdAt", entry_r3.createdAt)("name", ctx_r1.getName(entry_r3))("featured", ctx_r1.isFeatured(entry_r3))("collapsed", !ctx_r1.expanded && !ctx_r1.isFeatured(entry_r3));
    ɵɵadvance();
    ɵɵproperty("ngSwitch", entry_r3.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_STATE_TRANSITION);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_MODIFIED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_PAYMENT_TRANSITION);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_REFUND_TRANSITION);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_CANCELLATION);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_FULFILLMENT);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_FULFILLMENT_TRANSITION);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_NOTE);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_COUPON_APPLIED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_COUPON_REMOVED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.ORDER_CUSTOMER_UPDATED);
  }
}
function OrderHistoryComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderHistoryComponent_ng_container_15_vdr_order_history_entry_host_1_Template, 1, 3, "vdr-order-history-entry-host", 17)(2, OrderHistoryComponent_ng_container_15_ng_template_2_Template, 14, 18, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const defaultComponents_r15 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasCustomComponent(entry_r3.type))("ngIfElse", defaultComponents_r15);
  }
}
var _c19 = (a0) => ["seller-orders", a0];
function SellerOrdersCardComponent_div_3_vdr_labeled_data_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 5);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const seller_r1 = ctx.ngIf;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "common.seller"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", seller_r1.name, " ");
  }
}
function SellerOrdersCardComponent_div_3_vdr_labeled_data_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 5);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵpipe(3, "localeCurrency");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.total"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 4, order_r2.totalWithTax, order_r2.currencyCode), " ");
  }
}
function SellerOrdersCardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "a", 3);
    ɵɵtext(2);
    ɵɵelement(3, "clr-icon", 4);
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-labeled-data", 5);
    ɵɵpipe(5, "translate");
    ɵɵelement(6, "vdr-order-state-label", 6);
    ɵɵelementEnd();
    ɵɵtemplate(7, SellerOrdersCardComponent_div_3_vdr_labeled_data_7_Template, 3, 4, "vdr-labeled-data", 7)(8, SellerOrdersCardComponent_div_3_vdr_labeled_data_8_Template, 4, 7, "vdr-labeled-data", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpureFunction1(8, _c19, order_r2.id));
    ɵɵadvance();
    ɵɵtextInterpolate1("", order_r2.code, " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(5, 6, "order.state"));
    ɵɵadvance(2);
    ɵɵproperty("state", order_r2.state);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getSeller(order_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getSeller(order_r2));
  }
}
var _c20 = () => ["UpdateOrder", "ReadCustomer"];
function OrderDetailComponent_vdr_action_bar_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function OrderDetailComponent_vdr_action_bar_1_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const order_r3 = ɵɵnextContext().ngIf;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.addManualPayment(order_r3));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵpipe(3, "localeCurrency");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r3 = ɵɵnextContext().ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "order.add-payment-to-order"), " (", ɵɵpipeBind2(3, 4, ctx_r3.outstandingPaymentAmount(order_r3), order_r3.currencyCode), ") ");
  }
}
function OrderDetailComponent_vdr_action_bar_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function OrderDetailComponent_vdr_action_bar_1_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.transitionToState("ArrangingAdditionalPayment"));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.arrange-additional-payment"), " ");
  }
}
function OrderDetailComponent_vdr_action_bar_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function OrderDetailComponent_vdr_action_bar_1_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.fulfillOrder());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r3 = ɵɵnextContext().ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("disabled", !ctx_r3.canAddFulfillment(order_r3));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "order.fulfill-order"), " ");
  }
}
function OrderDetailComponent_vdr_action_bar_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 8);
    ɵɵlistener("click", function OrderDetailComponent_vdr_action_bar_1_ng_container_8_Template_button_click_1_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.transitionToModifying());
    });
    ɵɵelement(2, "clr-icon", 12);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelement(5, "div", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "order.modify-order"), " ");
  }
}
function OrderDetailComponent_vdr_action_bar_1_button_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.refund-and-cancel-order"), " ");
  }
}
function OrderDetailComponent_vdr_action_bar_1_button_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "order.cancel-order"), " ");
  }
}
function OrderDetailComponent_vdr_action_bar_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function OrderDetailComponent_vdr_action_bar_1_button_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const order_r3 = ɵɵnextContext().ngIf;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.cancelOrRefund(order_r3));
    });
    ɵɵelement(1, "clr-icon", 13);
    ɵɵtemplate(2, OrderDetailComponent_vdr_action_bar_1_button_9_ng_container_2_Template, 3, 3, "ng-container", 14)(3, OrderDetailComponent_vdr_action_bar_1_button_9_ng_template_3_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cancelOnly_r9 = ɵɵreference(4);
    const order_r3 = ɵɵnextContext().ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.orderHasSettledPayments(order_r3))("ngIfElse", cancelOnly_r9);
  }
}
function OrderDetailComponent_vdr_action_bar_1_ng_container_10_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function OrderDetailComponent_vdr_action_bar_1_ng_container_10_button_2_Template_button_click_0_listener() {
      const nextState_r11 = ɵɵrestoreView(_r10).$implicit;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.transitionToState(nextState_r11));
    });
    ɵɵelement(1, "clr-icon", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "stateI18nToken");
    ɵɵpipe(4, "translate");
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const nextState_r11 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, "order.transition-to-state", ɵɵpureFunction1(8, _c0, ɵɵpipeBind1(4, 3, ɵɵpipeBind1(3, 1, nextState_r11)))), " ");
  }
}
function OrderDetailComponent_vdr_action_bar_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 7);
    ɵɵtemplate(2, OrderDetailComponent_vdr_action_bar_1_ng_container_10_button_2_Template, 6, 10, "button", 15);
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 1, ctx_r3.nextStates$));
  }
}
function OrderDetailComponent_vdr_action_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-action-bar");
    ɵɵelement(1, "vdr-ab-left");
    ɵɵelementStart(2, "vdr-ab-right");
    ɵɵelement(3, "vdr-action-bar-items", 2);
    ɵɵtemplate(4, OrderDetailComponent_vdr_action_bar_1_button_4_Template, 4, 7, "button", 3)(5, OrderDetailComponent_vdr_action_bar_1_button_5_Template, 3, 3, "button", 3)(6, OrderDetailComponent_vdr_action_bar_1_button_6_Template, 3, 4, "button", 4);
    ɵɵelementStart(7, "vdr-action-bar-dropdown-menu", 5);
    ɵɵtemplate(8, OrderDetailComponent_vdr_action_bar_1_ng_container_8_Template, 6, 3, "ng-container", 1)(9, OrderDetailComponent_vdr_action_bar_1_button_9_Template, 5, 2, "button", 6)(10, OrderDetailComponent_vdr_action_bar_1_ng_container_10_Template, 4, 3, "ng-container", 1);
    ɵɵpipe(11, "async");
    ɵɵelement(12, "div", 7);
    ɵɵelementStart(13, "button", 8);
    ɵɵlistener("click", function OrderDetailComponent_vdr_action_bar_1_Template_button_click_13_listener() {
      const order_r3 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.manuallyTransitionToState(order_r3));
    });
    ɵɵelement(14, "clr-icon", 9);
    ɵɵtext(15);
    ɵɵpipe(16, "translate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const order_r3 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("ngIf", order_r3.type !== "Aggregate" && (order_r3.state === "ArrangingPayment" || order_r3.state === "ArrangingAdditionalPayment") && (ctx_r3.hasUnsettledModifications(order_r3) || 0 < ctx_r3.outstandingPaymentAmount(order_r3)));
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r3.type !== "Aggregate" && order_r3.active === false && order_r3.state !== "ArrangingAdditionalPayment" && order_r3.state !== "ArrangingPayment" && 0 < ctx_r3.outstandingPaymentAmount(order_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r3.type !== "Aggregate");
    ɵɵadvance();
    ɵɵproperty("alwaysShow", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r3.type !== "Aggregate" && order_r3.nextStates.includes("Modifying"));
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r3.type !== "Aggregate" && order_r3.nextStates.includes("Cancelled"));
    ɵɵadvance();
    ɵɵproperty("ngIf", (tmp_8_0 = ɵɵpipeBind1(11, 8, ctx_r3.nextStates$)) == null ? null : tmp_8_0.length);
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 10, "order.manually-transition-to-state"), " ");
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵpipe(1, "translate");
    ɵɵlistener("click", function OrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.openStateDiagram());
    });
    ɵɵelement(2, "clr-icon", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("title", ɵɵpipeBind1(1, 1, "order.order-state-diagram"));
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_ng_template_8_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵpipe(1, "translate");
    ɵɵlistener("click", function OrderDetailComponent_vdr_page_detail_layout_3_ng_template_8_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.setOrderCustomer());
    });
    ɵɵelement(2, "clr-icon", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("title", ɵɵpipeBind1(1, 1, "order.assign-order-to-another-customer"));
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderDetailComponent_vdr_page_detail_layout_3_ng_template_8_button_0_Template, 3, 3, "button", 35);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(1, _c20));
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_labeled_data_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 37);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-formatted-address", 38);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r15 = ɵɵnextContext().ngIf;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.shipping-address"));
    ɵɵadvance(2);
    ɵɵproperty("address", order_r15.shippingAddress);
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_labeled_data_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 39);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-formatted-address", 38);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r15 = ɵɵnextContext().ngIf;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.billing-address"));
    ɵɵadvance(2);
    ɵɵproperty("address", order_r15.billingAddress);
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_12_vdr_order_payment_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-order-payment-card", 41);
    ɵɵlistener("settlePayment", function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_12_vdr_order_payment_card_2_Template_vdr_order_payment_card_settlePayment_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.settlePayment($event));
    })("transitionPaymentState", function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_12_vdr_order_payment_card_2_Template_vdr_order_payment_card_transitionPaymentState_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.transitionPaymentState($event));
    })("settleRefund", function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_12_vdr_order_payment_card_2_Template_vdr_order_payment_card_settleRefund_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.settleRefund($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const payment_r17 = ctx.$implicit;
    const order_r15 = ɵɵnextContext(2).ngIf;
    ɵɵproperty("currencyCode", order_r15.currencyCode)("payment", payment_r17);
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 17);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_12_vdr_order_payment_card_2_Template, 1, 2, "vdr-order-payment-card", 40);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r15 = ɵɵnextContext().ngIf;
    ɵɵproperty("title", ɵɵpipeBind1(1, 2, "order.payments"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", order_r15.payments);
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_13_vdr_fulfillment_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-fulfillment-card", 43);
    ɵɵlistener("transitionState", function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_13_vdr_fulfillment_card_1_Template_vdr_fulfillment_card_transitionState_0_listener($event) {
      const fulfillment_r19 = ɵɵrestoreView(_r18).$implicit;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.transitionFulfillment(fulfillment_r19.id, $event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fulfillment_r19 = ctx.$implicit;
    const order_r15 = ɵɵnextContext(2).ngIf;
    ɵɵproperty("fulfillment", fulfillment_r19)("order", order_r15);
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵtemplate(1, OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_13_vdr_fulfillment_card_1_Template, 1, 2, "vdr-fulfillment-card", 42);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r15 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", order_r15.fulfillments);
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_page_entity_info_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-page-entity-info", 44);
  }
  if (rf & 2) {
    const entity_r20 = ctx.ngIf;
    ɵɵproperty("entity", entity_r20);
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_seller_orders_card_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-seller-orders-card", 45);
  }
  if (rf & 2) {
    const order_r15 = ɵɵnextContext().ngIf;
    ɵɵproperty("orderId", order_r15.id);
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵpipe(5, "percent");
    ɵɵelementEnd();
    ɵɵelementStart(6, "td");
    ɵɵtext(7);
    ɵɵpipe(8, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(9, "td");
    ɵɵtext(10);
    ɵɵpipe(11, "localeCurrency");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const order_r15 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(row_r21.description);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 4, row_r21.taxRate / 100, "0.0-3"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(8, 7, row_r21.taxBase, order_r15.currencyCode));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(11, 10, row_r21.taxTotal, order_r15.currencyCode));
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-card", 17);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 46);
    ɵɵpipe(3, "hasPermission");
    ɵɵelementStart(4, "button", 47);
    ɵɵlistener("click", function OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_40_Template_button_click_4_listener() {
      ɵɵrestoreView(_r22);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.updateCustomFields());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("title", ɵɵpipeBind1(1, 6, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r3.customFields)("customFieldsFormGroup", ctx_r3.detailForm.get("customFields"))("readonly", !ɵɵpipeBind1(3, 8, "UpdateOrder"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", ((tmp_7_0 = ctx_r3.detailForm.get("customFields")) == null ? null : tmp_7_0.pristine) || ((tmp_7_0 = ctx_r3.detailForm.get("customFields")) == null ? null : tmp_7_0.invalid));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 10, "common.update"), " ");
  }
}
function OrderDetailComponent_vdr_page_detail_layout_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-page-detail-layout")(1, "vdr-page-detail-sidebar")(2, "vdr-card", 17);
    ɵɵpipe(3, "translate");
    ɵɵtemplate(4, OrderDetailComponent_vdr_page_detail_layout_3_ng_template_4_Template, 3, 3, "ng-template", 18);
    ɵɵelement(5, "vdr-order-state-label", 19);
    ɵɵelementEnd();
    ɵɵelementStart(6, "vdr-card", 17);
    ɵɵpipe(7, "translate");
    ɵɵtemplate(8, OrderDetailComponent_vdr_page_detail_layout_3_ng_template_8_Template, 1, 2, "ng-template", 18);
    ɵɵelement(9, "vdr-customer-label", 20);
    ɵɵtemplate(10, OrderDetailComponent_vdr_page_detail_layout_3_vdr_labeled_data_10_Template, 3, 4, "vdr-labeled-data", 21)(11, OrderDetailComponent_vdr_page_detail_layout_3_vdr_labeled_data_11_Template, 3, 4, "vdr-labeled-data", 22);
    ɵɵelementEnd();
    ɵɵtemplate(12, OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_12_Template, 3, 4, "vdr-card", 23)(13, OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_13_Template, 2, 1, "vdr-card", 1);
    ɵɵelementStart(14, "vdr-card");
    ɵɵtemplate(15, OrderDetailComponent_vdr_page_detail_layout_3_vdr_page_entity_info_15_Template, 1, 1, "vdr-page-entity-info", 24);
    ɵɵpipe(16, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(17, "vdr-page-block");
    ɵɵtemplate(18, OrderDetailComponent_vdr_page_detail_layout_3_vdr_seller_orders_card_18_Template, 1, 1, "vdr-seller-orders-card", 25);
    ɵɵelementStart(19, "vdr-card", 26);
    ɵɵelement(20, "vdr-order-table", 27);
    ɵɵelementEnd();
    ɵɵelementStart(21, "vdr-card", 28);
    ɵɵpipe(22, "translate");
    ɵɵelementStart(23, "table", 29)(24, "thead")(25, "tr")(26, "th");
    ɵɵtext(27);
    ɵɵpipe(28, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(29, "th");
    ɵɵtext(30);
    ɵɵpipe(31, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(32, "th");
    ɵɵtext(33);
    ɵɵpipe(34, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(35, "th");
    ɵɵtext(36);
    ɵɵpipe(37, "translate");
    ɵɵelementEnd()()();
    ɵɵelementStart(38, "tbody");
    ɵɵtemplate(39, OrderDetailComponent_vdr_page_detail_layout_3_tr_39_Template, 12, 13, "tr", 30);
    ɵɵelementEnd()()();
    ɵɵtemplate(40, OrderDetailComponent_vdr_page_detail_layout_3_vdr_card_40_Template, 7, 12, "vdr-card", 23);
    ɵɵelement(41, "vdr-custom-detail-component-host", 31);
    ɵɵelementStart(42, "vdr-card", 17);
    ɵɵpipe(43, "translate");
    ɵɵelementStart(44, "vdr-order-history", 32);
    ɵɵpipe(45, "async");
    ɵɵlistener("addNote", function OrderDetailComponent_vdr_page_detail_layout_3_Template_vdr_order_history_addNote_44_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.addNote($event));
    })("updateNote", function OrderDetailComponent_vdr_page_detail_layout_3_Template_vdr_order_history_updateNote_44_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.updateNote($event));
    })("deleteNote", function OrderDetailComponent_vdr_page_detail_layout_3_Template_vdr_order_history_deleteNote_44_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.deleteNote($event));
    });
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const order_r15 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(3, 26, "order.state"));
    ɵɵadvance(3);
    ɵɵproperty("state", order_r15.state);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(7, 28, "order.customer"));
    ɵɵadvance(3);
    ɵɵproperty("customer", order_r15.customer);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.getOrderAddressLines(order_r15.shippingAddress).length);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.getOrderAddressLines(order_r15.billingAddress).length);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r15.payments == null ? null : order_r15.payments.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r15.fulfillments == null ? null : order_r15.fulfillments.length);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(16, 30, ctx_r3.entity$));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r15.sellerOrders.length);
    ɵɵadvance();
    ɵɵproperty("paddingX", false);
    ɵɵadvance();
    ɵɵproperty("order", order_r15)("orderLineCustomFields", ctx_r3.orderLineCustomFields);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(22, 32, "order.tax-summary"))("paddingX", false);
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(28, 34, "common.description"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(31, 36, "order.tax-rate"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(34, 38, "order.tax-base"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(37, 40, "order.tax-total"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", order_r15.taxSummary);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.customFields.length);
    ɵɵadvance();
    ɵɵproperty("entity$", ctx_r3.entity$)("detailForm", ctx_r3.detailForm);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(43, 42, "order.order-history"));
    ɵɵadvance(2);
    ɵɵproperty("order", order_r15)("history", ɵɵpipeBind1(45, 44, ctx_r3.history$));
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", line_r1, " ");
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 2);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, OrderModificationSummaryComponent_vdr_labeled_data_0_div_2_Template, 2, 1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind2(1, 2, "order.modification-adjusting-lines", ɵɵpureFunction1(5, _c2, ctx_r1.modifyOrderInput.adjustOrderLines == null ? null : ctx_r1.modifyOrderInput.adjustOrderLines.length)));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.adjustedLines);
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", item_r3.productVariant.name, " x ", item_r3.quantity, " ");
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 2);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, OrderModificationSummaryComponent_vdr_labeled_data_1_div_2_Template, 2, 2, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind2(1, 2, "order.modification-adding-items", ɵɵpureFunction1(5, _c2, ctx_r1.modifyOrderInput.addItems == null ? null : ctx_r1.modifyOrderInput.addItems.length)));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.addedLines);
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵpipe(2, "localeCurrency");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const surcharge_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", surcharge_r4.description, ": ", ɵɵpipeBind2(2, 2, surcharge_r4.price, ctx_r1.orderSnapshot.currencyCode), " ");
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 2);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, OrderModificationSummaryComponent_vdr_labeled_data_2_div_2_Template, 3, 5, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind2(1, 2, "order.modification-adding-surcharges", ɵɵpureFunction1(5, _c2, ctx_r1.modifyOrderInput.surcharges == null ? null : ctx_r1.modifyOrderInput.surcharges.length)));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.modifyOrderInput.surcharges);
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 2);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const updatedShippingFields_r5 = ctx.ngIf;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.modification-updating-shipping-address"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", updatedShippingFields_r5, "\n");
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 2);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const updatedBillingFields_r6 = ctx.ngIf;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.modification-updating-billing-address"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", updatedBillingFields_r6, "\n");
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const change_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(change_r7);
  }
}
function OrderModificationSummaryComponent_vdr_labeled_data_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 2);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, OrderModificationSummaryComponent_vdr_labeled_data_5_div_2_Template, 2, 1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.set-coupon-codes"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.couponCodeChanges);
  }
}
function OrderModificationSummaryComponent_ng_container_6_vdr_labeled_data_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const change_r8 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(change_r8);
  }
}
function OrderModificationSummaryComponent_ng_container_6_vdr_labeled_data_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 2);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, OrderModificationSummaryComponent_ng_container_6_vdr_labeled_data_1_div_2_Template, 2, 1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const updatedShippingMethods_r9 = ɵɵnextContext().ngIf;
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.shipping-method"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", updatedShippingMethods_r9);
  }
}
function OrderModificationSummaryComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderModificationSummaryComponent_ng_container_6_vdr_labeled_data_1_Template, 3, 4, "vdr-labeled-data", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const updatedShippingMethods_r9 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", updatedShippingMethods_r9.length);
  }
}
function OrderEditsPreviewDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "order.confirm-modifications"));
  }
}
function OrderEditsPreviewDialogComponent_vdr_payment_for_refund_selector_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-payment-for-refund-selector", 10);
    ɵɵlistener("paymentSelected", function OrderEditsPreviewDialogComponent_vdr_payment_for_refund_selector_4_Template_vdr_payment_for_refund_selector_paymentSelected_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaymentSelected($event.payment, $event.selected));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("refundablePayments", ctx_r1.refundablePayments)("order", ctx_r1.order);
  }
}
function OrderEditsPreviewDialogComponent_vdr_form_field_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-form-field", 7);
    ɵɵpipe(1, "translate");
    ɵɵelementStart(2, "textarea", 11);
    ɵɵtwoWayListener("ngModelChange", function OrderEditsPreviewDialogComponent_vdr_form_field_12_Template_textarea_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.refundNote, $event) || (ctx_r1.refundNote = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.refund-cancellation-reason"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r1.refundNote);
  }
}
function OrderEditsPreviewDialogComponent_ng_template_13_clr_alert_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-alert", 18)(1, "clr-alert-item");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵproperty("clrAlertType", "danger")("clrAlertClosable", false);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "order.refund-total-warning"), " ");
  }
}
function OrderEditsPreviewDialogComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "div", 12);
    ɵɵtemplate(2, OrderEditsPreviewDialogComponent_ng_template_13_clr_alert_2_Template, 4, 5, "clr-alert", 13);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 14)(4, "clr-alert", 15)(5, "clr-alert-item");
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵpipe(8, "localeCurrency");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "button", 16);
    ɵɵlistener("click", function OrderEditsPreviewDialogComponent_ng_template_13_Template_button_click_9_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(10);
    ɵɵpipe(11, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "button", 17);
    ɵɵlistener("click", function OrderEditsPreviewDialogComponent_ng_template_13_Template_button_click_12_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submit());
    });
    ɵɵtext(13);
    ɵɵpipe(14, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.priceDifference < 0 && !ctx_r1.refundsCoverDifference());
    ɵɵadvance(2);
    ɵɵproperty("clrAlertType", "primary")("clrAlertClosable", false);
    ɵɵadvance(2);
    ɵɵtextInterpolate3(" ", ɵɵpipeBind1(7, 9, "order.modify-order-price-difference"), " ", 0 < ctx_r1.priceDifference ? "+" : "", "", ɵɵpipeBind2(8, 11, ctx_r1.priceDifference, ctx_r1.order.currencyCode), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 14, "common.cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.priceDifference < 0 ? !ctx_r1.refundsCoverDifference() : false);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 16, "common.confirm"), " ");
  }
}
var _c21 = (a0) => ({
  rate: a0
});
function OrderEditorComponent_vdr_action_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-action-bar")(1, "vdr-ab-left");
    ɵɵelement(2, "div", 2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "vdr-ab-right")(4, "button", 3);
    ɵɵlistener("click", function OrderEditorComponent_vdr_action_bar_1_Template_button_click_4_listener() {
      const order_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.transitionToPriorState(order_r2));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 1, "order.cancel-modification"), " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 51);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "order.no-modifications-made"), " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 52);
    ɵɵpipe(1, "translate");
    ɵɵlistener("click", function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_23_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.editingShippingAddress = !ctx_r2.editingShippingAddress);
    });
    ɵɵelement(2, "clr-icon", 53);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("title", ɵɵpipeBind1(1, 1, "order.edit-shipping-address"));
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_vdr_formatted_address_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-formatted-address", 54);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("address", ctx_r2.shippingAddressForm.value);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_vdr_address_form_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-address-form", 55);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r2.shippingAddressForm)("availableCountries", ɵɵpipeBind1(1, 3, ctx_r2.availableCountries$))("customFields", ctx_r2.addressCustomFields);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 52);
    ɵɵpipe(1, "translate");
    ɵɵlistener("click", function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_28_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.editingBillingAddress = !ctx_r2.editingBillingAddress);
    });
    ɵɵelement(2, "clr-icon", 53);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("title", ɵɵpipeBind1(1, 1, "order.edit-billing-address"));
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_vdr_formatted_address_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-formatted-address", 54);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("address", ctx_r2.billingAddressForm.value);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_vdr_address_form_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-address-form", 55);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r2.billingAddressForm)("availableCountries", ɵɵpipeBind1(1, 3, ctx_r2.availableCountries$))("customFields", ctx_r2.addressCustomFields);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r8 = ctx.item;
    ɵɵtextInterpolate1(" ", line_r8.id, " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const line_r9 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, line_r9.createdAt, "short"), " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const line_r10 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, line_r10.updatedAt, "short"), " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_45_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 58);
    ɵɵpipe(1, "assetPreview");
  }
  if (rf & 2) {
    const asset_r11 = ctx.ngIf;
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, asset_r11, "tiny"), ɵɵsanitizeUrl);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_45_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 59);
    ɵɵelement(1, "clr-icon", 60);
    ɵɵelementEnd();
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 56);
    ɵɵtemplate(1, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_45_img_1_Template, 2, 4, "img", 57)(2, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_45_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const line_r12 = ctx.item;
    const imagePlaceholder_r13 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", line_r12.featuredAsset)("ngIfElse", imagePlaceholder_r13);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r14 = ctx.item;
    ɵɵtextInterpolate1(" ", line_r14.productVariant.name, " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const line_r15 = ctx.item;
    ɵɵtextInterpolate1(" ", line_r15.productVariant.sku, " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 61)(1, "div");
    ɵɵtext(2);
    ɵɵpipe(3, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 62);
    ɵɵpipe(5, "translate");
    ɵɵtext(6);
    ɵɵpipe(7, "localeCurrency");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const line_r16 = ctx.item;
    const order_r5 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 3, line_r16.unitPriceWithTax, order_r5.currencyCode));
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(5, 6, "order.net-price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 8, line_r16.unitPrice, order_r5.currencyCode), " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_57_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 67);
    ɵɵlistener("click", function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_57_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r19);
      const line_r18 = ɵɵnextContext().item;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.removeAddedItem(line_r18.id));
    });
    ɵɵelement(1, "clr-icon", 68);
    ɵɵelementEnd();
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 63);
    ɵɵlistener("input", function OrderEditorComponent_vdr_page_detail_layout_3_ng_template_57_Template_input_input_0_listener($event) {
      const line_r18 = ɵɵrestoreView(_r17).item;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.updateLineQuantity(line_r18, $event.target.value));
    });
    ɵɵelementEnd();
    ɵɵtemplate(1, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_57_button_1_Template, 2, 0, "button", 64);
    ɵɵelement(2, "vdr-line-refunds", 65)(3, "vdr-line-fulfillment", 66);
  }
  if (rf & 2) {
    const line_r18 = ctx.item;
    const order_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.getInitialLineQuantity(line_r18.id));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isAddedLine(line_r18));
    ɵɵadvance();
    ɵɵproperty("line", line_r18)("payments", order_r5.payments);
    ɵɵadvance();
    ɵɵproperty("line", line_r18)("allOrderFulfillments", order_r5.fulfillments)("orderState", order_r5.state);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_vdr_dt2_column_58_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-custom-field-control", 70);
  }
  if (rf & 2) {
    const index_r20 = ctx.index;
    const customField_r21 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("compact", true)("entityName", "OrderLine")("customField", customField_r21)("customFieldsFormGroup", ctx_r2.orderLineCustomFieldsFormArray.at(index_r20));
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_vdr_dt2_column_58_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dt2-column", 69);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "customFieldLabel");
    ɵɵtemplate(3, OrderEditorComponent_vdr_page_detail_layout_3_vdr_dt2_column_58_ng_template_3_Template, 1, 4, "ng-template");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customField_r21 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("id", customField_r21.name)("heading", ɵɵpipeBind2(2, 5, customField_r21, ɵɵpipeBind1(1, 3, ctx_r2.uiLanguage$)))("hiddenByDefault", true);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_div_64_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 74);
    ɵɵpipe(1, "assetPreview");
  }
  if (rf & 2) {
    const asset_r22 = ctx.ngIf;
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, asset_r22, "tiny"), ɵɵsanitizeUrl);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_div_64_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 71);
    ɵɵtemplate(1, OrderEditorComponent_vdr_page_detail_layout_3_div_64_img_1_Template, 2, 4, "img", 72);
    ɵɵelementStart(2, "div")(3, "strong", 73);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "small");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div");
    ɵɵtext(8);
    ɵɵpipe(9, "localeCurrency");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const order_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.addItemSelectedVariant.productAsset);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r2.addItemSelectedVariant.productVariantName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.addItemSelectedVariant.sku);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(9, 4, ctx_r2.getSelectedItemPrice(ctx_r2.addItemSelectedVariant), order_r5.currencyCode), " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_div_65_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "vdr-tabbed-custom-fields", 75);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("customFields", ctx_r2.orderLineCustomFields)("customFieldsFormGroup", ctx_r2.addItemCustomFieldsForm);
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_button_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 76);
    ɵɵlistener("click", function OrderEditorComponent_vdr_page_detail_layout_3_button_68_Template_button_click_0_listener() {
      ɵɵrestoreView(_r23);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.addItemToOrder(ctx_r2.addItemSelectedVariant));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r2.addItemSelectedVariant || ctx_r2.addItemCustomFieldsForm.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "order.add-item-to-order"), " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_div_71_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 77);
    ɵɵtext(4);
    ɵɵpipe(5, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 67);
    ɵɵlistener("click", function OrderEditorComponent_vdr_page_detail_layout_3_div_71_ng_container_1_Template_button_click_6_listener() {
      ɵɵrestoreView(_r24);
      const shippingLine_r25 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setShippingMethod(shippingLine_r25.id));
    });
    ɵɵtext(7);
    ɵɵpipe(8, "translate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const details_r26 = ctx.ngIf;
    const order_r5 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", details_r26.name, ":");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 3, details_r26.price, order_r5.currencyCode), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 6, "order.set-shipping-method"), " ");
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_div_71_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, OrderEditorComponent_vdr_page_detail_layout_3_div_71_ng_container_1_Template, 9, 8, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const shippingLine_r25 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getShippingLineDetails(shippingLine_r25));
  }
}
function OrderEditorComponent_vdr_page_detail_layout_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-page-detail-layout")(1, "vdr-page-detail-sidebar")(2, "vdr-card", 4);
    ɵɵpipe(3, "translate");
    ɵɵelement(4, "vdr-order-modification-summary", 5);
    ɵɵtemplate(5, OrderEditorComponent_vdr_page_detail_layout_3_div_5_Template, 3, 3, "div", 6);
    ɵɵelementStart(6, "div", 7)(7, "vdr-form-field", 8);
    ɵɵpipe(8, "translate");
    ɵɵelementStart(9, "textarea", 9);
    ɵɵtwoWayListener("ngModelChange", function OrderEditorComponent_vdr_page_detail_layout_3_Template_textarea_ngModelChange_9_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.note, $event) || (ctx_r2.note = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
    ɵɵelementStart(10, "label", 10)(11, "input", 11);
    ɵɵtwoWayListener("ngModelChange", function OrderEditorComponent_vdr_page_detail_layout_3_Template_input_ngModelChange_11_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.recalculateShipping, $event) || (ctx_r2.recalculateShipping = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 12);
    ɵɵtext(13);
    ɵɵpipe(14, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(15, "button", 13);
    ɵɵlistener("click", function OrderEditorComponent_vdr_page_detail_layout_3_Template_button_click_15_listener() {
      const order_r5 = ɵɵrestoreView(_r4).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.previewAndModify(order_r5));
    });
    ɵɵtext(16);
    ɵɵpipe(17, "translate");
    ɵɵelementEnd()()();
    ɵɵelementStart(18, "vdr-card", 4);
    ɵɵpipe(19, "translate");
    ɵɵelement(20, "vdr-coupon-code-selector", 14);
    ɵɵelementEnd();
    ɵɵelementStart(21, "vdr-card", 4);
    ɵɵpipe(22, "translate");
    ɵɵtemplate(23, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_23_Template, 3, 3, "ng-template", 15)(24, OrderEditorComponent_vdr_page_detail_layout_3_vdr_formatted_address_24_Template, 1, 1, "vdr-formatted-address", 16)(25, OrderEditorComponent_vdr_page_detail_layout_3_vdr_address_form_25_Template, 2, 5, "vdr-address-form", 17);
    ɵɵelementEnd();
    ɵɵelementStart(26, "vdr-card", 4);
    ɵɵpipe(27, "translate");
    ɵɵtemplate(28, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_28_Template, 3, 3, "ng-template", 15)(29, OrderEditorComponent_vdr_page_detail_layout_3_vdr_formatted_address_29_Template, 1, 1, "vdr-formatted-address", 16)(30, OrderEditorComponent_vdr_page_detail_layout_3_vdr_address_form_30_Template, 2, 5, "vdr-address-form", 17);
    ɵɵelementEnd()();
    ɵɵelementStart(31, "vdr-page-block")(32, "vdr-card", 18)(33, "vdr-data-table-2", 19)(34, "vdr-dt2-column", 20);
    ɵɵpipe(35, "translate");
    ɵɵtemplate(36, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_36_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(37, "vdr-dt2-column", 21);
    ɵɵpipe(38, "translate");
    ɵɵtemplate(39, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_39_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(40, "vdr-dt2-column", 22);
    ɵɵpipe(41, "translate");
    ɵɵtemplate(42, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_42_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(43, "vdr-dt2-column", 23);
    ɵɵpipe(44, "translate");
    ɵɵtemplate(45, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_45_Template, 4, 2, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(46, "vdr-dt2-column", 24);
    ɵɵpipe(47, "translate");
    ɵɵtemplate(48, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_48_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(49, "vdr-dt2-column", 25);
    ɵɵpipe(50, "translate");
    ɵɵtemplate(51, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_51_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(52, "vdr-dt2-column", 26);
    ɵɵpipe(53, "translate");
    ɵɵtemplate(54, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_54_Template, 8, 11, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(55, "vdr-dt2-column", 27);
    ɵɵpipe(56, "translate");
    ɵɵtemplate(57, OrderEditorComponent_vdr_page_detail_layout_3_ng_template_57_Template, 4, 7, "ng-template");
    ɵɵelementEnd();
    ɵɵtemplate(58, OrderEditorComponent_vdr_page_detail_layout_3_vdr_dt2_column_58_Template, 4, 8, "vdr-dt2-column", 28);
    ɵɵelementEnd()();
    ɵɵelementStart(59, "vdr-card", 4);
    ɵɵpipe(60, "translate");
    ɵɵelementStart(61, "vdr-product-variant-selector", 29);
    ɵɵlistener("productSelected", function OrderEditorComponent_vdr_page_detail_layout_3_Template_vdr_product_variant_selector_productSelected_61_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.addItemSelectedVariant = $event);
    });
    ɵɵelementEnd();
    ɵɵelementStart(62, "div", 30)(63, "div");
    ɵɵtemplate(64, OrderEditorComponent_vdr_page_detail_layout_3_div_64_Template, 10, 7, "div", 31)(65, OrderEditorComponent_vdr_page_detail_layout_3_div_65_Template, 2, 2, "div", 1);
    ɵɵelementEnd();
    ɵɵelement(66, "div", 32);
    ɵɵelementStart(67, "div");
    ɵɵtemplate(68, OrderEditorComponent_vdr_page_detail_layout_3_button_68_Template, 3, 4, "button", 33);
    ɵɵelementEnd()()();
    ɵɵelementStart(69, "vdr-card", 4);
    ɵɵpipe(70, "translate");
    ɵɵtemplate(71, OrderEditorComponent_vdr_page_detail_layout_3_div_71_Template, 2, 1, "div", 34);
    ɵɵelementEnd();
    ɵɵelementStart(72, "vdr-card", 4);
    ɵɵpipe(73, "translate");
    ɵɵelementStart(74, "form", 35);
    ɵɵlistener("submit", function OrderEditorComponent_vdr_page_detail_layout_3_Template_form_submit_74_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.addSurcharge(ctx_r2.surchargeForm.value));
    });
    ɵɵelementStart(75, "div", 36)(76, "vdr-form-field", 37);
    ɵɵpipe(77, "translate");
    ɵɵelement(78, "input", 38);
    ɵɵelementEnd();
    ɵɵelementStart(79, "vdr-form-field", 39);
    ɵɵpipe(80, "translate");
    ɵɵelement(81, "input", 40);
    ɵɵelementEnd();
    ɵɵelementStart(82, "vdr-form-field", 41);
    ɵɵpipe(83, "translate");
    ɵɵelement(84, "vdr-currency-input", 42);
    ɵɵelementEnd();
    ɵɵelementStart(85, "vdr-form-field", 43);
    ɵɵpipe(86, "translate");
    ɵɵelement(87, "input", 44);
    ɵɵelementEnd();
    ɵɵelementStart(88, "vdr-form-field", 45);
    ɵɵpipe(89, "translate");
    ɵɵelementStart(90, "vdr-affixed-input", 46);
    ɵɵelement(91, "input", 47);
    ɵɵelementEnd()();
    ɵɵelementStart(92, "vdr-form-field", 48);
    ɵɵpipe(93, "translate");
    ɵɵelement(94, "input", 49);
    ɵɵelementEnd()();
    ɵɵelementStart(95, "button", 50);
    ɵɵtext(96);
    ɵɵpipe(97, "translate");
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_55_0;
    let tmp_58_0;
    const order_r5 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(3, 58, "order.modification-summary"));
    ɵɵadvance(2);
    ɵɵproperty("orderSnapshot", ctx_r2.orderSnapshot)("modifyOrderInput", ctx_r2.modifyOrderInput)("addedLines", ctx_r2.addedLines)("shippingAddressForm", ctx_r2.shippingAddressForm)("billingAddressForm", ctx_r2.billingAddressForm)("couponCodesControl", ctx_r2.couponCodesControl)("updatedShippingMethods", ctx_r2.updatedShippingMethods);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.hasModifications());
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(8, 60, "order.note"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r2.note);
    ɵɵproperty("disabled", !ctx_r2.hasModifications());
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r2.recalculateShipping);
    ɵɵproperty("disabled", !ctx_r2.hasModifications());
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 62, "order.modification-recalculate-shipping"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r2.hasModifications());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 64, "order.preview-changes"), " ");
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(19, 66, "order.set-coupon-codes"));
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r2.couponCodesControl);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(22, 68, "order.shipping-address"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r2.editingShippingAddress);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.editingShippingAddress);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(27, 70, "order.billing-address"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r2.editingBillingAddress);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.editingBillingAddress);
    ɵɵadvance(2);
    ɵɵproperty("paddingX", false);
    ɵɵadvance();
    ɵɵproperty("items", order_r5.lines.concat(ctx_r2.addedLines));
    ɵɵadvance();
    ɵɵproperty("heading", ɵɵpipeBind1(35, 72, "common.id"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(38, 74, "common.created-at"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(41, 76, "common.updated-at"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(44, 78, "common.image"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(47, 80, "order.product-name"))("optional", false);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(50, 82, "order.product-sku"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(53, 84, "order.unit-price"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(56, 86, "order.quantity"))("optional", false);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.orderLineCustomFields);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(60, 88, "order.add-item-to-order"));
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r2.addItemSelectedVariant);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.addItemSelectedVariant);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.addItemSelectedVariant);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(70, 90, "order.shipping"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", order_r5.shippingLines);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(73, 92, "order.add-surcharge"));
    ɵɵadvance(2);
    ɵɵproperty("formGroup", ctx_r2.surchargeForm);
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(77, 94, "common.description"));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(80, 96, "order.product-sku"));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(83, 98, "common.price"));
    ɵɵadvance(2);
    ɵɵproperty("currencyCode", order_r5.currencyCode);
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind2(86, 100, "catalog.price-includes-tax-at", ɵɵpureFunction1(109, _c21, (tmp_55_0 = (tmp_55_0 = ctx_r2.surchargeForm.get("taxRate")) == null ? null : tmp_55_0.value) !== null && tmp_55_0 !== void 0 ? tmp_55_0 : 0)));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(89, 103, "order.tax-rate"));
    ɵɵadvance(4);
    ɵɵproperty("label", ɵɵpipeBind1(93, 105, "order.tax-description"));
    ɵɵadvance(3);
    ɵɵproperty("disabled", ctx_r2.surchargeForm.invalid || ctx_r2.surchargeForm.pristine || ((tmp_58_0 = ctx_r2.surchargeForm.get("price")) == null ? null : tmp_58_0.value) === 0 || !((tmp_58_0 = ctx_r2.surchargeForm.get("description")) == null ? null : tmp_58_0.value));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(97, 107, "order.add-surcharge"), " ");
  }
}
var _c22 = () => ["CreateOrder"];
var _c23 = () => ["./draft/create"];
var _c24 = (a0) => ["./draft", a0];
var _c25 = (a0) => ["./", a0];
function OrderListComponent_ng_container_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 17);
    ɵɵelement(1, "clr-icon", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c23));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "catalog.create-draft-order"), " ");
  }
}
function OrderListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderListComponent_ng_container_4_a_1_Template, 4, 5, "a", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(1, _c22));
  }
}
function OrderListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const order_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", order_r1.id, " ");
  }
}
function OrderListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const order_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, order_r2.createdAt, "short"), " ");
  }
}
function OrderListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 19)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r3 = ctx.item;
    ɵɵproperty("routerLink", order_r3.state === "Draft" ? ɵɵpureFunction1(2, _c24, order_r3.id) : ɵɵpureFunction1(4, _c25, order_r3.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(order_r3.code);
  }
}
function OrderListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-customer-label", 21);
    ɵɵlistener("click", function OrderListComponent_ng_template_25_Template_vdr_customer_label_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r5 = ctx.item;
    ɵɵproperty("customer", order_r5.customer);
  }
}
function OrderListComponent_ng_template_28_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "order.order-type-regular"));
  }
}
function OrderListComponent_ng_template_28_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "order.order-type-aggregate"));
  }
}
function OrderListComponent_ng_template_28_vdr_chip_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "order.order-type-seller"));
  }
}
function OrderListComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderListComponent_ng_template_28_vdr_chip_0_Template, 3, 3, "vdr-chip", 1)(1, OrderListComponent_ng_template_28_vdr_chip_1_Template, 3, 3, "vdr-chip", 1)(2, OrderListComponent_ng_template_28_vdr_chip_2_Template, 3, 3, "vdr-chip", 1);
  }
  if (rf & 2) {
    const order_r6 = ctx.item;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngIf", order_r6.type === ctx_r6.OrderType.Regular);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r6.type === ctx_r6.OrderType.Aggregate);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r6.type === ctx_r6.OrderType.Seller);
  }
}
function OrderListComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-order-state-label", 22);
  }
  if (rf & 2) {
    const order_r8 = ctx.item;
    ɵɵproperty("state", order_r8.state);
  }
}
function OrderListComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const order_r9 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, order_r9.totalWithTax, order_r9.currencyCode), " ");
  }
}
function OrderListComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "timeAgo");
  }
  if (rf & 2) {
    const order_r10 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, order_r10.updatedAt), " ");
  }
}
function OrderListComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const order_r11 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, order_r11.orderPlacedAt, "short"), " ");
  }
}
function OrderListComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const order_r12 = ctx.item;
    const ctx_r6 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r6.getShippingNames(order_r12), " ");
  }
}
function OrderListComponent_vdr_dt2_custom_field_column_44_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 23);
  }
  if (rf & 2) {
    const customField_r13 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r13)("sorts", ctx_r6.sorts);
  }
}
function RefundDetailComponent_vdr_labeled_data_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 0);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "order.transaction-id"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.refund.transactionId, "\n");
  }
}
function getRefundablePayments(payments) {
  const settledPayments = (payments || []).filter((p) => p.state === "Settled");
  return settledPayments.map((payment, index) => {
    const refundableAmount = payment.amount - (0, import_shared_utils.summate)(payment.refunds.filter((r) => r.state !== "Failed"), "total");
    return __spreadProps(__spreadValues({}, payment), {
      refundableAmount,
      amountToRefundControl: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.min(0), Validators.max(refundableAmount)]
      }),
      selected: index === 0
    });
  });
}
var GET_PAYMENT_METHODS_FOR_MANUAL_ADD = gql`
    query GetAddManualPaymentMethodList($options: PaymentMethodListOptions!) {
        paymentMethods(options: $options) {
            items {
                id
                createdAt
                updatedAt
                name
                code
                description
                enabled
            }
            totalItems
        }
    }
`;
var AddManualPaymentDialogComponent = class _AddManualPaymentDialogComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.form = new UntypedFormGroup({
      method: new UntypedFormControl("", Validators.required),
      transactionId: new UntypedFormControl("", Validators.required)
    });
  }
  ngOnInit() {
    this.paymentMethods$ = this.dataService.query(GetAddManualPaymentMethodListDocument, {
      options: {
        take: 999
      }
    }).mapSingle((data) => data.paymentMethods.items);
  }
  submit() {
    const formValue = this.form.value;
    this.resolveWith({
      method: formValue.method,
      transactionId: formValue.transactionId
    });
  }
  cancel() {
    this.resolveWith();
  }
  static {
    this.ɵfac = function AddManualPaymentDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddManualPaymentDialogComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddManualPaymentDialogComponent,
      selectors: [["vdr-add-manual-payment-dialog"]],
      standalone: false,
      decls: 10,
      vars: 11,
      consts: [["vdrDialogTitle", ""], [3, "formGroup"], ["for", "method", 3, "label"], ["bindLabel", "code", "appendTo", "body", "autofocus", "", "bindValue", "code", "formControlName", "method", 3, "items", "addTag"], ["for", "transactionId", 3, "label"], ["id", "transactionId", "type", "text", "formControlName", "transactionId"], ["vdrDialogButtons", ""], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function AddManualPaymentDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AddManualPaymentDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "form", 1)(2, "vdr-form-field", 2);
          ɵɵpipe(3, "translate");
          ɵɵelement(4, "ng-select", 3);
          ɵɵpipe(5, "async");
          ɵɵelementEnd();
          ɵɵelementStart(6, "vdr-form-field", 4);
          ɵɵpipe(7, "translate");
          ɵɵelement(8, "input", 5);
          ɵɵelementEnd()();
          ɵɵtemplate(9, AddManualPaymentDialogComponent_ng_template_9_Template, 7, 11, "ng-template", 6);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(3, 5, "order.payment-method"));
          ɵɵadvance(2);
          ɵɵproperty("items", ɵɵpipeBind1(5, 7, ctx.paymentMethods$))("addTag", true);
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(7, 9, "order.transaction-id"));
        }
      },
      dependencies: [ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgSelectComponent, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, AsyncPipe, TranslatePipe, LocaleCurrencyPipe],
      styles: [".ng-select[_ngcontent-%COMP%]{min-width:100%}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddManualPaymentDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-add-manual-payment-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.add-payment-to-order' | translate }}</ng-template>
<form [formGroup]="form">
    <vdr-form-field [label]="'order.payment-method' | translate" for="method">
        <ng-select
            [items]="paymentMethods$ | async"
            bindLabel="code"
            appendTo="body"
            autofocus
            bindValue="code"
            [addTag]="true"
            formControlName="method"
        ></ng-select>
    </vdr-form-field>
    <vdr-form-field [label]="'order.transaction-id' | translate" for="transactionId">
        <input id="transactionId" type="text" formControlName="transactionId" />
    </vdr-form-field>
</form>
<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="submit()" class="btn btn-primary" [disabled]="form.invalid || form.pristine">
        {{ 'order.add-payment' | translate }}  ({{ outstandingAmount | localeCurrency: currencyCode }})
    </button>
</ng-template>
`,
      styles: [".ng-select{min-width:100%}\n"]
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var CancelOrderDialogComponent = class _CancelOrderDialogComponent {
  get selectionCount() {
    return Object.values(this.lineQuantities).reduce((sum, n) => sum + n, 0);
  }
  constructor(i18nService) {
    this.i18nService = i18nService;
    this.cancelAll = true;
    this.lineQuantities = {};
    this.reasons = getAppConfig().cancellationReasons ?? [marker("order.cancel-reason-customer-request"), marker("order.cancel-reason-not-available")];
    this.reasons = this.reasons.map((r) => this.i18nService.translate(r));
  }
  ngOnInit() {
    this.lineQuantities = this.order.lines.reduce((result, line) => __spreadProps(__spreadValues({}, result), {
      [line.id]: line.quantity
    }), {});
  }
  radioChanged() {
    if (this.cancelAll) {
      for (const line of this.order.lines) {
        this.lineQuantities[line.id] = line.quantity;
      }
    } else {
      for (const line of this.order.lines) {
        this.lineQuantities[line.id] = 0;
      }
    }
  }
  checkIfAllSelected() {
    for (const [lineId, quantity] of Object.entries(this.lineQuantities)) {
      const quantityInOrder = this.order.lines.find((line) => line.id === lineId)?.quantity;
      if (quantityInOrder && quantity < quantityInOrder) {
        return;
      }
    }
    this.cancelAll = true;
  }
  select() {
    this.resolveWith({
      orderId: this.order.id,
      lines: this.getLineInputs(),
      reason: this.reason,
      cancelShipping: this.cancelAll
    });
  }
  cancel() {
    this.resolveWith();
  }
  getLineInputs() {
    if (this.order.active) {
      return;
    }
    return Object.entries(this.lineQuantities).map(([orderLineId, quantity]) => ({
      orderLineId,
      quantity
    })).filter((l) => 0 < l.quantity);
  }
  static {
    this.ɵfac = function CancelOrderDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelOrderDialogComponent)(ɵɵdirectiveInject(I18nService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CancelOrderDialogComponent,
      selectors: [["vdr-cancel-order-dialog"]],
      standalone: false,
      decls: 30,
      vars: 23,
      consts: [["nonEditable", ""], ["vdrDialogTitle", ""], [1, "fulfillment-wrapper"], [1, "order-lines"], [1, "table"], ["class", "order-line", 3, "is-disabled", "is-cancelled", 4, "ngFor", "ngForOf"], [1, "cancellation-details"], [4, "ngIf"], [1, "clr-control-label"], ["bindLabel", "name", "autofocus", "", "bindValue", "id", 3, "ngModelChange", "items", "addTag", "ngModel"], ["vdrDialogButtons", ""], [1, "order-line"], [1, "align-middle", "thumb"], [3, "src"], [1, "align-middle", "name"], [1, "align-middle", "sku"], [1, "align-middle", "quantity"], [1, "align-middle", "fulfil"], ["type", "number", "min", "0", 3, "ngModel", "disabled", "max", "ngModelChange", "input", 4, "ngIf", "ngIfElse"], ["type", "number", "min", "0", 3, "ngModelChange", "input", "ngModel", "disabled", "max"], ["type", "radio", "clrRadio", "", "name", "options", 3, "ngModelChange", "value", "ngModel"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function CancelOrderDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CancelOrderDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 1);
          ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "table", 4)(4, "thead")(5, "tr");
          ɵɵelement(6, "th");
          ɵɵelementStart(7, "th");
          ɵɵtext(8);
          ɵɵpipe(9, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(10, "th");
          ɵɵtext(11);
          ɵɵpipe(12, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(13, "th");
          ɵɵtext(14);
          ɵɵpipe(15, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(16, "th");
          ɵɵtext(17);
          ɵɵpipe(18, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(19, "th");
          ɵɵtext(20);
          ɵɵpipe(21, "translate");
          ɵɵelementEnd()()();
          ɵɵtemplate(22, CancelOrderDialogComponent_tr_22_Template, 17, 17, "tr", 5);
          ɵɵelementEnd()();
          ɵɵelementStart(23, "div", 6);
          ɵɵtemplate(24, CancelOrderDialogComponent_ng_container_24_Template, 11, 10, "ng-container", 7);
          ɵɵelementStart(25, "label", 8);
          ɵɵtext(26);
          ɵɵpipe(27, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(28, "ng-select", 9);
          ɵɵtwoWayListener("ngModelChange", function CancelOrderDialogComponent_Template_ng_select_ngModelChange_28_listener($event) {
            ɵɵtwoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
            return $event;
          });
          ɵɵelementEnd()()();
          ɵɵtemplate(29, CancelOrderDialogComponent_ng_template_29_Template, 6, 6, "ng-template", 10);
        }
        if (rf & 2) {
          ɵɵadvance(8);
          ɵɵtextInterpolate(ɵɵpipeBind1(9, 11, "order.product-name"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(12, 13, "order.product-sku"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(15, 15, "order.quantity"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(18, 17, "order.unit-price"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(21, 19, "order.cancel"));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.order.lines);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.order.active !== true);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(27, 21, "order.cancellation-reason"));
          ɵɵadvance(2);
          ɵɵproperty("items", ctx.reasons)("addTag", true);
          ɵɵtwoWayProperty("ngModel", ctx.reason);
        }
      },
      dependencies: [ClrLabel, ClrRadio, ClrRadioWrapper, NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, RadioControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, NgSelectComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, TranslatePipe, AssetPreviewPipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{height:100%;display:flex;min-height:64vh}.fulfillment-wrapper[_ngcontent-%COMP%]{flex:1}@media screen and (min-width: 768px){.fulfillment-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row}}@media screen and (min-width: 768px){.fulfillment-wrapper[_ngcontent-%COMP%]   .cancellation-details[_ngcontent-%COMP%]{margin-top:0;margin-inline-start:24px;width:250px}}.fulfillment-wrapper[_ngcontent-%COMP%]   .order-lines[_ngcontent-%COMP%]{flex:1;overflow-y:auto}.fulfillment-wrapper[_ngcontent-%COMP%]   .order-lines[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:0}.fulfillment-wrapper[_ngcontent-%COMP%]   tr.ignore[_ngcontent-%COMP%]{color:var(--color-grey-300)}.fulfillment-wrapper[_ngcontent-%COMP%]   .is-cancelled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-decoration:line-through;background-color:var(--color-component-bg-200)}.fulfillment-wrapper[_ngcontent-%COMP%]   .is-disabled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .fulfillment-wrapper[_ngcontent-%COMP%]   .is-disabled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:var(--color-component-bg-200)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-cancel-order-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.cancel-order' | translate }}</ng-template>

<div class="fulfillment-wrapper">
    <div class="order-lines">
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>{{ 'order.product-name' | translate }}</th>
                    <th>{{ 'order.product-sku' | translate }}</th>
                    <th>{{ 'order.quantity' | translate }}</th>
                    <th>{{ 'order.unit-price' | translate }}</th>
                    <th>{{ 'order.cancel' | translate }}</th>
                </tr>
            </thead>
            <tr
                *ngFor="let line of order.lines"
                class="order-line"
                [class.is-disabled]="cancelAll"
                [class.is-cancelled]="line.quantity === 0"
            >
                <td class="align-middle thumb">
                    <img [src]="line.featuredAsset | assetPreview: 'tiny'" />
                </td>
                <td class="align-middle name">{{ line.productVariant.name }}</td>
                <td class="align-middle sku">{{ line.productVariant.sku }}</td>
                <td class="align-middle quantity">{{ line.quantity }}</td>
                <td class="align-middle quantity">
                    {{ line.unitPriceWithTax | localeCurrency: order.currencyCode }}
                </td>
                <td class="align-middle fulfil">
                    <input
                        *ngIf="line.quantity > 0 && !order.active; else nonEditable"
                        [(ngModel)]="lineQuantities[line.id]"
                        (input)="checkIfAllSelected()"
                        [disabled]="cancelAll"
                        type="number"
                        [max]="line.quantity"
                        min="0"
                    />
                    <ng-template #nonEditable>{{ line.quantity }}</ng-template>
                </td>
            </tr>
        </table>
    </div>
    <div class="cancellation-details">
        <ng-container *ngIf="order.active !== true">
            <clr-radio-wrapper>
                <input
                    type="radio"
                    clrRadio
                    [value]="true"
                    [(ngModel)]="cancelAll"
                    name="options"
                    (ngModelChange)="radioChanged()"
                />
                <label>{{ 'order.cancel-entire-order' | translate }}</label>
            </clr-radio-wrapper>
            <clr-radio-wrapper>
                <input
                    type="radio"
                    clrRadio
                    [value]="false"
                    [(ngModel)]="cancelAll"
                    name="options"
                    (ngModelChange)="radioChanged()"
                />
                <label>{{ 'order.cancel-specified-items' | translate }}</label>
            </clr-radio-wrapper>
        </ng-container>
        <label class="clr-control-label">{{ 'order.cancellation-reason' | translate }}</label>
        <ng-select
            [items]="reasons"
            bindLabel="name"
            autofocus
            bindValue="id"
            [addTag]="true"
            [(ngModel)]="reason"
        ></ng-select>
    </div>
</div>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button
        type="submit"
        (click)="select()"
        [disabled]="!reason || (!order.active && selectionCount === 0)"
        class="btn btn-primary"
    >
        <ng-container *ngIf="!order.active">
            {{ 'order.cancel-selected-items' | translate }}
        </ng-container>
        <ng-container *ngIf="order.active">
            {{ 'order.cancel-order' | translate }}
        </ng-container>
    </button>
</ng-template>
`,
      styles: [":host{height:100%;display:flex;min-height:64vh}.fulfillment-wrapper{flex:1}@media screen and (min-width: 768px){.fulfillment-wrapper{display:flex;flex-direction:row}}@media screen and (min-width: 768px){.fulfillment-wrapper .cancellation-details{margin-top:0;margin-inline-start:24px;width:250px}}.fulfillment-wrapper .order-lines{flex:1;overflow-y:auto}.fulfillment-wrapper .order-lines table{margin-top:0}.fulfillment-wrapper tr.ignore{color:var(--color-grey-300)}.fulfillment-wrapper .is-cancelled td{text-decoration:line-through;background-color:var(--color-component-bg-200)}.fulfillment-wrapper .is-disabled td,.fulfillment-wrapper .is-disabled td input{background-color:var(--color-component-bg-200)}\n"]
    }]
  }], () => [{
    type: I18nService
  }], null);
})();
var GET_COUPON_CODE_SELECTOR_PROMOTION_LIST = gql`
    query GetCouponCodeSelectorPromotionList($options: PromotionListOptions) {
        promotions(options: $options) {
            items {
                id
                name
                couponCode
            }
            totalItems
        }
    }
`;
var CouponCodeSelectorComponent = class _CouponCodeSelectorComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.addCouponCode = new EventEmitter();
    this.removeCouponCode = new EventEmitter();
    this.couponCodeInput$ = new Subject();
  }
  ngOnInit() {
    this.availableCouponCodes$ = concat(this.couponCodeInput$.pipe(debounceTime(200), distinctUntilChanged(), switchMap((term) => this.dataService.query(GetCouponCodeSelectorPromotionListDocument, {
      options: {
        take: 10,
        skip: 0,
        filter: {
          couponCode: {
            contains: term
          }
        }
      }
    }).single$), map(({
      promotions
    }) => (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      promotions.items.map((p) => ({
        code: p.couponCode,
        promotionName: p.name
      }))
    )), startWith([])));
    if (!this.control) {
      this.control = new UntypedFormControl(this.couponCodes ?? []);
    }
  }
  remove(code) {
    this.removeCouponCode.emit(code);
  }
  static {
    this.ɵfac = function CouponCodeSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CouponCodeSelectorComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CouponCodeSelectorComponent,
      selectors: [["vdr-coupon-code-selector"]],
      inputs: {
        couponCodes: "couponCodes",
        control: "control"
      },
      outputs: {
        addCouponCode: "addCouponCode",
        removeCouponCode: "removeCouponCode"
      },
      standalone: false,
      decls: 3,
      vars: 9,
      consts: [["appendTo", "body", "bindLabel", "code", "bindValue", "code", "typeToSearchText", "", 3, "add", "remove", "items", "addTag", "multiple", "hideSelected", "minTermLength", "typeahead", "formControl"], ["ng-option-tmp", ""], [1, "flex", "items-center"], [1, "mr-1"]],
      template: function CouponCodeSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "ng-select", 0);
          ɵɵpipe(1, "async");
          ɵɵlistener("add", function CouponCodeSelectorComponent_Template_ng_select_add_0_listener($event) {
            return ctx.addCouponCode.emit($event.code);
          })("remove", function CouponCodeSelectorComponent_Template_ng_select_remove_0_listener($event) {
            return ctx.remove($event.code);
          });
          ɵɵtemplate(2, CouponCodeSelectorComponent_ng_template_2_Template, 5, 2, "ng-template", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("items", ɵɵpipeBind1(1, 7, ctx.availableCouponCodes$))("addTag", false)("multiple", true)("hideSelected", true)("minTermLength", 2)("typeahead", ctx.couponCodeInput$)("formControl", ctx.control);
        }
      },
      dependencies: [NgControlStatus, FormControlDirective, NgSelectComponent, NgOptionTemplateDirective, ChipComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouponCodeSelectorComponent, [{
    type: Component,
    args: [{
      selector: "vdr-coupon-code-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-select\n    [items]="availableCouponCodes$ | async"\n    appendTo="body"\n    bindLabel="code"\n    bindValue="code"\n    [addTag]="false"\n    [multiple]="true"\n    [hideSelected]="true"\n    [minTermLength]="2"\n    typeToSearchText=""\n    [typeahead]="couponCodeInput$"\n    [formControl]="control"\n    (add)="addCouponCode.emit($event.code)"\n    (remove)="remove($event.code)"\n>\n    <ng-template ng-option-tmp let-item="item">\n        <div class="flex items-center">\n            <vdr-chip class="mr-1">{{ item.code }}</vdr-chip>\n            <span>{{ item.promotionName }}</span>\n        </div>\n    </ng-template>\n</ng-select>\n'
    }]
  }], () => [{
    type: DataService
  }], {
    couponCodes: [{
      type: Input
    }],
    control: [{
      type: Input
    }],
    addCouponCode: [{
      type: Output
    }],
    removeCouponCode: [{
      type: Output
    }]
  });
})();
var SelectAddressDialogComponent = class _SelectAddressDialogComponent {
  constructor(dataService, formBuilder) {
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.useExisting = true;
    this.createNew = false;
  }
  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      fullName: [this.currentAddress?.fullName ?? ""],
      company: [this.currentAddress?.company ?? ""],
      streetLine1: [this.currentAddress?.streetLine1 ?? "", Validators.required],
      streetLine2: [this.currentAddress?.streetLine2 ?? ""],
      city: [this.currentAddress?.city ?? "", Validators.required],
      province: [this.currentAddress?.province ?? ""],
      postalCode: [this.currentAddress?.postalCode ?? "", Validators.required],
      countryCode: [this.currentAddress?.countryCode ?? "", Validators.required],
      phoneNumber: [this.currentAddress?.phoneNumber ?? ""]
    });
    this.useExisting = !!this.customerId;
    this.addresses$ = this.customerId ? this.dataService.query(GetCustomerAddressesDocument, {
      customerId: this.customerId
    }).mapSingle(({
      customer
    }) => customer?.addresses ?? []).pipe(tap((addresses) => {
      if (this.currentAddress) {
        this.selectedAddress = addresses.find((a) => a.streetLine1 === this.currentAddress?.streetLine1 && a.postalCode === this.currentAddress?.postalCode);
      }
      if (addresses.length === 0) {
        this.createNew = true;
        this.useExisting = false;
      }
    })) : of([]);
    this.availableCountries$ = this.dataService.settings.getAvailableCountries().mapSingle(({
      countries
    }) => countries.items);
  }
  trackByFn(item) {
    return item.id;
  }
  addressIdFn(item) {
    return item.streetLine1 + item.postalCode;
  }
  cancel() {
    this.resolveWith();
  }
  select() {
    if (this.useExisting && this.selectedAddress) {
      this.resolveWith(__spreadProps(__spreadValues({}, (0, import_pick.pick)(this.selectedAddress, ["fullName", "company", "streetLine1", "streetLine2", "city", "province", "phoneNumber", "postalCode"])), {
        countryCode: this.selectedAddress.country.code
      }));
    }
    if (this.createNew && this.addressForm.valid) {
      const formValue = this.addressForm.value;
      this.resolveWith(formValue);
    }
  }
  static {
    this.ɵfac = function SelectAddressDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectAddressDialogComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SelectAddressDialogComponent,
      selectors: [["vdr-select-address-dialog"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["vdrDialogTitle", ""], [4, "ngIf"], ["vdrDialogButtons", ""], ["clrTabLink", ""], [3, "clrIfActiveChange", "clrIfActive"], [1, "block", "mt-4", 3, "selectItem", "idFn", "selectedItemId"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], [3, "address"], [3, "formGroup", "availableCountries"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function SelectAddressDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SelectAddressDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0)(1, SelectAddressDialogComponent_clr_tabs_1_Template, 7, 5, "clr-tabs", 1);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, SelectAddressDialogComponent_ng_template_3_Template, 6, 7, "ng-template", 2);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx.addresses$));
        }
      },
      dependencies: [ClrIfActive, ClrTabContent, ClrTab, ClrTabs, ClrTabLink, TabsWillyWonka, ActiveOompaLoompa, NgForOf, NgIf, NgControlStatusGroup, FormGroupDirective, DialogButtonsDirective, DialogTitleDirective, FormattedAddressComponent, AddressFormComponent, RadioCardComponent, RadioCardFieldsetComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectAddressDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-select-address-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.select-address' | translate }}</ng-template>

<clr-tabs *ngIf="addresses$ | async as addresses">
    <clr-tab *ngIf="customerId && addresses.length">
        <button clrTabLink>{{ 'order.existing-address' | translate }}</button>
        <ng-template [(clrIfActive)]="useExisting">
            <clr-tab-content>
                <vdr-radio-card-fieldset
                    class="block mt-4"
                    [idFn]="addressIdFn"
                    [selectedItemId]="selectedAddress && addressIdFn(selectedAddress)"
                    (selectItem)="selectedAddress = $event"
                >
                    <vdr-radio-card *ngFor="let address of addresses" [item]="address">
                        <vdr-formatted-address [address]="address"></vdr-formatted-address>
                    </vdr-radio-card>
                </vdr-radio-card-fieldset>
            </clr-tab-content>
        </ng-template>
    </clr-tab>
    <clr-tab>
        <button clrTabLink>{{ 'customer.create-new-address' | translate }}</button>

        <ng-template [(clrIfActive)]="createNew">
            <clr-tab-content>
                <vdr-address-form
                    [formGroup]="addressForm"
                    [availableCountries]="availableCountries$ | async"
                ></vdr-address-form>
            </clr-tab-content>
        </ng-template>
    </clr-tab>
</clr-tabs>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button
        type="submit"
        (click)="select()"
        [disabled]="(useExisting && !selectedAddress) || (createNew && addressForm.invalid)"
        class="btn btn-primary"
    >
        {{ 'common.okay' | translate }}
    </button>
</ng-template>
`
    }]
  }], () => [{
    type: DataService
  }, {
    type: UntypedFormBuilder
  }], null);
})();
var SelectCustomerDialogComponent = class _SelectCustomerDialogComponent {
  constructor(dataService, formBuilder) {
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.canCreateNew = true;
    this.includeNoteInput = false;
    this.title = marker("order.set-customer-for-order");
    this.isLoading = false;
    this.input$ = new Subject();
    this.selectedCustomer = [];
    this.useExisting = true;
    this.createNew = false;
    this.note = "";
    this.customerForm = this.formBuilder.group({
      title: "",
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phoneNumber: "",
      emailAddress: ["", [Validators.required, Validators.email]]
    });
  }
  ngOnInit() {
    this.customers$ = concat(
      of([]),
      // default items
      this.input$.pipe(debounceTime(200), distinctUntilChanged(), tap(() => this.isLoading = true), switchMap((term) => this.dataService.customer.getCustomerList(10, 0, term).mapStream(({
        customers
      }) => customers.items).pipe(
        catchError(() => of([])),
        // empty list on error
        tap(() => this.isLoading = false)
      )))
    );
  }
  trackByFn(item) {
    return item.id;
  }
  cancel() {
    this.resolveWith();
  }
  select() {
    if (this.useExisting && this.selectedCustomer.length === 1) {
      this.resolveWith(__spreadProps(__spreadValues({}, this.selectedCustomer[0]), {
        note: this.note
      }));
    } else if (this.createNew && this.customerForm.valid) {
      const formValue = this.customerForm.value;
      this.resolveWith(__spreadProps(__spreadValues({}, formValue), {
        note: this.note
      }));
    }
  }
  static {
    this.ɵfac = function SelectCustomerDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectCustomerDialogComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SelectCustomerDialogComponent,
      selectors: [["vdr-select-customer-dialog"]],
      standalone: false,
      decls: 6,
      vars: 2,
      consts: [["customerSelect", ""], ["vdrDialogTitle", ""], [4, "ngIf"], ["class", "pt-1", 4, "ngIf"], ["vdrDialogButtons", ""], [4, "ngTemplateOutlet"], ["class", "mt-4", 3, "label", 4, "ngIf"], [1, "mt-4", 3, "label"], [3, "ngModelChange", "ngModel"], [1, "pt-1"], ["clrTabLink", ""], [3, "clrIfActiveChange", "clrIfActive"], [1, "mt-4"], [3, "formGroup"], ["for", "title", 3, "label"], ["id", "title", "type", "text", "formControlName", "title"], ["for", "firstName", 3, "label"], ["id", "firstName", "type", "text", "formControlName", "firstName"], ["for", "lastName", 3, "label"], ["id", "lastName", "type", "text", "formControlName", "lastName"], ["for", "emailAddress", 3, "label"], ["id", "emailAddress", "type", "text", "formControlName", "emailAddress"], ["for", "phoneNumber", 3, "label"], ["id", "phoneNumber", "type", "text", "formControlName", "phoneNumber"], ["appendTo", "body", "bindLabel", "name", 3, "ngModelChange", "items", "addTag", "multiple", "hideSelected", "trackByFn", "minTermLength", "loading", "typeahead", "ngModel"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "item-row"], ["shape", "user", 1, "is-solid"], [1, "mx-1"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function SelectCustomerDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SelectCustomerDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 1)(1, SelectCustomerDialogComponent_ng_container_1_Template, 3, 2, "ng-container", 2)(2, SelectCustomerDialogComponent_clr_tabs_2_Template, 7, 5, "clr-tabs", 3)(3, SelectCustomerDialogComponent_ng_template_3_Template, 4, 11, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, SelectCustomerDialogComponent_ng_template_5_Template, 6, 7, "ng-template", 4);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.canCreateNew);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.canCreateNew);
        }
      },
      dependencies: [ClrIconCustomTag, ClrIfActive, ClrTabContent, ClrTab, ClrTabs, ClrTabLink, TabsWillyWonka, ActiveOompaLoompa, NgIf, NgTemplateOutlet, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, ChipComponent, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, AsyncPipe, TranslatePipe],
      styles: [".item-row[_ngcontent-%COMP%]{display:flex;align-items:center}clr-tabs[_ngcontent-%COMP%]{display:block}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectCustomerDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-select-customer-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ title | translate }}</ng-template>

<ng-container *ngIf="!canCreateNew">
    <ng-container *ngTemplateOutlet="customerSelect"></ng-container>
    <vdr-form-field [label]="'common.add-note' | translate" *ngIf="includeNoteInput" class="mt-4">
        <textarea [(ngModel)]="note"></textarea>
    </vdr-form-field>
</ng-container>

<clr-tabs *ngIf="canCreateNew" class="pt-1">
    <clr-tab>
        <button clrTabLink>{{ 'order.existing-customer' | translate }}</button>

        <ng-template [(clrIfActive)]="useExisting">
            <clr-tab-content>
                <div class="mt-4">
                    <ng-container *ngTemplateOutlet="customerSelect"></ng-container>
                </div>
            </clr-tab-content>
        </ng-template>
    </clr-tab>
    <clr-tab *ngIf="canCreateNew">
        <button clrTabLink>{{ 'customer.create-new-customer' | translate }}</button>

        <ng-template [(clrIfActive)]="createNew">
            <clr-tab-content>
                <form [formGroup]="customerForm">
                    <vdr-form-field [label]="'customer.title' | translate" for="title">
                        <input id="title" type="text" formControlName="title" />
                    </vdr-form-field>
                    <vdr-form-field [label]="'customer.first-name' | translate" for="firstName">
                        <input id="firstName" type="text" formControlName="firstName" />
                    </vdr-form-field>
                    <vdr-form-field [label]="'customer.last-name' | translate" for="lastName">
                        <input id="lastName" type="text" formControlName="lastName" />
                    </vdr-form-field>
                    <vdr-form-field [label]="'customer.email-address' | translate" for="emailAddress">
                        <input id="emailAddress" type="text" formControlName="emailAddress" />
                    </vdr-form-field>
                    <vdr-form-field [label]="'customer.phone-number' | translate" for="phoneNumber">
                        <input id="phoneNumber" type="text" formControlName="phoneNumber" />
                    </vdr-form-field>
                </form>
            </clr-tab-content>
        </ng-template>
    </clr-tab>
</clr-tabs>

<ng-template #customerSelect>
    <ng-select
        [items]="customers$ | async"
        appendTo="body"
        bindLabel="name"
        [addTag]="false"
        [multiple]="true"
        [hideSelected]="true"
        [trackByFn]="trackByFn"
        [minTermLength]="2"
        [loading]="isLoading"
        [typeahead]="input$"
        [(ngModel)]="selectedCustomer"
    >
        <ng-template ng-label-tmp let-item="item" let-clear="clear">
            <span class="item-row">
                <clr-icon shape="user" class="is-solid"></clr-icon
                ><span class="mx-1">{{ item.firstName }} {{ item.lastName }}</span>
                <vdr-chip>{{ item.emailAddress }}</vdr-chip>
            </span>
        </ng-template>
        <ng-template ng-option-tmp let-item="item">
            <span class="item-row">
                <clr-icon shape="user" class="is-solid"></clr-icon
                ><span class="mx-1">{{ item.firstName }} {{ item.lastName }}</span>
                <vdr-chip>{{ item.emailAddress }}</vdr-chip>
            </span>
        </ng-template>
    </ng-select>
</ng-template>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button
        type="submit"
        (click)="select()"
        [disabled]="(useExisting && selectedCustomer.length === 0) || (createNew && customerForm.invalid)"
        class="btn btn-primary"
    >
        {{ 'common.okay' | translate }}
    </button>
</ng-template>
`,
      styles: [".item-row{display:flex;align-items:center}clr-tabs{display:block}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: UntypedFormBuilder
  }], null);
})();
var SelectShippingMethodDialogComponent = class _SelectShippingMethodDialogComponent {
  ngOnInit() {
    if (this.currentSelectionId) {
      this.selectedMethod = this.eligibleShippingMethods.find((m) => m.id === this.currentSelectionId);
    }
  }
  methodIdFn(item) {
    return item.id;
  }
  cancel() {
    this.resolveWith();
  }
  select() {
    if (this.selectedMethod) {
      this.resolveWith(this.selectedMethod.id);
    }
  }
  static {
    this.ɵfac = function SelectShippingMethodDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectShippingMethodDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SelectShippingMethodDialogComponent,
      selectors: [["vdr-select-shipping-method-dialog"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["vdrDialogTitle", ""], [3, "selectItem", "idFn", "selectedItemId"], [3, "item", 4, "ngFor", "ngForOf"], ["vdrDialogButtons", ""], [3, "item"], [1, "result-details"], [3, "label"], [1, "price-row"], [3, "value", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function SelectShippingMethodDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SelectShippingMethodDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "vdr-radio-card-fieldset", 1);
          ɵɵlistener("selectItem", function SelectShippingMethodDialogComponent_Template_vdr_radio_card_fieldset_selectItem_1_listener($event) {
            return ctx.selectedMethod = $event;
          });
          ɵɵtemplate(2, SelectShippingMethodDialogComponent_vdr_radio_card_2_Template, 15, 20, "vdr-radio-card", 2);
          ɵɵelementEnd();
          ɵɵtemplate(3, SelectShippingMethodDialogComponent_ng_template_3_Template, 6, 7, "ng-template", 3);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("idFn", ctx.methodIdFn)("selectedItemId", ctx.selectedMethod == null ? null : ctx.selectedMethod.id);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.eligibleShippingMethods);
        }
      },
      dependencies: [NgForOf, NgIf, DialogButtonsDirective, DialogTitleDirective, LabeledDataComponent, ObjectTreeComponent, RadioCardComponent, RadioCardFieldsetComponent, TranslatePipe, LocaleCurrencyPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectShippingMethodDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-select-shipping-method-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.select-shipping-method' | translate }}</ng-template>
<vdr-radio-card-fieldset
    [idFn]="methodIdFn"
    [selectedItemId]="selectedMethod?.id"
    (selectItem)="selectedMethod = $event"
>
    <vdr-radio-card *ngFor="let quote of eligibleShippingMethods" [item]="quote">
        <div class="result-details">
            <vdr-labeled-data [label]="'settings.shipping-method' | translate">
                {{ quote.name }}
            </vdr-labeled-data>
            <div class="price-row">
                <vdr-labeled-data [label]="'common.price' | translate">
                    {{ quote.price | localeCurrency: currencyCode }}
                </vdr-labeled-data>
                <vdr-labeled-data [label]="'common.price-with-tax' | translate">
                    {{ quote.priceWithTax | localeCurrency: currencyCode }}
                </vdr-labeled-data>
            </div>
            <vdr-object-tree *ngIf="quote.metadata" [value]="quote.metadata"></vdr-object-tree>
        </div>
    </vdr-radio-card>
</vdr-radio-card-fieldset>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button
        type="submit"
        (click)="select()"
        [disabled]="!selectedMethod"
        class="btn btn-primary"
    >
        {{ 'common.okay' | translate }}
    </button>
</ng-template>
`
    }]
  }], null, null);
})();
var OrderStateSelectDialogComponent = class _OrderStateSelectDialogComponent {
  constructor() {
    this.nextStates = [];
    this.message = "";
    this.selectedState = "";
  }
  select() {
    if (this.selectedState) {
      this.resolveWith(this.selectedState);
    }
  }
  cancel() {
    this.resolveWith();
  }
  static {
    this.ɵfac = function OrderStateSelectDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderStateSelectDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderStateSelectDialogComponent,
      selectors: [["vdr-order-state-select-dialog"]],
      standalone: false,
      decls: 8,
      vars: 5,
      consts: [["vdrDialogTitle", ""], ["name", "state", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["vdrDialogButtons", ""], [3, "value"], ["type", "submit", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"]],
      template: function OrderStateSelectDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderStateSelectDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "p");
          ɵɵtext(2);
          ɵɵpipe(3, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "vdr-form-field")(5, "select", 1);
          ɵɵtwoWayListener("ngModelChange", function OrderStateSelectDialogComponent_Template_select_ngModelChange_5_listener($event) {
            ɵɵtwoWayBindingSet(ctx.selectedState, $event) || (ctx.selectedState = $event);
            return $event;
          });
          ɵɵtemplate(6, OrderStateSelectDialogComponent_option_6_Template, 4, 6, "option", 2);
          ɵɵelementEnd()();
          ɵɵtemplate(7, OrderStateSelectDialogComponent_ng_template_7_Template, 6, 12, "ng-template", 3);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, ctx.message));
          ɵɵadvance(3);
          ɵɵtwoWayProperty("ngModel", ctx.selectedState);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.nextStates);
        }
      },
      dependencies: [NgForOf, NgIf, NgSelectOption, ɵNgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, TranslatePipe, StateI18nTokenPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderStateSelectDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-state-select-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.select-state' | translate }}</ng-template>
<p>{{ message | translate }}</p>
<vdr-form-field>
    <select name="state" [(ngModel)]="selectedState">
        <option *ngFor="let state of nextStates" [value]="state">
            {{ state | stateI18nToken | translate }}
        </option>
    </select>
</vdr-form-field>
<ng-template vdrDialogButtons>
    <button type="submit" *ngIf="cancellable" (click)="cancel()" class="btn btn-secondary">
        {{ 'common.cancel' | translate }}
    </button>
    <button type="submit" (click)="select()" class="btn btn-primary" [disabled]="!selectedState">
        {{ 'order.transition-to-state' | translate: { state: (selectedState | stateI18nToken | translate) } }}
    </button>
</ng-template>
`
    }]
  }], null, null);
})();
var OrderTransitionService = class _OrderTransitionService {
  constructor(dataService, modalService, notificationService, i18nService) {
    this.dataService = dataService;
    this.modalService = modalService;
    this.notificationService = notificationService;
    this.i18nService = i18nService;
  }
  /**
   * Attempts to transition the Order to the last state it was in before it was transitioned
   * to the "Modifying" state. If this fails, a manual prompt is used.
   */
  transitionToPreModifyingState(orderId, nextStates) {
    return this.getPreModifyingState(orderId).pipe(switchMap((state) => {
      const manualTransitionOptions = {
        orderId,
        nextStates,
        message: this.i18nService.translate(marker("order.unable-to-transition-to-state-try-another"), {
          state
        }),
        cancellable: false,
        retry: 10
      };
      if (state) {
        return this.transitionToStateOrThrow(orderId, state).pipe(catchError((err) => this.manuallyTransitionToState(manualTransitionOptions)));
      } else {
        return this.manuallyTransitionToState(manualTransitionOptions);
      }
    }));
  }
  /**
   * Displays a modal for manually selecting the next state.
   */
  manuallyTransitionToState(options) {
    return this.modalService.fromComponent(OrderStateSelectDialogComponent, {
      locals: {
        nextStates: options.nextStates,
        cancellable: options.cancellable,
        message: options.message
      },
      closable: false,
      size: "md"
    }).pipe(switchMap((result) => {
      if (result) {
        return this.transitionToStateOrThrow(options.orderId, result);
      } else {
        if (!options.cancellable) {
          throw new Error(`An order state must be selected`);
        } else {
          return EMPTY;
        }
      }
    }), retryWhen((errors) => errors.pipe(delay(2e3), take(options.retry))));
  }
  /**
   * Attempts to get the last state the Order was in before it was transitioned
   * to the "Modifying" state.
   */
  getPreModifyingState(orderId) {
    return this.dataService.order.getOrderHistory(orderId, {
      filter: {
        type: {
          eq: HistoryEntryType.ORDER_STATE_TRANSITION
        }
      },
      sort: {
        createdAt: SortOrder.DESC
      }
    }).mapSingle((result) => result.order).pipe(map((result) => {
      const item = result?.history.items.find((i) => i.data.to === "Modifying");
      if (item) {
        return item.data.from;
      } else {
        return;
      }
    }));
  }
  transitionToStateOrThrow(orderId, state) {
    return this.dataService.order.transitionToState(orderId, state).pipe(map(({
      transitionOrderToState
    }) => {
      switch (transitionOrderToState?.__typename) {
        case "Order":
          return transitionOrderToState?.state;
        case "OrderStateTransitionError":
          this.notificationService.error(transitionOrderToState?.transitionError);
          throw new Error(transitionOrderToState?.transitionError);
      }
    }));
  }
  static {
    this.ɵfac = function OrderTransitionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderTransitionService)(ɵɵinject(DataService), ɵɵinject(ModalService), ɵɵinject(NotificationService), ɵɵinject(I18nService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderTransitionService,
      factory: _OrderTransitionService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderTransitionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: DataService
  }, {
    type: ModalService
  }, {
    type: NotificationService
  }, {
    type: I18nService
  }], null);
})();
var OrderCustomFieldsCardComponent = class _OrderCustomFieldsCardComponent {
  constructor(formBuilder, modalService) {
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.customFieldsConfig = [];
    this.customFieldValues = {};
    this.updateClick = new EventEmitter();
    this.editable = false;
  }
  ngOnInit() {
    this.customFieldForm = this.formBuilder.group({});
    for (const field of this.customFieldsConfig) {
      this.customFieldForm.addControl(field.name, this.formBuilder.control(this.customFieldValues[field.name]));
    }
  }
  onUpdateClick() {
    this.updateClick.emit(this.customFieldForm.value);
    this.customFieldForm.markAsPristine();
    this.editable = false;
  }
  onCancelClick() {
    if (this.customFieldForm.dirty) {
      this.modalService.dialog({
        title: marker("catalog.confirm-cancel"),
        buttons: [{
          type: "secondary",
          label: marker("common.keep-editing")
        }, {
          type: "danger",
          label: marker("common.discard-changes"),
          returnValue: true
        }]
      }).subscribe((result) => {
        if (result) {
          this.customFieldForm.reset();
          this.customFieldForm.markAsPristine();
          this.editable = false;
        }
      });
    } else {
      this.editable = false;
    }
  }
  static {
    this.ɵfac = function OrderCustomFieldsCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderCustomFieldsCardComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(ModalService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderCustomFieldsCardComponent,
      selectors: [["vdr-order-custom-fields-card"]],
      inputs: {
        customFieldsConfig: "customFieldsConfig",
        customFieldValues: "customFieldValues"
      },
      outputs: {
        updateClick: "updateClick"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "card-text", "custom-field-form"], ["entityName", "Order", 3, "customFields", "customFieldsFormGroup", "readonly", "compact"], [1, "card-footer"], ["class", "btn btn-sm btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["shape", "pencil"], [1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], ["shape", "check"], ["shape", "times"]],
      template: function OrderCustomFieldsCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderCustomFieldsCardComponent_div_0_Template, 11, 12, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.customFieldsConfig.length);
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, TabbedCustomFieldsComponent, TranslatePipe],
      styles: ["vdr-custom-field-control[_ngcontent-%COMP%]{margin-bottom:6px;display:block}.custom-field-form[_ngcontent-%COMP%]     .clr-control-label{color:var(--color-grey-400)}.custom-field-form.editable[_ngcontent-%COMP%]     .clr-control-label{color:inherit}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCustomFieldsCardComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-custom-fields-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="card" *ngIf="customFieldsConfig.length">
    <div class="card-header">
        {{ 'common.custom-fields' | translate }}
    </div>
    <div class="card-block">
        <div class="card-text custom-field-form" [class.editable]="editable">
            <vdr-tabbed-custom-fields
                entityName="Order"
                [customFields]="customFieldsConfig"
                [customFieldsFormGroup]="customFieldForm"
                [readonly]="!editable"
                [compact]="true"
            ></vdr-tabbed-custom-fields>
        </div>
    </div>
    <div class="card-footer">
        <button class="btn btn-sm btn-secondary" (click)="editable = true" *ngIf="!editable">
            <clr-icon shape="pencil"></clr-icon>
            {{ 'common.edit' | translate }}
        </button>
        <button
            class="btn btn-sm btn-primary"
            (click)="onUpdateClick()"
            *ngIf="editable"
            [disabled]="customFieldForm.pristine || customFieldForm.invalid"
        >
            <clr-icon shape="check"></clr-icon>
            {{ 'common.update' | translate }}
        </button>
        <button
            class="btn btn-sm btn-secondary"
            (click)="onCancelClick()"
            *ngIf="editable"
        >
            <clr-icon shape="times"></clr-icon>
            {{ 'common.cancel' | translate }}
        </button>
    </div>
</div>
`,
      styles: ["vdr-custom-field-control{margin-bottom:6px;display:block}.custom-field-form ::ng-deep .clr-control-label{color:var(--color-grey-400)}.custom-field-form.editable ::ng-deep .clr-control-label{color:inherit}\n"]
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: ModalService
  }], {
    customFieldsConfig: [{
      type: Input
    }],
    customFieldValues: [{
      type: Input
    }],
    updateClick: [{
      type: Output
    }]
  });
})();
var LineFulfillmentComponent = class _LineFulfillmentComponent {
  constructor() {
    this.fulfilledCount = 0;
    this.fulfillments = [];
  }
  ngOnChanges(changes) {
    if (this.line) {
      this.fulfilledCount = this.getDeliveredCount(this.line);
      this.fulfillmentStatus = this.getFulfillmentStatus(this.fulfilledCount, this.line.quantity);
      this.fulfillments = this.getFulfillments(this.line);
    }
  }
  /**
   * Returns the number of items in an OrderLine which are fulfilled.
   */
  getDeliveredCount(line) {
    return line.fulfillmentLines?.reduce((sum, fulfillmentLine) => sum + fulfillmentLine.quantity, 0) ?? 0;
  }
  getFulfillmentStatus(fulfilledCount, lineQuantity) {
    if (fulfilledCount === lineQuantity) {
      return "full";
    }
    if (0 < fulfilledCount && fulfilledCount < lineQuantity) {
      return "partial";
    }
    return "none";
  }
  getFulfillments(line) {
    return line.fulfillmentLines?.map((fulfillmentLine) => {
      const fulfillment = this.allOrderFulfillments?.find((f) => f.id === fulfillmentLine.fulfillmentId);
      if (!fulfillment) {
        return;
      }
      return {
        count: fulfillmentLine.quantity,
        fulfillment
      };
    }).filter(import_shared_utils.notNullOrUndefined) ?? [];
  }
  static {
    this.ɵfac = function LineFulfillmentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LineFulfillmentComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LineFulfillmentComponent,
      selectors: [["vdr-line-fulfillment"]],
      inputs: {
        line: "line",
        allOrderFulfillments: "allOrderFulfillments",
        orderState: "orderState"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 1,
      vars: 1,
      consts: [["class", "search-settings-menu", 4, "ngIf"], [1, "search-settings-menu"], ["type", "button", "vdrDropdownTrigger", "", 1, "icon-button"], ["class", "item-fulfilled", "shape", "check-circle", 4, "ngIf"], ["class", "item-partially-fulfilled", "shape", "check-circle", 4, "ngIf"], ["class", "item-not-fulfilled", "shape", "exclamation-circle", 4, "ngIf"], ["vdrPosition", "bottom-right"], ["class", "dropdown-header", 4, "ngIf"], ["class", "fulfillment-detail", 4, "ngFor", "ngForOf"], ["shape", "check-circle", 1, "item-fulfilled"], ["shape", "check-circle", 1, "item-partially-fulfilled"], ["shape", "exclamation-circle", 1, "item-not-fulfilled"], [1, "dropdown-header"], [1, "fulfillment-detail"], [1, "fulfillment-title"], [3, "label"], [3, "label", 4, "ngIf"]],
      template: function LineFulfillmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, LineFulfillmentComponent_vdr_dropdown_0_Template, 10, 7, "vdr-dropdown", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.fulfilledCount || ctx.orderState === "PartiallyDelivered");
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, NgForOf, NgIf, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, LabeledDataComponent, TranslatePipe, LocaleDatePipe],
      styles: [".item-fulfilled[_ngcontent-%COMP%]{color:var(--color-success-700)}.item-partially-fulfilled[_ngcontent-%COMP%]{color:var(--color-warning-700)}.item-not-fulfilled[_ngcontent-%COMP%]{color:var(--color-error-700)}.fulfillment-detail[_ngcontent-%COMP%]{margin:6px 12px}.fulfillment-detail[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:1px dashed var(--color-component-border-200)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LineFulfillmentComponent, [{
    type: Component,
    args: [{
      selector: "vdr-line-fulfillment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-dropdown class="search-settings-menu" *ngIf="fulfilledCount || orderState === 'PartiallyDelivered'">
    <button type="button" class="icon-button" vdrDropdownTrigger>
        <clr-icon *ngIf="fulfillmentStatus === 'full'" class="item-fulfilled" shape="check-circle"></clr-icon>
        <clr-icon
            *ngIf="fulfillmentStatus === 'partial'"
            class="item-partially-fulfilled"
            shape="check-circle"
        ></clr-icon>
        <clr-icon
            *ngIf="fulfillmentStatus === 'none'"
            class="item-not-fulfilled"
            shape="exclamation-circle"
        ></clr-icon>
    </button>
    <vdr-dropdown-menu vdrPosition="bottom-right">
        <label class="dropdown-header" *ngIf="fulfillmentStatus === 'full'">
            {{ 'order.line-fulfillment-all' | translate }}
        </label>
        <label class="dropdown-header" *ngIf="fulfillmentStatus === 'partial'">
            {{
                'order.line-fulfillment-partial' | translate: { total: line.quantity, count: fulfilledCount }
            }}
        </label>
        <label class="dropdown-header" *ngIf="fulfillmentStatus === 'none'">
            {{ 'order.line-fulfillment-none' | translate }}
        </label>
        <div class="fulfillment-detail" *ngFor="let item of fulfillments">
            <div class="fulfillment-title">
                {{ 'order.fulfillment' | translate }} #{{ item.fulfillment.id }} ({{
                    'order.item-count' | translate: { count: item.count }
                }})
            </div>
            <vdr-labeled-data [label]="'common.created-at' | translate">
                {{ item.fulfillment.createdAt | localeDate: 'medium' }}
            </vdr-labeled-data>
            <vdr-labeled-data [label]="'order.fulfillment-method' | translate">
                {{ item.fulfillment.method }}
            </vdr-labeled-data>
            <vdr-labeled-data
                *ngIf="item.fulfillment.trackingCode"
                [label]="'order.tracking-code' | translate"
            >
                {{ item.fulfillment.trackingCode }}
            </vdr-labeled-data>
        </div>
    </vdr-dropdown-menu>
</vdr-dropdown>
`,
      styles: [".item-fulfilled{color:var(--color-success-700)}.item-partially-fulfilled{color:var(--color-warning-700)}.item-not-fulfilled{color:var(--color-error-700)}.fulfillment-detail{margin:6px 12px}.fulfillment-detail:not(:last-of-type){border-bottom:1px dashed var(--color-component-border-200)}\n"]
    }]
  }], null, {
    line: [{
      type: Input
    }],
    allOrderFulfillments: [{
      type: Input
    }],
    orderState: [{
      type: Input
    }]
  });
})();
var LineRefundsComponent = class _LineRefundsComponent {
  getRefundedCount() {
    const refundLines = this.payments?.reduce((all, payment) => [...all, ...payment.refunds], []).filter((refund) => refund.state !== "Failed").reduce((all, refund) => [...all, ...refund.lines], []) ?? [];
    return refundLines.filter((i) => i.orderLineId === this.line.id).reduce((sum, i) => sum + i.quantity, 0);
  }
  static {
    this.ɵfac = function LineRefundsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LineRefundsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LineRefundsComponent,
      selectors: [["vdr-line-refunds"]],
      inputs: {
        line: "line",
        payments: "payments"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[3, "title", 4, "ngIf"], [3, "title"], ["shape", "redo", "dir", "down", 1, "is-solid"]],
      template: function LineRefundsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, LineRefundsComponent_span_0_Template, 3, 6, "span", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.getRefundedCount());
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, Dir, TranslatePipe],
      styles: ["[_nghost-%COMP%]{color:var(--color-error-500)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LineRefundsComponent, [{
    type: Component,
    args: [{
      selector: "vdr-line-refunds",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<span *ngIf="getRefundedCount()" [title]="'order.refunded-count' | translate: { count: getRefundedCount() }">
    <clr-icon shape="redo" class="is-solid" dir="down"></clr-icon>
</span>
`,
      styles: [":host{color:var(--color-error-500)}\n"]
    }]
  }], null, {
    line: [{
      type: Input
    }],
    payments: [{
      type: Input
    }]
  });
})();
var OrderTotalColumnComponent = class _OrderTotalColumnComponent extends DataTable2ColumnComponent {
  constructor() {
    super(...arguments);
    this.orderable = false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOrderTotalColumnComponent_BaseFactory;
      return function OrderTotalColumnComponent_Factory(__ngFactoryType__) {
        return (ɵOrderTotalColumnComponent_BaseFactory || (ɵOrderTotalColumnComponent_BaseFactory = ɵɵgetInheritedFactory(_OrderTotalColumnComponent)))(__ngFactoryType__ || _OrderTotalColumnComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderTotalColumnComponent,
      selectors: [["vdr-order-total-column"]],
      exportAs: ["row"],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 0,
      vars: 0,
      template: function OrderTotalColumnComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderTotalColumnComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-total-column",
      template: ``,
      exportAs: "row",
      standalone: false
    }]
  }], null, null);
})();
var OrderDataTableComponent = class _OrderDataTableComponent extends DataTable2Component {
  get allColumns() {
    return [...this.columns ?? [], ...this.customFieldColumns ?? [], ...this.totalColumns ?? []];
  }
  getPromotionLink(promotion) {
    const id = promotion.adjustmentSource.split(":")[1];
    return ["/marketing", "promotions", id];
  }
  getCouponCodeForAdjustment(order, promotionAdjustment) {
    const id = promotionAdjustment.adjustmentSource.split(":")[1];
    const promotion = order.promotions.find((p) => p.id === id);
    if (promotion) {
      return promotion.couponCode || void 0;
    }
  }
  getShippingNames(order) {
    if (order.shippingLines.length) {
      return order.shippingLines.map((shippingLine) => shippingLine.shippingMethod.name).join(", ");
    } else {
      return "";
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOrderDataTableComponent_BaseFactory;
      return function OrderDataTableComponent_Factory(__ngFactoryType__) {
        return (ɵOrderDataTableComponent_BaseFactory || (ɵOrderDataTableComponent_BaseFactory = ɵɵgetInheritedFactory(_OrderDataTableComponent)))(__ngFactoryType__ || _OrderDataTableComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderDataTableComponent,
      selectors: [["vdr-order-data-table"]],
      contentQueries: function OrderDataTableComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, OrderTotalColumnComponent, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.totalColumns = _t);
        }
      },
      inputs: {
        order: "order"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c4,
      decls: 60,
      vars: 70,
      consts: [["defaultComponent", ""], [1, "bulk-actions"], [1, "table-wrapper"], [1, ""], [1, "heading-row"], ["class", "selection-col", 4, "ngIf"], [3, "expand", 4, "ngFor", "ngForOf"], [1, "column-picker"], [3, "reorder", "resetColumns", "uiLanguage", "columns"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "surcharge", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "sub-total"], [1, "clr-align-middle"], [1, "net-price", 3, "title"], [1, "shipping"], ["class", "shipping-method-name", 4, "ngFor", "ngForOf"], [1, "total"], [1, "selection-col"], ["type", "checkbox", "clrCheckbox", "", 3, "change", "checked"], [1, "cell-content", 3, "ngClass"], ["api", "dataTable", "display", "block", 3, "locationId", "metadata", "topPx", "leftPx"], ["class", "sort-toggle", 4, "ngIf"], [1, "sort-toggle"], [3, "click"], ["shape", "two-way-arrows left", 4, "ngIf"], ["shape", "arrow up", 4, "ngIf"], ["shape", "arrow down", 4, "ngIf"], ["class", "sort-label", 4, "ngIf"], ["shape", "two-way-arrows left"], ["shape", "arrow up"], ["shape", "arrow down"], [1, "sort-label"], [1, "filter-row"], [1, "button-ghost", "toggle-search-filter-row", 3, "click", "title"], ["shape", "search"], [1, "filter-row-wrapper"], [4, "ngTemplateOutlet"], [1, "filters"], ["class", "mt-1", 3, "filterWithValue", "filters", 4, "ngFor", "ngForOf"], ["class", "mt-1", 3, "filters", 4, "ngIf"], [1, "mt-1", 3, "filterWithValue", "filters"], [1, "mt-1", 3, "filters"], ["class", "selection-col", 3, "active", 4, "ngIf"], [3, "active", 4, "ngFor", "ngForOf"], ["type", "checkbox", "clrCheckbox", "", 3, "click", "checked"], [4, "ngIf", "ngIfElse"], [4, "ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "emptyStateLabel"], [1, "surcharge"], ["colspan", "2", 1, "align-middle", "name", "left"], [1, "align-middle", "sku"], [1, "align-middle"], [1, "align-middle", "total"], ["class", "order-adjustment", 4, "ngIf"], [1, "order-adjustment"], [3, "routerLink"], [1, "shipping-method-name"]],
      template: function OrderDataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c3);
          ɵɵelementStart(0, "div", 1);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 2)(3, "table", 3)(4, "thead")(5, "tr", 4);
          ɵɵtemplate(6, OrderDataTableComponent_th_6_Template, 2, 1, "th", 5)(7, OrderDataTableComponent_th_7_Template, 6, 9, "th", 6);
          ɵɵelementStart(8, "th")(9, "div", 7)(10, "vdr-data-table-colum-picker", 8);
          ɵɵpipe(11, "async");
          ɵɵlistener("reorder", function OrderDataTableComponent_Template_vdr_data_table_colum_picker_reorder_10_listener($event) {
            return ctx.onColumnReorder($event);
          })("resetColumns", function OrderDataTableComponent_Template_vdr_data_table_colum_picker_resetColumns_10_listener() {
            return ctx.onColumnsReset();
          });
          ɵɵelementEnd()()()();
          ɵɵtemplate(12, OrderDataTableComponent_tr_12_Template, 9, 13, "tr", 9);
          ɵɵelementEnd();
          ɵɵelementStart(13, "tbody");
          ɵɵtemplate(14, OrderDataTableComponent_tr_14_Template, 4, 4, "tr", 10);
          ɵɵpipe(15, "paginate");
          ɵɵelementContainerStart(16);
          ɵɵtemplate(17, OrderDataTableComponent_tr_17_Template, 4, 4, "tr", 9);
          ɵɵelementContainerEnd();
          ɵɵtemplate(18, OrderDataTableComponent_tr_18_Template, 14, 14, "tr", 11)(19, OrderDataTableComponent_ng_container_19_Template, 2, 1, "ng-container", 12);
          ɵɵelementStart(20, "tr", 13)(21, "td", 3);
          ɵɵtext(22);
          ɵɵpipe(23, "translate");
          ɵɵelementEnd();
          ɵɵelement(24, "td");
          ɵɵelementStart(25, "td", 14);
          ɵɵtext(26);
          ɵɵpipe(27, "localeCurrency");
          ɵɵelementStart(28, "div", 15);
          ɵɵpipe(29, "translate");
          ɵɵtext(30);
          ɵɵpipe(31, "localeCurrency");
          ɵɵelementEnd()();
          ɵɵelement(32, "td");
          ɵɵelementEnd();
          ɵɵelementStart(33, "tr", 16)(34, "td", 3);
          ɵɵtext(35);
          ɵɵpipe(36, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(37, "td");
          ɵɵtemplate(38, OrderDataTableComponent_vdr_chip_38_Template, 2, 1, "vdr-chip", 17);
          ɵɵelementEnd();
          ɵɵelementStart(39, "td", 14);
          ɵɵtext(40);
          ɵɵpipe(41, "localeCurrency");
          ɵɵelementStart(42, "div", 15);
          ɵɵpipe(43, "translate");
          ɵɵtext(44);
          ɵɵpipe(45, "localeCurrency");
          ɵɵelementEnd()();
          ɵɵelement(46, "td");
          ɵɵelementEnd();
          ɵɵelementStart(47, "tr", 18)(48, "td", 3);
          ɵɵtext(49);
          ɵɵpipe(50, "translate");
          ɵɵelementEnd();
          ɵɵelement(51, "td");
          ɵɵelementStart(52, "td", 14);
          ɵɵtext(53);
          ɵɵpipe(54, "localeCurrency");
          ɵɵelementStart(55, "div", 15);
          ɵɵpipe(56, "translate");
          ɵɵtext(57);
          ɵɵpipe(58, "localeCurrency");
          ɵɵelementEnd()();
          ɵɵelement(59, "td");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵclassProp("no-select", ctx.disableSelect);
          ɵɵadvance();
          ɵɵclassProp("items-selected", ctx.selectionManager == null ? null : ctx.selectionManager.selection.length);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.visibleSortedColumns);
          ɵɵadvance(3);
          ɵɵproperty("uiLanguage", ɵɵpipeBind1(11, 30, ctx.uiLanguage$))("columns", ctx.sortedColumns);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.searchComponent || ctx.customSearchTemplate || (ctx.filters == null ? null : ctx.filters.length));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ɵɵpipeBind2(15, 32, ctx.items, ɵɵpureFunction4(65, _c5, ctx.id, ctx.itemsPerPage, ctx.currentPage, ctx.totalItems)))("ngForTrackBy", ctx.trackByFn.bind(ctx));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", !(ctx.items == null ? null : ctx.items.length));
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.order.surcharges);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.order.discounts);
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(23, 35, "order.sub-total"));
          ɵɵadvance(2);
          ɵɵattribute("colspan", ctx.visibleSortedColumns.length - 2);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(27, 37, ctx.order.subTotalWithTax, ctx.order.currencyCode), " ");
          ɵɵadvance(2);
          ɵɵproperty("title", ɵɵpipeBind1(29, 40, "order.net-price"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(31, 42, ctx.order.subTotal, ctx.order.currencyCode), " ");
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind1(36, 45, "order.shipping"));
          ɵɵadvance(2);
          ɵɵattribute("colspan", ctx.visibleSortedColumns.length - 2);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.order.shippingLines);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(41, 47, ctx.order.shippingWithTax, ctx.order.currencyCode), " ");
          ɵɵadvance(2);
          ɵɵproperty("title", ɵɵpipeBind1(43, 50, "order.net-price"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(45, 52, ctx.order.shipping, ctx.order.currencyCode), " ");
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind1(50, 55, "order.total"));
          ɵɵadvance(2);
          ɵɵattribute("colspan", ctx.visibleSortedColumns.length - 2);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(54, 57, ctx.order.totalWithTax, ctx.order.currencyCode), " ");
          ɵɵadvance(2);
          ɵɵproperty("title", ɵɵpipeBind1(56, 60, "order.net-price"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(58, 62, ctx.order.total, ctx.order.currencyCode), " ");
        }
      },
      dependencies: [ClrIconCustomTag, ClrCheckbox, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, RouterLink, ChipComponent, FormFieldControlDirective, EmptyPlaceholderComponent, UiExtensionPointComponent, DataTableFiltersComponent, DataTableColumnPickerComponent, AsyncPipe, PaginatePipe, TranslatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:block;max-width:100%;position:relative;margin-bottom:calc(var(--space-unit) * 4);container-type:inline-size}th[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-table-header-border);color:var(--color-weight-700);font-size:var(--font-size-xs);font-weight:600;text-transform:uppercase;position:relative;white-space:nowrap;background-color:transparent}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 1);color:var(--color-text-100)}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type, tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{text-align:center}@media screen and (min-width: 992px){tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type, tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{padding-inline-start:var(--surface-margin-left);text-align:start}}th[_ngcontent-%COMP%]:last-of-type, td[_ngcontent-%COMP%]:last-of-type{border-inline-end:1px solid var(--color-table-header-border)}tr[_ngcontent-%COMP%]:first-of-type   th[_ngcontent-%COMP%]:last-of-type{border-image:linear-gradient(0deg,var(--color-table-header-border),transparent) 1}tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:last-of-type{border-image:linear-gradient(180deg,var(--color-table-header-border),transparent) 1}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-table-row-separator)}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:var(--color-table-row-hover-bg)}.bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 5);background-color:var(--color-surface-bg);z-index:10;display:flex;position:absolute;top:5px;height:40px}@media screen and (min-width: 992px){.bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 8.5)}}@media screen and (min-width: 1280px){.bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 10.5)}}.table-wrapper[_ngcontent-%COMP%]{display:block;overflow-y:hidden;overflow-x:auto;position:relative;width:100%;max-width:var(--surface-width)}table[_ngcontent-%COMP%]{width:100%}table.no-select[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.column-picker[_ngcontent-%COMP%]{width:24px}.sort-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;margin-inline-start:calc(var(--space-unit) * .5)}.sort-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;border-radius:var(--border-radius-lg);color:var(--color-weight-500);padding:0 2px;cursor:pointer;background-color:transparent}.sort-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--color-primary-700)}.sort-toggle[_ngcontent-%COMP%]   .sort-label[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * .5);font-size:10px;color:var(--color-primary-600);font-weight:400}.toggle-search-filter-row[_ngcontent-%COMP%]{position:absolute;top:-12px;left:4px}@media screen and (min-width: 1280px){.toggle-search-filter-row[_ngcontent-%COMP%]{left:8px}}.toggle-search-filter-row.active[_ngcontent-%COMP%]{background-color:var(--color-primary-700);color:var(--color-primary-100);border-color:var(--color-primary-700)}th.filter-row[_ngcontent-%COMP%]{position:relative;font-size:var(--font-size-base);font-weight:400;background-color:var(--color-weight-100);box-shadow:var(--data-table-filter-box-shadow);border-left-width:0;border-right-width:0;text-align:initial;padding:0}th.filter-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}th.filter-row.active[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-table-header-border)}th.filter-row[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{margin-top:calc(var(--space-unit) * 1);display:flex;flex-wrap:wrap;gap:calc(var(--space-unit) * .5)}.filter-row-wrapper[_ngcontent-%COMP%]{padding:calc(var(--space-unit) * 4);padding-inline-start:0;max-height:150px;transition:max-height .2s,padding .2s,opacity .2s}.filter-row-wrapper.hidden[_ngcontent-%COMP%]{max-height:0px;padding-top:0;padding-bottom:0;overflow:hidden;opacity:0}.cell-link[_ngcontent-%COMP%]{display:block;width:100%;height:100%}td.active[_ngcontent-%COMP%]{background-color:var(--color-table-row-active-bg)}.cell-content[_ngcontent-%COMP%]{display:flex;align-items:center;line-height:var(--font-size-sm);color:var(--color-weight-700)}.cell-content.left[_ngcontent-%COMP%]{justify-content:flex-start}.cell-content.center[_ngcontent-%COMP%]{justify-content:center}.cell-content.right[_ngcontent-%COMP%]{justify-content:flex-end}.selection-col[_ngcontent-%COMP%]{width:calc(var(--space-unit) * 8)}vdr-empty-placeholder[_ngcontent-%COMP%]{width:100%}.table-footer[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between;margin-top:var(--space-unit);margin-inline-start:var(--surface-margin-left);margin-inline-end:var(--space-unit)}.total-items-count[_ngcontent-%COMP%]{font-size:var(--font-size-xs)}@container (max-width: 500px){.total-items-count[_ngcontent-%COMP%]{display:none}}", "[_nghost-%COMP%]   .is-cancelled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-decoration:line-through;background-color:var(--color-component-bg-200)}[_nghost-%COMP%]   .sub-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:1px dashed var(--color-component-border-200)}[_nghost-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;border-top:1px dashed var(--color-component-border-200)}[_nghost-%COMP%]   td.custom-fields-row[_ngcontent-%COMP%]{border-top-style:dashed;border-top-color:var(--color-grey-200)}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--border-radius-img)}[_nghost-%COMP%]   .order-line-custom-fields[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   .order-line-custom-fields[_ngcontent-%COMP%]   .custom-field[_ngcontent-%COMP%]{text-align:start;max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;margin-inline-end:18px}[_nghost-%COMP%]   .draft-qty[_ngcontent-%COMP%]{max-width:48px}[_nghost-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]{background-color:var(--color-component-bg-100)}[_nghost-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]   .custom-field-ellipsis[_ngcontent-%COMP%]{color:var(--color-text-300)}[_nghost-%COMP%]   .net-price[_ngcontent-%COMP%]{font-size:11px;color:var(--color-text-300);line-height:14px}[_nghost-%COMP%]   .promotions-label[_ngcontent-%COMP%]{text-decoration:underline dotted var(--color-text-200);font-size:11px;margin-top:6px;cursor:pointer;text-transform:lowercase}[_nghost-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}[_nghost-%COMP%]   .shipping-method-name[_ngcontent-%COMP%]{font-size:var(--font-size-xs);margin-inline-end:2px}[_nghost-%COMP%]   .order-placed-quantity[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--color-text-300);margin-inline-end:2px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDataTableComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-data-table",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="bulk-actions">
    <ng-content select="vdr-bulk-action-menu"></ng-content>
</div>
<div class="table-wrapper">
    <table
        class=""
        [class.no-select]="disableSelect"
    >
        <thead [class.items-selected]="selectionManager?.selection.length">
            <tr class="heading-row">
                <th *ngIf="selectionManager" class="selection-col">
                    <input
                        type="checkbox"
                        clrCheckbox
                        [checked]="selectionManager?.areAllCurrentItemsSelected()"
                        (change)="onToggleAllClick()"
                    />
                </th>
                <th
                    *ngFor="let column of visibleSortedColumns; last as isLast"
                    [class.expand]="column.expand"
                >
                    <div class="cell-content" [ngClass]="column.align">
                        <vdr-ui-extension-point
                            [locationId]="id"
                            [metadata]="column.id"
                            api="dataTable"
                            [topPx]="-6"
                            [leftPx]="-24"
                            display="block"
                        >
                            <span>{{ column.heading }}</span>
                        </vdr-ui-extension-point>
                        <div *ngIf="column.sort as sort" class="sort-toggle">
                            <button (click)="sort.toggleSortOrder()" [class.active]="sort.sortOrder">
                                <clr-icon *ngIf="!sort.sortOrder" shape="two-way-arrows left"></clr-icon>
                                <clr-icon *ngIf="sort.sortOrder === 'ASC'" shape="arrow up"></clr-icon>
                                <clr-icon *ngIf="sort.sortOrder === 'DESC'" shape="arrow down"></clr-icon>
                            </button>
                            <div class="sort-label" *ngIf="sort.sortOrder">{{ sort.sortOrder }}</div>
                        </div>
                    </div>
                </th>
                <th>
                    <div class="column-picker">
                        <vdr-data-table-colum-picker
                            [uiLanguage]="uiLanguage$ | async"
                            [columns]="sortedColumns"
                            (reorder)="onColumnReorder($event)"
                            (resetColumns)="onColumnsReset()"
                        ></vdr-data-table-colum-picker>
                    </div>
                </th>
            </tr>
            <tr *ngIf="searchComponent || customSearchTemplate || filters?.length">
                <th
                    [attr.colspan]="visibleSortedColumns.length + (selectionManager ? 2 : 1)"
                    class="filter-row"
                    [class.active]="showSearchFilterRow"
                >
                    <button
                        class="button-ghost toggle-search-filter-row"
                        [class.active]="showSearchFilterRow"
                        (click)="toggleSearchFilterRow()"
                        [title]="'common.search-and-filter-list' | translate"
                    >
                        <clr-icon shape="search"></clr-icon>
                    </button>
                    <div class="filter-row-wrapper" [class.hidden]="!showSearchFilterRow">
                        <ng-container *ngTemplateOutlet="searchComponent?.template"></ng-container>
                        <ng-container *ngTemplateOutlet="customSearchTemplate"></ng-container>
                        <ng-container *ngIf="filters">
                            <div class="filters">
                                <vdr-data-table-filters
                                    *ngFor="let activeFilter of filters.activeFilters"
                                    [filterWithValue]="activeFilter"
                                    [filters]="filters"
                                    class="mt-1"
                                ></vdr-data-table-filters>
                                <vdr-data-table-filters
                                    *ngIf="filters.length"
                                    [filters]="filters"
                                    class="mt-1"
                                ></vdr-data-table-filters>
                            </div>
                        </ng-container>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                *ngFor="
                    let item of items
                        | paginate
                            : {
                                  id: id,
                                  itemsPerPage: itemsPerPage,
                                  currentPage: currentPage,
                                  totalItems: totalItems
                              };
                    index as i;
                    trackBy: trackByFn.bind(this)
                "
            >
                <td *ngIf="selectionManager" class="selection-col" [class.active]="activeIndex === i">
                    <input
                        type="checkbox"
                        clrCheckbox
                        [checked]="selectionManager?.isSelected(item)"
                        (click)="onRowClick(item, $event)"
                    />
                </td>
                <td *ngFor="let column of visibleSortedColumns" [class.active]="activeIndex === i">
                    <div class="cell-content" [ngClass]="column.align">
                        <ng-container
                            *ngIf="customComponents.get(column.id) as componentConfig; else defaultComponent"
                        >
                            <ng-container
                                *ngComponentOutlet="
                                    componentConfig.config.component;
                                    inputs: { rowItem: item };
                                    injector: componentConfig.injector
                                "
                            ></ng-container>
                        </ng-container>
                        <ng-template #defaultComponent>
                            <ng-container
                                *ngTemplateOutlet="column.template; context: { item: item, index: i }"
                            ></ng-container>
                        </ng-template>
                    </div>
                </td>
                <td [class.active]="activeIndex === i"><!-- column select --></td>
            </tr>
            <ng-container>
                <tr *ngIf="!items?.length">
                    <td [attr.colspan]="visibleSortedColumns.length + (selectionManager ? 2 : 1)">
                        <vdr-empty-placeholder [emptyStateLabel]="'order.order-is-empty' | translate"></vdr-empty-placeholder>
                    </td>
                </tr>
            </ng-container>
            <tr class="surcharge" *ngFor="let surcharge of order.surcharges">
                <td class="align-middle name left" colspan="2">{{ surcharge.description }}</td>
                <td class="align-middle sku">{{ surcharge.sku }}</td>
                <td class="align-middle" [attr.colspan]="visibleSortedColumns.length - 4"></td>
                <td class="align-middle total">
                    {{ surcharge.priceWithTax | localeCurrency : order.currencyCode }}
                    <div class="net-price" [title]="'order.net-price' | translate">
                        {{ surcharge.price | localeCurrency : order.currencyCode }}
                    </div>
                </td>
                <td><!-- column select --></td>
            </tr>
            <ng-container *ngFor="let discount of order.discounts">
                <tr class="order-adjustment" *ngIf="discount.type !== 'OTHER'">
                    <td [attr.colspan]="visibleSortedColumns.length - 1" class="">
                        <a [routerLink]="getPromotionLink(discount)">{{ discount.description }}</a>
                        <vdr-chip *ngIf="getCouponCodeForAdjustment(order, discount) as couponCode">{{
                            couponCode
                        }}</vdr-chip>
                    </td>
                    <td class="">
                        {{ discount.amountWithTax | localeCurrency : order.currencyCode }}
                        <div class="net-price" [title]="'order.net-price' | translate">
                            {{ discount.amount | localeCurrency : order.currencyCode }}
                        </div>
                    </td>
                    <td><!-- column select --></td>
                </tr>
            </ng-container>
            <tr class="sub-total">
                <td class="">{{ 'order.sub-total' | translate }}</td>
                <td [attr.colspan]="visibleSortedColumns.length - 2"></td>
                <td class="clr-align-middle">
                    {{ order.subTotalWithTax | localeCurrency : order.currencyCode }}
                    <div class="net-price" [title]="'order.net-price' | translate">
                        {{ order.subTotal | localeCurrency : order.currencyCode }}
                    </div>
                </td>
                <td><!-- column select --></td>
            </tr>
            <tr class="shipping">
                <td class="">{{ 'order.shipping' | translate }}</td>
                <td [attr.colspan]="visibleSortedColumns.length - 2">
                    <vdr-chip *ngFor="let shippingLine of order.shippingLines" class="shipping-method-name">
                        {{ shippingLine.shippingMethod.name }}
                    </vdr-chip>
                </td>
                <td class="clr-align-middle">
                    {{ order.shippingWithTax | localeCurrency : order.currencyCode }}
                    <div class="net-price" [title]="'order.net-price' | translate">
                        {{ order.shipping | localeCurrency : order.currencyCode }}
                    </div>
                </td>
                <td><!-- column select --></td>
            </tr>
            <tr class="total">
                <td class="">{{ 'order.total' | translate }}</td>
                <td [attr.colspan]="visibleSortedColumns.length - 2"></td>
                <td class="clr-align-middle">
                    {{ order.totalWithTax | localeCurrency : order.currencyCode }}
                    <div class="net-price" [title]="'order.net-price' | translate">
                        {{ order.total | localeCurrency : order.currencyCode }}
                    </div>
                </td>
                <td><!-- column select --></td>
            </tr>
        </tbody>
    </table>
</div>
`,
      styles: [":host{display:block;max-width:100%;position:relative;margin-bottom:calc(var(--space-unit) * 4);container-type:inline-size}th{border-bottom:1px solid var(--color-table-header-border);color:var(--color-weight-700);font-size:var(--font-size-xs);font-weight:600;text-transform:uppercase;position:relative;white-space:nowrap;background-color:transparent}th,td{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 1);color:var(--color-text-100)}tr td:first-of-type,tr th:first-of-type{text-align:center}@media screen and (min-width: 992px){tr td:first-of-type,tr th:first-of-type{padding-inline-start:var(--surface-margin-left);text-align:start}}th:last-of-type,td:last-of-type{border-inline-end:1px solid var(--color-table-header-border)}tr:first-of-type th:last-of-type{border-image:linear-gradient(0deg,var(--color-table-header-border),transparent) 1}tr:last-of-type td:last-of-type{border-image:linear-gradient(180deg,var(--color-table-header-border),transparent) 1}tbody td{border-bottom:1px solid var(--color-table-row-separator)}tbody tr:hover{background-color:var(--color-table-row-hover-bg)}.bulk-actions{margin-inline-start:calc(var(--space-unit) * 5);background-color:var(--color-surface-bg);z-index:10;display:flex;position:absolute;top:5px;height:40px}@media screen and (min-width: 992px){.bulk-actions{margin-inline-start:calc(var(--space-unit) * 8.5)}}@media screen and (min-width: 1280px){.bulk-actions{margin-inline-start:calc(var(--space-unit) * 10.5)}}.table-wrapper{display:block;overflow-y:hidden;overflow-x:auto;position:relative;width:100%;max-width:var(--surface-width)}table{width:100%}table.no-select{-webkit-user-select:none;user-select:none}.column-picker{width:24px}.sort-toggle{display:flex;align-items:center;margin-inline-start:calc(var(--space-unit) * .5)}.sort-toggle button{border:0;border-radius:var(--border-radius-lg);color:var(--color-weight-500);padding:0 2px;cursor:pointer;background-color:transparent}.sort-toggle button.active{color:var(--color-primary-700)}.sort-toggle .sort-label{margin-inline-start:calc(var(--space-unit) * .5);font-size:10px;color:var(--color-primary-600);font-weight:400}.toggle-search-filter-row{position:absolute;top:-12px;left:4px}@media screen and (min-width: 1280px){.toggle-search-filter-row{left:8px}}.toggle-search-filter-row.active{background-color:var(--color-primary-700);color:var(--color-primary-100);border-color:var(--color-primary-700)}th.filter-row{position:relative;font-size:var(--font-size-base);font-weight:400;background-color:var(--color-weight-100);box-shadow:var(--data-table-filter-box-shadow);border-left-width:0;border-right-width:0;text-align:initial;padding:0}th.filter-row input{width:100%}th.filter-row.active{border-bottom:1px solid var(--color-table-header-border)}th.filter-row .filters{margin-top:calc(var(--space-unit) * 1);display:flex;flex-wrap:wrap;gap:calc(var(--space-unit) * .5)}.filter-row-wrapper{padding:calc(var(--space-unit) * 4);padding-inline-start:0;max-height:150px;transition:max-height .2s,padding .2s,opacity .2s}.filter-row-wrapper.hidden{max-height:0px;padding-top:0;padding-bottom:0;overflow:hidden;opacity:0}.cell-link{display:block;width:100%;height:100%}td.active{background-color:var(--color-table-row-active-bg)}.cell-content{display:flex;align-items:center;line-height:var(--font-size-sm);color:var(--color-weight-700)}.cell-content.left{justify-content:flex-start}.cell-content.center{justify-content:center}.cell-content.right{justify-content:flex-end}.selection-col{width:calc(var(--space-unit) * 8)}vdr-empty-placeholder{width:100%}.table-footer{display:flex;align-items:baseline;justify-content:space-between;margin-top:var(--space-unit);margin-inline-start:var(--surface-margin-left);margin-inline-end:var(--space-unit)}.total-items-count{font-size:var(--font-size-xs)}@container (max-width: 500px){.total-items-count{display:none}}\n", ":host .is-cancelled td{text-decoration:line-through;background-color:var(--color-component-bg-200)}:host .sub-total td{border-top:1px dashed var(--color-component-border-200)}:host .total td{font-weight:700;border-top:1px dashed var(--color-component-border-200)}:host td.custom-fields-row{border-top-style:dashed;border-top-color:var(--color-grey-200)}:host img{border-radius:var(--border-radius-img)}:host .order-line-custom-fields{display:flex;flex-wrap:wrap}:host .order-line-custom-fields .custom-field{text-align:start;max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;margin-inline-end:18px}:host .draft-qty{max-width:48px}:host .order-line-custom-field{background-color:var(--color-component-bg-100)}:host .order-line-custom-field .custom-field-ellipsis{color:var(--color-text-300)}:host .net-price{font-size:11px;color:var(--color-text-300);line-height:14px}:host .promotions-label{text-decoration:underline dotted var(--color-text-200);font-size:11px;margin-top:6px;cursor:pointer;text-transform:lowercase}:host .thumb img{width:50px;height:50px}:host .shipping-method-name{font-size:var(--font-size-xs);margin-inline-end:2px}:host .order-placed-quantity{text-decoration:line-through;color:var(--color-text-300);margin-inline-end:2px}\n"]
    }]
  }], null, {
    totalColumns: [{
      type: ContentChildren,
      args: [OrderTotalColumnComponent]
    }],
    order: [{
      type: Input
    }]
  });
})();
var OrderTableComponent = class _OrderTableComponent {
  constructor() {
    this.isDraft = false;
    this.adjust = new EventEmitter();
    this.remove = new EventEmitter();
    this.orderLineCustomFieldsVisible = false;
    this.customFieldsForLine = {};
  }
  get visibleOrderLineCustomFields() {
    return this.orderLineCustomFieldsVisible ? this.orderLineCustomFields : [];
  }
  get showElided() {
    return !this.orderLineCustomFieldsVisible && 0 < this.orderLineCustomFields.length;
  }
  ngOnInit() {
    this.orderLineCustomFieldsVisible = this.orderLineCustomFields.length < 2;
    this.getLineCustomFields();
  }
  draftInputBlur(line, quantity) {
    if (line.quantity !== quantity) {
      this.adjust.emit({
        lineId: line.id,
        quantity
      });
    }
  }
  toggleOrderLineCustomFields() {
    this.orderLineCustomFieldsVisible = !this.orderLineCustomFieldsVisible;
  }
  getLineDiscounts(line) {
    return line.discounts.filter((a) => a.type === AdjustmentType.PROMOTION);
  }
  getLineCustomFields() {
    for (const line of this.order.lines) {
      const formGroup = new UntypedFormGroup({});
      const result = this.orderLineCustomFields.map((config) => {
        const value = line.customFields[config.name];
        formGroup.addControl(config.name, new UntypedFormControl(value));
        return {
          config,
          formGroup,
          value
        };
      }).filter((field) => this.orderLineCustomFieldsVisible ? true : field.value != null);
      this.customFieldsForLine[line.id] = result;
    }
  }
  getPromotionLink(promotion) {
    const id = promotion.adjustmentSource.split(":")[1];
    return ["/marketing", "promotions", id];
  }
  getCouponCodeForAdjustment(order, promotionAdjustment) {
    const id = promotionAdjustment.adjustmentSource.split(":")[1];
    const promotion = order.promotions.find((p) => p.id === id);
    if (promotion) {
      return promotion.couponCode || void 0;
    }
  }
  getShippingNames(order) {
    if (order.shippingLines.length) {
      return order.shippingLines.map((shippingLine) => shippingLine.shippingMethod.name).join(", ");
    } else {
      return "";
    }
  }
  static {
    this.ɵfac = function OrderTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderTableComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderTableComponent,
      selectors: [["vdr-order-table"]],
      inputs: {
        order: "order",
        orderLineCustomFields: "orderLineCustomFields",
        isDraft: "isDraft"
      },
      outputs: {
        adjust: "adjust",
        remove: "remove"
      },
      standalone: false,
      decls: 32,
      vars: 38,
      consts: [["imagePlaceholder", ""], ["draft", ""], ["qtyInput", ""], ["id", "order-detail-list", 3, "items", "order"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "updated-at", 3, "heading", "hiddenByDefault"], ["id", "image", 3, "heading"], ["id", "product-name", 3, "heading"], ["id", "product-variant", 3, "heading"], ["id", "product-sku", 3, "heading"], ["id", "unit-price", 3, "heading"], ["id", "quantity", 3, "heading", "optional"], [3, "customField", 4, "ngFor", "ngForOf"], ["id", "total", 3, "heading", "optional"], [1, "image-placeholder"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], [1, "placeholder"], ["shape", "image", "size", "48"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [1, "unit-price"], [1, "net-price", 3, "title"], [4, "ngIf", "ngIfElse"], [3, "line", "payments"], [3, "line", "orderState", "allOrderFulfillments"], [1, "flex"], ["class", "order-placed-quantity", 3, "title", 4, "ngIf"], [1, "order-placed-quantity", 3, "title"], ["type", "number", "min", "0", 1, "draft-qty", 3, "blur", "value"], [1, "icon-button", 3, "click"], ["shape", "trash"], [3, "customField"], [4, "ngIf"], ["vdrDropdownTrigger", "", 1, "promotions-label"], ["class", "line-promotion", 4, "ngFor", "ngForOf"], [1, "line-promotion"], [1, "promotion-name", 3, "routerLink"], [1, "promotion-amount"]],
      template: function OrderTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-order-data-table", 3)(1, "vdr-dt2-column", 4);
          ɵɵpipe(2, "translate");
          ɵɵtemplate(3, OrderTableComponent_ng_template_3_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(4, "vdr-dt2-column", 5);
          ɵɵpipe(5, "translate");
          ɵɵtemplate(6, OrderTableComponent_ng_template_6_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(7, "vdr-dt2-column", 6);
          ɵɵpipe(8, "translate");
          ɵɵtemplate(9, OrderTableComponent_ng_template_9_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(10, "vdr-dt2-column", 7);
          ɵɵpipe(11, "translate");
          ɵɵtemplate(12, OrderTableComponent_ng_template_12_Template, 4, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(13, "vdr-dt2-column", 8);
          ɵɵpipe(14, "translate");
          ɵɵtemplate(15, OrderTableComponent_ng_template_15_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(16, "vdr-dt2-column", 9);
          ɵɵpipe(17, "translate");
          ɵɵtemplate(18, OrderTableComponent_ng_template_18_Template, 4, 5, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(19, "vdr-dt2-column", 10);
          ɵɵpipe(20, "translate");
          ɵɵtemplate(21, OrderTableComponent_ng_template_21_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(22, "vdr-dt2-column", 11);
          ɵɵpipe(23, "translate");
          ɵɵtemplate(24, OrderTableComponent_ng_template_24_Template, 7, 11, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(25, "vdr-dt2-column", 12);
          ɵɵpipe(26, "translate");
          ɵɵtemplate(27, OrderTableComponent_ng_template_27_Template, 5, 7, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(28, OrderTableComponent_vdr_dt2_custom_field_column_28_Template, 1, 1, "vdr-dt2-custom-field-column", 13);
          ɵɵelementStart(29, "vdr-order-total-column", 14);
          ɵɵpipe(30, "translate");
          ɵɵtemplate(31, OrderTableComponent_ng_template_31_Template, 8, 12, "ng-template");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("items", ctx.order.lines)("order", ctx.order);
          ɵɵadvance();
          ɵɵproperty("heading", ɵɵpipeBind1(2, 18, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(5, 20, "common.created-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(8, 22, "common.updated-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(11, 24, "common.image"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(14, 26, "order.product-name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(17, 28, "order.product-variant"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(20, 30, "order.product-sku"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(23, 32, "order.unit-price"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(26, 34, "order.quantity"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.orderLineCustomFields);
          ɵɵadvance();
          ɵɵproperty("heading", ɵɵpipeBind1(30, 36, "order.total"))("optional", false);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, FormFieldControlDirective, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DataTable2ColumnComponent, DataTableCustomFieldColumnComponent, LineFulfillmentComponent, LineRefundsComponent, OrderDataTableComponent, OrderTotalColumnComponent, TranslatePipe, AssetPreviewPipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]   .is-cancelled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-decoration:line-through;background-color:var(--color-component-bg-200)}[_nghost-%COMP%]   .sub-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:1px dashed var(--color-component-border-200)}[_nghost-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;border-top:1px dashed var(--color-component-border-200)}[_nghost-%COMP%]   td.custom-fields-row[_ngcontent-%COMP%]{border-top-style:dashed;border-top-color:var(--color-grey-200)}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--border-radius-img)}[_nghost-%COMP%]   .order-line-custom-fields[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   .order-line-custom-fields[_ngcontent-%COMP%]   .custom-field[_ngcontent-%COMP%]{text-align:start;max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;margin-inline-end:18px}[_nghost-%COMP%]   .draft-qty[_ngcontent-%COMP%]{max-width:48px}[_nghost-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]{background-color:var(--color-component-bg-100)}[_nghost-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]   .custom-field-ellipsis[_ngcontent-%COMP%]{color:var(--color-text-300)}[_nghost-%COMP%]   .net-price[_ngcontent-%COMP%]{font-size:11px;color:var(--color-text-300);line-height:14px}[_nghost-%COMP%]   .promotions-label[_ngcontent-%COMP%]{text-decoration:underline dotted var(--color-text-200);font-size:11px;margin-top:6px;cursor:pointer;text-transform:lowercase}[_nghost-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}[_nghost-%COMP%]   .shipping-method-name[_ngcontent-%COMP%]{font-size:var(--font-size-xs);margin-inline-end:2px}[_nghost-%COMP%]   .order-placed-quantity[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--color-text-300);margin-inline-end:2px}  .line-promotion{display:flex;justify-content:space-between;padding:6px 12px}  .line-promotion .promotion-amount{margin-inline-start:12px}  .line-promotion .net-price{font-size:11px;color:var(--color-text-300)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderTableComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-table",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-order-data-table id="order-detail-list" [items]="order.lines" [order]="order">
    <vdr-dt2-column id="id" [heading]="'common.id' | translate" [hiddenByDefault]="true">
        <ng-template let-line="item">
            {{ line.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
            id="created-at"
            [heading]="'common.created-at' | translate"
            [hiddenByDefault]="true"
    >
        <ng-template let-line="item">
            {{ line.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
            id="updated-at"
            [heading]="'common.updated-at' | translate"
            [hiddenByDefault]="true"
    >
        <ng-template let-line="item">
            {{ line.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.image' | translate" id="image">
        <ng-template let-line="item">
            <div class="image-placeholder">
                <img
                    *ngIf="line.featuredAsset as asset; else imagePlaceholder"
                    [src]="asset | assetPreview : 'tiny'"
                />
                <ng-template #imagePlaceholder>
                    <div class="placeholder">
                        <clr-icon shape="image" size="48"></clr-icon>
                    </div>
                </ng-template>
            </div>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.product-name' | translate" id="product-name">
        <ng-template let-line="item">
            <a class="button-ghost" [routerLink]="['/catalog/products', line.productVariant.product.id]"
            ><span>{{ line.productVariant.product.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.product-variant' | translate" id="product-variant">
        <ng-template let-line="item">
            <a class="button-ghost" [routerLink]="['/catalog/products', line.productVariant.product.id, 'variants', line.productVariant.id]"
            ><span>{{ line.productVariant.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.product-sku' | translate" id="product-sku">
        <ng-template let-line="item">
            {{ line.productVariant.sku }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.unit-price' | translate" id="unit-price">
        <ng-template let-line="item">
            <div class="unit-price">
                {{ line.unitPriceWithTax | localeCurrency : order.currencyCode }}
                <div class="net-price" [title]="'order.net-price' | translate">
                    {{ line.unitPrice | localeCurrency : order.currencyCode }}
                </div>
            </div>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.quantity' | translate" id="quantity" [optional]="false">
        <ng-template let-line="item">
            <ng-container *ngIf="!isDraft; else draft">
                <div class="flex">
                    <div
                        *ngIf="line.orderPlacedQuantity && line.quantity !== line.orderPlacedQuantity"
                        class="order-placed-quantity"
                        [title]="'order.original-quantity-at-checkout' | translate"
                    >
                        {{ line.orderPlacedQuantity }}
                    </div>
                    <div>{{ line.quantity }}</div>
                </div>
            </ng-container>
            <ng-template #draft>
                <div class="flex">
                    <input
                        class="draft-qty"
                        type="number"
                        min="0"
                        #qtyInput
                        [value]="line.quantity"
                        (blur)="draftInputBlur(line, qtyInput.valueAsNumber)"
                    />
                    <button class="icon-button" (click)="remove.emit({ lineId: line.id })">
                        <clr-icon shape="trash"></clr-icon>
                    </button>
                </div>
            </ng-template>
            <vdr-line-refunds [line]="line" [payments]="order.payments"></vdr-line-refunds>
            <vdr-line-fulfillment
                [line]="line"
                [orderState]="order.state"
                [allOrderFulfillments]="order.fulfillments"
            ></vdr-line-fulfillment>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let customField of orderLineCustomFields"
        [customField]="customField"
    />
    <vdr-order-total-column [heading]="'order.total' | translate" id="total" [optional]="false">
        <ng-template let-line="item">
            <div class="unit-price">
                {{ line.linePriceWithTax | localeCurrency : order.currencyCode }}
                <div class="net-price" [title]="'order.net-price' | translate">
                    {{ line.linePrice | localeCurrency : order.currencyCode }}
                </div>
            </div>

            <ng-container *ngIf="getLineDiscounts(line) as discounts">
                <vdr-dropdown *ngIf="discounts.length">
                    <div class="promotions-label" vdrDropdownTrigger>
                        {{ 'order.promotions-applied' | translate }}
                    </div>
                    <vdr-dropdown-menu>
                        <div class="line-promotion" *ngFor="let discount of discounts">
                            <a class="promotion-name" [routerLink]="getPromotionLink(discount)">{{
                                discount.description
                            }}</a>
                            <div class="promotion-amount">
                                {{ discount.amountWithTax | localeCurrency : order.currencyCode }}
                                <div class="net-price" [title]="'order.net-price' | translate">
                                    {{ discount.amount | localeCurrency : order.currencyCode }}
                                </div>
                            </div>
                        </div>
                    </vdr-dropdown-menu>
                </vdr-dropdown>
            </ng-container>
        </ng-template>
    </vdr-order-total-column>
</vdr-order-data-table>
`,
      styles: [":host .is-cancelled td{text-decoration:line-through;background-color:var(--color-component-bg-200)}:host .sub-total td{border-top:1px dashed var(--color-component-border-200)}:host .total td{font-weight:700;border-top:1px dashed var(--color-component-border-200)}:host td.custom-fields-row{border-top-style:dashed;border-top-color:var(--color-grey-200)}:host img{border-radius:var(--border-radius-img)}:host .order-line-custom-fields{display:flex;flex-wrap:wrap}:host .order-line-custom-fields .custom-field{text-align:start;max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;margin-inline-end:18px}:host .draft-qty{max-width:48px}:host .order-line-custom-field{background-color:var(--color-component-bg-100)}:host .order-line-custom-field .custom-field-ellipsis{color:var(--color-text-300)}:host .net-price{font-size:11px;color:var(--color-text-300);line-height:14px}:host .promotions-label{text-decoration:underline dotted var(--color-text-200);font-size:11px;margin-top:6px;cursor:pointer;text-transform:lowercase}:host .thumb img{width:50px;height:50px}:host .shipping-method-name{font-size:var(--font-size-xs);margin-inline-end:2px}:host .order-placed-quantity{text-decoration:line-through;color:var(--color-text-300);margin-inline-end:2px}::ng-deep .line-promotion{display:flex;justify-content:space-between;padding:6px 12px}::ng-deep .line-promotion .promotion-amount{margin-inline-start:12px}::ng-deep .line-promotion .net-price{font-size:11px;color:var(--color-text-300)}\n"]
    }]
  }], null, {
    order: [{
      type: Input
    }],
    orderLineCustomFields: [{
      type: Input
    }],
    isDraft: [{
      type: Input
    }],
    adjust: [{
      type: Output
    }],
    remove: [{
      type: Output
    }]
  });
})();
var DraftOrderVariantSelectorComponent = class _DraftOrderVariantSelectorComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.addItem = new EventEmitter();
    this.customFieldsFormGroup = new UntypedFormGroup({});
    this.selectedVariantId$ = new Subject();
    this.quantity = 1;
  }
  ngOnInit() {
    this.selectedVariant$ = this.selectedVariantId$.pipe(switchMap((id) => {
      if (id) {
        return this.dataService.product.getProductVariant(id).mapSingle(({
          productVariant
        }) => productVariant);
      } else {
        return [void 0];
      }
    }));
    for (const customField of this.orderLineCustomFields) {
      this.customFieldsFormGroup.addControl(customField.name, new UntypedFormControl(""));
    }
  }
  addItemClick(selectedVariant) {
    if (selectedVariant) {
      this.addItem.emit({
        productVariantId: selectedVariant.id,
        quantity: this.quantity,
        customFields: this.orderLineCustomFields.length ? this.customFieldsFormGroup.value : void 0
      });
      this.selectedVariantId$.next(void 0);
      this.customFieldsFormGroup.reset();
    }
  }
  static {
    this.ɵfac = function DraftOrderVariantSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DraftOrderVariantSelectorComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DraftOrderVariantSelectorComponent,
      selectors: [["vdr-draft-order-variant-selector"]],
      inputs: {
        currencyCode: "currencyCode",
        orderLineCustomFields: "orderLineCustomFields"
      },
      outputs: {
        addItem: "addItem"
      },
      standalone: false,
      decls: 8,
      vars: 6,
      consts: [[1, "card"], [1, "card-block"], [1, "card-title"], [3, "productSelected"], ["class", "card-block", 4, "ngIf"], [1, "variant-details"], [1, "mr-2", 3, "src"], [1, "details"], [1, "small"], [1, "details", "ml-4"], [1, "flex-spacer"], [1, "small", 3, "title"], ["type", "number", "min", "0", 3, "ngModelChange", "disabled", "ngModel"], [1, "btn", "btn-small", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], ["entityName", "Order", 3, "customFields", "customFieldsFormGroup"]],
      template: function DraftOrderVariantSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
          ɵɵtext(3);
          ɵɵpipe(4, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "vdr-product-variant-selector", 3);
          ɵɵlistener("productSelected", function DraftOrderVariantSelectorComponent_Template_vdr_product_variant_selector_productSelected_5_listener($event) {
            return ctx.selectedVariantId$.next($event.productVariantId);
          });
          ɵɵelementEnd()();
          ɵɵtemplate(6, DraftOrderVariantSelectorComponent_div_6_Template, 31, 32, "div", 4);
          ɵɵpipe(7, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(4, 2, "order.add-item-to-order"));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(7, 4, ctx.selectedVariant$));
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, FormFieldControlDirective, ProductVariantSelectorComponent, TabbedCustomFieldsComponent, AsyncPipe, TranslatePipe, AssetPreviewPipe, LocaleCurrencyPipe],
      styles: [".variant-details[_ngcontent-%COMP%]{display:flex;align-items:center}.variant-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--border-radius-img);width:32px;height:32px}.variant-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{font-size:.65rem;line-height:.7rem}.variant-details[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:48px;margin:0 6px}.variant-details[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{font-size:11px;color:var(--color-text-300)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraftOrderVariantSelectorComponent, [{
    type: Component,
    args: [{
      selector: "vdr-draft-order-variant-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="card">
    <div class="card-block">
        <h4 class="card-title">{{ 'order.add-item-to-order' | translate }}</h4>
        <vdr-product-variant-selector
            (productSelected)="selectedVariantId$.next($event.productVariantId)"
        ></vdr-product-variant-selector>
    </div>
    <div class="card-block" *ngIf="selectedVariant$ | async as selectedVariant">
        <div class="variant-details">
            <img class="mr-2" [src]="selectedVariant.featuredAsset || selectedVariant.product.featuredAsset | assetPreview: 32">
            <div class="details">
                <div>{{ selectedVariant?.name }}</div>
                <div class="small">{{ selectedVariant?.sku }}</div>
            </div>
            <div class="details ml-4">
                <div class="small">
                    {{ 'catalog.stock-on-hand' | translate }}: {{ selectedVariant.stockOnHand }}
                </div>
                <div class="small">
                    {{ 'catalog.stock-allocated' | translate }}: {{ selectedVariant.stockAllocated }}
                </div>
            </div>
            <div class="flex-spacer"></div>
            <div class="details">
                <div>{{ selectedVariant?.priceWithTax | localeCurrency: currencyCode }}</div>
                <div class="small" [title]="'order.net-price' | translate">
                    {{ selectedVariant?.price | localeCurrency: currencyCode }}
                </div>
            </div>
            <div>
                <input [disabled]="!selectedVariant" type="number" min="0" [(ngModel)]="quantity" />
            </div>
            <button
                [disabled]="!selectedVariant"
                class="btn btn-small btn-primary"
                (click)="addItemClick(selectedVariant)"
            >
                {{ 'order.add-item-to-order' | translate }}
            </button>
        </div>
        <ng-container *ngIf="orderLineCustomFields.length">
            <vdr-tabbed-custom-fields
                entityName="Order"
                [customFields]="orderLineCustomFields"
                [customFieldsFormGroup]="customFieldsFormGroup"
            ></vdr-tabbed-custom-fields>
        </ng-container>
    </div>
</div>
`,
      styles: [".variant-details{display:flex;align-items:center}.variant-details img{border-radius:var(--border-radius-img);width:32px;height:32px}.variant-details .details{font-size:.65rem;line-height:.7rem}.variant-details input{width:48px;margin:0 6px}.variant-details .small{font-size:11px;color:var(--color-text-300)}\n"]
    }]
  }], () => [{
    type: DataService
  }], {
    currencyCode: [{
      type: Input
    }],
    orderLineCustomFields: [{
      type: Input
    }],
    addItem: [{
      type: Output
    }]
  });
})();
var DraftOrderDetailComponent = class _DraftOrderDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, notificationService, modalService, orderTransitionService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.orderTransitionService = orderTransitionService;
    this.customFields = this.getCustomFieldConfig("Order");
    this.orderLineCustomFields = this.getCustomFieldConfig("OrderLine");
    this.detailForm = new UntypedFormGroup({});
    this.fetchHistory = new Subject();
    this.displayCouponCodeInput = false;
  }
  ngOnInit() {
    this.init();
    this.orderLineCustomFields = this.getCustomFieldConfig("OrderLine");
    this.eligibleShippingMethods$ = this.entity$.pipe(switchMap((order) => this.dataService.order.getDraftOrderEligibleShippingMethods(order.id).mapSingle(({
      eligibleShippingMethodsForDraftOrder
    }) => eligibleShippingMethodsForDraftOrder)));
  }
  ngOnDestroy() {
    this.destroy();
  }
  addItemToOrder(event) {
    this.dataService.order.addItemToDraftOrder(this.id, event).subscribe((result) => {
      if (result.addItemToDraftOrder.__typename !== "Order") {
        this.notificationService.error(result.addItemToDraftOrder.message);
      }
    });
  }
  adjustOrderLine(event) {
    this.dataService.order.adjustDraftOrderLine(this.id, {
      orderLineId: event.lineId,
      quantity: event.quantity
    }).subscribe((result) => {
      if (result.adjustDraftOrderLine.__typename !== "Order") {
        this.notificationService.error(result.adjustDraftOrderLine.message);
      }
    });
  }
  removeOrderLine(event) {
    this.dataService.order.removeDraftOrderLine(this.id, event.lineId).subscribe((result) => {
      if (result.removeDraftOrderLine.__typename !== "Order") {
        this.notificationService.error(result.removeDraftOrderLine.message);
      }
    });
  }
  getOrderAddressLines(orderAddress) {
    if (!orderAddress) {
      return [];
    }
    return Object.values(orderAddress).filter((val) => val !== "OrderAddress").filter((line) => !!line);
  }
  setCustomer() {
    this.modalService.fromComponent(SelectCustomerDialogComponent).subscribe((result) => {
      if (this.hasId(result)) {
        this.dataService.order.setCustomerForDraftOrder(this.id, {
          customerId: result.id
        }).pipe(switchMap(() => {
          return this.dataService.query(GetCustomerAddressesDocument, {
            customerId: result.id
          }).single$;
        }), switchMap(({
          customer
        }) => {
          const defaultShippingAddress = customer?.addresses?.find((addr) => addr.defaultShippingAddress);
          const defaultBillingAddress = customer?.addresses?.find((addr) => addr.defaultBillingAddress);
          return forkJoin([defaultShippingAddress ? this.dataService.order.setDraftOrderShippingAddress(this.id, this.mapToAddressInput(defaultShippingAddress)) : this.dataService.order.unsetDraftOrderShippingAddress(this.id), defaultBillingAddress ? this.dataService.order.setDraftOrderBillingAddress(this.id, this.mapToAddressInput(defaultBillingAddress)) : this.dataService.order.unsetDraftOrderBillingAddress(this.id)]);
        })).subscribe();
      } else if (result) {
        const _a = result, {
          note
        } = _a, input = __objRest(_a, [
          "note"
        ]);
        this.dataService.order.setCustomerForDraftOrder(this.id, {
          input
        }).subscribe();
      }
    });
  }
  mapToAddressInput(address) {
    return {
      fullName: address.fullName,
      company: address.company,
      streetLine1: address.streetLine1,
      streetLine2: address.streetLine2,
      city: address.city,
      province: address.province,
      postalCode: address.postalCode,
      countryCode: address.country.code,
      phoneNumber: address.phoneNumber,
      defaultShippingAddress: address.defaultShippingAddress,
      defaultBillingAddress: address.defaultBillingAddress
    };
  }
  setShippingAddress() {
    this.entity$.pipe(take(1), switchMap((order) => this.modalService.fromComponent(SelectAddressDialogComponent, {
      locals: {
        customerId: order.customer?.id,
        currentAddress: order.shippingAddress ?? void 0
      }
    }))).subscribe((result) => {
      if (result) {
        this.dataService.order.setDraftOrderShippingAddress(this.id, result).subscribe();
      }
    });
  }
  setBillingAddress() {
    this.entity$.pipe(take(1), switchMap((order) => this.modalService.fromComponent(SelectAddressDialogComponent, {
      locals: {
        customerId: order.customer?.id,
        currentAddress: order.billingAddress ?? void 0
      }
    }))).subscribe((result) => {
      if (result) {
        this.dataService.order.setDraftOrderBillingAddress(this.id, result).subscribe();
      }
    });
  }
  applyCouponCode(couponCode) {
    this.dataService.order.applyCouponCodeToDraftOrder(this.id, couponCode).subscribe();
  }
  removeCouponCode(couponCode) {
    this.dataService.order.removeCouponCodeFromDraftOrder(this.id, couponCode).subscribe();
  }
  setShippingMethod() {
    combineLatest(this.entity$, this.eligibleShippingMethods$).pipe(take(1), switchMap(([order, methods]) => this.modalService.fromComponent(SelectShippingMethodDialogComponent, {
      locals: {
        eligibleShippingMethods: methods,
        currencyCode: order.currencyCode,
        currentSelectionId: order.shippingLines?.[0]?.shippingMethod.id
      }
    }))).subscribe((result) => {
      if (result) {
        this.dataService.order.setDraftOrderShippingMethod(this.id, result).subscribe();
      }
    });
  }
  updateCustomFields(customFieldsValue) {
    this.dataService.order.updateOrderCustomFields({
      id: this.id,
      customFields: customFieldsValue
    }).subscribe();
  }
  deleteOrder() {
    this.dataService.order.deleteDraftOrder(this.id).subscribe(({
      deleteDraftOrder
    }) => {
      if (deleteDraftOrder.result === DeletionResult.DELETED) {
        this.notificationService.success(marker("common.notify-delete-success"), {
          entity: "Order"
        });
        this.router.navigate(["/orders"]);
      } else if (deleteDraftOrder.message) {
        this.notificationService.error(deleteDraftOrder.message);
      }
    });
  }
  completeOrder() {
    this.dataService.order.transitionToState(this.id, "ArrangingPayment").subscribe(({
      transitionOrderToState
    }) => {
      if (transitionOrderToState?.__typename === "Order") {
        this.router.navigate(["/orders", this.id]);
      } else if (transitionOrderToState?.__typename === "OrderStateTransitionError") {
        this.notificationService.error(transitionOrderToState.transitionError);
      }
    });
  }
  hasId(input) {
    return typeof input === "object" && !!input.id;
  }
  setFormValues(entity) {
  }
  static {
    this.ɵfac = function DraftOrderDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DraftOrderDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(OrderTransitionService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DraftOrderDetailComponent,
      selectors: [["vdr-draft-order-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 6,
      consts: [[4, "ngIf"], [1, "flex", "clr-align-items-center"], [3, "state"], ["locationId", "draft-order-detail"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["shape", "check"], ["locationId", "draft-order-detail", 3, "alwaysShow"], ["type", "button", "vdrDropdownItem", "", 3, "click"], ["shape", "trash", 1, "is-danger"], [3, "title"], ["vdrCardControls", ""], ["class", "block mb-2", 3, "customer", 4, "ngIf"], [1, "button-small", 3, "click"], ["class", "block mb-2", 3, "address", 4, "ngIf"], [1, "button-small", "mr-2", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "button-small", 3, "click", 4, "ngIf"], [3, "entity", 4, "ngIf"], [3, "addItem", "orderLineCustomFields", "currencyCode"], [3, "adjust", "remove", "order", "orderLineCustomFields", "isDraft"], ["locationId", "draft-order-detail", 3, "entity$", "detailForm"], [3, "updateClick", "customFieldsConfig", "customFieldValues"], ["shape", "unknown-status", "class", "is-warning", 4, "ngIf"], ["shape", "check", "class", "is-success", 4, "ngIf"], ["shape", "unknown-status", 1, "is-warning"], ["shape", "check", 1, "is-success"], [1, "block", "mb-2", 3, "customer"], [1, "block", "mb-2", 3, "address"], [3, "addCouponCode", "removeCouponCode", "couponCodes"], [3, "entity"], [1, "table"]],
      template: function DraftOrderDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block");
          ɵɵtemplate(1, DraftOrderDetailComponent_vdr_action_bar_1_Template, 15, 9, "vdr-action-bar", 0);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
          ɵɵtemplate(3, DraftOrderDetailComponent_vdr_page_detail_layout_3_Template, 42, 43, "vdr-page-detail-layout", 0);
          ɵɵpipe(4, "async");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.entity$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx.entity$));
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, NgForOf, NgIf, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, CustomerLabelComponent, DropdownItemDirective, OrderStateLabelComponent, FormattedAddressComponent, ActionBarItemsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, CardControlsDirective, OrderCustomFieldsCardComponent, OrderTableComponent, DraftOrderVariantSelectorComponent, CouponCodeSelectorComponent, AsyncPipe, PercentPipe, TranslatePipe, LocaleCurrencyPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraftOrderDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-draft-order-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar *ngIf="entity$ | async as order">
        <vdr-ab-left>
            <div class="flex clr-align-items-center">
                <vdr-order-state-label [state]="order.state"></vdr-order-state-label>
            </div>
        </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="draft-order-detail" />
            <button
                class="btn btn-primary"
                (click)="completeOrder()"
                [disabled]="!order.customer || !order.lines.length || !order.shippingLines.length"
            >
                <clr-icon shape="check"></clr-icon>
                {{ 'order.complete-draft-order' | translate }}
            </button>
            <vdr-action-bar-dropdown-menu [alwaysShow]="true" locationId="draft-order-detail">
                <button type="button" vdrDropdownItem (click)="deleteOrder()">
                    <clr-icon shape="trash" class="is-danger"></clr-icon>
                    {{ 'order.delete-draft-order' | translate }}
                </button>
            </vdr-action-bar-dropdown-menu>
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<vdr-page-detail-layout *ngIf="entity$ | async as order">
    <vdr-page-detail-sidebar>
        <vdr-card [title]="'order.customer' | translate">
            <ng-template vdrCardControls>
                <clr-icon *ngIf="!order.customer" shape="unknown-status" class="is-warning"></clr-icon>
                <clr-icon *ngIf="order.customer" shape="check" class="is-success"></clr-icon>
            </ng-template>
            <vdr-customer-label
                class="block mb-2"
                *ngIf="order.customer"
                [customer]="order.customer"
            ></vdr-customer-label>
            <button class="button-small" (click)="setCustomer()">
                {{ 'order.set-customer-for-order' | translate }}
            </button>
        </vdr-card>
        <vdr-card [title]="'order.billing-address' | translate">
            <ng-template vdrCardControls>
                <clr-icon
                    *ngIf="!order.billingAddress.streetLine1"
                    shape="unknown-status"
                    class="is-warning"
                ></clr-icon>
                <clr-icon
                    *ngIf="order.billingAddress.streetLine1"
                    shape="check"
                    class="is-success"
                ></clr-icon>
            </ng-template>
            <vdr-formatted-address
                class="block mb-2"
                *ngIf="order.billingAddress"
                [address]="order.billingAddress"
            ></vdr-formatted-address>
            <button class="button-small" (click)="setBillingAddress()">
                {{ 'order.set-billing-address' | translate }}
            </button>
        </vdr-card>
        <vdr-card [title]="'order.shipping' | translate">
            <ng-template vdrCardControls>
                <clr-icon
                    *ngIf="!order.shippingAddress.streetLine1 || !order.shippingLines.length"
                    shape="unknown-status"
                    class="is-warning"
                ></clr-icon>
                <clr-icon
                    *ngIf="order.shippingAddress.streetLine1 && order.shippingLines.length"
                    shape="check"
                    class="is-success"
                ></clr-icon>
            </ng-template>
            <vdr-formatted-address
                class="block mb-2"
                *ngIf="order.shippingAddress"
                [address]="order.shippingAddress"
            ></vdr-formatted-address>
            <button class="button-small mr-2" (click)="setShippingAddress()">
                {{ 'order.set-shipping-address' | translate }}
            </button>

            <div *ngFor="let shippingLine of order.shippingLines">
                {{ shippingLine.shippingMethod.name }}
            </div>
            <button class="button-small" (click)="setShippingMethod()">
                {{ 'order.set-shipping-method' | translate }}
            </button>
        </vdr-card>
        <vdr-card>
            <button
                *ngIf="order.couponCodes.length === 0 && !displayCouponCodeInput"
                class="button-small"
                (click)="displayCouponCodeInput = !displayCouponCodeInput"
            >
                {{ 'order.set-coupon-codes' | translate }}
            </button>
            <div *ngIf="order.couponCodes.length || displayCouponCodeInput">
                <label>{{ 'order.set-coupon-codes' | translate }}</label>
                <vdr-coupon-code-selector
                    [couponCodes]="order.couponCodes"
                    (addCouponCode)="applyCouponCode($event)"
                    (removeCouponCode)="removeCouponCode($event)"
                ></vdr-coupon-code-selector>
            </div>
        </vdr-card>
        <vdr-card>
            <vdr-page-entity-info *ngIf="entity$ | async as entity" [entity]="entity" />
        </vdr-card>
    </vdr-page-detail-sidebar>
    <vdr-page-block>
        <vdr-card>
            <vdr-draft-order-variant-selector
                [orderLineCustomFields]="orderLineCustomFields"
                [currencyCode]="order.currencyCode"
                (addItem)="addItemToOrder($event)"
            ></vdr-draft-order-variant-selector>
            <vdr-order-table
                [order]="order"
                [orderLineCustomFields]="orderLineCustomFields"
                [isDraft]="true"
                (adjust)="adjustOrderLine($event)"
                (remove)="removeOrderLine($event)"
            ></vdr-order-table>
        </vdr-card>
        <vdr-card [title]="'order.tax-summary' | translate">
            <ng-container *ngIf="order.taxSummary.length">
                <table class="table">
                    <thead>
                        <tr>
                            <th>{{ 'common.description' | translate }}</th>
                            <th>{{ 'order.tax-rate' | translate }}</th>
                            <th>{{ 'order.tax-base' | translate }}</th>
                            <th>{{ 'order.tax-total' | translate }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let row of order.taxSummary">
                            <td>{{ row.description }}</td>
                            <td>{{ row.taxRate / 100 | percent }}</td>
                            <td>{{ row.taxBase | localeCurrency : order.currencyCode }}</td>
                            <td>{{ row.taxTotal | localeCurrency : order.currencyCode }}</td>
                        </tr>
                    </tbody>
                </table>
            </ng-container>
        </vdr-card>
        <vdr-custom-detail-component-host
            locationId="draft-order-detail"
            [entity$]="entity$"
            [detailForm]="detailForm"
        ></vdr-custom-detail-component-host>

        <vdr-order-custom-fields-card
            [customFieldsConfig]="customFields"
            [customFieldValues]="order.customFields"
            (updateClick)="updateCustomFields($event)"
        ></vdr-order-custom-fields-card>
    </vdr-page-block>
</vdr-page-detail-layout>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DataService
  }, {
    type: NotificationService
  }, {
    type: ModalService
  }, {
    type: OrderTransitionService
  }], null);
})();
var FulfillOrderDialogComponent = class _FulfillOrderDialogComponent {
  constructor(dataService, changeDetector) {
    this.dataService = dataService;
    this.changeDetector = changeDetector;
    this.fulfillmentHandlerControl = new UntypedFormControl();
    this.fulfillmentQuantities = {};
  }
  ngOnInit() {
    this.dataService.settings.getGlobalSettings().single$.subscribe(({
      globalSettings
    }) => {
      this.fulfillmentQuantities = this.order.lines.reduce((result, line) => {
        const fulfillCount = this.getFulfillableCount(line, globalSettings.trackInventory);
        return __spreadProps(__spreadValues({}, result), {
          [line.id]: {
            fulfillCount,
            max: fulfillCount
          }
        });
      }, {});
      this.changeDetector.markForCheck();
    });
    this.dataService.shippingMethod.getShippingMethodOperations().mapSingle((data) => data.fulfillmentHandlers).subscribe((handlers) => {
      this.fulfillmentHandlerDef = handlers.find((h) => h.code === this.order.shippingLines[0]?.shippingMethod?.fulfillmentHandlerCode) || handlers[0];
      this.fulfillmentHandler = configurableDefinitionToInstance(this.fulfillmentHandlerDef);
      this.fulfillmentHandlerControl.patchValue(this.fulfillmentHandler);
      this.changeDetector.markForCheck();
    });
  }
  getFulfillableCount(line, globalTrackInventory) {
    const {
      trackInventory,
      stockOnHand
    } = line.productVariant;
    const effectiveTracInventory = trackInventory === GlobalFlag.INHERIT ? globalTrackInventory : trackInventory === GlobalFlag.TRUE;
    const unfulfilledCount = this.getUnfulfilledCount(line);
    return effectiveTracInventory ? Math.min(unfulfilledCount, stockOnHand) : unfulfilledCount;
  }
  getUnfulfilledCount(line) {
    const fulfilled = this.order.fulfillments?.filter((f) => f.state !== "Cancelled").map((f) => f.lines).flat().filter((row) => row.orderLineId === line.id).reduce((sum, row) => sum + row.quantity, 0) ?? 0;
    return line.quantity - fulfilled;
  }
  canSubmit() {
    const totalCount = Object.values(this.fulfillmentQuantities).reduce((total, {
      fulfillCount
    }) => total + fulfillCount, 0);
    const fulfillmentQuantityIsValid = Object.values(this.fulfillmentQuantities).every(({
      fulfillCount,
      max
    }) => fulfillCount <= max);
    const formIsValid = configurableOperationValueIsValid(this.fulfillmentHandlerDef, this.fulfillmentHandlerControl.value) && this.fulfillmentHandlerControl.valid;
    return formIsValid && 0 < totalCount && fulfillmentQuantityIsValid;
  }
  select() {
    const lines = Object.entries(this.fulfillmentQuantities).map(([orderLineId, {
      fulfillCount
    }]) => ({
      orderLineId,
      quantity: fulfillCount
    }));
    this.resolveWith({
      lines,
      handler: toConfigurableOperationInput(this.fulfillmentHandler, this.fulfillmentHandlerControl.value)
    });
  }
  cancel() {
    this.resolveWith();
  }
  static {
    this.ɵfac = function FulfillOrderDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FulfillOrderDialogComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FulfillOrderDialogComponent,
      selectors: [["vdr-fulfill-order-dialog"]],
      standalone: false,
      decls: 34,
      vars: 29,
      consts: [["vdrDialogTitle", ""], [1, "fulfillment-wrapper"], [1, "order-table"], [1, "table"], ["class", "order-line", 3, "ignore", 4, "ngFor", "ngForOf"], [1, "shipping-details"], [3, "address"], [3, "operationDefinition", "operation", "formControl", "removable"], ["vdrDialogButtons", ""], [1, "order-line"], [1, "align-middle", "thumb"], [3, "src", 4, "ngIf"], [1, "align-middle", "name"], [1, "align-middle", "sku"], [1, "align-middle", "quantity"], [1, "align-middle", "fulfil"], ["type", "number", "min", "0", 3, "disabled", "ngModel", "max", "ngModelChange", 4, "ngIf"], [3, "src"], ["type", "number", "min", "0", 3, "ngModelChange", "disabled", "ngModel", "max"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function FulfillOrderDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, FulfillOrderDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "table", 3)(4, "thead")(5, "tr");
          ɵɵelement(6, "th");
          ɵɵelementStart(7, "th");
          ɵɵtext(8);
          ɵɵpipe(9, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(10, "th");
          ɵɵtext(11);
          ɵɵpipe(12, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(13, "th");
          ɵɵtext(14);
          ɵɵpipe(15, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(16, "th");
          ɵɵtext(17);
          ɵɵpipe(18, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(19, "th");
          ɵɵtext(20);
          ɵɵpipe(21, "translate");
          ɵɵelementEnd()()();
          ɵɵtemplate(22, FulfillOrderDialogComponent_tr_22_Template, 13, 8, "tr", 4);
          ɵɵelementEnd()();
          ɵɵelementStart(23, "div", 5);
          ɵɵelement(24, "vdr-formatted-address", 6);
          ɵɵelementStart(25, "h6");
          ɵɵtext(26);
          ɵɵpipe(27, "translate");
          ɵɵelementEnd();
          ɵɵtext(28);
          ɵɵelementStart(29, "strong");
          ɵɵtext(30);
          ɵɵpipe(31, "localeCurrency");
          ɵɵelementEnd();
          ɵɵelement(32, "vdr-configurable-input", 7);
          ɵɵelementEnd()();
          ɵɵtemplate(33, FulfillOrderDialogComponent_ng_template_33_Template, 6, 7, "ng-template", 8);
        }
        if (rf & 2) {
          ɵɵadvance(8);
          ɵɵtextInterpolate(ɵɵpipeBind1(9, 14, "order.product-name"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(12, 16, "order.product-sku"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(15, 18, "order.unfulfilled"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(18, 20, "catalog.stock-on-hand"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(21, 22, "order.fulfill"));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.order.lines);
          ɵɵadvance(2);
          ɵɵproperty("address", ctx.order.shippingAddress);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(27, 24, "order.shipping-method"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.order.shippingLines[0] == null ? null : ctx.order.shippingLines[0].shippingMethod == null ? null : ctx.order.shippingLines[0].shippingMethod.name, " ");
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind2(31, 26, ctx.order.shipping, ctx.order.currencyCode));
          ɵɵadvance(2);
          ɵɵproperty("operationDefinition", ctx.fulfillmentHandlerDef)("operation", ctx.fulfillmentHandler)("formControl", ctx.fulfillmentHandlerControl)("removable", false);
        }
      },
      dependencies: [NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, FormControlDirective, ConfigurableInputComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, FormattedAddressComponent, TranslatePipe, AssetPreviewPipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{height:100%;display:flex;min-height:64vh}[_nghost-%COMP%]   .is-cancelled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-decoration:line-through;background-color:var(--color-component-bg-200)}[_nghost-%COMP%]   .sub-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:1px dashed var(--color-component-border-200)}[_nghost-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;border-top:1px dashed var(--color-component-border-200)}[_nghost-%COMP%]   td.custom-fields-row[_ngcontent-%COMP%]{border-top-style:dashed;border-top-color:var(--color-grey-200)}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--border-radius-img)}[_nghost-%COMP%]   .order-line-custom-fields[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   .order-line-custom-fields[_ngcontent-%COMP%]   .custom-field[_ngcontent-%COMP%]{text-align:start;max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;margin-inline-end:18px}[_nghost-%COMP%]   .draft-qty[_ngcontent-%COMP%]{max-width:48px}[_nghost-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]{background-color:var(--color-component-bg-100)}[_nghost-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]   .custom-field-ellipsis[_ngcontent-%COMP%]{color:var(--color-text-300)}[_nghost-%COMP%]   .net-price[_ngcontent-%COMP%]{font-size:11px;color:var(--color-text-300);line-height:14px}[_nghost-%COMP%]   .promotions-label[_ngcontent-%COMP%]{text-decoration:underline dotted var(--color-text-200);font-size:11px;margin-top:6px;cursor:pointer;text-transform:lowercase}[_nghost-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}[_nghost-%COMP%]   .shipping-method-name[_ngcontent-%COMP%]{font-size:var(--font-size-xs);margin-inline-end:2px}[_nghost-%COMP%]   .order-placed-quantity[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--color-text-300);margin-inline-end:2px}.fulfillment-wrapper[_ngcontent-%COMP%]{flex:1}@media screen and (min-width: 768px){.fulfillment-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row}}.fulfillment-wrapper[_ngcontent-%COMP%]   .shipping-details[_ngcontent-%COMP%]{margin-top:24px}@media screen and (min-width: 768px){.fulfillment-wrapper[_ngcontent-%COMP%]   .shipping-details[_ngcontent-%COMP%]{margin-top:0;margin-inline-start:24px;width:250px}}.fulfillment-wrapper[_ngcontent-%COMP%]   .shipping-details[_ngcontent-%COMP%]   clr-input-container[_ngcontent-%COMP%]{margin-top:24px}.fulfillment-wrapper[_ngcontent-%COMP%]   .order-table[_ngcontent-%COMP%]{flex:1;overflow-y:auto}.fulfillment-wrapper[_ngcontent-%COMP%]   .order-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:0}.fulfillment-wrapper[_ngcontent-%COMP%]   tr.ignore[_ngcontent-%COMP%]{color:var(--color-grey-300)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FulfillOrderDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-fulfill-order-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.fulfill-order' | translate }}</ng-template>

<div class="fulfillment-wrapper">
    <div class="order-table">
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>{{ 'order.product-name' | translate }}</th>
                    <th>{{ 'order.product-sku' | translate }}</th>
                    <th>{{ 'order.unfulfilled' | translate }}</th>
                    <th>{{ 'catalog.stock-on-hand' | translate }}</th>
                    <th>{{ 'order.fulfill' | translate }}</th>
                </tr>
            </thead>
            <tr
                *ngFor="let line of order.lines"
                class="order-line"
                [class.ignore]="getUnfulfilledCount(line) === 0"
            >
                <td class="align-middle thumb">
                    <img *ngIf="line.featuredAsset" [src]="line.featuredAsset | assetPreview: 'tiny'" />
                </td>
                <td class="align-middle name">{{ line.productVariant.name }}</td>
                <td class="align-middle sku">{{ line.productVariant.sku }}</td>
                <td class="align-middle quantity">{{ getUnfulfilledCount(line) }}</td>
                <td class="align-middle quantity">{{ line.productVariant.stockOnHand }}</td>
                <td class="align-middle fulfil">
                    <input
                        *ngIf="fulfillmentQuantities[line.id]"
                        [disabled]="getUnfulfilledCount(line) === 0"
                        [(ngModel)]="fulfillmentQuantities[line.id].fulfillCount"
                        type="number"
                        [max]="fulfillmentQuantities[line.id].max"
                        min="0"
                    />
                </td>
            </tr>
        </table>
    </div>
    <div class="shipping-details">
        <vdr-formatted-address [address]="order.shippingAddress"></vdr-formatted-address>
        <h6>{{ 'order.shipping-method' | translate }}</h6>
        {{ order.shippingLines[0]?.shippingMethod?.name }}
        <strong>{{ order.shipping | localeCurrency: order.currencyCode }}</strong>
        <vdr-configurable-input
            [operationDefinition]="fulfillmentHandlerDef"
            [operation]="fulfillmentHandler"
            [formControl]="fulfillmentHandlerControl"
            [removable]="false"
        ></vdr-configurable-input>
    </div>
</div>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="select()" [disabled]="!canSubmit()" class="btn btn-primary">
        {{ 'order.create-fulfillment' | translate }}
    </button>
</ng-template>
`,
      styles: [":host{height:100%;display:flex;min-height:64vh}:host .is-cancelled td{text-decoration:line-through;background-color:var(--color-component-bg-200)}:host .sub-total td{border-top:1px dashed var(--color-component-border-200)}:host .total td{font-weight:700;border-top:1px dashed var(--color-component-border-200)}:host td.custom-fields-row{border-top-style:dashed;border-top-color:var(--color-grey-200)}:host img{border-radius:var(--border-radius-img)}:host .order-line-custom-fields{display:flex;flex-wrap:wrap}:host .order-line-custom-fields .custom-field{text-align:start;max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;margin-inline-end:18px}:host .draft-qty{max-width:48px}:host .order-line-custom-field{background-color:var(--color-component-bg-100)}:host .order-line-custom-field .custom-field-ellipsis{color:var(--color-text-300)}:host .net-price{font-size:11px;color:var(--color-text-300);line-height:14px}:host .promotions-label{text-decoration:underline dotted var(--color-text-200);font-size:11px;margin-top:6px;cursor:pointer;text-transform:lowercase}:host .thumb img{width:50px;height:50px}:host .shipping-method-name{font-size:var(--font-size-xs);margin-inline-end:2px}:host .order-placed-quantity{text-decoration:line-through;color:var(--color-text-300);margin-inline-end:2px}.fulfillment-wrapper{flex:1}@media screen and (min-width: 768px){.fulfillment-wrapper{display:flex;flex-direction:row}}.fulfillment-wrapper .shipping-details{margin-top:24px}@media screen and (min-width: 768px){.fulfillment-wrapper .shipping-details{margin-top:0;margin-inline-start:24px;width:250px}}.fulfillment-wrapper .shipping-details clr-input-container{margin-top:24px}.fulfillment-wrapper .order-table{flex:1;overflow-y:auto}.fulfillment-wrapper .order-table table{margin-top:0}.fulfillment-wrapper tr.ignore{color:var(--color-grey-300)}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var SimpleItemListComponent = class _SimpleItemListComponent {
  static {
    this.ɵfac = function SimpleItemListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SimpleItemListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SimpleItemListComponent,
      selectors: [["vdr-simple-item-list"]],
      inputs: {
        items: "items"
      },
      standalone: false,
      decls: 3,
      vars: 1,
      consts: [[1, "items-list"], [3, "title", 4, "ngFor", "ngForOf"], [3, "title"], ["class", "quantity", 4, "ngIf"], ["shape", "times", "size", "12", 4, "ngIf"], [1, "quantity"], ["shape", "times", "size", "12"]],
      template: function SimpleItemListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "ul");
          ɵɵtemplate(2, SimpleItemListComponent_li_2_Template, 4, 4, "li", 1);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf],
      styles: [".items-list[_ngcontent-%COMP%]{font-size:12px}.items-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:6px;list-style-type:none;margin-inline-start:2px}.items-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:14px;text-overflow:ellipsis;overflow:hidden}.items-list[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{min-width:16px;display:inline-block}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleItemListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-simple-item-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div class="items-list">\n    <ul>\n        <li *ngFor="let item of items" [title]="item.name">\n            <div class="quantity" *ngIf="item.quantity != null">{{ item.quantity }}</div>\n            <clr-icon shape="times" size="12" *ngIf="item.quantity != null"></clr-icon>\n            {{ item.name }}\n        </li>\n    </ul>\n</div>\n',
      styles: [".items-list{font-size:12px}.items-list ul{margin-top:6px;list-style-type:none;margin-inline-start:2px}.items-list ul li{line-height:14px;text-overflow:ellipsis;overflow:hidden}.items-list .quantity{min-width:16px;display:inline-block}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }]
  });
})();
var FulfillmentDetailComponent = class _FulfillmentDetailComponent {
  constructor(serverConfigService) {
    this.serverConfigService = serverConfigService;
    this.customFieldConfig = [];
    this.customFieldFormGroup = new UntypedFormGroup({});
  }
  ngOnInit() {
    this.customFieldConfig = this.serverConfigService.getCustomFieldsFor("Fulfillment");
  }
  ngOnChanges(changes) {
    this.buildCustomFieldsFormGroup();
  }
  get fulfillment() {
    return this.order.fulfillments && this.order.fulfillments.find((f) => f.id === this.fulfillmentId);
  }
  get items() {
    return this.fulfillment?.lines.map((row) => ({
      name: this.order.lines.find((line) => line.id === row.orderLineId)?.productVariant.name ?? "",
      quantity: row.quantity
    })) ?? [];
  }
  buildCustomFieldsFormGroup() {
    const customFields = this.fulfillment.customFields;
    for (const fieldDef of this.serverConfigService.getCustomFieldsFor("Fulfillment")) {
      this.customFieldFormGroup.addControl(fieldDef.name, new UntypedFormControl(customFields[fieldDef.name]));
    }
  }
  customFieldIsObject(customField) {
    return Array.isArray(customField) || (0, import_shared_utils.isObject)(customField);
  }
  static {
    this.ɵfac = function FulfillmentDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FulfillmentDetailComponent)(ɵɵdirectiveInject(ServerConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FulfillmentDetailComponent,
      selectors: [["vdr-fulfillment-detail"]],
      inputs: {
        fulfillmentId: "fulfillmentId",
        order: "order"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 12,
      vars: 17,
      consts: [[3, "label"], [3, "label", 4, "ngIf"], [3, "items"], [4, "ngFor", "ngForOf"], [3, "readonly", "compact", "customField", "customFieldsFormGroup", 4, "ngIf"], [3, "readonly", "compact", "customField", "customFieldsFormGroup"]],
      template: function FulfillmentDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-labeled-data", 0);
          ɵɵpipe(1, "translate");
          ɵɵtext(2);
          ɵɵpipe(3, "localeDate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "vdr-labeled-data", 0);
          ɵɵpipe(5, "translate");
          ɵɵtext(6);
          ɵɵelementEnd();
          ɵɵtemplate(7, FulfillmentDetailComponent_vdr_labeled_data_7_Template, 3, 4, "vdr-labeled-data", 1);
          ɵɵelementStart(8, "vdr-labeled-data", 0);
          ɵɵpipe(9, "translate");
          ɵɵelement(10, "vdr-simple-item-list", 2);
          ɵɵelementEnd();
          ɵɵtemplate(11, FulfillmentDetailComponent_ng_container_11_Template, 2, 1, "ng-container", 3);
        }
        if (rf & 2) {
          ɵɵproperty("label", ɵɵpipeBind1(1, 8, "common.created-at"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 10, ctx.fulfillment == null ? null : ctx.fulfillment.createdAt, "medium"), "\n");
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(5, 13, "order.fulfillment-method"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.fulfillment == null ? null : ctx.fulfillment.method, "\n");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.fulfillment == null ? null : ctx.fulfillment.trackingCode);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(9, 15, "order.contents"));
          ɵɵadvance(2);
          ɵɵproperty("items", ctx.items);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.customFieldConfig);
        }
      },
      dependencies: [NgForOf, NgIf, CustomFieldControlComponent, LabeledDataComponent, SimpleItemListComponent, TranslatePipe, LocaleDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FulfillmentDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-fulfillment-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-labeled-data [label]="'common.created-at' | translate">
    {{ fulfillment?.createdAt | localeDate: 'medium' }}
</vdr-labeled-data>
<vdr-labeled-data [label]="'order.fulfillment-method' | translate">
    {{ fulfillment?.method }}
</vdr-labeled-data>
<vdr-labeled-data *ngIf="fulfillment?.trackingCode" [label]="'order.tracking-code' | translate">
    {{ fulfillment?.trackingCode }}
</vdr-labeled-data>
<vdr-labeled-data [label]="'order.contents' | translate">
    <vdr-simple-item-list [items]="items"></vdr-simple-item-list>
</vdr-labeled-data>
<ng-container *ngFor="let customField of customFieldConfig">
    <vdr-custom-field-control
        *ngIf="customFieldFormGroup.get(customField.name)"
        [readonly]="true"
        [compact]="true"
        [customField]="customField"
        [customFieldsFormGroup]="customFieldFormGroup"
    ></vdr-custom-field-control>
</ng-container>
`
    }]
  }], () => [{
    type: ServerConfigService
  }], {
    fulfillmentId: [{
      type: Input
    }],
    order: [{
      type: Input
    }]
  });
})();
var FulfillmentStateLabelComponent = class _FulfillmentStateLabelComponent {
  get chipColorType() {
    switch (this.state) {
      case "Pending":
      case "Shipped":
        return "warning";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "error";
    }
  }
  static {
    this.ɵfac = function FulfillmentStateLabelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FulfillmentStateLabelComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FulfillmentStateLabelComponent,
      selectors: [["vdr-fulfillment-state-label"]],
      inputs: {
        state: "state"
      },
      standalone: false,
      decls: 6,
      vars: 10,
      consts: [[3, "title", "colorType"], ["shape", "check-circle", 4, "ngIf"], ["shape", "check-circle"]],
      template: function FulfillmentStateLabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-chip", 0);
          ɵɵpipe(1, "translate");
          ɵɵtemplate(2, FulfillmentStateLabelComponent_clr_icon_2_Template, 1, 0, "clr-icon", 1);
          ɵɵtext(3);
          ɵɵpipe(4, "stateI18nToken");
          ɵɵpipe(5, "translate");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("title", ɵɵpipeBind1(1, 4, "order.payment-state"))("colorType", ctx.chipColorType);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.state === "Delivered");
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, ɵɵpipeBind1(4, 6, ctx.state)), "\n");
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, ChipComponent, TranslatePipe, StateI18nTokenPipe],
      styles: ["[_nghost-%COMP%]{font-size:14px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FulfillmentStateLabelComponent, [{
    type: Component,
    args: [{
      selector: "vdr-fulfillment-state-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-chip [title]="'order.payment-state' | translate" [colorType]="chipColorType">
    <clr-icon shape="check-circle" *ngIf="state === 'Delivered'"></clr-icon>
    {{ state | stateI18nToken | translate }}
</vdr-chip>
`,
      styles: [":host{font-size:14px}\n"]
    }]
  }], null, {
    state: [{
      type: Input
    }]
  });
})();
var FulfillmentCardComponent = class _FulfillmentCardComponent {
  constructor() {
    this.transitionState = new EventEmitter();
  }
  nextSuggestedState() {
    if (!this.fulfillment) {
      return;
    }
    const {
      nextStates
    } = this.fulfillment;
    const namedStateOrDefault = (targetState) => nextStates.includes(targetState) ? targetState : nextStates[0];
    switch (this.fulfillment?.state) {
      case "Pending":
        return namedStateOrDefault("Shipped");
      case "Shipped":
        return namedStateOrDefault("Delivered");
      default:
        return nextStates.find((s) => s !== "Cancelled");
    }
  }
  nextOtherStates() {
    if (!this.fulfillment) {
      return [];
    }
    const suggested = this.nextSuggestedState();
    return this.fulfillment.nextStates.filter((s) => s !== suggested);
  }
  static {
    this.ɵfac = function FulfillmentCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FulfillmentCardComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FulfillmentCardComponent,
      selectors: [["vdr-fulfillment-card"]],
      inputs: {
        fulfillment: "fulfillment",
        order: "order"
      },
      outputs: {
        transitionState: "transitionState"
      },
      standalone: false,
      decls: 10,
      vars: 6,
      consts: [["cancel", ""], [1, "card"], [1, "card-header", "fulfillment-header"], [1, "fulfillment-state"], [3, "state"], [1, "card-block"], [3, "fulfillmentId", "order", 4, "ngIf"], ["class", "card-footer", 4, "ngIf"], [3, "fulfillmentId", "order"], [1, "card-footer"], [4, "ngIf"], ["vdrDropdownTrigger", "", 1, "icon-button"], ["shape", "ellipsis-vertical"], ["vdrPosition", "bottom-right"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["type", "button", "vdrDropdownItem", "", 3, "click"], [4, "ngIf", "ngIfElse"], ["shape", "step-forward-2"], ["shape", "error-standard", 1, "is-error"]],
      template: function FulfillmentCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div");
          ɵɵtext(3);
          ɵɵpipe(4, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 3);
          ɵɵelement(6, "vdr-fulfillment-state-label", 4);
          ɵɵelementEnd()();
          ɵɵelementStart(7, "div", 5);
          ɵɵtemplate(8, FulfillmentCardComponent_vdr_fulfillment_detail_8_Template, 1, 2, "vdr-fulfillment-detail", 6);
          ɵɵelementEnd();
          ɵɵtemplate(9, FulfillmentCardComponent_div_9_Template, 7, 2, "div", 7);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(4, 4, "order.fulfillment"));
          ɵɵadvance(3);
          ɵɵproperty("state", ctx.fulfillment == null ? null : ctx.fulfillment.state);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !!ctx.fulfillment);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.fulfillment == null ? null : ctx.fulfillment.nextStates.length);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, FulfillmentDetailComponent, FulfillmentStateLabelComponent, TranslatePipe, StateI18nTokenPipe],
      styles: [".fulfillment-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FulfillmentCardComponent, [{
    type: Component,
    args: [{
      selector: "vdr-fulfillment-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="card">
    <div class="card-header fulfillment-header">
        <div>{{ 'order.fulfillment' | translate }}</div>
        <div class="fulfillment-state">
            <vdr-fulfillment-state-label [state]="fulfillment?.state"></vdr-fulfillment-state-label>
        </div>
    </div>
    <div class="card-block">
        <vdr-fulfillment-detail
            *ngIf="!!fulfillment"
            [fulfillmentId]="fulfillment?.id"
            [order]="order"
        ></vdr-fulfillment-detail>
    </div>
    <div class="card-footer" *ngIf="fulfillment?.nextStates.length">
        <ng-container *ngIf="nextSuggestedState() as suggestedState">
            <button class="btn btn-sm btn-primary" (click)="transitionState.emit(suggestedState)">
                {{ 'order.set-fulfillment-state' | translate: { state: (suggestedState | stateI18nToken | translate) } }}
            </button>
        </ng-container>
        <vdr-dropdown>
            <button class="icon-button" vdrDropdownTrigger>
                <clr-icon shape="ellipsis-vertical"></clr-icon>
            </button>
            <vdr-dropdown-menu vdrPosition="bottom-right">
                <ng-container *ngFor="let nextState of nextOtherStates()">
                    <button
                        type="button"
                        vdrDropdownItem
                        (click)="transitionState.emit(nextState)"
                    >
                        <ng-container *ngIf="nextState !== 'Cancelled'; else cancel">
                            <clr-icon shape="step-forward-2"></clr-icon>
                            {{ 'order.transition-to-state' | translate: { state: (nextState | stateI18nToken | translate) } }}
                        </ng-container>
                        <ng-template #cancel>
                            <clr-icon shape="error-standard" class="is-error"></clr-icon>
                            {{ 'order.cancel-fulfillment' | translate }}
                        </ng-template>
                    </button>
                </ng-container>
            </vdr-dropdown-menu>
        </vdr-dropdown>
    </div>
</div>
`,
      styles: [".fulfillment-header{display:flex;justify-content:space-between;align-items:center}.card-footer{display:flex;align-items:center;justify-content:flex-end}\n"]
    }]
  }], null, {
    fulfillment: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    transitionState: [{
      type: Output
    }]
  });
})();
var ModificationDetailComponent = class _ModificationDetailComponent {
  constructor() {
    this.addedItems = /* @__PURE__ */ new Map();
    this.removedItems = /* @__PURE__ */ new Map();
    this.modifiedItems = /* @__PURE__ */ new Set();
  }
  ngOnChanges() {
    const {
      added,
      removed,
      modified
    } = this.getModifiedLines();
    this.addedItems = added;
    this.removedItems = removed;
    this.modifiedItems = modified;
  }
  getSurcharge(id) {
    return this.order.surcharges.find((m) => m.id === id);
  }
  getAddedItems() {
    return [...this.addedItems.entries()].map(([line, count]) => ({
      name: line.productVariant.name,
      quantity: count
    }));
  }
  getRemovedItems() {
    return [...this.removedItems.entries()].map(([line, count]) => ({
      name: line.productVariant.name,
      quantity: count
    }));
  }
  getModifiedItems() {
    return [...this.modifiedItems].map((line) => ({
      name: line.productVariant.name
    }));
  }
  getModifiedLines() {
    const added = /* @__PURE__ */ new Map();
    const removed = /* @__PURE__ */ new Map();
    const modified = /* @__PURE__ */ new Set();
    for (const modificationLine of this.modification.lines || []) {
      const line = this.order.lines.find((l) => l.id === modificationLine.orderLineId);
      if (!line) {
        continue;
      }
      if (modificationLine.quantity === 0) {
        modified.add(line);
      } else if (modificationLine.quantity < 0) {
        removed.set(line, -modificationLine.quantity);
      } else {
        added.set(line, modificationLine.quantity);
      }
    }
    return {
      added,
      removed,
      modified
    };
  }
  static {
    this.ɵfac = function ModificationDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModificationDetailComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ModificationDetailComponent,
      selectors: [["vdr-modification-detail"]],
      inputs: {
        order: "order",
        modification: "modification"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 8,
      vars: 9,
      consts: [[3, "label"], [3, "label", 4, "ngIf"], [3, "label", 4, "ngFor", "ngForOf"], [3, "items"]],
      template: function ModificationDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-labeled-data", 0);
          ɵɵpipe(1, "translate");
          ɵɵtext(2);
          ɵɵelementEnd();
          ɵɵtemplate(3, ModificationDetailComponent_vdr_labeled_data_3_Template, 3, 4, "vdr-labeled-data", 1)(4, ModificationDetailComponent_vdr_labeled_data_4_Template, 4, 8, "vdr-labeled-data", 2)(5, ModificationDetailComponent_vdr_labeled_data_5_Template, 3, 4, "vdr-labeled-data", 1)(6, ModificationDetailComponent_vdr_labeled_data_6_Template, 3, 4, "vdr-labeled-data", 1)(7, ModificationDetailComponent_vdr_labeled_data_7_Template, 3, 4, "vdr-labeled-data", 1);
        }
        if (rf & 2) {
          ɵɵproperty("label", ɵɵpipeBind1(1, 7, "common.ID"));
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.modification.id);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.modification.note);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.modification.surcharges);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.getAddedItems().length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.getRemovedItems().length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.getModifiedItems().length);
        }
      },
      dependencies: [NgForOf, NgIf, LabeledDataComponent, SimpleItemListComponent, TranslatePipe, LocaleCurrencyPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModificationDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-modification-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-labeled-data [label]="'common.ID' | translate">{{ modification.id }}</vdr-labeled-data>
<vdr-labeled-data *ngIf="modification.note" [label]="'order.note' | translate">{{
    modification.note
}}</vdr-labeled-data>
<vdr-labeled-data *ngFor="let surcharge of modification.surcharges" [label]="'order.surcharges' | translate">
    {{ getSurcharge(surcharge.id)?.description }}
    {{ getSurcharge(surcharge.id)?.priceWithTax | localeCurrency: order.currencyCode }}</vdr-labeled-data
>
<vdr-labeled-data *ngIf="getAddedItems().length" [label]="'order.added-items' | translate">
    <vdr-simple-item-list [items]="getAddedItems()"></vdr-simple-item-list>
</vdr-labeled-data>
<vdr-labeled-data *ngIf="getRemovedItems().length" [label]="'order.removed-items' | translate">
    <vdr-simple-item-list [items]="getRemovedItems()"></vdr-simple-item-list>
</vdr-labeled-data>
<vdr-labeled-data *ngIf="getModifiedItems().length" [label]="'order.modified-items' | translate">
    <vdr-simple-item-list [items]="getModifiedItems()"></vdr-simple-item-list>
</vdr-labeled-data>
`
    }]
  }], null, {
    order: [{
      type: Input
    }],
    modification: [{
      type: Input
    }]
  });
})();
var NODE_HEIGHT = 72;
var OrderProcessNodeComponent = class _OrderProcessNodeComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.active$ = new BehaviorSubject(false);
    this.activeTarget$ = new BehaviorSubject(false);
    this.isCancellable = false;
    this.cancelledState = "Cancelled";
  }
  ngOnChanges(changes) {
    this.isCancellable = !!this.node.to.find((s) => s.name === "Cancelled");
    if (changes.active) {
      this.active$.next(this.active);
    }
  }
  getPos(origin = "top") {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const nodeHeight = this.elementRef.nativeElement.querySelector(".node")?.getBoundingClientRect().height ?? 0;
    return {
      x: 10,
      y: this.index * NODE_HEIGHT + (origin === "bottom" ? nodeHeight : 0)
    };
  }
  getStyle() {
    const pos = this.getPos();
    return {
      "top.px": pos.y,
      "left.px": pos.x
    };
  }
  static {
    this.ɵfac = function OrderProcessNodeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderProcessNodeComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderProcessNodeComponent,
      selectors: [["vdr-order-process-node"]],
      inputs: {
        node: "node",
        index: "index",
        active: "active"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 8,
      vars: 15,
      consts: [[1, "node-wrapper", 3, "ngStyle"], [1, "node"], ["class", "cancelled-wrapper", 4, "ngIf"], [1, "cancelled-wrapper"], [1, "cancelled-edge"], ["shape", "dot-circle"], [1, "cancelled-node"]],
      template: function OrderProcessNodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 1);
          ɵɵpipe(3, "async");
          ɵɵtext(4);
          ɵɵpipe(5, "stateI18nToken");
          ɵɵpipe(6, "translate");
          ɵɵelementEnd();
          ɵɵtemplate(7, OrderProcessNodeComponent_div_7_Template, 7, 5, "div", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("active", ɵɵpipeBind1(1, 7, ctx.active$));
          ɵɵproperty("ngStyle", ctx.getStyle());
          ɵɵadvance(2);
          ɵɵclassProp("active-target", ɵɵpipeBind1(3, 9, ctx.activeTarget$));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 13, ɵɵpipeBind1(5, 11, ctx.node.name)), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.isCancellable);
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, NgStyle, AsyncPipe, TranslatePipe, StateI18nTokenPipe],
      styles: ["[_nghost-%COMP%]{display:block}.node-wrapper[_ngcontent-%COMP%]{position:absolute;z-index:1;display:flex;align-items:center}.node[_ngcontent-%COMP%]{display:inline-block;border:2px solid var(--color-component-border-200);border-radius:3px;padding:3px 6px;z-index:1;background-color:var(--color-component-bg-100);opacity:.7;transition:opacity .2s,background-color .2s,color .2s;cursor:default}.node.active-target[_ngcontent-%COMP%]{border-color:var(--color-primary-500);opacity:.9}.cancelled-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--color-grey-300);transition:color .2s,opacity .2s;opacity:.7}.cancelled-edge[_ngcontent-%COMP%]{width:48px;height:2px;background-color:var(--color-component-bg-300);transition:background-color .2s}clr-icon[_ngcontent-%COMP%]{margin-inline-start:-1px}.cancelled-node[_ngcontent-%COMP%]{margin-inline-start:6px}.active[_ngcontent-%COMP%]   .cancelled-wrapper[_ngcontent-%COMP%]{opacity:1}.active[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]{opacity:1;background-color:var(--color-primary-600);border-color:var(--color-primary-600);color:var(--color-primary-100)}.active[_ngcontent-%COMP%]   .cancelled-wrapper[_ngcontent-%COMP%]{color:var(--color-error-500)}.active[_ngcontent-%COMP%]   .cancelled-edge[_ngcontent-%COMP%]{background-color:var(--color-error-500)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderProcessNodeComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-process-node",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div class="node-wrapper" [ngStyle]="getStyle()" [class.active]="active$ | async">\n    <div\n        class="node"\n        [class.active-target]="activeTarget$ | async"\n    >\n        {{ node.name | stateI18nToken | translate }}\n    </div>\n    <div class="cancelled-wrapper" *ngIf="isCancellable">\n        <div class="cancelled-edge">\n        </div>\n        <clr-icon shape="dot-circle"></clr-icon>\n        <div class="cancelled-node">\n            {{ cancelledState | stateI18nToken | translate }}\n        </div>\n    </div>\n</div>\n',
      styles: [":host{display:block}.node-wrapper{position:absolute;z-index:1;display:flex;align-items:center}.node{display:inline-block;border:2px solid var(--color-component-border-200);border-radius:3px;padding:3px 6px;z-index:1;background-color:var(--color-component-bg-100);opacity:.7;transition:opacity .2s,background-color .2s,color .2s;cursor:default}.node.active-target{border-color:var(--color-primary-500);opacity:.9}.cancelled-wrapper{display:flex;align-items:center;color:var(--color-grey-300);transition:color .2s,opacity .2s;opacity:.7}.cancelled-edge{width:48px;height:2px;background-color:var(--color-component-bg-300);transition:background-color .2s}clr-icon{margin-inline-start:-1px}.cancelled-node{margin-inline-start:6px}.active .cancelled-wrapper{opacity:1}.active .node{opacity:1;background-color:var(--color-primary-600);border-color:var(--color-primary-600);color:var(--color-primary-100)}.active .cancelled-wrapper{color:var(--color-error-500)}.active .cancelled-edge{background-color:var(--color-error-500)}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    node: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    active: [{
      type: Input
    }]
  });
})();
var OrderProcessEdgeComponent = class _OrderProcessEdgeComponent {
  ngOnInit() {
    this.active$ = this.from.active$.asObservable().pipe(tap((active) => this.to.activeTarget$.next(active)));
  }
  getStyle() {
    const direction = this.from.index < this.to.index ? "down" : "up";
    const startPos = this.from.getPos(direction === "down" ? "bottom" : "top");
    const endPos = this.to.getPos(direction === "down" ? "top" : "bottom");
    const dX = Math.abs(startPos.x - endPos.x);
    const dY = Math.abs(startPos.y - endPos.y);
    const length = Math.sqrt(dX ** 2 + dY ** 2);
    return __spreadValues({
      "top.px": startPos.y,
      "left.px": startPos.x + (direction === "down" ? 10 : 40) + this.index * 12,
      "height.px": length,
      "width.px": 1
    }, direction === "up" ? {
      transform: "rotateZ(180deg)",
      "transform-origin": "top"
    } : {});
  }
  static {
    this.ɵfac = function OrderProcessEdgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderProcessEdgeComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderProcessEdgeComponent,
      selectors: [["vdr-order-process-edge"]],
      inputs: {
        from: "from",
        to: "to",
        index: "index"
      },
      standalone: false,
      decls: 3,
      vars: 7,
      consts: [[1, "edge", 3, "ngStyle"], ["shape", "arrow", "flip", "vertical", 1, "arrow"]],
      template: function OrderProcessEdgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵpipe(1, "async");
          ɵɵelement(2, "clr-icon", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("active", ɵɵpipeBind1(1, 5, ctx.active$));
          ɵɵproperty("ngStyle", ctx.getStyle());
          ɵɵattribute("data-from", ctx.from.node.name)("data-to", ctx.to.node.name);
        }
      },
      dependencies: [ClrIconCustomTag, NgStyle, AsyncPipe],
      styles: [".edge[_ngcontent-%COMP%]{position:absolute;border:1px solid var(--color-component-border-200);background-color:var(--color-component-bg-300);opacity:.3;transition:border .2s,opacity .2s,background-color .2s}.edge.active[_ngcontent-%COMP%]{border-color:var(--color-primary-500);background-color:var(--color-primary-500);opacity:1}.edge.active[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{color:var(--color-primary-500)}.edge[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{position:absolute;bottom:-4px;left:-8px;color:var(--color-grey-300)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderProcessEdgeComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-process-edge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div\n    [attr.data-from]="from.node.name"\n    [attr.data-to]="to.node.name"\n    [ngStyle]="getStyle()"\n    [class.active]="active$ | async"\n    class="edge">\n    <clr-icon shape="arrow" flip="vertical" class="arrow"></clr-icon>\n</div>\n',
      styles: [".edge{position:absolute;border:1px solid var(--color-component-border-200);background-color:var(--color-component-bg-300);opacity:.3;transition:border .2s,opacity .2s,background-color .2s}.edge.active{border-color:var(--color-primary-500);background-color:var(--color-primary-500);opacity:1}.edge.active .arrow{color:var(--color-primary-500)}.edge .arrow{position:absolute;bottom:-4px;left:-8px;color:var(--color-grey-300)}\n"]
    }]
  }], null, {
    from: [{
      type: Input
    }],
    to: [{
      type: Input
    }],
    index: [{
      type: Input
    }]
  });
})();
var OrderProcessGraphComponent = class _OrderProcessGraphComponent {
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.setActiveState$ = new BehaviorSubject(void 0);
    this.nodes = [];
    this.edges = [];
  }
  get outerHeight() {
    return this.nodes.length * NODE_HEIGHT;
  }
  ngOnInit() {
    this.setActiveState$.next(this.initialState);
    this.activeState$ = this.setActiveState$.pipe(debounceTime(150));
  }
  ngOnChanges(changes) {
    this.populateNodes();
  }
  ngAfterViewInit() {
    setTimeout(() => this.populateEdges());
  }
  onMouseOver(stateName) {
    this.setActiveState$.next(stateName);
  }
  onMouseOut() {
    this.setActiveState$.next(this.initialState);
  }
  getNodeFor(state) {
    if (this.nodeComponents) {
      return this.nodeComponents.find((n) => n.node.name === state);
    }
  }
  populateNodes() {
    const stateNodeMap = /* @__PURE__ */ new Map();
    for (const state of this.states) {
      stateNodeMap.set(state.name, {
        name: state.name,
        to: []
      });
    }
    for (const [name, stateNode] of stateNodeMap.entries()) {
      const targets = this.states.find((s) => s.name === name)?.to ?? [];
      for (const target of targets) {
        const targetNode = stateNodeMap.get(target);
        if (targetNode) {
          stateNode.to.push(targetNode);
        }
      }
    }
    this.nodes = [...stateNodeMap.values()].filter((n) => n.name !== "Cancelled");
  }
  populateEdges() {
    for (const node of this.nodes) {
      const nodeCmp = this.getNodeFor(node.name);
      let index = 0;
      for (const to of node.to) {
        const toCmp = this.getNodeFor(to.name);
        if (nodeCmp && toCmp && nodeCmp !== toCmp) {
          this.edges.push({
            to: toCmp,
            from: nodeCmp,
            index
          });
          index++;
        }
      }
    }
    this.edges = [...this.edges];
    this.changeDetector.markForCheck();
  }
  static {
    this.ɵfac = function OrderProcessGraphComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderProcessGraphComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderProcessGraphComponent,
      selectors: [["vdr-order-process-graph"]],
      viewQuery: function OrderProcessGraphComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(OrderProcessNodeComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeComponents = _t);
        }
      },
      hostVars: 2,
      hostBindings: function OrderProcessGraphComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("height", ctx.outerHeight, "px");
        }
      },
      inputs: {
        states: "states",
        initialState: "initialState"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 2,
      consts: [[4, "ngFor", "ngForOf"], [3, "mouseenter", "mouseleave", "node", "index", "active"], [3, "from", "to", "index"]],
      template: function OrderProcessGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderProcessGraphComponent_ng_container_0_Template, 3, 5, "ng-container", 0)(1, OrderProcessGraphComponent_ng_container_1_Template, 2, 3, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.nodes);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.edges);
        }
      },
      dependencies: [NgForOf, OrderProcessNodeComponent, OrderProcessEdgeComponent, AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:block;border:1px hotpink;margin:20px;padding:12px;position:relative}.state-row[_ngcontent-%COMP%]{display:flex}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderProcessGraphComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-process-graph",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngFor="let state of nodes; let i = index">\n    <vdr-order-process-node\n        [node]="state"\n        [index]="i"\n        [active]="(activeState$ | async) === state.name"\n        (mouseenter)="onMouseOver(state.name)"\n        (mouseleave)="onMouseOut()"\n    ></vdr-order-process-node>\n</ng-container>\n<ng-container *ngFor="let edge of edges">\n    <vdr-order-process-edge [from]="edge.from" [to]="edge.to" [index]="edge.index"></vdr-order-process-edge>\n</ng-container>\n',
      styles: [":host{display:block;border:1px hotpink;margin:20px;padding:12px;position:relative}.state-row{display:flex}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    states: [{
      type: Input
    }],
    initialState: [{
      type: Input
    }],
    nodeComponents: [{
      type: ViewChildren,
      args: [OrderProcessNodeComponent]
    }],
    outerHeight: [{
      type: HostBinding,
      args: ["style.height.px"]
    }]
  });
})();
var OrderProcessGraphDialogComponent = class _OrderProcessGraphDialogComponent {
  constructor(serverConfigService) {
    this.serverConfigService = serverConfigService;
    this.states = [];
  }
  ngOnInit() {
    this.states = this.serverConfigService.getOrderProcessStates();
  }
  static {
    this.ɵfac = function OrderProcessGraphDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderProcessGraphDialogComponent)(ɵɵdirectiveInject(ServerConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderProcessGraphDialogComponent,
      selectors: [["vdr-order-process-graph-dialog"]],
      standalone: false,
      decls: 2,
      vars: 2,
      consts: [["vdrDialogTitle", ""], [3, "states", "initialState"]],
      template: function OrderProcessGraphDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderProcessGraphDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelement(1, "vdr-order-process-graph", 1);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("states", ctx.states)("initialState", ctx.activeState);
        }
      },
      dependencies: [DialogTitleDirective, OrderProcessGraphComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderProcessGraphDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-process-graph-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.order-state-diagram' | translate }}</ng-template>

<vdr-order-process-graph [states]="states" [initialState]="activeState"></vdr-order-process-graph>
`
    }]
  }], () => [{
    type: ServerConfigService
  }], null);
})();
var PaymentForRefundSelectorComponent = class _PaymentForRefundSelectorComponent {
  constructor() {
    this.paymentSelected = new EventEmitter();
  }
  static {
    this.ɵfac = function PaymentForRefundSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentForRefundSelectorComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PaymentForRefundSelectorComponent,
      selectors: [["vdr-payment-for-refund-selector"]],
      inputs: {
        refundablePayments: "refundablePayments",
        order: "order"
      },
      outputs: {
        paymentSelected: "paymentSelected"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[3, "title", "selected", "unselected", 4, "ngFor", "ngForOf"], [3, "title"], ["vdrCardControls", ""], [1, "form-grid"], [3, "label"], [3, "readonly", "currencyCode", "formControl"], ["size", "small", 3, "selectedChange", "title", "label", "disabled", "selected"]],
      template: function PaymentForRefundSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PaymentForRefundSelectorComponent_vdr_card_0_Template, 21, 35, "vdr-card", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.refundablePayments);
        }
      },
      dependencies: [NgForOf, NgControlStatus, FormControlDirective, CurrencyInputComponent, FormFieldComponent, FormFieldControlDirective, SelectToggleComponent, LabeledDataComponent, CardComponent, CardControlsDirective, TranslatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:block}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentForRefundSelectorComponent, [{
    type: Component,
    args: [{
      selector: "vdr-payment-for-refund-selector",
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: false,
      template: `<vdr-card
        [title]="'order.payment' | translate"
        [class.selected]="payment.selected"
        [class.unselected]="!payment.selected"
        *ngFor="let payment of refundablePayments"
>
    <ng-template vdrCardControls>
        <vdr-select-toggle
                size="small"
                [title]="'order.refund-this-payment' | translate"
                [label]="'order.refund-this-payment' | translate"
                [disabled]="refundablePayments.length === 1"
                [(selected)]="payment.selected"
                (selectedChange)="paymentSelected.emit({ payment: payment, selected: $event })"
        ></vdr-select-toggle>
    </ng-template>
    <div class="form-grid">
        <vdr-labeled-data [label]="'order.payment-method' | translate">
            {{ payment.method }}
        </vdr-labeled-data>
        <vdr-labeled-data [label]="'order.transaction-id' | translate">
            {{ payment.transactionId }}
        </vdr-labeled-data>
        <vdr-labeled-data [label]="'order.payment-amount' | translate">
            {{ payment.amount | localeCurrency : order.currencyCode }}
        </vdr-labeled-data>
        <vdr-labeled-data [label]="'order.refundable-amount' | translate">
            {{ payment.refundableAmount | localeCurrency : order.currencyCode }}
        </vdr-labeled-data>
    </div>
    <vdr-form-field [label]="'order.refund-amount' | translate">
        <vdr-currency-input
                [readonly]="!payment.selected"
                [currencyCode]="order.currencyCode"
                [formControl]="payment.amountToRefundControl"
        ></vdr-currency-input>
    </vdr-form-field>
</vdr-card>`,
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    refundablePayments: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    paymentSelected: [{
      type: Output
    }]
  });
})();
var RefundOrderDialogComponent = class _RefundOrderDialogComponent {
  constructor(i18nService) {
    this.i18nService = i18nService;
    this.lineQuantities = {};
    this.refundablePayments = [];
    this.refundShippingLineIds = [];
    this.reasons = getAppConfig().cancellationReasons ?? [marker("order.refund-reason-customer-request"), marker("order.refund-reason-not-available")];
    this.manuallySetRefundTotal = false;
    this.refundTotal = 0;
    this.reasons = this.reasons.map((r) => this.i18nService.translate(r));
  }
  get totalRefundableAmount() {
    return (0, import_shared_utils.summate)(this.refundablePayments, "refundableAmount");
  }
  get amountToRefundTotal() {
    return this.refundablePayments.reduce((total, payment) => total + payment.amountToRefundControl.value, 0);
  }
  lineCanBeRefundedOrCancelled(line) {
    const refundedCount = this.order.payments?.reduce((all, payment) => [...all, ...payment.refunds], []).filter((refund) => refund.state !== "Failed").reduce((all, refund) => [...all, ...refund.lines], []).filter((refundLine) => refundLine.orderLineId === line.id).reduce((sum, refundLine) => sum + refundLine.quantity, 0) ?? 0;
    return refundedCount < line.orderPlacedQuantity;
  }
  ngOnInit() {
    this.lineQuantities = this.order.lines.reduce((result, line) => __spreadProps(__spreadValues({}, result), {
      [line.id]: {
        quantity: 0,
        refund: true,
        cancel: false
      }
    }), {});
    this.refundablePayments = getRefundablePayments(this.order.payments);
  }
  updateRefundTotal() {
    if (!this.manuallySetRefundTotal) {
      const itemTotal = this.order.lines.reduce((total, line) => {
        const lineRef = this.lineQuantities[line.id];
        const refundCount = lineRef.quantity || 0;
        return total + line.proratedUnitPriceWithTax * refundCount;
      }, 0);
      const shippingTotal = this.order.shippingLines.reduce((total, line) => {
        if (this.refundShippingLineIds.includes(line.id)) {
          return total + line.discountedPriceWithTax;
        } else {
          return total;
        }
      }, 0);
      this.refundTotal = itemTotal + shippingTotal;
    }
    const refundablePayments = this.refundablePayments.filter((p) => p.selected);
    let refundsAllocated = 0;
    for (const payment of refundablePayments) {
      const amountToRefund = Math.min(payment.refundableAmount, this.refundTotal - refundsAllocated);
      payment.amountToRefundControl.setValue(amountToRefund);
      refundsAllocated += amountToRefund;
    }
  }
  toggleShippingRefund(lineId) {
    const index = this.refundShippingLineIds.indexOf(lineId);
    if (index === -1) {
      this.refundShippingLineIds.push(lineId);
    } else {
      this.refundShippingLineIds.splice(index, 1);
    }
    this.updateRefundTotal();
  }
  onRefundQuantityChange(orderLineId, quantity) {
    this.manuallySetRefundTotal = false;
    const selectionLine = this.lineQuantities[orderLineId];
    if (selectionLine) {
      const previousQuantity = selectionLine.quantity;
      if (quantity === 0) {
        selectionLine.cancel = false;
      } else if (previousQuantity === 0 && quantity > 0) {
        selectionLine.cancel = true;
      }
      selectionLine.quantity = quantity;
      this.updateRefundTotal();
    }
  }
  onPaymentSelected(payment, selected) {
    if (selected) {
      const outstandingRefundAmount = this.refundTotal - this.refundablePayments.filter((p) => p.id !== payment.id).reduce((total, p) => total + p.amountToRefundControl.value, 0);
      if (0 < outstandingRefundAmount) {
        payment.amountToRefundControl.setValue(Math.min(outstandingRefundAmount, payment.refundableAmount));
      }
    } else {
      payment.amountToRefundControl.setValue(0);
    }
  }
  isRefunding() {
    const result = Object.values(this.lineQuantities).reduce((isRefunding, line) => isRefunding || 0 < line.quantity, false);
    return result;
  }
  isCancelling() {
    const result = Object.values(this.lineQuantities).reduce((isCancelling, line) => isCancelling || 0 < line.quantity && line.cancel, false);
    return result;
  }
  canSubmit() {
    return 0 < this.refundTotal && this.amountToRefundTotal === this.refundTotal && !!this.reason;
  }
  select() {
    const refundLines = this.getOrderLineInput(() => true);
    const cancelLines = this.getOrderLineInput((line) => line.cancel);
    this.resolveWith({
      refunds: this.refundablePayments.filter((rp) => rp.selected && 0 < rp.amountToRefundControl.value).map((payment) => {
        return {
          lines: refundLines,
          reason: this.reason,
          paymentId: payment.id,
          amount: payment.amountToRefundControl.value,
          shipping: 0,
          adjustment: 0
        };
      }),
      cancel: {
        lines: cancelLines,
        orderId: this.order.id,
        reason: this.reason,
        cancelShipping: this.refundShippingLineIds.length > 0
      }
    });
  }
  cancel() {
    this.resolveWith();
  }
  getOrderLineInput(filterFn) {
    return Object.entries(this.lineQuantities).filter(([orderLineId, line]) => 0 < line.quantity && filterFn(line)).map(([orderLineId, line]) => ({
      orderLineId,
      quantity: line.quantity
    }));
  }
  static {
    this.ɵfac = function RefundOrderDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefundOrderDialogComponent)(ɵɵdirectiveInject(I18nService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RefundOrderDialogComponent,
      selectors: [["vdr-refund-order-dialog"]],
      standalone: false,
      decls: 50,
      vars: 60,
      consts: [["imagePlaceholder", ""], ["vdrDialogTitle", ""], [1, "refund-wrapper"], ["id", "refund-order", 3, "items"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "updated-at", 3, "heading", "hiddenByDefault"], ["id", "image", 3, "heading"], ["id", "product-name", 3, "heading", "optional"], ["id", "product-sku", 3, "heading"], ["id", "unit-price", 3, "heading", "hiddenByDefault"], ["id", "prorated-unit-price", 3, "heading"], ["id", "quantity", 3, "heading"], ["id", "refund-quantity", 3, "heading", "optional"], ["id", "cancel", 3, "heading", "optional"], [1, "refund-details", "mt-4"], ["class", "flex mb-2", 4, "ngFor", "ngForOf"], [1, "mb-2", 3, "label"], ["bindLabel", "name", "autofocus", "", "bindValue", "id", 3, "ngModelChange", "items", "placeholder", "addTag", "ngModel"], [3, "readOnlyToggleChange", "label", "readOnlyToggle"], [3, "ngModelChange", "readonly", "currencyCode", "ngModel"], [1, ""], [3, "paymentSelected", "refundablePayments", "order"], ["vdrDialogButtons", ""], [1, "image-placeholder"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], [1, "placeholder"], ["shape", "image", "size", "48"], [4, "ngIf"], ["vdrDropdownTrigger", "", 1, "promotions-label"], [1, "icon-button"], ["shape", "info"], ["class", "line-promotion", 4, "ngFor", "ngForOf"], [1, "line-promotion"], [1, "promotion-amount"], [3, "line", "payments"], ["type", "number", "min", "0", 3, "ngModel", "max", "ngModelChange", 4, "ngIf"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel", "max"], [1, "cancel-checkbox-wrapper"], [1, "flex", "center"], ["type", "checkbox", "clrCheckbox", "", 3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], [1, "ml-1"], ["type", "checkbox", "clrCheckbox", "", 3, "ngModelChange", "disabled", "ngModel"], [1, "flex", "mb-2"], ["type", "checkbox", "clrCheckbox", "", 3, "change"], [1, "errors"], [3, "clrAlertType", "clrAlertClosable", 4, "ngIf"], [1, "modal-buttons"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [3, "clrAlertType", "clrAlertClosable"]],
      template: function RefundOrderDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, RefundOrderDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 1);
          ɵɵelementStart(1, "div", 2)(2, "vdr-data-table-2", 3)(3, "vdr-dt2-column", 4);
          ɵɵpipe(4, "translate");
          ɵɵtemplate(5, RefundOrderDialogComponent_ng_template_5_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(6, "vdr-dt2-column", 5);
          ɵɵpipe(7, "translate");
          ɵɵtemplate(8, RefundOrderDialogComponent_ng_template_8_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(9, "vdr-dt2-column", 6);
          ɵɵpipe(10, "translate");
          ɵɵtemplate(11, RefundOrderDialogComponent_ng_template_11_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(12, "vdr-dt2-column", 7);
          ɵɵpipe(13, "translate");
          ɵɵtemplate(14, RefundOrderDialogComponent_ng_template_14_Template, 4, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-dt2-column", 8);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, RefundOrderDialogComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 9);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, RefundOrderDialogComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 10);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, RefundOrderDialogComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 11);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, RefundOrderDialogComponent_ng_template_26_Template, 3, 5, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 12);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, RefundOrderDialogComponent_ng_template_29_Template, 2, 3, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 13);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, RefundOrderDialogComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 14);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, RefundOrderDialogComponent_ng_template_35_Template, 6, 4, "ng-template");
          ɵɵelementEnd()();
          ɵɵelementStart(36, "div", 15)(37, "div")(38, "vdr-card");
          ɵɵtemplate(39, RefundOrderDialogComponent_label_39_Template, 10, 8, "label", 16);
          ɵɵelementStart(40, "vdr-form-field", 17);
          ɵɵpipe(41, "translate");
          ɵɵelementStart(42, "ng-select", 18);
          ɵɵpipe(43, "translate");
          ɵɵtwoWayListener("ngModelChange", function RefundOrderDialogComponent_Template_ng_select_ngModelChange_42_listener($event) {
            ɵɵtwoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
            return $event;
          });
          ɵɵelementEnd()();
          ɵɵelementStart(44, "vdr-form-field", 19);
          ɵɵpipe(45, "translate");
          ɵɵlistener("readOnlyToggleChange", function RefundOrderDialogComponent_Template_vdr_form_field_readOnlyToggleChange_44_listener($event) {
            return ctx.manuallySetRefundTotal = !$event;
          });
          ɵɵelementStart(46, "vdr-currency-input", 20);
          ɵɵtwoWayListener("ngModelChange", function RefundOrderDialogComponent_Template_vdr_currency_input_ngModelChange_46_listener($event) {
            ɵɵtwoWayBindingSet(ctx.refundTotal, $event) || (ctx.refundTotal = $event);
            return $event;
          });
          ɵɵlistener("ngModelChange", function RefundOrderDialogComponent_Template_vdr_currency_input_ngModelChange_46_listener() {
            return ctx.updateRefundTotal();
          });
          ɵɵelementEnd()()()();
          ɵɵelementStart(47, "div", 21)(48, "vdr-payment-for-refund-selector", 22);
          ɵɵlistener("paymentSelected", function RefundOrderDialogComponent_Template_vdr_payment_for_refund_selector_paymentSelected_48_listener($event) {
            return ctx.onPaymentSelected($event.payment, $event.selected);
          });
          ɵɵelementEnd()()()();
          ɵɵtemplate(49, RefundOrderDialogComponent_ng_template_49_Template, 13, 16, "ng-template", 23);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("items", ctx.order.lines);
          ɵɵadvance();
          ɵɵproperty("heading", ɵɵpipeBind1(4, 32, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(7, 34, "common.created-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(10, 36, "common.updated-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(13, 38, "common.image"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 40, "order.product-name"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 42, "order.product-sku"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 44, "order.unit-price"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 46, "order.prorated-unit-price"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 48, "order.quantity"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 50, "order.refund"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 52, "order.return-to-stock"))("optional", false);
          ɵɵadvance(6);
          ɵɵproperty("ngForOf", ctx.order.shippingLines);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(41, 54, "order.refund-cancellation-reason"));
          ɵɵadvance(2);
          ɵɵproperty("items", ctx.reasons)("placeholder", ɵɵpipeBind1(43, 56, "order.refund-cancellation-reason-required"))("addTag", true);
          ɵɵtwoWayProperty("ngModel", ctx.reason);
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(45, 58, "order.refund-total"))("readOnlyToggle", true);
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ctx.manuallySetRefundTotal)("currencyCode", ctx.order.currencyCode);
          ɵɵtwoWayProperty("ngModel", ctx.refundTotal);
          ɵɵadvance(2);
          ɵɵproperty("refundablePayments", ctx.refundablePayments)("order", ctx.order);
        }
      },
      dependencies: [ClrAlert, ClrAlertItem, ClrIconCustomTag, ClrLabel, ClrCheckbox, NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, NgSelectComponent, CurrencyInputComponent, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DataTable2Component, DataTable2ColumnComponent, CardComponent, LineRefundsComponent, PaymentForRefundSelectorComponent, DecimalPipe, CurrencyPipe, TranslatePipe, AssetPreviewPipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column;min-height:64vh}.refund-wrapper[_ngcontent-%COMP%]{flex:1;flex-direction:column}.refund-wrapper[_ngcontent-%COMP%]   .order-table[_ngcontent-%COMP%]{flex:1;overflow-y:auto}.refund-wrapper[_ngcontent-%COMP%]   .order-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:0}.refund-wrapper[_ngcontent-%COMP%]   tr.ignore[_ngcontent-%COMP%]{color:var(--color-grey-300)}  .refund-wrapper .table-wrapper{max-width:initial!important}.quantity-col[_ngcontent-%COMP%]{background-color:var(--color-warning-100)}.cancel-checkbox-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}clr-checkbox-wrapper[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:12px;display:block}.refund-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:var(--space-unit);gap:calc(var(--space-unit) * 2);justify-content:space-between}@media screen and (min-width: 992px){.refund-details[_ngcontent-%COMP%]{flex-direction:row}}.refund-details[_ngcontent-%COMP%]   vdr-card.unselected[_ngcontent-%COMP%]{opacity:.8}.refund-details[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.errors[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) 0}.prorated-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.line-promotion[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:12px;padding:3px 6px}.line-promotion[_ngcontent-%COMP%]   .promotion-amount[_ngcontent-%COMP%]{margin-inline-start:12px}vdr-card.faded[_ngcontent-%COMP%]{opacity:.8}.modal-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.6rem;gap:var(--clr-modal-footer-gap, .6rem)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundOrderDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-refund-order-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.refund-and-cancel-order' | translate }}</ng-template>

<div class="refund-wrapper">
    <vdr-data-table-2 id="refund-order" [items]="order.lines">
        <!-- Here we define all the available columns -->
        <vdr-dt2-column id="id" [heading]="'common.id' | translate" [hiddenByDefault]="true">
            <ng-template let-line="item">
                {{ line.id }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="created-at" [heading]="'common.created-at' | translate" [hiddenByDefault]="true">
            <ng-template let-line="item">
                {{ line.createdAt | localeDate : 'short' }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="updated-at" [heading]="'common.updated-at' | translate" [hiddenByDefault]="true">
            <ng-template let-line="item">
                {{ line.updatedAt | localeDate : 'short' }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'common.image' | translate" id="image">
            <ng-template let-line="item">
                <div class="image-placeholder">
                    <img
                        *ngIf="line.featuredAsset as asset; else imagePlaceholder"
                        [src]="asset | assetPreview : 'tiny'"
                    />
                    <ng-template #imagePlaceholder>
                        <div class="placeholder">
                            <clr-icon shape="image" size="48"></clr-icon>
                        </div>
                    </ng-template>
                </div>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="product-name" [heading]="'order.product-name' | translate" [optional]="false">
            <ng-template let-line="item">
                {{ line.productVariant.name }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="product-sku" [heading]="'order.product-sku' | translate">
            <ng-template let-line="item">
                {{ line.productVariant.sku }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="unit-price" [heading]="'order.unit-price' | translate" [hiddenByDefault]="true">
            <ng-template let-line="item">
                {{ line.unitPriceWithTax | localeCurrency : order.currencyCode }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="prorated-unit-price" [heading]="'order.prorated-unit-price' | translate">
            <ng-template let-line="item">
                {{ line.proratedUnitPriceWithTax | localeCurrency : order.currencyCode }}
                <ng-container *ngIf="line.discounts as discounts">
                    <vdr-dropdown *ngIf="discounts.length">
                        <div class="promotions-label" vdrDropdownTrigger>
                            <button class="icon-button"><clr-icon shape="info"></clr-icon></button>
                        </div>
                        <vdr-dropdown-menu>
                            <div class="line-promotion" *ngFor="let discount of discounts">
                                {{ discount.description }}
                                <div class="promotion-amount">
                                    {{
                                        discount.amount / 100 / line.quantity
                                            | number : '1.0-2'
                                            | currency : order.currencyCode
                                    }}
                                </div>
                            </div>
                        </vdr-dropdown-menu>
                    </vdr-dropdown>
                </ng-container>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="quantity" [heading]="'order.quantity' | translate">
            <ng-template let-line="item">
                {{ line.quantity }}
                <vdr-line-refunds [line]="line" [payments]="order.payments"></vdr-line-refunds>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="refund-quantity" [heading]="'order.refund' | translate" [optional]="false">
            <ng-template let-line="item">
                <input
                    *ngIf="lineCanBeRefundedOrCancelled(line)"
                    [ngModel]="lineQuantities[line.id].quantity"
                    type="number"
                    [max]="line.quantity"
                    min="0"
                    (ngModelChange)="onRefundQuantityChange(line.id, $event)"
                />
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="cancel" [heading]="'order.return-to-stock' | translate" [optional]="false">
            <ng-template let-line="item">
                <div class="cancel-checkbox-wrapper">
                    <label class="flex center">
                        <input
                            type="checkbox"
                            *ngIf="lineCanBeRefundedOrCancelled(line)"
                            clrCheckbox
                            [disabled]="0 === lineQuantities[line.id].quantity"
                            [(ngModel)]="lineQuantities[line.id].cancel"
                        />
                        <span class="ml-1">{{ 'order.return-to-stock' | translate }}</span></label
                    >
                </div>
            </ng-template>
        </vdr-dt2-column>
    </vdr-data-table-2>

    <div class="refund-details mt-4">
        <div>
            <vdr-card>
                <label class="flex mb-2" *ngFor="let shippingLine of order.shippingLines">
                    <input type="checkbox" clrCheckbox (change)="toggleShippingRefund(shippingLine.id)" />
                    <div class="ml-1">
                        {{ 'order.refund-shipping' | translate }}
                        <span>{{ shippingLine.shippingMethod.name }}:</span>
                        <span class="ml-1"
                            >{{ shippingLine.discountedPriceWithTax | localeCurrency : order.currencyCode }}
                        </span>
                    </div></label
                >
                <vdr-form-field [label]="'order.refund-cancellation-reason' | translate" class="mb-2">
                    <ng-select
                        [items]="reasons"
                        bindLabel="name"
                        autofocus
                        [placeholder]="'order.refund-cancellation-reason-required' | translate"
                        bindValue="id"
                        [addTag]="true"
                        [(ngModel)]="reason"
                    ></ng-select>
                </vdr-form-field>
                <vdr-form-field
                    [label]="'order.refund-total' | translate"
                    [readOnlyToggle]="true"
                    (readOnlyToggleChange)="manuallySetRefundTotal = !$event"
                >
                    <vdr-currency-input
                        [readonly]="!manuallySetRefundTotal"
                        [currencyCode]="order.currencyCode"
                        [(ngModel)]="refundTotal"
                        (ngModelChange)="updateRefundTotal()"
                    ></vdr-currency-input>
                </vdr-form-field>
            </vdr-card>
        </div>
        <div class="">
            <vdr-payment-for-refund-selector
                [refundablePayments]="refundablePayments"
                (paymentSelected)="onPaymentSelected($event.payment, $event.selected)"
                [order]="order"
            ></vdr-payment-for-refund-selector>
        </div>
    </div>
</div>

<ng-template vdrDialogButtons>
    <div>
        <div class="errors">
            <clr-alert
                *ngIf="refundTotal < 0 || totalRefundableAmount < refundTotal"
                [clrAlertType]="'danger'"
                [clrAlertClosable]="false"
            >
                <clr-alert-item>
                    {{
                        'order.refund-total-error'
                            | translate
                                : {
                                      min: 0 | currency : order.currencyCode,
                                      max: totalRefundableAmount | localeCurrency : order.currencyCode
                                  }
                    }}
                </clr-alert-item>
            </clr-alert>
            <clr-alert
                *ngIf="amountToRefundTotal < refundTotal || refundTotal < amountToRefundTotal"
                [clrAlertType]="'danger'"
                [clrAlertClosable]="false"
            >
                <clr-alert-item>
                    {{ 'order.refund-total-warning' | translate }}
                </clr-alert-item>
            </clr-alert>
            <clr-alert
                *ngIf="amountToRefundTotal && !reason"
                [clrAlertType]="'danger'"
                [clrAlertClosable]="false"
            >
                <clr-alert-item>
                    {{ 'order.refund-cancellation-reason-required' | translate }}
                </clr-alert-item>
            </clr-alert>
        </div>
        <div class="modal-buttons">
            <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
            <button type="submit" (click)="select()" [disabled]="!canSubmit()" class="btn btn-primary">
                {{
                    'order.refund-with-amount'
                        | translate : { amount: amountToRefundTotal | localeCurrency : order.currencyCode }
                }}
            </button>
        </div>
    </div>
</ng-template>
`,
      styles: [":host{height:100%;display:flex;flex-direction:column;min-height:64vh}.refund-wrapper{flex:1;flex-direction:column}.refund-wrapper .order-table{flex:1;overflow-y:auto}.refund-wrapper .order-table table{margin-top:0}.refund-wrapper tr.ignore{color:var(--color-grey-300)}::ng-deep .refund-wrapper .table-wrapper{max-width:initial!important}.quantity-col{background-color:var(--color-warning-100)}.cancel-checkbox-wrapper{display:flex;align-items:center;justify-content:center}clr-checkbox-wrapper{margin-top:12px;margin-bottom:12px;display:block}.refund-details{display:flex;flex-direction:column;padding-bottom:var(--space-unit);gap:calc(var(--space-unit) * 2);justify-content:space-between}@media screen and (min-width: 992px){.refund-details{flex-direction:row}}.refund-details vdr-card.unselected{opacity:.8}.refund-details>*{flex:1}.errors{display:flex;justify-content:flex-end;gap:calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) 0}.prorated-wrapper{display:flex;justify-content:center}.line-promotion{display:flex;justify-content:space-between;font-size:12px;padding:3px 6px}.line-promotion .promotion-amount{margin-inline-start:12px}vdr-card.faded{opacity:.8}.modal-buttons{display:flex;justify-content:flex-end;gap:.6rem;gap:var(--clr-modal-footer-gap, .6rem)}\n"]
    }]
  }], () => [{
    type: I18nService
  }], null);
})();
var SettleRefundDialogComponent = class _SettleRefundDialogComponent {
  constructor() {
    this.transactionId = "";
  }
  submit() {
    this.resolveWith(this.transactionId);
  }
  cancel() {
    this.resolveWith();
  }
  static {
    this.ɵfac = function SettleRefundDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettleRefundDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SettleRefundDialogComponent,
      selectors: [["vdr-settle-refund-dialog"]],
      standalone: false,
      decls: 10,
      vars: 10,
      consts: [["vdrDialogTitle", ""], [1, "instruction"], ["clrInput", "", "name", "transactionId", 3, "ngModelChange", "ngModel"], ["vdrDialogButtons", ""], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function SettleRefundDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SettleRefundDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "p", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "clr-input-container")(5, "label");
          ɵɵtext(6);
          ɵɵpipe(7, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(8, "input", 2);
          ɵɵtwoWayListener("ngModelChange", function SettleRefundDialogComponent_Template_input_ngModelChange_8_listener($event) {
            ɵɵtwoWayBindingSet(ctx.transactionId, $event) || (ctx.transactionId = $event);
            return $event;
          });
          ɵɵelementEnd()();
          ɵɵtemplate(9, SettleRefundDialogComponent_ng_template_9_Template, 6, 7, "ng-template", 3);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 3, "order.settle-refund-manual-instructions", ɵɵpureFunction1(8, _c12, ctx.refund.method)), "\n");
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(7, 6, "order.transaction-id"));
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.transactionId);
        }
      },
      dependencies: [ClrLabel, ClrInput, ClrInputContainer, DefaultValueAccessor, NgControlStatus, NgModel, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, TranslatePipe],
      styles: ["[_nghost-%COMP%]{padding-bottom:32px}.instruction[_ngcontent-%COMP%]{margin-top:0;margin-bottom:24px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettleRefundDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-settle-refund-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.settle-refund' | translate }}</ng-template>
<p class="instruction">
    {{ 'order.settle-refund-manual-instructions' | translate: { method: refund.method } }}
</p>
<clr-input-container>
    <label>{{ 'order.transaction-id' | translate }}</label>
    <input clrInput name="transactionId" [(ngModel)]="transactionId" />
</clr-input-container>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="submit()" [disabled]="!transactionId" class="btn btn-primary">
        {{ 'order.settle-refund' | translate }}
    </button>
</ng-template>
`,
      styles: [":host{padding-bottom:32px}.instruction{margin-top:0;margin-bottom:24px}\n"]
    }]
  }], null, null);
})();
var PaymentStateLabelComponent = class _PaymentStateLabelComponent {
  get chipColorType() {
    switch (this.state) {
      case "Authorized":
        return "warning";
      case "Settled":
        return "success";
      case "Declined":
      case "Cancelled":
        return "error";
    }
  }
  static {
    this.ɵfac = function PaymentStateLabelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentStateLabelComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PaymentStateLabelComponent,
      selectors: [["vdr-payment-state-label"]],
      inputs: {
        state: "state"
      },
      standalone: false,
      decls: 6,
      vars: 10,
      consts: [[3, "title", "colorType"], ["shape", "check-circle", 4, "ngIf"], ["shape", "check-circle"]],
      template: function PaymentStateLabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-chip", 0);
          ɵɵpipe(1, "translate");
          ɵɵtemplate(2, PaymentStateLabelComponent_clr_icon_2_Template, 1, 0, "clr-icon", 1);
          ɵɵtext(3);
          ɵɵpipe(4, "stateI18nToken");
          ɵɵpipe(5, "translate");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("title", ɵɵpipeBind1(1, 4, "order.payment-state"))("colorType", ctx.chipColorType);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.state === "Settled");
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, ɵɵpipeBind1(4, 6, ctx.state)), "\n");
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, ChipComponent, TranslatePipe, StateI18nTokenPipe],
      styles: ["[_nghost-%COMP%]{display:flex;font-size:14px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentStateLabelComponent, [{
    type: Component,
    args: [{
      selector: "vdr-payment-state-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-chip [title]="'order.payment-state' | translate" [colorType]="chipColorType">
    <clr-icon shape="check-circle" *ngIf="state === 'Settled'"></clr-icon>
    {{ state | stateI18nToken | translate }}
</vdr-chip>
`,
      styles: [":host{display:flex;font-size:14px}\n"]
    }]
  }], null, {
    state: [{
      type: Input
    }]
  });
})();
var RefundStateLabelComponent = class _RefundStateLabelComponent {
  get chipColorType() {
    switch (this.state) {
      case "Pending":
        return "warning";
      case "Settled":
        return "success";
      case "Failed":
        return "error";
    }
  }
  static {
    this.ɵfac = function RefundStateLabelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefundStateLabelComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RefundStateLabelComponent,
      selectors: [["vdr-refund-state-label"]],
      inputs: {
        state: "state"
      },
      standalone: false,
      decls: 6,
      vars: 10,
      consts: [[3, "title", "colorType"], ["shape", "check-circle", 4, "ngIf"], ["shape", "check-circle"]],
      template: function RefundStateLabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-chip", 0);
          ɵɵpipe(1, "translate");
          ɵɵtemplate(2, RefundStateLabelComponent_clr_icon_2_Template, 1, 0, "clr-icon", 1);
          ɵɵtext(3);
          ɵɵpipe(4, "stateI18nToken");
          ɵɵpipe(5, "translate");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("title", ɵɵpipeBind1(1, 4, "order.payment-state"))("colorType", ctx.chipColorType);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.state === "Settled");
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, ɵɵpipeBind1(4, 6, ctx.state)), "\n");
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, ChipComponent, TranslatePipe, StateI18nTokenPipe],
      styles: ["[_nghost-%COMP%]{display:flex;font-size:14px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundStateLabelComponent, [{
    type: Component,
    args: [{
      selector: "vdr-refund-state-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-chip [title]="'order.payment-state' | translate" [colorType]="chipColorType">
    <clr-icon shape="check-circle" *ngIf="state === 'Settled'"></clr-icon>
    {{ state | stateI18nToken | translate }}
</vdr-chip>
`,
      styles: [":host{display:flex;font-size:14px}\n"]
    }]
  }], null, {
    state: [{
      type: Input
    }]
  });
})();
var PaymentDetailComponent = class _PaymentDetailComponent {
  static {
    this.ɵfac = function PaymentDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentDetailComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PaymentDetailComponent,
      selectors: [["vdr-payment-detail"]],
      inputs: {
        payment: "payment",
        currencyCode: "currencyCode"
      },
      standalone: false,
      decls: 12,
      vars: 17,
      consts: [[3, "label"], [3, "label", 4, "ngIf"], [3, "value"]],
      template: function PaymentDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-labeled-data", 0);
          ɵɵpipe(1, "translate");
          ɵɵtext(2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "vdr-labeled-data", 0);
          ɵɵpipe(4, "translate");
          ɵɵtext(5);
          ɵɵpipe(6, "localeCurrency");
          ɵɵelementEnd();
          ɵɵtemplate(7, PaymentDetailComponent_vdr_labeled_data_7_Template, 3, 4, "vdr-labeled-data", 1)(8, PaymentDetailComponent_vdr_labeled_data_8_Template, 3, 4, "vdr-labeled-data", 1);
          ɵɵelementStart(9, "vdr-labeled-data", 0);
          ɵɵpipe(10, "translate");
          ɵɵelement(11, "vdr-object-tree", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("label", ɵɵpipeBind1(1, 8, "order.payment-method"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.payment.method, "\n");
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(4, 10, "order.amount"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 12, ctx.payment.amount, ctx.currencyCode), "\n");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.payment.errorMessage);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.payment.transactionId);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(10, 15, "order.payment-metadata"));
          ɵɵadvance(2);
          ɵɵproperty("value", ctx.payment.metadata);
        }
      },
      dependencies: [NgIf, LabeledDataComponent, ObjectTreeComponent, TranslatePipe, LocaleCurrencyPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-payment-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-labeled-data [label]="'order.payment-method' | translate">
    {{ payment.method }}
</vdr-labeled-data>
<vdr-labeled-data [label]="'order.amount' | translate">
    {{ payment.amount | localeCurrency: currencyCode }}
</vdr-labeled-data>
<vdr-labeled-data *ngIf="payment.errorMessage" [label]="'order.error-message' | translate">
    {{ payment.errorMessage }}
</vdr-labeled-data>
<vdr-labeled-data *ngIf="payment.transactionId" [label]="'order.transaction-id' | translate">
    {{ payment.transactionId }}
</vdr-labeled-data>
<vdr-labeled-data [label]="'order.payment-metadata' | translate">
    <vdr-object-tree [value]="payment.metadata"></vdr-object-tree>
</vdr-labeled-data>
`
    }]
  }], null, {
    payment: [{
      type: Input
    }],
    currencyCode: [{
      type: Input
    }]
  });
})();
var OrderPaymentCardComponent = class _OrderPaymentCardComponent {
  constructor() {
    this.settlePayment = new EventEmitter();
    this.transitionPaymentState = new EventEmitter();
    this.settleRefund = new EventEmitter();
  }
  refundHasMetadata(refund) {
    return !!refund && Object.keys(refund.metadata).length > 0;
  }
  nextOtherStates() {
    if (!this.payment) {
      return [];
    }
    return this.payment.nextStates.filter((s) => s !== "Settled" && s !== "Error");
  }
  static {
    this.ɵfac = function OrderPaymentCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderPaymentCardComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderPaymentCardComponent,
      selectors: [["vdr-order-payment-card"]],
      inputs: {
        payment: "payment",
        currencyCode: "currencyCode"
      },
      outputs: {
        settlePayment: "settlePayment",
        transitionPaymentState: "transitionPaymentState",
        settleRefund: "settleRefund"
      },
      standalone: false,
      decls: 12,
      vars: 9,
      consts: [["cancel", ""], [1, "card"], [1, "card-header", "payment-header"], [4, "ngIf"], [1, "payment-state"], [3, "state"], [1, "card-block"], [3, "payment", "currencyCode"], [4, "ngFor", "ngForOf"], ["class", "card-footer", 4, "ngIf"], [1, "refund-wrapper", "card-block"], [1, "card-header", "payment-header", "refund-header"], ["shape", "redo", "dir", "down", 1, "refund-icon"], [1, "clr-flex-fill"], [3, "label"], [3, "label", 4, "ngIf"], [3, "value"], [1, "card-footer"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "btn btn-sm btn-primary", 3, "click", 4, "ngIf"], ["vdrDropdownTrigger", "", 1, "icon-button"], ["shape", "ellipsis-vertical"], ["vdrPosition", "bottom-right"], ["type", "button", "vdrDropdownItem", "", 3, "click"], [4, "ngIf", "ngIfElse"], ["shape", "step-forward-2"], ["shape", "error-standard", 1, "is-error"]],
      template: function OrderPaymentCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div");
          ɵɵtext(3);
          ɵɵpipe(4, "translate");
          ɵɵtemplate(5, OrderPaymentCardComponent_ng_container_5_Template, 3, 4, "ng-container", 3);
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", 4);
          ɵɵelement(7, "vdr-payment-state-label", 5);
          ɵɵelementEnd()();
          ɵɵelementStart(8, "div", 6);
          ɵɵelement(9, "vdr-payment-detail", 7);
          ɵɵelementEnd();
          ɵɵtemplate(10, OrderPaymentCardComponent_ng_container_10_Template, 21, 23, "ng-container", 8)(11, OrderPaymentCardComponent_div_11_Template, 7, 2, "div", 9);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "order.payment"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.payment.amount);
          ɵɵadvance(2);
          ɵɵproperty("state", ctx.payment.state);
          ɵɵadvance(2);
          ɵɵproperty("payment", ctx.payment)("currencyCode", ctx.currencyCode);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.payment.refunds);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.payment.nextStates.length);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, Dir, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, LabeledDataComponent, ObjectTreeComponent, PaymentStateLabelComponent, RefundStateLabelComponent, PaymentDetailComponent, TranslatePipe, StateI18nTokenPipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:block}.payment-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;line-break:anywhere}.refund-icon[_ngcontent-%COMP%]{margin-inline-end:6px;color:var(--color-grey-400)}.card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.refund-wrapper[_ngcontent-%COMP%]{font-size:var(--font-size-xs)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderPaymentCardComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-payment-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="card">
    <div class="card-header payment-header">
        <div>
            {{ 'order.payment' | translate }}
            <ng-container *ngIf="payment.amount">{{ payment.amount | localeCurrency : currencyCode }}</ng-container>
        </div>
        <div class="payment-state">
            <vdr-payment-state-label [state]="payment.state"></vdr-payment-state-label>
        </div>
    </div>
    <div class="card-block">
        <vdr-payment-detail [payment]="payment" [currencyCode]="currencyCode"></vdr-payment-detail>
    </div>
    <ng-container *ngFor="let refund of payment.refunds">
        <div class="refund-wrapper card-block">
            <div class="card-header payment-header refund-header">
                <clr-icon shape="redo" class="refund-icon" dir="down"></clr-icon>
                {{ 'order.refund' | translate }} #{{ refund.id }}
                <div class="clr-flex-fill"></div>
                <vdr-refund-state-label [state]="refund.state"></vdr-refund-state-label>
            </div>
            <div class="card-block">
                <vdr-labeled-data [label]="'common.created-at' | translate">
                    {{ refund.createdAt | localeDate : 'medium' }}
                </vdr-labeled-data>
                <vdr-labeled-data [label]="'order.refund-total' | translate">
                    {{ refund.total | localeCurrency : currencyCode }}
                </vdr-labeled-data>
                <vdr-labeled-data [label]="'order.transaction-id' | translate" *ngIf="refund.transactionId">
                    {{ refund.transactionId }}
                </vdr-labeled-data>
                <vdr-labeled-data [label]="'order.refund-reason' | translate" *ngIf="refund.reason">
                    {{ refund.reason }}
                </vdr-labeled-data>
                <vdr-labeled-data
                    [label]="'order.refund-metadata' | translate"
                    *ngIf="refundHasMetadata(refund)"
                >
                    <vdr-object-tree [value]="refund.metadata"></vdr-object-tree>
                </vdr-labeled-data>
            </div>
            <div class="card-footer" *ngIf="refund.state === 'Pending'">
                <button class="btn btn-sm btn-primary" (click)="settleRefund.emit(refund)">
                    {{ 'order.settle-refund' | translate }}
                </button>
            </div>
        </div>
    </ng-container>
    <div class="card-footer" *ngIf="payment.nextStates.length">
        <button
            class="btn btn-sm btn-primary"
            *ngIf="payment.nextStates.includes('Settled')"
            (click)="settlePayment.emit(payment)"
        >
            {{ 'order.settle-payment' | translate }}
        </button>
        <vdr-dropdown>
            <button class="icon-button" vdrDropdownTrigger>
                <clr-icon shape="ellipsis-vertical"></clr-icon>
            </button>
            <vdr-dropdown-menu vdrPosition="bottom-right">
                <ng-container *ngFor="let nextState of nextOtherStates()">
                    <button
                        type="button"
                        vdrDropdownItem
                        (click)="transitionPaymentState.emit({ payment: payment, state: nextState })"
                    >
                        <ng-container *ngIf="nextState !== 'Cancelled'; else cancel">
                            <clr-icon shape="step-forward-2"></clr-icon>
                            {{
                                'order.transition-to-state'
                                    | translate : { state: (nextState | stateI18nToken | translate) }
                            }}
                        </ng-container>
                        <ng-template #cancel>
                            <clr-icon shape="error-standard" class="is-error"></clr-icon>
                            {{ 'order.cancel-payment' | translate }}
                        </ng-template>
                    </button>
                </ng-container>
            </vdr-dropdown-menu>
        </vdr-dropdown>
    </div>
</div>
`,
      styles: [":host{display:block}.payment-header{display:flex;justify-content:space-between;align-items:center;line-break:anywhere}.refund-icon{margin-inline-end:6px;color:var(--color-grey-400)}.card-footer{display:flex;align-items:center;justify-content:flex-end}.refund-wrapper{font-size:var(--font-size-xs)}\n"]
    }]
  }], null, {
    payment: [{
      type: Input
    }],
    currencyCode: [{
      type: Input
    }],
    settlePayment: [{
      type: Output
    }],
    transitionPaymentState: [{
      type: Output
    }],
    settleRefund: [{
      type: Output
    }]
  });
})();
var OrderHistoryEntryHostComponent = class _OrderHistoryEntryHostComponent {
  constructor(historyEntryComponentService) {
    this.historyEntryComponentService = historyEntryComponentService;
    this.expandClick = new EventEmitter();
  }
  ngOnInit() {
    const componentType = this.historyEntryComponentService.getComponent(this.entry.type);
    const componentRef = this.portalRef.createComponent(componentType);
    componentRef.instance.entry = this.entry;
    componentRef.instance.order = this.order;
    this.instance = componentRef.instance;
    this.componentRef = componentRef;
  }
  ngOnDestroy() {
    this.componentRef?.destroy();
  }
  static {
    this.ɵfac = function OrderHistoryEntryHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderHistoryEntryHostComponent)(ɵɵdirectiveInject(HistoryEntryComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderHistoryEntryHostComponent,
      selectors: [["vdr-order-history-entry-host"]],
      viewQuery: function OrderHistoryEntryHostComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c13, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.portalRef = _t.first);
        }
      },
      inputs: {
        entry: "entry",
        order: "order",
        expanded: "expanded"
      },
      outputs: {
        expandClick: "expandClick"
      },
      exportAs: ["historyEntry"],
      standalone: false,
      decls: 3,
      vars: 6,
      consts: [["portal", ""], [3, "expandClick", "displayType", "iconShape", "createdAt", "name", "featured", "collapsed"]],
      template: function OrderHistoryEntryHostComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-timeline-entry", 1);
          ɵɵlistener("expandClick", function OrderHistoryEntryHostComponent_Template_vdr_timeline_entry_expandClick_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.expandClick.emit());
          });
          ɵɵelement(1, "div", null, 0);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("displayType", ctx.instance.getDisplayType(ctx.entry))("iconShape", ctx.instance.getIconShape && ctx.instance.getIconShape(ctx.entry))("createdAt", ctx.entry.createdAt)("name", ctx.instance.getName && ctx.instance.getName(ctx.entry))("featured", ctx.instance.isFeatured(ctx.entry))("collapsed", !ctx.expanded && !ctx.instance.isFeatured(ctx.entry));
        }
      },
      dependencies: [TimelineEntryComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryEntryHostComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-history-entry-host",
      template: `
        <vdr-timeline-entry
            [displayType]="instance.getDisplayType(entry)"
            [iconShape]="instance.getIconShape && instance.getIconShape(entry)"
            [createdAt]="entry.createdAt"
            [name]="instance.getName && instance.getName(entry)"
            [featured]="instance.isFeatured(entry)"
            [collapsed]="!expanded && !instance.isFeatured(entry)"
            (expandClick)="expandClick.emit()"
        >
            <div #portal></div>
        </vdr-timeline-entry>
    `,
      exportAs: "historyEntry",
      standalone: false
    }]
  }], () => [{
    type: HistoryEntryComponentService
  }], {
    entry: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    expandClick: [{
      type: Output
    }],
    portalRef: [{
      type: ViewChild,
      args: ["portal", {
        static: true,
        read: ViewContainerRef
      }]
    }]
  });
})();
var OrderHistoryComponent = class _OrderHistoryComponent {
  constructor(historyEntryComponentService) {
    this.historyEntryComponentService = historyEntryComponentService;
    this.addNote = new EventEmitter();
    this.updateNote = new EventEmitter();
    this.deleteNote = new EventEmitter();
    this.note = "";
    this.noteIsPrivate = true;
    this.expanded = false;
    this.type = HistoryEntryType;
  }
  hasCustomComponent(type) {
    return !!this.historyEntryComponentService.getComponent(type);
  }
  getDisplayType(entry) {
    if (entry.type === HistoryEntryType.ORDER_STATE_TRANSITION) {
      if (entry.data.to === "Delivered") {
        return "success";
      }
      if (entry.data.to === "Cancelled") {
        return "error";
      }
    }
    if (entry.type === HistoryEntryType.ORDER_FULFILLMENT_TRANSITION) {
      if (entry.data.to === "Delivered") {
        return "success";
      }
    }
    if (entry.type === HistoryEntryType.ORDER_PAYMENT_TRANSITION) {
      if (entry.data.to === "Declined" || entry.data.to === "Cancelled") {
        return "error";
      }
    }
    if (entry.type === HistoryEntryType.ORDER_CANCELLATION) {
      return "warning";
    }
    if (entry.type === HistoryEntryType.ORDER_REFUND_TRANSITION) {
      return "warning";
    }
    return "default";
  }
  getTimelineIcon(entry) {
    if (entry.type === HistoryEntryType.ORDER_STATE_TRANSITION) {
      if (entry.data.to === "Delivered") {
        return ["success-standard", "is-solid"];
      }
      if (entry.data.to === "Cancelled") {
        return "ban";
      }
    }
    if (entry.type === HistoryEntryType.ORDER_PAYMENT_TRANSITION) {
      if (entry.data.to === "Settled") {
        return "credit-card";
      }
    }
    if (entry.type === HistoryEntryType.ORDER_REFUND_TRANSITION) {
      if (entry.data.to === "Settled") {
        return "credit-card";
      }
    }
    if (entry.type === HistoryEntryType.ORDER_NOTE) {
      return "note";
    }
    if (entry.type === HistoryEntryType.ORDER_MODIFIED) {
      return "pencil";
    }
    if (entry.type === HistoryEntryType.ORDER_CUSTOMER_UPDATED) {
      return "switch";
    }
    if (entry.type === HistoryEntryType.ORDER_FULFILLMENT_TRANSITION) {
      if (entry.data.to === "Shipped") {
        return "truck";
      }
      if (entry.data.to === "Delivered") {
        return "truck";
      }
    }
  }
  isFeatured(entry) {
    switch (entry.type) {
      case HistoryEntryType.ORDER_STATE_TRANSITION: {
        return entry.data.to === "Delivered" || entry.data.to === "Cancelled" || entry.data.to === "Settled";
      }
      case HistoryEntryType.ORDER_REFUND_TRANSITION:
        return entry.data.to === "Settled";
      case HistoryEntryType.ORDER_PAYMENT_TRANSITION:
        return entry.data.to === "Settled" || entry.data.to === "Cancelled";
      case HistoryEntryType.ORDER_FULFILLMENT_TRANSITION:
        return entry.data.to === "Delivered" || entry.data.to === "Shipped";
      case HistoryEntryType.ORDER_NOTE:
      case HistoryEntryType.ORDER_MODIFIED:
      case HistoryEntryType.ORDER_CUSTOMER_UPDATED:
        return true;
      default:
        return false;
    }
  }
  getFulfillment(entry) {
    if ((entry.type === HistoryEntryType.ORDER_FULFILLMENT || entry.type === HistoryEntryType.ORDER_FULFILLMENT_TRANSITION) && this.order.fulfillments) {
      return this.order.fulfillments.find((f) => f.id == entry.data.fulfillmentId);
    }
  }
  getPayment(entry) {
    if (entry.type === HistoryEntryType.ORDER_PAYMENT_TRANSITION && this.order.payments) {
      return this.order.payments.find((p) => p.id === entry.data.paymentId);
    }
  }
  getRefund(entry) {
    if (entry.type === HistoryEntryType.ORDER_REFUND_TRANSITION && this.order.payments) {
      const allRefunds = this.order.payments.reduce((refunds, payment) => refunds.concat(payment.refunds), []);
      return allRefunds.find((r) => r.id === entry.data.refundId);
    }
  }
  getCancelledQuantity(entry) {
    return entry.data.lines.reduce((total, line) => total + line.quantity, 0);
  }
  getCancelledItems(cancellationLines) {
    const itemMap = /* @__PURE__ */ new Map();
    for (const line of this.order.lines) {
      const cancellationLine = cancellationLines.find((l) => l.orderLineId === line.id);
      if (cancellationLine) {
        itemMap.set(line.productVariant.name, cancellationLine.quantity);
      }
    }
    return Array.from(itemMap.entries()).map(([name, quantity]) => ({
      name,
      quantity
    }));
  }
  getModification(id) {
    return this.order.modifications.find((m) => m.id === id);
  }
  getName(entry) {
    const {
      administrator
    } = entry;
    if (administrator) {
      return `${administrator.firstName} ${administrator.lastName}`;
    } else {
      const customer = this.order.customer;
      if (customer) {
        return `${customer.firstName} ${customer.lastName}`;
      }
    }
    return "";
  }
  addNoteToOrder() {
    this.addNote.emit({
      note: this.note,
      isPublic: !this.noteIsPrivate
    });
    this.note = "";
    this.noteIsPrivate = true;
  }
  static {
    this.ɵfac = function OrderHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderHistoryComponent)(ɵɵdirectiveInject(HistoryEntryComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderHistoryComponent,
      selectors: [["vdr-order-history"]],
      inputs: {
        order: "order",
        history: "history"
      },
      outputs: {
        addNote: "addNote",
        updateNote: "updateNote",
        deleteNote: "deleteNote"
      },
      standalone: false,
      decls: 20,
      vars: 22,
      consts: [["defaultComponents", ""], ["regularPaymentTransition", ""], ["regularRefundTransition", ""], [1, "entry-list"], ["iconShape", "note", "displayType", "muted", 3, "featured", "isFirst"], [1, "note-entry"], ["name", "note", 1, "note", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "visibility-select"], ["type", "checkbox", "clrCheckbox", "", 3, "ngModelChange", "ngModel"], ["class", "private", 4, "ngIf"], ["class", "public", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "isLast", "createdAt", "featured"], [1, "title"], [1, "private"], [1, "public"], [3, "order", "entry", "expanded", "expandClick", 4, "ngIf", "ngIfElse"], [3, "expandClick", "order", "entry", "expanded"], [3, "expandClick", "displayType", "iconShape", "createdAt", "name", "featured", "collapsed"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "title", 4, "ngIf"], [3, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "flex", "items-center"], ["colorType", "success", "class", "mx-1", 4, "ngIf"], ["colorType", "error", "class", "mx-1", 4, "ngIf"], [3, "order", "modification"], ["colorType", "success", 1, "mx-1"], ["colorType", "error", 1, "mx-1"], [4, "ngIf", "ngIfElse"], ["class", "mr-1", 4, "ngIf"], [4, "ngIf"], [1, "mr-1"], [3, "payment", "currencyCode"], ["colorType", "warning", 1, "mr-1"], [3, "label"], [3, "items"], [3, "fulfillmentId", "order"], [1, "flex"], [1, "note-text"], ["class", "note-visibility public", 4, "ngIf"], ["class", "note-visibility private", 4, "ngIf"], [1, "flex-spacer"], ["vdrDropdownTrigger", "", 1, "button-small", "ml-1"], ["shape", "ellipsis-vertical", "size", "12"], ["vdrPosition", "bottom-right"], ["vdrDropdownItem", "", 3, "click", "disabled"], ["shape", "edit"], [1, "dropdown-divider"], ["shape", "trash", 1, "is-danger"], [1, "note-visibility", "public"], [1, "note-visibility", "private"], [3, "routerLink"], [1, "cancelled-coupon-code"], ["class", "button-ghost", 3, "routerLink", 4, "ngIf"], [1, "button-ghost", 3, "routerLink"], ["shape", "user", 1, "is-solid"], ["shape", "arrow right"], [3, "value"]],
      template: function OrderHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 3)(1, "vdr-timeline-entry", 4)(2, "div", 5)(3, "textarea", 6);
          ɵɵtwoWayListener("ngModelChange", function OrderHistoryComponent_Template_textarea_ngModelChange_3_listener($event) {
            ɵɵtwoWayBindingSet(ctx.note, $event) || (ctx.note = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelementStart(4, "button", 7);
          ɵɵlistener("click", function OrderHistoryComponent_Template_button_click_4_listener() {
            return ctx.addNoteToOrder();
          });
          ɵɵtext(5);
          ɵɵpipe(6, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(7, "div", 8)(8, "clr-checkbox-wrapper")(9, "input", 9);
          ɵɵtwoWayListener("ngModelChange", function OrderHistoryComponent_Template_input_ngModelChange_9_listener($event) {
            ɵɵtwoWayBindingSet(ctx.noteIsPrivate, $event) || (ctx.noteIsPrivate = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelementStart(10, "label");
          ɵɵtext(11);
          ɵɵpipe(12, "translate");
          ɵɵelementEnd()();
          ɵɵtemplate(13, OrderHistoryComponent_span_13_Template, 3, 3, "span", 10)(14, OrderHistoryComponent_span_14_Template, 3, 3, "span", 11);
          ɵɵelementEnd()();
          ɵɵtemplate(15, OrderHistoryComponent_ng_container_15_Template, 4, 2, "ng-container", 12);
          ɵɵelementStart(16, "vdr-timeline-entry", 13)(17, "div", 14);
          ɵɵtext(18);
          ɵɵpipe(19, "translate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵclassProp("expanded", ctx.expanded);
          ɵɵadvance();
          ɵɵproperty("featured", true)("isFirst", true);
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.note);
          ɵɵadvance();
          ɵɵproperty("disabled", !ctx.note);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 16, "common.add-note"), " ");
          ɵɵadvance(4);
          ɵɵtwoWayProperty("ngModel", ctx.noteIsPrivate);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(12, 18, "order.note-is-private"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.noteIsPrivate);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.noteIsPrivate);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.history);
          ɵɵadvance();
          ɵɵproperty("isLast", true)("createdAt", ctx.order.createdAt)("featured", true);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 20, "order.history-order-created"), " ");
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, RouterLink, ChipComponent, FormFieldControlDirective, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, LabeledDataComponent, ObjectTreeComponent, TimelineEntryComponent, HistoryEntryDetailComponent, FulfillmentDetailComponent, PaymentDetailComponent, SimpleItemListComponent, ModificationDetailComponent, OrderHistoryEntryHostComponent, TranslatePipe, HasPermissionPipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:block}.entry-list[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 2)}.note-entry[_ngcontent-%COMP%]{display:flex;align-items:center}.note-entry[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{flex:1}.note-entry[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}.visibility-select[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline}.visibility-select[_ngcontent-%COMP%]   .public[_ngcontent-%COMP%]{color:var(--color-warning-700)}.visibility-select[_ngcontent-%COMP%]   .private[_ngcontent-%COMP%]{color:var(--color-success-700)}textarea.note[_ngcontent-%COMP%]{flex:1;height:36px;border-radius:3px;margin-inline-end:6px}.note-text[_ngcontent-%COMP%]{color:var(--color-grey-800);white-space:pre-wrap;max-width:580px}.cancelled-coupon-code[_ngcontent-%COMP%]{text-decoration:line-through}.note-visibility[_ngcontent-%COMP%]{text-transform:lowercase}.note-visibility.public[_ngcontent-%COMP%]{color:var(--color-warning-700)}.note-visibility.private[_ngcontent-%COMP%]{color:var(--color-success-700)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-history",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="entry-list" [class.expanded]="expanded">
    <vdr-timeline-entry iconShape="note" displayType="muted" [featured]="true" [isFirst]="true">
        <div class="note-entry">
            <textarea [(ngModel)]="note" name="note" class="note"></textarea>
            <button class="btn btn-secondary" [disabled]="!note" (click)="addNoteToOrder()">
                {{ 'common.add-note' | translate }}
            </button>
        </div>
        <div class="visibility-select">
            <clr-checkbox-wrapper>
                <input type="checkbox" clrCheckbox [(ngModel)]="noteIsPrivate" />
                <label>{{ 'order.note-is-private' | translate }}</label>
            </clr-checkbox-wrapper>
            <span *ngIf="noteIsPrivate" class="private">
                {{ 'order.note-only-visible-to-administrators' | translate }}
            </span>
            <span *ngIf="!noteIsPrivate" class="public">
                {{ 'order.note-visible-to-customer' | translate }}
            </span>
        </div>
    </vdr-timeline-entry>
    <ng-container *ngFor="let entry of history">
        <vdr-order-history-entry-host
            *ngIf="hasCustomComponent(entry.type); else defaultComponents"
            [order]="order"
            [entry]="entry"
            [expanded]="expanded"
            (expandClick)="expanded = !expanded"
        ></vdr-order-history-entry-host>
        <ng-template #defaultComponents>
            <vdr-timeline-entry
                [displayType]="getDisplayType(entry)"
                [iconShape]="getTimelineIcon(entry)"
                [createdAt]="entry.createdAt"
                [name]="getName(entry)"
                [featured]="isFeatured(entry)"
                [collapsed]="!expanded && !isFeatured(entry)"
                (expandClick)="expanded = !expanded"
            >
                <ng-container [ngSwitch]="entry.type">
                    <ng-container *ngSwitchCase="type.ORDER_STATE_TRANSITION">
                        <div class="title" *ngIf="entry.data.to === 'Delivered'">
                            {{ 'order.history-order-fulfilled' | translate }}
                        </div>
                        <div class="title" *ngIf="entry.data.to === 'Cancelled'">
                            {{ 'order.history-order-cancelled' | translate }}
                        </div>
                        <ng-template [ngIf]="entry.data.to !== 'Cancelled' && entry.data.to !== 'Delivered'">
                            {{
                                'order.history-order-transition'
                                    | translate : { from: entry.data.from, to: entry.data.to }
                            }}
                        </ng-template>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_MODIFIED">
                        <div class="title">
                            {{ 'order.history-order-modified' | translate }}
                        </div>
                        <div
                            class="flex items-center"
                            *ngIf="getModification(entry.data.modificationId) as modification"
                        >
                            {{ 'order.modify-order-price-difference' | translate }}:
                            <strong>{{
                                modification.priceChange | localeCurrency : order.currencyCode
                            }}</strong>
                            <vdr-chip colorType="success" class="mx-1" *ngIf="modification.isSettled">{{
                                'order.modification-settled' | translate
                            }}</vdr-chip>
                            <vdr-chip colorType="error" class="mx-1" *ngIf="!modification.isSettled">{{
                                'order.modification-not-settled' | translate
                            }}</vdr-chip>
                            <vdr-history-entry-detail>
                                <vdr-modification-detail
                                    [order]="order"
                                    [modification]="modification"
                                ></vdr-modification-detail>
                            </vdr-history-entry-detail>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_PAYMENT_TRANSITION">
                        <ng-container *ngIf="entry.data.to === 'Settled'; else regularPaymentTransition">
                            <div class="title">
                                {{ 'order.history-payment-settled' | translate }}
                            </div>
                            <div class="flex items-center">
                                <vdr-chip *ngIf="getPayment(entry) as payment" class="mr-1">{{
                                    payment.amount | localeCurrency : order.currencyCode
                                }}</vdr-chip>
                                <vdr-history-entry-detail *ngIf="getPayment(entry) as payment">
                                    <vdr-payment-detail
                                        [payment]="payment"
                                        [currencyCode]="order.currencyCode"
                                    ></vdr-payment-detail>
                                </vdr-history-entry-detail>
                            </div>
                        </ng-container>
                        <ng-template #regularPaymentTransition>
                            {{
                                'order.history-payment-transition'
                                    | translate
                                        : {
                                              from: entry.data.from,
                                              to: entry.data.to,
                                              id: getPayment(entry)?.transactionId
                                          }
                            }}
                        </ng-template>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_REFUND_TRANSITION">
                        <ng-container *ngIf="entry.data.to === 'Settled'; else regularRefundTransition">
                            <ng-container *ngIf="getRefund(entry) as refund">
                                <div class="title">{{ 'order.refund' | translate }} #{{ refund.id }}</div>
                                <div class="flex items-center">
                                    <vdr-chip colorType="warning" class="mr-1">{{
                                        refund.total | localeCurrency : order.currencyCode
                                    }}</vdr-chip>
                                    <vdr-history-entry-detail>
                                        <vdr-labeled-data [label]="'order.cancellation-reason' | translate">
                                            {{ entry.data.reason }}
                                        </vdr-labeled-data>
                                        <vdr-labeled-data [label]="'order.contents' | translate">
                                            <vdr-simple-item-list
                                                [items]="getCancelledItems(refund.lines)"
                                            ></vdr-simple-item-list>
                                        </vdr-labeled-data>
                                    </vdr-history-entry-detail>
                                </div>
                            </ng-container>
                        </ng-container>
                        <ng-template #regularRefundTransition>
                            {{
                                'order.history-refund-transition'
                                    | translate
                                        : {
                                              from: entry.data.from,
                                              to: entry.data.to,
                                              id: entry.data.refundId
                                          }
                            }}
                        </ng-template>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_CANCELLATION">
                        {{
                            'order.history-items-cancelled'
                                | translate : { count: getCancelledQuantity(entry) }
                        }}
                        <vdr-history-entry-detail *ngIf="getCancelledItems(entry.data.lines) as items">
                            <vdr-labeled-data [label]="'order.cancellation-reason' | translate">
                                {{ entry.data.reason }}
                            </vdr-labeled-data>
                            <vdr-labeled-data [label]="'order.contents' | translate">
                                <vdr-simple-item-list [items]="items"></vdr-simple-item-list>
                            </vdr-labeled-data>
                            <vdr-labeled-data [label]="'order.shipping-cancelled' | translate">
                                {{ entry.data.shippingCancelled }}
                            </vdr-labeled-data>
                        </vdr-history-entry-detail>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_FULFILLMENT">
                        {{ 'order.history-fulfillment-created' | translate }}
                        <vdr-history-entry-detail *ngIf="getFulfillment(entry) as fulfillment">
                            <vdr-fulfillment-detail
                                [fulfillmentId]="fulfillment.id"
                                [order]="order"
                            ></vdr-fulfillment-detail>
                        </vdr-history-entry-detail>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_FULFILLMENT_TRANSITION">
                        <ng-container *ngIf="entry.data.to === 'Delivered'">
                            <div class="title">
                                {{ 'order.history-fulfillment-delivered' | translate }}
                            </div>
                            {{ 'order.tracking-code' | translate }}: {{ getFulfillment(entry)?.trackingCode }}
                        </ng-container>
                        <ng-container *ngIf="entry.data.to === 'Shipped'">
                            <div class="title">
                                {{ 'order.history-fulfillment-shipped' | translate }}
                            </div>
                            {{ 'order.tracking-code' | translate }}: {{ getFulfillment(entry)?.trackingCode }}
                        </ng-container>
                        <ng-container *ngIf="entry.data.to !== 'Delivered' && entry.data.to !== 'Shipped'">
                            {{
                                'order.history-fulfillment-transition'
                                    | translate : { from: entry.data.from, to: entry.data.to }
                            }}
                        </ng-container>
                        <vdr-history-entry-detail *ngIf="getFulfillment(entry) as fulfillment">
                            <vdr-fulfillment-detail
                                [fulfillmentId]="fulfillment.id"
                                [order]="order"
                            ></vdr-fulfillment-detail>
                        </vdr-history-entry-detail>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_NOTE">
                        <div class="flex">
                            <div class="note-text">
                                <span *ngIf="entry.isPublic" class="note-visibility public">{{
                                    'common.public' | translate
                                }}</span>
                                <span *ngIf="!entry.isPublic" class="note-visibility private">{{
                                    'common.private' | translate
                                }}</span>
                                {{ entry.data.note }}
                            </div>
                            <div class="flex-spacer"></div>
                            <vdr-dropdown>
                                <button class="button-small ml-1" vdrDropdownTrigger>
                                    <clr-icon shape="ellipsis-vertical" size="12"></clr-icon>
                                </button>
                                <vdr-dropdown-menu vdrPosition="bottom-right">
                                    <button
                                        vdrDropdownItem
                                        (click)="updateNote.emit(entry)"
                                        [disabled]="!('UpdateOrder' | hasPermission)"
                                    >
                                        <clr-icon shape="edit"></clr-icon>
                                        {{ 'common.edit' | translate }}
                                    </button>
                                    <div class="dropdown-divider"></div>
                                    <button
                                        vdrDropdownItem
                                        (click)="deleteNote.emit(entry)"
                                        [disabled]="!('UpdateOrder' | hasPermission)"
                                    >
                                        <clr-icon shape="trash" class="is-danger"></clr-icon>
                                        {{ 'common.delete' | translate }}
                                    </button>
                                </vdr-dropdown-menu>
                            </vdr-dropdown>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_COUPON_APPLIED">
                        {{ 'order.history-coupon-code-applied' | translate }}:
                        <vdr-chip>
                            <a [routerLink]="['/marketing', 'promotions', entry.data.promotionId]">{{
                                entry.data.couponCode
                            }}</a>
                        </vdr-chip>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_COUPON_REMOVED">
                        {{ 'order.history-coupon-code-removed' | translate }}:
                        <vdr-chip
                            ><span class="cancelled-coupon-code">{{ entry.data.couponCode }}</span></vdr-chip
                        >
                    </ng-container>
                    <ng-container *ngSwitchCase="type.ORDER_CUSTOMER_UPDATED">
                        <div class="title">
                            {{
                                'order.history-customer-updated'
                                    | translate : { newCustomerName: entry.data.newCustomerName }
                            }}
                        </div>
                        <div class="flex">
                            <div class="note-text">
                                {{ entry.data.note }}
                            </div>
                            <div class="flex-spacer"></div>
                            <vdr-history-entry-detail>
                                <vdr-labeled-data [label]="'order.previous-customer' | translate">
                                    <a
                                        *ngIf="entry.data.previousCustomerId"
                                        class="button-ghost"
                                        [routerLink]="[
                                            '/customer',
                                            'customers',
                                            entry.data.previousCustomerId
                                        ]"
                                    >
                                        <clr-icon shape="user" class="is-solid"></clr-icon>
                                        <span>{{ entry.data.previousCustomerName }}</span>
                                        <clr-icon shape="arrow right"></clr-icon>
                                    </a>
                                </vdr-labeled-data>
                                <vdr-labeled-data [label]="'order.new-customer' | translate">
                                    <a
                                        *ngIf="entry.data.newCustomerId"
                                        class="button-ghost"
                                        [routerLink]="['/customer', 'customers', entry.data.newCustomerId]"
                                    >
                                        <clr-icon shape="user" class="is-solid"></clr-icon>
                                        <span>{{ entry.data.newCustomerName }}</span>
                                        <clr-icon shape="arrow right"></clr-icon>
                                    </a>
                                </vdr-labeled-data>
                            </vdr-history-entry-detail>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                        <div class="title">
                            {{ entry.type | translate }}
                        </div>
                        <vdr-history-entry-detail *ngIf="entry.data">
                            <vdr-object-tree [value]="entry.data"></vdr-object-tree>
                        </vdr-history-entry-detail>
                    </ng-container>
                </ng-container>
            </vdr-timeline-entry>
        </ng-template>
    </ng-container>

    <vdr-timeline-entry [isLast]="true" [createdAt]="order.createdAt" [featured]="true">
        <div class="title">
            {{ 'order.history-order-created' | translate }}
        </div>
    </vdr-timeline-entry>
</div>
`,
      styles: [":host{display:block}.entry-list{margin-inline-start:calc(var(--space-unit) * 2)}.note-entry{display:flex;align-items:center}.note-entry .note{flex:1}.note-entry button{margin:0}.visibility-select{display:flex;justify-content:space-between;align-items:baseline}.visibility-select .public{color:var(--color-warning-700)}.visibility-select .private{color:var(--color-success-700)}textarea.note{flex:1;height:36px;border-radius:3px;margin-inline-end:6px}.note-text{color:var(--color-grey-800);white-space:pre-wrap;max-width:580px}.cancelled-coupon-code{text-decoration:line-through}.note-visibility{text-transform:lowercase}.note-visibility.public{color:var(--color-warning-700)}.note-visibility.private{color:var(--color-success-700)}\n"]
    }]
  }], () => [{
    type: HistoryEntryComponentService
  }], {
    order: [{
      type: Input
    }],
    history: [{
      type: Input
    }],
    addNote: [{
      type: Output
    }],
    updateNote: [{
      type: Output
    }],
    deleteNote: [{
      type: Output
    }]
  });
})();
var GET_SELLER_ORDERS = gql`
    query GetSellerOrders($orderId: ID!) {
        order(id: $orderId) {
            id
            sellerOrders {
                id
                code
                state
                orderPlacedAt
                currencyCode
                totalWithTax
                channels {
                    id
                    code
                    seller {
                        id
                        name
                    }
                }
            }
        }
    }
`;
var SellerOrdersCardComponent = class _SellerOrdersCardComponent {
  constructor(router, dataService, channelService) {
    this.router = router;
    this.dataService = dataService;
    this.channelService = channelService;
  }
  ngOnInit() {
    this.sellerOrders$ = this.dataService.query(GET_SELLER_ORDERS, {
      orderId: this.orderId
    }).mapSingle(({
      order
    }) => order?.sellerOrders ?? []);
  }
  getSeller(order) {
    const sellerChannel = order.channels.find((channel) => channel.code !== import_shared_constants.DEFAULT_CHANNEL_CODE);
    return sellerChannel?.seller;
  }
  navigateToSellerOrder(order) {
    this.router.navigate(["/orders", order.id]);
  }
  static {
    this.ɵfac = function SellerOrdersCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerOrdersCardComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ChannelService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SellerOrdersCardComponent,
      selectors: [["vdr-seller-orders-card"]],
      inputs: {
        orderId: "orderId"
      },
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [[3, "title"], [1, "form-grid"], [4, "ngFor", "ngForOf"], [1, "button-ghost", "mb-1", 3, "routerLink"], ["shape", "arrow right"], [3, "label"], [3, "state"], [3, "label", 4, "ngIf"]],
      template: function SellerOrdersCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-card", 0);
          ɵɵpipe(1, "translate");
          ɵɵelementStart(2, "div", 1);
          ɵɵtemplate(3, SellerOrdersCardComponent_div_3_Template, 9, 10, "div", 2);
          ɵɵpipe(4, "async");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("title", ɵɵpipeBind1(1, 2, "order.seller-orders"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 4, ctx.sellerOrders$));
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, OrderStateLabelComponent, LabeledDataComponent, CardComponent, AsyncPipe, TranslatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:block}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerOrdersCardComponent, [{
    type: Component,
    args: [{
      selector: "vdr-seller-orders-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-card [title]="'order.seller-orders' | translate">
    <div class="form-grid">
        <div *ngFor="let order of sellerOrders$ | async">
            <a [routerLink]="['seller-orders', order.id]" class="button-ghost mb-1"
                >{{ order.code }} <clr-icon shape="arrow right"></clr-icon
            ></a>
            <vdr-labeled-data [label]="'order.state' | translate">
                <vdr-order-state-label [state]="order.state"></vdr-order-state-label>
            </vdr-labeled-data>
            <vdr-labeled-data *ngIf="getSeller(order) as seller" [label]="'common.seller' | translate">
                {{ seller.name }}
            </vdr-labeled-data>
            <vdr-labeled-data *ngIf="getSeller(order) as seller" [label]="'order.total' | translate">
                {{ order.totalWithTax | localeCurrency : order.currencyCode }}
            </vdr-labeled-data>
        </div>
    </div>
</vdr-card>
`,
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: Router
  }, {
    type: DataService
  }, {
    type: ChannelService
  }], {
    orderId: [{
      type: Input
    }]
  });
})();
var ORDER_DETAIL_QUERY = gql`
    query OrderDetailQuery($id: ID!) {
        order(id: $id) {
            ...OrderDetail
        }
    }
    ${ORDER_DETAIL_FRAGMENT}
`;
var SET_ORDER_CUSTOMER_MUTATION = gql`
    mutation SetOrderCustomer($input: SetOrderCustomerInput!) {
        setOrderCustomer(input: $input) {
            id
            customer {
                id
                firstName
                lastName
                emailAddress
            }
        }
    }
`;
var OrderDetailComponent = class _OrderDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, notificationService, modalService, orderTransitionService, formBuilder) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.orderTransitionService = orderTransitionService;
    this.formBuilder = formBuilder;
    this.customFields = this.getCustomFieldConfig("Order");
    this.orderLineCustomFields = this.getCustomFieldConfig("OrderLine");
    this.detailForm = new FormGroup({
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.fetchHistory = new Subject();
    this.defaultStates = ["AddingItems", "ArrangingPayment", "PaymentAuthorized", "PaymentSettled", "PartiallyShipped", "Shipped", "PartiallyDelivered", "Delivered", "Cancelled", "Modifying", "ArrangingAdditionalPayment"];
  }
  ngOnInit() {
    this.init();
    this.entity$.pipe(take(1)).subscribe((order) => {
      if (order.state === "Modifying") {
        this.router.navigate(["./", "modify"], {
          relativeTo: this.route
        });
      }
    });
    this.history$ = this.fetchHistory.pipe(startWith(null), switchMap(() => this.dataService.order.getOrderHistory(this.id, {
      sort: {
        createdAt: SortOrder.DESC
      }
    }).mapStream((data) => data.order?.history.items)));
    this.nextStates$ = this.entity$.pipe(map((order) => {
      const isInCustomState = !this.defaultStates.includes(order.state);
      return isInCustomState ? order.nextStates : order.nextStates.filter((s) => !this.defaultStates.includes(s));
    }));
  }
  ngOnDestroy() {
    this.destroy();
  }
  openStateDiagram() {
    this.entity$.pipe(take(1), switchMap((order) => this.modalService.fromComponent(OrderProcessGraphDialogComponent, {
      closable: true,
      locals: {
        activeState: order.state
      }
    }))).subscribe();
  }
  setOrderCustomer() {
    this.modalService.fromComponent(SelectCustomerDialogComponent, {
      locals: {
        canCreateNew: false,
        includeNoteInput: true,
        title: marker("order.assign-order-to-another-customer")
      }
    }).pipe(switchMap((result) => {
      function isExisting(input) {
        return typeof input === "object" && !!input.id;
      }
      if (isExisting(result)) {
        return this.dataService.mutate(SetOrderCustomerDocument, {
          input: {
            customerId: result.id,
            orderId: this.id,
            note: result.note
          }
        });
      } else {
        return EMPTY;
      }
    }), switchMap((result) => this.refetchOrder(result))).subscribe((result) => {
      if (result) {
        this.notificationService.success(marker("order.set-customer-success"));
      }
    });
  }
  transitionToState(state) {
    this.dataService.order.transitionToState(this.id, state).subscribe(({
      transitionOrderToState
    }) => {
      switch (transitionOrderToState?.__typename) {
        case "Order":
          this.notificationService.success(marker("order.transitioned-to-state-success"), {
            state
          });
          this.fetchHistory.next();
          break;
        case "OrderStateTransitionError":
          this.notificationService.error(transitionOrderToState.transitionError);
      }
    });
  }
  manuallyTransitionToState(order) {
    this.orderTransitionService.manuallyTransitionToState({
      orderId: order.id,
      nextStates: order.nextStates,
      cancellable: true,
      message: marker("order.manually-transition-to-state-message"),
      retry: 0
    }).subscribe();
  }
  transitionToModifying() {
    this.dataService.order.transitionToState(this.id, "Modifying").subscribe(({
      transitionOrderToState
    }) => {
      switch (transitionOrderToState?.__typename) {
        case "Order":
          this.router.navigate(["./modify"], {
            relativeTo: this.route
          });
          break;
        case "OrderStateTransitionError":
          this.notificationService.error(transitionOrderToState.transitionError);
      }
    });
  }
  updateCustomFields() {
    this.dataService.order.updateOrderCustomFields({
      id: this.id,
      customFields: this.detailForm.value.customFields
    }).subscribe(() => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Order"
      });
    });
  }
  getOrderAddressLines(orderAddress) {
    if (!orderAddress) {
      return [];
    }
    return Object.values(orderAddress).filter((val) => val !== "OrderAddress").filter((line) => !!line);
  }
  settlePayment(payment) {
    this.dataService.order.settlePayment(payment.id).subscribe(({
      settlePayment
    }) => {
      switch (settlePayment.__typename) {
        case "Payment":
          if (settlePayment.state === "Settled") {
            this.notificationService.success(marker("order.settle-payment-success"));
          } else {
            this.notificationService.error(marker("order.settle-payment-error"));
          }
          this.dataService.order.getOrder(this.id).single$.subscribe();
          this.fetchHistory.next();
          break;
        case "OrderStateTransitionError":
        case "PaymentStateTransitionError":
        case "SettlePaymentError":
          this.notificationService.error(settlePayment.message);
      }
    });
  }
  transitionPaymentState({
    payment,
    state
  }) {
    if (state === "Cancelled") {
      this.dataService.order.cancelPayment(payment.id).subscribe(({
        cancelPayment
      }) => {
        switch (cancelPayment.__typename) {
          case "Payment":
            this.notificationService.success(marker("order.transitioned-payment-to-state-success"), {
              state
            });
            this.dataService.order.getOrder(this.id).single$.subscribe();
            this.fetchHistory.next();
            break;
          case "PaymentStateTransitionError":
            this.notificationService.error(cancelPayment.transitionError);
            break;
          case "CancelPaymentError":
            this.notificationService.error(cancelPayment.paymentErrorMessage);
            break;
        }
      });
    } else {
      this.dataService.order.transitionPaymentToState(payment.id, state).subscribe(({
        transitionPaymentToState
      }) => {
        switch (transitionPaymentToState.__typename) {
          case "Payment":
            this.notificationService.success(marker("order.transitioned-payment-to-state-success"), {
              state
            });
            this.dataService.order.getOrder(this.id).single$.subscribe();
            this.fetchHistory.next();
            break;
          case "PaymentStateTransitionError":
            this.notificationService.error(transitionPaymentToState.message);
            break;
        }
      });
    }
  }
  canAddFulfillment(order) {
    const allFulfillmentLines = (order.fulfillments ?? []).filter((fulfillment) => fulfillment.state !== "Cancelled").reduce((all, fulfillment) => [...all, ...fulfillment.lines], []);
    let allItemsFulfilled = true;
    for (const line of order.lines) {
      const totalFulfilledCount = allFulfillmentLines.filter((row) => row.orderLineId === line.id).reduce((sum, row) => sum + row.quantity, 0);
      if (totalFulfilledCount < line.quantity) {
        allItemsFulfilled = false;
      }
    }
    return !allItemsFulfilled && !this.hasUnsettledModifications(order) && this.outstandingPaymentAmount(order) === 0 && (order.nextStates.includes("Shipped") || order.nextStates.includes("PartiallyShipped") || order.nextStates.includes("Delivered"));
  }
  hasUnsettledModifications(order) {
    return 0 < order.modifications.filter((m) => !m.isSettled).length;
  }
  getOutstandingModificationAmount(order) {
    return (0, import_shared_utils.summate)(order.modifications.filter((m) => !m.isSettled), "priceChange");
  }
  outstandingPaymentAmount(order) {
    const paymentIsValid = (p) => p.state !== "Cancelled" && p.state !== "Declined" && p.state !== "Error";
    let amountCovered = 0;
    for (const payment of order.payments?.filter(paymentIsValid) ?? []) {
      const refunds = payment.refunds.filter((r) => r.state !== "Failed") ?? [];
      const refundsTotal = (0, import_shared_utils.summate)(refunds, "total");
      amountCovered += payment.amount - refundsTotal;
    }
    return order.totalWithTax - amountCovered;
  }
  addManualPayment(order) {
    const priorState = order.state;
    this.modalService.fromComponent(AddManualPaymentDialogComponent, {
      closable: true,
      locals: {
        outstandingAmount: this.outstandingPaymentAmount(order),
        currencyCode: order.currencyCode
      }
    }).pipe(switchMap((result) => {
      if (result) {
        return this.dataService.order.addManualPaymentToOrder({
          orderId: this.id,
          transactionId: result.transactionId,
          method: result.method,
          metadata: result.metadata || {}
        });
      } else {
        return EMPTY;
      }
    }), switchMap(({
      addManualPaymentToOrder
    }) => {
      switch (addManualPaymentToOrder.__typename) {
        case "Order":
          this.notificationService.success(marker("order.add-payment-to-order-success"));
          if (priorState === "ArrangingAdditionalPayment") {
            return this.orderTransitionService.transitionToPreModifyingState(order.id, order.nextStates);
          } else {
            return of("PaymentSettled");
          }
        case "ManualPaymentStateError":
          this.notificationService.error(addManualPaymentToOrder.message);
          return EMPTY;
        default:
          return EMPTY;
      }
    })).subscribe((result) => {
      if (result) {
        this.refetchOrder({
          result
        });
      }
    });
  }
  fulfillOrder() {
    this.entity$.pipe(take(1), switchMap((order) => this.modalService.fromComponent(FulfillOrderDialogComponent, {
      size: "xl",
      locals: {
        order
      }
    })), switchMap((input) => {
      if (input) {
        return this.dataService.order.createFulfillment(input);
      } else {
        return of(void 0);
      }
    }), switchMap((result) => this.refetchOrder(result).pipe(mapTo(result)))).subscribe((result) => {
      if (result) {
        const {
          addFulfillmentToOrder
        } = result;
        switch (addFulfillmentToOrder.__typename) {
          case "Fulfillment":
            this.notificationService.success(marker("order.create-fulfillment-success"));
            break;
          case "EmptyOrderLineSelectionError":
          case "InsufficientStockOnHandError":
          case "ItemsAlreadyFulfilledError":
          case "InvalidFulfillmentHandlerError":
            this.notificationService.error(addFulfillmentToOrder.message);
            break;
          case "FulfillmentStateTransitionError":
            this.notificationService.error(addFulfillmentToOrder.transitionError);
            break;
          case "CreateFulfillmentError":
            this.notificationService.error(addFulfillmentToOrder.fulfillmentHandlerError);
            break;
          case void 0:
            this.notificationService.error(JSON.stringify(addFulfillmentToOrder));
            break;
          default:
            (0, import_shared_utils.assertNever)(addFulfillmentToOrder);
        }
      }
    });
  }
  transitionFulfillment(id, state) {
    this.dataService.order.transitionFulfillmentToState(id, state).pipe(switchMap((result) => this.refetchOrder(result))).subscribe(() => {
      this.notificationService.success(marker("order.successfully-updated-fulfillment"));
    });
  }
  cancelOrRefund(order) {
    const isRefundable = this.orderHasSettledPayments(order);
    if (order.state === "PaymentAuthorized" || order.active === true || !isRefundable) {
      this.cancelOrder(order);
    } else {
      this.refundOrder(order);
    }
  }
  settleRefund(refund) {
    this.modalService.fromComponent(SettleRefundDialogComponent, {
      size: "md",
      locals: {
        refund
      }
    }).pipe(switchMap((transactionId) => {
      if (transactionId) {
        return this.dataService.order.settleRefund({
          transactionId,
          id: refund.id
        }, this.id);
      } else {
        return of(void 0);
      }
    })).subscribe((result) => {
      if (result) {
        this.notificationService.success(marker("order.settle-refund-success"));
      }
    });
  }
  addNote(event) {
    const {
      note,
      isPublic
    } = event;
    this.dataService.order.addNoteToOrder({
      id: this.id,
      note,
      isPublic
    }).pipe(switchMap((result) => this.refetchOrder(result))).subscribe((result) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Note"
      });
    });
  }
  updateNote(entry) {
    this.modalService.fromComponent(EditNoteDialogComponent, {
      closable: true,
      locals: {
        displayPrivacyControls: true,
        note: entry.data.note,
        noteIsPrivate: !entry.isPublic
      }
    }).pipe(switchMap((result) => {
      if (result) {
        return this.dataService.order.updateOrderNote({
          noteId: entry.id,
          isPublic: !result.isPrivate,
          note: result.note
        });
      } else {
        return EMPTY;
      }
    })).subscribe((result) => {
      this.fetchHistory.next();
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Note"
      });
    });
  }
  deleteNote(entry) {
    return this.modalService.dialog({
      title: marker("common.confirm-delete-note"),
      body: entry.data.note,
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(switchMap((res) => res ? this.dataService.order.deleteOrderNote(entry.id) : EMPTY)).subscribe(() => {
      this.fetchHistory.next();
      this.notificationService.success(marker("common.notify-delete-success"), {
        entity: "Note"
      });
    });
  }
  orderHasSettledPayments(order) {
    return !!order.payments?.find((p) => p.state === "Settled");
  }
  cancelOrder(order) {
    this.modalService.fromComponent(CancelOrderDialogComponent, {
      size: "xl",
      locals: {
        order
      }
    }).pipe(switchMap((input) => {
      if (input) {
        return this.dataService.order.cancelOrder(input);
      } else {
        return of(void 0);
      }
    }), switchMap((result) => this.refetchOrder(result))).subscribe((result) => {
      if (result) {
        this.notificationService.success(marker("order.cancelled-order-success"));
      }
    });
  }
  refundOrder(order) {
    this.modalService.fromComponent(RefundOrderDialogComponent, {
      size: "xl",
      locals: {
        order
      }
    }).pipe(switchMap((input) => {
      if (!input) {
        return of(void 0);
      }
      if (input.cancel.lines?.length) {
        return this.dataService.order.cancelOrder(input.cancel).pipe(map((res) => {
          const result = res.cancelOrder;
          switch (result.__typename) {
            case "Order":
              this.refetchOrder(result).subscribe();
              this.notificationService.success(marker("order.cancelled-order-items-success"), {
                count: (0, import_shared_utils.summate)(input.cancel.lines, "quantity")
              });
              return input;
            case "CancelActiveOrderError":
            case "QuantityTooGreatError":
            case "MultipleOrderError":
            case "OrderStateTransitionError":
            case "EmptyOrderLineSelectionError":
              this.notificationService.error(result.message);
              return void 0;
          }
        }));
      } else {
        return [input];
      }
    }), switchMap((input) => {
      if (!input) {
        return of(void 0);
      }
      if (input.refunds.length) {
        return forkJoin(input.refunds.map((refund) => this.dataService.order.refundOrder(refund).pipe(map((res) => res.refundOrder))));
      } else {
        return [void 0];
      }
    })).subscribe((results) => {
      for (const result of results ?? []) {
        if (result) {
          switch (result.__typename) {
            case "Refund":
              if (result.state === "Failed") {
                this.notificationService.error(marker("order.refund-order-failed"));
              } else {
                this.notificationService.success(marker("order.refund-order-success"));
              }
              break;
            case "AlreadyRefundedError":
            case "NothingToRefundError":
            case "PaymentOrderMismatchError":
            case "RefundOrderStateError":
            case "RefundStateTransitionError":
              this.notificationService.error(result.message);
              break;
          }
        }
      }
      this.refetchOrder(results?.[0]).subscribe();
    });
  }
  refetchOrder(result) {
    this.fetchHistory.next();
    if (result) {
      return this.dataService.order.getOrder(this.id).single$;
    } else {
      return of(void 0);
    }
  }
  setFormValues(entity) {
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), entity);
    }
  }
  static {
    this.ɵfac = function OrderDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(OrderTransitionService), ɵɵdirectiveInject(FormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderDetailComponent,
      selectors: [["vdr-order-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 6,
      consts: [["cancelOnly", ""], [4, "ngIf"], ["locationId", "order-detail"], ["class", "button primary mr-1", 3, "click", 4, "ngIf"], ["class", "button primary mr-1", 3, "disabled", "click", 4, "ngIf"], ["locationId", "order-detail", 3, "alwaysShow"], ["type", "button", "vdrDropdownItem", "", 3, "click", 4, "ngIf"], [1, "dropdown-divider"], ["type", "button", "vdrDropdownItem", "", 3, "click"], ["shape", "step-forward-2", 1, "is-warning"], [1, "button", "primary", "mr-1", 3, "click"], [1, "button", "primary", "mr-1", 3, "click", "disabled"], ["shape", "pencil"], ["shape", "error-standard", 1, "is-error"], [4, "ngIf", "ngIfElse"], ["type", "button", "vdrDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["shape", "step-forward-2"], [3, "title"], ["vdrCardControls", ""], [3, "state"], [3, "customer"], ["class", "mt-2", 3, "label", 4, "ngIf"], [3, "label", 4, "ngIf"], [3, "title", 4, "ngIf"], [3, "entity", 4, "ngIf"], ["class", "mb-2", 3, "orderId", 4, "ngIf"], [3, "paddingX"], [3, "order", "orderLineCustomFields"], [3, "title", "paddingX"], [1, "table"], [4, "ngFor", "ngForOf"], ["locationId", "order-detail", 3, "entity$", "detailForm"], [3, "addNote", "updateNote", "deleteNote", "order", "history"], [1, "button-small", 3, "click", "title"], ["shape", "list"], ["class", "button-small", 3, "title", "click", 4, "vdrIfPermissions"], ["shape", "switch"], [1, "mt-2", 3, "label"], [1, "mt-1", 3, "address"], [3, "label"], [3, "currencyCode", "payment", "settlePayment", "transitionPaymentState", "settleRefund", 4, "ngFor", "ngForOf"], [3, "settlePayment", "transitionPaymentState", "settleRefund", "currencyCode", "payment"], [3, "fulfillment", "order", "transitionState", 4, "ngFor", "ngForOf"], [3, "transitionState", "fulfillment", "order"], [3, "entity"], [1, "mb-2", 3, "orderId"], ["entityName", "Order", 3, "customFields", "customFieldsFormGroup", "readonly"], [1, "button", "primary", 3, "click", "disabled"]],
      template: function OrderDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block");
          ɵɵtemplate(1, OrderDetailComponent_vdr_action_bar_1_Template, 17, 12, "vdr-action-bar", 1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
          ɵɵtemplate(3, OrderDetailComponent_vdr_page_detail_layout_3_Template, 46, 46, "vdr-page-detail-layout", 1);
          ɵɵpipe(4, "async");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.entity$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx.entity$));
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, CustomerLabelComponent, DropdownItemDirective, OrderStateLabelComponent, FormattedAddressComponent, LabeledDataComponent, IfPermissionsDirective, ActionBarItemsComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, CardControlsDirective, OrderPaymentCardComponent, OrderHistoryComponent, FulfillmentCardComponent, OrderTableComponent, SellerOrdersCardComponent, AsyncPipe, PercentPipe, TranslatePipe, HasPermissionPipe, StateI18nTokenPipe, LocaleCurrencyPipe],
      styles: [".shipping-address[_ngcontent-%COMP%]{list-style-type:none;line-height:1.3em}.order-cards[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-top:6px;color:var(--color-text-200)}vdr-order-payment-card[_ngcontent-%COMP%] + vdr-order-payment-card[_ngcontent-%COMP%]{margin-top:calc(var(--space-unit) * 2)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar *ngIf="entity$ | async as order">
        <vdr-ab-left> </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="order-detail"></vdr-action-bar-items>
            <button
                class="button primary mr-1"
                *ngIf="
                    order.type !== 'Aggregate' &&
                    (order.state === 'ArrangingPayment' || order.state === 'ArrangingAdditionalPayment') &&
                    (hasUnsettledModifications(order) || 0 < outstandingPaymentAmount(order))
                "
                (click)="addManualPayment(order)"
            >
                {{ 'order.add-payment-to-order' | translate }}
                ({{ outstandingPaymentAmount(order) | localeCurrency : order.currencyCode }})
            </button>
            <button
                class="button primary mr-1"
                *ngIf="
                    order.type !== 'Aggregate' &&
                    order.active === false &&
                    order.state !== 'ArrangingAdditionalPayment' &&
                    order.state !== 'ArrangingPayment' &&
                    0 < outstandingPaymentAmount(order)
                "
                (click)="transitionToState('ArrangingAdditionalPayment')"
            >
                {{ 'order.arrange-additional-payment' | translate }}
            </button>
            <button
                *ngIf="order.type !== 'Aggregate'"
                class="button primary mr-1"
                (click)="fulfillOrder()"
                [disabled]="!canAddFulfillment(order)"
            >
                {{ 'order.fulfill-order' | translate }}
            </button>
            <vdr-action-bar-dropdown-menu [alwaysShow]="true" locationId="order-detail">
                <ng-container *ngIf="order.type !== 'Aggregate' && order.nextStates.includes('Modifying')">
                    <button type="button" vdrDropdownItem (click)="transitionToModifying()">
                        <clr-icon shape="pencil"></clr-icon>
                        {{ 'order.modify-order' | translate }}
                    </button>
                    <div class="dropdown-divider"></div>
                </ng-container>
                <button
                    type="button"
                    vdrDropdownItem
                    *ngIf="order.type !== 'Aggregate' && order.nextStates.includes('Cancelled')"
                    (click)="cancelOrRefund(order)"
                >
                    <clr-icon shape="error-standard" class="is-error"></clr-icon>
                    <ng-container *ngIf="orderHasSettledPayments(order); else cancelOnly">
                        {{ 'order.refund-and-cancel-order' | translate }}
                    </ng-container>
                    <ng-template #cancelOnly>
                        {{ 'order.cancel-order' | translate }}
                    </ng-template>
                </button>

                <ng-container *ngIf="(nextStates$ | async)?.length">
                    <div class="dropdown-divider"></div>
                    <button
                        *ngFor="let nextState of nextStates$ | async"
                        type="button"
                        vdrDropdownItem
                        (click)="transitionToState(nextState)"
                    >
                        <clr-icon shape="step-forward-2"></clr-icon>
                        {{
                            'order.transition-to-state'
                                | translate : { state: (nextState | stateI18nToken | translate) }
                        }}
                    </button>
                </ng-container>
                <div class="dropdown-divider"></div>
                <button type="button" vdrDropdownItem (click)="manuallyTransitionToState(order)">
                    <clr-icon shape="step-forward-2" class="is-warning"></clr-icon>
                    {{ 'order.manually-transition-to-state' | translate }}
                </button>
            </vdr-action-bar-dropdown-menu>
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<vdr-page-detail-layout *ngIf="entity$ | async as order">
    <vdr-page-detail-sidebar>
        <vdr-card [title]="'order.state' | translate">
            <ng-template vdrCardControls>
                <button
                    class="button-small"
                    (click)="openStateDiagram()"
                    [title]="'order.order-state-diagram' | translate"
                >
                    <clr-icon shape="list"></clr-icon>
                </button>
            </ng-template>
            <vdr-order-state-label [state]="order.state"></vdr-order-state-label>
        </vdr-card>
        <vdr-card [title]="'order.customer' | translate">
            <ng-template vdrCardControls>
                <button
                    *vdrIfPermissions="['UpdateOrder', 'ReadCustomer']"
                    class="button-small"
                    (click)="setOrderCustomer()"
                    [title]="'order.assign-order-to-another-customer' | translate"
                >
                    <clr-icon shape="switch"></clr-icon>
                </button>
            </ng-template>
            <vdr-customer-label [customer]="order.customer"></vdr-customer-label>
            <vdr-labeled-data
                class="mt-2"
                [label]="'order.shipping-address' | translate"
                *ngIf="getOrderAddressLines(order.shippingAddress).length"
            >
                <vdr-formatted-address [address]="order.shippingAddress" class="mt-1"></vdr-formatted-address>
            </vdr-labeled-data>
            <vdr-labeled-data
                [label]="'order.billing-address' | translate"
                *ngIf="getOrderAddressLines(order.billingAddress).length"
            >
                <vdr-formatted-address [address]="order.billingAddress" class="mt-1"></vdr-formatted-address>
            </vdr-labeled-data>
        </vdr-card>
        <vdr-card [title]="'order.payments' | translate" *ngIf="order.payments?.length">
            <vdr-order-payment-card
                *ngFor="let payment of order.payments"
                [currencyCode]="order.currencyCode"
                [payment]="payment"
                (settlePayment)="settlePayment($event)"
                (transitionPaymentState)="transitionPaymentState($event)"
                (settleRefund)="settleRefund($event)"
            ></vdr-order-payment-card>
        </vdr-card>
        <vdr-card *ngIf="order.fulfillments?.length">
            <vdr-fulfillment-card
                *ngFor="let fulfillment of order.fulfillments"
                [fulfillment]="fulfillment"
                [order]="order"
                (transitionState)="transitionFulfillment(fulfillment.id, $event)"
            ></vdr-fulfillment-card>
        </vdr-card>
        <vdr-card>
            <vdr-page-entity-info *ngIf="entity$ | async as entity" [entity]="entity" />
        </vdr-card>
    </vdr-page-detail-sidebar>

    <vdr-page-block>
        <vdr-seller-orders-card
            class="mb-2"
            *ngIf="order.sellerOrders.length"
            [orderId]="order.id"
        ></vdr-seller-orders-card>
        <vdr-card [paddingX]="false">
            <vdr-order-table
                [order]="order"
                [orderLineCustomFields]="orderLineCustomFields"
            ></vdr-order-table>
        </vdr-card>
        <vdr-card [title]="'order.tax-summary' | translate" [paddingX]="false">
            <table class="table">
                <thead>
                    <tr>
                        <th>{{ 'common.description' | translate }}</th>
                        <th>{{ 'order.tax-rate' | translate }}</th>
                        <th>{{ 'order.tax-base' | translate }}</th>
                        <th>{{ 'order.tax-total' | translate }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let row of order.taxSummary">
                        <td>{{ row.description }}</td>
                        <td>{{ row.taxRate / 100 | percent : '0.0-3' }}</td>
                        <td>{{ row.taxBase | localeCurrency : order.currencyCode }}</td>
                        <td>{{ row.taxTotal | localeCurrency : order.currencyCode }}</td>
                    </tr>
                </tbody>
            </table>
        </vdr-card>
        <vdr-card [title]="'common.custom-fields' | translate" *ngIf="customFields.length">
            <vdr-tabbed-custom-fields
                entityName="Order"
                [customFields]="customFields"
                [customFieldsFormGroup]="detailForm.get('customFields')"
                [readonly]="!('UpdateOrder' | hasPermission)"
            />
            <button
                class="button primary"
                (click)="updateCustomFields()"
                [disabled]="
                    detailForm.get('customFields')?.pristine || detailForm.get('customFields')?.invalid
                "
            >
                {{ 'common.update' | translate }}
            </button>
        </vdr-card>
        <vdr-custom-detail-component-host
            locationId="order-detail"
            [entity$]="entity$"
            [detailForm]="detailForm"
        ></vdr-custom-detail-component-host>

        <vdr-card [title]="'order.order-history' | translate">
            <vdr-order-history
                [order]="order"
                [history]="history$ | async"
                (addNote)="addNote($event)"
                (updateNote)="updateNote($event)"
                (deleteNote)="deleteNote($event)"
            ></vdr-order-history>
        </vdr-card>
    </vdr-page-block>
</vdr-page-detail-layout>
`,
      styles: [".shipping-address{list-style-type:none;line-height:1.3em}.order-cards h6{margin-top:6px;color:var(--color-text-200)}vdr-order-payment-card+vdr-order-payment-card{margin-top:calc(var(--space-unit) * 2)}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DataService
  }, {
    type: NotificationService
  }, {
    type: ModalService
  }, {
    type: OrderTransitionService
  }, {
    type: FormBuilder
  }], null);
})();
var OrderModificationSummaryComponent = class _OrderModificationSummaryComponent {
  get adjustedLines() {
    return (this.modifyOrderInput.adjustOrderLines || []).map((l) => {
      const line = this.orderSnapshot.lines.find((line2) => line2.id === l.orderLineId);
      if (line) {
        const delta = l.quantity - line.quantity;
        const sign = delta === 0 ? "" : delta > 0 ? "+" : "-";
        return delta ? `${sign}${Math.abs(delta)} ${line.productVariant.name}` : line.productVariant.name;
      }
    }).filter(import_shared_utils.notNullOrUndefined);
  }
  getModifiedFields(formGroup) {
    if (!formGroup.dirty) {
      return "";
    }
    return Object.entries(formGroup.controls).map(([key, control]) => {
      if (control.dirty) {
        return key;
      }
    }).filter(import_shared_utils.notNullOrUndefined).join(", ");
  }
  getUpdatedShippingMethodLines() {
    return Object.entries(this.updatedShippingMethods || {}).map(([lineId, shippingMethod]) => {
      const previousMethod = this.orderSnapshot.shippingLines.find((l) => l.id === lineId);
      if (!previousMethod) {
        return;
      }
      const previousName = previousMethod.shippingMethod.name || previousMethod.shippingMethod.code;
      const newName = shippingMethod.name || shippingMethod.code;
      return `${previousName} -> ${newName}`;
    }).filter(import_shared_utils.notNullOrUndefined);
  }
  get couponCodeChanges() {
    const originalCodes = this.orderSnapshot.couponCodes || [];
    const newCodes = this.couponCodesControl.value || [];
    const addedCodes = newCodes.filter((c) => !originalCodes.includes(c)).map((c) => `+ ${c}`);
    const removedCodes = originalCodes.filter((c) => !newCodes.includes(c)).map((c) => `- ${c}`);
    return [...addedCodes, ...removedCodes];
  }
  static {
    this.ɵfac = function OrderModificationSummaryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderModificationSummaryComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderModificationSummaryComponent,
      selectors: [["vdr-order-modification-summary"]],
      inputs: {
        orderSnapshot: "orderSnapshot",
        modifyOrderInput: "modifyOrderInput",
        addedLines: "addedLines",
        shippingAddressForm: "shippingAddressForm",
        billingAddressForm: "billingAddressForm",
        updatedShippingMethods: "updatedShippingMethods",
        couponCodesControl: "couponCodesControl"
      },
      standalone: false,
      decls: 7,
      vars: 7,
      consts: [[3, "label", 4, "ngIf"], [4, "ngIf"], [3, "label"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [1, "mb-1"], [4, "ngFor", "ngForOf"]],
      template: function OrderModificationSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderModificationSummaryComponent_vdr_labeled_data_0_Template, 3, 7, "vdr-labeled-data", 0)(1, OrderModificationSummaryComponent_vdr_labeled_data_1_Template, 3, 7, "vdr-labeled-data", 0)(2, OrderModificationSummaryComponent_vdr_labeled_data_2_Template, 3, 7, "vdr-labeled-data", 0)(3, OrderModificationSummaryComponent_vdr_labeled_data_3_Template, 3, 4, "vdr-labeled-data", 0)(4, OrderModificationSummaryComponent_vdr_labeled_data_4_Template, 3, 4, "vdr-labeled-data", 0)(5, OrderModificationSummaryComponent_vdr_labeled_data_5_Template, 3, 4, "vdr-labeled-data", 0)(6, OrderModificationSummaryComponent_ng_container_6_Template, 2, 1, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.modifyOrderInput.adjustOrderLines == null ? null : ctx.modifyOrderInput.adjustOrderLines.length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.modifyOrderInput.addItems == null ? null : ctx.modifyOrderInput.addItems.length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.modifyOrderInput.surcharges == null ? null : ctx.modifyOrderInput.surcharges.length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.getModifiedFields(ctx.shippingAddressForm));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.getModifiedFields(ctx.billingAddressForm));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.couponCodeChanges.length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.getUpdatedShippingMethodLines());
        }
      },
      dependencies: [NgForOf, NgIf, LabeledDataComponent, TranslatePipe, LocaleCurrencyPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderModificationSummaryComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-modification-summary",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-labeled-data
        *ngIf="modifyOrderInput.adjustOrderLines?.length"
        [label]="
                    'order.modification-adjusting-lines'
                        | translate : { count: modifyOrderInput.adjustOrderLines?.length }
                "
>
    <div *ngFor="let line of adjustedLines" class="mb-1">
        {{ line }}
    </div>
</vdr-labeled-data>
<vdr-labeled-data
        *ngIf="modifyOrderInput.addItems?.length"
        [label]="
                    'order.modification-adding-items'
                        | translate : { count: modifyOrderInput.addItems?.length }
                "
>
    <div *ngFor="let item of addedLines">
        {{ item.productVariant.name }} x {{ item.quantity }}
    </div>
</vdr-labeled-data>
<vdr-labeled-data
        *ngIf="modifyOrderInput.surcharges?.length"
        [label]="
                    'order.modification-adding-surcharges'
                        | translate : { count: modifyOrderInput.surcharges?.length }
                "
>
    <div *ngFor="let surcharge of modifyOrderInput.surcharges" class="mb-1">
        {{ surcharge.description }}: {{ surcharge.price | localeCurrency : orderSnapshot.currencyCode }}
    </div>
</vdr-labeled-data>
<vdr-labeled-data
        *ngIf="getModifiedFields(shippingAddressForm) as updatedShippingFields"
        [label]="'order.modification-updating-shipping-address' | translate"
>
    {{ updatedShippingFields }}
</vdr-labeled-data>
<vdr-labeled-data
        *ngIf="getModifiedFields(billingAddressForm) as updatedBillingFields"
        [label]="'order.modification-updating-billing-address' | translate"
>
    {{ updatedBillingFields }}
</vdr-labeled-data>
<vdr-labeled-data *ngIf="couponCodeChanges.length" [label]="'order.set-coupon-codes' | translate">
    <div *ngFor="let change of couponCodeChanges" class="mb-1">{{ change }}</div>
</vdr-labeled-data>
<ng-container *ngIf="getUpdatedShippingMethodLines() as updatedShippingMethods">
    <vdr-labeled-data *ngIf="updatedShippingMethods.length" [label]="'order.shipping-method' | translate">
        <div *ngFor="let change of updatedShippingMethods" class="mb-1">{{ change }}</div>
    </vdr-labeled-data>
</ng-container>`
    }]
  }], null, {
    orderSnapshot: [{
      type: Input
    }],
    modifyOrderInput: [{
      type: Input
    }],
    addedLines: [{
      type: Input
    }],
    shippingAddressForm: [{
      type: Input
    }],
    billingAddressForm: [{
      type: Input
    }],
    updatedShippingMethods: [{
      type: Input
    }],
    couponCodesControl: [{
      type: Input
    }]
  });
})();
var OrderEditResultType;
(function(OrderEditResultType2) {
  OrderEditResultType2[OrderEditResultType2["Refund"] = 0] = "Refund";
  OrderEditResultType2[OrderEditResultType2["Payment"] = 1] = "Payment";
  OrderEditResultType2[OrderEditResultType2["PriceUnchanged"] = 2] = "PriceUnchanged";
  OrderEditResultType2[OrderEditResultType2["Cancel"] = 3] = "Cancel";
})(OrderEditResultType || (OrderEditResultType = {}));
var OrderEditsPreviewDialogComponent = class _OrderEditsPreviewDialogComponent {
  get priceDifference() {
    return this.order.totalWithTax - this.orderSnapshot.totalWithTax;
  }
  get amountToRefundTotal() {
    return this.refundablePayments.reduce((total, payment) => total + payment.amountToRefundControl.value, 0);
  }
  ngOnInit() {
    this.refundNote = this.modifyOrderInput.note || "";
    this.refundablePayments = getRefundablePayments(this.order.payments || []);
    this.refundablePayments.forEach((rp) => {
      rp.amountToRefundControl.addValidators(Validators.max(this.priceDifference * -1));
    });
    if (this.priceDifference < 0 && this.refundablePayments.length) {
      this.onPaymentSelected(this.refundablePayments[0], true);
    }
  }
  onPaymentSelected(payment, selected) {
    if (selected) {
      const outstandingRefundAmount = this.priceDifference * -1 - this.refundablePayments.filter((p) => p.id !== payment.id).reduce((total, p) => total + p.amountToRefundControl.value, 0);
      if (0 < outstandingRefundAmount) {
        payment.amountToRefundControl.setValue(Math.min(outstandingRefundAmount, payment.refundableAmount));
      }
    } else {
      payment.amountToRefundControl.setValue(0);
    }
  }
  refundsCoverDifference() {
    return this.priceDifference * -1 === this.amountToRefundTotal;
  }
  cancel() {
    this.resolveWith({
      result: OrderEditResultType.Cancel
    });
  }
  submit() {
    if (0 < this.priceDifference) {
      this.resolveWith({
        result: OrderEditResultType.Payment
      });
    } else if (this.priceDifference < 0) {
      this.resolveWith({
        result: OrderEditResultType.Refund,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        refunds: this.refundablePayments.filter((rp) => rp.selected && 0 < rp.amountToRefundControl.value).map((payment) => {
          return {
            reason: this.refundNote || this.modifyOrderInput.note,
            paymentId: payment.id,
            amount: payment.amountToRefundControl.value
          };
        })
      });
    } else {
      this.resolveWith({
        result: OrderEditResultType.PriceUnchanged
      });
    }
  }
  static {
    this.ɵfac = function OrderEditsPreviewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderEditsPreviewDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderEditsPreviewDialogComponent,
      selectors: [["vdr-order-edits-preview-dialog"]],
      standalone: false,
      decls: 14,
      vars: 18,
      consts: [["vdrDialogTitle", ""], [1, "order-edits-preview-table", 3, "order", "orderLineCustomFields"], [1, "payments-wrapper", "mb-2"], [1, "flex-spacer"], ["class", "", 3, "refundablePayments", "order", "paymentSelected", 4, "ngIf"], [3, "title"], [3, "orderSnapshot", "modifyOrderInput", "addedLines", "shippingAddressForm", "billingAddressForm", "couponCodesControl", "updatedShippingMethods"], [3, "label"], [3, "label", 4, "ngIf"], ["vdrDialogButtons", ""], [1, "", 3, "paymentSelected", "refundablePayments", "order"], ["name", "refundNote", "required", "", 3, "ngModelChange", "ngModel"], [1, "errors"], ["class", "mb-1", 3, "clrAlertType", "clrAlertClosable", 4, "ngIf"], [1, "modal-buttons"], [1, "", 3, "clrAlertType", "clrAlertClosable"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "mb-1", 3, "clrAlertType", "clrAlertClosable"]],
      template: function OrderEditsPreviewDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderEditsPreviewDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelement(1, "vdr-order-table", 1);
          ɵɵelementStart(2, "div", 2)(3, "div", 3);
          ɵɵtemplate(4, OrderEditsPreviewDialogComponent_vdr_payment_for_refund_selector_4_Template, 1, 2, "vdr-payment-for-refund-selector", 4);
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 3)(6, "vdr-card", 5);
          ɵɵpipe(7, "translate");
          ɵɵelement(8, "vdr-order-modification-summary", 6);
          ɵɵelementStart(9, "vdr-labeled-data", 7);
          ɵɵpipe(10, "translate");
          ɵɵtext(11);
          ɵɵelementEnd();
          ɵɵtemplate(12, OrderEditsPreviewDialogComponent_vdr_form_field_12_Template, 3, 4, "vdr-form-field", 8);
          ɵɵelementEnd()()();
          ɵɵtemplate(13, OrderEditsPreviewDialogComponent_ng_template_13_Template, 15, 18, "ng-template", 9);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("order", ctx.order)("orderLineCustomFields", ctx.orderLineCustomFields);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.priceDifference < 0);
          ɵɵadvance(2);
          ɵɵproperty("title", ɵɵpipeBind1(7, 14, "order.modify-order"));
          ɵɵadvance(2);
          ɵɵproperty("orderSnapshot", ctx.orderSnapshot)("modifyOrderInput", ctx.modifyOrderInput)("addedLines", ctx.addedLines)("shippingAddressForm", ctx.shippingAddressForm)("billingAddressForm", ctx.billingAddressForm)("couponCodesControl", ctx.couponCodesControl)("updatedShippingMethods", ctx.updatedShippingMethods);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(10, 16, "order.note"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.modifyOrderInput.note || "-", " ");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.priceDifference < 0);
        }
      },
      dependencies: [ClrAlert, ClrAlertItem, NgIf, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, LabeledDataComponent, CardComponent, OrderTableComponent, PaymentForRefundSelectorComponent, OrderModificationSummaryComponent, TranslatePipe, LocaleCurrencyPipe],
      styles: [".order-edits-preview-table .table-wrapper{max-width:initial!important}.payments-wrapper[_ngcontent-%COMP%]{display:flex;gap:calc(var(--space-unit) * 2)}.modal-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.6rem;gap:var(--clr-modal-footer-gap, .6rem)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderEditsPreviewDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-edits-preview-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'order.confirm-modifications' | translate }}</ng-template>
<vdr-order-table
    [order]="order"
    [orderLineCustomFields]="orderLineCustomFields"
    class="order-edits-preview-table"
></vdr-order-table>
<div class="payments-wrapper mb-2">
    <div class="flex-spacer">
        <vdr-payment-for-refund-selector
            *ngIf="priceDifference < 0"
            class=""
            [refundablePayments]="refundablePayments"
            (paymentSelected)="onPaymentSelected($event.payment, $event.selected)"
            [order]="order"
        ></vdr-payment-for-refund-selector>
    </div>
    <div class="flex-spacer">
        <vdr-card [title]="'order.modify-order' | translate">
            <vdr-order-modification-summary
                [orderSnapshot]="orderSnapshot"
                [modifyOrderInput]="modifyOrderInput"
                [addedLines]="addedLines"
                [shippingAddressForm]="shippingAddressForm"
                [billingAddressForm]="billingAddressForm"
                [couponCodesControl]="couponCodesControl"
                [updatedShippingMethods]="updatedShippingMethods"
            ></vdr-order-modification-summary>
            <vdr-labeled-data [label]="'order.note' | translate">
                {{ modifyOrderInput.note || '-' }}
            </vdr-labeled-data>
            <vdr-form-field
                [label]="'order.refund-cancellation-reason' | translate"
                *ngIf="priceDifference < 0"
            >
                <textarea [(ngModel)]="refundNote" name="refundNote" required></textarea>
            </vdr-form-field>
        </vdr-card>
    </div>
</div>
<ng-template vdrDialogButtons>
    <div>
        <div class="errors">
            <clr-alert
                class="mb-1"
                *ngIf="priceDifference < 0 && !refundsCoverDifference()"
                [clrAlertType]="'danger'"
                [clrAlertClosable]="false"
            >
                <clr-alert-item>
                    {{ 'order.refund-total-warning' | translate }}
                </clr-alert-item>
            </clr-alert>
        </div>
        <div class="modal-buttons">
            <clr-alert class="" [clrAlertType]="'primary'" [clrAlertClosable]="false">
                <clr-alert-item>
                    {{ 'order.modify-order-price-difference' | translate }}
                    {{ 0 < priceDifference ? '+' : ''
                    }}{{ priceDifference | localeCurrency : order.currencyCode }}
                </clr-alert-item>
            </clr-alert>
            <button type="button" class="btn" (click)="cancel()">
                {{ 'common.cancel' | translate }}
            </button>
            <button
                type="submit"
                (click)="submit()"
                [disabled]="priceDifference < 0 ? !refundsCoverDifference() : false"
                class="btn btn-primary"
            >
                {{ 'common.confirm' | translate }}
            </button>
        </div>
    </div>
</ng-template>
`,
      styles: ["::ng-deep .order-edits-preview-table .table-wrapper{max-width:initial!important}.payments-wrapper{display:flex;gap:calc(var(--space-unit) * 2)}.modal-buttons{display:flex;justify-content:flex-end;gap:.6rem;gap:var(--clr-modal-footer-gap, .6rem)}\n"]
    }]
  }], null, null);
})();
var OrderEditorComponent = class _OrderEditorComponent extends TypedBaseDetailComponent {
  constructor(dataService, notificationService, modalService, orderTransitionService, changeDetectorRef) {
    super();
    this.dataService = dataService;
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.orderTransitionService = orderTransitionService;
    this.changeDetectorRef = changeDetectorRef;
    this.detailForm = new UntypedFormGroup({});
    this.couponCodesControl = new FormControl([]);
    this.modifyOrderInput = {
      dryRun: true,
      orderId: "",
      addItems: [],
      adjustOrderLines: [],
      surcharges: [],
      note: "",
      refunds: [],
      updateShippingAddress: {},
      updateBillingAddress: {}
    };
    this.surchargeForm = new FormGroup({
      description: new FormControl("", Validators.minLength(1)),
      sku: new FormControl(""),
      price: new FormControl(0),
      priceIncludesTax: new FormControl(true),
      taxRate: new FormControl(0),
      taxDescription: new FormControl("")
    });
    this.shippingAddressForm = new FormGroup({
      fullName: new FormControl(""),
      company: new FormControl(""),
      streetLine1: new FormControl(""),
      streetLine2: new FormControl(""),
      city: new FormControl(""),
      province: new FormControl(""),
      postalCode: new FormControl(""),
      countryCode: new FormControl(""),
      phoneNumber: new FormControl("")
    });
    this.billingAddressForm = new FormGroup({
      fullName: new FormControl(""),
      company: new FormControl(""),
      streetLine1: new FormControl(""),
      streetLine2: new FormControl(""),
      city: new FormControl(""),
      province: new FormControl(""),
      postalCode: new FormControl(""),
      countryCode: new FormControl(""),
      phoneNumber: new FormControl("")
    });
    this.note = "";
    this.recalculateShipping = true;
    this.editingShippingAddress = false;
    this.editingBillingAddress = false;
    this.updatedShippingMethods = {};
    this.addedVariants = /* @__PURE__ */ new Map();
  }
  ngOnInit() {
    this.init();
    this.addressCustomFields = this.getCustomFieldConfig("Address");
    this.modifyOrderInput.orderId = this.route.snapshot.paramMap.get("id");
    this.orderLineCustomFields = this.getCustomFieldConfig("OrderLine");
    this.entity$.pipe(take(1)).subscribe((order) => {
      this.orderSnapshot = this.createOrderSnapshot(order);
      if (order.couponCodes.length) {
        this.couponCodesControl.setValue(order.couponCodes);
      }
      this.surchargeForm.reset();
      for (const [name, control] of Object.entries(this.shippingAddressForm.controls)) {
        control.setValue(order.shippingAddress?.[name]);
      }
      this.addAddressCustomFieldsFormGroup(this.shippingAddressForm, order.shippingAddress);
      for (const [name, control] of Object.entries(this.billingAddressForm.controls)) {
        control.setValue(order.billingAddress?.[name]);
      }
      this.addAddressCustomFieldsFormGroup(this.billingAddressForm, order.billingAddress);
      this.orderLineCustomFieldsFormArray = new UntypedFormArray([]);
      for (const line of order.lines) {
        const formGroup = new UntypedFormGroup({});
        for (const {
          name
        } of this.orderLineCustomFields) {
          formGroup.addControl(name, new UntypedFormControl(line.customFields[name]));
        }
        formGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
          let modifyRow = this.modifyOrderInput.adjustOrderLines.find((l) => l.orderLineId === line.id);
          if (!modifyRow) {
            modifyRow = {
              orderLineId: line.id,
              quantity: line.quantity
            };
            this.modifyOrderInput.adjustOrderLines.push(modifyRow);
          }
          if (this.orderLineCustomFields.length) {
            modifyRow.customFields = value;
          }
        });
        this.orderLineCustomFieldsFormArray.push(formGroup);
      }
    });
    this.addItemCustomFieldsFormArray = new UntypedFormArray([]);
    this.addItemCustomFieldsForm = new UntypedFormGroup({});
    for (const customField of this.orderLineCustomFields) {
      this.addItemCustomFieldsForm.addControl(customField.name, new UntypedFormControl());
    }
    this.availableCountries$ = this.dataService.settings.getAvailableCountries().mapSingle((result) => result.countries.items).pipe(shareReplay(1));
    this.dataService.order.getOrderHistory(this.id, {
      take: 1,
      sort: {
        createdAt: SortOrder.DESC
      },
      filter: {
        type: {
          eq: HistoryEntryType.ORDER_STATE_TRANSITION
        }
      }
    }).single$.subscribe(({
      order
    }) => {
      this.previousState = order?.history.items[0].data.from;
    });
    this.uiLanguage$ = this.dataService.client.uiState().stream$.pipe(map(({
      uiState
    }) => uiState.language));
  }
  ngOnDestroy() {
    this.destroy();
  }
  get addedLines() {
    const getSinglePriceValue = (price) => price.__typename === "SinglePrice" ? price.value : 0;
    return (this.modifyOrderInput.addItems || []).map((row) => {
      const variantInfo = this.addedVariants.get(row.productVariantId);
      if (variantInfo) {
        return {
          id: this.getIdForAddedItem(row),
          featuredAsset: variantInfo.productAsset,
          productVariant: {
            id: variantInfo.productVariantId,
            name: variantInfo.productVariantName,
            sku: variantInfo.sku
          },
          unitPrice: getSinglePriceValue(variantInfo.price),
          unitPriceWithTax: getSinglePriceValue(variantInfo.priceWithTax),
          quantity: row.quantity
        };
      }
    }).filter(import_shared_utils.notNullOrUndefined);
  }
  getIdForAddedItem(row) {
    return `added-${row.productVariantId}-${JSON.stringify(row.customFields || {})}`;
  }
  transitionToPriorState(order) {
    this.orderTransitionService.transitionToPreModifyingState(order.id, order.nextStates).subscribe((result) => {
      this.router.navigate([".."], {
        relativeTo: this.route
      });
    });
  }
  hasModifications() {
    const {
      addItems,
      adjustOrderLines,
      surcharges
    } = this.modifyOrderInput;
    return !!addItems?.length || !!surcharges?.length || !!adjustOrderLines?.length || this.shippingAddressForm.dirty && this.shippingAddressForm.valid || this.billingAddressForm.dirty && this.billingAddressForm.valid || this.couponCodesControl.dirty || Object.entries(this.updatedShippingMethods).length > 0;
  }
  isLineModified(line) {
    return !!this.modifyOrderInput.adjustOrderLines?.find((l) => l.orderLineId === line.id && l.quantity !== line.quantity);
  }
  getInitialLineQuantity(lineId) {
    const adjustedLine = this.modifyOrderInput.adjustOrderLines?.find((l) => l.orderLineId === lineId);
    if (adjustedLine) {
      return adjustedLine.quantity;
    }
    const addedLine = this.modifyOrderInput.addItems?.find((l) => this.getIdForAddedItem(l) === lineId);
    if (addedLine) {
      return addedLine.quantity ?? 1;
    }
    const line = this.orderSnapshot.lines.find((l) => l.id === lineId);
    return line ? line.quantity : 1;
  }
  updateLineQuantity(line, quantity) {
    const {
      adjustOrderLines
    } = this.modifyOrderInput;
    if (this.isAddedLine(line)) {
      const row = this.modifyOrderInput.addItems?.find((l) => l.productVariantId === line.productVariant.id);
      if (row) {
        row.quantity = +quantity;
      }
    } else {
      let row = adjustOrderLines?.find((l) => l.orderLineId === line.id);
      if (row && +quantity === line.quantity) {
        adjustOrderLines?.splice(adjustOrderLines?.indexOf(row), 1);
      }
      if (!row) {
        row = {
          orderLineId: line.id,
          quantity: +quantity
        };
        adjustOrderLines?.push(row);
      }
      row.quantity = +quantity;
    }
  }
  isAddedLine(line) {
    return line.id.startsWith("added-");
  }
  updateAddedItemQuantity(item, quantity) {
    const row = this.modifyOrderInput.addItems?.find((l) => l.productVariantId === item.productVariant.id);
    if (row) {
      row.quantity = +quantity;
    }
  }
  trackByProductVariantId(index, item) {
    return item.productVariant.id;
  }
  getSelectedItemPrice(result) {
    switch (result?.priceWithTax.__typename) {
      case "SinglePrice":
        return result.priceWithTax.value;
      default:
        return 0;
    }
  }
  addItemToOrder(result) {
    if (!result) {
      return;
    }
    const customFields = this.orderLineCustomFields.length ? this.addItemCustomFieldsForm.value : void 0;
    let row = this.modifyOrderInput.addItems?.find((l) => this.isMatchingAddItemRow(l, result, customFields));
    if (!row) {
      row = {
        productVariantId: result.productVariantId,
        quantity: 1
      };
      if (customFields) {
        row.customFields = customFields;
      }
      this.modifyOrderInput.addItems?.push(row);
    } else {
      row.quantity++;
    }
    if (customFields) {
      const formGroup = new UntypedFormGroup({});
      for (const [key, value] of Object.entries(customFields)) {
        formGroup.addControl(key, new UntypedFormControl(value));
      }
      this.addItemCustomFieldsFormArray.push(formGroup);
      formGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
        if (row) {
          row.customFields = value;
        }
      });
    }
    this.addItemCustomFieldsForm.reset({});
    this.addItemSelectedVariant = void 0;
    this.addedVariants.set(result.productVariantId, result);
  }
  getShippingLineDetails(shippingLine) {
    const updatedMethod = this.updatedShippingMethods[shippingLine.id];
    if (updatedMethod) {
      return {
        name: updatedMethod.name || updatedMethod.code,
        price: updatedMethod.priceWithTax
      };
    } else {
      return {
        name: shippingLine.shippingMethod.name || shippingLine.shippingMethod.code,
        price: shippingLine.discountedPriceWithTax
      };
    }
  }
  setShippingMethod(shippingLineId) {
    const currentShippingMethod = this.updatedShippingMethods[shippingLineId] ?? this.entity?.shippingLines.find((l) => l.id === shippingLineId)?.shippingMethod;
    if (!currentShippingMethod) {
      return;
    }
    this.dataService.order.getDraftOrderEligibleShippingMethods(this.id).mapSingle(({
      eligibleShippingMethodsForDraftOrder
    }) => eligibleShippingMethodsForDraftOrder).pipe(switchMap((methods) => this.modalService.fromComponent(SelectShippingMethodDialogComponent, {
      locals: {
        eligibleShippingMethods: methods,
        currencyCode: this.entity?.currencyCode,
        currentSelectionId: currentShippingMethod.id
      }
    }).pipe(map((result) => {
      if (result) {
        return methods.find((method) => method.id === result);
      }
    })))).subscribe((result) => {
      if (result) {
        this.updatedShippingMethods[shippingLineId] = result;
        this.changeDetectorRef.markForCheck();
      }
    });
  }
  isMatchingAddItemRow(row, result, customFields) {
    return row.productVariantId === result.productVariantId && JSON.stringify(row.customFields) === JSON.stringify(customFields);
  }
  removeAddedItem(id) {
    this.modifyOrderInput.addItems = this.modifyOrderInput.addItems?.filter((l) => {
      const itemId = this.getIdForAddedItem(l);
      return itemId !== id;
    });
  }
  getSurchargePrices(surcharge) {
    const priceWithTax = surcharge.priceIncludesTax ? surcharge.price : Math.round(surcharge.price * ((100 + (surcharge.taxRate || 0)) / 100));
    const price = surcharge.priceIncludesTax ? Math.round(surcharge.price / ((100 + (surcharge.taxRate || 0)) / 100)) : surcharge.price;
    return {
      price,
      priceWithTax
    };
  }
  addSurcharge(value) {
    this.modifyOrderInput.surcharges?.push(value);
    this.surchargeForm.reset({
      price: 0,
      priceIncludesTax: true,
      taxRate: 0
    });
  }
  removeSurcharge(index) {
    this.modifyOrderInput.surcharges?.splice(index, 1);
  }
  previewAndModify(order) {
    const modifyOrderInput = __spreadProps(__spreadValues({}, this.modifyOrderInput), {
      adjustOrderLines: this.modifyOrderInput.adjustOrderLines.map((line) => transformRelationCustomFieldInputs((0, import_simple_deep_clone.simpleDeepClone)(line), this.orderLineCustomFields))
    });
    const input = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, modifyOrderInput), this.billingAddressForm.dirty ? {
      updateBillingAddress: this.billingAddressForm.value
    } : {}), this.shippingAddressForm.dirty ? {
      updateShippingAddress: this.shippingAddressForm.value
    } : {}), {
      dryRun: true,
      couponCodes: this.couponCodesControl.dirty ? this.couponCodesControl.value : void 0,
      note: this.note ?? "",
      options: {
        recalculateShipping: this.recalculateShipping
      }
    });
    if (Object.entries(this.updatedShippingMethods).length) {
      input.shippingMethodIds = order.shippingLines.map((l) => this.updatedShippingMethods[l.id] ? this.updatedShippingMethods[l.id].id : l.shippingMethod.id);
    }
    this.dataService.order.modifyOrder(input).pipe(switchMap(({
      modifyOrder
    }) => {
      switch (modifyOrder.__typename) {
        case "Order":
          return this.modalService.fromComponent(OrderEditsPreviewDialogComponent, {
            size: "xl",
            closable: false,
            locals: {
              order: modifyOrder,
              orderSnapshot: this.orderSnapshot,
              orderLineCustomFields: this.orderLineCustomFields,
              modifyOrderInput: input,
              addedLines: this.addedLines,
              shippingAddressForm: this.shippingAddressForm,
              billingAddressForm: this.billingAddressForm,
              couponCodesControl: this.couponCodesControl,
              updatedShippingMethods: this.updatedShippingMethods
            }
          });
        case "InsufficientStockError":
        case "NegativeQuantityError":
        case "NoChangesSpecifiedError":
        case "OrderLimitError":
        case "OrderModificationStateError":
        case "PaymentMethodMissingError":
        case "RefundPaymentIdMissingError":
        case "CouponCodeLimitError":
        case "CouponCodeExpiredError":
        case "IneligibleShippingMethodError":
        case "CouponCodeInvalidError": {
          this.notificationService.error(modifyOrder.message);
          return of(false);
        }
        case null:
        case void 0:
          return of(false);
        default:
          (0, import_shared_utils.assertNever)(modifyOrder);
      }
    }), switchMap((result) => {
      if (!result || result.result === OrderEditResultType.Cancel) {
        return this.dataService.order.getOrder(this.id).mapSingle(() => false);
      } else {
        const wetRunInput = __spreadProps(__spreadValues({}, input), {
          dryRun: false
        });
        if (result.result === OrderEditResultType.Refund) {
          wetRunInput.refunds = result.refunds;
        }
        return this.dataService.order.modifyOrder(wetRunInput).pipe(switchMap(({
          modifyOrder
        }) => {
          if (modifyOrder.__typename === "Order") {
            const priceDelta = modifyOrder.totalWithTax - this.orderSnapshot.totalWithTax;
            const nextState = 0 < priceDelta ? "ArrangingAdditionalPayment" : this.previousState;
            return this.dataService.order.transitionToState(order.id, nextState).pipe(mapTo(true));
          } else {
            this.notificationService.error(modifyOrder.message);
            return EMPTY;
          }
        }));
      }
    })).subscribe((result) => {
      if (result) {
        this.router.navigate(["../"], {
          relativeTo: this.route
        });
      }
    });
  }
  addAddressCustomFieldsFormGroup(parentFormGroup, address) {
    if (address && this.addressCustomFields.length) {
      const addressCustomFieldsFormGroup = new UntypedFormGroup({});
      for (const customFieldDef of this.addressCustomFields) {
        const name = customFieldDef.name;
        const value = address.customFields?.[name];
        addressCustomFieldsFormGroup.addControl(name, new UntypedFormControl(value));
      }
      parentFormGroup.addControl("customFields", addressCustomFieldsFormGroup);
    }
  }
  createOrderSnapshot(order) {
    return {
      totalWithTax: order.totalWithTax,
      currencyCode: order.currencyCode,
      couponCodes: order.couponCodes,
      lines: [...order.lines].map((line) => __spreadValues({}, line)),
      shippingLines: [...order.shippingLines].map((line) => __spreadValues({}, line))
    };
  }
  setFormValues(entity, languageCode) {
  }
  static {
    this.ɵfac = function OrderEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderEditorComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(OrderTransitionService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderEditorComponent,
      selectors: [["vdr-order-editor"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 4,
      consts: [["imagePlaceholder", ""], [4, "ngIf"], [1, "flex", "clr-align-items-center"], [1, "btn", "btn-secondary", 3, "click"], [3, "title"], [3, "orderSnapshot", "modifyOrderInput", "addedLines", "shippingAddressForm", "billingAddressForm", "couponCodesControl", "updatedShippingMethods"], ["class", "no-modifications", 4, "ngIf"], [1, "summary-controls"], [3, "label"], ["name", "note", "required", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "items-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "ml-1"], [1, "btn", "btn-primary", "mt-2", 3, "click", "disabled"], [3, "control"], ["vdrCardControls", ""], [3, "address", 4, "ngIf"], [3, "formGroup", "availableCountries", "customFields", 4, "ngIf"], [3, "paddingX"], ["id", "modify-order", 1, "order-table", 3, "items"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "updated-at", 3, "heading", "hiddenByDefault"], ["id", "image", 3, "heading"], ["id", "product-name", 3, "heading", "optional"], ["id", "product-sku", 3, "heading"], ["id", "unit-price", 3, "heading"], ["id", "quantity", 3, "heading", "optional"], [3, "id", "heading", "hiddenByDefault", 4, "ngFor", "ngForOf"], [1, "mb-4", 3, "productSelected"], [1, "flex"], ["class", "flex mb-4", 4, "ngIf"], [1, "flex-spacer"], ["class", "btn btn-secondary", 3, "disabled", "click", 4, "ngIf"], ["class", "flex items-center", 4, "ngFor", "ngForOf"], [3, "submit", "formGroup"], [1, "form-grid"], ["for", "description", 3, "label"], ["id", "description", "type", "text", "formControlName", "description"], ["for", "sku", 3, "label"], ["id", "sku", "type", "text", "formControlName", "sku"], ["for", "price", 3, "label"], ["id", "price", "formControlName", "price", 3, "currencyCode"], ["for", "priceIncludesTax", 3, "label"], ["id", "priceIncludesTax", "type", "checkbox", "clrCheckbox", "", "formControlName", "priceIncludesTax"], ["for", "taxRate", 3, "label"], ["suffix", "%"], ["id", "taxRate", "type", "number", "min", "0", "max", "100", "formControlName", "taxRate"], ["for", "taxDescription", 3, "label"], ["id", "taxDescription", "type", "text", "formControlName", "taxDescription"], [1, "btn", "btn-secondary", "mt-2", 3, "disabled"], [1, "no-modifications"], [1, "button-small", 3, "click", "title"], ["shape", "edit"], [3, "address"], [3, "formGroup", "availableCountries", "customFields"], [1, "image-placeholder"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], [1, "placeholder"], ["shape", "image", "size", "48"], [1, "text-center"], [1, "net-price", 3, "title"], ["type", "number", "min", "0", 1, "draft-qty", "mr-1", 3, "input", "value"], ["class", "button-small", 3, "click", 4, "ngIf"], [3, "line", "payments"], [3, "line", "allOrderFulfillments", "orderState"], [1, "button-small", 3, "click"], ["shape", "trash"], [3, "id", "heading", "hiddenByDefault"], [3, "compact", "entityName", "customField", "customFieldsFormGroup"], [1, "flex", "mb-4"], ["class", "mr-4 add-item-thumb", 3, "src", 4, "ngIf"], [1, "mr-4"], [1, "mr-4", "add-item-thumb", 3, "src"], ["entityName", "Order", 3, "customFields", "customFieldsFormGroup"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "mx-1"]],
      template: function OrderEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block");
          ɵɵtemplate(1, OrderEditorComponent_vdr_action_bar_1_Template, 7, 3, "vdr-action-bar", 1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
          ɵɵtemplate(3, OrderEditorComponent_vdr_page_detail_layout_3_Template, 98, 111, "vdr-page-detail-layout", 1);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.entity$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.entity);
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, ClrCheckbox, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, FormGroupDirective, FormControlName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, AffixedInputComponent, CurrencyInputComponent, CustomFieldControlComponent, FormFieldComponent, FormFieldControlDirective, FormattedAddressComponent, ProductVariantSelectorComponent, AddressFormComponent, TabbedCustomFieldsComponent, DataTable2Component, DataTable2ColumnComponent, PageBlockComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, CardControlsDirective, LineFulfillmentComponent, LineRefundsComponent, CouponCodeSelectorComponent, OrderModificationSummaryComponent, AsyncPipe, TranslatePipe, CustomFieldLabelPipe, AssetPreviewPipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: [".order-table[_ngcontent-%COMP%]   .is-cancelled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-decoration:line-through;background-color:var(--color-component-bg-200)}.order-table[_ngcontent-%COMP%]   .sub-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:1px dashed var(--color-component-border-200)}.order-table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;border-top:1px dashed var(--color-component-border-200)}.order-table[_ngcontent-%COMP%]   td.custom-fields-row[_ngcontent-%COMP%]{border-top-style:dashed;border-top-color:var(--color-grey-200)}.order-table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--border-radius-img)}.order-table[_ngcontent-%COMP%]   .order-line-custom-fields[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.order-table[_ngcontent-%COMP%]   .order-line-custom-fields[_ngcontent-%COMP%]   .custom-field[_ngcontent-%COMP%]{text-align:start;max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;margin-inline-end:18px}.order-table[_ngcontent-%COMP%]   .draft-qty[_ngcontent-%COMP%]{max-width:48px}.order-table[_ngcontent-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]{background-color:var(--color-component-bg-100)}.order-table[_ngcontent-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]   .custom-field-ellipsis[_ngcontent-%COMP%]{color:var(--color-text-300)}.order-table[_ngcontent-%COMP%]   .net-price[_ngcontent-%COMP%]{font-size:11px;color:var(--color-text-300);line-height:14px}.order-table[_ngcontent-%COMP%]   .promotions-label[_ngcontent-%COMP%]{text-decoration:underline dotted var(--color-text-200);font-size:11px;margin-top:6px;cursor:pointer;text-transform:lowercase}.order-table[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}.order-table[_ngcontent-%COMP%]   .shipping-method-name[_ngcontent-%COMP%]{font-size:var(--font-size-xs);margin-inline-end:2px}.order-table[_ngcontent-%COMP%]   .order-placed-quantity[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--color-text-300);margin-inline-end:2px}.order-table[_ngcontent-%COMP%]   tr.modified[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:var(--color-warning-100)}.order-table[_ngcontent-%COMP%]   .order-line-custom-field[_ngcontent-%COMP%]{text-align:start}.add-item-thumb[_ngcontent-%COMP%]{max-width:50px}.no-modifications[_ngcontent-%COMP%]{color:var(--color-grey-400)}.summary-controls[_ngcontent-%COMP%]{border-top:1px solid var(--color-weight-200);margin-top:calc(var(--space-unit) * 2);padding-top:calc(var(--space-unit) * 1)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderEditorComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-editor",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar *ngIf="entity$ | async as order">
        <vdr-ab-left>
            <div class="flex clr-align-items-center"></div>
        </vdr-ab-left>

        <vdr-ab-right>
            <button class="btn btn-secondary" (click)="transitionToPriorState(order)">
                {{ 'order.cancel-modification' | translate }}
            </button>
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<vdr-page-detail-layout *ngIf="entity as order">
    <vdr-page-detail-sidebar>
        <vdr-card [title]="'order.modification-summary' | translate">
            <vdr-order-modification-summary
                [orderSnapshot]="orderSnapshot"
                [modifyOrderInput]="modifyOrderInput"
                [addedLines]="addedLines"
                [shippingAddressForm]="shippingAddressForm"
                [billingAddressForm]="billingAddressForm"
                [couponCodesControl]="couponCodesControl"
                [updatedShippingMethods]="updatedShippingMethods"
            ></vdr-order-modification-summary>

            <div *ngIf="!hasModifications()" class="no-modifications">
                {{ 'order.no-modifications-made' | translate }}
            </div>

            <div class="summary-controls">
                <vdr-form-field [label]="'order.note' | translate">
                    <textarea
                        [(ngModel)]="note"
                        name="note"
                        required
                        [disabled]="!hasModifications()"
                    ></textarea>
                </vdr-form-field>
                <label class="flex items-center">
                    <input
                        type="checkbox"
                        [(ngModel)]="recalculateShipping"
                        [disabled]="!hasModifications()"
                    />
                    <div class="ml-1">{{ 'order.modification-recalculate-shipping' | translate }}</div>
                </label>
                <button
                    class="btn btn-primary mt-2"
                    [disabled]="!hasModifications()"
                    (click)="previewAndModify(order)"
                >
                    {{ 'order.preview-changes' | translate }}
                </button>
            </div>
        </vdr-card>
        <vdr-card [title]="'order.set-coupon-codes' | translate">
            <vdr-coupon-code-selector [control]="couponCodesControl"></vdr-coupon-code-selector>
        </vdr-card>
        <vdr-card [title]="'order.shipping-address' | translate">
            <ng-template vdrCardControls>
                <button
                    class="button-small"
                    [title]="'order.edit-shipping-address' | translate"
                    (click)="editingShippingAddress = !editingShippingAddress"
                >
                    <clr-icon shape="edit"></clr-icon>
                </button>
            </ng-template>
            <vdr-formatted-address
                *ngIf="!editingShippingAddress"
                [address]="shippingAddressForm.value"
            ></vdr-formatted-address>
            <vdr-address-form
                *ngIf="editingShippingAddress"
                [formGroup]="shippingAddressForm"
                [availableCountries]="availableCountries$ | async"
                [customFields]="addressCustomFields"
            ></vdr-address-form>
        </vdr-card>
        <vdr-card [title]="'order.billing-address' | translate">
            <ng-template vdrCardControls>
                <button
                    class="button-small"
                    [title]="'order.edit-billing-address' | translate"
                    (click)="editingBillingAddress = !editingBillingAddress"
                >
                    <clr-icon shape="edit"></clr-icon>
                </button>
            </ng-template>
            <vdr-formatted-address
                *ngIf="!editingBillingAddress"
                [address]="billingAddressForm.value"
            ></vdr-formatted-address>
            <vdr-address-form
                *ngIf="editingBillingAddress"
                [formGroup]="billingAddressForm"
                [availableCountries]="availableCountries$ | async"
                [customFields]="addressCustomFields"
            ></vdr-address-form>
        </vdr-card>
    </vdr-page-detail-sidebar>

    <vdr-page-block>
        <vdr-card [paddingX]="false">
            <vdr-data-table-2 id="modify-order" class="order-table" [items]="order.lines.concat(addedLines)">
                <!-- Here we define all the available columns -->
                <vdr-dt2-column id="id" [heading]="'common.id' | translate" [hiddenByDefault]="true">
                    <ng-template let-line="item">
                        {{ line.id }}
                    </ng-template>
                </vdr-dt2-column>
                <vdr-dt2-column
                    id="created-at"
                    [heading]="'common.created-at' | translate"
                    [hiddenByDefault]="true"
                >
                    <ng-template let-line="item">
                        {{ line.createdAt | localeDate : 'short' }}
                    </ng-template>
                </vdr-dt2-column>
                <vdr-dt2-column
                    id="updated-at"
                    [heading]="'common.updated-at' | translate"
                    [hiddenByDefault]="true"
                >
                    <ng-template let-line="item">
                        {{ line.updatedAt | localeDate : 'short' }}
                    </ng-template>
                </vdr-dt2-column>
                <vdr-dt2-column [heading]="'common.image' | translate" id="image">
                    <ng-template let-line="item">
                        <div class="image-placeholder">
                            <img
                                *ngIf="line.featuredAsset as asset; else imagePlaceholder"
                                [src]="asset | assetPreview : 'tiny'"
                            />
                            <ng-template #imagePlaceholder>
                                <div class="placeholder">
                                    <clr-icon shape="image" size="48"></clr-icon>
                                </div>
                            </ng-template>
                        </div>
                    </ng-template>
                </vdr-dt2-column>
                <vdr-dt2-column
                    id="product-name"
                    [heading]="'order.product-name' | translate"
                    [optional]="false"
                >
                    <ng-template let-line="item">
                        {{ line.productVariant.name }}
                    </ng-template>
                </vdr-dt2-column>
                <vdr-dt2-column id="product-sku" [heading]="'order.product-sku' | translate">
                    <ng-template let-line="item">
                        {{ line.productVariant.sku }}
                    </ng-template>
                </vdr-dt2-column>
                <vdr-dt2-column id="unit-price" [heading]="'order.unit-price' | translate">
                    <ng-template let-line="item">
                        <div class="text-center">
                            <div>{{ line.unitPriceWithTax | localeCurrency : order.currencyCode }}</div>
                            <div class="net-price" [title]="'order.net-price' | translate">
                                {{ line.unitPrice | localeCurrency : order.currencyCode }}
                            </div>
                        </div>
                    </ng-template>
                </vdr-dt2-column>
                <vdr-dt2-column id="quantity" [heading]="'order.quantity' | translate" [optional]="false">
                    <ng-template let-line="item">
                        <input
                            type="number"
                            class="draft-qty mr-1"
                            min="0"
                            [value]="getInitialLineQuantity(line.id)"
                            (input)="updateLineQuantity(line, $event.target.value)"
                        />
                        <button
                            class="button-small"
                            *ngIf="isAddedLine(line)"
                            (click)="removeAddedItem(line.id)"
                        >
                            <clr-icon shape="trash"></clr-icon>
                        </button>
                        <vdr-line-refunds [line]="line" [payments]="order.payments"></vdr-line-refunds>
                        <vdr-line-fulfillment
                            [line]="line"
                            [allOrderFulfillments]="order.fulfillments"
                            [orderState]="order.state"
                        ></vdr-line-fulfillment>
                    </ng-template>
                </vdr-dt2-column>
                <vdr-dt2-column
                    *ngFor="let customField of orderLineCustomFields"
                    [id]="customField.name"
                    [heading]="customField | customFieldLabel : (uiLanguage$ | async)"
                    [hiddenByDefault]="true"
                >
                    <ng-template let-line="item" let-index="index">
                        <vdr-custom-field-control
                            [compact]="true"
                            [entityName]="'OrderLine'"
                            [customField]="customField"
                            [customFieldsFormGroup]="orderLineCustomFieldsFormArray.at(index)"
                        />
                    </ng-template>
                </vdr-dt2-column>
            </vdr-data-table-2>
        </vdr-card>
        <vdr-card [title]="'order.add-item-to-order' | translate">
            <vdr-product-variant-selector class="mb-4" (productSelected)="addItemSelectedVariant = $event">
            </vdr-product-variant-selector>
            <div class="flex">
                <div>
                    <div *ngIf="addItemSelectedVariant" class="flex mb-4">
                        <img
                            *ngIf="addItemSelectedVariant.productAsset as asset"
                            [src]="asset | assetPreview : 'tiny'"
                            class="mr-4 add-item-thumb"
                        />
                        <div>
                            <strong class="mr-4">{{ addItemSelectedVariant.productVariantName }}</strong>
                            <small>{{ addItemSelectedVariant.sku }}</small>
                            <div>
                                {{
                                    getSelectedItemPrice(addItemSelectedVariant)
                                        | localeCurrency : order.currencyCode
                                }}
                            </div>
                        </div>
                    </div>
                    <div *ngIf="addItemSelectedVariant">
                        <vdr-tabbed-custom-fields
                            entityName="Order"
                            [customFields]="orderLineCustomFields"
                            [customFieldsFormGroup]="addItemCustomFieldsForm"
                        ></vdr-tabbed-custom-fields>
                    </div>
                </div>
                <div class="flex-spacer"></div>
                <div>
                    <button
                        *ngIf="addItemSelectedVariant"
                        class="btn btn-secondary"
                        [disabled]="!addItemSelectedVariant || addItemCustomFieldsForm.invalid"
                        (click)="addItemToOrder(addItemSelectedVariant)"
                    >
                        {{ 'order.add-item-to-order' | translate }}
                    </button>
                </div>
            </div>
        </vdr-card>
        <vdr-card [title]="'order.shipping' | translate">
            <div *ngFor="let shippingLine of order.shippingLines" class="flex items-center">
                <ng-container *ngIf="getShippingLineDetails(shippingLine) as details">
                    <div>{{ details.name }}:</div>
                    <div class="mx-1">
                        {{ details.price | localeCurrency : order.currencyCode }}
                    </div>
                    <button class="button-small" (click)="setShippingMethod(shippingLine.id)">
                        {{ 'order.set-shipping-method' | translate }}
                    </button>
                </ng-container>
            </div>
        </vdr-card>
        <vdr-card [title]="'order.add-surcharge' | translate">
            <form [formGroup]="surchargeForm" (submit)="addSurcharge(surchargeForm.value)">
                <div class="form-grid">
                    <vdr-form-field [label]="'common.description' | translate" for="description"
                        ><input id="description" type="text" formControlName="description"
                    /></vdr-form-field>
                    <vdr-form-field [label]="'order.product-sku' | translate" for="sku"
                        ><input id="sku" type="text" formControlName="sku"
                    /></vdr-form-field>
                    <vdr-form-field [label]="'common.price' | translate" for="price">
                        <vdr-currency-input
                            [currencyCode]="order.currencyCode"
                            id="price"
                            formControlName="price"
                        ></vdr-currency-input>
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="
                            'catalog.price-includes-tax-at'
                                | translate : { rate: surchargeForm.get('taxRate')?.value ?? 0 }
                        "
                        for="priceIncludesTax"
                        ><input
                            id="priceIncludesTax"
                            type="checkbox"
                            clrCheckbox
                            formControlName="priceIncludesTax"
                    /></vdr-form-field>
                    <vdr-form-field [label]="'order.tax-rate' | translate" for="taxRate">
                        <vdr-affixed-input suffix="%"
                            ><input id="taxRate" type="number" min="0" max="100" formControlName="taxRate"
                        /></vdr-affixed-input>
                    </vdr-form-field>
                    <vdr-form-field [label]="'order.tax-description' | translate" for="taxDescription"
                        ><input id="taxDescription" type="text" formControlName="taxDescription"
                    /></vdr-form-field>
                </div>
                <button
                    class="btn btn-secondary mt-2"
                    [disabled]="
                        surchargeForm.invalid ||
                        surchargeForm.pristine ||
                        surchargeForm.get('price')?.value === 0 ||
                        !surchargeForm.get('description')?.value
                    "
                >
                    {{ 'order.add-surcharge' | translate }}
                </button>
            </form>
        </vdr-card>
    </vdr-page-block>
</vdr-page-detail-layout>
`,
      styles: [".order-table .is-cancelled td{text-decoration:line-through;background-color:var(--color-component-bg-200)}.order-table .sub-total td{border-top:1px dashed var(--color-component-border-200)}.order-table .total td{font-weight:700;border-top:1px dashed var(--color-component-border-200)}.order-table td.custom-fields-row{border-top-style:dashed;border-top-color:var(--color-grey-200)}.order-table img{border-radius:var(--border-radius-img)}.order-table .order-line-custom-fields{display:flex;flex-wrap:wrap}.order-table .order-line-custom-fields .custom-field{text-align:start;max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;margin-inline-end:18px}.order-table .draft-qty{max-width:48px}.order-table .order-line-custom-field{background-color:var(--color-component-bg-100)}.order-table .order-line-custom-field .custom-field-ellipsis{color:var(--color-text-300)}.order-table .net-price{font-size:11px;color:var(--color-text-300);line-height:14px}.order-table .promotions-label{text-decoration:underline dotted var(--color-text-200);font-size:11px;margin-top:6px;cursor:pointer;text-transform:lowercase}.order-table .thumb img{width:50px;height:50px}.order-table .shipping-method-name{font-size:var(--font-size-xs);margin-inline-end:2px}.order-table .order-placed-quantity{text-decoration:line-through;color:var(--color-text-300);margin-inline-end:2px}.order-table tr.modified td{background-color:var(--color-warning-100)}.order-table .order-line-custom-field{text-align:start}.add-item-thumb{max-width:50px}.no-modifications{color:var(--color-grey-400)}.summary-controls{border-top:1px solid var(--color-weight-200);margin-top:calc(var(--space-unit) * 2);padding-top:calc(var(--space-unit) * 1)}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: NotificationService
  }, {
    type: ModalService
  }, {
    type: OrderTransitionService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var OrderListComponent = class _OrderListComponent extends TypedBaseListComponent {
  constructor(serverConfigService, channelService) {
    super();
    this.serverConfigService = serverConfigService;
    this.channelService = channelService;
    this.dataTableListId = "order-list";
    this.orderStates = this.serverConfigService.getOrderProcessStates().map((item) => item.name);
    this.OrderType = OrderType;
    this.customFields = this.getCustomFieldConfig("Order");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "active",
      type: {
        kind: "boolean"
      },
      label: marker("order.filter-is-active"),
      filterField: "active"
    }).addFilter({
      name: "totalWithTax",
      type: {
        kind: "number",
        inputType: "currency",
        currencyCode: "USD"
      },
      label: marker("order.total"),
      filterField: "totalWithTax"
    }).addFilter({
      name: "state",
      type: {
        kind: "select",
        options: this.orderStates.map((s) => ({
          value: s,
          label: getOrderStateTranslationToken(s)
        }))
      },
      label: marker("order.state"),
      filterField: "state"
    }).addFilter({
      name: "type",
      type: {
        kind: "select",
        options: [{
          value: OrderType.Regular,
          label: marker("order.order-type-regular")
        }, {
          value: OrderType.Aggregate,
          label: marker("order.order-type-aggregate")
        }, {
          value: OrderType.Seller,
          label: marker("order.order-type-seller")
        }]
      },
      label: marker("order.order-type"),
      filterField: "type"
    }).addFilter({
      name: "orderPlacedAt",
      type: {
        kind: "dateRange"
      },
      label: marker("order.placed-at"),
      filterField: "orderPlacedAt"
    }).addFilter({
      name: "customerLastName",
      type: {
        kind: "text"
      },
      label: marker("customer.last-name"),
      filterField: "customerLastName"
    }).addFilter({
      name: "transactionId",
      type: {
        kind: "text"
      },
      label: marker("order.transaction-id"),
      filterField: "transactionId"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("updatedAt", "DESC").addSort({
      name: "id"
    }).addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "orderPlacedAt"
    }).addSort({
      name: "customerLastName"
    }).addSort({
      name: "state"
    }).addSort({
      name: "totalWithTax"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    this.canCreateDraftOrder = false;
    this.activeChannelIsDefaultChannel = false;
    super.configure({
      document: GetOrderListDocument,
      getItems: (result) => result.orders,
      setVariables: (skip, take2) => this.createQueryOptions(skip, take2, this.searchTermControl.value),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
    this.canCreateDraftOrder = !!this.serverConfigService.getOrderProcessStates().find((state) => state.name === "Created")?.to.includes("Draft");
  }
  ngOnInit() {
    super.ngOnInit();
    const isDefaultChannel$ = this.channelService.defaultChannelIsActive$.pipe(tap((isDefault) => this.activeChannelIsDefaultChannel = isDefault));
    super.refreshListOnChanges(this.filters.valueChanges, this.sorts.valueChanges, isDefaultChannel$);
  }
  createQueryOptions(skip, take2, searchTerm) {
    let filterInput = this.filters.createFilterInput();
    if (this.activeChannelIsDefaultChannel) {
      filterInput = __spreadValues({}, filterInput ?? {});
    }
    if (searchTerm) {
      filterInput = {
        code: {
          contains: searchTerm
        },
        customerLastName: {
          contains: searchTerm
        },
        transactionId: {
          contains: searchTerm
        }
      };
    }
    return {
      options: {
        skip,
        take: take2,
        filter: __spreadValues({}, filterInput ?? {}),
        filterOperator: searchTerm ? LogicalOperator.OR : LogicalOperator.AND,
        sort: this.sorts.createSortInput()
      }
    };
  }
  getShippingNames(order) {
    if (order.shippingLines.length) {
      return order.shippingLines.map((shippingLine) => shippingLine.shippingMethod.name).join(", ");
    } else {
      return "";
    }
  }
  static {
    this.ɵfac = function OrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderListComponent)(ɵɵdirectiveInject(ServerConfigService), ɵɵdirectiveInject(ChannelService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderListComponent,
      selectors: [["vdr-order-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 45,
      vars: 61,
      consts: [["locationId", "order-list"], [4, "ngIf"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "order-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault", "sort"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "code", 3, "heading", "optional"], ["id", "customer", 3, "heading", "sort"], ["id", "order-type", 3, "heading", "hiddenByDefault"], ["id", "state", 3, "heading", "sort"], ["id", "total", 3, "heading", "sort"], ["id", "updated-at", 3, "heading"], ["id", "placed-at", 3, "heading", "sort"], ["id", "shipping", 3, "heading"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], ["class", "btn", 3, "routerLink", 4, "vdrIfPermissions"], [1, "btn", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "click", "customer"], [3, "state"], [3, "customField", "sorts"]],
      template: function OrderListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-right");
          ɵɵelement(3, "vdr-action-bar-items", 0);
          ɵɵtemplate(4, OrderListComponent_ng_container_4_Template, 2, 2, "ng-container", 1);
          ɵɵelement(5, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(6, "vdr-data-table-2", 2);
          ɵɵpipe(7, "async");
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵlistener("pageChange", function OrderListComponent_Template_vdr_data_table_2_pageChange_6_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function OrderListComponent_Template_vdr_data_table_2_itemsPerPageChange_6_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function OrderListComponent_Template_vdr_data_table_2_visibleColumnsChange_6_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(11, "vdr-bulk-action-menu", 3)(12, "vdr-dt2-search", 4);
          ɵɵpipe(13, "translate");
          ɵɵelementStart(14, "vdr-dt2-column", 5);
          ɵɵpipe(15, "translate");
          ɵɵtemplate(16, OrderListComponent_ng_template_16_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(17, "vdr-dt2-column", 6);
          ɵɵpipe(18, "translate");
          ɵɵtemplate(19, OrderListComponent_ng_template_19_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(20, "vdr-dt2-column", 7);
          ɵɵpipe(21, "translate");
          ɵɵtemplate(22, OrderListComponent_ng_template_22_Template, 4, 6, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(23, "vdr-dt2-column", 8);
          ɵɵpipe(24, "translate");
          ɵɵtemplate(25, OrderListComponent_ng_template_25_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(26, "vdr-dt2-column", 9);
          ɵɵpipe(27, "translate");
          ɵɵtemplate(28, OrderListComponent_ng_template_28_Template, 3, 3, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(29, "vdr-dt2-column", 10);
          ɵɵpipe(30, "translate");
          ɵɵtemplate(31, OrderListComponent_ng_template_31_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(32, "vdr-dt2-column", 11);
          ɵɵpipe(33, "translate");
          ɵɵtemplate(34, OrderListComponent_ng_template_34_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(35, "vdr-dt2-column", 12);
          ɵɵpipe(36, "translate");
          ɵɵtemplate(37, OrderListComponent_ng_template_37_Template, 2, 3, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(38, "vdr-dt2-column", 13);
          ɵɵpipe(39, "translate");
          ɵɵtemplate(40, OrderListComponent_ng_template_40_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(41, "vdr-dt2-column", 14);
          ɵɵpipe(42, "translate");
          ɵɵtemplate(43, OrderListComponent_ng_template_43_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(44, OrderListComponent_vdr_dt2_custom_field_column_44_Template, 1, 2, "vdr-dt2-custom-field-column", 15);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ctx.canCreateDraftOrder);
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(7, 31, ctx.items$))("itemsPerPage", ɵɵpipeBind1(8, 33, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(9, 35, ctx.totalItems$))("currentPage", ɵɵpipeBind1(10, 37, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(13, 39, "order.search-by-order-filters"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(15, 41, "common.id"))("hiddenByDefault", true)("sort", ctx.sorts.get("id"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(18, 43, "common.created-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(21, 45, "common.code"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(24, 47, "order.customer"))("sort", ctx.sorts.get("customerLastName"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(27, 49, "order.order-type"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(30, 51, "order.state"))("sort", ctx.sorts.get("state"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(33, 53, "order.total"))("sort", ctx.sorts.get("totalWithTax"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(36, 55, "common.updated-at"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(39, 57, "order.placed-at"))("sort", ctx.sorts.get("orderPlacedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(42, 59, "order.shipping"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, CustomerLabelComponent, OrderStateLabelComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, TimeAgoPipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: [".search-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:baseline;width:100%;max-width:100vw;margin-bottom:6px}.filter-presets[_ngcontent-%COMP%]{max-width:90vw;overflow-x:auto}.search-input[_ngcontent-%COMP%]{margin-top:6px;min-width:300px}.custom-filters[_ngcontent-%COMP%]{overflow:hidden;max-height:0;padding-bottom:6px}.custom-filters.expanded[_ngcontent-%COMP%]{max-height:initial}.custom-filters[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.custom-filters[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}ng-select[_ngcontent-%COMP%]{flex:1;min-width:200px;height:36px}ng-select[_ngcontent-%COMP%]     .ng-select-container{height:36px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="order-list" />
            <ng-container *ngIf="canCreateDraftOrder">
                <a class="btn" *vdrIfPermissions="['CreateOrder']" [routerLink]="['./draft/create']">
                    <clr-icon shape="plus"></clr-icon>
                    {{ 'catalog.create-draft-order' | translate }}
                </a>
            </ng-container>
            <vdr-action-bar-dropdown-menu locationId="order-list" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<vdr-data-table-2
    class="mt-2"
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
        locationId="order-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    ></vdr-bulk-action-menu>
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'order.search-by-order-filters' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true" [sort]="sorts.get('id')">
        <ng-template let-order="item">
            {{ order.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.created-at' | translate" id="created-at" [hiddenByDefault]="true">
        <ng-template let-order="item">
            {{ order.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.code' | translate" id="code" [optional]="false">
        <ng-template let-order="item">
            <a class="button-ghost" [routerLink]="order.state === 'Draft' ? ['./draft', order.id] : ['./', order.id]"
                ><span>{{ order.code }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.customer' | translate" id="customer" [sort]="sorts.get('customerLastName')">
        <ng-template let-order="item">
            <vdr-customer-label
                [customer]="order.customer"
                (click)="$event.stopPropagation()"
            ></vdr-customer-label>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.order-type' | translate" id="order-type" [hiddenByDefault]="true">
        <ng-template let-order="item">
            <vdr-chip *ngIf="order.type === OrderType.Regular">{{ 'order.order-type-regular' | translate }}</vdr-chip>
            <vdr-chip *ngIf="order.type === OrderType.Aggregate">{{ 'order.order-type-aggregate' | translate }}</vdr-chip>
            <vdr-chip *ngIf="order.type === OrderType.Seller">{{ 'order.order-type-seller' | translate }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.state' | translate" id="state" [sort]="sorts.get('state')">
        <ng-template let-order="item">
            <vdr-order-state-label [state]="order.state"></vdr-order-state-label>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.total' | translate" id="total" [sort]="sorts.get('totalWithTax')">
        <ng-template let-order="item">
            {{ order.totalWithTax | localeCurrency : order.currencyCode }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.updated-at' | translate" id="updated-at">
        <ng-template let-order="item">
            {{ order.updatedAt | timeAgo }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.placed-at' | translate" id="placed-at" [sort]="sorts.get('orderPlacedAt')">
        <ng-template let-order="item">
            {{ order.orderPlacedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.shipping' | translate" id="shipping">
        <ng-template let-order="item">
            {{ getShippingNames(order) }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let customField of customFields"
        [customField]="customField"
        [sorts]="sorts"
    />
</vdr-data-table-2>
`,
      styles: [".search-form{display:flex;flex-direction:column;align-items:baseline;width:100%;max-width:100vw;margin-bottom:6px}.filter-presets{max-width:90vw;overflow-x:auto}.search-input{margin-top:6px;min-width:300px}.custom-filters{overflow:hidden;max-height:0;padding-bottom:6px}.custom-filters.expanded{max-height:initial}.custom-filters>form{display:flex;flex-direction:column;align-items:center}.custom-filters>form>div{width:100%}ng-select{flex:1;min-width:200px;height:36px}ng-select ::ng-deep .ng-select-container{height:36px}\n"]
    }]
  }], () => [{
    type: ServerConfigService
  }, {
    type: ChannelService
  }], null);
})();
var RefundDetailComponent = class _RefundDetailComponent {
  static {
    this.ɵfac = function RefundDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefundDetailComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RefundDetailComponent,
      selectors: [["vdr-refund-detail"]],
      inputs: {
        refund: "refund",
        currencyCode: "currencyCode"
      },
      standalone: false,
      decls: 8,
      vars: 12,
      consts: [[3, "label"], [3, "label", 4, "ngIf"], [3, "value"]],
      template: function RefundDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-labeled-data", 0);
          ɵɵpipe(1, "translate");
          ɵɵtext(2);
          ɵɵpipe(3, "localeCurrency");
          ɵɵelementEnd();
          ɵɵtemplate(4, RefundDetailComponent_vdr_labeled_data_4_Template, 3, 4, "vdr-labeled-data", 1);
          ɵɵelementStart(5, "vdr-labeled-data", 0);
          ɵɵpipe(6, "translate");
          ɵɵelement(7, "vdr-object-tree", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("label", ɵɵpipeBind1(1, 5, "order.amount"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 7, ctx.refund.total, ctx.currencyCode), "\n");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.refund.transactionId);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(6, 10, "order.payment-metadata"));
          ɵɵadvance(2);
          ɵɵproperty("value", ctx.refund.metadata);
        }
      },
      dependencies: [NgIf, LabeledDataComponent, ObjectTreeComponent, TranslatePipe, LocaleCurrencyPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-refund-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-labeled-data [label]="'order.amount' | translate">
    {{ refund.total | localeCurrency: currencyCode }}
</vdr-labeled-data>
<vdr-labeled-data *ngIf="refund.transactionId" [label]="'order.transaction-id' | translate">
    {{ refund.transactionId }}
</vdr-labeled-data>
<vdr-labeled-data [label]="'order.payment-metadata' | translate">
    <vdr-object-tree [value]="refund.metadata"></vdr-object-tree>
</vdr-labeled-data>
`
    }]
  }], null, {
    refund: [{
      type: Input
    }],
    currencyCode: [{
      type: Input
    }]
  });
})();
var GET_CUSTOMER_ADDRESSES = gql`
    query GetCustomerAddresses($customerId: ID!) {
        customer(id: $customerId) {
            id
            addresses {
                ...Address
            }
        }
    }
    ${ADDRESS_FRAGMENT}
`;
var GET_ORDER_STATE = gql`
    query GetOrderState($id: ID!) {
        order(id: $id) {
            id
            state
        }
    }
`;
var OrderGuard = class _OrderGuard {
  constructor(dataService, router) {
    this.dataService = dataService;
    this.router = router;
  }
  canActivate(route, state) {
    const isDraft = state.url.includes("orders/draft");
    const isModifying = state.url.includes("/modify");
    const id = route.paramMap.get("id");
    if (isDraft) {
      if (id === "create") {
        return this.dataService.order.createDraftOrder().pipe(map(({
          createDraftOrder
        }) => this.router.parseUrl(`/orders/draft/${createDraftOrder.id}`)));
      } else {
        return true;
      }
    } else {
      return this.dataService.query(GET_ORDER_STATE, {
        id
      }).single$.pipe(map(({
        order
      }) => {
        if (order?.state === "Modifying" && !isModifying) {
          return this.router.parseUrl(`/orders/${id}/modify`);
        } else {
          return true;
        }
      }));
    }
  }
  static {
    this.ɵfac = function OrderGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderGuard)(ɵɵinject(DataService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderGuard,
      factory: _OrderGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: DataService
  }, {
    type: Router
  }], null);
})();
var createRoutes = (pageService) => [{
  path: "",
  component: PageComponent,
  data: {
    locationId: "order-list",
    breadcrumb: marker("breadcrumb.orders")
  },
  children: pageService.getPageTabRoutes("order-list")
}, {
  path: "draft/:id",
  component: PageComponent,
  canActivate: [OrderGuard],
  data: {
    locationId: "draft-order-detail",
    breadcrumb: {
      label: marker("breadcrumb.orders"),
      link: ["../"]
    }
  },
  children: pageService.getPageTabRoutes("draft-order-detail")
}, {
  path: ":id",
  component: PageComponent,
  canActivate: [OrderGuard],
  data: {
    locationId: "order-detail",
    breadcrumb: {
      label: marker("breadcrumb.orders"),
      link: ["../"]
    }
  },
  children: pageService.getPageTabRoutes("order-detail")
}, {
  path: ":aggregateOrderId/seller-orders/:id",
  component: PageComponent,
  canActivate: [OrderGuard],
  data: {
    locationId: "order-detail",
    breadcrumb: {
      label: marker("breadcrumb.orders"),
      link: ["../"]
    }
  },
  children: pageService.getPageTabRoutes("order-detail")
}, {
  path: ":id/modify",
  component: PageComponent,
  canActivate: [OrderGuard],
  data: {
    locationId: "modify-order",
    breadcrumb: {
      label: marker("breadcrumb.orders"),
      link: ["../"]
    }
  },
  children: pageService.getPageTabRoutes("modify-order")
}];
var OrderModule = class _OrderModule {
  static {
    this.hasRegisteredTabsAndBulkActions = false;
  }
  constructor(pageService) {
    if (_OrderModule.hasRegisteredTabsAndBulkActions) {
      return;
    }
    pageService.registerPageTab({
      priority: 0,
      location: "order-list",
      tab: marker("order.orders"),
      route: "",
      component: OrderListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "order-detail",
      tab: marker("order.order"),
      route: "",
      component: detailComponentWithResolver({
        component: OrderDetailComponent,
        query: OrderDetailQueryDocument,
        entityKey: "order",
        getBreadcrumbs: (entity) => entity?.type !== OrderType.Seller || !entity?.aggregateOrder ? [{
          label: `${entity?.code}`,
          link: [entity?.id]
        }] : [{
          label: `${entity?.aggregateOrder?.code}`,
          link: ["/orders/", entity?.aggregateOrder?.id]
        }, {
          label: marker("breadcrumb.seller-orders"),
          link: ["/orders/", entity?.aggregateOrder?.id]
        }, {
          label: `${entity?.code}`,
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "draft-order-detail",
      tab: marker("order.order"),
      route: "",
      component: detailComponentWithResolver({
        component: DraftOrderDetailComponent,
        query: OrderDetailQueryDocument,
        entityKey: "order",
        getBreadcrumbs: (entity) => [{
          label: marker("order.draft-order"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "modify-order",
      tab: marker("order.order"),
      route: "",
      component: detailComponentWithResolver({
        component: OrderEditorComponent,
        query: OrderDetailQueryDocument,
        entityKey: "order",
        getBreadcrumbs: (entity) => [{
          label: entity?.code || "order",
          link: ["/orders/", entity?.id]
        }, {
          label: marker("breadcrumb.modifying-order"),
          link: [entity?.id]
        }]
      })
    });
    _OrderModule.hasRegisteredTabsAndBulkActions = true;
  }
  static {
    this.ɵfac = function OrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderModule)(ɵɵinject(PageService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderModule,
      declarations: [OrderListComponent, OrderDetailComponent, FulfillOrderDialogComponent, LineFulfillmentComponent, RefundOrderDialogComponent, CancelOrderDialogComponent, PaymentStateLabelComponent, LineRefundsComponent, OrderPaymentCardComponent, RefundStateLabelComponent, SettleRefundDialogComponent, OrderHistoryComponent, FulfillmentDetailComponent, PaymentDetailComponent, SimpleItemListComponent, OrderCustomFieldsCardComponent, OrderProcessGraphComponent, OrderProcessNodeComponent, OrderProcessEdgeComponent, OrderProcessGraphDialogComponent, FulfillmentStateLabelComponent, FulfillmentCardComponent, OrderEditorComponent, OrderTableComponent, OrderEditsPreviewDialogComponent, ModificationDetailComponent, AddManualPaymentDialogComponent, OrderStateSelectDialogComponent, DraftOrderDetailComponent, DraftOrderVariantSelectorComponent, SelectCustomerDialogComponent, SelectAddressDialogComponent, CouponCodeSelectorComponent, SelectShippingMethodDialogComponent, OrderHistoryEntryHostComponent, SellerOrdersCardComponent, OrderDataTableComponent, OrderTotalColumnComponent, PaymentForRefundSelectorComponent, OrderModificationSummaryComponent, RefundDetailComponent],
      imports: [SharedModule, RouterModule],
      exports: [OrderCustomFieldsCardComponent]
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
      imports: [SharedModule, RouterModule.forChild([])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, RouterModule.forChild([])],
      providers: [{
        provide: ROUTES,
        useFactory: (pageService) => createRoutes(pageService),
        multi: true,
        deps: [PageService]
      }],
      declarations: [OrderListComponent, OrderDetailComponent, FulfillOrderDialogComponent, LineFulfillmentComponent, RefundOrderDialogComponent, CancelOrderDialogComponent, PaymentStateLabelComponent, LineRefundsComponent, OrderPaymentCardComponent, RefundStateLabelComponent, SettleRefundDialogComponent, OrderHistoryComponent, FulfillmentDetailComponent, PaymentDetailComponent, SimpleItemListComponent, OrderCustomFieldsCardComponent, OrderProcessGraphComponent, OrderProcessNodeComponent, OrderProcessEdgeComponent, OrderProcessGraphDialogComponent, FulfillmentStateLabelComponent, FulfillmentCardComponent, OrderEditorComponent, OrderTableComponent, OrderEditsPreviewDialogComponent, ModificationDetailComponent, AddManualPaymentDialogComponent, OrderStateSelectDialogComponent, DraftOrderDetailComponent, DraftOrderVariantSelectorComponent, SelectCustomerDialogComponent, SelectAddressDialogComponent, CouponCodeSelectorComponent, SelectShippingMethodDialogComponent, OrderHistoryEntryHostComponent, SellerOrdersCardComponent, OrderDataTableComponent, OrderTotalColumnComponent, PaymentForRefundSelectorComponent, OrderModificationSummaryComponent, RefundDetailComponent],
      exports: [OrderCustomFieldsCardComponent]
    }]
  }], () => [{
    type: PageService
  }], null);
})();
export {
  AddManualPaymentDialogComponent,
  CancelOrderDialogComponent,
  CouponCodeSelectorComponent,
  DraftOrderDetailComponent,
  DraftOrderVariantSelectorComponent,
  FulfillOrderDialogComponent,
  FulfillmentCardComponent,
  FulfillmentDetailComponent,
  FulfillmentStateLabelComponent,
  GET_COUPON_CODE_SELECTOR_PROMOTION_LIST,
  GET_CUSTOMER_ADDRESSES,
  GET_ORDER_STATE,
  GET_SELLER_ORDERS,
  LineFulfillmentComponent,
  LineRefundsComponent,
  ModificationDetailComponent,
  NODE_HEIGHT,
  ORDER_DETAIL_QUERY,
  OrderCustomFieldsCardComponent,
  OrderDataTableComponent,
  OrderDetailComponent,
  OrderEditResultType,
  OrderEditorComponent,
  OrderEditsPreviewDialogComponent,
  OrderGuard,
  OrderHistoryComponent,
  OrderHistoryEntryHostComponent,
  OrderListComponent,
  OrderModificationSummaryComponent,
  OrderModule,
  OrderPaymentCardComponent,
  OrderProcessEdgeComponent,
  OrderProcessGraphComponent,
  OrderProcessGraphDialogComponent,
  OrderProcessNodeComponent,
  OrderStateSelectDialogComponent,
  OrderTableComponent,
  OrderTotalColumnComponent,
  OrderTransitionService,
  PaymentDetailComponent,
  PaymentForRefundSelectorComponent,
  PaymentStateLabelComponent,
  RefundDetailComponent,
  RefundOrderDialogComponent,
  RefundStateLabelComponent,
  SET_ORDER_CUSTOMER_MUTATION,
  SelectAddressDialogComponent,
  SelectCustomerDialogComponent,
  SelectShippingMethodDialogComponent,
  SellerOrdersCardComponent,
  SettleRefundDialogComponent,
  SimpleItemListComponent,
  createRoutes,
  getRefundablePayments
};
//# sourceMappingURL=@vendure_admin-ui_order.js.map
