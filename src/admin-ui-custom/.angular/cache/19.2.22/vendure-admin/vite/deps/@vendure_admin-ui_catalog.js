import {
  require_normalize_string
} from "./chunk-RIQLGRLG.js";
import {
  ASSET_FRAGMENT,
  ActionBarComponent,
  ActionBarDropdownMenuComponent,
  ActionBarItemsComponent,
  ActionBarLeftComponent,
  ActionBarRightComponent,
  AddFilterPresetButtonComponent,
  AssetDetailQueryDocument,
  AssetFileInputComponent,
  AssetGalleryComponent,
  AssetPreviewComponent,
  AssetPreviewPipe,
  AssetSearchInputComponent,
  AssetsComponent,
  BaseDetailComponent,
  BaseEntityResolver,
  BaseListComponent,
  BulkActionMenuComponent,
  BulkActionRegistryService,
  COLLECTION_FRAGMENT,
  CanDeactivateDetailGuard,
  CardComponent,
  CardControlsDirective,
  ChannelAssignmentControlComponent,
  ChannelBadgeComponent,
  ChannelLabelPipe,
  ChipComponent,
  CollectionDetailQueryDocument,
  ConfigurableInputComponent,
  CurrencyInputComponent,
  CustomDetailComponentHostComponent,
  DataService,
  DataTable2ColumnComponent,
  DataTable2Component,
  DataTable2SearchComponent,
  DataTableColumnPickerComponent,
  DataTableCustomFieldColumnComponent,
  DataTableFilterPresetsComponent,
  DataTableFiltersComponent,
  DeletionResult,
  DialogButtonsDirective,
  DialogTitleDirective,
  DisabledDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuComponent,
  DropdownTriggerDirective,
  DuplicateEntityDialogComponent,
  EmptyPlaceholderComponent,
  EntityInfoComponent,
  FACET_WITH_VALUE_LIST_FRAGMENT,
  FacetValueChipComponent,
  FacetValueFormInputComponent,
  FacetValueSelectorComponent,
  FormFieldComponent,
  FormFieldControlDirective,
  FormItemComponent,
  GetCollectionListDocument,
  GetFacetDetailDocument,
  GetFacetListDocument,
  GetProductDetailDocument,
  GetProductVariantDetailDocument,
  GetProductVariantsQuickJumpDocument,
  GetStockLocationListDocument,
  GlobalFlag,
  HasPermissionPipe,
  I18nService,
  IfDefaultChannelActiveDirective,
  IfMultichannelDirective,
  IfPermissionsDirective,
  ItemsPerPageControlsComponent,
  JobQueueService,
  JobState,
  LanguageSelectorComponent,
  LocalStorageService,
  LocaleCurrencyNamePipe,
  LocaleCurrencyPipe,
  LocaleDatePipe,
  LogicalOperator,
  ModalService,
  NotificationService,
  PRODUCT_DETAIL_FRAGMENT,
  PRODUCT_VARIANT_PRICE_FRAGMENT,
  PageBlockComponent,
  PageBodyComponent,
  PageComponent,
  PageDetailLayoutComponent,
  PageDetailSidebarComponent,
  PageEntityInfoComponent,
  PageHeaderComponent,
  PageHeaderDescriptionComponent,
  PageService,
  PageTitleComponent,
  PaginationControlsComponent,
  Permission,
  PermissionsService,
  ProductListQueryDocument,
  ProductVariantListQueryDocument,
  ProductVariantUpdateMutationDocument,
  RichTextEditorComponent,
  SelectionManager,
  ServerConfigService,
  SharedModule,
  SortOrder,
  SortPipe,
  SplitViewComponent,
  SplitViewLeftDirective,
  SplitViewRightDirective,
  StringToColorPipe,
  TAG_FRAGMENT,
  TabbedCustomFieldsComponent,
  TypedBaseDetailComponent,
  TypedBaseListComponent,
  UiExtensionPointComponent,
  createBulkAssignToChannelAction,
  createBulkDeleteAction,
  createBulkRemoveFromChannelAction,
  createResolveData,
  createUpdatedTranslatable,
  currentChannelIsNotDefault,
  detailComponentWithResolver,
  encodeConfigArgValue,
  findTranslation,
  getChannelCodeFromUserStatus,
  getConfigArgValue,
  getCustomFieldsDefaults,
  getDefaultUiLanguage,
  gql,
  isMultiChannel,
  require_pick,
  require_shared_constants,
  require_shared_utils,
  require_unique,
  unicodePatternValidator
} from "./chunk-YDQAHX43.js";
import {
  ClrAlert,
  ClrAlertItem,
  ClrAlertText,
  ClrCheckbox,
  ClrCheckboxWrapper,
  ClrIconCustomTag,
  ClrInput,
  ClrInputContainer,
  ClrLabel,
  ClrSpinner
} from "./chunk-SWTGRTQU.js";
import {
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
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray
} from "./chunk-DCTM64NI.js";
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
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  MaxValidator,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  PatternValidator,
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
  ActivatedRoute,
  ROUTES,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-A2BPDF5Y.js";
import "./chunk-FRAMVYFW.js";
import {
  AsyncPipe,
  NgClass,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  SlicePipe
} from "./chunk-3WBC65NO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Optional,
  Output,
  Pipe,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewChildren,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
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
  filter,
  finalize,
  forkJoin,
  from,
  lastValueFrom,
  map,
  merge,
  mergeMap,
  of,
  shareReplay,
  skip,
  startWith,
  switchMap,
  switchMapTo,
  take,
  takeUntil,
  tap,
  throwError
} from "./chunk-OGZ4D63M.js";
import {
  marker
} from "./chunk-D3BILYUK.js";
import {
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TXDUYLVM.js";

// ../../node_modules/@vendure/common/lib/generated-types.js
var require_generated_types = __commonJS({
  "../../node_modules/@vendure/common/lib/generated-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StockMovementType = exports.SortOrder = exports.SettingsStoreScopeType = exports.Permission = exports.OrderType = exports.MetricType = exports.MetricInterval = exports.LogicalOperator = exports.LanguageCode = exports.JobState = exports.HistoryEntryType = exports.GlobalFlag = exports.ErrorCode = exports.DeletionResult = exports.CurrencyCode = exports.AssetType = exports.AdjustmentType = void 0;
    var AdjustmentType;
    (function(AdjustmentType2) {
      AdjustmentType2["DISTRIBUTED_ORDER_PROMOTION"] = "DISTRIBUTED_ORDER_PROMOTION";
      AdjustmentType2["OTHER"] = "OTHER";
      AdjustmentType2["PROMOTION"] = "PROMOTION";
    })(AdjustmentType || (exports.AdjustmentType = AdjustmentType = {}));
    var AssetType;
    (function(AssetType2) {
      AssetType2["BINARY"] = "BINARY";
      AssetType2["IMAGE"] = "IMAGE";
      AssetType2["VIDEO"] = "VIDEO";
    })(AssetType || (exports.AssetType = AssetType = {}));
    var CurrencyCode;
    (function(CurrencyCode2) {
      CurrencyCode2["AED"] = "AED";
      CurrencyCode2["AFN"] = "AFN";
      CurrencyCode2["ALL"] = "ALL";
      CurrencyCode2["AMD"] = "AMD";
      CurrencyCode2["ANG"] = "ANG";
      CurrencyCode2["AOA"] = "AOA";
      CurrencyCode2["ARS"] = "ARS";
      CurrencyCode2["AUD"] = "AUD";
      CurrencyCode2["AWG"] = "AWG";
      CurrencyCode2["AZN"] = "AZN";
      CurrencyCode2["BAM"] = "BAM";
      CurrencyCode2["BBD"] = "BBD";
      CurrencyCode2["BDT"] = "BDT";
      CurrencyCode2["BGN"] = "BGN";
      CurrencyCode2["BHD"] = "BHD";
      CurrencyCode2["BIF"] = "BIF";
      CurrencyCode2["BMD"] = "BMD";
      CurrencyCode2["BND"] = "BND";
      CurrencyCode2["BOB"] = "BOB";
      CurrencyCode2["BRL"] = "BRL";
      CurrencyCode2["BSD"] = "BSD";
      CurrencyCode2["BTN"] = "BTN";
      CurrencyCode2["BWP"] = "BWP";
      CurrencyCode2["BYN"] = "BYN";
      CurrencyCode2["BZD"] = "BZD";
      CurrencyCode2["CAD"] = "CAD";
      CurrencyCode2["CDF"] = "CDF";
      CurrencyCode2["CHF"] = "CHF";
      CurrencyCode2["CLP"] = "CLP";
      CurrencyCode2["CNY"] = "CNY";
      CurrencyCode2["COP"] = "COP";
      CurrencyCode2["CRC"] = "CRC";
      CurrencyCode2["CUC"] = "CUC";
      CurrencyCode2["CUP"] = "CUP";
      CurrencyCode2["CVE"] = "CVE";
      CurrencyCode2["CZK"] = "CZK";
      CurrencyCode2["DJF"] = "DJF";
      CurrencyCode2["DKK"] = "DKK";
      CurrencyCode2["DOP"] = "DOP";
      CurrencyCode2["DZD"] = "DZD";
      CurrencyCode2["EGP"] = "EGP";
      CurrencyCode2["ERN"] = "ERN";
      CurrencyCode2["ETB"] = "ETB";
      CurrencyCode2["EUR"] = "EUR";
      CurrencyCode2["FJD"] = "FJD";
      CurrencyCode2["FKP"] = "FKP";
      CurrencyCode2["GBP"] = "GBP";
      CurrencyCode2["GEL"] = "GEL";
      CurrencyCode2["GHS"] = "GHS";
      CurrencyCode2["GIP"] = "GIP";
      CurrencyCode2["GMD"] = "GMD";
      CurrencyCode2["GNF"] = "GNF";
      CurrencyCode2["GTQ"] = "GTQ";
      CurrencyCode2["GYD"] = "GYD";
      CurrencyCode2["HKD"] = "HKD";
      CurrencyCode2["HNL"] = "HNL";
      CurrencyCode2["HRK"] = "HRK";
      CurrencyCode2["HTG"] = "HTG";
      CurrencyCode2["HUF"] = "HUF";
      CurrencyCode2["IDR"] = "IDR";
      CurrencyCode2["ILS"] = "ILS";
      CurrencyCode2["INR"] = "INR";
      CurrencyCode2["IQD"] = "IQD";
      CurrencyCode2["IRR"] = "IRR";
      CurrencyCode2["ISK"] = "ISK";
      CurrencyCode2["JMD"] = "JMD";
      CurrencyCode2["JOD"] = "JOD";
      CurrencyCode2["JPY"] = "JPY";
      CurrencyCode2["KES"] = "KES";
      CurrencyCode2["KGS"] = "KGS";
      CurrencyCode2["KHR"] = "KHR";
      CurrencyCode2["KMF"] = "KMF";
      CurrencyCode2["KPW"] = "KPW";
      CurrencyCode2["KRW"] = "KRW";
      CurrencyCode2["KWD"] = "KWD";
      CurrencyCode2["KYD"] = "KYD";
      CurrencyCode2["KZT"] = "KZT";
      CurrencyCode2["LAK"] = "LAK";
      CurrencyCode2["LBP"] = "LBP";
      CurrencyCode2["LKR"] = "LKR";
      CurrencyCode2["LRD"] = "LRD";
      CurrencyCode2["LSL"] = "LSL";
      CurrencyCode2["LYD"] = "LYD";
      CurrencyCode2["MAD"] = "MAD";
      CurrencyCode2["MDL"] = "MDL";
      CurrencyCode2["MGA"] = "MGA";
      CurrencyCode2["MKD"] = "MKD";
      CurrencyCode2["MMK"] = "MMK";
      CurrencyCode2["MNT"] = "MNT";
      CurrencyCode2["MOP"] = "MOP";
      CurrencyCode2["MRU"] = "MRU";
      CurrencyCode2["MUR"] = "MUR";
      CurrencyCode2["MVR"] = "MVR";
      CurrencyCode2["MWK"] = "MWK";
      CurrencyCode2["MXN"] = "MXN";
      CurrencyCode2["MYR"] = "MYR";
      CurrencyCode2["MZN"] = "MZN";
      CurrencyCode2["NAD"] = "NAD";
      CurrencyCode2["NGN"] = "NGN";
      CurrencyCode2["NIO"] = "NIO";
      CurrencyCode2["NOK"] = "NOK";
      CurrencyCode2["NPR"] = "NPR";
      CurrencyCode2["NZD"] = "NZD";
      CurrencyCode2["OMR"] = "OMR";
      CurrencyCode2["PAB"] = "PAB";
      CurrencyCode2["PEN"] = "PEN";
      CurrencyCode2["PGK"] = "PGK";
      CurrencyCode2["PHP"] = "PHP";
      CurrencyCode2["PKR"] = "PKR";
      CurrencyCode2["PLN"] = "PLN";
      CurrencyCode2["PYG"] = "PYG";
      CurrencyCode2["QAR"] = "QAR";
      CurrencyCode2["RON"] = "RON";
      CurrencyCode2["RSD"] = "RSD";
      CurrencyCode2["RUB"] = "RUB";
      CurrencyCode2["RWF"] = "RWF";
      CurrencyCode2["SAR"] = "SAR";
      CurrencyCode2["SBD"] = "SBD";
      CurrencyCode2["SCR"] = "SCR";
      CurrencyCode2["SDG"] = "SDG";
      CurrencyCode2["SEK"] = "SEK";
      CurrencyCode2["SGD"] = "SGD";
      CurrencyCode2["SHP"] = "SHP";
      CurrencyCode2["SLL"] = "SLL";
      CurrencyCode2["SOS"] = "SOS";
      CurrencyCode2["SRD"] = "SRD";
      CurrencyCode2["SSP"] = "SSP";
      CurrencyCode2["STN"] = "STN";
      CurrencyCode2["SVC"] = "SVC";
      CurrencyCode2["SYP"] = "SYP";
      CurrencyCode2["SZL"] = "SZL";
      CurrencyCode2["THB"] = "THB";
      CurrencyCode2["TJS"] = "TJS";
      CurrencyCode2["TMT"] = "TMT";
      CurrencyCode2["TND"] = "TND";
      CurrencyCode2["TOP"] = "TOP";
      CurrencyCode2["TRY"] = "TRY";
      CurrencyCode2["TTD"] = "TTD";
      CurrencyCode2["TWD"] = "TWD";
      CurrencyCode2["TZS"] = "TZS";
      CurrencyCode2["UAH"] = "UAH";
      CurrencyCode2["UGX"] = "UGX";
      CurrencyCode2["USD"] = "USD";
      CurrencyCode2["UYU"] = "UYU";
      CurrencyCode2["UZS"] = "UZS";
      CurrencyCode2["VES"] = "VES";
      CurrencyCode2["VND"] = "VND";
      CurrencyCode2["VUV"] = "VUV";
      CurrencyCode2["WST"] = "WST";
      CurrencyCode2["XAF"] = "XAF";
      CurrencyCode2["XCD"] = "XCD";
      CurrencyCode2["XOF"] = "XOF";
      CurrencyCode2["XPF"] = "XPF";
      CurrencyCode2["YER"] = "YER";
      CurrencyCode2["ZAR"] = "ZAR";
      CurrencyCode2["ZMW"] = "ZMW";
      CurrencyCode2["ZWL"] = "ZWL";
    })(CurrencyCode || (exports.CurrencyCode = CurrencyCode = {}));
    var DeletionResult2;
    (function(DeletionResult3) {
      DeletionResult3["DELETED"] = "DELETED";
      DeletionResult3["NOT_DELETED"] = "NOT_DELETED";
    })(DeletionResult2 || (exports.DeletionResult = DeletionResult2 = {}));
    var ErrorCode;
    (function(ErrorCode2) {
      ErrorCode2["ALREADY_REFUNDED_ERROR"] = "ALREADY_REFUNDED_ERROR";
      ErrorCode2["CANCEL_ACTIVE_ORDER_ERROR"] = "CANCEL_ACTIVE_ORDER_ERROR";
      ErrorCode2["CANCEL_PAYMENT_ERROR"] = "CANCEL_PAYMENT_ERROR";
      ErrorCode2["CHANNEL_DEFAULT_LANGUAGE_ERROR"] = "CHANNEL_DEFAULT_LANGUAGE_ERROR";
      ErrorCode2["COUPON_CODE_EXPIRED_ERROR"] = "COUPON_CODE_EXPIRED_ERROR";
      ErrorCode2["COUPON_CODE_INVALID_ERROR"] = "COUPON_CODE_INVALID_ERROR";
      ErrorCode2["COUPON_CODE_LIMIT_ERROR"] = "COUPON_CODE_LIMIT_ERROR";
      ErrorCode2["CREATE_FULFILLMENT_ERROR"] = "CREATE_FULFILLMENT_ERROR";
      ErrorCode2["DUPLICATE_ENTITY_ERROR"] = "DUPLICATE_ENTITY_ERROR";
      ErrorCode2["EMAIL_ADDRESS_CONFLICT_ERROR"] = "EMAIL_ADDRESS_CONFLICT_ERROR";
      ErrorCode2["EMPTY_ORDER_LINE_SELECTION_ERROR"] = "EMPTY_ORDER_LINE_SELECTION_ERROR";
      ErrorCode2["FACET_IN_USE_ERROR"] = "FACET_IN_USE_ERROR";
      ErrorCode2["FULFILLMENT_STATE_TRANSITION_ERROR"] = "FULFILLMENT_STATE_TRANSITION_ERROR";
      ErrorCode2["GUEST_CHECKOUT_ERROR"] = "GUEST_CHECKOUT_ERROR";
      ErrorCode2["INELIGIBLE_SHIPPING_METHOD_ERROR"] = "INELIGIBLE_SHIPPING_METHOD_ERROR";
      ErrorCode2["INSUFFICIENT_STOCK_ERROR"] = "INSUFFICIENT_STOCK_ERROR";
      ErrorCode2["INSUFFICIENT_STOCK_ON_HAND_ERROR"] = "INSUFFICIENT_STOCK_ON_HAND_ERROR";
      ErrorCode2["INVALID_CREDENTIALS_ERROR"] = "INVALID_CREDENTIALS_ERROR";
      ErrorCode2["INVALID_FULFILLMENT_HANDLER_ERROR"] = "INVALID_FULFILLMENT_HANDLER_ERROR";
      ErrorCode2["ITEMS_ALREADY_FULFILLED_ERROR"] = "ITEMS_ALREADY_FULFILLED_ERROR";
      ErrorCode2["LANGUAGE_NOT_AVAILABLE_ERROR"] = "LANGUAGE_NOT_AVAILABLE_ERROR";
      ErrorCode2["MANUAL_PAYMENT_STATE_ERROR"] = "MANUAL_PAYMENT_STATE_ERROR";
      ErrorCode2["MIME_TYPE_ERROR"] = "MIME_TYPE_ERROR";
      ErrorCode2["MISSING_CONDITIONS_ERROR"] = "MISSING_CONDITIONS_ERROR";
      ErrorCode2["MULTIPLE_ORDER_ERROR"] = "MULTIPLE_ORDER_ERROR";
      ErrorCode2["NATIVE_AUTH_STRATEGY_ERROR"] = "NATIVE_AUTH_STRATEGY_ERROR";
      ErrorCode2["NEGATIVE_QUANTITY_ERROR"] = "NEGATIVE_QUANTITY_ERROR";
      ErrorCode2["NOTHING_TO_REFUND_ERROR"] = "NOTHING_TO_REFUND_ERROR";
      ErrorCode2["NO_ACTIVE_ORDER_ERROR"] = "NO_ACTIVE_ORDER_ERROR";
      ErrorCode2["NO_CHANGES_SPECIFIED_ERROR"] = "NO_CHANGES_SPECIFIED_ERROR";
      ErrorCode2["ORDER_INTERCEPTOR_ERROR"] = "ORDER_INTERCEPTOR_ERROR";
      ErrorCode2["ORDER_LIMIT_ERROR"] = "ORDER_LIMIT_ERROR";
      ErrorCode2["ORDER_MODIFICATION_ERROR"] = "ORDER_MODIFICATION_ERROR";
      ErrorCode2["ORDER_MODIFICATION_STATE_ERROR"] = "ORDER_MODIFICATION_STATE_ERROR";
      ErrorCode2["ORDER_STATE_TRANSITION_ERROR"] = "ORDER_STATE_TRANSITION_ERROR";
      ErrorCode2["PAYMENT_METHOD_MISSING_ERROR"] = "PAYMENT_METHOD_MISSING_ERROR";
      ErrorCode2["PAYMENT_ORDER_MISMATCH_ERROR"] = "PAYMENT_ORDER_MISMATCH_ERROR";
      ErrorCode2["PAYMENT_STATE_TRANSITION_ERROR"] = "PAYMENT_STATE_TRANSITION_ERROR";
      ErrorCode2["PRODUCT_OPTION_GROUP_IN_USE_ERROR"] = "PRODUCT_OPTION_GROUP_IN_USE_ERROR";
      ErrorCode2["PRODUCT_OPTION_IN_USE_ERROR"] = "PRODUCT_OPTION_IN_USE_ERROR";
      ErrorCode2["QUANTITY_TOO_GREAT_ERROR"] = "QUANTITY_TOO_GREAT_ERROR";
      ErrorCode2["REFUND_AMOUNT_ERROR"] = "REFUND_AMOUNT_ERROR";
      ErrorCode2["REFUND_ORDER_STATE_ERROR"] = "REFUND_ORDER_STATE_ERROR";
      ErrorCode2["REFUND_PAYMENT_ID_MISSING_ERROR"] = "REFUND_PAYMENT_ID_MISSING_ERROR";
      ErrorCode2["REFUND_STATE_TRANSITION_ERROR"] = "REFUND_STATE_TRANSITION_ERROR";
      ErrorCode2["SETTLE_PAYMENT_ERROR"] = "SETTLE_PAYMENT_ERROR";
      ErrorCode2["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    })(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
    var GlobalFlag2;
    (function(GlobalFlag3) {
      GlobalFlag3["FALSE"] = "FALSE";
      GlobalFlag3["INHERIT"] = "INHERIT";
      GlobalFlag3["TRUE"] = "TRUE";
    })(GlobalFlag2 || (exports.GlobalFlag = GlobalFlag2 = {}));
    var HistoryEntryType;
    (function(HistoryEntryType2) {
      HistoryEntryType2["CUSTOMER_ADDED_TO_GROUP"] = "CUSTOMER_ADDED_TO_GROUP";
      HistoryEntryType2["CUSTOMER_ADDRESS_CREATED"] = "CUSTOMER_ADDRESS_CREATED";
      HistoryEntryType2["CUSTOMER_ADDRESS_DELETED"] = "CUSTOMER_ADDRESS_DELETED";
      HistoryEntryType2["CUSTOMER_ADDRESS_UPDATED"] = "CUSTOMER_ADDRESS_UPDATED";
      HistoryEntryType2["CUSTOMER_DETAIL_UPDATED"] = "CUSTOMER_DETAIL_UPDATED";
      HistoryEntryType2["CUSTOMER_EMAIL_UPDATE_REQUESTED"] = "CUSTOMER_EMAIL_UPDATE_REQUESTED";
      HistoryEntryType2["CUSTOMER_EMAIL_UPDATE_VERIFIED"] = "CUSTOMER_EMAIL_UPDATE_VERIFIED";
      HistoryEntryType2["CUSTOMER_NOTE"] = "CUSTOMER_NOTE";
      HistoryEntryType2["CUSTOMER_PASSWORD_RESET_REQUESTED"] = "CUSTOMER_PASSWORD_RESET_REQUESTED";
      HistoryEntryType2["CUSTOMER_PASSWORD_RESET_VERIFIED"] = "CUSTOMER_PASSWORD_RESET_VERIFIED";
      HistoryEntryType2["CUSTOMER_PASSWORD_UPDATED"] = "CUSTOMER_PASSWORD_UPDATED";
      HistoryEntryType2["CUSTOMER_REGISTERED"] = "CUSTOMER_REGISTERED";
      HistoryEntryType2["CUSTOMER_REMOVED_FROM_GROUP"] = "CUSTOMER_REMOVED_FROM_GROUP";
      HistoryEntryType2["CUSTOMER_VERIFIED"] = "CUSTOMER_VERIFIED";
      HistoryEntryType2["ORDER_CANCELLATION"] = "ORDER_CANCELLATION";
      HistoryEntryType2["ORDER_COUPON_APPLIED"] = "ORDER_COUPON_APPLIED";
      HistoryEntryType2["ORDER_COUPON_REMOVED"] = "ORDER_COUPON_REMOVED";
      HistoryEntryType2["ORDER_CURRENCY_UPDATED"] = "ORDER_CURRENCY_UPDATED";
      HistoryEntryType2["ORDER_CUSTOMER_UPDATED"] = "ORDER_CUSTOMER_UPDATED";
      HistoryEntryType2["ORDER_FULFILLMENT"] = "ORDER_FULFILLMENT";
      HistoryEntryType2["ORDER_FULFILLMENT_TRANSITION"] = "ORDER_FULFILLMENT_TRANSITION";
      HistoryEntryType2["ORDER_MODIFIED"] = "ORDER_MODIFIED";
      HistoryEntryType2["ORDER_NOTE"] = "ORDER_NOTE";
      HistoryEntryType2["ORDER_PAYMENT_TRANSITION"] = "ORDER_PAYMENT_TRANSITION";
      HistoryEntryType2["ORDER_REFUND_TRANSITION"] = "ORDER_REFUND_TRANSITION";
      HistoryEntryType2["ORDER_STATE_TRANSITION"] = "ORDER_STATE_TRANSITION";
    })(HistoryEntryType || (exports.HistoryEntryType = HistoryEntryType = {}));
    var JobState2;
    (function(JobState3) {
      JobState3["CANCELLED"] = "CANCELLED";
      JobState3["COMPLETED"] = "COMPLETED";
      JobState3["FAILED"] = "FAILED";
      JobState3["PENDING"] = "PENDING";
      JobState3["RETRYING"] = "RETRYING";
      JobState3["RUNNING"] = "RUNNING";
    })(JobState2 || (exports.JobState = JobState2 = {}));
    var LanguageCode;
    (function(LanguageCode2) {
      LanguageCode2["af"] = "af";
      LanguageCode2["ak"] = "ak";
      LanguageCode2["am"] = "am";
      LanguageCode2["ar"] = "ar";
      LanguageCode2["as"] = "as";
      LanguageCode2["az"] = "az";
      LanguageCode2["be"] = "be";
      LanguageCode2["bg"] = "bg";
      LanguageCode2["bm"] = "bm";
      LanguageCode2["bn"] = "bn";
      LanguageCode2["bo"] = "bo";
      LanguageCode2["br"] = "br";
      LanguageCode2["bs"] = "bs";
      LanguageCode2["ca"] = "ca";
      LanguageCode2["ce"] = "ce";
      LanguageCode2["co"] = "co";
      LanguageCode2["cs"] = "cs";
      LanguageCode2["cu"] = "cu";
      LanguageCode2["cy"] = "cy";
      LanguageCode2["da"] = "da";
      LanguageCode2["de"] = "de";
      LanguageCode2["de_AT"] = "de_AT";
      LanguageCode2["de_CH"] = "de_CH";
      LanguageCode2["dz"] = "dz";
      LanguageCode2["ee"] = "ee";
      LanguageCode2["el"] = "el";
      LanguageCode2["en"] = "en";
      LanguageCode2["en_AU"] = "en_AU";
      LanguageCode2["en_CA"] = "en_CA";
      LanguageCode2["en_GB"] = "en_GB";
      LanguageCode2["en_US"] = "en_US";
      LanguageCode2["eo"] = "eo";
      LanguageCode2["es"] = "es";
      LanguageCode2["es_ES"] = "es_ES";
      LanguageCode2["es_MX"] = "es_MX";
      LanguageCode2["et"] = "et";
      LanguageCode2["eu"] = "eu";
      LanguageCode2["fa"] = "fa";
      LanguageCode2["fa_AF"] = "fa_AF";
      LanguageCode2["ff"] = "ff";
      LanguageCode2["fi"] = "fi";
      LanguageCode2["fo"] = "fo";
      LanguageCode2["fr"] = "fr";
      LanguageCode2["fr_CA"] = "fr_CA";
      LanguageCode2["fr_CH"] = "fr_CH";
      LanguageCode2["fy"] = "fy";
      LanguageCode2["ga"] = "ga";
      LanguageCode2["gd"] = "gd";
      LanguageCode2["gl"] = "gl";
      LanguageCode2["gu"] = "gu";
      LanguageCode2["gv"] = "gv";
      LanguageCode2["ha"] = "ha";
      LanguageCode2["he"] = "he";
      LanguageCode2["hi"] = "hi";
      LanguageCode2["hr"] = "hr";
      LanguageCode2["ht"] = "ht";
      LanguageCode2["hu"] = "hu";
      LanguageCode2["hy"] = "hy";
      LanguageCode2["ia"] = "ia";
      LanguageCode2["id"] = "id";
      LanguageCode2["ig"] = "ig";
      LanguageCode2["ii"] = "ii";
      LanguageCode2["is"] = "is";
      LanguageCode2["it"] = "it";
      LanguageCode2["ja"] = "ja";
      LanguageCode2["jv"] = "jv";
      LanguageCode2["ka"] = "ka";
      LanguageCode2["ki"] = "ki";
      LanguageCode2["kk"] = "kk";
      LanguageCode2["kl"] = "kl";
      LanguageCode2["km"] = "km";
      LanguageCode2["kn"] = "kn";
      LanguageCode2["ko"] = "ko";
      LanguageCode2["ks"] = "ks";
      LanguageCode2["ku"] = "ku";
      LanguageCode2["kw"] = "kw";
      LanguageCode2["ky"] = "ky";
      LanguageCode2["la"] = "la";
      LanguageCode2["lb"] = "lb";
      LanguageCode2["lg"] = "lg";
      LanguageCode2["ln"] = "ln";
      LanguageCode2["lo"] = "lo";
      LanguageCode2["lt"] = "lt";
      LanguageCode2["lu"] = "lu";
      LanguageCode2["lv"] = "lv";
      LanguageCode2["mg"] = "mg";
      LanguageCode2["mi"] = "mi";
      LanguageCode2["mk"] = "mk";
      LanguageCode2["ml"] = "ml";
      LanguageCode2["mn"] = "mn";
      LanguageCode2["mr"] = "mr";
      LanguageCode2["ms"] = "ms";
      LanguageCode2["mt"] = "mt";
      LanguageCode2["my"] = "my";
      LanguageCode2["nb"] = "nb";
      LanguageCode2["nd"] = "nd";
      LanguageCode2["ne"] = "ne";
      LanguageCode2["nl"] = "nl";
      LanguageCode2["nl_BE"] = "nl_BE";
      LanguageCode2["nn"] = "nn";
      LanguageCode2["ny"] = "ny";
      LanguageCode2["om"] = "om";
      LanguageCode2["or"] = "or";
      LanguageCode2["os"] = "os";
      LanguageCode2["pa"] = "pa";
      LanguageCode2["pl"] = "pl";
      LanguageCode2["ps"] = "ps";
      LanguageCode2["pt"] = "pt";
      LanguageCode2["pt_BR"] = "pt_BR";
      LanguageCode2["pt_PT"] = "pt_PT";
      LanguageCode2["qu"] = "qu";
      LanguageCode2["rm"] = "rm";
      LanguageCode2["rn"] = "rn";
      LanguageCode2["ro"] = "ro";
      LanguageCode2["ro_MD"] = "ro_MD";
      LanguageCode2["ru"] = "ru";
      LanguageCode2["rw"] = "rw";
      LanguageCode2["sa"] = "sa";
      LanguageCode2["sd"] = "sd";
      LanguageCode2["se"] = "se";
      LanguageCode2["sg"] = "sg";
      LanguageCode2["si"] = "si";
      LanguageCode2["sk"] = "sk";
      LanguageCode2["sl"] = "sl";
      LanguageCode2["sm"] = "sm";
      LanguageCode2["sn"] = "sn";
      LanguageCode2["so"] = "so";
      LanguageCode2["sq"] = "sq";
      LanguageCode2["sr"] = "sr";
      LanguageCode2["st"] = "st";
      LanguageCode2["su"] = "su";
      LanguageCode2["sv"] = "sv";
      LanguageCode2["sw"] = "sw";
      LanguageCode2["sw_CD"] = "sw_CD";
      LanguageCode2["ta"] = "ta";
      LanguageCode2["te"] = "te";
      LanguageCode2["tg"] = "tg";
      LanguageCode2["th"] = "th";
      LanguageCode2["ti"] = "ti";
      LanguageCode2["tk"] = "tk";
      LanguageCode2["to"] = "to";
      LanguageCode2["tr"] = "tr";
      LanguageCode2["tt"] = "tt";
      LanguageCode2["ug"] = "ug";
      LanguageCode2["uk"] = "uk";
      LanguageCode2["ur"] = "ur";
      LanguageCode2["uz"] = "uz";
      LanguageCode2["vi"] = "vi";
      LanguageCode2["vo"] = "vo";
      LanguageCode2["wo"] = "wo";
      LanguageCode2["xh"] = "xh";
      LanguageCode2["yi"] = "yi";
      LanguageCode2["yo"] = "yo";
      LanguageCode2["zh"] = "zh";
      LanguageCode2["zh_Hans"] = "zh_Hans";
      LanguageCode2["zh_Hant"] = "zh_Hant";
      LanguageCode2["zu"] = "zu";
    })(LanguageCode || (exports.LanguageCode = LanguageCode = {}));
    var LogicalOperator2;
    (function(LogicalOperator3) {
      LogicalOperator3["AND"] = "AND";
      LogicalOperator3["OR"] = "OR";
    })(LogicalOperator2 || (exports.LogicalOperator = LogicalOperator2 = {}));
    var MetricInterval;
    (function(MetricInterval2) {
      MetricInterval2["Daily"] = "Daily";
    })(MetricInterval || (exports.MetricInterval = MetricInterval = {}));
    var MetricType;
    (function(MetricType2) {
      MetricType2["AverageOrderValue"] = "AverageOrderValue";
      MetricType2["OrderCount"] = "OrderCount";
      MetricType2["OrderTotal"] = "OrderTotal";
    })(MetricType || (exports.MetricType = MetricType = {}));
    var OrderType;
    (function(OrderType2) {
      OrderType2["Aggregate"] = "Aggregate";
      OrderType2["Regular"] = "Regular";
      OrderType2["Seller"] = "Seller";
    })(OrderType || (exports.OrderType = OrderType = {}));
    var Permission2;
    (function(Permission3) {
      Permission3["Authenticated"] = "Authenticated";
      Permission3["CreateAdministrator"] = "CreateAdministrator";
      Permission3["CreateApiKey"] = "CreateApiKey";
      Permission3["CreateAsset"] = "CreateAsset";
      Permission3["CreateCatalog"] = "CreateCatalog";
      Permission3["CreateChannel"] = "CreateChannel";
      Permission3["CreateCollection"] = "CreateCollection";
      Permission3["CreateCountry"] = "CreateCountry";
      Permission3["CreateCustomer"] = "CreateCustomer";
      Permission3["CreateCustomerGroup"] = "CreateCustomerGroup";
      Permission3["CreateFacet"] = "CreateFacet";
      Permission3["CreateOrder"] = "CreateOrder";
      Permission3["CreatePaymentMethod"] = "CreatePaymentMethod";
      Permission3["CreateProduct"] = "CreateProduct";
      Permission3["CreatePromotion"] = "CreatePromotion";
      Permission3["CreateSeller"] = "CreateSeller";
      Permission3["CreateSettings"] = "CreateSettings";
      Permission3["CreateShippingMethod"] = "CreateShippingMethod";
      Permission3["CreateStockLocation"] = "CreateStockLocation";
      Permission3["CreateSystem"] = "CreateSystem";
      Permission3["CreateTag"] = "CreateTag";
      Permission3["CreateTaxCategory"] = "CreateTaxCategory";
      Permission3["CreateTaxRate"] = "CreateTaxRate";
      Permission3["CreateZone"] = "CreateZone";
      Permission3["DeleteAdministrator"] = "DeleteAdministrator";
      Permission3["DeleteApiKey"] = "DeleteApiKey";
      Permission3["DeleteAsset"] = "DeleteAsset";
      Permission3["DeleteCatalog"] = "DeleteCatalog";
      Permission3["DeleteChannel"] = "DeleteChannel";
      Permission3["DeleteCollection"] = "DeleteCollection";
      Permission3["DeleteCountry"] = "DeleteCountry";
      Permission3["DeleteCustomer"] = "DeleteCustomer";
      Permission3["DeleteCustomerGroup"] = "DeleteCustomerGroup";
      Permission3["DeleteFacet"] = "DeleteFacet";
      Permission3["DeleteOrder"] = "DeleteOrder";
      Permission3["DeletePaymentMethod"] = "DeletePaymentMethod";
      Permission3["DeleteProduct"] = "DeleteProduct";
      Permission3["DeletePromotion"] = "DeletePromotion";
      Permission3["DeleteSeller"] = "DeleteSeller";
      Permission3["DeleteSettings"] = "DeleteSettings";
      Permission3["DeleteShippingMethod"] = "DeleteShippingMethod";
      Permission3["DeleteStockLocation"] = "DeleteStockLocation";
      Permission3["DeleteSystem"] = "DeleteSystem";
      Permission3["DeleteTag"] = "DeleteTag";
      Permission3["DeleteTaxCategory"] = "DeleteTaxCategory";
      Permission3["DeleteTaxRate"] = "DeleteTaxRate";
      Permission3["DeleteZone"] = "DeleteZone";
      Permission3["Owner"] = "Owner";
      Permission3["Public"] = "Public";
      Permission3["ReadAdministrator"] = "ReadAdministrator";
      Permission3["ReadApiKey"] = "ReadApiKey";
      Permission3["ReadAsset"] = "ReadAsset";
      Permission3["ReadCatalog"] = "ReadCatalog";
      Permission3["ReadChannel"] = "ReadChannel";
      Permission3["ReadCollection"] = "ReadCollection";
      Permission3["ReadCountry"] = "ReadCountry";
      Permission3["ReadCustomer"] = "ReadCustomer";
      Permission3["ReadCustomerGroup"] = "ReadCustomerGroup";
      Permission3["ReadFacet"] = "ReadFacet";
      Permission3["ReadOrder"] = "ReadOrder";
      Permission3["ReadPaymentMethod"] = "ReadPaymentMethod";
      Permission3["ReadProduct"] = "ReadProduct";
      Permission3["ReadPromotion"] = "ReadPromotion";
      Permission3["ReadSeller"] = "ReadSeller";
      Permission3["ReadSettings"] = "ReadSettings";
      Permission3["ReadShippingMethod"] = "ReadShippingMethod";
      Permission3["ReadStockLocation"] = "ReadStockLocation";
      Permission3["ReadSystem"] = "ReadSystem";
      Permission3["ReadTag"] = "ReadTag";
      Permission3["ReadTaxCategory"] = "ReadTaxCategory";
      Permission3["ReadTaxRate"] = "ReadTaxRate";
      Permission3["ReadZone"] = "ReadZone";
      Permission3["SuperAdmin"] = "SuperAdmin";
      Permission3["UpdateAdministrator"] = "UpdateAdministrator";
      Permission3["UpdateApiKey"] = "UpdateApiKey";
      Permission3["UpdateAsset"] = "UpdateAsset";
      Permission3["UpdateCatalog"] = "UpdateCatalog";
      Permission3["UpdateChannel"] = "UpdateChannel";
      Permission3["UpdateCollection"] = "UpdateCollection";
      Permission3["UpdateCountry"] = "UpdateCountry";
      Permission3["UpdateCustomer"] = "UpdateCustomer";
      Permission3["UpdateCustomerGroup"] = "UpdateCustomerGroup";
      Permission3["UpdateFacet"] = "UpdateFacet";
      Permission3["UpdateGlobalSettings"] = "UpdateGlobalSettings";
      Permission3["UpdateOrder"] = "UpdateOrder";
      Permission3["UpdatePaymentMethod"] = "UpdatePaymentMethod";
      Permission3["UpdateProduct"] = "UpdateProduct";
      Permission3["UpdatePromotion"] = "UpdatePromotion";
      Permission3["UpdateSeller"] = "UpdateSeller";
      Permission3["UpdateSettings"] = "UpdateSettings";
      Permission3["UpdateShippingMethod"] = "UpdateShippingMethod";
      Permission3["UpdateStockLocation"] = "UpdateStockLocation";
      Permission3["UpdateSystem"] = "UpdateSystem";
      Permission3["UpdateTag"] = "UpdateTag";
      Permission3["UpdateTaxCategory"] = "UpdateTaxCategory";
      Permission3["UpdateTaxRate"] = "UpdateTaxRate";
      Permission3["UpdateZone"] = "UpdateZone";
    })(Permission2 || (exports.Permission = Permission2 = {}));
    var SettingsStoreScopeType;
    (function(SettingsStoreScopeType2) {
      SettingsStoreScopeType2["CHANNEL"] = "CHANNEL";
      SettingsStoreScopeType2["CUSTOM"] = "CUSTOM";
      SettingsStoreScopeType2["GLOBAL"] = "GLOBAL";
      SettingsStoreScopeType2["USER"] = "USER";
      SettingsStoreScopeType2["USER_AND_CHANNEL"] = "USER_AND_CHANNEL";
    })(SettingsStoreScopeType || (exports.SettingsStoreScopeType = SettingsStoreScopeType = {}));
    var SortOrder2;
    (function(SortOrder3) {
      SortOrder3["ASC"] = "ASC";
      SortOrder3["DESC"] = "DESC";
    })(SortOrder2 || (exports.SortOrder = SortOrder2 = {}));
    var StockMovementType;
    (function(StockMovementType2) {
      StockMovementType2["ADJUSTMENT"] = "ADJUSTMENT";
      StockMovementType2["ALLOCATION"] = "ALLOCATION";
      StockMovementType2["CANCELLATION"] = "CANCELLATION";
      StockMovementType2["RELEASE"] = "RELEASE";
      StockMovementType2["RETURN"] = "RETURN";
      StockMovementType2["SALE"] = "SALE";
    })(StockMovementType || (exports.StockMovementType = StockMovementType = {}));
  }
});

// ../../node_modules/@vendure/admin-ui/fesm2022/vendure-admin-ui-catalog.mjs
var import_generated_types = __toESM(require_generated_types(), 1);
var import_normalize_string = __toESM(require_normalize_string(), 1);
var import_shared_utils = __toESM(require_shared_utils(), 1);
var import_unique = __toESM(require_unique(), 1);
var import_shared_constants = __toESM(require_shared_constants(), 1);
var import_pick = __toESM(require_pick(), 1);
function ProductOptionsEditorComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function ProductOptionsEditorComponent_button_20_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r1.detailForm.pristine || ctx_r1.detailForm.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 19);
    ɵɵelement(1, "vdr-tabbed-custom-fields", 20);
    ɵɵpipe(2, "hasPermission");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const optionGroup_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("customFields", ctx_r1.optionGroupCustomFields)("customFieldsFormGroup", optionGroup_r3.get("customFields"))("readonly", !ɵɵpipeBind1(2, 3, ctx_r1.updatePermission));
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const optionControl_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", optionControl_r5.value.id, " ");
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const optionControl_r6 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, optionControl_r6.value.createdAt, "short"), " ");
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const optionControl_r7 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, optionControl_r7.value.updatedAt, "short"), " ");
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 28);
    ɵɵpipe(1, "hasPermission");
  }
  if (rf & 2) {
    const optionControl_r8 = ctx.item;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("formControl", optionControl_r8.get("name"))("readonly", !ɵɵpipeBind1(1, 2, ctx_r1.updatePermission));
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 29);
  }
  if (rf & 2) {
    const optionControl_r9 = ctx.item;
    ɵɵproperty("formControl", optionControl_r9.get("code"));
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-tabbed-custom-fields", 30);
    ɵɵpipe(1, "hasPermission");
  }
  if (rf & 2) {
    const optionControl_r10 = ctx.item;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("customFields", ctx_r1.optionCustomFields)("compact", true)("customFieldsFormGroup", optionControl_r10.get("customFields"))("readonly", !ɵɵpipeBind1(1, 4, ctx_r1.updatePermission));
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-data-table-2", 21);
    ɵɵlistener("pageChange", function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_Template_vdr_data_table_2_pageChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const optionGroup_r3 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.paginationSettings[optionGroup_r3.value.id].currentPage = $event);
    })("itemsPerPageChange", function ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_Template_vdr_data_table_2_itemsPerPageChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const optionGroup_r3 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.paginationSettings[optionGroup_r3.value.id].itemsPerPage = $event);
    });
    ɵɵelementStart(1, "vdr-dt2-column", 22);
    ɵɵpipe(2, "translate");
    ɵɵtemplate(3, ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_3_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-dt2-column", 23);
    ɵɵpipe(5, "translate");
    ɵɵtemplate(6, ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_6_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(7, "vdr-dt2-column", 24);
    ɵɵpipe(8, "translate");
    ɵɵtemplate(9, ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_9_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(10, "vdr-dt2-column", 25);
    ɵɵpipe(11, "translate");
    ɵɵtemplate(12, ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_12_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(13, "vdr-dt2-column", 26);
    ɵɵpipe(14, "translate");
    ɵɵtemplate(15, ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_15_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(16, "vdr-dt2-column", 27);
    ɵɵpipe(17, "translate");
    ɵɵtemplate(18, ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_ng_template_18_Template, 2, 6, "ng-template");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const options_r11 = ctx.ngIf;
    const optionGroup_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("items", options_r11)("trackByPath", "value.id")("itemsPerPage", ctx_r1.paginationSettings[optionGroup_r3.value.id] == null ? null : ctx_r1.paginationSettings[optionGroup_r3.value.id].itemsPerPage)("currentPage", ctx_r1.paginationSettings[optionGroup_r3.value.id] == null ? null : ctx_r1.paginationSettings[optionGroup_r3.value.id].currentPage)("totalItems", options_r11.length);
    ɵɵadvance();
    ɵɵproperty("heading", ɵɵpipeBind1(2, 17, "common.id"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(5, 19, "common.created-at"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(8, 21, "common.updated-at"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(11, 23, "common.name"))("optional", false);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(14, 25, "common.code"))("optional", false);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(17, 27, "common.custom-fields"))("hiddenByDefault", ctx_r1.optionCustomFields.length === 0);
  }
}
function ProductOptionsEditorComponent_form_22_vdr_card_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 10);
    ɵɵelement(1, "vdr-page-entity-info", 11);
    ɵɵelementStart(2, "div", 12)(3, "vdr-form-field", 13);
    ɵɵpipe(4, "translate");
    ɵɵelement(5, "input", 14);
    ɵɵpipe(6, "hasPermission");
    ɵɵelementEnd();
    ɵɵelementStart(7, "vdr-form-field", 15);
    ɵɵpipe(8, "translate");
    ɵɵelement(9, "input", 16);
    ɵɵpipe(10, "hasPermission");
    ɵɵelementEnd()();
    ɵɵtemplate(11, ProductOptionsEditorComponent_form_22_vdr_card_2_ng_container_11_Template, 3, 5, "ng-container", 17)(12, ProductOptionsEditorComponent_form_22_vdr_card_2_vdr_data_table_2_12_Template, 19, 29, "vdr-data-table-2", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const optionGroup_r3 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("formArrayName", i_r12)("title", optionGroup_r3.value.code);
    ɵɵadvance();
    ɵɵproperty("entity", optionGroup_r3.value);
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(4, 11, "common.name"));
    ɵɵadvance(2);
    ɵɵproperty("id", "name-" + i_r12)("readonly", !ɵɵpipeBind1(6, 13, ctx_r1.updatePermission));
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(8, 15, "common.code"));
    ɵɵadvance(2);
    ɵɵproperty("id", "code-" + i_r12)("readonly", !ɵɵpipeBind1(10, 17, ctx_r1.updatePermission));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.optionGroupCustomFields.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getOptions(optionGroup_r3));
  }
}
function ProductOptionsEditorComponent_form_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "form", 7)(1, "div", 8);
    ɵɵtemplate(2, ProductOptionsEditorComponent_form_22_vdr_card_2_Template, 13, 19, "vdr-card", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.detailForm);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.getOptionGroups());
  }
}
function CreateProductOptionGroupDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "catalog.create-product-option-group"), "\n");
  }
}
function CreateProductOptionGroupDialogComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function CreateProductOptionGroupDialogComponent_ng_template_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 8);
    ɵɵlistener("click", function CreateProductOptionGroupDialogComponent_ng_template_8_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.confirm());
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
    ɵɵproperty("disabled", ctx_r1.form.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.confirm"), " ");
  }
}
function CreateProductVariantDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "catalog.create-product-variant"), "\n");
  }
}
function CreateProductVariantDialogComponent_vdr_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-form-field", 7);
    ɵɵelement(1, "ng-select", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const optionGroup_r1 = ctx.$implicit;
    ɵɵproperty("label", optionGroup_r1.name);
    ɵɵadvance();
    ɵɵproperty("items", optionGroup_r1.options)("formControlName", optionGroup_r1.code);
  }
}
function CreateProductVariantDialogComponent_clr_alert_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-alert", 13)(1, "clr-alert-item")(2, "span", 14);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵproperty("clrAlertClosable", false);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "catalog.cannot-create-variants-without-options"), " ");
  }
}
function CreateProductVariantDialogComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15)(1, "clr-alert", 16)(2, "clr-alert-item")(3, "span", 14);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("clrAlertClosable", false);
    ɵɵadvance(3);
    ɵɵtextInterpolate3(" ", ɵɵpipeBind1(5, 4, "catalog.product-variant-exists"), ": ", ctx_r1.existingVariant.name, " (", ctx_r1.existingVariant.sku, ") ");
  }
}
function CreateProductVariantDialogComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function CreateProductVariantDialogComponent_ng_template_16_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 18);
    ɵɵlistener("click", function CreateProductVariantDialogComponent_ng_template_16_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.confirm());
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
    ɵɵproperty("disabled", ctx_r1.form.invalid || ctx_r1.existingVariant || ctx_r1.product.optionGroups.length === 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.confirm"), " ");
  }
}
var _c0 = ["textArea"];
var _c1 = ["editNameInput"];
function OptionValueInputComponent_div_1_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-chip", 7);
    ɵɵlistener("iconClick", function OptionValueInputComponent_div_1_vdr_chip_1_Template_vdr_chip_iconClick_0_listener() {
      const option_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.removeOption(option_r4));
    });
    ɵɵelementStart(1, "span", 8)(2, "input", 9, 1);
    ɵɵlistener("blur", function OptionValueInputComponent_div_1_vdr_chip_1_Template_input_blur_2_listener($event) {
      const i_r6 = ɵɵrestoreView(_r3).index;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.updateOption(i_r6, $event));
    })("click", function OptionValueInputComponent_div_1_vdr_chip_1_Template_input_click_2_listener($event) {
      ɵɵrestoreView(_r3);
      return ɵɵresetView($event.cancelBubble = true);
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "span", 10);
    ɵɵlistener("click", function OptionValueInputComponent_div_1_vdr_chip_1_Template_span_click_4_listener($event) {
      const i_r6 = ɵɵrestoreView(_r3).index;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.editName(i_r6, $event));
    });
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const isLast_r7 = ctx.last;
    const i_r6 = ctx.index;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassProp("selected", isLast_r7 && ctx_r4.lastSelected)("locked", option_r4.locked);
    ɵɵproperty("icon", option_r4.locked ? "lock" : "times")("colorFrom", ctx_r4.groupName);
    ɵɵadvance();
    ɵɵproperty("hidden", ctx_r4.editingIndex !== i_r6);
    ɵɵadvance();
    ɵɵproperty("ngModel", option_r4.name);
    ɵɵadvance(2);
    ɵɵclassProp("editable", !option_r4.locked && !option_r4.id);
    ɵɵproperty("hidden", ctx_r4.editingIndex === i_r6);
    ɵɵadvance();
    ɵɵtextInterpolate(option_r4.name);
  }
}
function OptionValueInputComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, OptionValueInputComponent_div_1_vdr_chip_1_Template, 6, 12, "vdr-chip", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r4.optionValues);
  }
}
function ProductVariantsEditorComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19)(1, "vdr-form-field", 20);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "input", 21);
    ɵɵtwoWayListener("ngModelChange", function ProductVariantsEditorComponent_div_2_Template_input_ngModelChange_3_listener($event) {
      const group_r2 = ɵɵrestoreView(_r1).$implicit;
      ɵɵtwoWayBindingSet(group_r2.name, $event) || (group_r2.name = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "vdr-form-field", 22);
    ɵɵpipe(5, "translate");
    ɵɵelementStart(6, "vdr-option-value-input", 23, 0);
    ɵɵlistener("add", function ProductVariantsEditorComponent_div_2_Template_vdr_option_value_input_add_6_listener($event) {
      const i_r3 = ɵɵrestoreView(_r1).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.addOption(i_r3, $event.name));
    })("remove", function ProductVariantsEditorComponent_div_2_Template_vdr_option_value_input_remove_6_listener($event) {
      const i_r3 = ɵɵrestoreView(_r1).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.removeOption(i_r3, $event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div")(9, "button", 24);
    ɵɵlistener("click", function ProductVariantsEditorComponent_div_2_Template_button_click_9_listener() {
      const group_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.removeOptionGroup(group_r2));
    });
    ɵɵelement(10, "clr-icon", 25);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(2, 7, "catalog.option"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", group_r2.name);
    ɵɵproperty("readonly", !group_r2.isNew);
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(5, 9, "catalog.option-values"));
    ɵɵadvance(2);
    ɵɵproperty("options", group_r2.values)("groupName", group_r2.name)("disabled", group_r2.name === "");
  }
}
function ProductVariantsEditorComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const variant_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", variant_r5.id, " ");
  }
}
function ProductVariantsEditorComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const variant_r6 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r6.createdAt, "short"), " ");
  }
}
function ProductVariantsEditorComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const variant_r7 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r7.updatedAt, "short"), " ");
  }
}
function ProductVariantsEditorComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const variant_r8 = ctx.item;
    ɵɵtextInterpolate1(" ", variant_r8.name, " ");
  }
}
function ProductVariantsEditorComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const variant_r9 = ctx.item;
    ɵɵtextInterpolate1(" ", variant_r9.sku, " ");
  }
}
function ProductVariantsEditorComponent_vdr_dt2_column_33_ng_template_1_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 28);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.ngIf;
    const optionGroup_r11 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("colorFrom", optionGroup_r11.code);
    ɵɵadvance();
    ɵɵtextInterpolate(option_r10.name);
  }
}
function ProductVariantsEditorComponent_vdr_dt2_column_33_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29)(1, "ng-select", 30);
    ɵɵlistener("change", function ProductVariantsEditorComponent_vdr_dt2_column_33_ng_template_1_ng_template_1_Template_ng_select_change_1_listener($event) {
      ɵɵrestoreView(_r12);
      const variant_r13 = ɵɵnextContext().item;
      const optionGroup_r11 = ɵɵnextContext().$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.setOptionToAddToVariant(variant_r13.id, optionGroup_r11.id, $event == null ? null : $event.id));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 31);
    ɵɵlistener("click", function ProductVariantsEditorComponent_vdr_dt2_column_33_ng_template_1_ng_template_1_Template_button_click_2_listener() {
      ɵɵrestoreView(_r12);
      const variant_r13 = ɵɵnextContext().item;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.addOptionToVariant(variant_r13));
    });
    ɵɵelement(3, "clr-icon", 32);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const variant_r13 = ɵɵnextContext().item;
    const optionGroup_r11 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("items", optionGroup_r11.options);
    ɵɵadvance();
    ɵɵclassProp("primary", !!(ctx_r3.optionsToAddToVariant[variant_r13.id] == null ? null : ctx_r3.optionsToAddToVariant[variant_r13.id][optionGroup_r11.id]));
    ɵɵproperty("disabled", !(ctx_r3.optionsToAddToVariant[variant_r13.id] == null ? null : ctx_r3.optionsToAddToVariant[variant_r13.id][optionGroup_r11.id]));
  }
}
function ProductVariantsEditorComponent_vdr_dt2_column_33_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ProductVariantsEditorComponent_vdr_dt2_column_33_ng_template_1_vdr_chip_0_Template, 2, 2, "vdr-chip", 27)(1, ProductVariantsEditorComponent_vdr_dt2_column_33_ng_template_1_ng_template_1_Template, 4, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const variant_r13 = ctx.item;
    const selectOption_r14 = ɵɵreference(2);
    const optionGroup_r11 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r3.getOption(variant_r13, optionGroup_r11.id))("ngIfElse", selectOption_r14);
  }
}
function ProductVariantsEditorComponent_vdr_dt2_column_33_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dt2-column", 26);
    ɵɵtemplate(1, ProductVariantsEditorComponent_vdr_dt2_column_33_ng_template_1_Template, 3, 2, "ng-template");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const optionGroup_r11 = ctx.$implicit;
    ɵɵproperty("heading", optionGroup_r11.name)("id", optionGroup_r11.code);
  }
}
function ProductVariantsEditorComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const variant_r15 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r15.price, variant_r15.currencyCode), " ");
  }
}
function ProductVariantsEditorComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const variant_r16 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r16.priceWithTax, variant_r16.currencyCode), " ");
  }
}
function ProductVariantsEditorComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵlistener("click", function ProductVariantsEditorComponent_ng_template_43_Template_button_click_0_listener() {
      const variant_r18 = ɵɵrestoreView(_r17).item;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.deleteVariant(variant_r18));
    });
    ɵɵelement(1, "clr-icon", 34);
    ɵɵelementEnd();
  }
}
function ApplyFacetDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "catalog.add-facets"));
  }
}
function ApplyFacetDialogComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function ApplyFacetDialogComponent_ng_template_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 4);
    ɵɵlistener("click", function ApplyFacetDialogComponent_ng_template_2_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selectValues());
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
    ɵɵproperty("disabled", ctx_r1.selectedValues.length === 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "catalog.add-facets"), " ");
  }
}
var _c2 = () => ["UpdateCatalog", "UpdateAsset"];
function AssetDetailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function AssetDetailComponent_button_5_Template_button_click_0_listener() {
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
var _c3 = () => ({});
var _c4 = () => ["DeleteCatalog", "DeleteAsset"];
var _c5 = (a0) => ({
  channel: a0
});
var _c6 = (a0) => ({
  channelCode: a0
});
function AssignProductsToChannelDialogComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "catalog.assign-variants-to-channel"));
  }
}
function AssignProductsToChannelDialogComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "catalog.assign-products-to-channel"));
  }
}
function AssignProductsToChannelDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AssignProductsToChannelDialogComponent_ng_template_0_ng_container_0_Template, 3, 3, "ng-container", 14)(1, AssignProductsToChannelDialogComponent_ng_template_0_ng_template_1_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const productModeTitle_r1 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.isProductVariantMode)("ngIfElse", productModeTitle_r1);
  }
}
function AssignProductsToChannelDialogComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "catalog.price-in-channel", ɵɵpureFunction1(4, _c5, ctx_r1.selectedChannel == null ? null : ctx_r1.selectedChannel.code)), " ");
  }
}
function AssignProductsToChannelDialogComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "catalog.no-channel-selected"), " ");
  }
}
function AssignProductsToChannelDialogComponent_tr_33_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, row_r3.pricePreview, ctx_r1.selectedChannel == null ? null : ctx_r1.selectedChannel.defaultCurrencyCode), " ");
  }
}
function AssignProductsToChannelDialogComponent_tr_33_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, " - ");
  }
}
function AssignProductsToChannelDialogComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵpipe(5, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(6, "td");
    ɵɵtemplate(7, AssignProductsToChannelDialogComponent_tr_33_ng_template_7_Template, 2, 4, "ng-template", 11)(8, AssignProductsToChannelDialogComponent_tr_33_ng_template_8_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const noChannelSelected_r4 = ɵɵreference(9);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(row_r3.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 4, row_r3.price, ctx_r1.currentChannel == null ? null : ctx_r1.currentChannel.defaultCurrencyCode));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.selectedChannel)("ngIfElse", noChannelSelected_r4);
  }
}
function AssignProductsToChannelDialogComponent_ng_template_35_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "catalog.assign-to-named-channel", ɵɵpureFunction1(4, _c6, ctx_r1.selectedChannel == null ? null : ctx_r1.selectedChannel.code)), " ");
  }
}
function AssignProductsToChannelDialogComponent_ng_template_35_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "catalog.no-channel-selected"), " ");
  }
}
function AssignProductsToChannelDialogComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function AssignProductsToChannelDialogComponent_ng_template_35_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 16);
    ɵɵlistener("click", function AssignProductsToChannelDialogComponent_ng_template_35_Template_button_click_3_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.assign());
    });
    ɵɵtemplate(4, AssignProductsToChannelDialogComponent_ng_template_35_ng_template_4_Template, 2, 6, "ng-template", 11)(5, AssignProductsToChannelDialogComponent_ng_template_35_ng_template_5_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const noSelection_r6 = ɵɵreference(6);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 4, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r1.selectedChannel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.selectedChannel)("ngIfElse", noSelection_r6);
  }
}
function BulkAddFacetValuesDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "catalog.edit-facet-values"), "\n");
  }
}
function BulkAddFacetValuesDialogComponent_table_7_tr_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r2.sku);
  }
}
function BulkAddFacetValuesDialogComponent_table_7_tr_2_vdr_facet_value_chip_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-facet-value-chip", 15);
    ɵɵlistener("remove", function BulkAddFacetValuesDialogComponent_table_7_tr_2_vdr_facet_value_chip_6_Template_vdr_facet_value_chip_remove_0_listener() {
      const facetValue_r4 = ɵɵrestoreView(_r3).$implicit;
      const item_r2 = ɵɵnextContext().$implicit;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.removeFacetValue(item_r2, facetValue_r4.id));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const facetValue_r4 = ctx.$implicit;
    ɵɵproperty("facetValue", facetValue_r4);
  }
}
function BulkAddFacetValuesDialogComponent_table_7_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td", 10)(2, "div");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, BulkAddFacetValuesDialogComponent_table_7_tr_2_div_4_Template, 2, 1, "div", 11);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td", 12);
    ɵɵtemplate(6, BulkAddFacetValuesDialogComponent_table_7_tr_2_vdr_facet_value_chip_6_Template, 1, 1, "vdr-facet-value-chip", 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r2.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.sku);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", item_r2.facetValues);
  }
}
function BulkAddFacetValuesDialogComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 8)(1, "tbody");
    ɵɵtemplate(2, BulkAddFacetValuesDialogComponent_table_7_tr_2_Template, 7, 3, "tr", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r4.items);
  }
}
function BulkAddFacetValuesDialogComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "clr-spinner");
    ɵɵelementEnd();
  }
}
function BulkAddFacetValuesDialogComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function BulkAddFacetValuesDialogComponent_ng_template_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 18);
    ɵɵlistener("click", function BulkAddFacetValuesDialogComponent_ng_template_10_Template_button_click_3_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.addFacetValues());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r4.selectedValues.length === 0 && ctx_r4.facetValuesRemoved === false);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.update"), " ");
  }
}
var _c7 = (a0) => ({
  $implicit: a0
});
var _c8 = (a0) => ["/catalog/products", a0];
function CollectionContentsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CollectionContentsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const variant_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", variant_r1.id, " ");
  }
}
function CollectionContentsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const variant_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r2.createdAt, "short"), " ");
  }
}
function CollectionContentsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const variant_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r3.updatedAt, "short"), " ");
  }
}
function CollectionContentsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c8, variant_r4.productId));
    ɵɵadvance(2);
    ɵɵtextInterpolate(variant_r4.name);
  }
}
function CollectionContentsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const variant_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", variant_r5.sku, " ");
  }
}
var _c9 = ["collectionRow"];
var _c10 = [[["vdr-bulk-action-menu"]]];
var _c11 = ["vdr-bulk-action-menu"];
var _c12 = (a0, a1, a2, a3) => ({
  itemsPerPage: a0,
  currentPage: a1,
  totalItems: a2,
  id: a3
});
var _c13 = (a0, a1) => ({
  item: a0,
  i: a1,
  depth: 0
});
var _c14 = (a0, a1, a2) => ({
  currentStart: a0,
  currentEnd: a1,
  totalItems: a2
});
var _c15 = (a0, a1) => ({
  depth: a0,
  collection: a1
});
var _c16 = (a0) => ({
  rowItem: a0
});
var _c17 = (a0, a1) => ({
  item: a0,
  depth: a1
});
function CollectionDataTableComponent_vdr_data_table_filter_presets_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-data-table-filter-presets", 19);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("filters", ctx_r1.filters)("dataTableId", ctx_r1.id);
  }
}
function CollectionDataTableComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 20)(1, "div", 21);
    ɵɵelement(2, "div", 22);
    ɵɵelementStart(3, "input", 23);
    ɵɵlistener("change", function CollectionDataTableComponent_th_7_Template_input_change_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onToggleAllClick());
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("checked", ctx_r1.selectionManager == null ? null : ctx_r1.selectionManager.areAllCurrentItemsSelected());
  }
}
function CollectionDataTableComponent_th_8_div_5_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 33);
  }
}
function CollectionDataTableComponent_th_8_div_5_clr_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 34);
  }
}
function CollectionDataTableComponent_th_8_div_5_clr_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 35);
  }
}
function CollectionDataTableComponent_th_8_div_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 36);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sort_r5 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate(sort_r5.sortOrder);
  }
}
function CollectionDataTableComponent_th_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "button", 28);
    ɵɵlistener("click", function CollectionDataTableComponent_th_8_div_5_Template_button_click_1_listener() {
      const sort_r5 = ɵɵrestoreView(_r4).ngIf;
      return ɵɵresetView(sort_r5.toggleSortOrder());
    });
    ɵɵtemplate(2, CollectionDataTableComponent_th_8_div_5_clr_icon_2_Template, 1, 0, "clr-icon", 29)(3, CollectionDataTableComponent_th_8_div_5_clr_icon_3_Template, 1, 0, "clr-icon", 30)(4, CollectionDataTableComponent_th_8_div_5_clr_icon_4_Template, 1, 0, "clr-icon", 31);
    ɵɵelementEnd();
    ɵɵtemplate(5, CollectionDataTableComponent_th_8_div_5_div_5_Template, 2, 1, "div", 32);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sort_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵclassProp("active", sort_r5.sortOrder);
    ɵɵadvance();
    ɵɵproperty("ngIf", !sort_r5.sortOrder);
    ɵɵadvance();
    ɵɵproperty("ngIf", sort_r5.sortOrder === "ASC");
    ɵɵadvance();
    ɵɵproperty("ngIf", sort_r5.sortOrder === "DESC");
    ɵɵadvance();
    ɵɵproperty("ngIf", sort_r5.sortOrder);
  }
}
function CollectionDataTableComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th")(1, "div", 24)(2, "vdr-ui-extension-point", 25)(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵtemplate(5, CollectionDataTableComponent_th_8_div_5_Template, 6, 6, "div", 26);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("expand", column_r6.expand);
    ɵɵadvance();
    ɵɵproperty("ngClass", column_r6.align);
    ɵɵadvance();
    ɵɵproperty("locationId", ctx_r1.id)("metadata", column_r6.id)("topPx", -6)("leftPx", -24);
    ɵɵadvance(2);
    ɵɵtextInterpolate(column_r6.heading);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r6.sort);
  }
}
function CollectionDataTableComponent_tr_13_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CollectionDataTableComponent_tr_13_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CollectionDataTableComponent_tr_13_ng_container_8_vdr_data_table_filters_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-data-table-filters", 45);
  }
  if (rf & 2) {
    const activeFilter_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("filterWithValue", activeFilter_r8)("filters", ctx_r1.filters);
  }
}
function CollectionDataTableComponent_tr_13_ng_container_8_vdr_data_table_filters_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-data-table-filters", 46);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("filters", ctx_r1.filters);
  }
}
function CollectionDataTableComponent_tr_13_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 42);
    ɵɵtemplate(2, CollectionDataTableComponent_tr_13_ng_container_8_vdr_data_table_filters_2_Template, 1, 2, "vdr-data-table-filters", 43)(3, CollectionDataTableComponent_tr_13_ng_container_8_vdr_data_table_filters_3_Template, 1, 1, "vdr-data-table-filters", 44);
    ɵɵelement(4, "vdr-add-filter-preset-button", 19);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.filters.activeFilters);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filters.length);
    ɵɵadvance();
    ɵɵproperty("filters", ctx_r1.filters)("dataTableId", ctx_r1.id);
  }
}
function CollectionDataTableComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr")(1, "th", 37)(2, "button", 38);
    ɵɵpipe(3, "translate");
    ɵɵlistener("click", function CollectionDataTableComponent_tr_13_Template_button_click_2_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleSearchFilterRow());
    });
    ɵɵelement(4, "clr-icon", 39);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 40);
    ɵɵtemplate(6, CollectionDataTableComponent_tr_13_ng_container_6_Template, 1, 0, "ng-container", 41)(7, CollectionDataTableComponent_tr_13_ng_container_7_Template, 1, 0, "ng-container", 41)(8, CollectionDataTableComponent_tr_13_ng_container_8_Template, 5, 4, "ng-container", 12);
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
function CollectionDataTableComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 47);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    ɵɵnextContext();
    const collectionRowTmp_r11 = ɵɵreference(24);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", collectionRowTmp_r11)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c13, item_r9, i_r10));
  }
}
function CollectionDataTableComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵelement(2, "vdr-empty-placeholder", 48);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.visibleSortedColumns.length + (ctx_r1.selectionManager ? 2 : 1));
    ɵɵadvance();
    ɵɵproperty("emptyStateLabel", ctx_r1.emptyStateLabel);
  }
}
function CollectionDataTableComponent_vdr_items_per_page_controls_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-items-per-page-controls", 49);
    ɵɵlistener("itemsPerPageChange", function CollectionDataTableComponent_vdr_items_per_page_controls_20_Template_vdr_items_per_page_controls_itemsPerPageChange_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.itemsPerPageChange.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("itemsPerPage", ctx_r1.itemsPerPage);
  }
}
function CollectionDataTableComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 50);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "common.total-items", ɵɵpureFunction3(4, _c14, ctx_r1.currentStart, ctx_r1.currentEnd, ctx_r1.totalItems)), " ");
  }
}
function CollectionDataTableComponent_vdr_pagination_controls_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-pagination-controls", 51);
    ɵɵlistener("pageChange", function CollectionDataTableComponent_vdr_pagination_controls_22_Template_vdr_pagination_controls_pageChange_0_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.pageChange.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.id)("currentPage", ctx_r1.currentPage)("itemsPerPage", ctx_r1.itemsPerPage)("totalItems", ctx_r1.totalItems);
  }
}
function CollectionDataTableComponent_ng_template_23_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 20)(1, "div", 21)(2, "div", 56);
    ɵɵpipe(3, "translate");
    ɵɵelement(4, "clr-icon", 57);
    ɵɵelementEnd();
    ɵɵelementStart(5, "input", 58);
    ɵɵlistener("click", function CollectionDataTableComponent_ng_template_23_td_2_Template_input_click_5_listener($event) {
      ɵɵrestoreView(_r14);
      const item_r15 = ɵɵnextContext().item;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRowClick(item_r15, $event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = ɵɵnextContext().item;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r1.activeIndex === ctx_r1.absoluteIndex[item_r15.id]);
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(3, 4, "catalog.reorder-collection"));
    ɵɵadvance(3);
    ɵɵproperty("checked", ctx_r1.selectionManager == null ? null : ctx_r1.selectionManager.isSelected(item_r15));
  }
}
function CollectionDataTableComponent_ng_template_23_td_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CollectionDataTableComponent_ng_template_23_td_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CollectionDataTableComponent_ng_template_23_td_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 60);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const componentConfig_r16 = ctx.ngIf;
    const item_r15 = ɵɵnextContext(2).item;
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", componentConfig_r16.config.component)("ngComponentOutletInputs", ɵɵpureFunction1(3, _c16, item_r15))("ngComponentOutletInjector", componentConfig_r16.injector);
  }
}
function CollectionDataTableComponent_ng_template_23_td_3_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CollectionDataTableComponent_ng_template_23_td_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CollectionDataTableComponent_ng_template_23_td_3_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 61);
  }
  if (rf & 2) {
    const column_r17 = ɵɵnextContext().$implicit;
    const ctx_r17 = ɵɵnextContext();
    const item_r15 = ctx_r17.item;
    const depth_r19 = ctx_r17.depth;
    ɵɵproperty("ngTemplateOutlet", column_r17.template)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c17, item_r15, depth_r19));
  }
}
function CollectionDataTableComponent_ng_template_23_td_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td")(1, "div", 24);
    ɵɵtemplate(2, CollectionDataTableComponent_ng_template_23_td_3_ng_container_2_Template, 2, 5, "ng-container", 59)(3, CollectionDataTableComponent_ng_template_23_td_3_ng_template_3_Template, 1, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const column_r17 = ctx.$implicit;
    const defaultComponent_r20 = ɵɵreference(4);
    const item_r15 = ɵɵnextContext().item;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r1.activeIndex === ctx_r1.absoluteIndex[item_r15.id]);
    ɵɵadvance();
    ɵɵproperty("ngClass", column_r17.align);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.customComponents.get(column_r17.id))("ngIfElse", defaultComponent_r20);
  }
}
function CollectionDataTableComponent_ng_template_23_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CollectionDataTableComponent_ng_template_23_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CollectionDataTableComponent_ng_template_23_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 61);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const subCollection_r21 = ctx.$implicit;
    const depth_r19 = ɵɵnextContext().depth;
    ɵɵnextContext();
    const collectionRowTmp_r11 = ɵɵreference(24);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", collectionRowTmp_r11)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c17, subCollection_r21, depth_r19 + 1));
  }
}
function CollectionDataTableComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 52, 1);
    ɵɵtemplate(2, CollectionDataTableComponent_ng_template_23_td_2_Template, 6, 6, "td", 53)(3, CollectionDataTableComponent_ng_template_23_td_3_Template, 5, 5, "td", 54);
    ɵɵelement(4, "td");
    ɵɵelementEnd();
    ɵɵtemplate(5, CollectionDataTableComponent_ng_template_23_ng_container_5_Template, 2, 5, "ng-container", 55);
  }
  if (rf & 2) {
    const item_r15 = ctx.item;
    const depth_r19 = ctx.depth;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cdkDragData", ɵɵpureFunction2(6, _c15, depth_r19, item_r15));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.selectionManager);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.visibleSortedColumns);
    ɵɵadvance();
    ɵɵclassProp("active", ctx_r1.activeIndex === ctx_r1.absoluteIndex[item_r15.id]);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.getSubcollections(item_r15));
  }
}
var _c18 = ["collectionContents"];
var _c19 = (a0) => ({
  pattern: a0
});
var _c20 = () => ["/catalog/collections"];
var _c21 = (a0) => ["/catalog/collections", a0];
var _c22 = (a0) => ({
  count: a0
});
var _c23 = () => ({
  standalone: true
});
function CollectionDetailComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 31);
    ɵɵlistener("click", function CollectionDetailComponent_button_9_Template_button_click_0_listener() {
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
function CollectionDetailComponent_ng_template_11_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 31);
    ɵɵlistener("click", function CollectionDetailComponent_ng_template_11_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", (ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine) && !ctx_r2.assetsChanged());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function CollectionDetailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CollectionDetailComponent_ng_template_11_button_0_Template, 3, 4, "button", 32);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r2.updatePermission);
  }
}
function CollectionDetailComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "catalog.public"));
  }
}
function CollectionDetailComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "catalog.private"));
  }
}
function CollectionDetailComponent_vdr_card_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 33);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r5);
  }
}
function CollectionDetailComponent_vdr_page_block_29_li_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 38);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c20));
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, "catalog.root-collection"));
  }
}
function CollectionDetailComponent_vdr_page_block_29_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 38);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r6 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(4, _c21, breadcrumb_r6.id));
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, breadcrumb_r6.name));
  }
}
function CollectionDetailComponent_vdr_page_block_29_li_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const breadcrumb_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, breadcrumb_r6.name));
  }
}
function CollectionDetailComponent_vdr_page_block_29_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, CollectionDetailComponent_vdr_page_block_29_li_3_a_1_Template, 3, 5, "a", 37)(2, CollectionDetailComponent_vdr_page_block_29_li_3_a_2_Template, 3, 6, "a", 37)(3, CollectionDetailComponent_vdr_page_block_29_li_3_ng_container_3_Template, 3, 3, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const isFirst_r7 = ctx.first;
    const isLast_r8 = ctx.last;
    ɵɵadvance();
    ɵɵproperty("ngIf", isFirst_r7);
    ɵɵadvance();
    ɵɵproperty("ngIf", !isFirst_r7 && !isLast_r8);
    ɵɵadvance();
    ɵɵproperty("ngIf", isLast_r8);
  }
}
function CollectionDetailComponent_vdr_page_block_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-page-block")(1, "nav", 34)(2, "ul", 35);
    ɵɵtemplate(3, CollectionDetailComponent_vdr_page_block_29_li_3_Template, 4, 3, "li", 36);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const entity_r9 = ctx.ngIf;
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", entity_r9.breadcrumbs);
  }
}
function CollectionDetailComponent_vdr_card_47_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 39);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 40);
    ɵɵpipe(3, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r2.customFields)("customFieldsFormGroup", ctx_r2.detailForm.get("customFields"))("readonly", !ɵɵpipeBind1(3, 6, ctx_r2.updatePermission));
  }
}
function CollectionDetailComponent_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "catalog.inherit-filters-from-parent"));
  }
}
function CollectionDetailComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "catalog.do-not-inherit-filters"));
  }
}
function CollectionDetailComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "vdr-configurable-input", 41);
    ɵɵpipe(2, "hasPermission");
    ɵɵlistener("remove", function CollectionDetailComponent_ng_container_64_Template_vdr_configurable_input_remove_1_listener() {
      const i_r11 = ɵɵrestoreView(_r10).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.removeFilter(i_r11));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("position", i_r11)("operation", filter_r12)("operationDefinition", ctx_r2.getFilterDefinition(filter_r12))("formControlName", i_r11)("readonly", !ɵɵpipeBind1(2, 5, ctx_r2.updatePermission));
  }
}
function CollectionDetailComponent_div_65_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 47);
    ɵɵlistener("click", function CollectionDetailComponent_div_65_button_9_Template_button_click_0_listener() {
      const filter_r14 = ɵɵrestoreView(_r13).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.addFilter(filter_r14));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const filter_r14 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", filter_r14.description, " ");
  }
}
function CollectionDetailComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "vdr-dropdown")(2, "button", 42);
    ɵɵelement(3, "clr-icon", 43);
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd();
    ɵɵelement(7, "clr-icon", 44);
    ɵɵelementEnd();
    ɵɵelementStart(8, "vdr-dropdown-menu", 45);
    ɵɵtemplate(9, CollectionDetailComponent_div_65_button_9_Template, 2, 1, "button", 46);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 2, "marketing.add-condition"));
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r2.allFilters);
  }
}
function CollectionDetailComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 48)(1, "div", 49);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "clr-checkbox-wrapper")(6, "input", 50);
    ɵɵlistener("ngModelChange", function CollectionDetailComponent_ng_template_73_Template_input_ngModelChange_6_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggleLivePreview());
    });
    ɵɵelementEnd();
    ɵɵelementStart(7, "label");
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    const count_r16 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(3, 8, "catalog.collection-contents"), " (", ɵɵpipeBind2(4, 10, "common.results-count", ɵɵpureFunction1(15, _c22, count_r16)), ") ");
    ɵɵadvance(3);
    ɵɵclassProp("disabled", (tmp_7_0 = ctx_r2.detailForm.get("filters")) == null ? null : tmp_7_0.pristine);
    ɵɵadvance();
    ɵɵproperty("ngModelOptions", ɵɵpureFunction0(17, _c23))("disabled", (tmp_9_0 = ctx_r2.detailForm.get("filters")) == null ? null : tmp_9_0.pristine)("ngModel", ctx_r2.livePreview);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 13, "catalog.live-preview-contents"));
  }
}
var _c24 = (a0) => ({
  name: a0
});
function MoveCollectionsDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "catalog.move-collections"), "\n");
  }
}
function MoveCollectionsDialogComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const collection_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", collection_r1.id, " ");
  }
}
function MoveCollectionsDialogComponent_ng_template_14_clr_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 12);
  }
  if (rf & 2) {
    const depth_r3 = ɵɵnextContext().depth;
    ɵɵclassProp("transparent", depth_r3 === 0);
  }
}
function MoveCollectionsDialogComponent_ng_template_14_button_2_clr_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 16);
  }
}
function MoveCollectionsDialogComponent_ng_template_14_button_2_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 17);
  }
}
function MoveCollectionsDialogComponent_ng_template_14_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function MoveCollectionsDialogComponent_ng_template_14_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const collection_r5 = ɵɵnextContext().item;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.toggleExpanded(collection_r5));
    });
    ɵɵtemplate(1, MoveCollectionsDialogComponent_ng_template_14_button_2_clr_icon_1_Template, 1, 0, "clr-icon", 14)(2, MoveCollectionsDialogComponent_ng_template_14_button_2_clr_icon_2_Template, 1, 0, "clr-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r5 = ɵɵnextContext().item;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r5.expandedIds.includes(collection_r5.id));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.expandedIds.includes(collection_r5.id));
  }
}
function MoveCollectionsDialogComponent_ng_template_14_button_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 18);
    ɵɵelement(1, "clr-icon", 19);
    ɵɵelementEnd();
  }
}
function MoveCollectionsDialogComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelement(0, "div", 7);
    ɵɵtemplate(1, MoveCollectionsDialogComponent_ng_template_14_clr_icon_1_Template, 1, 2, "clr-icon", 8)(2, MoveCollectionsDialogComponent_ng_template_14_button_2_Template, 3, 2, "button", 9)(3, MoveCollectionsDialogComponent_ng_template_14_button_3_Template, 2, 0, "button", 10);
    ɵɵelementStart(4, "button", 11);
    ɵɵlistener("click", function MoveCollectionsDialogComponent_ng_template_14_Template_button_click_4_listener() {
      const collection_r5 = ɵɵrestoreView(_r2).item;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.resolveWith(collection_r5));
    });
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const collection_r5 = ctx.item;
    const depth_r3 = ctx.depth;
    ɵɵproperty("ngClass", "indent-" + depth_r3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(collection_r5.children == null ? null : collection_r5.children.length) && collection_r5.parentId !== "__");
    ɵɵadvance();
    ɵɵproperty("ngIf", collection_r5.children == null ? null : collection_r5.children.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", collection_r5.parentId === "__");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(7, 5, "catalog.move-collection-to", ɵɵpureFunction1(8, _c24, collection_r5.name)));
  }
}
function MoveCollectionsDialogComponent_ng_template_17_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span", 24);
    ɵɵtext(2, "/");
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", item_r7.name, " ");
  }
}
function MoveCollectionsDialogComponent_ng_template_17_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MoveCollectionsDialogComponent_ng_template_17_ng_container_1_ng_container_1_div_1_Template, 4, 1, "div", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const breadcrumbs_r8 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", breadcrumbs_r8);
  }
}
function MoveCollectionsDialogComponent_ng_template_17_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1, "/");
    ɵɵelementEnd();
  }
}
function MoveCollectionsDialogComponent_ng_template_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MoveCollectionsDialogComponent_ng_template_17_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 21)(2, MoveCollectionsDialogComponent_ng_template_17_ng_container_1_span_2_Template, 2, 0, "span", 22);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const breadcrumbs_r8 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", breadcrumbs_r8.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", !breadcrumbs_r8.length);
  }
}
function MoveCollectionsDialogComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtemplate(1, MoveCollectionsDialogComponent_ng_template_17_ng_container_1_Template, 3, 2, "ng-container", 21);
    ɵɵpipe(2, "collectionBreadcrumb");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r9 = ctx.item;
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, collection_r9));
  }
}
function MoveCollectionsDialogComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const collection_r10 = ctx.item;
    ɵɵtextInterpolate1(" ", collection_r10.slug, " ");
  }
}
var _c25 = () => ["CreateCatalog", "CreateCollection"];
var _c26 = () => ["./create"];
var _c27 = (a0) => ["./", a0];
var _c28 = (a0) => ({
  contents: a0
});
var _c29 = () => ({
  contentsPage: 1
});
function CollectionListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 6);
    ɵɵelement(1, "clr-icon", 7);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c26));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "catalog.create-new-collection"), " ");
  }
}
function CollectionListComponent_ng_template_12_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const collection_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", collection_r3.id, " ");
  }
}
function CollectionListComponent_ng_template_12_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const collection_r4 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, collection_r4.createdAt, "short"), " ");
  }
}
function CollectionListComponent_ng_template_12_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const collection_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, collection_r5.updatedAt, "short"), " ");
  }
}
function CollectionListComponent_ng_template_12_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const collection_r6 = ctx.item;
    ɵɵtextInterpolate1(" ", collection_r6.position, " ");
  }
}
function CollectionListComponent_ng_template_12_ng_template_24_clr_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 26);
  }
  if (rf & 2) {
    const depth_r7 = ɵɵnextContext().depth;
    ɵɵclassProp("transparent", depth_r7 === 0);
  }
}
function CollectionListComponent_ng_template_12_ng_template_24_button_2_clr_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 30);
  }
}
function CollectionListComponent_ng_template_12_ng_template_24_button_2_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 31);
  }
}
function CollectionListComponent_ng_template_12_ng_template_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵlistener("click", function CollectionListComponent_ng_template_12_ng_template_24_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const collection_r9 = ɵɵnextContext().item;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleExpanded(collection_r9));
    });
    ɵɵtemplate(1, CollectionListComponent_ng_template_12_ng_template_24_button_2_clr_icon_1_Template, 1, 0, "clr-icon", 28)(2, CollectionListComponent_ng_template_12_ng_template_24_button_2_clr_icon_2_Template, 1, 0, "clr-icon", 29);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r9 = ɵɵnextContext().item;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.expandedIds.includes(collection_r9.id));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.expandedIds.includes(collection_r9.id));
  }
}
function CollectionListComponent_ng_template_12_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 21);
    ɵɵtemplate(1, CollectionListComponent_ng_template_12_ng_template_24_clr_icon_1_Template, 1, 2, "clr-icon", 22)(2, CollectionListComponent_ng_template_12_ng_template_24_button_2_Template, 3, 2, "button", 23);
    ɵɵelementStart(3, "a", 24)(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelement(6, "clr-icon", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r9 = ctx.item;
    const depth_r7 = ctx.depth;
    ɵɵproperty("ngClass", "indent-" + depth_r7);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(collection_r9.children == null ? null : collection_r9.children.length));
    ɵɵadvance();
    ɵɵproperty("ngIf", collection_r9.children == null ? null : collection_r9.children.length);
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpureFunction1(5, _c27, collection_r9.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(collection_r9.name);
  }
}
function CollectionListComponent_ng_template_12_ng_template_27_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span", 36);
    ɵɵtext(2, "/");
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", item_r10.name, " ");
  }
}
function CollectionListComponent_ng_template_12_ng_template_27_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CollectionListComponent_ng_template_12_ng_template_27_ng_container_1_ng_container_1_div_1_Template, 4, 1, "div", 35);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const breadcrumbs_r11 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", breadcrumbs_r11);
  }
}
function CollectionListComponent_ng_template_12_ng_template_27_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 36);
    ɵɵtext(1, "/");
    ɵɵelementEnd();
  }
}
function CollectionListComponent_ng_template_12_ng_template_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CollectionListComponent_ng_template_12_ng_template_27_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 33)(2, CollectionListComponent_ng_template_12_ng_template_27_ng_container_1_span_2_Template, 2, 0, "span", 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const breadcrumbs_r11 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", breadcrumbs_r11.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", !breadcrumbs_r11.length);
  }
}
function CollectionListComponent_ng_template_12_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵtemplate(1, CollectionListComponent_ng_template_12_ng_template_27_ng_container_1_Template, 3, 2, "ng-container", 33);
    ɵɵpipe(2, "collectionBreadcrumb");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r12 = ctx.item;
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, collection_r12));
  }
}
function CollectionListComponent_ng_template_12_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const collection_r13 = ctx.item;
    ɵɵtextInterpolate1(" ", collection_r13.slug, " ");
  }
}
function CollectionListComponent_ng_template_12_ng_template_33_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 39);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.private"));
  }
}
function CollectionListComponent_ng_template_12_ng_template_33_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 40);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.public"));
  }
}
function CollectionListComponent_ng_template_12_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CollectionListComponent_ng_template_12_ng_template_33_vdr_chip_0_Template, 3, 3, "vdr-chip", 37)(1, CollectionListComponent_ng_template_12_ng_template_33_vdr_chip_1_Template, 3, 3, "vdr-chip", 38);
  }
  if (rf & 2) {
    const collection_r14 = ctx.item;
    ɵɵproperty("ngIf", collection_r14.isPrivate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !collection_r14.isPrivate);
  }
}
function CollectionListComponent_ng_template_12_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 41)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelement(4, "clr-icon", 42);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r15 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(7, _c27, ɵɵpureFunction1(5, _c28, collection_r15.id)))("queryParams", ɵɵpureFunction0(9, _c29));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "common.view-contents"));
  }
}
function CollectionListComponent_ng_template_12_vdr_dt2_custom_field_column_37_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 43);
  }
  if (rf & 2) {
    const customField_r16 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("customField", customField_r16)("sorts", ctx_r1.sorts);
  }
}
function CollectionListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-collection-data-table", 8);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "async");
    ɵɵlistener("pageChange", function CollectionListComponent_ng_template_12_Template_vdr_collection_data_table_pageChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setPageNumber($event));
    })("itemsPerPageChange", function CollectionListComponent_ng_template_12_Template_vdr_collection_data_table_itemsPerPageChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setItemsPerPage($event));
    })("changeOrder", function CollectionListComponent_ng_template_12_Template_vdr_collection_data_table_changeOrder_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRearrange($event));
    })("visibleColumnsChange", function CollectionListComponent_ng_template_12_Template_vdr_collection_data_table_visibleColumnsChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setVisibleColumns($event));
    });
    ɵɵelement(7, "vdr-bulk-action-menu", 9)(8, "vdr-dt2-search", 10);
    ɵɵpipe(9, "translate");
    ɵɵelementStart(10, "vdr-dt2-column", 11);
    ɵɵpipe(11, "translate");
    ɵɵtemplate(12, CollectionListComponent_ng_template_12_ng_template_12_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(13, "vdr-dt2-column", 12);
    ɵɵpipe(14, "translate");
    ɵɵtemplate(15, CollectionListComponent_ng_template_12_ng_template_15_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(16, "vdr-dt2-column", 13);
    ɵɵpipe(17, "translate");
    ɵɵtemplate(18, CollectionListComponent_ng_template_12_ng_template_18_Template, 2, 4, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(19, "vdr-dt2-column", 14);
    ɵɵpipe(20, "translate");
    ɵɵtemplate(21, CollectionListComponent_ng_template_12_ng_template_21_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(22, "vdr-dt2-column", 15);
    ɵɵpipe(23, "translate");
    ɵɵtemplate(24, CollectionListComponent_ng_template_12_ng_template_24_Template, 7, 7, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(25, "vdr-dt2-column", 16);
    ɵɵpipe(26, "translate");
    ɵɵtemplate(27, CollectionListComponent_ng_template_12_ng_template_27_Template, 3, 3, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(28, "vdr-dt2-column", 17);
    ɵɵpipe(29, "translate");
    ɵɵtemplate(30, CollectionListComponent_ng_template_12_ng_template_30_Template, 1, 1, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(31, "vdr-dt2-column", 18);
    ɵɵpipe(32, "translate");
    ɵɵtemplate(33, CollectionListComponent_ng_template_12_ng_template_33_Template, 2, 2, "ng-template");
    ɵɵelementEnd();
    ɵɵelementStart(34, "vdr-dt2-column", 19);
    ɵɵpipe(35, "translate");
    ɵɵtemplate(36, CollectionListComponent_ng_template_12_ng_template_36_Template, 5, 10, "ng-template");
    ɵɵelementEnd();
    ɵɵtemplate(37, CollectionListComponent_ng_template_12_vdr_dt2_custom_field_column_37_Template, 1, 2, "vdr-dt2-custom-field-column", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.dataTableListId)("items", ɵɵpipeBind1(1, 33, ctx_r1.items$))("subCollections", ɵɵpipeBind1(2, 35, ctx_r1.subCollections$))("itemsPerPage", ɵɵpipeBind1(3, 37, ctx_r1.itemsPerPage$))("totalItems", ɵɵpipeBind1(4, 39, ctx_r1.totalItems$))("currentPage", ɵɵpipeBind1(5, 41, ctx_r1.currentPage$))("filters", ctx_r1.filters)("activeIndex", ɵɵpipeBind1(6, 43, ctx_r1.activeCollectionIndex$));
    ɵɵadvance(7);
    ɵɵproperty("hostComponent", ctx_r1)("selectionManager", ctx_r1.selectionManager);
    ɵɵadvance();
    ɵɵproperty("searchTermControl", ctx_r1.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(9, 45, "common.search-by-name"));
    ɵɵadvance(2);
    ɵɵproperty("heading", ɵɵpipeBind1(11, 47, "common.id"))("hiddenByDefault", true);
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(14, 49, "common.created-at"))("hiddenByDefault", true)("sort", ctx_r1.sorts.get("createdAt"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(17, 51, "common.updated-at"))("hiddenByDefault", true)("sort", ctx_r1.sorts.get("updatedAt"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(20, 53, "common.position"))("hiddenByDefault", true)("sort", ctx_r1.sorts.get("position"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(23, 55, "common.name"))("optional", false)("sort", ctx_r1.sorts.get("name"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(26, 57, "common.breadcrumb"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(29, 59, "common.slug"))("sort", ctx_r1.sorts.get("slug"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(32, 61, "common.visibility"));
    ɵɵadvance(3);
    ɵɵproperty("heading", ɵɵpipeBind1(35, 63, "common.view-contents"))("optional", false);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r1.customFields);
  }
}
function CollectionListComponent_ng_template_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "vdr-collection-contents", 44);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("collectionId", ɵɵpipeBind1(2, 1, ctx_r1.activeCollectionId$));
  }
}
function CollectionListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CollectionListComponent_ng_template_13_ng_container_0_Template, 3, 3, "ng-container", 33);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r1.activeCollectionId$));
  }
}
var _c30 = "[_nghost-%COMP%]{--indent-spacing: 18px}.indent-1[_ngcontent-%COMP%]{padding-inline-start:var(--indent-spacing)}.indent-2[_ngcontent-%COMP%]{padding-inline-start:calc(var(--indent-spacing) * 2)}.indent-3[_ngcontent-%COMP%]{padding-inline-start:calc(var(--indent-spacing) * 3)}.indent-4[_ngcontent-%COMP%], .indent-5[_ngcontent-%COMP%], .indent-6[_ngcontent-%COMP%], .indent-7[_ngcontent-%COMP%], .indent-8[_ngcontent-%COMP%], .indent-9[_ngcontent-%COMP%]{padding-inline-start:calc(var(--indent-spacing) * 4)}.child-arrow[_ngcontent-%COMP%]{margin:1px 6px}.child-arrow.transparent[_ngcontent-%COMP%]{opacity:0}.breadcrumb[_ngcontent-%COMP%]{display:flex}.separator[_ngcontent-%COMP%]{color:var(--color-weight-500);margin:0 3px}";
var _c31 = (a0) => ["/catalog/collections/", a0];
var _c32 = () => ["UpdateCatalog", "UpdateCollection"];
var _c33 = (a0) => ({
  parentId: a0
});
var _c34 = (a0) => ["./", "create", a0];
function CollectionTreeNodeComponent_div_3_button_5_clr_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 32);
  }
}
function CollectionTreeNodeComponent_div_3_button_5_clr_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 33);
  }
}
function CollectionTreeNodeComponent_div_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 29);
    ɵɵlistener("click", function CollectionTreeNodeComponent_div_3_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const collection_r3 = ɵɵnextContext().$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.toggleExpanded(collection_r3));
    });
    ɵɵtemplate(1, CollectionTreeNodeComponent_div_3_button_5_clr_icon_1_Template, 1, 0, "clr-icon", 30)(2, CollectionTreeNodeComponent_div_3_button_5_clr_icon_2_Template, 1, 0, "clr-icon", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r3 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r3.expandAll);
    ɵɵadvance();
    ɵɵproperty("ngIf", !collection_r3.expanded && !ctx_r3.expandAll);
    ɵɵadvance();
    ɵɵproperty("ngIf", collection_r3.expanded || ctx_r3.expandAll);
  }
}
function CollectionTreeNodeComponent_div_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 34);
  }
}
function CollectionTreeNodeComponent_div_3_vdr_chip_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "catalog.private"));
  }
}
function CollectionTreeNodeComponent_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵelement(1, "clr-icon", 36);
    ɵɵelementEnd();
  }
}
function CollectionTreeNodeComponent_div_3_a_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 37);
    ɵɵelement(1, "clr-icon", 38);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(6, _c34, ɵɵpureFunction1(4, _c33, collection_r3.id)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "catalog.create-new-collection"), " ");
  }
}
function CollectionTreeNodeComponent_div_3_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function CollectionTreeNodeComponent_div_3_button_39_Template_button_click_0_listener() {
      const item_r10 = ɵɵrestoreView(_r9).$implicit;
      const collection_r3 = ɵɵnextContext().$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.move(collection_r3, item_r10.id));
    });
    ɵɵelementStart(2, "div", 39)(3, "div", 40);
    ɵɵelement(4, "clr-icon", 41);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 42);
    ɵɵtext(6);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ɵɵpipeBind1(1, 2, ctx_r3.hasUpdatePermission$));
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", item_r10.path, " ");
  }
}
function CollectionTreeNodeComponent_div_3_vdr_collection_tree_node_46_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-collection-tree-node", 43);
  }
  if (rf & 2) {
    const collection_r3 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("expandAll", ctx_r3.expandAll)("collectionTree", collection_r3)("activeCollectionId", ctx_r3.activeCollectionId)("selectionManager", ctx_r3.selectionManager);
  }
}
function CollectionTreeNodeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div")(3, "input", 6);
    ɵɵlistener("click", function CollectionTreeNodeComponent_div_3_Template_input_click_3_listener($event) {
      const collection_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.selectionManager.toggleSelection(collection_r3, $event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 7);
    ɵɵtemplate(5, CollectionTreeNodeComponent_div_3_button_5_Template, 3, 3, "button", 8)(6, CollectionTreeNodeComponent_div_3_ng_template_6_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelement(9, "div", 9);
    ɵɵtemplate(10, CollectionTreeNodeComponent_div_3_vdr_chip_10_Template, 3, 3, "vdr-chip", 10);
    ɵɵelementStart(11, "a", 11);
    ɵɵelement(12, "clr-icon", 12);
    ɵɵtext(13);
    ɵɵpipe(14, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "a", 13);
    ɵɵelement(16, "clr-icon", 14);
    ɵɵtext(17);
    ɵɵpipe(18, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(19, CollectionTreeNodeComponent_div_3_div_19_Template, 2, 0, "div", 15);
    ɵɵelementStart(20, "vdr-dropdown")(21, "button", 16);
    ɵɵlistener("click", function CollectionTreeNodeComponent_div_3_Template_button_click_21_listener() {
      const collection_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.getMoveListItems(collection_r3));
    });
    ɵɵelement(22, "clr-icon", 17);
    ɵɵelementEnd();
    ɵɵelementStart(23, "vdr-dropdown-menu", 18);
    ɵɵtemplate(24, CollectionTreeNodeComponent_div_3_a_24_Template, 4, 8, "a", 19);
    ɵɵelement(25, "div", 20);
    ɵɵelementStart(26, "button", 21);
    ɵɵpipe(27, "async");
    ɵɵlistener("click", function CollectionTreeNodeComponent_div_3_Template_button_click_26_listener() {
      const ctx_r5 = ɵɵrestoreView(_r2);
      const collection_r3 = ctx_r5.$implicit;
      const i_r7 = ctx_r5.index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.moveUp(collection_r3, i_r7));
    });
    ɵɵelement(28, "clr-icon", 22);
    ɵɵtext(29);
    ɵɵpipe(30, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(31, "button", 21);
    ɵɵpipe(32, "async");
    ɵɵlistener("click", function CollectionTreeNodeComponent_div_3_Template_button_click_31_listener() {
      const ctx_r7 = ɵɵrestoreView(_r2);
      const collection_r3 = ctx_r7.$implicit;
      const i_r7 = ctx_r7.index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.moveDown(collection_r3, i_r7));
    });
    ɵɵelement(33, "clr-icon", 23);
    ɵɵtext(34);
    ɵɵpipe(35, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(36, "h4", 24);
    ɵɵtext(37);
    ɵɵpipe(38, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(39, CollectionTreeNodeComponent_div_3_button_39_Template, 7, 4, "button", 25);
    ɵɵelement(40, "div", 20);
    ɵɵelementStart(41, "button", 26);
    ɵɵpipe(42, "async");
    ɵɵlistener("click", function CollectionTreeNodeComponent_div_3_Template_button_click_41_listener() {
      const collection_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.delete(collection_r3.id));
    });
    ɵɵelement(43, "clr-icon", 27);
    ɵɵtext(44);
    ɵɵpipe(45, "translate");
    ɵɵelementEnd()()()();
    ɵɵtemplate(46, CollectionTreeNodeComponent_div_3_vdr_collection_tree_node_46_Template, 1, 4, "vdr-collection-tree-node", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collection_r3 = ctx.$implicit;
    const i_r7 = ctx.index;
    const folderSpacer_r11 = ɵɵreference(7);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("private", collection_r3.isPrivate);
    ɵɵproperty("cdkDragData", collection_r3);
    ɵɵadvance();
    ɵɵclassProp("active", collection_r3.id === ctx_r3.activeCollectionId);
    ɵɵproperty("ngClass", "depth-" + ctx_r3.depth);
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r3.selectionManager.isSelected(collection_r3));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", collection_r3.children == null ? null : collection_r3.children.length)("ngIfElse", folderSpacer_r11);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", collection_r3.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", collection_r3.isPrivate);
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpureFunction1(46, _c27, ɵɵpureFunction1(44, _c28, collection_r3.id)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 26, "catalog.view-contents"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpureFunction1(48, _c31, collection_r3.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 28, "common.edit"), " ");
    ɵɵadvance(2);
    ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(50, _c32));
    ɵɵadvance(5);
    ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(51, _c25));
    ɵɵadvance(2);
    ɵɵproperty("disabled", i_r7 === 0 || !ɵɵpipeBind1(27, 30, ctx_r3.hasUpdatePermission$));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(30, 32, "catalog.move-up"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", i_r7 === ctx_r3.collectionTree.children.length - 1 || !ɵɵpipeBind1(32, 34, ctx_r3.hasUpdatePermission$));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(35, 36, "catalog.move-down"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(38, 38, "catalog.move-to"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.moveListItems);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ɵɵpipeBind1(42, 40, ctx_r3.hasDeletePermission$));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(45, 42, "common.delete"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", collection_r3.expanded || ctx_r3.expandAll);
  }
}
function CollectionTreeComponent_vdr_collection_tree_node_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-collection-tree-node", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("expandAll", ctx_r0.expandAll)("collectionTree", ctx_r0.collectionTree)("selectionManager", ctx_r0.selectionManager)("activeCollectionId", ctx_r0.activeCollectionId);
  }
}
function ConfirmVariantDeletionDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "catalog.confirm-deletion-of-unused-variants-title"), "\n");
  }
}
function ConfirmVariantDeletionDialogComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2("", variant_r1.name, " (", variant_r1.sku, ")");
  }
}
function ConfirmVariantDeletionDialogComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function ConfirmVariantDeletionDialogComponent_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 4);
    ɵɵlistener("click", function ConfirmVariantDeletionDialogComponent_ng_template_5_Template_button_click_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.confirm());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, "common.cancel"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 4, "common.confirm"), " ");
  }
}
function CreateFacetValueDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "catalog.create-facet-value"), "\n");
  }
}
function CreateFacetValueDialogComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function CreateFacetValueDialogComponent_ng_template_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 8);
    ɵɵlistener("click", function CreateFacetValueDialogComponent_ng_template_8_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.confirm());
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
    ɵɵproperty("disabled", ctx_r1.form.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.confirm"), " ");
  }
}
var _c35 = () => ["CreateCatalog", "CreateFacet"];
var _c36 = (a0, a1, a2) => ({
  currentPage: a0,
  itemsPerPage: a1,
  totalItems: a2
});
var _c37 = (a0) => ["values", a0];
var _c38 = (a0) => ["values", a0, "customFields"];
function FacetDetailComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function FacetDetailComponent_button_9_Template_button_click_0_listener() {
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
function FacetDetailComponent_ng_template_11_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function FacetDetailComponent_ng_template_11_button_0_Template_button_click_0_listener() {
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
function FacetDetailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FacetDetailComponent_ng_template_11_button_0_Template, 3, 4, "button", 21);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r2.updatePermission);
  }
}
function FacetDetailComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "catalog.public"));
  }
}
function FacetDetailComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "catalog.private"));
  }
}
function FacetDetailComponent_vdr_page_entity_info_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-page-entity-info", 22);
  }
  if (rf & 2) {
    const entity_r5 = ctx.ngIf;
    ɵɵproperty("entity", entity_r5);
  }
}
function FacetDetailComponent_vdr_card_41_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 23);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 24);
    ɵɵpipe(3, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r2.customFields)("customFieldsFormGroup", ctx_r2.detailForm.get("facet.customFields"))("readonly", !ɵɵpipeBind1(3, 6, ctx_r2.updatePermission));
  }
}
function FacetDetailComponent_vdr_card_43_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 29);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("formControl", ctx_r2.filterControl)("placeholder", ɵɵpipeBind1(1, 2, "catalog.filter-by-name"));
  }
}
function FacetDetailComponent_vdr_card_43_ng_container_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, "common.custom-fields"));
  }
}
function FacetDetailComponent_vdr_card_43_ng_container_3_tr_14_td_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 45);
    ɵɵelement(1, "vdr-tabbed-custom-fields", 46);
    ɵɵpipe(2, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const value_r8 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("customFields", ctx_r2.customValueFields)("compact", true)("customFieldsFormGroup", ctx_r2.detailForm.get(ɵɵpureFunction1(6, _c38, value_r8.id)))("readonly", !ɵɵpipeBind1(2, 4, ctx_r2.updatePermission));
  }
}
function FacetDetailComponent_vdr_card_43_ng_container_3_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 35)(1, "td", 36);
    ɵɵelement(2, "vdr-entity-info", 22);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 36)(4, "input", 37);
    ɵɵpipe(5, "hasPermission");
    ɵɵlistener("input", function FacetDetailComponent_vdr_card_43_ng_container_3_tr_14_Template_input_input_4_listener($event) {
      const value_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.updateValueCode(value_r8.code, $event.target.value, value_r8.id));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(6, "td", 36);
    ɵɵelement(7, "input", 38);
    ɵɵelementEnd();
    ɵɵtemplate(8, FacetDetailComponent_vdr_card_43_ng_container_3_tr_14_td_8_Template, 3, 8, "td", 39);
    ɵɵelementStart(9, "td", 36)(10, "vdr-dropdown")(11, "button", 40);
    ɵɵelement(12, "clr-icon", 41);
    ɵɵelementEnd();
    ɵɵelementStart(13, "vdr-dropdown-menu", 42)(14, "button", 43);
    ɵɵpipe(15, "hasPermission");
    ɵɵlistener("click", function FacetDetailComponent_vdr_card_43_ng_container_3_tr_14_Template_button_click_14_listener() {
      const value_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.deleteFacetValue(value_r8.id));
    });
    ɵɵelement(16, "clr-icon", 44);
    ɵɵtext(17);
    ɵɵpipe(18, "translate");
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const value_r8 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("formGroup", ctx_r2.detailForm.get(ɵɵpureFunction1(12, _c37, value_r8.id)));
    ɵɵadvance(2);
    ɵɵproperty("entity", value_r8);
    ɵɵadvance(2);
    ɵɵproperty("readonly", !ɵɵpipeBind1(5, 6, ctx_r2.updatePermission));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r2.customValueFields.length);
    ɵɵadvance(6);
    ɵɵproperty("disabled", !ɵɵpipeBind1(15, 8, ctx_r2.updatePermission));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 10, "common.delete"), " ");
  }
}
function FacetDetailComponent_vdr_card_43_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "table", 30)(2, "thead")(3, "tr");
    ɵɵelement(4, "th");
    ɵɵelementStart(5, "th");
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th");
    ɵɵtext(9);
    ɵɵpipe(10, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(11, FacetDetailComponent_vdr_card_43_ng_container_3_ng_container_11_Template, 4, 3, "ng-container", 27);
    ɵɵelement(12, "th");
    ɵɵelementEnd()();
    ɵɵelementStart(13, "tbody");
    ɵɵtemplate(14, FacetDetailComponent_vdr_card_43_ng_container_3_tr_14_Template, 19, 14, "tr", 31);
    ɵɵpipe(15, "paginate");
    ɵɵelementEnd()();
    ɵɵelementStart(16, "div", 32)(17, "vdr-items-per-page-controls", 33);
    ɵɵlistener("itemsPerPageChange", function FacetDetailComponent_vdr_card_43_ng_container_3_Template_vdr_items_per_page_controls_itemsPerPageChange_17_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setItemsPerPage($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(18, "vdr-pagination-controls", 34);
    ɵɵlistener("pageChange", function FacetDetailComponent_vdr_card_43_ng_container_3_Template_vdr_pagination_controls_pageChange_18_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setCurrentPage($event));
    });
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const filteredValues_r9 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 8, "common.name"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 10, "common.code"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.customValueFields.length);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(15, 12, filteredValues_r9, ɵɵpureFunction3(15, _c36, ctx_r2.currentPage, ctx_r2.itemsPerPage, ctx_r2.totalItems)));
    ɵɵadvance(3);
    ɵɵproperty("itemsPerPage", ctx_r2.itemsPerPage);
    ɵɵadvance();
    ɵɵproperty("currentPage", ctx_r2.currentPage)("itemsPerPage", ctx_r2.itemsPerPage)("totalItems", ctx_r2.totalItems);
  }
}
function FacetDetailComponent_vdr_card_43_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 47);
    ɵɵlistener("click", function FacetDetailComponent_vdr_card_43_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.addFacetValue());
    });
    ɵɵelement(1, "clr-icon", 48);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "catalog.add-facet-value"), " ");
  }
}
function FacetDetailComponent_vdr_card_43_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 25);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, FacetDetailComponent_vdr_card_43_ng_template_2_Template, 2, 4, "ng-template", 26)(3, FacetDetailComponent_vdr_card_43_ng_container_3_Template, 19, 19, "ng-container", 27);
    ɵɵpipe(4, "async");
    ɵɵelementStart(5, "div");
    ɵɵtemplate(6, FacetDetailComponent_vdr_card_43_button_6_Template, 4, 3, "button", 28);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "catalog.facet-values"))("paddingX", false);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 6, ctx_r2.values$));
    ɵɵadvance(3);
    ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(8, _c35));
  }
}
function FacetListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15);
    ɵɵelement(1, "clr-icon", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c26));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "catalog.create-new-facet"), " ");
  }
}
function FacetListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const facet_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", facet_r1.id, " ");
  }
}
function FacetListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const facet_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, facet_r2.createdAt, "short"), " ");
  }
}
function FacetListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const facet_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, facet_r3.updatedAt, "short"), " ");
  }
}
function FacetListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 17)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const facet_r4 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c27, facet_r4.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(facet_r4.name);
  }
}
function FacetListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const facet_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", facet_r5.code, " ");
  }
}
function FacetListComponent_ng_template_35_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 21);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.private"));
  }
}
function FacetListComponent_ng_template_35_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.public"));
  }
}
function FacetListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FacetListComponent_ng_template_35_vdr_chip_0_Template, 3, 3, "vdr-chip", 19)(1, FacetListComponent_ng_template_35_vdr_chip_1_Template, 3, 3, "vdr-chip", 20);
  }
  if (rf & 2) {
    const facet_r6 = ctx.item;
    ɵɵproperty("ngIf", facet_r6.isPrivate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !facet_r6.isPrivate);
  }
}
function FacetListComponent_ng_template_38_vdr_facet_value_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-facet-value-chip", 27);
  }
  if (rf & 2) {
    const value_r7 = ctx.$implicit;
    ɵɵproperty("facetValue", value_r7)("removable", false)("displayFacetName", false);
  }
}
function FacetListComponent_ng_template_38_vdr_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const facet_r8 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ... + ", facet_r8.valueList.totalItems - facet_r8.valueList.items.length, " ");
  }
}
function FacetListComponent_ng_template_38_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "clr-icon", 16);
    ɵɵtext(2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const facet_r8 = ɵɵnextContext(2).item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", facet_r8.valueList.totalItems - ctx_r9.initialLimit, " ");
  }
}
function FacetListComponent_ng_template_38_button_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 30);
  }
}
function FacetListComponent_ng_template_38_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵlistener("click", function FacetListComponent_ng_template_38_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const facet_r8 = ɵɵnextContext().item;
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.toggleDisplayLimit(facet_r8));
    });
    ɵɵtemplate(1, FacetListComponent_ng_template_38_button_4_ng_container_1_Template, 3, 1, "ng-container", 29)(2, FacetListComponent_ng_template_38_button_4_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const collapse_r11 = ɵɵreference(3);
    const facet_r8 = ɵɵnextContext().item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r9.displayLimit[facet_r8.id] || 0) < facet_r8.valueList.items.length)("ngIfElse", collapse_r11);
  }
}
function FacetListComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, FacetListComponent_ng_template_38_vdr_facet_value_chip_1_Template, 1, 3, "vdr-facet-value-chip", 24);
    ɵɵpipe(2, "slice");
    ɵɵtemplate(3, FacetListComponent_ng_template_38_vdr_chip_3_Template, 2, 1, "vdr-chip", 25)(4, FacetListComponent_ng_template_38_button_4_Template, 4, 2, "button", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const facet_r8 = ctx.item;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind3(2, 3, facet_r8.valueList.items, 0, ctx_r9.displayLimit[facet_r8.id] || 3));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r9.displayLimit[facet_r8.id] < facet_r8.valueList.totalItems && (ctx_r9.displayLimit[facet_r8.id] || 0) === facet_r8.valueList.items.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", facet_r8.valueList.items.length > ctx_r9.initialLimit);
  }
}
function FacetListComponent_vdr_dt2_custom_field_column_39_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 31);
  }
  if (rf & 2) {
    const customField_r12 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r12)("sorts", ctx_r9.sorts);
  }
}
var _c39 = ["optionGroupName"];
function GenerateProductVariantsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "input", 8, 0);
    ɵɵtwoWayListener("ngModelChange", function GenerateProductVariantsComponent_div_0_Template_input_ngModelChange_5_listener($event) {
      const group_r2 = ɵɵrestoreView(_r1).$implicit;
      ɵɵtwoWayBindingSet(group_r2.name, $event) || (group_r2.name = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.enter", function GenerateProductVariantsComponent_div_0_Template_input_keydown_enter_5_listener($event) {
      ɵɵrestoreView(_r1);
      const optionValueInputComponent_r3 = ɵɵreference(12);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleEnter($event, optionValueInputComponent_r3));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 9)(8, "label");
    ɵɵtext(9);
    ɵɵpipe(10, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "vdr-option-value-input", 10, 1);
    ɵɵtwoWayListener("ngModelChange", function GenerateProductVariantsComponent_div_0_Template_vdr_option_value_input_ngModelChange_11_listener($event) {
      const group_r2 = ɵɵrestoreView(_r1).$implicit;
      ɵɵtwoWayBindingSet(group_r2.values, $event) || (group_r2.values = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function GenerateProductVariantsComponent_div_0_Template_vdr_option_value_input_ngModelChange_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.generateVariants());
    })("edit", function GenerateProductVariantsComponent_div_0_Template_vdr_option_value_input_edit_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.generateVariants());
    });
    ɵɵelementEnd()();
    ɵɵelementStart(13, "div", 11)(14, "button", 12);
    ɵɵpipe(15, "translate");
    ɵɵlistener("click", function GenerateProductVariantsComponent_div_0_Template_button_click_14_listener() {
      const group_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.removeOption(group_r2.name));
    });
    ɵɵelement(16, "clr-icon", 13);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 7, "catalog.option"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", group_r2.name);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 9, "catalog.option-values"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", group_r2.values);
    ɵɵproperty("groupName", group_r2.name)("disabled", group_r2.name === "");
    ɵɵadvance(3);
    ɵɵproperty("title", ɵɵpipeBind1(15, 11, "catalog.remove-option"));
  }
}
function GenerateProductVariantsComponent_ng_container_5_clr_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-alert", 18)(1, "clr-alert-item")(2, "span", 19);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵproperty("clrAlertClosable", false);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "catalog.no-stock-locations-available-on-current-channel"), " ");
  }
}
function GenerateProductVariantsComponent_ng_container_5_vdr_form_field_3_option_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const location_r6 = ctx.$implicit;
    ɵɵproperty("value", location_r6.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", location_r6.name, " ");
  }
}
function GenerateProductVariantsComponent_ng_container_5_vdr_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-form-field", 20);
    ɵɵpipe(1, "translate");
    ɵɵelementStart(2, "select", 21);
    ɵɵtwoWayListener("ngModelChange", function GenerateProductVariantsComponent_ng_container_5_vdr_form_field_3_Template_select_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r3.selectedStockLocationId, $event) || (ctx_r3.selectedStockLocationId = $event);
      return ɵɵresetView($event);
    });
    ɵɵtemplate(3, GenerateProductVariantsComponent_ng_container_5_vdr_form_field_3_option_3_Template, 2, 2, "option", 22);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const stockLocations_r7 = ɵɵnextContext().ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("label", ɵɵpipeBind1(1, 3, "catalog.add-stock-to-location"));
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r3.selectedStockLocationId);
    ɵɵadvance();
    ɵɵproperty("ngForOf", stockLocations_r7);
  }
}
function GenerateProductVariantsComponent_ng_container_5_div_4_th_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.create"));
  }
}
function GenerateProductVariantsComponent_ng_container_5_div_4_th_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "catalog.variant"));
  }
}
function GenerateProductVariantsComponent_ng_container_5_div_4_tr_15_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵelement(1, "input", 31);
    ɵɵelementEnd();
  }
}
function GenerateProductVariantsComponent_ng_container_5_div_4_tr_15_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", variant_r8.values.join(" "), " ");
  }
}
function GenerateProductVariantsComponent_ng_container_5_div_4_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 27);
    ɵɵtemplate(1, GenerateProductVariantsComponent_ng_container_5_div_4_tr_15_td_1_Template, 2, 0, "td", 5)(2, GenerateProductVariantsComponent_ng_container_5_div_4_tr_15_td_2_Template, 2, 1, "td", 5);
    ɵɵelementStart(3, "td")(4, "vdr-form-field");
    ɵɵelement(5, "input", 28);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "td")(8, "vdr-form-field");
    ɵɵelement(9, "vdr-currency-input", 29);
    ɵɵelementEnd()();
    ɵɵelementStart(10, "td")(11, "vdr-form-field");
    ɵɵelement(12, "input", 30);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const variant_r8 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵclassProp("disabled", !ctx_r3.variantFormValues[variant_r8.id].value.enabled === false);
    ɵɵproperty("formGroup", ctx_r3.variantFormValues[variant_r8.id]);
    ɵɵadvance();
    ɵɵproperty("ngIf", 1 < ctx_r3.variants.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", 1 < ctx_r3.variants.length);
    ɵɵadvance(3);
    ɵɵproperty("placeholder", ɵɵpipeBind1(6, 7, "catalog.sku"));
    ɵɵadvance(4);
    ɵɵproperty("currencyCode", ctx_r3.currencyCode);
  }
}
function GenerateProductVariantsComponent_ng_container_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24)(1, "table", 25)(2, "thead")(3, "tr");
    ɵɵtemplate(4, GenerateProductVariantsComponent_ng_container_5_div_4_th_4_Template, 3, 3, "th", 5)(5, GenerateProductVariantsComponent_ng_container_5_div_4_th_5_Template, 3, 3, "th", 5);
    ɵɵelementStart(6, "th");
    ɵɵtext(7);
    ɵɵpipe(8, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "th");
    ɵɵtext(10);
    ɵɵpipe(11, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "th");
    ɵɵtext(13);
    ɵɵpipe(14, "translate");
    ɵɵelementEnd()()();
    ɵɵtemplate(15, GenerateProductVariantsComponent_ng_container_5_div_4_tr_15_Template, 13, 9, "tr", 26);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", 1 < ctx_r3.variants.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", 1 < ctx_r3.variants.length);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 7, "catalog.sku"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 9, "catalog.price"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 11, "catalog.stock-on-hand"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.variants)("ngForTrackBy", ctx_r3.trackByFn);
  }
}
function GenerateProductVariantsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GenerateProductVariantsComponent_ng_container_5_clr_alert_1_Template, 5, 4, "clr-alert", 14);
    ɵɵelementStart(2, "div", 15);
    ɵɵtemplate(3, GenerateProductVariantsComponent_ng_container_5_vdr_form_field_3_Template, 4, 5, "vdr-form-field", 16);
    ɵɵelementEnd();
    ɵɵtemplate(4, GenerateProductVariantsComponent_ng_container_5_div_4_Template, 16, 13, "div", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const stockLocations_r7 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", stockLocations_r7.length === 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", stockLocations_r7.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", 0 < stockLocations_r7.length);
  }
}
var _c40 = (a0, a1) => ["/catalog/products", a0, "variants", a1];
function ProductVariantListComponent_vdr_language_selector_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-language-selector", 17);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵlistener("languageCodeChange", function ProductVariantListComponent_vdr_language_selector_3_Template_vdr_language_selector_languageCodeChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setLanguage($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(1, 2, ctx_r1.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(2, 4, ctx_r1.contentLanguage$));
  }
}
function ProductVariantListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const variant_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", variant_r3.id, " ");
  }
}
function ProductVariantListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const variant_r4 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r4.createdAt, "short"), " ");
  }
}
function ProductVariantListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const variant_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r5.updatedAt, "short"), " ");
  }
}
function ProductVariantListComponent_ng_template_26_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 20);
    ɵɵpipe(1, "assetPreview");
  }
  if (rf & 2) {
    const asset_r6 = ctx.ngIf;
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, asset_r6, "tiny"), ɵɵsanitizeUrl);
  }
}
function ProductVariantListComponent_ng_template_26_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelement(1, "clr-icon", 22);
    ɵɵelementEnd();
  }
}
function ProductVariantListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, ProductVariantListComponent_ng_template_26_img_1_Template, 2, 4, "img", 19)(2, ProductVariantListComponent_ng_template_26_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r7 = ctx.item;
    const imagePlaceholder_r8 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r7.featuredAsset)("ngIfElse", imagePlaceholder_r8);
  }
}
function ProductVariantListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 23)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r9 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction2(2, _c40, variant_r9.productId, variant_r9.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(variant_r9.name);
  }
}
function ProductVariantListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const variant_r10 = ctx.item;
    ɵɵtextInterpolate1(" ", variant_r10.sku, " ");
  }
}
function ProductVariantListComponent_ng_template_35_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 27);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1("", ɵɵpipeBind1(2, 1, "common.enabled"), " ");
  }
}
function ProductVariantListComponent_ng_template_35_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 28);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1("", ɵɵpipeBind1(2, 1, "common.disabled"), " ");
  }
}
function ProductVariantListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ProductVariantListComponent_ng_template_35_vdr_chip_0_Template, 3, 3, "vdr-chip", 25)(1, ProductVariantListComponent_ng_template_35_vdr_chip_1_Template, 3, 3, "vdr-chip", 26);
  }
  if (rf & 2) {
    const variant_r11 = ctx.item;
    ɵɵproperty("ngIf", variant_r11.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !variant_r11.enabled);
  }
}
function ProductVariantListComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const variant_r12 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r12.price, variant_r12.currencyCode), " ");
  }
}
function ProductVariantListComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const variant_r13 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, variant_r13.priceWithTax, variant_r13.currencyCode), " ");
  }
}
function ProductVariantListComponent_ng_template_44_vdr_chip_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 33);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const stockLevel_r14 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1("(", stockLevel_r14.stockAllocated, " allocated)");
  }
}
function ProductVariantListComponent_ng_template_44_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 30)(1, "div", 31)(2, "div");
    ɵɵtext(3);
    ɵɵtemplate(4, ProductVariantListComponent_ng_template_44_vdr_chip_0_span_4_Template, 2, 1, "span", 32);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const stockLevel_r14 = ctx.$implicit;
    ɵɵproperty("title", stockLevel_r14.stockLocation == null ? null : stockLevel_r14.stockLocation.name);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", stockLevel_r14.stockOnHand, "");
    ɵɵadvance();
    ɵɵproperty("ngIf", stockLevel_r14.stockAllocated);
  }
}
function ProductVariantListComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ProductVariantListComponent_ng_template_44_vdr_chip_0_Template, 5, 3, "vdr-chip", 29);
  }
  if (rf & 2) {
    const variant_r15 = ctx.item;
    ɵɵproperty("ngForOf", variant_r15.stockLevels);
  }
}
function ProductVariantListComponent_vdr_dt2_custom_field_column_45_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 34);
  }
  if (rf & 2) {
    const field_r16 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("customField", field_r16)("sorts", ctx_r1.sorts);
  }
}
var _c41 = () => ["name"];
var _c42 = () => ["enabled"];
var _c43 = () => ["options"];
var _c44 = () => ["manage-variants"];
function ProductDetailComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵlistener("click", function ProductDetailComponent_button_10_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine || ctx_r2.createVariantsConfig.variants.length === 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.create"), " ");
  }
}
function ProductDetailComponent_ng_template_12_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵlistener("click", function ProductDetailComponent_ng_template_12_button_0_Template_button_click_0_listener() {
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
    ɵɵproperty("disabled", (ctx_r2.detailForm.invalid || ctx_r2.detailForm.pristine) && !ctx_r2.assetsChanged());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function ProductDetailComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ProductDetailComponent_ng_template_12_button_0_Template, 3, 4, "button", 29);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("vdrIfPermissions", ctx_r2.updatePermissions);
  }
}
function ProductDetailComponent_clr_toggle_wrapper_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-toggle-wrapper");
    ɵɵelement(1, "input", 30);
    ɵɵelementStart(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formControl", ctx_r2.detailForm.get(ɵɵpureFunction0(4, _c42)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 2, "common.enabled"));
  }
}
function ProductDetailComponent_ng_container_22_vdr_card_1_vdr_form_item_2_ng_container_3_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-chip", 39);
    ɵɵlistener("iconClick", function ProductDetailComponent_ng_container_22_vdr_card_1_vdr_form_item_2_ng_container_3_vdr_chip_1_Template_vdr_chip_iconClick_0_listener() {
      ɵɵrestoreView(_r6);
      const channel_r7 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.removeFromChannel(channel_r7.id));
    });
    ɵɵelement(1, "vdr-channel-badge", 40);
    ɵɵtext(2);
    ɵɵpipe(3, "channelCodeToLabel");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const channel_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("channelCode", channel_r7.code);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, channel_r7.code), " ");
  }
}
function ProductDetailComponent_ng_container_22_vdr_card_1_vdr_form_item_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductDetailComponent_ng_container_22_vdr_card_1_vdr_form_item_2_ng_container_3_vdr_chip_1_Template, 4, 4, "vdr-chip", 38);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const channel_r7 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isDefaultChannel(channel_r7.code));
  }
}
function ProductDetailComponent_ng_container_22_vdr_card_1_vdr_form_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-form-item")(1, "div", 33)(2, "div", 34);
    ɵɵtemplate(3, ProductDetailComponent_ng_container_22_vdr_card_1_vdr_form_item_2_ng_container_3_Template, 2, 1, "ng-container", 35);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 36);
    ɵɵlistener("click", function ProductDetailComponent_ng_container_22_vdr_card_1_vdr_form_item_2_Template_button_click_5_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.assignToChannel());
    });
    ɵɵelement(6, "clr-icon", 37);
    ɵɵtext(7);
    ɵɵpipe(8, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 2, ctx_r2.productChannels$));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 4, "common.assign-to-channel"), " ");
  }
}
function ProductDetailComponent_ng_container_22_vdr_card_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 11);
    ɵɵpipe(1, "translate");
    ɵɵtemplate(2, ProductDetailComponent_ng_container_22_vdr_card_1_vdr_form_item_2_Template, 9, 6, "vdr-form-item", 32);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("title", ɵɵpipeBind1(1, 1, "common.channels"));
  }
}
function ProductDetailComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductDetailComponent_ng_container_22_vdr_card_1_Template, 3, 3, "vdr-card", 31);
    ɵɵelementContainerEnd();
  }
}
function ProductDetailComponent_vdr_card_24_vdr_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 44);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const optionGroup_r8 = ctx.$implicit;
    ɵɵproperty("colorFrom", optionGroup_r8.code)("invert", true);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", optionGroup_r8.name, " ");
  }
}
function ProductDetailComponent_vdr_card_24_a_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 45);
    ɵɵelement(1, "clr-icon", 46);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c43));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "catalog.edit-options"), " ");
  }
}
function ProductDetailComponent_vdr_card_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 11);
    ɵɵpipe(1, "translate");
    ɵɵelementStart(2, "div", 41);
    ɵɵtemplate(3, ProductDetailComponent_vdr_card_24_vdr_chip_3_Template, 2, 3, "vdr-chip", 42);
    ɵɵpipe(4, "sort");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtemplate(6, ProductDetailComponent_vdr_card_24_a_6_Template, 4, 5, "a", 43);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "catalog.product-options"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(4, 5, ctx_r2.entity == null ? null : ctx_r2.entity.optionGroups, "id"));
    ɵɵadvance(3);
    ɵɵproperty("vdrIfPermissions", ctx_r2.updatePermissions);
  }
}
function ProductDetailComponent_vdr_facet_value_chip_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-facet-value-chip", 47);
    ɵɵpipe(1, "hasPermission");
    ɵɵlistener("remove", function ProductDetailComponent_vdr_facet_value_chip_28_Template_vdr_facet_value_chip_remove_0_listener() {
      const facetValue_r10 = ɵɵrestoreView(_r9).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.removeProductFacetValue(facetValue_r10.id));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const facetValue_r10 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("facetValue", facetValue_r10)("removable", ɵɵpipeBind1(1, 2, ctx_r2.updatePermissions));
  }
}
function ProductDetailComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 48);
    ɵɵlistener("click", function ProductDetailComponent_button_31_Template_button_click_0_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectProductFacetValue());
    });
    ɵɵelement(1, "clr-icon", 49);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "catalog.add-facets"), " ");
  }
}
function ProductDetailComponent_vdr_card_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card");
    ɵɵelement(1, "vdr-page-entity-info", 50);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entity_r12 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("entity", entity_r12);
  }
}
function ProductDetailComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "clr-checkbox-wrapper");
    ɵɵelement(2, "input", 51);
    ɵɵelementStart(3, "label");
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 1, "catalog.auto-update-product-variant-name"));
  }
}
function ProductDetailComponent_vdr_card_55_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 11);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 52);
    ɵɵpipe(3, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r2.customFields)("customFieldsFormGroup", ctx_r2.detailForm.get("customFields"))("readonly", !ɵɵpipeBind1(3, 6, ctx_r2.updatePermissions));
  }
}
function ProductDetailComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "vdr-generate-product-variants", 53);
    ɵɵlistener("variantsChange", function ProductDetailComponent_div_63_Template_vdr_generate_product_variants_variantsChange_1_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.createVariantsConfig = $event);
    });
    ɵɵelementEnd()();
  }
}
function ProductDetailComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-product-variant-list", 54);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("productId", ctx_r2.id)("hideLanguageSelect", true);
  }
}
function ProductDetailComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 55)(1, "a", 56);
    ɵɵelement(2, "clr-icon", 57);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c44));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "catalog.manage-variants"), "");
  }
}
var _c45 = () => ["CreateCatalog", "CreateProduct"];
function ProductListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 19);
    ɵɵelement(1, "clr-icon", 20);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c26));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "catalog.create-new-product"), " ");
  }
}
function ProductListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const product_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", product_r1.id, " ");
  }
}
function ProductListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const product_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, product_r2.createdAt, "short"), " ");
  }
}
function ProductListComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const product_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, product_r3.updatedAt, "short"), " ");
  }
}
function ProductListComponent_ng_template_33_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 23);
    ɵɵpipe(1, "assetPreview");
  }
  if (rf & 2) {
    const asset_r4 = ctx.ngIf;
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, asset_r4, "tiny"), ɵɵsanitizeUrl);
  }
}
function ProductListComponent_ng_template_33_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵelement(1, "clr-icon", 25);
    ɵɵelementEnd();
  }
}
function ProductListComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, ProductListComponent_ng_template_33_img_1_Template, 2, 4, "img", 22)(2, ProductListComponent_ng_template_33_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r5 = ctx.item;
    const imagePlaceholder_r6 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", product_r5.featuredAsset)("ngIfElse", imagePlaceholder_r6);
  }
}
function ProductListComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 26)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r7 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c27, product_r7.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(product_r7.name);
  }
}
function ProductListComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const product_r8 = ctx.item;
    ɵɵtextInterpolate1(" ", product_r8.slug, " ");
  }
}
function ProductListComponent_ng_template_42_vdr_chip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 30);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.enabled"));
  }
}
function ProductListComponent_ng_template_42_vdr_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 31);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "common.disabled"));
  }
}
function ProductListComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ProductListComponent_ng_template_42_vdr_chip_0_Template, 3, 3, "vdr-chip", 28)(1, ProductListComponent_ng_template_42_vdr_chip_1_Template, 3, 3, "vdr-chip", 29);
  }
  if (rf & 2) {
    const product_r9 = ctx.item;
    ɵɵproperty("ngIf", product_r9.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !product_r9.enabled);
  }
}
function ProductListComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    const product_r10 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "catalog.variant-count", ɵɵpureFunction1(4, _c22, product_r10.variantList == null ? null : product_r10.variantList.totalItems)), " ");
  }
}
function ProductListComponent_vdr_dt2_custom_field_column_46_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-dt2-custom-field-column", 32);
  }
  if (rf & 2) {
    const customField_r11 = ctx.$implicit;
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("customField", customField_r11)("sorts", ctx_r11.sorts);
  }
}
var _c46 = ".image-col[_ngcontent-%COMP%]{width:70px}.image-placeholder[_ngcontent-%COMP%]{width:50px;height:50px;margin-top:calc(var(--space-unit) * -1);margin-bottom:calc(var(--space-unit) * -1);background-color:var(--color-component-bg-200)}.image-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--border-radius-img)}.image-placeholder[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]{text-align:center;color:var(--color-grey-300)}.search-form[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}vdr-product-search-input[_ngcontent-%COMP%]{min-width:300px}@media screen and (max-width: 768px){vdr-product-search-input[_ngcontent-%COMP%]{min-width:100px}}.search-settings-menu[_ngcontent-%COMP%]{margin:0 12px}td.disabled[_ngcontent-%COMP%]{background-color:var(--color-component-bg-200)}.search-index-button[_ngcontent-%COMP%]{position:relative}.search-index-button[_ngcontent-%COMP%]   vdr-status-badge[_ngcontent-%COMP%]{right:0;top:0}.run-updates-button[_ngcontent-%COMP%]{position:relative}.run-updates-button[_ngcontent-%COMP%]   vdr-status-badge[_ngcontent-%COMP%]{left:10px;top:10px}.edit-button[_ngcontent-%COMP%]{margin-inline-end:24px}.sku[_ngcontent-%COMP%]{color:var(--color-text-300)}";
var _c47 = (a0) => ({
  rate: a0
});
var _c48 = (a0, a1) => ({
  price: a0,
  rate: a1
});
function VariantPriceDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 3, "catalog.price-includes-tax-at", ɵɵpureFunction1(6, _c47, ɵɵpipeBind1(2, 1, ctx_r0.taxRate$))), "\n");
  }
}
function VariantPriceDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "localeCurrency");
    ɵɵpipe(4, "async");
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 8, "catalog.price-with-tax-in-default-zone", ɵɵpureFunction2(11, _c48, ɵɵpipeBind2(3, 3, ɵɵpipeBind1(2, 1, ctx_r0.grossPrice$), ctx_r0.currencyCode), ɵɵpipeBind1(4, 6, ctx_r0.taxRate$))), "\n");
  }
}
function VariantPriceStrategyDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelement(1, "vdr-form-item", 2);
    ɵɵpipe(2, "translate");
    ɵɵpipe(3, "translate");
    ɵɵelementStart(4, "div", 3)(5, "vdr-form-item", 4);
    ɵɵpipe(6, "translate");
    ɵɵtext(7);
    ɵɵpipe(8, "localeCurrency");
    ɵɵelementEnd();
    ɵɵelementStart(9, "vdr-form-item", 4);
    ɵɵpipe(10, "translate");
    ɵɵtext(11);
    ɵɵpipe(12, "localeCurrency");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(2, 6, "catalog.calculated-price"))("tooltip", ɵɵpipeBind1(3, 8, "catalog.calculated-price-tooltip"));
    ɵɵadvance(4);
    ɵɵproperty("label", ɵɵpipeBind1(6, 10, "common.price"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(8, 12, ctx_r0.variant.price, ctx_r0.variant.currencyCode), " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(10, 15, "common.price-with-tax"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(12, 17, ctx_r0.variant.priceWithTax, ctx_r0.variant.currencyCode), " ");
  }
}
function ProductVariantQuickJumpComponent_ng_select_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    ɵɵtextInterpolate2(" ", item_r3.name, " (", item_r3.sku, ") ");
  }
}
function ProductVariantQuickJumpComponent_ng_select_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ng-select", 1);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "translate");
    ɵɵtwoWayListener("ngModelChange", function ProductVariantQuickJumpComponent_ng_select_0_Template_ng_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.selectedVariantId, $event) || (ctx_r1.selectedVariantId = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function ProductVariantQuickJumpComponent_ng_select_0_Template_ng_select_change_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelect($event));
    });
    ɵɵtemplate(3, ProductVariantQuickJumpComponent_ng_select_0_ng_template_3_Template, 1, 2, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("items", ɵɵpipeBind1(1, 5, ctx_r1.variants$));
    ɵɵtwoWayProperty("ngModel", ctx_r1.selectedVariantId);
    ɵɵproperty("searchFn", ctx_r1.searchFn)("clearable", false)("placeholder", ɵɵpipeBind1(2, 7, "catalog.quick-jump-placeholder"));
  }
}
var _c49 = () => ["UpdateCatalog", "UpdateProduct"];
var _c50 = () => ["../../", "options"];
var _c51 = () => ["customFields"];
function ProductVariantDetailComponent_ng_container_4_vdr_language_selector_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-language-selector", 8);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵlistener("languageCodeChange", function ProductVariantDetailComponent_ng_container_4_vdr_language_selector_1_Template_vdr_language_selector_languageCodeChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setLanguage($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const availableLanguages_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ɵɵpipeBind1(1, 3, ctx_r1.isNew$))("availableLanguageCodes", availableLanguages_r3)("currentLanguageCode", ɵɵpipeBind1(2, 5, ctx_r1.languageCode$));
  }
}
function ProductVariantDetailComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductVariantDetailComponent_ng_container_4_vdr_language_selector_1_Template, 3, 7, "vdr-language-selector", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const availableLanguages_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", availableLanguages_r3.length > 1);
  }
}
function ProductVariantDetailComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function ProductVariantDetailComponent_button_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", (ctx_r1.detailForm.invalid || ctx_r1.stockLevelsForm.invalid || ctx_r1.pricesForm.invalid || ctx_r1.detailForm.pristine && ctx_r1.stockLevelsForm.pristine && ctx_r1.pricesForm.pristine) && !ctx_r1.assetsChanged());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "common.update"), " ");
  }
}
function ProductVariantDetailComponent_form_11_clr_toggle_wrapper_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "clr-toggle-wrapper");
    ɵɵelement(1, "input", 39);
    ɵɵelementStart(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("formControl", ctx_r1.detailForm.get(ɵɵpureFunction0(4, _c42)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 2, "common.enabled"));
  }
}
function ProductVariantDetailComponent_form_11_vdr_card_7_vdr_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 43)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("colorFrom", ctx_r1.optionGroupCode(option_r6.groupId))("invert", true);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r1.optionGroupCode(option_r6.groupId), ":");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.optionName(option_r6), " ");
  }
}
function ProductVariantDetailComponent_form_11_vdr_card_7_a_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 44);
    ɵɵelement(1, "clr-icon", 45);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c50));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "catalog.edit-options"), " ");
  }
}
function ProductVariantDetailComponent_form_11_vdr_card_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 14);
    ɵɵpipe(1, "translate");
    ɵɵelementStart(2, "div", 40);
    ɵɵtemplate(3, ProductVariantDetailComponent_form_11_vdr_card_7_vdr_chip_3_Template, 4, 4, "vdr-chip", 41);
    ɵɵpipe(4, "sort");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtemplate(6, ProductVariantDetailComponent_form_11_vdr_card_7_a_6_Template, 4, 5, "a", 42);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const variant_r7 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind1(1, 3, "catalog.product-options"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(4, 5, variant_r7.options, "groupId"));
    ɵɵadvance(3);
    ɵɵproperty("vdrIfPermissions", ctx_r1.updatePermissions);
  }
}
function ProductVariantDetailComponent_form_11_vdr_facet_value_chip_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-facet-value-chip", 46);
    ɵɵpipe(1, "hasPermission");
    ɵɵlistener("remove", function ProductVariantDetailComponent_form_11_vdr_facet_value_chip_11_Template_vdr_facet_value_chip_remove_0_listener() {
      const facetValue_r9 = ɵɵrestoreView(_r8).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.removeFacetValue(facetValue_r9.id));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const facetValue_r9 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("facetValue", facetValue_r9)("removable", ɵɵpipeBind1(1, 2, ctx_r1.updatePermissions));
  }
}
function ProductVariantDetailComponent_form_11_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 47);
    ɵɵlistener("click", function ProductVariantDetailComponent_form_11_button_14_Template_button_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.selectFacetValue());
    });
    ɵɵelement(1, "clr-icon", 48);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "catalog.add-facets"), " ");
  }
}
function ProductVariantDetailComponent_form_11_vdr_page_entity_info_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-page-entity-info", 49);
  }
  if (rf & 2) {
    const entity_r11 = ctx.ngIf;
    ɵɵproperty("entity", entity_r11);
  }
}
function ProductVariantDetailComponent_form_11_vdr_card_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-card", 14);
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "vdr-tabbed-custom-fields", 50);
    ɵɵpipe(3, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("title", ɵɵpipeBind1(1, 4, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.detailForm.get("customFields"))("readonly", !ɵɵpipeBind1(3, 6, ctx_r1.updatePermissions));
  }
}
function ProductVariantDetailComponent_form_11_option_41_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 34);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const taxCategory_r12 = ctx.$implicit;
    ɵɵproperty("value", taxCategory_r12.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", taxCategory_r12.name, " ");
  }
}
function ProductVariantDetailComponent_form_11_div_43_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "button", 57);
    ɵɵlistener("click", function ProductVariantDetailComponent_form_11_div_43_div_7_Template_button_click_1_listener() {
      ɵɵrestoreView(_r13);
      const price_r14 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleDeletePrice(price_r14.get("delete")));
    });
    ɵɵelement(2, "clr-icon", 58);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const price_r14 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("disabled", price_r14.value.currencyCode === ctx_r1.channelDefaultCurrencyCode);
  }
}
function ProductVariantDetailComponent_form_11_div_43_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 59)(1, "div", 60)(2, "span", 61);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd()();
    ɵɵelement(5, "vdr-tabbed-custom-fields", 62);
    ɵɵpipe(6, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const price_r14 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 4, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customPriceFields)("customFieldsFormGroup", price_r14.get(ɵɵpureFunction0(8, _c51)))("readonly", !ɵɵpipeBind1(6, 6, ctx_r1.updatePermissions));
  }
}
function ProductVariantDetailComponent_form_11_div_43_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 51)(1, "vdr-form-field", 52);
    ɵɵpipe(2, "translate");
    ɵɵpipe(3, "translate");
    ɵɵelementStart(4, "div", 53);
    ɵɵelement(5, "vdr-currency-input", 54);
    ɵɵpipe(6, "hasPermission");
    ɵɵtemplate(7, ProductVariantDetailComponent_form_11_div_43_div_7_Template, 3, 1, "div", 2);
    ɵɵelementEnd()();
    ɵɵelement(8, "vdr-variant-price-detail", 55);
    ɵɵpipe(9, "async");
    ɵɵtemplate(10, ProductVariantDetailComponent_form_11_div_43_div_10_Template, 7, 9, "div", 56);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const price_r14 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", price_r14);
    ɵɵadvance();
    ɵɵproperty("label", ɵɵpipeBind1(2, 13, "catalog.price") + (1 < ctx_r1.pricesForm.length ? " (" + price_r14.value.currencyCode + ")" : ""))("tooltip", 1 < ctx_r1.pricesForm.length && price_r14.value.currencyCode === ctx_r1.channelDefaultCurrencyCode ? ɵɵpipeBind1(3, 15, "catalog.default-currency") : void 0);
    ɵɵadvance(3);
    ɵɵclassProp("pending-deletion", price_r14.value.delete === true);
    ɵɵadvance();
    ɵɵproperty("currencyCode", price_r14.value.currencyCode)("readonly", !ɵɵpipeBind1(6, 17, ctx_r1.updatePermissions) || price_r14.value.delete === true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", 1 < ctx_r1.pricesForm.controls.length);
    ɵɵadvance();
    ɵɵproperty("price", price_r14.value.price)("currencyCode", price_r14.value.currencyCode)("priceIncludesTax", ɵɵpipeBind1(9, 19, ctx_r1.channelPriceIncludesTax$))("taxCategoryId", ctx_r1.detailForm.get("taxCategoryId").value);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.customPriceFields.length);
  }
}
function ProductVariantDetailComponent_form_11_ng_container_46_div_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 66);
    ɵɵlistener("click", function ProductVariantDetailComponent_form_11_ng_container_46_div_1_button_8_Template_button_click_0_listener() {
      const currencyCode_r16 = ɵɵrestoreView(_r15).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.addPriceInCurrency(currencyCode_r16));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "localeCurrencyName");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const currencyCode_r16 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, currencyCode_r16), " ");
  }
}
function ProductVariantDetailComponent_form_11_ng_container_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "vdr-dropdown")(2, "button", 63);
    ɵɵelement(3, "clr-icon", 48);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelement(6, "clr-icon", 64);
    ɵɵelementEnd();
    ɵɵelementStart(7, "vdr-dropdown-menu");
    ɵɵtemplate(8, ProductVariantDetailComponent_form_11_ng_container_46_div_1_button_8_Template, 3, 3, "button", 65);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const unusedCurrencyCodes_r17 = ɵɵnextContext().ngIf;
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "catalog.add-price-in-another-currency"), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", unusedCurrencyCodes_r17);
  }
}
function ProductVariantDetailComponent_form_11_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductVariantDetailComponent_form_11_ng_container_46_div_1_Template, 9, 4, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const unusedCurrencyCodes_r17 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", unusedCurrencyCodes_r17.length);
  }
}
function ProductVariantDetailComponent_form_11_div_76_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 67)(1, "vdr-form-field", 68);
    ɵɵpipe(2, "translate");
    ɵɵelement(3, "input", 69);
    ɵɵpipe(4, "hasPermission");
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-form-item", 70);
    ɵɵpipe(6, "translate");
    ɵɵtext(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    const stockLevel_r18 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", stockLevel_r18);
    ɵɵadvance();
    ɵɵproperty("label", ((tmp_5_0 = stockLevel_r18.get("stockLocationName")) == null ? null : tmp_5_0.value) + ": " + ɵɵpipeBind1(2, 7, "catalog.stock-on-hand"))("for", "stockOnHand_" + ((tmp_6_0 = stockLevel_r18.get("stockLocationId")) == null ? null : tmp_6_0.value));
    ɵɵadvance(2);
    ɵɵproperty("id", "stockOnHand_" + ((tmp_7_0 = stockLevel_r18.get("stockLocationId")) == null ? null : tmp_7_0.value))("readonly", !ɵɵpipeBind1(4, 9, ctx_r1.updatePermissions));
    ɵɵadvance(2);
    ɵɵproperty("label", ((tmp_9_0 = stockLevel_r18.get("stockLocationName")) == null ? null : tmp_9_0.value) + ": " + ɵɵpipeBind1(6, 11, "catalog.stock-allocated"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", (tmp_10_0 = stockLevel_r18.get("stockAllocated")) == null ? null : tmp_10_0.value, " ");
  }
}
function ProductVariantDetailComponent_form_11_ng_container_77_div_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 66);
    ɵɵlistener("click", function ProductVariantDetailComponent_form_11_ng_container_77_div_1_button_8_Template_button_click_0_listener() {
      const stockLocation_r20 = ɵɵrestoreView(_r19).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.addStockLocation(stockLocation_r20));
    });
    ɵɵelement(1, "clr-icon", 71);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const stockLocation_r20 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", stockLocation_r20.name, " ");
  }
}
function ProductVariantDetailComponent_form_11_ng_container_77_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "vdr-dropdown")(2, "button", 63);
    ɵɵelement(3, "clr-icon", 48);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelement(6, "clr-icon", 64);
    ɵɵelementEnd();
    ɵɵelementStart(7, "vdr-dropdown-menu");
    ɵɵtemplate(8, ProductVariantDetailComponent_form_11_ng_container_77_div_1_button_8_Template, 3, 1, "button", 65);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const unusedStockLocations_r21 = ɵɵnextContext().ngIf;
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "catalog.add-stock-location"), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", unusedStockLocations_r21);
  }
}
function ProductVariantDetailComponent_form_11_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductVariantDetailComponent_form_11_ng_container_77_div_1_Template, 9, 4, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const unusedStockLocations_r21 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", unusedStockLocations_r21.length);
  }
}
function ProductVariantDetailComponent_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 10)(1, "vdr-page-detail-layout")(2, "vdr-page-detail-sidebar")(3, "vdr-card")(4, "vdr-form-field", 11);
    ɵɵpipe(5, "translate");
    ɵɵtemplate(6, ProductVariantDetailComponent_form_11_clr_toggle_wrapper_6_Template, 5, 5, "clr-toggle-wrapper", 12);
    ɵɵelementEnd()();
    ɵɵtemplate(7, ProductVariantDetailComponent_form_11_vdr_card_7_Template, 7, 8, "vdr-card", 13);
    ɵɵelementStart(8, "vdr-card", 14);
    ɵɵpipe(9, "translate");
    ɵɵelementStart(10, "div", 15);
    ɵɵtemplate(11, ProductVariantDetailComponent_form_11_vdr_facet_value_chip_11_Template, 2, 4, "vdr-facet-value-chip", 16);
    ɵɵpipe(12, "async");
    ɵɵelementEnd();
    ɵɵelementStart(13, "div");
    ɵɵtemplate(14, ProductVariantDetailComponent_form_11_button_14_Template, 4, 3, "button", 17);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "vdr-card");
    ɵɵtemplate(16, ProductVariantDetailComponent_form_11_vdr_page_entity_info_16_Template, 1, 1, "vdr-page-entity-info", 18);
    ɵɵpipe(17, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(18, "vdr-page-block");
    ɵɵelement(19, "button", 19);
    ɵɵelementStart(20, "vdr-card")(21, "div", 20)(22, "vdr-form-field", 21);
    ɵɵpipe(23, "translate");
    ɵɵelement(24, "input", 22);
    ɵɵpipe(25, "hasPermission");
    ɵɵelementEnd();
    ɵɵelementStart(26, "vdr-form-field", 23);
    ɵɵpipe(27, "translate");
    ɵɵelement(28, "input", 24);
    ɵɵpipe(29, "hasPermission");
    ɵɵelementEnd()()();
    ɵɵtemplate(30, ProductVariantDetailComponent_form_11_vdr_card_30_Template, 4, 8, "vdr-card", 13);
    ɵɵelement(31, "vdr-custom-detail-component-host", 25);
    ɵɵelementStart(32, "vdr-card", 14);
    ɵɵpipe(33, "translate");
    ɵɵelementStart(34, "vdr-assets", 26);
    ɵɵlistener("change", function ProductVariantDetailComponent_form_11_Template_vdr_assets_change_34_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.assetChanges = $event);
    });
    ɵɵelementEnd()();
    ɵɵelementStart(35, "vdr-card", 14);
    ɵɵpipe(36, "translate");
    ɵɵelementStart(37, "div", 20)(38, "vdr-form-field", 27);
    ɵɵpipe(39, "translate");
    ɵɵelementStart(40, "select", 28);
    ɵɵtemplate(41, ProductVariantDetailComponent_form_11_option_41_Template, 2, 2, "option", 29);
    ɵɵpipe(42, "async");
    ɵɵelementEnd()()();
    ɵɵtemplate(43, ProductVariantDetailComponent_form_11_div_43_Template, 11, 21, "div", 30);
    ɵɵelement(44, "vdr-variant-price-strategy-detail", 31);
    ɵɵpipe(45, "async");
    ɵɵtemplate(46, ProductVariantDetailComponent_form_11_ng_container_46_Template, 2, 1, "ng-container", 2);
    ɵɵpipe(47, "async");
    ɵɵelementEnd();
    ɵɵelementStart(48, "vdr-card", 14);
    ɵɵpipe(49, "translate");
    ɵɵelementStart(50, "div", 20)(51, "vdr-form-field", 32);
    ɵɵpipe(52, "translate");
    ɵɵpipe(53, "translate");
    ɵɵelementStart(54, "select", 33);
    ɵɵpipe(55, "hasPermission");
    ɵɵelementStart(56, "option", 34);
    ɵɵtext(57);
    ɵɵpipe(58, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(59, "option", 34);
    ɵɵtext(60);
    ɵɵpipe(61, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(62, "option", 34);
    ɵɵtext(63);
    ɵɵpipe(64, "translate");
    ɵɵelementEnd()()();
    ɵɵelementStart(65, "vdr-form-item", 35);
    ɵɵpipe(66, "translate");
    ɵɵpipe(67, "translate");
    ɵɵelement(68, "input", 36);
    ɵɵpipe(69, "hasPermission");
    ɵɵelementStart(70, "clr-toggle-wrapper");
    ɵɵelement(71, "input", 37);
    ɵɵpipe(72, "hasPermission");
    ɵɵelementStart(73, "label");
    ɵɵtext(74);
    ɵɵpipe(75, "translate");
    ɵɵelementEnd()()()();
    ɵɵtemplate(76, ProductVariantDetailComponent_form_11_div_76_Template, 8, 13, "div", 38)(77, ProductVariantDetailComponent_form_11_ng_container_77_Template, 2, 1, "ng-container", 2);
    ɵɵpipe(78, "async");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    let tmp_42_0;
    const variant_r7 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.detailForm);
    ɵɵadvance(4);
    ɵɵproperty("label", ɵɵpipeBind1(5, 46, "catalog.visibility"));
    ɵɵadvance(2);
    ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(100, _c49));
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r7.options.length);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(9, 48, "catalog.facets"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(12, 50, ctx_r1.facetValues$));
    ɵɵadvance(3);
    ɵɵproperty("vdrIfPermissions", ctx_r1.updatePermissions);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(17, 52, ctx_r1.entity$));
    ɵɵadvance(6);
    ɵɵproperty("label", ɵɵpipeBind1(23, 54, "common.name"));
    ɵɵadvance(2);
    ɵɵproperty("readonly", !ɵɵpipeBind1(25, 56, ɵɵpureFunction0(101, _c49)));
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(27, 58, "catalog.sku"));
    ɵɵadvance(2);
    ɵɵproperty("readonly", !ɵɵpipeBind1(29, 60, ctx_r1.updatePermissions));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.customFields.length);
    ɵɵadvance();
    ɵɵproperty("entity$", ctx_r1.entity$)("detailForm", ctx_r1.detailForm);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(33, 62, "catalog.assets"));
    ɵɵadvance(2);
    ɵɵproperty("assets", ctx_r1.assetChanges.assets || variant_r7.assets)("featuredAsset", ctx_r1.assetChanges.featuredAsset || variant_r7.featuredAsset)("updatePermissions", ctx_r1.updatePermissions);
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(36, 64, "catalog.price-and-tax"));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(39, 66, "catalog.tax-category"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(42, 68, ctx_r1.taxCategories$));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.pricesForm.controls);
    ɵɵadvance();
    ɵɵproperty("channelPriceIncludesTax", ɵɵpipeBind1(45, 70, ctx_r1.channelPriceIncludesTax$))("channelDefaultCurrencyCode", ctx_r1.channelDefaultCurrencyCode)("variant", variant_r7);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(47, 72, ctx_r1.unusedCurrencyCodes$));
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(49, 74, "catalog.stock-levels"));
    ɵɵadvance(3);
    ɵɵproperty("label", ɵɵpipeBind1(52, 76, "catalog.track-inventory"))("tooltip", ɵɵpipeBind1(53, 78, "catalog.track-inventory-tooltip"));
    ɵɵadvance(3);
    ɵɵproperty("disabled", !ɵɵpipeBind1(55, 80, ctx_r1.updatePermissions));
    ɵɵadvance(2);
    ɵɵproperty("value", ctx_r1.GlobalFlag.TRUE);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(58, 82, "catalog.track-inventory-true"), " ");
    ɵɵadvance(2);
    ɵɵproperty("value", ctx_r1.GlobalFlag.FALSE);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(61, 84, "catalog.track-inventory-false"), " ");
    ɵɵadvance(2);
    ɵɵproperty("value", ctx_r1.GlobalFlag.INHERIT);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(64, 86, "catalog.track-inventory-inherit"), " ");
    ɵɵadvance(2);
    ɵɵproperty("label", ɵɵpipeBind1(66, 88, "catalog.out-of-stock-threshold"))("tooltip", ɵɵpipeBind1(67, 90, "catalog.out-of-stock-threshold-tooltip"));
    ɵɵadvance(3);
    ɵɵproperty("readonly", !ɵɵpipeBind1(69, 92, ctx_r1.updatePermissions))("vdrDisabled", ((tmp_42_0 = ctx_r1.detailForm.get("useGlobalOutOfStockThreshold")) == null ? null : tmp_42_0.value) !== false || ctx_r1.inventoryIsNotTracked(ctx_r1.detailForm));
    ɵɵadvance(3);
    ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(72, 94, ctx_r1.updatePermissions) || ctx_r1.inventoryIsNotTracked(ctx_r1.detailForm));
    ɵɵadvance(3);
    ɵɵtextInterpolate2("", ɵɵpipeBind1(75, 96, "catalog.use-global-value"), " (", ctx_r1.globalOutOfStockThreshold, ")");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.stockLevelsForm.controls);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(78, 98, ctx_r1.unusedStockLocation$));
  }
}
function ProductVariantsTableComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const optionGroup_r1 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(optionGroup_r1.name);
  }
}
function ProductVariantsTableComponent_tr_22_ng_container_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 18);
    ɵɵpipe(1, "assetPreview");
  }
  if (rf & 2) {
    const featuredAsset_r2 = ctx.ngIf;
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, featuredAsset_r2, "tiny"), ɵɵsanitizeUrl);
  }
}
function ProductVariantsTableComponent_tr_22_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "clr-icon", 20);
    ɵɵelementEnd();
  }
}
function ProductVariantsTableComponent_tr_22_ng_container_1_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 6);
    ɵɵpipe(2, "stringToColor");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const formGroup_r4 = ɵɵnextContext().ngIf;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("color", ɵɵpipeBind1(2, 5, ctx_r4.optionGroupName(option_r3.groupId)));
    ɵɵclassProp("disabled", !formGroup_r4.get("enabled").value);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", option_r3.name, " ");
  }
}
function ProductVariantsTableComponent_tr_22_ng_container_1_vdr_currency_input_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-currency-input", 21);
    ɵɵpipe(1, "hasPermission");
  }
  if (rf & 2) {
    const variant_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("currencyCode", variant_r6.currencyCode)("readonly", !ɵɵpipeBind1(1, 2, ctx_r4.updatePermission));
  }
}
function ProductVariantsTableComponent_tr_22_ng_container_1_vdr_currency_input_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-currency-input", 22);
    ɵɵpipe(1, "hasPermission");
  }
  if (rf & 2) {
    const variant_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("currencyCode", variant_r6.currencyCode)("readonly", !ɵɵpipeBind1(1, 2, ctx_r4.updatePermission));
  }
}
function ProductVariantsTableComponent_tr_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 5);
    ɵɵelementStart(1, "td", 6)(2, "div", 7)(3, "div", 8);
    ɵɵtemplate(4, ProductVariantsTableComponent_tr_22_ng_container_1_img_4_Template, 2, 4, "img", 9)(5, ProductVariantsTableComponent_tr_22_ng_container_1_ng_template_5_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()()();
    ɵɵelementStart(7, "td", 6)(8, "clr-input-container");
    ɵɵelement(9, "input", 10);
    ɵɵpipe(10, "hasPermission");
    ɵɵpipe(11, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(12, "td", 6)(13, "clr-input-container");
    ɵɵelement(14, "input", 11);
    ɵɵpipe(15, "hasPermission");
    ɵɵpipe(16, "translate");
    ɵɵelementEnd()();
    ɵɵtemplate(17, ProductVariantsTableComponent_tr_22_ng_container_1_ng_container_17_Template, 4, 7, "ng-container", 2);
    ɵɵpipe(18, "sort");
    ɵɵelementStart(19, "td", 12)(20, "clr-input-container");
    ɵɵtemplate(21, ProductVariantsTableComponent_tr_22_ng_container_1_vdr_currency_input_21_Template, 2, 4, "vdr-currency-input", 13)(22, ProductVariantsTableComponent_tr_22_ng_container_1_vdr_currency_input_22_Template, 2, 4, "vdr-currency-input", 14);
    ɵɵelementEnd()();
    ɵɵelementStart(23, "td", 15)(24, "clr-input-container");
    ɵɵelement(25, "input", 16);
    ɵɵpipe(26, "hasPermission");
    ɵɵelementEnd()();
    ɵɵelementStart(27, "td", 15)(28, "clr-toggle-wrapper");
    ɵɵelement(29, "input", 17);
    ɵɵpipe(30, "hasPermission");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formGroup_r4 = ctx.ngIf;
    const placeholder_r7 = ɵɵreference(6);
    const variant_r6 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("formGroup", formGroup_r4);
    ɵɵadvance();
    ɵɵclassProp("disabled", !formGroup_r4.get("enabled").value);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r4.getFeaturedAsset(variant_r6))("ngIfElse", placeholder_r7);
    ɵɵadvance(3);
    ɵɵclassProp("disabled", !formGroup_r4.get("enabled").value);
    ɵɵadvance(2);
    ɵɵproperty("readonly", !ɵɵpipeBind1(10, 24, ctx_r4.updatePermission))("placeholder", ɵɵpipeBind1(11, 26, "common.name"));
    ɵɵadvance(3);
    ɵɵclassProp("disabled", !formGroup_r4.get("enabled").value);
    ɵɵadvance(2);
    ɵɵproperty("readonly", !ɵɵpipeBind1(15, 28, ctx_r4.updatePermission))("placeholder", ɵɵpipeBind1(16, 30, "catalog.sku"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(18, 32, variant_r6.options, "groupId"));
    ɵɵadvance(2);
    ɵɵclassProp("disabled", !formGroup_r4.get("enabled").value);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r4.channelPriceIncludesTax);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.channelPriceIncludesTax);
    ɵɵadvance();
    ɵɵclassProp("disabled", !formGroup_r4.get("enabled").value);
    ɵɵadvance(2);
    ɵɵproperty("readonly", !ɵɵpipeBind1(26, 35, ctx_r4.updatePermission));
    ɵɵadvance(2);
    ɵɵclassProp("disabled", !formGroup_r4.get("enabled").value);
    ɵɵadvance(2);
    ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(30, 37, ctx_r4.updatePermission));
  }
}
function ProductVariantsTableComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, ProductVariantsTableComponent_tr_22_ng_container_1_Template, 31, 39, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r6 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.formGroupMap.get(variant_r6.id));
  }
}
function UpdateProductOptionDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "catalog.update-product-option"));
  }
}
function UpdateProductOptionDialogComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section")(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelement(4, "vdr-tabbed-custom-fields", 10);
    ɵɵpipe(5, "hasPermission");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 4, "common.custom-fields"));
    ɵɵadvance(2);
    ɵɵproperty("customFields", ctx_r1.customFields)("customFieldsFormGroup", ctx_r1.customFieldsForm)("readonly", !ɵɵpipeBind1(5, 6, ɵɵpureFunction0(8, _c49)));
  }
}
function UpdateProductOptionDialogComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function UpdateProductOptionDialogComponent_ng_template_15_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancel());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 12);
    ɵɵlistener("click", function UpdateProductOptionDialogComponent_ng_template_15_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.update());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const nameInput_r4 = ɵɵreference(4);
    const codeInput_r5 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "common.cancel"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", nameInput_r4.invalid || codeInput_r5.invalid || nameInput_r4.pristine && codeInput_r5.pristine && ctx_r1.customFieldsForm.pristine);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "catalog.update-product-option"), " ");
  }
}
function replaceLast(target, search, replace) {
  if (!target) {
    return "";
  }
  const lastIndex = target.lastIndexOf(search);
  if (lastIndex === -1) {
    return target;
  }
  const head = target.substr(0, lastIndex);
  const tail = target.substr(lastIndex).replace(search, replace);
  return head + tail;
}
var ProductDetailService = class _ProductDetailService {
  constructor(dataService) {
    this.dataService = dataService;
  }
  getTaxCategories() {
    return this.dataService.settings.getTaxCategories().mapSingle((data) => data.taxCategories.items).pipe(shareReplay(1));
  }
  createProductWithVariants(input, createVariantsConfig, languageCode) {
    const createProduct$ = this.dataService.product.createProduct(input);
    const nonEmptyOptionGroups = createVariantsConfig.groups.filter((g) => 0 < g.values.length);
    const createOptionGroups$ = this.createProductOptionGroups(nonEmptyOptionGroups, languageCode);
    return forkJoin(createProduct$, createOptionGroups$).pipe(mergeMap(([{
      createProduct
    }, optionGroups]) => {
      const addOptionsToProduct$ = optionGroups.length ? forkJoin(optionGroups.map((optionGroup) => this.dataService.product.addOptionGroupToProduct({
        productId: createProduct.id,
        optionGroupId: optionGroup.id
      }))) : of([]);
      return addOptionsToProduct$.pipe(map(() => ({
        createProduct,
        optionGroups
      })));
    }), mergeMap(({
      createProduct,
      optionGroups
    }) => {
      const variants = createVariantsConfig.variants.map((v) => {
        const optionIds = optionGroups.length ? v.optionValues.map((optionName, index) => {
          const option = optionGroups[index].options.find((o) => o.name === optionName);
          if (!option) {
            throw new Error(`Could not find a matching ProductOption "${optionName}" when creating variant`);
          }
          return option.id;
        }) : [];
        return __spreadProps(__spreadValues({}, v), {
          optionIds
        });
      });
      const options = optionGroups.map((og) => og.options).reduce((flat, o) => [...flat, ...o], []);
      return this.createProductVariants(createProduct, variants, options, languageCode, createVariantsConfig.stockLocationId);
    }));
  }
  createProductOptionGroups(groups, languageCode) {
    return groups.length ? forkJoin(groups.map((c) => this.dataService.product.createProductOptionGroups({
      code: (0, import_normalize_string.normalizeString)(c.name, "-"),
      translations: [{
        languageCode,
        name: c.name
      }],
      options: c.values.map((v) => ({
        code: (0, import_normalize_string.normalizeString)(v, "-"),
        translations: [{
          languageCode,
          name: v
        }]
      }))
    }).pipe(map((data) => data.createProductOptionGroup)))) : of([]);
  }
  createProductVariants(product, variantData, options, languageCode, stockLocationId) {
    const variants = variantData.map((v) => {
      const name = options.length ? `${product.name} ${v.optionIds.map((id) => options.find((o) => o.id === id)).filter(import_shared_utils.notNullOrUndefined).map((o) => o.name).join(" ")}` : product.name;
      return {
        productId: product.id,
        price: v.price,
        sku: v.sku,
        translations: [{
          languageCode,
          name
        }],
        stockLevels: [{
          stockLocationId,
          stockOnHand: v.stock
        }],
        optionIds: v.optionIds
      };
    });
    return this.dataService.product.createProductVariants(variants).pipe(map(({
      createProductVariants
    }) => ({
      createProductVariants,
      productId: product.id
    })));
  }
  updateProduct(updateOptions) {
    const {
      product,
      languageCode,
      autoUpdate,
      productInput,
      variantsInput
    } = updateOptions;
    const updateOperations = [];
    const updateVariantsInput = variantsInput || [];
    const variants$ = autoUpdate ? this.dataService.product.getProductVariantsForProduct({}, product.id).mapSingle(({
      productVariants
    }) => productVariants.items) : of([]);
    return variants$.pipe(mergeMap((variants) => {
      if (productInput) {
        updateOperations.push(this.dataService.product.updateProduct(productInput));
        const productOldName = findTranslation(product, languageCode)?.name ?? "";
        const productNewName = findTranslation(productInput, languageCode)?.name;
        if (productNewName && productOldName !== productNewName && autoUpdate) {
          for (const variant of variants) {
            const currentVariantName = findTranslation(variant, languageCode)?.name || "";
            let variantInput;
            const existingVariantInput = updateVariantsInput.find((i) => i.id === variant.id);
            if (existingVariantInput) {
              variantInput = existingVariantInput;
            } else {
              variantInput = {
                id: variant.id,
                translations: [{
                  languageCode,
                  name: currentVariantName
                }]
              };
              updateVariantsInput.push(variantInput);
            }
            const variantTranslation = findTranslation(variantInput, languageCode);
            if (variantTranslation) {
              if (variantTranslation.name) {
                variantTranslation.name = replaceLast(variantTranslation.name, productOldName, productNewName);
              } else {
                variantTranslation.name = [productNewName, ...variant.options.map((o) => o.name)].join(" ");
              }
            }
          }
        }
      }
      if (updateVariantsInput.length) {
        updateOperations.push(this.dataService.product.updateProductVariants(updateVariantsInput));
      }
      return forkJoin(updateOperations);
    }));
  }
  updateProductOptions(inputs, autoUpdateProductNames, product, languageCode) {
    const variants$ = autoUpdateProductNames ? this.dataService.product.getProductVariantsForProduct({}, product.id).mapSingle(({
      productVariants
    }) => productVariants.items) : of([]);
    return variants$.pipe(mergeMap((variants) => {
      let updateProductVariantNames$ = of([]);
      if (autoUpdateProductNames) {
        const replacementMap = /* @__PURE__ */ new Map();
        for (const input of inputs) {
          const newOptionName = findTranslation(input, languageCode)?.name;
          let oldOptionName;
          for (const variant of variants) {
            if (oldOptionName) {
              continue;
            }
            if (variant.options.map((o) => o.id).includes(input.id)) {
              if (!oldOptionName) {
                oldOptionName = findTranslation(variant.options.find((o) => o.id === input.id), languageCode)?.name;
              }
            }
          }
          if (oldOptionName && newOptionName) {
            replacementMap.set(oldOptionName, newOptionName);
          }
        }
        const variantsToUpdate = [];
        if (replacementMap.size) {
          const oldOptionNames = Array.from(replacementMap.keys());
          for (const variant of variants) {
            const variantName = findTranslation(variant, languageCode)?.name;
            if (!variantName) {
              continue;
            }
            if (!oldOptionNames.some((oldOptionName) => variantName.includes(oldOptionName))) {
              continue;
            }
            const updatedVariantName = oldOptionNames.reduce((name, oldOptionName) => replaceLast(name, oldOptionName, replacementMap.get(oldOptionName)), variantName);
            variantsToUpdate.push({
              id: variant.id,
              translations: [{
                languageCode,
                name: updatedVariantName
              }]
            });
          }
        }
        if (variantsToUpdate.length) {
          updateProductVariantNames$ = this.dataService.product.updateProductVariants(variantsToUpdate);
        } else {
          updateProductVariantNames$ = of([]);
        }
      }
      return forkJoin(inputs.map((input) => this.dataService.product.updateProductOption(input))).pipe(mergeMap(() => updateProductVariantNames$));
    }));
  }
  deleteProductVariant(id, productId) {
    return this.dataService.product.deleteProductVariant(id).pipe(switchMap((result) => {
      if (result.deleteProductVariant.result === DeletionResult.DELETED) {
        return this.dataService.product.getProduct(productId).single$;
      } else {
        return throwError(result.deleteProductVariant.message);
      }
    }));
  }
  static {
    this.ɵfac = function ProductDetailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailService)(ɵɵinject(DataService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductDetailService,
      factory: _ProductDetailService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var ProductOptionsEditorComponent = class _ProductOptionsEditorComponent extends BaseDetailComponent {
  constructor(route, router, serverConfigService, dataService, permissionsService, productDetailService, formBuilder, changeDetector, notificationService) {
    super(route, router, serverConfigService, dataService, permissionsService);
    this.route = route;
    this.router = router;
    this.serverConfigService = serverConfigService;
    this.dataService = dataService;
    this.permissionsService = permissionsService;
    this.productDetailService = productDetailService;
    this.formBuilder = formBuilder;
    this.changeDetector = changeDetector;
    this.notificationService = notificationService;
    this.autoUpdateVariantNames = true;
    this.paginationSettings = {};
    this.updatePermission = [Permission.UpdateCatalog, Permission.UpdateProduct];
    this.optionGroupCustomFields = this.getCustomFieldConfig("ProductOptionGroup");
    this.optionCustomFields = this.getCustomFieldConfig("ProductOption");
  }
  ngOnInit() {
    this.optionGroups$ = this.route.snapshot.data.entity.pipe(map((product) => product.optionGroups), tap((optionGroups) => {
      for (const group of optionGroups) {
        this.paginationSettings[group.id] = {
          currentPage: 1,
          itemsPerPage: 10
        };
      }
    }));
    this.detailForm = new UntypedFormGroup({
      optionGroups: new UntypedFormArray([])
    });
    super.init();
  }
  getOptionGroups() {
    const optionGroups = this.detailForm.get("optionGroups");
    return optionGroups.controls;
  }
  getOptions(optionGroup) {
    const options = optionGroup.get("options");
    return options.controls;
  }
  save() {
    if (this.detailForm.invalid || this.detailForm.pristine) {
      return;
    }
    const $product = this.dataService.product.getProduct(this.id).mapSingle((data) => data.product);
    combineLatest(this.entity$, this.languageCode$, $product).pipe(take(1), mergeMap(([{
      optionGroups
    }, languageCode, product]) => {
      const updateOperations = [];
      const updatedProductOptionInputs = [];
      for (const optionGroupForm of this.getOptionGroups()) {
        if (optionGroupForm.dirty) {
          const optionGroupEntity = optionGroups.find((og) => og.id === optionGroupForm.value.id);
          if (optionGroupEntity) {
            const input = this.getUpdatedOptionGroup(optionGroupEntity, optionGroupForm, languageCode);
            updateOperations.push(this.dataService.product.updateProductOptionGroup(input));
          }
        }
        for (const optionForm of this.getOptions(optionGroupForm)) {
          if (optionForm.dirty) {
            const optionGroup = optionGroups.find((og) => og.id === optionGroupForm.value.id)?.options.find((o) => o.id === optionForm.value.id);
            if (optionGroup) {
              const input = this.getUpdatedOption(optionGroup, optionForm, languageCode);
              updatedProductOptionInputs.push(input);
            }
          }
        }
      }
      if (updatedProductOptionInputs.length) {
        updateOperations.push(this.productDetailService.updateProductOptions(updatedProductOptionInputs, this.autoUpdateVariantNames, product, languageCode));
      }
      return forkJoin(updateOperations);
    })).subscribe(() => {
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "ProductOptionGroup"
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "ProductOptionGroup"
      });
    });
  }
  getUpdatedOptionGroup(optionGroup, optionGroupFormGroup, languageCode) {
    const input = createUpdatedTranslatable({
      translatable: optionGroup,
      updatedFields: optionGroupFormGroup.value,
      customFieldConfig: this.optionGroupCustomFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: optionGroup.name || ""
      }
    });
    return input;
  }
  getUpdatedOption(option, optionFormGroup, languageCode) {
    const input = createUpdatedTranslatable({
      translatable: option,
      updatedFields: optionFormGroup.value,
      customFieldConfig: this.optionCustomFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: option.name || ""
      }
    });
    return input;
  }
  setFormValues(entity, languageCode) {
    const groupsForm = this.detailForm.get("optionGroups");
    for (const optionGroup of entity.optionGroups) {
      const groupTranslation = findTranslation(optionGroup, languageCode);
      const groupForm = this.setOptionGroupForm(optionGroup, groupsForm, groupTranslation);
      this.setCustomFieldsForm(this.optionGroupCustomFields, groupForm, optionGroup, groupTranslation);
      let optionsForm = groupForm.get("options");
      if (!optionsForm) {
        optionsForm = this.formBuilder.array([]);
        groupForm.addControl("options", optionsForm);
      }
      for (const option of optionGroup.options) {
        const optionTranslation = findTranslation(option, languageCode);
        const optionForm = this.setOptionForm(option, optionsForm, optionTranslation);
        this.setCustomFieldsForm(this.optionCustomFields, optionForm, option, optionTranslation);
      }
    }
  }
  setCustomFieldsForm(customFields, formGroup, entity, currentTranslation) {
    if (customFields.length) {
      let customValueFieldsGroup = formGroup.get(["customFields"]);
      if (!customValueFieldsGroup) {
        customValueFieldsGroup = this.formBuilder.group(customFields.reduce((hash, field) => __spreadProps(__spreadValues({}, hash), {
          [field.name]: ""
        }), {}));
        formGroup.addControl("customFields", customValueFieldsGroup);
      }
      this.setCustomFieldFormValues(customFields, customValueFieldsGroup, entity, currentTranslation);
    }
  }
  setOptionGroupForm(entity, groupsForm, currentTranslation) {
    const group = {
      id: entity.id,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      code: entity.code,
      name: currentTranslation?.name ?? ""
    };
    let groupForm = groupsForm.controls.find((control) => control.value.id === entity.id);
    if (groupForm) {
      groupForm.get("id")?.setValue(group.id);
      groupForm.get("code")?.setValue(group.code);
      groupForm.get("name")?.setValue(group.name);
      groupForm.get("createdAt")?.setValue(group.createdAt);
      groupForm.get("updatedAt")?.setValue(group.updatedAt);
    } else {
      groupForm = this.formBuilder.group(group);
      groupsForm.push(groupForm);
    }
    return groupForm;
  }
  setOptionForm(entity, optionsForm, currentTranslation) {
    const group = {
      id: entity.id,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      code: entity.code,
      name: currentTranslation?.name ?? ""
    };
    let optionForm = optionsForm.controls.find((control) => control.value.id === entity.id);
    if (optionForm) {
      optionForm.get("id")?.setValue(group.id);
      optionForm.get("code")?.setValue(group.code);
      optionForm.get("name")?.setValue(group.name);
      optionForm.get("createdAt")?.setValue(group.createdAt);
      optionForm.get("updatedAt")?.setValue(group.updatedAt);
    } else {
      optionForm = this.formBuilder.group(group);
      optionsForm.push(optionForm);
    }
    return optionForm;
  }
  static {
    this.ɵfac = function ProductOptionsEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductOptionsEditorComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ServerConfigService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(PermissionsService), ɵɵdirectiveInject(ProductDetailService), ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductOptionsEditorComponent,
      selectors: [["vdr-product-options-editor"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 24,
      vars: 17,
      consts: [[3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], [1, "flex", "center"], [1, "mr-2"], ["clrCheckbox", "", "type", "checkbox", "id", "auto-update", 3, "ngModelChange", "ngModel"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "form", 3, "formGroup"], ["formGroupName", "optionGroups"], [3, "formArrayName", "title", 4, "ngFor", "ngForOf"], [3, "formArrayName", "title"], [3, "entity"], [1, "form-grid"], ["for", "name", 3, "label"], ["type", "text", "formControlName", "name", 3, "id", "readonly"], ["for", "code", 3, "label"], ["type", "text", "formControlName", "code", 3, "id", "readonly"], ["formGroupName", "customFields", 4, "ngIf"], ["id", "edit-options-list", 3, "items", "trackByPath", "itemsPerPage", "currentPage", "totalItems", "pageChange", "itemsPerPageChange", 4, "ngIf"], ["formGroupName", "customFields"], ["entityName", "ProductOptionGroup", 3, "customFields", "customFieldsFormGroup", "readonly"], ["id", "edit-options-list", 3, "pageChange", "itemsPerPageChange", "items", "trackByPath", "itemsPerPage", "currentPage", "totalItems"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "updated-at", 3, "heading", "hiddenByDefault"], ["id", "name", 3, "heading", "optional"], ["id", "code", 3, "heading", "optional"], ["id", "custom-fields", 3, "heading", "hiddenByDefault"], ["type", "text", 3, "formControl", "readonly"], ["type", "text", 3, "formControl"], ["entityName", "ProductOption", 3, "customFields", "compact", "customFieldsFormGroup", "readonly"]],
      template: function ProductOptionsEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-header");
          ɵɵelement(1, "vdr-page-title");
          ɵɵelementStart(2, "vdr-page-header-description");
          ɵɵtext(3);
          ɵɵpipe(4, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(5, "vdr-page-body")(6, "vdr-page-block")(7, "vdr-action-bar")(8, "vdr-ab-left")(9, "vdr-language-selector", 0);
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("languageCodeChange", function ProductOptionsEditorComponent_Template_vdr_language_selector_languageCodeChange_9_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(12, "vdr-ab-right")(13, "div", 1)(14, "div", 2)(15, "clr-checkbox-wrapper")(16, "input", 3);
          ɵɵtwoWayListener("ngModelChange", function ProductOptionsEditorComponent_Template_input_ngModelChange_16_listener($event) {
            ɵɵtwoWayBindingSet(ctx.autoUpdateVariantNames, $event) || (ctx.autoUpdateVariantNames = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelementStart(17, "label");
          ɵɵtext(18);
          ɵɵpipe(19, "translate");
          ɵɵelementEnd()()();
          ɵɵtemplate(20, ProductOptionsEditorComponent_button_20_Template, 3, 4, "button", 4);
          ɵɵelementEnd()()()();
          ɵɵelementStart(21, "vdr-page-block");
          ɵɵtemplate(22, ProductOptionsEditorComponent_form_22_Template, 3, 2, "form", 5);
          ɵɵpipe(23, "async");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(4, 7, "catalog.page-description-options-editor"));
          ɵɵadvance(6);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(10, 9, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(11, 11, ctx.languageCode$));
          ɵɵadvance(7);
          ɵɵtwoWayProperty("ngModel", ctx.autoUpdateVariantNames);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(19, 13, "catalog.auto-update-product-variant-name"));
          ɵɵadvance(2);
          ɵɵproperty("vdrIfPermissions", ctx.updatePermission);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(23, 15, ctx.optionGroups$));
        }
      },
      dependencies: [ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, FormFieldComponent, FormFieldControlDirective, LanguageSelectorComponent, IfPermissionsDirective, TabbedCustomFieldsComponent, DataTable2Component, DataTable2ColumnComponent, PageHeaderComponent, PageTitleComponent, PageHeaderDescriptionComponent, PageBodyComponent, PageBlockComponent, PageEntityInfoComponent, CardComponent, AsyncPipe, TranslatePipe, HasPermissionPipe, LocaleDatePipe],
      styles: [".option-group-header[_ngcontent-%COMP%]{display:flex;align-items:baseline}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductOptionsEditorComponent, [{
    type: Component,
    args: [{
      selector: "vdr-product-options-editor",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-header>
    <vdr-page-title></vdr-page-title>
    <vdr-page-header-description>{{ 'catalog.page-description-options-editor' | translate }}</vdr-page-header-description>
</vdr-page-header>
<vdr-page-body>
    <vdr-page-block>
        <vdr-action-bar>
            <vdr-ab-left>
                <vdr-language-selector
                    [availableLanguageCodes]="availableLanguages$ | async"
                    [currentLanguageCode]="languageCode$ | async"
                    (languageCodeChange)="setLanguage($event)"
                ></vdr-language-selector>
            </vdr-ab-left>

            <vdr-ab-right>
                <div class="flex center">
                    <div class="mr-2">
                        <clr-checkbox-wrapper>
                            <input
                                clrCheckbox
                                type="checkbox"
                                id="auto-update"
                                [(ngModel)]="autoUpdateVariantNames"
                            />
                            <label>{{ 'catalog.auto-update-product-variant-name' | translate }}</label>
                        </clr-checkbox-wrapper>
                    </div>
                    <button
                        *vdrIfPermissions="updatePermission"
                        class="btn btn-primary"
                        (click)="save()"
                        [disabled]="detailForm.pristine || detailForm.invalid"
                    >
                        {{ 'common.update' | translate }}
                    </button>
                </div>
            </vdr-ab-right>
        </vdr-action-bar>
    </vdr-page-block>
    <vdr-page-block>
        <form class="form" [formGroup]="detailForm" *ngIf="optionGroups$ | async as optionGroups">
            <div formGroupName="optionGroups">
                <vdr-card
                    *ngFor="let optionGroup of getOptionGroups(); index as i"
                    [formArrayName]="i"
                    [title]="optionGroup.value.code"
                >
                    <vdr-page-entity-info [entity]="optionGroup.value"></vdr-page-entity-info>
                    <div class="form-grid">
                        <vdr-form-field [label]="'common.name' | translate" for="name">
                            <input
                                [id]="'name-' + i"
                                type="text"
                                formControlName="name"
                                [readonly]="!(updatePermission | hasPermission)"
                            />
                        </vdr-form-field>
                        <vdr-form-field [label]="'common.code' | translate" for="code">
                            <input
                                [id]="'code-' + i"
                                type="text"
                                [readonly]="!(updatePermission | hasPermission)"
                                formControlName="code"
                            />
                        </vdr-form-field>
                    </div>
                    <ng-container formGroupName="customFields" *ngIf="optionGroupCustomFields.length">
                        <vdr-tabbed-custom-fields
                            entityName="ProductOptionGroup"
                            [customFields]="optionGroupCustomFields"
                            [customFieldsFormGroup]="optionGroup.get('customFields')"
                            [readonly]="!(updatePermission | hasPermission)"
                        ></vdr-tabbed-custom-fields>
                    </ng-container>

                    <vdr-data-table-2
                        id="edit-options-list"
                        *ngIf="getOptions(optionGroup) as options"
                        [items]="options"
                        [trackByPath]="'value.id'"
                        [itemsPerPage]="paginationSettings[optionGroup.value.id]?.itemsPerPage"
                        [currentPage]="paginationSettings[optionGroup.value.id]?.currentPage"
                        (pageChange)="paginationSettings[optionGroup.value.id].currentPage = $event"
                        (itemsPerPageChange)="paginationSettings[optionGroup.value.id].itemsPerPage = $event"
                        [totalItems]="options.length"
                    >
                        <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
                            <ng-template let-optionControl="item">
                                {{ optionControl.value.id }}
                            </ng-template>
                        </vdr-dt2-column>
                        <vdr-dt2-column [heading]="'common.created-at' | translate" id="created-at" [hiddenByDefault]="true">
                            <ng-template let-optionControl="item">
                                {{ optionControl.value.createdAt | localeDate : 'short' }}
                            </ng-template>
                        </vdr-dt2-column>
                        <vdr-dt2-column [heading]="'common.updated-at' | translate" id="updated-at" [hiddenByDefault]="true">
                            <ng-template let-optionControl="item">
                                {{ optionControl.value.updatedAt | localeDate : 'short' }}
                            </ng-template>
                        </vdr-dt2-column>
                        <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false">
                            <ng-template let-optionControl="item">
                                <input
                                    type="text"
                                    [formControl]="optionControl.get('name')"
                                    [readonly]="!(updatePermission | hasPermission)"
                                />
                            </ng-template>
                        </vdr-dt2-column>
                        <vdr-dt2-column [heading]="'common.code' | translate" id="code" [optional]="false">
                            <ng-template let-optionControl="item">
                                <input type="text" [formControl]="optionControl.get('code')" />
                            </ng-template>
                        </vdr-dt2-column>
                        <vdr-dt2-column
                            [heading]="'common.custom-fields' | translate" id="custom-fields"
                            [hiddenByDefault]="optionCustomFields.length === 0"
                        >
                            <ng-template let-optionControl="item">
                                <vdr-tabbed-custom-fields
                                    entityName="ProductOption"
                                    [customFields]="optionCustomFields"
                                    [compact]="true"
                                    [customFieldsFormGroup]="optionControl.get('customFields')"
                                    [readonly]="!(updatePermission | hasPermission)"
                                ></vdr-tabbed-custom-fields>
                            </ng-template>
                        </vdr-dt2-column>
                    </vdr-data-table-2>
                </vdr-card>
            </div>
        </form>
    </vdr-page-block>
</vdr-page-body>
`,
      styles: [".option-group-header{display:flex;align-items:baseline}\n"]
    }]
  }], () => [{
    type: ActivatedRoute
  }, {
    type: Router
  }, {
    type: ServerConfigService
  }, {
    type: DataService
  }, {
    type: PermissionsService
  }, {
    type: ProductDetailService
  }, {
    type: UntypedFormBuilder
  }, {
    type: ChangeDetectorRef
  }, {
    type: NotificationService
  }], null);
})();
var CreateProductOptionGroupDialogComponent = class _CreateProductOptionGroupDialogComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      code: ["", Validators.required]
    });
  }
  updateCode() {
    const nameControl = this.form.get("name");
    const codeControl = this.form.get("code");
    if (nameControl && codeControl && codeControl.pristine) {
      codeControl.setValue((0, import_normalize_string.normalizeString)(`${nameControl.value}`, "-"));
    }
  }
  confirm() {
    const {
      name,
      code
    } = this.form.value;
    if (!name || !code) {
      return;
    }
    this.resolveWith({
      code,
      options: [],
      translations: [{
        languageCode: this.languageCode,
        name
      }]
    });
  }
  cancel() {
    this.resolveWith();
  }
  static {
    this.ɵfac = function CreateProductOptionGroupDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateProductOptionGroupDialogComponent)(ɵɵdirectiveInject(FormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CreateProductOptionGroupDialogComponent,
      selectors: [["vdr-create-product-option-group-dialog"]],
      standalone: false,
      decls: 9,
      vars: 7,
      consts: [["vdrDialogTitle", ""], [1, "form-grid", 3, "formGroup"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "input"], ["for", "code", 3, "label"], ["id", "code", "type", "text", "formControlName", "code"], ["vdrDialogButtons", ""], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function CreateProductOptionGroupDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CreateProductOptionGroupDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "div", 1)(2, "vdr-form-field", 2);
          ɵɵpipe(3, "translate");
          ɵɵelementStart(4, "input", 3);
          ɵɵlistener("input", function CreateProductOptionGroupDialogComponent_Template_input_input_4_listener() {
            return ctx.updateCode();
          });
          ɵɵelementEnd()();
          ɵɵelementStart(5, "vdr-form-field", 4);
          ɵɵpipe(6, "translate");
          ɵɵelement(7, "input", 5);
          ɵɵelementEnd()();
          ɵɵtemplate(8, CreateProductOptionGroupDialogComponent_ng_template_8_Template, 6, 7, "ng-template", 6);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(3, 3, "common.name"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(6, 5, "common.code"));
        }
      },
      dependencies: [DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateProductOptionGroupDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-create-product-option-group-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    {{ 'catalog.create-product-option-group' | translate }}
</ng-template>
<div class="form-grid" [formGroup]="form">
    <vdr-form-field [label]="'common.name' | translate" for="name">
        <input id="name" type="text" formControlName="name" (input)="updateCode()" />
    </vdr-form-field>
    <vdr-form-field
        [label]="'common.code' | translate"
        for="code"
    >
        <input
            id="code"
            type="text"
            formControlName="code"
        />
    </vdr-form-field>
</div>
<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="confirm()" class="btn btn-primary" [disabled]="form.invalid">
        {{ 'common.confirm' | translate }}
    </button>
</ng-template>
`
    }]
  }], () => [{
    type: FormBuilder
  }], null);
})();
var CreateProductVariantDialogComponent = class _CreateProductVariantDialogComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      sku: [""],
      price: [""],
      options: this.formBuilder.record({})
    });
  }
  ngOnInit() {
    this.currencyCode = this.product.variants[0]?.currencyCode;
    for (const optionGroup of this.product.optionGroups) {
      this.form.get("options").addControl(optionGroup.code, new FormControl("", Validators.required));
    }
    const optionsRecord = this.form.get("options");
    optionsRecord.valueChanges.subscribe((value) => {
      const nameControl = this.form.get("name");
      const allNull = Object.values(value).every((v) => v == null);
      if (!allNull && value && nameControl && !nameControl.dirty) {
        const name = Object.entries(value).map(([groupCode, optionId]) => this.product.optionGroups.find((og) => og.code === groupCode)?.options.find((o) => o.id === optionId)?.name).join(" ");
        nameControl.setValue(`${this.product.name} ${name}`);
      }
      const allSelected = Object.values(value).every((v) => v != null);
      if (allSelected) {
        this.existingVariant = this.product.variants.find((v) => Object.entries(value).every(([groupCode, optionId]) => v.options.find((o) => o.groupId === this.getGroupIdFromCode(groupCode))?.id === optionId));
      }
    });
  }
  confirm() {
    const {
      name,
      sku,
      options,
      price
    } = this.form.value;
    if (!name || !options || price == null) {
      return;
    }
    const optionIds = Object.values(options).filter(import_shared_utils.notNullOrUndefined);
    this.resolveWith({
      productId: this.product.id,
      sku: sku || "",
      price: Number(price),
      optionIds,
      translations: [{
        languageCode: this.product.languageCode,
        name
      }]
    });
  }
  cancel() {
    this.resolveWith();
  }
  getGroupCodeFromId(id) {
    return this.product.optionGroups.find((og) => og.id === id)?.code ?? "";
  }
  getGroupIdFromCode(code) {
    return this.product.optionGroups.find((og) => og.code === code)?.id ?? "";
  }
  static {
    this.ɵfac = function CreateProductVariantDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateProductVariantDialogComponent)(ɵɵdirectiveInject(FormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CreateProductVariantDialogComponent,
      selectors: [["vdr-create-product-variant-dialog"]],
      standalone: false,
      decls: 17,
      vars: 14,
      consts: [["vdrDialogTitle", ""], [3, "formGroup"], ["formGroupName", "options", 1, "form-grid"], [3, "label", 4, "ngFor", "ngForOf"], ["clrAlertType", "warning", "class", "form-grid-span", 3, "clrAlertClosable", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "form-grid", "mt-2"], [3, "label"], ["type", "text", "formControlName", "name"], ["type", "text", "formControlName", "sku"], ["name", "price", "formControlName", "price", 3, "currencyCode"], ["vdrDialogButtons", ""], ["bindLabel", "name", "bindValue", "id", "appendTo", "body", 3, "items", "formControlName"], ["clrAlertType", "warning", 1, "form-grid-span", 3, "clrAlertClosable"], [1, "alert-text"], [1, "mt-2"], ["clrAlertType", "warning", 1, "", 3, "clrAlertClosable"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function CreateProductVariantDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CreateProductVariantDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "form", 1)(2, "div", 2);
          ɵɵtemplate(3, CreateProductVariantDialogComponent_vdr_form_field_3_Template, 2, 3, "vdr-form-field", 3)(4, CreateProductVariantDialogComponent_clr_alert_4_Template, 5, 4, "clr-alert", 4);
          ɵɵelementEnd();
          ɵɵtemplate(5, CreateProductVariantDialogComponent_div_5_Template, 6, 6, "div", 5);
          ɵɵelementStart(6, "div", 6)(7, "vdr-form-field", 7);
          ɵɵpipe(8, "translate");
          ɵɵelement(9, "input", 8);
          ɵɵelementEnd();
          ɵɵelementStart(10, "vdr-form-field", 7);
          ɵɵpipe(11, "translate");
          ɵɵelement(12, "input", 9);
          ɵɵelementEnd();
          ɵɵelementStart(13, "vdr-form-field", 7);
          ɵɵpipe(14, "translate");
          ɵɵelement(15, "vdr-currency-input", 10);
          ɵɵelementEnd()()();
          ɵɵtemplate(16, CreateProductVariantDialogComponent_ng_template_16_Template, 6, 7, "ng-template", 11);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.product.optionGroups);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.product.optionGroups.length === 0);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.existingVariant);
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(8, 8, "common.name"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(11, 10, "catalog.sku"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(14, 12, "catalog.price"));
          ɵɵadvance(2);
          ɵɵproperty("currencyCode", ctx.currencyCode);
        }
      },
      dependencies: [ClrAlert, ClrAlertItem, ClrAlertText, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, NgSelectComponent, CurrencyInputComponent, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateProductVariantDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-create-product-variant-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    {{ 'catalog.create-product-variant' | translate }}
</ng-template>
<form [formGroup]="form">
    <div formGroupName="options" class="form-grid">
        <vdr-form-field [label]="optionGroup.name" *ngFor="let optionGroup of product.optionGroups">
            <ng-select [items]="optionGroup.options" [formControlName]="optionGroup.code" bindLabel="name"
                bindValue="id" appendTo="body">
            </ng-select>
        </vdr-form-field>
        <clr-alert *ngIf="product.optionGroups.length === 0" clrAlertType="warning" [clrAlertClosable]="false"
            class="form-grid-span">
            <clr-alert-item>
                <span class="alert-text">
                    {{ 'catalog.cannot-create-variants-without-options' | translate }}
                </span>
            </clr-alert-item>
        </clr-alert>
    </div>
    <div *ngIf="existingVariant" class="mt-2">
        <clr-alert clrAlertType="warning" [clrAlertClosable]="false" class="">
            <clr-alert-item>
                <span class="alert-text">
                    {{ 'catalog.product-variant-exists' | translate }}: {{ existingVariant.name }} ({{
                    existingVariant.sku
                    }})
                </span>
            </clr-alert-item>
        </clr-alert>
    </div>
    <div class="form-grid mt-2">
        <vdr-form-field [label]="'common.name' | translate">
            <input type="text" formControlName="name" />
        </vdr-form-field>
        <vdr-form-field [label]="'catalog.sku' | translate">
            <input type="text" formControlName="sku" />
        </vdr-form-field>
        <vdr-form-field [label]="'catalog.price' | translate">
            <vdr-currency-input name="price" [currencyCode]="currencyCode" formControlName="price" />
        </vdr-form-field>
    </div>
</form>
<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="confirm()" class="btn btn-primary"
        [disabled]="form.invalid || existingVariant || product.optionGroups.length === 0">
        {{ 'common.confirm' | translate }}
    </button>
</ng-template>`
    }]
  }], () => [{
    type: FormBuilder
  }], null);
})();
var OPTION_VALUE_INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OptionValueInputComponent),
  multi: true
};
var OptionValueInputComponent = class _OptionValueInputComponent {
  get optionValues() {
    return this.formValue ?? this.options ?? [];
  }
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.groupName = "";
    this.add = new EventEmitter();
    this.remove = new EventEmitter();
    this.edit = new EventEmitter();
    this.disabled = false;
    this.input = "";
    this.isFocussed = false;
    this.lastSelected = false;
    this.editingIndex = -1;
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchFn = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.changeDetector.markForCheck();
  }
  writeValue(obj) {
    this.formValue = obj || [];
  }
  focus() {
    this.textArea.nativeElement.focus();
  }
  editName(index, event) {
    const optionValue = this.optionValues[index];
    if (!optionValue.locked && !optionValue.id) {
      event.cancelBubble = true;
      this.editingIndex = index;
      const input = this.nameInputs.get(index)?.nativeElement;
      setTimeout(() => input?.focus());
    }
  }
  updateOption(index, event) {
    const optionValue = this.optionValues[index];
    const newName = event.target.value;
    if (optionValue) {
      if (newName) {
        optionValue.name = newName;
        this.edit.emit({
          index,
          option: optionValue
        });
      }
      this.editingIndex = -1;
    }
  }
  removeOption(option) {
    if (!option.locked) {
      if (this.formValue) {
        this.formValue = this.formValue?.filter((o) => o.name !== option.name);
        this.onChangeFn(this.formValue);
      } else {
        this.remove.emit(option);
      }
    }
  }
  handleKey(event) {
    switch (event.key) {
      case ",":
      case "Enter":
        this.addOptionValue();
        event.preventDefault();
        break;
      case "Backspace":
        if (this.lastSelected) {
          this.removeLastOption();
          this.lastSelected = false;
        } else if (this.input === "") {
          this.lastSelected = true;
        }
        break;
      default:
        this.lastSelected = false;
    }
  }
  handleBlur() {
    this.isFocussed = false;
    this.addOptionValue();
  }
  addOptionValue() {
    const options = this.parseInputIntoOptions(this.input).filter((option) => {
      const existing = this.options ?? this.formValue;
      return !existing?.find((o) => o?.name === option.name);
    });
    if (!this.formValue && this.options) {
      for (const option of options) {
        this.add.emit(option);
      }
    } else {
      this.formValue = (0, import_unique.unique)([...this.formValue, ...options]);
      this.onChangeFn(this.formValue);
    }
    this.input = "";
  }
  parseInputIntoOptions(input) {
    return input.split(/[,\n]/).map((s) => s.trim()).filter((s) => s !== "").map((s) => ({
      name: s,
      locked: false
    }));
  }
  removeLastOption() {
    if (this.optionValues.length) {
      const option = this.optionValues[this.optionValues.length - 1];
      this.removeOption(option);
    }
  }
  static {
    this.ɵfac = function OptionValueInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OptionValueInputComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OptionValueInputComponent,
      selectors: [["vdr-option-value-input"]],
      viewQuery: function OptionValueInputComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
          ɵɵviewQuery(_c1, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textArea = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nameInputs = _t);
        }
      },
      inputs: {
        groupName: "groupName",
        options: "options",
        disabled: "disabled"
      },
      outputs: {
        add: "add",
        remove: "remove",
        edit: "edit"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([OPTION_VALUE_INPUT_VALUE_ACCESSOR])],
      decls: 4,
      vars: 5,
      consts: [["textArea", ""], ["editNameInput", ""], [1, "input-wrapper", 3, "click"], ["class", "chips", 4, "ngIf"], [3, "keyup", "focus", "blur", "ngModelChange", "ngModel", "disabled"], [1, "chips"], [3, "icon", "selected", "locked", "colorFrom", "iconClick", 4, "ngFor", "ngForOf"], [3, "iconClick", "icon", "colorFrom"], [3, "hidden"], ["type", "text", 3, "blur", "click", "ngModel"], [1, "option-name", 3, "click", "hidden"]],
      template: function OptionValueInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 2);
          ɵɵlistener("click", function OptionValueInputComponent_Template_div_click_0_listener() {
            ɵɵrestoreView(_r1);
            const textArea_r2 = ɵɵreference(3);
            return ɵɵresetView(textArea_r2.focus());
          });
          ɵɵtemplate(1, OptionValueInputComponent_div_1_Template, 2, 1, "div", 3);
          ɵɵelementStart(2, "textarea", 4, 0);
          ɵɵlistener("keyup", function OptionValueInputComponent_Template_textarea_keyup_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.handleKey($event));
          })("focus", function OptionValueInputComponent_Template_textarea_focus_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.isFocussed = true);
          })("blur", function OptionValueInputComponent_Template_textarea_blur_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.handleBlur());
          });
          ɵɵtwoWayListener("ngModelChange", function OptionValueInputComponent_Template_textarea_ngModelChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.input, $event) || (ctx.input = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵclassProp("focus", ctx.isFocussed);
          ɵɵadvance();
          ɵɵproperty("ngIf", 0 < ctx.optionValues.length);
          ɵɵadvance();
          ɵɵtwoWayProperty("ngModel", ctx.input);
          ɵɵproperty("disabled", ctx.disabled);
        }
      },
      dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, ChipComponent, FormFieldControlDirective],
      styles: [".input-wrapper[_ngcontent-%COMP%]{background-color:var(--color-form-input-bg);border-radius:3px!important;border:1px solid var(--color-grey-300)!important;cursor:text}.input-wrapper.focus[_ngcontent-%COMP%]{border-color:var(--color-primary-500)!important;box-shadow:0 0 1px 1px var(--color-primary-100)}.input-wrapper[_ngcontent-%COMP%]   .chips[_ngcontent-%COMP%]{padding:5px}.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;width:100%;height:24px;margin-top:3px;padding:0 6px}.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:disabled{background-color:var(--color-component-bg-100)}vdr-chip[_ngcontent-%COMP%]     .wrapper{margin:0 3px}vdr-chip.locked[_ngcontent-%COMP%]{opacity:.8}vdr-chip.selected[_ngcontent-%COMP%]     .wrapper{border-color:var(--color-warning-500)!important;box-shadow:0 0 1px 1px var(--color-warning-400);opacity:.6}vdr-chip[_ngcontent-%COMP%]   .option-name.editable[_ngcontent-%COMP%]:hover{outline:1px solid var(--color-component-bg-300);outline-offset:1px;border-radius:1px}vdr-chip[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:0!important;margin-top:-2px;margin-bottom:-2px}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionValueInputComponent, [{
    type: Component,
    args: [{
      selector: "vdr-option-value-input",
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [OPTION_VALUE_INPUT_VALUE_ACCESSOR],
      standalone: false,
      template: `<div class="input-wrapper" [class.focus]="isFocussed" (click)="textArea.focus()">
    <div class="chips" *ngIf="0 < optionValues.length">
        <vdr-chip
            *ngFor="let option of optionValues; last as isLast; index as i"
            [icon]="option.locked ? 'lock' : 'times'"
            [class.selected]="isLast && lastSelected"
            [class.locked]="option.locked"
            [colorFrom]="groupName"
            (iconClick)="removeOption(option)"
        >
            <span [hidden]="editingIndex !== i">
                <input
                    #editNameInput
                    type="text"
                    [ngModel]="option.name"
                    (blur)="updateOption(i, $event)"
                    (click)="$event.cancelBubble = true"
                />
            </span>
            <span
                class="option-name"
                [class.editable]="!option.locked && !option.id"
                (click)="editName(i, $event)" [hidden]="editingIndex === i">{{ option.name }}</span>
        </vdr-chip>
    </div>
    <textarea
        #textArea
        (keyup)="handleKey($event)"
        (focus)="isFocussed = true"
        (blur)="handleBlur()"
        [(ngModel)]="input"
        [disabled]="disabled"
    ></textarea>
</div>
`,
      styles: [".input-wrapper{background-color:var(--color-form-input-bg);border-radius:3px!important;border:1px solid var(--color-grey-300)!important;cursor:text}.input-wrapper.focus{border-color:var(--color-primary-500)!important;box-shadow:0 0 1px 1px var(--color-primary-100)}.input-wrapper .chips{padding:5px}.input-wrapper textarea{border:none;width:100%;height:24px;margin-top:3px;padding:0 6px}.input-wrapper textarea:focus{outline:none;box-shadow:none}.input-wrapper textarea:disabled{background-color:var(--color-component-bg-100)}vdr-chip ::ng-deep .wrapper{margin:0 3px}vdr-chip.locked{opacity:.8}vdr-chip.selected ::ng-deep .wrapper{border-color:var(--color-warning-500)!important;box-shadow:0 0 1px 1px var(--color-warning-400);opacity:.6}vdr-chip .option-name.editable:hover{outline:1px solid var(--color-component-bg-300);outline-offset:1px;border-radius:1px}vdr-chip input{padding:0!important;margin-top:-2px;margin-bottom:-2px}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    groupName: [{
      type: Input
    }],
    textArea: [{
      type: ViewChild,
      args: ["textArea", {
        static: true
      }]
    }],
    nameInputs: [{
      type: ViewChildren,
      args: ["editNameInput", {
        read: ElementRef
      }]
    }],
    options: [{
      type: Input
    }],
    add: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    edit: [{
      type: Output
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var GeneratedVariant = class {
  constructor(config) {
    for (const key of Object.keys(config)) {
      this[key] = config[key];
    }
  }
};
var ProductVariantsEditorComponent = class _ProductVariantsEditorComponent {
  constructor(route, dataService, productDetailService, notificationService, modalService, changeDetector) {
    this.route = route;
    this.dataService = dataService;
    this.productDetailService = productDetailService;
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.changeDetector = changeDetector;
    this.formValueChanged = false;
    this.optionsChanged = false;
    this.itemsPerPage = 100;
    this.currentPage = 1;
    this.searchTermControl = new FormControl("");
    this.selectionManager = new SelectionManager({
      multiSelect: true,
      itemsAreEqual: (a, b) => a.id === b.id,
      additiveMode: true
    });
    this.optionsToAddToVariant = {};
    this.refresh$ = new Subject();
  }
  ngOnInit() {
    this.languageCode = this.route.snapshot.paramMap.get("lang") || getDefaultUiLanguage();
    this.dataService.settings.getActiveChannel().single$.subscribe((data) => {
      this.currencyCode = data.activeChannel.defaultCurrencyCode;
    });
    const product$ = this.refresh$.pipe(switchMap(() => this.dataService.product.getProductVariantsOptions(this.route.parent?.snapshot.paramMap.get("id")).mapSingle((data) => data.product)), startWith(this.route.snapshot.data.product));
    this.variants$ = product$.pipe(switchMap((product) => this.searchTermControl.valueChanges.pipe(startWith(""), map((term) => term ? product.variants.filter((v) => v.name.toLowerCase().includes(term.toLowerCase())) : product.variants))));
    this.optionGroups$ = product$.pipe(map((product) => product.optionGroups));
    this.totalItems$ = this.variants$.pipe(map((variants) => variants.length));
    product$.subscribe((p) => {
      this.product = p;
      const allUsedOptionIds = p.variants.map((v) => v.options.map((option) => option.id)).flat();
      const allUsedOptionGroupIds = p.variants.map((v) => v.options.map((option) => option.groupId)).flat();
      this.optionGroups = p.optionGroups.map((og) => ({
        id: og.id,
        isNew: false,
        name: og.name,
        locked: allUsedOptionGroupIds.includes(og.id),
        values: og.options.map((o) => ({
          id: o.id,
          name: o.name,
          locked: allUsedOptionIds.includes(o.id)
        }))
      }));
    });
  }
  setItemsPerPage(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
  }
  setPageNumber(page) {
    this.currentPage = page;
  }
  onFormChanged(variantInfo) {
    this.formValueChanged = true;
    variantInfo.enabled = true;
  }
  canDeactivate() {
    return !this.formValueChanged;
  }
  addOptionGroup() {
    this.modalService.fromComponent(CreateProductOptionGroupDialogComponent, {
      locals: {
        languageCode: this.languageCode
      }
    }).pipe(switchMap((result) => {
      if (result) {
        return this.dataService.product.createProductOptionGroups(result).pipe(switchMap(({
          createProductOptionGroup
        }) => this.dataService.product.addOptionGroupToProduct({
          optionGroupId: createProductOptionGroup.id,
          productId: this.product.id
        })));
      } else {
        return EMPTY;
      }
    })).subscribe((result) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "ProductOptionGroup"
      });
      this.refresh$.next();
      this.changeDetector.markForCheck();
    });
  }
  removeOptionGroup(optionGroup) {
    const id = optionGroup.id;
    const usedByVariantsCount = this.product.variants.filter((v) => v.options.map((o) => o.groupId).includes(id)).length;
    this.modalService.dialog({
      title: marker("catalog.confirm-delete-product-option-group"),
      body: usedByVariantsCount ? marker("catalog.confirm-delete-product-option-group-body") : "",
      translationVars: {
        name: optionGroup.name,
        count: usedByVariantsCount
      },
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(switchMap((val) => {
      if (val) {
        return this.dataService.product.removeOptionGroupFromProduct({
          optionGroupId: id,
          productId: this.product.id,
          force: true
        });
      } else {
        return EMPTY;
      }
    })).subscribe(({
      removeOptionGroupFromProduct
    }) => {
      if (removeOptionGroupFromProduct.__typename === "Product") {
        this.notificationService.success(marker("common.notify-delete-success"), {
          entity: "ProductOptionGroup"
        });
        this.refresh$.next();
      } else if (removeOptionGroupFromProduct.__typename === "ProductOptionInUseError") {
        this.notificationService.error(removeOptionGroupFromProduct.message ?? "");
      }
    });
  }
  addOption(index, optionName) {
    const group = this.optionGroups[index];
    if (group && group.id) {
      this.dataService.product.addOptionToGroup({
        productOptionGroupId: group.id,
        code: (0, import_normalize_string.normalizeString)(optionName, "-"),
        translations: [{
          name: optionName,
          languageCode: this.languageCode
        }]
      }).subscribe(({
        createProductOption
      }) => {
        this.notificationService.success(marker("common.notify-create-success"), {
          entity: "ProductOption"
        });
        this.refresh$.next();
      });
    }
  }
  removeOption(index, {
    id,
    name
  }) {
    const optionGroup = this.optionGroups[index];
    if (optionGroup) {
      this.modalService.dialog({
        title: marker("catalog.confirm-delete-product-option"),
        translationVars: {
          name
        },
        buttons: [{
          type: "secondary",
          label: marker("common.cancel")
        }, {
          type: "danger",
          label: marker("common.delete"),
          returnValue: true
        }]
      }).pipe(switchMap((val) => {
        if (val) {
          return this.dataService.product.deleteProductOption(id);
        } else {
          return EMPTY;
        }
      })).subscribe(({
        deleteProductOption
      }) => {
        if (deleteProductOption.result === DeletionResult.DELETED) {
          this.notificationService.success(marker("common.notify-delete-success"), {
            entity: "ProductOption"
          });
          optionGroup.values = optionGroup.values.filter((v) => v.id !== id);
          this.refresh$.next();
        } else {
          this.notificationService.error(deleteProductOption.message ?? "");
        }
      });
    }
  }
  setOptionToAddToVariant(variantId, optionGroupId, optionId) {
    if (!this.optionsToAddToVariant[variantId]) {
      this.optionsToAddToVariant[variantId] = {};
    }
    if (optionId) {
      this.optionsToAddToVariant[variantId][optionGroupId] = optionId;
    } else {
      delete this.optionsToAddToVariant[variantId][optionGroupId];
    }
  }
  addOptionToVariant(variant) {
    const optionIds = [...variant.options.map((o) => o.id), ...Object.values(this.optionsToAddToVariant[variant.id])];
    this.dataService.product.updateProductVariants([{
      id: variant.id,
      optionIds: (0, import_unique.unique)(optionIds)
    }]).subscribe(({
      updateProductVariants
    }) => {
      this.refresh$.next();
    });
  }
  deleteVariant(variant) {
    this.modalService.dialog({
      title: marker("catalog.confirm-delete-product-variant"),
      translationVars: {
        name: variant.name
      },
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(switchMap((response) => response ? this.productDetailService.deleteProductVariant(variant.id, this.product.id) : EMPTY)).subscribe(() => {
      this.notificationService.success(marker("common.notify-delete-success"), {
        entity: "ProductVariant"
      });
      this.refresh$.next();
    }, (err) => {
      this.notificationService.error(marker("common.notify-delete-error"), {
        entity: "ProductVariant"
      });
    });
  }
  createNewVariant() {
    this.modalService.fromComponent(CreateProductVariantDialogComponent, {
      locals: {
        product: this.product
      }
    }).pipe(switchMap((result) => {
      if (result) {
        return this.dataService.product.createProductVariants([result]);
      } else {
        return EMPTY;
      }
    })).subscribe((result) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "ProductVariant"
      });
      this.refresh$.next();
    });
  }
  getOption(variant, groupId) {
    return variant.options.find((o) => o.groupId === groupId);
  }
  static {
    this.ɵfac = function ProductVariantsEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsEditorComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ProductDetailService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantsEditorComponent,
      selectors: [["vdr-product-variants-editor"]],
      standalone: false,
      decls: 44,
      vars: 55,
      consts: [["optionValueInputComponent", ""], ["selectOption", ""], ["class", "option-groups", 4, "ngFor", "ngForOf"], [1, "button", "mt-1", 3, "click"], ["shape", "plus"], [3, "paddingX"], [1, "mx-3"], [1, "button", 3, "click"], ["id", "manage-product-variant-list", 3, "pageChange", "itemsPerPageChange", "items", "itemsPerPage", "totalItems", "currentPage"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "updated-at", 3, "heading", "hiddenByDefault"], ["id", "name", 3, "heading", "optional"], ["id", "sku", 3, "heading", "optional"], [3, "heading", "id", 4, "ngFor", "ngForOf"], ["id", "price", 3, "heading", "hiddenByDefault"], ["id", "price-with-tax", 3, "heading", "hiddenByDefault"], ["id", "delete", 3, "heading", "optional"], [1, "option-groups"], [3, "label"], ["clrInput", "", "name", "name", 3, "ngModelChange", "ngModel", "readonly"], [1, "flex-spacer", 3, "label"], [3, "add", "remove", "options", "groupName", "disabled"], [1, "button-small", "mt-4", 3, "click"], ["shape", "trash"], [3, "heading", "id"], [3, "colorFrom", 4, "ngIf", "ngIfElse"], [3, "colorFrom"], [1, "flex", "center"], ["bindLabel", "name", "bindValue", "id", "appendTo", "body", 3, "change", "items"], [1, "button-small", "ml-1", 3, "click", "disabled"], ["shape", "floppy"], [1, "button-small", 3, "click"], ["shape", "trash is-danger"]],
      template: function ProductVariantsEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-card");
          ɵɵtemplate(2, ProductVariantsEditorComponent_div_2_Template, 11, 11, "div", 2);
          ɵɵelementStart(3, "button", 3);
          ɵɵlistener("click", function ProductVariantsEditorComponent_Template_button_click_3_listener() {
            return ctx.addOptionGroup();
          });
          ɵɵelement(4, "clr-icon", 4);
          ɵɵtext(5);
          ɵɵpipe(6, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(7, "vdr-card", 5)(8, "div", 6)(9, "button", 7);
          ɵɵlistener("click", function ProductVariantsEditorComponent_Template_button_click_9_listener() {
            return ctx.createNewVariant();
          });
          ɵɵelement(10, "clr-icon", 4);
          ɵɵtext(11);
          ɵɵpipe(12, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(13, "vdr-data-table-2", 8);
          ɵɵpipe(14, "async");
          ɵɵpipe(15, "async");
          ɵɵlistener("pageChange", function ProductVariantsEditorComponent_Template_vdr_data_table_2_pageChange_13_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function ProductVariantsEditorComponent_Template_vdr_data_table_2_itemsPerPageChange_13_listener($event) {
            return ctx.setItemsPerPage($event);
          });
          ɵɵelement(16, "vdr-dt2-search", 9);
          ɵɵpipe(17, "translate");
          ɵɵelementStart(18, "vdr-dt2-column", 10);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, ProductVariantsEditorComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 11);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, ProductVariantsEditorComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 12);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, ProductVariantsEditorComponent_ng_template_26_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 13);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, ProductVariantsEditorComponent_ng_template_29_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 14);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, ProductVariantsEditorComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(33, ProductVariantsEditorComponent_vdr_dt2_column_33_Template, 2, 2, "vdr-dt2-column", 15);
          ɵɵpipe(34, "async");
          ɵɵelementStart(35, "vdr-dt2-column", 16);
          ɵɵpipe(36, "translate");
          ɵɵtemplate(37, ProductVariantsEditorComponent_ng_template_37_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(38, "vdr-dt2-column", 17);
          ɵɵpipe(39, "translate");
          ɵɵtemplate(40, ProductVariantsEditorComponent_ng_template_40_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(41, "vdr-dt2-column", 18);
          ɵɵpipe(42, "translate");
          ɵɵtemplate(43, ProductVariantsEditorComponent_ng_template_43_Template, 2, 0, "ng-template");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.optionGroups);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 27, "catalog.create-product-option-group"), " ");
          ɵɵadvance(2);
          ɵɵproperty("paddingX", false);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 29, "catalog.create-product-variant"), " ");
          ɵɵadvance(2);
          ɵɵproperty("items", ɵɵpipeBind1(14, 31, ctx.variants$))("itemsPerPage", ctx.itemsPerPage)("totalItems", ɵɵpipeBind1(15, 33, ctx.totalItems$))("currentPage", ctx.currentPage);
          ɵɵadvance(3);
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(17, 35, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 37, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 39, "common.created-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 41, "common.updated-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 43, "catalog.name"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 45, "catalog.sku"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(34, 47, ctx.optionGroups$));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(36, 49, "common.price"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(39, 51, "common.price-with-tax"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(42, 53, "common.delete"))("optional", false);
        }
      },
      dependencies: [ClrIconCustomTag, ClrInput, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectComponent, ChipComponent, FormFieldComponent, FormFieldControlDirective, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, PageBlockComponent, CardComponent, OptionValueInputComponent, AsyncPipe, TranslatePipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: [".option-groups[_ngcontent-%COMP%]{display:flex;width:100%;gap:var(--space-unit)}.values[_ngcontent-%COMP%]{flex:1;margin:0 6px}.variants-preview[_ngcontent-%COMP%]   tr.disabled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:var(--color-component-bg-100);color:var(--color-grey-400)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsEditorComponent, [{
    type: Component,
    args: [{
      selector: "vdr-product-variants-editor",
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-card>
        <div *ngFor="let group of optionGroups; index as i" class="option-groups">
            <vdr-form-field [label]="'catalog.option' | translate">
                <input clrInput [(ngModel)]="group.name" name="name" [readonly]="!group.isNew" />
            </vdr-form-field>
            <vdr-form-field [label]="'catalog.option-values' | translate" class="flex-spacer">
                <vdr-option-value-input
                    #optionValueInputComponent
                    [options]="group.values"
                    [groupName]="group.name"
                    [disabled]="group.name === ''"
                    (add)="addOption(i, $event.name)"
                    (remove)="removeOption(i, $event)"
                ></vdr-option-value-input>
            </vdr-form-field>
            <div>
                <button class="button-small mt-4" (click)="removeOptionGroup(group)">
                    <clr-icon shape="trash"></clr-icon>
                </button>
            </div>
        </div>
        <button class="button mt-1" (click)="addOptionGroup()">
            <clr-icon shape="plus"></clr-icon>
            {{ 'catalog.create-product-option-group' | translate }}
        </button>
    </vdr-card>
    <vdr-card [paddingX]="false">
        <div class="mx-3">
            <button class="button" (click)="createNewVariant()">
                <clr-icon shape="plus"></clr-icon>
                {{ 'catalog.create-product-variant' | translate }}
            </button>
        </div>
        <vdr-data-table-2
            id="manage-product-variant-list"
            [items]="variants$ | async"
            [itemsPerPage]="itemsPerPage"
            [totalItems]="totalItems$ | async"
            [currentPage]="currentPage"
            (pageChange)="setPageNumber($event)"
            (itemsPerPageChange)="setItemsPerPage($event)"
        >
            <vdr-dt2-search
                [searchTermControl]="searchTermControl"
                [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
            />
            <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
                <ng-template let-variant="item">
                    {{ variant.id }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.created-at' | translate" id="created-at" [hiddenByDefault]="true">
                <ng-template let-variant="item">
                    {{ variant.createdAt | localeDate : 'short' }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.updated-at' | translate" id="updated-at" [hiddenByDefault]="true">
                <ng-template let-variant="item">
                    {{ variant.updatedAt | localeDate : 'short' }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'catalog.name' | translate" id="name" [optional]="false">
                <ng-template let-variant="item">
                    {{ variant.name }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'catalog.sku' | translate" id="sku" [optional]="false">
                <ng-template let-variant="item">
                    {{ variant.sku }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column *ngFor="let optionGroup of optionGroups$ | async" [heading]="optionGroup.name" [id]="optionGroup.code">
                <ng-template let-variant="item">
                    <vdr-chip
                        *ngIf="getOption(variant, optionGroup.id) as option; else selectOption"
                        [colorFrom]="optionGroup.code"
                        >{{ option.name }}</vdr-chip
                    >
                    <ng-template #selectOption>
                        <div class="flex center">
                            <ng-select
                                [items]="optionGroup.options"
                                bindLabel="name"
                                bindValue="id"
                                appendTo="body"
                                (change)="setOptionToAddToVariant(variant.id, optionGroup.id, $event?.id)"
                            ></ng-select>
                            <button
                                class="button-small ml-1"
                                [class.primary]="!!optionsToAddToVariant[variant.id]?.[optionGroup.id]"
                                (click)="addOptionToVariant(variant)"
                                [disabled]="!optionsToAddToVariant[variant.id]?.[optionGroup.id]"
                            >
                                <clr-icon shape="floppy"></clr-icon>
                            </button>
                        </div>
                    </ng-template>
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.price' | translate" id="price" [hiddenByDefault]="true">
                <ng-template let-variant="item">
                    {{ variant.price | localeCurrency : variant.currencyCode }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.price-with-tax' | translate" id="price-with-tax" [hiddenByDefault]="true">
                <ng-template let-variant="item">
                    {{ variant.priceWithTax | localeCurrency : variant.currencyCode }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.delete' | translate" id="delete" [optional]="false">
                <ng-template let-variant="item">
                    <button class="button-small" (click)="deleteVariant(variant)">
                        <clr-icon shape="trash is-danger"></clr-icon>
                    </button>
                </ng-template>
            </vdr-dt2-column>
        </vdr-data-table-2>
    </vdr-card>
</vdr-page-block>
`,
      styles: [".option-groups{display:flex;width:100%;gap:var(--space-unit)}.values{flex:1;margin:0 6px}.variants-preview tr.disabled td{background-color:var(--color-component-bg-100);color:var(--color-grey-400)}\n"]
    }]
  }], () => [{
    type: ActivatedRoute
  }, {
    type: DataService
  }, {
    type: ProductDetailService
  }, {
    type: NotificationService
  }, {
    type: ModalService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var ProductVariantsResolver = class _ProductVariantsResolver extends BaseEntityResolver {
  constructor(router, dataService) {
    super(router, {
      __typename: "Product",
      id: "",
      createdAt: "",
      updatedAt: "",
      name: "",
      languageCode: "",
      optionGroups: [],
      variants: []
    }, (id) => dataService.product.getProductVariantsOptions(id).mapStream((data) => data.product));
  }
  static {
    this.ɵfac = function ProductVariantsResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsResolver)(ɵɵinject(Router), ɵɵinject(DataService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductVariantsResolver,
      factory: _ProductVariantsResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsResolver, [{
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
  path: "products",
  component: PageComponent,
  data: {
    locationId: "product-list",
    breadcrumb: marker("breadcrumb.products")
  },
  children: pageService.getPageTabRoutes("product-list")
}, {
  path: "inventory",
  redirectTo: "products"
}, {
  path: "products/:id",
  component: PageComponent,
  data: {
    locationId: "product-detail",
    breadcrumb: {
      label: marker("breadcrumb.products"),
      link: ["../", "products"]
    }
  },
  children: [{
    path: "manage-variants",
    component: ProductVariantsEditorComponent,
    canDeactivate: [CanDeactivateDetailGuard],
    data: {
      breadcrumb: ({
        product
      }) => [{
        label: `${product.name}`,
        link: ["../"]
      }, {
        label: marker("breadcrumb.manage-variants"),
        link: ["manage-variants"]
      }]
    },
    resolve: {
      product: (route) => inject(DataService).product.getProductVariantsOptions(route.parent?.params.id).mapSingle((data) => data.product)
    }
  }, ...pageService.getPageTabRoutes("product-detail")]
}, {
  path: "products/:productId/variants/:id",
  component: PageComponent,
  data: {
    locationId: "product-variant-detail",
    breadcrumb: {
      label: marker("breadcrumb.products"),
      link: ["../", "products"]
    }
  },
  children: pageService.getPageTabRoutes("product-variant-detail")
}, {
  path: "products/:id/options",
  component: ProductOptionsEditorComponent,
  resolve: createResolveData(ProductVariantsResolver),
  canDeactivate: [CanDeactivateDetailGuard],
  data: {
    breadcrumb: productOptionsEditorBreadcrumb
  }
}, {
  path: "facets",
  component: PageComponent,
  data: {
    locationId: "facet-list",
    breadcrumb: marker("breadcrumb.facets")
  },
  children: pageService.getPageTabRoutes("facet-list")
}, {
  path: "facets/:id",
  component: PageComponent,
  data: {
    locationId: "facet-detail",
    breadcrumb: {
      label: marker("breadcrumb.facets"),
      link: ["../", "facets"]
    }
  },
  children: pageService.getPageTabRoutes("facet-detail")
}, {
  path: "collections",
  component: PageComponent,
  data: {
    locationId: "collection-list",
    breadcrumb: marker("breadcrumb.collections")
  },
  children: pageService.getPageTabRoutes("collection-list")
}, {
  path: "collections/:id",
  component: PageComponent,
  data: {
    locationId: "collection-detail",
    breadcrumb: {
      label: marker("breadcrumb.collections"),
      link: ["../", "collections"]
    }
  },
  children: pageService.getPageTabRoutes("collection-detail")
}, {
  path: "assets",
  component: PageComponent,
  data: {
    locationId: "asset-list",
    breadcrumb: marker("breadcrumb.assets")
  },
  children: pageService.getPageTabRoutes("asset-list")
}, {
  path: "assets/:id",
  component: PageComponent,
  data: {
    locationId: "asset-detail",
    breadcrumb: {
      label: marker("breadcrumb.assets"),
      link: ["../", "assets"]
    }
  },
  children: pageService.getPageTabRoutes("asset-detail")
}];
function productOptionsEditorBreadcrumb(data, params) {
  return data.entity.pipe(map((entity) => [{
    label: marker("breadcrumb.products"),
    link: ["../", "products"]
  }, {
    label: `${entity.name}`,
    link: ["../", "products", params.id]
  }, {
    label: marker("breadcrumb.product-options"),
    link: ["options"]
  }]));
}
var ApplyFacetDialogComponent = class _ApplyFacetDialogComponent {
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.selectedValues = [];
  }
  ngAfterViewInit() {
    setTimeout(() => this.selector.focus(), 0);
  }
  selectValues() {
    this.resolveWith(this.selectedValues);
  }
  cancel() {
    this.resolveWith();
  }
  static {
    this.ɵfac = function ApplyFacetDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApplyFacetDialogComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ApplyFacetDialogComponent,
      selectors: [["vdr-apply-facet-dialog"]],
      viewQuery: function ApplyFacetDialogComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(FacetValueSelectorComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selector = _t.first);
        }
      },
      standalone: false,
      decls: 3,
      vars: 0,
      consts: [["vdrDialogTitle", ""], [3, "selectedValuesChange"], ["vdrDialogButtons", ""], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function ApplyFacetDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ApplyFacetDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "vdr-facet-value-selector", 1);
          ɵɵlistener("selectedValuesChange", function ApplyFacetDialogComponent_Template_vdr_facet_value_selector_selectedValuesChange_1_listener($event) {
            return ctx.selectedValues = $event;
          });
          ɵɵelementEnd();
          ɵɵtemplate(2, ApplyFacetDialogComponent_ng_template_2_Template, 6, 7, "ng-template", 2);
        }
      },
      dependencies: [FacetValueSelectorComponent, DialogButtonsDirective, DialogTitleDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyFacetDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-apply-facet-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'catalog.add-facets' | translate }}</ng-template>

<vdr-facet-value-selector
    (selectedValuesChange)="selectedValues = $event"
></vdr-facet-value-selector>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button
        type="submit"
        (click)="selectValues()"
        [disabled]="selectedValues.length === 0"
        class="btn btn-primary"
    >
        {{ 'catalog.add-facets' | translate }}
    </button>
</ng-template>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    selector: [{
      type: ViewChild,
      args: [FacetValueSelectorComponent]
    }]
  });
})();
var ASSET_DETAIL_QUERY = gql`
    query AssetDetailQuery($id: ID!) {
        asset(id: $id) {
            ...Asset
            tags {
                ...Tag
            }
        }
    }
    ${ASSET_FRAGMENT}
    ${TAG_FRAGMENT}
`;
var AssetDetailComponent = class _AssetDetailComponent extends TypedBaseDetailComponent {
  constructor(notificationService, dataService, formBuilder) {
    super();
    this.notificationService = notificationService;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.customFields = this.getCustomFieldConfig("Asset");
    this.detailForm = new FormGroup({
      name: new FormControl(""),
      tags: new FormControl([]),
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
  }
  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    this.destroy();
  }
  onAssetChange(event) {
    this.detailForm.get("name")?.setValue(event.name);
    this.detailForm.get("tags")?.setValue(event.tags);
    this.detailForm.markAsDirty();
  }
  save() {
    this.dataService.product.updateAsset({
      id: this.id,
      name: this.detailForm.value.name,
      tags: this.detailForm.value.tags,
      customFields: this.detailForm.value.customFields
    }).subscribe(() => {
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Asset"
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Asset"
      });
    });
  }
  setFormValues(entity, languageCode) {
    this.detailForm.get("name")?.setValue(entity.name);
    this.detailForm.get("tags")?.setValue(entity.tags.map((t) => t.id));
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), entity);
    }
  }
  static {
    this.ɵfac = function AssetDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetDetailComponent)(ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AssetDetailComponent,
      selectors: [["vdr-asset-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 10,
      vars: 8,
      consts: [["locationId", "asset-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "assetChange", "asset", "editable", "customFields", "customFieldsForm"], [1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function AssetDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar");
          ɵɵelement(2, "vdr-ab-left");
          ɵɵelementStart(3, "vdr-ab-right");
          ɵɵelement(4, "vdr-action-bar-items", 0);
          ɵɵtemplate(5, AssetDetailComponent_button_5_Template, 3, 4, "button", 1);
          ɵɵelement(6, "vdr-action-bar-dropdown-menu", 0);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-page-block")(8, "vdr-asset-preview", 2);
          ɵɵpipe(9, "async");
          ɵɵlistener("assetChange", function AssetDetailComponent_Template_vdr_asset_preview_assetChange_8_listener($event) {
            return ctx.onAssetChange($event);
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(7, _c2));
          ɵɵadvance(3);
          ɵɵproperty("asset", ɵɵpipeBind1(9, 5, ctx.entity$))("editable", true)("customFields", ctx.customFields)("customFieldsForm", ctx.detailForm.get("customFields"));
        }
      },
      dependencies: [ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, AssetPreviewComponent, IfPermissionsDirective, ActionBarItemsComponent, PageBlockComponent, AsyncPipe, TranslatePipe],
      styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-asset-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left></vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="asset-detail" />
            <button
                *vdrIfPermissions="['UpdateCatalog', 'UpdateAsset']"
                class="btn btn-primary"
                (click)="save()"
                [disabled]="detailForm.invalid || detailForm.pristine"
            >
                {{ 'common.update' | translate }}
            </button>
            <vdr-action-bar-dropdown-menu locationId="asset-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<vdr-page-block>
    <vdr-asset-preview
        [asset]="entity$ | async"
        [editable]="true"
        [customFields]="customFields"
        [customFieldsForm]="detailForm.get('customFields')"
        (assetChange)="onAssetChange($event)"
    />
</vdr-page-block>
`,
      styles: [":host{display:flex;flex-direction:column;height:100%}\n"]
    }]
  }], () => [{
    type: NotificationService
  }, {
    type: DataService
  }, {
    type: UntypedFormBuilder
  }], null);
})();
var AssetListComponent = class _AssetListComponent extends BaseListComponent {
  constructor(notificationService, modalService, dataService, router, route) {
    super(router, route);
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.dataService = dataService;
    this.searchTerm$ = new BehaviorSubject(void 0);
    this.filterByTags$ = new BehaviorSubject(void 0);
    this.uploading = false;
    super.setQueryFn((...args) => this.dataService.product.getAssetList(...args).refetchOnChannelChange(), (data) => data.assets, (skip2, take2) => {
      const searchTerm = this.searchTerm$.value;
      const tags = this.filterByTags$.value?.map((t) => t.value);
      return {
        options: __spreadProps(__spreadValues({
          skip: skip2,
          take: take2
        }, searchTerm ? {
          filter: {
            name: {
              contains: searchTerm
            }
          }
        } : {}), {
          sort: {
            createdAt: SortOrder.DESC
          },
          tags,
          tagsOperator: LogicalOperator.AND
        })
      };
    }, {
      take: 25,
      skip: 0
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.paginationConfig$ = combineLatest(this.itemsPerPage$, this.currentPage$, this.totalItems$).pipe(map(([itemsPerPage, currentPage, totalItems]) => ({
      itemsPerPage,
      currentPage,
      totalItems
    })));
    this.searchTerm$.pipe(debounceTime(250), takeUntil(this.destroy$)).subscribe(() => this.refresh());
    this.filterByTags$.pipe(takeUntil(this.destroy$)).subscribe(() => this.refresh());
    this.allTags$ = this.dataService.product.getTagList().mapStream((data) => data.tags.items);
  }
  filesSelected(files) {
    if (files.length) {
      this.uploading = true;
      this.dataService.product.createAssets(files).pipe(finalize(() => this.uploading = false)).subscribe(({
        createAssets
      }) => {
        let successCount = 0;
        for (const result of createAssets) {
          switch (result.__typename) {
            case "Asset":
              successCount++;
              break;
            case "MimeTypeError":
              this.notificationService.error(result.message);
              break;
          }
        }
        if (0 < successCount) {
          super.refresh();
          this.notificationService.success(marker("asset.notify-create-assets-success"), {
            count: successCount
          });
        }
      });
    }
  }
  deleteAssets(assets) {
    this.showModalAndDelete(assets.map((a) => a.id)).pipe(switchMap((response) => {
      if (response.result === DeletionResult.DELETED) {
        return [true];
      } else {
        return this.showModalAndDelete(assets.map((a) => a.id), response.message || "").pipe(map((r) => r.result === DeletionResult.DELETED));
      }
    })).subscribe(() => {
      this.notificationService.success(marker("common.notify-delete-success"), {
        entity: "Assets"
      });
      this.refresh();
    }, (err) => {
      this.notificationService.error(marker("common.notify-delete-error"), {
        entity: "Assets"
      });
    });
  }
  showModalAndDelete(assetIds, message) {
    return this.modalService.dialog({
      title: marker("catalog.confirm-delete-assets"),
      translationVars: {
        count: assetIds.length
      },
      body: message,
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(switchMap((res) => res ? this.dataService.product.deleteAssets(assetIds, !!message) : EMPTY), map((res) => res.deleteAssets));
  }
  static {
    this.ɵfac = function AssetListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetListComponent)(ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AssetListComponent,
      selectors: [["vdr-asset-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 17,
      vars: 30,
      consts: [[1, "my-2"], [3, "searchTermChange", "tagsChange", "tags"], ["dropZoneTarget", ".content-area", 3, "selectFiles", "uploading"], [3, "deleteAssets", "assets", "multiSelect", "canDelete"], [1, "paging-controls"], [3, "itemsPerPageChange", "itemsPerPage"], [3, "pageChange", "currentPage", "itemsPerPage", "totalItems"]],
      template: function AssetListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "div", 0)(2, "vdr-asset-search-input", 1);
          ɵɵpipe(3, "async");
          ɵɵlistener("searchTermChange", function AssetListComponent_Template_vdr_asset_search_input_searchTermChange_2_listener($event) {
            return ctx.searchTerm$.next($event);
          })("tagsChange", function AssetListComponent_Template_vdr_asset_search_input_tagsChange_2_listener($event) {
            return ctx.filterByTags$.next($event);
          });
          ɵɵelementStart(4, "vdr-asset-file-input", 2);
          ɵɵlistener("selectFiles", function AssetListComponent_Template_vdr_asset_file_input_selectFiles_4_listener($event) {
            return ctx.filesSelected($event);
          });
          ɵɵelementEnd()()();
          ɵɵelementStart(5, "vdr-asset-gallery", 3);
          ɵɵpipe(6, "async");
          ɵɵpipe(7, "async");
          ɵɵpipe(8, "paginate");
          ɵɵpipe(9, "hasPermission");
          ɵɵlistener("deleteAssets", function AssetListComponent_Template_vdr_asset_gallery_deleteAssets_5_listener($event) {
            return ctx.deleteAssets($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(10, "div", 4)(11, "vdr-items-per-page-controls", 5);
          ɵɵpipe(12, "async");
          ɵɵlistener("itemsPerPageChange", function AssetListComponent_Template_vdr_items_per_page_controls_itemsPerPageChange_11_listener($event) {
            return ctx.setItemsPerPage($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(13, "vdr-pagination-controls", 6);
          ɵɵpipe(14, "async");
          ɵɵpipe(15, "async");
          ɵɵpipe(16, "async");
          ɵɵlistener("pageChange", function AssetListComponent_Template_vdr_pagination_controls_pageChange_13_listener($event) {
            return ctx.setPageNumber($event);
          });
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("tags", ɵɵpipeBind1(3, 9, ctx.allTags$));
          ɵɵadvance(2);
          ɵɵproperty("uploading", ctx.uploading);
          ɵɵadvance();
          ɵɵproperty("assets", ɵɵpipeBind2(8, 15, ɵɵpipeBind1(6, 11, ctx.items$), ɵɵpipeBind1(7, 13, ctx.paginationConfig$) || ɵɵpureFunction0(28, _c3)))("multiSelect", true)("canDelete", ɵɵpipeBind1(9, 18, ɵɵpureFunction0(29, _c4)));
          ɵɵadvance(6);
          ɵɵproperty("itemsPerPage", ɵɵpipeBind1(12, 20, ctx.itemsPerPage$));
          ɵɵadvance(2);
          ɵɵproperty("currentPage", ɵɵpipeBind1(14, 22, ctx.currentPage$))("itemsPerPage", ɵɵpipeBind1(15, 24, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(16, 26, ctx.totalItems$));
        }
      },
      dependencies: [AssetSearchInputComponent, ItemsPerPageControlsComponent, PaginationControlsComponent, AssetFileInputComponent, AssetGalleryComponent, PageBlockComponent, AsyncPipe, PaginatePipe, HasPermissionPipe],
      styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}vdr-asset-gallery[_ngcontent-%COMP%]{flex:1}.paging-controls[_ngcontent-%COMP%]{padding-top:6px;border-top:1px solid var(--color-component-border-100);display:flex;justify-content:space-between}.search-input[_ngcontent-%COMP%]{margin-top:6px;min-width:300px}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-asset-list",
      standalone: false,
      template: `<vdr-page-block>
    <div class="my-2">
        <vdr-asset-search-input
            [tags]="allTags$ | async"
            (searchTermChange)="searchTerm$.next($event)"
            (tagsChange)="filterByTags$.next($event)"
        >
            <vdr-asset-file-input
                (selectFiles)="filesSelected($event)"
                [uploading]="uploading"
                dropZoneTarget=".content-area"
            ></vdr-asset-file-input>
        </vdr-asset-search-input>
    </div>
    <vdr-asset-gallery
        [assets]="(items$ | async)! | paginate : (paginationConfig$ | async) || {}"
        [multiSelect]="true"
        [canDelete]="['DeleteCatalog', 'DeleteAsset'] | hasPermission"
        (deleteAssets)="deleteAssets($event)"
    ></vdr-asset-gallery>

    <div class="paging-controls">
        <vdr-items-per-page-controls
            [itemsPerPage]="itemsPerPage$ | async"
            (itemsPerPageChange)="setItemsPerPage($event)"
        ></vdr-items-per-page-controls>

        <vdr-pagination-controls
            [currentPage]="currentPage$ | async"
            [itemsPerPage]="itemsPerPage$ | async"
            [totalItems]="totalItems$ | async"
            (pageChange)="setPageNumber($event)"
        ></vdr-pagination-controls>
    </div>
</vdr-page-block>
`,
      styles: [":host{display:flex;flex-direction:column;height:100%}vdr-asset-gallery{flex:1}.paging-controls{padding-top:6px;border-top:1px solid var(--color-component-border-100);display:flex;justify-content:space-between}.search-input{margin-top:6px;min-width:300px}\n"]
    }]
  }], () => [{
    type: NotificationService
  }, {
    type: ModalService
  }, {
    type: DataService
  }, {
    type: Router
  }, {
    type: ActivatedRoute
  }], null);
})();
var AssignProductsToChannelDialogComponent = class _AssignProductsToChannelDialogComponent {
  get isProductVariantMode() {
    return this.productVariantIds != null;
  }
  constructor(dataService, notificationService) {
    this.dataService = dataService;
    this.notificationService = notificationService;
    this.priceFactorControl = new UntypedFormControl(1);
    this.selectedChannelIdControl = new UntypedFormControl();
  }
  ngOnInit() {
    const activeChannelId$ = this.dataService.client.userStatus().mapSingle(({
      userStatus
    }) => userStatus.activeChannelId);
    const allChannels$ = this.dataService.settings.getChannels().mapSingle((data) => data.channels);
    combineLatest(activeChannelId$, allChannels$).subscribe(([activeChannelId, channels]) => {
      this.currentChannel = channels.items.find((c) => c.id === activeChannelId);
      this.availableChannels = channels.items;
    });
    this.selectedChannelIdControl.valueChanges.subscribe((ids) => {
      this.selectChannel(ids);
    });
    this.variantsPreview$ = combineLatest(from(this.getTopVariants(10)), this.priceFactorControl.valueChanges.pipe(startWith(1))).pipe(map(([variants, factor]) => variants.map((v) => ({
      id: v.id,
      name: v.name,
      price: v.price,
      pricePreview: v.price * +factor
    }))));
  }
  selectChannel(channelIds) {
    this.selectedChannel = this.availableChannels.find((c) => c.id === channelIds[0]);
  }
  assign() {
    const selectedChannel = this.selectedChannel;
    if (selectedChannel) {
      if (!this.isProductVariantMode) {
        this.dataService.product.assignProductsToChannel({
          channelId: selectedChannel.id,
          productIds: this.productIds,
          priceFactor: +this.priceFactorControl.value
        }).subscribe(() => {
          this.notificationService.success(marker("catalog.assign-product-to-channel-success"), {
            channel: selectedChannel.code,
            count: this.productIds.length
          });
          this.resolveWith(true);
        });
      } else if (this.productVariantIds) {
        this.dataService.product.assignVariantsToChannel({
          channelId: selectedChannel.id,
          productVariantIds: this.productVariantIds,
          priceFactor: +this.priceFactorControl.value
        }).subscribe(() => {
          this.notificationService.success(marker("catalog.assign-variant-to-channel-success"), {
            channel: selectedChannel.code,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            count: this.productVariantIds.length
          });
          this.resolveWith(true);
        });
      }
    }
  }
  cancel() {
    this.resolveWith();
  }
  getTopVariants(take2) {
    return __async(this, null, function* () {
      return (yield lastValueFrom(this.dataService.product.getProductVariants({
        filterOperator: LogicalOperator.OR,
        filter: {
          productId: {
            in: this.productIds
          },
          id: {
            in: this.productVariantIds
          }
        },
        take: take2
      }).single$)).productVariants.items;
    });
  }
  static {
    this.ɵfac = function AssignProductsToChannelDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssignProductsToChannelDialogComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AssignProductsToChannelDialogComponent,
      selectors: [["vdr-assign-products-to-channel-dialog"]],
      standalone: false,
      decls: 36,
      vars: 32,
      consts: [["noSelection", ""], ["productModeTitle", ""], ["noChannelSelected", ""], ["vdrDialogTitle", ""], [1, "flex"], ["clrInput", "", 3, "multiple", "includeDefaultChannel", "disableChannelIds", "formControl"], [1, "flex-spacer"], ["clrInput", "", "type", "number", "min", "0", "max", "99999", 3, "formControl"], [1, "channel-price-preview"], [1, "clr-control-label"], [1, "table"], [3, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["vdrDialogButtons", ""], [4, "ngIf", "ngIfElse"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function AssignProductsToChannelDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AssignProductsToChannelDialogComponent_ng_template_0_Template, 3, 2, "ng-template", 3);
          ɵɵelementStart(1, "div", 4)(2, "clr-input-container")(3, "label");
          ɵɵtext(4);
          ɵɵpipe(5, "translate");
          ɵɵelementEnd();
          ɵɵelement(6, "vdr-channel-assignment-control", 5);
          ɵɵelementEnd();
          ɵɵelement(7, "div", 6);
          ɵɵelementStart(8, "clr-input-container")(9, "label");
          ɵɵtext(10);
          ɵɵpipe(11, "translate");
          ɵɵelementEnd();
          ɵɵelement(12, "input", 7);
          ɵɵelementEnd()();
          ɵɵelementStart(13, "div", 8)(14, "label", 9);
          ɵɵtext(15);
          ɵɵpipe(16, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(17, "table", 10)(18, "thead")(19, "tr")(20, "th");
          ɵɵtext(21);
          ɵɵpipe(22, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(23, "th");
          ɵɵtext(24);
          ɵɵpipe(25, "channelCodeToLabel");
          ɵɵpipe(26, "translate");
          ɵɵpipe(27, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(28, "th");
          ɵɵtemplate(29, AssignProductsToChannelDialogComponent_ng_template_29_Template, 2, 6, "ng-template", 11)(30, AssignProductsToChannelDialogComponent_ng_template_30_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd()()();
          ɵɵelementStart(32, "tbody");
          ɵɵtemplate(33, AssignProductsToChannelDialogComponent_tr_33_Template, 10, 7, "tr", 12);
          ɵɵpipe(34, "async");
          ɵɵelementEnd()()();
          ɵɵtemplate(35, AssignProductsToChannelDialogComponent_ng_template_35_Template, 7, 6, "ng-template", 13);
        }
        if (rf & 2) {
          const noSelection_r7 = ɵɵreference(31);
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(5, 13, "common.channel"));
          ɵɵadvance(2);
          ɵɵproperty("multiple", false)("includeDefaultChannel", false)("disableChannelIds", ctx.currentChannelIds)("formControl", ctx.selectedChannelIdControl);
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(11, 15, "catalog.price-conversion-factor"));
          ɵɵadvance(2);
          ɵɵproperty("formControl", ctx.priceFactorControl);
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(16, 17, "catalog.channel-price-preview"));
          ɵɵadvance(6);
          ɵɵtextInterpolate(ɵɵpipeBind1(22, 19, "common.name"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(27, 25, "catalog.price-in-channel", ɵɵpureFunction1(30, _c5, ɵɵpipeBind1(26, 23, ɵɵpipeBind1(25, 21, ctx.currentChannel == null ? null : ctx.currentChannel.code)))), " ");
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ctx.selectedChannel)("ngIfElse", noSelection_r7);
          ɵɵadvance(4);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(34, 28, ctx.variantsPreview$));
        }
      },
      dependencies: [ClrLabel, ClrInput, ClrInputContainer, NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, FormControlDirective, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, ChannelAssignmentControlComponent, AsyncPipe, TranslatePipe, ChannelLabelPipe, LocaleCurrencyPipe],
      styles: ["vdr-channel-assignment-control[_ngcontent-%COMP%]{min-width:200px}.channel-price-preview[_ngcontent-%COMP%]{margin-top:24px}.channel-price-preview[_ngcontent-%COMP%]   table.table[_ngcontent-%COMP%]{margin-top:6px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignProductsToChannelDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-assign-products-to-channel-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    <ng-container *ngIf="isProductVariantMode; else productModeTitle">{{
        'catalog.assign-variants-to-channel' | translate
    }}</ng-container>
    <ng-template #productModeTitle>{{ 'catalog.assign-products-to-channel' | translate }}</ng-template>
</ng-template>

<div class="flex">
    <clr-input-container>
        <label>{{ 'common.channel' | translate }}</label>
        <vdr-channel-assignment-control
            clrInput
            [multiple]="false"
            [includeDefaultChannel]="false"
            [disableChannelIds]="currentChannelIds"
            [formControl]="selectedChannelIdControl"
        ></vdr-channel-assignment-control>
    </clr-input-container>
    <div class="flex-spacer"></div>
    <clr-input-container>
        <label>{{ 'catalog.price-conversion-factor' | translate }}</label>
        <input clrInput type="number" min="0" max="99999" [formControl]="priceFactorControl" />
    </clr-input-container>
</div>

<div class="channel-price-preview">
    <label class="clr-control-label">{{ 'catalog.channel-price-preview' | translate }}</label>
    <table class="table">
        <thead>
            <tr>
                <th>{{ 'common.name' | translate }}</th>
                <th>
                    {{
                        'catalog.price-in-channel'
                            | translate: { channel: currentChannel?.code | channelCodeToLabel | translate }
                    }}
                </th>
                <th>
                    <ng-template [ngIf]="selectedChannel" [ngIfElse]="noSelection">
                        {{ 'catalog.price-in-channel' | translate: { channel: selectedChannel?.code } }}
                    </ng-template>
                    <ng-template #noSelection>
                        {{ 'catalog.no-channel-selected' | translate }}
                    </ng-template>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let row of variantsPreview$ | async">
                <td>{{ row.name }}</td>
                <td>{{ row.price | localeCurrency: currentChannel?.defaultCurrencyCode }}</td>
                <td>
                    <ng-template [ngIf]="selectedChannel" [ngIfElse]="noChannelSelected">
                        {{ row.pricePreview | localeCurrency: selectedChannel?.defaultCurrencyCode }}
                    </ng-template>
                    <ng-template #noChannelSelected> - </ng-template>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="assign()" [disabled]="!selectedChannel" class="btn btn-primary">
        <ng-template [ngIf]="selectedChannel" [ngIfElse]="noSelection">
            {{ 'catalog.assign-to-named-channel' | translate: { channelCode: selectedChannel?.code } }}
        </ng-template>
        <ng-template #noSelection>
            {{ 'catalog.no-channel-selected' | translate }}
        </ng-template>
    </button>
</ng-template>
`,
      styles: ["vdr-channel-assignment-control{min-width:200px}.channel-price-preview{margin-top:24px}.channel-price-preview table.table{margin-top:6px}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: NotificationService
  }], null);
})();
var GET_PRODUCTS_WITH_FACET_VALUES_BY_IDS = gql`
    query GetProductsWithFacetValuesByIds($ids: [String!]!) {
        products(options: { filter: { id: { in: $ids } } }) {
            items {
                id
                name
                facetValues {
                    id
                    name
                    code
                    facet {
                        id
                        name
                        code
                    }
                }
            }
        }
    }
`;
var GET_VARIANTS_WITH_FACET_VALUES_BY_IDS = gql`
    query GetVariantsWithFacetValuesByIds($ids: [String!]!) {
        productVariants(options: { filter: { id: { in: $ids } } }) {
            items {
                id
                name
                sku
                facetValues {
                    id
                    name
                    code
                    facet {
                        id
                        name
                        code
                    }
                }
            }
        }
    }
`;
var UPDATE_PRODUCTS_BULK = gql`
    mutation UpdateProductsBulk($input: [UpdateProductInput!]!) {
        updateProducts(input: $input) {
            id
            name
            facetValues {
                id
                name
                code
            }
        }
    }
`;
var UPDATE_VARIANTS_BULK = gql`
    mutation UpdateVariantsBulk($input: [UpdateProductVariantInput!]!) {
        updateProductVariants(input: $input) {
            id
            name
            facetValues {
                id
                name
                code
            }
        }
    }
`;
var BulkAddFacetValuesDialogComponent = class _BulkAddFacetValuesDialogComponent {
  constructor(dataService, changeDetectorRef) {
    this.dataService = dataService;
    this.changeDetectorRef = changeDetectorRef;
    this.mode = "product";
    this.state = "loading";
    this.selectedValues = [];
    this.items = [];
    this.facetValuesRemoved = false;
  }
  ngOnInit() {
    const fetchData$ = this.mode === "product" ? this.dataService.query(GET_PRODUCTS_WITH_FACET_VALUES_BY_IDS, {
      ids: this.ids ?? []
    }).mapSingle(({
      products
    }) => products.items.map((p) => __spreadProps(__spreadValues({}, p), {
      facetValues: [...p.facetValues]
    }))) : this.dataService.query(GET_VARIANTS_WITH_FACET_VALUES_BY_IDS, {
      ids: this.ids ?? []
    }).mapSingle(({
      productVariants
    }) => productVariants.items.map((p) => __spreadProps(__spreadValues({}, p), {
      facetValues: [...p.facetValues]
    })));
    this.subscription = fetchData$.subscribe({
      next: (items) => {
        this.items = items;
        this.state = "ready";
        this.changeDetectorRef.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  cancel() {
    this.resolveWith();
  }
  removeFacetValue(item, facetValueId) {
    item.facetValues = item.facetValues.filter((fv) => fv.id !== facetValueId);
    this.facetValuesRemoved = true;
  }
  addFacetValues() {
    const selectedFacetValueIds = this.selectedValues.map((sv) => sv.id);
    this.state = "saving";
    const save$ = this.mode === "product" ? this.dataService.mutate(UPDATE_PRODUCTS_BULK, {
      input: this.items?.map((product) => ({
        id: product.id,
        facetValueIds: (0, import_unique.unique)([...product.facetValues.map((fv) => fv.id), ...selectedFacetValueIds])
      }))
    }) : this.dataService.mutate(UPDATE_VARIANTS_BULK, {
      input: this.items?.map((product) => ({
        id: product.id,
        facetValueIds: (0, import_unique.unique)([...product.facetValues.map((fv) => fv.id), ...selectedFacetValueIds])
      }))
    });
    return save$.subscribe((result) => {
      this.resolveWith(this.selectedValues);
    });
  }
  static {
    this.ɵfac = function BulkAddFacetValuesDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkAddFacetValuesDialogComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BulkAddFacetValuesDialogComponent,
      selectors: [["vdr-bulk-add-facet-values-dialog"]],
      standalone: false,
      decls: 11,
      vars: 5,
      consts: [["placeholder", ""], ["vdrDialogTitle", ""], [1, "flex"], [1, "flex", "center"], [1, "mr2"], [3, "selectedValuesChange"], ["class", "table", 4, "ngIf", "ngIfElse"], ["vdrDialogButtons", ""], [1, "table"], [4, "ngFor", "ngForOf"], [1, "left", "align-middle"], ["class", "sku", 4, "ngIf"], [1, "left"], [3, "facetValue", "remove", 4, "ngFor", "ngForOf"], [1, "sku"], [3, "remove", "facetValue"], [1, "loading"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function BulkAddFacetValuesDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, BulkAddFacetValuesDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 1);
          ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "div", 4);
          ɵɵtext(4);
          ɵɵpipe(5, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(6, "vdr-facet-value-selector", 5);
          ɵɵlistener("selectedValuesChange", function BulkAddFacetValuesDialogComponent_Template_vdr_facet_value_selector_selectedValuesChange_6_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.selectedValues = $event);
          });
          ɵɵelementEnd()()();
          ɵɵtemplate(7, BulkAddFacetValuesDialogComponent_table_7_Template, 3, 1, "table", 6)(8, BulkAddFacetValuesDialogComponent_ng_template_8_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(10, BulkAddFacetValuesDialogComponent_ng_template_10_Template, 6, 7, "ng-template", 7);
        }
        if (rf & 2) {
          const placeholder_r7 = ɵɵreference(9);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 3, "catalog.add-facet-value"), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.state !== "loading")("ngIfElse", placeholder_r7);
        }
      },
      dependencies: [ClrSpinner, NgForOf, NgIf, FacetValueSelectorComponent, FacetValueChipComponent, DialogButtonsDirective, DialogTitleDirective, TranslatePipe],
      styles: [".loading[_ngcontent-%COMP%]{min-height:25vh;display:flex;justify-content:center;align-items:center}.sku[_ngcontent-%COMP%]{color:var(--color-text-300)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkAddFacetValuesDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-bulk-add-facet-values-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    {{ 'catalog.edit-facet-values' | translate }}
</ng-template>

<div class="flex">
    <div class="flex center">
        <div class="mr2">
            {{ 'catalog.add-facet-value' | translate }}
        </div>
        <vdr-facet-value-selector
            (selectedValuesChange)="selectedValues = $event"
        ></vdr-facet-value-selector>
    </div>
</div>

<table class="table" *ngIf="state !== 'loading'; else placeholder">
    <tbody>
        <tr *ngFor="let item of items">
            <td class="left align-middle">
                <div>{{ item.name }}</div>
                <div *ngIf="item.sku" class="sku">{{ item.sku }}</div>
            </td>
            <td class="left">
                <vdr-facet-value-chip
                    *ngFor="let facetValue of item.facetValues"
                    [facetValue]="facetValue"
                    (remove)="removeFacetValue(item, facetValue.id)"
                ></vdr-facet-value-chip>
            </td>
        </tr>
    </tbody>
</table>

<ng-template #placeholder>
    <div class="loading">
    <clr-spinner></clr-spinner>
    </div>
</ng-template>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button
        type="submit"
        (click)="addFacetValues()"
        [disabled]="selectedValues.length === 0 && facetValuesRemoved === false"
        class="btn btn-primary"
    >
        {{ 'common.update' | translate }}
    </button>
</ng-template>
`,
      styles: [".loading{min-height:25vh;display:flex;justify-content:center;align-items:center}.sku{color:var(--color-text-300)}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var CollectionContentsComponent = class _CollectionContentsComponent {
  constructor(route, router, dataService) {
    this.route = route;
    this.router = router;
    this.dataService = dataService;
    this.previewUpdatedFilters = false;
    this.filterTermControl = new UntypedFormControl("");
    this.isLoading = false;
    this.collectionIdChange$ = new BehaviorSubject("");
    this.parentIdChange$ = new BehaviorSubject("");
    this.filterChanges$ = new BehaviorSubject([]);
    this.inheritFiltersChanges$ = new BehaviorSubject(true);
    this.refresh$ = new BehaviorSubject(true);
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.contentsCurrentPage$ = this.route.queryParamMap.pipe(map((qpm) => qpm.get("contentsPage")), map((page) => !page ? 1 : +page), startWith(1), distinctUntilChanged());
    this.contentsItemsPerPage$ = this.route.queryParamMap.pipe(map((qpm) => qpm.get("contentsPerPage")), map((perPage) => !perPage ? 10 : +perPage), startWith(10), distinctUntilChanged());
    const filterTerm$ = this.filterTermControl.valueChanges.pipe(debounceTime(250), tap(() => this.setContentsPageNumber(1)), startWith(""));
    const filterChanges$ = this.filterChanges$.asObservable().pipe(filter(() => this.previewUpdatedFilters), tap(() => this.setContentsPageNumber(1)), startWith([]));
    const inheritFiltersChanges$ = this.inheritFiltersChanges$.asObservable().pipe(filter(() => this.inheritFilters != null), distinctUntilChanged(), tap(() => this.setContentsPageNumber(1)), startWith(true));
    const fetchUpdate$ = combineLatest(this.collectionIdChange$, this.parentIdChange$, this.contentsCurrentPage$, this.contentsItemsPerPage$, filterTerm$, filterChanges$, inheritFiltersChanges$, this.refresh$);
    const collection$ = fetchUpdate$.pipe(takeUntil(this.destroy$), tap(() => this.isLoading = true), debounceTime(50), switchMap(([id, parentId, currentPage, itemsPerPage, filterTerm, filters, inheritFilters]) => {
      const take2 = itemsPerPage;
      const skip2 = (currentPage - 1) * itemsPerPage;
      if (filters.length && this.previewUpdatedFilters) {
        const filterClause = filterTerm ? {
          name: {
            contains: filterTerm
          }
        } : void 0;
        return this.dataService.collection.previewCollectionVariants({
          parentId,
          filters,
          inheritFilters
        }, {
          take: take2,
          skip: skip2,
          filter: filterClause
        }).mapSingle((data) => data.previewCollectionVariants).pipe(catchError(() => of({
          items: [],
          totalItems: 0
        })));
      } else if (id) {
        return this.dataService.collection.getCollectionContents(id, take2, skip2, filterTerm).mapSingle((data) => data.collection?.productVariants);
      } else {
        return of(null);
      }
    }), tap(() => this.isLoading = false), finalize(() => this.isLoading = false));
    this.contents$ = collection$.pipe(map((result) => result ? result.items : []));
    this.contentsTotalItems$ = collection$.pipe(map((result) => result ? result.totalItems : 0));
  }
  ngOnChanges(changes) {
    if ("collectionId" in changes) {
      this.collectionIdChange$.next(changes.collectionId.currentValue);
    }
    if ("parentId" in changes) {
      this.parentIdChange$.next(changes.parentId.currentValue);
    }
    if ("inheritFilters" in changes) {
      this.inheritFiltersChanges$.next(changes.inheritFilters.currentValue);
    }
    if ("updatedFilters" in changes) {
      if (this.updatedFilters) {
        this.filterChanges$.next(this.updatedFilters);
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setContentsPageNumber(page) {
    this.setParam("contentsPage", page);
  }
  setContentsItemsPerPage(perPage) {
    this.setParam("contentsPerPage", perPage);
  }
  refresh() {
    this.refresh$.next(true);
  }
  setParam(key, value) {
    this.router.navigate(["./"], {
      relativeTo: this.route,
      queryParams: {
        [key]: value
      },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  static {
    this.ɵfac = function CollectionContentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionContentsComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CollectionContentsComponent,
      selectors: [["vdr-collection-contents"]],
      contentQueries: function CollectionContentsComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TemplateRef, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        }
      },
      inputs: {
        collectionId: "collectionId",
        parentId: "parentId",
        inheritFilters: "inheritFilters",
        updatedFilters: "updatedFilters",
        previewUpdatedFilters: "previewUpdatedFilters"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 27,
      vars: 46,
      consts: [[1, "table-wrapper"], [1, "progress", "loop"], [1, "header-title-row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["id", "collection-contents", 3, "pageChange", "itemsPerPageChange", "items", "itemsPerPage", "totalItems", "currentPage"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault"], ["id", "updated-at", 3, "heading", "hiddenByDefault"], ["id", "name", 3, "heading", "optional"], ["id", "sku", 3, "heading", "optional"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"]],
      template: function CollectionContentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵelement(1, "div", 1);
          ɵɵelementStart(2, "div", 2);
          ɵɵtemplate(3, CollectionContentsComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
          ɵɵelementStart(5, "vdr-data-table-2", 4);
          ɵɵpipe(6, "async");
          ɵɵpipe(7, "async");
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵlistener("pageChange", function CollectionContentsComponent_Template_vdr_data_table_2_pageChange_5_listener($event) {
            return ctx.setContentsPageNumber($event);
          })("itemsPerPageChange", function CollectionContentsComponent_Template_vdr_data_table_2_itemsPerPageChange_5_listener($event) {
            return ctx.setContentsItemsPerPage($event);
          });
          ɵɵelement(10, "vdr-dt2-search", 5);
          ɵɵpipe(11, "translate");
          ɵɵelementStart(12, "vdr-dt2-column", 6);
          ɵɵpipe(13, "translate");
          ɵɵtemplate(14, CollectionContentsComponent_ng_template_14_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-dt2-column", 7);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, CollectionContentsComponent_ng_template_17_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 8);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, CollectionContentsComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 9);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, CollectionContentsComponent_ng_template_23_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 10);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, CollectionContentsComponent_ng_template_26_Template, 1, 1, "ng-template");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassProp("visible", ctx.isLoading);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(44, _c7, ɵɵpipeBind1(4, 22, ctx.contentsTotalItems$)));
          ɵɵadvance(2);
          ɵɵclassProp("loading", ctx.isLoading);
          ɵɵproperty("items", ɵɵpipeBind1(6, 24, ctx.contents$))("itemsPerPage", ɵɵpipeBind1(7, 26, ctx.contentsItemsPerPage$))("totalItems", ɵɵpipeBind1(8, 28, ctx.contentsTotalItems$))("currentPage", ɵɵpipeBind1(9, 30, ctx.contentsCurrentPage$));
          ɵɵadvance(5);
          ɵɵproperty("searchTermControl", ctx.filterTermControl)("searchTermPlaceholder", ɵɵpipeBind1(11, 32, "catalog.filter-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(13, 34, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 36, "common.created-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 38, "common.updated-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 40, "common.name"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 42, "catalog.sku"))("optional", false);
        }
      },
      dependencies: [ClrIconCustomTag, NgTemplateOutlet, RouterLink, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     table{margin-top:-1px}vdr-data-table[_ngcontent-%COMP%]{opacity:1;transition:opacity .3s}vdr-data-table.loading[_ngcontent-%COMP%]{opacity:.5}.table-wrapper[_ngcontent-%COMP%]{position:relative}.progress[_ngcontent-%COMP%]{position:absolute;top:0;left:0;overflow:hidden;height:6px;opacity:0;transition:opacity .1s}.progress.visible[_ngcontent-%COMP%]{opacity:1}.sku[_ngcontent-%COMP%]{color:var(--color-text-200)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionContentsComponent, [{
    type: Component,
    args: [{
      selector: "vdr-collection-contents",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="table-wrapper">
    <div class="progress loop" [class.visible]="isLoading"></div>
    <div class="header-title-row">
        <ng-container
            *ngTemplateOutlet="headerTemplate; context: { $implicit: contentsTotalItems$ | async }"
        ></ng-container>
    </div>
    <vdr-data-table-2
        id="collection-contents"
        [class.loading]="isLoading"
        [items]="contents$ | async"
        [itemsPerPage]="contentsItemsPerPage$ | async"
        [totalItems]="contentsTotalItems$ | async"
        [currentPage]="contentsCurrentPage$ | async"
        (pageChange)="setContentsPageNumber($event)"
        (itemsPerPageChange)="setContentsItemsPerPage($event)"
    >
        <vdr-dt2-search
            [searchTermControl]="filterTermControl"
            [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
        />
        <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
            <ng-template let-variant="item">
                {{ variant.id }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'common.created-at' | translate" id="created-at" [hiddenByDefault]="true">
            <ng-template let-variant="item">
                {{ variant.createdAt | localeDate : 'short' }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'common.updated-at' | translate" id="updated-at" [hiddenByDefault]="true">
            <ng-template let-variant="item">
                {{ variant.updatedAt | localeDate : 'short' }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false">
            <ng-template let-variant="item">
                <a class="button-ghost" [routerLink]="['/catalog/products', variant.productId]"
                    ><span>{{ variant.name }}</span
                    ><clr-icon shape="arrow right"
                /></a>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'catalog.sku' | translate" id="sku" [optional]="false">
            <ng-template let-variant="item">
                {{ variant.sku }}
            </ng-template>
        </vdr-dt2-column>
    </vdr-data-table-2>
</div>
`,
      styles: [":host{display:block}:host ::ng-deep table{margin-top:-1px}vdr-data-table{opacity:1;transition:opacity .3s}vdr-data-table.loading{opacity:.5}.table-wrapper{position:relative}.progress{position:absolute;top:0;left:0;overflow:hidden;height:6px;opacity:0;transition:opacity .1s}.progress.visible{opacity:1}.sku{color:var(--color-text-200)}\n"]
    }]
  }], () => [{
    type: ActivatedRoute
  }, {
    type: Router
  }, {
    type: DataService
  }], {
    collectionId: [{
      type: Input
    }],
    parentId: [{
      type: Input
    }],
    inheritFilters: [{
      type: Input
    }],
    updatedFilters: [{
      type: Input
    }],
    previewUpdatedFilters: [{
      type: Input
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var CollectionDataTableComponent = class _CollectionDataTableComponent extends DataTable2Component {
  constructor(changeDetectorRef, dataService) {
    super(changeDetectorRef, dataService);
    this.changeDetectorRef = changeDetectorRef;
    this.dataService = dataService;
    this.changeOrder = new EventEmitter();
    this.dragRefs = [];
    this.absoluteIndex = {};
    this.sortPredicate = (index, item) => {
      const itemAtIndex = this.dropList.getSortedItems()[index];
      return itemAtIndex?.data.collection.parentId === item.data.collection.parentId;
    };
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
    if (changes.subCollections || changes.items) {
      const allCollections = [];
      for (const collection of this.items ?? []) {
        allCollections.push(collection);
        const subCollectionMatches = this.getSubcollections(collection);
        allCollections.push(...subCollectionMatches.flat());
      }
      allCollections.forEach((collection, index) => this.absoluteIndex[collection.id] = index);
    }
  }
  ngAfterViewInit() {
    this.collectionRowList.changes.subscribe((val) => {
      this.dropList.getSortedItems().forEach((item) => this.dropList.removeItem(item));
      for (const ref of val.toArray()) {
        ref.dropContainer = this.dropList;
        ref._dragRef._withDropContainer(this.dropList._dropListRef);
        this.dropList.addItem(ref);
      }
    });
  }
  getSubcollections(item) {
    return this.subCollections?.filter((c) => c.parentId === item.id) ?? [];
  }
  onDrop(event) {
    const isTopLevel = event.item.data.collection.breadcrumbs.length === 2;
    const pageIndexOffset = isTopLevel ? (this.currentPage - 1) * this.itemsPerPage : 0;
    const parentId = event.item.data.collection.parentId;
    const parentIndex = this.items.findIndex((i) => i.id === parentId);
    const adjustedIndex = pageIndexOffset + event.currentIndex - parentIndex - 1;
    this.changeOrder.emit({
      collectionId: event.item.data.collection.id,
      index: adjustedIndex,
      parentId: event.item.data.collection.parentId
    });
    if (isTopLevel) {
      this.items = [...this.items];
      this.items.splice(event.previousIndex, 1);
      this.items.splice(event.currentIndex, 0, event.item.data.collection);
    } else {
      const parent = this.items.find((i) => i.id === parentId);
      if (parent) {
        const subCollections = this.getSubcollections(parent);
        const adjustedPreviousIndex = pageIndexOffset + event.previousIndex - parentIndex - 1;
        subCollections.splice(adjustedPreviousIndex, 1);
        subCollections.splice(event.currentIndex, 0, event.item.data.collection);
      }
    }
    this.changeDetectorRef.markForCheck();
  }
  static {
    this.ɵfac = function CollectionDataTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionDataTableComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CollectionDataTableComponent,
      selectors: [["vdr-collection-data-table"]],
      viewQuery: function CollectionDataTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(CdkDropList, 7);
          ɵɵviewQuery(_c9, 5, CdkDrag);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropList = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.collectionRowList = _t);
        }
      },
      inputs: {
        subCollections: "subCollections"
      },
      outputs: {
        changeOrder: "changeOrder"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      ngContentSelectors: _c11,
      decls: 25,
      vars: 27,
      consts: [["collectionRowTmp", ""], ["collectionRow", ""], ["defaultComponent", ""], [3, "filters", "dataTableId", 4, "ngIf"], [1, "table-wrapper"], [1, "bulk-actions"], [1, ""], [1, "heading-row"], ["class", "selection-col", 4, "ngIf"], [3, "expand", 4, "ngFor", "ngForOf"], [1, "column-picker"], [3, "reorder", "resetColumns", "uiLanguage", "columns"], [4, "ngIf"], ["cdkDropList", "", "cdkDropListLockAxis", "y", 3, "cdkDropListDropped", "cdkDropListSortPredicate"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-footer"], [3, "itemsPerPage", "itemsPerPageChange", 4, "ngIf"], ["class", "p5 total-items-count", 4, "ngIf"], [3, "id", "currentPage", "itemsPerPage", "totalItems", "pageChange", 4, "ngIf"], [3, "filters", "dataTableId"], [1, "selection-col"], [1, "flex"], [1, "drag-handle-spacer"], ["type", "checkbox", "clrCheckbox", "", 3, "change", "checked"], [1, "cell-content", 3, "ngClass"], ["api", "dataTable", "display", "block", 3, "locationId", "metadata", "topPx", "leftPx"], ["class", "sort-toggle", 4, "ngIf"], [1, "sort-toggle"], [3, "click"], ["shape", "two-way-arrows left", 4, "ngIf"], ["shape", "arrow up", 4, "ngIf"], ["shape", "arrow down", 4, "ngIf"], ["class", "sort-label", 4, "ngIf"], ["shape", "two-way-arrows left"], ["shape", "arrow up"], ["shape", "arrow down"], [1, "sort-label"], [1, "filter-row"], [1, "button-ghost", "toggle-search-filter-row", 3, "click", "title"], ["shape", "search"], [1, "filter-row-wrapper"], [4, "ngTemplateOutlet"], [1, "filters"], ["class", "mt-1", 3, "filterWithValue", "filters", 4, "ngFor", "ngForOf"], ["class", "mt-1", 3, "filters", 4, "ngIf"], [1, "mt-1", 3, "filterWithValue", "filters"], [1, "mt-1", 3, "filters"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "emptyStateLabel"], [3, "itemsPerPageChange", "itemsPerPage"], [1, "p5", "total-items-count"], [3, "pageChange", "id", "currentPage", "itemsPerPage", "totalItems"], ["cdkDrag", "", "cdkDragBoundary", "tbody", 3, "cdkDragData"], ["class", "selection-col", 3, "active", 4, "ngIf"], [3, "active", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["cdkDragHandle", "", 1, "drag-handle", 3, "title"], ["shape", "drag-handle"], ["type", "checkbox", "clrCheckbox", "", 3, "click", "checked"], [4, "ngIf", "ngIfElse"], [4, "ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function CollectionDataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c10);
          ɵɵtemplate(0, CollectionDataTableComponent_vdr_data_table_filter_presets_0_Template, 1, 2, "vdr-data-table-filter-presets", 3);
          ɵɵelementStart(1, "div", 4)(2, "div", 5);
          ɵɵprojection(3);
          ɵɵelementEnd();
          ɵɵelementStart(4, "table", 6)(5, "thead")(6, "tr", 7);
          ɵɵtemplate(7, CollectionDataTableComponent_th_7_Template, 4, 1, "th", 8)(8, CollectionDataTableComponent_th_8_Template, 6, 9, "th", 9);
          ɵɵelementStart(9, "th")(10, "div", 10)(11, "vdr-data-table-colum-picker", 11);
          ɵɵpipe(12, "async");
          ɵɵlistener("reorder", function CollectionDataTableComponent_Template_vdr_data_table_colum_picker_reorder_11_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onColumnReorder($event));
          })("resetColumns", function CollectionDataTableComponent_Template_vdr_data_table_colum_picker_resetColumns_11_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onColumnsReset());
          });
          ɵɵelementEnd()()()();
          ɵɵtemplate(13, CollectionDataTableComponent_tr_13_Template, 9, 13, "tr", 12);
          ɵɵelementEnd();
          ɵɵelementStart(14, "tbody", 13);
          ɵɵlistener("cdkDropListDropped", function CollectionDataTableComponent_Template_tbody_cdkDropListDropped_14_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onDrop($event));
          });
          ɵɵtemplate(15, CollectionDataTableComponent_ng_container_15_Template, 2, 5, "ng-container", 14);
          ɵɵpipe(16, "paginate");
          ɵɵelementContainerStart(17);
          ɵɵtemplate(18, CollectionDataTableComponent_tr_18_Template, 3, 2, "tr", 12);
          ɵɵelementContainerEnd();
          ɵɵelementEnd()()();
          ɵɵelementStart(19, "div", 15);
          ɵɵtemplate(20, CollectionDataTableComponent_vdr_items_per_page_controls_20_Template, 1, 1, "vdr-items-per-page-controls", 16)(21, CollectionDataTableComponent_div_21_Template, 3, 8, "div", 17)(22, CollectionDataTableComponent_vdr_pagination_controls_22_Template, 1, 4, "vdr-pagination-controls", 18);
          ɵɵelementEnd();
          ɵɵtemplate(23, CollectionDataTableComponent_ng_template_23_Template, 6, 9, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.filters);
          ɵɵadvance(4);
          ɵɵclassProp("no-select", ctx.disableSelect);
          ɵɵadvance();
          ɵɵclassProp("items-selected", ctx.selectionManager == null ? null : ctx.selectionManager.selection.length);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.visibleSortedColumns);
          ɵɵadvance(3);
          ɵɵproperty("uiLanguage", ɵɵpipeBind1(12, 17, ctx.uiLanguage$))("columns", ctx.sortedColumns);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.searchComponent || ctx.customSearchTemplate || (ctx.filters == null ? null : ctx.filters.length));
          ɵɵadvance();
          ɵɵproperty("cdkDropListSortPredicate", ctx.sortPredicate);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ɵɵpipeBind2(16, 19, ctx.items, ɵɵpureFunction4(22, _c12, ctx.itemsPerPage, ctx.currentPage, ctx.totalItems, ctx.id)))("ngForTrackBy", ctx.trackByFn.bind(ctx));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", !(ctx.items == null ? null : ctx.items.length));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.totalItems);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.totalItems);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.totalItems);
        }
      },
      dependencies: [ClrIconCustomTag, ClrCheckbox, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, CdkDropList, CdkDrag, CdkDragHandle, ItemsPerPageControlsComponent, PaginationControlsComponent, FormFieldControlDirective, EmptyPlaceholderComponent, UiExtensionPointComponent, DataTableFiltersComponent, DataTableColumnPickerComponent, DataTableFilterPresetsComponent, AddFilterPresetButtonComponent, AsyncPipe, PaginatePipe, TranslatePipe],
      styles: ["[_nghost-%COMP%]{display:block;max-width:100%;position:relative;margin-bottom:calc(var(--space-unit) * 4);container-type:inline-size}th[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-table-header-border);color:var(--color-weight-700);font-size:var(--font-size-xs);font-weight:600;text-transform:uppercase;position:relative;white-space:nowrap;background-color:transparent}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 1);color:var(--color-text-100)}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type, tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{text-align:center}@media screen and (min-width: 992px){tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type, tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{padding-inline-start:var(--surface-margin-left);text-align:start}}th[_ngcontent-%COMP%]:last-of-type, td[_ngcontent-%COMP%]:last-of-type{border-inline-end:1px solid var(--color-table-header-border)}tr[_ngcontent-%COMP%]:first-of-type   th[_ngcontent-%COMP%]:last-of-type{border-image:linear-gradient(0deg,var(--color-table-header-border),transparent) 1}tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:last-of-type{border-image:linear-gradient(180deg,var(--color-table-header-border),transparent) 1}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-table-row-separator)}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:var(--color-table-row-hover-bg)}.bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 5);background-color:var(--color-surface-bg);z-index:10;display:flex;position:absolute;top:5px;height:40px}@media screen and (min-width: 992px){.bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 8.5)}}@media screen and (min-width: 1280px){.bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 10.5)}}.table-wrapper[_ngcontent-%COMP%]{display:block;overflow-y:hidden;overflow-x:auto;position:relative;width:100%;max-width:var(--surface-width)}table[_ngcontent-%COMP%]{width:100%}table.no-select[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.column-picker[_ngcontent-%COMP%]{width:24px}.sort-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;margin-inline-start:calc(var(--space-unit) * .5)}.sort-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;border-radius:var(--border-radius-lg);color:var(--color-weight-500);padding:0 2px;cursor:pointer;background-color:transparent}.sort-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--color-primary-700)}.sort-toggle[_ngcontent-%COMP%]   .sort-label[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * .5);font-size:10px;color:var(--color-primary-600);font-weight:400}.toggle-search-filter-row[_ngcontent-%COMP%]{position:absolute;top:-12px;left:4px}@media screen and (min-width: 1280px){.toggle-search-filter-row[_ngcontent-%COMP%]{left:8px}}.toggle-search-filter-row.active[_ngcontent-%COMP%]{background-color:var(--color-primary-700);color:var(--color-primary-100);border-color:var(--color-primary-700)}th.filter-row[_ngcontent-%COMP%]{position:relative;font-size:var(--font-size-base);font-weight:400;background-color:var(--color-weight-100);box-shadow:var(--data-table-filter-box-shadow);border-left-width:0;border-right-width:0;text-align:initial;padding:0}th.filter-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}th.filter-row.active[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-table-header-border)}th.filter-row[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{margin-top:calc(var(--space-unit) * 1);display:flex;flex-wrap:wrap;gap:calc(var(--space-unit) * .5)}.filter-row-wrapper[_ngcontent-%COMP%]{padding:calc(var(--space-unit) * 4);padding-inline-start:0;max-height:150px;transition:max-height .2s,padding .2s,opacity .2s}.filter-row-wrapper.hidden[_ngcontent-%COMP%]{max-height:0px;padding-top:0;padding-bottom:0;overflow:hidden;opacity:0}.cell-link[_ngcontent-%COMP%]{display:block;width:100%;height:100%}td.active[_ngcontent-%COMP%]{background-color:var(--color-table-row-active-bg)}.cell-content[_ngcontent-%COMP%]{display:flex;align-items:center;line-height:var(--font-size-sm);color:var(--color-weight-700)}.cell-content.left[_ngcontent-%COMP%]{justify-content:flex-start}.cell-content.center[_ngcontent-%COMP%]{justify-content:center}.cell-content.right[_ngcontent-%COMP%]{justify-content:flex-end}.selection-col[_ngcontent-%COMP%]{width:calc(var(--space-unit) * 8)}vdr-empty-placeholder[_ngcontent-%COMP%]{width:100%}.table-footer[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between;margin-top:var(--space-unit);margin-inline-start:var(--surface-margin-left);margin-inline-end:var(--space-unit)}.total-items-count[_ngcontent-%COMP%]{font-size:var(--font-size-xs)}@container (max-width: 500px){.total-items-count[_ngcontent-%COMP%]{display:none}}", ".bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 6);background-color:var(--color-surface-bg)}@media screen and (min-width: 992px){.bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 9.5)}}@media screen and (min-width: 1280px){.bulk-actions[_ngcontent-%COMP%]{margin-inline-start:calc(var(--space-unit) * 11.5)}}.drag-handle[_ngcontent-%COMP%]{cursor:grab}.drag-handle-spacer[_ngcontent-%COMP%]{width:16px}.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .3s cubic-bezier(0,0,.2,1)}.cdk-drag-preview[_ngcontent-%COMP%]{opacity:0}.cdk-drag-placeholder[_ngcontent-%COMP%]{background-color:var(--color-primary-100)!important}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionDataTableComponent, [{
    type: Component,
    args: [{
      selector: "vdr-collection-data-table",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-data-table-filter-presets
    *ngIf="filters"
    [filters]="filters"
    [dataTableId]="id"
></vdr-data-table-filter-presets>
<div class="table-wrapper">
    <div class="bulk-actions">
        <ng-content select="vdr-bulk-action-menu"></ng-content>
    </div>
    <table class="" [class.no-select]="disableSelect">
        <thead [class.items-selected]="selectionManager?.selection.length">
            <tr class="heading-row">
                <th *ngIf="selectionManager" class="selection-col">
                    <div class="flex">
                        <div class="drag-handle-spacer"></div>
                        <input
                            type="checkbox"
                            clrCheckbox
                            [checked]="selectionManager?.areAllCurrentItemsSelected()"
                            (change)="onToggleAllClick()"
                        />
                    </div>
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
                                <vdr-add-filter-preset-button
                                    [filters]="filters"
                                    [dataTableId]="id"
                                ></vdr-add-filter-preset-button>
                            </div>
                        </ng-container>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody
            cdkDropList
            cdkDropListLockAxis="y"
            (cdkDropListDropped)="onDrop($event)"
            [cdkDropListSortPredicate]="sortPredicate"
        >
            <ng-container
                *ngFor="
                let item of items
                    | paginate
                        : {
                              itemsPerPage: itemsPerPage,
                              currentPage: currentPage,
                              totalItems: totalItems,
                              id: id,
                          };
                index as i;
                trackBy: trackByFn.bind(this)
            "
            >
                <ng-container
                    [ngTemplateOutlet]="collectionRowTmp"
                    [ngTemplateOutletContext]="{ item: item, i: i, depth: 0 }"
                ></ng-container>
            </ng-container>
            <ng-container>
                <tr *ngIf="!items?.length">
                    <td [attr.colspan]="visibleSortedColumns.length + (selectionManager ? 2 : 1)">
                        <vdr-empty-placeholder [emptyStateLabel]="emptyStateLabel"></vdr-empty-placeholder>
                    </td>
                </tr>
            </ng-container>
        </tbody>
    </table>
</div>
<div class="table-footer">
    <vdr-items-per-page-controls
        *ngIf="totalItems"
        [itemsPerPage]="itemsPerPage"
        (itemsPerPageChange)="itemsPerPageChange.emit($event)"
    ></vdr-items-per-page-controls>
    <div *ngIf="totalItems" class="p5 total-items-count">
        {{ 'common.total-items' | translate : { currentStart, currentEnd, totalItems } }}
    </div>

    <vdr-pagination-controls
        *ngIf="totalItems"
        [id]="id"
        [currentPage]="currentPage"
        [itemsPerPage]="itemsPerPage"
        [totalItems]="totalItems"
        (pageChange)="pageChange.emit($event)"
    ></vdr-pagination-controls>
</div>

<ng-template #collectionRowTmp let-item="item" let-depth="depth">
    <tr #collectionRow cdkDrag [cdkDragData]="{ depth: depth, collection: item }" cdkDragBoundary="tbody">
        <td
            *ngIf="selectionManager"
            [class.active]="activeIndex === absoluteIndex[item.id]"
            class="selection-col"
        >
            <div class="flex">
                <div class="drag-handle" cdkDragHandle [title]="'catalog.reorder-collection' | translate">
                    <clr-icon shape="drag-handle"></clr-icon>
                </div>
                <input
                    type="checkbox"
                    clrCheckbox
                    [checked]="selectionManager?.isSelected(item)"
                    (click)="onRowClick(item, $event)"
                />
            </div>
        </td>
        <td
            *ngFor="let column of visibleSortedColumns"
            [class.active]="activeIndex === absoluteIndex[item.id]"
        >
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
                        *ngTemplateOutlet="column.template; context: { item: item, depth: depth }"
                    ></ng-container>
                </ng-template>
            </div>
        </td>
        <td [class.active]="activeIndex === absoluteIndex[item.id]"><!-- column select --></td>
    </tr>
    <ng-container *ngFor="let subCollection of getSubcollections(item)">
        <ng-container
            *ngTemplateOutlet="collectionRowTmp; context: { item: subCollection, depth: depth + 1 }"
        ></ng-container>
    </ng-container>
</ng-template>
`,
      styles: [":host{display:block;max-width:100%;position:relative;margin-bottom:calc(var(--space-unit) * 4);container-type:inline-size}th{border-bottom:1px solid var(--color-table-header-border);color:var(--color-weight-700);font-size:var(--font-size-xs);font-weight:600;text-transform:uppercase;position:relative;white-space:nowrap;background-color:transparent}th,td{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 1);color:var(--color-text-100)}tr td:first-of-type,tr th:first-of-type{text-align:center}@media screen and (min-width: 992px){tr td:first-of-type,tr th:first-of-type{padding-inline-start:var(--surface-margin-left);text-align:start}}th:last-of-type,td:last-of-type{border-inline-end:1px solid var(--color-table-header-border)}tr:first-of-type th:last-of-type{border-image:linear-gradient(0deg,var(--color-table-header-border),transparent) 1}tr:last-of-type td:last-of-type{border-image:linear-gradient(180deg,var(--color-table-header-border),transparent) 1}tbody td{border-bottom:1px solid var(--color-table-row-separator)}tbody tr:hover{background-color:var(--color-table-row-hover-bg)}.bulk-actions{margin-inline-start:calc(var(--space-unit) * 5);background-color:var(--color-surface-bg);z-index:10;display:flex;position:absolute;top:5px;height:40px}@media screen and (min-width: 992px){.bulk-actions{margin-inline-start:calc(var(--space-unit) * 8.5)}}@media screen and (min-width: 1280px){.bulk-actions{margin-inline-start:calc(var(--space-unit) * 10.5)}}.table-wrapper{display:block;overflow-y:hidden;overflow-x:auto;position:relative;width:100%;max-width:var(--surface-width)}table{width:100%}table.no-select{-webkit-user-select:none;user-select:none}.column-picker{width:24px}.sort-toggle{display:flex;align-items:center;margin-inline-start:calc(var(--space-unit) * .5)}.sort-toggle button{border:0;border-radius:var(--border-radius-lg);color:var(--color-weight-500);padding:0 2px;cursor:pointer;background-color:transparent}.sort-toggle button.active{color:var(--color-primary-700)}.sort-toggle .sort-label{margin-inline-start:calc(var(--space-unit) * .5);font-size:10px;color:var(--color-primary-600);font-weight:400}.toggle-search-filter-row{position:absolute;top:-12px;left:4px}@media screen and (min-width: 1280px){.toggle-search-filter-row{left:8px}}.toggle-search-filter-row.active{background-color:var(--color-primary-700);color:var(--color-primary-100);border-color:var(--color-primary-700)}th.filter-row{position:relative;font-size:var(--font-size-base);font-weight:400;background-color:var(--color-weight-100);box-shadow:var(--data-table-filter-box-shadow);border-left-width:0;border-right-width:0;text-align:initial;padding:0}th.filter-row input{width:100%}th.filter-row.active{border-bottom:1px solid var(--color-table-header-border)}th.filter-row .filters{margin-top:calc(var(--space-unit) * 1);display:flex;flex-wrap:wrap;gap:calc(var(--space-unit) * .5)}.filter-row-wrapper{padding:calc(var(--space-unit) * 4);padding-inline-start:0;max-height:150px;transition:max-height .2s,padding .2s,opacity .2s}.filter-row-wrapper.hidden{max-height:0px;padding-top:0;padding-bottom:0;overflow:hidden;opacity:0}.cell-link{display:block;width:100%;height:100%}td.active{background-color:var(--color-table-row-active-bg)}.cell-content{display:flex;align-items:center;line-height:var(--font-size-sm);color:var(--color-weight-700)}.cell-content.left{justify-content:flex-start}.cell-content.center{justify-content:center}.cell-content.right{justify-content:flex-end}.selection-col{width:calc(var(--space-unit) * 8)}vdr-empty-placeholder{width:100%}.table-footer{display:flex;align-items:baseline;justify-content:space-between;margin-top:var(--space-unit);margin-inline-start:var(--surface-margin-left);margin-inline-end:var(--space-unit)}.total-items-count{font-size:var(--font-size-xs)}@container (max-width: 500px){.total-items-count{display:none}}\n", ".bulk-actions{margin-inline-start:calc(var(--space-unit) * 6);background-color:var(--color-surface-bg)}@media screen and (min-width: 992px){.bulk-actions{margin-inline-start:calc(var(--space-unit) * 9.5)}}@media screen and (min-width: 1280px){.bulk-actions{margin-inline-start:calc(var(--space-unit) * 11.5)}}.drag-handle{cursor:grab}.drag-handle-spacer{width:16px}.cdk-drop-list-dragging .cdk-drag{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag-animating{transition:transform .3s cubic-bezier(0,0,.2,1)}.cdk-drag-preview{opacity:0}.cdk-drag-placeholder{background-color:var(--color-primary-100)!important}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DataService
  }], {
    subCollections: [{
      type: Input
    }],
    changeOrder: [{
      type: Output
    }],
    dropList: [{
      type: ViewChild,
      args: [CdkDropList, {
        static: true
      }]
    }],
    collectionRowList: [{
      type: ViewChildren,
      args: ["collectionRow", {
        read: CdkDrag
      }]
    }]
  });
})();
var COLLECTION_DETAIL_QUERY = gql`
    query CollectionDetailQuery($id: ID!) {
        collection(id: $id) {
            ...Collection
        }
    }
    ${COLLECTION_FRAGMENT}
`;
var CollectionDetailComponent = class _CollectionDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService, modalService, localStorageService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.localStorageService = localStorageService;
    this.customFields = this.getCustomFieldConfig("Collection");
    this.detailForm = this.formBuilder.group({
      name: ["", Validators.required],
      slug: ["", unicodePatternValidator(/^[\p{Letter}0-9._-]+$/u)],
      description: "",
      visible: false,
      inheritFilters: true,
      filters: this.formBuilder.array([]),
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.assetChanges = {};
    this.filters = [];
    this.allFilters = [];
    this.livePreview = false;
    this.updatePermission = [Permission.UpdateCatalog, Permission.UpdateCollection];
    this.filterRemoved$ = new Subject();
    this.livePreview = this.localStorageService.get("livePreviewCollectionContents") ?? false;
  }
  ngOnInit() {
    this.init();
    this.dataService.collection.getCollectionFilters().single$.subscribe((res) => {
      this.allFilters = res.collectionFilters;
    });
    const filtersFormArray = this.detailForm.get("filters");
    const inheritFiltersControl = this.detailForm.get("inheritFilters");
    this.inheritFilters$ = inheritFiltersControl.valueChanges.pipe(distinctUntilChanged());
    this.updatedFilters$ = merge(filtersFormArray.statusChanges, this.filterRemoved$).pipe(debounceTime(200), filter(() => filtersFormArray.touched), map(() => this.mapOperationsToInputs(this.filters, filtersFormArray.value).filter((_filter) => {
      for (const arg of _filter.arguments) {
        if (arg.value === "") {
          return false;
        }
      }
      return true;
    })));
    this.parentId$ = this.route.paramMap.pipe(map((pm) => pm.get("parentId") || void 0), switchMap((parentId) => {
      if (parentId) {
        return of(parentId);
      } else {
        return this.entity$.pipe(map((collection) => collection.parent?.id));
      }
    }));
  }
  ngOnDestroy() {
    this.destroy();
  }
  getFilterDefinition(_filter) {
    return this.allFilters.find((f) => f.code === _filter.code);
  }
  assetsChanged() {
    return !!Object.values(this.assetChanges).length;
  }
  /**
   * If creating a new Collection, automatically generate the slug based on the collection name.
   */
  updateSlug(nameValue) {
    const slugControl = this.detailForm.get(["slug"]);
    const currentTranslation = this.entity ? findTranslation(this.entity, this.languageCode) : void 0;
    const currentSlugIsEmpty = !currentTranslation || !currentTranslation.slug;
    if (slugControl && slugControl.pristine && currentSlugIsEmpty) {
      slugControl.setValue((0, import_normalize_string.normalizeString)(`${nameValue}`, "-"));
    }
  }
  addFilter(collectionFilter) {
    const filtersArray = this.detailForm.get("filters");
    const argsHash = collectionFilter.args.reduce((output, arg) => __spreadProps(__spreadValues({}, output), {
      [arg.name]: getConfigArgValue(arg.value)
    }), {});
    filtersArray.push(this.formBuilder.control({
      code: collectionFilter.code,
      args: argsHash
    }));
    this.filters.push({
      code: collectionFilter.code,
      args: collectionFilter.args.map((a) => ({
        name: a.name,
        value: getConfigArgValue(a.value)
      }))
    });
  }
  removeFilter(index) {
    const filtersArray = this.detailForm.get("filters");
    if (index !== -1) {
      filtersArray.removeAt(index);
      filtersArray.markAsDirty();
      filtersArray.markAsTouched();
      this.filters.splice(index, 1);
      this.filterRemoved$.next();
    }
  }
  create() {
    if (!this.detailForm.dirty) {
      return;
    }
    const input = this.getUpdatedCollection({
      id: "",
      createdAt: "",
      updatedAt: "",
      languageCode: this.languageCode,
      name: "",
      slug: "",
      isPrivate: false,
      breadcrumbs: [],
      description: "",
      featuredAsset: null,
      assets: [],
      translations: [],
      inheritFilters: true,
      filters: [],
      parent: {},
      children: null
    }, this.detailForm, this.languageCode);
    const parentId = this.route.snapshot.paramMap.get("parentId");
    if (parentId) {
      input.parentId = parentId;
    }
    this.dataService.collection.createCollection(input).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Collection"
      });
      this.assetChanges = {};
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createCollection.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "Collection"
      });
    });
  }
  save() {
    combineLatest(this.entity$, this.languageCode$).pipe(take(1), mergeMap(([category, languageCode]) => {
      const input = this.getUpdatedCollection(category, this.detailForm, languageCode);
      return this.dataService.collection.updateCollection(input);
    })).subscribe(() => {
      this.assetChanges = {};
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Collection"
      });
      this.contentsComponent.refresh();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Collection"
      });
    });
  }
  canDeactivate() {
    return super.canDeactivate() && !this.assetChanges.assets && !this.assetChanges.featuredAsset;
  }
  toggleLivePreview() {
    this.livePreview = !this.livePreview;
    this.localStorageService.set("livePreviewCollectionContents", this.livePreview);
  }
  trackByFn(index, item) {
    return JSON.stringify(item);
  }
  /**
   * Sets the values of the form on changes to the category or current language.
   */
  setFormValues(entity, languageCode) {
    const currentTranslation = findTranslation(entity, languageCode);
    this.detailForm.patchValue({
      name: currentTranslation ? currentTranslation.name : "",
      slug: currentTranslation ? currentTranslation.slug : "",
      description: currentTranslation ? currentTranslation.description : "",
      visible: !entity.isPrivate,
      inheritFilters: entity.inheritFilters
    });
    const formArray = this.detailForm.get("filters");
    if (formArray.length !== entity.filters.length) {
      formArray.clear();
      this.filters = [];
      entity.filters.forEach((f) => this.addFilter(f));
    }
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), entity, currentTranslation);
    }
  }
  /**
   * Given a category and the value of the form, this method creates an updated copy of the category which
   * can then be persisted to the API.
   */
  getUpdatedCollection(category, form, languageCode) {
    const updatedCategory = createUpdatedTranslatable({
      translatable: category,
      updatedFields: form.value,
      customFieldConfig: this.customFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: category.name || "",
        slug: category.slug || "",
        description: category.description || ""
      }
    });
    return __spreadProps(__spreadValues({}, updatedCategory), {
      assetIds: this.assetChanges.assets?.map((a) => a.id),
      featuredAssetId: this.assetChanges.featuredAsset?.id,
      isPrivate: !form.value.visible,
      filters: this.mapOperationsToInputs(this.filters, this.detailForm.value.filters)
    });
  }
  /**
   * Maps an array of conditions or actions to the input format expected by the GraphQL API.
   */
  mapOperationsToInputs(operations, formValueOperations) {
    return operations.map((o, i) => ({
      code: o.code,
      arguments: Object.entries(formValueOperations[i].args).map(([name, value], j) => ({
        name,
        value: encodeConfigArgValue(value)
      }))
    }));
  }
  static {
    this.ɵfac = function CollectionDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(LocalStorageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CollectionDetailComponent,
      selectors: [["vdr-collection-detail"]],
      viewQuery: function CollectionDetailComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c18, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentsComponent = _t.first);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 74,
      vars: 89,
      consts: [["updateButton", ""], ["private", ""], ["noInherit", ""], ["collectionContents", ""], [3, "languageCodeChange", "disabled", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "collection-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], ["for", "visibility", 3, "label"], ["type", "checkbox", "clrToggle", "", "formControlName", "visible", "id", "visibility", 3, "vdrDisabled"], [1, "visible-toggle"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "input", "readonly"], ["for", "slug", 3, "label", "errors"], ["id", "slug", "type", "text", "formControlName", "slug", 3, "readonly"], ["for", "slug", 1, "form-grid-span", 3, "label"], ["formControlName", "description", 3, "readonly"], ["formGroupName", "customFields", 3, "title", 4, "ngIf"], ["locationId", "collection-detail", 3, "entity$", "detailForm"], [3, "title"], [3, "change", "assets", "featuredAsset", "updatePermissions"], ["for", "inheritFilters", 3, "label"], ["type", "checkbox", "clrToggle", "", "formControlName", "inheritFilters", "id", "inheritFilters", 3, "vdrDisabled"], ["formArrayName", "filters"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "vdrIfPermissions"], [3, "title", "paddingX"], [3, "collectionId", "parentId", "updatedFilters", "inheritFilters", "previewUpdatedFilters"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], ["role", "navigation"], [1, "collection-breadcrumbs"], [4, "ngFor", "ngForOf"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], ["formGroupName", "customFields", 3, "title"], ["entityName", "Collection", 3, "customFields", "customFieldsFormGroup", "readonly"], [3, "remove", "position", "operation", "operationDefinition", "formControlName", "readonly"], ["vdrDropdownTrigger", "", 1, "btn", "btn-outline"], ["shape", "plus"], ["shape", "ellipsis-vertical"], ["vdrPosition", "bottom-left"], ["type", "button", "vdrDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "vdrDropdownItem", "", 3, "click"], [1, "ml-3"], [1, "contents-title"], ["type", "checkbox", "clrCheckbox", "", 3, "ngModelChange", "ngModelOptions", "disabled", "ngModel"]],
      template: function CollectionDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 4);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "async");
          ɵɵlistener("languageCodeChange", function CollectionDetailComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setLanguage($event));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(7, "vdr-ab-right");
          ɵɵelement(8, "vdr-action-bar-items", 5);
          ɵɵtemplate(9, CollectionDetailComponent_button_9_Template, 3, 4, "button", 6);
          ɵɵpipe(10, "async");
          ɵɵtemplate(11, CollectionDetailComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(13, "vdr-action-bar-dropdown-menu", 5);
          ɵɵelementEnd()()();
          ɵɵelementStart(14, "form", 7)(15, "vdr-page-detail-layout")(16, "vdr-page-detail-sidebar")(17, "vdr-card")(18, "vdr-form-field", 8);
          ɵɵpipe(19, "translate");
          ɵɵelementStart(20, "clr-toggle-wrapper");
          ɵɵelement(21, "input", 9);
          ɵɵpipe(22, "hasPermission");
          ɵɵelementStart(23, "label", 10);
          ɵɵtemplate(24, CollectionDetailComponent_ng_container_24_Template, 3, 3, "ng-container", 11)(25, CollectionDetailComponent_ng_template_25_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd()()()();
          ɵɵtemplate(27, CollectionDetailComponent_vdr_card_27_Template, 2, 1, "vdr-card", 12);
          ɵɵpipe(28, "async");
          ɵɵelementEnd();
          ɵɵtemplate(29, CollectionDetailComponent_vdr_page_block_29_Template, 4, 1, "vdr-page-block", 12);
          ɵɵpipe(30, "async");
          ɵɵelementStart(31, "vdr-page-block")(32, "vdr-card")(33, "div", 13)(34, "vdr-form-field", 14);
          ɵɵpipe(35, "translate");
          ɵɵelementStart(36, "input", 15);
          ɵɵpipe(37, "hasPermission");
          ɵɵlistener("input", function CollectionDetailComponent_Template_input_input_36_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.updateSlug($event.target.value));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(38, "vdr-form-field", 16);
          ɵɵpipe(39, "translate");
          ɵɵpipe(40, "translate");
          ɵɵelement(41, "input", 17);
          ɵɵpipe(42, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(43, "vdr-form-field", 18);
          ɵɵpipe(44, "translate");
          ɵɵelement(45, "vdr-rich-text-editor", 19);
          ɵɵpipe(46, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(47, CollectionDetailComponent_vdr_card_47_Template, 4, 8, "vdr-card", 20);
          ɵɵelement(48, "vdr-custom-detail-component-host", 21);
          ɵɵelementStart(49, "vdr-card", 22);
          ɵɵpipe(50, "translate");
          ɵɵelementStart(51, "vdr-assets", 23);
          ɵɵlistener("change", function CollectionDetailComponent_Template_vdr_assets_change_51_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.assetChanges = $event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(52, "vdr-card", 22);
          ɵɵpipe(53, "translate");
          ɵɵelementStart(54, "vdr-form-field", 24);
          ɵɵpipe(55, "translate");
          ɵɵelementStart(56, "clr-toggle-wrapper");
          ɵɵelement(57, "input", 25);
          ɵɵpipe(58, "hasPermission");
          ɵɵelementStart(59, "label", 10);
          ɵɵtemplate(60, CollectionDetailComponent_ng_container_60_Template, 3, 3, "ng-container", 11)(61, CollectionDetailComponent_ng_template_61_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          ɵɵelementEnd()()();
          ɵɵelementStart(63, "div", 26);
          ɵɵtemplate(64, CollectionDetailComponent_ng_container_64_Template, 3, 7, "ng-container", 27);
          ɵɵelementEnd();
          ɵɵtemplate(65, CollectionDetailComponent_div_65_Template, 10, 4, "div", 28);
          ɵɵelementEnd();
          ɵɵelementStart(66, "vdr-card", 29);
          ɵɵpipe(67, "translate");
          ɵɵelementStart(68, "vdr-collection-contents", 30, 3);
          ɵɵpipe(70, "async");
          ɵɵpipe(71, "async");
          ɵɵpipe(72, "async");
          ɵɵtemplate(73, CollectionDetailComponent_ng_template_73_Template, 10, 18, "ng-template");
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          const updateButton_r17 = ɵɵreference(12);
          const private_r18 = ɵɵreference(26);
          const noInherit_r19 = ɵɵreference(62);
          ɵɵadvance(3);
          ɵɵproperty("disabled", ɵɵpipeBind1(4, 41, ctx.isNew$))("availableLanguageCodes", ɵɵpipeBind1(5, 43, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(6, 45, ctx.languageCode$));
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(10, 47, ctx.isNew$))("ngIfElse", updateButton_r17);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(19, 49, "catalog.visibility"));
          ɵɵadvance(3);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(22, 51, ctx.updatePermission));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.detailForm.value.visible)("ngIfElse", private_r18);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(28, 53, ctx.entity$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(30, 55, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(35, 57, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(37, 59, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(39, 61, "catalog.slug"))("errors", ɵɵpureFunction1(87, _c19, ɵɵpipeBind1(40, 63, "catalog.slug-pattern-error")));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(42, 65, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(44, 67, "common.description"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(46, 69, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(50, 71, "catalog.assets"));
          ɵɵadvance(2);
          ɵɵproperty("assets", ctx.entity == null ? null : ctx.entity.assets)("featuredAsset", ctx.entity == null ? null : ctx.entity.featuredAsset)("updatePermissions", ctx.updatePermission);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(53, 73, "catalog.filters"));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(55, 75, "catalog.filter-inheritance"));
          ɵɵadvance(3);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(58, 77, ctx.updatePermission));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.detailForm.value.inheritFilters)("ngIfElse", noInherit_r19);
          ɵɵadvance(4);
          ɵɵproperty("ngForOf", ctx.filters)("ngForTrackBy", ctx.trackByFn);
          ɵɵadvance();
          ɵɵproperty("vdrIfPermissions", ctx.updatePermission);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(67, 79, "common.contents"))("paddingX", false);
          ɵɵadvance(2);
          ɵɵproperty("collectionId", ctx.id)("parentId", ɵɵpipeBind1(70, 81, ctx.parentId$))("updatedFilters", ɵɵpipeBind1(71, 83, ctx.updatedFilters$))("inheritFilters", ɵɵpipeBind1(72, 85, ctx.inheritFilters$))("previewUpdatedFilters", ctx.livePreview);
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, AssetsComponent, ConfigurableInputComponent, FormFieldComponent, FormFieldControlDirective, LanguageSelectorComponent, RichTextEditorComponent, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, CollectionContentsComponent, AsyncPipe, TranslatePipe, HasPermissionPipe],
      styles: ['@charset "UTF-8";.visible-toggle[_ngcontent-%COMP%]{margin-top:-3px!important}clr-checkbox-wrapper[_ngcontent-%COMP%]{transition:opacity .3s}clr-checkbox-wrapper.disabled[_ngcontent-%COMP%]{opacity:.5}.collection-breadcrumbs[_ngcontent-%COMP%]{list-style-type:none;background-color:var(--color-component-bg-200);padding:2px 6px;margin-bottom:6px;border-radius:var(--clr-global-borderradius)}.collection-breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.65rem;display:inline-block;margin-inline-end:10px}.collection-breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{font-weight:600}.collection-breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):after{content:"\\203a";top:0;color:var(--color-grey-400);margin-inline-start:10px}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-collection-detail",
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
            ></vdr-language-selector>
        </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="collection-detail" />
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
                    *vdrIfPermissions="updatePermission"
                    class="btn btn-primary"
                    (click)="save()"
                    [disabled]="(detailForm.invalid || detailForm.pristine) && !assetsChanged()"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="collection-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card>
                <vdr-form-field [label]="'catalog.visibility' | translate" for="visibility">
                    <clr-toggle-wrapper>
                        <input
                            type="checkbox"
                            clrToggle
                            formControlName="visible"
                            id="visibility"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        />
                        <label class="visible-toggle">
                            <ng-container *ngIf="detailForm.value.visible; else private">{{
                                'catalog.public' | translate
                            }}</ng-container>
                            <ng-template #private>{{ 'catalog.private' | translate }}</ng-template>
                        </label>
                    </clr-toggle-wrapper>
                </vdr-form-field>
            </vdr-card>
            <vdr-card *ngIf="entity$ | async as entity">
                <vdr-page-entity-info [entity]="entity"></vdr-page-entity-info>
            </vdr-card>
        </vdr-page-detail-sidebar>

        <vdr-page-block *ngIf="entity$ | async as entity"
            ><nav role="navigation">
                <ul class="collection-breadcrumbs">
                    <li *ngFor="let breadcrumb of entity.breadcrumbs; let isFirst = first; let isLast = last">
                        <a [routerLink]="['/catalog/collections']" *ngIf="isFirst">{{
                            'catalog.root-collection' | translate
                        }}</a>
                        <a
                            [routerLink]="['/catalog/collections', breadcrumb.id]"
                            *ngIf="!isFirst && !isLast"
                            >{{ breadcrumb.name | translate }}</a
                        >
                        <ng-container *ngIf="isLast">{{ breadcrumb.name | translate }}</ng-container>
                    </li>
                </ul>
            </nav>
        </vdr-page-block>

        <vdr-page-block>
            <vdr-card>
                <div class="form-grid">
                    <vdr-form-field [label]="'common.name' | translate" for="name">
                        <input
                            id="name"
                            type="text"
                            formControlName="name"
                            [readonly]="!(updatePermission | hasPermission)"
                            (input)="updateSlug($event.target.value)"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        [label]="'catalog.slug' | translate"
                        for="slug"
                        [errors]="{ pattern: ('catalog.slug-pattern-error' | translate) }"
                    >
                        <input
                            id="slug"
                            type="text"
                            formControlName="slug"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field
                        class="form-grid-span"
                        [label]="'common.description' | translate"
                        for="slug"
                    >
                        <vdr-rich-text-editor
                            formControlName="description"
                            [readonly]="!(updatePermission | hasPermission)"
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
                    entityName="Collection"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                    [readonly]="!(updatePermission | hasPermission)"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="collection-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
            <vdr-card [title]="'catalog.assets' | translate">
                <vdr-assets
                    [assets]="entity?.assets"
                    [featuredAsset]="entity?.featuredAsset"
                    [updatePermissions]="updatePermission"
                    (change)="assetChanges = $event"
                ></vdr-assets>
            </vdr-card>
            <vdr-card [title]="'catalog.filters' | translate">
                <vdr-form-field [label]="'catalog.filter-inheritance' | translate" for="inheritFilters">
                    <clr-toggle-wrapper>
                        <input
                            type="checkbox"
                            clrToggle
                            formControlName="inheritFilters"
                            id="inheritFilters"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        />
                        <label class="visible-toggle">
                            <ng-container *ngIf="detailForm.value.inheritFilters; else noInherit">{{
                                'catalog.inherit-filters-from-parent' | translate
                            }}</ng-container>
                            <ng-template #noInherit>{{
                                'catalog.do-not-inherit-filters' | translate
                            }}</ng-template>
                        </label>
                    </clr-toggle-wrapper>
                </vdr-form-field>
                <div formArrayName="filters">
                    <ng-container *ngFor="let filter of filters; index as i; trackBy: trackByFn">
                        <vdr-configurable-input
                            (remove)="removeFilter(i)"
                            [position]="i"
                            [operation]="filter"
                            [operationDefinition]="getFilterDefinition(filter)"
                            [formControlName]="i"
                            [readonly]="!(updatePermission | hasPermission)"
                        ></vdr-configurable-input>
                    </ng-container>
                </div>
                <div *vdrIfPermissions="updatePermission">
                    <vdr-dropdown>
                        <button class="btn btn-outline" vdrDropdownTrigger>
                            <clr-icon shape="plus"></clr-icon>
                            <span>{{ 'marketing.add-condition' | translate }}</span>
                            <clr-icon shape="ellipsis-vertical"></clr-icon>
                        </button>
                        <vdr-dropdown-menu vdrPosition="bottom-left">
                            <button
                                *ngFor="let filter of allFilters"
                                type="button"
                                vdrDropdownItem
                                (click)="addFilter(filter)"
                            >
                                {{ filter.description }}
                            </button>
                        </vdr-dropdown-menu>
                    </vdr-dropdown>
                </div>
            </vdr-card>

            <vdr-card [title]="'common.contents' | translate" [paddingX]="false">
                <vdr-collection-contents
                    [collectionId]="id"
                    [parentId]="parentId$ | async"
                    [updatedFilters]="updatedFilters$ | async"
                    [inheritFilters]="inheritFilters$ | async"
                    [previewUpdatedFilters]="livePreview"
                    #collectionContents
                >
                    <ng-template let-count>
                        <div class="ml-3">
                            <div class="contents-title">
                                {{ 'catalog.collection-contents' | translate }} ({{
                                    'common.results-count' | translate : { count: count }
                                }})
                            </div>
                            <clr-checkbox-wrapper [class.disabled]="detailForm.get('filters')?.pristine">
                                <input
                                    type="checkbox"
                                    clrCheckbox
                                    [ngModelOptions]="{ standalone: true }"
                                    [disabled]="detailForm.get('filters')?.pristine"
                                    [ngModel]="livePreview"
                                    (ngModelChange)="toggleLivePreview()"
                                />
                                <label>{{ 'catalog.live-preview-contents' | translate }}</label>
                            </clr-checkbox-wrapper>
                        </div>
                    </ng-template>
                </vdr-collection-contents>
            </vdr-card>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`,
      styles: ['@charset "UTF-8";.visible-toggle{margin-top:-3px!important}clr-checkbox-wrapper{transition:opacity .3s}clr-checkbox-wrapper.disabled{opacity:.5}.collection-breadcrumbs{list-style-type:none;background-color:var(--color-component-bg-200);padding:2px 6px;margin-bottom:6px;border-radius:var(--clr-global-borderradius)}.collection-breadcrumbs li{font-size:.65rem;display:inline-block;margin-inline-end:10px}.collection-breadcrumbs li:last-child{font-weight:600}.collection-breadcrumbs li:not(:last-child):after{content:"\\203a";top:0;color:var(--color-grey-400);margin-inline-start:10px}\n']
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DataService
  }, {
    type: FormBuilder
  }, {
    type: NotificationService
  }, {
    type: ModalService
  }, {
    type: LocalStorageService
  }], {
    contentsComponent: [{
      type: ViewChild,
      args: ["collectionContents"]
    }]
  });
})();
var CollectionBreadcrumbPipe = class _CollectionBreadcrumbPipe {
  transform(value) {
    return value?.breadcrumbs.slice(1, -1);
  }
  static {
    this.ɵfac = function CollectionBreadcrumbPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionBreadcrumbPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "collectionBreadcrumb",
      type: _CollectionBreadcrumbPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionBreadcrumbPipe, [{
    type: Pipe,
    args: [{
      name: "collectionBreadcrumb",
      standalone: false
    }]
  }], null, null);
})();
var MoveCollectionsDialogComponent = class _MoveCollectionsDialogComponent {
  constructor(dataService, i18nService) {
    this.dataService = dataService;
    this.i18nService = i18nService;
    this.searchTermControl = new FormControl("");
    this.currentPage$ = new BehaviorSubject(1);
    this.itemsPerPage$ = new BehaviorSubject(10);
    this.expandedIds$ = new Subject();
    this.expandedIds = [];
  }
  ngOnInit() {
    const getCollectionsResult = this.dataService.collection.getCollections();
    const searchTerm$ = this.searchTermControl.valueChanges.pipe(debounceTime(250), distinctUntilChanged(), startWith(""));
    const currentPage$ = this.currentPage$.pipe(distinctUntilChanged());
    const itemsPerPage$ = this.itemsPerPage$.pipe(distinctUntilChanged());
    combineLatest(searchTerm$, currentPage$, itemsPerPage$).subscribe(([searchTerm, currentPage, itemsPerPage]) => {
      const topLevelOnly = searchTerm === "";
      getCollectionsResult.ref.refetch({
        options: {
          skip: (currentPage - 1) * itemsPerPage,
          take: itemsPerPage,
          filter: {
            name: {
              contains: searchTerm
            }
          },
          topLevelOnly
        }
      });
    });
    const rootCollectionId$ = this.dataService.collection.getCollections({
      take: 1,
      topLevelOnly: true
    }).mapSingle((data) => data.collections.items[0].parentId);
    this.items$ = combineLatest(getCollectionsResult.mapStream(({
      collections
    }) => collections), rootCollectionId$).pipe(map(([collections, rootCollectionId]) => [...rootCollectionId ? [{
      id: rootCollectionId,
      name: this.i18nService.translate("catalog.root-collection"),
      slug: "",
      parentId: "__",
      position: 0,
      featuredAsset: null,
      children: [],
      breadcrumbs: [],
      isPrivate: false,
      createdAt: "",
      updatedAt: ""
    }] : [], ...collections.items]));
    this.totalItems$ = getCollectionsResult.mapStream((data) => data.collections.totalItems);
    this.subCollections$ = this.expandedIds$.pipe(tap((val) => this.expandedIds = val), switchMap((ids) => {
      if (ids.length) {
        return this.dataService.collection.getCollections({
          take: 999,
          filter: {
            parentId: {
              in: ids
            }
          }
        }).mapStream((data) => data.collections.items);
      } else {
        return of([]);
      }
    }));
  }
  toggleExpanded(collection) {
    let expandedIds = this.expandedIds;
    if (!expandedIds.includes(collection.id)) {
      expandedIds.push(collection.id);
    } else {
      expandedIds = expandedIds.filter((id) => id !== collection.id);
    }
    this.expandedIds$.next(expandedIds);
  }
  static {
    this.ɵfac = function MoveCollectionsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MoveCollectionsDialogComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(I18nService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MoveCollectionsDialogComponent,
      selectors: [["vdr-move-collections-dialog"]],
      standalone: false,
      decls: 21,
      vars: 33,
      consts: [["vdrDialogTitle", ""], ["id", "move-collection-list", 1, "mt-2", 3, "pageChange", "itemsPerPageChange", "items", "subCollections", "itemsPerPage", "totalItems", "currentPage"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "name", 3, "heading", "optional"], ["id", "breadcrumb", 3, "heading"], ["id", "slug", 3, "heading"], [3, "ngClass"], ["class", "child-arrow", "shape", "child-arrow", 3, "transparent", 4, "ngIf"], ["class", "icon-button folder-button", 3, "click", 4, "ngIf"], ["class", "icon-button folder-button", "disabled", "", 4, "ngIf"], [1, "button-ghost", 3, "click"], ["shape", "child-arrow", 1, "child-arrow"], [1, "icon-button", "folder-button", 3, "click"], ["shape", "folder", 4, "ngIf"], ["shape", "folder-open", 4, "ngIf"], ["shape", "folder"], ["shape", "folder-open"], ["disabled", "", 1, "icon-button", "folder-button"], ["shape", "folder", 1, "is-solid"], [1, "breadcrumb"], [4, "ngIf"], ["class", "separator", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "separator"]],
      template: function MoveCollectionsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MoveCollectionsDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "vdr-collection-data-table", 1);
          ɵɵpipe(2, "async");
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "async");
          ɵɵlistener("pageChange", function MoveCollectionsDialogComponent_Template_vdr_collection_data_table_pageChange_1_listener($event) {
            return ctx.currentPage$.next($event);
          })("itemsPerPageChange", function MoveCollectionsDialogComponent_Template_vdr_collection_data_table_itemsPerPageChange_1_listener($event) {
            return ctx.itemsPerPage$.next($event);
          });
          ɵɵelement(7, "vdr-dt2-search", 2);
          ɵɵpipe(8, "translate");
          ɵɵelementStart(9, "vdr-dt2-column", 3);
          ɵɵpipe(10, "translate");
          ɵɵtemplate(11, MoveCollectionsDialogComponent_ng_template_11_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(12, "vdr-dt2-column", 4);
          ɵɵpipe(13, "translate");
          ɵɵtemplate(14, MoveCollectionsDialogComponent_ng_template_14_Template, 8, 10, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-dt2-column", 5);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, MoveCollectionsDialogComponent_ng_template_17_Template, 3, 3, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 6);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, MoveCollectionsDialogComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("items", ɵɵpipeBind1(2, 13, ctx.items$))("subCollections", ɵɵpipeBind1(3, 15, ctx.subCollections$))("itemsPerPage", ɵɵpipeBind1(4, 17, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(5, 19, ctx.totalItems$))("currentPage", ɵɵpipeBind1(6, 21, ctx.currentPage$));
          ɵɵadvance(6);
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(8, 23, "common.search-by-name"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(10, 25, "common.id"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(13, 27, "common.name"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 29, "common.breadcrumb"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 31, "common.slug"));
        }
      },
      dependencies: [ClrIconCustomTag, NgClass, NgForOf, NgIf, DialogTitleDirective, DataTable2ColumnComponent, DataTable2SearchComponent, CollectionDataTableComponent, AsyncPipe, TranslatePipe, CollectionBreadcrumbPipe],
      styles: ["[_nghost-%COMP%]{--indent-spacing: 18px}.indent-1[_ngcontent-%COMP%]{padding-inline-start:var(--indent-spacing)}.indent-2[_ngcontent-%COMP%]{padding-inline-start:calc(var(--indent-spacing) * 2)}.indent-3[_ngcontent-%COMP%]{padding-inline-start:calc(var(--indent-spacing) * 3)}.indent-4[_ngcontent-%COMP%], .indent-5[_ngcontent-%COMP%], .indent-6[_ngcontent-%COMP%], .indent-7[_ngcontent-%COMP%], .indent-8[_ngcontent-%COMP%], .indent-9[_ngcontent-%COMP%]{padding-inline-start:calc(var(--indent-spacing) * 4)}.child-arrow[_ngcontent-%COMP%]{margin:1px 6px}.child-arrow.transparent[_ngcontent-%COMP%]{opacity:0}.breadcrumb[_ngcontent-%COMP%]{display:flex}.separator[_ngcontent-%COMP%]{color:var(--color-weight-500);margin:0 3px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoveCollectionsDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-move-collections-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    {{ 'catalog.move-collections' | translate }}
</ng-template>
<vdr-collection-data-table
    class="mt-2"
    id="move-collection-list"
    [items]="items$ | async"
    [subCollections]="subCollections$ | async"
    [itemsPerPage]="itemsPerPage$ | async"
    [totalItems]="totalItems$ | async"
    [currentPage]="currentPage$ | async"
    (pageChange)="currentPage$.next($event)"
    (itemsPerPageChange)="itemsPerPage$.next($event)"
>
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'common.search-by-name' | translate"
    ></vdr-dt2-search>
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
        <ng-template let-collection="item">
            {{ collection.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false">
        <ng-template let-collection="item" let-depth="depth">
            <div [ngClass]="'indent-' + depth"></div>
            <clr-icon
                class="child-arrow"
                [class.transparent]="depth === 0"
                shape="child-arrow"
                *ngIf="!collection.children?.length && collection.parentId !== '__'"
            ></clr-icon>
            <button
                class="icon-button folder-button"
                *ngIf="collection.children?.length"
                (click)="toggleExpanded(collection)"
            >
                <clr-icon shape="folder" *ngIf="!expandedIds.includes(collection.id)"></clr-icon>
                <clr-icon shape="folder-open" *ngIf="expandedIds.includes(collection.id)"></clr-icon>
            </button>
            <button class="icon-button folder-button" *ngIf="collection.parentId === '__'" disabled>
                <clr-icon shape="folder" class="is-solid"></clr-icon>
            </button>
            <button class="button-ghost" (click)="resolveWith(collection)">
                <span>{{ 'catalog.move-collection-to' | translate : {name: collection.name} }}</span>
            </button>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.breadcrumb' | translate" id="breadcrumb">
        <ng-template let-collection="item">
            <div class="breadcrumb">
                <ng-container *ngIf="collection | collectionBreadcrumb as breadcrumbs">
                    <ng-container *ngIf="breadcrumbs.length">
                        <div *ngFor="let item of breadcrumbs">
                            <span class="separator">/</span>{{ item.name }}
                        </div>
                    </ng-container>
                    <span class="separator" *ngIf="!breadcrumbs.length">/</span>
                </ng-container>
            </div>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.slug' | translate" id="slug">
        <ng-template let-collection="item">
            {{ collection.slug }}
        </ng-template>
    </vdr-dt2-column>
</vdr-collection-data-table>
`,
      styles: [":host{--indent-spacing: 18px}.indent-1{padding-inline-start:var(--indent-spacing)}.indent-2{padding-inline-start:calc(var(--indent-spacing) * 2)}.indent-3{padding-inline-start:calc(var(--indent-spacing) * 3)}.indent-4,.indent-5,.indent-6,.indent-7,.indent-8,.indent-9{padding-inline-start:calc(var(--indent-spacing) * 4)}.child-arrow{margin:1px 6px}.child-arrow.transparent{opacity:0}.breadcrumb{display:flex}.separator{color:var(--color-weight-500);margin:0 3px}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: I18nService
  }], null);
})();
var deleteCollectionsBulkAction = createBulkDeleteAction({
  location: "collection-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteCollection) || userPermissions.includes(Permission.DeleteCatalog),
  getItemName: (item) => item.name,
  bulkDelete: (dataService, ids) => dataService.collection.deleteCollections(ids).pipe(map((res) => res.deleteCollections))
});
var moveCollectionsBulkAction = {
  location: "collection-list",
  label: marker("catalog.move-collections"),
  icon: "drag-handle",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateCollection),
  onClick: ({
    injector,
    selection,
    hostComponent,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    const dataService = injector.get(DataService);
    const notificationService = injector.get(NotificationService);
    modalService.fromComponent(MoveCollectionsDialogComponent, {
      size: "xl",
      closable: true
    }).pipe(switchMap((result) => {
      if (result) {
        const inputs = selection.map((c) => ({
          collectionId: c.id,
          parentId: result.id,
          index: 0
        }));
        return dataService.collection.moveCollection(inputs);
      } else {
        return EMPTY;
      }
    })).subscribe((result) => {
      notificationService.success(marker("catalog.move-collections-success"), {
        count: selection.length
      });
      clearSelection();
      hostComponent.refresh();
    });
  }
};
var assignCollectionsToChannelBulkAction = createBulkAssignToChannelAction({
  location: "collection-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateCollection),
  getItemName: (item) => item.name,
  bulkAssignToChannel: (dataService, collectionIds, channelIds) => channelIds.map((channelId) => dataService.collection.assignCollectionsToChannel({
    collectionIds,
    channelId
  }).pipe(map((res) => res.assignCollectionsToChannel)))
});
var removeCollectionsFromChannelBulkAction = createBulkRemoveFromChannelAction({
  location: "collection-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteCatalog) || userPermissions.includes(Permission.DeleteCollection),
  getItemName: (item) => item.name,
  bulkRemoveFromChannel: (dataService, collectionIds, channelId) => dataService.collection.removeCollectionsFromChannel({
    channelId,
    collectionIds
  }).pipe(map((res) => res.removeCollectionsFromChannel))
});
var duplicateCollectionsBulkAction = {
  location: "collection-list",
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
        entityName: "Collection",
        title: marker("catalog.duplicate-collections"),
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
var CollectionListComponent = class _CollectionListComponent extends TypedBaseListComponent {
  constructor(dataService, notificationService) {
    super();
    this.dataService = dataService;
    this.notificationService = notificationService;
    this.expandedIds = [];
    this.dataTableListId = "collection-list";
    this.customFields = this.getCustomFieldConfig("Collection");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "slug",
      label: marker("common.slug"),
      type: {
        kind: "text"
      },
      filterField: "slug"
    }).addFilter({
      name: "visibility",
      type: {
        kind: "boolean"
      },
      label: marker("common.visibility"),
      toFilterInput: (value) => ({
        isPrivate: {
          eq: !value
        }
      })
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("position", "ASC").addSort({
      name: "createdAt"
    }).addSort({
      name: "updatedAt"
    }).addSort({
      name: "name"
    }).addSort({
      name: "slug"
    }).addSort({
      name: "position"
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetCollectionListDocument,
      getItems: (data) => data.collections,
      setVariables: (skip2, _take) => {
        const topLevelOnly = this.searchTermControl.value === "" && this.filters.activeFilters.length === 0 ? true : void 0;
        return {
          options: {
            skip: skip2,
            take: _take,
            filter: __spreadValues({
              name: {
                contains: this.searchTermControl.value
              }
            }, this.filters.createFilterInput()),
            topLevelOnly,
            sort: this.sorts.createSortInput()
          }
        };
      },
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.activeCollectionId$ = this.route.paramMap.pipe(map((pm) => pm.get("contents")), distinctUntilChanged());
    const expandedIds$ = this.route.queryParamMap.pipe(map((qpm) => qpm.get("expanded")), distinctUntilChanged(), map((ids) => ids ? ids.split(",") : []));
    expandedIds$.pipe(takeUntil(this.destroy$)).subscribe((ids) => {
      this.expandedIds = ids;
    });
    this.subCollections$ = combineLatest(expandedIds$, this.refresh$).pipe(switchMap(([ids]) => {
      if (ids.length) {
        return this.dataService.collection.getCollections({
          take: 999,
          filter: {
            parentId: {
              in: ids
            }
          }
        }).mapStream((data) => data.collections.items);
      } else {
        return of([]);
      }
    }));
    this.activeCollectionTitle$ = combineLatest(this.activeCollectionId$, this.items$, this.subCollections$).pipe(map(([id, collections, subCollections]) => {
      if (id) {
        const match = [...collections, ...subCollections].find((c) => c.id === id);
        return match ? match.name : "";
      }
      return "";
    }));
    this.activeCollectionIndex$ = combineLatest(this.activeCollectionId$, this.items$, this.subCollections$).pipe(map(([id, collections, subCollections]) => {
      if (id) {
        const allCollections = [];
        for (const collection of collections) {
          allCollections.push(collection);
          const subCollectionMatches = subCollections.filter((c) => c.parentId && c.parentId === collection.id);
          allCollections.push(...subCollectionMatches);
        }
        return allCollections.findIndex((c) => c.id === id);
      }
      return -1;
    }));
  }
  onRearrange(event) {
    this.dataService.collection.moveCollection([event]).subscribe({
      next: () => {
        this.notificationService.success(marker("common.notify-saved-changes"));
        this.refresh();
      },
      error: (err) => {
        this.notificationService.error(marker("common.notify-save-changes-error"));
      }
    });
  }
  closeContents() {
    const params = __spreadValues({}, this.route.snapshot.params);
    delete params.contents;
    this.router.navigate(["./", params], {
      relativeTo: this.route,
      queryParamsHandling: "preserve"
    });
  }
  setLanguage(code) {
    this.dataService.client.setContentLanguage(code).subscribe();
  }
  toggleExpanded(collection) {
    let expandedIds = this.expandedIds;
    if (!expandedIds.includes(collection.id)) {
      expandedIds.push(collection.id);
    } else {
      expandedIds = expandedIds.filter((id) => id !== collection.id);
    }
    this.router.navigate(["./"], {
      queryParams: {
        expanded: expandedIds.filter((id) => !!id).join(",")
      },
      queryParamsHandling: "merge",
      relativeTo: this.route
    });
  }
  static {
    this.ɵfac = function CollectionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionListComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CollectionListComponent,
      selectors: [["vdr-collection-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 15,
      vars: 14,
      consts: [[3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "collection-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [3, "closeClicked", "rightPanelOpen"], ["vdrSplitViewLeft", ""], ["vdrSplitViewRight", "", 3, "splitViewTitle"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "changeOrder", "visibleColumnsChange", "id", "items", "subCollections", "itemsPerPage", "totalItems", "currentPage", "filters", "activeIndex"], ["locationId", "collection-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "position", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "breadcrumb", 3, "heading"], ["id", "slug", 3, "heading", "sort"], ["id", "visibility", 3, "heading"], ["id", "view-contents", 3, "heading", "optional"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "child-arrow", "shape", "child-arrow", 3, "transparent", 4, "ngIf"], ["class", "icon-button folder-button", 3, "click", 4, "ngIf"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["shape", "child-arrow", 1, "child-arrow"], [1, "icon-button", "folder-button", 3, "click"], ["shape", "folder", 4, "ngIf"], ["shape", "folder-open", 4, "ngIf"], ["shape", "folder"], ["shape", "folder-open"], [1, "breadcrumb"], [4, "ngIf"], ["class", "separator", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "separator"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning"], ["colorType", "success"], ["queryParamsHandling", "merge", 1, "button-small", "bg-weight-150", 3, "routerLink", "queryParams"], ["shape", "file-group"], [3, "customField", "sorts"], [3, "collectionId"]],
      template: function CollectionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 0);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵlistener("languageCodeChange", function CollectionListComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(6, "vdr-ab-right");
          ɵɵelement(7, "vdr-action-bar-items", 1);
          ɵɵtemplate(8, CollectionListComponent_a_8_Template, 4, 5, "a", 2);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 1);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "vdr-split-view", 3);
          ɵɵpipe(11, "async");
          ɵɵlistener("closeClicked", function CollectionListComponent_Template_vdr_split_view_closeClicked_10_listener() {
            return ctx.closeContents();
          });
          ɵɵtemplate(12, CollectionListComponent_ng_template_12_Template, 38, 65, "ng-template", 4)(13, CollectionListComponent_ng_template_13_Template, 2, 3, "ng-template", 5);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(4, 5, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(5, 7, ctx.contentLanguage$));
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(13, _c25));
          ɵɵadvance(2);
          ɵɵproperty("rightPanelOpen", ɵɵpipeBind1(11, 9, ctx.activeCollectionId$));
          ɵɵadvance(3);
          ɵɵproperty("splitViewTitle", ɵɵpipeBind1(14, 11, ctx.activeCollectionTitle$));
        }
      },
      dependencies: [ClrIconCustomTag, NgClass, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, LanguageSelectorComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, SplitViewComponent, SplitViewLeftDirective, SplitViewRightDirective, PageBlockComponent, CollectionContentsComponent, CollectionDataTableComponent, AsyncPipe, TranslatePipe, LocaleDatePipe, CollectionBreadcrumbPipe],
      styles: [_c30],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-collection-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left>
            <vdr-language-selector
                [availableLanguageCodes]="availableLanguages$ | async"
                [currentLanguageCode]="contentLanguage$ | async"
                (languageCodeChange)="setLanguage($event)"
            ></vdr-language-selector>
        </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="collection-list" />
            <a
                class="btn btn-primary"
                *vdrIfPermissions="['CreateCatalog', 'CreateCollection']"
                [routerLink]="['./create']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'catalog.create-new-collection' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="collection-list" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<vdr-split-view [rightPanelOpen]="activeCollectionId$ | async" (closeClicked)="closeContents()">
    <ng-template vdrSplitViewLeft>
        <vdr-collection-data-table
            class="mt-2"
            [id]="dataTableListId"
            [items]="items$ | async"
            [subCollections]="subCollections$ | async"
            [itemsPerPage]="itemsPerPage$ | async"
            [totalItems]="totalItems$ | async"
            [currentPage]="currentPage$ | async"
            [filters]="filters"
            [activeIndex]="activeCollectionIndex$ | async"
            (pageChange)="setPageNumber($event)"
            (itemsPerPageChange)="setItemsPerPage($event)"
            (changeOrder)="onRearrange($event)"
            (visibleColumnsChange)="setVisibleColumns($event)"
        >
            <vdr-bulk-action-menu
                locationId="collection-list"
                [hostComponent]="this"
                [selectionManager]="selectionManager"
            ></vdr-bulk-action-menu>
            <vdr-dt2-search
                [searchTermControl]="searchTermControl"
                [searchTermPlaceholder]="'common.search-by-name' | translate"
            ></vdr-dt2-search>
            <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true">
                <ng-template let-collection="item">
                    {{ collection.id }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column
                [heading]="'common.created-at' | translate" id="created-at"
                [hiddenByDefault]="true"
                [sort]="sorts.get('createdAt')"
            >
                <ng-template let-collection="item">
                    {{ collection.createdAt | localeDate : 'short' }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column
                [heading]="'common.updated-at' | translate" id="updated-at"
                [hiddenByDefault]="true"
                [sort]="sorts.get('updatedAt')"
            >
                <ng-template let-collection="item">
                    {{ collection.updatedAt | localeDate : 'short' }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column
                [heading]="'common.position' | translate" id="position"
                [hiddenByDefault]="true"
                [sort]="sorts.get('position')"
            >
                <ng-template let-collection="item">
                    {{ collection.position }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column
                [heading]="'common.name' | translate" id="name"
                [optional]="false"
                [sort]="sorts.get('name')"
            >
                <ng-template let-collection="item" let-depth="depth">
                    <div [ngClass]="'indent-' + depth"></div>
                    <clr-icon
                        class="child-arrow"
                        [class.transparent]="depth === 0"
                        shape="child-arrow"
                        *ngIf="!collection.children?.length"
                    ></clr-icon>
                    <button
                        class="icon-button folder-button"
                        *ngIf="collection.children?.length"
                        (click)="toggleExpanded(collection)"
                    >
                        <clr-icon shape="folder" *ngIf="!expandedIds.includes(collection.id)"></clr-icon>
                        <clr-icon shape="folder-open" *ngIf="expandedIds.includes(collection.id)"></clr-icon>
                    </button>
                    <a class="button-ghost" [routerLink]="['./', collection.id]"
                        ><span>{{ collection.name }}</span>
                        <clr-icon shape="arrow right"></clr-icon>
                    </a>
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.breadcrumb' | translate" id="breadcrumb">
                <ng-template let-collection="item">
                    <div class="breadcrumb">
                        <ng-container *ngIf="collection | collectionBreadcrumb as breadcrumbs">
                            <ng-container *ngIf="breadcrumbs.length">
                                <div *ngFor="let item of breadcrumbs">
                                    <span class="separator">/</span>{{ item.name }}
                                </div>
                            </ng-container>
                            <span class="separator" *ngIf="!breadcrumbs.length">/</span>
                        </ng-container>
                    </div>
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.slug' | translate" id="slug" [sort]="sorts.get('slug')">
                <ng-template let-collection="item">
                    {{ collection.slug }}
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.visibility' | translate" id="visibility">
                <ng-template let-collection="item">
                    <vdr-chip *ngIf="collection.isPrivate" colorType="warning">{{
                        'common.private' | translate
                        }}</vdr-chip>
                    <vdr-chip *ngIf="!collection.isPrivate" colorType="success">{{
                        'common.public' | translate
                        }}</vdr-chip>
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-column [heading]="'common.view-contents' | translate" id="view-contents" [optional]="false">
                <ng-template let-collection="item">
                    <a
                        class="button-small bg-weight-150"
                        [routerLink]="['./', { contents: collection.id }]"
                        [queryParams]="{ contentsPage: 1 }"
                        queryParamsHandling="merge"
                    >
                        <span>{{ 'common.view-contents' | translate }}</span>
                        <clr-icon shape="file-group"></clr-icon>
                    </a>
                </ng-template>
            </vdr-dt2-column>
            <vdr-dt2-custom-field-column
                *ngFor="let customField of customFields"
                [customField]="customField"
                [sorts]="sorts"
            />
        </vdr-collection-data-table>
    </ng-template>
    <ng-template vdrSplitViewRight [splitViewTitle]="activeCollectionTitle$ | async">
        <ng-container *ngIf="activeCollectionId$ | async as activeGroup">
            <vdr-collection-contents [collectionId]="activeCollectionId$ | async"></vdr-collection-contents>
        </ng-container>
    </ng-template>
</vdr-split-view>
`,
      styles: [":host{--indent-spacing: 18px}.indent-1{padding-inline-start:var(--indent-spacing)}.indent-2{padding-inline-start:calc(var(--indent-spacing) * 2)}.indent-3{padding-inline-start:calc(var(--indent-spacing) * 3)}.indent-4,.indent-5,.indent-6,.indent-7,.indent-8,.indent-9{padding-inline-start:calc(var(--indent-spacing) * 4)}.child-arrow{margin:1px 6px}.child-arrow.transparent{opacity:0}.breadcrumb{display:flex}.separator{color:var(--color-weight-500);margin:0 3px}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: NotificationService
  }], null);
})();
var CollectionTreeService = class _CollectionTreeService {
  constructor() {
    this.allMoveListItems = [];
    this._rearrange$ = new Subject();
    this._delete$ = new Subject();
    this.rearrange$ = this._rearrange$.asObservable();
    this.delete$ = this._delete$.asObservable();
  }
  ngOnDestroy() {
    this._rearrange$.complete();
    this._delete$.complete();
  }
  setCollectionTree(tree) {
    this.collectionTree = tree;
  }
  resetMoveList() {
    this.allMoveListItems = [];
  }
  getMoveListItems(collection) {
    if (this.allMoveListItems.length === 0) {
      this.allMoveListItems = this.calculateAllMoveListItems();
    }
    return this.allMoveListItems.filter((item) => item.id !== collection.id && !item.ancestorIdPath.has(collection.id) && item.id !== collection.parent?.id);
  }
  onDrop(event) {
    const item = event.item.data;
    const newParent = event.container.data;
    const newParentId = newParent.id;
    if (newParentId == null) {
      throw new Error(`Could not determine the ID of the root Collection`);
    }
    this._rearrange$.next({
      collectionId: item.id,
      parentId: newParentId,
      index: event.currentIndex
    });
  }
  onMove(event) {
    this._rearrange$.next(event);
  }
  onDelete(id) {
    this._delete$.next(id);
  }
  calculateAllMoveListItems() {
    const visit = (node, parentPath, ancestorIdPath, output) => {
      const path = parentPath.concat(node.name);
      output.push({
        path: path.slice(1).join(" / ") || "root",
        id: node.id,
        ancestorIdPath
      });
      node.children.forEach((child) => visit(child, path, /* @__PURE__ */ new Set([...ancestorIdPath, node.id]), output));
      return output;
    };
    return visit(this.collectionTree, [], /* @__PURE__ */ new Set(), []);
  }
  static {
    this.ɵfac = function CollectionTreeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionTreeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CollectionTreeService,
      factory: _CollectionTreeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionTreeService, [{
    type: Injectable
  }], () => [], null);
})();
var CollectionTreeNodeComponent = class _CollectionTreeNodeComponent {
  constructor(parent, dataService, collectionTreeService, router, route, changeDetectorRef) {
    this.parent = parent;
    this.dataService = dataService;
    this.collectionTreeService = collectionTreeService;
    this.router = router;
    this.route = route;
    this.changeDetectorRef = changeDetectorRef;
    this.depth = 0;
    this.expandAll = false;
    this.moveListItems = [];
    if (parent) {
      this.depth = parent.depth + 1;
    }
  }
  ngOnInit() {
    this.parentName = this.collectionTree.name || "<root>";
    const permissions$ = this.dataService.client.userStatus().mapStream((data) => data.userStatus.permissions).pipe(shareReplay(1));
    this.hasUpdatePermission$ = permissions$.pipe(map((perms) => perms.includes(Permission.UpdateCatalog) || perms.includes(Permission.UpdateCollection)));
    this.hasDeletePermission$ = permissions$.pipe(map((perms) => perms.includes(Permission.DeleteCatalog) || perms.includes(Permission.DeleteCollection)));
    this.subscription = this.selectionManager?.selectionChanges$.subscribe(() => this.changeDetectorRef.markForCheck());
  }
  ngOnChanges(changes) {
    const expandAllChange = changes["expandAll"];
    if (expandAllChange) {
      if (expandAllChange.previousValue === true && expandAllChange.currentValue === false) {
        this.collectionTree.children.forEach((c) => c.expanded = false);
      }
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  trackByFn(index, item) {
    return item.id;
  }
  toggleExpanded(collection) {
    collection.expanded = !collection.expanded;
    let expandedIds = this.route.snapshot.queryParamMap.get("expanded")?.split(",") ?? [];
    if (collection.expanded) {
      expandedIds.push(collection.id);
    } else {
      expandedIds = expandedIds.filter((id) => id !== collection.id);
    }
    this.router.navigate(["./"], {
      queryParams: {
        expanded: expandedIds.filter((id) => !!id).join(",")
      },
      queryParamsHandling: "merge",
      relativeTo: this.route
    });
  }
  getMoveListItems(collection) {
    this.moveListItems = this.collectionTreeService.getMoveListItems(collection);
  }
  move(collection, parentId) {
    this.collectionTreeService.onMove({
      index: 0,
      parentId,
      collectionId: collection.id
    });
  }
  moveUp(collection, currentIndex) {
    if (!collection.parent) {
      return;
    }
    this.collectionTreeService.onMove({
      index: currentIndex - 1,
      parentId: collection.parent.id,
      collectionId: collection.id
    });
  }
  moveDown(collection, currentIndex) {
    if (!collection.parent) {
      return;
    }
    this.collectionTreeService.onMove({
      index: currentIndex + 1,
      parentId: collection.parent.id,
      collectionId: collection.id
    });
  }
  drop(event) {
    moveItemInArray(this.collectionTree.children, event.previousIndex, event.currentIndex);
    this.collectionTreeService.onDrop(event);
  }
  delete(id) {
    this.collectionTreeService.onDelete(id);
  }
  static {
    this.ɵfac = function CollectionTreeNodeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionTreeNodeComponent)(ɵɵdirectiveInject(_CollectionTreeNodeComponent, 12), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(CollectionTreeService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CollectionTreeNodeComponent,
      selectors: [["vdr-collection-tree-node"]],
      inputs: {
        collectionTree: "collectionTree",
        activeCollectionId: "activeCollectionId",
        expandAll: "expandAll",
        selectionManager: "selectionManager"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 4,
      vars: 6,
      consts: [["dropList", ""], ["folderSpacer", ""], ["cdkDropList", "", 1, "tree-node", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListDisabled"], ["class", "collection", "cdkDrag", "", 3, "private", "cdkDragData", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cdkDrag", "", 1, "collection", 3, "cdkDragData"], [1, "collection-detail", 3, "ngClass"], ["type", "checkbox", "clrCheckbox", "", 3, "click", "checked"], [1, "name"], ["class", "icon-button folder-button", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "flex-spacer"], [4, "ngIf"], ["queryParamsHandling", "preserve", 1, "btn", "btn-link", "btn-sm", 3, "routerLink"], ["shape", "view-list"], [1, "btn", "btn-link", "btn-sm", 3, "routerLink"], ["shape", "edit"], ["class", "drag-handle", "cdkDragHandle", "", 4, "vdrIfPermissions"], ["vdrDropdownTrigger", "", 1, "icon-button", 3, "click"], ["shape", "ellipsis-vertical"], ["vdrPosition", "bottom-right"], ["class", "dropdown-item", 3, "routerLink", 4, "vdrIfPermissions"], [1, "dropdown-divider"], ["type", "button", "vdrDropdownItem", "", 3, "click", "disabled"], ["shape", "caret up"], ["shape", "caret down"], [1, "dropdown-header"], ["type", "button", "vdrDropdownItem", "", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["vdrDropdownItem", "", 1, "button", 3, "click", "disabled"], ["shape", "trash", 1, "is-danger"], [3, "expandAll", "collectionTree", "activeCollectionId", "selectionManager", 4, "ngIf"], [1, "icon-button", "folder-button", 3, "click", "disabled"], ["shape", "folder", 4, "ngIf"], ["shape", "folder-open", 4, "ngIf"], ["shape", "folder"], ["shape", "folder-open"], [1, "folder-button-spacer"], ["cdkDragHandle", "", 1, "drag-handle"], ["shape", "drag-handle", "size", "24"], [1, "dropdown-item", 3, "routerLink"], ["shape", "plus"], [1, "move-to-item"], [1, "move-icon"], ["shape", "child-arrow"], [1, "path"], [3, "expandAll", "collectionTree", "activeCollectionId", "selectionManager"]],
      template: function CollectionTreeNodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 2, 0);
          ɵɵpipe(2, "async");
          ɵɵlistener("cdkDropListDropped", function CollectionTreeNodeComponent_Template_div_cdkDropListDropped_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.drop($event));
          });
          ɵɵtemplate(3, CollectionTreeNodeComponent_div_3_Template, 47, 52, "div", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("cdkDropListData", ctx.collectionTree)("cdkDropListDisabled", !ɵɵpipeBind1(2, 4, ctx.hasUpdatePermission$));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.collectionTree.children)("ngForTrackBy", ctx.trackByFn);
        }
      },
      dependencies: [ClrIconCustomTag, ClrCheckbox, NgClass, NgForOf, NgIf, RouterLink, CdkDropList, CdkDrag, CdkDragHandle, ChipComponent, FormFieldControlDirective, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, IfPermissionsDirective, _CollectionTreeNodeComponent, AsyncPipe, TranslatePipe],
      styles: ["[_nghost-%COMP%]{display:block}.collection[_ngcontent-%COMP%]{background-color:var(--clr-table-bgcolor);border-radius:var(--clr-global-borderradius);font-size:.65rem;transition:transform .25s cubic-bezier(0,0,.2,1);margin-bottom:2px;border-inline-start:2px solid transparent;transition:border-left-color .2s}.collection.private[_ngcontent-%COMP%]{background-color:var(--color-component-bg-200)}.collection[_ngcontent-%COMP%]   .collection-detail[_ngcontent-%COMP%]{padding:6px 12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--color-component-border-100)}.collection[_ngcontent-%COMP%]   .collection-detail.active[_ngcontent-%COMP%]{background-color:var(--clr-global-selection-color)}.collection[_ngcontent-%COMP%]   .collection-detail.depth-1[_ngcontent-%COMP%]{padding-inline-start:36px}.collection[_ngcontent-%COMP%]   .collection-detail.depth-2[_ngcontent-%COMP%]{padding-inline-start:60px}.collection[_ngcontent-%COMP%]   .collection-detail.depth-3[_ngcontent-%COMP%]{padding-inline-start:84px}.collection[_ngcontent-%COMP%]   .collection-detail.depth-4[_ngcontent-%COMP%]{padding-inline-start:108px}.collection[_ngcontent-%COMP%]   .collection-detail[_ngcontent-%COMP%]   .folder-button-spacer[_ngcontent-%COMP%]{display:inline-block;width:28px}.tree-node[_ngcontent-%COMP%]{display:block;background-color:var(--clr-table-bgcolor);border-radius:var(--clr-global-borderradius);overflow:hidden}.tree-node.cdk-drop-list-dragging[_ngcontent-%COMP%] > .collection[_ngcontent-%COMP%]{border-left-color:var(--color-primary-300)}.drag-placeholder[_ngcontent-%COMP%]{min-height:120px;background-color:var(--color-component-bg-300);transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.move-to-item[_ngcontent-%COMP%]{display:flex;white-space:normal;align-items:baseline}.move-to-item[_ngcontent-%COMP%]   .move-icon[_ngcontent-%COMP%]{flex:none;margin-inline-end:3px}.move-to-item[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%]{line-height:18px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionTreeNodeComponent, [{
    type: Component,
    args: [{
      selector: "vdr-collection-tree-node",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
    cdkDropList
    class="tree-node"
    #dropList
    [cdkDropListData]="collectionTree"
    [cdkDropListDisabled]="!(hasUpdatePermission$ | async)"
    (cdkDropListDropped)="drop($event)"
>
    <div
        class="collection"
        [class.private]="collection.isPrivate"
        *ngFor="let collection of collectionTree.children; index as i; trackBy: trackByFn"
        cdkDrag
        [cdkDragData]="collection"
    >
        <div
            class="collection-detail"
            [ngClass]="'depth-' + depth"
            [class.active]="collection.id === activeCollectionId"
        >
            <div>
                <input
                    type="checkbox"
                    clrCheckbox
                    [checked]="selectionManager.isSelected(collection)"
                    (click)="selectionManager.toggleSelection(collection, $event)"
                />
            </div>
            <div class="name">
                <button
                    class="icon-button folder-button"
                    [disabled]="expandAll"
                    *ngIf="collection.children?.length; else folderSpacer"
                    (click)="toggleExpanded(collection)"
                >
                    <clr-icon shape="folder" *ngIf="!collection.expanded && !expandAll"></clr-icon>
                    <clr-icon shape="folder-open" *ngIf="collection.expanded || expandAll"></clr-icon>
                </button>
                <ng-template #folderSpacer>
                    <div class="folder-button-spacer"></div>
                </ng-template>
                {{ collection.name }}
            </div>
            <div class="flex-spacer"></div>
            <vdr-chip *ngIf="collection.isPrivate">{{ 'catalog.private' | translate }}</vdr-chip>
            <a
                class="btn btn-link btn-sm"
                [routerLink]="['./', { contents: collection.id }]"
                queryParamsHandling="preserve"
            >
                <clr-icon shape="view-list"></clr-icon>
                {{ 'catalog.view-contents' | translate }}
            </a>
            <a class="btn btn-link btn-sm" [routerLink]="['/catalog/collections/', collection.id]">
                <clr-icon shape="edit"></clr-icon>
                {{ 'common.edit' | translate }}
            </a>
            <div class="drag-handle" cdkDragHandle *vdrIfPermissions="['UpdateCatalog', 'UpdateCollection']">
                <clr-icon shape="drag-handle" size="24"></clr-icon>
            </div>
            <vdr-dropdown>
                <button class="icon-button" vdrDropdownTrigger (click)="getMoveListItems(collection)">
                    <clr-icon shape="ellipsis-vertical"></clr-icon>
                </button>
                <vdr-dropdown-menu vdrPosition="bottom-right">
                    <a
                        class="dropdown-item"
                        [routerLink]="['./', 'create', { parentId: collection.id }]"
                        *vdrIfPermissions="['CreateCatalog', 'CreateCollection']"
                    >
                        <clr-icon shape="plus"></clr-icon>
                        {{ 'catalog.create-new-collection' | translate }}
                    </a>
                    <div class="dropdown-divider"></div>
                    <button
                        type="button"
                        vdrDropdownItem
                        [disabled]="i === 0 || !(hasUpdatePermission$ | async)"
                        (click)="moveUp(collection, i)"
                    >
                        <clr-icon shape="caret up"></clr-icon>
                        {{ 'catalog.move-up' | translate }}
                    </button>
                    <button
                        type="button"
                        vdrDropdownItem
                        [disabled]="
                            i === collectionTree.children.length - 1 || !(hasUpdatePermission$ | async)
                        "
                        (click)="moveDown(collection, i)"
                    >
                        <clr-icon shape="caret down"></clr-icon>
                        {{ 'catalog.move-down' | translate }}
                    </button>
                    <h4 class="dropdown-header">{{ 'catalog.move-to' | translate }}</h4>
                    <button
                        type="button"
                        vdrDropdownItem
                        *ngFor="let item of moveListItems"
                        (click)="move(collection, item.id)"
                        [disabled]="!(hasUpdatePermission$ | async)"
                    >
                        <div class="move-to-item">
                            <div class="move-icon">
                                <clr-icon shape="child-arrow"></clr-icon>
                            </div>
                            <div class="path">
                                {{ item.path }}
                            </div>
                        </div>
                    </button>
                    <div class="dropdown-divider"></div>
                    <button
                        class="button"
                        vdrDropdownItem
                        (click)="delete(collection.id)"
                        [disabled]="!(hasDeletePermission$ | async)"
                    >
                        <clr-icon shape="trash" class="is-danger"></clr-icon>
                        {{ 'common.delete' | translate }}
                    </button>
                </vdr-dropdown-menu>
            </vdr-dropdown>
        </div>
        <vdr-collection-tree-node
            *ngIf="collection.expanded || expandAll"
            [expandAll]="expandAll"
            [collectionTree]="collection"
            [activeCollectionId]="activeCollectionId"
            [selectionManager]="selectionManager"
        ></vdr-collection-tree-node>
    </div>
</div>
`,
      styles: [":host{display:block}.collection{background-color:var(--clr-table-bgcolor);border-radius:var(--clr-global-borderradius);font-size:.65rem;transition:transform .25s cubic-bezier(0,0,.2,1);margin-bottom:2px;border-inline-start:2px solid transparent;transition:border-left-color .2s}.collection.private{background-color:var(--color-component-bg-200)}.collection .collection-detail{padding:6px 12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--color-component-border-100)}.collection .collection-detail.active{background-color:var(--clr-global-selection-color)}.collection .collection-detail.depth-1{padding-inline-start:36px}.collection .collection-detail.depth-2{padding-inline-start:60px}.collection .collection-detail.depth-3{padding-inline-start:84px}.collection .collection-detail.depth-4{padding-inline-start:108px}.collection .collection-detail .folder-button-spacer{display:inline-block;width:28px}.tree-node{display:block;background-color:var(--clr-table-bgcolor);border-radius:var(--clr-global-borderradius);overflow:hidden}.tree-node.cdk-drop-list-dragging>.collection{border-left-color:var(--color-primary-300)}.drag-placeholder{min-height:120px;background-color:var(--color-component-bg-300);transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .tree-node:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.move-to-item{display:flex;white-space:normal;align-items:baseline}.move-to-item .move-icon{flex:none;margin-inline-end:3px}.move-to-item .path{line-height:18px}\n"]
    }]
  }], () => [{
    type: CollectionTreeNodeComponent,
    decorators: [{
      type: SkipSelf
    }, {
      type: Optional
    }]
  }, {
    type: DataService
  }, {
    type: CollectionTreeService
  }, {
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: ChangeDetectorRef
  }], {
    collectionTree: [{
      type: Input
    }],
    activeCollectionId: [{
      type: Input
    }],
    expandAll: [{
      type: Input
    }],
    selectionManager: [{
      type: Input
    }]
  });
})();
function arrayToTree(nodes, currentState, expandedIds = []) {
  const topLevelNodes = [];
  const mappedArr = {};
  const currentStateMap = treeToMap(currentState);
  for (const node of nodes) {
    mappedArr[node.id] = __spreadProps(__spreadValues({}, node), {
      children: []
    });
  }
  for (const id of nodes.map((n) => n.id)) {
    if (mappedArr.hasOwnProperty(id)) {
      const mappedElem = mappedArr[id];
      mappedElem.expanded = currentStateMap.get(id)?.expanded ?? expandedIds.includes(id);
      const parent = mappedElem.parent;
      if (!parent) {
        continue;
      }
      const parentIsRoot = !mappedArr[parent.id];
      if (!parentIsRoot) {
        if (mappedArr[parent.id]) {
          mappedArr[parent.id].children.push(mappedElem);
        } else {
          mappedArr[parent.id] = {
            children: [mappedElem]
          };
        }
      } else {
        topLevelNodes.push(mappedElem);
      }
    }
  }
  const rootId = topLevelNodes.length ? topLevelNodes[0].parent.id : void 0;
  return {
    id: rootId,
    children: topLevelNodes
  };
}
function treeToMap(tree) {
  const nodeMap = /* @__PURE__ */ new Map();
  function visit(node) {
    nodeMap.set(node.id, node);
    node.children.forEach(visit);
  }
  if (tree) {
    visit(tree);
  }
  return nodeMap;
}
var CollectionTreeComponent = class _CollectionTreeComponent {
  constructor(collectionTreeService) {
    this.collectionTreeService = collectionTreeService;
    this.expandAll = false;
    this.expandedIds = [];
    this.rearrange = new EventEmitter();
    this.deleteCollection = new EventEmitter();
  }
  ngOnChanges(changes) {
    if ("collections" in changes && this.collections) {
      this.collectionTree = arrayToTree(this.collections, this.collectionTree, this.expandedIds);
      this.collectionTreeService.setCollectionTree(this.collectionTree);
      this.collectionTreeService.resetMoveList();
    }
  }
  ngOnInit() {
    this.collectionTreeService.rearrange$.subscribe((event) => this.rearrange.emit(event));
    this.collectionTreeService.delete$.subscribe((id) => this.deleteCollection.emit(id));
  }
  static {
    this.ɵfac = function CollectionTreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionTreeComponent)(ɵɵdirectiveInject(CollectionTreeService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CollectionTreeComponent,
      selectors: [["vdr-collection-tree"]],
      inputs: {
        collections: "collections",
        activeCollectionId: "activeCollectionId",
        expandAll: "expandAll",
        expandedIds: "expandedIds",
        selectionManager: "selectionManager"
      },
      outputs: {
        rearrange: "rearrange",
        deleteCollection: "deleteCollection"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([CollectionTreeService]), ɵɵNgOnChangesFeature],
      decls: 1,
      vars: 1,
      consts: [["cdkDropListGroup", "", 3, "expandAll", "collectionTree", "selectionManager", "activeCollectionId", 4, "ngIf"], ["cdkDropListGroup", "", 3, "expandAll", "collectionTree", "selectionManager", "activeCollectionId"]],
      template: function CollectionTreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CollectionTreeComponent_vdr_collection_tree_node_0_Template, 1, 4, "vdr-collection-tree-node", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.collectionTree);
        }
      },
      dependencies: [NgIf, CdkDropListGroup, CollectionTreeNodeComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionTreeComponent, [{
    type: Component,
    args: [{
      selector: "vdr-collection-tree",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionTreeService],
      standalone: false,
      template: '<vdr-collection-tree-node\n    *ngIf="collectionTree"\n    cdkDropListGroup\n    [expandAll]="expandAll"\n    [collectionTree]="collectionTree"\n    [selectionManager]="selectionManager"\n    [activeCollectionId]="activeCollectionId"\n></vdr-collection-tree-node>\n'
    }]
  }], () => [{
    type: CollectionTreeService
  }], {
    collections: [{
      type: Input
    }],
    activeCollectionId: [{
      type: Input
    }],
    expandAll: [{
      type: Input
    }],
    expandedIds: [{
      type: Input
    }],
    selectionManager: [{
      type: Input
    }],
    rearrange: [{
      type: Output
    }],
    deleteCollection: [{
      type: Output
    }]
  });
})();
var ConfirmVariantDeletionDialogComponent = class _ConfirmVariantDeletionDialogComponent {
  constructor() {
    this.variants = [];
  }
  confirm() {
    this.resolveWith(true);
  }
  cancel() {
    this.resolveWith();
  }
  static {
    this.ɵfac = function ConfirmVariantDeletionDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmVariantDeletionDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfirmVariantDeletionDialogComponent,
      selectors: [["vdr-confirm-variant-deletion-dialog"]],
      standalone: false,
      decls: 6,
      vars: 4,
      consts: [["vdrDialogTitle", ""], [4, "ngFor", "ngForOf"], ["vdrDialogButtons", ""], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
      template: function ConfirmVariantDeletionDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfirmVariantDeletionDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵtext(1);
          ɵɵpipe(2, "translate");
          ɵɵelementStart(3, "ul");
          ɵɵtemplate(4, ConfirmVariantDeletionDialogComponent_li_4_Template, 2, 2, "li", 1);
          ɵɵelementEnd();
          ɵɵtemplate(5, ConfirmVariantDeletionDialogComponent_ng_template_5_Template, 6, 6, "ng-template", 2);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate1("\n", ɵɵpipeBind1(2, 2, "catalog.confirm-deletion-of-unused-variants-body"), "\n");
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.variants);
        }
      },
      dependencies: [NgForOf, DialogButtonsDirective, DialogTitleDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmVariantDeletionDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-confirm-variant-deletion-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    {{ 'catalog.confirm-deletion-of-unused-variants-title' | translate }}
</ng-template>
{{ 'catalog.confirm-deletion-of-unused-variants-body' | translate }}
<ul>
    <li *ngFor="let variant of variants">{{ variant.name }} ({{ variant.sku }})</li>
</ul>
<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="confirm()" class="btn btn-primary">
        {{ 'common.confirm' | translate }}
    </button>
</ng-template>
`
    }]
  }], null, null);
})();
var CreateFacetValueDialogComponent = class _CreateFacetValueDialogComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      code: ["", Validators.required]
    });
  }
  updateCode() {
    const nameControl = this.form.get("name");
    const codeControl = this.form.get("code");
    if (nameControl && codeControl && codeControl.pristine) {
      codeControl.setValue((0, import_normalize_string.normalizeString)(`${nameControl.value}`, "-"));
    }
  }
  confirm() {
    const {
      name,
      code
    } = this.form.value;
    if (!name || !code) {
      return;
    }
    this.resolveWith({
      facetId: this.facetId,
      code,
      translations: [{
        languageCode: this.languageCode,
        name
      }]
    });
  }
  cancel() {
    this.resolveWith();
  }
  static {
    this.ɵfac = function CreateFacetValueDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateFacetValueDialogComponent)(ɵɵdirectiveInject(FormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CreateFacetValueDialogComponent,
      selectors: [["vdr-create-facet-value-dialog"]],
      standalone: false,
      decls: 9,
      vars: 7,
      consts: [["vdrDialogTitle", ""], [1, "form-grid", 3, "formGroup"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "input"], ["for", "code", 3, "label"], ["id", "code", "type", "text", "formControlName", "code"], ["vdrDialogButtons", ""], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function CreateFacetValueDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CreateFacetValueDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
          ɵɵelementStart(1, "div", 1)(2, "vdr-form-field", 2);
          ɵɵpipe(3, "translate");
          ɵɵelementStart(4, "input", 3);
          ɵɵlistener("input", function CreateFacetValueDialogComponent_Template_input_input_4_listener() {
            return ctx.updateCode();
          });
          ɵɵelementEnd()();
          ɵɵelementStart(5, "vdr-form-field", 4);
          ɵɵpipe(6, "translate");
          ɵɵelement(7, "input", 5);
          ɵɵelementEnd()();
          ɵɵtemplate(8, CreateFacetValueDialogComponent_ng_template_8_Template, 6, 7, "ng-template", 6);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(3, 3, "common.name"));
          ɵɵadvance(3);
          ɵɵproperty("label", ɵɵpipeBind1(6, 5, "common.code"));
        }
      },
      dependencies: [DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateFacetValueDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-create-facet-value-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>
    {{ 'catalog.create-facet-value' | translate }}
</ng-template>
<div class="form-grid" [formGroup]="form">
    <vdr-form-field [label]="'common.name' | translate" for="name">
        <input id="name" type="text" formControlName="name" (input)="updateCode()" />
    </vdr-form-field>
    <vdr-form-field
        [label]="'common.code' | translate"
        for="code"
    >
        <input
            id="code"
            type="text"
            formControlName="code"
        />
    </vdr-form-field>
</div>
<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button type="submit" (click)="confirm()" class="btn btn-primary" [disabled]="form.invalid">
        {{ 'common.confirm' | translate }}
    </button>
</ng-template>
`
    }]
  }], () => [{
    type: FormBuilder
  }], null);
})();
var FACET_DETAIL_QUERY = gql`
    query GetFacetDetail($id: ID!, $facetValueListOptions: FacetValueListOptions) {
        facet(id: $id) {
            ...FacetWithValueList
        }
    }
    ${FACET_WITH_VALUE_LIST_FRAGMENT}
`;
var FacetDetailComponent = class _FacetDetailComponent extends TypedBaseDetailComponent {
  constructor(changeDetector, dataService, formBuilder, notificationService, modalService) {
    super();
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.modalService = modalService;
    this.customFields = this.getCustomFieldConfig("Facet");
    this.customValueFields = this.getCustomFieldConfig("FacetValue");
    this.detailForm = this.formBuilder.group({
      facet: this.formBuilder.group({
        code: ["", Validators.required],
        name: "",
        visible: true,
        customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
      }),
      values: this.formBuilder.record({})
    });
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.filterControl = new FormControl("");
    this.values$ = new BehaviorSubject([]);
    this.updatePermission = [Permission.UpdateCatalog, Permission.UpdateFacet];
  }
  ngOnInit() {
    this.init();
    this.filterControl.valueChanges.pipe(debounceTime(200), takeUntil(this.destroy$)).subscribe((filterTerm) => {
      this.currentPage = 1;
      this.fetchFacetValues(this.currentPage, this.itemsPerPage, filterTerm);
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  updateCode(currentCode, nameValue) {
    if (!currentCode) {
      const codeControl = this.detailForm.get(["facet", "code"]);
      if (codeControl && codeControl.pristine) {
        codeControl.setValue((0, import_normalize_string.normalizeString)(nameValue, "-"));
      }
    }
  }
  updateValueCode(currentCode, nameValue, valueId) {
    if (!currentCode) {
      const codeControl = this.detailForm.get(["values", valueId, "code"]);
      if (codeControl && codeControl.pristine) {
        codeControl.setValue((0, import_normalize_string.normalizeString)(nameValue, "-"));
      }
    }
  }
  customValueFieldIsSet(index, name) {
    return !!this.detailForm.get(["values", index, "customFields", name]);
  }
  addFacetValue() {
    this.modalService.fromComponent(CreateFacetValueDialogComponent, {
      locals: {
        languageCode: this.languageCode,
        facetId: this.id
      }
    }).pipe(switchMap((result) => {
      if (!result) {
        return EMPTY;
      } else {
        return this.dataService.facet.createFacetValues([result]);
      }
    })).subscribe((result) => {
      if (result.createFacetValues) {
        this.notificationService.success(marker("common.notify-create-success"), {
          entity: "FacetValue"
        });
        this.currentPage = 1;
        this.fetchFacetValues(this.currentPage, this.itemsPerPage);
      }
    });
  }
  create() {
    const facetForm = this.detailForm.get("facet");
    if (!facetForm || !facetForm.dirty) {
      return;
    }
    const newFacet = this.getUpdatedFacet({
      id: "",
      createdAt: "",
      updatedAt: "",
      isPrivate: false,
      languageCode: this.languageCode,
      name: "",
      code: "",
      translations: []
    }, facetForm, this.languageCode);
    this.dataService.facet.createFacet(newFacet).subscribe((data) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Facet"
      });
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.router.navigate(["../", data.createFacet.id], {
        relativeTo: this.route
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "Facet"
      });
    });
  }
  save() {
    const valuesFormRecord = this.detailForm.get("values");
    combineLatest(this.entity$, this.languageCode$).pipe(take(1), mergeMap(([facet, languageCode]) => {
      const facetForm = this.detailForm.get("facet");
      const updateOperations = [];
      if (facetForm && facetForm.dirty) {
        const updatedFacetInput = this.getUpdatedFacet(facet, facetForm, languageCode);
        if (updatedFacetInput) {
          updateOperations.push(this.dataService.facet.updateFacet(updatedFacetInput));
        }
      }
      if (valuesFormRecord && valuesFormRecord.dirty) {
        const updatedValues = this.getUpdatedFacetValues(valuesFormRecord, languageCode);
        if (updatedValues.length) {
          updateOperations.push(this.dataService.facet.updateFacetValues(updatedValues));
        }
      }
      return forkJoin(updateOperations);
    })).subscribe(() => {
      this.detailForm.markAsPristine();
      this.changeDetector.markForCheck();
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Facet"
      });
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Facet"
      });
    });
  }
  deleteFacetValue(facetValueId) {
    this.showModalAndDelete(facetValueId).pipe(switchMap((response) => {
      if (response.result === DeletionResult.DELETED) {
        return [true];
      } else {
        return this.showModalAndDelete(facetValueId, response.message || "").pipe(map((r) => r.result === DeletionResult.DELETED));
      }
    }), switchMap((deleted) => deleted ? this.dataService.query(GetFacetDetailDocument, {
      id: this.id
    }).single$ : [])).subscribe(() => {
      this.notificationService.success(marker("common.notify-delete-success"), {
        entity: "FacetValue"
      });
      this.fetchFacetValues(this.currentPage, this.itemsPerPage, this.filterControl.value);
    }, (err) => {
      this.notificationService.error(marker("common.notify-delete-error"), {
        entity: "FacetValue"
      });
    });
  }
  showModalAndDelete(facetValueId, message) {
    return this.modalService.dialog({
      title: marker("catalog.confirm-delete-facet-value"),
      body: message,
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(switchMap((result) => result ? this.dataService.facet.deleteFacetValues([facetValueId], !!message) : EMPTY), map((result) => result.deleteFacetValues[0]));
  }
  setCurrentPage(newPage) {
    this.currentPage = newPage;
    this.fetchFacetValues(this.currentPage, this.itemsPerPage, this.filterControl.value);
  }
  setItemsPerPage(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.fetchFacetValues(this.currentPage, this.itemsPerPage, this.filterControl.value);
  }
  fetchFacetValues(currentPage, itemsPerPage, filterTerm) {
    this.dataService.query(FACET_DETAIL_QUERY, {
      id: this.id,
      facetValueListOptions: __spreadValues({
        take: itemsPerPage,
        skip: (currentPage - 1) * itemsPerPage,
        sort: {
          createdAt: import_generated_types.SortOrder.DESC
        }
      }, filterTerm ? {
        filter: {
          name: {
            contains: filterTerm
          }
        }
      } : {})
    }).single$.subscribe(({
      facet
    }) => {
      if (facet) {
        this.values$.next([...facet.valueList.items]);
        this.totalItems = facet.valueList.totalItems;
        this.setFacetValueFormValues(facet, this.languageCode);
      }
    });
  }
  /**
   * Sets the values of the form on changes to the facet or current language.
   */
  setFormValues(facet, languageCode) {
    const currentTranslation = findTranslation(facet, languageCode);
    this.detailForm.patchValue({
      facet: {
        code: facet.code,
        visible: !facet.isPrivate,
        name: currentTranslation?.name ?? ""
      }
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["facet", "customFields"]), facet, currentTranslation);
    }
    this.values$.next([...facet.valueList.items]);
    this.totalItems = facet.valueList.totalItems;
    this.setFacetValueFormValues(facet, languageCode);
  }
  setFacetValueFormValues(facet, languageCode) {
    const currentValuesFormGroup = this.detailForm.get("values");
    facet.valueList.items.forEach((value) => {
      const valueTranslation = findTranslation(value, languageCode);
      const group = {
        id: value.id,
        code: value.code,
        name: valueTranslation ? valueTranslation.name : ""
      };
      let valueControl = currentValuesFormGroup.get(value.id);
      if (!valueControl) {
        valueControl = this.formBuilder.group(group);
        currentValuesFormGroup.addControl(value.id, valueControl);
      } else {
        valueControl.patchValue(group);
      }
      if (this.customValueFields.length) {
        let customValueFieldsGroup = valueControl.get(["customFields"]);
        if (!customValueFieldsGroup) {
          customValueFieldsGroup = new UntypedFormGroup({});
          valueControl.addControl("customFields", customValueFieldsGroup);
        }
        if (customValueFieldsGroup) {
          for (const fieldDef of this.customValueFields) {
            const key = fieldDef.name;
            const fieldValue = fieldDef.type === "localeString" ? valueTranslation?.customFields?.[key] : value.customFields[key];
            const control = customValueFieldsGroup.get(key);
            if (control) {
              control.setValue(fieldValue);
            } else {
              customValueFieldsGroup.addControl(key, new UntypedFormControl(fieldValue));
            }
          }
        }
      }
    });
  }
  /**
   * Given a facet and the value of the detailForm, this method creates an updated copy of the facet which
   * can then be persisted to the API.
   */
  getUpdatedFacet(facet, facetFormGroup, languageCode) {
    const input = createUpdatedTranslatable({
      translatable: facet,
      updatedFields: facetFormGroup.value,
      customFieldConfig: this.customFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: facet.name || ""
      }
    });
    input.isPrivate = !facetFormGroup.value.visible;
    return input;
  }
  /**
   * Given an array of facet values and the values from the detailForm, this method creates a new array
   * which can be persisted to the API via an updateFacetValues mutation.
   */
  getUpdatedFacetValues(valuesFormGroup, languageCode) {
    const dirtyValueValues = Object.values(valuesFormGroup.controls).filter((c) => c.dirty).map((c) => c.value);
    return dirtyValueValues.map((value, i) => createUpdatedTranslatable({
      translatable: value,
      updatedFields: value,
      customFieldConfig: this.customValueFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: ""
      }
    })).filter(import_shared_utils.notNullOrUndefined);
  }
  static {
    this.ɵfac = function FacetDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacetDetailComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(ModalService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FacetDetailComponent,
      selectors: [["vdr-facet-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 45,
      vars: 43,
      consts: [["updateButton", ""], ["private", ""], [3, "languageCodeChange", "disabled", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "facet-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], ["formGroupName", "facet"], ["for", "visibility", 3, "label"], ["type", "checkbox", "clrToggle", "", "formControlName", "visible", "id", "visibility", 3, "vdrDisabled"], [1, "visible-toggle"], [4, "ngIf", "ngIfElse"], [3, "entity", 4, "ngIf"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "input", "readonly"], ["for", "code", 3, "label"], ["id", "code", "type", "text", "formControlName", "code", 3, "readonly"], [3, "title", 4, "ngIf"], ["locationId", "facet-detail", 3, "entity$", "detailForm"], [3, "title", "paddingX", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], [3, "entity"], [3, "title"], ["entityName", "Facet", 3, "customFields", "customFieldsFormGroup", "readonly"], [3, "title", "paddingX"], ["vdrCardControls", ""], [4, "ngIf"], ["type", "button", "class", "button m-3", 3, "click", 4, "vdrIfPermissions"], ["type", "text", 1, "mr-3", 3, "formControl", "placeholder"], ["formArrayName", "values", 1, "facet-values-list", "table"], ["class", "facet-value", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "pagination-wrapper"], [3, "itemsPerPageChange", "itemsPerPage"], [3, "pageChange", "currentPage", "itemsPerPage", "totalItems"], [1, "facet-value", 3, "formGroup"], [1, "align-middle"], ["type", "text", "formControlName", "name", 3, "input", "readonly"], ["type", "text", "formControlName", "code"], ["class", "", 4, "ngIf"], ["type", "button", "vdrDropdownTrigger", "", 1, "icon-button"], ["shape", "ellipsis-vertical"], ["vdrPosition", "bottom-right"], ["type", "button", "vdrDropdownItem", "", 1, "delete-button", 3, "click", "disabled"], ["shape", "trash", 1, "is-danger"], [1, ""], ["entityName", "FacetValue", 3, "customFields", "compact", "customFieldsFormGroup", "readonly"], ["type", "button", 1, "button", "m-3", 3, "click"], ["shape", "add"]],
      template: function FacetDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 2);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "async");
          ɵɵlistener("languageCodeChange", function FacetDetailComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setLanguage($event));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(7, "vdr-ab-right");
          ɵɵelement(8, "vdr-action-bar-items", 3);
          ɵɵtemplate(9, FacetDetailComponent_button_9_Template, 3, 4, "button", 4);
          ɵɵpipe(10, "async");
          ɵɵtemplate(11, FacetDetailComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(13, "vdr-action-bar-dropdown-menu", 3);
          ɵɵelementEnd()()();
          ɵɵelementStart(14, "form", 5)(15, "vdr-page-detail-layout")(16, "vdr-page-detail-sidebar", 6)(17, "vdr-card")(18, "vdr-form-field", 7);
          ɵɵpipe(19, "translate");
          ɵɵelementStart(20, "clr-toggle-wrapper");
          ɵɵelement(21, "input", 8);
          ɵɵpipe(22, "hasPermission");
          ɵɵelementStart(23, "label", 9);
          ɵɵtemplate(24, FacetDetailComponent_ng_container_24_Template, 3, 3, "ng-container", 10)(25, FacetDetailComponent_ng_template_25_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd()()()();
          ɵɵelementStart(27, "vdr-card");
          ɵɵtemplate(28, FacetDetailComponent_vdr_page_entity_info_28_Template, 1, 1, "vdr-page-entity-info", 11);
          ɵɵpipe(29, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(30, "vdr-page-block")(31, "vdr-card", 6)(32, "div", 12)(33, "vdr-form-field", 13);
          ɵɵpipe(34, "translate");
          ɵɵelementStart(35, "input", 14);
          ɵɵpipe(36, "hasPermission");
          ɵɵlistener("input", function FacetDetailComponent_Template_input_input_35_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.updateCode(ctx.entity == null ? null : ctx.entity.code, $event.target.value));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(37, "vdr-form-field", 15);
          ɵɵpipe(38, "translate");
          ɵɵelement(39, "input", 16);
          ɵɵpipe(40, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(41, FacetDetailComponent_vdr_card_41_Template, 4, 8, "vdr-card", 17);
          ɵɵelement(42, "vdr-custom-detail-component-host", 18);
          ɵɵtemplate(43, FacetDetailComponent_vdr_card_43_Template, 7, 9, "vdr-card", 19);
          ɵɵpipe(44, "async");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const updateButton_r11 = ɵɵreference(12);
          const private_r12 = ɵɵreference(26);
          ɵɵadvance(3);
          ɵɵproperty("disabled", ɵɵpipeBind1(4, 19, ctx.isNew$))("availableLanguageCodes", ɵɵpipeBind1(5, 21, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(6, 23, ctx.languageCode$));
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(10, 25, ctx.isNew$))("ngIfElse", updateButton_r11);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(19, 27, "catalog.visibility"));
          ɵɵadvance(3);
          ɵɵproperty("vdrDisabled", !ɵɵpipeBind1(22, 29, ctx.updatePermission));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.detailForm.value.facet == null ? null : ctx.detailForm.value.facet.visible)("ngIfElse", private_r12);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ɵɵpipeBind1(29, 31, ctx.entity$));
          ɵɵadvance(5);
          ɵɵproperty("label", ɵɵpipeBind1(34, 33, "common.name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(36, 35, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(38, 37, "common.code"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(40, 39, ctx.updatePermission));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ɵɵpipeBind1(44, 41, ctx.isNew$));
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ItemsPerPageControlsComponent, PaginationControlsComponent, FormFieldComponent, FormFieldControlDirective, LanguageSelectorComponent, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, EntityInfoComponent, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, CardControlsDirective, AsyncPipe, PaginatePipe, TranslatePipe, HasPermissionPipe],
      styles: [".visible-toggle[_ngcontent-%COMP%]{margin-top:-3px!important}tr.facet-value[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}.pagination-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:var(--card-padding)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacetDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-facet-detail",
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
            ></vdr-language-selector>
        </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="facet-detail" />
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
                    *vdrIfPermissions="updatePermission"
                    class="btn btn-primary"
                    (click)="save()"
                    [disabled]="detailForm.invalid || detailForm.pristine"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="facet-detail" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar formGroupName="facet">
            <vdr-card>
                <vdr-form-field [label]="'catalog.visibility' | translate" for="visibility">
                    <clr-toggle-wrapper>
                        <input
                            type="checkbox"
                            clrToggle
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                            formControlName="visible"
                            id="visibility"
                        />
                        <label class="visible-toggle">
                            <ng-container *ngIf="detailForm.value.facet?.visible; else private">{{
                                'catalog.public' | translate
                            }}</ng-container>
                            <ng-template #private>{{ 'catalog.private' | translate }}</ng-template>
                        </label>
                    </clr-toggle-wrapper>
                </vdr-form-field>
            </vdr-card>
            <vdr-card>
                <vdr-page-entity-info *ngIf="entity$ | async as entity" [entity]="entity" />
            </vdr-card>
        </vdr-page-detail-sidebar>
        <vdr-page-block>
            <vdr-card formGroupName="facet">
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
                    <vdr-form-field [label]="'common.code' | translate" for="code">
                        <input
                            id="code"
                            type="text"
                            [readonly]="!(updatePermission | hasPermission)"
                            formControlName="code"
                        />
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card [title]="'common.custom-fields' | translate" *ngIf="customFields.length">
                <vdr-tabbed-custom-fields
                    entityName="Facet"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('facet.customFields')"
                    [readonly]="!(updatePermission | hasPermission)"
                />
            </vdr-card>

            <vdr-custom-detail-component-host
                locationId="facet-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>

            <vdr-card
                *ngIf="!(isNew$ | async)"
                [title]="'catalog.facet-values' | translate"
                [paddingX]="false"
            >
                <ng-template vdrCardControls>
                    <input
                        type="text"
                        class="mr-3"
                        [formControl]="filterControl"
                        [placeholder]="'catalog.filter-by-name' | translate"
                    />
                </ng-template>
                <ng-container *ngIf="values$ | async as filteredValues">
                    <table class="facet-values-list table" formArrayName="values">
                        <thead>
                            <tr>
                                <th></th>
                                <th>{{ 'common.name' | translate }}</th>
                                <th>{{ 'common.code' | translate }}</th>
                                <ng-container *ngIf="customValueFields.length">
                                    <th>{{ 'common.custom-fields' | translate }}</th>
                                </ng-container>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="facet-value"
                                *ngFor="
                                    let value of filteredValues
                                        | paginate
                                            : {
                                                  currentPage: currentPage,
                                                  itemsPerPage: itemsPerPage,
                                                  totalItems: totalItems,
                                              };
                                    let i = index
                                "
                                [formGroup]="detailForm.get(['values', value.id])"
                            >
                                <td class="align-middle">
                                    <vdr-entity-info [entity]="value"></vdr-entity-info>
                                </td>
                                <td class="align-middle">
                                    <input
                                        type="text"
                                        formControlName="name"
                                        [readonly]="!(updatePermission | hasPermission)"
                                        (input)="updateValueCode(value.code, $event.target.value, value.id)"
                                    />
                                </td>
                                <td class="align-middle">
                                    <input type="text" formControlName="code" />
                                </td>
                                <td class="" *ngIf="customValueFields.length">
                                    <vdr-tabbed-custom-fields
                                        entityName="FacetValue"
                                        [customFields]="customValueFields"
                                        [compact]="true"
                                        [customFieldsFormGroup]="
                                            detailForm.get(['values', value.id, 'customFields'])
                                        "
                                        [readonly]="!(updatePermission | hasPermission)"
                                    ></vdr-tabbed-custom-fields>
                                </td>
                                <td class="align-middle">
                                    <vdr-dropdown>
                                        <button type="button" class="icon-button" vdrDropdownTrigger>
                                            <clr-icon shape="ellipsis-vertical"></clr-icon>
                                        </button>
                                        <vdr-dropdown-menu vdrPosition="bottom-right">
                                            <button
                                                type="button"
                                                class="delete-button"
                                                (click)="deleteFacetValue(value.id)"
                                                [disabled]="!(updatePermission | hasPermission)"
                                                vdrDropdownItem
                                            >
                                                <clr-icon shape="trash" class="is-danger"></clr-icon>
                                                {{ 'common.delete' | translate }}
                                            </button>
                                        </vdr-dropdown-menu>
                                    </vdr-dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="pagination-wrapper">
                        <vdr-items-per-page-controls
                            [itemsPerPage]="itemsPerPage"
                            (itemsPerPageChange)="setItemsPerPage($event)"
                        ></vdr-items-per-page-controls>
                        <vdr-pagination-controls
                            [currentPage]="currentPage"
                            [itemsPerPage]="itemsPerPage"
                            [totalItems]="totalItems"
                            (pageChange)="setCurrentPage($event)"
                        ></vdr-pagination-controls>
                    </div>
                </ng-container>
                <div>
                    <button
                        type="button"
                        class="button m-3"
                        *vdrIfPermissions="['CreateCatalog', 'CreateFacet']"
                        (click)="addFacetValue()"
                    >
                        <clr-icon shape="add"></clr-icon>
                        {{ 'catalog.add-facet-value' | translate }}
                    </button>
                </div>
            </vdr-card>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`,
      styles: [".visible-toggle{margin-top:-3px!important}tr.facet-value td{vertical-align:middle}.pagination-wrapper{display:flex;justify-content:space-between;padding:var(--card-padding)}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DataService
  }, {
    type: FormBuilder
  }, {
    type: NotificationService
  }, {
    type: ModalService
  }], null);
})();
var deleteFacetsBulkAction = createBulkDeleteAction({
  location: "facet-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteFacet) || userPermissions.includes(Permission.DeleteCatalog),
  getItemName: (item) => item.name,
  shouldRetryItem: (response, item) => !!response.message,
  bulkDelete: (dataService, ids, retrying) => dataService.facet.deleteFacets(ids, retrying).pipe(map((res) => res.deleteFacets))
});
var assignFacetsToChannelBulkAction = createBulkAssignToChannelAction({
  location: "facet-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateFacet),
  getItemName: (item) => item.name,
  bulkAssignToChannel: (dataService, facetIds, channelIds) => channelIds.map((channelId) => dataService.facet.assignFacetsToChannel({
    facetIds,
    channelId
  }).pipe(map((res) => res.assignFacetsToChannel)))
});
var removeFacetsFromChannelBulkAction = createBulkRemoveFromChannelAction({
  location: "facet-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteCatalog) || userPermissions.includes(Permission.DeleteFacet),
  getItemName: (item) => item.name,
  bulkRemoveFromChannel: (dataService, facetIds, channelId, retrying) => dataService.facet.removeFacetsFromChannel({
    channelId,
    facetIds,
    force: retrying
  }).pipe(map((res) => res.removeFacetsFromChannel)),
  isErrorResult: (result) => result.__typename === "FacetInUseError" ? result.message : void 0
});
var removeFacetsFromChannelBulkAction2 = {
  location: "facet-list",
  label: marker("catalog.remove-from-channel"),
  getTranslationVars: ({
    injector
  }) => getChannelCodeFromUserStatus(injector.get(DataService)),
  icon: "layers",
  iconClass: "is-warning",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateFacet) || userPermissions.includes(Permission.UpdateCatalog),
  isVisible: ({
    injector
  }) => currentChannelIsNotDefault(injector.get(DataService)),
  onClick: ({
    injector,
    selection,
    hostComponent,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    const dataService = injector.get(DataService);
    const notificationService = injector.get(NotificationService);
    const activeChannelId$ = dataService.client.userStatus().mapSingle(({
      userStatus
    }) => userStatus.activeChannelId);
    function showModalAndDelete(facetIds, message) {
      return modalService.dialog({
        title: marker("catalog.remove-from-channel"),
        translationVars: {
          count: selection.length
        },
        size: message ? "lg" : "md",
        body: message,
        buttons: [{
          type: "secondary",
          label: marker("common.cancel")
        }, {
          type: "danger",
          label: message ? marker("common.force-remove") : marker("common.remove"),
          returnValue: true
        }]
      }).pipe(switchMap((res) => res ? activeChannelId$.pipe(switchMap((activeChannelId) => activeChannelId ? dataService.facet.removeFacetsFromChannel({
        channelId: activeChannelId,
        facetIds,
        force: !!message
      }) : EMPTY), map((res2) => res2.removeFacetsFromChannel)) : EMPTY));
    }
    showModalAndDelete((0, import_unique.unique)(selection.map((f) => f.id))).pipe(switchMap((result) => {
      let removedCount = selection.length;
      const errors = [];
      const errorIds = [];
      let i = 0;
      for (const item of result) {
        if (item.__typename === "FacetInUseError") {
          errors.push(item.message);
          errorIds.push(selection[i]?.id);
          removedCount--;
        }
        i++;
      }
      if (0 < errorIds.length) {
        return showModalAndDelete(errorIds, errors.join("\n")).pipe(map((result2) => {
          const notRemovedCount = result2.filter((r) => r.__typename === "FacetInUseError").length;
          return selection.length - notRemovedCount;
        }));
      } else {
        return of(removedCount);
      }
    }), switchMap((removedCount) => removedCount ? getChannelCodeFromUserStatus(dataService).then(({
      channelCode
    }) => ({
      channelCode,
      removedCount
    })) : EMPTY)).subscribe(({
      removedCount,
      channelCode
    }) => {
      if (removedCount) {
        hostComponent.refresh();
        clearSelection();
        notificationService.success(marker("catalog.notify-remove-facets-from-channel-success"), {
          count: removedCount,
          channelCode
        });
      }
    });
  }
};
var duplicateFacetsBulkAction = {
  location: "facet-list",
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
        entityName: "Facet",
        title: marker("catalog.duplicate-facets"),
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
var FACET_LIST_QUERY = gql`
    query GetFacetList($options: FacetListOptions, $facetValueListOptions: FacetValueListOptions) {
        facets(options: $options) {
            items {
                ...FacetWithValueList
            }
            totalItems
        }
    }
    ${FACET_WITH_VALUE_LIST_FRAGMENT}
`;
var FacetListComponent = class _FacetListComponent extends TypedBaseListComponent {
  constructor(dataService) {
    super();
    this.dataService = dataService;
    this.initialLimit = 3;
    this.displayLimit = {};
    this.dataTableListId = "facet-list";
    this.customFields = this.getCustomFieldConfig("Facet");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilter({
      name: "visibility",
      type: {
        kind: "boolean"
      },
      label: marker("common.visibility"),
      toFilterInput: (value) => ({
        isPrivate: {
          eq: !value
        }
      })
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
    }).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    super.configure({
      document: GetFacetListDocument,
      getItems: (data) => data.facets,
      setVariables: (skip2, take2) => ({
        options: {
          skip: skip2,
          take: take2,
          filter: __spreadValues({
            name: {
              contains: this.searchTermControl.value
            }
          }, this.filters.createFilterInput()),
          sort: this.sorts.createSortInput()
        },
        facetValueListOptions: {
          take: 100
        }
      }),
      refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges]
    });
  }
  toggleDisplayLimit(facet) {
    if (this.displayLimit[facet.id] === facet.valueList.items.length) {
      this.displayLimit[facet.id] = this.initialLimit;
    } else {
      this.displayLimit[facet.id] = facet.valueList.items.length;
    }
  }
  setLanguage(code) {
    this.dataService.client.setContentLanguage(code).subscribe();
  }
  static {
    this.ɵfac = function FacetListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacetListComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FacetListComponent,
      selectors: [["vdr-facet-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 40,
      vars: 58,
      consts: [["collapse", ""], [3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "facet-list"], ["class", "btn btn-primary", 3, "routerLink", 4, "vdrIfPermissions"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "facet-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault", "sort"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "code", 3, "heading"], ["id", "visibility", 3, "heading"], ["id", "values", 3, "heading"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], ["shape", "plus"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning"], ["colorType", "success"], [1, "facet-values-list"], [3, "facetValue", "removable", "displayFacetName", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "button-small", 3, "click", 4, "ngIf"], [3, "facetValue", "removable", "displayFacetName"], [1, "button-small", 3, "click"], [4, "ngIf", "ngIfElse"], ["shape", "minus"], [3, "customField", "sorts"]],
      template: function FacetListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 1);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵlistener("languageCodeChange", function FacetListComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(6, "vdr-ab-right");
          ɵɵelement(7, "vdr-action-bar-items", 2);
          ɵɵtemplate(8, FacetListComponent_a_8_Template, 4, 5, "a", 3);
          ɵɵelement(9, "vdr-action-bar-dropdown-menu", 2);
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "vdr-data-table-2", 4);
          ɵɵpipe(11, "async");
          ɵɵpipe(12, "async");
          ɵɵpipe(13, "async");
          ɵɵpipe(14, "async");
          ɵɵlistener("pageChange", function FacetListComponent_Template_vdr_data_table_2_pageChange_10_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function FacetListComponent_Template_vdr_data_table_2_itemsPerPageChange_10_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function FacetListComponent_Template_vdr_data_table_2_visibleColumnsChange_10_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(15, "vdr-bulk-action-menu", 5)(16, "vdr-dt2-search", 6);
          ɵɵpipe(17, "translate");
          ɵɵelementStart(18, "vdr-dt2-column", 7);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, FacetListComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 8);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, FacetListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 9);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, FacetListComponent_ng_template_26_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 10);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, FacetListComponent_ng_template_29_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 11);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, FacetListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 12);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, FacetListComponent_ng_template_35_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(36, "vdr-dt2-column", 13);
          ɵɵpipe(37, "translate");
          ɵɵtemplate(38, FacetListComponent_ng_template_38_Template, 5, 7, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(39, FacetListComponent_vdr_dt2_custom_field_column_39_Template, 1, 2, "vdr-dt2-custom-field-column", 14);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(4, 29, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(5, 31, ctx.contentLanguage$));
          ɵɵadvance(5);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(57, _c35));
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
          ɵɵproperty("heading", ɵɵpipeBind1(31, 51, "common.code"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 53, "common.visibility"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(37, 55, "catalog.values"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, FacetValueChipComponent, LanguageSelectorComponent, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, SlicePipe, TranslatePipe, LocaleDatePipe],
      styles: [".facet-values-list[_ngcontent-%COMP%]{max-width:500px;display:flex;flex-wrap:wrap;align-items:center;gap:4px}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacetListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-facet-list",
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left>
            <vdr-language-selector
                [availableLanguageCodes]="availableLanguages$ | async"
                [currentLanguageCode]="contentLanguage$ | async"
                (languageCodeChange)="setLanguage($event)"
            ></vdr-language-selector>
        </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items locationId="facet-list" />
            <a
                class="btn btn-primary"
                [routerLink]="['./create']"
                *vdrIfPermissions="['CreateCatalog', 'CreateFacet']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'catalog.create-new-facet' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu locationId="facet-list" />
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
        locationId="facet-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    ></vdr-bulk-action-menu>
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'catalog.filter-by-name' | translate"
    ></vdr-dt2-search>
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true" [sort]="sorts.get('id')">
        <ng-template let-facet="item">
            {{ facet.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-facet="item">
            {{ facet.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-facet="item">
            {{ facet.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.name' | translate" id="name" [optional]="false" [sort]="sorts.get('name')">
        <ng-template let-facet="item">
            <a class="button-ghost" [routerLink]="['./', facet.id]"
                ><span>{{ facet.name }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.code' | translate" id="code">
        <ng-template let-facet="item">
            {{ facet.code }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.visibility' | translate" id="visibility">
        <ng-template let-facet="item">
            <vdr-chip *ngIf="facet.isPrivate" colorType="warning">{{
                'common.private' | translate
            }}</vdr-chip>
            <vdr-chip *ngIf="!facet.isPrivate" colorType="success">{{
                'common.public' | translate
            }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'catalog.values' | translate" id="values">
        <ng-template let-facet="item">
            <div class="facet-values-list">
                <vdr-facet-value-chip
                    *ngFor="let value of facet.valueList.items | slice : 0 : displayLimit[facet.id] || 3"
                    [facetValue]="value"
                    [removable]="false"
                    [displayFacetName]="false"
                ></vdr-facet-value-chip>
                <vdr-chip *ngIf="displayLimit[facet.id] < facet.valueList.totalItems && (displayLimit[facet.id] || 0) === facet.valueList.items.length">
                    ... + {{ facet.valueList.totalItems - facet.valueList.items.length }}
                </vdr-chip>
                <button
                    class="button-small"
                    *ngIf="facet.valueList.items.length > initialLimit"
                    (click)="toggleDisplayLimit(facet)"
                >
                    <ng-container *ngIf="(displayLimit[facet.id] || 0) < facet.valueList.items.length; else collapse">
                        <clr-icon shape="plus"></clr-icon>
                        {{ facet.valueList.totalItems - initialLimit }}
                    </ng-container>
                    <ng-template #collapse>
                        <clr-icon shape="minus"></clr-icon>
                    </ng-template>
                </button>
            </div>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column *ngFor="let customField of customFields" [customField]="customField" [sorts]="sorts" />
</vdr-data-table-2>
`,
      styles: [".facet-values-list{max-width:500px;display:flex;flex-wrap:wrap;align-items:center;gap:4px}\n"]
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var DEFAULT_VARIANT_CODE = "__DEFAULT_VARIANT__";
var GenerateProductVariantsComponent = class _GenerateProductVariantsComponent {
  constructor(dataService, formBuilder) {
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.variantsChange = new EventEmitter();
    this.optionGroups = [];
    this.variantFormValues = {};
    this.selectedStockLocationId = null;
  }
  ngOnInit() {
    this.dataService.settings.getActiveChannel().single$.subscribe((data) => {
      this.currencyCode = data.activeChannel.defaultCurrencyCode;
    });
    this.stockLocations$ = this.dataService.query(GetStockLocationListDocument, {
      options: {
        take: 999
      }
    }).refetchOnChannelChange().mapStream(({
      stockLocations
    }) => stockLocations.items).pipe(tap((items) => {
      if (items.length) {
        this.selectedStockLocationId = items[0].id;
        this.onFormChange();
      }
    }));
    this.generateVariants();
  }
  addOption() {
    this.optionGroups.push({
      name: "",
      values: []
    });
    const index = this.optionGroups.length - 1;
    setTimeout(() => {
      const input = this.groupNameInputs.get(index)?.nativeElement;
      input?.focus();
    });
  }
  removeOption(name) {
    this.optionGroups = this.optionGroups.filter((g) => g.name !== name);
    this.generateVariants();
  }
  generateVariants() {
    const totalValuesCount = this.optionGroups.reduce((sum, group) => sum + group.values.length, 0);
    const groups = totalValuesCount ? this.optionGroups.map((g) => g.values.map((v) => v.name)) : [[DEFAULT_VARIANT_CODE]];
    this.variants = (0, import_shared_utils.generateAllCombinations)(groups).map((values) => ({
      id: values.join("|"),
      values
    }));
    this.variants.forEach((variant, index) => {
      if (!this.variantFormValues[variant.id]) {
        const formGroup = this.formBuilder.nonNullable.group({
          optionValues: [variant.values],
          enabled: true,
          price: this.copyFromDefault(variant.id, "price", 0),
          sku: this.copyFromDefault(variant.id, "sku", ""),
          stock: this.copyFromDefault(variant.id, "stock", 0)
        });
        formGroup.valueChanges.subscribe(() => this.onFormChange());
        if (index === 0) {
          formGroup.get("price")?.valueChanges.subscribe((value) => {
            this.copyValuesToPristine("price", formGroup.get("price"));
          });
          formGroup.get("sku")?.valueChanges.subscribe((value) => {
            this.copyValuesToPristine("sku", formGroup.get("sku"));
          });
          formGroup.get("stock")?.valueChanges.subscribe((value) => {
            this.copyValuesToPristine("stock", formGroup.get("stock"));
          });
        }
        this.variantFormValues[variant.id] = formGroup;
      }
    });
    this.onFormChange();
  }
  trackByFn(index, variant) {
    return variant.values.join("|");
  }
  handleEnter(event, optionValueInputComponent) {
    event.preventDefault();
    event.stopPropagation();
    optionValueInputComponent.focus();
  }
  copyValuesToPristine(field, formControl) {
    if (!formControl) {
      return;
    }
    Object.values(this.variantFormValues).forEach((formGroup) => {
      const correspondingFormControl = formGroup.get(field);
      if (correspondingFormControl && correspondingFormControl.pristine) {
        correspondingFormControl.setValue(formControl.value, {
          emitEvent: false
        });
      }
    });
  }
  onFormChange() {
    const variantsToCreate = this.variants.map((v) => this.variantFormValues[v.id].value).filter((v) => v.enabled);
    this.variantsChange.emit({
      groups: this.optionGroups.map((og) => ({
        name: og.name,
        values: og.values.map((v) => v.name)
      })),
      variants: variantsToCreate,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      stockLocationId: this.selectedStockLocationId
    });
  }
  copyFromDefault(variantId, prop, value) {
    return variantId !== DEFAULT_VARIANT_CODE ? this.variantFormValues[DEFAULT_VARIANT_CODE].get(prop)?.value : value;
  }
  static {
    this.ɵfac = function GenerateProductVariantsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GenerateProductVariantsComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(FormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GenerateProductVariantsComponent,
      selectors: [["vdr-generate-product-variants"]],
      viewQuery: function GenerateProductVariantsComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c39, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupNameInputs = _t);
        }
      },
      outputs: {
        variantsChange: "variantsChange"
      },
      standalone: false,
      decls: 7,
      vars: 7,
      consts: [["optionGroupName", ""], ["optionValueInputComponent", ""], ["class", "option-groups", 4, "ngFor", "ngForOf"], [1, "button", "mb-2", 3, "click"], ["shape", "plus"], [4, "ngIf"], [1, "option-groups"], [1, "name"], ["placeholder", "e.g. Size", "clrInput", "", "name", "name", "required", "", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "values"], [3, "ngModelChange", "edit", "ngModel", "groupName", "disabled"], [1, "remove-group"], [1, "button-small", "mt-2", 3, "click", "title"], ["shape", "trash"], ["clrAlertType", "warning", "class", "", 3, "clrAlertClosable", 4, "ngIf"], [1, "form-grid", "mb-2"], [3, "label", 4, "ngIf"], ["class", "variants-preview", 4, "ngIf"], ["clrAlertType", "warning", 1, "", 3, "clrAlertClosable"], [1, "alert-text"], [3, "label"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "variants-preview"], [1, "table"], [3, "disabled", "formGroup", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "formGroup"], ["type", "text", "formControlName", "sku", 3, "placeholder"], ["formControlName", "price", 3, "currencyCode"], ["type", "number", "formControlName", "stock", "min", "0", "step", "1"], ["type", "checkbox", "formControlName", "enabled", "clrCheckbox", ""]],
      template: function GenerateProductVariantsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, GenerateProductVariantsComponent_div_0_Template, 17, 13, "div", 2);
          ɵɵelementStart(1, "button", 3);
          ɵɵlistener("click", function GenerateProductVariantsComponent_Template_button_click_1_listener() {
            return ctx.addOption();
          });
          ɵɵelement(2, "clr-icon", 4);
          ɵɵtext(3);
          ɵɵpipe(4, "translate");
          ɵɵelementEnd();
          ɵɵtemplate(5, GenerateProductVariantsComponent_ng_container_5_Template, 5, 3, "ng-container", 5);
          ɵɵpipe(6, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.optionGroups);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "catalog.add-option"), "\n");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 5, ctx.stockLocations$));
        }
      },
      dependencies: [ClrAlert, ClrAlertItem, ClrAlertText, ClrIconCustomTag, ClrLabel, ClrCheckbox, ClrInput, NgForOf, NgIf, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, FormGroupDirective, FormControlName, CurrencyInputComponent, FormFieldComponent, FormFieldControlDirective, OptionValueInputComponent, AsyncPipe, TranslatePipe],
      styles: ["[_nghost-%COMP%]{display:block;margin-bottom:120px}.option-groups[_ngcontent-%COMP%]{display:flex}.values[_ngcontent-%COMP%]{flex:1;margin:0 6px}.remove-group[_ngcontent-%COMP%]{padding-top:18px}.variants-preview[_ngcontent-%COMP%]   tr.disabled[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:var(--color-component-bg-100);color:var(--color-grey-400)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenerateProductVariantsComponent, [{
    type: Component,
    args: [{
      selector: "vdr-generate-product-variants",
      standalone: false,
      template: `<div *ngFor="let group of optionGroups" class="option-groups">
    <div class="name">
        <label>{{ 'catalog.option' | translate }}</label>
        <input
            #optionGroupName
            placeholder="e.g. Size"
            clrInput
            [(ngModel)]="group.name"
            name="name"
            required
            (keydown.enter)="handleEnter($event, optionValueInputComponent)"
        />
    </div>
    <div class="values">
        <label>{{ 'catalog.option-values' | translate }}</label>
        <vdr-option-value-input
            #optionValueInputComponent
            [(ngModel)]="group.values"
            (ngModelChange)="generateVariants()"
            (edit)="generateVariants()"
            [groupName]="group.name"
            [disabled]="group.name === ''"
        ></vdr-option-value-input>
    </div>
    <div class="remove-group">
        <button
            class="button-small mt-2"
            [title]="'catalog.remove-option' | translate"
            (click)="removeOption(group.name)"
        >
            <clr-icon shape="trash"></clr-icon>
        </button>
    </div>
</div>
<button class="button mb-2" (click)="addOption()">
    <clr-icon shape="plus"></clr-icon>
    {{ 'catalog.add-option' | translate }}
</button>

<ng-container *ngIf="stockLocations$ | async as stockLocations">
    <clr-alert *ngIf="stockLocations.length === 0" clrAlertType="warning" [clrAlertClosable]="false" class="">
        <clr-alert-item>
            <span class="alert-text">
                {{ 'catalog.no-stock-locations-available-on-current-channel' | translate }}
            </span>
        </clr-alert-item>
    </clr-alert>

    <div class="form-grid mb-2">
        <vdr-form-field *ngIf="stockLocations.length" [label]="'catalog.add-stock-to-location' | translate">
            <select [(ngModel)]="selectedStockLocationId">
                <option *ngFor="let location of stockLocations" [value]="location.id">
                    {{ location.name }}
                </option>
            </select>
        </vdr-form-field>
    </div>

    <div class="variants-preview" *ngIf="0 < stockLocations.length">
        <table class="table">
            <thead>
                <tr>
                    <th *ngIf="1 < variants.length">{{ 'common.create' | translate }}</th>
                    <th *ngIf="1 < variants.length">{{ 'catalog.variant' | translate }}</th>
                    <th>{{ 'catalog.sku' | translate }}</th>
                    <th>{{ 'catalog.price' | translate }}</th>
                    <th>{{ 'catalog.stock-on-hand' | translate }}</th>
                </tr>
            </thead>
            <tr
                *ngFor="let variant of variants; trackBy: trackByFn"
                [class.disabled]="!variantFormValues[variant.id].value.enabled === false"
                [formGroup]="variantFormValues[variant.id]"
            >
                <td *ngIf="1 < variants.length">
                    <input type="checkbox" formControlName="enabled" clrCheckbox />
                </td>
                <td *ngIf="1 < variants.length">
                    {{ variant.values.join(' ') }}
                </td>
                <td>
                    <vdr-form-field>
                        <input type="text" formControlName="sku" [placeholder]="'catalog.sku' | translate" />
                    </vdr-form-field>
                </td>
                <td>
                    <vdr-form-field>
                        <vdr-currency-input
                            formControlName="price"
                            [currencyCode]="currencyCode"
                        ></vdr-currency-input>
                    </vdr-form-field>
                </td>
                <td>
                    <vdr-form-field>
                        <input type="number" formControlName="stock" min="0" step="1" />
                    </vdr-form-field>
                </td>
            </tr>
        </table>
    </div>
</ng-container>
`,
      styles: [":host{display:block;margin-bottom:120px}.option-groups{display:flex}.values{flex:1;margin:0 6px}.remove-group{padding-top:18px}.variants-preview tr.disabled td{background-color:var(--color-component-bg-100);color:var(--color-grey-400)}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: FormBuilder
  }], {
    variantsChange: [{
      type: Output
    }],
    groupNameInputs: [{
      type: ViewChildren,
      args: ["optionGroupName", {
        read: ElementRef
      }]
    }]
  });
})();
var ProductVariantListComponent = class _ProductVariantListComponent extends TypedBaseListComponent {
  constructor() {
    super();
    this.hideLanguageSelect = false;
    this.pageLocationId = "product-variant-list";
    this.customFields = this.getCustomFieldConfig("ProductVariant");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilters([{
      name: "name",
      type: {
        kind: "text"
      },
      label: marker("common.name"),
      filterField: "name"
    }, {
      name: "enabled",
      type: {
        kind: "boolean"
      },
      label: marker("common.enabled"),
      filterField: "enabled"
    }, {
      name: "sku",
      type: {
        kind: "text"
      },
      label: marker("catalog.sku"),
      filterField: "sku"
    }, {
      name: "price",
      type: {
        kind: "number",
        inputType: "currency"
      },
      label: marker("common.price"),
      filterField: "price"
    }, {
      name: "priceWithTax",
      type: {
        kind: "number",
        inputType: "currency"
      },
      label: marker("common.price-with-tax"),
      filterField: "priceWithTax"
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
      name: "sku"
    }, {
      name: "price"
    }, {
      name: "priceWithTax"
    }]).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    this.configure({
      document: ProductVariantListQueryDocument,
      getItems: (data) => data.productVariants,
      setVariables: (skip2, take2) => {
        const searchTerm = this.searchTermControl.value;
        const filterParam = {
          _and: []
        };
        const filterInput = this.filters.createFilterInput();
        if (Object.keys(filterInput).length) {
          filterParam._and?.push(filterInput);
        }
        if (searchTerm) {
          filterParam._and?.push({
            _or: [{
              name: {
                contains: searchTerm
              }
            }, {
              sku: {
                contains: searchTerm
              }
            }]
          });
        }
        if (this.productId) {
          filterParam._and?.push({
            productId: {
              eq: this.productId
            }
          });
        }
        return {
          options: {
            skip: skip2,
            take: take2,
            filter: filterParam,
            sort: this.sorts.createSortInput()
          }
        };
      },
      refreshListOnChanges: [this.sorts.valueChanges, this.filters.valueChanges]
    });
  }
  static {
    this.ɵfac = function ProductVariantListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantListComponent,
      selectors: [["vdr-product-variant-list"]],
      inputs: {
        productId: "productId",
        hideLanguageSelect: "hideLanguageSelect",
        dataTableId: "dataTableId"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 46,
      vars: 67,
      consts: [["imagePlaceholder", ""], [3, "availableLanguageCodes", "currentLanguageCode", "languageCodeChange", 4, "ngIf"], [3, "locationId"], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], ["locationId", "product-variant-list", 3, "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault", "sort"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "image", 3, "heading"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "sku", 3, "heading", "sort"], ["id", "enabled", 3, "heading"], ["id", "price", 3, "heading", "hiddenByDefault", "sort"], ["id", "price-with-tax", 3, "heading", "sort"], ["id", "stock-on-hand", 3, "heading", "hiddenByDefault"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], [1, "image-placeholder"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], [1, "placeholder"], ["shape", "image", "size", "48"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success"], ["colorType", "warning"], [3, "title", 4, "ngFor", "ngForOf"], [3, "title"], [1, "flex", "center"], ["class", "ml-1", 4, "ngIf"], [1, "ml-1"], [3, "customField", "sorts"]],
      template: function ProductVariantListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left");
          ɵɵtemplate(3, ProductVariantListComponent_vdr_language_selector_3_Template, 3, 6, "vdr-language-selector", 1);
          ɵɵelementEnd();
          ɵɵelementStart(4, "vdr-ab-right");
          ɵɵelement(5, "vdr-action-bar-items", 2)(6, "vdr-action-bar-dropdown-menu", 2);
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "vdr-data-table-2", 3);
          ɵɵpipe(8, "async");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "async");
          ɵɵpipe(11, "async");
          ɵɵlistener("pageChange", function ProductVariantListComponent_Template_vdr_data_table_2_pageChange_7_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function ProductVariantListComponent_Template_vdr_data_table_2_itemsPerPageChange_7_listener($event) {
            return ctx.setItemsPerPage($event);
          });
          ɵɵelement(12, "vdr-bulk-action-menu", 4)(13, "vdr-dt2-search", 5);
          ɵɵpipe(14, "translate");
          ɵɵelementStart(15, "vdr-dt2-column", 6);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, ProductVariantListComponent_ng_template_17_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 7);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, ProductVariantListComponent_ng_template_20_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 8);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, ProductVariantListComponent_ng_template_23_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 9);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, ProductVariantListComponent_ng_template_26_Template, 4, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 10);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, ProductVariantListComponent_ng_template_29_Template, 4, 5, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 11);
          ɵɵpipe(31, "translate");
          ɵɵtemplate(32, ProductVariantListComponent_ng_template_32_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(33, "vdr-dt2-column", 12);
          ɵɵpipe(34, "translate");
          ɵɵtemplate(35, ProductVariantListComponent_ng_template_35_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(36, "vdr-dt2-column", 13);
          ɵɵpipe(37, "translate");
          ɵɵtemplate(38, ProductVariantListComponent_ng_template_38_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(39, "vdr-dt2-column", 14);
          ɵɵpipe(40, "translate");
          ɵɵtemplate(41, ProductVariantListComponent_ng_template_41_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(42, "vdr-dt2-column", 15);
          ɵɵpipe(43, "translate");
          ɵɵtemplate(44, ProductVariantListComponent_ng_template_44_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(45, ProductVariantListComponent_vdr_dt2_custom_field_column_45_Template, 1, 2, "vdr-dt2-custom-field-column", 16);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("ngIf", !ctx.hideLanguageSelect);
          ɵɵadvance(2);
          ɵɵproperty("locationId", ctx.pageLocationId);
          ɵɵadvance();
          ɵɵproperty("locationId", ctx.pageLocationId);
          ɵɵadvance();
          ɵɵproperty("id", ctx.dataTableId || "product-variant-list")("items", ɵɵpipeBind1(8, 37, ctx.items$))("itemsPerPage", ɵɵpipeBind1(9, 39, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(10, 41, ctx.totalItems$))("currentPage", ɵɵpipeBind1(11, 43, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(14, 45, "settings.search-by-product-name-or-sku"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 47, "common.id"))("hiddenByDefault", true)("sort", ctx.sorts.get("id"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 49, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 51, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 53, "common.image"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 55, "catalog.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(31, 57, "catalog.sku"))("sort", ctx.sorts.get("sku"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(34, 59, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(37, 61, "common.price"))("hiddenByDefault", true)("sort", ctx.sorts.get("price"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(40, 63, "common.price-with-tax"))("sort", ctx.sorts.get("priceWithTax"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(43, 65, "catalog.stock-on-hand"))("hiddenByDefault", false);
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, LanguageSelectorComponent, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, AssetPreviewPipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: [".image-col[_ngcontent-%COMP%]{width:70px}.image-placeholder[_ngcontent-%COMP%]{width:50px;height:50px;margin-top:calc(var(--space-unit) * -1);margin-bottom:calc(var(--space-unit) * -1);background-color:var(--color-component-bg-200)}.image-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--border-radius-img)}.image-placeholder[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]{text-align:center;color:var(--color-grey-300)}.search-form[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}vdr-product-search-input[_ngcontent-%COMP%]{min-width:300px}@media screen and (max-width: 768px){vdr-product-search-input[_ngcontent-%COMP%]{min-width:100px}}.search-settings-menu[_ngcontent-%COMP%]{margin:0 12px}td.disabled[_ngcontent-%COMP%]{background-color:var(--color-component-bg-200)}.search-index-button[_ngcontent-%COMP%]{position:relative}.search-index-button[_ngcontent-%COMP%]   vdr-status-badge[_ngcontent-%COMP%]{right:0;top:0}.run-updates-button[_ngcontent-%COMP%]{position:relative}.run-updates-button[_ngcontent-%COMP%]   vdr-status-badge[_ngcontent-%COMP%]{left:10px;top:10px}.edit-button[_ngcontent-%COMP%]{margin-inline-end:24px}.sku[_ngcontent-%COMP%]{color:var(--color-text-300)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-product-variant-list",
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left>
            <vdr-language-selector *ngIf="!hideLanguageSelect"
                                   [availableLanguageCodes]="availableLanguages$ | async"
                                   [currentLanguageCode]="contentLanguage$ | async"
                                   (languageCodeChange)="setLanguage($event)"
            ></vdr-language-selector>
        </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items [locationId]="pageLocationId" />
            <vdr-action-bar-dropdown-menu [locationId]="pageLocationId" />
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<vdr-data-table-2
    class="mt-2"
    [id]="dataTableId || 'product-variant-list'"
    [items]="items$ | async"
    [itemsPerPage]="itemsPerPage$ | async"
    [totalItems]="totalItems$ | async"
    [currentPage]="currentPage$ | async"
    [filters]="filters"
    (pageChange)="setPageNumber($event)"
    (itemsPerPageChange)="setItemsPerPage($event)"
>
    <vdr-bulk-action-menu
        locationId="product-variant-list"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    />
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'settings.search-by-product-name-or-sku' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true" [sort]="sorts.get('id')">
        <ng-template let-variant="item">
            {{ variant.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-variant="item">
            {{ variant.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-variant="item">
            {{ variant.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.image' | translate" id="image">
        <ng-template let-variant="item">
            <div class="image-placeholder">
                <img
                    *ngIf="variant.featuredAsset as asset; else imagePlaceholder"
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
    <vdr-dt2-column [heading]="'catalog.name' | translate" id="name" [optional]="false" [sort]="sorts.get('name')">
        <ng-template let-variant="item">
            <a
                class="button-ghost"
                [routerLink]="['/catalog/products', variant.productId, 'variants', variant.id]"
            ><span>{{ variant.name }}</span
            >
                <clr-icon shape="arrow right"
                />
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'catalog.sku' | translate" id="sku" [sort]="sorts.get('sku')">
        <ng-template let-variant="item">
            {{ variant.sku }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.enabled' | translate" id="enabled">
        <ng-template let-variant="item">
            <vdr-chip *ngIf="variant.enabled" colorType="success">{{
                    'common.enabled' | translate
                }}
            </vdr-chip>
            <vdr-chip *ngIf="!variant.enabled" colorType="warning">{{
                    'common.disabled' | translate
                }}
            </vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.price' | translate" id="price"
        [hiddenByDefault]="true"
        [sort]="sorts.get('price')"
    >
        <ng-template let-variant="item">
            {{ variant.price | localeCurrency : variant.currencyCode }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.price-with-tax' | translate" id="price-with-tax"
                    [sort]="sorts.get('priceWithTax')">
        <ng-template let-variant="item">
            {{ variant.priceWithTax | localeCurrency : variant.currencyCode }}
        </ng-template>
    </vdr-dt2-column>

    <vdr-dt2-column [heading]="'catalog.stock-on-hand' | translate" id="stock-on-hand" [hiddenByDefault]="false">
        <ng-template let-variant="item">
            <vdr-chip *ngFor="let stockLevel of variant.stockLevels" [title]="stockLevel.stockLocation?.name">
                <div class="flex center">
                    <div>
                        {{
                            stockLevel.stockOnHand
                        }}<span class="ml-1" *ngIf="stockLevel.stockAllocated"
                    >({{ stockLevel.stockAllocated }} allocated)</span
                    >
                    </div>
                </div>
            </vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column *ngFor="let field of customFields" [customField]="field" [sorts]="sorts" />
</vdr-data-table-2>
`,
      styles: [".image-col{width:70px}.image-placeholder{width:50px;height:50px;margin-top:calc(var(--space-unit) * -1);margin-bottom:calc(var(--space-unit) * -1);background-color:var(--color-component-bg-200)}.image-placeholder img{border-radius:var(--border-radius-img)}.image-placeholder .placeholder{text-align:center;color:var(--color-grey-300)}.search-form{display:flex;align-items:center;width:100%}vdr-product-search-input{min-width:300px}@media screen and (max-width: 768px){vdr-product-search-input{min-width:100px}}.search-settings-menu{margin:0 12px}td.disabled{background-color:var(--color-component-bg-200)}.search-index-button{position:relative}.search-index-button vdr-status-badge{right:0;top:0}.run-updates-button{position:relative}.run-updates-button vdr-status-badge{left:10px;top:10px}.edit-button{margin-inline-end:24px}.sku{color:var(--color-text-300)}\n"]
    }]
  }], () => [], {
    productId: [{
      type: Input
    }],
    hideLanguageSelect: [{
      type: Input
    }],
    dataTableId: [{
      type: Input
    }]
  });
})();
var GET_PRODUCT_DETAIL = gql`
    query GetProductDetail($id: ID!) {
        product(id: $id) {
            ...ProductDetail
        }
    }
    ${PRODUCT_DETAIL_FRAGMENT}
`;
var ProductDetailComponent = class _ProductDetailComponent extends TypedBaseDetailComponent {
  constructor(productDetailService, formBuilder, modalService, notificationService, dataService, changeDetector) {
    super();
    this.productDetailService = productDetailService;
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.notificationService = notificationService;
    this.dataService = dataService;
    this.changeDetector = changeDetector;
    this.customFields = this.getCustomFieldConfig("Product");
    this.detailForm = this.formBuilder.group({
      enabled: true,
      name: ["", Validators.required],
      autoUpdateVariantNames: true,
      slug: ["", unicodePatternValidator(/^[\p{Letter}0-9._-]+$/u)],
      description: "",
      facetValueIds: [[]],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.assetChanges = {};
    this.createVariantsConfig = {
      groups: [],
      variants: [],
      stockLocationId: ""
    };
    this.updatePermissions = [Permission.UpdateCatalog, Permission.UpdateProduct];
  }
  ngOnInit() {
    this.init();
    const productFacetValues$ = this.isNew$.pipe(switchMap((isNew) => {
      return isNew ? of([]) : this.entity$.pipe(map((product) => product.facetValues));
    }));
    const productGroup = this.detailForm;
    const formFacetValueIdChanges$ = productGroup.get("facetValueIds").valueChanges.pipe(distinctUntilChanged(), switchMap((ids) => this.dataService.facet.getFacetValues({
      filter: {
        id: {
          in: ids
        }
      }
    }).mapSingle(({
      facetValues
    }) => facetValues.items)), shareReplay(1));
    this.facetValues$ = concat(productFacetValues$.pipe(take(1)), productFacetValues$.pipe(switchMap(() => formFacetValueIdChanges$)));
    this.productChannels$ = this.entity$.pipe(map((p) => p.channels));
  }
  ngOnDestroy() {
    this.destroy();
  }
  isDefaultChannel(channelCode) {
    return channelCode === import_shared_constants.DEFAULT_CHANNEL_CODE;
  }
  assignToChannel() {
    this.productChannels$.pipe(take(1), switchMap((channels) => this.modalService.fromComponent(AssignProductsToChannelDialogComponent, {
      size: "lg",
      locals: {
        productIds: [this.id],
        currentChannelIds: channels.map((c) => c.id)
      }
    }))).subscribe();
  }
  removeFromChannel(channelId) {
    from(getChannelCodeFromUserStatus(this.dataService, channelId)).pipe(switchMap(({
      channelCode
    }) => this.modalService.dialog({
      title: marker("catalog.remove-product-from-channel"),
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("catalog.remove-from-channel"),
        translationVars: {
          channelCode
        },
        returnValue: true
      }]
    })), switchMap((response) => response ? this.dataService.product.removeProductsFromChannel({
      channelId,
      productIds: [this.id]
    }) : EMPTY)).subscribe(() => {
      this.notificationService.success(marker("catalog.notify-remove-product-from-channel-success"));
    }, (err) => {
      this.notificationService.error(marker("catalog.notify-remove-product-from-channel-error"));
    });
  }
  assignVariantToChannel(variant) {
    return this.modalService.fromComponent(AssignProductsToChannelDialogComponent, {
      size: "lg",
      locals: {
        productIds: [this.id],
        productVariantIds: [variant.id],
        currentChannelIds: variant.channels.map((c) => c.id)
      }
    }).subscribe();
  }
  removeVariantFromChannel({
    channelId,
    variant
  }) {
    from(getChannelCodeFromUserStatus(this.dataService, channelId)).pipe(switchMap(({
      channelCode
    }) => this.modalService.dialog({
      title: marker("catalog.remove-product-variant-from-channel"),
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("catalog.remove-from-channel"),
        translationVars: {
          channelCode
        },
        returnValue: true
      }]
    })), switchMap((response) => response ? this.dataService.product.removeVariantsFromChannel({
      channelId,
      productVariantIds: [variant.id]
    }) : EMPTY)).subscribe(() => {
      this.notificationService.success(marker("catalog.notify-remove-variant-from-channel-success"));
    }, (err) => {
      this.notificationService.error(marker("catalog.notify-remove-variant-from-channel-error"));
    });
  }
  assetsChanged() {
    return !!Object.values(this.assetChanges).length;
  }
  /**
   * If creating a new product, automatically generate the slug based on the product name.
   */
  updateSlug(nameValue) {
    const slugControl = this.detailForm.get("slug");
    const currentTranslation = this.entity ? findTranslation(this.entity, this.languageCode) : void 0;
    const currentSlugIsEmpty = !currentTranslation || !currentTranslation.slug;
    if (slugControl && slugControl.pristine && currentSlugIsEmpty) {
      slugControl.setValue((0, import_normalize_string.normalizeString)(`${nameValue}`, "-"));
    }
  }
  selectProductFacetValue() {
    this.displayFacetValueModal().subscribe((facetValueIds) => {
      if (facetValueIds) {
        const facetValueIdsControl = this.detailForm.controls.facetValueIds;
        const currentFacetValueIds = facetValueIdsControl.value ?? [];
        facetValueIdsControl.setValue((0, import_unique.unique)([...currentFacetValueIds, ...facetValueIds]));
        facetValueIdsControl.markAsDirty();
      }
    });
  }
  removeProductFacetValue(facetValueId) {
    const facetValueIdsControl = this.detailForm.controls.facetValueIds;
    const currentFacetValueIds = facetValueIdsControl.value ?? [];
    facetValueIdsControl.setValue(currentFacetValueIds.filter((id) => id !== facetValueId));
    facetValueIdsControl.markAsDirty();
  }
  displayFacetValueModal() {
    return this.modalService.fromComponent(ApplyFacetDialogComponent, {
      size: "md",
      closable: true
    }).pipe(map((facetValues) => facetValues && facetValues.map((v) => v.id)));
  }
  create() {
    const productGroup = this.detailForm;
    if (!productGroup.dirty) {
      return;
    }
    const newProduct = this.getUpdatedProduct({
      id: "",
      createdAt: "",
      updatedAt: "",
      enabled: true,
      languageCode: this.languageCode,
      name: "",
      slug: "",
      featuredAsset: null,
      assets: [],
      description: "",
      translations: [],
      optionGroups: [],
      facetValues: [],
      channels: []
    }, productGroup, this.languageCode);
    this.productDetailService.createProductWithVariants(newProduct, this.createVariantsConfig, this.languageCode).subscribe(({
      createProductVariants,
      productId
    }) => {
      this.notificationService.success(marker("common.notify-create-success"), {
        entity: "Product"
      });
      this.assetChanges = {};
      this.detailForm.markAsPristine();
      this.router.navigate(["../", productId], {
        relativeTo: this.route
      });
    }, (err) => {
      console.error(err);
      this.notificationService.error(marker("common.notify-create-error"), {
        entity: "Product"
      });
    });
  }
  save() {
    combineLatest(this.entity$, this.languageCode$).pipe(take(1), mergeMap(([product, languageCode]) => {
      const productGroup = this.detailForm;
      let productInput;
      let variantsInput;
      if (productGroup.dirty || this.assetsChanged()) {
        productInput = this.getUpdatedProduct(product, productGroup, languageCode);
      }
      return this.productDetailService.updateProduct({
        product,
        languageCode,
        autoUpdate: this.detailForm.get(["autoUpdateVariantNames"])?.value ?? false,
        productInput,
        variantsInput
      });
    })).subscribe((result) => {
      this.updateSlugAfterSave(result);
      this.detailForm.markAsPristine();
      this.assetChanges = {};
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "Product"
      });
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "Product"
      });
    });
  }
  canDeactivate() {
    return super.canDeactivate() && !this.assetChanges.assets && !this.assetChanges.featuredAsset;
  }
  /**
   * Sets the values of the form on changes to the product or current language.
   */
  setFormValues(product, languageCode) {
    const currentTranslation = findTranslation(product, languageCode);
    this.detailForm.patchValue({
      enabled: product.enabled,
      name: currentTranslation ? currentTranslation.name : "",
      slug: currentTranslation ? currentTranslation.slug : "",
      description: currentTranslation ? currentTranslation.description : "",
      facetValueIds: product.facetValues.map((fv) => fv.id)
    });
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get(["customFields"]), product, currentTranslation);
    }
  }
  /**
   * Given a product and the value of the detailForm, this method creates an updated copy of the product which
   * can then be persisted to the API.
   */
  getUpdatedProduct(product, productFormGroup, languageCode) {
    const updatedProduct = createUpdatedTranslatable({
      translatable: product,
      updatedFields: productFormGroup.value,
      customFieldConfig: this.customFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: product.name || "",
        slug: product.slug || "",
        description: product.description || ""
      }
    });
    return __spreadProps(__spreadValues({}, updatedProduct), {
      assetIds: this.assetChanges.assets?.map((a) => a.id),
      featuredAssetId: this.assetChanges.featuredAsset?.id,
      facetValueIds: productFormGroup.controls.facetValueIds.dirty ? productFormGroup.value.facetValueIds : void 0
    });
  }
  /**
   * The server may alter the slug value in order to normalize and ensure uniqueness upon saving.
   */
  updateSlugAfterSave(results) {
    const firstResult = results[0];
    const slugControl = this.detailForm.get(["product", "slug"]);
    function isUpdateMutation(input) {
      return input.hasOwnProperty("updateProduct");
    }
    if (slugControl && isUpdateMutation(firstResult)) {
      slugControl.setValue(firstResult.updateProduct.slug, {
        emitEvent: false
      });
    }
  }
  static {
    this.ɵfac = function ProductDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailComponent)(ɵɵdirectiveInject(ProductDetailService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductDetailComponent,
      selectors: [["vdr-product-detail2"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 69,
      vars: 86,
      consts: [["updateButton", ""], ["variantList", ""], [1, "flex", "clr-flex-row"], [3, "languageCodeChange", "disabled", "availableLanguageCodes", "currentLanguageCode"], ["locationId", "product-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "form", 3, "formGroup"], ["for", "visibility", 3, "label"], [4, "vdrIfPermissions"], [4, "ngIf"], [3, "title", 4, "ngIf"], [3, "title"], [1, "facets"], [3, "facetValue", "removable", "remove", 4, "ngFor", "ngForOf"], ["class", "button-small mt-2", 3, "click", 4, "vdrIfPermissions"], ["type", "submit", "hidden", "", "x-data", "prevents enter key from triggering other buttons"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "input", "readonly"], ["for", "slug", 3, "label", "errors"], ["id", "slug", "type", "text", "formControlName", "slug", 3, "readonly"], ["for", "slug", 1, "form-grid-span", 3, "label", "errors"], ["formControlName", "description", 3, "readonly"], ["locationId", "product-detail", 3, "entity$", "detailForm"], [3, "change", "assets", "featuredAsset", "updatePermissions"], [3, "title", "paddingX"], [4, "ngIf", "ngIfElse"], ["class", "mx-3", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], ["type", "checkbox", "clrToggle", "", "name", "enabled", 3, "formControl"], [3, "title", 4, "vdrIfMultichannel"], [4, "vdrIfDefaultChannelActive"], [1, "flex", "channel-assignment"], [1, "mb-2"], [4, "ngFor", "ngForOf"], [1, "button-small", 3, "click"], ["shape", "layers"], ["icon", "times-circle", 3, "iconClick", 4, "ngIf"], ["icon", "times-circle", 3, "iconClick"], [3, "channelCode"], [1, "options"], [3, "colorFrom", "invert", 4, "ngFor", "ngForOf"], ["class", "button-small mt-2", 3, "routerLink", 4, "vdrIfPermissions"], [3, "colorFrom", "invert"], [1, "button-small", "mt-2", 3, "routerLink"], ["shape", "pencil"], [3, "remove", "facetValue", "removable"], [1, "button-small", "mt-2", 3, "click"], ["shape", "plus"], [3, "entity"], ["clrCheckbox", "", "type", "checkbox", "id", "auto-update", "formControlName", "autoUpdateVariantNames"], ["entityName", "Product", 3, "customFields", "customFieldsFormGroup", "readonly"], [3, "variantsChange"], ["dataTableId", "product-detail-variants-list", 3, "productId", "hideLanguageSelect"], [1, "mx-3"], [1, "button", 3, "routerLink"], ["shape", "add-text"]],
      template: function ProductDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left");
          ɵɵelement(3, "div", 2);
          ɵɵelementStart(4, "vdr-language-selector", 3);
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "async");
          ɵɵpipe(7, "async");
          ɵɵlistener("languageCodeChange", function ProductDetailComponent_Template_vdr_language_selector_languageCodeChange_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.setLanguage($event));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(8, "vdr-ab-right");
          ɵɵelement(9, "vdr-action-bar-items", 4);
          ɵɵtemplate(10, ProductDetailComponent_button_10_Template, 3, 4, "button", 5);
          ɵɵpipe(11, "async");
          ɵɵtemplate(12, ProductDetailComponent_ng_template_12_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelement(14, "vdr-action-bar-dropdown-menu", 4);
          ɵɵelementEnd()()();
          ɵɵelementStart(15, "form", 6)(16, "vdr-page-detail-layout")(17, "vdr-page-detail-sidebar")(18, "vdr-card")(19, "vdr-form-field", 7);
          ɵɵpipe(20, "translate");
          ɵɵtemplate(21, ProductDetailComponent_clr_toggle_wrapper_21_Template, 5, 5, "clr-toggle-wrapper", 8);
          ɵɵelementEnd()();
          ɵɵtemplate(22, ProductDetailComponent_ng_container_22_Template, 2, 0, "ng-container", 9);
          ɵɵpipe(23, "async");
          ɵɵtemplate(24, ProductDetailComponent_vdr_card_24_Template, 7, 8, "vdr-card", 10);
          ɵɵelementStart(25, "vdr-card", 11);
          ɵɵpipe(26, "translate");
          ɵɵelementStart(27, "div", 12);
          ɵɵtemplate(28, ProductDetailComponent_vdr_facet_value_chip_28_Template, 2, 4, "vdr-facet-value-chip", 13);
          ɵɵpipe(29, "async");
          ɵɵelementEnd();
          ɵɵelementStart(30, "div");
          ɵɵtemplate(31, ProductDetailComponent_button_31_Template, 4, 3, "button", 14);
          ɵɵelementEnd()();
          ɵɵtemplate(32, ProductDetailComponent_vdr_card_32_Template, 2, 1, "vdr-card", 9);
          ɵɵpipe(33, "async");
          ɵɵelementEnd();
          ɵɵelementStart(34, "vdr-page-block");
          ɵɵelement(35, "button", 15);
          ɵɵelementStart(36, "vdr-card")(37, "div", 16)(38, "div")(39, "vdr-form-field", 17);
          ɵɵpipe(40, "translate");
          ɵɵelementStart(41, "input", 18);
          ɵɵpipe(42, "hasPermission");
          ɵɵlistener("input", function ProductDetailComponent_Template_input_input_41_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.updateSlug($event.target.value));
          });
          ɵɵelementEnd()();
          ɵɵtemplate(43, ProductDetailComponent_div_43_Template, 6, 3, "div", 9);
          ɵɵpipe(44, "async");
          ɵɵelementEnd();
          ɵɵelementStart(45, "vdr-form-field", 19);
          ɵɵpipe(46, "translate");
          ɵɵpipe(47, "translate");
          ɵɵelement(48, "input", 20);
          ɵɵpipe(49, "hasPermission");
          ɵɵelementEnd();
          ɵɵelementStart(50, "vdr-form-field", 21);
          ɵɵpipe(51, "translate");
          ɵɵpipe(52, "translate");
          ɵɵelement(53, "vdr-rich-text-editor", 22);
          ɵɵpipe(54, "hasPermission");
          ɵɵelementEnd()()();
          ɵɵtemplate(55, ProductDetailComponent_vdr_card_55_Template, 4, 8, "vdr-card", 10);
          ɵɵelement(56, "vdr-custom-detail-component-host", 23);
          ɵɵelementStart(57, "vdr-card", 11);
          ɵɵpipe(58, "translate");
          ɵɵelementStart(59, "vdr-assets", 24);
          ɵɵlistener("change", function ProductDetailComponent_Template_vdr_assets_change_59_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.assetChanges = $event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(60, "vdr-card", 25);
          ɵɵpipe(61, "translate");
          ɵɵpipe(62, "async");
          ɵɵtemplate(63, ProductDetailComponent_div_63_Template, 2, 0, "div", 26);
          ɵɵpipe(64, "async");
          ɵɵtemplate(65, ProductDetailComponent_ng_template_65_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor)(67, ProductDetailComponent_div_67_Template, 5, 5, "div", 27);
          ɵɵpipe(68, "async");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          let tmp_18_0;
          const updateButton_r14 = ɵɵreference(13);
          const variantList_r15 = ɵɵreference(66);
          ɵɵadvance(4);
          ɵɵproperty("disabled", ɵɵpipeBind1(5, 35, ctx.isNew$))("availableLanguageCodes", ɵɵpipeBind1(6, 37, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(7, 39, ctx.languageCode$));
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(11, 41, ctx.isNew$))("ngIfElse", updateButton_r14);
          ɵɵadvance(5);
          ɵɵproperty("formGroup", ctx.detailForm);
          ɵɵadvance(4);
          ɵɵproperty("label", ɵɵpipeBind1(20, 43, "catalog.visibility"));
          ɵɵadvance(2);
          ɵɵproperty("vdrIfPermissions", ctx.updatePermissions);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ɵɵpipeBind1(23, 45, ctx.isNew$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.entity == null ? null : ctx.entity.optionGroups.length);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(26, 47, "catalog.facets"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(29, 49, ctx.facetValues$));
          ɵɵadvance(3);
          ɵɵproperty("vdrIfPermissions", ctx.updatePermissions);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(33, 51, ctx.entity$));
          ɵɵadvance(7);
          ɵɵproperty("label", ɵɵpipeBind1(40, 53, "catalog.product-name"));
          ɵɵadvance(2);
          ɵɵproperty("readonly", !ɵɵpipeBind1(42, 55, ctx.updatePermissions));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(44, 57, ctx.isNew$) === false && ((tmp_18_0 = ctx.detailForm.get(ɵɵpureFunction0(81, _c41))) == null ? null : tmp_18_0.dirty));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(46, 59, "catalog.slug"))("errors", ɵɵpureFunction1(82, _c19, ɵɵpipeBind1(47, 61, "catalog.slug-pattern-error")));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(49, 63, ctx.updatePermissions));
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(51, 65, "common.description"))("errors", ɵɵpureFunction1(84, _c19, ɵɵpipeBind1(52, 67, "catalog.slug-pattern-error")));
          ɵɵadvance(3);
          ɵɵproperty("readonly", !ɵɵpipeBind1(54, 69, ctx.updatePermissions));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
          ɵɵadvance();
          ɵɵproperty("entity$", ctx.entity$)("detailForm", ctx.detailForm);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(58, 71, "catalog.assets"));
          ɵɵadvance(2);
          ɵɵproperty("assets", ctx.assetChanges.assets || (ctx.entity == null ? null : ctx.entity.assets))("featuredAsset", ctx.assetChanges.featuredAsset || (ctx.entity == null ? null : ctx.entity.featuredAsset))("updatePermissions", ctx.updatePermissions);
          ɵɵadvance();
          ɵɵproperty("title", ɵɵpipeBind1(61, 73, "catalog.product-variants"))("paddingX", ɵɵpipeBind1(62, 75, ctx.isNew$));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(64, 77, ctx.isNew$))("ngIfElse", variantList_r15);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ɵɵpipeBind1(68, 79, ctx.isNew$) === false);
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, AssetsComponent, ChipComponent, FacetValueChipComponent, FormFieldComponent, FormFieldControlDirective, FormItemComponent, LanguageSelectorComponent, RichTextEditorComponent, IfPermissionsDirective, IfMultichannelDirective, ActionBarItemsComponent, ChannelBadgeComponent, IfDefaultChannelActiveDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, GenerateProductVariantsComponent, ProductVariantListComponent, AsyncPipe, TranslatePipe, SortPipe, HasPermissionPipe, ChannelLabelPipe],
      styles: ["[_nghost-%COMP%]     trix-toolbar{top:24px}.facets[_ngcontent-%COMP%], .options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:3px}vdr-action-bar[_ngcontent-%COMP%]   clr-toggle-wrapper[_ngcontent-%COMP%]{margin-top:12px}.variant-filter[_ngcontent-%COMP%]{flex:1;display:flex}.variant-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;max-width:initial;border-radius:3px 0 0 3px!important}.variant-filter[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]{border:1px solid var(--color-component-border-300);background-color:var(--color-component-bg-100);border-radius:0 3px 3px 0;border-inline-start:none}.group-name[_ngcontent-%COMP%]{padding-inline-end:6px}.view-mode[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}@media screen and (min-width: 768px){.view-mode[_ngcontent-%COMP%]{flex-direction:row}}.edit-variants-btn[_ngcontent-%COMP%]{margin-top:0}.channel-assignment[_ngcontent-%COMP%]{flex-wrap:wrap;min-height:24px}.pagination-row[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-product-detail2",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left>
            <div class="flex clr-flex-row"></div>
            <vdr-language-selector
                [disabled]="isNew$ | async"
                [availableLanguageCodes]="availableLanguages$ | async"
                [currentLanguageCode]="languageCode$ | async"
                (languageCodeChange)="setLanguage($event)"
            ></vdr-language-selector>
        </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="product-detail"></vdr-action-bar-items>
            <button
                class="btn btn-primary"
                *ngIf="isNew$ | async; else updateButton"
                (click)="create()"
                [disabled]="detailForm.invalid || detailForm.pristine || createVariantsConfig.variants.length === 0"
            >
                {{ 'common.create' | translate }}
            </button>
            <ng-template #updateButton>
                <button
                    *vdrIfPermissions="updatePermissions"
                    class="btn btn-primary"
                    (click)="save()"
                    [disabled]="(detailForm.invalid || detailForm.pristine) && !assetsChanged()"
                >
                    {{ 'common.update' | translate }}
                </button>
            </ng-template>
            <vdr-action-bar-dropdown-menu locationId="product-detail"></vdr-action-bar-dropdown-menu>
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>

<form class="form" [formGroup]="detailForm">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar>
            <vdr-card>
                <vdr-form-field [label]="'catalog.visibility' | translate" for="visibility">
                    <clr-toggle-wrapper *vdrIfPermissions="updatePermissions">
                        <input
                            type="checkbox"
                            clrToggle
                            name="enabled"
                            [formControl]="detailForm.get(['enabled'])"
                        />
                        <label>{{ 'common.enabled' | translate }}</label>
                    </clr-toggle-wrapper>
                </vdr-form-field>
            </vdr-card>
            <ng-container *ngIf="!(isNew$ | async)">
                <vdr-card *vdrIfMultichannel [title]="'common.channels' | translate">
                    <vdr-form-item *vdrIfDefaultChannelActive>
                        <div class="flex channel-assignment">
                            <div class="mb-2">
                                <ng-container *ngFor="let channel of productChannels$ | async">
                                    <vdr-chip
                                        *ngIf="!isDefaultChannel(channel.code)"
                                        icon="times-circle"
                                        (iconClick)="removeFromChannel(channel.id)"
                                    >
                                        <vdr-channel-badge [channelCode]="channel.code"></vdr-channel-badge>
                                        {{ channel.code | channelCodeToLabel }}
                                    </vdr-chip>
                                </ng-container>
                            </div>
                            <button class="button-small" (click)="assignToChannel()">
                                <clr-icon shape="layers"></clr-icon>
                                {{ 'common.assign-to-channel' | translate }}
                            </button>
                        </div>
                    </vdr-form-item>
                </vdr-card>
            </ng-container>
            <vdr-card *ngIf="entity?.optionGroups.length" [title]="'catalog.product-options' | translate">
                <div class="options">
                    <vdr-chip
                        *ngFor="let optionGroup of entity?.optionGroups | sort : 'id'"
                        [colorFrom]="optionGroup.code"
                        [invert]="true"
                    >
                        {{ optionGroup.name }}
                    </vdr-chip>
                </div>
                <div>
                    <a [routerLink]="['options']" class="button-small mt-2" *vdrIfPermissions="updatePermissions">
                        <clr-icon shape="pencil"></clr-icon>
                        {{ 'catalog.edit-options' | translate }}
                    </a>
                </div>
            </vdr-card>
            <vdr-card [title]="'catalog.facets' | translate">
                <div class="facets">
                    <vdr-facet-value-chip
                        *ngFor="let facetValue of facetValues$ | async"
                        [facetValue]="facetValue"
                        [removable]="updatePermissions | hasPermission"
                        (remove)="removeProductFacetValue(facetValue.id)"
                    ></vdr-facet-value-chip>
                </div>
                <div>
                    <button
                        class="button-small mt-2"
                        *vdrIfPermissions="updatePermissions"
                        (click)="selectProductFacetValue()"
                    >
                        <clr-icon shape="plus"></clr-icon>
                        {{ 'catalog.add-facets' | translate }}
                    </button>
                </div>
            </vdr-card>
            <vdr-card *ngIf="entity$ | async as entity">
                <vdr-page-entity-info [entity]="entity"></vdr-page-entity-info>
            </vdr-card>
        </vdr-page-detail-sidebar>

        <vdr-page-block>
            <button type="submit" hidden x-data="prevents enter key from triggering other buttons"></button>
            <vdr-card>
                <div class="form-grid">
                    <div>
                        <vdr-form-field [label]="'catalog.product-name' | translate" for="name">
                            <input
                                id="name"
                                type="text"
                                formControlName="name"
                                [readonly]="!(updatePermissions | hasPermission)"
                                (input)="updateSlug($event.target.value)"
                            />
                        </vdr-form-field>
                        <div *ngIf="(isNew$ | async) === false && detailForm.get(['name'])?.dirty">
                            <clr-checkbox-wrapper>
                                <input
                                    clrCheckbox
                                    type="checkbox"
                                    id="auto-update"
                                    formControlName="autoUpdateVariantNames"
                                />
                                <label>{{ 'catalog.auto-update-product-variant-name' | translate }}</label>
                            </clr-checkbox-wrapper>
                        </div>
                    </div>
                    <vdr-form-field
                        [label]="'catalog.slug' | translate"
                        for="slug"
                        [errors]="{ pattern: 'catalog.slug-pattern-error' | translate }"
                    >
                        <input
                            id="slug"
                            type="text"
                            formControlName="slug"
                            [readonly]="!(updatePermissions | hasPermission)"
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
                            [readonly]="!(updatePermissions | hasPermission)"
                        ></vdr-rich-text-editor>
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card [title]="'common.custom-fields' | translate" *ngIf="customFields.length">
                <vdr-tabbed-custom-fields
                    entityName="Product"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                    [readonly]="!(updatePermissions | hasPermission)"
                ></vdr-tabbed-custom-fields>
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="product-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            ></vdr-custom-detail-component-host>
            <vdr-card [title]="'catalog.assets' | translate">
                <vdr-assets
                    [assets]="assetChanges.assets || entity?.assets"
                    [featuredAsset]="assetChanges.featuredAsset || entity?.featuredAsset"
                    [updatePermissions]="updatePermissions"
                    (change)="assetChanges = $event"
                ></vdr-assets>
            </vdr-card>

            <vdr-card [title]="'catalog.product-variants' | translate" [paddingX]="isNew$ | async">
                <div *ngIf="isNew$ | async; else variantList">
                    <vdr-generate-product-variants
                        (variantsChange)="createVariantsConfig = $event"
                    ></vdr-generate-product-variants>
                </div>
                <ng-template #variantList>
                    <vdr-product-variant-list
                        [productId]="this.id"
                        dataTableId="product-detail-variants-list"
                        [hideLanguageSelect]="true"
                    ></vdr-product-variant-list>
                </ng-template>
                <div class="mx-3" *ngIf="(isNew$ | async) === false">
                    <a class="button" [routerLink]="['manage-variants']">
                        <clr-icon shape="add-text"></clr-icon>
                        {{ 'catalog.manage-variants' | translate }}</a
                    >
                </div>
            </vdr-card>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`,
      styles: [":host ::ng-deep trix-toolbar{top:24px}.facets,.options{display:flex;flex-wrap:wrap;gap:3px}vdr-action-bar clr-toggle-wrapper{margin-top:12px}.variant-filter{flex:1;display:flex}.variant-filter input{flex:1;max-width:initial;border-radius:3px 0 0 3px!important}.variant-filter .icon-button{border:1px solid var(--color-component-border-300);background-color:var(--color-component-bg-100);border-radius:0 3px 3px 0;border-inline-start:none}.group-name{padding-inline-end:6px}.view-mode{display:flex;flex-direction:column;justify-content:space-between}@media screen and (min-width: 768px){.view-mode{flex-direction:row}}.edit-variants-btn{margin-top:0}.channel-assignment{flex-wrap:wrap;min-height:24px}.pagination-row{display:flex;align-items:baseline;justify-content:space-between}\n"]
    }]
  }], () => [{
    type: ProductDetailService
  }, {
    type: FormBuilder
  }, {
    type: ModalService
  }, {
    type: NotificationService
  }, {
    type: DataService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var deleteProductsBulkAction = {
  location: "product-list",
  label: marker("common.delete"),
  icon: "trash",
  iconClass: "is-danger",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteProduct) || userPermissions.includes(Permission.DeleteCatalog),
  onClick: ({
    injector,
    selection,
    hostComponent,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    const dataService = injector.get(DataService);
    const notificationService = injector.get(NotificationService);
    modalService.dialog({
      title: marker("catalog.confirm-bulk-delete-products"),
      translationVars: {
        count: selection.length
      },
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(switchMap((response) => response ? dataService.product.deleteProducts((0, import_unique.unique)(selection.map((p) => p.id))) : EMPTY)).subscribe((result) => {
      let deleted = 0;
      const errors = [];
      for (const item of result.deleteProducts) {
        if (item.result === DeletionResult.DELETED) {
          deleted++;
        } else if (item.message) {
          errors.push(item.message);
        }
      }
      if (0 < deleted) {
        notificationService.success(marker("catalog.notify-bulk-delete-products-success"), {
          count: deleted
        });
      }
      if (0 < errors.length) {
        notificationService.error(errors.join("\n"));
      }
      hostComponent.refresh();
      clearSelection();
    });
  }
};
var assignProductsToChannelBulkAction = {
  location: "product-list",
  label: marker("common.assign-to-channel"),
  icon: "layers",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateProduct),
  isVisible: ({
    injector
  }) => isMultiChannel(injector.get(DataService)),
  onClick: ({
    injector,
    selection,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    modalService.fromComponent(AssignProductsToChannelDialogComponent, {
      size: "lg",
      locals: {
        productIds: (0, import_unique.unique)(selection.map((p) => p.id)),
        currentChannelIds: []
      }
    }).subscribe((result) => {
      if (result) {
        clearSelection();
      }
    });
  }
};
var removeProductsFromChannelBulkAction = createBulkRemoveFromChannelAction({
  location: "product-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateProduct),
  getItemName: (item) => item.name,
  bulkRemoveFromChannel: (dataService, productIds, channelId) => dataService.product.removeProductsFromChannel({
    channelId,
    productIds
  }).pipe(map((res) => res.removeProductsFromChannel))
});
var assignFacetValuesToProductsBulkAction = {
  location: "product-list",
  label: marker("catalog.edit-facet-values"),
  icon: "tag",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateProduct),
  onClick: ({
    injector,
    selection,
    hostComponent,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    const notificationService = injector.get(NotificationService);
    const mode = "product";
    const ids = (0, import_unique.unique)(selection.map((p) => p.id));
    return modalService.fromComponent(BulkAddFacetValuesDialogComponent, {
      size: "xl",
      locals: {
        mode,
        ids
      }
    }).subscribe((result) => {
      if (result) {
        notificationService.success(marker("common.notify-bulk-update-success"), {
          count: selection.length,
          entity: mode === "product" ? "Products" : "ProductVariants"
        });
        clearSelection();
      }
    });
  }
};
var duplicateProductsBulkAction = {
  location: "product-list",
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
        entityName: "Product",
        title: marker("catalog.duplicate-products"),
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
var ProductListComponent = class _ProductListComponent extends TypedBaseListComponent {
  constructor(dataService, modalService, notificationService, jobQueueService) {
    super();
    this.dataService = dataService;
    this.modalService = modalService;
    this.notificationService = notificationService;
    this.jobQueueService = jobQueueService;
    this.pendingSearchIndexUpdates = 0;
    this.dataTableListId = "product-list";
    this.pageLocationId = "product-list";
    this.customFields = this.getCustomFieldConfig("Product");
    this.filters = this.createFilterCollection().addIdFilter().addDateFilters().addFilters([{
      name: "enabled",
      type: {
        kind: "boolean"
      },
      label: marker("common.enabled"),
      filterField: "enabled"
    }, {
      name: "slug",
      type: {
        kind: "text"
      },
      label: marker("common.slug"),
      filterField: "slug"
    }]).addFilter({
      name: "facetValues",
      type: {
        kind: "custom",
        component: FacetValueFormInputComponent,
        serializeValue: (value) => value.map((v) => v.id).join(","),
        deserializeValue: (value) => value.split(",").map((id) => ({
          id
        })),
        getLabel: (value) => {
          if (value.length === 0) {
            return "";
          }
          if (value[0].name) {
            return value.map((v) => v.name).join(", ");
          } else {
            return lastValueFrom(this.dataService.facet.getFacetValues({
              filter: {
                id: {
                  in: value.map((v) => v.id)
                }
              }
            }).mapSingle(({
              facetValues
            }) => facetValues.items.map((fv) => fv.name).join(", ")));
          }
        }
      },
      label: marker("catalog.facet-values"),
      toFilterInput: (value) => ({
        facetValueId: {
          in: value.map((v) => v.id)
        }
      })
    }).addCustomFieldFilters(this.customFields).connectToRoute(this.route);
    this.sorts = this.createSortCollection().defaultSort("createdAt", "DESC").addSorts([{
      name: "id"
    }, {
      name: "createdAt"
    }, {
      name: "updatedAt"
    }, {
      name: "name"
    }, {
      name: "slug"
    }]).addCustomFieldSorts(this.customFields).connectToRoute(this.route);
    this.configure({
      document: ProductListQueryDocument,
      getItems: (data) => data.products,
      setVariables: (skip2, take2) => {
        const searchTerm = this.searchTermControl.value;
        let filterInput = this.filters.createFilterInput();
        if (searchTerm) {
          filterInput = {
            name: {
              contains: searchTerm
            },
            sku: {
              contains: searchTerm
            }
          };
        }
        return {
          options: {
            skip: skip2,
            take: take2,
            filter: __spreadValues({}, filterInput ?? {}),
            filterOperator: searchTerm ? LogicalOperator.OR : LogicalOperator.AND,
            sort: this.sorts.createSortInput()
          }
        };
      },
      refreshListOnChanges: [this.sorts.valueChanges, this.filters.valueChanges]
    });
  }
  rebuildSearchIndex() {
    this.dataService.product.reindex().subscribe(({
      reindex
    }) => {
      this.notificationService.info(marker("catalog.reindexing"));
      this.jobQueueService.addJob(reindex.id, (job) => {
        if (job.state === JobState.COMPLETED) {
          const time = new Intl.NumberFormat().format(job.duration || 0);
          this.notificationService.success(marker("catalog.reindex-successful"), {
            count: job.result.indexedItemCount,
            time
          });
          this.refresh();
        } else {
          this.notificationService.error(marker("catalog.reindex-error"));
        }
      });
    });
  }
  deleteProduct(productId) {
    this.modalService.dialog({
      title: marker("catalog.confirm-delete-product"),
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(
      switchMap((response) => response ? this.dataService.product.deleteProduct(productId) : EMPTY),
      // Short delay to allow the product to be removed from the search index before
      // refreshing.
      delay(500)
    ).subscribe(() => {
      this.notificationService.success(marker("common.notify-delete-success"), {
        entity: "Product"
      });
      this.refresh();
    }, (err) => {
      this.notificationService.error(marker("common.notify-delete-error"), {
        entity: "Product"
      });
    });
  }
  static {
    this.ɵfac = function ProductListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductListComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(JobQueueService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductListComponent,
      selectors: [["vdr-products-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 47,
      vars: 69,
      consts: [["imagePlaceholder", ""], [3, "languageCodeChange", "availableLanguageCodes", "currentLanguageCode"], [3, "locationId"], ["class", "btn btn-primary mr-1", 3, "routerLink", 4, "vdrIfPermissions"], [3, "alwaysShow", "locationId"], ["type", "button", "vdrDropdownItem", "", 3, "click"], ["shape", "refresh", 1, ""], [1, "mt-2", 3, "pageChange", "itemsPerPageChange", "visibleColumnsChange", "id", "items", "itemsPerPage", "totalItems", "currentPage", "filters"], [3, "locationId", "hostComponent", "selectionManager"], [3, "searchTermControl", "searchTermPlaceholder"], ["id", "id", 3, "heading", "hiddenByDefault", "sort"], ["id", "created-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "updated-at", 3, "heading", "hiddenByDefault", "sort"], ["id", "image", 3, "heading"], ["id", "name", 3, "heading", "optional", "sort"], ["id", "slug", 3, "heading", "sort"], ["id", "enabled", 3, "heading"], ["id", "number-of-variants", 3, "heading"], [3, "customField", "sorts", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "mr-1", 3, "routerLink"], ["shape", "plus"], [1, "image-placeholder"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], [1, "placeholder"], ["shape", "image", "size", "48"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], ["colorType", "success", 4, "ngIf"], ["colorType", "warning", 4, "ngIf"], ["colorType", "success"], ["colorType", "warning"], [3, "customField", "sorts"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left")(3, "vdr-language-selector", 1);
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵlistener("languageCodeChange", function ProductListComponent_Template_vdr_language_selector_languageCodeChange_3_listener($event) {
            return ctx.setLanguage($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(6, "vdr-ab-right");
          ɵɵelement(7, "vdr-action-bar-items", 2);
          ɵɵtemplate(8, ProductListComponent_a_8_Template, 4, 5, "a", 3);
          ɵɵelementStart(9, "vdr-action-bar-dropdown-menu", 4)(10, "button", 5);
          ɵɵlistener("click", function ProductListComponent_Template_button_click_10_listener() {
            return ctx.rebuildSearchIndex();
          });
          ɵɵelement(11, "clr-icon", 6);
          ɵɵtext(12);
          ɵɵpipe(13, "translate");
          ɵɵelementEnd()()()()();
          ɵɵelementStart(14, "vdr-data-table-2", 7);
          ɵɵpipe(15, "async");
          ɵɵpipe(16, "async");
          ɵɵpipe(17, "async");
          ɵɵpipe(18, "async");
          ɵɵlistener("pageChange", function ProductListComponent_Template_vdr_data_table_2_pageChange_14_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function ProductListComponent_Template_vdr_data_table_2_itemsPerPageChange_14_listener($event) {
            return ctx.setItemsPerPage($event);
          })("visibleColumnsChange", function ProductListComponent_Template_vdr_data_table_2_visibleColumnsChange_14_listener($event) {
            return ctx.setVisibleColumns($event);
          });
          ɵɵelement(19, "vdr-bulk-action-menu", 8)(20, "vdr-dt2-search", 9);
          ɵɵpipe(21, "translate");
          ɵɵelementStart(22, "vdr-dt2-column", 10);
          ɵɵpipe(23, "translate");
          ɵɵtemplate(24, ProductListComponent_ng_template_24_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(25, "vdr-dt2-column", 11);
          ɵɵpipe(26, "translate");
          ɵɵtemplate(27, ProductListComponent_ng_template_27_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(28, "vdr-dt2-column", 12);
          ɵɵpipe(29, "translate");
          ɵɵtemplate(30, ProductListComponent_ng_template_30_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(31, "vdr-dt2-column", 13);
          ɵɵpipe(32, "translate");
          ɵɵtemplate(33, ProductListComponent_ng_template_33_Template, 4, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(34, "vdr-dt2-column", 14);
          ɵɵpipe(35, "translate");
          ɵɵtemplate(36, ProductListComponent_ng_template_36_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(37, "vdr-dt2-column", 15);
          ɵɵpipe(38, "translate");
          ɵɵtemplate(39, ProductListComponent_ng_template_39_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(40, "vdr-dt2-column", 16);
          ɵɵpipe(41, "translate");
          ɵɵtemplate(42, ProductListComponent_ng_template_42_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(43, "vdr-dt2-column", 17);
          ɵɵpipe(44, "translate");
          ɵɵtemplate(45, ProductListComponent_ng_template_45_Template, 2, 6, "ng-template");
          ɵɵelementEnd();
          ɵɵtemplate(46, ProductListComponent_vdr_dt2_custom_field_column_46_Template, 1, 2, "vdr-dt2-custom-field-column", 18);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("availableLanguageCodes", ɵɵpipeBind1(4, 36, ctx.availableLanguages$))("currentLanguageCode", ɵɵpipeBind1(5, 38, ctx.contentLanguage$));
          ɵɵadvance(4);
          ɵɵproperty("locationId", ctx.pageLocationId);
          ɵɵadvance();
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(68, _c45));
          ɵɵadvance();
          ɵɵproperty("alwaysShow", true)("locationId", ctx.pageLocationId);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 40, "catalog.rebuild-search-index"), " ");
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.dataTableListId)("items", ɵɵpipeBind1(15, 42, ctx.items$))("itemsPerPage", ɵɵpipeBind1(16, 44, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(17, 46, ctx.totalItems$))("currentPage", ɵɵpipeBind1(18, 48, ctx.currentPage$))("filters", ctx.filters);
          ɵɵadvance(5);
          ɵɵproperty("locationId", ctx.dataTableListId)("hostComponent", ctx)("selectionManager", ctx.selectionManager);
          ɵɵadvance();
          ɵɵproperty("searchTermControl", ctx.searchTermControl)("searchTermPlaceholder", ɵɵpipeBind1(21, 50, "settings.search-by-product-name-or-sku"));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(23, 52, "common.id"))("hiddenByDefault", true)("sort", ctx.sorts.get("id"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(26, 54, "common.created-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("createdAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(29, 56, "common.updated-at"))("hiddenByDefault", true)("sort", ctx.sorts.get("updatedAt"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(32, 58, "common.image"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(35, 60, "catalog.name"))("optional", false)("sort", ctx.sorts.get("name"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(38, 62, "common.slug"))("sort", ctx.sorts.get("slug"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(41, 64, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(44, 66, "catalog.number-of-variants"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.customFields);
        }
      },
      dependencies: [ClrIconCustomTag, NgForOf, NgIf, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, ChipComponent, LanguageSelectorComponent, DropdownItemDirective, IfPermissionsDirective, ActionBarItemsComponent, BulkActionMenuComponent, DataTable2Component, DataTable2ColumnComponent, DataTable2SearchComponent, DataTableCustomFieldColumnComponent, PageBlockComponent, AsyncPipe, TranslatePipe, AssetPreviewPipe, LocaleDatePipe],
      styles: [_c46]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-products-list",
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left>
            <vdr-language-selector
                [availableLanguageCodes]="availableLanguages$ | async"
                [currentLanguageCode]="contentLanguage$ | async"
                (languageCodeChange)="setLanguage($event)"
            ></vdr-language-selector>
        </vdr-ab-left>
        <vdr-ab-right>
            <vdr-action-bar-items [locationId]="pageLocationId"></vdr-action-bar-items>
            <a
                class="btn btn-primary mr-1"
                [routerLink]="['./create']"
                *vdrIfPermissions="['CreateCatalog', 'CreateProduct']"
            >
                <clr-icon shape="plus"></clr-icon>
                {{ 'catalog.create-new-product' | translate }}
            </a>
            <vdr-action-bar-dropdown-menu [alwaysShow]="true" [locationId]="pageLocationId">
                <button type="button" vdrDropdownItem (click)="rebuildSearchIndex()">
                    <clr-icon shape="refresh" class=""></clr-icon>
                    {{ 'catalog.rebuild-search-index' | translate }}
                </button>
            </vdr-action-bar-dropdown-menu>
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
        [locationId]="dataTableListId"
        [hostComponent]="this"
        [selectionManager]="selectionManager"
    ></vdr-bulk-action-menu>
    <vdr-dt2-search
        [searchTermControl]="searchTermControl"
        [searchTermPlaceholder]="'settings.search-by-product-name-or-sku' | translate"
    />
    <vdr-dt2-column [heading]="'common.id' | translate" id="id" [hiddenByDefault]="true" [sort]="sorts.get('id')">
        <ng-template let-product="item">
            {{ product.id }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.created-at' | translate" id="created-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('createdAt')"
    >
        <ng-template let-product="item">
            {{ product.createdAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column
        [heading]="'common.updated-at' | translate" id="updated-at"
        [hiddenByDefault]="true"
        [sort]="sorts.get('updatedAt')"
    >
        <ng-template let-product="item">
            {{ product.updatedAt | localeDate : 'short' }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.image' | translate" id="image">
        <ng-template let-product="item">
            <div class="image-placeholder">
                <img
                    *ngIf="product.featuredAsset as asset; else imagePlaceholder"
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
    <vdr-dt2-column [heading]="'catalog.name' | translate" id="name" [optional]="false" [sort]="sorts.get('name')">
        <ng-template let-product="item">
            <a class="button-ghost" [routerLink]="['./', product.id]"
                ><span>{{ product.name }}</span
                ><clr-icon shape="arrow right"
            /></a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.slug' | translate" id="slug" [sort]="sorts.get('slug')">
        <ng-template let-product="item">
            {{ product.slug }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'common.enabled' | translate" id="enabled">
        <ng-template let-product="item">
            <vdr-chip *ngIf="product.enabled" colorType="success">{{
                'common.enabled' | translate
            }}</vdr-chip>
            <vdr-chip *ngIf="!product.enabled" colorType="warning">{{
                'common.disabled' | translate
            }}</vdr-chip>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'catalog.number-of-variants' | translate" id="number-of-variants">
        <ng-template let-product="item">
            {{ 'catalog.variant-count' | translate : { count: product.variantList?.totalItems } }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-custom-field-column
        *ngFor="let customField of customFields"
        [customField]="customField"
        [sorts]="sorts"
    />
</vdr-data-table-2>
`,
      styles: [".image-col{width:70px}.image-placeholder{width:50px;height:50px;margin-top:calc(var(--space-unit) * -1);margin-bottom:calc(var(--space-unit) * -1);background-color:var(--color-component-bg-200)}.image-placeholder img{border-radius:var(--border-radius-img)}.image-placeholder .placeholder{text-align:center;color:var(--color-grey-300)}.search-form{display:flex;align-items:center;width:100%}vdr-product-search-input{min-width:300px}@media screen and (max-width: 768px){vdr-product-search-input{min-width:100px}}.search-settings-menu{margin:0 12px}td.disabled{background-color:var(--color-component-bg-200)}.search-index-button{position:relative}.search-index-button vdr-status-badge{right:0;top:0}.run-updates-button{position:relative}.run-updates-button vdr-status-badge{left:10px;top:10px}.edit-button{margin-inline-end:24px}.sku{color:var(--color-text-300)}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: ModalService
  }, {
    type: NotificationService
  }, {
    type: JobQueueService
  }], null);
})();
var VariantPriceDetailComponent = class _VariantPriceDetailComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.priceChange$ = new BehaviorSubject(0);
    this.taxCategoryIdChange$ = new BehaviorSubject("");
  }
  ngOnInit() {
    const taxRates$ = this.dataService.settings.getTaxRatesSimple(999, 0, "cache-first").mapStream((data) => data.taxRates.items);
    const activeChannel$ = this.dataService.settings.getActiveChannel("cache-first").refetchOnChannelChange().mapStream((data) => data.activeChannel);
    this.taxRate$ = combineLatest(activeChannel$, taxRates$, this.taxCategoryIdChange$).pipe(map(([channel, taxRates, taxCategoryId]) => {
      const defaultTaxZone = channel.defaultTaxZone;
      if (!defaultTaxZone) {
        return 0;
      }
      const applicableRate = taxRates.find((taxRate) => taxRate.zone.id === defaultTaxZone.id && taxRate.category.id === taxCategoryId);
      if (!applicableRate) {
        return 0;
      }
      return applicableRate.value;
    }));
    this.grossPrice$ = combineLatest(this.taxRate$, this.priceChange$).pipe(map(([taxRate, price]) => Math.round(price * ((100 + taxRate) / 100))));
  }
  ngOnChanges(changes) {
    if ("price" in changes) {
      this.priceChange$.next(changes.price.currentValue);
    }
    if ("taxCategoryId" in changes) {
      this.taxCategoryIdChange$.next(changes.taxCategoryId.currentValue);
    }
  }
  static {
    this.ɵfac = function VariantPriceDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantPriceDetailComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VariantPriceDetailComponent,
      selectors: [["vdr-variant-price-detail"]],
      inputs: {
        priceIncludesTax: "priceIncludesTax",
        price: "price",
        currencyCode: "currencyCode",
        taxCategoryId: "taxCategoryId"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 5,
      vars: 5,
      consts: [[1, "clr-control-label"], ["class", "value", 4, "ngIf"], [1, "value"]],
      template: function VariantPriceDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "label", 0);
          ɵɵtext(1);
          ɵɵpipe(2, "translate");
          ɵɵelementEnd();
          ɵɵtemplate(3, VariantPriceDetailComponent_div_3_Template, 4, 8, "div", 1)(4, VariantPriceDetailComponent_div_4_Template, 6, 14, "div", 1);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "catalog.taxes"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.priceIncludesTax);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.priceIncludesTax);
        }
      },
      dependencies: [ClrLabel, NgIf, AsyncPipe, TranslatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}.value[_ngcontent-%COMP%]{margin-top:3px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantPriceDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-variant-price-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<label class="clr-control-label">{{ 'catalog.taxes' | translate }}</label>
<div *ngIf="priceIncludesTax" class="value">
    {{ 'catalog.price-includes-tax-at' | translate: { rate: taxRate$ | async } }}
</div>
<div *ngIf="!priceIncludesTax" class="value">
    {{
        'catalog.price-with-tax-in-default-zone'
            | translate: { price: grossPrice$ | async | localeCurrency: currencyCode, rate: taxRate$ | async }
    }}
</div>
`,
      styles: [":host{display:flex;flex-direction:column}.value{margin-top:3px}\n"]
    }]
  }], () => [{
    type: DataService
  }], {
    priceIncludesTax: [{
      type: Input
    }],
    price: [{
      type: Input
    }],
    currencyCode: [{
      type: Input
    }],
    taxCategoryId: [{
      type: Input
    }]
  });
})();
var VariantPriceStrategyDetailComponent = class _VariantPriceStrategyDetailComponent {
  calculatedPriceDiffersFromInputPrice() {
    const defaultPrice = this.variant.prices.find((p) => p.currencyCode === this.channelDefaultCurrencyCode) ?? this.variant.prices[0];
    if (!defaultPrice) {
      return false;
    }
    if (this.channelPriceIncludesTax) {
      return this.variant.priceWithTax !== defaultPrice.price;
    } else {
      return this.variant.price !== defaultPrice.price;
    }
  }
  static {
    this.ɵfac = function VariantPriceStrategyDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantPriceStrategyDetailComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VariantPriceStrategyDetailComponent,
      selectors: [["vdr-variant-price-strategy-detail"]],
      inputs: {
        channelPriceIncludesTax: "channelPriceIncludesTax",
        variant: "variant",
        channelDefaultCurrencyCode: "channelDefaultCurrencyCode"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["class", "price-strategy-detail", 4, "ngIf"], [1, "price-strategy-detail"], ["for", "price", 3, "label", "tooltip"], [1, "form-grid", "mt-2"], [3, "label"]],
      template: function VariantPriceStrategyDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, VariantPriceStrategyDetailComponent_div_0_Template, 13, 20, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.calculatedPriceDiffersFromInputPrice());
        }
      },
      dependencies: [NgIf, FormItemComponent, TranslatePipe, LocaleCurrencyPipe],
      styles: ["[_nghost-%COMP%]{display:block}.price-strategy-detail[_ngcontent-%COMP%]{margin-top:calc(var(--space-unit) * 2);padding-top:calc(var(--space-unit) * 2);border-top:1px solid var(--color-weight-150)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantPriceStrategyDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-variant-price-strategy-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div *ngIf="calculatedPriceDiffersFromInputPrice()" class="price-strategy-detail">
    <vdr-form-item
        [label]="'catalog.calculated-price' | translate"
        [tooltip]="'catalog.calculated-price-tooltip' | translate"
        for="price"
    >
    </vdr-form-item>
    <div class="form-grid mt-2">
        <vdr-form-item [label]="'common.price' | translate">
            {{ variant.price | localeCurrency : variant.currencyCode }}
        </vdr-form-item>
        <vdr-form-item [label]="'common.price-with-tax' | translate">
            {{ variant.priceWithTax | localeCurrency : variant.currencyCode }}
        </vdr-form-item>
    </div>
</div>
`,
      styles: [":host{display:block}.price-strategy-detail{margin-top:calc(var(--space-unit) * 2);padding-top:calc(var(--space-unit) * 2);border-top:1px solid var(--color-weight-150)}\n"]
    }]
  }], null, {
    channelPriceIncludesTax: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    channelDefaultCurrencyCode: [{
      type: Input
    }]
  });
})();
var GET_PRODUCT_VARIANTS_QUICK_JUMP = gql`
    query GetProductVariantsQuickJump($id: ID!) {
        product(id: $id) {
            id
            variants {
                id
                name
                sku
            }
        }
    }
`;
var ProductVariantQuickJumpComponent = class _ProductVariantQuickJumpComponent {
  constructor(dataService, router) {
    this.dataService = dataService;
    this.router = router;
    this.searchFn = (term, item) => item.name.toLowerCase().includes(term.toLowerCase()) || item.sku.toLowerCase().includes(term.toLowerCase());
  }
  ngOnInit() {
    this.variants$ = this.dataService.query(GetProductVariantsQuickJumpDocument, {
      id: this.productId
    }).mapStream((data) => data.product?.variants ?? []);
  }
  onSelect(item) {
    if (item) {
      this.router.navigate(["catalog", "products", this.productId, "variants", item.id]).then(() => this.selectedVariantId = void 0);
    }
  }
  static {
    this.ɵfac = function ProductVariantQuickJumpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantQuickJumpComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(Router));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantQuickJumpComponent,
      selectors: [["vdr-product-variant-quick-jump"]],
      inputs: {
        productId: "productId"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["appendTo", "body", "bindValue", "id", 3, "items", "ngModel", "searchFn", "clearable", "placeholder", "ngModelChange", "change", 4, "ngIf"], ["appendTo", "body", "bindValue", "id", 3, "ngModelChange", "change", "items", "ngModel", "searchFn", "clearable", "placeholder"], ["ng-option-tmp", ""]],
      template: function ProductVariantQuickJumpComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductVariantQuickJumpComponent_ng_select_0_Template, 4, 9, "ng-select", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵproperty("ngIf", ((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.variants$)) == null ? null : tmp_0_0.length) > 1);
        }
      },
      dependencies: [NgIf, NgControlStatus, NgModel, NgSelectComponent, NgOptionTemplateDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantQuickJumpComponent, [{
    type: Component,
    args: [{
      selector: "vdr-product-variant-quick-jump",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-select
    *ngIf="(variants$ | async)?.length > 1"
    [items]="variants$ | async"
    appendTo="body"
    bindValue="id"
    [(ngModel)]="selectedVariantId"
    [searchFn]="searchFn"
    [clearable]="false"
    [placeholder]="'catalog.quick-jump-placeholder' | translate"
    (change)="onSelect($event)"
>
    <ng-template ng-option-tmp let-item="item" let-index="index" let-search="searchTerm">
        {{ item.name }} ({{ item.sku }})
    </ng-template>
</ng-select>
`
    }]
  }], () => [{
    type: DataService
  }, {
    type: Router
  }], {
    productId: [{
      type: Input
    }]
  });
})();
var ProductVariantDetailComponent = class _ProductVariantDetailComponent extends TypedBaseDetailComponent {
  constructor(productDetailService, formBuilder, modalService, notificationService, dataService, changeDetector) {
    super();
    this.productDetailService = productDetailService;
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.notificationService = notificationService;
    this.dataService = dataService;
    this.changeDetector = changeDetector;
    this.updatePermissions = [Permission.UpdateCatalog, Permission.UpdateProduct];
    this.customFields = this.getCustomFieldConfig("ProductVariant");
    this.customPriceFields = this.getCustomFieldConfig("ProductVariantPrice");
    this.customOptionFields = this.getCustomFieldConfig("ProductOption");
    this.detailForm = this.formBuilder.group({
      id: "",
      enabled: false,
      sku: "",
      name: "",
      taxCategoryId: "",
      stockOnHand: 0,
      useGlobalOutOfStockThreshold: true,
      outOfStockThreshold: 0,
      trackInventory: GlobalFlag.TRUE,
      facetValueIds: [],
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customFields))
    });
    this.stockLevelsForm = this.formBuilder.array([]);
    this.pricesForm = this.formBuilder.array([]);
    this.assetChanges = {};
    this.GlobalFlag = GlobalFlag;
  }
  ngOnInit() {
    this.init();
    this.dataService.settings.getGlobalSettings("cache-first").single$.subscribe(({
      globalSettings
    }) => {
      this.globalTrackInventory = globalSettings.trackInventory;
      this.globalOutOfStockThreshold = globalSettings.outOfStockThreshold;
      this.changeDetector.markForCheck();
    });
    this.taxCategories$ = this.result$.pipe(map((data) => data.taxCategories.items));
    const availableCurrencyCodes$ = this.result$.pipe(tap((data) => this.channelDefaultCurrencyCode = data.activeChannel.defaultCurrencyCode), map((data) => data.activeChannel.availableCurrencyCodes));
    this.unusedCurrencyCodes$ = combineLatest(this.pricesForm.valueChanges, availableCurrencyCodes$).pipe(map(([prices, currencyCodes]) => currencyCodes.filter((code) => !prices.map((p) => p.currencyCode).includes(code))));
    const stockLocations$ = this.result$.pipe(map((data) => data.stockLocations.items));
    this.unusedStockLocation$ = combineLatest(this.entity$, stockLocations$).pipe(map(([entity, stockLocations]) => {
      const usedIds = entity.stockLevels.map((l) => l.stockLocation.id);
      return stockLocations.filter((l) => !usedIds.includes(l.id));
    }));
    this.channelPriceIncludesTax$ = this.dataService.settings.getActiveChannel("cache-first").refetchOnChannelChange().mapStream((data) => data.activeChannel.pricesIncludeTax).pipe(shareReplay(1));
    this.stockLevels$ = this.entity$.pipe(map((entity) => entity?.stockLevels ?? []));
    const facetValues$ = this.entity$.pipe(map((variant) => variant.facetValues ?? []));
    const formFacetValueIdChanges$ = this.detailForm.get("facetValueIds").valueChanges.pipe(skip(1), distinctUntilChanged(), switchMap((ids) => this.dataService.facet.getFacetValues({
      filter: {
        id: {
          in: ids
        }
      }
    }).mapSingle(({
      facetValues
    }) => facetValues.items)), shareReplay(1));
    this.facetValues$ = concat(facetValues$.pipe(take(1)), facetValues$.pipe(switchMapTo(formFacetValueIdChanges$)));
  }
  ngOnDestroy() {
    this.destroy();
  }
  addPriceInCurrency(currencyCode) {
    this.pricesForm.push(this.formBuilder.group({
      currencyCode,
      price: 0,
      delete: false,
      customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customPriceFields))
    }));
  }
  toggleDeletePrice(deleteFormControl) {
    deleteFormControl.setValue(!deleteFormControl.value);
    deleteFormControl.markAsDirty();
  }
  addStockLocation(stockLocation) {
    this.stockLevelsForm.push(this.formBuilder.group({
      stockLocationId: stockLocation.id,
      stockLocationName: stockLocation.name,
      stockOnHand: 0,
      stockAllocated: 0
    }));
  }
  save() {
    combineLatest(this.entity$, this.languageCode$).pipe(take(1), mergeMap(([variant, languageCode]) => {
      const input = (0, import_pick.pick)(this.getUpdatedVariant(variant, this.detailForm, languageCode), ["id", "enabled", "translations", "sku", "taxCategoryId", "facetValueIds", "featuredAssetId", "assetIds", "trackInventory", "outOfStockThreshold", "useGlobalOutOfStockThreshold", "customFields"]);
      if (this.stockLevelsForm.dirty) {
        input.stockLevels = this.stockLevelsForm.controls.filter((control) => control.dirty).map((control) => ({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          stockLocationId: control.value.stockLocationId,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          stockOnHand: control.value.stockOnHand
        }));
      }
      if (this.pricesForm.dirty) {
        input.prices = this.pricesForm.controls.filter((control) => control.dirty).map((control) => ({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          price: control.value.price,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          currencyCode: control.value.currencyCode,
          delete: control.value.delete === true,
          customFields: control.get("customFields")?.value
        }));
      }
      return this.dataService.mutate(ProductVariantUpdateMutationDocument, {
        input: [input]
      });
    })).subscribe((result) => {
      this.detailForm.markAsPristine();
      this.stockLevelsForm.markAsPristine();
      this.pricesForm.markAsPristine();
      this.assetChanges = {};
      this.notificationService.success(marker("common.notify-update-success"), {
        entity: "ProductVariant"
      });
      this.changeDetector.markForCheck();
    }, (err) => {
      this.notificationService.error(marker("common.notify-update-error"), {
        entity: "ProductVariant"
      });
    });
  }
  assetsChanged() {
    return !!Object.values(this.assetChanges).length;
  }
  inventoryIsNotTracked(formGroup) {
    const trackInventory = formGroup.get("trackInventory")?.value;
    return trackInventory === GlobalFlag.FALSE || trackInventory === GlobalFlag.INHERIT && this.globalTrackInventory === false;
  }
  optionGroupCode(optionGroupId) {
    const group = this.entity?.product.optionGroups.find((g) => g.id === optionGroupId);
    return group?.code;
  }
  optionName(option) {
    const translation = option.translations.find((t) => t.languageCode === this.languageCode) ?? option.translations[0];
    return translation.name;
  }
  removeFacetValue(facetValueId) {
    const facetValueIdsControl = this.detailForm.controls.facetValueIds;
    const currentFacetValueIds = facetValueIdsControl.value ?? [];
    facetValueIdsControl.setValue(currentFacetValueIds.filter((id) => id !== facetValueId));
    facetValueIdsControl.markAsDirty();
  }
  selectFacetValue() {
    this.displayFacetValueModal().subscribe((facetValueIds) => {
      if (facetValueIds) {
        const facetValueIdsControl = this.detailForm.controls.facetValueIds;
        const currentFacetValueIds = facetValueIdsControl.value ?? [];
        facetValueIdsControl.setValue((0, import_unique.unique)([...currentFacetValueIds, ...facetValueIds]));
        facetValueIdsControl.markAsDirty();
      }
    });
  }
  displayFacetValueModal() {
    return this.modalService.fromComponent(ApplyFacetDialogComponent, {
      size: "md",
      closable: true
    }).pipe(map((facetValues) => facetValues && facetValues.map((v) => v.id)));
  }
  setFormValues(variant, languageCode) {
    const variantTranslation = findTranslation(variant, languageCode);
    const facetValueIds = variant.facetValues.map((fv) => fv.id);
    this.detailForm.patchValue({
      id: variant.id,
      enabled: variant.enabled,
      sku: variant.sku,
      name: variantTranslation ? variantTranslation.name : "",
      taxCategoryId: variant.taxCategory.id,
      stockOnHand: variant.stockLevels[0]?.stockOnHand ?? 0,
      useGlobalOutOfStockThreshold: variant.useGlobalOutOfStockThreshold,
      outOfStockThreshold: variant.outOfStockThreshold,
      trackInventory: variant.trackInventory,
      facetValueIds
    });
    this.stockLevelsForm.clear();
    for (const stockLevel of variant.stockLevels) {
      this.stockLevelsForm.push(this.formBuilder.group({
        stockLocationId: stockLevel.stockLocation.id,
        stockLocationName: stockLevel.stockLocation.name,
        stockOnHand: stockLevel.stockOnHand,
        stockAllocated: stockLevel.stockAllocated
      }));
    }
    this.pricesForm.clear();
    for (const price of variant.prices) {
      const priceForm = this.formBuilder.group({
        price: price.price,
        currencyCode: price.currencyCode,
        delete: false,
        customFields: this.formBuilder.group(getCustomFieldsDefaults(this.customPriceFields))
      });
      if (this.customPriceFields.length) {
        this.setCustomFieldFormValues(this.customPriceFields, priceForm.get(["customFields"]), price);
      }
      this.pricesForm.push(priceForm);
    }
    if (this.customFields.length) {
      this.setCustomFieldFormValues(this.customFields, this.detailForm.get("customFields"), variant, variantTranslation);
    }
  }
  /**
   * Given a product and the value of the detailForm, this method creates an updated copy of the product which
   * can then be persisted to the API.
   */
  getUpdatedVariant(variant, variantFormGroup, languageCode) {
    const updatedProduct = createUpdatedTranslatable({
      translatable: variant,
      updatedFields: variantFormGroup.value,
      customFieldConfig: this.customFields,
      languageCode,
      defaultTranslation: {
        languageCode,
        name: variant.name || ""
      }
    });
    return __spreadProps(__spreadValues({}, updatedProduct), {
      assetIds: this.assetChanges.assets?.map((a) => a.id),
      featuredAssetId: this.assetChanges.featuredAsset?.id,
      facetValueIds: variantFormGroup.controls.facetValueIds.dirty ? variantFormGroup.value.facetValueIds : void 0,
      taxCategoryId: variantFormGroup.controls.taxCategoryId.dirty ? variantFormGroup.value.taxCategoryId : void 0
    });
  }
  static {
    this.ɵfac = function ProductVariantDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantDetailComponent)(ɵɵdirectiveInject(ProductDetailService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(NotificationService), ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantDetailComponent,
      selectors: [["vdr-product-variant-detail"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 13,
      vars: 10,
      consts: [[3, "grow"], [1, "flex", "center"], [4, "ngIf"], [3, "productId"], ["locationId", "product-variant-detail"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "vdrIfPermissions"], ["class", "form", 3, "formGroup", 4, "ngIf"], ["class", "mr-2", 3, "disabled", "availableLanguageCodes", "currentLanguageCode", "languageCodeChange", 4, "ngIf"], [1, "mr-2", 3, "languageCodeChange", "disabled", "availableLanguageCodes", "currentLanguageCode"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "form", 3, "formGroup"], ["for", "visibility", 3, "label"], [4, "vdrIfPermissions"], [3, "title", 4, "ngIf"], [3, "title"], [1, "facets"], [3, "facetValue", "removable", "remove", 4, "ngFor", "ngForOf"], ["class", "button-small mt-2", 3, "click", 4, "vdrIfPermissions"], [3, "entity", 4, "ngIf"], ["type", "submit", "hidden", "", "x-data", "prevents enter key from triggering other buttons"], [1, "form-grid"], ["for", "name", 3, "label"], ["id", "name", "type", "text", "formControlName", "name", 3, "readonly"], ["for", "sku", 3, "label"], ["id", "sku", "type", "text", "formControlName", "sku", 3, "readonly"], ["locationId", "product-variant-detail", 3, "entity$", "detailForm"], [3, "change", "assets", "featuredAsset", "updatePermissions"], ["for", "taxCategory", 3, "label"], ["name", "taxCategory", "formControlName", "taxCategoryId"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-grid prices", 3, "formGroup", 4, "ngFor", "ngForOf"], [3, "channelPriceIncludesTax", "channelDefaultCurrencyCode", "variant"], ["for", "track-inventory", 3, "label", "tooltip"], ["name", "track-inventory", "formControlName", "trackInventory", 3, "disabled"], [3, "value"], [3, "label", "tooltip"], ["type", "number", "formControlName", "outOfStockThreshold", 3, "readonly", "vdrDisabled"], ["type", "checkbox", "clrToggle", "", "name", "useGlobalOutOfStockThreshold", "formControlName", "useGlobalOutOfStockThreshold", 3, "vdrDisabled"], ["class", "form-grid stock-levels", 3, "formGroup", 4, "ngFor", "ngForOf"], ["type", "checkbox", "clrToggle", "", "name", "enabled", 3, "formControl"], [1, "options"], [3, "colorFrom", "invert", 4, "ngFor", "ngForOf"], ["class", "button-small mt-2", 3, "routerLink", 4, "vdrIfPermissions"], [3, "colorFrom", "invert"], [1, "button-small", "mt-2", 3, "routerLink"], ["shape", "pencil"], [3, "remove", "facetValue", "removable"], [1, "button-small", "mt-2", 3, "click"], ["shape", "plus"], [3, "entity"], ["entityName", "ProductVariant", 3, "customFields", "customFieldsFormGroup", "readonly"], [1, "form-grid", "prices", 3, "formGroup"], ["for", "price", 3, "label", "tooltip"], [1, "price-wrapper"], ["name", "price", "formControlName", "price", 3, "currencyCode", "readonly"], [3, "price", "currencyCode", "priceIncludesTax", "taxCategoryId"], ["class", "form-grid-span", 4, "ngIf"], [1, "button-small", "delete-button", 3, "click", "disabled"], ["shape", "trash"], [1, "form-grid-span"], [1, "title-row"], [1, "title"], ["entityName", "ProductVariantPrice", 3, "customFields", "customFieldsFormGroup", "readonly"], ["vdrDropdownTrigger", "", 1, "button", "mt-2"], ["shape", "ellipsis-vertical"], ["vdrDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["vdrDropdownItem", "", 3, "click"], [1, "form-grid", "stock-levels", 3, "formGroup"], [3, "label", "for"], ["type", "number", "formControlName", "stockOnHand", 3, "id", "readonly"], [3, "label"], ["shape", "map-marker"]],
      template: function ProductVariantDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "vdr-action-bar")(2, "vdr-ab-left", 0)(3, "div", 1);
          ɵɵtemplate(4, ProductVariantDetailComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
          ɵɵpipe(5, "async");
          ɵɵelement(6, "vdr-product-variant-quick-jump", 3);
          ɵɵelementEnd()();
          ɵɵelementStart(7, "vdr-ab-right");
          ɵɵelement(8, "vdr-action-bar-items", 4);
          ɵɵtemplate(9, ProductVariantDetailComponent_button_9_Template, 3, 4, "button", 5);
          ɵɵelement(10, "vdr-action-bar-dropdown-menu", 4);
          ɵɵelementEnd()()();
          ɵɵtemplate(11, ProductVariantDetailComponent_form_11_Template, 79, 102, "form", 6);
          ɵɵpipe(12, "async");
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("grow", true);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(5, 5, ctx.availableLanguages$));
          ɵɵadvance(2);
          ɵɵproperty("productId", ctx.entity == null ? null : ctx.entity.product.id);
          ɵɵadvance(3);
          ɵɵproperty("vdrIfPermissions", ɵɵpureFunction0(9, _c49));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(12, 7, ctx.entity$));
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgForOf, NgIf, ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, RouterLink, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ActionBarDropdownMenuComponent, AssetsComponent, ChipComponent, CurrencyInputComponent, FacetValueChipComponent, FormFieldComponent, FormFieldControlDirective, FormItemComponent, LanguageSelectorComponent, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, IfPermissionsDirective, ActionBarItemsComponent, DisabledDirective, TabbedCustomFieldsComponent, CustomDetailComponentHostComponent, PageBlockComponent, PageEntityInfoComponent, PageDetailLayoutComponent, PageDetailSidebarComponent, CardComponent, VariantPriceDetailComponent, VariantPriceStrategyDetailComponent, ProductVariantQuickJumpComponent, AsyncPipe, TranslatePipe, LocaleCurrencyNamePipe, SortPipe, HasPermissionPipe],
      styles: [".facets[_ngcontent-%COMP%], .options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:3px}vdr-product-variant-quick-jump[_ngcontent-%COMP%]{flex:1;margin-inline-end:calc(var(--space-unit) * 2)}.stock-levels[_ngcontent-%COMP%], .prices[_ngcontent-%COMP%]{margin-top:calc(var(--space-unit) * 2);padding-top:calc(var(--space-unit) * 2);border-top:1px solid var(--color-weight-150)}.price-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-unit);width:100%}.price-wrapper.pending-deletion[_ngcontent-%COMP%]   vdr-currency-input[_ngcontent-%COMP%]{opacity:.7}.price-wrapper.pending-deletion[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{background-color:var(--color-error-700);color:var(--color-error-100)}.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.title[_ngcontent-%COMP%]{font-size:var(--font-size-base)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantDetailComponent, [{
    type: Component,
    args: [{
      selector: "vdr-product-variant-detail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <vdr-action-bar>
        <vdr-ab-left [grow]="true">
            <div class="flex center">
                <ng-container *ngIf="availableLanguages$ | async as availableLanguages">
                    <vdr-language-selector
                        *ngIf="availableLanguages.length > 1"
                        class="mr-2"
                        [disabled]="isNew$ | async"
                        [availableLanguageCodes]="availableLanguages"
                        [currentLanguageCode]="languageCode$ | async"
                        (languageCodeChange)="setLanguage($event)"
                    ></vdr-language-selector>
                </ng-container>
                <vdr-product-variant-quick-jump [productId]="entity?.product.id" />
            </div>
        </vdr-ab-left>

        <vdr-ab-right>
            <vdr-action-bar-items locationId="product-variant-detail"></vdr-action-bar-items>
            <button
                *vdrIfPermissions="['UpdateCatalog', 'UpdateProduct']"
                class="btn btn-primary"
                (click)="save()"
                [disabled]="
                    (detailForm.invalid ||
                        stockLevelsForm.invalid ||
                        pricesForm.invalid ||
                        (detailForm.pristine && stockLevelsForm.pristine && pricesForm.pristine)) &&
                    !assetsChanged()
                "
            >
                {{ 'common.update' | translate }}
            </button>
            <vdr-action-bar-dropdown-menu locationId="product-variant-detail"></vdr-action-bar-dropdown-menu>
        </vdr-ab-right>
    </vdr-action-bar>
</vdr-page-block>
<form class="form" [formGroup]="detailForm" *ngIf="entity$ | async as variant">
    <vdr-page-detail-layout>
        <vdr-page-detail-sidebar
            ><vdr-card>
                <vdr-form-field [label]="'catalog.visibility' | translate" for="visibility">
                    <clr-toggle-wrapper *vdrIfPermissions="['UpdateCatalog', 'UpdateProduct']">
                        <input
                            type="checkbox"
                            clrToggle
                            name="enabled"
                            [formControl]="detailForm.get(['enabled'])"
                        />
                        <label>{{ 'common.enabled' | translate }}</label>
                    </clr-toggle-wrapper>
                </vdr-form-field>
            </vdr-card>
            <vdr-card *ngIf="variant.options.length" [title]="'catalog.product-options' | translate">
                <div class="options">
                    <vdr-chip
                        *ngFor="let option of variant.options | sort : 'groupId'"
                        [colorFrom]="optionGroupCode(option.groupId)"
                        [invert]="true"
                    >
                        <span>{{ optionGroupCode(option.groupId) }}:</span>
                        {{ optionName(option) }}
                    </vdr-chip>
                </div>
                <div>
                    <a
                        [routerLink]="['../../', 'options']"
                        class="button-small mt-2"
                        *vdrIfPermissions="updatePermissions"
                    >
                        <clr-icon shape="pencil"></clr-icon>
                        {{ 'catalog.edit-options' | translate }}
                    </a>
                </div>
            </vdr-card>
            <vdr-card [title]="'catalog.facets' | translate">
                <div class="facets">
                    <vdr-facet-value-chip
                        *ngFor="let facetValue of facetValues$ | async"
                        [facetValue]="facetValue"
                        [removable]="updatePermissions | hasPermission"
                        (remove)="removeFacetValue(facetValue.id)"
                    ></vdr-facet-value-chip>
                </div>
                <div>
                    <button
                        class="button-small mt-2"
                        *vdrIfPermissions="updatePermissions"
                        (click)="selectFacetValue()"
                    >
                        <clr-icon shape="plus"></clr-icon>
                        {{ 'catalog.add-facets' | translate }}
                    </button>
                </div>
            </vdr-card>

            <vdr-card>
                <vdr-page-entity-info *ngIf="entity$ | async as entity" [entity]="entity" />
            </vdr-card>
        </vdr-page-detail-sidebar>

        <vdr-page-block>
            <button type="submit" hidden x-data="prevents enter key from triggering other buttons"></button>
            <vdr-card>
                <div class="form-grid">
                    <vdr-form-field [label]="'common.name' | translate" for="name">
                        <input
                            id="name"
                            type="text"
                            formControlName="name"
                            [readonly]="!(['UpdateCatalog', 'UpdateProduct'] | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-field [label]="'catalog.sku' | translate" for="sku">
                        <input
                            id="sku"
                            type="text"
                            formControlName="sku"
                            [readonly]="!(updatePermissions | hasPermission)"
                        />
                    </vdr-form-field>
                </div>
            </vdr-card>
            <vdr-card [title]="'common.custom-fields' | translate" *ngIf="customFields.length">
                <vdr-tabbed-custom-fields
                    entityName="ProductVariant"
                    [customFields]="customFields"
                    [customFieldsFormGroup]="detailForm.get('customFields')"
                    [readonly]="!(updatePermissions | hasPermission)"
                />
            </vdr-card>
            <vdr-custom-detail-component-host
                locationId="product-variant-detail"
                [entity$]="entity$"
                [detailForm]="detailForm"
            />
            <vdr-card [title]="'catalog.assets' | translate">
                <vdr-assets
                    [assets]="assetChanges.assets || variant.assets"
                    [featuredAsset]="assetChanges.featuredAsset || variant.featuredAsset"
                    [updatePermissions]="updatePermissions"
                    (change)="assetChanges = $event"
                />
            </vdr-card>
            <vdr-card [title]="'catalog.price-and-tax' | translate">
                <div class="form-grid">
                    <vdr-form-field [label]="'catalog.tax-category' | translate" for="taxCategory">
                        <select name="taxCategory" formControlName="taxCategoryId">
                            <option
                                *ngFor="let taxCategory of taxCategories$ | async"
                                [value]="taxCategory.id"
                            >
                                {{ taxCategory.name }}
                            </option>
                        </select>
                    </vdr-form-field>
                </div>
                <div class="form-grid prices" *ngFor="let price of pricesForm.controls" [formGroup]="price">
                    <vdr-form-field
                        [label]="
                            ('catalog.price' | translate) +
                            (1 < pricesForm.length ? ' (' + price.value.currencyCode + ')' : '')
                        "
                        [tooltip]="
                            1 < pricesForm.length && price.value.currencyCode === channelDefaultCurrencyCode
                                ? ('catalog.default-currency' | translate)
                                : undefined
                        "
                        for="price"
                    >
                        <div class="price-wrapper" [class.pending-deletion]="price.value.delete === true">
                            <vdr-currency-input
                                name="price"
                                [currencyCode]="price.value.currencyCode"
                                [readonly]="
                                    !(updatePermissions | hasPermission) || price.value.delete === true
                                "
                                formControlName="price"
                            />
                            <div *ngIf="1 < pricesForm.controls.length">
                                <button
                                    class="button-small delete-button"
                                    [disabled]="price.value.currencyCode === channelDefaultCurrencyCode"
                                    (click)="toggleDeletePrice(price.get('delete'))"
                                >
                                    <clr-icon shape="trash"></clr-icon>
                                </button>
                            </div>
                        </div>
                    </vdr-form-field>
                    <vdr-variant-price-detail
                        [price]="price.value.price"
                        [currencyCode]="price.value.currencyCode"
                        [priceIncludesTax]="channelPriceIncludesTax$ | async"
                        [taxCategoryId]="detailForm.get('taxCategoryId')!.value"
                    />

                    <div class="form-grid-span" *ngIf="customPriceFields.length">
                        <div class="title-row">
                            <span class="title">{{ 'common.custom-fields' | translate }}</span>
                        </div>
                        <vdr-tabbed-custom-fields
                            entityName="ProductVariantPrice"
                            [customFields]="customPriceFields"
                            [customFieldsFormGroup]="price.get(['customFields'])"
                            [readonly]="!(updatePermissions | hasPermission)"
                        />
                    </div>
                </div>

                <vdr-variant-price-strategy-detail
                    [channelPriceIncludesTax]="channelPriceIncludesTax$ | async"
                    [channelDefaultCurrencyCode]="channelDefaultCurrencyCode"
                    [variant]="variant"
                />

                <ng-container *ngIf="unusedCurrencyCodes$ | async as unusedCurrencyCodes">
                    <div *ngIf="unusedCurrencyCodes.length">
                        <vdr-dropdown>
                            <button class="button mt-2" vdrDropdownTrigger>
                                <clr-icon shape="plus"></clr-icon>
                                {{ 'catalog.add-price-in-another-currency' | translate }}
                                <clr-icon shape="ellipsis-vertical"></clr-icon>
                            </button>
                            <vdr-dropdown-menu>
                                <button
                                    vdrDropdownItem
                                    *ngFor="let currencyCode of unusedCurrencyCodes"
                                    (click)="addPriceInCurrency(currencyCode)"
                                >
                                    {{ currencyCode | localeCurrencyName }}
                                </button>
                            </vdr-dropdown-menu>
                        </vdr-dropdown>
                    </div>
                </ng-container>
            </vdr-card>
            <vdr-card [title]="'catalog.stock-levels' | translate">
                <div class="form-grid">
                    <vdr-form-field
                        for="track-inventory"
                        [label]="'catalog.track-inventory' | translate"
                        [tooltip]="'catalog.track-inventory-tooltip' | translate"
                    >
                        <select
                            name="track-inventory"
                            formControlName="trackInventory"
                            [disabled]="!(updatePermissions | hasPermission)"
                        >
                            <option [value]="GlobalFlag.TRUE">
                                {{ 'catalog.track-inventory-true' | translate }}
                            </option>
                            <option [value]="GlobalFlag.FALSE">
                                {{ 'catalog.track-inventory-false' | translate }}
                            </option>
                            <option [value]="GlobalFlag.INHERIT">
                                {{ 'catalog.track-inventory-inherit' | translate }}
                            </option>
                        </select>
                    </vdr-form-field>

                    <vdr-form-item
                        [label]="'catalog.out-of-stock-threshold' | translate"
                        [tooltip]="'catalog.out-of-stock-threshold-tooltip' | translate"
                    >
                        <input
                            type="number"
                            formControlName="outOfStockThreshold"
                            [readonly]="!(updatePermissions | hasPermission)"
                            [vdrDisabled]="
                                detailForm.get('useGlobalOutOfStockThreshold')?.value !== false ||
                                inventoryIsNotTracked(detailForm)
                            "
                        />
                        <clr-toggle-wrapper>
                            <input
                                type="checkbox"
                                clrToggle
                                name="useGlobalOutOfStockThreshold"
                                formControlName="useGlobalOutOfStockThreshold"
                                [vdrDisabled]="
                                    !(updatePermissions | hasPermission) || inventoryIsNotTracked(detailForm)
                                "
                            />
                            <label
                                >{{ 'catalog.use-global-value' | translate }} ({{
                                    globalOutOfStockThreshold
                                }})</label
                            >
                        </clr-toggle-wrapper>
                    </vdr-form-item>
                </div>
                <div
                    class="form-grid stock-levels"
                    *ngFor="let stockLevel of stockLevelsForm.controls"
                    [formGroup]="stockLevel"
                >
                    <vdr-form-field
                        [label]="
                            stockLevel.get('stockLocationName')?.value +
                            ': ' +
                            ('catalog.stock-on-hand' | translate)
                        "
                        [for]="'stockOnHand_' + stockLevel.get('stockLocationId')?.value"
                    >
                        <input
                            [id]="'stockOnHand_' + stockLevel.get('stockLocationId')?.value"
                            type="number"
                            formControlName="stockOnHand"
                            [readonly]="!(updatePermissions | hasPermission)"
                        />
                    </vdr-form-field>
                    <vdr-form-item
                        [label]="
                            stockLevel.get('stockLocationName')?.value +
                            ': ' +
                            ('catalog.stock-allocated' | translate)
                        "
                    >
                        {{ stockLevel.get('stockAllocated')?.value }}
                    </vdr-form-item>
                </div>
                <ng-container *ngIf="unusedStockLocation$ | async as unusedStockLocations">
                    <div *ngIf="unusedStockLocations.length">
                        <vdr-dropdown>
                            <button class="button mt-2" vdrDropdownTrigger>
                                <clr-icon shape="plus"></clr-icon>
                                {{ 'catalog.add-stock-location' | translate }}
                                <clr-icon shape="ellipsis-vertical"></clr-icon>
                            </button>
                            <vdr-dropdown-menu>
                                <button
                                    vdrDropdownItem
                                    *ngFor="let stockLocation of unusedStockLocations"
                                    (click)="addStockLocation(stockLocation)"
                                >
                                    <clr-icon shape="map-marker"></clr-icon> {{ stockLocation.name }}
                                </button>
                            </vdr-dropdown-menu>
                        </vdr-dropdown>
                    </div>
                </ng-container>
            </vdr-card>
        </vdr-page-block>
    </vdr-page-detail-layout>
</form>
`,
      styles: [".facets,.options{display:flex;flex-wrap:wrap;gap:3px}vdr-product-variant-quick-jump{flex:1;margin-inline-end:calc(var(--space-unit) * 2)}.stock-levels,.prices{margin-top:calc(var(--space-unit) * 2);padding-top:calc(var(--space-unit) * 2);border-top:1px solid var(--color-weight-150)}.price-wrapper{display:flex;align-items:center;gap:var(--space-unit);width:100%}.price-wrapper.pending-deletion vdr-currency-input{opacity:.7}.price-wrapper.pending-deletion .delete-button{background-color:var(--color-error-700);color:var(--color-error-100)}.title-row{display:flex;justify-content:space-between;align-items:center}.title{font-size:var(--font-size-base)}\n"]
    }]
  }], () => [{
    type: ProductDetailService
  }, {
    type: FormBuilder
  }, {
    type: ModalService
  }, {
    type: NotificationService
  }, {
    type: DataService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var assignProductVariantsToChannelBulkAction = {
  location: "product-variant-list",
  label: marker("common.assign-to-channel"),
  icon: "layers",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateProduct),
  isVisible: ({
    injector
  }) => isMultiChannel(injector.get(DataService)),
  onClick: ({
    injector,
    selection,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    modalService.fromComponent(AssignProductsToChannelDialogComponent, {
      size: "lg",
      locals: {
        productVariantIds: (0, import_unique.unique)(selection.map((p) => p.id)),
        currentChannelIds: []
      }
    }).subscribe((result) => {
      if (result) {
        clearSelection();
      }
    });
  }
};
var removeProductVariantsFromChannelBulkAction = createBulkRemoveFromChannelAction({
  location: "product-variant-list",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateProduct),
  getItemName: (item) => item.name,
  bulkRemoveFromChannel: (dataService, ids, channelId) => dataService.product.removeVariantsFromChannel({
    channelId,
    productVariantIds: ids
  }).pipe(map((res) => res.removeProductVariantsFromChannel))
});
var deleteProductVariantsBulkAction = {
  location: "product-variant-list",
  label: marker("common.delete"),
  icon: "trash",
  iconClass: "is-danger",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.DeleteProduct) || userPermissions.includes(Permission.DeleteCatalog),
  onClick: ({
    injector,
    selection,
    hostComponent,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    const dataService = injector.get(DataService);
    const notificationService = injector.get(NotificationService);
    modalService.dialog({
      title: marker("common.confirm-bulk-delete"),
      translationVars: {
        count: selection.length
      },
      buttons: [{
        type: "secondary",
        label: marker("common.cancel")
      }, {
        type: "danger",
        label: marker("common.delete"),
        returnValue: true
      }]
    }).pipe(switchMap((response) => response ? dataService.product.deleteProductVariants((0, import_unique.unique)(selection.map((p) => p.id))) : EMPTY)).subscribe((result) => {
      let deleted = 0;
      const errors = [];
      for (const item of result.deleteProductVariants) {
        if (item.result === DeletionResult.DELETED) {
          deleted++;
        } else if (item.message) {
          errors.push(item.message);
        }
      }
      if (0 < deleted) {
        notificationService.success(marker("catalog.notify-bulk-delete-products-success"), {
          count: deleted
        });
      }
      if (0 < errors.length) {
        notificationService.error(errors.join("\n"));
      }
      hostComponent.refresh();
      clearSelection();
    });
  }
};
var assignFacetValuesToProductVariantsBulkAction = {
  location: "product-variant-list",
  label: marker("catalog.edit-facet-values"),
  icon: "tag",
  requiresPermission: (userPermissions) => userPermissions.includes(Permission.UpdateCatalog) || userPermissions.includes(Permission.UpdateProduct),
  onClick: ({
    injector,
    selection,
    clearSelection
  }) => {
    const modalService = injector.get(ModalService);
    const notificationService = injector.get(NotificationService);
    const mode = "variant";
    const ids = (0, import_unique.unique)(selection.map((p) => p.id));
    return modalService.fromComponent(BulkAddFacetValuesDialogComponent, {
      size: "xl",
      locals: {
        mode,
        ids
      }
    }).subscribe((result) => {
      if (result) {
        notificationService.success(marker("common.notify-bulk-update-success"), {
          count: selection.length,
          entity: mode === "variant" ? "Products" : "ProductVariants"
        });
        clearSelection();
      }
    });
  }
};
var ProductVariantsTableComponent = class _ProductVariantsTableComponent {
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.formGroupMap = /* @__PURE__ */ new Map();
    this.updatePermission = [Permission.UpdateCatalog, Permission.UpdateProduct];
  }
  ngOnInit() {
    this.subscription = this.formArray.valueChanges.pipe(map((value) => value.length), debounceTime(1), distinctUntilChanged()).subscribe(() => {
      this.buildFormGroupMap();
    });
    this.buildFormGroupMap();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  trackByFn(index, item) {
    if (item.id != null) {
      return item.id;
    } else {
      return index;
    }
  }
  getFeaturedAsset(variant) {
    return this.pendingAssetChanges[variant.id]?.featuredAsset || variant.featuredAsset;
  }
  optionGroupName(optionGroupId) {
    const group = this.optionGroups.find((g) => g.id === optionGroupId);
    return group && group.name;
  }
  buildFormGroupMap() {
    this.formGroupMap.clear();
    for (const controlGroup of this.formArray.controls) {
      this.formGroupMap.set(controlGroup.value.id, controlGroup);
    }
    this.changeDetector.markForCheck();
  }
  static {
    this.ɵfac = function ProductVariantsTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsTableComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantsTableComponent,
      selectors: [["vdr-product-variants-table"]],
      inputs: {
        formArray: [0, "productVariantsFormArray", "formArray"],
        variants: "variants",
        paginationConfig: "paginationConfig",
        channelPriceIncludesTax: "channelPriceIncludesTax",
        optionGroups: "optionGroups",
        pendingAssetChanges: "pendingAssetChanges"
      },
      standalone: false,
      decls: 24,
      vars: 24,
      consts: [["placeholder", ""], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "left", "align-middle"], [1, "card-img"], [1, "featured-asset"], [3, "src", 4, "ngIf", "ngIfElse"], ["clrInput", "", "type", "text", "formControlName", "name", 3, "readonly", "placeholder"], ["clrInput", "", "type", "text", "formControlName", "sku", 3, "readonly", "placeholder"], [1, "left", "align-middle", "price"], ["clrInput", "", "formControlName", "price", 3, "currencyCode", "readonly", 4, "ngIf"], ["clrInput", "", "formControlName", "priceWithTax", 3, "currencyCode", "readonly", 4, "ngIf"], [1, "left", "align-middle", "stock"], ["clrInput", "", "type", "number", "min", "0", "step", "1", "formControlName", "stockOnHand", 3, "readonly"], ["type", "checkbox", "clrToggle", "", "name", "enabled", "formControlName", "enabled", 3, "vdrDisabled"], [3, "src"], [1, "placeholder"], ["shape", "image", "size", "48"], ["clrInput", "", "formControlName", "price", 3, "currencyCode", "readonly"], ["clrInput", "", "formControlName", "priceWithTax", 3, "currencyCode", "readonly"]],
      template: function ProductVariantsTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "table", 1)(1, "thead")(2, "tr");
          ɵɵelement(3, "th");
          ɵɵelementStart(4, "th");
          ɵɵtext(5);
          ɵɵpipe(6, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(7, "th");
          ɵɵtext(8);
          ɵɵpipe(9, "translate");
          ɵɵelementEnd();
          ɵɵtemplate(10, ProductVariantsTableComponent_ng_container_10_Template, 3, 1, "ng-container", 2);
          ɵɵpipe(11, "sort");
          ɵɵelementStart(12, "th");
          ɵɵtext(13);
          ɵɵpipe(14, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(15, "th");
          ɵɵtext(16);
          ɵɵpipe(17, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(18, "th");
          ɵɵtext(19);
          ɵɵpipe(20, "translate");
          ɵɵelementEnd()()();
          ɵɵelementStart(21, "tbody");
          ɵɵtemplate(22, ProductVariantsTableComponent_tr_22_Template, 2, 1, "tr", 3);
          ɵɵpipe(23, "paginate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind1(6, 8, "common.name"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(9, 10, "catalog.sku"));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ɵɵpipeBind2(11, 12, ctx.optionGroups, "id"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(14, 15, "catalog.price"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(17, 17, "catalog.stock-on-hand"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(20, 19, "common.enabled"));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ɵɵpipeBind2(23, 21, ctx.variants, ctx.paginationConfig))("ngForTrackBy", ctx.trackByFn);
        }
      },
      dependencies: [ClrIconCustomTag, ClrCheckbox, ClrCheckboxWrapper, ClrInput, ClrInputContainer, NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, CurrencyInputComponent, FormFieldControlDirective, DisabledDirective, PaginatePipe, TranslatePipe, SortPipe, StringToColorPipe, HasPermissionPipe, AssetPreviewPipe],
      styles: [".placeholder[_ngcontent-%COMP%]{color:var(--color-grey-300)}.stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:96px}td[_ngcontent-%COMP%]{transition:background-color .2s}td.disabled[_ngcontent-%COMP%]{background-color:var(--color-component-bg-200)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsTableComponent, [{
    type: Component,
    args: [{
      selector: "vdr-product-variants-table",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<table class="table">
    <thead>
        <tr>
            <th></th>
            <th>{{ 'common.name' | translate }}</th>
            <th>{{ 'catalog.sku' | translate }}</th>
            <ng-container *ngFor="let optionGroup of optionGroups | sort: 'id'">
                <th>{{ optionGroup.name }}</th>
            </ng-container>
            <th>{{ 'catalog.price' | translate }}</th>
            <th>{{ 'catalog.stock-on-hand' | translate }}</th>
            <th>{{ 'common.enabled' | translate }}</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let variant of variants | paginate: paginationConfig; index as i; trackBy: trackByFn">
            <ng-container *ngIf="formGroupMap.get(variant.id) as formGroup" [formGroup]="formGroup">
                <td class="left align-middle" [class.disabled]="!formGroup.get('enabled')!.value">
                    <div class="card-img">
                        <div class="featured-asset">
                            <img
                                *ngIf="getFeaturedAsset(variant) as featuredAsset; else placeholder"
                                [src]="featuredAsset | assetPreview: 'tiny'"
                            />
                            <ng-template #placeholder>
                                <div class="placeholder">
                                    <clr-icon shape="image" size="48"></clr-icon>
                                </div>
                            </ng-template>
                        </div>
                    </div>
                </td>
                <td class="left align-middle" [class.disabled]="!formGroup.get('enabled')!.value">
                    <clr-input-container>
                        <input
                            clrInput
                            type="text"
                            formControlName="name"
                            [readonly]="!(updatePermission | hasPermission)"
                            [placeholder]="'common.name' | translate"
                        />
                    </clr-input-container>
                </td>
                <td class="left align-middle" [class.disabled]="!formGroup.get('enabled')!.value">
                    <clr-input-container>
                        <input
                            clrInput
                            type="text"
                            formControlName="sku"
                            [readonly]="!(updatePermission | hasPermission)"
                            [placeholder]="'catalog.sku' | translate"
                        />
                    </clr-input-container>
                </td>
                <ng-container *ngFor="let option of variant.options | sort: 'groupId'">
                    <td
                        class="left align-middle"
                        [class.disabled]="!formGroup.get('enabled')!.value"
                        [style.color]="optionGroupName(option.groupId) | stringToColor"
                    >
                        {{ option.name }}
                    </td>
                </ng-container>
                <td class="left align-middle price" [class.disabled]="!formGroup.get('enabled')!.value">
                    <clr-input-container>
                        <vdr-currency-input
                            *ngIf="!channelPriceIncludesTax"
                            clrInput
                            [currencyCode]="variant.currencyCode"
                            [readonly]="!(updatePermission | hasPermission)"
                            formControlName="price"
                        ></vdr-currency-input>
                        <vdr-currency-input
                            *ngIf="channelPriceIncludesTax"
                            clrInput
                            [currencyCode]="variant.currencyCode"
                            [readonly]="!(updatePermission | hasPermission)"
                            formControlName="priceWithTax"
                        ></vdr-currency-input>
                    </clr-input-container>
                </td>
                <td class="left align-middle stock" [class.disabled]="!formGroup.get('enabled')!.value">
                    <clr-input-container>
                        <input
                            clrInput
                            type="number"
                            min="0"
                            step="1"
                            formControlName="stockOnHand"
                            [readonly]="!(updatePermission | hasPermission)"
                        />
                    </clr-input-container>
                </td>
                <td class="left align-middle stock" [class.disabled]="!formGroup.get('enabled')!.value">
                    <clr-toggle-wrapper>
                        <input
                            type="checkbox"
                            clrToggle
                            name="enabled"
                            formControlName="enabled"
                            [vdrDisabled]="!(updatePermission | hasPermission)"
                        />
                    </clr-toggle-wrapper>
                </td>
            </ng-container>
        </tr>
    </tbody>
</table>
`,
      styles: [".placeholder{color:var(--color-grey-300)}.stock input,.price input{max-width:96px}td{transition:background-color .2s}td.disabled{background-color:var(--color-component-bg-200)}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    formArray: [{
      type: Input,
      args: ["productVariantsFormArray"]
    }],
    variants: [{
      type: Input
    }],
    paginationConfig: [{
      type: Input
    }],
    channelPriceIncludesTax: [{
      type: Input
    }],
    optionGroups: [{
      type: Input
    }],
    pendingAssetChanges: [{
      type: Input
    }]
  });
})();
var UpdateProductOptionDialogComponent = class _UpdateProductOptionDialogComponent {
  constructor() {
    this.updateVariantName = true;
    this.codeInputTouched = false;
  }
  ngOnInit() {
    const currentTranslation = this.productOption.translations.find((t) => t.languageCode === this.activeLanguage);
    this.name = currentTranslation?.name ?? "";
    this.code = this.productOption.code;
    this.customFieldsForm = new UntypedFormGroup({});
    if (this.customFields) {
      const cfCurrentTranslation = currentTranslation && currentTranslation.customFields || {};
      for (const fieldDef of this.customFields) {
        const key = fieldDef.name;
        const value = fieldDef.type === "localeString" ? cfCurrentTranslation[key] : this.productOption.customFields[key];
        this.customFieldsForm.addControl(fieldDef.name, new UntypedFormControl(value));
      }
    }
  }
  update() {
    const result = createUpdatedTranslatable({
      translatable: this.productOption,
      languageCode: this.activeLanguage,
      updatedFields: {
        code: this.code,
        name: this.name,
        customFields: this.customFieldsForm.value
      },
      customFieldConfig: this.customFields,
      defaultTranslation: {
        languageCode: this.activeLanguage,
        name: ""
      }
    });
    this.resolveWith(__spreadProps(__spreadValues({}, result), {
      autoUpdate: this.updateVariantName
    }));
  }
  cancel() {
    this.resolveWith();
  }
  updateCode(nameValue) {
    if (!this.codeInputTouched && !this.productOption.code) {
      this.code = (0, import_normalize_string.normalizeString)(nameValue, "-");
    }
  }
  static {
    this.ɵfac = function UpdateProductOptionDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateProductOptionDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UpdateProductOptionDialogComponent,
      selectors: [["vdr-update-product-option-dialog"]],
      standalone: false,
      decls: 16,
      vars: 13,
      consts: [["nameInput", "ngModel"], ["codeInput", "ngModel"], ["vdrDialogTitle", ""], ["for", "name", 3, "label"], ["id", "name", "type", "text", "required", "", 3, "ngModelChange", "input", "ngModel"], ["for", "code", 3, "label"], ["id", "code", "type", "text", "required", "", "pattern", "[a-z0-9_-]+", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "clrCheckbox", "", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["vdrDialogButtons", ""], ["entityName", "ProductOption", 3, "customFields", "customFieldsFormGroup", "readonly"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function UpdateProductOptionDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, UpdateProductOptionDialogComponent_ng_template_0_Template, 2, 3, "ng-template", 2);
          ɵɵelementStart(1, "vdr-form-field", 3);
          ɵɵpipe(2, "translate");
          ɵɵelementStart(3, "input", 4, 0);
          ɵɵtwoWayListener("ngModelChange", function UpdateProductOptionDialogComponent_Template_input_ngModelChange_3_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("input", function UpdateProductOptionDialogComponent_Template_input_input_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.updateCode($event.target.value));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(5, "vdr-form-field", 5);
          ɵɵpipe(6, "translate");
          ɵɵelementStart(7, "input", 6, 1);
          ɵɵtwoWayListener("ngModelChange", function UpdateProductOptionDialogComponent_Template_input_ngModelChange_7_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.code, $event) || (ctx.code = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(9, "clr-checkbox-wrapper")(10, "input", 7);
          ɵɵtwoWayListener("ngModelChange", function UpdateProductOptionDialogComponent_Template_input_ngModelChange_10_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.updateVariantName, $event) || (ctx.updateVariantName = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(11, "label");
          ɵɵtext(12);
          ɵɵpipe(13, "translate");
          ɵɵelementEnd()();
          ɵɵtemplate(14, UpdateProductOptionDialogComponent_section_14_Template, 6, 9, "section", 8)(15, UpdateProductOptionDialogComponent_ng_template_15_Template, 6, 7, "ng-template", 9);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("label", ɵɵpipeBind1(2, 7, "catalog.option-name"));
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.name);
          ɵɵadvance(2);
          ɵɵproperty("label", ɵɵpipeBind1(6, 9, "common.code"));
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.code);
          ɵɵadvance(3);
          ɵɵtwoWayProperty("ngModel", ctx.updateVariantName);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(13, 11, "catalog.auto-update-option-variant-name"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.customFields.length);
        }
      },
      dependencies: [ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgIf, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, PatternValidator, NgModel, FormFieldComponent, FormFieldControlDirective, DialogButtonsDirective, DialogTitleDirective, TabbedCustomFieldsComponent, TranslatePipe, HasPermissionPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateProductOptionDialogComponent, [{
    type: Component,
    args: [{
      selector: "vdr-update-product-option-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template vdrDialogTitle>{{ 'catalog.update-product-option' | translate }}</ng-template>
<vdr-form-field [label]="'catalog.option-name' | translate" for="name">
    <input
        id="name"
        type="text"
        #nameInput="ngModel"
        [(ngModel)]="name"
        required
        (input)="updateCode($event.target.value)"
    />
</vdr-form-field>
<vdr-form-field [label]="'common.code' | translate" for="code">
    <input id="code" type="text" #codeInput="ngModel" required [(ngModel)]="code" pattern="[a-z0-9_-]+" />
</vdr-form-field>
<clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox [(ngModel)]="updateVariantName" />
    <label>{{ 'catalog.auto-update-option-variant-name' | translate }}</label>
</clr-checkbox-wrapper>
<section *ngIf="customFields.length">
    <label>{{ 'common.custom-fields' | translate }}</label>
    <vdr-tabbed-custom-fields
        entityName="ProductOption"
        [customFields]="customFields"
        [customFieldsFormGroup]="customFieldsForm"
        [readonly]="!(['UpdateCatalog', 'UpdateProduct'] | hasPermission)"
    ></vdr-tabbed-custom-fields>
</section>

<ng-template vdrDialogButtons>
    <button type="button" class="btn" (click)="cancel()">{{ 'common.cancel' | translate }}</button>
    <button
        type="submit"
        (click)="update()"
        [disabled]="
            nameInput.invalid ||
            codeInput.invalid ||
            (nameInput.pristine && codeInput.pristine && customFieldsForm.pristine)
        "
        class="btn btn-primary"
    >
        {{ 'catalog.update-product-option' | translate }}
    </button>
</ng-template>
`
    }]
  }], null, null);
})();
var CATALOG_COMPONENTS = [ProductListComponent, ProductDetailComponent, FacetListComponent, FacetDetailComponent, GenerateProductVariantsComponent, ApplyFacetDialogComponent, AssetListComponent, VariantPriceDetailComponent, VariantPriceStrategyDetailComponent, CollectionListComponent, CollectionDetailComponent, CollectionTreeComponent, CollectionTreeNodeComponent, CollectionContentsComponent, ProductVariantsTableComponent, OptionValueInputComponent, UpdateProductOptionDialogComponent, ProductVariantsEditorComponent, AssignProductsToChannelDialogComponent, AssetDetailComponent, ConfirmVariantDeletionDialogComponent, ProductOptionsEditorComponent, BulkAddFacetValuesDialogComponent, CollectionDataTableComponent, CollectionBreadcrumbPipe, MoveCollectionsDialogComponent, ProductVariantListComponent, ProductDetailComponent, ProductVariantDetailComponent, CreateProductVariantDialogComponent, CreateProductOptionGroupDialogComponent, ProductVariantQuickJumpComponent, CreateFacetValueDialogComponent];
var CatalogModule = class _CatalogModule {
  static {
    this.hasRegisteredTabsAndBulkActions = false;
  }
  constructor(bulkActionRegistryService, pageService) {
    if (_CatalogModule.hasRegisteredTabsAndBulkActions) {
      return;
    }
    bulkActionRegistryService.registerBulkAction(assignFacetValuesToProductsBulkAction);
    bulkActionRegistryService.registerBulkAction(assignProductsToChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(duplicateProductsBulkAction);
    bulkActionRegistryService.registerBulkAction(removeProductsFromChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteProductsBulkAction);
    bulkActionRegistryService.registerBulkAction(assignFacetValuesToProductVariantsBulkAction);
    bulkActionRegistryService.registerBulkAction(assignProductVariantsToChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(removeProductVariantsFromChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteProductVariantsBulkAction);
    bulkActionRegistryService.registerBulkAction(assignFacetsToChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(duplicateFacetsBulkAction);
    bulkActionRegistryService.registerBulkAction(removeFacetsFromChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteFacetsBulkAction);
    bulkActionRegistryService.registerBulkAction(moveCollectionsBulkAction);
    bulkActionRegistryService.registerBulkAction(assignCollectionsToChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(duplicateCollectionsBulkAction);
    bulkActionRegistryService.registerBulkAction(removeCollectionsFromChannelBulkAction);
    bulkActionRegistryService.registerBulkAction(deleteCollectionsBulkAction);
    pageService.registerPageTab({
      priority: 0,
      location: "product-list",
      tab: marker("catalog.products"),
      route: "",
      component: ProductListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "product-detail",
      tab: marker("catalog.product"),
      route: "",
      component: detailComponentWithResolver({
        component: ProductDetailComponent,
        query: GetProductDetailDocument,
        entityKey: "product",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("catalog.create-new-product"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "product-list",
      tab: marker("catalog.product-variants"),
      route: "variants",
      component: ProductVariantListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "product-variant-detail",
      tab: marker("catalog.product-variants"),
      route: "",
      component: detailComponentWithResolver({
        component: ProductVariantDetailComponent,
        query: GetProductVariantDetailDocument,
        entityKey: "productVariant",
        getBreadcrumbs: (entity) => [{
          label: `${entity?.product.name}`,
          link: ["/catalog", "products", entity?.product.id]
        }, {
          label: `${entity?.name} (${entity?.sku})`,
          link: ["variants", entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "facet-list",
      tab: marker("catalog.facets"),
      route: "",
      component: FacetListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "facet-detail",
      tab: marker("catalog.facet"),
      route: "",
      component: detailComponentWithResolver({
        component: FacetDetailComponent,
        query: GetFacetDetailDocument,
        variables: {
          facetValueListOptions: {
            take: 10,
            skip: 0,
            sort: {
              createdAt: import_generated_types.SortOrder.DESC
            }
          }
        },
        entityKey: "facet",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("catalog.create-new-facet"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "collection-list",
      tab: marker("catalog.collections"),
      route: "",
      component: CollectionListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "collection-detail",
      tab: marker("catalog.collection"),
      route: "",
      component: detailComponentWithResolver({
        component: CollectionDetailComponent,
        query: CollectionDetailQueryDocument,
        entityKey: "collection",
        getBreadcrumbs: (entity) => [{
          label: entity ? entity.name : marker("catalog.create-new-collection"),
          link: [entity?.id]
        }]
      })
    });
    pageService.registerPageTab({
      priority: 0,
      location: "asset-list",
      tab: marker("catalog.assets"),
      route: "",
      component: AssetListComponent
    });
    pageService.registerPageTab({
      priority: 0,
      location: "asset-detail",
      tab: marker("catalog.asset"),
      route: "",
      component: detailComponentWithResolver({
        component: AssetDetailComponent,
        query: AssetDetailQueryDocument,
        entityKey: "asset",
        getBreadcrumbs: (entity) => [{
          label: `${entity?.name}`,
          link: [entity?.id]
        }]
      })
    });
    _CatalogModule.hasRegisteredTabsAndBulkActions = true;
  }
  static {
    this.ɵfac = function CatalogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CatalogModule)(ɵɵinject(BulkActionRegistryService), ɵɵinject(PageService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CatalogModule,
      declarations: [ProductListComponent, ProductDetailComponent, FacetListComponent, FacetDetailComponent, GenerateProductVariantsComponent, ApplyFacetDialogComponent, AssetListComponent, VariantPriceDetailComponent, VariantPriceStrategyDetailComponent, CollectionListComponent, CollectionDetailComponent, CollectionTreeComponent, CollectionTreeNodeComponent, CollectionContentsComponent, ProductVariantsTableComponent, OptionValueInputComponent, UpdateProductOptionDialogComponent, ProductVariantsEditorComponent, AssignProductsToChannelDialogComponent, AssetDetailComponent, ConfirmVariantDeletionDialogComponent, ProductOptionsEditorComponent, BulkAddFacetValuesDialogComponent, CollectionDataTableComponent, CollectionBreadcrumbPipe, MoveCollectionsDialogComponent, ProductVariantListComponent, ProductDetailComponent, ProductVariantDetailComponent, CreateProductVariantDialogComponent, CreateProductOptionGroupDialogComponent, ProductVariantQuickJumpComponent, CreateFacetValueDialogComponent],
      imports: [SharedModule, RouterModule],
      exports: [ProductListComponent, ProductDetailComponent, FacetListComponent, FacetDetailComponent, GenerateProductVariantsComponent, ApplyFacetDialogComponent, AssetListComponent, VariantPriceDetailComponent, VariantPriceStrategyDetailComponent, CollectionListComponent, CollectionDetailComponent, CollectionTreeComponent, CollectionTreeNodeComponent, CollectionContentsComponent, ProductVariantsTableComponent, OptionValueInputComponent, UpdateProductOptionDialogComponent, ProductVariantsEditorComponent, AssignProductsToChannelDialogComponent, AssetDetailComponent, ConfirmVariantDeletionDialogComponent, ProductOptionsEditorComponent, BulkAddFacetValuesDialogComponent, CollectionDataTableComponent, CollectionBreadcrumbPipe, MoveCollectionsDialogComponent, ProductVariantListComponent, ProductDetailComponent, ProductVariantDetailComponent, CreateProductVariantDialogComponent, CreateProductOptionGroupDialogComponent, ProductVariantQuickJumpComponent, CreateFacetValueDialogComponent]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, RouterModule.forChild([])],
      exports: [...CATALOG_COMPONENTS],
      declarations: [...CATALOG_COMPONENTS],
      providers: [{
        provide: ROUTES,
        useFactory: (pageService) => createRoutes(pageService),
        multi: true,
        deps: [PageService]
      }]
    }]
  }], () => [{
    type: BulkActionRegistryService
  }, {
    type: PageService
  }], null);
})();
var PRODUCT_LIST_QUERY_PRODUCT_FRAGMENT = gql`
    fragment ProductListQueryProductFragment on Product {
        id
        createdAt
        updatedAt
        enabled
        languageCode
        name
        slug
        featuredAsset {
            id
            createdAt
            updatedAt
            preview
            focalPoint {
                x
                y
            }
        }
        variantList {
            totalItems
        }
    }
`;
var PRODUCT_LIST_QUERY = gql`
    query ProductListQuery($options: ProductListOptions) {
        products(options: $options) {
            items {
                ...ProductListQueryProductFragment
            }
            totalItems
        }
    }
    ${PRODUCT_LIST_QUERY_PRODUCT_FRAGMENT}
`;
var PRODUCT_VARIANT_DETAIL_QUERY_PRODUCT_VARIANT_FRAGMENT = gql`
    fragment ProductVariantDetailQueryProductVariantFragment on ProductVariant {
        id
        createdAt
        updatedAt
        enabled
        languageCode
        name
        price
        currencyCode
        prices {
            ...ProductVariantPrice
        }
        priceWithTax
        stockOnHand
        stockAllocated
        trackInventory
        outOfStockThreshold
        useGlobalOutOfStockThreshold
        taxRateApplied {
            id
            name
            value
        }
        taxCategory {
            id
            name
        }
        sku
        options {
            ...ProductOption
        }
        stockLevels {
            id
            createdAt
            updatedAt
            stockOnHand
            stockAllocated
            stockLocationId
            stockLocation {
                id
                createdAt
                updatedAt
                name
            }
        }
        facetValues {
            id
            code
            name
            facet {
                id
                name
            }
        }
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        translations {
            id
            languageCode
            name
        }
        channels {
            id
            code
        }
        product {
            id
            name
            optionGroups {
                id
                name
                code
                translations {
                    id
                    languageCode
                    name
                }
            }
        }
    }
    ${PRODUCT_VARIANT_PRICE_FRAGMENT}
`;
var PRODUCT_VARIANT_DETAIL_QUERY = gql`
    query GetProductVariantDetail($id: ID!) {
        productVariant(id: $id) {
            ...ProductVariantDetailQueryProductVariantFragment
        }
        stockLocations(options: { take: 100 }) {
            items {
                id
                createdAt
                updatedAt
                name
                description
            }
        }
        taxCategories(options: { take: 100 }) {
            items {
                id
                createdAt
                updatedAt
                name
                isDefault
            }
            totalItems
        }
        activeChannel {
            id
            availableCurrencyCodes
            defaultCurrencyCode
        }
    }
    ${PRODUCT_VARIANT_DETAIL_QUERY_PRODUCT_VARIANT_FRAGMENT}
`;
var PRODUCT_VARIANT_UPDATE_MUTATION = gql`
    mutation ProductVariantUpdateMutation($input: [UpdateProductVariantInput!]!) {
        updateProductVariants(input: $input) {
            ...ProductVariantDetailQueryProductVariantFragment
        }
    }
    ${PRODUCT_VARIANT_DETAIL_QUERY_PRODUCT_VARIANT_FRAGMENT}
`;
var PRODUCT_VARIANT_LIST_QUERY_PRODUCT_VARIANT_FRAGMENT = gql`
    fragment ProductVariantListQueryProductVariantFragment on ProductVariant {
        id
        createdAt
        updatedAt
        productId
        enabled
        languageCode
        name
        price
        currencyCode
        priceWithTax
        trackInventory
        outOfStockThreshold
        stockLevels {
            id
            createdAt
            updatedAt
            stockLocationId
            stockOnHand
            stockAllocated
            stockLocation {
                id
                createdAt
                updatedAt
                name
            }
        }
        useGlobalOutOfStockThreshold
        sku
        featuredAsset {
            ...Asset
        }
    }

    ${ASSET_FRAGMENT}
`;
var PRODUCT_VARIANT_LIST_QUERY = gql`
    query ProductVariantListQuery($options: ProductVariantListOptions!) {
        productVariants(options: $options) {
            items {
                ...ProductVariantListQueryProductVariantFragment
            }
            totalItems
        }
    }
    ${PRODUCT_VARIANT_LIST_QUERY_PRODUCT_VARIANT_FRAGMENT}
`;
export {
  ASSET_DETAIL_QUERY,
  ApplyFacetDialogComponent,
  AssetDetailComponent,
  AssetListComponent,
  AssignProductsToChannelDialogComponent,
  BulkAddFacetValuesDialogComponent,
  COLLECTION_DETAIL_QUERY,
  CatalogModule,
  CollectionBreadcrumbPipe,
  CollectionContentsComponent,
  CollectionDataTableComponent,
  CollectionDetailComponent,
  CollectionListComponent,
  CollectionTreeComponent,
  CollectionTreeNodeComponent,
  CollectionTreeService,
  ConfirmVariantDeletionDialogComponent,
  CreateFacetValueDialogComponent,
  CreateProductOptionGroupDialogComponent,
  CreateProductVariantDialogComponent,
  FACET_DETAIL_QUERY,
  FACET_LIST_QUERY,
  FacetDetailComponent,
  FacetListComponent,
  GET_PRODUCTS_WITH_FACET_VALUES_BY_IDS,
  GET_PRODUCT_DETAIL,
  GET_VARIANTS_WITH_FACET_VALUES_BY_IDS,
  GenerateProductVariantsComponent,
  GeneratedVariant,
  MoveCollectionsDialogComponent,
  OPTION_VALUE_INPUT_VALUE_ACCESSOR,
  OptionValueInputComponent,
  PRODUCT_LIST_QUERY,
  PRODUCT_VARIANT_DETAIL_QUERY,
  PRODUCT_VARIANT_DETAIL_QUERY_PRODUCT_VARIANT_FRAGMENT,
  PRODUCT_VARIANT_LIST_QUERY,
  PRODUCT_VARIANT_UPDATE_MUTATION,
  ProductDetailComponent,
  ProductDetailService,
  ProductListComponent,
  ProductOptionsEditorComponent,
  ProductVariantDetailComponent,
  ProductVariantListComponent,
  ProductVariantQuickJumpComponent,
  ProductVariantsEditorComponent,
  ProductVariantsResolver,
  ProductVariantsTableComponent,
  UPDATE_PRODUCTS_BULK,
  UPDATE_VARIANTS_BULK,
  UpdateProductOptionDialogComponent,
  VariantPriceDetailComponent,
  VariantPriceStrategyDetailComponent,
  arrayToTree,
  assignCollectionsToChannelBulkAction,
  assignFacetValuesToProductVariantsBulkAction,
  assignFacetValuesToProductsBulkAction,
  assignFacetsToChannelBulkAction,
  assignProductVariantsToChannelBulkAction,
  assignProductsToChannelBulkAction,
  createRoutes,
  deleteCollectionsBulkAction,
  deleteFacetsBulkAction,
  deleteProductVariantsBulkAction,
  deleteProductsBulkAction,
  duplicateCollectionsBulkAction,
  duplicateFacetsBulkAction,
  duplicateProductsBulkAction,
  moveCollectionsBulkAction,
  productOptionsEditorBreadcrumb,
  removeCollectionsFromChannelBulkAction,
  removeFacetsFromChannelBulkAction,
  removeFacetsFromChannelBulkAction2,
  removeProductVariantsFromChannelBulkAction,
  removeProductsFromChannelBulkAction,
  replaceLast
};
//# sourceMappingURL=@vendure_admin-ui_catalog.js.map
