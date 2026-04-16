import {
  require_normalize_string
} from "./chunk-RIQLGRLG.js";
import {
  ADMINISTRATOR_FRAGMENT,
  ActionBarComponent,
  ActionBarDropdownMenuComponent,
  ActionBarItemsComponent,
  ActionBarLeftComponent,
  ActionBarRightComponent,
  AffixedInputComponent,
  AssignPaymentMethodsToChannelDocument,
  AssignShippingMethodsToChannelDocument,
  AssignStockLocationsToChannelDocument,
  BaseEntityResolver,
  BulkActionMenuComponent,
  BulkActionRegistryService,
  CHANNEL_FRAGMENT,
  COUNTRY_FRAGMENT,
  CardComponent,
  ChannelAssignmentControlComponent,
  ChannelBadgeComponent,
  ChannelLabelPipe,
  ChipComponent,
  ConfigurableInputComponent,
  CreateStockLocationDocument,
  CurrencyCodeSelectorComponent,
  CustomDetailComponentHostComponent,
  DataService,
  DataTable2ColumnComponent,
  DataTable2Component,
  DataTable2SearchComponent,
  DataTableCustomFieldColumnComponent,
  DeleteStockLocationsDocument,
  DeletionResult,
  DialogButtonsDirective,
  DialogTitleDirective,
  DisabledDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuComponent,
  DropdownTriggerDirective,
  FormFieldComponent,
  FormFieldControlDirective,
  FormItemComponent,
  GetAdministratorDetailDocument,
  GetAdministratorListDocument,
  GetChannelDetailDocument,
  GetChannelListDocument,
  GetCountryDetailDocument,
  GetCountryListDocument,
  GetGlobalSettingsDetailDocument,
  GetPaymentMethodDetailDocument,
  GetPaymentMethodListDocument,
  GetProfileDetailDocument,
  GetRoleDetailDocument,
  GetRoleListDocument,
  GetSellerDetailDocument,
  GetSellerListDocument,
  GetShippingMethodDetailDocument,
  GetShippingMethodListDocument,
  GetStockLocationDetailDocument,
  GetStockLocationListDocument,
  GetTaxCategoryDetailDocument,
  GetTaxCategoryListDocument,
  GetTaxRateDetailDocument,
  GetTaxRateListDocument,
  GetZoneDetailDocument,
  GetZoneListDocument,
  GetZoneMembersDocument,
  HasPermissionPipe,
  IfPermissionsDirective,
  LabeledDataComponent,
  LanguageCode,
  LanguageCodeSelectorComponent,
  LanguageSelectorComponent,
  LocalStorageService,
  LocaleCurrencyNamePipe,
  LocaleCurrencyPipe,
  LocaleDatePipe,
  LocaleLanguageNamePipe,
  LogicalOperator,
  ModalService,
  NotificationService,
  ObjectTreeComponent,
  PAYMENT_METHOD_FRAGMENT,
  PageBlockComponent,
  PageComponent,
  PageDetailLayoutComponent,
  PageDetailSidebarComponent,
  PageEntityInfoComponent,
  PageService,
  Permission,
  ProductVariantSelectorComponent,
  ROLE_FRAGMENT,
  RemovePaymentMethodsFromChannelDocument,
  RemoveShippingMethodsFromChannelDocument,
  RemoveStockLocationsFromChannelDocument,
  RichTextEditorComponent,
  SHIPPING_METHOD_FRAGMENT,
  SelectToggleComponent,
  SelectionManager,
  ServerConfigService,
  SharedModule,
  SplitViewComponent,
  SplitViewLeftDirective,
  SplitViewRightDirective,
  TAX_CATEGORY_FRAGMENT,
  TAX_RATE_FRAGMENT,
  TabbedCustomFieldsComponent,
  TypedBaseDetailComponent,
  TypedBaseListComponent,
  UpdateStockLocationDocument,
  ZoneSelectorComponent,
  configurableDefinitionToInstance,
  createBulkAssignToChannelAction,
  createBulkDeleteAction,
  createBulkRemoveFromChannelAction,
  createUpdatedTranslatable,
  detailComponentWithResolver,
  findTranslation,
  getConfigArgValue,
  getCustomFieldsDefaults,
  gql,
  require_shared_constants,
  require_shared_utils,
  require_unique,
  toConfigurableOperationInput
} from "./chunk-YDQAHX43.js";
import {
  ClrAlert,
  ClrAlertItem,
  ClrAlertText,
  ClrCheckbox,
  ClrCheckboxWrapper,
  ClrIconCustomTag
} from "./chunk-SWTGRTQU.js";
import {
  NgSelectComponent
} from "./chunk-QP2DF7NU.js";
import {
  TranslatePipe
} from "./chunk-NCKUJY74.js";
import "./chunk-ZBGAUCDP.js";
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
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  UntypedFormBuilder,
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
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  UpperCasePipe
} from "./chunk-3WBC65NO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  TemplateRef,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OXIDPESK.js";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  combineLatest,
  distinctUntilChanged,
  map,
  mapTo,
  merge,
  mergeMap,
  of,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom
} from "./chunk-OGZ4D63M.js";
import {
  marker
} from "./chunk-D3BILYUK.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TXDUYLVM.js";

// ../../node_modules/@vendure/admin-ui/fesm2022/vendure-admin-ui-settings.mjs
var import_shared_constants = __toESM(require_shared_constants(), 1);
var import_shared_utils = __toESM(require_shared_utils(), 1);
var import_normalize_string = __toESM(require_normalize_string(), 1);
var import_unique = __toESM(require_unique(), 1);
var _c0 = (a0) => ["/settings/countries", a0];
function ZoneMemberListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const member_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", member_r1.id, " ");
  }
}
function ZoneMemberListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const member_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, member_r2.createdAt, "short"), " ");
  }
}
function ZoneMemberListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const member_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, member_r3.createdAt, "short"), " ");
  }
}
function ZoneMemberListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const member_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c0, member_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", member_r4.name, "");
  }
}
function ZoneMemberListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const member_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", member_r5.code, " ");
  }
}
function ZoneMemberListComponent_ng_template_23_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 13);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.enabled"));
  }
}
function ZoneMemberListComponent_ng_template_23_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 14);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.disabled"));
  }
}
function ZoneMemberListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ZoneMemberListComponent_ng_template_23_vdr_chip_0_Template, 3, 3, "vdr-chip", 11)(1, ZoneMemberListComponent_ng_template_23_vdr_chip_1_Template, 3, 3, "vdr-chip", 12);
  }
  if (rf & 2) {
    const member_r6 = ctx.item;
    ɵɵproperty("ngIf", member_r6.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !member_r6.enabled);
  }
}
var _c1 = (a0) => ({
  zoneName: a0
});
function AddCountryToZoneDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate(ɵɵpipeBind2(1, 1, "settings.add-countries-to-zone", ɵɵpureFunction1(4, _c1, ctx_r0.zoneName)));
  }
}
function AddCountryToZoneDialogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function AddCountryToZoneDialogComponent_ng_template_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 4);
    ɵɵlistener("click", function AddCountryToZoneDialogComponent_ng_template_3_Template_button_click_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.add());
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
    ɵɵproperty("disabled", !ctx_r0.selectedMemberIds.length);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, "settings.add-countries-to-zone", ɵɵpureFunction1(8, _c1, ctx_r0.zoneName)), " ");
  }
}
function PermissionGridComponent_tr_2_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function PermissionGridComponent_tr_2_button_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const section_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggleAll(section_r2.permissions));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "common.toggle-all"), " ");
  }
}
function PermissionGridComponent_tr_2_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "vdr-select-toggle", 5);
    ɵɵlistener("selectedChange", function PermissionGridComponent_tr_2_td_11_Template_vdr_select_toggle_selectedChange_1_listener($event) {
      const permission_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setPermission(permission_r5.name, $event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const permission_r5 = ctx.$implicit;
    const section_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("colspan", section_r2.permissions.length === 1 ? 4 : 1);
    ɵɵadvance();
    ɵɵproperty("title", permission_r5.description)("label", permission_r5.name)("disabled", ctx_r2.readonly)("selected", ctx_r2.activePermissions == null ? null : ctx_r2.activePermissions.includes(permission_r5.name));
  }
}
function PermissionGridComponent_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td", 2)(2, "div")(3, "strong");
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "small");
    ɵɵtext(7);
    ɵɵpipe(8, "translate");
    ɵɵelementEnd();
    ɵɵelement(9, "br");
    ɵɵtemplate(10, PermissionGridComponent_tr_2_button_10_Template, 3, 3, "button", 3);
    ɵɵelementEnd();
    ɵɵtemplate(11, PermissionGridComponent_tr_2_td_11_Template, 2, 5, "td", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, section_r2.label));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 6, section_r2.description));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", 1 < section_r2.permissions.length && !ctx_r2.readonly);
    ɵɵadvance();
    ɵɵproperty("ngForOf", section_r2.permissions);
  }
}
var _c2 = () => ["CreateAdministrator", "UpdateAdministrator"];
function AdminDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵlistener("click", function AdminDetailComponent_button_5_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function AdminDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵlistener("click", function AdminDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function AdminDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AdminDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 22);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", "UpdateAdministrator");
  }
}
function AdminDetailComponent_vdr_card_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r5);
  }
}
function AdminDetailComponent_vdr_form_field_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-form-field", 24);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "input", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("label", ɵɵpipeBind1(1, 1, "settings.password"));
  }
}
function AdminDetailComponent_vdr_form_field_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-form-field", 26);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "input", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "settings.password"))("readOnlyToggle", true);
  }
}
function AdminDetailComponent_vdr_card_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 27);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r2.customFields)("customFieldsFormGroup", ctx_r2.detailForm.get("customFields"));
  }
}
function AdminDetailComponent_li_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 29)(1, "button", 30);
    ɵɵlistener("click", function AdminDetailComponent_li_43_Template_button_click_1_listener() {
      const channel_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectedChannelId = channel_r7.channelId);
    });
    ɵɵtext(2);
    ɵɵpipe(3, "channelCodeToLabel");
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const channel_r7 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("active", ctx_r2.selectedChannelId === channel_r7.channelId);
    ɵɵproperty("id", channel_r7.channelId);
    ɵɵattribute("aria-selected", ctx_r2.selectedChannelId === channel_r7.channelId);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, ɵɵpipeBind1(3, 5, channel_r7.channelCode)), " ");
  }
}
var _c3 = () => ["CreateAdministrator"];
var _c4 = () => ["./", "create"];
var _c5 = (a0) => ["./", a0];
function AdministratorListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 12);
    ɵɵelement(1, "clr-icon", 13);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "admin.create-new-administrator"), " ");
  }
}
function AdministratorListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const administrator_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", administrator_r1.id, " ");
  }
}
function AdministratorListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const administrator_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, administrator_r2.createdAt, "short"), " ");
  }
}
function AdministratorListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const administrator_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, administrator_r3.updatedAt, "short"), " ");
  }
}
function AdministratorListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const administrator_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(3, _c5, administrator_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", administrator_r4.firstName, " ", administrator_r4.lastName, "");
  }
}
function AdministratorListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const administrator_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", administrator_r5.emailAddress, " ");
  }
}
function AdministratorListComponent_ng_template_32_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(role_r6.description);
  }
}
function AdministratorListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AdministratorListComponent_ng_template_32_vdr_chip_0_Template, 2, 1, "vdr-chip", 16);
  }
  if (rf & 2) {
    const administrator_r7 = ctx.item;
    ɵɵproperty("ngForOf", administrator_r7.user.roles);
  }
}
function AdministratorListComponent_vdr_dt2_custom_field_column_33_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 17);
  }
  if (rf & 2) {
    const customField_r8 = ctx.$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r8)("sorts", ctx_r8.sorts);
  }
}
var _c6 = () => ["SuperAdmin", "UpdateChannel"];
function ChannelDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 32);
    ɵɵlistener("click", function ChannelDetailComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.create());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function ChannelDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 32);
    ɵɵlistener("click", function ChannelDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function ChannelDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ChannelDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 33);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(1, _c6));
  }
}
function ChannelDetailComponent_vdr_card_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r4);
  }
}
function ChannelDetailComponent_vdr_form_field_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-form-field", 35);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "input", 36);
    ɵɵpipe(3, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "common.code"));
    ɵɵadvance(2);
    ɵɵproperty("readonly", !ɵɵpipeBind1(3, 4, ctx_r1.updatePermission));
  }
}
function ChannelDetailComponent_vdr_form_item_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-form-item", 37);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵpipe(3, "channelCodeToLabel");
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "common.code"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, ɵɵpipeBind1(3, 4, ctx_r1.entity == null ? null : ctx_r1.entity.code)), " ");
  }
}
function ChannelDetailComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 38);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const seller_r5 = ctx.$implicit;
    ɵɵproperty("value", seller_r5.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", seller_r5.name, " ");
  }
}
function ChannelDetailComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 38);
    ɵɵtext(1);
    ɵɵpipe(2, "localeLanguageName");
    ɵɵpipe(3, "uppercase");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const languageCode_r6 = ctx.$implicit;
    ɵɵproperty("value", languageCode_r6);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 3, languageCode_r6), " (", ɵɵpipeBind1(3, 5, languageCode_r6), ") ");
  }
}
function ChannelDetailComponent_option_50_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 38);
    ɵɵtext(1);
    ɵɵpipe(2, "localeCurrencyName");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const code_r7 = ctx.$implicit;
    ɵɵproperty("value", code_r7);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, code_r7), " ");
  }
}
function ChannelDetailComponent_clr_alert_56_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-alert", 39)(1, "clr-alert-item")(2, "span", 40);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵproperty("clrAlertClosable", false);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "error.no-default-tax-zone-set"), " ");
  }
}
function ChannelDetailComponent_clr_alert_62_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-alert", 39)(1, "clr-alert-item")(2, "span", 40);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵproperty("clrAlertClosable", false);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "error.no-default-shipping-zone-set"), " ");
  }
}
function ChannelDetailComponent_vdr_card_68_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 41);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 42);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"));
  }
}
var _c7 = () => ["SuperAdmin", "CreateChannel"];
function ChannelListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵelement(1, "clr-icon", 12);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-channel"), " ");
  }
}
function ChannelListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const channel_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", channel_r1.id, " ");
  }
}
function ChannelListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const channel_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, channel_r2.createdAt, "short"), " ");
  }
}
function ChannelListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const channel_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, channel_r3.updatedAt, "short"), " ");
  }
}
function ChannelListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "channelCodeToLabel");
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelement(5, "clr-icon", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const channel_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(6, _c5, channel_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 4, ɵɵpipeBind1(3, 2, channel_r4.code)));
  }
}
function ChannelListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const channel_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", channel_r5.token, " ");
  }
}
function ChannelListComponent_vdr_dt2_custom_field_column_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 15);
  }
  if (rf & 2) {
    const customField_r6 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r6)("sorts", ctx_r6.sorts);
  }
}
function CountryDetailComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function CountryDetailComponent_button_9_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function CountryDetailComponent_ng_template_11_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function CountryDetailComponent_ng_template_11_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function CountryDetailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CountryDetailComponent_ng_template_11_button_0_Template, 3, 4, "button", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r2.updatePermission);
  }
}
function CountryDetailComponent_vdr_card_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r5);
  }
}
function CountryDetailComponent_vdr_card_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 18);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r2.customFields)("customFieldsFormGroup", ctx_r2.detailForm.get("customFields"));
  }
}
var _c8 = () => ["CreateSettings", "CreateCountry"];
function CountryListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵelement(1, "clr-icon", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-country"), " ");
  }
}
function CountryListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const country_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", country_r1.id, " ");
  }
}
function CountryListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const country_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, country_r2.createdAt, "short"), " ");
  }
}
function CountryListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const country_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, country_r3.updatedAt, "short"), " ");
  }
}
function CountryListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, country_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(country_r4.name);
  }
}
function CountryListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const country_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", country_r5.code, " ");
  }
}
function CountryListComponent_ng_template_35_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.enabled"));
  }
}
function CountryListComponent_ng_template_35_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.disabled"));
  }
}
function CountryListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CountryListComponent_ng_template_35_vdr_chip_0_Template, 3, 3, "vdr-chip", 17)(1, CountryListComponent_ng_template_35_vdr_chip_1_Template, 3, 3, "vdr-chip", 18);
  }
  if (rf & 2) {
    const country_r6 = ctx.item;
    ɵɵproperty("ngIf", country_r6.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !country_r6.enabled);
  }
}
function CountryListComponent_vdr_dt2_custom_field_column_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 21);
  }
  if (rf & 2) {
    const customField_r7 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r7)("sorts", ctx_r7.sorts);
  }
}
function GlobalSettingsComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function GlobalSettingsComponent_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.detailForm.invalid || ctx_r1.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function GlobalSettingsComponent_vdr_card_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 13);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 14);
    ɵɵpipe(3, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"))("readonly", !ɵɵpipeBind1(3, 6, ctx_r1.updatePermission));
  }
}
function PaymentMethodDetailComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 19);
    ɵɵlistener("click", function PaymentMethodDetailComponent_button_9_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.pristine || ctx_r2.detailForm.invalid || !ctx_r2.selectedHandler);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function PaymentMethodDetailComponent_ng_template_11_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 19);
    ɵɵlistener("click", function PaymentMethodDetailComponent_ng_template_11_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.pristine || ctx_r2.detailForm.invalid || !ctx_r2.selectedHandler);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function PaymentMethodDetailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PaymentMethodDetailComponent_ng_template_11_button_0_Template, 3, 4, "button", 20);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r2.updatePermission);
  }
}
function PaymentMethodDetailComponent_vdr_card_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r5);
  }
}
function PaymentMethodDetailComponent_vdr_card_40_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 22);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r2.customFields)("customFieldsFormGroup", ctx_r2.detailForm.get("customFields"));
  }
}
function PaymentMethodDetailComponent_vdr_configurable_input_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-configurable-input", 24);
    ɵɵpipe(1, "hasPermission");
    ɵɵlistener("remove", function PaymentMethodDetailComponent_vdr_configurable_input_44_Template_vdr_configurable_input_remove_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.removeChecker());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("operation", ctx_r2.selectedChecker)("operationDefinition", ctx_r2.selectedCheckerDefinition)("readonly", !ɵɵpipeBind1(1, 3, ctx_r2.updatePermission));
  }
}
function PaymentMethodDetailComponent_div_45_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 29);
    ɵɵlistener("click", function PaymentMethodDetailComponent_div_45_button_7_Template_button_click_0_listener() {
      const checker_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selectChecker(checker_r8));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const checker_r8 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", checker_r8.description, " ");
  }
}
function PaymentMethodDetailComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "vdr-dropdown")(2, "button", 25);
    ɵɵelement(3, "clr-icon", 26);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "vdr-dropdown-menu", 27);
    ɵɵtemplate(7, PaymentMethodDetailComponent_div_45_button_7_Template, 2, 1, "button", 28);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "common.select"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.checkers);
  }
}
function PaymentMethodDetailComponent_vdr_configurable_input_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-configurable-input", 30);
    ɵɵpipe(1, "hasPermission");
    ɵɵlistener("remove", function PaymentMethodDetailComponent_vdr_configurable_input_48_Template_vdr_configurable_input_remove_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.removeHandler());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("operation", ctx_r2.selectedHandler)("operationDefinition", ctx_r2.selectedHandlerDefinition)("readonly", !ɵɵpipeBind1(1, 3, ctx_r2.updatePermission));
  }
}
function PaymentMethodDetailComponent_div_49_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 29);
    ɵɵlistener("click", function PaymentMethodDetailComponent_div_49_button_7_Template_button_click_0_listener() {
      const handler_r11 = ɵɵrestoreView(_r10).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selectHandler(handler_r11));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const handler_r11 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", handler_r11.description, " ");
  }
}
function PaymentMethodDetailComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "vdr-dropdown")(2, "button", 25);
    ɵɵelement(3, "clr-icon", 26);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "vdr-dropdown-menu", 27);
    ɵɵtemplate(7, PaymentMethodDetailComponent_div_49_button_7_Template, 2, 1, "button", 28);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "common.select"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.handlers);
  }
}
var _c9 = () => ["CreateSettings", "CreatePaymentMethod"];
function PaymentMethodListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵelement(1, "clr-icon", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-payment-method"), " ");
  }
}
function PaymentMethodListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const paymentMethod_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", paymentMethod_r1.id, " ");
  }
}
function PaymentMethodListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const paymentMethod_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, paymentMethod_r2.createdAt, "short"), " ");
  }
}
function PaymentMethodListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const paymentMethod_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, paymentMethod_r3.updatedAt, "short"), " ");
  }
}
function PaymentMethodListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const paymentMethod_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, paymentMethod_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(paymentMethod_r4.name);
  }
}
function PaymentMethodListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const paymentMethod_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", paymentMethod_r5.code, " ");
  }
}
function PaymentMethodListComponent_ng_template_35_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.enabled"));
  }
}
function PaymentMethodListComponent_ng_template_35_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.disabled"));
  }
}
function PaymentMethodListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PaymentMethodListComponent_ng_template_35_vdr_chip_0_Template, 3, 3, "vdr-chip", 17)(1, PaymentMethodListComponent_ng_template_35_vdr_chip_1_Template, 3, 3, "vdr-chip", 18);
  }
  if (rf & 2) {
    const paymentMethod_r6 = ctx.item;
    ɵɵproperty("ngIf", paymentMethod_r6.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !paymentMethod_r6.enabled);
  }
}
function PaymentMethodListComponent_vdr_dt2_custom_field_column_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 21);
  }
  if (rf & 2) {
    const customField_r7 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r7)("sorts", ctx_r7.sorts);
  }
}
function ProfileComponent_vdr_card_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r1);
  }
}
function ProfileComponent_vdr_form_field_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-form-field", 17);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "input", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("label", ɵɵpipeBind1(1, 1, "settings.password"));
  }
}
function ProfileComponent_vdr_card_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 18);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"));
  }
}
function RoleDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function RoleDetailComponent_button_5_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function RoleDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function RoleDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function RoleDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoleDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 16);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", "UpdateAdministrator");
  }
}
function RoleDetailComponent_vdr_card_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r5);
  }
}
function RoleListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵelement(1, "clr-icon", 15);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-role"), " ");
  }
}
function RoleListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const role_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", role_r1.id, " ");
  }
}
function RoleListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const role_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, role_r2.createdAt, "short"), " ");
  }
}
function RoleListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const role_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, role_r3.updatedAt, "short"), " ");
  }
}
function RoleListComponent_ng_template_26_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 17)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const role_r4 = ɵɵnextContext().item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, role_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(role_r4.description);
  }
}
function RoleListComponent_ng_template_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const role_r4 = ɵɵnextContext().item;
    ɵɵtextInterpolate1(" ", role_r4.description, " ");
  }
}
function RoleListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoleListComponent_ng_template_26_a_0_Template, 4, 4, "a", 16)(1, RoleListComponent_ng_template_26_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const role_r4 = ctx.item;
    const defaultRole_r5 = ɵɵreference(2);
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r5.isDefaultRole(role_r4))("ngIfElse", defaultRole_r5);
  }
}
function RoleListComponent_ng_template_29_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const role_r7 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵtextInterpolate(role_r7.code);
  }
}
function RoleListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoleListComponent_ng_template_29_span_0_Template, 2, 1, "span", 19);
  }
  if (rf & 2) {
    const role_r7 = ctx.item;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r5.isDefaultRole(role_r7));
  }
}
function RoleListComponent_ng_template_32_ng_container_0_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵelement(1, "vdr-channel-badge", 21);
    ɵɵelementStart(2, "div", 22);
    ɵɵtext(3);
    ɵɵpipe(4, "channelCodeToLabel");
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const channel_r8 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("channelCode", channel_r8.code);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, ɵɵpipeBind1(4, 2, channel_r8.code)));
  }
}
function RoleListComponent_ng_template_32_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RoleListComponent_ng_template_32_ng_container_0_vdr_chip_1_Template, 6, 6, "vdr-chip", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const role_r9 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵproperty("ngForOf", role_r9.channels);
  }
}
function RoleListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoleListComponent_ng_template_32_ng_container_0_Template, 2, 1, "ng-container", 19);
  }
  if (rf & 2) {
    const role_r9 = ctx.item;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r5.isDefaultRole(role_r9));
  }
}
function RoleListComponent_ng_template_35_ng_container_0_vdr_chip_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const permission_r10 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(permission_r10);
  }
}
function RoleListComponent_ng_template_35_ng_container_0_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "clr-icon", 15);
    ɵɵtext(2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const role_r12 = ɵɵnextContext(3).item;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", role_r12.permissions.length - ctx_r5.initialLimit, " ");
  }
}
function RoleListComponent_ng_template_35_ng_container_0_button_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 27);
  }
}
function RoleListComponent_ng_template_35_ng_container_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 26);
    ɵɵlistener("click", function RoleListComponent_ng_template_35_ng_container_0_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r11);
      const role_r12 = ɵɵnextContext(2).item;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.toggleDisplayLimit(role_r12));
    });
    ɵɵtemplate(1, RoleListComponent_ng_template_35_ng_container_0_button_4_ng_container_1_Template, 3, 1, "ng-container", 23)(2, RoleListComponent_ng_template_35_ng_container_0_button_4_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collapse_r13 = ɵɵreference(3);
    const role_r12 = ɵɵnextContext(2).item;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r5.displayLimit[role_r12.id] || 0) < role_r12.permissions.length)("ngIfElse", collapse_r13);
  }
}
function RoleListComponent_ng_template_35_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 24);
    ɵɵtemplate(2, RoleListComponent_ng_template_35_ng_container_0_vdr_chip_2_Template, 2, 1, "vdr-chip", 20);
    ɵɵpipe(3, "slice");
    ɵɵtemplate(4, RoleListComponent_ng_template_35_ng_container_0_button_4_Template, 4, 2, "button", 25);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const role_r12 = ɵɵnextContext().item;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind3(3, 2, role_r12.permissions, 0, ctx_r5.displayLimit[role_r12.id] || 3));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", role_r12.permissions.length > ctx_r5.initialLimit);
  }
}
function RoleListComponent_ng_template_35_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 28);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "settings.default-role-label"));
  }
}
function RoleListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RoleListComponent_ng_template_35_ng_container_0_Template, 5, 6, "ng-container", 23)(1, RoleListComponent_ng_template_35_ng_template_1_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const role_r12 = ctx.item;
    const defaultRole_r14 = ɵɵreference(2);
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r5.isDefaultRole(role_r12))("ngIfElse", defaultRole_r14);
  }
}
var _c10 = () => ["SuperAdmin", "UpdateSeller"];
function SellerDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function SellerDetailComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.create());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function SellerDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function SellerDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function SellerDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SellerDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 11);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(1, _c10));
  }
}
function SellerDetailComponent_vdr_card_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r4);
  }
}
function SellerDetailComponent_vdr_card_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 13);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"));
  }
}
var _c11 = "clr-alert[_ngcontent-%COMP%]{max-width:30rem;margin-bottom:12px}";
var _c12 = () => ["SuperAdmin", "CreateSeller"];
function SellerListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 10);
    ɵɵelement(1, "clr-icon", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-seller"), " ");
  }
}
function SellerListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const seller_r1 = ctx.item;
    ɵɵtextInterpolate(seller_r1.id);
  }
}
function SellerListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const seller_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, seller_r2.createdAt, "short"), " ");
  }
}
function SellerListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const seller_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, seller_r3.updatedAt, "short"), " ");
  }
}
function SellerListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 12)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const seller_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, seller_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(seller_r4.name);
  }
}
function SellerListComponent_vdr_dt2_custom_field_column_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 14);
  }
  if (rf & 2) {
    const customField_r5 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r5)("sorts", ctx_r5.sorts);
  }
}
function ShippingEligibilityTestResultComponent_div_2_vdr_object_tree_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-object-tree", 10);
  }
  if (rf & 2) {
    const quote_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("value", quote_r1.metadata);
  }
}
function ShippingEligibilityTestResultComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "vdr-labeled-data", 7);
    ɵɵpipe(3, "translate");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 8)(6, "vdr-labeled-data", 7);
    ɵɵpipe(7, "translate");
    ɵɵtext(8);
    ɵɵpipe(9, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(10, "vdr-labeled-data", 7);
    ɵɵpipe(11, "translate");
    ɵɵtext(12);
    ɵɵpipe(13, "localeCurrency");
    ɵɵelementEnd()();
    ɵɵtemplate(14, ShippingEligibilityTestResultComponent_div_2_vdr_object_tree_14_Template, 1, 1, "vdr-object-tree", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const quote_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("stale", ctx_r1.testDataUpdated);
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(3, 9, "settings.shipping-method"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", quote_r1.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(7, 11, "common.price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(9, 13, quote_r1.price, ctx_r1.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(11, 16, "common.price-with-tax"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(13, 18, quote_r1.priceWithTax, ctx_r1.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", quote_r1.metadata);
  }
}
function ShippingEligibilityTestResultComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "clr-icon", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "settings.no-eligible-shipping-methods"), " ");
  }
}
function TestOrderBuilderComponent_table_0_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 8)(1, "td", 9);
    ɵɵelement(2, "img", 10);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 11);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td", 12);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "td", 13);
    ɵɵtext(8);
    ɵɵpipe(9, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(10, "td", 14)(11, "input", 15);
    ɵɵtwoWayListener("ngModelChange", function TestOrderBuilderComponent_table_0_tr_19_Template_input_ngModelChange_11_listener($event) {
      const line_r3 = ɵɵrestoreView(_r2).$implicit;
      ɵɵtwoWayBindingSet(line_r3.quantity, $event) || (line_r3.quantity = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function TestOrderBuilderComponent_table_0_tr_19_Template_input_change_11_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.updateQuantity());
    });
    ɵɵelementEnd();
    ɵɵelementStart(12, "button", 16);
    ɵɵlistener("click", function TestOrderBuilderComponent_table_0_tr_19_Template_button_click_12_listener() {
      const line_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.removeLine(line_r3));
    });
    ɵɵelement(13, "clr-icon", 17);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "td", 18);
    ɵɵtext(15);
    ɵɵpipe(16, "localeCurrency");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("src", line_r3.preview + "?preset=tiny", ɵɵsanitizeUrl);
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r3.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(line_r3.sku);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(9, 6, line_r3.unitPriceWithTax, ctx_r3.currencyCode), " ");
    ɵɵadvance(3);
    ɵɵtwoWayProperty("ngModel", line_r3.quantity);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(16, 9, line_r3.unitPriceWithTax * line_r3.quantity, ctx_r3.currencyCode), " ");
  }
}
function TestOrderBuilderComponent_table_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 4)(1, "thead")(2, "tr");
    ɵɵelement(3, "th");
    ɵɵelementStart(4, "th");
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
    ɵɵelementEnd();
    ɵɵelementStart(16, "th");
    ɵɵtext(17);
    ɵɵpipe(18, "translate");
    ɵɵelementEnd()()();
    ɵɵtemplate(19, TestOrderBuilderComponent_table_0_tr_19_Template, 17, 12, "tr", 5);
    ɵɵelementStart(20, "tr", 6)(21, "td", 7);
    ɵɵtext(22);
    ɵɵpipe(23, "translate");
    ɵɵelementEnd();
    ɵɵelement(24, "td")(25, "td")(26, "td")(27, "td");
    ɵɵelementStart(28, "td");
    ɵɵtext(29);
    ɵɵpipe(30, "localeCurrency");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 8, "order.product-name"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 10, "order.product-sku"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 12, "order.unit-price"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(15, 14, "order.quantity"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 16, "order.total"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.lines);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(23, 18, "order.sub-total"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind2(30, 20, ctx_r3.subTotal, ctx_r3.currencyCode));
  }
}
function TestOrderBuilderComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "div", 20);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelement(4, "clr-icon", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, "settings.add-products-to-test-order"));
  }
}
function TestAddressFormComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    ɵɵproperty("value", country_r1.code);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", country_r1.name, " ");
  }
}
var _c13 = (a0, a1, a2) => ({
  success: a0,
  error: a1,
  unknown: a2
});
function ShippingMethodTestResultComponent_clr_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 14);
  }
}
function ShippingMethodTestResultComponent_clr_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 15);
  }
}
function ShippingMethodTestResultComponent_clr_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 16);
  }
}
function ShippingMethodTestResultComponent_vdr_labeled_data_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 4);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵpipe(3, "localeCurrency");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "common.price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 4, ctx_r0.testResult.quote == null ? null : ctx_r0.testResult.quote.price, ctx_r0.currencyCode), " ");
  }
}
function ShippingMethodTestResultComponent_vdr_labeled_data_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 4);
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵpipe(3, "localeCurrency");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 2, "common.price-with-tax"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 4, ctx_r0.testResult.quote == null ? null : ctx_r0.testResult.quote.priceWithTax, ctx_r0.currencyCode), " ");
  }
}
function ShippingMethodTestResultComponent_vdr_object_tree_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-object-tree", 17);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r0.testResult == null ? null : ctx_r0.testResult.quote == null ? null : ctx_r0.testResult.quote.metadata);
  }
}
function ShippingMethodDetailComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 24);
    ɵɵlistener("click", function ShippingMethodDetailComponent_button_9_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.pristine || ctx_r2.detailForm.invalid || !ctx_r2.selectedChecker || !ctx_r2.selectedCalculator);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function ShippingMethodDetailComponent_ng_template_11_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 24);
    ɵɵlistener("click", function ShippingMethodDetailComponent_ng_template_11_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.pristine || ctx_r2.detailForm.invalid || !ctx_r2.selectedChecker || !ctx_r2.selectedCalculator);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function ShippingMethodDetailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ShippingMethodDetailComponent_ng_template_11_button_0_Template, 3, 4, "button", 25);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r2.updatePermission);
  }
}
function ShippingMethodDetailComponent_vdr_card_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r5);
  }
}
function ShippingMethodDetailComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const handler_r6 = ctx.$implicit;
    ɵɵproperty("value", handler_r6.code);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", handler_r6.code, ": ", handler_r6.description, " ");
  }
}
function ShippingMethodDetailComponent_vdr_card_39_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 28);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 29);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r2.customFields)("customFieldsFormGroup", ctx_r2.detailForm.get("customFields"));
  }
}
function ShippingMethodDetailComponent_vdr_configurable_input_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-configurable-input", 30);
    ɵɵpipe(1, "hasPermission");
    ɵɵlistener("remove", function ShippingMethodDetailComponent_vdr_configurable_input_43_Template_vdr_configurable_input_remove_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectedChecker = null);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("operation", ctx_r2.selectedChecker)("operationDefinition", ctx_r2.selectedCheckerDefinition)("readonly", !ɵɵpipeBind1(1, 3, ctx_r2.updatePermission));
  }
}
function ShippingMethodDetailComponent_div_44_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 36);
    ɵɵlistener("click", function ShippingMethodDetailComponent_div_44_button_7_Template_button_click_0_listener() {
      const checker_r9 = ɵɵrestoreView(_r8).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selectChecker(checker_r9));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const checker_r9 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", checker_r9.description, " ");
  }
}
function ShippingMethodDetailComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31)(1, "vdr-dropdown")(2, "button", 32);
    ɵɵelement(3, "clr-icon", 33);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "vdr-dropdown-menu", 34);
    ɵɵtemplate(7, ShippingMethodDetailComponent_div_44_button_7_Template, 2, 1, "button", 35);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "common.select"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.checkers);
  }
}
function ShippingMethodDetailComponent_vdr_configurable_input_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-configurable-input", 37);
    ɵɵpipe(1, "hasPermission");
    ɵɵlistener("remove", function ShippingMethodDetailComponent_vdr_configurable_input_47_Template_vdr_configurable_input_remove_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectedCalculator = null);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("operation", ctx_r2.selectedCalculator)("operationDefinition", ctx_r2.selectedCalculatorDefinition)("readonly", !ɵɵpipeBind1(1, 3, ctx_r2.updatePermission));
  }
}
function ShippingMethodDetailComponent_div_48_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 36);
    ɵɵlistener("click", function ShippingMethodDetailComponent_div_48_button_7_Template_button_click_0_listener() {
      const calculator_r12 = ɵɵrestoreView(_r11).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selectCalculator(calculator_r12));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calculator_r12 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", calculator_r12.description, " ");
  }
}
function ShippingMethodDetailComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31)(1, "vdr-dropdown")(2, "button", 32);
    ɵɵelement(3, "clr-icon", 33);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "vdr-dropdown-menu", 34);
    ɵɵtemplate(7, ShippingMethodDetailComponent_div_48_button_7_Template, 2, 1, "button", 35);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "common.select"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.calculators);
  }
}
var _c14 = () => ["CreateSettings", "CreateShippingMethod"];
function ShippingMethodListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵelement(1, "clr-icon", 15);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-shipping-method"), " ");
  }
}
function ShippingMethodListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const shippingMethod_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", shippingMethod_r1.id, " ");
  }
}
function ShippingMethodListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const shippingMethod_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, shippingMethod_r2.createdAt, "short"), " ");
  }
}
function ShippingMethodListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const shippingMethod_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, shippingMethod_r3.updatedAt, "short"), " ");
  }
}
function ShippingMethodListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 16)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const shippingMethod_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, shippingMethod_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(shippingMethod_r4.name);
  }
}
function ShippingMethodListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const shippingMethod_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", shippingMethod_r5.code, " ");
  }
}
function ShippingMethodListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const shippingMethod_r6 = ctx.item;
    ɵɵtextInterpolate1(" ", shippingMethod_r6.description, " ");
  }
}
function ShippingMethodListComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const shippingMethod_r7 = ctx.item;
    ɵɵtextInterpolate1(" ", shippingMethod_r7.fulfillmentHandlerCode, " ");
  }
}
function ShippingMethodListComponent_vdr_dt2_custom_field_column_39_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 18);
  }
  if (rf & 2) {
    const customField_r8 = ctx.$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r8)("sorts", ctx_r8.sorts);
  }
}
var _c15 = (a0) => ({
  pattern: a0
});
function StockLocationDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function StockLocationDetailComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.create());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.detailForm.invalid || ctx_r1.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function StockLocationDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function StockLocationDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.detailForm.invalid || ctx_r1.detailForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function StockLocationDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StockLocationDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 13);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", "UpdateStockLocation");
  }
}
function StockLocationDetailComponent_vdr_card_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r4);
  }
}
function StockLocationDetailComponent_vdr_card_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 15);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"));
  }
}
var _c16 = () => ["CreateStockLocation"];
function StockLocationListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵelement(1, "clr-icon", 12);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "catalog.create-new-stock-location"), " ");
  }
}
function StockLocationListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const stockLocation_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", stockLocation_r1.id, " ");
  }
}
function StockLocationListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const stockLocation_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, stockLocation_r2.createdAt, "short"), " ");
  }
}
function StockLocationListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const stockLocation_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, stockLocation_r3.updatedAt, "short"), " ");
  }
}
function StockLocationListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const stockLocation_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, stockLocation_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(stockLocation_r4.name);
  }
}
function StockLocationListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 15);
  }
  if (rf & 2) {
    const stockLocation_r5 = ctx.item;
    ɵɵproperty("innerHTML", stockLocation_r5.description, ɵɵsanitizeHtml);
  }
}
function StockLocationListComponent_vdr_dt2_custom_field_column_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 16);
  }
  if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("customField", field_r6)("sorts", ctx_r6.sorts);
  }
}
function TaxCategoryDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function TaxCategoryDetailComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.create());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function TaxCategoryDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function TaxCategoryDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function TaxCategoryDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TaxCategoryDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r1.updatePermission);
  }
}
function TaxCategoryDetailComponent_vdr_card_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r4);
  }
}
function TaxCategoryDetailComponent_vdr_card_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 15);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"));
  }
}
var _c17 = () => ["CreateSettings", "CreateTaxCategory"];
function TaxCategoryListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵelement(1, "clr-icon", 12);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-tax-category"), " ");
  }
}
function TaxCategoryListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const taxCategory_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", taxCategory_r1.id, " ");
  }
}
function TaxCategoryListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const taxCategory_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, taxCategory_r2.createdAt, "short"), " ");
  }
}
function TaxCategoryListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const taxCategory_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, taxCategory_r3.updatedAt, "short"), " ");
  }
}
function TaxCategoryListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const taxCategory_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, taxCategory_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(taxCategory_r4.name);
  }
}
function TaxCategoryListComponent_ng_template_29_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.default-tax-category"));
  }
}
function TaxCategoryListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TaxCategoryListComponent_ng_template_29_vdr_chip_0_Template, 3, 3, "vdr-chip", 15);
  }
  if (rf & 2) {
    const taxCategory_r5 = ctx.item;
    ɵɵproperty("ngIf", taxCategory_r5.isDefault);
  }
}
function TaxCategoryListComponent_vdr_dt2_custom_field_column_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 16);
  }
  if (rf & 2) {
    const customField_r6 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r6)("sorts", ctx_r6.sorts);
  }
}
function TaxRateDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function TaxRateDetailComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.create());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function TaxRateDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function TaxRateDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function TaxRateDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TaxRateDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 21);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r1.updatePermission);
  }
}
function TaxRateDetailComponent_vdr_card_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r4);
  }
}
function TaxRateDetailComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const taxCategory_r5 = ctx.$implicit;
    ɵɵproperty("value", taxCategory_r5.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", taxCategory_r5.name, " ");
  }
}
function TaxRateDetailComponent_vdr_card_43_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 24);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"));
  }
}
var _c18 = () => ["CreateSettings", "CreateTaxRate"];
function TaxRateListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15);
    ɵɵelement(1, "clr-icon", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-tax-rate"), " ");
  }
}
function TaxRateListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const taxRate_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", taxRate_r1.id, " ");
  }
}
function TaxRateListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const taxRate_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, taxRate_r2.createdAt, "short"), " ");
  }
}
function TaxRateListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const taxRate_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, taxRate_r3.updatedAt, "short"), " ");
  }
}
function TaxRateListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 17)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const taxRate_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, taxRate_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(taxRate_r4.name);
  }
}
function TaxRateListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const taxRate_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", taxRate_r5.category.name, " ");
  }
}
function TaxRateListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const taxRate_r6 = ctx.item;
    ɵɵtextInterpolate1(" ", taxRate_r6.zone.name, " ");
  }
}
function TaxRateListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const taxRate_r7 = ctx.item;
    ɵɵtextInterpolate1(" ", taxRate_r7.customerGroup == null ? null : taxRate_r7.customerGroup.name, " ");
  }
}
function TaxRateListComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const taxRate_r8 = ctx.item;
    ɵɵtextInterpolate1(" ", taxRate_r8.value, "% ");
  }
}
function TaxRateListComponent_ng_template_41_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 21);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.enabled"));
  }
}
function TaxRateListComponent_ng_template_41_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.disabled"));
  }
}
function TaxRateListComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TaxRateListComponent_ng_template_41_vdr_chip_0_Template, 3, 3, "vdr-chip", 19)(1, TaxRateListComponent_ng_template_41_vdr_chip_1_Template, 3, 3, "vdr-chip", 20);
  }
  if (rf & 2) {
    const taxRate_r9 = ctx.item;
    ɵɵproperty("ngIf", taxRate_r9.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !taxRate_r9.enabled);
  }
}
function TaxRateListComponent_vdr_dt2_custom_field_column_42_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 23);
  }
  if (rf & 2) {
    const customField_r10 = ctx.$implicit;
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r10)("sorts", ctx_r10.sorts);
  }
}
function ZoneDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function ZoneDetailComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.create());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function ZoneDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function ZoneDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r1.saveButtonEnabled());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function ZoneDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ZoneDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r1.updatePermission);
  }
}
function ZoneDetailComponent_vdr_card_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r4);
  }
}
function ZoneDetailComponent_vdr_card_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 13);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"));
  }
}
var _c19 = () => ["CreateSettings", "CreateZone"];
var _c20 = (a0) => ({
  contents: a0
});
function ZoneListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 6);
    ɵɵelement(1, "clr-icon", 7);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c4));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "settings.create-new-zone"), " ");
  }
}
function ZoneListComponent_ng_template_12_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const customerGroup_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", customerGroup_r3.id, " ");
  }
}
function ZoneListComponent_ng_template_12_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const customerGroup_r4 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, customerGroup_r4.createdAt, "short"), " ");
  }
}
function ZoneListComponent_ng_template_12_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const customerGroup_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, customerGroup_r5.updatedAt, "short"), " ");
  }
}
function ZoneListComponent_ng_template_12_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 17)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customerGroup_r6 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c5, customerGroup_r6.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(customerGroup_r6.name);
  }
}
function ZoneListComponent_ng_template_12_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 19)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelement(4, "clr-icon", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customerGroup_r7 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(6, _c5, ɵɵpureFunction1(4, _c20, customerGroup_r7.id)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "settings.view-zone-members"));
  }
}
function ZoneListComponent_ng_template_12_vdr_dt2_custom_field_column_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 21);
  }
  if (rf & 2) {
    const customField_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("customField", customField_r8)("sort", ctx_r1.sorts);
  }
}
function ZoneListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-data-table-2", 8);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵpipe(5, "async");
    ɵɵlistener("pageChange", function ZoneListComponent_ng_template_12_Template_vdr_data_table_2_pageChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setPageNumber($event));
    })("itemsPerPageChange", function ZoneListComponent_ng_template_12_Template_vdr_data_table_2_itemsPerPageChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setItemsPerPage($event));
    })("visibleColumnsChange", function ZoneListComponent_ng_template_12_Template_vdr_data_table_2_visibleColumnsChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setVisibleColumns($event));
    });
    ɵɵelement(6, "vdr-bulk-action-menu", 9)(7, "vdr-dt2-search", 10);
    ɵɵpipe(8, "translate");
    ɵɵelementStart(9, "vdr-dt2-column", 11);
    ɵɵpipe(10, "translate");
    ɵɵtemplate(11, ZoneListComponent_ng_template_12_ng_template_11_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(12, "vdr-dt2-column", 12);
    ɵɵpipe(13, "translate");
    ɵɵtemplate(14, ZoneListComponent_ng_template_12_ng_template_14_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(15, "vdr-dt2-column", 13);
    ɵɵpipe(16, "translate");
    ɵɵtemplate(17, ZoneListComponent_ng_template_12_ng_template_17_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(18, "vdr-dt2-column", 14);
    ɵɵpipe(19, "translate");
    ɵɵtemplate(20, ZoneListComponent_ng_template_12_ng_template_20_Template, 4, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(21, "vdr-dt2-column", 15);
    ɵɵpipe(22, "translate");
    ɵɵtemplate(23, ZoneListComponent_ng_template_12_ng_template_23_Template, 5, 8, "ng-template");
    ɵɵelementEnd();
    ɵɵtemplate(24, ZoneListComponent_ng_template_12_vdr_dt2_custom_field_column_24_Template, 1, 2, "vdr-dt2-custom-field-column", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.dataTableListId)("items", ɵɵpipeBind1(1, 25, ctx_r1.items$))("itemsPerPage", ɵɵpipeBind1(2, 27, ctx_r1.itemsPerPage$))("totalItems", ɵɵpipeBind1(3, 29, ctx_r1.totalItems$))("currentPage", ɵɵpipeBind1(4, 31, ctx_r1.currentPage$))("filters", ctx_r1.filters)("activeIndex", ɵɵpipeBind1(5, 33, ctx_r1.activeIndex$));
    ɵɵadvance(6);
    ɵɵproperty("hostComponent", ctx_r1)("selectionManager", ctx_r1.selectionManager);
    ɵɵadvance();
    ɵɵproperty("searchTermControl", ctx_r1.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(8, 35, "common.search-by-name"));
    ɵɵadvance(2);
    ɵɵproperty("heading", ɵɵpipeBind1(10, 37, "common.id"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(13, 39, "common.created-at"))("hiddenByDefault", true)("sort", ctx_r1.sorts.get("createdAt"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(16, 41, "common.updated-at"))("hiddenByDefault", true)("sort", ctx_r1.sorts.get("updatedAt"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(19, 43, "common.name"))("optional", false)("sort", ctx_r1.sorts.get("name"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(22, 45, "common.view-contents"))("optional", false);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r1.customFields);
  }
}
function ZoneListComponent_ng_template_13_ng_container_0_vdr_zone_member_list_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-zone-member-list", 25);
    ɵɵlistener("selectionChange", function ZoneListComponent_ng_template_13_ng_container_0_vdr_zone_member_list_6_Template_vdr_zone_member_list_selectionChange_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.selectedMemberIds = $event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const activeZone_r12 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("selectedMemberIds", ctx_r1.selectedMemberIds)("activeZone", activeZone_r12);
  }
}
function ZoneListComponent_ng_template_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 23);
    ɵɵlistener("click", function ZoneListComponent_ng_template_13_ng_container_0_Template_button_click_1_listener() {
      const activeZone_r10 = ɵɵrestoreView(_r9).ngIf;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.addToZone(activeZone_r10));
    });
    ɵɵelement(2, "clr-icon", 7);
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()();
    ɵɵtemplate(6, ZoneListComponent_ng_template_13_ng_container_0_vdr_zone_member_list_6_Template, 1, 2, "vdr-zone-member-list", 24);
    ɵɵpipe(7, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const activeZone_r10 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 2, "settings.add-countries-to-zone", ɵɵpureFunction1(7, _c1, activeZone_r10.name)));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(7, 5, ctx_r1.activeZone$));
  }
}
function ZoneListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ZoneListComponent_ng_template_13_ng_container_0_Template, 8, 9, "ng-container", 22);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r1.activeZone$));
  }
}
var ZoneMemberControlsDirective = class _ZoneMemberControlsDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static {
    this.ɵfac = function ZoneMemberControlsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneMemberControlsDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ZoneMemberControlsDirective,
      selectors: [["", "vdrZoneMemberControls", ""]],
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneMemberControlsDirective, [{
    type: Directive,
    args: [{
      selector: "[vdrZoneMemberControls]",
      standalone: false
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var ZoneMemberListHeaderDirective = class _ZoneMemberListHeaderDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static {
    this.ɵfac = function ZoneMemberListHeaderDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneMemberListHeaderDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ZoneMemberListHeaderDirective,
      selectors: [["", "vdrZoneMemberListHeader", ""]],
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneMemberListHeaderDirective, [{
    type: Directive,
    args: [{
      selector: "[vdrZoneMemberListHeader]",
      standalone: false
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var ZoneMemberListComponent = class _ZoneMemberListComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.selectedMemberIds = [];
    this.selectionChange = new EventEmitter();
    this.filterTermControl = new FormControl("");
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.selectionManager = new SelectionManager({
      multiSelect: true,
      itemsAreEqual: (a, b) => a.id === b.id,
      additiveMode: true
    });
    this.membersInput$ = new Subject();
    this.activeZoneInput$ = new BehaviorSubject(void 0);
    this.destroy$ = new Subject();
    this.refresh$ = new Subject();
  }
  ngOnInit() {
    const activeZoneMembers$ = merge(this.activeZoneInput$, this.refresh$).pipe(switchMap((activeZone) => this.activeZone ? this.dataService.query(GetZoneMembersDocument, {
      zoneId: this.activeZone.id
    }).mapSingle(({
      zone
    }) => zone?.members ?? []) : of([])));
    this.members$ = merge(activeZoneMembers$, this.membersInput$);
    this.members$.pipe(take(1)).subscribe((members) => {
      this.selectionManager.setCurrentItems(members?.filter((m) => this.selectedMemberIds.includes(m.id)) ?? []);
    });
    this.selectionManager.selectionChanges$.pipe(takeUntil(this.destroy$)).subscribe((selection) => {
      this.selectionChange.emit(selection.map((s) => s.id));
    });
    this.filteredMembers$ = combineLatest(this.members$, this.filterTermControl.valueChanges.pipe(startWith(""))).pipe(map(([members, filterTerm]) => {
      if (filterTerm) {
        const term = filterTerm?.toLocaleLowerCase() ?? "";
        return members.filter((m) => m.name.toLocaleLowerCase().includes(term) || m.code.toLocaleLowerCase().includes(term));
      } else {
        return members;
      }
    }));
    this.totalItems$ = this.filteredMembers$.pipe(map((members) => members.length));
  }
  ngOnChanges(changes) {
    if ("members" in changes) {
      this.membersInput$.next(this.members ?? []);
    }
    if ("activeZone" in changes) {
      this.activeZoneInput$.next(this.activeZone);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  refresh() {
    this.refresh$.next();
  }
  static {
    this.ɵfac = function ZoneMemberListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneMemberListComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ZoneMemberListComponent,
      selectors: [["vdr-zone-member-list"]],
      contentQueries: function ZoneMemberListComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, ZoneMemberListHeaderDirective, 5);
          ɵɵcontentQuery(dirIndex, ZoneMemberControlsDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.controlsTemplate = _t.first);
        }
      },
      inputs: {
        locationId: "locationId",
        members: "members",
        selectedMemberIds: "selectedMemberIds",
        activeZone: "activeZone"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 24,
      vars: 38,
      consts: [[3, "itemsPerPageChange", "pageChange", "id", "items", "totalItems", "itemsPerPage", "currentPage"], [3, "locationId", "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "updated-at", 3, "heading", "hiddenByDefault"], ["id", "name", 3, "heading", "optional"], ["id", "code", 3, "heading"], ["id", "enabled", 3, "heading"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success"], ["colorType", "warning"]],
      template: function ZoneMemberListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-data-table-2", 0);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵlistener("itemsPerPageChange", function ZoneMemberListComponent_Template_vdr_data_table_2_itemsPerPageChange_0_listener($event) {
            return ctx.itemsPerPage = $event;
          })("pageChange", function ZoneMemberListComponent_Template_vdr_data_table_2_pageChange_0_listener($event) {
            return ctx.currentPage = $event;
          });
          ɵɵelement(3, "vdr-bulk-action-menu", 1)(4, "vdr-dt2-search", 2);
          ɵɵpipe(5, "translate");
          ɵɵelementStart(6, "vdr-dt2-column", 3);
          ɵɵpipe(7, "translate");
          ɵɵtemplate(8, ZoneMemberListComponent_ng_template_8_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(9, "vdr-dt2-column", 4);
          ɵɵpipe(10, "translate");
          ɵɵtemplate(11, ZoneMemberListComponent_ng_template_11_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(12, "vdr-dt2-column", 5);
          ɵɵpipe(13, "translate");
          ɵɵtemplate(14, ZoneMemberListComponent_ng_template_14_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-dt2-column", 6);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, ZoneMemberListComponent_ng_template_17_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 7);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, ZoneMemberListComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 8);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, ZoneMemberListComponent_ng_template_23_Template, 2, 2, "ng-template");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("id", ctx.locationId)("items", ɵɵpipeBind1(1, 20, ctx.filteredMembers$))("totalItems", ɵɵpipeBind1(2, 22, ctx.totalItems$))("itemsPerPage", ctx.itemsPerPage)("currentPage", ctx.currentPage);
          ɵɵadvance(3);
          ɵɵproperty("locationId", ctx.locationId)("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.filterTermControl)("searchTermPlaceholder", ɵɵpipeBind1(5, 24, "common.search-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(7, 26, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(10, 28, "common.created-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(13, 30, "common.updated-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 32, "common.name"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 34, "common.code"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 36, "common.enabled"));
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, RouterLink, ChipComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: [".members-header[_ngcontent-%COMP%]{background-color:var(--color-component-bg-100);position:sticky;top:0;padding:6px;z-index:5;border-bottom:1px solid var(--color-component-border-200)}.members-header[_ngcontent-%COMP%]   .header-title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.members-header[_ngcontent-%COMP%]   .clr-input[_ngcontent-%COMP%]{width:100%}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneMemberListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-zone-member-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-data-table-2
    [id]="locationId"
    [items]="filteredMembers$ | async"
    [totalItems]="totalItems$ | async"
    [itemsPerPage]="itemsPerPage"
    [currentPage]="currentPage"
    (itemsPerPageChange)="itemsPerPage = $event"
    (pageChange)="currentPage = $event"
>
    <vdr-bulk-action-menu
        [locationId]="locationId"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    ></vdr-bulk-action-menu>
    <vdr-dt2-search
        [searchTermControl]="filterTermControl"
        [searchTermPlaceholder]="'common.search-by-name' | translate"
    ></vdr-dt2-search>
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-member="item">
            {{ member.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.created-at' | translate" id="created-at" [hiddenByDefault]="true">
        <ng-template let-member="item">
            {{ member.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.updated-at' | translate" id="updated-at" [hiddenByDefault]="true">
        <ng-template let-member="item">
            {{ member.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false">
        <ng-template let-member="item">
            <a class="button-ghost" [routerLink]="['/settings/countries', member.id]"
                ><span> {{ member.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.code' | translate" id="code">
        <ng-template let-member="item">
            {{ member.code }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.enabled' | translate" id="enabled">
        <ng-template let-member="item">
            <vdr-chip  *ngIf="member.enabled" colorType="success">{{ 'common.enabled' | translate }}</vdr-chip>
            <vdr-chip  *ngIf="!member.enabled" colorType="warning">{{ 'common.disabled' | translate }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
</vdr-data-table-2>
`,
      styles: [".members-header{background-color:var(--color-component-bg-100);position:sticky;top:0;padding:6px;z-index:5;border-bottom:1px solid var(--color-component-border-200)}.members-header .header-title-row{display:flex;justify-content:space-between;align-items:center}.members-header .clr-input{width:100%}\n"]
    }]
  }], () => [{
    type: DataService
  }], {
    locationId: [{
      type: Input
    }],
    members: [{
      type: Input
    }],
    selectedMemberIds: [{
      type: Input
    }],
    activeZone: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [ZoneMemberListHeaderDirective]
    }],
    controlsTemplate: [{
      type: ContentChild,
      args: [ZoneMemberControlsDirective]
    }]
  });
})();
var GET_ZONE_MEMBERS = gql`
    query GetZoneMembers($zoneId: ID!) {
        zone(id: $zoneId) {
            id
            createdAt
            updatedAt
            name
            members {
                createdAt
                updatedAt
                id
                name
                code
                enabled
            }
        }
    }
`;
var AddCountryToZoneDialogComponent = class _AddCountryToZoneDialogComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.selectedMemberIds = [];
  }
  ngOnInit() {
    this.currentMembers$ = this.dataService.query(GetZoneMembersDocument, {
      zoneId: this.zoneId
    }).mapSingle(({
      zone
    }) => zone?.members ?? []);
    this.availableCountries$ = this.dataService.query(GetCountryListDocument, {
      options: {
        take: 999
      }
    }).mapStream((data) => data.countries.items).pipe(withLatestFrom(this.currentMembers$), map(([countries, currentMembers]) => countries.filter((c) => !currentMembers.find((cm) => cm.id === c.id))));
  }
  cancel() {
    this.resolveWith();
  }
  add() {
    this.resolveWith(this.selectedMemberIds);
  }
  static {
    this.ɵfac = function AddCountryToZoneDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddCountryToZoneDialogComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddCountryToZoneDialogComponent,
      selectors: [["vdr-add-country-to-zone-dialog"]],
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["vdrDialogTitle", ""], ["locationId", "zone-members-list", 3, "selectionChange", "members", "selectedMemberIds"], ["vdrDialogButtons", ""], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function AddCountryToZoneDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AddCountryToZoneDialogComponent_ng_template_0_Template, 2, 6, "ng-template", 0);
          ɵɵelementStart(1, "vdr-zone-member-list", 1);
          ɵɵpipe(2, "async");
          ɵɵlistener("selectionChange", function AddCountryToZoneDialogComponent_Template_vdr_zone_member_list_selectionChange_1_listener($event) {
            return ctx.selectedMemberIds = $event;
          });
          ɵɵelementEnd();
          ɵɵtemplate(3, AddCountryToZoneDialogComponent_ng_template_3_Template, 6, 10, "ng-template", 2);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("members", ɵɵpipeBind1(2, 2, ctx.availableCountries$))("selectedMemberIds", ctx.selectedMemberIds);
        }
      },
      dependencies: [DialogButtonsDirective, DialogTitleDirective, ZoneMemberListComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCountryToZoneDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-add-country-to-zone-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'settings.add-countries-to-zone' | translate: { zoneName: zoneName } }}</ng-template>

<vdr-zone-member-list
    locationId="zone-members-list"
    [members]="availableCountries$ | async"
    [selectedMemberIds]="selectedMemberIds"
    (selectionChange)="selectedMemberIds = $event"
>
</vdr-zone-member-list>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="add()" [disabled]="!selectedMemberIds.length" class="btn btn-primary">
        {{ 'settings.add-countries-to-zone' | translate: { zoneName: zoneName } }}
    </button>
</ng-template>
`
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var PermissionGridComponent = class _PermissionGridComponent {
  constructor() {
    this.readonly = false;
    this.permissionChange = new EventEmitter();
  }
  ngOnInit() {
    this.buildGrid();
  }
  setPermission(permission, value) {
    if (!this.readonly) {
      this.permissionChange.emit({
        permission,
        value
      });
    }
  }
  toggleAll(defs) {
    const value = defs.some((d) => !this.activePermissions.includes(d.name));
    for (const def of defs) {
      this.permissionChange.emit({
        permission: def.name,
        value
      });
    }
  }
  buildGrid() {
    const crudGroups = /* @__PURE__ */ new Map();
    const nonCrud = [];
    const crudRe = /^(Create|Read|Update|Delete)([a-zA-Z]+)$/;
    for (const def of this.permissionDefinitions) {
      const isCrud = crudRe.test(def.name);
      if (isCrud) {
        const groupName = def.name.match(crudRe)?.[2];
        if (groupName) {
          const existing = crudGroups.get(groupName);
          if (existing) {
            existing.push(def);
          } else {
            crudGroups.set(groupName, [def]);
          }
        }
      } else if (def.assignable) {
        nonCrud.push(def);
      }
    }
    this.gridData = [...nonCrud.map((d) => ({
      label: d.name,
      description: d.description,
      permissions: [d]
    })), ...Array.from(crudGroups.entries()).map(([label, defs]) => ({
      label,
      description: this.extractCrudDescription(defs[0]),
      permissions: defs
    }))];
  }
  extractCrudDescription(def) {
    return def.description.replace(/Grants permission to [\w]+/, "Grants permissions on");
  }
  static {
    this.ɵfac = function PermissionGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionGridComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PermissionGridComponent,
      selectors: [["vdr-permission-grid"]],
      inputs: {
        permissionDefinitions: "permissionDefinitions",
        activePermissions: "activePermissions",
        readonly: "readonly"
      },
      outputs: {
        permissionChange: "permissionChange"
      },
      standalone: false,
      decls: 3,
      vars: 1,
      consts: [[1, "table"], [4, "ngFor", "ngForOf"], [1, "permission-group", "left"], ["class", "button-small", 3, "click", 4, "ngIf"], [1, "button-small", 3, "click"], ["size", "small", 3, "selectedChange", "title", "label", "disabled", "selected"]],
      template: function PermissionGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "table", 0)(1, "tbody");
          ɵɵtemplate(2, PermissionGridComponent_tr_2_Template, 12, 8, "tr", 1);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.gridData);
        }
      },
      dependencies: [NgForOf, NgIf, SelectToggleComponent, TranslatePipe],
      styles: ["[_nghost-%COMP%]{display:block}td.permission-group[_ngcontent-%COMP%]{max-width:300px;background-color:var(--color-component-bg-200)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionGridComponent, [{
    type: Component,
    args: [{
      selector: "vdr-permission-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<table class="table">
    <tbody>
        <tr *ngFor="let section of gridData">
            <td class="permission-group left">
                <div><strong>{{ section.label | translate }}</strong></div>
                <small>{{ section.description | translate }}</small><br>
                <button *ngIf="1 < section.permissions.length && !readonly" class="button-small" (click)="toggleAll(section.permissions)">
                    {{ 'common.toggle-all' | translate }}
                </button>
            </td>
            <td *ngFor="let permission of section.permissions" [attr.colspan]="section.permissions.length === 1 ? 4 : 1">
                <vdr-select-toggle
                    size="small"
                    [title]="permission.description"
                    [label]="permission.name"
                    [disabled]="readonly"
                    [selected]="activePermissions?.includes(permission.name)"
                    (selectedChange)="setPermission(permission.name, $event)"
                ></vdr-select-toggle>
            </td>
        </tr>
    </tbody>
</table>
`,
      styles: [":host{display:block}td.permission-group{max-width:300px;background-color:var(--color-component-bg-200)}\n"]
    }]
  }], null, {
    permissionDefinitions: [{
      type: Input
    }],
    activePermissions: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    permissionChange: [{
      type: Output
    }]
  });
})();
var GET_ADMINISTRATOR_DETAIL = gql`
    query GetAdministratorDetail($id: ID!) {
        administrator(id: $id) {
            ...Administrator
        }
    }
    ${ADMINISTRATOR_FRAGMENT}
`;
var AdminDetailComponent = class _AdminDetailComponent extends TypedBaseDetailComponent {
  getAvailableChannels() {
    return Object.values(this.selectedRolePermissions);
  }
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("Administrator");
    this.detailForm = this.formBuilder.group({
      emailAddress: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      password: [""],
      roles: [[]],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.selectedRoles = [];
    this.selectedRolePermissions = {};
    this.selectedChannelId = null;
  }
  ngOnInit() {
    this.init();
    this.allRoles$ = this.dataService.administrator.getRoles(999).mapStream((item) => item.roles.items.filter((i) => i.code !== import_shared_constants.CUSTOMER_ROLE_CODE));
    this.dataService.client.userStatus().single$.subscribe(({
      userStatus
    }) => {
      if (!userStatus.permissions.includes(Permission.CreateAdministrator) && !userStatus.permissions.includes(Permission.UpdateAdministrator)) {
        const rolesSelect = this.detailForm.get("roles");
        if (rolesSelect) {
          rolesSelect.disable();
        }
      }
    });
    this.permissionDefinitions = this.serverConfigService.getPermissionDefinitions();
  }
  ngOnDestroy() {
    this.destroy();
  }
  rolesChanged(roles) {
    this.buildPermissionsMap();
  }
  getPermissionsForSelectedChannel() {
    function getActivePermissions(input) {
      return Object.entries(input).filter(([permission, active]) => active).map(([permission, active]) => permission);
    }
    if (this.selectedChannelId) {
      const selectedChannel = this.selectedRolePermissions[this.selectedChannelId];
      if (selectedChannel) {
        const permissionMap = this.selectedRolePermissions[this.selectedChannelId].permissions;
        return getActivePermissions(permissionMap);
      }
    }
    const channels = Object.values(this.selectedRolePermissions);
    if (0 < channels.length) {
      this.selectedChannelId = channels[0].channelId;
      return getActivePermissions(channels[0].permissions);
    }
    return [];
  }
  create() {
    const {
      emailAddress,
      firstName,
      lastName,
      password,
      customFields,
      roles
    } = this.detailForm.value;
    if (!emailAddress || !firstName || !lastName || !password) {
      return;
    }
    const administrator = {
      emailAddress,
      firstName,
      lastName,
      password,
      customFields,
      roleIds: roles?.map((role) => role.id).filter(import_shared_utils.notNullOrUndefined) ?? []
    };
    this.dataService.administrator.createAdministrator(administrator).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Administrator"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createAdministrator.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "Administrator"
      });
    });
  }
  save() {
    this.entity$.pipe(take(1), mergeMap(({
      id
    }) => {
      const formValue = this.detailForm.value;
      const administrator = {
        id,
        emailAddress: formValue.emailAddress,
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        password: formValue.password,
        customFields: formValue.customFields,
        roleIds: formValue.roles?.map((role) => role.id)
      };
      return this.dataService.administrator.updateAdministrator(administrator);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Administrator"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Administrator"
      });
    });
  }
  setFormValues(entity, languageCode) {
    this.detailForm.patchValue({
      emailAddress: entity.emailAddress,
      firstName: entity.firstName,
      lastName: entity.lastName,
      roles: entity.user.roles
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), entity);
    }
    const passwordControl = this.detailForm.get("password");
    if (passwordControl) {
      if (!entity.id) {
        passwordControl.setValidators([Validators.required]);
      } else {
        passwordControl.setValidators([]);
      }
    }
    this.buildPermissionsMap();
  }
  buildPermissionsMap() {
    const permissionsControl = this.detailForm.get("roles");
    if (permissionsControl) {
      const roles = permissionsControl.value;
      const channelIdPermissionsMap = /* @__PURE__ */ new Map();
      const channelIdCodeMap = /* @__PURE__ */ new Map();
      for (const role of roles ?? []) {
        for (const channel of role.channels) {
          const channelPermissions = channelIdPermissionsMap.get(channel.id);
          const permissionSet = channelPermissions || /* @__PURE__ */ new Set();
          role.permissions.forEach((p) => permissionSet.add(p));
          channelIdPermissionsMap.set(channel.id, permissionSet);
          channelIdCodeMap.set(channel.id, channel.code);
        }
      }
      this.selectedRolePermissions = {};
      for (const channelId of Array.from(channelIdPermissionsMap.keys())) {
        const permissionSet = channelIdPermissionsMap.get(channelId);
        const permissionsHash = {};
        for (const def of this.serverConfigService.getPermissionDefinitions()) {
          permissionsHash[def.name] = permissionSet.has(def.name);
        }
        this.selectedRolePermissions[channelId] = {
          /* eslint-disable @typescript-eslint/no-non-null-assertion */
          channelId,
          channelCode: channelIdCodeMap.get(channelId),
          permissions: permissionsHash
          /* eslint-enable @typescript-eslint/no-non-null-assertion */
        };
      }
    }
  }
  static {
    this.ɵfac = function AdminDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AdminDetailComponent,
      selectors: [["vdr-admin-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 45,
      vars: 53,
      consts: [["updateButton", ""], ["locationId", "administrator-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "emailAddress", 1, "form-grid-span", 3, "label"], ["id", "emailAddress", "type", "text", "formControlName", "emailAddress", 3, "readonly"], ["for", "firstName", 3, "label"], ["id", "firstName", "type", "text", "formControlName", "firstName", 3, "readonly"], ["for", "lastName", 3, "label"], ["id", "lastName", "type", "text", "formControlName", "lastName", 3, "readonly"], ["for", "password", 3, "label", 4, "ngIf"], ["for", "password", 3, "label", "readOnlyToggle", 4, "ngIf"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "administrator-detail", 3, "entity$", "detailForm"], [3, "title"], ["formControlName", "roles", "bindLabel", "description", 3, "change", "items", "multiple", "hideSelected"], ["role", "tablist", 1, "nav", "mt-2"], ["role", "presentation", "class", "nav-item", 4, "ngFor", "ngForOf"], [3, "activePermissions", "permissionDefinitions", "readonly"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["for", "password", 3, "label"], ["id", "password", "type", "password", "formControlName", "password"], ["for", "password", 3, "label", "readOnlyToggle"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Administrator", 3, "customFields", "customFieldsFormGroup"], ["role", "presentation", 1, "nav-item"], ["type", "button", 1, "btn", "btn-link", "nav-link", 3, "click", "id"]],
      template: function AdminDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, AdminDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, AdminDetailComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar");
          ɵɵtemplate(13, AdminDetailComponent_vdr_card_13_Template, 2, 1, "vdr-card", 4);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-page-block")(16, "vdr-card")(17, "div", 5)(18, "vdr-form-field", 6);
          ɵɵpipe(19, "translate");
          ɵɵelement(20, "input", 7);
          ɵɵpipe(21, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(22, "vdr-form-field", 8);
          ɵɵpipe(23, "translate");
          ɵɵelement(24, "input", 9);
          ɵɵpipe(25, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(26, "vdr-form-field", 10);
          ɵɵpipe(27, "translate");
          ɵɵelement(28, "input", 11);
          ɵɵpipe(29, "hasPermission");
          ɵɵelementEnd();
          ɵɵtemplate(30, AdminDetailComponent_vdr_form_field_30_Template, 3, 3, "vdr-form-field", 12);
          ɵɵpipe(31, "async");
          ɵɵtemplate(32, AdminDetailComponent_vdr_form_field_32_Template, 3, 4, "vdr-form-field", 13);
          ɵɵpipe(33, "async");
          ɵɵpipe(34, "hasPermission");
          ɵɵelementEnd()();
          ɵɵtemplate(35, AdminDetailComponent_vdr_card_35_Template, 3, 5, "vdr-card", 14);
          ɵɵelement(36, "vdr-custom-detail-component-host", 15);
          ɵɵelementEnd()();
          ɵɵelementStart(37, "vdr-page-block")(38, "vdr-card", 16);
          ɵɵpipe(39, "translate");
          ɵɵelementStart(40, "ng-select", 17);
          ɵɵpipe(41, "async");
          ɵɵlistener("change", function AdminDetailComponent_Template_ng_select_change_40_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.rolesChanged($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(42, "ul", 18);
          ɵɵtemplate(43, AdminDetailComponent_li_43_Template, 5, 9, "li", 19);
          ɵɵelementEnd();
          ɵɵelement(44, "vdr-permission-grid", 20);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r8 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 23, ctx.isNew$))("ngIfElse", updateButton_r8);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 25, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(19, 27, "settings.email-address-or-identifier"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(21, 29, ɵɵpureFunction0(49, _c2)));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(23, 31, "settings.first-name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(25, 33, ɵɵpureFunction0(50, _c2)));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(27, 35, "settings.last-name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(29, 37, ɵɵpureFunction0(51, _c2)));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(31, 39, ctx.isNew$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(33, 41, ctx.isNew$) && ɵɵpipeBind1(34, 43, ɵɵpureFunction0(52, _c2)));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
          ɵɵadvance(2);
          ɵɵproperty("title", ɵɵpipeBind1(39, 45, "settings.roles"));
          ɵɵadvance(2);
          ɵɵproperty("items", ɵɵpipeBind1(41, 47, ctx.allRoles$))("multiple", true)("hideSelected", true);
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.getAvailableChannels());
          ɵɵadvance();
          ɵɵproperty("activePermissions", ctx.getPermissionsForSelectedChannel())("permissionDefinitions", ctx.permissionDefinitions)("readonly", true);
        }
      },
      dependencies: [NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, NgSelectComponent, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, IfPermissionsDirective, ActionBarItemsComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, PermissionGridComponent, AsyncPipe, TranslatePipe, HasPermissionPipe, ChannelLabelPipe],
      styles: ["ul.nav[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-admin-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="administrator-detail" />
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="detailForm.invalid || detailForm.pristine"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    class="btn btn-primary"
                    (click)="save()"
                    *vdrIfPermissions="'UpdateAdministrator'"
                    [disabled]="detailForm.invalid || detailForm.pristine"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="administrator-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card *ngIf="entity$ | async as entity">
                <vdr-page-entity-info [entity]="entity" />
            </vdr-card>
        </vdr-page-detail-sidebar>
        <vdr-page-block>
            <vdr-card>
                <div class="form-grid">
                    <vdr-form-field
                        [label]="'settings.email-address-or-identifier' | translate"
                        for="emailAddress"
                        class="form-grid-span"
                    >
                        <input
                            id="emailAddress"
                            type="text"
                            formControlName="emailAddress"
                            [readonly]="!(['CreateAdministrator', 'UpdateAdministrator'] | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field [label]="'settings.first-name' | translate" for="firstName">
                        <input
                            id="firstName"
                            type="text"
                            formControlName="firstName"
                            [readonly]="!(['CreateAdministrator', 'UpdateAdministrator'] | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field [label]="'settings.last-name' | translate" for="lastName">
                        <input
                            id="lastName"
                            type="text"
                            formControlName="lastName"
                            [readonly]="!(['CreateAdministrator', 'UpdateAdministrator'] | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        *ngIf="isNew$ | async"
                        [label]="'settings.password' | translate"
                        for="password"
                    >
                        <input id="password" type="password" formControlName="password" />
                    </vdr-form-field>
                    <vdr-form-field
                        *ngIf="
                            !(isNew$ | async) &&
                            (['CreateAdministrator', 'UpdateAdministrator'] | hasPermission)
                        "
                        [label]="'settings.password' | translate"
                        for="password"
                        [readOnlyToggle]="true"
                    >
                        <input id="password" type="password" formControlName="password" />
                    </vdr-form-field>
                </div>
            </vdr-card>

            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="Administrator"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="administrator-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
    <vdr-page-block>
        <vdr-card [title]="'settings.roles' | translate">
            <ng-select
                [items]="allRoles$ | async"
                [multiple]="true"
                [hideSelected]="true"
                formControlName="roles"
                (change)="rolesChanged($event)"
                bindLabel="description"
            ></ng-select>

            <ul class="nav mt-2" role="tablist">
                <li role="presentation" class="nav-item" *ngFor="let channel of getAvailableChannels()">
                    <button
                        [id]="channel.channelId"
                        (click)="selectedChannelId = channel.channelId"
                        class="btn btn-link nav-link"
                        [class.active]="selectedChannelId === channel.channelId"
                        [attr.aria-selected]="selectedChannelId === channel.channelId"
                        type="button"
                    >
                        {{ channel.channelCode | channelCodeToLabel | translate }}
                    </button>
                </li>
            </ul>
            <vdr-permission-grid
                [activePermissions]="getPermissionsForSelectedChannel()"
                [permissionDefinitions]="permissionDefinitions"
                [readonly]="true"
            ></vdr-permission-grid>
        </vdr-card>
    </vdr-page-block>
</form>
`,
      styles: ["ul.nav{overflow-x:auto;overflow-y:hidden}\n"]
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
var deleteAdministratorsBulkAction = createBulkDeleteAction({
  location: "administrator-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteAdministrator),
  getItemName: (item) => item.firstName + " " + item.lastName,
  bulkDelete: (dataService, ids) => dataService.administrator.deleteAdministrators(ids).pipe(map((res) => res.deleteAdministrators))
});
var GET_ADMINISTRATOR_LIST = gql`
    query GetAdministratorList($options: AdministratorListOptions) {
        administrators(options: $options) {
            items {
                ...AdministratorListItem
            }
            totalItems
        }
    }
    fragment AdministratorListItem on Administrator {
        id
        createdAt
        updatedAt
        firstName
        lastName
        emailAddress
        user {
            id
            identifier
            lastLogin
            roles {
                id
                createdAt
                updatedAt
                code
                description
            }
        }
    }
`;
var AdministratorListComponent = class _AdministratorListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "administrator-list";
    this.customFields = this.getCustomFieldConfig("Administrator");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "firstName",
      type: {
        kind: "text"
      },
      label: marker("settings.first-name"),
      filterField: "firstName"
    }).addFilter({
      name: "lastName",
      type: {
        kind: "text"
      },
      label: marker("settings.last-name"),
      filterField: "lastName"
    }).addFilter({
      name: "emailAddress",
      type: {
        kind: "text"
      },
      label: marker("settings.email-address"),
      filterField: "emailAddress"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "lastName"
    }).addSort({
      name: "emailAddress"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetAdministratorListDocument,
      getItems: (data) => data.administrators,
      setVariables: (skip, take2) => this.createSearchQuery(skip, take2, this.searchTermControl.value),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  createSearchQuery(skip, take2, searchTerm) {
    let _filter = {};
    let filterOperator = LogicalOperator.AND;
    if (searchTerm) {
      _filter = {
        emailAddress: {
          contains: searchTerm
        },
        firstName: {
          contains: searchTerm
        },
        lastName: {
          contains: searchTerm
        }
      };
      filterOperator = LogicalOperator.OR;
    }
    return {
      options: {
        skip,
        take: take2,
        filter: __spreadValues(__spreadValues({}, _filter ?? {}), this.filters.createFilterInput()),
        sort: this.sorts.createSortInput(),
        filterOperator
      }
    };
  }
  static {
    this.ɵfac = function AdministratorListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministratorListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AdministratorListComponent,
      selectors: [["vdr-administrator-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 34,
      vars: 49,
      consts: [["locationId", "administrator-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "administrator-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "email-address", 3, "heading", "sort"], ["id", "roles", 3, "heading"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [4, "ngFor", "ngForOf"], [3, "customField", "sorts"]],
      template: function AdministratorListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, AdministratorListComponent_a_5_Template, 4, 5, "a", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 2);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function AdministratorListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function AdministratorListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function AdministratorListComponent_Template_vdr_data_table_2_visibleColumnsChange_7_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 3)(13, "vdr-dt2-search", 4);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 5);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, AdministratorListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, AdministratorListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, AdministratorListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, AdministratorListComponent_ng_template_26_Template, 4, 5, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, AdministratorListComponent_ng_template_29_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 10);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, AdministratorListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(33, AdministratorListComponent_vdr_dt2_custom_field_column_33_Template, 1, 2, "vdr-dt2-custom-field-column", 11);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(48, _c3));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(8, 26, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 28, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 30, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 32, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 34, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 36, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 38, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 40, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 42, "common.name"))("optional", false)("sort", ctx.sorts.get("lastName"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 44, "settings.email-address"))("sort", ctx.sorts.get("emailAddress"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 46, "settings.roles"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: [".search-input[_ngcontent-%COMP%]{min-width:300px}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministratorListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-administrator-list",
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="administrator-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateAdministrator']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'admin.create-new-administrator' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="administrator-list" />
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
        locationId="administrator-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-administrator="item">
            {{ administrator.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-administrator="item">
            {{ administrator.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-administrator="item">
            {{ administrator.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false" [sort]="sorts.get('lastName')">
        <ng-template let-administrator="item">
            <a class="button-ghost" [routerLink]="['./', administrator.id]"
                ><span>{{ administrator.firstName }} {{ administrator.lastName }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.email-address' | translate" id="email-address" [sort]="sorts.get('emailAddress')">
        <ng-template let-administrator="item">
            {{ administrator.emailAddress }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.roles' | translate" id="roles">
        <ng-template let-administrator="item">
            <vdr-chip *ngFor="let role of administrator.user.roles">{{ role.description }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let customField of customFields"
        [customField]="customField"
        [sorts]="sorts"
    />
</vdr-data-table-2>
`,
      styles: [".search-input{min-width:300px}\n"]
    }]
  }], () => [], null);
})();
var GET_CHANNEL_DETAIL = gql`
    query GetChannelDetail($id: ID!) {
        channel(id: $id) {
            ...Channel
        }
    }
    ${CHANNEL_FRAGMENT}
`;
var ChannelDetailComponent = class _ChannelDetailComponent extends TypedBaseDetailComponent {
  constructor(serverConfigService, changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.serverConfigService = serverConfigService;
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.DEFAULT_CHANNEL_CODE = import_shared_constants.DEFAULT_CHANNEL_CODE;
    this.customFields = this.getCustomFieldConfig("Channel");
    this.detailForm = this.formBuilder.group({
      code: ["", Validators.required],
      token: ["", Validators.required],
      pricesIncludeTax: [false],
      availableLanguageCodes: [[]],
      availableCurrencyCodes: [[]],
      defaultCurrencyCode: ["", Validators.required],
      defaultShippingZoneId: ["", Validators.required],
      defaultLanguageCode: [void 0, Validators.required],
      defaultTaxZoneId: ["", Validators.required],
      sellerId: ["", Validators.required],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.updatePermission = [Permission.SuperAdmin, Permission.UpdateChannel, Permission.CreateChannel];
  }
  ngOnInit() {
    this.init();
    this.sellers$ = this.dataService.settings.getSellerList().mapSingle((data) => data.sellers.items);
    this.availableLanguageCodes$ = this.serverConfigService.getAvailableLanguages();
    this.detailForm.controls.availableCurrencyCodes.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (value) {
        const defaultCurrencyCode = this.detailForm.controls.defaultCurrencyCode.value;
        if (defaultCurrencyCode && !value.includes(defaultCurrencyCode)) {
          this.detailForm.controls.defaultCurrencyCode.setValue(value[0]);
        }
      }
    });
    this.detailForm.controls.availableLanguageCodes.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (value) {
        const defaultLanguageCode = this.detailForm.controls.defaultLanguageCode.value;
        if (defaultLanguageCode && !value.includes(defaultLanguageCode)) {
          this.detailForm.controls.defaultLanguageCode.setValue(value[0]);
        }
      }
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  saveButtonEnabled() {
    return this.detailForm.dirty && this.detailForm.valid;
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const {
      code,
      token,
      defaultLanguageCode,
      pricesIncludeTax,
      defaultCurrencyCode,
      defaultShippingZoneId,
      defaultTaxZoneId,
      customFields,
      sellerId
    } = this.detailForm.value;
    if (!code || !token || !defaultLanguageCode || !defaultCurrencyCode || !defaultShippingZoneId || !defaultTaxZoneId) {
      return;
    }
    const input = {
      code,
      token,
      defaultLanguageCode,
      pricesIncludeTax: !!pricesIncludeTax,
      defaultCurrencyCode,
      defaultShippingZoneId,
      defaultTaxZoneId,
      customFields,
      sellerId
    };
    this.dataService.settings.createChannel(input).pipe(mergeMap(({
      createChannel
    }) => this.dataService.auth.currentUser().single$.pipe(map(({
      me
    }) => ({
      me,
      createChannel
    })))), mergeMap(({
      me,
      createChannel
    }) => (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.dataService.client.updateUserChannels(me.channels).pipe(map(() => createChannel))
    ))).subscribe((data) => {
      switch (data.__typename) {
        case "Channel":
          this.notificationService.success(marker("common.notify-create-success"), {
            entity: "Channel"
          });
          this.detailForm.markAsPristine();
          this.changeDetector.markForCheck();
          this.router.navigate(["../", data.id], {
            relativeTo: this.route
          });
          break;
        case "LanguageNotAvailableError":
          this.notificationService.error(data.message);
          break;
      }
    });
  }
  save() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    this.entity$.pipe(take(1), mergeMap((channel) => {
      const input = {
        id: channel.id,
        code: formValue.code,
        token: formValue.token,
        pricesIncludeTax: formValue.pricesIncludeTax,
        availableLanguageCodes: formValue.availableLanguageCodes,
        availableCurrencyCodes: formValue.availableCurrencyCodes,
        defaultCurrencyCode: formValue.defaultCurrencyCode,
        defaultShippingZoneId: formValue.defaultShippingZoneId,
        defaultLanguageCode: formValue.defaultLanguageCode,
        defaultTaxZoneId: formValue.defaultTaxZoneId,
        customFields: formValue.customFields,
        sellerId: formValue.sellerId
      };
      return this.dataService.settings.updateChannel(input);
    })).subscribe(({
      updateChannel
    }) => {
      switch (updateChannel.__typename) {
        case "Channel":
          this.notificationService.success(marker("common.notify-update-success"), {
            entity: "Channel"
          });
          this.detailForm.markAsPristine();
          this.changeDetector.markForCheck();
          break;
        case "LanguageNotAvailableError":
          this.notificationService.error(updateChannel.message);
      }
    });
  }
  /**
   * Update the form values when the entity changes.
   */
  setFormValues(entity, languageCode) {
    this.detailForm.patchValue({
      code: entity.code,
      token: entity.token || this.generateToken(),
      pricesIncludeTax: entity.pricesIncludeTax,
      availableLanguageCodes: entity.availableLanguageCodes,
      availableCurrencyCodes: entity.availableCurrencyCodes,
      defaultCurrencyCode: entity.defaultCurrencyCode,
      defaultShippingZoneId: entity.defaultShippingZone?.id ?? "",
      defaultLanguageCode: entity.defaultLanguageCode,
      defaultTaxZoneId: entity.defaultTaxZone?.id ?? "",
      sellerId: entity.seller?.id ?? ""
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), entity);
    }
    if (entity.code === import_shared_constants.DEFAULT_CHANNEL_CODE) {
      const codeControl = this.detailForm.get("code");
      if (codeControl) {
        codeControl.disable();
      }
    }
  }
  generateToken() {
    return Array.from(crypto.getRandomValues(new Uint8Array(10))).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  static {
    this.ɵfac = function ChannelDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChannelDetailComponent)(ɵɵdirectiveInject(ServerConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ChannelDetailComponent,
      selectors: [["vdr-channel-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 70,
      vars: 74,
      consts: [["updateButton", ""], ["locationId", "channel-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["class", "form-grid-span", "for", "code", 3, "label", 4, "ngIf"], ["class", "form-grid-span", 3, "label", 4, "ngIf"], ["for", "token", 3, "label"], ["id", "token", "type", "text", "formControlName", "token", 3, "readonly"], ["for", "sellerId", 3, "label"], ["name", "sellerId", "formControlName", "sellerId", 3, "vdrDisabled"], ["selected", "", "value", "", 2, "display", "none"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "availableLanguageCodes", 3, "label"], ["formControlName", "availableLanguageCodes", 3, "languageCodes"], ["for", "availableCurrencyCodes", 3, "label"], ["formControlName", "availableCurrencyCodes"], [3, "title"], ["for", "defaultLanguage", 3, "label"], ["name", "defaultLanguageCode", "formControlName", "defaultLanguageCode", 3, "vdrDisabled"], ["for", "defaultCurrency", 3, "label"], ["name", "defaultCurrencyCode", "formControlName", "defaultCurrencyCode", 3, "vdrDisabled"], ["for", "defaultTaxZoneId", 3, "label"], ["formControlName", "defaultTaxZoneId", 3, "vdrDisabled"], ["clrAlertType", "danger", 3, "clrAlertClosable", 4, "ngIf"], ["for", "defaultShippingZoneId", 3, "label"], ["name", "defaultShippingZoneId", "formControlName", "defaultShippingZoneId", 3, "vdrDisabled"], ["for", "pricesIncludeTax", 3, "label"], ["type", "checkbox", "clrToggle", "", "id", "pricesIncludeTax", "formControlName", "pricesIncludeTax", 3, "vdrDisabled"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "channel-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["for", "code", 1, "form-grid-span", 3, "label"], ["id", "code", "type", "text", "formControlName", "code", 3, "readonly"], [1, "form-grid-span", 3, "label"], [3, "value"], ["clrAlertType", "danger", 3, "clrAlertClosable"], [1, "alert-text"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Channel", 3, "customFields", "customFieldsFormGroup"]],
      template: function ChannelDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, ChannelDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, ChannelDetailComponent_ng_template_7_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar");
          ɵɵtemplate(13, ChannelDetailComponent_vdr_card_13_Template, 2, 1, "vdr-card", 4);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-page-block")(16, "vdr-card")(17, "div", 5);
          ɵɵtemplate(18, ChannelDetailComponent_vdr_form_field_18_Template, 4, 6, "vdr-form-field", 6)(19, ChannelDetailComponent_vdr_form_item_19_Template, 5, 8, "vdr-form-item", 7);
          ɵɵelementStart(20, "vdr-form-field", 8);
          ɵɵpipe(21, "translate");
          ɵɵelement(22, "input", 9);
          ɵɵpipe(23, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-form-field", 10);
          ɵɵpipe(25, "translate");
          ɵɵelementStart(26, "select", 11);
          ɵɵpipe(27, "hasPermission");
          ɵɵelement(28, "option", 12);
          ɵɵtemplate(29, ChannelDetailComponent_option_29_Template, 2, 2, "option", 13);
          ɵɵpipe(30, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(31, "vdr-form-field", 14);
          ɵɵpipe(32, "translate");
          ɵɵelement(33, "vdr-language-code-selector", 15);
          ɵɵpipe(34, "async");
          ɵɵelementEnd();
          ɵɵelementStart(35, "vdr-form-field", 16);
          ɵɵpipe(36, "translate");
          ɵɵelement(37, "vdr-currency-code-selector", 17);
          ɵɵelementEnd()()();
          ɵɵelementStart(38, "vdr-card", 18);
          ɵɵpipe(39, "translate");
          ɵɵelementStart(40, "div", 5)(41, "vdr-form-field", 19);
          ɵɵpipe(42, "translate");
          ɵɵelementStart(43, "select", 20);
          ɵɵpipe(44, "hasPermission");
          ɵɵtemplate(45, ChannelDetailComponent_option_45_Template, 4, 7, "option", 13);
          ɵɵelementEnd()();
          ɵɵelementStart(46, "vdr-form-field", 21);
          ɵɵpipe(47, "translate");
          ɵɵelementStart(48, "select", 22);
          ɵɵpipe(49, "hasPermission");
          ɵɵtemplate(50, ChannelDetailComponent_option_50_Template, 3, 4, "option", 13);
          ɵɵelementEnd()();
          ɵɵelementStart(51, "div")(52, "vdr-form-field", 23);
          ɵɵpipe(53, "translate");
          ɵɵelement(54, "vdr-zone-selector", 24);
          ɵɵpipe(55, "hasPermission");
          ɵɵelementEnd();
          ɵɵtemplate(56, ChannelDetailComponent_clr_alert_56_Template, 5, 4, "clr-alert", 25);
          ɵɵelementEnd();
          ɵɵelementStart(57, "div")(58, "vdr-form-field", 26);
          ɵɵpipe(59, "translate");
          ɵɵelement(60, "vdr-zone-selector", 27);
          ɵɵpipe(61, "hasPermission");
          ɵɵelementEnd();
          ɵɵtemplate(62, ChannelDetailComponent_clr_alert_62_Template, 5, 4, "clr-alert", 25);
          ɵɵelementEnd();
          ɵɵelementStart(63, "vdr-form-field", 28);
          ɵɵpipe(64, "translate");
          ɵɵelementStart(65, "clr-toggle-wrapper");
          ɵɵelement(66, "input", 29);
          ɵɵpipe(67, "hasPermission");
          ɵɵelementEnd()()()();
          ɵɵtemplate(68, ChannelDetailComponent_vdr_card_68_Template, 3, 5, "vdr-card", 30);
          ɵɵelement(69, "vdr-custom-detail-component-host", 31);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r8 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 32, ctx.isNew$))("ngIfElse", updateButton_r8);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 34, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("ngIf", (ctx.entity == null ? null : ctx.entity.code) !== ctx.DEFAULT_CHANNEL_CODE);
          ɵɵadvance();
          ɵɵproperty("ngIf", (ctx.entity == null ? null : ctx.entity.code) === ctx.DEFAULT_CHANNEL_CODE);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(21, 36, "settings.channel-token"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(23, 38, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(25, 40, "common.seller"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(27, 42, ctx.updatePermission));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(30, 44, ctx.sellers$));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(32, 46, "common.available-languages"));
          ɵɵadvance(2);
          ɵɵproperty("languageCodes", ɵɵpipeBind1(34, 48, ctx.availableLanguageCodes$));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(36, 50, "common.available-currencies"));
          ɵɵadvance(3);
          ɵɵproperty("title", ɵɵpipeBind1(39, 52, "settings.defaults"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(42, 54, "common.default-language"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(44, 56, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.detailForm.value.availableLanguageCodes);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(47, 58, "settings.default-currency"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(49, 60, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.detailForm.value.availableCurrencyCodes);
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(53, 62, "settings.default-tax-zone"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(55, 64, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.detailForm.value.code && !ctx.detailForm.value.defaultTaxZoneId);
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(59, 66, "settings.default-shipping-zone"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(61, 68, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.detailForm.value.code && !ctx.detailForm.value.defaultShippingZoneId);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(64, 70, "settings.prices-include-tax"));
          ɵɵadvance(3);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(67, 72, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [ClrAlert, ClrAlertItem, ClrAlertText, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, FormItemComponent, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, ZoneSelectorComponent, CurrencyCodeSelectorComponent, LanguageCodeSelectorComponent, AsyncPipe, UpperCasePipe, TranslatePipe, LocaleCurrencyNamePipe, HasPermissionPipe, ChannelLabelPipe, LocaleLanguageNamePipe],
      styles: ["clr-alert[_ngcontent-%COMP%]{max-width:30rem;margin-bottom:12px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChannelDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-channel-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left></vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="channel-detail" />
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
                    *vdrIfPermissions="['SuperAdmin', 'UpdateChannel']"
                    [disabled]="!saveButtonEnabled()"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="channel-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card *ngIf="entity$ | async as entity">
                <vdr-page-entity-info [entity]="entity" />
            </vdr-card>
        </vdr-page-detail-sidebar>
        <vdr-page-block>
            <vdr-card>
                <div class="form-grid">
                    <vdr-form-field
                        class="form-grid-span"
                        *ngIf="entity?.code !== DEFAULT_CHANNEL_CODE"
                        [label]="'common.code' | translate"
                        for="code"
                    >
                        <input
                            id="code"
                            type="text"
                            [readonly]="!(updatePermission | hasPermission)"
                            formControlName="code"
                        />
                    </vdr-form-field>
                    <vdr-form-item
                        class="form-grid-span"
                        *ngIf="entity?.code === DEFAULT_CHANNEL_CODE"
                        [label]="'common.code' | translate"
                    >
                        {{ entity?.code | channelCodeToLabel | translate }}
                    </vdr-form-item>
                    <vdr-form-field [label]="'settings.channel-token' | translate" for="token">
                        <input
                            id="token"
                            type="text"
                            [readonly]="!(updatePermission | hasPermission)"
                            formControlName="token"
                        />
                    </vdr-form-field>

                    <vdr-form-field [label]="'common.seller' | translate" for="sellerId">
                        <select
                            name="sellerId"
                            formControlName="sellerId"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        >
                            <option selected value style="display: none"></option>
                            <option *ngFor="let seller of sellers$ | async" [value]="seller.id">
                                {{ seller.name }}
                            </option>
                        </select>
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'common.available-languages' | translate"
                        for="availableLanguageCodes"
                    >
                        <vdr-language-code-selector
                            formControlName="availableLanguageCodes"
                            [languageCodes]="availableLanguageCodes$ | async"
                        ></vdr-language-code-selector>
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'common.available-currencies' | translate"
                        for="availableCurrencyCodes"
                    >
                        <vdr-currency-code-selector
                            formControlName="availableCurrencyCodes"
                        ></vdr-currency-code-selector>
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card [title]="'settings.defaults' | translate">
                <div class="form-grid">
                    <vdr-form-field [label]="'common.default-language' | translate" for="defaultLanguage">
                        <select
                            name="defaultLanguageCode"
                            formControlName="defaultLanguageCode"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        >
                            <option
                                *ngFor="let languageCode of detailForm.value.availableLanguageCodes"
                                [value]="languageCode"
                            >
                                {{ languageCode | localeLanguageName }} ({{ languageCode | uppercase }})
                            </option>
                        </select>
                    </vdr-form-field>
                    <vdr-form-field [label]="'settings.default-currency' | translate" for="defaultCurrency">
                        <select
                            name="defaultCurrencyCode"
                            formControlName="defaultCurrencyCode"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        >
                            <option
                                *ngFor="let code of detailForm.value.availableCurrencyCodes"
                                [value]="code"
                            >
                                {{ code | localeCurrencyName }}
                            </option>
                        </select>
                    </vdr-form-field>
                    <div>
                        <vdr-form-field
                            [label]="'settings.default-tax-zone' | translate"
                            for="defaultTaxZoneId"
                        >
                            <vdr-zone-selector
                                formControlName="defaultTaxZoneId"
                                [vdrDisabled]="!(updatePermission | hasPermission)"
                            ></vdr-zone-selector>
                        </vdr-form-field>
                        <clr-alert
                            *ngIf="detailForm.value.code && !detailForm.value.defaultTaxZoneId"
                            clrAlertType="danger"
                            [clrAlertClosable]="false"
                        >
                            <clr-alert-item>
                                <span class="alert-text">
                                    {{ 'error.no-default-tax-zone-set' | translate }}
                                </span>
                            </clr-alert-item>
                        </clr-alert>
                    </div>

                    <div>
                        <vdr-form-field
                            [label]="'settings.default-shipping-zone' | translate"
                            for="defaultShippingZoneId"
                        >
                            <vdr-zone-selector
                                name="defaultShippingZoneId"
                                formControlName="defaultShippingZoneId"
                                [vdrDisabled]="!(updatePermission | hasPermission)"
                            ></vdr-zone-selector>
                        </vdr-form-field>
                        <clr-alert
                            *ngIf="detailForm.value.code && !detailForm.value.defaultShippingZoneId"
                            clrAlertType="danger"
                            [clrAlertClosable]="false"
                        >
                            <clr-alert-item>
                                <span class="alert-text">
                                    {{ 'error.no-default-shipping-zone-set' | translate }}
                                </span>
                            </clr-alert-item>
                        </clr-alert>
                    </div>
                    <vdr-form-field
                        [label]="'settings.prices-include-tax' | translate"
                        for="pricesIncludeTax"
                    >
                        <clr-toggle-wrapper>
                            <input
                                type="checkbox"
                                clrToggle
                                id="pricesIncludeTax"
                                formControlName="pricesIncludeTax"
                                [vdrDisabled]="!(updatePermission | hasPermission)"
                            />
                        </clr-toggle-wrapper>
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="Channel"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="channel-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`,
      styles: ["clr-alert{max-width:30rem;margin-bottom:12px}\n"]
    }]
  }], () => [{
    type: ServerConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: DataService
  }, {
    type: FormBuilder
  }, {
    type: NotificationService
  }], null);
})();
var deleteChannelsBulkAction = createBulkDeleteAction({
  location: "channel-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.SuperAdmin) || userPermissions.includes(Permission.DeleteChannel),
  getItemName: (item) => item.code,
  bulkDelete: (dataService, ids) => {
    return dataService.settings.deleteChannels(ids).pipe(mergeMap(({
      deleteChannels
    }) => dataService.auth.currentUser().single$.pipe(map(({
      me
    }) => ({
      me,
      deleteChannels
    })))), mergeMap(({
      me,
      deleteChannels
    }) => (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      dataService.client.updateUserChannels(me.channels).pipe(map(() => deleteChannels))
    )));
  }
});
var GET_CHANNEL_LIST = gql`
    query GetChannelList($options: ChannelListOptions) {
        channels(options: $options) {
            items {
                ...Channel
            }
            totalItems
        }
    }
    ${CHANNEL_FRAGMENT}
`;
var ChannelListComponent = class _ChannelListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "channel-list";
    this.customFields = this.getCustomFieldConfig("Channel");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "code",
      type: {
        kind: "text"
      },
      label: marker("common.code"),
      filterField: "code"
    }).addFilter({
      name: "token",
      type: {
        kind: "text"
      },
      label: marker("settings.channel-token"),
      filterField: "token"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "code"
    }).addSort({
      name: "token"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetChannelListDocument,
      getItems: (data) => data.channels,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            code: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  isDefaultChannel(channelCode) {
    return channelCode === import_shared_constants.DEFAULT_CHANNEL_CODE;
  }
  static {
    this.ɵfac = function ChannelListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChannelListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ChannelListComponent,
      selectors: [["vdr-channel-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 31,
      vars: 46,
      consts: [["locationId", "channel-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "channel-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "code", 3, "heading", "optional", "sort"], ["id", "channel-token", 3, "heading", "sort"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "customField", "sorts"]],
      template: function ChannelListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, ChannelListComponent_a_5_Template, 4, 5, "a", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 2);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function ChannelListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function ChannelListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function ChannelListComponent_Template_vdr_data_table_2_visibleColumnsChange_7_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 3)(13, "vdr-dt2-search", 4);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 5);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, ChannelListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, ChannelListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, ChannelListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, ChannelListComponent_ng_template_26_Template, 6, 8, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, ChannelListComponent_ng_template_29_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(30, ChannelListComponent_vdr_dt2_custom_field_column_30_Template, 1, 2, "vdr-dt2-custom-field-column", 10);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(45, _c7));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(8, 25, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 27, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 29, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 31, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 33, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 35, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 37, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 39, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 41, "common.code"))("optional", false)("sort", ctx.sorts.get("code"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 43, "settings.channel-token"))("sort", ctx.sorts.get("token"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, ChannelLabelPipe, LocaleDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChannelListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-channel-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="channel-list" />
            <a class="btn btn-primary" *vdrIfPermissions="['SuperAdmin', 'CreateChannel']" [routerLink]="['./', 'create']">
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-channel' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="channel-list" />
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
        locationId="channel-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-channel="item">
            {{ channel.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-channel="item">
            {{ channel.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-channel="item">
            {{ channel.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.code' | translate" id="code" [optional]="false" [sort]="sorts.get('code')">
        <ng-template let-channel="item">
            <a class="button-ghost" [routerLink]="['./', channel.id]"
                ><span>{{ channel.code | channelCodeToLabel | translate }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.channel-token' | translate" id="channel-token" [sort]="sorts.get('token')">
        <ng-template let-channel="item">
            {{ channel.token }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column *ngFor="let customField of customFields" [customField]="customField" [sorts]="sorts" />
</vdr-data-table-2>
`
    }]
  }], () => [], null);
})();
var GET_COUNTRY_DETAIL = gql`
    query GetCountryDetail($id: ID!) {
        country(id: $id) {
            ...Country
        }
    }
    ${COUNTRY_FRAGMENT}
`;
var CountryDetailComponent = class _CountryDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("Region");
    this.detailForm = this.formBuilder.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      enabled: [true],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.updatePermission = [Permission.UpdateSettings, Permission.UpdateCountry];
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    const input = createUpdatedTranslatable({
      translatable: {
        id: "",
        createdAt: "",
        updatedAt: "",
        code: "",
        name: "",
        enabled: false,
        translations: []
      },
      updatedFields: formValue,
      languageCode: this.languageCode,
      customFieldConfig: this.customFields,
      defaultTranslation: {
        name: formValue.name ?? "",
        languageCode: this.languageCode
      }
    });
    this.dataService.settings.createCountry(input).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Country"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createCountry.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "Country"
      });
    });
  }
  save() {
    combineLatest(this.entity$, this.languageCode$).pipe(take(1), mergeMap(([country, languageCode]) => {
      const formValue = this.detailForm.value;
      const input = createUpdatedTranslatable({
        translatable: country,
        updatedFields: formValue,
        customFieldConfig: this.customFields,
        languageCode,
        defaultTranslation: {
          name: formValue.name ?? "",
          languageCode
        }
      });
      return this.dataService.settings.updateCountry(input);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Country"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Country"
      });
    });
  }
  setFormValues(country, languageCode) {
    const currentTranslation = findTranslation(country, languageCode);
    this.detailForm.patchValue({
      code: country.code,
      name: currentTranslation ? currentTranslation.name : "",
      enabled: country.enabled
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), country, currentTranslation);
    }
  }
  static {
    this.ɵfac = function CountryDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountryDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CountryDetailComponent,
      selectors: [["vdr-country-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 38,
      vars: 38,
      consts: [["updateButton", ""], [3, "languageCodeChange", "disabled", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "country-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], ["for", "enabled", 3, "label"], ["type", "checkbox", "clrToggle", "", "id", "enabled", "formControlName", "enabled", 3, "vdrDisabled"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["for", "code", 3, "label"], ["id", "code", "type", "text", "formControlName", "code", 3, "readonly"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "country-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Region", 3, "customFields", "customFieldsFormGroup"]],
      template: function CountryDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 1);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "async");
          ɵɵlistener("languageCodeChange", function CountryDetailComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setLanguage($event));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(7, "vdr-ab-right");
          ɵɵelement(8, "vdr-action-bar-items", 2);
          ɵɵtemplate(9, CountryDetailComponent_button_9_Template, 3, 4, "button", 3);
          ɵɵpipe(10, "async");
          ɵɵtemplate(11, CountryDetailComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(13, "vdr-action-bar-dropdown-menu", 2);
          ɵɵelementEnd()()();
          ɵɵelementStart(14, "form", 4)(15, "vdr-page-detail-layout")(16, "vdr-page-detail-sidebar")(17, "vdr-card")(18, "vdr-form-field", 5);
          ɵɵpipe(19, "translate");
          ɵɵelementStart(20, "clr-toggle-wrapper");
          ɵɵelement(21, "input", 6);
          ɵɵpipe(22, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(23, CountryDetailComponent_vdr_card_23_Template, 2, 1, "vdr-card", 7);
          ɵɵpipe(24, "async");
          ɵɵelementEnd();
          ɵɵelementStart(25, "vdr-page-block")(26, "vdr-card")(27, "div", 8)(28, "vdr-form-field", 9);
          ɵɵpipe(29, "translate");
          ɵɵelement(30, "input", 10);
          ɵɵpipe(31, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(32, "vdr-form-field", 11);
          ɵɵpipe(33, "translate");
          ɵɵelement(34, "input", 12);
          ɵɵpipe(35, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(36, CountryDetailComponent_vdr_card_36_Template, 3, 5, "vdr-card", 13);
          ɵɵelement(37, "vdr-custom-detail-component-host", 14);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r6 = ɵɵreference(12);
          ɵɵadvance(3);
          ɵɵproperty("disabled", ɵɵpipeBind1(4, 16, ctx.isNew$))("availableLanguageCodes", ɵɵpipeBind1(5, 18, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(6, 20, ctx.languageCode$));
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(10, 22, ctx.isNew$))("ngIfElse", updateButton_r6);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(19, 24, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(22, 26, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(24, 28, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(29, 30, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(31, 32, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(33, 34, "common.code"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(35, 36, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [ClrCheckbox, ClrCheckboxWrapper, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, LanguageSelectorComponent, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountryDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-country-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block
    ><vdr-action-bar>
        <vdr-ab-left>
            <vdr-language-selector
                [disabled]="isNew$ | async"
                [availableLanguageCodes]="availableLanguages$ | async"
                [currentLanguageCode]="languageCode$ | async"
                (languageCodeChange)="setLanguage($event)"
            />
        </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="country-detail" />
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="detailForm.invalid || detailForm.pristine"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    class="btn btn-primary"
                    *vdrIfPermissions="updatePermission"
                    (click)="save()"
                    [disabled]="detailForm.invalid || detailForm.pristine"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="country-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card>
                <vdr-form-field [label]="'common.enabled' | translate" for="enabled">
                    <clr-toggle-wrapper>
                        <input
                            type="checkbox"
                            clrToggle
                            id="enabled"
                            formControlName="enabled"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        />
                    </clr-toggle-wrapper>
                </vdr-form-field>
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
                            type="text"
                            formControlName="name"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field [label]="'common.code' | translate" for="code">
                        <input
                            id="code"
                            type="text"
                            formControlName="code"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="Region"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="country-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
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
var deleteCountriesBulkAction = createBulkDeleteAction({
  location: "country-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteSettings) || userPermissions.includes(Permission.DeleteCountry),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.settings.deleteCountries(ids).pipe(map((res) => res.deleteCountries))
});
var GET_COUNTRY_LIST = gql`
    query GetCountryList($options: CountryListOptions) {
        countries(options: $options) {
            items {
                ...CountryListItem
            }
            totalItems
        }
    }
    fragment CountryListItem on Country {
        id
        createdAt
        updatedAt
        code
        name
        type
        enabled
    }
`;
var CountryListComponent = class _CountryListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "country-list";
    this.customFields = this.getCustomFieldConfig("Region");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }).addFilter({
      name: "code",
      type: {
        kind: "text"
      },
      label: marker("common.code"),
      filterField: "code"
    }).addFilter({
      name: "enabled",
      type: {
        kind: "boolean"
      },
      label: marker("common.enabled"),
      filterField: "enabled"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("name", "ASC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).addSort({
      name: "code"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetCountryListDocument,
      getItems: (data) => data.countries,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  static {
    this.ɵfac = function CountryListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountryListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CountryListComponent,
      selectors: [["vdr-country-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 37,
      vars: 55,
      consts: [[3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "country-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "country-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "code", 3, "heading", "sort"], ["id", "enabled", 3, "heading"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success"], ["colorType", "warning"], [3, "customField", "sorts"]],
      template: function CountryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 0);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵlistener("languageCodeChange", function CountryListComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(6, "vdr-ab-right");
          ɵɵelement(7, "vdr-action-bar-items", 1);
          ɵɵtemplate(8, CountryListComponent_a_8_Template, 4, 5, "a", 2);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "vdr-data-table-2", 3);
          ɵɵpipe(11, "async");
          ɵɵpipe(12, "async");
          ɵɵpipe(13, "async");
          ɵɵpipe(14, "async");
          ɵɵlistener("pageChange", function CountryListComponent_Template_vdr_data_table_2_pageChange_10_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function CountryListComponent_Template_vdr_data_table_2_itemsPerPageChange_10_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function CountryListComponent_Template_vdr_data_table_2_visibleColumnsChange_10_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(15, "vdr-bulk-action-menu", 4)(16, "vdr-dt2-search", 5);
          ɵɵpipe(17, "translate");
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, CountryListComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, CountryListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, CountryListComponent_ng_template_26_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, CountryListComponent_ng_template_29_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 10);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, CountryListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 11);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, CountryListComponent_ng_template_35_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(36, CountryListComponent_vdr_dt2_custom_field_column_36_Template, 1, 2, "vdr-dt2-custom-field-column", 12);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(4, 28, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(5, 30, ctx.contentLanguage$));
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(54, _c8));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(11, 32, ctx.items$))("itemsPerPage", ɵɵpipeBind1(12, 34, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(13, 36, ctx.totalItems$))("currentPage", ɵɵpipeBind1(14, 38, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(17, 40, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 42, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 44, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 46, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 48, "common.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 50, "common.code"))("sort", ctx.sorts.get("code"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 52, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, LanguageSelectorComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: [".search-input[_ngcontent-%COMP%]{margin-top:6px;min-width:300px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountryListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-country-list",
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
            <vdr-action-bar-items locationId="country-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateSettings', 'CreateCountry']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-country' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="country-list" />
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
        locationId="country-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-country="item">
            {{ country.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate"
        id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-country="item">
            {{ country.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate"
        id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-country="item">
            {{ country.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.name' | translate"
        id="name"
        [optional]="false"
        [sort]="sorts.get('name')"
    >
        <ng-template let-country="item">
            <a class="button-ghost" [routerLink]="['./', country.id]"
                ><span>{{ country.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.code' | translate" id="code" [sort]="sorts.get('code')">
        <ng-template let-country="item">
            {{ country.code }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.enabled' | translate" id="enabled">
        <ng-template let-country="item">
            <vdr-chip *ngIf="country.enabled" colorType="success">{{
                'common.enabled' | translate
            }}</vdr-chip>
            <vdr-chip *ngIf="!country.enabled" colorType="warning">{{
                'common.disabled' | translate
            }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let customField of customFields"
        [customField]="customField"
        [sorts]="sorts"
    />
</vdr-data-table-2>
`,
      styles: [".search-input{margin-top:6px;min-width:300px}\n"]
    }]
  }], () => [], null);
})();
var GET_GLOBAL_SETTINGS_DETAIL = gql`
    query GetGlobalSettingsDetail {
        globalSettings {
            ...GlobalSettingsDetail
        }
    }
    fragment GlobalSettingsDetail on GlobalSettings {
        id
        createdAt
        updatedAt
        availableLanguages
        trackInventory
        outOfStockThreshold
    }
`;
var GlobalSettingsComponent = class _GlobalSettingsComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("GlobalSettings");
    this.detailForm = this.formBuilder.group({
      availableLanguages: [[]],
      trackInventory: false,
      outOfStockThreshold: [0, Validators.required],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.languageCodes = Object.values(LanguageCode);
    this.updatePermission = [Permission.UpdateSettings, Permission.UpdateGlobalSettings];
  }
  ngOnInit() {
    this.init();
    this.dataService.client.userStatus().single$.subscribe(({
      userStatus
    }) => {
      if (!userStatus.permissions.includes(Permission.UpdateSettings)) {
        const languagesSelect = this.detailForm.get("availableLanguages");
        if (languagesSelect) {
          languagesSelect.disable();
        }
      }
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  save() {
    if (!this.detailForm.dirty) {
      return;
    }
    this.dataService.settings.updateGlobalSettings(this.detailForm.value).pipe(tap(({
      updateGlobalSettings
    }) => {
      switch (updateGlobalSettings.__typename) {
        case "GlobalSettings":
          this.detailForm.markAsPristine();
          this.changeDetector.markForCheck();
          this.notificationService.success(marker("common.notify-update-success"), {
            entity: "Settings"
          });
          break;
        case "ChannelDefaultLanguageError":
          this.notificationService.error(updateGlobalSettings.message);
      }
    }), switchMap(() => this.serverConfigService.refreshGlobalSettings()), withLatestFrom(this.dataService.client.uiState().single$)).subscribe(([{
      globalSettings
    }, {
      uiState
    }]) => {
      const availableLangs = globalSettings.availableLanguages;
      if (availableLangs.length && !availableLangs.includes(uiState.contentLanguage)) {
        this.dataService.client.setContentLanguage(availableLangs[0]).subscribe();
      }
    });
  }
  setFormValues(entity, languageCode) {
    this.detailForm.patchValue({
      availableLanguages: entity.availableLanguages,
      trackInventory: entity.trackInventory,
      outOfStockThreshold: entity.outOfStockThreshold
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), entity);
    }
  }
  static {
    this.ɵfac = function GlobalSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalSettingsComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GlobalSettingsComponent,
      selectors: [["vdr-global-settings"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 27,
      vars: 30,
      consts: [["locationId", "global-setting-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [1, "form", 3, "formGroup"], [1, "form-grid"], ["for", "availableLanguages", 3, "label", "tooltip"], ["formControlName", "availableLanguages", 3, "languageCodes"], ["for", "outOfStockThreshold", 3, "label", "tooltip"], ["id", "outOfStockThreshold", "type", "number", "formControlName", "outOfStockThreshold", 3, "readonly"], ["for", "enabled", 3, "label", "tooltip"], ["type", "checkbox", "clrToggle", "", "name", "enabled", "formControlName", "trackInventory", 3, "vdrDisabled"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "global-settings-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["formGroupName", "customFields", 3, "title"], ["entityName", "GlobalSettings", 3, "customFields", "customFieldsFormGroup", "readonly"]],
      template: function GlobalSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-right");
          ɵɵelement(3, "vdr-action-bar-items", 0);
          ɵɵtemplate(4, GlobalSettingsComponent_button_4_Template, 3, 4, "button", 1);
          ɵɵelement(5, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(6, "form", 2)(7, "vdr-page-block")(8, "vdr-card")(9, "div", 3)(10, "vdr-form-field", 4);
          ɵɵpipe(11, "translate");
          ɵɵpipe(12, "translate");
          ɵɵelement(13, "vdr-language-code-selector", 5);
          ɵɵelementEnd();
          ɵɵelementStart(14, "vdr-form-field", 6);
          ɵɵpipe(15, "translate");
          ɵɵpipe(16, "translate");
          ɵɵelement(17, "input", 7);
          ɵɵpipe(18, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(19, "vdr-form-field", 8);
          ɵɵpipe(20, "translate");
          ɵɵpipe(21, "translate");
          ɵɵelementStart(22, "clr-toggle-wrapper");
          ɵɵelement(23, "input", 9);
          ɵɵpipe(24, "hasPermission");
          ɵɵelementEnd()()()();
          ɵɵtemplate(25, GlobalSettingsComponent_vdr_card_25_Template, 4, 8, "vdr-card", 10);
          ɵɵelement(26, "vdr-custom-detail-component-host", 11);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(4);
          ɵɵproperty("vdrIfPermissions", ctx.updatePermission);
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(11, 14, "common.available-languages"))("tooltip", ɵɵpipeBind1(12, 16, "settings.global-available-languages-tooltip"));
          ɵɵadvance(3);
          ɵɵproperty("languageCodes", ctx.languageCodes);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(15, 18, "settings.global-out-of-stock-threshold"))("tooltip", ɵɵpipeBind1(16, 20, "settings.global-out-of-stock-threshold-tooltip"));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(18, 22, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(20, 24, "settings.track-inventory-default"))("tooltip", ɵɵpipeBind1(21, 26, "catalog.track-inventory-tooltip"));
          ɵɵadvance(4);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(24, 28, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [ClrCheckbox, ClrCheckboxWrapper, NgIf, ɵNgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, CardComponent, LanguageCodeSelectorComponent, TranslatePipe, HasPermissionPipe],
      styles: ["ng-select .ng-value>span{margin:0!important}  ng-select .ng-arrow-wrapper .ng-arrow{margin:0!important}  ng-select .ng-select-container>span{margin:0!important}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalSettingsComponent, [{
    type: Component,
    args: [{
      selector: "vdr-global-settings",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="global-setting-detail" />
            <button
                class="btn btn-primary"
                (click)="save()"
                *vdrIfPermissions="updatePermission"
                [disabled]="detailForm.invalid || detailForm.pristine"
            >
                {{ 'common.update' | translate }}
            </button>
            <vdr-action-bar-dropdown-menu locationId="global-setting-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-block>
        <vdr-card>
            <div class="form-grid">
                <vdr-form-field
                    [label]="'common.available-languages' | translate"
                    for="availableLanguages"
                    [tooltip]="'settings.global-available-languages-tooltip' | translate"
                >
                    <vdr-language-code-selector
                        formControlName="availableLanguages"
                        [languageCodes]="languageCodes"
                    ></vdr-language-code-selector>
                </vdr-form-field>
                <vdr-form-field
                    [label]="'settings.global-out-of-stock-threshold' | translate"
                    for="outOfStockThreshold"
                    [tooltip]="'settings.global-out-of-stock-threshold-tooltip' | translate"
                >
                    <input
                        id="outOfStockThreshold"
                        type="number"
                        formControlName="outOfStockThreshold"
                        [readonly]="!(updatePermission | hasPermission)"
                    />
                </vdr-form-field>
                <vdr-form-field
                    [label]="'settings.track-inventory-default' | translate"
                    for="enabled"
                    [tooltip]="'catalog.track-inventory-tooltip' | translate"
                >
                    <clr-toggle-wrapper>
                        <input
                            type="checkbox"
                            clrToggle
                            name="enabled"
                            formControlName="trackInventory"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        />
                    </clr-toggle-wrapper>
                </vdr-form-field>
            </div>
        </vdr-card>
        <vdr-card
            formGroupName="customFields"
            *ngIf="customFields.length"
            [title]="'common.custom-fields' | translate"
        >
            <vdr-tabbed-custom-fields
                entityName="GlobalSettings"
                [customFields]="customFields"
                [customFieldsFormGroup]="detailForm.get('customFields')"
                [readonly]="!(updatePermission | hasPermission)"
            ></vdr-tabbed-custom-fields>
        </vdr-card>

        <vdr-custom-detail-component-host
            locationId="global-settings-detail"
            [entity$]="entity$"
            [detailForm]="detailForm"
        ></vdr-custom-detail-component-host>
    </vdr-page-block>
</form>
`,
      styles: ["::ng-deep ng-select .ng-value>span{margin:0!important}::ng-deep ng-select .ng-arrow-wrapper .ng-arrow{margin:0!important}::ng-deep ng-select .ng-select-container>span{margin:0!important}\n"]
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
var GET_PAYMENT_METHOD_DETAIL = gql`
    query GetPaymentMethodDetail($id: ID!) {
        paymentMethod(id: $id) {
            ...PaymentMethod
        }
    }
    ${PAYMENT_METHOD_FRAGMENT}
`;
var PaymentMethodDetailComponent = class _PaymentMethodDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("PaymentMethod");
    this.detailForm = this.formBuilder.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      description: "",
      enabled: [true, Validators.required],
      checker: {},
      handler: {},
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.checkers = [];
    this.handlers = [];
    this.updatePermission = [Permission.UpdateSettings, Permission.UpdatePaymentMethod];
  }
  ngOnInit() {
    this.init();
    this.dataService.settings.getPaymentMethodOperations().single$.subscribe((data) => {
      this.checkers = data.paymentMethodEligibilityCheckers;
      this.handlers = data.paymentMethodHandlers;
      this.changeDetector.markForCheck();
      this.selectedCheckerDefinition = data.paymentMethodEligibilityCheckers.find((c) => c.code === this.entity?.checker?.code);
      this.selectedHandlerDefinition = data.paymentMethodHandlers.find((c) => c.code === this.entity?.handler?.code);
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  updateCode(currentCode, nameValue) {
    if (!currentCode) {
      const codeControl = this.detailForm.get("code");
      if (codeControl && codeControl.pristine) {
        codeControl.setValue((0, import_normalize_string.normalizeString)(nameValue, "-"));
      }
    }
  }
  selectChecker(checker) {
    this.selectedCheckerDefinition = checker;
    this.selectedChecker = configurableDefinitionToInstance(checker);
    const formControl = this.detailForm.get("checker");
    if (formControl) {
      formControl.clearValidators();
      formControl.updateValueAndValidity({
        onlySelf: true
      });
      formControl.patchValue(this.selectedChecker);
    }
    this.detailForm.markAsDirty();
  }
  selectHandler(handler) {
    this.selectedHandlerDefinition = handler;
    this.selectedHandler = configurableDefinitionToInstance(handler);
    const formControl = this.detailForm.get("handler");
    if (formControl) {
      formControl.clearValidators();
      formControl.updateValueAndValidity({
        onlySelf: true
      });
      formControl.patchValue(this.selectedHandler);
    }
    this.detailForm.markAsDirty();
  }
  removeChecker() {
    this.selectedChecker = null;
    this.detailForm.markAsDirty();
  }
  removeHandler() {
    this.selectedHandler = null;
    this.detailForm.markAsDirty();
  }
  create() {
    const selectedChecker = this.selectedChecker;
    const selectedHandler = this.selectedHandler;
    if (!selectedHandler) {
      return;
    }
    const input = this.getUpdatedPaymentMethod({
      id: "",
      createdAt: "",
      updatedAt: "",
      name: "",
      code: "",
      description: "",
      enabled: true,
      checker: void 0,
      handler: void 0,
      translations: []
    }, this.detailForm, this.languageCode, selectedHandler, selectedChecker);
    this.dataService.settings.createPaymentMethod(input).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "PaymentMethod"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createPaymentMethod.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "PaymentMethod"
      });
    });
  }
  save() {
    const selectedChecker = this.selectedChecker;
    const selectedHandler = this.selectedHandler;
    if (!selectedHandler) {
      return;
    }
    combineLatest(this.entity$, this.languageCode$).pipe(take(1), mergeMap(([paymentMethod, languageCode]) => {
      const input = this.getUpdatedPaymentMethod(paymentMethod, this.detailForm, languageCode, selectedHandler, selectedChecker);
      return this.dataService.settings.updatePaymentMethod(input);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "PaymentMethod"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "PaymentMethod"
      });
    });
  }
  /**
   * Given a PaymentMethod and the value of the detailForm, this method creates an updated copy of it which
   * can then be persisted to the API.
   */
  getUpdatedPaymentMethod(paymentMethod, formGroup, languageCode, selectedHandler, selectedChecker) {
    const input = createUpdatedTranslatable({
      translatable: paymentMethod,
      updatedFields: formGroup.value,
      customFieldConfig: this.customFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: paymentMethod.name || "",
        description: paymentMethod.description || ""
      }
    });
    return __spreadProps(__spreadValues({}, input), {
      checker: selectedChecker ? toConfigurableOperationInput(selectedChecker, formGroup.value.checker) : null,
      handler: toConfigurableOperationInput(selectedHandler, formGroup.value.handler)
    });
  }
  setFormValues(paymentMethod, languageCode) {
    const currentTranslation = findTranslation(paymentMethod, languageCode);
    this.detailForm.patchValue({
      name: currentTranslation?.name,
      code: paymentMethod.code,
      description: currentTranslation?.description,
      enabled: paymentMethod.enabled,
      checker: paymentMethod.checker || {},
      handler: paymentMethod.handler || {}
    });
    if (!this.selectedChecker) {
      this.selectedChecker = paymentMethod.checker && {
        code: paymentMethod.checker.code,
        args: paymentMethod.checker.args.map((a) => __spreadProps(__spreadValues({}, a), {
          value: getConfigArgValue(a.value)
        }))
      };
    }
    if (!this.selectedHandler) {
      this.selectedHandler = paymentMethod.handler && {
        code: paymentMethod.handler.code,
        args: paymentMethod.handler.args.map((a) => __spreadProps(__spreadValues({}, a), {
          value: getConfigArgValue(a.value)
        }))
      };
    }
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), paymentMethod, currentTranslation);
    }
  }
  static {
    this.ɵfac = function PaymentMethodDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentMethodDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PaymentMethodDetailComponent,
      selectors: [["vdr-payment-method-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 50,
      vars: 57,
      consts: [["updateButton", ""], [3, "languageCodeChange", "disabled", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "payment-method-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], ["for", "description", 3, "label"], ["type", "checkbox", "clrToggle", "", "id", "enabled", "formControlName", "enabled", 3, "vdrDisabled"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "input", "readonly"], ["for", "code", 3, "label", "readOnlyToggle"], ["id", "code", "type", "text", "formControlName", "code", 3, "readonly"], ["formControlName", "description", 1, "form-grid-span", 3, "readonly", "label"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "payment-method-detail", 3, "entity$", "detailForm"], [3, "title"], ["formControlName", "checker", 3, "operation", "operationDefinition", "readonly", "remove", 4, "ngIf"], ["formControlName", "handler", 3, "operation", "operationDefinition", "readonly", "remove", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["formGroupName", "customFields", 3, "title"], ["entityName", "PaymentMethod", 3, "customFields", "customFieldsFormGroup"], ["formControlName", "checker", 3, "remove", "operation", "operationDefinition", "readonly"], ["vdrDropdownTrigger", "", 1, "btn", "btn-outline"], ["shape", "plus"], ["vdrPosition", "bottom-left"], ["type", "button", "vdrDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "vdrDropdownItem", "", 3, "click"], ["formControlName", "handler", 3, "remove", "operation", "operationDefinition", "readonly"]],
      template: function PaymentMethodDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 1);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "async");
          ɵɵlistener("languageCodeChange", function PaymentMethodDetailComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setLanguage($event));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(7, "vdr-ab-right");
          ɵɵelement(8, "vdr-action-bar-items", 2);
          ɵɵtemplate(9, PaymentMethodDetailComponent_button_9_Template, 3, 4, "button", 3);
          ɵɵpipe(10, "async");
          ɵɵtemplate(11, PaymentMethodDetailComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(13, "vdr-action-bar-dropdown-menu", 2);
          ɵɵelementEnd()()();
          ɵɵelementStart(14, "form", 4)(15, "vdr-page-detail-layout")(16, "vdr-page-detail-sidebar")(17, "vdr-card")(18, "vdr-form-field", 5);
          ɵɵpipe(19, "translate");
          ɵɵelementStart(20, "clr-toggle-wrapper");
          ɵɵelement(21, "input", 6);
          ɵɵpipe(22, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(23, PaymentMethodDetailComponent_vdr_card_23_Template, 2, 1, "vdr-card", 7);
          ɵɵpipe(24, "async");
          ɵɵelementEnd();
          ɵɵelementStart(25, "vdr-page-block")(26, "vdr-card")(27, "div", 8)(28, "vdr-form-field", 9);
          ɵɵpipe(29, "translate");
          ɵɵelementStart(30, "input", 10);
          ɵɵpipe(31, "hasPermission");
          ɵɵlistener("input", function PaymentMethodDetailComponent_Template_input_input_30_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.updateCode(ctx.entity == null ? null : ctx.entity.code, $event.target.value));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(32, "vdr-form-field", 11);
          ɵɵpipe(33, "translate");
          ɵɵpipe(34, "hasPermission");
          ɵɵelement(35, "input", 12);
          ɵɵpipe(36, "hasPermission");
          ɵɵelementEnd();
          ɵɵelement(37, "vdr-rich-text-editor", 13);
          ɵɵpipe(38, "hasPermission");
          ɵɵpipe(39, "translate");
          ɵɵelementEnd()();
          ɵɵtemplate(40, PaymentMethodDetailComponent_vdr_card_40_Template, 3, 5, "vdr-card", 14);
          ɵɵelement(41, "vdr-custom-detail-component-host", 15);
          ɵɵelementStart(42, "vdr-card", 16);
          ɵɵpipe(43, "translate");
          ɵɵtemplate(44, PaymentMethodDetailComponent_vdr_configurable_input_44_Template, 2, 5, "vdr-configurable-input", 17)(45, PaymentMethodDetailComponent_div_45_Template, 8, 4, "div", 7);
          ɵɵelementEnd();
          ɵɵelementStart(46, "vdr-card", 16);
          ɵɵpipe(47, "translate");
          ɵɵtemplate(48, PaymentMethodDetailComponent_vdr_configurable_input_48_Template, 2, 5, "vdr-configurable-input", 18)(49, PaymentMethodDetailComponent_div_49_Template, 8, 4, "div", 7);
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          const updateButton_r12 = ɵɵreference(12);
          ɵɵadvance(3);
          ɵɵproperty("disabled", ɵɵpipeBind1(4, 25, ctx.isNew$))("availableLanguageCodes", ɵɵpipeBind1(5, 27, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(6, 29, ctx.languageCode$));
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(10, 31, ctx.isNew$))("ngIfElse", updateButton_r12);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(19, 33, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(22, 35, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(24, 37, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(29, 39, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(31, 41, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(33, 43, "common.code"))("readOnlyToggle", ɵɵpipeBind1(34, 45, ctx.updatePermission));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(36, 47, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(38, 49, ctx.updatePermission))("label", ɵɵpipeBind1(39, 51, "common.description"));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(43, 53, "settings.payment-eligibility-checker"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.selectedChecker && ctx.selectedCheckerDefinition);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.selectedChecker || !ctx.selectedCheckerDefinition);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(47, 55, "settings.payment-handler"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.selectedHandler && ctx.selectedHandlerDefinition);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.selectedHandler || !ctx.selectedHandlerDefinition);
        }
      },
      dependencies: [ClrIconCustomTag, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ConfigurableInputComponent, FormFieldComponent, FormFieldControlDirective, LanguageSelectorComponent, RichTextEditorComponent, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-payment-method-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block
    ><vdr-action-bar>
        <vdr-ab-left>
            <vdr-language-selector
                [disabled]="isNew$ | async"
                [availableLanguageCodes]="availableLanguages$ | async"
                [currentLanguageCode]="languageCode$ | async"
                (languageCodeChange)="setLanguage($event)"
            />
        </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="payment-method-detail" />
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                [disabled]="detailForm.pristine || detailForm.invalid || !selectedHandler"
                (click)="create()"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    *vdrIfPermissions="updatePermission"
                    class="btn btn-primary"
                    (click)="save()"
                    [disabled]="detailForm.pristine || detailForm.invalid || !selectedHandler"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="payment-method-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card>
                <vdr-form-field [label]="'common.enabled' | translate" for="description">
                    <clr-toggle-wrapper>
                        <input
                            type="checkbox"
                            clrToggle
                            id="enabled"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                            formControlName="enabled"
                        />
                    </clr-toggle-wrapper>
                </vdr-form-field>
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
                            type="text"
                            formControlName="name"
                            [readonly]="!(updatePermission | hasPermission)"
                            (input)="updateCode(entity?.code, $event.target.value)"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'common.code' | translate"
                        for="code"
                        [readOnlyToggle]="updatePermission | hasPermission"
                    >
                        <input
                            id="code"
                            type="text"
                            formControlName="code"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-rich-text-editor
                        class="form-grid-span"
                        formControlName="description"
                        [readonly]="!(updatePermission | hasPermission)"
                        [label]="'common.description' | translate"
                    ></vdr-rich-text-editor>
                </div>
            </vdr-card>

            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="PaymentMethod"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>

            <vdr-custom-detail-component-host
                locationId="payment-method-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>

            <vdr-card [title]="'settings.payment-eligibility-checker' | translate">
                <vdr-configurable-input
                    *ngIf="selectedChecker && selectedCheckerDefinition"
                    [operation]="selectedChecker"
                    [operationDefinition]="selectedCheckerDefinition"
                    [readonly]="!(updatePermission | hasPermission)"
                    (remove)="removeChecker()"
                    formControlName="checker"
                ></vdr-configurable-input>
                <div *ngIf="!selectedChecker || !selectedCheckerDefinition">
                    <vdr-dropdown>
                        <button class="btn btn-outline" vdrDropdownTrigger>
                            <clr-icon shape="plus"></clr-icon>
                            {{ 'common.select' | translate }}
                        </button>
                        <vdr-dropdown-menu vdrPosition="bottom-left">
                            <button
                                *ngFor="let checker of checkers"
                                type="button"
                                vdrDropdownItem
                                (click)="selectChecker(checker)"
                            >
                                {{ checker.description }}
                            </button>
                        </vdr-dropdown-menu>
                    </vdr-dropdown>
                </div>
            </vdr-card>
            <vdr-card [title]="'settings.payment-handler' | translate">
                <vdr-configurable-input
                    *ngIf="selectedHandler && selectedHandlerDefinition"
                    [operation]="selectedHandler"
                    [operationDefinition]="selectedHandlerDefinition"
                    [readonly]="!(updatePermission | hasPermission)"
                    (remove)="removeHandler()"
                    formControlName="handler"
                ></vdr-configurable-input>
                <div *ngIf="!selectedHandler || !selectedHandlerDefinition">
                    <vdr-dropdown>
                        <button class="btn btn-outline" vdrDropdownTrigger>
                            <clr-icon shape="plus"></clr-icon>
                            {{ 'common.select' | translate }}
                        </button>
                        <vdr-dropdown-menu vdrPosition="bottom-left">
                            <button
                                *ngFor="let handler of handlers"
                                type="button"
                                vdrDropdownItem
                                (click)="selectHandler(handler)"
                            >
                                {{ handler.description }}
                            </button>
                        </vdr-dropdown-menu>
                    </vdr-dropdown>
                </div>
            </vdr-card>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
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
var deletePaymentMethodsBulkAction = createBulkDeleteAction({
  location: "payment-method-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeletePaymentMethod) || userPermissions.includes(Permission.DeleteSettings),
  getItemName: (item) => item.name,
  shouldRetryItem: (response, item) => !!response.message,
  bulkDelete: (dataService, ids, retrying) => dataService.settings.deletePaymentMethods(ids, retrying).pipe(map((res) => res.deletePaymentMethods))
});
var ASSIGN_PAYMENT_METHODS_TO_CHANNEL = gql`
    mutation AssignPaymentMethodsToChannel($input: AssignPaymentMethodsToChannelInput!) {
        assignPaymentMethodsToChannel(input: $input) {
            id
            name
        }
    }
`;
var REMOVE_PAYMENT_METHODS_FROM_CHANNEL = gql`
    mutation RemovePaymentMethodsFromChannel($input: RemovePaymentMethodsFromChannelInput!) {
        removePaymentMethodsFromChannel(input: $input) {
            id
            name
        }
    }
`;
var assignPaymentMethodsToChannelBulkAction = createBulkAssignToChannelAction({
  location: "payment-method-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdatePaymentMethod) || userPermissions.includes(Permission.UpdateSettings),
  getItemName: (item) => item.name,
  bulkAssignToChannel: (dataService, paymentMethodIds, channelIds) => channelIds.map((channelId) => dataService.mutate(AssignPaymentMethodsToChannelDocument, {
    input: {
      channelId,
      paymentMethodIds
    }
  }).pipe(map((res) => res.assignPaymentMethodsToChannel)))
});
var removePaymentMethodsFromChannelBulkAction = createBulkRemoveFromChannelAction({
  location: "payment-method-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeletePaymentMethod) || userPermissions.includes(Permission.DeleteSettings),
  getItemName: (item) => item.name,
  bulkRemoveFromChannel: (dataService, paymentMethodIds, channelId) => dataService.mutate(RemovePaymentMethodsFromChannelDocument, {
    input: {
      channelId,
      paymentMethodIds
    }
  }).pipe(map((res) => res.removePaymentMethodsFromChannel))
});
var GET_PAYMENT_METHOD_LIST = gql`
    query GetPaymentMethodList($options: PaymentMethodListOptions!) {
        paymentMethods(options: $options) {
            items {
                ...PaymentMethodListItem
            }
            totalItems
        }
    }
    fragment PaymentMethodListItem on PaymentMethod {
        id
        createdAt
        updatedAt
        name
        description
        code
        enabled
    }
`;
var PaymentMethodListComponent = class _PaymentMethodListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "payment-method-list";
    this.customFields = this.getCustomFieldConfig("PaymentMethod");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }).addFilter({
      name: "code",
      type: {
        kind: "text"
      },
      label: marker("common.code"),
      filterField: "code"
    }).addFilter({
      name: "enabled",
      type: {
        kind: "boolean"
      },
      label: marker("common.enabled"),
      filterField: "enabled"
    }).addFilter({
      name: "description",
      type: {
        kind: "text"
      },
      label: marker("common.description"),
      filterField: "description"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "id"
    }).addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).addSort({
      name: "code"
    }).addSort({
      name: "description"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetPaymentMethodListDocument,
      getItems: (data) => data.paymentMethods,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  static {
    this.ɵfac = function PaymentMethodListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentMethodListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PaymentMethodListComponent,
      selectors: [["vdr-payment-method-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 37,
      vars: 56,
      consts: [[3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "payment-method-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "payment-method-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault", "sort"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "code", 3, "heading", "sort"], ["id", "enabled", 3, "heading"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success"], ["colorType", "warning"], [3, "customField", "sorts"]],
      template: function PaymentMethodListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 0);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵlistener("languageCodeChange", function PaymentMethodListComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(6, "vdr-ab-right");
          ɵɵelement(7, "vdr-action-bar-items", 1);
          ɵɵtemplate(8, PaymentMethodListComponent_a_8_Template, 4, 5, "a", 2);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "vdr-data-table-2", 3);
          ɵɵpipe(11, "async");
          ɵɵpipe(12, "async");
          ɵɵpipe(13, "async");
          ɵɵpipe(14, "async");
          ɵɵlistener("pageChange", function PaymentMethodListComponent_Template_vdr_data_table_2_pageChange_10_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function PaymentMethodListComponent_Template_vdr_data_table_2_itemsPerPageChange_10_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function PaymentMethodListComponent_Template_vdr_data_table_2_visibleColumnsChange_10_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(15, "vdr-bulk-action-menu", 4)(16, "vdr-dt2-search", 5);
          ɵɵpipe(17, "translate");
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, PaymentMethodListComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, PaymentMethodListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, PaymentMethodListComponent_ng_template_26_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, PaymentMethodListComponent_ng_template_29_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 10);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, PaymentMethodListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 11);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, PaymentMethodListComponent_ng_template_35_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(36, PaymentMethodListComponent_vdr_dt2_custom_field_column_36_Template, 1, 2, "vdr-dt2-custom-field-column", 12);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(4, 29, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(5, 31, ctx.contentLanguage$));
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(55, _c9));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(11, 33, ctx.items$))("itemsPerPage", ɵɵpipeBind1(12, 35, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(13, 37, ctx.totalItems$))("currentPage", ɵɵpipeBind1(14, 39, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(17, 41, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 43, "common.id"))("hiddenByDefault", true)("sort", ctx.sorts.get("id"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 45, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 47, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 49, "common.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 51, "common.code"))("sort", ctx.sorts.get("code"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 53, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, LanguageSelectorComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-payment-method-list",
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
            <vdr-action-bar-items locationId="payment-method-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateSettings', 'CreatePaymentMethod']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-payment-method' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="payment-method-list" />
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
        locationId="payment-method-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    ></vdr-bulk-action-menu>
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    ></vdr-dt2-search>
    <vdr-dt2-column
        [heading]="'common.id' | translate"
        id="id"
        [hiddenByDefault]="true"
        [sort]="sorts.get('id')"
    >
        <ng-template let-paymentMethod="item">
            {{ paymentMethod.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate"
        id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-paymentMethod="item">
            {{ paymentMethod.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate"
        id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-paymentMethod="item">
            {{ paymentMethod.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.name' | translate"
        id="name"
        [optional]="false"
        [sort]="sorts.get('name')"
    >
        <ng-template let-paymentMethod="item">
            <a class="button-ghost" [routerLink]="['./', paymentMethod.id]"
                ><span>{{ paymentMethod.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.code' | translate" id="code" [sort]="sorts.get('code')">
        <ng-template let-paymentMethod="item">
            {{ paymentMethod.code }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.enabled' | translate" id="enabled">
        <ng-template let-paymentMethod="item">
            <vdr-chip *ngIf="paymentMethod.enabled" colorType="success">{{
                'common.enabled' | translate
            }}</vdr-chip>
            <vdr-chip *ngIf="!paymentMethod.enabled" colorType="warning">{{
                'common.disabled' | translate
            }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let customField of customFields"
        [customField]="customField"
        [sorts]="sorts"
    />
</vdr-data-table-2>
`
    }]
  }], () => [], null);
})();
var GET_PROFILE_DETAIL = gql`
    query GetProfileDetail {
        activeAdministrator {
            ...ProfileDetail
        }
    }
    fragment ProfileDetail on Administrator {
        id
        createdAt
        updatedAt
        firstName
        lastName
        emailAddress
        user {
            id
            lastLogin
            verified
        }
    }
`;
var ProfileComponent = class _ProfileComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("Administrator");
    this.detailForm = this.formBuilder.group({
      emailAddress: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      password: [""],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  save() {
    this.entity$.pipe(take(1), mergeMap(({
      id
    }) => {
      const formValue = this.detailForm.value;
      const administrator = {
        emailAddress: formValue.emailAddress,
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        password: formValue.password,
        customFields: formValue.customFields
      };
      return this.dataService.administrator.updateActiveAdministrator(administrator);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Administrator"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Administrator"
      });
    });
  }
  setFormValues(administrator, languageCode) {
    this.detailForm.patchValue({
      emailAddress: administrator.emailAddress,
      firstName: administrator.firstName,
      lastName: administrator.lastName
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), administrator);
    }
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProfileComponent,
      selectors: [["vdr-profile"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 32,
      vars: 27,
      consts: [["locationId", "profile"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "emailAddress", 3, "label"], ["id", "emailAddress", "type", "text", "formControlName", "emailAddress"], ["for", "firstName", 3, "label"], ["id", "firstName", "type", "text", "formControlName", "firstName"], ["for", "lastName", 3, "label"], ["id", "lastName", "type", "text", "formControlName", "lastName"], ["for", "password", 3, "label", 4, "ngIf"], ["for", "password", 3, "label", "readOnlyToggle"], ["id", "password", "type", "password", "formControlName", "password"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "administrator-profile", 3, "entity$", "detailForm"], [3, "entity"], ["for", "password", 3, "label"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Administrator", 3, "customFields", "customFieldsFormGroup"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵelementStart(5, "button", 1);
          ɵɵlistener("click", function ProfileComponent_Template_button_click_5_listener() {
            return ctx.save();
          });
          ɵɵtext(6);
          ɵɵpipe(7, "translate");
          ɵɵelementEnd()()()();
          ɵɵelementStart(8, "form", 2)(9, "vdr-page-detail-layout")(10, "vdr-page-detail-sidebar");
          ɵɵtemplate(11, ProfileComponent_vdr_card_11_Template, 2, 1, "vdr-card", 3);
          ɵɵpipe(12, "async");
          ɵɵelementEnd();
          ɵɵelementStart(13, "vdr-page-block")(14, "vdr-card")(15, "div", 4)(16, "vdr-form-field", 5);
          ɵɵpipe(17, "translate");
          ɵɵelement(18, "input", 6);
          ɵɵelementEnd();
          ɵɵelementStart(19, "vdr-form-field", 7);
          ɵɵpipe(20, "translate");
          ɵɵelement(21, "input", 8);
          ɵɵelementEnd();
          ɵɵelementStart(22, "vdr-form-field", 9);
          ɵɵpipe(23, "translate");
          ɵɵelement(24, "input", 10);
          ɵɵelementEnd();
          ɵɵtemplate(25, ProfileComponent_vdr_form_field_25_Template, 3, 3, "vdr-form-field", 11);
          ɵɵpipe(26, "async");
          ɵɵelementStart(27, "vdr-form-field", 12);
          ɵɵpipe(28, "translate");
          ɵɵelement(29, "input", 13);
          ɵɵelementEnd()()();
          ɵɵtemplate(30, ProfileComponent_vdr_card_30_Template, 3, 5, "vdr-card", 14);
          ɵɵelement(31, "vdr-custom-detail-component-host", 15);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("disabled", ctx.detailForm.invalid || ctx.detailForm.pristine);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 13, "common.update"), " ");
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(12, 15, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(17, 17, "settings.email-address"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(20, 19, "settings.first-name"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(23, 21, "settings.last-name"));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(26, 23, ctx.isNew$));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(28, 25, "settings.password"))("readOnlyToggle", true);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, FormFieldComponent, FormFieldControlDirective, ActionBarItemsComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{
      selector: "vdr-profile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left></vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="profile"></vdr-action-bar-items>
            <button
                class="btn btn-primary"
                (click)="save()"
                [disabled]="detailForm.invalid || detailForm.pristine"
            >
                {{ 'common.update' | translate }}
            </button>
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card *ngIf="entity$ | async as entity">
                <vdr-page-entity-info [entity]="entity" />
            </vdr-card>
        </vdr-page-detail-sidebar>
        <vdr-page-block>
            <vdr-card>
                <div class="form-grid">
                    <vdr-form-field [label]="'settings.email-address' | translate" for="emailAddress">
                        <input id="emailAddress" type="text" formControlName="emailAddress" />
                    </vdr-form-field>
                    <vdr-form-field [label]="'settings.first-name' | translate" for="firstName">
                        <input id="firstName" type="text" formControlName="firstName" />
                    </vdr-form-field>
                    <vdr-form-field [label]="'settings.last-name' | translate" for="lastName">
                        <input id="lastName" type="text" formControlName="lastName" />
                    </vdr-form-field>
                    <vdr-form-field
                        *ngIf="isNew$ | async"
                        [label]="'settings.password' | translate"
                        for="password"
                    >
                        <input id="password" type="password" formControlName="password" />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'settings.password' | translate"
                        for="password"
                        [readOnlyToggle]="true"
                    >
                        <input id="password" type="password" formControlName="password" />
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="Administrator"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="administrator-profile"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
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
var GET_ROLE_DETAIL = gql`
    query GetRoleDetail($id: ID!) {
        role(id: $id) {
            ...Role
        }
    }
    ${ROLE_FRAGMENT}
`;
var RoleDetailComponent = class _RoleDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.detailForm = this.formBuilder.group({
      code: ["", Validators.required],
      description: ["", Validators.required],
      channelIds: [[]],
      permissions: [[]]
    });
    this.permissionDefinitions = this.serverConfigService.getPermissionDefinitions();
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  updateCode(nameValue) {
    const codeControl = this.detailForm.get(["code"]);
    if (codeControl && codeControl.pristine) {
      codeControl.setValue((0, import_normalize_string.normalizeString)(nameValue, "-"));
    }
  }
  setPermission(change) {
    const permissionsControl = this.detailForm.get("permissions");
    if (permissionsControl) {
      const currentPermissions = permissionsControl.value;
      const newValue = change.value === true ? (0, import_unique.unique)([...currentPermissions, change.permission]) : currentPermissions.filter((p) => p !== change.permission);
      permissionsControl.setValue(newValue);
      permissionsControl.markAsDirty();
    }
  }
  create() {
    const {
      code,
      description,
      permissions,
      channelIds
    } = this.detailForm.value;
    if (!code || !description) {
      return;
    }
    const role = {
      code,
      description,
      permissions: permissions ?? [],
      channelIds
    };
    this.dataService.administrator.createRole(role).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Role"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createRole.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "Role"
      });
    });
  }
  save() {
    this.entity$.pipe(take(1), mergeMap(({
      id
    }) => {
      const formValue = this.detailForm.value;
      const role = __spreadValues({
        id
      }, formValue);
      return this.dataService.administrator.updateRole(role);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Role"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Role"
      });
    });
  }
  setFormValues(role, languageCode) {
    this.detailForm.patchValue({
      description: role.description,
      code: role.code,
      channelIds: role.channels.map((c) => c.id),
      permissions: role.permissions
    });
    this.changeDetector.detectChanges();
  }
  static {
    this.ɵfac = function RoleDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoleDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RoleDetailComponent,
      selectors: [["vdr-role-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 36,
      vars: 37,
      consts: [["updateButton", ""], ["locationId", "role-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "description", 3, "label"], ["id", "description", "type", "text", "formControlName", "description", 3, "input", "readonly"], ["for", "code", 3, "label", "readOnlyToggle"], ["id", "code", "type", "text", "formControlName", "code", 3, "readonly"], [1, "mt-2"], [3, "title"], [3, "label"], ["formControlName", "channelIds", 3, "vdrDisabled"], [1, "mt-2", 3, "permissionChange", "permissionDefinitions", "activePermissions", "readonly"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"]],
      template: function RoleDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, RoleDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, RoleDetailComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar");
          ɵɵtemplate(13, RoleDetailComponent_vdr_card_13_Template, 2, 1, "vdr-card", 4);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-page-block")(16, "vdr-card")(17, "div", 5)(18, "vdr-form-field", 6);
          ɵɵpipe(19, "translate");
          ɵɵelementStart(20, "input", 7);
          ɵɵpipe(21, "hasPermission");
          ɵɵlistener("input", function RoleDetailComponent_Template_input_input_20_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.updateCode($event.target.value));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(22, "vdr-form-field", 8);
          ɵɵpipe(23, "translate");
          ɵɵpipe(24, "hasPermission");
          ɵɵelement(25, "input", 9);
          ɵɵpipe(26, "hasPermission");
          ɵɵelementEnd()()()()();
          ɵɵelementStart(27, "vdr-page-block", 10)(28, "vdr-card", 11);
          ɵɵpipe(29, "translate");
          ɵɵelementStart(30, "vdr-form-field", 12);
          ɵɵpipe(31, "translate");
          ɵɵelement(32, "vdr-channel-assignment-control", 13);
          ɵɵpipe(33, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(34, "vdr-permission-grid", 14);
          ɵɵpipe(35, "hasPermission");
          ɵɵlistener("permissionChange", function RoleDetailComponent_Template_vdr_permission_grid_permissionChange_34_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setPermission($event));
          });
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          let tmp_14_0;
          const updateButton_r6 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 15, ctx.isNew$))("ngIfElse", updateButton_r6);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 17, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(19, 19, "common.description"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(21, 21, "UpdateAdministrator"));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(23, 23, "common.code"))("readOnlyToggle", ɵɵpipeBind1(24, 25, "UpdateAdministrator"));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(26, 27, "UpdateAdministrator"));
          ɵɵadvance(3);
          ɵɵproperty("title", ɵɵpipeBind1(29, 29, "settings.permissions"));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(31, 31, "settings.channel"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(33, 33, "UpdateAdministrator"));
          ɵɵadvance(2);
          ɵɵproperty("permissionDefinitions", ctx.permissionDefinitions)("activePermissions", (tmp_14_0 = ctx.detailForm.get("permissions")) == null ? null : tmp_14_0.value)("readonly", !ɵɵpipeBind1(35, 35, "UpdateAdministrator"));
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, ChannelAssignmentControlComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, PermissionGridComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-role-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left></vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="role-detail" />
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="detailForm.invalid || detailForm.pristine"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    class="btn btn-primary"
                    (click)="save()"
                    *vdrIfPermissions="'UpdateAdministrator'"
                    [disabled]="detailForm.invalid || detailForm.pristine"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="role-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card *ngIf="entity$ | async as entity">
                <vdr-page-entity-info [entity]="entity" />
            </vdr-card>
        </vdr-page-detail-sidebar>
        <vdr-page-block>
            <vdr-card>
                <div class="form-grid">
                    <vdr-form-field [label]="'common.description' | translate" for="description">
                        <input
                            id="description"
                            type="text"
                            formControlName="description"
                            [readonly]="!('UpdateAdministrator' | hasPermission)"
                            (input)="updateCode($event.target.value)"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'common.code' | translate"
                        for="code"
                        [readOnlyToggle]="'UpdateAdministrator' | hasPermission"
                    >
                        <input
                            id="code"
                            type="text"
                            formControlName="code"
                            [readonly]="!('UpdateAdministrator' | hasPermission)"
                        />
                    </vdr-form-field>
                </div>
            </vdr-card>
        </vdr-page-block>
    </vdr-page-detail-layout>
    <vdr-page-block class="mt-2">
        <vdr-card [title]="'settings.permissions' | translate">
            <vdr-form-field [label]="'settings.channel' | translate">
                <vdr-channel-assignment-control
                    formControlName="channelIds"
                    [vdrDisabled]="!('UpdateAdministrator' | hasPermission)"
                ></vdr-channel-assignment-control>
            </vdr-form-field>
            <vdr-permission-grid
                class="mt-2"
                [permissionDefinitions]="permissionDefinitions"
                [activePermissions]="detailForm.get('permissions')?.value"
                (permissionChange)="setPermission($event)"
                [readonly]="!('UpdateAdministrator' | hasPermission)"
            ></vdr-permission-grid>
        </vdr-card>
    </vdr-page-block>
</form>
`
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
var deleteRolesBulkAction = createBulkDeleteAction({
  location: "role-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteAdministrator),
  getItemName: (item) => item.description,
  bulkDelete: (dataService, ids) => dataService.administrator.deleteRoles(ids).pipe(map((res) => res.deleteRoles))
});
var GET_ROLE_LIST = gql`
    query GetRoleList($options: RoleListOptions) {
        roles(options: $options) {
            items {
                ...Role
            }
            totalItems
        }
    }
    ${ROLE_FRAGMENT}
`;
var RoleListComponent = class _RoleListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "role-list";
    this.initialLimit = 3;
    this.displayLimit = {};
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "code",
      type: {
        kind: "text"
      },
      label: marker("common.code"),
      filterField: "code"
    }).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "code"
    }).addSort({
      name: "description"
    }).connectToRoute(this.route);
    super.configure({
      document: GetRoleListDocument,
      getItems: (data) => data.roles,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            code: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  toggleDisplayLimit(role) {
    if (this.displayLimit[role.id] === role.permissions.length) {
      this.displayLimit[role.id] = this.initialLimit;
    } else {
      this.displayLimit[role.id] = role.permissions.length;
    }
  }
  isDefaultRole(role) {
    return role.code === import_shared_constants.SUPER_ADMIN_ROLE_CODE || role.code === import_shared_constants.CUSTOMER_ROLE_CODE;
  }
  static {
    this.ɵfac = function RoleListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoleListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RoleListComponent,
      selectors: [["vdr-role-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 36,
      vars: 51,
      consts: [["defaultRole", ""], ["collapse", ""], ["locationId", "role-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "role-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "description", 3, "heading", "optional", "sort"], ["id", "code", 3, "heading", "sort"], ["id", "channel", 3, "heading"], ["id", "permissions", 3, "heading"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], ["class", "button-ghost", 3, "routerLink", 4, "ngIf", "ngIfElse"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "channelCode"], [1, "ml-1"], [4, "ngIf", "ngIfElse"], [1, "permissions-list"], ["class", "button-small", 3, "click", 4, "ngIf"], [1, "button-small", 3, "click"], ["shape", "minus"], [1, "default-role-label"]],
      template: function RoleListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 2);
          ɵɵtemplate(5, RoleListComponent_a_5_Template, 4, 5, "a", 3);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 2);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 4);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function RoleListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function RoleListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function RoleListComponent_Template_vdr_data_table_2_visibleColumnsChange_7_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 5)(13, "vdr-dt2-search", 6);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 7);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, RoleListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 8);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, RoleListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 9);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, RoleListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 10);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, RoleListComponent_ng_template_26_Template, 3, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 11);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, RoleListComponent_ng_template_29_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 12);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, RoleListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 13);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, RoleListComponent_ng_template_35_Template, 3, 2, "ng-template");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(50, _c3));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(8, 26, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 28, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 30, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 32, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 34, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 36, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 38, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 40, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 42, "common.description"))("optional", false)("sort", ctx.sorts.get("description"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 44, "common.code"))("sort", ctx.sorts.get("code"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 46, "settings.channel"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 48, "settings.permissions"));
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, IfPermissionsDirective, ActionBarItemsComponent, ChannelBadgeComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, PageBlockComponent, AsyncPipe, SlicePipe, TranslatePipe, ChannelLabelPipe, LocaleDatePipe],
      styles: [".default-role-label[_ngcontent-%COMP%]{color:var(--color-grey-400)}.permissions-list[_ngcontent-%COMP%]{max-width:500px;display:flex;flex-wrap:wrap;align-items:center;gap:4px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-role-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="role-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateAdministrator']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-role' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="role-list" />
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
        locationId="role-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-role="item">
            {{ role.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-role="item">
            {{ role.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-role="item">
            {{ role.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.description' | translate" id="description"
        [optional]="false"
        [sort]="sorts.get('description')"
    >
        <ng-template let-role="item">
            <a
                *ngIf="!isDefaultRole(role); else defaultRole"
                class="button-ghost"
                [routerLink]="['./', role.id]"
                ><span>{{ role.description }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
            <ng-template #defaultRole>
                {{ role.description }}
            </ng-template>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.code' | translate" id="code" [sort]="sorts.get('code')">
        <ng-template let-role="item">
            <span *ngIf="!isDefaultRole(role)">{{ role.code }}</span>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.channel' | translate" id="channel">
        <ng-template let-role="item">
            <ng-container *ngIf="!isDefaultRole(role)">
                <vdr-chip *ngFor="let channel of role.channels">
                    <vdr-channel-badge [channelCode]="channel.code"></vdr-channel-badge>
                    <div class="ml-1">{{ channel.code | channelCodeToLabel | translate }}</div>
                </vdr-chip>
            </ng-container>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.permissions' | translate" id="permissions">
        <ng-template let-role="item">
            <ng-container *ngIf="!isDefaultRole(role); else defaultRole">
                <div class="permissions-list">
                    <vdr-chip
                        *ngFor="let permission of role.permissions | slice : 0 : displayLimit[role.id] || 3"
                        >{{ permission }}</vdr-chip
                    >
                    <button
                        class="button-small"
                        *ngIf="role.permissions.length > initialLimit"
                        (click)="toggleDisplayLimit(role)"
                    >
                        <ng-container
                            *ngIf="(displayLimit[role.id] || 0) < role.permissions.length; else collapse"
                        >
                            <clr-icon shape="plus"></clr-icon>
                            {{ role.permissions.length - initialLimit }}
                        </ng-container>
                        <ng-template #collapse>
                            <clr-icon shape="minus"></clr-icon>
                        </ng-template>
                    </button>
                </div>
            </ng-container>
            <ng-template #defaultRole>
                <span class="default-role-label">{{ 'settings.default-role-label' | translate }}</span>
            </ng-template>
        </ng-template>
    </vdr-dt2-column>
</vdr-data-table-2>
`,
      styles: [".default-role-label{color:var(--color-grey-400)}.permissions-list{max-width:500px;display:flex;flex-wrap:wrap;align-items:center;gap:4px}\n"]
    }]
  }], () => [], null);
})();
var GET_SELLER_DETAIL = gql`
    query GetSellerDetail($id: ID!) {
        seller(id: $id) {
            ...SellerDetail
        }
    }
    fragment SellerDetail on Seller {
        id
        createdAt
        updatedAt
        name
    }
`;
var SellerDetailComponent = class _SellerDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("Seller");
    this.detailForm = this.formBuilder.group({
      name: ["", Validators.required],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.updatePermission = [Permission.SuperAdmin, Permission.UpdateSeller, Permission.CreateSeller];
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  saveButtonEnabled() {
    return this.detailForm.dirty && this.detailForm.valid;
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    if (!formValue.name) {
      return;
    }
    const input = {
      name: formValue.name,
      customFields: formValue.customFields
    };
    this.dataService.settings.createSeller(input).subscribe((data) => {
      switch (data.createSeller.__typename) {
        case "Seller":
          this.notificationService.success(marker("common.notify-create-success"), {
            entity: "Seller"
          });
          this.detailForm.markAsPristine();
          this.changeDetector.markForCheck();
          this.router.navigate(["../", data.createSeller.id], {
            relativeTo: this.route
          });
          break;
      }
    });
  }
  save() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    this.entity$.pipe(take(1), mergeMap((seller) => {
      const input = {
        id: seller.id,
        name: formValue.name,
        customFields: formValue.customFields
      };
      return this.dataService.settings.updateSeller(input);
    })).subscribe(({
      updateSeller
    }) => {
      switch (updateSeller.__typename) {
        case "Seller":
          this.notificationService.success(marker("common.notify-update-success"), {
            entity: "Seller"
          });
          this.detailForm.markAsPristine();
          this.changeDetector.markForCheck();
          break;
      }
    });
  }
  /**
   * Update the form values when the entity changes.
   */
  setFormValues(entity, languageCode) {
    this.detailForm.patchValue({
      name: entity.name
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), entity);
    }
  }
  static {
    this.ɵfac = function SellerDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SellerDetailComponent,
      selectors: [["vdr-seller-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 24,
      vars: 17,
      consts: [["updateButton", ""], ["locationId", "seller-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "seller-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Seller", 3, "customFields", "customFieldsFormGroup"]],
      template: function SellerDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, SellerDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, SellerDetailComponent_ng_template_7_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar");
          ɵɵtemplate(13, SellerDetailComponent_vdr_card_13_Template, 2, 1, "vdr-card", 4);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-page-block")(16, "vdr-card")(17, "div", 5)(18, "vdr-form-field", 6);
          ɵɵpipe(19, "translate");
          ɵɵelement(20, "input", 7);
          ɵɵpipe(21, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(22, SellerDetailComponent_vdr_card_22_Template, 3, 5, "vdr-card", 8);
          ɵɵelement(23, "vdr-custom-detail-component-host", 9);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r5 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 9, ctx.isNew$))("ngIfElse", updateButton_r5);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 11, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(19, 13, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(21, 15, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, IfPermissionsDirective, ActionBarItemsComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      styles: [_c11],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-seller-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="seller-detail" />
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
                    *vdrIfPermissions="['SuperAdmin', 'UpdateSeller']"
                    [disabled]="!saveButtonEnabled()"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="seller-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
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
                            type="text"
                            [readonly]="!(updatePermission | hasPermission)"
                            formControlName="name"
                        />
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="Seller"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="seller-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`,
      styles: ["clr-alert{max-width:30rem;margin-bottom:12px}\n"]
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
var deleteSellersBulkAction = createBulkDeleteAction({
  location: "seller-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteSeller),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.settings.deleteSellers(ids).pipe(map((res) => res.deleteSellers))
});
var GET_SELLER_LIST = gql`
    query GetSellerList($options: SellerListOptions) {
        sellers(options: $options) {
            items {
                ...SellerListItem
            }
            totalItems
        }
    }
    fragment SellerListItem on Seller {
        id
        createdAt
        updatedAt
        name
    }
`;
var SellerListComponent = class _SellerListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "seller-list";
    this.customFields = this.getCustomFieldConfig("Seller");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetSellerListDocument,
      getItems: (data) => data.sellers,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  static {
    this.ɵfac = function SellerListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SellerListComponent,
      selectors: [["vdr-seller-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 28,
      vars: 42,
      consts: [["locationId", "seller-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "seller-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "customField", "sorts"]],
      template: function SellerListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, SellerListComponent_a_5_Template, 4, 5, "a", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 2);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function SellerListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function SellerListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function SellerListComponent_Template_vdr_data_table_2_visibleColumnsChange_7_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 3)(13, "vdr-dt2-search", 4);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 5);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, SellerListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, SellerListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, SellerListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, SellerListComponent_ng_template_26_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(27, SellerListComponent_vdr_dt2_custom_field_column_27_Template, 1, 2, "vdr-dt2-custom-field-column", 9);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(41, _c12));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(8, 23, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 25, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 27, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 29, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 31, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 33, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 35, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 37, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 39, "common.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-seller-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="seller-list" />
            <a class="btn btn-primary" *vdrIfPermissions="['SuperAdmin', 'CreateSeller']" [routerLink]="['./', 'create']">
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-seller' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="seller-list" />
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
        locationId="seller-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-seller="item">{{ seller.id }}</ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-seller="item">
            {{ seller.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-seller="item">
            {{ seller.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false" [sort]="sorts.get('name')">
        <ng-template let-seller="item">
            <a class="button-ghost" [routerLink]="['./', seller.id]"
                ><span>{{ seller.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column *ngFor="let customField of customFields" [customField]="customField" [sorts]="sorts" />
</vdr-data-table-2>
`
    }]
  }], () => [], null);
})();
var ShippingEligibilityTestResultComponent = class _ShippingEligibilityTestResultComponent {
  constructor() {
    this.okToRun = false;
    this.testDataUpdated = false;
    this.runTest = new EventEmitter();
  }
  static {
    this.ɵfac = function ShippingEligibilityTestResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShippingEligibilityTestResultComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ShippingEligibilityTestResultComponent,
      selectors: [["vdr-shipping-eligibility-test-result"]],
      inputs: {
        testResult: "testResult",
        okToRun: "okToRun",
        testDataUpdated: "testDataUpdated",
        currencyCode: "currencyCode"
      },
      outputs: {
        runTest: "runTest"
      },
      standalone: false,
      decls: 8,
      vars: 9,
      consts: [[1, "test-result", 3, "title"], ["class", "card-span", 4, "ngFor", "ngForOf"], ["class", "card-span", 4, "ngIf"], [1, "card-footer"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "card-span"], [1, "result-details"], [3, "label"], [1, "price-row"], [3, "value", 4, "ngIf"], [3, "value"], ["shape", "ban", 1, "is-solid", "error"]],
      template: function ShippingEligibilityTestResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-card", 0);
          ɵɵpipe(1, "translate");
          ɵɵtemplate(2, ShippingEligibilityTestResultComponent_div_2_Template, 15, 21, "div", 1)(3, ShippingEligibilityTestResultComponent_div_3_Template, 4, 3, "div", 2);
          ɵɵelementStart(4, "div", 3)(5, "button", 4);
          ɵɵlistener("click", function ShippingEligibilityTestResultComponent_Template_button_click_5_listener() {
            return ctx.runTest.emit();
          });
          ɵɵtext(6);
          ɵɵpipe(7, "translate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("title", ɵɵpipeBind1(1, 5, "settings.test-result"));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.testResult);
          ɵɵadvance();
          ɵɵproperty("ngIf", (ctx.testResult == null ? null : ctx.testResult.length) === 0);
          ɵɵadvance(2);
          ɵɵproperty("disabled", !ctx.okToRun);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 7, "settings.test-shipping-methods"), " ");
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, LabeledDataComponent, ObjectTreeComponent, CardComponent, TranslatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:block}.result-details[_ngcontent-%COMP%]{transition:opacity .2s}.result-details.stale[_ngcontent-%COMP%]{opacity:.5}.price-row[_ngcontent-%COMP%]{display:flex}.price-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:first-child){margin-inline-start:24px}clr-icon.error[_ngcontent-%COMP%]{color:var(--color-error-500)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShippingEligibilityTestResultComponent, [{
    type: Component,
    args: [{
      selector: "vdr-shipping-eligibility-test-result",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-card class="test-result" [title]="'settings.test-result' | translate">
    <div class="card-span" *ngFor="let quote of testResult">
        <div class="result-details" [class.stale]="testDataUpdated">
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
    </div>
    <div class="card-span" *ngIf="testResult?.length === 0">
        <clr-icon shape="ban" class="is-solid error"></clr-icon>
        {{ 'settings.no-eligible-shipping-methods' | translate }}
    </div>
    <div class="card-footer">
        <button class="btn btn-secondary" (click)="runTest.emit()" [disabled]="!okToRun">
            {{ 'settings.test-shipping-methods' | translate }}
        </button>
    </div>
</vdr-card>
`,
      styles: [":host{display:block}.result-details{transition:opacity .2s}.result-details.stale{opacity:.5}.price-row{display:flex}.price-row>*:not(:first-child){margin-inline-start:24px}clr-icon.error{color:var(--color-error-500)}\n"]
    }]
  }], null, {
    testResult: [{
      type: Input
    }],
    okToRun: [{
      type: Input
    }],
    testDataUpdated: [{
      type: Input
    }],
    currencyCode: [{
      type: Input
    }],
    runTest: [{
      type: Output
    }]
  });
})();
var TestOrderBuilderComponent = class _TestOrderBuilderComponent {
  get subTotal() {
    return this.lines.reduce((sum, l) => sum + l.unitPriceWithTax * l.quantity, 0);
  }
  constructor(dataService, localStorageService) {
    this.dataService = dataService;
    this.localStorageService = localStorageService;
    this.orderLinesChange = new EventEmitter();
    this.lines = [];
  }
  ngOnInit() {
    this.lines = this.loadFromLocalStorage();
    if (this.lines) {
      this.orderLinesChange.emit(this.lines);
    }
    this.dataService.settings.getActiveChannel("cache-first").single$.subscribe((result) => {
      this.currencyCode = result.activeChannel.defaultCurrencyCode;
    });
  }
  selectResult(result) {
    if (result) {
      this.addToLines(result);
    }
  }
  addToLines(result) {
    if (!this.lines.find((l) => l.id === result.productVariantId)) {
      this.lines.push({
        id: result.productVariantId,
        name: result.productVariantName,
        preview: result.productAsset?.preview ?? "",
        quantity: 1,
        sku: result.sku,
        unitPriceWithTax: result.priceWithTax.__typename === "SinglePrice" && result.priceWithTax.value || 0
      });
      this.persistToLocalStorage();
      this.orderLinesChange.emit(this.lines);
    }
  }
  updateQuantity() {
    this.persistToLocalStorage();
    this.orderLinesChange.emit(this.lines);
  }
  removeLine(line) {
    this.lines = this.lines.filter((l) => l.id !== line.id);
    this.persistToLocalStorage();
    this.orderLinesChange.emit(this.lines);
  }
  persistToLocalStorage() {
    this.localStorageService.setForCurrentLocation("shippingTestOrder", this.lines);
  }
  loadFromLocalStorage() {
    return this.localStorageService.getForCurrentLocation("shippingTestOrder") || [];
  }
  static {
    this.ɵfac = function TestOrderBuilderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestOrderBuilderComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(LocalStorageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TestOrderBuilderComponent,
      selectors: [["vdr-test-order-builder"]],
      outputs: {
        orderLinesChange: "orderLinesChange"
      },
      standalone: false,
      decls: 5,
      vars: 2,
      consts: [["emptyPlaceholder", ""], ["class", "order-table table", 4, "ngIf", "ngIfElse"], [1, "card-block"], [3, "productSelected"], [1, "order-table", "table"], ["class", "order-line", 4, "ngFor", "ngForOf"], [1, "sub-total"], [1, "left"], [1, "order-line"], [1, "align-middle", "thumb"], [3, "src"], [1, "align-middle", "name"], [1, "align-middle", "sku"], [1, "align-middle", "unit-price"], [1, "align-middle", "quantity"], ["type", "number", "max", "9999", "min", "1", 3, "ngModelChange", "change", "ngModel"], [1, "icon-button", 3, "click"], ["shape", "trash"], [1, "align-middle", "total"], [1, "card-block", "empty-placeholder", "card-span"], [1, "empty-text"], ["shape", "arrow", "dir", "down", "size", "96"]],
      template: function TestOrderBuilderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, TestOrderBuilderComponent_table_0_Template, 31, 23, "table", 1)(1, TestOrderBuilderComponent_ng_template_1_Template, 5, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(3, "div", 2)(4, "vdr-product-variant-selector", 3);
          ɵɵlistener("productSelected", function TestOrderBuilderComponent_Template_vdr_product_variant_selector_productSelected_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.selectResult($event));
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          const emptyPlaceholder_r5 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.lines.length)("ngIfElse", emptyPlaceholder_r5);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, Dir, FormFieldControlDirective, ProductVariantSelectorComponent, TranslatePipe, LocaleCurrencyPipe],
      styles: [".empty-placeholder[_ngcontent-%COMP%]{color:var(--color-grey-400);text-align:center}.empty-text[_ngcontent-%COMP%]{font-size:22px}.thumb[_ngcontent-%COMP%]{max-width:50px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestOrderBuilderComponent, [{
    type: Component,
    args: [{
      selector: "vdr-test-order-builder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<table class="order-table table" *ngIf="lines.length; else emptyPlaceholder">
    <thead>
        <tr>
            <th></th>
            <th>{{ 'order.product-name' | translate }}</th>
            <th>{{ 'order.product-sku' | translate }}</th>
            <th>{{ 'order.unit-price' | translate }}</th>
            <th>{{ 'order.quantity' | translate }}</th>
            <th>{{ 'order.total' | translate }}</th>
        </tr>
    </thead>
    <tr *ngFor="let line of lines" class="order-line">
        <td class="align-middle thumb">
            <img [src]="line.preview + '?preset=tiny'" />
        </td>
        <td class="align-middle name">{{ line.name }}</td>
        <td class="align-middle sku">{{ line.sku }}</td>
        <td class="align-middle unit-price">
            {{ line.unitPriceWithTax | localeCurrency : currencyCode }}
        </td>
        <td class="align-middle quantity">
            <input [(ngModel)]="line.quantity" (change)="updateQuantity()" type="number" max="9999" min="1" />
            <button class="icon-button" (click)="removeLine(line)">
                <clr-icon shape="trash"></clr-icon>
            </button>
        </td>
        <td class="align-middle total">
            {{ line.unitPriceWithTax * line.quantity | localeCurrency : currencyCode }}
        </td>
    </tr>
    <tr class="sub-total">
        <td class="left">{{ 'order.sub-total' | translate }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ subTotal | localeCurrency : currencyCode }}</td>
    </tr>
</table>

<ng-template #emptyPlaceholder>
    <div class="card-block empty-placeholder card-span">
        <div class="empty-text">{{ 'settings.add-products-to-test-order' | translate }}</div>
        <clr-icon shape="arrow" dir="down" size="96"></clr-icon>
    </div>
</ng-template>
<div class="card-block">
    <vdr-product-variant-selector (productSelected)="selectResult($event)"> </vdr-product-variant-selector>
</div>
`,
      styles: [".empty-placeholder{color:var(--color-grey-400);text-align:center}.empty-text{font-size:22px}.thumb{max-width:50px}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: LocalStorageService
  }], {
    orderLinesChange: [{
      type: Output
    }]
  });
})();
var TestAddressFormComponent = class _TestAddressFormComponent {
  constructor(formBuilder, dataService, localStorageService) {
    this.formBuilder = formBuilder;
    this.dataService = dataService;
    this.localStorageService = localStorageService;
    this.addressChange = new EventEmitter();
  }
  ngOnInit() {
    this.availableCountries$ = this.dataService.settings.getAvailableCountries().mapSingle((result) => result.countries.items);
    const storedValue = this.localStorageService.getForCurrentLocation("shippingTestAddress");
    const initialValue = storedValue ? storedValue : {
      city: "",
      countryCode: "",
      postalCode: "",
      province: ""
    };
    this.addressChange.emit(initialValue);
    this.form = this.formBuilder.group(initialValue);
    this.subscription = this.form.valueChanges.subscribe((value) => {
      this.localStorageService.setForCurrentLocation("shippingTestAddress", value);
      this.addressChange.emit(value);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function TestAddressFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestAddressFormComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(LocalStorageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TestAddressFormComponent,
      selectors: [["vdr-test-address-form"]],
      outputs: {
        addressChange: "addressChange"
      },
      standalone: false,
      decls: 20,
      vars: 19,
      consts: [[1, "card"], [1, "card-header"], [1, "card-block"], [1, "form-grid", 3, "formGroup"], [3, "label"], ["formControlName", "city", "type", "text"], ["formControlName", "province", "type", "text"], ["formControlName", "postalCode", "type", "text"], ["name", "countryCode", "formControlName", "countryCode"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function TestAddressFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 2)(5, "form", 3)(6, "vdr-form-field", 4);
          ɵɵpipe(7, "translate");
          ɵɵelement(8, "input", 5);
          ɵɵelementEnd();
          ɵɵelementStart(9, "vdr-form-field", 4);
          ɵɵpipe(10, "translate");
          ɵɵelement(11, "input", 6);
          ɵɵelementEnd();
          ɵɵelementStart(12, "vdr-form-field", 4);
          ɵɵpipe(13, "translate");
          ɵɵelement(14, "input", 7);
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-form-field", 4);
          ɵɵpipe(16, "translate");
          ɵɵelementStart(17, "select", 8);
          ɵɵtemplate(18, TestAddressFormComponent_option_18_Template, 2, 2, "option", 9);
          ɵɵpipe(19, "async");
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, "settings.test-address"), " ");
          ɵɵadvance(3);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(7, 9, "customer.city"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(10, 11, "customer.province"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(13, 13, "customer.postal-code"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(16, 15, "customer.country"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(19, 17, ctx.availableCountries$));
        }
      },
      dependencies: [NgForOf, ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormFieldComponent, FormFieldControlDirective, AsyncPipe, TranslatePipe],
      styles: ["[_nghost-%COMP%]{display:block}clr-input-container[_ngcontent-%COMP%]{margin-bottom:12px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestAddressFormComponent, [{
    type: Component,
    args: [{
      selector: "vdr-test-address-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="card">
    <div class="card-header">
        {{ 'settings.test-address' | translate }}
    </div>
    <div class="card-block">
        <form [formGroup]="form" class="form-grid">
            <vdr-form-field [label]="'customer.city' | translate">
                <input formControlName="city" type="text"  />
            </vdr-form-field>
            <vdr-form-field [label]="'customer.province' | translate">
                <input formControlName="province" type="text"  />
            </vdr-form-field>
            <vdr-form-field [label]="'customer.postal-code' | translate">
                <input formControlName="postalCode" type="text"  />
            </vdr-form-field>
            <vdr-form-field [label]="'customer.country' | translate">
                <select name="countryCode" formControlName="countryCode" >
                    <option *ngFor="let country of availableCountries$ | async" [value]="country.code">
                        {{ country.name }}
                    </option>
                </select>
            </vdr-form-field>
        </form>
    </div>
</div>
`,
      styles: [":host{display:block}clr-input-container{margin-bottom:12px}\n"]
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: DataService
  }, {
    type: LocalStorageService
  }], {
    addressChange: [{
      type: Output
    }]
  });
})();
var ShippingMethodTestResultComponent = class _ShippingMethodTestResultComponent {
  constructor() {
    this.okToRun = false;
    this.testDataUpdated = false;
    this.runTest = new EventEmitter();
  }
  static {
    this.ɵfac = function ShippingMethodTestResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShippingMethodTestResultComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ShippingMethodTestResultComponent,
      selectors: [["vdr-shipping-method-test-result"]],
      inputs: {
        testResult: "testResult",
        okToRun: "okToRun",
        testDataUpdated: "testDataUpdated",
        currencyCode: "currencyCode"
      },
      outputs: {
        runTest: "runTest"
      },
      standalone: false,
      decls: 21,
      vars: 24,
      consts: [[1, "test-result", "card", 3, "ngClass"], [1, "card-header"], [1, "card-block"], [1, "result-details"], [3, "label"], [1, "eligible-icon"], ["shape", "success-standard", "class", "is-solid success", 4, "ngIf"], ["shape", "ban", "class", "is-solid error", 4, "ngIf"], ["shape", "unknown-status", 4, "ngIf"], [1, "price-row"], [3, "label", 4, "ngIf"], [3, "value", 4, "ngIf"], [1, "card-footer"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["shape", "success-standard", 1, "is-solid", "success"], ["shape", "ban", 1, "is-solid", "error"], ["shape", "unknown-status"], [3, "value"]],
      template: function ShippingMethodTestResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "vdr-labeled-data", 4);
          ɵɵpipe(7, "translate");
          ɵɵelementStart(8, "div", 5);
          ɵɵtemplate(9, ShippingMethodTestResultComponent_clr_icon_9_Template, 1, 0, "clr-icon", 6)(10, ShippingMethodTestResultComponent_clr_icon_10_Template, 1, 0, "clr-icon", 7)(11, ShippingMethodTestResultComponent_clr_icon_11_Template, 1, 0, "clr-icon", 8);
          ɵɵelementEnd();
          ɵɵtext(12);
          ɵɵelementEnd();
          ɵɵelementStart(13, "div", 9);
          ɵɵtemplate(14, ShippingMethodTestResultComponent_vdr_labeled_data_14_Template, 4, 7, "vdr-labeled-data", 10)(15, ShippingMethodTestResultComponent_vdr_labeled_data_15_Template, 4, 7, "vdr-labeled-data", 10);
          ɵɵelementEnd();
          ɵɵtemplate(16, ShippingMethodTestResultComponent_vdr_object_tree_16_Template, 1, 1, "vdr-object-tree", 11);
          ɵɵelementEnd()();
          ɵɵelementStart(17, "div", 12)(18, "button", 13);
          ɵɵlistener("click", function ShippingMethodTestResultComponent_Template_button_click_18_listener() {
            return ctx.runTest.emit();
          });
          ɵɵtext(19);
          ɵɵpipe(20, "translate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("ngClass", ɵɵpureFunction3(20, _c13, (ctx.testResult == null ? null : ctx.testResult.eligible) === true, (ctx.testResult == null ? null : ctx.testResult.eligible) === false, !ctx.testResult));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 14, "settings.test-result"), " ");
          ɵɵadvance(3);
          ɵɵclassProp("stale", ctx.testDataUpdated);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(7, 16, "settings.eligible"));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.testResult == null ? null : ctx.testResult.eligible);
          ɵɵadvance();
          ɵɵproperty("ngIf", (ctx.testResult == null ? null : ctx.testResult.eligible) === false);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.testResult);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.testResult == null ? null : ctx.testResult.eligible, " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", (ctx.testResult == null ? null : ctx.testResult.quote == null ? null : ctx.testResult.quote.price) != null);
          ɵɵadvance();
          ɵɵproperty("ngIf", (ctx.testResult == null ? null : ctx.testResult.quote == null ? null : ctx.testResult.quote.priceWithTax) != null);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.testResult == null ? null : ctx.testResult.quote == null ? null : ctx.testResult.quote.metadata);
          ɵɵadvance(2);
          ɵɵproperty("disabled", !ctx.okToRun);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 18, "settings.test-shipping-method"), " ");
        }
      },
      dependencies: [ClrIconCustomTag, NgClass, NgIf, LabeledDataComponent, ObjectTreeComponent, TranslatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:block}.test-result.success[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]{background-color:var(--color-success-100)}.test-result.error[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]{background-color:var(--color-error-100)}.test-result.unknown[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]{background-color:var(--color-component-bg-100)}.result-details[_ngcontent-%COMP%]{transition:opacity .2s}.result-details.stale[_ngcontent-%COMP%]{opacity:.5}.eligible-icon[_ngcontent-%COMP%]{display:inline-block}.eligible-icon[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{color:var(--color-success-500)}.eligible-icon[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:var(--color-error-500)}.price-row[_ngcontent-%COMP%]{display:flex}.price-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:first-child){margin-inline-start:24px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShippingMethodTestResultComponent, [{
    type: Component,
    args: [{
      selector: "vdr-shipping-method-test-result",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
    class="test-result card"
    [ngClass]="{
        success: testResult?.eligible === true,
        error: testResult?.eligible === false,
        unknown: !testResult
    }"
>
    <div class="card-header">
        {{ 'settings.test-result' | translate }}
    </div>
    <div class="card-block">
        <div class="result-details" [class.stale]="testDataUpdated">
            <vdr-labeled-data [label]="'settings.eligible' | translate">
                <div class="eligible-icon">
                    <clr-icon
                        shape="success-standard"
                        class="is-solid success"
                        *ngIf="testResult?.eligible"
                    ></clr-icon>
                    <clr-icon
                        shape="ban"
                        class="is-solid error"
                        *ngIf="testResult?.eligible === false"
                    ></clr-icon>
                    <clr-icon shape="unknown-status" *ngIf="!testResult"></clr-icon>
                </div>
                {{ testResult?.eligible }}
            </vdr-labeled-data>
            <div class="price-row">
                <vdr-labeled-data
                    [label]="'common.price' | translate"
                    *ngIf="testResult?.quote?.price != null"
                >
                    {{ testResult.quote?.price | localeCurrency: currencyCode }}
                </vdr-labeled-data>
                <vdr-labeled-data
                    [label]="'common.price-with-tax' | translate"
                    *ngIf="testResult?.quote?.priceWithTax != null"
                >
                    {{ testResult.quote?.priceWithTax | localeCurrency: currencyCode }}
                </vdr-labeled-data>
            </div>
            <vdr-object-tree
                *ngIf="testResult?.quote?.metadata"
                [value]="testResult?.quote?.metadata"
            ></vdr-object-tree>
        </div>
    </div>
    <div class="card-footer">
        <button class="btn btn-secondary" (click)="runTest.emit()" [disabled]="!okToRun">
            {{ 'settings.test-shipping-method' | translate }}
        </button>
    </div>
</div>
`,
      styles: [":host{display:block}.test-result.success .card-block{background-color:var(--color-success-100)}.test-result.error .card-block{background-color:var(--color-error-100)}.test-result.unknown .card-block{background-color:var(--color-component-bg-100)}.result-details{transition:opacity .2s}.result-details.stale{opacity:.5}.eligible-icon{display:inline-block}.eligible-icon .success{color:var(--color-success-500)}.eligible-icon .error{color:var(--color-error-500)}.price-row{display:flex}.price-row>*:not(:first-child){margin-inline-start:24px}\n"]
    }]
  }], null, {
    testResult: [{
      type: Input
    }],
    okToRun: [{
      type: Input
    }],
    testDataUpdated: [{
      type: Input
    }],
    currencyCode: [{
      type: Input
    }],
    runTest: [{
      type: Output
    }]
  });
})();
var GET_SHIPPING_METHOD_DETAIL = gql`
    query GetShippingMethodDetail($id: ID!) {
        shippingMethod(id: $id) {
            ...ShippingMethod
        }
    }
    ${SHIPPING_METHOD_FRAGMENT}
`;
var ShippingMethodDetailComponent = class _ShippingMethodDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("ShippingMethod");
    this.detailForm = this.formBuilder.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      description: "",
      fulfillmentHandler: ["", Validators.required],
      checker: {},
      calculator: {},
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.checkers = [];
    this.calculators = [];
    this.fulfillmentHandlers = [];
    this.testDataUpdated = false;
    this.updatePermission = [Permission.UpdateSettings, Permission.UpdateShippingMethod];
    this.fetchTestResult$ = new Subject();
  }
  ngOnInit() {
    this.init();
    this.dataService.shippingMethod.getShippingMethodOperations().single$.subscribe((data) => {
      this.checkers = data.shippingEligibilityCheckers;
      this.calculators = data.shippingCalculators;
      this.fulfillmentHandlers = data.fulfillmentHandlers;
      this.changeDetector.markForCheck();
      this.selectedCheckerDefinition = data.shippingEligibilityCheckers.find((c) => c.code === this.entity?.checker?.code);
      this.selectedCalculatorDefinition = data.shippingCalculators.find((c) => c.code === this.entity?.calculator?.code);
    });
    this.activeChannel$ = this.dataService.settings.getActiveChannel().mapStream((data) => data.activeChannel);
    this.testResult$ = this.fetchTestResult$.pipe(switchMap(([address, lines]) => {
      const {
        checker,
        calculator
      } = this.detailForm.value;
      if (!this.selectedChecker || !this.selectedCalculator || !checker || !calculator) {
        return of(void 0);
      }
      const input = {
        shippingAddress: __spreadProps(__spreadValues({}, address), {
          streetLine1: "test"
        }),
        lines: lines.map((l) => ({
          productVariantId: l.id,
          quantity: l.quantity
        })),
        checker: toConfigurableOperationInput(this.selectedChecker, checker),
        calculator: toConfigurableOperationInput(this.selectedCalculator, calculator)
      };
      return this.dataService.shippingMethod.testShippingMethod(input).mapSingle((result) => result.testShippingMethod);
    }));
    merge(this.detailForm.get(["checker"]).valueChanges, this.detailForm.get(["calculator"]).valueChanges).pipe(takeUntil(this.destroy$)).subscribe(() => this.testDataUpdated = true);
  }
  ngOnDestroy() {
    this.destroy();
  }
  updateCode(currentCode, nameValue) {
    if (!currentCode) {
      const codeControl = this.detailForm.get(["code"]);
      if (codeControl && codeControl.pristine) {
        codeControl.setValue((0, import_normalize_string.normalizeString)(nameValue, "-"));
      }
    }
  }
  selectChecker(checker) {
    this.selectedCheckerDefinition = checker;
    this.selectedChecker = configurableDefinitionToInstance(checker);
    const formControl = this.detailForm.get("checker");
    if (formControl) {
      formControl.clearValidators();
      formControl.updateValueAndValidity({
        onlySelf: true
      });
      formControl.patchValue(this.selectedChecker);
    }
    this.detailForm.markAsDirty();
  }
  selectCalculator(calculator) {
    this.selectedCalculatorDefinition = calculator;
    this.selectedCalculator = configurableDefinitionToInstance(calculator);
    const formControl = this.detailForm.get("calculator");
    if (formControl) {
      formControl.clearValidators();
      formControl.updateValueAndValidity({
        onlySelf: true
      });
      formControl.patchValue(this.selectedCalculator);
    }
    this.detailForm.markAsDirty();
  }
  create() {
    const selectedChecker = this.selectedChecker;
    const selectedCalculator = this.selectedCalculator;
    const {
      checker,
      calculator
    } = this.detailForm.value;
    if (!selectedChecker || !selectedCalculator || !checker || !calculator) {
      return;
    }
    const input = __spreadProps(__spreadValues({}, this.getUpdatedShippingMethod({
      createdAt: "",
      updatedAt: "",
      id: "",
      code: "",
      name: "",
      description: "",
      fulfillmentHandlerCode: "",
      checker: void 0,
      calculator: void 0,
      translations: []
    }, this.detailForm, this.languageCode)), {
      checker: toConfigurableOperationInput(selectedChecker, checker),
      calculator: toConfigurableOperationInput(selectedCalculator, calculator)
    });
    this.dataService.shippingMethod.createShippingMethod(input).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "ShippingMethod"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createShippingMethod.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "ShippingMethod"
      });
    });
  }
  save() {
    const selectedChecker = this.selectedChecker;
    const selectedCalculator = this.selectedCalculator;
    const {
      checker,
      calculator
    } = this.detailForm.value;
    if (!selectedChecker || !selectedCalculator || !checker || !calculator) {
      return;
    }
    combineLatest([this.entity$, this.languageCode$]).pipe(take(1), mergeMap(([shippingMethod, languageCode]) => {
      const input = __spreadProps(__spreadValues({}, this.getUpdatedShippingMethod(shippingMethod, this.detailForm, languageCode)), {
        checker: toConfigurableOperationInput(selectedChecker, checker),
        calculator: toConfigurableOperationInput(selectedCalculator, calculator)
      });
      return this.dataService.shippingMethod.updateShippingMethod(input);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "ShippingMethod"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      console.error(err);
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "ShippingMethod"
      });
    });
  }
  setTestOrderLines(event) {
    this.testOrderLines = event;
    this.testDataUpdated = true;
  }
  setTestAddress(event) {
    this.testAddress = event;
    this.testDataUpdated = true;
  }
  allTestDataPresent() {
    return !!(this.testAddress && this.testOrderLines && this.testOrderLines.length && this.selectedChecker && this.selectedCalculator);
  }
  runTest() {
    this.fetchTestResult$.next([this.testAddress, this.testOrderLines]);
    this.testDataUpdated = false;
  }
  /**
   * Given a ShippingMethod and the value of the detailForm, this method creates an updated copy which
   * can then be persisted to the API.
   */
  getUpdatedShippingMethod(shippingMethod, formGroup, languageCode) {
    const formValue = formGroup.value;
    const input = createUpdatedTranslatable({
      translatable: shippingMethod,
      updatedFields: formValue,
      customFieldConfig: this.customFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: shippingMethod.name || "",
        description: shippingMethod.description || ""
      }
    });
    return __spreadProps(__spreadValues({}, input), {
      fulfillmentHandler: formValue.fulfillmentHandler
    });
  }
  setFormValues(shippingMethod, languageCode) {
    const currentTranslation = findTranslation(shippingMethod, languageCode);
    this.detailForm.patchValue({
      name: currentTranslation?.name ?? "",
      description: currentTranslation?.description ?? "",
      code: shippingMethod.code,
      fulfillmentHandler: shippingMethod.fulfillmentHandlerCode,
      checker: shippingMethod.checker || {},
      calculator: shippingMethod.calculator || {}
    });
    if (!this.selectedChecker) {
      this.selectedChecker = shippingMethod.checker && {
        code: shippingMethod.checker.code,
        args: shippingMethod.checker.args.map((a) => __spreadProps(__spreadValues({}, a), {
          value: getConfigArgValue(a.value)
        }))
      };
    }
    if (!this.selectedCalculator) {
      this.selectedCalculator = shippingMethod.calculator && {
        code: shippingMethod.calculator?.code,
        args: shippingMethod.calculator?.args.map((a) => __spreadProps(__spreadValues({}, a), {
          value: getConfigArgValue(a.value)
        }))
      };
    }
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), shippingMethod, currentTranslation);
    }
  }
  static {
    this.ɵfac = function ShippingMethodDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShippingMethodDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ShippingMethodDetailComponent,
      selectors: [["vdr-shipping-method-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 56,
      vars: 69,
      consts: [["updateButton", ""], [3, "languageCodeChange", "disabled", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "shipping-method-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "input", "readonly"], ["for", "code", 3, "label", "readOnlyToggle"], ["id", "code", "type", "text", "formControlName", "code", 3, "readonly"], ["formControlName", "description", 1, "form-grid-span", 3, "readonly", "label"], ["for", "fulfillmentHandler", 3, "label"], ["name", "fulfillmentHandler", "formControlName", "fulfillmentHandler", 3, "vdrDisabled"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "shipping-method-detail", 3, "entity$", "detailForm"], [3, "title"], ["class", "card-span", "formControlName", "checker", 3, "operation", "operationDefinition", "readonly", "remove", 4, "ngIf"], ["class", "card-span", 4, "ngIf"], ["class", "card-span", "formControlName", "calculator", 3, "operation", "operationDefinition", "readonly", "remove", 4, "ngIf"], [1, "card-span", 3, "orderLinesChange"], [1, "mt-2", 3, "addressChange"], [1, "mt-2", 3, "runTest", "currencyCode", "okToRun", "testDataUpdated", "testResult"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], [3, "value"], ["formGroupName", "customFields", 3, "title"], ["entityName", "ShippingMethod", 3, "customFields", "customFieldsFormGroup"], ["formControlName", "checker", 1, "card-span", 3, "remove", "operation", "operationDefinition", "readonly"], [1, "card-span"], ["vdrDropdownTrigger", "", 1, "btn", "btn-outline"], ["shape", "plus"], ["vdrPosition", "bottom-left"], ["type", "button", "vdrDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "vdrDropdownItem", "", 3, "click"], ["formControlName", "calculator", 1, "card-span", 3, "remove", "operation", "operationDefinition", "readonly"]],
      template: function ShippingMethodDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 1);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "async");
          ɵɵlistener("languageCodeChange", function ShippingMethodDetailComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setLanguage($event));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(7, "vdr-ab-right");
          ɵɵelement(8, "vdr-action-bar-items", 2);
          ɵɵtemplate(9, ShippingMethodDetailComponent_button_9_Template, 3, 4, "button", 3);
          ɵɵpipe(10, "async");
          ɵɵtemplate(11, ShippingMethodDetailComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(13, "vdr-action-bar-dropdown-menu", 2);
          ɵɵelementEnd()()();
          ɵɵelementStart(14, "form", 4)(15, "vdr-page-detail-layout")(16, "vdr-page-detail-sidebar");
          ɵɵtemplate(17, ShippingMethodDetailComponent_vdr_card_17_Template, 2, 1, "vdr-card", 5);
          ɵɵpipe(18, "async");
          ɵɵelementEnd();
          ɵɵelementStart(19, "vdr-page-block")(20, "vdr-card")(21, "div", 6)(22, "vdr-form-field", 7);
          ɵɵpipe(23, "translate");
          ɵɵelementStart(24, "input", 8);
          ɵɵpipe(25, "hasPermission");
          ɵɵlistener("input", function ShippingMethodDetailComponent_Template_input_input_24_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.updateCode(ctx.entity == null ? null : ctx.entity.code, $event.target.value));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(26, "vdr-form-field", 9);
          ɵɵpipe(27, "translate");
          ɵɵpipe(28, "hasPermission");
          ɵɵelement(29, "input", 10);
          ɵɵpipe(30, "hasPermission");
          ɵɵelementEnd();
          ɵɵelement(31, "vdr-rich-text-editor", 11);
          ɵɵpipe(32, "hasPermission");
          ɵɵpipe(33, "translate");
          ɵɵelementStart(34, "vdr-form-field", 12);
          ɵɵpipe(35, "translate");
          ɵɵelementStart(36, "select", 13);
          ɵɵpipe(37, "hasPermission");
          ɵɵtemplate(38, ShippingMethodDetailComponent_option_38_Template, 2, 3, "option", 14);
          ɵɵelementEnd()()()();
          ɵɵtemplate(39, ShippingMethodDetailComponent_vdr_card_39_Template, 3, 5, "vdr-card", 15);
          ɵɵelement(40, "vdr-custom-detail-component-host", 16);
          ɵɵelementStart(41, "vdr-card", 17);
          ɵɵpipe(42, "translate");
          ɵɵtemplate(43, ShippingMethodDetailComponent_vdr_configurable_input_43_Template, 2, 5, "vdr-configurable-input", 18)(44, ShippingMethodDetailComponent_div_44_Template, 8, 4, "div", 19);
          ɵɵelementEnd();
          ɵɵelementStart(45, "vdr-card", 17);
          ɵɵpipe(46, "translate");
          ɵɵtemplate(47, ShippingMethodDetailComponent_vdr_configurable_input_47_Template, 2, 5, "vdr-configurable-input", 20)(48, ShippingMethodDetailComponent_div_48_Template, 8, 4, "div", 19);
          ɵɵelementEnd();
          ɵɵelementStart(49, "vdr-card", 17);
          ɵɵpipe(50, "translate");
          ɵɵelementStart(51, "vdr-test-order-builder", 21);
          ɵɵlistener("orderLinesChange", function ShippingMethodDetailComponent_Template_vdr_test_order_builder_orderLinesChange_51_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setTestOrderLines($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(52, "vdr-test-address-form", 22);
          ɵɵlistener("addressChange", function ShippingMethodDetailComponent_Template_vdr_test_address_form_addressChange_52_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setTestAddress($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(53, "vdr-shipping-method-test-result", 23);
          ɵɵpipe(54, "async");
          ɵɵpipe(55, "async");
          ɵɵlistener("runTest", function ShippingMethodDetailComponent_Template_vdr_shipping_method_test_result_runTest_53_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.runTest());
          });
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          let tmp_28_0;
          const updateButton_r13 = ɵɵreference(12);
          ɵɵadvance(3);
          ɵɵproperty("disabled", ɵɵpipeBind1(4, 31, ctx.isNew$))("availableLanguageCodes", ɵɵpipeBind1(5, 33, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(6, 35, ctx.languageCode$));
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(10, 37, ctx.isNew$))("ngIfElse", updateButton_r13);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(18, 39, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(23, 41, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(25, 43, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(27, 45, "common.code"))("readOnlyToggle", ɵɵpipeBind1(28, 47, ctx.updatePermission));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(30, 49, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(32, 51, ctx.updatePermission))("label", ɵɵpipeBind1(33, 53, "common.description"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(35, 55, "settings.fulfillment-handler"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(37, 57, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.fulfillmentHandlers);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(42, 59, "settings.shipping-eligibility-checker"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.selectedChecker && ctx.selectedCheckerDefinition);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.selectedChecker || !ctx.selectedCheckerDefinition);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(46, 61, "settings.shipping-calculator"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.selectedCalculator && ctx.selectedCalculatorDefinition);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.selectedCalculator || !ctx.selectedCalculatorDefinition);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(50, 63, "settings.test-shipping-method"));
          ɵɵadvance(4);
          ɵɵproperty("currencyCode", (tmp_28_0 = ɵɵpipeBind1(54, 65, ctx.activeChannel$)) == null ? null : tmp_28_0.currencyCode)("okToRun", ctx.allTestDataPresent() && ctx.testDataUpdated && ctx.detailForm.valid)("testDataUpdated", ctx.testDataUpdated)("testResult", ɵɵpipeBind1(55, 67, ctx.testResult$));
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ConfigurableInputComponent, FormFieldComponent, FormFieldControlDirective, LanguageSelectorComponent, RichTextEditorComponent, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, TestOrderBuilderComponent, TestAddressFormComponent, ShippingMethodTestResultComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShippingMethodDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-shipping-method-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left>
            <vdr-language-selector
                [disabled]="isNew$ | async"
                [availableLanguageCodes]="availableLanguages$ | async"
                [currentLanguageCode]="languageCode$ | async"
                (languageCodeChange)="setLanguage($event)"
            />
        </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="shipping-method-detail" />
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="
                    detailForm.pristine || detailForm.invalid || !selectedChecker || !selectedCalculator
                "
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    class="btn btn-primary"
                    (click)="save()"
                    *vdrIfPermissions="updatePermission"
                    [disabled]="
                        detailForm.pristine || detailForm.invalid || !selectedChecker || !selectedCalculator
                    "
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="shipping-method-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
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
                            type="text"
                            formControlName="name"
                            [readonly]="!(updatePermission | hasPermission)"
                            (input)="updateCode(entity?.code, $event.target.value)"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'common.code' | translate"
                        for="code"
                        [readOnlyToggle]="updatePermission | hasPermission"
                    >
                        <input
                            id="code"
                            type="text"
                            formControlName="code"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-rich-text-editor
                        class="form-grid-span"
                        formControlName="description"
                        [readonly]="!(updatePermission | hasPermission)"
                        [label]="'common.description' | translate"
                    ></vdr-rich-text-editor>
                    <vdr-form-field
                        [label]="'settings.fulfillment-handler' | translate"
                        for="fulfillmentHandler"
                    >
                        <select
                            name="fulfillmentHandler"
                            formControlName="fulfillmentHandler"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        >
                            <option *ngFor="let handler of fulfillmentHandlers" [value]="handler.code">
                                {{ handler.code }}: {{ handler.description }}
                            </option>
                        </select>
                    </vdr-form-field>
                </div>
            </vdr-card>

            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="ShippingMethod"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>

            <vdr-custom-detail-component-host
                locationId="shipping-method-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>

            <vdr-card [title]="'settings.shipping-eligibility-checker' | translate">
                <vdr-configurable-input
                    class="card-span"
                    *ngIf="selectedChecker && selectedCheckerDefinition"
                    [operation]="selectedChecker"
                    [operationDefinition]="selectedCheckerDefinition"
                    [readonly]="!(updatePermission | hasPermission)"
                    (remove)="selectedChecker = null"
                    formControlName="checker"
                ></vdr-configurable-input>
                <div *ngIf="!selectedChecker || !selectedCheckerDefinition" class="card-span">
                    <vdr-dropdown>
                        <button class="btn btn-outline" vdrDropdownTrigger>
                            <clr-icon shape="plus"></clr-icon>
                            {{ 'common.select' | translate }}
                        </button>
                        <vdr-dropdown-menu vdrPosition="bottom-left">
                            <button
                                *ngFor="let checker of checkers"
                                type="button"
                                vdrDropdownItem
                                (click)="selectChecker(checker)"
                            >
                                {{ checker.description }}
                            </button>
                        </vdr-dropdown-menu>
                    </vdr-dropdown>
                </div>
            </vdr-card>
            <vdr-card [title]="'settings.shipping-calculator' | translate">
                <vdr-configurable-input
                    class="card-span"
                    *ngIf="selectedCalculator && selectedCalculatorDefinition"
                    [operation]="selectedCalculator"
                    [operationDefinition]="selectedCalculatorDefinition"
                    [readonly]="!(updatePermission | hasPermission)"
                    (remove)="selectedCalculator = null"
                    formControlName="calculator"
                ></vdr-configurable-input>
                <div *ngIf="!selectedCalculator || !selectedCalculatorDefinition" class="card-span">
                    <vdr-dropdown>
                        <button class="btn btn-outline" vdrDropdownTrigger>
                            <clr-icon shape="plus"></clr-icon>
                            {{ 'common.select' | translate }}
                        </button>
                        <vdr-dropdown-menu vdrPosition="bottom-left">
                            <button
                                *ngFor="let calculator of calculators"
                                type="button"
                                vdrDropdownItem
                                (click)="selectCalculator(calculator)"
                            >
                                {{ calculator.description }}
                            </button>
                        </vdr-dropdown-menu>
                    </vdr-dropdown>
                </div>
            </vdr-card>
            <vdr-card [title]="'settings.test-shipping-method' | translate">
                <vdr-test-order-builder
                    class="card-span"
                    (orderLinesChange)="setTestOrderLines($event)"
                ></vdr-test-order-builder>
                <vdr-test-address-form
                    (addressChange)="setTestAddress($event)"
                    class="mt-2"
                ></vdr-test-address-form>
                <vdr-shipping-method-test-result
                    class="mt-2"
                    [currencyCode]="(activeChannel$ | async)?.currencyCode"
                    [okToRun]="allTestDataPresent() && testDataUpdated && detailForm.valid"
                    [testDataUpdated]="testDataUpdated"
                    [testResult]="testResult$ | async"
                    (runTest)="runTest()"
                ></vdr-shipping-method-test-result>
            </vdr-card>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
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
var deleteShippingMethodsBulkAction = createBulkDeleteAction({
  location: "shipping-method-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteShippingMethod),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.shippingMethod.deleteShippingMethods(ids).pipe(map((res) => res.deleteShippingMethods))
});
var ASSIGN_SHIPPING_METHODS_TO_CHANNEL = gql`
    mutation AssignShippingMethodsToChannel($input: AssignShippingMethodsToChannelInput!) {
        assignShippingMethodsToChannel(input: $input) {
            id
            name
        }
    }
`;
var REMOVE_SHIPPING_METHODS_FROM_CHANNEL = gql`
    mutation RemoveShippingMethodsFromChannel($input: RemoveShippingMethodsFromChannelInput!) {
        removeShippingMethodsFromChannel(input: $input) {
            id
            name
        }
    }
`;
var assignShippingMethodsToChannelBulkAction = createBulkAssignToChannelAction({
  location: "shipping-method-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateShippingMethod) || userPermissions.includes(Permission.UpdateSettings),
  getItemName: (item) => item.name,
  bulkAssignToChannel: (dataService, shippingMethodIds, channelIds) => channelIds.map((channelId) => dataService.mutate(AssignShippingMethodsToChannelDocument, {
    input: {
      channelId,
      shippingMethodIds
    }
  }).pipe(map((res) => res.assignShippingMethodsToChannel)))
});
var removeShippingMethodsFromChannelBulkAction = createBulkRemoveFromChannelAction({
  location: "shipping-method-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteShippingMethod) || userPermissions.includes(Permission.DeleteSettings),
  getItemName: (item) => item.name,
  bulkRemoveFromChannel: (dataService, shippingMethodIds, channelId) => dataService.mutate(RemoveShippingMethodsFromChannelDocument, {
    input: {
      channelId,
      shippingMethodIds
    }
  }).pipe(map((res) => res.removeShippingMethodsFromChannel))
});
var GET_SHIPPING_METHOD_LIST = gql`
    query GetShippingMethodList($options: ShippingMethodListOptions) {
        shippingMethods(options: $options) {
            items {
                ...ShippingMethodListItem
            }
            totalItems
        }
    }
    fragment ShippingMethodListItem on ShippingMethod {
        id
        createdAt
        updatedAt
        code
        name
        description
        fulfillmentHandlerCode
    }
`;
var ShippingMethodListComponent = class _ShippingMethodListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "shipping-method-list";
    this.customFields = this.getCustomFieldConfig("ShippingMethod");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }).addFilter({
      name: "code",
      type: {
        kind: "text"
      },
      label: marker("common.code"),
      filterField: "code"
    }).addFilter({
      name: "description",
      type: {
        kind: "text"
      },
      label: marker("common.description"),
      filterField: "description"
    }).addFilter({
      name: "fulfillmentHandler",
      type: {
        kind: "text"
      },
      label: marker("settings.fulfillment-handler"),
      filterField: "fulfillmentHandlerCode"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).addSort({
      name: "code"
    }).addSort({
      name: "description"
    }).addSort({
      name: "fulfillmentHandlerCode"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetShippingMethodListDocument,
      getItems: (data) => data.shippingMethods,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  static {
    this.ɵfac = function ShippingMethodListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShippingMethodListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ShippingMethodListComponent,
      selectors: [["vdr-shipping-method-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 40,
      vars: 61,
      consts: [[3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "shipping-method-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "shipping-method-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "code", 3, "heading", "sort"], ["id", "description", 3, "heading", "sort", "hiddenByDefault"], ["id", "fulfillment-handler", 3, "heading", "sort"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "customField", "sorts"]],
      template: function ShippingMethodListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 0);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵlistener("languageCodeChange", function ShippingMethodListComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(6, "vdr-ab-right");
          ɵɵelement(7, "vdr-action-bar-items", 1);
          ɵɵtemplate(8, ShippingMethodListComponent_a_8_Template, 4, 5, "a", 2);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "vdr-data-table-2", 3);
          ɵɵpipe(11, "async");
          ɵɵpipe(12, "async");
          ɵɵpipe(13, "async");
          ɵɵpipe(14, "async");
          ɵɵlistener("pageChange", function ShippingMethodListComponent_Template_vdr_data_table_2_pageChange_10_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function ShippingMethodListComponent_Template_vdr_data_table_2_itemsPerPageChange_10_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function ShippingMethodListComponent_Template_vdr_data_table_2_visibleColumnsChange_10_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(15, "vdr-bulk-action-menu", 4)(16, "vdr-dt2-search", 5);
          ɵɵpipe(17, "translate");
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, ShippingMethodListComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, ShippingMethodListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, ShippingMethodListComponent_ng_template_26_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, ShippingMethodListComponent_ng_template_29_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 10);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, ShippingMethodListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 11);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, ShippingMethodListComponent_ng_template_35_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(36, "vdr-dt2-column", 12);
          ɵɵpipe(37, "translate");
          ɵɵtemplate(38, ShippingMethodListComponent_ng_template_38_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(39, ShippingMethodListComponent_vdr_dt2_custom_field_column_39_Template, 1, 2, "vdr-dt2-custom-field-column", 13);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(4, 32, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(5, 34, ctx.contentLanguage$));
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(60, _c14));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(11, 36, ctx.items$))("itemsPerPage", ɵɵpipeBind1(12, 38, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(13, 40, ctx.totalItems$))("currentPage", ɵɵpipeBind1(14, 42, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(17, 44, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 46, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 48, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 50, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 52, "common.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 54, "common.code"))("sort", ctx.sorts.get("code"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 56, "common.description"))("sort", ctx.sorts.get("description"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(37, 58, "settings.fulfillment-handler"))("sort", ctx.sorts.get("fulfillmentHandlerCode"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, LanguageSelectorComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShippingMethodListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-shipping-method-list",
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
            <vdr-action-bar-items locationId="shipping-method-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateSettings', 'CreateShippingMethod']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-shipping-method' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="shipping-method-list" />
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
        locationId="shipping-method-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-shippingMethod="item">
            {{ shippingMethod.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-shippingMethod="item">
            {{ shippingMethod.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-shippingMethod="item">
            {{ shippingMethod.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false" [sort]="sorts.get('name')">
        <ng-template let-shippingMethod="item">
            <a class="button-ghost" [routerLink]="['./', shippingMethod.id]"
                ><span>{{ shippingMethod.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.code' | translate" id="code" [sort]="sorts.get('code')">
        <ng-template let-shippingMethod="item">
            {{ shippingMethod.code }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.description' | translate" id="description"
        [sort]="sorts.get('description')"
        [hiddenByDefault]="true"
    >
        <ng-template let-shippingMethod="item">
            {{ shippingMethod.description }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.fulfillment-handler' | translate" id="fulfillment-handler" [sort]="sorts.get('fulfillmentHandlerCode')">
        <ng-template let-shippingMethod="item">
            {{ shippingMethod.fulfillmentHandlerCode }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let customField of customFields"
        [customField]="customField"
        [sorts]="sorts"
    />
</vdr-data-table-2>
`
    }]
  }], () => [], null);
})();
var STOCK_LOCATION_DETAIL_FRAGMENT = gql`
    fragment StockLocationDetail on StockLocation {
        id
        createdAt
        updatedAt
        name
        description
    }
`;
var GET_STOCK_LOCATION_DETAIL = gql`
    query GetStockLocationDetail($id: ID!) {
        stockLocation(id: $id) {
            ...StockLocationDetail
        }
    }
    ${STOCK_LOCATION_DETAIL_FRAGMENT}
`;
var CREATE_STOCK_LOCATION = gql`
    mutation CreateStockLocation($input: CreateStockLocationInput!) {
        createStockLocation(input: $input) {
            ...StockLocationDetail
        }
    }
    ${STOCK_LOCATION_DETAIL_FRAGMENT}
`;
var UPDATE_STOCK_LOCATION = gql`
    mutation UpdateStockLocation($input: UpdateStockLocationInput!) {
        updateStockLocation(input: $input) {
            ...StockLocationDetail
        }
    }
    ${STOCK_LOCATION_DETAIL_FRAGMENT}
`;
var StockLocationDetailComponent = class _StockLocationDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("StockLocation");
    this.detailForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const {
      name,
      description,
      customFields
    } = this.detailForm.value;
    if (!name) {
      return;
    }
    const input = {
      name,
      description,
      customFields
    };
    this.dataService.mutate(CreateStockLocationDocument, {
      input
    }).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "StockLocation"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createStockLocation.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "StockLocation"
      });
    });
  }
  save() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    this.entity$.pipe(take(1), mergeMap((taxRate) => {
      const input = {
        id: taxRate.id,
        name: formValue.name,
        description: formValue.description,
        customFields: formValue.customFields
      };
      return this.dataService.mutate(UpdateStockLocationDocument, {
        input
      });
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "StockLocation"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "StockLocation"
      });
    });
  }
  /**
   * Update the form values when the entity changes.
   */
  setFormValues(entity) {
    this.detailForm.patchValue({
      name: entity.name,
      description: entity.description
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), entity);
    }
  }
  static {
    this.ɵfac = function StockLocationDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockLocationDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StockLocationDetailComponent,
      selectors: [["vdr-stock-location-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 29,
      vars: 28,
      consts: [["updateButton", ""], ["locationId", "stock-location-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["for", "slug", 1, "form-grid-span", 3, "label", "errors"], ["formControlName", "description", 3, "readonly"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "stock-location-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["formGroupName", "customFields", 3, "title"], ["entityName", "StockLocation", 3, "customFields", "customFieldsFormGroup"]],
      template: function StockLocationDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, StockLocationDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, StockLocationDetailComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar");
          ɵɵtemplate(13, StockLocationDetailComponent_vdr_card_13_Template, 2, 1, "vdr-card", 4);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-page-block")(16, "vdr-card")(17, "div", 5)(18, "vdr-form-field", 6);
          ɵɵpipe(19, "translate");
          ɵɵelement(20, "input", 7);
          ɵɵpipe(21, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(22, "vdr-form-field", 8);
          ɵɵpipe(23, "translate");
          ɵɵpipe(24, "translate");
          ɵɵelement(25, "vdr-rich-text-editor", 9);
          ɵɵpipe(26, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(27, StockLocationDetailComponent_vdr_card_27_Template, 3, 5, "vdr-card", 10);
          ɵɵelement(28, "vdr-custom-detail-component-host", 11);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r5 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 12, ctx.isNew$))("ngIfElse", updateButton_r5);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 14, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(19, 16, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(21, 18, "UpdateStockLocation"));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(23, 20, "common.description"))("errors", ɵɵpureFunction1(26, _c15, ɵɵpipeBind1(24, 22, "catalog.slug-pattern-error")));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(26, 24, "UpdateStockLocation"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, RichTextEditorComponent, IfPermissionsDirective, ActionBarItemsComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockLocationDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-stock-location-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left></vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="stock-location-detail" />
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="detailForm.invalid || detailForm.pristine"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    class="btn btn-primary"
                    (click)="save()"
                    [disabled]="detailForm.invalid || detailForm.pristine"
                    *vdrIfPermissions="'UpdateStockLocation'"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="stock-location-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
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
                            type="text"
                            formControlName="name"
                            [readonly]="!('UpdateStockLocation' | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        class="form-grid-span"
                        [label]="'common.description' | translate"
                        for="slug"
                        [errors]="{ pattern: 'catalog.slug-pattern-error' | translate }"
                    >
                        <vdr-rich-text-editor
                            formControlName="description"
                            [readonly]="!('UpdateStockLocation' | hasPermission)"
                        ></vdr-rich-text-editor>
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="StockLocation"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="stock-location-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
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
var DELETE_STOCK_LOCATIONS = gql`
    mutation DeleteStockLocations($input: [DeleteStockLocationInput!]!) {
        deleteStockLocations(input: $input) {
            result
            message
        }
    }
`;
var ASSIGN_STOCK_LOCATIONS_TO_CHANNEL = gql`
    mutation AssignStockLocationsToChannel($input: AssignStockLocationsToChannelInput!) {
        assignStockLocationsToChannel(input: $input) {
            id
            name
        }
    }
`;
var REMOVE_STOCK_LOCATIONS_FROM_CHANNEL = gql`
    mutation RemoveStockLocationsFromChannel($input: RemoveStockLocationsFromChannelInput!) {
        removeStockLocationsFromChannel(input: $input) {
            id
            name
        }
    }
`;
var deleteStockLocationsBulkAction = createBulkDeleteAction({
  location: "stock-location-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteStockLocation) || userPermissions.includes(Permission.DeleteCatalog),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.mutate(DeleteStockLocationsDocument, {
    input: ids.map((id) => ({
      id
    }))
  }).pipe(map((res) => res.deleteStockLocations)),
  shouldRetryItem: (response) => response.result === DeletionResult.NOT_DELETED
});
var assignStockLocationsToChannelBulkAction = createBulkAssignToChannelAction({
  location: "stock-location-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateStockLocation),
  getItemName: (item) => item.name,
  bulkAssignToChannel: (dataService, stockLocationIds, channelIds) => channelIds.map((channelId) => dataService.mutate(AssignStockLocationsToChannelDocument, {
    input: {
      channelId,
      stockLocationIds
    }
  }).pipe(map((res) => res.assignStockLocationsToChannel)))
});
var removeStockLocationsFromChannelBulkAction = createBulkRemoveFromChannelAction({
  location: "stock-location-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteCatalog) || userPermissions.includes(Permission.DeleteStockLocation),
  getItemName: (item) => item.name,
  bulkRemoveFromChannel: (dataService, stockLocationIds, channelId) => dataService.mutate(RemoveStockLocationsFromChannelDocument, {
    input: {
      channelId,
      stockLocationIds
    }
  }).pipe(map((res) => res.removeStockLocationsFromChannel))
});
var GET_STOCK_LOCATION_LIST = gql`
    query GetStockLocationList($options: StockLocationListOptions) {
        stockLocations(options: $options) {
            items {
                ...StockLocationListItem
            }
            totalItems
        }
    }
    fragment StockLocationListItem on StockLocation {
        id
        createdAt
        updatedAt
        name
        description
    }
`;
var StockLocationListComponent = class _StockLocationListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "stock-location-list";
    this.customFields = this.getCustomFieldConfig("StockLocation");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilters([{
      name: "enabled",
      type: {
        kind: "text"
      },
      label: marker("common.enabled"),
      filterField: "name"
    }, {
      name: "sku",
      type: {
        kind: "text"
      },
      label: marker("catalog.sku"),
      filterField: "description"
    }]).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().addSorts([{
      name: "id"
    }, {
      name: "createdAt"
    }, {
      name: "updatedAt"
    }, {
      name: "name"
    }, {
      name: "description"
    }]).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    this.configure({
      document: GetStockLocationListDocument,
      getItems: (data) => data.stockLocations,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.sorts.valueChanges, this.filters.valueChanges]
    });
  }
  static {
    this.ɵfac = function StockLocationListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockLocationListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StockLocationListComponent,
      selectors: [["vdr-stock-location-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 31,
      vars: 47,
      consts: [["locationId", "stock-location-list"], ["class", "button primary", 3, "routerLink", 4, "vdrIfPermissions"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "stock-location-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault", "sort"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "description", 3, "heading", "sort"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [1, "description", 3, "innerHTML"], [3, "customField", "sorts"]],
      template: function StockLocationListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, StockLocationListComponent_a_5_Template, 4, 5, "a", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 2);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function StockLocationListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function StockLocationListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function StockLocationListComponent_Template_vdr_data_table_2_visibleColumnsChange_7_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 3)(13, "vdr-dt2-search", 4);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 5);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, StockLocationListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, StockLocationListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, StockLocationListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, StockLocationListComponent_ng_template_26_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, StockLocationListComponent_ng_template_29_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(30, StockLocationListComponent_vdr_dt2_custom_field_column_30_Template, 1, 2, "vdr-dt2-custom-field-column", 10);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(46, _c16));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(8, 26, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 28, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 30, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 32, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 34, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 36, "common.id"))("hiddenByDefault", true)("sort", ctx.sorts.get("id"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 38, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 40, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 42, "common.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 44, "common.description"))("sort", ctx.sorts.get("description"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: [".description>p{margin-top:0!important}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockLocationListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-stock-location-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="stock-location-list" />
            <a
                class="button primary"
                *vdrIfPermissions="['CreateStockLocation']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'catalog.create-new-stock-location' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="stock-location-list" />
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
        locationId="stock-location-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true" [sort]="sorts.get('id')">
        <ng-template let-stockLocation="item">
            {{ stockLocation.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-stockLocation="item">
            {{ stockLocation.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-stockLocation="item">
            {{ stockLocation.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false" [sort]="sorts.get('name')">
        <ng-template let-stockLocation="item">
            <a class="button-ghost" [routerLink]="['./', stockLocation.id]"
                ><span>{{ stockLocation.name }}</span
                ><clr-icon shape="arrow right"
            /></a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.description' | translate" id="description" [sort]="sorts.get('description')">
        <ng-template let-stockLocation="item">
            <div class="description" [innerHTML]="stockLocation.description"></div>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let field of customFields"
        [customField]="field"
        [sorts]="sorts" />
</vdr-data-table-2>
`,
      styles: ["::ng-deep .description>p{margin-top:0!important}\n"]
    }]
  }], () => [], null);
})();
var GET_TAX_CATEGORY_DETAIL = gql`
    query GetTaxCategoryDetail($id: ID!) {
        taxCategory(id: $id) {
            ...TaxCategory
        }
    }
    ${TAX_CATEGORY_FRAGMENT}
`;
var TaxCategoryDetailComponent = class _TaxCategoryDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("TaxCategory");
    this.detailForm = this.formBuilder.group({
      name: ["", Validators.required],
      isDefault: false,
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.updatePermission = [Permission.UpdateSettings, Permission.UpdateTaxCategory];
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  saveButtonEnabled() {
    return this.detailForm.dirty && this.detailForm.valid;
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    const input = {
      name: formValue.name,
      isDefault: formValue.isDefault,
      customFields: formValue.customFields
    };
    this.dataService.settings.createTaxCategory(input).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "TaxCategory"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createTaxCategory.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "TaxCategory"
      });
    });
  }
  save() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    this.entity$.pipe(take(1), mergeMap((taxCategory) => {
      const input = {
        id: taxCategory.id,
        name: formValue.name,
        isDefault: formValue.isDefault,
        customFields: formValue.customFields
      };
      return this.dataService.settings.updateTaxCategory(input);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "TaxCategory"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "TaxCategory"
      });
    });
  }
  /**
   * Update the form values when the entity changes.
   */
  setFormValues(entity, languageCode) {
    this.detailForm.patchValue({
      name: entity.name,
      isDefault: entity.isDefault
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), entity);
    }
  }
  static {
    this.ɵfac = function TaxCategoryDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaxCategoryDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TaxCategoryDetailComponent,
      selectors: [["vdr-tax-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 29,
      vars: 23,
      consts: [["updateButton", ""], ["locationId", "tax-category-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["for", "isDefault", 3, "label"], ["type", "checkbox", "clrToggle", "", "id", "isDefault", "formControlName", "isDefault", 3, "vdrDisabled"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "tax-category-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["formGroupName", "customFields", 3, "title"], ["entityName", "TaxCategory", 3, "customFields", "customFieldsFormGroup"]],
      template: function TaxCategoryDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, TaxCategoryDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, TaxCategoryDetailComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar");
          ɵɵtemplate(13, TaxCategoryDetailComponent_vdr_card_13_Template, 2, 1, "vdr-card", 4);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-page-block")(16, "vdr-card")(17, "div", 5)(18, "vdr-form-field", 6);
          ɵɵpipe(19, "translate");
          ɵɵelement(20, "input", 7);
          ɵɵpipe(21, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(22, "vdr-form-field", 8);
          ɵɵpipe(23, "translate");
          ɵɵelementStart(24, "clr-toggle-wrapper");
          ɵɵelement(25, "input", 9);
          ɵɵpipe(26, "hasPermission");
          ɵɵelementEnd()()()();
          ɵɵtemplate(27, TaxCategoryDetailComponent_vdr_card_27_Template, 3, 5, "vdr-card", 10);
          ɵɵelement(28, "vdr-custom-detail-component-host", 11);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r5 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 11, ctx.isNew$))("ngIfElse", updateButton_r5);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 13, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(19, 15, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(21, 17, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(23, 19, "common.default-tax-category"));
          ɵɵadvance(3);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(26, 21, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [ClrCheckbox, ClrCheckboxWrapper, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaxCategoryDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-tax-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="tax-category-detail" />
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
                    [disabled]="!saveButtonEnabled()"
                    *vdrIfPermissions="updatePermission"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="tax-category-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
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
                            type="text"
                            formControlName="name"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field [label]="'common.default-tax-category' | translate" for="isDefault">
                        <clr-toggle-wrapper>
                            <input
                                type="checkbox"
                                clrToggle
                                id="isDefault"
                                [vdrDisabled]="!(updatePermission | hasPermission)"
                                formControlName="isDefault"
                            />
                        </clr-toggle-wrapper>
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="TaxCategory"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="tax-category-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
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
var deleteTaxCategoriesBulkAction = createBulkDeleteAction({
  location: "tax-category-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteSettings) || userPermissions.includes(Permission.DeleteTaxCategory),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.settings.deleteTaxCategories(ids).pipe(map((res) => res.deleteTaxCategories))
});
var GET_TAX_CATEGORY_LIST = gql`
    query GetTaxCategoryList($options: TaxCategoryListOptions) {
        taxCategories(options: $options) {
            items {
                ...TaxCategory
            }
            totalItems
        }
    }
    ${TAX_CATEGORY_FRAGMENT}
`;
var TaxCategoryListComponent = class _TaxCategoryListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "tax-category-list";
    this.customFields = this.serverConfigService.getCustomFieldsFor("TaxCategory");
    this.filters = this.createFilterCollection().addIdFilter().addFilter({
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetTaxCategoryListDocument,
      getItems: (data) => data.taxCategories,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  static {
    this.ɵfac = function TaxCategoryListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaxCategoryListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TaxCategoryListComponent,
      selectors: [["vdr-tax-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 31,
      vars: 45,
      consts: [["locationId", "tax-category-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "tax-category-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "default-tax-category", 3, "heading"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [4, "ngIf"], [3, "customField", "sorts"]],
      template: function TaxCategoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, TaxCategoryListComponent_a_5_Template, 4, 5, "a", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 2);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function TaxCategoryListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function TaxCategoryListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function TaxCategoryListComponent_Template_vdr_data_table_2_visibleColumnsChange_7_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 3)(13, "vdr-dt2-search", 4);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 5);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, TaxCategoryListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, TaxCategoryListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, TaxCategoryListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, TaxCategoryListComponent_ng_template_26_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, TaxCategoryListComponent_ng_template_29_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(30, TaxCategoryListComponent_vdr_dt2_custom_field_column_30_Template, 1, 2, "vdr-dt2-custom-field-column", 10);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(44, _c17));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(8, 24, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 26, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 28, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 30, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 32, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 34, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 36, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 38, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 40, "common.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 42, "common.default-tax-category"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaxCategoryListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-tax-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="tax-category-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateSettings', 'CreateTaxCategory']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-tax-category' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="tax-category-list" />
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
        locationId="tax-category-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-taxCategory="item">
            {{ taxCategory.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-taxCategory="item">
            {{ taxCategory.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-taxCategory="item">
            {{ taxCategory.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false" [sort]="sorts.get('name')">
        <ng-template let-taxCategory="item">
            <a class="button-ghost" [routerLink]="['./', taxCategory.id]"
                ><span>{{ taxCategory.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.default-tax-category' | translate" id="default-tax-category">
        <ng-template let-taxCategory="item">
            <vdr-chip *ngIf="taxCategory.isDefault">{{ 'common.default-tax-category' | translate }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column *ngFor="let customField of customFields" [customField]="customField" [sorts]="sorts" />
</vdr-data-table-2>
`
    }]
  }], () => [], null);
})();
var GET_TAX_RATE_DETAIL = gql`
    query GetTaxRateDetail($id: ID!) {
        taxRate(id: $id) {
            ...TaxRate
        }
    }
    ${TAX_RATE_FRAGMENT}
`;
var TaxRateDetailComponent = class _TaxRateDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("TaxRate");
    this.detailForm = this.formBuilder.group({
      name: ["", Validators.required],
      enabled: [true],
      value: [0, Validators.required],
      taxCategoryId: ["", Validators.required],
      zoneId: ["", Validators.required],
      customerGroupId: [""],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.updatePermission = [Permission.UpdateSettings, Permission.UpdateTaxRate];
  }
  ngOnInit() {
    this.init();
    this.taxCategories$ = this.dataService.settings.getTaxCategories({
      take: 100
    }).mapSingle((data) => data.taxCategories.items);
  }
  ngOnDestroy() {
    this.destroy();
  }
  saveButtonEnabled() {
    return this.detailForm.dirty && this.detailForm.valid;
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const {
      name,
      enabled,
      value,
      taxCategoryId,
      zoneId,
      customFields,
      customerGroupId
    } = this.detailForm.value;
    if (!name || enabled == null || value == null || !taxCategoryId || !zoneId) {
      return;
    }
    const input = {
      name,
      enabled,
      value,
      categoryId: taxCategoryId,
      zoneId,
      customerGroupId,
      customFields
    };
    this.dataService.settings.createTaxRate(input).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "TaxRate"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createTaxRate.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "TaxRate"
      });
    });
  }
  save() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    this.entity$.pipe(take(1), mergeMap((taxRate) => {
      const input = {
        id: taxRate.id,
        name: formValue.name,
        enabled: formValue.enabled,
        value: formValue.value,
        categoryId: formValue.taxCategoryId,
        zoneId: formValue.zoneId,
        customerGroupId: formValue.customerGroupId,
        customFields: formValue.customFields
      };
      return this.dataService.settings.updateTaxRate(input);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "TaxRate"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "TaxRate"
      });
    });
  }
  /**
   * Update the form values when the entity changes.
   */
  setFormValues(entity, languageCode) {
    this.detailForm.patchValue({
      name: entity.name,
      enabled: entity.enabled,
      value: entity.value,
      taxCategoryId: entity.category ? entity.category.id : "",
      zoneId: entity.zone ? entity.zone.id : "",
      customerGroupId: entity.customerGroup ? entity.customerGroup.id : ""
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), entity);
    }
  }
  static {
    this.ɵfac = function TaxRateDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaxRateDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TaxRateDetailComponent,
      selectors: [["vdr-tax-rate-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 45,
      vars: 44,
      consts: [["updateButton", ""], ["locationId", "tax-rate-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], ["for", "enabled", 3, "label"], ["type", "checkbox", "clrToggle", "", "id", "enabled", "formControlName", "enabled", 3, "vdrDisabled"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["for", "value", 3, "label"], ["suffix", "%"], ["id", "value", "type", "number", "step", "0.1", "formControlName", "value", 3, "readonly"], ["for", "taxCategoryId", 3, "label"], ["name", "taxCategoryId", "formControlName", "taxCategoryId", 3, "vdrDisabled"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "zoneId", 3, "label"], ["name", "zoneId", "formControlName", "zoneId", 3, "vdrDisabled"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "tax-rate-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], [3, "value"], ["formGroupName", "customFields", 3, "title"], ["entityName", "TaxRate", 3, "customFields", "customFieldsFormGroup"]],
      template: function TaxRateDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, TaxRateDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, TaxRateDetailComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar")(13, "vdr-card")(14, "vdr-form-field", 4);
          ɵɵpipe(15, "translate");
          ɵɵelementStart(16, "clr-toggle-wrapper");
          ɵɵelement(17, "input", 5);
          ɵɵpipe(18, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(19, TaxRateDetailComponent_vdr_card_19_Template, 2, 1, "vdr-card", 6);
          ɵɵpipe(20, "async");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-page-block")(22, "vdr-card")(23, "div", 7)(24, "vdr-form-field", 8);
          ɵɵpipe(25, "translate");
          ɵɵelement(26, "input", 9);
          ɵɵpipe(27, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(28, "vdr-form-field", 10);
          ɵɵpipe(29, "translate");
          ɵɵelementStart(30, "vdr-affixed-input", 11);
          ɵɵelement(31, "input", 12);
          ɵɵpipe(32, "hasPermission");
          ɵɵelementEnd()();
          ɵɵelementStart(33, "vdr-form-field", 13);
          ɵɵpipe(34, "translate");
          ɵɵelementStart(35, "select", 14);
          ɵɵpipe(36, "hasPermission");
          ɵɵtemplate(37, TaxRateDetailComponent_option_37_Template, 2, 2, "option", 15);
          ɵɵpipe(38, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(39, "vdr-form-field", 16);
          ɵɵpipe(40, "translate");
          ɵɵelement(41, "vdr-zone-selector", 17);
          ɵɵpipe(42, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(43, TaxRateDetailComponent_vdr_card_43_Template, 3, 5, "vdr-card", 18);
          ɵɵelement(44, "vdr-custom-detail-component-host", 19);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r6 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 18, ctx.isNew$))("ngIfElse", updateButton_r6);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(15, 20, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(18, 22, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(20, 24, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(25, 26, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(27, 28, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(29, 30, "settings.rate"));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(32, 32, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(34, 34, "settings.tax-category"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(36, 36, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(38, 38, ctx.taxCategories$));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(40, 40, "settings.zone"));
          ɵɵadvance(2);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(42, 42, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, AffixedInputComponent, FormFieldComponent, FormFieldControlDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, ZoneSelectorComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaxRateDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-tax-rate-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left></vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="tax-rate-detail" />
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
                    [disabled]="!saveButtonEnabled()"
                    *vdrIfPermissions="updatePermission"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="tax-rate-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card>
                <vdr-form-field [label]="'common.enabled' | translate" for="enabled">
                    <clr-toggle-wrapper>
                        <input
                            type="checkbox"
                            clrToggle
                            id="enabled"
                            formControlName="enabled"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        />
                    </clr-toggle-wrapper>
                </vdr-form-field>
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
                            type="text"
                            formControlName="name"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field [label]="'settings.rate' | translate" for="value">
                        <vdr-affixed-input suffix="%">
                            <input
                                id="value"
                                type="number"
                                step="0.1"
                                formControlName="value"
                                [readonly]="!(updatePermission | hasPermission)"
                            />
                        </vdr-affixed-input>
                    </vdr-form-field>
                    <vdr-form-field [label]="'settings.tax-category' | translate" for="taxCategoryId">
                        <select
                            name="taxCategoryId"
                            formControlName="taxCategoryId"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        >
                            <option
                                *ngFor="let taxCategory of taxCategories$ | async"
                                [value]="taxCategory.id"
                            >
                                {{ taxCategory.name }}
                            </option>
                        </select>
                    </vdr-form-field>
                    <vdr-form-field [label]="'settings.zone' | translate" for="zoneId">
                        <vdr-zone-selector
                            name="zoneId"
                            formControlName="zoneId"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        >
                        </vdr-zone-selector>
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="TaxRate"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="tax-rate-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
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
var deleteTaxRatesBulkAction = createBulkDeleteAction({
  location: "tax-rate-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteSettings) || userPermissions.includes(Permission.DeleteTaxRate),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.settings.deleteTaxRates(ids).pipe(map((res) => res.deleteTaxRates))
});
var GET_TAX_RATE_LIST = gql`
    query GetTaxRateList($options: TaxRateListOptions) {
        taxRates(options: $options) {
            items {
                ...TaxRate
            }
            totalItems
        }
    }
    ${TAX_RATE_FRAGMENT}
`;
var TaxRateListComponent = class _TaxRateListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "tax-rate-list";
    this.customFields = this.getCustomFieldConfig("TaxRate");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }).addFilter({
      name: "enabled",
      type: {
        kind: "boolean"
      },
      label: marker("common.enabled"),
      filterField: "enabled"
    }).addFilter({
      name: "value",
      type: {
        kind: "number"
      },
      label: marker("common.value"),
      filterField: "value"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).addSort({
      name: "value"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetTaxRateListDocument,
      getItems: (data) => data.taxRates,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  static {
    this.ɵfac = function TaxRateListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaxRateListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TaxRateListComponent,
      selectors: [["vdr-tax-rate-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 43,
      vars: 59,
      consts: [["locationId", "tax-rate-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "tax-rate-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "tax-category", 3, "heading"], ["id", "zone", 3, "heading"], ["id", "customer-group", 3, "heading", "hiddenByDefault"], ["id", "tax-rate", 3, "heading", "sort"], ["id", "enabled", 3, "heading"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success"], ["colorType", "warning"], [3, "customField", "sorts"]],
      template: function TaxRateListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, TaxRateListComponent_a_5_Template, 4, 5, "a", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 2);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function TaxRateListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function TaxRateListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function TaxRateListComponent_Template_vdr_data_table_2_visibleColumnsChange_7_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 3)(13, "vdr-dt2-search", 4);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 5);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, TaxRateListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, TaxRateListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, TaxRateListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, TaxRateListComponent_ng_template_26_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, TaxRateListComponent_ng_template_29_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 10);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, TaxRateListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 11);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, TaxRateListComponent_ng_template_35_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(36, "vdr-dt2-column", 12);
          ɵɵpipe(37, "translate");
          ɵɵtemplate(38, TaxRateListComponent_ng_template_38_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(39, "vdr-dt2-column", 13);
          ɵɵpipe(40, "translate");
          ɵɵtemplate(41, TaxRateListComponent_ng_template_41_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(42, TaxRateListComponent_vdr_dt2_custom_field_column_42_Template, 1, 2, "vdr-dt2-custom-field-column", 14);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(58, _c18));
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(8, 30, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 32, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 34, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 36, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 38, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 40, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 42, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 44, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 46, "common.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 48, "settings.tax-category"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 50, "settings.zone"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 52, "customer.customer-group"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(37, 54, "settings.tax-rate"))("sort", ctx.sorts.get("value"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(40, 56, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaxRateListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-tax-rate-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="tax-rate-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateSettings', 'CreateTaxRate']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-tax-rate' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="tax-rate-list" />
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
        locationId="tax-rate-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-taxRate="item">
            {{ taxRate.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-taxRate="item">
            {{ taxRate.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-taxRate="item">
            {{ taxRate.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false" [sort]="sorts.get('name')">
        <ng-template let-taxRate="item">
            <a class="button-ghost" [routerLink]="['./', taxRate.id]"
                ><span>{{ taxRate.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.tax-category' | translate" id="tax-category">
        <ng-template let-taxRate="item">
            {{ taxRate.category.name }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.zone' | translate" id="zone">
        <ng-template let-taxRate="item">
            {{ taxRate.zone.name }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'customer.customer-group' | translate" id="customer-group" [hiddenByDefault]="true">
        <ng-template let-taxRate="item">
            {{ taxRate.customerGroup?.name }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'settings.tax-rate' | translate" id="tax-rate" [sort]="sorts.get('value')">
        <ng-template let-taxRate="item"> {{ taxRate.value }}% </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.enabled' | translate" id="enabled">
        <ng-template let-taxRate="item">
            <vdr-chip *ngIf="taxRate.enabled" colorType="success">{{
                'common.enabled' | translate
            }}</vdr-chip>
            <vdr-chip *ngIf="!taxRate.enabled" colorType="warning">{{
                'common.disabled' | translate
            }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column *ngFor="let customField of customFields" [customField]="customField" [sorts]="sorts" />
</vdr-data-table-2>
`
    }]
  }], () => [], null);
})();
var TestShippingMethodsComponent = class _TestShippingMethodsComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.testDataUpdated = false;
    this.fetchTestResult$ = new Subject();
  }
  ngOnInit() {
    this.activeChannel$ = this.dataService.settings.getActiveChannel().mapStream((data) => data.activeChannel);
    this.testResult$ = this.fetchTestResult$.pipe(switchMap(([address, lines]) => {
      const input = {
        shippingAddress: __spreadProps(__spreadValues({}, address), {
          streetLine1: "test"
        }),
        lines: lines.map((l) => ({
          productVariantId: l.id,
          quantity: l.quantity
        }))
      };
      return this.dataService.shippingMethod.testEligibleShippingMethods(input).mapSingle((result) => result.testEligibleShippingMethods);
    }));
  }
  setTestOrderLines(event) {
    this.testOrderLines = event;
    this.testDataUpdated = true;
  }
  setTestAddress(event) {
    this.testAddress = event;
    this.testDataUpdated = true;
  }
  allTestDataPresent() {
    return !!(this.testAddress && this.testOrderLines && this.testOrderLines.length);
  }
  runTest() {
    this.fetchTestResult$.next([this.testAddress, this.testOrderLines]);
    this.testDataUpdated = false;
  }
  static {
    this.ɵfac = function TestShippingMethodsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestShippingMethodsComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TestShippingMethodsComponent,
      selectors: [["vdr-test-shipping-methods"]],
      standalone: false,
      decls: 9,
      vars: 8,
      consts: [[1, "test-wrapper"], [1, ""], [3, "orderLinesChange"], [3, "addressChange"], [1, "mt-1", 3, "runTest", "currencyCode", "okToRun", "testDataUpdated", "testResult"]],
      template: function TestShippingMethodsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "div", 0)(2, "div", 1)(3, "vdr-test-order-builder", 2);
          ɵɵlistener("orderLinesChange", function TestShippingMethodsComponent_Template_vdr_test_order_builder_orderLinesChange_3_listener($event) {
            return ctx.setTestOrderLines($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(4, "div", 1)(5, "vdr-test-address-form", 3);
          ɵɵlistener("addressChange", function TestShippingMethodsComponent_Template_vdr_test_address_form_addressChange_5_listener($event) {
            return ctx.setTestAddress($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(6, "vdr-shipping-eligibility-test-result", 4);
          ɵɵpipe(7, "async");
          ɵɵpipe(8, "async");
          ɵɵlistener("runTest", function TestShippingMethodsComponent_Template_vdr_shipping_eligibility_test_result_runTest_6_listener() {
            return ctx.runTest();
          });
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵadvance(6);
          ɵɵproperty("currencyCode", (tmp_0_0 = ɵɵpipeBind1(7, 4, ctx.activeChannel$)) == null ? null : tmp_0_0.currencyCode)("okToRun", ctx.allTestDataPresent())("testDataUpdated", ctx.testDataUpdated)("testResult", ɵɵpipeBind1(8, 6, ctx.testResult$));
        }
      },
      dependencies: [PageBlockComponent, TestOrderBuilderComponent, TestAddressFormComponent, ShippingEligibilityTestResultComponent, AsyncPipe],
      styles: [".test-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;gap:var(--space-unit)}.test-wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1}@media screen and (max-width: 992px){.test-wrapper[_ngcontent-%COMP%]{flex-direction:column}}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestShippingMethodsComponent, [{
    type: Component,
    args: [{
      selector: "vdr-test-shipping-methods",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<vdr-page-block>\n    <div class="test-wrapper">\n        <div class="">\n            <vdr-test-order-builder (orderLinesChange)="setTestOrderLines($event)"></vdr-test-order-builder>\n        </div>\n        <div class="">\n            <vdr-test-address-form (addressChange)="setTestAddress($event)"></vdr-test-address-form>\n            <vdr-shipping-eligibility-test-result\n                class="mt-1"\n                [currencyCode]="(activeChannel$ | async)?.currencyCode"\n                [okToRun]="allTestDataPresent()"\n                [testDataUpdated]="testDataUpdated"\n                [testResult]="testResult$ | async"\n                (runTest)="runTest()"\n            ></vdr-shipping-eligibility-test-result>\n        </div>\n    </div>\n</vdr-page-block>\n',
      styles: [".test-wrapper{display:flex;width:100%;gap:var(--space-unit)}.test-wrapper>div{flex:1}@media screen and (max-width: 992px){.test-wrapper{flex-direction:column}}\n"]
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var GET_ZONE_DETAIL = gql`
    query GetZoneDetail($id: ID!) {
        zone(id: $id) {
            ...ZoneDetail
        }
    }
    fragment ZoneDetail on Zone {
        id
        createdAt
        updatedAt
        name
    }
`;
var ZoneDetailComponent = class _ZoneDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("Zone");
    this.detailForm = this.formBuilder.group({
      name: ["", Validators.required],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.updatePermission = [Permission.UpdateSettings, Permission.UpdateZone];
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  saveButtonEnabled() {
    return this.detailForm.dirty && this.detailForm.valid;
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const {
      name,
      customFields
    } = this.detailForm.value;
    if (!name) {
      return;
    }
    const input = {
      name,
      customFields
    };
    this.dataService.settings.createZone(input).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Zone"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createZone.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "Zone"
      });
    });
  }
  save() {
    if (!this.detailForm.dirty) {
      return;
    }
    const formValue = this.detailForm.value;
    this.entity$.pipe(take(1), mergeMap((zone) => {
      const input = {
        id: zone.id,
        name: formValue.name,
        customFields: formValue.customFields
      };
      return this.dataService.settings.updateZone(input);
    })).subscribe((data) => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Zone"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Zone"
      });
    });
  }
  /**
   * Update the form values when the entity changes.
   */
  setFormValues(entity, languageCode) {
    this.detailForm.patchValue({
      name: entity.name
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), entity);
    }
  }
  static {
    this.ɵfac = function ZoneDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ZoneDetailComponent,
      selectors: [["vdr-zone-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 24,
      vars: 17,
      consts: [["updateButton", ""], ["locationId", "zone-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "zone-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Zone", 3, "customFields", "customFieldsFormGroup"]],
      template: function ZoneDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, ZoneDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, ZoneDetailComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar");
          ɵɵtemplate(13, ZoneDetailComponent_vdr_card_13_Template, 2, 1, "vdr-card", 4);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-page-block")(16, "vdr-card")(17, "div", 5)(18, "vdr-form-field", 6);
          ɵɵpipe(19, "translate");
          ɵɵelement(20, "input", 7);
          ɵɵpipe(21, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(22, ZoneDetailComponent_vdr_card_22_Template, 3, 5, "vdr-card", 8);
          ɵɵelement(23, "vdr-custom-detail-component-host", 9);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r5 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 9, ctx.isNew$))("ngIfElse", updateButton_r5);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 11, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(19, 13, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(21, 15, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, IfPermissionsDirective, ActionBarItemsComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-zone-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="zone-detail" />
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
                    [disabled]="!saveButtonEnabled()"
                    *vdrIfPermissions="updatePermission"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="zone-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
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
                            type="text"
                            formControlName="name"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="Zone"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="zone-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
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
var deleteZonesBulkAction = createBulkDeleteAction({
  location: "zone-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteSettings) || userPermissions.includes(Permission.DeleteZone),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.settings.deleteZones(ids).pipe(map((res) => res.deleteZones))
});
var GET_ZONE_LIST = gql`
    query GetZoneList($options: ZoneListOptions) {
        zones(options: $options) {
            items {
                ...ZoneListItem
            }
            totalItems
        }
    }
    fragment ZoneListItem on Zone {
        id
        createdAt
        updatedAt
        name
    }
`;
var ZoneListComponent = class _ZoneListComponent extends TypedBaseListComponent {
  constructor(dataService, notificationService, modalService) {
    super();
    this.dataService = dataService;
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.dataTableListId = "zone-list";
    this.selectedMemberIds = [];
    this.customFields = this.serverConfigService.getCustomFieldsFor("Zone");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetZoneListDocument,
      getItems: (data) => data.zones,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          filterOperator: this.searchTermControl.value ? LogicalOperator.OR : LogicalOperator.AND,
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  ngOnInit() {
    super.ngOnInit();
    const activeZoneId$ = this.route.paramMap.pipe(map((pm) => pm.get("contents")), distinctUntilChanged(), tap(() => this.selectedMemberIds = []));
    this.activeZone$ = combineLatest(this.items$, activeZoneId$).pipe(map(([zones, activeZoneId]) => {
      if (activeZoneId) {
        return zones.find((z) => z.id === activeZoneId);
      }
    }));
    this.activeIndex$ = combineLatest(this.items$, activeZoneId$).pipe(map(([zones, activeZoneId]) => {
      if (activeZoneId) {
        return zones.findIndex((g) => g.id === activeZoneId);
      } else {
        return -1;
      }
    }));
  }
  setLanguage(code) {
    this.dataService.client.setContentLanguage(code).subscribe();
  }
  closeMembers() {
    const params = __spreadValues({}, this.route.snapshot.params);
    delete params.contents;
    this.router.navigate(["./", params], {
      relativeTo: this.route,
      queryParamsHandling: "preserve"
    });
  }
  addToZone(zone) {
    this.modalService.fromComponent(AddCountryToZoneDialogComponent, {
      locals: {
        zoneName: zone.name,
        zoneId: zone.id
      },
      size: "md"
    }).pipe(switchMap((memberIds) => memberIds ? this.dataService.settings.addMembersToZone(zone.id, memberIds).pipe(mapTo(memberIds)) : EMPTY)).subscribe({
      next: (result) => {
        this.notificationService.success(marker(`settings.add-countries-to-zone-success`), {
          countryCount: result.length,
          zoneName: zone.name
        });
        this.refreshMemberList();
      },
      error: (err) => {
        this.notificationService.error(err);
      }
    });
  }
  refreshMemberList() {
    this.zoneMemberList?.refresh();
  }
  static {
    this.ɵfac = function ZoneListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneListComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ZoneListComponent,
      selectors: [["vdr-zone-list"]],
      viewQuery: function ZoneListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(ZoneMemberListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.zoneMemberList = _t.first);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 15,
      vars: 14,
      consts: [[3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "zone-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "closeClicked", "rightPanelOpen"], ["vdrSplitViewLeft", ""], ["vdrSplitViewRight", "", 3, "splitViewTitle"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters", "activeIndex"], ["locationId", "zone-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "view-contents", 3, "heading", "optional"], [3, "customField", "sort", 4, "ngFor", "ngForOf"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["queryParamsHandling", "preserve", 1, "button-small", "bg-weight-150", 3, "routerLink"], ["shape", "file-group"], [3, "customField", "sort"], [4, "ngIf"], [1, "button-ghost", "ml-4", 3, "click"], ["locationId", "zone-members-list", 3, "selectedMemberIds", "activeZone", "selectionChange", 4, "ngIf"], ["locationId", "zone-members-list", 3, "selectionChange", "selectedMemberIds", "activeZone"]],
      template: function ZoneListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 0);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵlistener("languageCodeChange", function ZoneListComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(6, "vdr-ab-right");
          ɵɵelement(7, "vdr-action-bar-items", 1);
          ɵɵtemplate(8, ZoneListComponent_a_8_Template, 4, 5, "a", 2);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "vdr-split-view", 3);
          ɵɵpipe(11, "async");
          ɵɵlistener("closeClicked", function ZoneListComponent_Template_vdr_split_view_closeClicked_10_listener() {
            return ctx.closeMembers();
          });
          ɵɵtemplate(12, ZoneListComponent_ng_template_12_Template, 25, 47, "ng-template", 4)(13, ZoneListComponent_ng_template_13_Template, 2, 3, "ng-template", 5);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_4_0;
          ɵɵadvance(3);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(4, 5, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(5, 7, ctx.contentLanguage$));
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(13, _c19));
          ɵɵadvance(2);
          ɵɵproperty("rightPanelOpen", ɵɵpipeBind1(11, 9, ctx.activeZone$));
          ɵɵadvance(3);
          ɵɵproperty("splitViewTitle", (tmp_4_0 = ɵɵpipeBind1(14, 11, ctx.activeZone$)) == null ? null : tmp_4_0.name);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, LanguageSelectorComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, SplitViewComponent, SplitViewLeftDirective, SplitViewRightDirective, PageBlockComponent, ZoneMemberListComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: [".zone-wrapper[_ngcontent-%COMP%]{display:flex;height:calc(100% - 50px)}.zone-wrapper[_ngcontent-%COMP%]   .zone-list[_ngcontent-%COMP%]{flex:1;overflow:auto;margin-top:0}.zone-wrapper[_ngcontent-%COMP%]   .zone-list[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%]{background-color:var(--color-component-bg-200)}.zone-members[_ngcontent-%COMP%]{height:100%;width:0;opacity:0;visibility:hidden;overflow:auto;transition:width .3s,opacity .2s .3s,visibility 0s .3s}.zone-members.expanded[_ngcontent-%COMP%]{width:40vw;visibility:visible;opacity:1;padding-inline-start:12px}.zone-members[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{margin:0;background:none;border:none;cursor:pointer}.zone-members[_ngcontent-%COMP%]     table.table{margin-top:0}.zone-members[_ngcontent-%COMP%]     table.table th{top:0}.zone-members[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-zone-list",
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
            <vdr-action-bar-items locationId="zone-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateSettings', 'CreateZone']"
                [routerLink]="['./', 'create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'settings.create-new-zone' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="zone-list" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<vdr-split-view [rightPanelOpen]="activeZone$ | async" (closeClicked)="closeMembers()">
    <ng-template vdrSplitViewLeft>
        <vdr-data-table-2
            [id]="dataTableListId"
            [items]="items$ | async"
            [itemsPerPage]="itemsPerPage$ | async"
            [totalItems]="totalItems$ | async"
            [currentPage]="currentPage$ | async"
            [filters]="filters"
            [activeIndex]="activeIndex$ | async"
            (pageChange)="setPageNumber($event)"
            (itemsPerPageChange)="setItemsPerPage($event)"
            (visibleColumnsChange)="setVisibleColumns($event)"
        >
            <vdr-bulk-action-menu
                locationId="zone-list"
                [hostComponent]="this"
                [selectionManager]="selectionManager"
            />
            <vdr-dt2-search
                [searchTermControl]="searchTermControl"
                [searchTermPlaceholder]="'common.search-by-name' | translate"
            />
            <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
                <ng-template let-customerGroup="item">
                    {{ customerGroup.id }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column
                [heading]="'common.created-at' | translate" id="created-at"
                [hiddenByDefault]="true"
                [sort]="sorts.get('createdAt')"
            >
                <ng-template let-customerGroup="item">
                    {{ customerGroup.createdAt | localeDate : 'short' }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column
                [heading]="'common.updated-at' | translate" id="updated-at"
                [hiddenByDefault]="true"
                [sort]="sorts.get('updatedAt')"
            >
                <ng-template let-customerGroup="item">
                    {{ customerGroup.updatedAt | localeDate : 'short' }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column
                [heading]="'common.name' | translate" id="name"
                [optional]="false"
                [sort]="sorts.get('name')"
            >
                <ng-template let-customerGroup="item">
                    <a class="button-ghost" [routerLink]="['./', customerGroup.id]"
                        ><span>{{ customerGroup.name }}</span>
                        <clr-icon shape="arrow right"></clr-icon>
                    </a>
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.view-contents' | translate" id="view-contents" [optional]="false">
                <ng-template let-customerGroup="item">
                    <a
                        class="button-small bg-weight-150"
                        [routerLink]="['./', { contents: customerGroup.id }]"
                        queryParamsHandling="preserve"
                    >
                        <span>{{ 'settings.view-zone-members' | translate }}</span>
                        <clr-icon shape="file-group"></clr-icon>
                    </a>
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-custom-field-column
                *ngFor="let customField of customFields"
                [customField]="customField"
                [sort]="sorts"
            />
        </vdr-data-table-2>
    </ng-template>
    <ng-template vdrSplitViewRight [splitViewTitle]="(activeZone$ | async)?.name">
        <ng-container *ngIf="activeZone$ | async as activeZone">
            <button class="button-ghost ml-4" (click)="addToZone(activeZone)">
                <clr-icon shape="plus"></clr-icon>
                <span>{{
                    'settings.add-countries-to-zone' | translate : { zoneName: activeZone.name }
                }}</span>
            </button>
            <vdr-zone-member-list
                *ngIf="activeZone$ | async as activeZone"
                locationId="zone-members-list"
                [selectedMemberIds]="selectedMemberIds"
                [activeZone]="activeZone"
                (selectionChange)="selectedMemberIds = $event"
            />
        </ng-container>
    </ng-template>
</vdr-split-view>
`,
      styles: [".zone-wrapper{display:flex;height:calc(100% - 50px)}.zone-wrapper .zone-list{flex:1;overflow:auto;margin-top:0}.zone-wrapper .zone-list tr.active{background-color:var(--color-component-bg-200)}.zone-members{height:100%;width:0;opacity:0;visibility:hidden;overflow:auto;transition:width .3s,opacity .2s .3s,visibility 0s .3s}.zone-members.expanded{width:40vw;visibility:visible;opacity:1;padding-inline-start:12px}.zone-members .close-button{margin:0;background:none;border:none;cursor:pointer}.zone-members ::ng-deep table.table{margin-top:0}.zone-members ::ng-deep table.table th{top:0}.zone-members .controls{display:flex;justify-content:space-between}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: NotificationService
  }, {
    type: ModalService
  }], {
    zoneMemberList: [{
      type: ViewChild,
      args: [ZoneMemberListComponent]
    }]
  });
})();
var removeZoneMembersBulkAction = {
  location: "zone-members-list",
  label: marker("settings.remove-from-zone"),
  icon: "trash",
  iconClass: "is-danger",
  requiresPermission: Permission.UpdateCustomerGroup,
  onClick: ({
    injector,
    selection,
    hostComponent,
    clearSelection
  }) => {
    const dataService = injector.get(DataService);
    const notificationService = injector.get(NotificationService);
    const zone = hostComponent.activeZone;
    const memberIds = selection.map((s) => s.id);
    dataService.settings.removeMembersFromZone(zone.id, memberIds).subscribe({
      complete: () => {
        notificationService.success(marker(`settings.remove-countries-from-zone-success`), {
          countryCount: memberIds.length,
          zoneName: zone.name
        });
        hostComponent.refresh();
        clearSelection();
      }
    });
  }
};
var ProfileResolver = class _ProfileResolver extends BaseEntityResolver {
  constructor(router, dataService) {
    super(router, {
      __typename: "Administrator",
      id: "",
      createdAt: "",
      updatedAt: "",
      emailAddress: "",
      firstName: "",
      lastName: "",
      user: {
        roles: []
      }
    }, (id) => dataService.administrator.getActiveAdministrator().mapStream((data) => data.activeAdministrator));
  }
  static {
    this.ɵfac = function ProfileResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileResolver)(ɵɵinject(Router), ɵɵinject(DataService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProfileResolver,
      factory: _ProfileResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: DataService
  }], null);
})();
var createRoutes = (pageService) => [{
  path: "profile",
  component: PageComponent,
  data: {
    breadcrumb: marker("breadcrumb.profile")
  },
  resolve: {
    detail: () => inject(DataService).query(GetProfileDetailDocument).mapSingle((data) => ({
      entity: of(data.activeAdministrator)
    }))
  },
  children: pageService.getPageTabRoutes("profile")
}, {
  path: "administrators",
  component: PageComponent,
  data: {
    locationId: "administrator-list",
    breadcrumb: marker("breadcrumb.administrators")
  },
  children: pageService.getPageTabRoutes("administrator-list")
}, {
  path: "administrators/:id",
  component: PageComponent,
  data: {
    locationId: "administrator-detail",
    breadcrumb: {
      label: marker("breadcrumb.administrators"),
      link: ["../", "administrators"]
    }
  },
  children: pageService.getPageTabRoutes("administrator-detail")
}, {
  path: "channels",
  component: PageComponent,
  data: {
    locationId: "channel-list",
    breadcrumb: marker("breadcrumb.channels")
  },
  children: pageService.getPageTabRoutes("channel-list")
}, {
  path: "channels/:id",
  component: PageComponent,
  data: {
    locationId: "channel-detail",
    breadcrumb: {
      label: marker("breadcrumb.channels"),
      link: ["../", "channels"]
    }
  },
  children: pageService.getPageTabRoutes("channel-detail")
}, {
  path: "stock-locations",
  component: PageComponent,
  data: {
    locationId: "stock-location-list",
    breadcrumb: marker("breadcrumb.stock-locations")
  },
  children: pageService.getPageTabRoutes("stock-location-list")
}, {
  path: "stock-locations/:id",
  component: PageComponent,
  data: {
    locationId: "stock-location-detail",
    breadcrumb: {
      label: marker("breadcrumb.stock-locations"),
      link: ["../", "stock-locations"]
    }
  },
  children: pageService.getPageTabRoutes("stock-location-detail")
}, {
  path: "sellers",
  component: PageComponent,
  data: {
    locationId: "seller-list",
    breadcrumb: marker("breadcrumb.sellers")
  },
  children: pageService.getPageTabRoutes("seller-list")
}, {
  path: "sellers/:id",
  component: PageComponent,
  data: {
    locationId: "seller-detail",
    breadcrumb: {
      label: marker("breadcrumb.sellers"),
      link: ["../", "sellers"]
    }
  },
  children: pageService.getPageTabRoutes("seller-detail")
}, {
  path: "roles",
  component: PageComponent,
  data: {
    locationId: "role-list",
    breadcrumb: marker("breadcrumb.roles")
  },
  children: pageService.getPageTabRoutes("role-list")
}, {
  path: "roles/:id",
  component: PageComponent,
  data: {
    locationId: "role-detail",
    breadcrumb: {
      label: marker("breadcrumb.roles"),
      link: ["../", "roles"]
    }
  },
  children: pageService.getPageTabRoutes("role-detail")
}, {
  path: "tax-categories",
  component: PageComponent,
  data: {
    locationId: "tax-category-list",
    breadcrumb: marker("breadcrumb.tax-categories")
  },
  children: pageService.getPageTabRoutes("tax-category-list")
}, {
  path: "tax-categories/:id",
  component: PageComponent,
  data: {
    locationId: "tax-category-detail",
    breadcrumb: {
      label: marker("breadcrumb.tax-categories"),
      link: ["../", "tax-categories"]
    }
  },
  children: pageService.getPageTabRoutes("tax-category-detail")
}, {
  path: "tax-rates",
  component: PageComponent,
  data: {
    locationId: "tax-rate-list",
    breadcrumb: marker("breadcrumb.tax-rates")
  },
  children: pageService.getPageTabRoutes("tax-rate-list")
}, {
  path: "tax-rates/:id",
  component: PageComponent,
  data: {
    locationId: "tax-rate-detail",
    breadcrumb: {
      label: marker("breadcrumb.tax-rates"),
      link: ["../", "tax-rates"]
    }
  },
  children: pageService.getPageTabRoutes("tax-rate-detail")
}, {
  path: "countries",
  component: PageComponent,
  data: {
    locationId: "country-list",
    breadcrumb: marker("breadcrumb.countries")
  },
  children: pageService.getPageTabRoutes("country-list")
}, {
  path: "countries/:id",
  component: PageComponent,
  data: {
    locationId: "country-detail",
    breadcrumb: {
      label: marker("breadcrumb.countries"),
      link: ["../", "countries"]
    }
  },
  children: pageService.getPageTabRoutes("country-detail")
}, {
  path: "zones",
  component: PageComponent,
  data: {
    locationId: "zone-list",
    breadcrumb: marker("breadcrumb.zones")
  },
  children: pageService.getPageTabRoutes("zone-list")
}, {
  path: "zones/:id",
  component: PageComponent,
  data: {
    locationId: "zone-detail",
    breadcrumb: {
      label: marker("breadcrumb.zones"),
      link: ["../", "zones"]
    }
  },
  children: pageService.getPageTabRoutes("zone-detail")
}, {
  path: "shipping-methods",
  component: PageComponent,
  data: {
    locationId: "shipping-method-list",
    breadcrumb: marker("breadcrumb.shipping-methods")
  },
  children: pageService.getPageTabRoutes("shipping-method-list")
}, {
  path: "shipping-methods/:id",
  component: PageComponent,
  data: {
    locationId: "shipping-method-detail",
    breadcrumb: {
      label: marker("breadcrumb.shipping-methods"),
      link: ["../", "shipping-methods"]
    }
  },
  children: pageService.getPageTabRoutes("shipping-method-detail")
}, {
  path: "payment-methods",
  component: PageComponent,
  data: {
    locationId: "payment-method-list",
    breadcrumb: marker("breadcrumb.payment-methods")
  },
  children: pageService.getPageTabRoutes("payment-method-list")
}, {
  path: "payment-methods/:id",
  component: PageComponent,
  data: {
    locationId: "payment-method-detail",
    breadcrumb: {
      label: marker("breadcrumb.payment-methods"),
      link: ["../", "payment-methods"]
    }
  },
  children: pageService.getPageTabRoutes("payment-method-detail")
}, {
  path: "global-settings",
  component: PageComponent,
  data: {
    breadcrumb: marker("breadcrumb.global-settings"),
    locationId: "global-setting-detail"
  },
  resolve: {
    detail: () => inject(DataService).query(GetGlobalSettingsDetailDocument).mapSingle((data) => ({
      entity: of(data.globalSettings)
    }))
  },
  children: pageService.getPageTabRoutes("global-setting-detail")
}];
var SettingsModule = class _SettingsModule {
  static {
    this.hasRegisteredTabsAndBulkActions = false;
  }
  constructor(bulkActionRegistryService, pageService) {
    if (_SettingsModule.hasRegisteredTabsAndBulkActions) {
      return;
    }
    bulkActionRegistryService.registerBulkAction(deleteSellersBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteChannelsBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteAdministratorsBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteRolesBulkAction);
    bulkActionRegistryService.registerBulkAction(assignShippingMethodsToChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(removeShippingMethodsFromChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteShippingMethodsBulkAction);
    bulkActionRegistryService.registerBulkAction(assignPaymentMethodsToChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(removePaymentMethodsFromChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(deletePaymentMethodsBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteTaxCategoriesBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteTaxRatesBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteCountriesBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteZonesBulkAction);
    bulkActionRegistryService.registerBulkAction(removeZoneMembersBulkAction);
    bulkActionRegistryService.registerBulkAction(assignStockLocationsToChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(removeStockLocationsFromChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteStockLocationsBulkAction);
    pageService.registerPageTab({
      priority: 0,
      location: "seller-list",
      tab: marker("breadcrumb.sellers"),
      route: "",
      component: SellerListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "seller-detail",
      tab: marker("settings.seller"),
      route: "",
      component: detailComponentWithResolver({
        component: SellerDetailComponent,
        query: GetSellerDetailDocument,
        entityKey: "seller",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("settings.create-new-seller"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "channel-list",
      tab: marker("breadcrumb.channels"),
      route: "",
      component: ChannelListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "channel-detail",
      tab: marker("settings.channel"),
      route: "",
      component: detailComponentWithResolver({
        component: ChannelDetailComponent,
        query: GetChannelDetailDocument,
        entityKey: "channel",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.code === import_shared_constants.DEFAULT_CHANNEL_CODE ? "common.default-channel" : entity.code : marker("settings.create-new-channel"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "administrator-list",
      tab: marker("breadcrumb.administrators"),
      route: "",
      component: AdministratorListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "administrator-detail",
      tab: marker("settings.administrator"),
      route: "",
      component: detailComponentWithResolver({
        component: AdminDetailComponent,
        query: GetAdministratorDetailDocument,
        entityKey: "administrator",
        getBreadcrumbs: (entity) => [{
          label: entity ? `${entity.firstName} ${entity.lastName}` : marker("admin.create-new-administrator"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "role-list",
      tab: marker("breadcrumb.roles"),
      route: "",
      component: RoleListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "role-detail",
      tab: marker("settings.role"),
      route: "",
      component: detailComponentWithResolver({
        component: RoleDetailComponent,
        query: GetRoleDetailDocument,
        entityKey: "role",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.description : marker("settings.create-new-role"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "shipping-method-list",
      tab: marker("breadcrumb.shipping-methods"),
      route: "",
      component: ShippingMethodListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "shipping-method-detail",
      tab: marker("settings.shipping-method"),
      route: "",
      component: detailComponentWithResolver({
        component: ShippingMethodDetailComponent,
        query: GetShippingMethodDetailDocument,
        entityKey: "shippingMethod",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("settings.create-new-shipping-method"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "shipping-method-list",
      tab: marker("settings.test-shipping-methods"),
      route: "test",
      component: TestShippingMethodsComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "payment-method-list",
      tab: marker("breadcrumb.payment-methods"),
      route: "",
      component: PaymentMethodListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "payment-method-detail",
      tab: marker("settings.payment-method"),
      route: "",
      component: detailComponentWithResolver({
        component: PaymentMethodDetailComponent,
        query: GetPaymentMethodDetailDocument,
        entityKey: "paymentMethod",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("settings.create-new-payment-method"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "tax-category-list",
      tab: marker("breadcrumb.tax-categories"),
      route: "",
      component: TaxCategoryListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "tax-category-detail",
      tab: marker("settings.tax-category"),
      route: "",
      component: detailComponentWithResolver({
        component: TaxCategoryDetailComponent,
        query: GetTaxCategoryDetailDocument,
        entityKey: "taxCategory",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("settings.create-new-tax-category"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "tax-rate-list",
      tab: marker("breadcrumb.tax-rates"),
      route: "",
      component: TaxRateListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "tax-rate-detail",
      tab: marker("settings.tax-rate"),
      route: "",
      component: detailComponentWithResolver({
        component: TaxRateDetailComponent,
        query: GetTaxRateDetailDocument,
        entityKey: "taxRate",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("settings.create-new-tax-rate"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "country-list",
      tab: marker("breadcrumb.countries"),
      route: "",
      component: CountryListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "country-detail",
      tab: marker("settings.country"),
      route: "",
      component: detailComponentWithResolver({
        component: CountryDetailComponent,
        query: GetCountryDetailDocument,
        entityKey: "country",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("settings.create-new-country"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "zone-list",
      tab: marker("breadcrumb.zones"),
      route: "",
      component: ZoneListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "zone-detail",
      tab: marker("settings.zone"),
      route: "",
      component: detailComponentWithResolver({
        component: ZoneDetailComponent,
        query: GetZoneDetailDocument,
        entityKey: "zone",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("settings.create-new-zone"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "global-setting-detail",
      tab: marker("breadcrumb.global-settings"),
      route: "",
      component: GlobalSettingsComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "profile",
      tab: marker("breadcrumb.profile"),
      route: "",
      component: ProfileComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "stock-location-list",
      tab: marker("catalog.stock-locations"),
      route: "",
      component: StockLocationListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "stock-location-detail",
      tab: marker("catalog.stock-location"),
      route: "",
      component: detailComponentWithResolver({
        component: StockLocationDetailComponent,
        query: GetStockLocationDetailDocument,
        entityKey: "stockLocation",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("catalog.create-new-stock-location"),
          link: [entity?.id]
        }]
      })
    });
    _SettingsModule.hasRegisteredTabsAndBulkActions = true;
  }
  static {
    this.ɵfac = function SettingsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsModule)(ɵɵinject(BulkActionRegistryService), ɵɵinject(PageService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SettingsModule,
      declarations: [TaxCategoryListComponent, TaxCategoryDetailComponent, AdministratorListComponent, RoleListComponent, RoleDetailComponent, AdminDetailComponent, PermissionGridComponent, CountryListComponent, CountryDetailComponent, TaxRateListComponent, TaxRateDetailComponent, ChannelListComponent, ChannelDetailComponent, ShippingMethodListComponent, ShippingMethodDetailComponent, PaymentMethodListComponent, PaymentMethodDetailComponent, GlobalSettingsComponent, TestOrderBuilderComponent, TestAddressFormComponent, SellerDetailComponent, SellerListComponent, ShippingMethodTestResultComponent, ShippingEligibilityTestResultComponent, ZoneListComponent, AddCountryToZoneDialogComponent, ZoneMemberListComponent, ZoneMemberListHeaderDirective, ZoneMemberControlsDirective, ProfileComponent, TestShippingMethodsComponent, ZoneDetailComponent, StockLocationListComponent, StockLocationDetailComponent],
      imports: [SharedModule, RouterModule]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, RouterModule.forChild([])],
      providers: [{
        provide: ROUTES,
        useFactory: (pageService) => createRoutes(pageService),
        multi: true,
        deps: [PageService]
      }],
      declarations: [TaxCategoryListComponent, TaxCategoryDetailComponent, AdministratorListComponent, RoleListComponent, RoleDetailComponent, AdminDetailComponent, PermissionGridComponent, CountryListComponent, CountryDetailComponent, TaxRateListComponent, TaxRateDetailComponent, ChannelListComponent, ChannelDetailComponent, ShippingMethodListComponent, ShippingMethodDetailComponent, PaymentMethodListComponent, PaymentMethodDetailComponent, GlobalSettingsComponent, TestOrderBuilderComponent, TestAddressFormComponent, SellerDetailComponent, SellerListComponent, ShippingMethodTestResultComponent, ShippingEligibilityTestResultComponent, ZoneListComponent, AddCountryToZoneDialogComponent, ZoneMemberListComponent, ZoneMemberListHeaderDirective, ZoneMemberControlsDirective, ProfileComponent, TestShippingMethodsComponent, ZoneDetailComponent, StockLocationListComponent, StockLocationDetailComponent]
    }]
  }], () => [{
    type: BulkActionRegistryService
  }, {
    type: PageService
  }], null);
})();
export {
  AddCountryToZoneDialogComponent,
  AdminDetailComponent,
  AdministratorListComponent,
  CREATE_STOCK_LOCATION,
  ChannelDetailComponent,
  ChannelListComponent,
  CountryDetailComponent,
  CountryListComponent,
  GET_ADMINISTRATOR_DETAIL,
  GET_ADMINISTRATOR_LIST,
  GET_CHANNEL_DETAIL,
  GET_CHANNEL_LIST,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_LIST,
  GET_GLOBAL_SETTINGS_DETAIL,
  GET_PAYMENT_METHOD_DETAIL,
  GET_PAYMENT_METHOD_LIST,
  GET_PROFILE_DETAIL,
  GET_ROLE_DETAIL,
  GET_ROLE_LIST,
  GET_SELLER_DETAIL,
  GET_SHIPPING_METHOD_DETAIL,
  GET_SHIPPING_METHOD_LIST,
  GET_STOCK_LOCATION_DETAIL,
  GET_STOCK_LOCATION_LIST,
  GET_TAX_CATEGORY_DETAIL,
  GET_TAX_CATEGORY_LIST,
  GET_TAX_RATE_DETAIL,
  GET_TAX_RATE_LIST,
  GET_ZONE_DETAIL,
  GET_ZONE_LIST,
  GET_ZONE_MEMBERS,
  GlobalSettingsComponent,
  PaymentMethodDetailComponent,
  PaymentMethodListComponent,
  PermissionGridComponent,
  ProfileComponent,
  ProfileResolver,
  RoleDetailComponent,
  RoleListComponent,
  SellerDetailComponent,
  SellerListComponent,
  SettingsModule,
  ShippingEligibilityTestResultComponent,
  ShippingMethodDetailComponent,
  ShippingMethodListComponent,
  ShippingMethodTestResultComponent,
  StockLocationDetailComponent,
  StockLocationListComponent,
  TaxCategoryDetailComponent,
  TaxCategoryListComponent,
  TaxRateDetailComponent,
  TaxRateListComponent,
  TestAddressFormComponent,
  TestOrderBuilderComponent,
  TestShippingMethodsComponent,
  UPDATE_STOCK_LOCATION,
  ZoneDetailComponent,
  ZoneListComponent,
  ZoneMemberControlsDirective,
  ZoneMemberListComponent,
  ZoneMemberListHeaderDirective,
  assignPaymentMethodsToChannelBulkAction,
  assignShippingMethodsToChannelBulkAction,
  assignStockLocationsToChannelBulkAction,
  createRoutes,
  deleteAdministratorsBulkAction,
  deleteChannelsBulkAction,
  deleteCountriesBulkAction,
  deletePaymentMethodsBulkAction,
  deleteRolesBulkAction,
  deleteSellersBulkAction,
  deleteShippingMethodsBulkAction,
  deleteStockLocationsBulkAction,
  deleteTaxCategoriesBulkAction,
  deleteTaxRatesBulkAction,
  deleteZonesBulkAction,
  removePaymentMethodsFromChannelBulkAction,
  removeShippingMethodsFromChannelBulkAction,
  removeStockLocationsFromChannelBulkAction,
  removeZoneMembersBulkAction
};
//# sourceMappingURL=@vendure_admin-ui_settings.js.map
