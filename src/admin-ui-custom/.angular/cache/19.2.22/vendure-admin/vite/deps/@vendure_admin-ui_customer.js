import {
  ActionBarComponent,
  ActionBarDropdownMenuComponent,
  ActionBarItemsComponent,
  ActionBarLeftComponent,
  ActionBarRightComponent,
  AddressFormComponent,
  BulkActionMenuComponent,
  BulkActionRegistryService,
  CUSTOMER_FRAGMENT,
  CUSTOMER_GROUP_FRAGMENT,
  CardComponent,
  ChipComponent,
  CustomDetailComponentHostComponent,
  CustomerDetailQueryDocument,
  CustomerListQueryDocument,
  DataService,
  DataTable2ColumnComponent,
  DataTable2Component,
  DataTable2SearchComponent,
  DataTableCustomFieldColumnComponent,
  DialogButtonsDirective,
  DialogTitleDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuComponent,
  DropdownTriggerDirective,
  EditNoteDialogComponent,
  EntityInfoComponent,
  FormFieldComponent,
  FormFieldControlDirective,
  FormattedAddressComponent,
  GetCustomerGroupDetailDocument,
  GetCustomerGroupListDocument,
  HasPermissionPipe,
  HistoryEntryComponentService,
  HistoryEntryDetailComponent,
  HistoryEntryType,
  IfPermissionsDirective,
  LabeledDataComponent,
  LocaleCurrencyPipe,
  LocaleDatePipe,
  LogicalOperator,
  ModalService,
  NotificationService,
  ObjectTreeComponent,
  OrderStateLabelComponent,
  PageBlockComponent,
  PageComponent,
  PageDetailLayoutComponent,
  PageDetailSidebarComponent,
  PageEntityInfoComponent,
  PageService,
  Permission,
  SelectionManager,
  ServerConfigService,
  SharedModule,
  SortOrder,
  SplitViewComponent,
  SplitViewLeftDirective,
  SplitViewRightDirective,
  TabbedCustomFieldsComponent,
  TimeAgoPipe,
  TimelineEntryComponent,
  TypedBaseDetailComponent,
  TypedBaseListComponent,
  createBulkDeleteAction,
  detailBreadcrumb,
  detailComponentWithResolver,
  getCustomFieldsDefaults,
  gql,
  require_shared_utils
} from "./chunk-YDQAHX43.js";
import {
  ClrIconCustomTag,
  ClrLabel
} from "./chunk-SWTGRTQU.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent
} from "./chunk-QP2DF7NU.js";
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
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  UntypedFormArray,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-XNNVMMYZ.js";
import {
  ActivatedRoute,
  ROUTES,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-A2BPDF5Y.js";
import "./chunk-FRAMVYFW.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from "./chunk-3WBC65NO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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
  combineLatest,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  forkJoin,
  from,
  map,
  mapTo,
  merge2 as merge,
  mergeMap,
  of,
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

// ../../node_modules/@vendure/admin-ui/fesm2022/vendure-admin-ui-customer.mjs
var import_shared_utils = __toESM(require_shared_utils(), 1);
function CustomerStatusLabelComponent_vdr_chip_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "clr-icon", 1);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "customer.verified"), " ");
  }
}
function CustomerStatusLabelComponent_vdr_chip_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "clr-icon", 2);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "customer.registered"), " ");
  }
}
function CustomerStatusLabelComponent_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtemplate(1, CustomerStatusLabelComponent_vdr_chip_0_ng_container_1_Template, 4, 3, "ng-container", 0)(2, CustomerStatusLabelComponent_vdr_chip_0_ng_container_2_Template, 4, 3, "ng-container", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.customer.user == null ? null : ctx_r0.customer.user.verified);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r0.customer.user == null ? null : ctx_r0.customer.user.verified));
  }
}
function CustomerStatusLabelComponent_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "customer.guest"));
  }
}
var _c0 = (a0) => ["/customer/customers", a0];
function CustomerGroupMemberListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const customerGroup_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", customerGroup_r1.id, " ");
  }
}
function CustomerGroupMemberListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const customer_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, customer_r2.createdAt, "short"), " ");
  }
}
function CustomerGroupMemberListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const customer_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, customer_r3.createdAt, "short"), " ");
  }
}
function CustomerGroupMemberListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customer_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(4, _c0, customer_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate3(" ", customer_r4.title, " ", customer_r4.firstName, " ", customer_r4.lastName, " ");
  }
}
function CustomerGroupMemberListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-customer-status-label", 11);
  }
  if (rf & 2) {
    const customer_r5 = ctx.item;
    ɵɵproperty("customer", customer_r5);
  }
}
function CustomerGroupMemberListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const customer_r6 = ctx.item;
    ɵɵtextInterpolate1(" ", customer_r6.emailAddress, " ");
  }
}
var _c1 = (a0) => ({
  groupName: a0
});
var _c2 = (a0) => ({
  count: a0
});
function AddCustomerToGroupDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "customer.add-customers-to-group-with-name", ɵɵpureFunction1(4, _c1, ctx_r0.group.name)), "\n");
  }
}
function AddCustomerToGroupDialogComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function AddCustomerToGroupDialogComponent_ng_template_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 4);
    ɵɵlistener("click", function AddCustomerToGroupDialogComponent_ng_template_4_Template_button_click_3_listener() {
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
    ɵɵproperty("disabled", !ctx_r0.selectedCustomerIds.length);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, "customer.add-customers-to-group-with-count", ɵɵpureFunction1(8, _c2, ctx_r0.selectedCustomerIds.length)), " ");
  }
}
function AddressDetailDialogComponent_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const streetLine1_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1("", streetLine1_r1, ",");
  }
}
function AddressDetailDialogComponent_ng_template_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryCode_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", countryCode_r2, "");
  }
}
function AddressDetailDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AddressDetailDialogComponent_ng_template_0_span_0_Template, 2, 1, "span", 3)(1, AddressDetailDialogComponent_ng_template_0_span_1_Template, 2, 1, "span", 3);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", (tmp_1_0 = ctx_r2.addressForm.get("streetLine1")) == null ? null : tmp_1_0.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", (tmp_2_0 = ctx_r2.addressForm.get("countryCode")) == null ? null : tmp_2_0.value);
  }
}
function AddressDetailDialogComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function AddressDetailDialogComponent_ng_template_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 5);
    ɵɵlistener("click", function AddressDetailDialogComponent_ng_template_2_Template_button_click_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.save());
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
    ɵɵproperty("disabled", !ctx_r2.addressForm.valid || !ctx_r2.addressForm.touched);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.update"), " ");
  }
}
function AddressCardComponent_div_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const address_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1("", address_r1.streetLine1, ",");
  }
}
function AddressCardComponent_div_0_vdr_chip_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 15);
    ɵɵelement(1, "clr-icon", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "customer.default-shipping-address"), " ");
  }
}
function AddressCardComponent_div_0_vdr_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 15);
    ɵɵelement(1, "clr-icon", 17);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "customer.default-billing-address"), " ");
  }
}
function AddressCardComponent_div_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 18);
    ɵɵlistener("click", function AddressCardComponent_div_0_ng_container_14_Template_button_click_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.editAddress());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-dropdown")(5, "button", 19);
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵelement(8, "clr-icon", 20);
    ɵɵelementEnd();
    ɵɵelementStart(9, "vdr-dropdown-menu")(10, "button", 21);
    ɵɵlistener("click", function AddressCardComponent_div_0_ng_container_14_Template_button_click_10_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setAsDefaultShippingAddress());
    });
    ɵɵtext(11);
    ɵɵpipe(12, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 21);
    ɵɵlistener("click", function AddressCardComponent_div_0_ng_container_14_Template_button_click_13_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setAsDefaultBillingAddress());
    });
    ɵɵtext(14);
    ɵɵpipe(15, "translate");
    ɵɵelementEnd();
    ɵɵelement(16, "div", 22);
    ɵɵelementStart(17, "button", 23);
    ɵɵlistener("click", function AddressCardComponent_div_0_ng_container_14_Template_button_click_17_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.delete());
    });
    ɵɵelement(18, "clr-icon", 24);
    ɵɵtext(19);
    ɵɵpipe(20, "translate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, "common.edit"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 9, "common.more"), " ");
    ɵɵadvance(4);
    ɵɵproperty("disabled", ctx_r2.isDefaultShipping);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 11, "customer.set-as-default-shipping-address"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r2.isDefaultBilling);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 13, "customer.set-as-default-billing-address"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 15, "common.delete"), " ");
  }
}
function AddressCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    ɵɵtemplate(3, AddressCardComponent_div_0_span_3_Template, 2, 1, "span", 4);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 5);
    ɵɵtemplate(6, AddressCardComponent_div_0_vdr_chip_6_Template, 4, 3, "vdr-chip", 6)(7, AddressCardComponent_div_0_vdr_chip_7_Template, 4, 3, "vdr-chip", 6);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 7)(9, "div", 8);
    ɵɵelement(10, "vdr-formatted-address", 9);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 10)(12, "div", 11);
    ɵɵelement(13, "vdr-entity-info", 12);
    ɵɵtemplate(14, AddressCardComponent_div_0_ng_container_14_Template, 21, 17, "ng-container", 13);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const address_r1 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngIf", address_r1.streetLine1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", address_r1.countryCode, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.isDefaultShipping);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isDefaultBilling);
    ɵɵadvance(3);
    ɵɵproperty("address", address_r1);
    ɵɵadvance(3);
    ɵɵproperty("entity", address_r1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.editable);
  }
}
function SelectCustomerGroupDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "customer.add-customer-to-group"), "\n");
  }
}
function SelectCustomerGroupDialogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 5);
    ɵɵlistener("click", function SelectCustomerGroupDialogComponent_ng_template_3_Template_span_click_0_listener() {
      const ctx_r1 = ɵɵrestoreView(_r1);
      const item_r3 = ctx_r1.item;
      const clear_r4 = ctx_r1.clear;
      return ɵɵresetView(clear_r4(item_r3));
    });
    ɵɵtext(1, " × ");
    ɵɵelementEnd();
    ɵɵelementStart(2, "vdr-chip", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    ɵɵadvance(2);
    ɵɵproperty("colorFrom", item_r3.id);
    ɵɵadvance();
    ɵɵtextInterpolate(item_r3.name);
  }
}
function SelectCustomerGroupDialogComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    ɵɵproperty("colorFrom", item_r5.id);
    ɵɵadvance();
    ɵɵtextInterpolate(item_r5.name);
  }
}
function SelectCustomerGroupDialogComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function SelectCustomerGroupDialogComponent_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 8);
    ɵɵlistener("click", function SelectCustomerGroupDialogComponent_ng_template_5_Template_button_click_3_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.add());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r6.selectedGroupIds.length);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, "customer.add-customer-to-groups-with-count", ɵɵpureFunction1(8, _c2, ctx_r6.selectedGroupIds.length)), " ");
  }
}
var _c3 = ["portal"];
var _c4 = (a0) => ({
  strategy: a0
});
function CustomerHistoryComponent_vdr_timeline_entry_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-timeline-entry", 6)(1, "div", 7)(2, "textarea", 8);
    ɵɵtwoWayListener("ngModelChange", function CustomerHistoryComponent_vdr_timeline_entry_1_Template_textarea_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.note, $event) || (ctx_r1.note = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 9);
    ɵɵlistener("click", function CustomerHistoryComponent_vdr_timeline_entry_1_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addNoteToCustomer());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("featured", true)("isFirst", true);
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r1.note);
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.note);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "order.add-note"), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_vdr_customer_history_entry_host_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-customer-history-entry-host", 11);
    ɵɵlistener("expandClick", function CustomerHistoryComponent_ng_container_2_vdr_customer_history_entry_host_1_Template_vdr_customer_history_entry_host_expandClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.expanded = !ctx_r1.expanded);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("customer", ctx_r1.customer)("entry", entry_r4)("expanded", ctx_r1.expanded);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "customer.history-using-native-auth-strategy"), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(3).$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "customer.history-using-external-auth-strategy", ɵɵpureFunction1(4, _c4, entry_r4.data.strategy)), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_2_ng_container_4_Template, 3, 3, "ng-container", 17)(5, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_2_ng_template_5_Template, 2, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const namedStrategy_r5 = ɵɵreference(6);
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "customer.history-customer-registered"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entry_r4.data.strategy === "native")("ngIfElse", namedStrategy_r5);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "customer.history-using-native-auth-strategy"), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(3).$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "customer.history-using-external-auth-strategy", ɵɵpureFunction1(4, _c4, entry_r4.data.strategy)), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_3_ng_container_4_Template, 3, 3, "ng-container", 17)(5, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_3_ng_template_5_Template, 2, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const namedStrategy_r6 = ɵɵreference(6);
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "customer.history-customer-verified"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entry_r4.data.strategy === "native")("ngIfElse", namedStrategy_r6);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementStart(4, "vdr-history-entry-detail");
    ɵɵelement(5, "vdr-object-tree", 19);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "customer.history-customer-detail-updated"), " ");
    ɵɵadvance(3);
    ɵɵproperty("value", entry_r4.data.input);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "customer.history-customer-added-to-group", ɵɵpureFunction1(4, _c1, entry_r4.data.groupName)), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "customer.history-customer-removed-from-group", ɵɵpureFunction1(4, _c1, entry_r4.data.groupName)), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "div", 18)(4, "div", 20);
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "customer.history-customer-address-created"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(entry_r4.data.address);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "div", 18)(4, "div", 20);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "vdr-history-entry-detail");
    ɵɵelement(7, "vdr-object-tree", 19);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "customer.history-customer-address-updated"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(entry_r4.data.address);
    ɵɵadvance(2);
    ɵɵproperty("value", entry_r4.data.input);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "div", 20);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "customer.history-customer-address-deleted"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(entry_r4.data.address);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "customer.history-customer-password-updated"), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "customer.history-customer-password-reset-requested"), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "customer.history-customer-password-reset-verified"), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementStart(4, "vdr-history-entry-detail")(5, "vdr-labeled-data", 21);
    ɵɵpipe(6, "translate");
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "vdr-labeled-data", 21);
    ɵɵpipe(9, "translate");
    ɵɵtext(10);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "customer.history-customer-email-update-requested"), " ");
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(6, 7, "customer.old-email-address"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", entry_r4.data.oldEmailAddress, " ");
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(9, 9, "customer.new-email-address"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", entry_r4.data.newEmailAddress, " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementStart(4, "vdr-history-entry-detail")(5, "vdr-labeled-data", 21);
    ɵɵpipe(6, "translate");
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "vdr-labeled-data", 21);
    ɵɵpipe(9, "translate");
    ɵɵtext(10);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "customer.history-customer-email-update-verified"), " ");
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(6, 7, "customer.old-email-address"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", entry_r4.data.oldEmailAddress, " ");
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(9, 9, "customer.new-email-address"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", entry_r4.data.newEmailAddress, " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18)(2, "div", 22);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "div", 23);
    ɵɵelementStart(5, "vdr-dropdown")(6, "button", 24);
    ɵɵelement(7, "clr-icon", 25);
    ɵɵelementEnd();
    ɵɵelementStart(8, "vdr-dropdown-menu", 26)(9, "button", 27);
    ɵɵpipe(10, "hasPermission");
    ɵɵlistener("click", function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_15_Template_button_click_9_listener() {
      ɵɵrestoreView(_r7);
      const entry_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateNote.emit(entry_r4));
    });
    ɵɵelement(11, "clr-icon", 28);
    ɵɵtext(12);
    ɵɵpipe(13, "translate");
    ɵɵelementEnd();
    ɵɵelement(14, "div", 29);
    ɵɵelementStart(15, "button", 27);
    ɵɵpipe(16, "hasPermission");
    ɵɵlistener("click", function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_15_Template_button_click_15_listener() {
      ɵɵrestoreView(_r7);
      const entry_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.deleteNote.emit(entry_r4));
    });
    ɵɵelement(17, "clr-icon", 30);
    ɵɵtext(18);
    ɵɵpipe(19, "translate");
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", entry_r4.data.note, " ");
    ɵɵadvance(6);
    ɵɵproperty("disabled", !ɵɵpipeBind1(10, 5, "UpdateCustomer"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 7, "common.edit"), " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", !ɵɵpipeBind1(16, 9, "UpdateCustomer"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 11, "common.delete"), " ");
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_16_vdr_history_entry_detail_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-history-entry-detail");
    ɵɵelement(1, "vdr-object-tree", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("value", entry_r4.data);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_16_vdr_history_entry_detail_4_Template, 2, 1, "vdr-history-entry-detail", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, entry_r4.type), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entry_r4.data);
  }
}
function CustomerHistoryComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-timeline-entry", 12);
    ɵɵelementContainerStart(1, 13);
    ɵɵtemplate(2, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_2_Template, 7, 5, "ng-container", 14)(3, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_3_Template, 7, 5, "ng-container", 14)(4, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_4_Template, 6, 4, "ng-container", 14)(5, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_5_Template, 3, 6, "ng-container", 14)(6, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_6_Template, 3, 6, "ng-container", 14)(7, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_7_Template, 6, 4, "ng-container", 14)(8, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_8_Template, 8, 5, "ng-container", 14)(9, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_9_Template, 5, 4, "ng-container", 14)(10, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_10_Template, 3, 3, "ng-container", 14)(11, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_11_Template, 3, 3, "ng-container", 14)(12, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_12_Template, 3, 3, "ng-container", 14)(13, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_13_Template, 11, 11, "ng-container", 14)(14, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_14_Template, 11, 11, "ng-container", 14)(15, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_15_Template, 20, 13, "ng-container", 14)(16, CustomerHistoryComponent_ng_container_2_ng_template_2_ng_container_16_Template, 5, 4, "ng-container", 15);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("displayType", ctx_r1.getDisplayType(entry_r4))("iconShape", ctx_r1.getTimelineIcon(entry_r4))("createdAt", entry_r4.createdAt)("name", ctx_r1.getName(entry_r4))("featured", ctx_r1.isFeatured(entry_r4));
    ɵɵadvance();
    ɵɵproperty("ngSwitch", entry_r4.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_REGISTERED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_VERIFIED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_DETAIL_UPDATED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_ADDED_TO_GROUP);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_REMOVED_FROM_GROUP);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_ADDRESS_CREATED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_ADDRESS_UPDATED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_ADDRESS_DELETED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_PASSWORD_UPDATED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_PASSWORD_RESET_REQUESTED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_PASSWORD_RESET_VERIFIED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_EMAIL_UPDATE_REQUESTED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_EMAIL_UPDATE_VERIFIED);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.type.CUSTOMER_NOTE);
  }
}
function CustomerHistoryComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CustomerHistoryComponent_ng_container_2_vdr_customer_history_entry_host_1_Template, 1, 3, "vdr-customer-history-entry-host", 10)(2, CustomerHistoryComponent_ng_container_2_ng_template_2_Template, 17, 20, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const defaultComponents_r8 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasCustomComponent(entry_r4.type))("ngIfElse", defaultComponents_r8);
  }
}
var _c5 = () => ["UpdateCustomer"];
var _c6 = (a0) => ["/orders", a0];
function CustomerDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function CustomerDetailComponent_button_5_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", !(ctx_r1.addressDefaultsUpdated || ctx_r1.detailForm.valid && ctx_r1.detailForm.dirty));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function CustomerDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function CustomerDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", !(ctx_r1.addressDefaultsUpdated || ctx_r1.detailForm.valid && ctx_r1.detailForm.dirty));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function CustomerDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CustomerDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 23);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", "UpdateCustomer");
  }
}
function CustomerDetailComponent_vdr_card_12_vdr_labeled_data_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-labeled-data", 26);
    ɵɵpipe(1, "translate");
    ɵɵelementStart(2, "time", 27);
    ɵɵtext(3);
    ɵɵpipe(4, "timeAgo");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const lastLogin_r4 = ctx.ngIf;
    ɵɵproperty("label", ɵɵpipeBind1(1, 3, "customer.last-login"));
    ɵɵadvance(2);
    ɵɵproperty("dateTime", lastLogin_r4);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 5, lastLogin_r4));
  }
}
function CustomerDetailComponent_vdr_card_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-customer-status-label", 24);
    ɵɵtemplate(2, CustomerDetailComponent_vdr_card_12_vdr_labeled_data_2_Template, 5, 7, "vdr-labeled-data", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customer_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("customer", customer_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", customer_r5.user == null ? null : customer_r5.user.lastLogin);
  }
}
function CustomerDetailComponent_vdr_card_14_div_2_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-chip", 32);
    ɵɵlistener("iconClick", function CustomerDetailComponent_vdr_card_14_div_2_vdr_chip_1_Template_vdr_chip_iconClick_0_listener() {
      const group_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.removeFromGroup(group_r7));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    ɵɵproperty("colorFrom", group_r7.id);
    ɵɵadvance();
    ɵɵtextInterpolate(group_r7.name);
  }
}
function CustomerDetailComponent_vdr_card_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CustomerDetailComponent_vdr_card_14_div_2_vdr_chip_1_Template, 2, 2, "vdr-chip", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const groups_r8 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", groups_r8);
  }
}
function CustomerDetailComponent_vdr_card_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 33);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "customer.not-a-member-of-any-groups"), " ");
  }
}
function CustomerDetailComponent_vdr_card_14_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 34);
    ɵɵlistener("click", function CustomerDetailComponent_vdr_card_14_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.addToGroup());
    });
    ɵɵelement(1, "clr-icon", 35);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "customer.add-customer-to-group"), " ");
  }
}
function CustomerDetailComponent_vdr_card_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 28);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, CustomerDetailComponent_vdr_card_14_div_2_Template, 2, 1, "div", 29)(3, CustomerDetailComponent_vdr_card_14_ng_template_3_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementStart(5, "div");
    ɵɵtemplate(6, CustomerDetailComponent_vdr_card_14_button_6_Template, 4, 3, "button", 30);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const groups_r8 = ctx.ngIf;
    const noGroups_r10 = ɵɵreference(4);
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "customer.customer-groups"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", groups_r8.length)("ngIfElse", noGroups_r10);
    ɵɵadvance(4);
    ɵɵproperty("vdrIfPermissions", "UpdateCustomerGroup");
  }
}
function CustomerDetailComponent_vdr_page_entity_info_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-page-entity-info", 36);
  }
  if (rf & 2) {
    const entity_r11 = ctx.ngIf;
    ɵɵproperty("entity", entity_r11);
  }
}
function CustomerDetailComponent_vdr_form_field_44_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-form-field", 37);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "input", 38);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("label", ɵɵpipeBind1(1, 1, "customer.password"));
  }
}
function CustomerDetailComponent_vdr_card_46_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 39);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 40);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customer.customFields"));
  }
}
function CustomerDetailComponent_ng_container_48_vdr_address_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-address-card", 55);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "hasPermission");
    ɵɵlistener("setAsDefaultBilling", function CustomerDetailComponent_ng_container_48_vdr_address_card_4_Template_vdr_address_card_setAsDefaultBilling_0_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setDefaultBillingAddressId($event));
    })("setAsDefaultShipping", function CustomerDetailComponent_ng_container_48_vdr_address_card_4_Template_vdr_address_card_setAsDefaultShipping_0_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setDefaultShippingAddressId($event));
    })("deleteAddress", function CustomerDetailComponent_ng_container_48_vdr_address_card_4_Template_vdr_address_card_deleteAddress_0_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleDeleteAddress($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const addressForm_r14 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("to-delete", ctx_r1.addressesToDeleteIds.has(addressForm_r14.value.id));
    ɵɵproperty("availableCountries", ɵɵpipeBind1(1, 8, ctx_r1.availableCountries$))("isDefaultBilling", ctx_r1.defaultBillingAddressId === addressForm_r14.value.id)("isDefaultShipping", ctx_r1.defaultShippingAddressId === addressForm_r14.value.id)("addressForm", addressForm_r14)("customFields", ctx_r1.addressCustomFields)("editable", ɵɵpipeBind1(2, 10, ɵɵpureFunction0(12, _c5)) && !ctx_r1.addressesToDeleteIds.has(addressForm_r14.value.id));
  }
}
function CustomerDetailComponent_ng_container_48_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 56);
    ɵɵlistener("click", function CustomerDetailComponent_ng_container_48_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.addAddress());
    });
    ɵɵelement(1, "clr-icon", 35);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "customer.create-new-address"), " ");
  }
}
function CustomerDetailComponent_ng_container_48_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const order_r16 = ctx.item;
    ɵɵtextInterpolate1(" ", order_r16.id, " ");
  }
}
function CustomerDetailComponent_ng_container_48_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const order_r17 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, order_r17.createdAt, "short"), " ");
  }
}
function CustomerDetailComponent_ng_container_48_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 57)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 58);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r18 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c6, order_r18.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(order_r18.code);
  }
}
function CustomerDetailComponent_ng_container_48_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r19 = ctx.item;
    ɵɵadvance();
    ɵɵtextInterpolate(order_r19.type);
  }
}
function CustomerDetailComponent_ng_container_48_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-order-state-label", 59);
  }
  if (rf & 2) {
    const order_r20 = ctx.item;
    ɵɵproperty("state", order_r20.state);
  }
}
function CustomerDetailComponent_ng_container_48_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const order_r21 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, order_r21.totalWithTax, order_r21.currencyCode), " ");
  }
}
function CustomerDetailComponent_ng_container_48_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "timeAgo");
  }
  if (rf & 2) {
    const order_r22 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, order_r22.updatedAt), " ");
  }
}
function CustomerDetailComponent_ng_container_48_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const order_r23 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, order_r23.orderPlacedAt, "short"), " ");
  }
}
function CustomerDetailComponent_ng_container_48_vdr_dt2_custom_field_column_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 60);
  }
  if (rf & 2) {
    const customField_r24 = ctx.$implicit;
    ɵɵproperty("customField", customField_r24);
  }
}
function CustomerDetailComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "vdr-card", 28);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "div", 8);
    ɵɵtemplate(4, CustomerDetailComponent_ng_container_48_vdr_address_card_4_Template, 3, 13, "vdr-address-card", 41);
    ɵɵelementEnd();
    ɵɵtemplate(5, CustomerDetailComponent_ng_container_48_button_5_Template, 4, 3, "button", 42);
    ɵɵelementEnd();
    ɵɵelementStart(6, "vdr-card", 43);
    ɵɵpipe(7, "translate");
    ɵɵelementStart(8, "vdr-data-table-2", 44);
    ɵɵpipe(9, "async");
    ɵɵpipe(10, "async");
    ɵɵpipe(11, "translate");
    ɵɵlistener("itemsPerPageChange", function CustomerDetailComponent_ng_container_48_Template_vdr_data_table_2_itemsPerPageChange_8_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setOrderItemsPerPage($event));
    })("pageChange", function CustomerDetailComponent_ng_container_48_Template_vdr_data_table_2_pageChange_8_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setOrderCurrentPage($event));
    });
    ɵɵelementStart(12, "vdr-dt2-column", 45);
    ɵɵpipe(13, "translate");
    ɵɵtemplate(14, CustomerDetailComponent_ng_container_48_ng_template_14_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(15, "vdr-dt2-column", 46);
    ɵɵpipe(16, "translate");
    ɵɵtemplate(17, CustomerDetailComponent_ng_container_48_ng_template_17_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(18, "vdr-dt2-column", 47);
    ɵɵpipe(19, "translate");
    ɵɵtemplate(20, CustomerDetailComponent_ng_container_48_ng_template_20_Template, 4, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(21, "vdr-dt2-column", 48);
    ɵɵpipe(22, "translate");
    ɵɵtemplate(23, CustomerDetailComponent_ng_container_48_ng_template_23_Template, 2, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(24, "vdr-dt2-column", 49);
    ɵɵpipe(25, "translate");
    ɵɵtemplate(26, CustomerDetailComponent_ng_container_48_ng_template_26_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(27, "vdr-dt2-column", 50);
    ɵɵpipe(28, "translate");
    ɵɵtemplate(29, CustomerDetailComponent_ng_container_48_ng_template_29_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(30, "vdr-dt2-column", 51);
    ɵɵpipe(31, "translate");
    ɵɵtemplate(32, CustomerDetailComponent_ng_container_48_ng_template_32_Template, 2, 3, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(33, "vdr-dt2-column", 52);
    ɵɵpipe(34, "translate");
    ɵɵtemplate(35, CustomerDetailComponent_ng_container_48_ng_template_35_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵtemplate(36, CustomerDetailComponent_ng_container_48_vdr_dt2_custom_field_column_36_Template, 1, 1, "vdr-dt2-custom-field-column", 53);
    ɵɵelementEnd()();
    ɵɵelementStart(37, "vdr-card", 28);
    ɵɵpipe(38, "translate");
    ɵɵelementStart(39, "vdr-customer-history", 54);
    ɵɵpipe(40, "async");
    ɵɵpipe(41, "async");
    ɵɵlistener("addNote", function CustomerDetailComponent_ng_container_48_Template_vdr_customer_history_addNote_39_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addNoteToCustomer($event));
    })("updateNote", function CustomerDetailComponent_ng_container_48_Template_vdr_customer_history_updateNote_39_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateNote($event));
    })("deleteNote", function CustomerDetailComponent_ng_container_48_Template_vdr_customer_history_deleteNote_39_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.deleteNote($event));
    });
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(2, 26, "customer.addresses"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r1.getAddressFormControls());
    ɵɵadvance();
    ɵɵproperty("vdrIfPermissions", "UpdateCustomer");
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(7, 28, "customer.orders"))("paddingX", false);
    ɵɵadvance(2);
    ɵɵproperty("items", ɵɵpipeBind1(9, 30, ctx_r1.orders$))("itemsPerPage", ctx_r1.ordersPerPage)("totalItems", ɵɵpipeBind1(10, 32, ctx_r1.ordersCount$))("currentPage", ctx_r1.currentOrdersPage)("emptyStateLabel", ɵɵpipeBind1(11, 34, "customer.no-orders-placed"));
    ɵɵadvance(4);
    ɵɵproperty("heading", ɵɵpipeBind1(13, 36, "common.id"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(16, 38, "common.created-at"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(19, 40, "common.code"))("optional", false);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(22, 42, "order.order-type"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(25, 44, "order.state"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(28, 46, "order.total"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(31, 48, "common.updated-at"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(34, 50, "order.placed-at"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r1.customFields);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(38, 52, "customer.customer-history"));
    ɵɵadvance(2);
    ɵɵproperty("customer", ɵɵpipeBind1(40, 54, ctx_r1.entity$))("history", ɵɵpipeBind1(41, 56, ctx_r1.history$));
  }
}
function CustomerGroupDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function CustomerGroupDetailComponent_button_5_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", !(ctx_r1.detailForm.valid && ctx_r1.detailForm.dirty));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function CustomerGroupDetailComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function CustomerGroupDetailComponent_ng_template_7_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", !(ctx_r1.detailForm.valid && ctx_r1.detailForm.dirty));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function CustomerGroupDetailComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CustomerGroupDetailComponent_ng_template_7_button_0_Template, 3, 4, "button", 11);
  }
  if (rf & 2) {
    ɵɵproperty("vdrIfPermissions", "UpdateCustomer");
  }
}
function CustomerGroupDetailComponent_vdr_card_13_Template(rf, ctx) {
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
function CustomerGroupDetailComponent_vdr_card_21_Template(rf, ctx) {
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
var _c7 = () => ["CreateCustomerGroup", "UpdateCustomerGroup"];
function CustomerGroupDetailDialogComponent_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "customer.update-customer-group"));
  }
}
function CustomerGroupDetailDialogComponent_ng_template_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "customer.create-customer-group"));
  }
}
function CustomerGroupDetailDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CustomerGroupDetailDialogComponent_ng_template_0_span_0_Template, 3, 3, "span", 6)(1, CustomerGroupDetailDialogComponent_ng_template_0_span_1_Template, 3, 3, "span", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.group.id);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.group.id);
  }
}
function CustomerGroupDetailDialogComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 7)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelement(4, "vdr-tabbed-custom-fields", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r0.customFields)("customFieldsFormGroup", ctx_r0.form.get("customFields"));
  }
}
function CustomerGroupDetailDialogComponent_ng_template_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "customer.update-customer-group"));
  }
}
function CustomerGroupDetailDialogComponent_ng_template_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "customer.create-customer-group"));
  }
}
function CustomerGroupDetailDialogComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function CustomerGroupDetailDialogComponent_ng_template_7_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 10);
    ɵɵlistener("click", function CustomerGroupDetailDialogComponent_ng_template_7_Template_button_click_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.save());
    });
    ɵɵtemplate(4, CustomerGroupDetailDialogComponent_ng_template_7_span_4_Template, 3, 3, "span", 6)(5, CustomerGroupDetailDialogComponent_ng_template_7_span_5_Template, 3, 3, "span", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 4, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r0.form.valid);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.group.id);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.group.id);
  }
}
var _c8 = () => ["./", "create"];
var _c9 = (a0) => ["./", a0];
var _c10 = (a0) => ({
  contents: a0
});
function CustomerGroupListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 5);
    ɵɵelement(1, "clr-icon", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c8));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "customer.create-new-customer-group"), " ");
  }
}
function CustomerGroupListComponent_ng_template_9_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const customerGroup_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", customerGroup_r3.id, " ");
  }
}
function CustomerGroupListComponent_ng_template_9_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const customerGroup_r4 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, customerGroup_r4.createdAt, "short"), " ");
  }
}
function CustomerGroupListComponent_ng_template_9_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const customerGroup_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, customerGroup_r5.updatedAt, "short"), " ");
  }
}
function CustomerGroupListComponent_ng_template_9_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 16)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customerGroup_r6 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c9, customerGroup_r6.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(customerGroup_r6.name);
  }
}
function CustomerGroupListComponent_ng_template_9_vdr_dt2_custom_field_column_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 18);
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("customField", field_r7)("sorts", ctx_r1.sorts);
  }
}
function CustomerGroupListComponent_ng_template_9_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 19)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelement(4, "clr-icon", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customerGroup_r8 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(6, _c9, ɵɵpureFunction1(4, _c10, customerGroup_r8.id)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "customer.view-group-members"));
  }
}
function CustomerGroupListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-data-table-2", 7);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵpipe(5, "async");
    ɵɵlistener("pageChange", function CustomerGroupListComponent_ng_template_9_Template_vdr_data_table_2_pageChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setPageNumber($event));
    })("itemsPerPageChange", function CustomerGroupListComponent_ng_template_9_Template_vdr_data_table_2_itemsPerPageChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setItemsPerPage($event));
    })("visibleColumnsChange", function CustomerGroupListComponent_ng_template_9_Template_vdr_data_table_2_visibleColumnsChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setVisibleColumns($event));
    });
    ɵɵelement(6, "vdr-bulk-action-menu", 8)(7, "vdr-dt2-search", 9);
    ɵɵpipe(8, "translate");
    ɵɵelementStart(9, "vdr-dt2-column", 10);
    ɵɵpipe(10, "translate");
    ɵɵtemplate(11, CustomerGroupListComponent_ng_template_9_ng_template_11_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(12, "vdr-dt2-column", 11);
    ɵɵpipe(13, "translate");
    ɵɵtemplate(14, CustomerGroupListComponent_ng_template_9_ng_template_14_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(15, "vdr-dt2-column", 12);
    ɵɵpipe(16, "translate");
    ɵɵtemplate(17, CustomerGroupListComponent_ng_template_9_ng_template_17_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(18, "vdr-dt2-column", 13);
    ɵɵpipe(19, "translate");
    ɵɵtemplate(20, CustomerGroupListComponent_ng_template_9_ng_template_20_Template, 4, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵtemplate(21, CustomerGroupListComponent_ng_template_9_vdr_dt2_custom_field_column_21_Template, 1, 2, "vdr-dt2-custom-field-column", 14);
    ɵɵelementStart(22, "vdr-dt2-column", 15);
    ɵɵpipe(23, "translate");
    ɵɵtemplate(24, CustomerGroupListComponent_ng_template_9_ng_template_24_Template, 5, 8, "ng-template");
    ɵɵelementEnd()();
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
    ɵɵproperty("ngForOf", ctx_r1.customFields);
    ɵɵadvance();
    ɵɵproperty("heading", ɵɵpipeBind1(23, 45, "common.view-contents"))("optional", false);
  }
}
function CustomerGroupListComponent_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 22);
    ɵɵlistener("click", function CustomerGroupListComponent_ng_template_10_ng_container_0_Template_button_click_1_listener() {
      const activeGroup_r10 = ɵɵrestoreView(_r9).ngIf;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.addToGroup(activeGroup_r10));
    });
    ɵɵelement(2, "clr-icon", 6);
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "vdr-customer-group-member-list", 23);
    ɵɵpipe(7, "async");
    ɵɵpipe(8, "async");
    ɵɵpipe(9, "async");
    ɵɵlistener("fetchParamsChange", function CustomerGroupListComponent_ng_template_10_ng_container_0_Template_vdr_customer_group_member_list_fetchParamsChange_6_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.fetchGroupMembers$.next($event));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const activeGroup_r10 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 5, "customer.add-customers-to-group", ɵɵpureFunction1(14, _c1, activeGroup_r10.name)));
    ɵɵadvance(2);
    ɵɵproperty("members", ɵɵpipeBind1(7, 8, ctx_r1.members$))("route", ctx_r1.route)("totalItems", ɵɵpipeBind1(8, 10, ctx_r1.membersTotal$))("activeGroup", ɵɵpipeBind1(9, 12, ctx_r1.activeGroup$));
  }
}
function CustomerGroupListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CustomerGroupListComponent_ng_template_10_ng_container_0_Template, 10, 16, "ng-container", 21);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r1.activeGroup$));
  }
}
var _c11 = () => ["./create"];
function CustomerListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 12);
    ɵɵelement(1, "clr-icon", 13);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c11));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "customer.create-new-customer"), " ");
  }
}
function CustomerListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const customer_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", customer_r1.id, " ");
  }
}
function CustomerListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const customer_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, customer_r2.createdAt, "short"), " ");
  }
}
function CustomerListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const customer_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, customer_r3.updatedAt, "short"), " ");
  }
}
function CustomerListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customer_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(4, _c9, customer_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate3(" ", customer_r4.title, " ", customer_r4.firstName, " ", customer_r4.lastName, " ");
  }
}
function CustomerListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-customer-status-label", 16);
  }
  if (rf & 2) {
    const customer_r5 = ctx.item;
    ɵɵproperty("customer", customer_r5);
  }
}
function CustomerListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const customer_r6 = ctx.item;
    ɵɵtextInterpolate1(" ", customer_r6.emailAddress, " ");
  }
}
function CustomerListComponent_vdr_dt2_custom_field_column_33_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 17);
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("customField", field_r7)("sorts", ctx_r7.sorts);
  }
}
var CustomerStatusLabelComponent = class _CustomerStatusLabelComponent {
  static {
    this.ɵfac = function CustomerStatusLabelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerStatusLabelComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerStatusLabelComponent,
      selectors: [["vdr-customer-status-label"]],
      inputs: {
        customer: "customer"
      },
      standalone: false,
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["shape", "check-circle", 1, "verified-user-icon"], ["shape", "check-circle", 1, "registered-user-icon"]],
      template: function CustomerStatusLabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CustomerStatusLabelComponent_vdr_chip_0_Template, 3, 2, "vdr-chip", 0)(1, CustomerStatusLabelComponent_vdr_chip_1_Template, 3, 3, "vdr-chip", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.customer.user == null ? null : ctx.customer.user.id);
          ɵɵadvance();
          ɵɵproperty("ngIf", !(ctx.customer.user == null ? null : ctx.customer.user.id));
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, ChipComponent, TranslatePipe],
      styles: [".registered-user-icon[_ngcontent-%COMP%]{color:var(--color-grey-300)}.verified-user-icon[_ngcontent-%COMP%]{color:var(--color-success-500)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerStatusLabelComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-status-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-chip *ngIf="customer.user?.id">
    <ng-container *ngIf="customer.user?.verified">
        <clr-icon shape="check-circle" class="verified-user-icon"></clr-icon>
        {{ 'customer.verified' | translate }}
    </ng-container>
    <ng-container *ngIf="!customer.user?.verified">
        <clr-icon shape="check-circle" class="registered-user-icon"></clr-icon>
        {{ 'customer.registered' | translate }}
    </ng-container>
</vdr-chip>
<vdr-chip *ngIf="!customer.user?.id">{{ 'customer.guest' | translate }}</vdr-chip>
`,
      styles: [".registered-user-icon{color:var(--color-grey-300)}.verified-user-icon{color:var(--color-success-500)}\n"]
    }]
  }], null, {
    customer: [{
      type: Input
    }]
  });
})();
var CustomerGroupMemberListComponent = class _CustomerGroupMemberListComponent {
  constructor(router, dataService) {
    this.router = router;
    this.dataService = dataService;
    this.selectedMemberIds = [];
    this.selectionChange = new EventEmitter();
    this.fetchParamsChange = new EventEmitter();
    this.filterTermControl = new FormControl("");
    this.selectionManager = new SelectionManager({
      multiSelect: true,
      itemsAreEqual: (a, b) => a.id === b.id,
      additiveMode: true
    });
    this.refresh$ = new BehaviorSubject(true);
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.membersCurrentPage$ = this.route.paramMap.pipe(map((qpm) => qpm.get("membersPage")), map((page) => !page ? 1 : +page), startWith(1), distinctUntilChanged());
    this.membersItemsPerPage$ = this.route.paramMap.pipe(map((qpm) => qpm.get("membersPerPage")), map((perPage) => !perPage ? 10 : +perPage), startWith(10), distinctUntilChanged());
    const filterTerm$ = this.filterTermControl.valueChanges.pipe(debounceTime(250), tap(() => this.setContentsPageNumber(1)), startWith(""));
    combineLatest(this.membersCurrentPage$, this.membersItemsPerPage$, filterTerm$, this.refresh$).pipe(takeUntil(this.destroy$)).subscribe(([currentPage, itemsPerPage, filterTerm]) => {
      const take2 = itemsPerPage;
      const skip = (currentPage - 1) * itemsPerPage;
      this.fetchParamsChange.emit({
        filterTerm: filterTerm ?? "",
        skip,
        take: take2
      });
    });
    this.selectionManager.setCurrentItems(this.members?.filter((m) => this.selectedMemberIds.includes(m.id)) ?? []);
    this.selectionManager.selectionChanges$.pipe(takeUntil(this.destroy$)).subscribe((selection) => {
      this.selectionChange.emit(selection.map((s) => s.id));
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setContentsPageNumber(page) {
    this.setParam("membersPage", page);
  }
  setContentsItemsPerPage(perPage) {
    this.setParam("membersPerPage", perPage);
  }
  refresh() {
    this.refresh$.next(true);
  }
  setParam(key, value) {
    this.router.navigate(["./", __spreadProps(__spreadValues({}, this.route.snapshot.params), {
      [key]: value
    })], {
      relativeTo: this.route,
      queryParamsHandling: "merge"
    });
  }
  static {
    this.ɵfac = function CustomerGroupMemberListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerGroupMemberListComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerGroupMemberListComponent,
      selectors: [["vdr-customer-group-member-list"]],
      inputs: {
        locationId: "locationId",
        members: "members",
        totalItems: "totalItems",
        route: "route",
        selectedMemberIds: "selectedMemberIds",
        activeGroup: "activeGroup"
      },
      outputs: {
        selectionChange: "selectionChange",
        fetchParamsChange: "fetchParamsChange"
      },
      standalone: false,
      decls: 24,
      vars: 39,
      consts: [[3, "pageChange", "itemsPerPageChange", "id", "items", "itemsPerPage", "totalItems", "currentPage"], [3, "locationId", "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "updated-at", 3, "heading", "hiddenByDefault"], ["id", "name", 3, "heading", "optional"], ["id", "status", 3, "heading", "hiddenByDefault"], ["id", "email-address", 3, "heading"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "customer"]],
      template: function CustomerGroupMemberListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-data-table-2", 0);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵlistener("pageChange", function CustomerGroupMemberListComponent_Template_vdr_data_table_2_pageChange_0_listener($event) {
            return ctx.setContentsPageNumber($event);
          })("itemsPerPageChange", function CustomerGroupMemberListComponent_Template_vdr_data_table_2_itemsPerPageChange_0_listener($event) {
            return ctx.setContentsItemsPerPage($event);
          });
          ɵɵelement(3, "vdr-bulk-action-menu", 1)(4, "vdr-dt2-search", 2);
          ɵɵpipe(5, "translate");
          ɵɵelementStart(6, "vdr-dt2-column", 3);
          ɵɵpipe(7, "translate");
          ɵɵtemplate(8, CustomerGroupMemberListComponent_ng_template_8_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(9, "vdr-dt2-column", 4);
          ɵɵpipe(10, "translate");
          ɵɵtemplate(11, CustomerGroupMemberListComponent_ng_template_11_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(12, "vdr-dt2-column", 5);
          ɵɵpipe(13, "translate");
          ɵɵtemplate(14, CustomerGroupMemberListComponent_ng_template_14_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-dt2-column", 6);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, CustomerGroupMemberListComponent_ng_template_17_Template, 4, 6, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 7);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, CustomerGroupMemberListComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 8);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, CustomerGroupMemberListComponent_ng_template_23_Template, 1, 1, "ng-template");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("id", ctx.locationId)("items", ctx.members)("itemsPerPage", ɵɵpipeBind1(1, 21, ctx.membersItemsPerPage$))("totalItems", ctx.totalItems)("currentPage", ɵɵpipeBind1(2, 23, ctx.membersCurrentPage$));
          ɵɵadvance(3);
          ɵɵproperty("locationId", ctx.locationId)("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.filterTermControl)("searchTermPlaceholder", ɵɵpipeBind1(5, 25, "customer.search-customers-by-email"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(7, 27, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(10, 29, "common.created-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(13, 31, "common.updated-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 33, "customer.name"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 35, "common.status"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 37, "customer.email-address"));
        }
      },
      dependencies: [ClrIconCustomTag, RouterLink, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, CustomerStatusLabelComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerGroupMemberListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-group-member-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-data-table-2
    [id]="locationId"
    [items]="members"
    [itemsPerPage]="membersItemsPerPage$ | async"
    [totalItems]="totalItems"
    [currentPage]="membersCurrentPage$ | async"
    (pageChange)="setContentsPageNumber($event)"
    (itemsPerPageChange)="setContentsItemsPerPage($event)"
>
    <vdr-bulk-action-menu
        [locationId]="locationId"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    ></vdr-bulk-action-menu>
    <vdr-dt2-search
        [searchTermControl]="filterTermControl"
        [searchTermPlaceholder]="'customer.search-customers-by-email' | translate"
    ></vdr-dt2-search>
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-customerGroup="item">
            {{ customerGroup.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.created-at' | translate" id="created-at" [hiddenByDefault]="true">
        <ng-template let-customer="item">
            {{ customer.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.updated-at' | translate" id="updated-at" [hiddenByDefault]="true">
        <ng-template let-customer="item">
            {{ customer.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'customer.name' | translate" id="name" [optional]="false">
        <ng-template let-customer="item">
            <a class="button-ghost" [routerLink]="['/customer/customers', customer.id]"
                ><span> {{ customer.title }} {{ customer.firstName }} {{ customer.lastName }} </span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.status' | translate" id="status" [hiddenByDefault]="true">
        <ng-template let-customer="item">
            <vdr-customer-status-label [customer]="customer" />
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'customer.email-address' | translate" id="email-address">
        <ng-template let-customer="item">
            {{ customer.emailAddress }}
        </ng-template>
    </vdr-dt2-column>
</vdr-data-table-2>
`
    }]
  }], () => [{
    type: Router
  }, {
    type: DataService
  }], {
    locationId: [{
      type: Input
    }],
    members: [{
      type: Input
    }],
    totalItems: [{
      type: Input
    }],
    route: [{
      type: Input
    }],
    selectedMemberIds: [{
      type: Input
    }],
    activeGroup: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    fetchParamsChange: [{
      type: Output
    }]
  });
})();
var AddCustomerToGroupDialogComponent = class _AddCustomerToGroupDialogComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.selectedCustomerIds = [];
    this.fetchGroupMembers$ = new BehaviorSubject({
      skip: 0,
      take: 10,
      filterTerm: ""
    });
  }
  ngOnInit() {
    const customerResult$ = this.fetchGroupMembers$.pipe(switchMap(({
      skip,
      take: take2,
      filterTerm
    }) => this.dataService.customer.getCustomerList(take2, skip, filterTerm).mapStream((res) => res.customers)));
    this.customers$ = customerResult$.pipe(map((res) => res.items));
    this.customersTotal$ = customerResult$.pipe(map((res) => res.totalItems));
  }
  cancel() {
    this.resolveWith();
  }
  add() {
    this.resolveWith(this.selectedCustomerIds);
  }
  static {
    this.ɵfac = function AddCustomerToGroupDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddCustomerToGroupDialogComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddCustomerToGroupDialogComponent,
      selectors: [["vdr-add-customer-to-group-dialog"]],
      standalone: false,
      decls: 5,
      vars: 8,
      consts: [["vdrDialogTitle", ""], ["locationId", "customer-group-members-picker-list", 3, "fetchParamsChange", "selectionChange", "members", "totalItems", "route", "selectedMemberIds"], ["vdrDialogButtons", ""], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function AddCustomerToGroupDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AddCustomerToGroupDialogComponent_ng_template_0_Template, 2, 6, "ng-template", 0);
          ɵɵelementStart(1, "vdr-customer-group-member-list", 1);
          ɵɵpipe(2, "async");
          ɵɵpipe(3, "async");
          ɵɵlistener("fetchParamsChange", function AddCustomerToGroupDialogComponent_Template_vdr_customer_group_member_list_fetchParamsChange_1_listener($event) {
            return ctx.fetchGroupMembers$.next($event);
          })("selectionChange", function AddCustomerToGroupDialogComponent_Template_vdr_customer_group_member_list_selectionChange_1_listener($event) {
            return ctx.selectedCustomerIds = $event;
          });
          ɵɵelementEnd();
          ɵɵtemplate(4, AddCustomerToGroupDialogComponent_ng_template_4_Template, 6, 10, "ng-template", 2);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("members", ɵɵpipeBind1(2, 4, ctx.customers$))("totalItems", ɵɵpipeBind1(3, 6, ctx.customersTotal$))("route", ctx.route)("selectedMemberIds", ctx.selectedCustomerIds);
        }
      },
      dependencies: [DialogButtonsDirective, DialogTitleDirective, CustomerGroupMemberListComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCustomerToGroupDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-add-customer-to-group-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    {{ 'customer.add-customers-to-group-with-name' | translate: {groupName: group.name} }}
</ng-template>

<vdr-customer-group-member-list
    locationId="customer-group-members-picker-list"
    [members]="customers$ | async"
    [totalItems]="customersTotal$ | async"
    [route]="route"
    [selectedMemberIds]="selectedCustomerIds"
    (fetchParamsChange)="fetchGroupMembers$.next($event)"
    (selectionChange)="selectedCustomerIds = $event"
/>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="add()" [disabled]="!selectedCustomerIds.length" class="btn btn-primary">
        {{ 'customer.add-customers-to-group-with-count' | translate: {count: selectedCustomerIds.length} }}
    </button>
</ng-template>
`
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var AddressDetailDialogComponent = class _AddressDetailDialogComponent {
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.availableCountries = [];
  }
  ngOnInit() {
    this.addressForm.valueChanges.subscribe(() => this.changeDetector.markForCheck());
  }
  cancel() {
    this.resolveWith();
  }
  save() {
    this.resolveWith(this.addressForm);
  }
  static {
    this.ɵfac = function AddressDetailDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressDetailDialogComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddressDetailDialogComponent,
      selectors: [["vdr-address-detail-dialog"]],
      standalone: false,
      decls: 3,
      vars: 3,
      consts: [["vdrDialogTitle", ""], [3, "formGroup", "availableCountries", "customFields"], ["vdrDialogButtons", ""], [4, "ngIf"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function AddressDetailDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AddressDetailDialogComponent_ng_template_0_Template, 2, 2, "ng-template", 0);
          ɵɵelement(1, "vdr-address-form", 1);
          ɵɵtemplate(2, AddressDetailDialogComponent_ng_template_2_Template, 6, 7, "ng-template", 2);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.addressForm)("availableCountries", ctx.availableCountries)("customFields", ctx.customFields);
        }
      },
      dependencies: [NgIf, NgControlStatusGroup, FormGroupDirective, DialogButtonsDirective, DialogTitleDirective, AddressFormComponent, TranslatePipe],
      styles: ["clr-input-container[_ngcontent-%COMP%]{margin-bottom:12px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressDetailDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-address-detail-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    <span *ngIf="addressForm.get('streetLine1')?.value as streetLine1">{{ streetLine1 }},</span>
    <span *ngIf="addressForm.get('countryCode')?.value as countryCode"> {{ countryCode }}</span>
</ng-template>

<vdr-address-form
    [formGroup]="addressForm"
    [availableCountries]="availableCountries"
    [customFields]="customFields"
></vdr-address-form>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button
        type="submit"
        (click)="save()"
        [disabled]="!addressForm.valid || !addressForm.touched"
        class="btn btn-primary"
    >
        {{ 'common.update' | translate }}
    </button>
</ng-template>
`,
      styles: ["clr-input-container{margin-bottom:12px}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], null);
})();
var AddressCardComponent = class _AddressCardComponent {
  constructor(modalService, changeDetector) {
    this.modalService = modalService;
    this.changeDetector = changeDetector;
    this.availableCountries = [];
    this.editable = true;
    this.setAsDefaultShipping = new EventEmitter();
    this.setAsDefaultBilling = new EventEmitter();
    this.deleteAddress = new EventEmitter();
    this.dataDependenciesPopulated = new BehaviorSubject(false);
  }
  ngOnInit() {
    const streetLine1 = this.addressForm.get("streetLine1");
    if (!streetLine1.value) {
      this.dataDependenciesPopulated.pipe(filter((value) => value), take(1)).subscribe(() => {
        this.editAddress();
      });
    }
  }
  ngOnChanges(changes) {
    if (this.customFields != null && this.availableCountries != null) {
      this.dataDependenciesPopulated.next(true);
    }
  }
  getCountryName(countryCode) {
    if (!this.availableCountries) {
      return "";
    }
    const match = this.availableCountries.find((c) => c.code === countryCode);
    return match ? match.name : "";
  }
  setAsDefaultBillingAddress() {
    this.setAsDefaultBilling.emit(this.addressForm.value.id);
    this.addressForm.markAsDirty();
  }
  setAsDefaultShippingAddress() {
    this.setAsDefaultShipping.emit(this.addressForm.value.id);
    this.addressForm.markAsDirty();
  }
  delete() {
    this.deleteAddress.emit(this.addressForm.value.id);
    this.addressForm.markAsDirty();
  }
  editAddress() {
    this.modalService.fromComponent(AddressDetailDialogComponent, {
      locals: {
        addressForm: this.addressForm,
        customFields: this.customFields,
        availableCountries: this.availableCountries
      },
      size: "md",
      closable: true
    }).subscribe(() => {
      this.changeDetector.markForCheck();
    });
  }
  static {
    this.ɵfac = function AddressCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressCardComponent)(ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddressCardComponent,
      selectors: [["vdr-address-card"]],
      inputs: {
        addressForm: "addressForm",
        customFields: "customFields",
        availableCountries: "availableCountries",
        isDefaultBilling: "isDefaultBilling",
        isDefaultShipping: "isDefaultShipping",
        editable: "editable"
      },
      outputs: {
        setAsDefaultShipping: "setAsDefaultShipping",
        setAsDefaultBilling: "setAsDefaultBilling",
        deleteAddress: "deleteAddress"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 1,
      vars: 1,
      consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "address-title"], ["class", "street-line", 4, "ngIf"], [1, "default-controls"], ["class", "is-default p8", 4, "ngIf"], [1, "card-block"], [1, "card-text"], [3, "address"], [1, "card-footer"], [1, "address-actions"], [3, "entity"], [4, "ngIf"], [1, "street-line"], [1, "is-default", "p8"], ["shape", "truck"], ["shape", "credit-card"], [1, "button-small", 3, "click"], ["type", "button", "vdrDropdownTrigger", "", 1, "button-small"], ["shape", "ellipsis-vertical", "size", "12"], ["vdrDropdownItem", "", 3, "click", "disabled"], [1, "dropdown-divider"], ["type", "button", "vdrDropdownItem", "", 3, "click"], ["shape", "trash", 1, "is-danger"]],
      template: function AddressCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AddressCardComponent_div_0_Template, 15, 7, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.addressForm.value);
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, ChipComponent, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, FormattedAddressComponent, EntityInfoComponent, TranslatePipe],
      styles: ["[_nghost-%COMP%]{display:block;max-width:360px}clr-input-container[_ngcontent-%COMP%]{margin-bottom:12px}.defaul-controls[_ngcontent-%COMP%]{display:flex}.is-default[_ngcontent-%COMP%]{margin:0;color:var(--color-success-500)}.address-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-unit)}.address-actions[_ngcontent-%COMP%]   vdr-entity-info[_ngcontent-%COMP%]{margin-top:1px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressCardComponent, [{
    type: Component,
    args: [{
      selector: "vdr-address-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="card" *ngIf="addressForm.value as address">
    <div class="card-header">
        <div class="address-title">
            <span class="street-line" *ngIf="address.streetLine1">{{ address.streetLine1 }},</span>
            {{ address.countryCode }}
        </div>
        <div class="default-controls">
            <vdr-chip class="is-default p8" *ngIf="isDefaultShipping">
                <clr-icon shape="truck"></clr-icon>
                {{ 'customer.default-shipping-address' | translate }}
            </vdr-chip>
            <vdr-chip class="is-default p8" *ngIf="isDefaultBilling">
                <clr-icon shape="credit-card"></clr-icon>
                {{ 'customer.default-billing-address' | translate }}
            </vdr-chip>
        </div>
    </div>
    <div class="card-block">
        <div class="card-text">
            <vdr-formatted-address [address]="address"></vdr-formatted-address>
        </div>
    </div>
    <div class="card-footer">
        <div class="address-actions">
            <vdr-entity-info [entity]="address"></vdr-entity-info>
            <ng-container *ngIf="editable">
                <button class="button-small" (click)="editAddress()">
                    {{ 'common.edit' | translate }}
                </button>
                <vdr-dropdown>
                    <button type="button" class="button-small" vdrDropdownTrigger>
                        {{ 'common.more' | translate }}
                        <clr-icon shape="ellipsis-vertical" size="12"></clr-icon>
                    </button>
                    <vdr-dropdown-menu>
                        <button
                            vdrDropdownItem
                            [disabled]="isDefaultShipping"
                            (click)="setAsDefaultShippingAddress()"
                        >
                            {{ 'customer.set-as-default-shipping-address' | translate }}
                        </button>
                        <button
                            vdrDropdownItem
                            [disabled]="isDefaultBilling"
                            (click)="setAsDefaultBillingAddress()"
                        >
                            {{ 'customer.set-as-default-billing-address' | translate }}
                        </button>
                        <div class="dropdown-divider"></div>
                        <button type="button" (click)="delete()" vdrDropdownItem>
                            <clr-icon shape="trash" class="is-danger"></clr-icon>
                            {{ 'common.delete' | translate }}
                        </button>
                    </vdr-dropdown-menu>
                </vdr-dropdown>
            </ng-container>
        </div>
    </div>
</div>
`,
      styles: [":host{display:block;max-width:360px}clr-input-container{margin-bottom:12px}.defaul-controls{display:flex}.is-default{margin:0;color:var(--color-success-500)}.address-actions{display:flex;align-items:center;gap:var(--space-unit)}.address-actions vdr-entity-info{margin-top:1px}\n"]
    }]
  }], () => [{
    type: ModalService
  }, {
    type: ChangeDetectorRef
  }], {
    addressForm: [{
      type: Input
    }],
    customFields: [{
      type: Input
    }],
    availableCountries: [{
      type: Input
    }],
    isDefaultBilling: [{
      type: Input
    }],
    isDefaultShipping: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    setAsDefaultShipping: [{
      type: Output
    }],
    setAsDefaultBilling: [{
      type: Output
    }],
    deleteAddress: [{
      type: Output
    }]
  });
})();
var SelectCustomerGroupDialogComponent = class _SelectCustomerGroupDialogComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.selectedGroupIds = [];
  }
  ngOnInit() {
    this.groups$ = this.dataService.customer.getCustomerGroupList().mapStream((res) => res.customerGroups.items);
  }
  cancel() {
    this.resolveWith();
  }
  add() {
    this.resolveWith(this.selectedGroupIds);
  }
  static {
    this.ɵfac = function SelectCustomerGroupDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectCustomerGroupDialogComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SelectCustomerGroupDialogComponent,
      selectors: [["vdr-select-customer-group-dialog"]],
      standalone: false,
      decls: 6,
      vars: 8,
      consts: [["vdrDialogTitle", ""], ["appendTo", "body", "bindValue", "id", 3, "ngModelChange", "items", "addTag", "multiple", "ngModel", "clearable", "searchable"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["vdrDialogButtons", ""], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [3, "colorFrom"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function SelectCustomerGroupDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SelectCustomerGroupDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "ng-select", 1);
          ɵɵpipe(2, "async");
          ɵɵtwoWayListener("ngModelChange", function SelectCustomerGroupDialogComponent_Template_ng_select_ngModelChange_1_listener($event) {
            ɵɵtwoWayBindingSet(ctx.selectedGroupIds, $event) || (ctx.selectedGroupIds = $event);
            return $event;
          });
          ɵɵtemplate(3, SelectCustomerGroupDialogComponent_ng_template_3_Template, 4, 2, "ng-template", 2)(4, SelectCustomerGroupDialogComponent_ng_template_4_Template, 2, 2, "ng-template", 3);
          ɵɵelementEnd();
          ɵɵtemplate(5, SelectCustomerGroupDialogComponent_ng_template_5_Template, 6, 10, "ng-template", 4);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("items", ɵɵpipeBind1(2, 6, ctx.groups$))("addTag", false)("multiple", true);
          ɵɵtwoWayProperty("ngModel", ctx.selectedGroupIds);
          ɵɵproperty("clearable", true)("searchable", false);
        }
      },
      dependencies: [NgControlStatus, NgModel, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, ChipComponent, DialogButtonsDirective, DialogTitleDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectCustomerGroupDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-select-customer-group-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    {{ 'customer.add-customer-to-group' | translate }}
</ng-template>

<ng-select
    [items]="groups$ | async"
    appendTo="body"
    [addTag]="false"
    [multiple]="true"
    bindValue="id"
    [(ngModel)]="selectedGroupIds"
    [clearable]="true"
    [searchable]="false"
>
    <ng-template ng-label-tmp let-item="item" let-clear="clear">
        <span aria-hidden="true" class="ng-value-icon left" (click)="clear(item)"> × </span>
        <vdr-chip [colorFrom]="item.id">{{ item.name }}</vdr-chip>
    </ng-template>
    <ng-template ng-option-tmp let-item="item">
        <vdr-chip [colorFrom]="item.id">{{ item.name }}</vdr-chip>
    </ng-template>
</ng-select>


<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="add()" [disabled]="!selectedGroupIds.length" class="btn btn-primary">
        {{ 'customer.add-customer-to-groups-with-count' | translate: {count: selectedGroupIds.length} }}
    </button>
</ng-template>
`
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var CustomerHistoryEntryHostComponent = class _CustomerHistoryEntryHostComponent {
  constructor(historyEntryComponentService) {
    this.historyEntryComponentService = historyEntryComponentService;
    this.expandClick = new EventEmitter();
  }
  ngOnInit() {
    const componentType = this.historyEntryComponentService.getComponent(this.entry.type);
    const componentRef = this.portalRef.createComponent(componentType);
    componentRef.instance.entry = this.entry;
    componentRef.instance.customer = this.customer;
    this.instance = componentRef.instance;
    this.componentRef = componentRef;
  }
  ngOnDestroy() {
    this.componentRef?.destroy();
  }
  static {
    this.ɵfac = function CustomerHistoryEntryHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerHistoryEntryHostComponent)(ɵɵdirectiveInject(HistoryEntryComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerHistoryEntryHostComponent,
      selectors: [["vdr-customer-history-entry-host"]],
      viewQuery: function CustomerHistoryEntryHostComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.portalRef = _t.first);
        }
      },
      inputs: {
        entry: "entry",
        customer: "customer",
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
      template: function CustomerHistoryEntryHostComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-timeline-entry", 1);
          ɵɵlistener("expandClick", function CustomerHistoryEntryHostComponent_Template_vdr_timeline_entry_expandClick_0_listener() {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerHistoryEntryHostComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-history-entry-host",
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
    customer: [{
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
var CustomerHistoryComponent = class _CustomerHistoryComponent {
  constructor(historyEntryComponentService) {
    this.historyEntryComponentService = historyEntryComponentService;
    this.addNote = new EventEmitter();
    this.updateNote = new EventEmitter();
    this.deleteNote = new EventEmitter();
    this.note = "";
    this.expanded = false;
    this.type = HistoryEntryType;
  }
  hasCustomComponent(type) {
    return !!this.historyEntryComponentService.getComponent(type);
  }
  getDisplayType(entry) {
    switch (entry.type) {
      case HistoryEntryType.CUSTOMER_VERIFIED:
      case HistoryEntryType.CUSTOMER_EMAIL_UPDATE_VERIFIED:
      case HistoryEntryType.CUSTOMER_PASSWORD_RESET_VERIFIED:
        return "success";
      case HistoryEntryType.CUSTOMER_REGISTERED:
        return "muted";
      case HistoryEntryType.CUSTOMER_REMOVED_FROM_GROUP:
        return "error";
      default:
        return "default";
    }
  }
  getTimelineIcon(entry) {
    switch (entry.type) {
      case HistoryEntryType.CUSTOMER_REGISTERED:
        return "user";
      case HistoryEntryType.CUSTOMER_VERIFIED:
        return ["assign-user", "is-solid"];
      case HistoryEntryType.CUSTOMER_NOTE:
        return "note";
      case HistoryEntryType.CUSTOMER_ADDED_TO_GROUP:
      case HistoryEntryType.CUSTOMER_REMOVED_FROM_GROUP:
        return "users";
    }
  }
  isFeatured(entry) {
    switch (entry.type) {
      case HistoryEntryType.CUSTOMER_REGISTERED:
      case HistoryEntryType.CUSTOMER_VERIFIED:
        return true;
      default:
        return false;
    }
  }
  getName(entry) {
    const {
      administrator
    } = entry;
    if (administrator) {
      return `${administrator.firstName} ${administrator.lastName}`;
    } else {
      return `${this.customer.firstName} ${this.customer.lastName}`;
    }
  }
  addNoteToCustomer() {
    this.addNote.emit({
      note: this.note
    });
    this.note = "";
  }
  static {
    this.ɵfac = function CustomerHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerHistoryComponent)(ɵɵdirectiveInject(HistoryEntryComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerHistoryComponent,
      selectors: [["vdr-customer-history"]],
      inputs: {
        customer: "customer",
        history: "history"
      },
      outputs: {
        addNote: "addNote",
        updateNote: "updateNote",
        deleteNote: "deleteNote"
      },
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["defaultComponents", ""], ["namedStrategy", ""], [1, "entry-list"], ["iconShape", "note", "displayType", "muted", 3, "featured", "isFirst", 4, "vdrIfPermissions"], [4, "ngFor", "ngForOf"], [3, "isLast"], ["iconShape", "note", "displayType", "muted", 3, "featured", "isFirst"], [1, "note-entry"], ["name", "note", 1, "note", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [3, "customer", "entry", "expanded", "expandClick", 4, "ngIf", "ngIfElse"], [3, "expandClick", "customer", "entry", "expanded"], [3, "displayType", "iconShape", "createdAt", "name", "featured"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "title"], [4, "ngIf", "ngIfElse"], [1, "flex"], [3, "value"], [1, "address-string"], [3, "label"], [1, "note-text"], [1, "flex-spacer"], ["vdrDropdownTrigger", "", 1, "button-small", "ml-1"], ["shape", "ellipsis-vertical", "size", "12"], ["vdrPosition", "bottom-right"], ["vdrDropdownItem", "", 3, "click", "disabled"], ["shape", "edit"], [1, "dropdown-divider"], ["shape", "trash", 1, "is-danger"], [4, "ngIf"]],
      template: function CustomerHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2);
          ɵɵtemplate(1, CustomerHistoryComponent_vdr_timeline_entry_1_Template, 6, 7, "vdr-timeline-entry", 3)(2, CustomerHistoryComponent_ng_container_2_Template, 4, 2, "ng-container", 4);
          ɵɵelement(3, "vdr-timeline-entry", 5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("vdrIfPermissions", "UpdateCustomer");
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.history);
          ɵɵadvance();
          ɵɵproperty("isLast", true);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, DefaultValueAccessor, NgControlStatus, NgModel, FormFieldControlDirective, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, LabeledDataComponent, ObjectTreeComponent, IfPermissionsDirective, TimelineEntryComponent, HistoryEntryDetailComponent, CustomerHistoryEntryHostComponent, TranslatePipe, HasPermissionPipe],
      styles: [".entry-list[_ngcontent-%COMP%]{margin:24px 12px 24px 24px}.note-entry[_ngcontent-%COMP%]{display:flex;align-items:center}.note-entry[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{flex:1}.note-entry[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}textarea.note[_ngcontent-%COMP%]{flex:1;height:36px;border-radius:3px;margin-inline-end:6px}.note-text[_ngcontent-%COMP%]{color:var(--color-text-100);white-space:pre-wrap}.address-string[_ngcontent-%COMP%]{font-size:smaller;color:var(--color-text-200)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerHistoryComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-history",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="entry-list">
    <vdr-timeline-entry iconShape="note" displayType="muted" [featured]="true" *vdrIfPermissions="'UpdateCustomer'"
                        [isFirst]="true">
        <div class="note-entry">
            <textarea [(ngModel)]="note" name="note" class="note"></textarea>
            <button class="btn btn-secondary" [disabled]="!note" (click)="addNoteToCustomer()">
                {{ 'order.add-note' | translate }}
            </button>
        </div>
    </vdr-timeline-entry>
    <ng-container *ngFor="let entry of history">
        <vdr-customer-history-entry-host
            *ngIf="hasCustomComponent(entry.type); else defaultComponents"
            [customer]="customer"
            [entry]="entry"
            [expanded]="expanded"
            (expandClick)="expanded = !expanded"
        ></vdr-customer-history-entry-host>
        <ng-template #defaultComponents>
            <vdr-timeline-entry
                [displayType]="getDisplayType(entry)"
                [iconShape]="getTimelineIcon(entry)"
                [createdAt]="entry.createdAt"
                [name]="getName(entry)"
                [featured]="isFeatured(entry)"
            >
                <ng-container [ngSwitch]="entry.type">
                    <ng-container *ngSwitchCase="type.CUSTOMER_REGISTERED">
                        <div class="title">
                            {{ 'customer.history-customer-registered' | translate }}
                        </div>
                        <ng-container *ngIf="entry.data.strategy === 'native'; else namedStrategy">
                            {{ 'customer.history-using-native-auth-strategy' | translate }}
                        </ng-container>
                        <ng-template #namedStrategy>
                            {{
                                'customer.history-using-external-auth-strategy'
                                    | translate: { strategy: entry.data.strategy }
                            }}
                        </ng-template>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_VERIFIED">
                        <div class="title">
                            {{ 'customer.history-customer-verified' | translate }}
                        </div>
                        <ng-container *ngIf="entry.data.strategy === 'native'; else namedStrategy">
                            {{ 'customer.history-using-native-auth-strategy' | translate }}
                        </ng-container>
                        <ng-template #namedStrategy>
                            {{
                                'customer.history-using-external-auth-strategy'
                                    | translate: { strategy: entry.data.strategy }
                            }}
                        </ng-template>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_DETAIL_UPDATED">
                        <div class="flex">
                            {{ 'customer.history-customer-detail-updated' | translate }}
                            <vdr-history-entry-detail>
                                <vdr-object-tree [value]="entry.data.input"></vdr-object-tree>
                            </vdr-history-entry-detail>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_ADDED_TO_GROUP">
                        {{
                            'customer.history-customer-added-to-group'
                                | translate: { groupName: entry.data.groupName }
                        }}
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_REMOVED_FROM_GROUP">
                        {{
                            'customer.history-customer-removed-from-group'
                                | translate: { groupName: entry.data.groupName }
                        }}
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_ADDRESS_CREATED">
                        {{ 'customer.history-customer-address-created' | translate }}
                        <div class="flex">
                            <div class="address-string">{{ entry.data.address }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_ADDRESS_UPDATED">
                        {{ 'customer.history-customer-address-updated' | translate }}
                        <div class="flex">
                            <div class="address-string">{{ entry.data.address }}</div>
                            <vdr-history-entry-detail>
                                <vdr-object-tree [value]="entry.data.input"></vdr-object-tree>
                            </vdr-history-entry-detail>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_ADDRESS_DELETED">
                        {{ 'customer.history-customer-address-deleted' | translate }}
                        <div class="address-string">{{ entry.data.address }}</div>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_PASSWORD_UPDATED">
                        {{ 'customer.history-customer-password-updated' | translate }}
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_PASSWORD_RESET_REQUESTED">
                        {{ 'customer.history-customer-password-reset-requested' | translate }}
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_PASSWORD_RESET_VERIFIED">
                        {{ 'customer.history-customer-password-reset-verified' | translate }}
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_EMAIL_UPDATE_REQUESTED">
                        <div class="flex">
                            {{ 'customer.history-customer-email-update-requested' | translate }}
                            <vdr-history-entry-detail>
                                <vdr-labeled-data [label]="'customer.old-email-address' | translate">{{
                                        entry.data.oldEmailAddress
                                    }}
                                </vdr-labeled-data>
                                <vdr-labeled-data [label]="'customer.new-email-address' | translate">{{
                                        entry.data.newEmailAddress
                                    }}
                                </vdr-labeled-data>
                            </vdr-history-entry-detail>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_EMAIL_UPDATE_VERIFIED">
                        <div class="flex">
                            {{ 'customer.history-customer-email-update-verified' | translate }}
                            <vdr-history-entry-detail>
                                <vdr-labeled-data [label]="'customer.old-email-address' | translate">{{
                                        entry.data.oldEmailAddress
                                    }}
                                </vdr-labeled-data>
                                <vdr-labeled-data [label]="'customer.new-email-address' | translate">{{
                                        entry.data.newEmailAddress
                                    }}
                                </vdr-labeled-data>
                            </vdr-history-entry-detail>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchCase="type.CUSTOMER_NOTE">
                        <div class="flex">
                            <div class="note-text">
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
                                        [disabled]="!('UpdateCustomer' | hasPermission)"
                                    >
                                        <clr-icon shape="edit"></clr-icon>
                                        {{ 'common.edit' | translate }}
                                    </button>
                                    <div class="dropdown-divider"></div>
                                    <button
                                        vdrDropdownItem
                                        (click)="deleteNote.emit(entry)"
                                        [disabled]="!('UpdateCustomer' | hasPermission)"
                                    >
                                        <clr-icon shape="trash" class="is-danger"></clr-icon>
                                        {{ 'common.delete' | translate }}
                                    </button>
                                </vdr-dropdown-menu>
                            </vdr-dropdown>
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
    <vdr-timeline-entry [isLast]="true"></vdr-timeline-entry>
</div>
`,
      styles: [".entry-list{margin:24px 12px 24px 24px}.note-entry{display:flex;align-items:center}.note-entry .note{flex:1}.note-entry button{margin:0}textarea.note{flex:1;height:36px;border-radius:3px;margin-inline-end:6px}.note-text{color:var(--color-text-100);white-space:pre-wrap}.address-string{font-size:smaller;color:var(--color-text-200)}\n"]
    }]
  }], () => [{
    type: HistoryEntryComponentService
  }], {
    customer: [{
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
var CUSTOMER_DETAIL_QUERY = gql`
    query CustomerDetailQuery($id: ID!, $orderListOptions: OrderListOptions) {
        customer(id: $id) {
            ...Customer
            groups {
                id
                name
            }
            orders(options: $orderListOptions) {
                items {
                    id
                    code
                    type
                    state
                    total
                    totalWithTax
                    currencyCode
                    createdAt
                    updatedAt
                    orderPlacedAt
                }
                totalItems
            }
        }
    }
    ${CUSTOMER_FRAGMENT}
`;
var CustomerDetailComponent = class _CustomerDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, formBuilder, dataService, modalService, notificationService) {
    super();
    this.changeDetector = changeDetector;
    this.formBuilder = formBuilder;
    this.dataService = dataService;
    this.modalService = modalService;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("Customer");
    this.addressCustomFields = this.getCustomFieldConfig("Address");
    this.detailForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        title: "",
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        phoneNumber: "",
        emailAddress: ["", [Validators.required, Validators.email]],
        password: "",
        customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
      }),
      addresses: new UntypedFormArray([])
    });
    this.fetchHistory = new Subject();
    this.addressesToDeleteIds = /* @__PURE__ */ new Set();
    this.addressDefaultsUpdated = false;
    this.ordersPerPage = 10;
    this.currentOrdersPage = 1;
    this.orderListUpdates$ = new Subject();
  }
  ngOnInit() {
    this.init();
    this.availableCountries$ = this.dataService.settings.getAvailableCountries().mapSingle((result) => result.countries.items).pipe(shareReplay(1));
    const customerWithUpdates$ = this.entity$.pipe(merge(this.orderListUpdates$));
    this.orders$ = customerWithUpdates$.pipe(map((customer) => customer.orders.items));
    this.ordersCount$ = this.entity$.pipe(map((customer) => customer.orders.totalItems));
    this.history$ = this.fetchHistory.pipe(startWith(null), switchMap(() => this.dataService.customer.getCustomerHistory(this.id, {
      sort: {
        createdAt: SortOrder.DESC
      }
    }).mapStream((data) => data.customer?.history.items)));
  }
  ngOnDestroy() {
    this.destroy();
    this.orderListUpdates$.complete();
  }
  getAddressFormControls() {
    const formArray = this.detailForm.get(["addresses"]);
    return formArray.controls;
  }
  setDefaultBillingAddressId(id) {
    this.defaultBillingAddressId = id;
    this.addressDefaultsUpdated = true;
  }
  setDefaultShippingAddressId(id) {
    this.defaultShippingAddressId = id;
    this.addressDefaultsUpdated = true;
  }
  toggleDeleteAddress(id) {
    if (this.addressesToDeleteIds.has(id)) {
      this.addressesToDeleteIds.delete(id);
    } else {
      this.addressesToDeleteIds.add(id);
    }
  }
  addAddress() {
    const addressFormArray = this.detailForm.get("addresses");
    const newAddress = this.formBuilder.group({
      fullName: "",
      company: "",
      streetLine1: ["", Validators.required],
      streetLine2: "",
      city: "",
      province: "",
      postalCode: "",
      countryCode: ["", Validators.required],
      phoneNumber: "",
      defaultShippingAddress: false,
      defaultBillingAddress: false,
      customFields: this.formBuilder.group(this.addressCustomFields.reduce((hash, field) => __spreadProps(__spreadValues({}, hash), {
        [field.name]: ""
      }), {}))
    });
    addressFormArray.push(newAddress);
  }
  setOrderItemsPerPage(itemsPerPage) {
    this.ordersPerPage = +itemsPerPage;
    this.fetchOrdersList();
  }
  setOrderCurrentPage(page) {
    this.currentOrdersPage = +page;
    this.fetchOrdersList();
  }
  create() {
    const customerForm = this.detailForm.get("customer");
    if (!customerForm) {
      return;
    }
    const {
      title,
      emailAddress,
      firstName,
      lastName,
      phoneNumber,
      password
    } = customerForm.value;
    const customFields = customerForm.get("customFields")?.value;
    if (!emailAddress || !firstName || !lastName) {
      return;
    }
    const customer = {
      title,
      emailAddress,
      firstName,
      lastName,
      phoneNumber,
      customFields
    };
    this.dataService.customer.createCustomer(customer, password).subscribe(({
      createCustomer
    }) => {
      switch (createCustomer.__typename) {
        case "Customer":
          this.notificationService.success(marker("common.notify-create-success"), {
            entity: "Customer"
          });
          if (createCustomer.emailAddress && !password) {
            this.notificationService.notify({
              message: marker("customer.email-verification-sent"),
              translationVars: {
                emailAddress
              },
              type: "info",
              duration: 1e4
            });
          }
          this.detailForm.markAsPristine();
          this.addressDefaultsUpdated = false;
          this.changeDetector.markForCheck();
          this.router.navigate(["../", createCustomer.id], {
            relativeTo: this.route
          });
          break;
        case "EmailAddressConflictError":
          this.notificationService.error(createCustomer.message);
      }
    });
  }
  save() {
    this.entity$.pipe(take(1), mergeMap(({
      id
    }) => {
      const saveOperations = [];
      const customerForm = this.detailForm.get("customer");
      if (customerForm && customerForm.dirty) {
        const formValue = customerForm.value;
        const customFields = customerForm.get("customFields")?.value;
        const customer = {
          id,
          title: formValue.title,
          emailAddress: formValue.emailAddress,
          firstName: formValue.firstName,
          lastName: formValue.lastName,
          phoneNumber: formValue.phoneNumber,
          customFields
        };
        saveOperations.push(this.dataService.customer.updateCustomer(customer).pipe(map((res) => res.updateCustomer)));
      }
      const addressFormArray = this.detailForm.get("addresses");
      if (addressFormArray && addressFormArray.dirty || this.addressDefaultsUpdated) {
        for (const addressControl of addressFormArray.controls) {
          if (addressControl.dirty || this.addressDefaultsUpdated) {
            const address = addressControl.value;
            const input = {
              fullName: address.fullName,
              company: address.company,
              streetLine1: address.streetLine1,
              streetLine2: address.streetLine2,
              city: address.city,
              province: address.province,
              postalCode: address.postalCode,
              countryCode: address.countryCode,
              phoneNumber: address.phoneNumber,
              defaultShippingAddress: this.defaultShippingAddressId === address.id,
              defaultBillingAddress: this.defaultBillingAddressId === address.id,
              customFields: address.customFields
            };
            if (!address.id) {
              saveOperations.push(this.dataService.customer.createCustomerAddress(id, input).pipe(map((res) => res.createCustomerAddress)));
            } else {
              if (this.addressesToDeleteIds.has(address.id)) {
                saveOperations.push(this.dataService.customer.deleteCustomerAddress(address.id).pipe(map((res) => res.deleteCustomerAddress)));
              } else {
                saveOperations.push(this.dataService.customer.updateCustomerAddress(__spreadProps(__spreadValues({}, input), {
                  id: address.id
                })).pipe(map((res) => res.updateCustomerAddress)));
              }
            }
          }
        }
      }
      return forkJoin(saveOperations);
    })).subscribe((data) => {
      let notified = false;
      for (const result of data) {
        switch (result.__typename) {
          case "Customer":
          case "Address":
          case "Success":
            if (!notified) {
              this.notificationService.success(marker("common.notify-update-success"), {
                entity: "Customer"
              });
              notified = true;
              this.detailForm.markAsPristine();
              this.addressDefaultsUpdated = false;
              this.changeDetector.markForCheck();
              this.fetchHistory.next();
              this.refreshCustomer().subscribe();
            }
            break;
          case "EmailAddressConflictError":
            this.notificationService.error(result.message);
            break;
        }
      }
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Customer"
      });
    });
  }
  addToGroup() {
    this.modalService.fromComponent(SelectCustomerGroupDialogComponent, {
      size: "md"
    }).pipe(switchMap((groupIds) => groupIds ? from(groupIds) : EMPTY), concatMap((groupId) => this.dataService.customer.addCustomersToGroup(groupId, [this.id]))).subscribe({
      next: (res) => {
        this.notificationService.success(marker(`customer.add-customers-to-group-success`), {
          customerCount: 1,
          groupName: res.addCustomersToGroup.name
        });
      },
      complete: () => {
        this.refreshCustomer().subscribe();
        this.fetchHistory.next();
      }
    });
  }
  removeFromGroup(group) {
    this.modalService.dialog({
      title: marker("customer.confirm-remove-customer-from-group"),
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(switchMap((response) => response ? this.dataService.customer.removeCustomersFromGroup(group.id, [this.id]) : EMPTY), switchMap(() => this.refreshCustomer())).subscribe((result) => {
      this.notificationService.success(marker(`customer.remove-customers-from-group-success`), {
        customerCount: 1,
        groupName: group.name
      });
      this.fetchHistory.next();
    });
  }
  addNoteToCustomer({
    note
  }) {
    this.dataService.customer.addNoteToCustomer(this.id, note).subscribe(() => {
      this.fetchHistory.next();
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Note"
      });
    });
  }
  updateNote(entry) {
    this.modalService.fromComponent(EditNoteDialogComponent, {
      closable: true,
      locals: {
        displayPrivacyControls: false,
        note: entry.data.note
      }
    }).pipe(switchMap((result) => {
      if (result) {
        return this.dataService.customer.updateCustomerNote({
          noteId: entry.id,
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
    }).pipe(switchMap((res) => res ? this.dataService.customer.deleteCustomerNote(entry.id) : EMPTY)).subscribe(() => {
      this.fetchHistory.next();
      this.notificationService.success(marker("common.notify-delete-success"), {
        entity: "Note"
      });
    });
  }
  setFormValues(entity) {
    const customerGroup = this.detailForm.get("customer");
    if (customerGroup) {
      customerGroup.patchValue({
        title: entity.title ?? null,
        firstName: entity.firstName,
        lastName: entity.lastName,
        phoneNumber: entity.phoneNumber ?? null,
        emailAddress: entity.emailAddress,
        password: "",
        customFields: {}
      });
    }
    if (entity.addresses) {
      const addressesArray = new UntypedFormArray([]);
      for (const address of entity.addresses) {
        const _a = address, {
          customFields
        } = _a, rest = __objRest(_a, [
          "customFields"
        ]);
        const addressGroup = this.formBuilder.group(__spreadProps(__spreadValues({}, rest), {
          countryCode: address.country.code,
          customFields: this.formBuilder.group(this.addressCustomFields.reduce((hash, field) => __spreadProps(__spreadValues({}, hash), {
            [field.name]: address["customFields"][field.name]
          }), {}))
        }));
        addressesArray.push(addressGroup);
        if (address.defaultShippingAddress) {
          this.defaultShippingAddressId = address.id;
        }
        if (address.defaultBillingAddress) {
          this.defaultBillingAddressId = address.id;
        }
      }
      this.detailForm.setControl("addresses", addressesArray);
    }
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customer", "customFields"]), entity);
    }
    this.changeDetector.markForCheck();
  }
  /**
   * Refetch the customer with the current order list settings.
   */
  fetchOrdersList() {
    this.dataService.query(CustomerDetailQueryDocument, {
      id: this.id,
      orderListOptions: {
        take: this.ordersPerPage,
        skip: (this.currentOrdersPage - 1) * this.ordersPerPage,
        sort: {
          orderPlacedAt: SortOrder.DESC
        }
      }
    }).single$.pipe(map((data) => data.customer), filter(import_shared_utils.notNullOrUndefined)).subscribe((result) => this.orderListUpdates$.next(result));
  }
  refreshCustomer() {
    return this.dataService.query(CustomerDetailQueryDocument, {
      id: this.id,
      orderListOptions: {
        take: 0
      }
    }).single$;
  }
  static {
    this.ɵfac = function CustomerDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerDetailComponent,
      selectors: [["vdr-customer-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 50,
      vars: 53,
      consts: [["updateButton", ""], ["noGroups", ""], ["locationId", "customer-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "title", 4, "ngIf"], [3, "entity", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "form-grid"], ["for", "title", 3, "label", "readOnlyToggle"], ["id", "title", "type", "text", "formControlName", "title"], ["for", "firstName", 3, "label", "readOnlyToggle"], ["id", "firstName", "type", "text", "formControlName", "firstName"], ["for", "lastName", 3, "label", "readOnlyToggle"], ["id", "lastName", "type", "text", "formControlName", "lastName"], ["for", "emailAddress", 3, "label", "readOnlyToggle"], ["id", "emailAddress", "type", "text", "formControlName", "emailAddress"], ["for", "phoneNumber", 3, "label", "readOnlyToggle"], ["id", "phoneNumber", "type", "text", "formControlName", "phoneNumber"], ["for", "password", 3, "label", 4, "ngIf"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "customer-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "customer"], ["class", "last-login", 3, "label", 4, "ngIf"], [1, "last-login", 3, "label"], [3, "dateTime"], [3, "title"], [4, "ngIf", "ngIfElse"], ["class", "button-small mt-1", 3, "click", 4, "vdrIfPermissions"], ["icon", "times", 3, "colorFrom", "iconClick", 4, "ngFor", "ngForOf"], ["icon", "times", 3, "iconClick", "colorFrom"], [1, "color-weight-400"], [1, "button-small", "mt-1", 3, "click"], ["shape", "plus"], [3, "entity"], ["for", "password", 3, "label"], ["id", "password", "type", "password", "formControlName", "password"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Customer", 3, "customFields", "customFieldsFormGroup"], [3, "to-delete", "availableCountries", "isDefaultBilling", "isDefaultShipping", "addressForm", "customFields", "editable", "setAsDefaultBilling", "setAsDefaultShipping", "deleteAddress", 4, "ngFor", "ngForOf"], ["class", "btn btn-secondary mt-2", 3, "click", 4, "vdrIfPermissions"], [3, "title", "paddingX"], ["id", "customer-order-list", 3, "itemsPerPageChange", "pageChange", "items", "itemsPerPage", "totalItems", "currentPage", "emptyStateLabel"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "code", 3, "heading", "optional"], ["id", "order-type", 3, "heading", "hiddenByDefault"], ["id", "state", 3, "heading"], ["id", "total", 3, "heading"], ["id", "updated-at", 3, "heading"], ["id", "placed-at", 3, "heading"], [3, "customField", 4, "ngFor", "ngForOf"], [3, "addNote", "updateNote", "deleteNote", "customer", "history"], [3, "setAsDefaultBilling", "setAsDefaultShipping", "deleteAddress", "availableCountries", "isDefaultBilling", "isDefaultShipping", "addressForm", "customFields", "editable"], [1, "btn", "btn-secondary", "mt-2", 3, "click"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "state"], [3, "customField"]],
      template: function CustomerDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 2);
          ɵɵtemplate(5, CustomerDetailComponent_button_5_Template, 3, 4, "button", 3);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, CustomerDetailComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 2);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "vdr-page-detail-layout")(11, "vdr-page-detail-sidebar");
          ɵɵtemplate(12, CustomerDetailComponent_vdr_card_12_Template, 3, 2, "vdr-card", 4);
          ɵɵpipe(13, "async");
          ɵɵtemplate(14, CustomerDetailComponent_vdr_card_14_Template, 7, 6, "vdr-card", 5);
          ɵɵpipe(15, "async");
          ɵɵelementStart(16, "vdr-card");
          ɵɵtemplate(17, CustomerDetailComponent_vdr_page_entity_info_17_Template, 1, 1, "vdr-page-entity-info", 6);
          ɵɵpipe(18, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(19, "vdr-page-block")(20, "form", 7)(21, "vdr-card")(22, "div", 8)(23, "vdr-form-field", 9);
          ɵɵpipe(24, "translate");
          ɵɵpipe(25, "async");
          ɵɵelement(26, "input", 10);
          ɵɵelementEnd();
          ɵɵelement(27, "div");
          ɵɵelementStart(28, "vdr-form-field", 11);
          ɵɵpipe(29, "translate");
          ɵɵpipe(30, "async");
          ɵɵelement(31, "input", 12);
          ɵɵelementEnd();
          ɵɵelementStart(32, "vdr-form-field", 13);
          ɵɵpipe(33, "translate");
          ɵɵpipe(34, "async");
          ɵɵelement(35, "input", 14);
          ɵɵelementEnd();
          ɵɵelementStart(36, "vdr-form-field", 15);
          ɵɵpipe(37, "translate");
          ɵɵpipe(38, "async");
          ɵɵelement(39, "input", 16);
          ɵɵelementEnd();
          ɵɵelementStart(40, "vdr-form-field", 17);
          ɵɵpipe(41, "translate");
          ɵɵpipe(42, "async");
          ɵɵelement(43, "input", 18);
          ɵɵelementEnd();
          ɵɵtemplate(44, CustomerDetailComponent_vdr_form_field_44_Template, 3, 3, "vdr-form-field", 19);
          ɵɵpipe(45, "async");
          ɵɵelementEnd()();
          ɵɵtemplate(46, CustomerDetailComponent_vdr_card_46_Template, 3, 5, "vdr-card", 20);
          ɵɵelementEnd();
          ɵɵelement(47, "vdr-custom-detail-component-host", 21);
          ɵɵtemplate(48, CustomerDetailComponent_ng_container_48_Template, 42, 58, "ng-container", 4);
          ɵɵpipe(49, "async");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_4_0;
          const updateButton_r25 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 21, ctx.isNew$))("ngIfElse", updateButton_r25);
          ɵɵadvance(7);
          ɵɵproperty("ngIf", ɵɵpipeBind1(13, 23, ctx.entity$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", (tmp_4_0 = ɵɵpipeBind1(15, 25, ctx.entity$)) == null ? null : tmp_4_0.groups);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(18, 27, ctx.entity$));
          ɵɵadvance(3);
          ɵɵproperty("formGroup", ctx.detailForm.get("customer"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(24, 29, "customer.title"))("readOnlyToggle", !ɵɵpipeBind1(25, 31, ctx.isNew$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(29, 33, "customer.first-name"))("readOnlyToggle", !ɵɵpipeBind1(30, 35, ctx.isNew$));
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(33, 37, "customer.last-name"))("readOnlyToggle", !ɵɵpipeBind1(34, 39, ctx.isNew$));
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(37, 41, "customer.email-address"))("readOnlyToggle", !ɵɵpipeBind1(38, 43, ctx.isNew$));
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(41, 45, "customer.phone-number"))("readOnlyToggle", !ɵɵpipeBind1(42, 47, ctx.isNew$));
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ɵɵpipeBind1(45, 49, ctx.isNew$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ɵɵpipeBind1(49, 51, ctx.isNew$));
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, FormFieldComponent, FormFieldControlDirective, OrderStateLabelComponent, LabeledDataComponent, IfPermissionsDirective, ActionBarItemsComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, DataTable2Component, DataTable2ColumnComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, CustomerStatusLabelComponent, AddressCardComponent, CustomerHistoryComponent, AsyncPipe, TranslatePipe, HasPermissionPipe, TimeAgoPipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: [".last-login[_ngcontent-%COMP%]{margin-inline-start:6px;color:var(--color-grey-500)}.to-delete[_ngcontent-%COMP%]{opacity:.5}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="customer-detail"></vdr-action-bar-items>
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="!(addressDefaultsUpdated || (detailForm.valid && detailForm.dirty))"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    *vdrIfPermissions="'UpdateCustomer'"
                    class="btn btn-primary"
                    (click)="save()"
                    [disabled]="!(addressDefaultsUpdated || (detailForm.valid && detailForm.dirty))"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="customer-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<vdr-page-detail-layout>
    <vdr-page-detail-sidebar>
        <vdr-card *ngIf="entity$ | async as customer">
            <vdr-customer-status-label [customer]="customer"></vdr-customer-status-label>
            <vdr-labeled-data
                class="last-login"
                *ngIf="customer.user?.lastLogin as lastLogin"
                [label]="'customer.last-login' | translate"
            >
                <time [dateTime]="lastLogin">{{ lastLogin | timeAgo }}</time>
            </vdr-labeled-data>
        </vdr-card>
        <vdr-card
            [title]="'customer.customer-groups' | translate"
            *ngIf="(entity$ | async)?.groups as groups"
        >
            <div *ngIf="groups.length; else noGroups">
                <vdr-chip
                    *ngFor="let group of groups"
                    [colorFrom]="group.id"
                    icon="times"
                    (iconClick)="removeFromGroup(group)"
                    >{{ group.name }}</vdr-chip
                >
            </div>
            <ng-template #noGroups>
                <span class="color-weight-400">
                    {{ 'customer.not-a-member-of-any-groups' | translate }}
                </span>
            </ng-template>
            <div>
                <button
                    class="button-small mt-1"
                    (click)="addToGroup()"
                    *vdrIfPermissions="'UpdateCustomerGroup'"
                >
                    <clr-icon shape="plus"></clr-icon>
                    {{ 'customer.add-customer-to-group' | translate }}
                </button>
            </div>
        </vdr-card>
        <vdr-card>
            <vdr-page-entity-info *ngIf="entity$ | async as entity" [entity]="entity" />
        </vdr-card>
    </vdr-page-detail-sidebar>
    <vdr-page-block>
        <form class="form" [formGroup]="detailForm.get('customer')">
            <vdr-card>
                <div class="form-grid">
                    <vdr-form-field
                        [label]="'customer.title' | translate"
                        for="title"
                        [readOnlyToggle]="!(isNew$ | async)"
                    >
                        <input id="title" type="text" formControlName="title" />
                    </vdr-form-field>
                    <div><!-- spacer --></div>
                    <vdr-form-field
                        [label]="'customer.first-name' | translate"
                        for="firstName"
                        [readOnlyToggle]="!(isNew$ | async)"
                    >
                        <input id="firstName" type="text" formControlName="firstName" />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'customer.last-name' | translate"
                        for="lastName"
                        [readOnlyToggle]="!(isNew$ | async)"
                    >
                        <input id="lastName" type="text" formControlName="lastName" />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'customer.email-address' | translate"
                        for="emailAddress"
                        [readOnlyToggle]="!(isNew$ | async)"
                    >
                        <input id="emailAddress" type="text" formControlName="emailAddress" />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'customer.phone-number' | translate"
                        for="phoneNumber"
                        [readOnlyToggle]="!(isNew$ | async)"
                    >
                        <input id="phoneNumber" type="text" formControlName="phoneNumber" />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'customer.password' | translate"
                        for="password"
                        *ngIf="isNew$ | async"
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
                    entityName="Customer"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customer.customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
        </form>
        <vdr-custom-detail-component-host
            locationId="customer-detail"
            [entity$]="entity$"
            [detailForm]="detailForm"
        ></vdr-custom-detail-component-host>
        <ng-container *ngIf="!(isNew$ | async)">
            <vdr-card [title]="'customer.addresses' | translate">
                <div class="form-grid">
                    <vdr-address-card
                        *ngFor="let addressForm of getAddressFormControls()"
                        [class.to-delete]="addressesToDeleteIds.has(addressForm.value.id)"
                        [availableCountries]="availableCountries$ | async"
                        [isDefaultBilling]="defaultBillingAddressId === addressForm.value.id"
                        [isDefaultShipping]="defaultShippingAddressId === addressForm.value.id"
                        [addressForm]="addressForm"
                        [customFields]="addressCustomFields"
                        [editable]="
                            (['UpdateCustomer'] | hasPermission) &&
                            !addressesToDeleteIds.has(addressForm.value.id)
                        "
                        (setAsDefaultBilling)="setDefaultBillingAddressId($event)"
                        (setAsDefaultShipping)="setDefaultShippingAddressId($event)"
                        (deleteAddress)="toggleDeleteAddress($event)"
                    ></vdr-address-card>
                </div>
                <button
                    class="btn btn-secondary mt-2"
                    (click)="addAddress()"
                    *vdrIfPermissions="'UpdateCustomer'"
                >
                    <clr-icon shape="plus"></clr-icon>
                    {{ 'customer.create-new-address' | translate }}
                </button>
            </vdr-card>
            <vdr-card [title]="'customer.orders' | translate" [paddingX]="false">
                <vdr-data-table-2
                    id="customer-order-list"
                    [items]="orders$ | async"
                    [itemsPerPage]="ordersPerPage"
                    [totalItems]="ordersCount$ | async"
                    [currentPage]="currentOrdersPage"
                    [emptyStateLabel]="'customer.no-orders-placed' | translate"
                    (itemsPerPageChange)="setOrderItemsPerPage($event)"
                    (pageChange)="setOrderCurrentPage($event)"
                >
                    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
                        <ng-template let-order="item">
                            {{ order.id }}
                        </ng-template>
                    </vdr-dt2-column>
                    <vdr-dt2-column
                        [heading]="'common.created-at' | translate"
                        id="created-at"
                        [hiddenByDefault]="true"
                    >
                        <ng-template let-order="item">
                            {{ order.createdAt | localeDate : 'short' }}
                        </ng-template>
                    </vdr-dt2-column>
                    <vdr-dt2-column [heading]="'common.code' | translate" id="code" [optional]="false">
                        <ng-template let-order="item">
                            <a class="button-ghost" [routerLink]="['/orders', order.id]"
                                ><span>{{ order.code }}</span>
                                <clr-icon shape="arrow right"></clr-icon>
                            </a>
                        </ng-template>
                    </vdr-dt2-column>
                    <vdr-dt2-column
                        [heading]="'order.order-type' | translate"
                        id="order-type"
                        [hiddenByDefault]="true"
                    >
                        <ng-template let-order="item">
                            <vdr-chip>{{ order.type }}</vdr-chip>
                        </ng-template>
                    </vdr-dt2-column>
                    <vdr-dt2-column [heading]="'order.state' | translate" id="state">
                        <ng-template let-order="item">
                            <vdr-order-state-label [state]="order.state"></vdr-order-state-label>
                        </ng-template>
                    </vdr-dt2-column>
                    <vdr-dt2-column [heading]="'order.total' | translate" id="total">
                        <ng-template let-order="item">
                            {{ order.totalWithTax | localeCurrency : order.currencyCode }}
                        </ng-template>
                    </vdr-dt2-column>
                    <vdr-dt2-column [heading]="'common.updated-at' | translate" id="updated-at">
                        <ng-template let-order="item">
                            {{ order.updatedAt | timeAgo }}
                        </ng-template>
                    </vdr-dt2-column>
                    <vdr-dt2-column [heading]="'order.placed-at' | translate" id="placed-at">
                        <ng-template let-order="item">
                            {{ order.orderPlacedAt | localeDate : 'short' }}
                        </ng-template>
                    </vdr-dt2-column>
                    <vdr-dt2-custom-field-column
                        *ngFor="let customField of customFields"
                        [customField]="customField"
                    />
                </vdr-data-table-2>
            </vdr-card>
            <vdr-card [title]="'customer.customer-history' | translate">
                <vdr-customer-history
                    [customer]="entity$ | async"
                    [history]="history$ | async"
                    (addNote)="addNoteToCustomer($event)"
                    (updateNote)="updateNote($event)"
                    (deleteNote)="deleteNote($event)"
                ></vdr-customer-history>
            </vdr-card>
        </ng-container>
    </vdr-page-block>
</vdr-page-detail-layout>
`,
      styles: [".last-login{margin-inline-start:6px;color:var(--color-grey-500)}.to-delete{opacity:.5}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: FormBuilder
  }, {
    type: DataService
  }, {
    type: ModalService
  }, {
    type: NotificationService
  }], null);
})();
var CUSTOMER_GROUP_DETAIL_QUERY = gql`
    query GetCustomerGroupDetail($id: ID!) {
        customerGroup(id: $id) {
            ...CustomerGroupDetail
        }
    }
    fragment CustomerGroupDetail on CustomerGroup {
        id
        createdAt
        updatedAt
        name
    }
`;
var CustomerGroupDetailComponent = class _CustomerGroupDetailComponent extends TypedBaseDetailComponent {
  constructor(formBuilder, dataService, modalService, notificationService) {
    super();
    this.formBuilder = formBuilder;
    this.dataService = dataService;
    this.modalService = modalService;
    this.notificationService = notificationService;
    this.customFields = this.getCustomFieldConfig("CustomerGroup");
    this.detailForm = this.formBuilder.group({
      name: "",
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
  }
  ngOnInit() {
    super.init();
  }
  create() {
    const formvalue = this.detailForm.value;
    if (formvalue.name) {
      this.dataService.customer.createCustomerGroup({
        name: formvalue.name,
        customFields: formvalue.customFields,
        customerIds: []
      }).subscribe(({
        createCustomerGroup
      }) => {
        this.notificationService.success(marker("common.notify-create-success"), {
          entity: "CustomerGroup"
        });
        this.detailForm.markAsPristine();
        this.router.navigate(["../", createCustomerGroup.id], {
          relativeTo: this.route
        });
      }, (err) => {
        this.notificationService.error(marker("common.notify-create-error"), {
          entity: "CustomerGroup"
        });
      });
    }
  }
  save() {
    const formValue = this.detailForm.value;
    this.dataService.customer.updateCustomerGroup(__spreadValues({
      id: this.id
    }, formValue)).subscribe(() => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "CustomerGroup"
      });
      this.detailForm.markAsPristine();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "CustomerGroup"
      });
    });
  }
  setFormValues(entity) {
    this.detailForm.patchValue({
      name: entity.name
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), entity);
    }
  }
  static {
    this.ɵfac = function CustomerGroupDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerGroupDetailComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerGroupDetailComponent,
      selectors: [["vdr-customer-group-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 23,
      vars: 14,
      consts: [["updateButton", ""], ["locationId", "customer-group-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "customer-group-detail", 3, "entity$", "detailForm"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["formGroupName", "customFields", 3, "title"], ["entityName", "CustomerGroup", 3, "customFields", "customFieldsFormGroup"]],
      template: function CustomerGroupDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 1);
          ɵɵtemplate(5, CustomerGroupDetailComponent_button_5_Template, 3, 4, "button", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, CustomerGroupDetailComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "form", 3)(11, "vdr-page-detail-layout")(12, "vdr-page-detail-sidebar");
          ɵɵtemplate(13, CustomerGroupDetailComponent_vdr_card_13_Template, 2, 1, "vdr-card", 4);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-page-block")(16, "vdr-card")(17, "div", 5)(18, "vdr-form-field", 6);
          ɵɵpipe(19, "translate");
          ɵɵelement(20, "input", 7);
          ɵɵelementEnd()()();
          ɵɵtemplate(21, CustomerGroupDetailComponent_vdr_card_21_Template, 3, 5, "vdr-card", 8);
          ɵɵelement(22, "vdr-custom-detail-component-host", 9);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r5 = ɵɵreference(8);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 8, ctx.isNew$))("ngIfElse", updateButton_r5);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 10, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(19, 12, "common.name"));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, FormFieldComponent, FormFieldControlDirective, IfPermissionsDirective, ActionBarItemsComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerGroupDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-group-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="customer-group-detail"></vdr-action-bar-items>
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="!(detailForm.valid && detailForm.dirty)"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    *vdrIfPermissions="'UpdateCustomer'"
                    class="btn btn-primary"
                    (click)="save()"
                    [disabled]="!(detailForm.valid && detailForm.dirty)"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="customer-group-detail" />
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
                        <input id="name" type="text" formControlName="name" />
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card
                formGroupName="customFields"
                *ngIf="customFields.length"
                [title]="'common.custom-fields' | translate"
            >
                <vdr-tabbed-custom-fields
                    entityName="CustomerGroup"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="customer-group-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`
    }]
  }], () => [{
    type: FormBuilder
  }, {
    type: DataService
  }, {
    type: ModalService
  }, {
    type: NotificationService
  }], null);
})();
var CustomerGroupDetailDialogComponent = class _CustomerGroupDetailDialogComponent {
  constructor(serverConfigService, formBuilder) {
    this.serverConfigService = serverConfigService;
    this.formBuilder = formBuilder;
    this.customFields = this.serverConfigService.getCustomFieldsFor("CustomerGroup");
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.group.name, Validators.required],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    if (this.customFields.length) {
      const customFieldsGroup = this.form.get("customFields");
      for (const fieldDef of this.customFields) {
        const key = fieldDef.name;
        const value = this.group.customFields?.[key];
        const control = customFieldsGroup.get(key);
        if (control) {
          control.patchValue(value);
        }
      }
    }
  }
  cancel() {
    this.resolveWith();
  }
  save() {
    this.resolveWith(this.form.value);
  }
  static {
    this.ɵfac = function CustomerGroupDetailDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerGroupDetailDialogComponent)(ɵɵdirectiveInject(ServerConfigService), ɵɵdirectiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerGroupDetailDialogComponent,
      selectors: [["vdr-customer-group-detail-dialog"]],
      standalone: false,
      decls: 8,
      vars: 9,
      consts: [["vdrDialogTitle", ""], [3, "formGroup"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["formGroupName", "customFields", 4, "ngIf"], ["vdrDialogButtons", ""], [4, "ngIf"], ["formGroupName", "customFields"], ["entityName", "CustomerGroup", 3, "customFields", "customFieldsFormGroup"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function CustomerGroupDetailDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CustomerGroupDetailDialogComponent_ng_template_0_Template, 2, 2, "ng-template", 0);
          ɵɵelementStart(1, "form", 1)(2, "vdr-form-field", 2);
          ɵɵpipe(3, "translate");
          ɵɵelement(4, "input", 3);
          ɵɵpipe(5, "hasPermission");
          ɵɵelementEnd();
          ɵɵtemplate(6, CustomerGroupDetailDialogComponent_section_6_Template, 5, 5, "section", 4);
          ɵɵelementEnd();
          ɵɵtemplate(7, CustomerGroupDetailDialogComponent_ng_template_7_Template, 6, 6, "ng-template", 5);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(3, 4, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(5, 6, ɵɵpureFunction0(8, _c7)));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
        }
      },
      dependencies: [ClrLabel, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, TabbedCustomFieldsComponent, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerGroupDetailDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-group-detail-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    <span *ngIf="group.id">{{ 'customer.update-customer-group' | translate }}</span>
    <span *ngIf="!group.id">{{ 'customer.create-customer-group' | translate }}</span>
</ng-template>
<form [formGroup]="form">
    <vdr-form-field [label]="'common.name' | translate" for="name">
        <input
            id="name"
            type="text"
            formControlName="name"
            [readonly]="!(['CreateCustomerGroup', 'UpdateCustomerGroup'] | hasPermission)"
        />
    </vdr-form-field>
    <section formGroupName="customFields" *ngIf="customFields.length">
        <label>{{ 'common.custom-fields' | translate }}</label>
        <vdr-tabbed-custom-fields
            entityName="CustomerGroup"
            [customFields]="customFields"
            [customFieldsFormGroup]="form.get('customFields')"
        ></vdr-tabbed-custom-fields>
    </section>
</form>
<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="save()" [disabled]="!form.valid" class="btn btn-primary">
        <span *ngIf="group.id">{{ 'customer.update-customer-group' | translate }}</span>
        <span *ngIf="!group.id">{{ 'customer.create-customer-group' | translate }}</span>
    </button>
</ng-template>
`
    }]
  }], () => [{
    type: ServerConfigService
  }, {
    type: UntypedFormBuilder
  }], null);
})();
var deleteCustomerGroupsBulkAction = createBulkDeleteAction({
  location: "customer-group-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteCustomerGroup),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.customer.deleteCustomerGroups(ids).pipe(map((res) => res.deleteCustomerGroups))
});
var GET_CUSTOMER_GROUP_LIST = gql`
    query GetCustomerGroupList($options: CustomerGroupListOptions) {
        customerGroups(options: $options) {
            items {
                ...CustomerGroup
            }
            totalItems
        }
    }
    ${CUSTOMER_GROUP_FRAGMENT}
`;
var CustomerGroupListComponent = class _CustomerGroupListComponent extends TypedBaseListComponent {
  constructor(dataService, notificationService, modalService, route, router) {
    super();
    this.dataService = dataService;
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.route = route;
    this.router = router;
    this.dataTableListId = "customer-group-list";
    this.customFields = this.getCustomFieldConfig("CustomerGroup");
    this.fetchGroupMembers$ = new BehaviorSubject({
      skip: 0,
      take: 0,
      filterTerm: ""
    });
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).connectToRoute(this.route);
    this.refreshActiveGroupMembers$ = new BehaviorSubject(void 0);
    super.configure({
      document: GetCustomerGroupListDocument,
      getItems: (data) => data.customerGroups,
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
  ngOnInit() {
    super.ngOnInit();
    const activeGroupId$ = this.route.paramMap.pipe(map((pm) => pm.get("contents")), distinctUntilChanged());
    this.listIsEmpty$ = this.items$.pipe(map((groups) => groups.length === 0));
    this.activeGroup$ = combineLatest(this.items$, activeGroupId$).pipe(map(([groups, activeGroupId]) => {
      if (activeGroupId) {
        return groups.find((g) => g.id === activeGroupId);
      }
    }));
    this.activeIndex$ = combineLatest(this.items$, activeGroupId$).pipe(map(([groups, activeGroupId]) => {
      if (activeGroupId) {
        return groups.findIndex((g) => g.id === activeGroupId);
      } else {
        return -1;
      }
    }));
    const membersResult$ = combineLatest(this.activeGroup$, this.fetchGroupMembers$, this.refreshActiveGroupMembers$).pipe(switchMap(([activeGroup, {
      skip,
      take: take2,
      filterTerm
    }]) => {
      if (activeGroup) {
        return this.dataService.customer.getCustomerGroupWithCustomers(activeGroup.id, {
          skip,
          take: take2,
          filter: {
            emailAddress: {
              contains: filterTerm
            }
          }
        }).mapStream((res) => res.customerGroup?.customers);
      } else {
        return of(void 0);
      }
    }));
    this.members$ = membersResult$.pipe(map((res) => res?.items ?? []));
    this.membersTotal$ = membersResult$.pipe(map((res) => res?.totalItems ?? 0));
  }
  closeMembers() {
    const params = __spreadValues({}, this.route.snapshot.params);
    delete params.contents;
    this.router.navigate(["./", params], {
      relativeTo: this.route,
      queryParamsHandling: "preserve"
    });
  }
  addToGroup(group) {
    this.modalService.fromComponent(AddCustomerToGroupDialogComponent, {
      locals: {
        group,
        route: this.route
      },
      size: "md",
      verticalAlign: "top"
    }).pipe(switchMap((customerIds) => customerIds ? this.dataService.customer.addCustomersToGroup(group.id, customerIds).pipe(mapTo(customerIds)) : EMPTY)).subscribe({
      next: (result) => {
        this.notificationService.success(marker(`customer.add-customers-to-group-success`), {
          customerCount: result.length,
          groupName: group.name
        });
        this.refreshActiveGroupMembers$.next();
      }
    });
  }
  static {
    this.ɵfac = function CustomerGroupListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerGroupListComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerGroupListComponent,
      selectors: [["vdr-customer-group-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 12,
      vars: 7,
      consts: [["locationId", "customer-group-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "closeClicked", "rightPanelOpen"], ["vdrSplitViewLeft", ""], ["vdrSplitViewRight", "", 3, "splitViewTitle"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters", "activeIndex"], ["locationId", "customer-group-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], ["id", "view-contents", 3, "heading", "optional"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "customField", "sorts"], ["queryParamsHandling", "preserve", 1, "button-small", "bg-weight-150", 3, "routerLink"], ["shape", "file-group"], [4, "ngIf"], [1, "button-ghost", "ml-4", 3, "click"], ["locationId", "customer-group-members-list", 3, "fetchParamsChange", "members", "route", "totalItems", "activeGroup"]],
      template: function CustomerGroupListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, CustomerGroupListComponent_a_5_Template, 4, 5, "a", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-split-view", 2);
          ɵɵpipe(8, "async");
          ɵɵlistener("closeClicked", function CustomerGroupListComponent_Template_vdr_split_view_closeClicked_7_listener() {
            return ctx.closeMembers();
          });
          ɵɵtemplate(9, CustomerGroupListComponent_ng_template_9_Template, 25, 47, "ng-template", 3)(10, CustomerGroupListComponent_ng_template_10_Template, 2, 3, "ng-template", 4);
          ɵɵpipe(11, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_2_0;
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", "CreateCustomerGroup");
          ɵɵadvance(2);
          ɵɵproperty("rightPanelOpen", ɵɵpipeBind1(8, 3, ctx.activeGroup$));
          ɵɵadvance(3);
          ɵɵproperty("splitViewTitle", (tmp_2_0 = ɵɵpipeBind1(11, 5, ctx.activeGroup$)) == null ? null : tmp_2_0.name);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, SplitViewComponent, SplitViewLeftDirective, SplitViewRightDirective, PageBlockComponent, CustomerGroupMemberListComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: ["vdr-empty-placeholder[_ngcontent-%COMP%]{flex:1}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerGroupListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-group-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="customer-group-list"></vdr-action-bar-items>
            <a class="btn btn-primary" *vdrIfPermissions="'CreateCustomerGroup'" [routerLink]="['./', 'create']">
                <clr-icon shape="plus"></clr-icon>
                {{ 'customer.create-new-customer-group' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="customer-group-list" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<vdr-split-view [rightPanelOpen]="activeGroup$ | async" (closeClicked)="closeMembers()">
    <ng-template vdrSplitViewLeft>
        <vdr-data-table-2
            class="mt-2"
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
                locationId="customer-group-list"
                [hostComponent]="this"
                [selectionManager]="selectionManager"
            ></vdr-bulk-action-menu>
            <vdr-dt2-search
                [searchTermControl]="searchTermControl"
                [searchTermPlaceholder]="'common.search-by-name' | translate"
            ></vdr-dt2-search>
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
            <vdr-dt2-custom-field-column *ngFor="let field of customFields" [customField]="field" [sorts]="sorts" />
            <vdr-dt2-column
                [heading]="'common.view-contents' | translate" id="view-contents"
                [optional]="false"
            >
                <ng-template let-customerGroup="item">
                    <a
                        class="button-small bg-weight-150"
                        [routerLink]="['./', { contents: customerGroup.id }]"
                        queryParamsHandling="preserve"
                    >
                        <span>{{ 'customer.view-group-members' | translate }}</span>
                        <clr-icon shape="file-group"></clr-icon>
                    </a>
                </ng-template>
            </vdr-dt2-column>
        </vdr-data-table-2>
    </ng-template>
    <ng-template vdrSplitViewRight [splitViewTitle]="(activeGroup$ | async)?.name">
        <ng-container *ngIf="activeGroup$ | async as activeGroup">
            <button class="button-ghost ml-4" (click)="addToGroup(activeGroup)">
                <clr-icon shape="plus"></clr-icon>
                <span>{{
                    'customer.add-customers-to-group' | translate : { groupName: activeGroup.name }
                }}</span>
            </button>
            <vdr-customer-group-member-list
                locationId="customer-group-members-list"
                [members]="members$ | async"
                [route]="route"
                [totalItems]="membersTotal$ | async"
                [activeGroup]="activeGroup$ | async"
                (fetchParamsChange)="fetchGroupMembers$.next($event)"
            />
        </ng-container>
    </ng-template>
</vdr-split-view>
`,
      styles: ["vdr-empty-placeholder{flex:1}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: NotificationService
  }, {
    type: ModalService
  }, {
    type: ActivatedRoute
  }, {
    type: Router
  }], null);
})();
var removeCustomerGroupMembersBulkAction = {
  location: "customer-group-members-list",
  label: marker("customer.remove-from-group"),
  icon: "trash",
  iconClass: "is-danger",
  requiresPermission: Permission.UpdateCustomerGroup,
  onClick: ({
    injector,
    selection,
    hostComponent,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    const dataService = injector.get(DataService);
    const notificationService = injector.get(NotificationService);
    const group = hostComponent.activeGroup;
    const customerIds = selection.map((s) => s.id);
    dataService.customer.removeCustomersFromGroup(group.id, customerIds).subscribe({
      complete: () => {
        notificationService.success(marker(`customer.remove-customers-from-group-success`), {
          customerCount: customerIds.length,
          groupName: group.name
        });
        clearSelection();
        hostComponent.refresh();
      }
    });
  }
};
var deleteCustomersBulkAction = createBulkDeleteAction({
  location: "customer-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteCustomer),
  getItemName: (item) => item.firstName + " " + item.lastName,
  bulkDelete: (dataService, ids) => dataService.customer.deleteCustomers(ids).pipe(map((res) => res.deleteCustomers))
});
var CUSTOMER_LIST_QUERY = gql`
    query CustomerListQuery($options: CustomerListOptions) {
        customers(options: $options) {
            items {
                ...CustomerListItem
            }
            totalItems
        }
    }

    fragment CustomerListItem on Customer {
        id
        createdAt
        updatedAt
        title
        firstName
        lastName
        emailAddress
        user {
            id
            verified
        }
    }
`;
var CustomerListComponent = class _CustomerListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.dataTableListId = "customer-list";
    this.customFields = this.getCustomFieldConfig("Customer");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "firstName",
      type: {
        kind: "text"
      },
      label: marker("customer.first-name"),
      filterField: "firstName"
    }).addFilter({
      name: "lastName",
      type: {
        kind: "text"
      },
      label: marker("customer.last-name"),
      filterField: "lastName"
    }).addFilter({
      name: "emailAddress",
      type: {
        kind: "text"
      },
      label: marker("customer.email-address"),
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
    this.configure({
      document: CustomerListQueryDocument,
      getItems: (data) => data.customers,
      setVariables: (skip, take2) => ({
        options: {
          skip,
          take: take2,
          filter: __spreadValues(__spreadValues({}, this.searchTermControl.value ? {
            emailAddress: {
              contains: this.searchTermControl.value
            },
            lastName: {
              contains: this.searchTermControl.value
            },
            postalCode: {
              contains: this.searchTermControl.value
            }
          } : {}), this.filters.createFilterInput()),
          filterOperator: this.searchTermControl.value ? LogicalOperator.OR : LogicalOperator.AND,
          sort: this.sorts.createSortInput()
        }
      }),
      refreshListOnChanges: [this.sorts.valueChanges, this.filters.valueChanges]
    });
  }
  static {
    this.ɵfac = function CustomerListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomerListComponent,
      selectors: [["vdr-customer-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 34,
      vars: 48,
      consts: [["locationId", "customer-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "customer-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "status", 3, "heading"], ["id", "email-address", 3, "heading", "sort"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "customer"], [3, "customField", "sorts"]],
      template: function CustomerListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, CustomerListComponent_a_5_Template, 4, 5, "a", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 2);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function CustomerListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function CustomerListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function CustomerListComponent_Template_vdr_data_table_2_visibleColumnsChange_7_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 3)(13, "vdr-dt2-search", 4);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 5);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, CustomerListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, CustomerListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 7);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, CustomerListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 8);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, CustomerListComponent_ng_template_26_Template, 4, 6, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 9);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, CustomerListComponent_ng_template_29_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 10);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, CustomerListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(33, CustomerListComponent_vdr_dt2_custom_field_column_33_Template, 1, 2, "vdr-dt2-custom-field-column", 11);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", "CreateCustomer");
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(8, 26, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 28, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 30, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 32, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 34, "customer.search-customers-by-email-last-name-postal-code"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 36, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 38, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 40, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 42, "customer.name"))("optional", false)("sort", ctx.sorts.get("lastName"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 44, "common.status"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 46, "customer.email-address"))("sort", ctx.sorts.get("emailAddress"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, CustomerStatusLabelComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: [".search-input[_ngcontent-%COMP%]{margin-top:6px;min-width:300px}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-customer-list",
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left> </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="customer-list"></vdr-action-bar-items>
            <a class="btn btn-primary" [routerLink]="['./create']" *vdrIfPermissions="'CreateCustomer'">
                <clr-icon shape="plus"></clr-icon>
                {{ 'customer.create-new-customer' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="customer-list" />
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
        locationId="customer-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    ></vdr-bulk-action-menu>
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'customer.search-customers-by-email-last-name-postal-code' | translate"
    ></vdr-dt2-search>
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-customer="item">
            {{ customer.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-customer="item">
            {{ customer.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-customer="item">
            {{ customer.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'customer.name' | translate" id="name" [optional]="false" [sort]="sorts.get('lastName')">
        <ng-template let-customer="item">
            <a class="button-ghost" [routerLink]="['./', customer.id]"
                ><span> {{ customer.title }} {{ customer.firstName }} {{ customer.lastName }} </span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.status' | translate" id="status">
        <ng-template let-customer="item">
            <vdr-customer-status-label [customer]="customer" />
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'customer.email-address' | translate" id="email-address" [sort]="sorts.get('emailAddress')">
        <ng-template let-customer="item">
            {{ customer.emailAddress }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column *ngFor="let field of customFields" [customField]="field" [sorts]="sorts" />
</vdr-data-table-2>
`,
      styles: [".search-input{margin-top:6px;min-width:300px}\n"]
    }]
  }], () => [], null);
})();
var createRoutes = (pageService) => [{
  path: "customers",
  component: PageComponent,
  data: {
    locationId: "customer-list",
    breadcrumb: marker("breadcrumb.customers")
  },
  children: pageService.getPageTabRoutes("customer-list")
}, {
  path: "customers/:id",
  component: PageComponent,
  data: {
    locationId: "customer-detail",
    breadcrumb: {
      label: marker("breadcrumb.customers"),
      link: ["../", "customers"]
    }
  },
  children: pageService.getPageTabRoutes("customer-detail")
}, {
  path: "groups",
  component: PageComponent,
  data: {
    locationId: "customer-group-list",
    breadcrumb: marker("breadcrumb.customer-groups")
  },
  children: pageService.getPageTabRoutes("customer-group-list")
}, {
  path: "groups/:id",
  component: PageComponent,
  data: {
    locationId: "customer-group-detail",
    breadcrumb: {
      label: marker("breadcrumb.customer-groups"),
      link: ["../", "groups"]
    }
  },
  children: pageService.getPageTabRoutes("customer-group-detail")
}];
function customerBreadcrumb(data, params) {
  return detailBreadcrumb({
    entity: data.entity,
    id: params.id,
    breadcrumbKey: "breadcrumb.customers",
    getName: (customer) => `${customer.firstName} ${customer.lastName}`,
    route: "customers"
  });
}
var CustomerModule = class _CustomerModule {
  static {
    this.hasRegisteredTabsAndBulkActions = false;
  }
  constructor(bulkActionRegistryService, pageService) {
    if (_CustomerModule.hasRegisteredTabsAndBulkActions) {
      return;
    }
    bulkActionRegistryService.registerBulkAction(deleteCustomersBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteCustomerGroupsBulkAction);
    bulkActionRegistryService.registerBulkAction(removeCustomerGroupMembersBulkAction);
    pageService.registerPageTab({
      priority: 0,
      location: "customer-list",
      tab: marker("customer.customers"),
      route: "",
      component: CustomerListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "customer-detail",
      tab: marker("customer.customer"),
      route: "",
      component: detailComponentWithResolver({
        component: CustomerDetailComponent,
        query: CustomerDetailQueryDocument,
        entityKey: "customer",
        variables: {
          orderListOptions: {
            sort: {
              orderPlacedAt: SortOrder.DESC
            }
          }
        },
        getBreadcrumbs: (entity) => [{
          label: entity ? `${entity?.firstName} ${entity?.lastName}` : marker("customer.create-new-customer"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "customer-group-list",
      tab: marker("customer.customer-groups"),
      route: "",
      component: CustomerGroupListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "customer-group-detail",
      tab: marker("customer.customer-group"),
      route: "",
      component: detailComponentWithResolver({
        component: CustomerGroupDetailComponent,
        query: GetCustomerGroupDetailDocument,
        entityKey: "customerGroup",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("customer.create-new-customer-group"),
          link: [entity?.id]
        }]
      })
    });
    _CustomerModule.hasRegisteredTabsAndBulkActions = true;
  }
  static {
    this.ɵfac = function CustomerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerModule)(ɵɵinject(BulkActionRegistryService), ɵɵinject(PageService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CustomerModule,
      declarations: [CustomerListComponent, CustomerDetailComponent, CustomerStatusLabelComponent, AddressCardComponent, CustomerGroupListComponent, CustomerGroupDetailDialogComponent, AddCustomerToGroupDialogComponent, CustomerGroupMemberListComponent, SelectCustomerGroupDialogComponent, CustomerHistoryComponent, AddressDetailDialogComponent, CustomerHistoryEntryHostComponent, CustomerGroupDetailComponent],
      imports: [SharedModule, RouterModule],
      exports: [AddressCardComponent]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, RouterModule.forChild([])],
      providers: [{
        provide: ROUTES,
        useFactory: (pageService) => createRoutes(pageService),
        multi: true,
        deps: [PageService]
      }],
      declarations: [CustomerListComponent, CustomerDetailComponent, CustomerStatusLabelComponent, AddressCardComponent, CustomerGroupListComponent, CustomerGroupDetailDialogComponent, AddCustomerToGroupDialogComponent, CustomerGroupMemberListComponent, SelectCustomerGroupDialogComponent, CustomerHistoryComponent, AddressDetailDialogComponent, CustomerHistoryEntryHostComponent, CustomerGroupDetailComponent],
      exports: [AddressCardComponent]
    }]
  }], () => [{
    type: BulkActionRegistryService
  }, {
    type: PageService
  }], null);
})();
export {
  AddCustomerToGroupDialogComponent,
  AddressCardComponent,
  AddressDetailDialogComponent,
  CUSTOMER_DETAIL_QUERY,
  CUSTOMER_GROUP_DETAIL_QUERY,
  CUSTOMER_LIST_QUERY,
  CustomerDetailComponent,
  CustomerGroupDetailComponent,
  CustomerGroupDetailDialogComponent,
  CustomerGroupListComponent,
  CustomerGroupMemberListComponent,
  CustomerHistoryComponent,
  CustomerHistoryEntryHostComponent,
  CustomerListComponent,
  CustomerModule,
  CustomerStatusLabelComponent,
  GET_CUSTOMER_GROUP_LIST,
  SelectCustomerGroupDialogComponent,
  createRoutes,
  customerBreadcrumb,
  deleteCustomerGroupsBulkAction,
  deleteCustomersBulkAction,
  removeCustomerGroupMembersBulkAction
};
//# sourceMappingURL=@vendure_admin-ui_customer.js.map
