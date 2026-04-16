import {
  ActionBarComponent,
  ActionBarItemsComponent,
  ActionBarLeftComponent,
  ActionBarRightComponent,
  BaseListComponent,
  ChipComponent,
  DataService,
  DataTable2ColumnComponent,
  DataTable2Component,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuComponent,
  DropdownTriggerDirective,
  DurationPipe,
  FormFieldControlDirective,
  HasPermissionPipe,
  HealthCheckService,
  JobState,
  LocaleDatePipe,
  NotificationService,
  ObjectTreeComponent,
  PageBlockComponent,
  PageBodyComponent,
  PageHeaderComponent,
  PageTitleComponent,
  SharedModule,
  SortOrder,
  TimeAgoPipe,
  gql
} from "./chunk-YDQAHX43.js";
import {
  ClrCheckbox,
  ClrCheckboxWrapper,
  ClrIconCustomTag,
  ClrLabel
} from "./chunk-SWTGRTQU.js";
import {
  NgLabelTemplateDirective,
  NgOptionComponent,
  NgOptionTemplateDirective,
  NgSelectComponent
} from "./chunk-QP2DF7NU.js";
import {
  TranslatePipe,
  _
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
  FormControl,
  FormControlDirective,
  NgControlStatus
} from "./chunk-XNNVMMYZ.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-A2BPDF5Y.js";
import "./chunk-FRAMVYFW.js";
import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf,
  PercentPipe,
  TitleCasePipe
} from "./chunk-3WBC65NO.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-OXIDPESK.js";
import {
  filter,
  map,
  takeUntil,
  timer
} from "./chunk-OGZ4D63M.js";
import {
  marker
} from "./chunk-D3BILYUK.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// ../../node_modules/@vendure/admin-ui/fesm2022/vendure-admin-ui-system.mjs
var _c0 = (a0, a1) => ({
  "is-success": a0,
  "is-danger": a1
});
function HealthCheckComponent_div_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "system.health-all-systems-up"), " ");
  }
}
function HealthCheckComponent_div_6_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "translate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "system.health-error"), " ");
  }
}
function HealthCheckComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "div", 10);
    ɵɵelement(2, "clr-icon", 11);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 12);
    ɵɵtemplate(4, HealthCheckComponent_div_6_ng_container_4_Template, 3, 3, "ng-container", 13)(5, HealthCheckComponent_div_6_ng_template_5_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementStart(7, "div", 14);
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵpipe(10, "async");
    ɵɵpipe(11, "localeDate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const status_r1 = ctx.ngIf;
    const error_r2 = ɵɵreference(6);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(13, _c0, status_r1 === "ok", status_r1 !== "ok"));
    ɵɵattribute("shape", status_r1 === "ok" ? "check-circle" : "exclamation-circle");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", status_r1 === "ok")("ngIfElse", error_r2);
    ɵɵadvance(4);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(9, 6, "system.health-last-checked"), ": ", ɵɵpipeBind2(11, 10, ɵɵpipeBind1(10, 8, ctx_r2.healthCheckService.lastCheck$), "mediumTime"), " ");
  }
}
function HealthCheckComponent_tr_28_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "clr-icon", 17);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "system.health-status-up"), " ");
  }
}
function HealthCheckComponent_tr_28_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clr-icon", 18);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "system.health-status-down"), " ");
  }
}
function HealthCheckComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td", 15);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 15)(4, "vdr-chip", 16);
    ɵɵtemplate(5, HealthCheckComponent_tr_28_ng_container_5_Template, 4, 3, "ng-container", 13)(6, HealthCheckComponent_tr_28_ng_template_6_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "td", 15);
    ɵɵtext(9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const down_r5 = ɵɵreference(7);
    ɵɵadvance(2);
    ɵɵtextInterpolate(row_r4.key);
    ɵɵadvance(2);
    ɵɵproperty("colorType", row_r4.result.status === "up" ? "success" : "error");
    ɵɵadvance();
    ɵɵproperty("ngIf", row_r4.result.status === "up")("ngIfElse", down_r5);
    ɵɵadvance(4);
    ɵɵtextInterpolate(row_r4.result.message);
  }
}
function JobStateLabelComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵpipe(2, "percent");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.job.progress / 100), " ");
  }
}
var _c1 = () => ["DeleteSettings", "DeleteSystem"];
function JobListComponent_ng_template_40_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "vdr-chip");
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, "system.all-job-queues"));
  }
}
function JobListComponent_ng_template_40_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().item;
    ɵɵproperty("colorFrom", item_r1.name);
    ɵɵadvance();
    ɵɵtextInterpolate(item_r1.name);
  }
}
function JobListComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, JobListComponent_ng_template_40_ng_container_0_Template, 4, 3, "ng-container", 19)(1, JobListComponent_ng_template_40_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    const others_r2 = ɵɵreference(2);
    ɵɵproperty("ngIf", item_r1.name === "all")("ngIfElse", others_r2);
  }
}
function JobListComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const job_r3 = ctx.item;
    ɵɵtextInterpolate1(" ", job_r3.id, " ");
  }
}
function JobListComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "timeAgo");
  }
  if (rf & 2) {
    const job_r4 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, job_r4.createdAt), " ");
  }
}
function JobListComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-chip", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const job_r5 = ctx.item;
    ɵɵproperty("colorFrom", job_r5.queueName);
    ɵɵadvance();
    ɵɵtextInterpolate(job_r5.queueName);
  }
}
function JobListComponent_ng_template_57_vdr_dropdown_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown")(1, "button", 22);
    ɵɵpipe(2, "translate");
    ɵɵelement(3, "clr-icon", 23);
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-dropdown-menu")(5, "div", 24);
    ɵɵelement(6, "vdr-object-tree", 5);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const job_r6 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(2, 2, "system.job-data"));
    ɵɵadvance(5);
    ɵɵproperty("value", job_r6.data);
  }
}
function JobListComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, JobListComponent_ng_template_57_vdr_dropdown_0_Template, 7, 4, "vdr-dropdown", 21);
  }
  if (rf & 2) {
    const job_r6 = ctx.item;
    ɵɵproperty("ngIf", job_r6.data);
  }
}
function JobListComponent_ng_template_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const job_r7 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵtextInterpolate1("after ", job_r7.attempts, " attempts");
  }
}
function JobListComponent_ng_template_60_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const job_r7 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵtextInterpolate2(" attempting ", job_r7.attempts, " of ", job_r7.retries + 1, " ");
  }
}
function JobListComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-job-state-label", 25);
    ɵɵtemplate(1, JobListComponent_ng_template_60_div_1_Template, 2, 1, "div", 26)(2, JobListComponent_ng_template_60_div_2_Template, 2, 2, "div", 26);
  }
  if (rf & 2) {
    const job_r7 = ctx.item;
    ɵɵproperty("job", job_r7);
    ɵɵadvance();
    ɵɵproperty("ngIf", job_r7.state === "FAILED");
    ɵɵadvance();
    ɵɵproperty("ngIf", job_r7.state === "RUNNING" || job_r7.state === "RETRYING");
  }
}
function JobListComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "duration");
  }
  if (rf & 2) {
    const job_r8 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, job_r8.duration), " ");
  }
}
function JobListComponent_ng_template_66_vdr_dropdown_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown")(1, "button", 28);
    ɵɵelement(2, "clr-icon", 23);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-dropdown-menu")(6, "div", 24);
    ɵɵelement(7, "vdr-object-tree", 5);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const job_r9 = ɵɵnextContext().item;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "system.job-result"), " ");
    ɵɵadvance(4);
    ɵɵproperty("value", job_r9.result);
  }
}
function JobListComponent_ng_template_66_vdr_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown")(1, "button", 29);
    ɵɵelement(2, "clr-icon", 30);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-dropdown-menu")(6, "div", 24);
    ɵɵtext(7);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const job_r9 = ɵɵnextContext().item;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "system.job-error"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", job_r9.error, " ");
  }
}
function JobListComponent_ng_template_66_vdr_dropdown_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-dropdown")(1, "button", 31);
    ɵɵelement(2, "clr-icon", 32);
    ɵɵelementEnd();
    ɵɵelementStart(3, "vdr-dropdown-menu", 33)(4, "button", 34);
    ɵɵpipe(5, "hasPermission");
    ɵɵlistener("click", function JobListComponent_ng_template_66_vdr_dropdown_2_Template_button_click_4_listener() {
      ɵɵrestoreView(_r10);
      const job_r9 = ɵɵnextContext().item;
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.cancelJob(job_r9.id));
    });
    ɵɵelement(6, "clr-icon", 35);
    ɵɵtext(7);
    ɵɵpipe(8, "translate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵproperty("disabled", !ɵɵpipeBind1(5, 2, ɵɵpureFunction0(6, _c1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 4, "common.cancel"), " ");
  }
}
function JobListComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, JobListComponent_ng_template_66_vdr_dropdown_0_Template, 8, 4, "vdr-dropdown", 21)(1, JobListComponent_ng_template_66_vdr_dropdown_1_Template, 8, 4, "vdr-dropdown", 21)(2, JobListComponent_ng_template_66_vdr_dropdown_2_Template, 9, 7, "vdr-dropdown", 21);
  }
  if (rf & 2) {
    const job_r9 = ctx.item;
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r10.hasResult(job_r9));
    ɵɵadvance();
    ɵɵproperty("ngIf", job_r9.error);
    ɵɵadvance();
    ɵɵproperty("ngIf", !job_r9.isSettled && job_r9.state !== "FAILED");
  }
}
var _c2 = () => ["UpdateSettings", "UpdateSystem"];
function ScheduledTaskListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const task_r1 = ctx.item;
    ɵɵtextInterpolate1(" ", task_r1.id, " ");
  }
}
function ScheduledTaskListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const task_r2 = ctx.item;
    ɵɵtextInterpolate1(" ", task_r2.description, " ");
  }
}
function ScheduledTaskListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const task_r3 = ctx.item;
    ɵɵadvance();
    ɵɵtextInterpolate(task_r3.scheduleDescription);
  }
}
function ScheduledTaskListComponent_ng_template_20_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵpipe(1, "localeDate");
    ɵɵtext(2);
    ɵɵpipe(3, "timeAgo");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const task_r4 = ɵɵnextContext().item;
    ɵɵproperty("title", ɵɵpipeBind1(1, 2, task_r4.lastExecutedAt));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, task_r4.lastExecutedAt), " ");
  }
}
function ScheduledTaskListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ScheduledTaskListComponent_ng_template_20_span_0_Template, 4, 6, "span", 10);
  }
  if (rf & 2) {
    const task_r4 = ctx.item;
    ɵɵproperty("ngIf", task_r4.lastExecutedAt);
  }
}
function ScheduledTaskListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeDate");
  }
  if (rf & 2) {
    const task_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, task_r5.nextExecutionAt), " ");
  }
}
function ScheduledTaskListComponent_ng_template_26_vdr_dropdown_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "vdr-dropdown")(1, "button", 13);
    ɵɵelement(2, "clr-icon", 14);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "vdr-dropdown-menu")(6, "div", 15);
    ɵɵelement(7, "vdr-object-tree", 16);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const task_r6 = ɵɵnextContext().item;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "system.last-result"), " ");
    ɵɵadvance(4);
    ɵɵproperty("value", task_r6.lastResult);
  }
}
function ScheduledTaskListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ScheduledTaskListComponent_ng_template_26_vdr_dropdown_0_Template, 8, 4, "vdr-dropdown", 12);
  }
  if (rf & 2) {
    const task_r6 = ctx.item;
    ɵɵproperty("ngIf", task_r6.lastResult);
  }
}
function ScheduledTaskListComponent_ng_template_29_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "vdr-chip", 17);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("colorType", "success");
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "common.enabled"));
  }
}
function ScheduledTaskListComponent_ng_template_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "vdr-chip", 17);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("colorType", "warning");
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "common.disabled"));
  }
}
function ScheduledTaskListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ScheduledTaskListComponent_ng_template_29_ng_container_0_Template, 4, 4, "ng-container", 12)(1, ScheduledTaskListComponent_ng_template_29_ng_container_1_Template, 4, 4, "ng-container", 12);
  }
  if (rf & 2) {
    const task_r7 = ctx.item;
    ɵɵproperty("ngIf", task_r7.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !task_r7.enabled);
  }
}
function ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 24);
    ɵɵpipe(1, "hasPermission");
    ɵɵlistener("click", function ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const task_r10 = ɵɵnextContext(2).item;
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.runTask(task_r10));
    });
    ɵɵelement(2, "clr-icon", 25);
    ɵɵelementStart(3, "div");
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵproperty("disabled", !ɵɵpipeBind1(1, 2, ɵɵpureFunction0(6, _c2)));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 4, "system.run-task"), " ");
  }
}
function ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "common.disable"), " ");
  }
}
function ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "common.enable"), " ");
  }
}
function ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-dropdown")(1, "button", 18);
    ɵɵelement(2, "clr-icon", 19);
    ɵɵelementEnd();
    ɵɵelementStart(3, "vdr-dropdown-menu", 20);
    ɵɵtemplate(4, ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_button_4_Template, 6, 7, "button", 21);
    ɵɵelementStart(5, "button", 22);
    ɵɵpipe(6, "hasPermission");
    ɵɵlistener("click", function ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_Template_button_click_5_listener() {
      ɵɵrestoreView(_r8);
      const task_r10 = ɵɵnextContext().item;
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.toggleEnabled(task_r10));
    });
    ɵɵelement(7, "clr-icon", 23);
    ɵɵtemplate(8, ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_div_8_Template, 3, 3, "div", 12)(9, ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_div_9_Template, 3, 3, "div", 12);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const task_r10 = ɵɵnextContext().item;
    ɵɵadvance(4);
    ɵɵproperty("ngIf", task_r10.enabled);
    ɵɵadvance();
    ɵɵproperty("disabled", !ɵɵpipeBind1(6, 4, ɵɵpureFunction0(6, _c2)));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", task_r10.enabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !task_r10.enabled);
  }
}
function ScheduledTaskListComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ScheduledTaskListComponent_ng_template_31_vdr_dropdown_0_Template, 10, 7, "vdr-dropdown", 12);
  }
  if (rf & 2) {
    const task_r10 = ctx.item;
    ɵɵproperty("ngIf", !task_r10.isSettled && task_r10.state !== "FAILED");
  }
}
var _c3 = ".result-detail[_ngcontent-%COMP%]{margin:0 12px}.retry-info[_ngcontent-%COMP%]{margin-inline-start:6px;color:var(--color-grey-400)}";
var HealthCheckComponent = class _HealthCheckComponent {
  constructor(healthCheckService) {
    this.healthCheckService = healthCheckService;
  }
  static {
    this.ɵfac = function HealthCheckComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HealthCheckComponent)(ɵɵdirectiveInject(HealthCheckService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _HealthCheckComponent,
      selectors: [["vdr-health-check"]],
      standalone: false,
      decls: 30,
      vars: 18,
      consts: [["error", ""], ["down", ""], ["class", "system-status-header", 4, "ngIf"], ["locationId", "system-status"], [1, "btn", "btn-secondary", 3, "click"], ["shape", "refresh"], [1, "table"], [1, "left"], [4, "ngFor", "ngForOf"], [1, "system-status-header"], [1, "status-icon"], ["size", "48", 3, "ngClass"], [1, "status-detail"], [4, "ngIf", "ngIfElse"], [1, "last-checked"], [1, "align-middle", "left"], [3, "colorType"], ["shape", "check-circle"], ["shape", "exclamation-circle"]],
      template: function HealthCheckComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-header");
          ɵɵelement(1, "vdr-page-title");
          ɵɵelementEnd();
          ɵɵelementStart(2, "vdr-page-body")(3, "vdr-page-block")(4, "vdr-action-bar")(5, "vdr-ab-left");
          ɵɵtemplate(6, HealthCheckComponent_div_6_Template, 12, 16, "div", 2);
          ɵɵpipe(7, "async");
          ɵɵelementEnd();
          ɵɵelementStart(8, "vdr-ab-right");
          ɵɵelement(9, "vdr-action-bar-items", 3);
          ɵɵelementStart(10, "button", 4);
          ɵɵlistener("click", function HealthCheckComponent_Template_button_click_10_listener() {
            return ctx.healthCheckService.refresh();
          });
          ɵɵelement(11, "clr-icon", 5);
          ɵɵtext(12);
          ɵɵpipe(13, "translate");
          ɵɵelementEnd()()()();
          ɵɵelementStart(14, "vdr-page-block")(15, "table", 6)(16, "thead")(17, "tr")(18, "th", 7);
          ɵɵtext(19);
          ɵɵpipe(20, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(21, "th", 7);
          ɵɵtext(22);
          ɵɵpipe(23, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(24, "th", 7);
          ɵɵtext(25);
          ɵɵpipe(26, "translate");
          ɵɵelementEnd()()();
          ɵɵelementStart(27, "tbody");
          ɵɵtemplate(28, HealthCheckComponent_tr_28_Template, 10, 5, "tr", 8);
          ɵɵpipe(29, "async");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(7, 6, ctx.healthCheckService.status$));
          ɵɵadvance(6);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 8, "system.health-refresh"), " ");
          ɵɵadvance(7);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 10, "common.name"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 12, "system.health-status"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(26, 14, "system.health-message"), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(29, 16, ctx.healthCheckService.details$));
        }
      },
      dependencies: [ClrIconCustomTag, NgClass, NgForOf, NgIf, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ChipComponent, ActionBarItemsComponent, PageHeaderComponent, PageTitleComponent, PageBodyComponent, PageBlockComponent, AsyncPipe, TranslatePipe, LocaleDatePipe],
      styles: [".system-status-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}.system-status-header[_ngcontent-%COMP%]   .status-detail[_ngcontent-%COMP%]{font-weight:700;margin-inline-end:6px}.system-status-header[_ngcontent-%COMP%]   .last-checked[_ngcontent-%COMP%]{font-weight:400;color:var(--color-grey-500)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HealthCheckComponent, [{
    type: Component,
    args: [{
      selector: "vdr-health-check",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-header>
    <vdr-page-title></vdr-page-title>
</vdr-page-header>
<vdr-page-body>
    <vdr-page-block>
        <vdr-action-bar>
            <vdr-ab-left>
                <div class="system-status-header" *ngIf="healthCheckService.status$ | async as status">
                    <div class="status-icon">
                        <clr-icon
                            [attr.shape]="status === 'ok' ? 'check-circle' : 'exclamation-circle'"
                            [ngClass]="{ 'is-success': status === 'ok', 'is-danger': status !== 'ok' }"
                            size="48"
                        ></clr-icon>
                    </div>
                    <div class="status-detail">
                        <ng-container *ngIf="status === 'ok'; else error">
                            {{ 'system.health-all-systems-up' | translate }}
                        </ng-container>
                        <ng-template #error>
                            {{ 'system.health-error' | translate }}
                        </ng-template>
                        <div class="last-checked">
                            {{ 'system.health-last-checked' | translate }}:
                            {{ healthCheckService.lastCheck$ | async | localeDate : 'mediumTime' }}
                        </div>
                    </div>
                </div>
            </vdr-ab-left>
            <vdr-ab-right>
                <vdr-action-bar-items locationId="system-status"></vdr-action-bar-items>
                <button class="btn btn-secondary" (click)="healthCheckService.refresh()">
                    <clr-icon shape="refresh"></clr-icon> {{ 'system.health-refresh' | translate }}
                </button>
            </vdr-ab-right>
        </vdr-action-bar>
    </vdr-page-block>
    <vdr-page-block>
        <table class="table">
            <thead>
                <tr>
                    <th class="left">
                        {{ 'common.name' | translate }}
                    </th>
                    <th class="left">
                        {{ 'system.health-status' | translate }}
                    </th>
                    <th class="left">
                        {{ 'system.health-message' | translate }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let row of healthCheckService.details$ | async">
                    <td class="align-middle left">{{ row.key }}</td>
                    <td class="align-middle left">
                        <vdr-chip [colorType]="row.result.status === 'up' ? 'success' : 'error'">
                            <ng-container *ngIf="row.result.status === 'up'; else down">
                                <clr-icon shape="check-circle"></clr-icon>
                                {{ 'system.health-status-up' | translate }}
                            </ng-container>
                            <ng-template #down>
                                <clr-icon shape="exclamation-circle"></clr-icon>
                                {{ 'system.health-status-down' | translate }}
                            </ng-template>
                        </vdr-chip>
                    </td>
                    <td class="align-middle left">{{ row.result.message }}</td>
                </tr>
            </tbody>
        </table>
    </vdr-page-block>
</vdr-page-body>
`,
      styles: [".system-status-header{display:flex;justify-content:space-between;align-items:flex-start}.system-status-header .status-detail{font-weight:700;margin-inline-end:6px}.system-status-header .last-checked{font-weight:400;color:var(--color-grey-500)}\n"]
    }]
  }], () => [{
    type: HealthCheckService
  }], null);
})();
var JobStateLabelComponent = class _JobStateLabelComponent {
  get iconShape() {
    switch (this.job.state) {
      case JobState.COMPLETED:
        return "check-circle";
      case JobState.FAILED:
        return "exclamation-circle";
      case JobState.CANCELLED:
        return "ban";
      case JobState.PENDING:
      case JobState.RETRYING:
        return "hourglass";
      case JobState.RUNNING:
        return "sync";
    }
  }
  get colorType() {
    switch (this.job.state) {
      case JobState.COMPLETED:
        return "success";
      case JobState.FAILED:
      case JobState.CANCELLED:
        return "error";
      case JobState.PENDING:
      case JobState.RETRYING:
        return "";
      case JobState.RUNNING:
        return "warning";
    }
  }
  static {
    this.ɵfac = function JobStateLabelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JobStateLabelComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _JobStateLabelComponent,
      selectors: [["vdr-job-state-label"]],
      inputs: {
        job: "job"
      },
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [[3, "colorType"], [1, "mr1"], ["class", "progress", 4, "ngIf"], [1, "progress"]],
      template: function JobStateLabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-chip", 0);
          ɵɵelement(1, "clr-icon", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "titlecase");
          ɵɵtemplate(4, JobStateLabelComponent_span_4_Template, 3, 3, "span", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("colorType", ctx.colorType);
          ɵɵadvance();
          ɵɵattribute("shape", ctx.iconShape);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, ctx.job.state), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.job.state === "RUNNING");
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, ChipComponent, PercentPipe, TitleCasePipe],
      styles: [".progress[_ngcontent-%COMP%]{margin-inline-start:3px}clr-icon[_ngcontent-%COMP%]{min-width:12px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobStateLabelComponent, [{
    type: Component,
    args: [{
      selector: "vdr-job-state-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-chip [colorType]="colorType">
    <clr-icon [attr.shape]="iconShape" class="mr1"></clr-icon>
    {{ job.state | titlecase }}
    <span *ngIf="job.state === 'RUNNING'" class="progress">
        {{ (job.progress / 100) | percent }}
    </span>
</vdr-chip>
`,
      styles: [".progress{margin-inline-start:3px}clr-icon{min-width:12px}\n"]
    }]
  }], null, {
    job: [{
      type: Input
    }]
  });
})();
var JobListComponent = class _JobListComponent extends BaseListComponent {
  constructor(dataService, router, route) {
    super(router, route);
    this.dataService = dataService;
    this.liveUpdate = new FormControl(true);
    this.queueFilter = new FormControl("all");
    this.stateFilter = new FormControl("");
    super.setQueryFn((...args) => this.dataService.settings.getAllJobs(...args), (data) => data.jobs, (skip, take) => {
      const queueFilter = this.queueFilter.value === "all" ? null : {
        queueName: {
          eq: this.queueFilter.value
        }
      };
      const stateFilter = this.stateFilter.value;
      return {
        options: {
          skip,
          take,
          filter: __spreadValues(__spreadValues({}, queueFilter), stateFilter ? {
            state: {
              eq: stateFilter
            }
          } : {}),
          sort: {
            createdAt: SortOrder.DESC
          }
        }
      };
    });
  }
  ngOnInit() {
    super.ngOnInit();
    timer(5e3, 2e3).pipe(takeUntil(this.destroy$), filter(() => !!this.liveUpdate.value)).subscribe(() => {
      this.refresh();
    });
    this.queues$ = this.dataService.settings.getJobQueues().mapStream((res) => res.jobQueues).pipe(map((queues) => [{
      name: "all",
      running: true
    }, ...queues]));
  }
  hasResult(job) {
    const result = job.result;
    if (result == null) {
      return false;
    }
    if (typeof result === "object") {
      return Object.keys(result).length > 0;
    }
    return true;
  }
  cancelJob(id) {
    this.dataService.settings.cancelJob(id).subscribe(() => this.refresh());
  }
  static {
    this.ɵfac = function JobListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JobListComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _JobListComponent,
      selectors: [["vdr-job-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 67,
      vars: 80,
      consts: [["others", ""], [1, "mr-2"], ["type", "checkbox", "clrCheckbox", "", "name", "live-update", 3, "formControl"], ["locationId", "job-list"], [1, "mr-2", 3, "change", "addTag", "hideSelected", "multiple", "markFirst", "clearable", "searchable", "formControl"], [3, "value"], ["colorType", "warning"], ["colorType", "success"], ["colorType", "error"], ["bindValue", "name", 3, "change", "addTag", "items", "hideSelected", "multiple", "markFirst", "clearable", "searchable", "formControl"], ["ng-label-tmp", "", "ng-option-tmp", ""], ["id", "job-list", 3, "pageChange", "itemsPerPageChange", "items", "itemsPerPage", "totalItems", "currentPage"], ["id", "id", 3, "heading"], ["id", "created-at", 3, "heading"], ["id", "job-queue-name", 3, "heading", "optional"], ["id", "job-data", 3, "heading", "optional"], ["id", "job-state", 3, "heading"], ["id", "job-duration", 3, "heading"], ["id", "job-result", 3, "heading"], [4, "ngIf", "ngIfElse"], [3, "colorFrom"], [4, "ngIf"], ["vdrDropdownTrigger", "", 1, "button-small", 3, "title"], ["shape", "details"], [1, "result-detail"], [3, "job"], ["class", "retry-info", 4, "ngIf"], [1, "retry-info"], ["vdrDropdownTrigger", "", 1, "button-small", "mr-1"], ["vdrDropdownTrigger", "", 1, "button-small"], ["shape", "exclamation-circle"], ["vdrDropdownTrigger", "", 1, "icon-button"], ["shape", "ellipsis-vertical", "size", "12"], ["vdrPosition", "bottom-right"], ["type", "button", "vdrDropdownItem", "", 1, "delete-button", 3, "click", "disabled"], ["shape", "ban", 1, "is-danger"]],
      template: function JobListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-header");
          ɵɵelement(1, "vdr-page-title");
          ɵɵelementEnd();
          ɵɵelementStart(2, "vdr-page-body")(3, "vdr-page-block")(4, "vdr-action-bar")(5, "vdr-ab-left")(6, "clr-checkbox-wrapper", 1);
          ɵɵelement(7, "input", 2);
          ɵɵelementStart(8, "label");
          ɵɵtext(9);
          ɵɵpipe(10, "translate");
          ɵɵelementEnd()()();
          ɵɵelementStart(11, "vdr-ab-right");
          ɵɵelement(12, "vdr-action-bar-items", 3);
          ɵɵelementStart(13, "ng-select", 4);
          ɵɵlistener("change", function JobListComponent_Template_ng_select_change_13_listener() {
            return ctx.refresh();
          });
          ɵɵelementStart(14, "ng-option", 5)(15, "vdr-chip");
          ɵɵtext(16);
          ɵɵpipe(17, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(18, "ng-option", 5)(19, "vdr-chip");
          ɵɵtext(20);
          ɵɵpipe(21, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(22, "ng-option", 5)(23, "vdr-chip", 6);
          ɵɵtext(24);
          ɵɵpipe(25, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(26, "ng-option", 5)(27, "vdr-chip", 7);
          ɵɵtext(28);
          ɵɵpipe(29, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(30, "ng-option", 5)(31, "vdr-chip", 8);
          ɵɵtext(32);
          ɵɵpipe(33, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(34, "ng-option", 5)(35, "vdr-chip", 8);
          ɵɵtext(36);
          ɵɵpipe(37, "translate");
          ɵɵelementEnd()()();
          ɵɵelementStart(38, "ng-select", 9);
          ɵɵpipe(39, "async");
          ɵɵlistener("change", function JobListComponent_Template_ng_select_change_38_listener() {
            return ctx.refresh();
          });
          ɵɵtemplate(40, JobListComponent_ng_template_40_Template, 3, 2, "ng-template", 10);
          ɵɵelementEnd()()()();
          ɵɵelementStart(41, "vdr-data-table-2", 11);
          ɵɵpipe(42, "async");
          ɵɵpipe(43, "async");
          ɵɵpipe(44, "async");
          ɵɵpipe(45, "async");
          ɵɵlistener("pageChange", function JobListComponent_Template_vdr_data_table_2_pageChange_41_listener($event) {
            return ctx.setPageNumber($event);
          })("itemsPerPageChange", function JobListComponent_Template_vdr_data_table_2_itemsPerPageChange_41_listener($event) {
            return ctx.setItemsPerPage($event);
          });
          ɵɵelementStart(46, "vdr-dt2-column", 12);
          ɵɵpipe(47, "translate");
          ɵɵtemplate(48, JobListComponent_ng_template_48_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(49, "vdr-dt2-column", 13);
          ɵɵpipe(50, "translate");
          ɵɵtemplate(51, JobListComponent_ng_template_51_Template, 2, 3, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(52, "vdr-dt2-column", 14);
          ɵɵpipe(53, "translate");
          ɵɵtemplate(54, JobListComponent_ng_template_54_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(55, "vdr-dt2-column", 15);
          ɵɵpipe(56, "translate");
          ɵɵtemplate(57, JobListComponent_ng_template_57_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(58, "vdr-dt2-column", 16);
          ɵɵpipe(59, "translate");
          ɵɵtemplate(60, JobListComponent_ng_template_60_Template, 3, 3, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(61, "vdr-dt2-column", 17);
          ɵɵpipe(62, "translate");
          ɵɵtemplate(63, JobListComponent_ng_template_63_Template, 2, 3, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(64, "vdr-dt2-column", 18);
          ɵɵpipe(65, "translate");
          ɵɵtemplate(66, JobListComponent_ng_template_66_Template, 3, 3, "ng-template");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(7);
          ɵɵproperty("formControl", ctx.liveUpdate);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(10, 42, "common.live-update"));
          ɵɵadvance(4);
          ɵɵproperty("addTag", false)("hideSelected", true)("multiple", false)("markFirst", false)("clearable", false)("searchable", false)("formControl", ctx.stateFilter);
          ɵɵadvance();
          ɵɵproperty("value", "");
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(17, 44, "system.job-state-all"));
          ɵɵadvance(2);
          ɵɵproperty("value", "PENDING");
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(21, 46, "system.job-state-pending"));
          ɵɵadvance(2);
          ɵɵproperty("value", "RUNNING");
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(25, 48, "system.job-state-running"));
          ɵɵadvance(2);
          ɵɵproperty("value", "COMPLETED");
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(29, 50, "system.job-state-completed"));
          ɵɵadvance(2);
          ɵɵproperty("value", "FAILED");
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(33, 52, "system.job-state-failed"));
          ɵɵadvance(2);
          ɵɵproperty("value", "CANCELLED");
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(37, 54, "system.job-state-cancelled"));
          ɵɵadvance(2);
          ɵɵproperty("addTag", false)("items", ɵɵpipeBind1(39, 56, ctx.queues$))("hideSelected", true)("multiple", false)("markFirst", false)("clearable", false)("searchable", false)("formControl", ctx.queueFilter);
          ɵɵadvance(3);
          ɵɵproperty("items", ɵɵpipeBind1(42, 58, ctx.items$))("itemsPerPage", ɵɵpipeBind1(43, 60, ctx.itemsPerPage$))("totalItems", ɵɵpipeBind1(44, 62, ctx.totalItems$))("currentPage", ɵɵpipeBind1(45, 64, ctx.currentPage$));
          ɵɵadvance(5);
          ɵɵproperty("heading", ɵɵpipeBind1(47, 66, "common.id"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(50, 68, "common.created-at"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(53, 70, "system.job-queue-name"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(56, 72, "system.job-data"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(59, 74, "system.job-state"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(62, 76, "system.job-duration"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(65, 78, "system.job-result"));
        }
      },
      dependencies: [ClrIconCustomTag, ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgIf, CheckboxControlValueAccessor, NgControlStatus, FormControlDirective, NgSelectComponent, NgOptionComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ChipComponent, FormFieldControlDirective, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, ObjectTreeComponent, ActionBarItemsComponent, DataTable2Component, DataTable2ColumnComponent, PageHeaderComponent, PageTitleComponent, PageBodyComponent, PageBlockComponent, JobStateLabelComponent, AsyncPipe, TranslatePipe, HasPermissionPipe, TimeAgoPipe, DurationPipe],
      styles: [".result-detail[_ngcontent-%COMP%]{margin:0 12px}.retry-info[_ngcontent-%COMP%]{margin-inline-start:6px;color:var(--color-grey-400)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-job-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-header>
    <vdr-page-title></vdr-page-title>
</vdr-page-header>
<vdr-page-body>
    <vdr-page-block>
        <vdr-action-bar>
            <vdr-ab-left>
                <clr-checkbox-wrapper class="mr-2">
                    <input type="checkbox" clrCheckbox [formControl]="liveUpdate" name="live-update" />
                    <label>{{ 'common.live-update' | translate }}</label>
                </clr-checkbox-wrapper>
            </vdr-ab-left>
            <vdr-ab-right>
                <vdr-action-bar-items locationId="job-list"></vdr-action-bar-items>
                <ng-select
                    class="mr-2"
                    [addTag]="false"
                    [hideSelected]="true"
                    [multiple]="false"
                    [markFirst]="false"
                    [clearable]="false"
                    [searchable]="false"
                    [formControl]="stateFilter"
                    (change)="refresh()"
                >
                    <ng-option [value]="''">
                        <vdr-chip>{{ 'system.job-state-all' | translate }}</vdr-chip>
                    </ng-option>
                    <ng-option [value]="'PENDING'">
                        <vdr-chip>{{ 'system.job-state-pending' | translate }}</vdr-chip>
                    </ng-option>
                    <ng-option [value]="'RUNNING'">
                        <vdr-chip colorType="warning">{{ 'system.job-state-running' | translate }}</vdr-chip>
                    </ng-option>
                    <ng-option [value]="'COMPLETED'">
                        <vdr-chip colorType="success">{{ 'system.job-state-completed' | translate }}</vdr-chip>
                    </ng-option>
                    <ng-option [value]="'FAILED'">
                        <vdr-chip colorType="error">{{ 'system.job-state-failed' | translate }}</vdr-chip>
                    </ng-option>
                    <ng-option [value]="'CANCELLED'">
                        <vdr-chip colorType="error">{{ 'system.job-state-cancelled' | translate }}</vdr-chip>
                    </ng-option>
                </ng-select>
                <ng-select
                    [addTag]="false"
                    [items]="queues$ | async"
                    [hideSelected]="true"
                    [multiple]="false"
                    [markFirst]="false"
                    [clearable]="false"
                    [searchable]="false"
                    bindValue="name"
                    [formControl]="queueFilter"
                    (change)="refresh()"
                >
                    <ng-template ng-label-tmp ng-option-tmp let-item="item">
                        <ng-container *ngIf="item.name === 'all'; else others">
                            <vdr-chip>{{ 'system.all-job-queues' | translate }}</vdr-chip>
                        </ng-container>
                        <ng-template #others>
                            <vdr-chip [colorFrom]="item.name">{{ item.name }}</vdr-chip>
                        </ng-template>
                    </ng-template>
                </ng-select>
            </vdr-ab-right>
        </vdr-action-bar>
    </vdr-page-block>

    <vdr-data-table-2
        id="job-list"
        [items]="items$ | async"
        [itemsPerPage]="itemsPerPage$ | async"
        [totalItems]="totalItems$ | async"
        [currentPage]="currentPage$ | async"
        (pageChange)="setPageNumber($event)"
        (itemsPerPageChange)="setItemsPerPage($event)"
    >
        <vdr-dt2-column [heading]="'common.id' | translate" id="id">
            <ng-template let-job="item">
                {{ job.id }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'common.created-at' | translate" id="created-at">
            <ng-template let-job="item">
                {{ job.createdAt | timeAgo }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'system.job-queue-name' | translate" id="job-queue-name" [optional]="false">
            <ng-template let-job="item">
                <vdr-chip [colorFrom]="job.queueName">{{ job.queueName }}</vdr-chip>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'system.job-data' | translate" id="job-data" [optional]="false">
            <ng-template let-job="item">
                <vdr-dropdown *ngIf="job.data">
                    <button
                        class="button-small"
                        vdrDropdownTrigger
                        [title]="'system.job-data' | translate"
                    >
                        <clr-icon shape="details"></clr-icon>
                    </button>
                    <vdr-dropdown-menu>
                        <div class="result-detail">
                            <vdr-object-tree [value]="job.data"></vdr-object-tree>
                        </div>
                    </vdr-dropdown-menu>
                </vdr-dropdown>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'system.job-state' | translate" id="job-state">
            <ng-template let-job="item">
                <vdr-job-state-label [job]="job"></vdr-job-state-label>
                <div *ngIf="job.state === 'FAILED'" class="retry-info">after {{ job.attempts }} attempts</div>
                <div *ngIf="job.state === 'RUNNING' || job.state === 'RETRYING'" class="retry-info">
                    attempting {{ job.attempts }} of {{ job.retries + 1 }}
                </div>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'system.job-duration' | translate" id="job-duration">
            <ng-template let-job="item">
                {{ job.duration | duration }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'system.job-result' | translate" id="job-result">
            <ng-template let-job="item">
                <vdr-dropdown *ngIf="hasResult(job)">
                    <button class="button-small mr-1" vdrDropdownTrigger>
                        <clr-icon shape="details"></clr-icon>
                        {{ 'system.job-result' | translate }}
                    </button>
                    <vdr-dropdown-menu>
                        <div class="result-detail">
                            <vdr-object-tree [value]="job.result"></vdr-object-tree>
                        </div>
                    </vdr-dropdown-menu>
                </vdr-dropdown>
                <vdr-dropdown *ngIf="job.error">
                    <button class="button-small" vdrDropdownTrigger>
                        <clr-icon shape="exclamation-circle"></clr-icon>
                        {{ 'system.job-error' | translate }}
                    </button>
                    <vdr-dropdown-menu>
                        <div class="result-detail">
                            {{ job.error }}
                        </div>
                    </vdr-dropdown-menu>
                </vdr-dropdown>
                <vdr-dropdown *ngIf="!job.isSettled && job.state !== 'FAILED'">
                    <button class="icon-button" vdrDropdownTrigger>
                        <clr-icon shape="ellipsis-vertical" size="12"></clr-icon>
                    </button>
                    <vdr-dropdown-menu vdrPosition="bottom-right">
                        <button
                            type="button"
                            class="delete-button"
                            (click)="cancelJob(job.id)"
                            [disabled]="!(['DeleteSettings', 'DeleteSystem'] | hasPermission)"
                            vdrDropdownItem
                        >
                            <clr-icon shape="ban" class="is-danger"></clr-icon>
                            {{ 'common.cancel' | translate }}
                        </button>
                    </vdr-dropdown-menu>
                </vdr-dropdown>
            </ng-template>
        </vdr-dt2-column>
    </vdr-data-table-2>
</vdr-page-body>
`,
      styles: [".result-detail{margin:0 12px}.retry-info{margin-inline-start:6px;color:var(--color-grey-400)}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: Router
  }, {
    type: ActivatedRoute
  }], null);
})();
var GET_SCHEDULED_TASKS_LIST = gql`
    query GetAllScheduledTasks {
        scheduledTasks {
            id
            description
            schedule
            scheduleDescription
            lastExecutedAt
            nextExecutionAt
            isRunning
            lastResult
            enabled
        }
    }
`;
var TOGGLE_SCHEDULED_TASK_ENABLED = gql`
    mutation ToggleScheduledTaskEnabled($input: UpdateScheduledTaskInput!) {
        updateScheduledTask(input: $input) {
            id
            enabled
        }
    }
`;
var RUN_TASK = gql`
    mutation RunTask($id: String!) {
        runScheduledTask(id: $id) {
            success
        }
    }
`;
var ScheduledTaskListComponent = class _ScheduledTaskListComponent {
  constructor(dataService, notificationService) {
    this.dataService = dataService;
    this.notificationService = notificationService;
    this.liveUpdate = new FormControl(true);
  }
  ngOnInit() {
    this.tasks$ = this.dataService.query(GET_SCHEDULED_TASKS_LIST).mapStream((res) => {
      return res.scheduledTasks;
    });
  }
  toggleEnabled(task) {
    this.dataService.mutate(TOGGLE_SCHEDULED_TASK_ENABLED, {
      input: {
        id: task.id,
        enabled: !task.enabled
      }
    }).subscribe();
  }
  runTask(task) {
    this.dataService.mutate(RUN_TASK, {
      id: task.id
    }).subscribe((result) => {
      if (result.runScheduledTask.success) {
        this.notificationService.success(_("system.task-will-be-triggered"));
      } else {
        this.notificationService.error(_("system.could-not-trigger-task"));
      }
    });
  }
  static {
    this.ɵfac = function ScheduledTaskListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduledTaskListComponent)(ɵɵdirectiveInject(DataService), ɵɵdirectiveInject(NotificationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ScheduledTaskListComponent,
      selectors: [["vdr-scheduled-task-list"]],
      standalone: false,
      decls: 32,
      vars: 26,
      consts: [["id", "scheduled-task-list", 3, "items"], ["id", "task-id", 3, "heading", "optional"], ["id", "description", 3, "heading"], ["id", "schedule", 3, "heading"], ["id", "last-executed-at", 3, "heading"], ["id", "next-execution-at", 3, "heading", "hiddenByDefault"], ["id", "last-result", 3, "heading"], ["id", "enabled", 3, "heading"], ["id", "actions"], [1, ""], [3, "title", 4, "ngIf"], [3, "title"], [4, "ngIf"], ["vdrDropdownTrigger", "", 1, "button-small", "mr-1"], ["shape", "details"], [1, "result-detail"], [3, "value"], [3, "colorType"], ["vdrDropdownTrigger", "", 1, "icon-button"], ["shape", "ellipsis-vertical", "size", "12"], ["vdrPosition", "bottom-right"], ["type", "button", "class", "", "vdrDropdownItem", "", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "vdrDropdownItem", "", 1, "delete-button", 3, "click", "disabled"], ["shape", "ban", 1, "is-danger"], ["type", "button", "vdrDropdownItem", "", 1, "", 3, "click", "disabled"], ["shape", "play", 1, ""]],
      template: function ScheduledTaskListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-header");
          ɵɵelement(1, "vdr-page-title");
          ɵɵelementEnd();
          ɵɵelementStart(2, "vdr-page-body")(3, "vdr-page-block")(4, "vdr-action-bar");
          ɵɵelement(5, "vdr-ab-left")(6, "vdr-ab-right");
          ɵɵelementEnd()();
          ɵɵelementStart(7, "vdr-data-table-2", 0);
          ɵɵpipe(8, "async");
          ɵɵelementStart(9, "vdr-dt2-column", 1);
          ɵɵpipe(10, "translate");
          ɵɵtemplate(11, ScheduledTaskListComponent_ng_template_11_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(12, "vdr-dt2-column", 2);
          ɵɵpipe(13, "translate");
          ɵɵtemplate(14, ScheduledTaskListComponent_ng_template_14_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(15, "vdr-dt2-column", 3);
          ɵɵpipe(16, "translate");
          ɵɵtemplate(17, ScheduledTaskListComponent_ng_template_17_Template, 2, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(18, "vdr-dt2-column", 4);
          ɵɵpipe(19, "translate");
          ɵɵtemplate(20, ScheduledTaskListComponent_ng_template_20_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(21, "vdr-dt2-column", 5);
          ɵɵpipe(22, "translate");
          ɵɵtemplate(23, ScheduledTaskListComponent_ng_template_23_Template, 2, 3, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(24, "vdr-dt2-column", 6);
          ɵɵpipe(25, "translate");
          ɵɵtemplate(26, ScheduledTaskListComponent_ng_template_26_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(27, "vdr-dt2-column", 7);
          ɵɵpipe(28, "translate");
          ɵɵtemplate(29, ScheduledTaskListComponent_ng_template_29_Template, 2, 2, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(30, "vdr-dt2-column", 8);
          ɵɵtemplate(31, ScheduledTaskListComponent_ng_template_31_Template, 1, 1, "ng-template");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(7);
          ɵɵproperty("items", ɵɵpipeBind1(8, 10, ctx.tasks$));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(10, 12, "system.task-id"))("optional", false);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(13, 14, "common.description"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(16, 16, "system.schedule"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(19, 18, "system.last-executed-at"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(22, 20, "system.next-execution-at"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(25, 22, "system.last-result"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(28, 24, "common.enabled"));
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, ActionBarComponent, ActionBarLeftComponent, ActionBarRightComponent, ChipComponent, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, ObjectTreeComponent, DataTable2Component, DataTable2ColumnComponent, PageHeaderComponent, PageTitleComponent, PageBodyComponent, PageBlockComponent, AsyncPipe, TranslatePipe, HasPermissionPipe, TimeAgoPipe, LocaleDatePipe],
      styles: [_c3],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledTaskListComponent, [{
    type: Component,
    args: [{
      selector: "vdr-scheduled-task-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-header>
    <vdr-page-title></vdr-page-title>
</vdr-page-header>
<vdr-page-body>
    <vdr-page-block>
        <vdr-action-bar>
            <vdr-ab-left> </vdr-ab-left>
            <vdr-ab-right> </vdr-ab-right>
        </vdr-action-bar>
    </vdr-page-block>

    <vdr-data-table-2 id="scheduled-task-list" [items]="tasks$ | async">
        <vdr-dt2-column [heading]="'system.task-id' | translate" id="task-id" [optional]="false">
            <ng-template let-task="item">
                {{ task.id }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'common.description' | translate" id="description">
            <ng-template let-task="item">
                {{ task.description }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'system.schedule' | translate" id="schedule">
            <ng-template let-task="item">
                <div class="">{{ task.scheduleDescription }}</div>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'system.last-executed-at' | translate" id="last-executed-at">
            <ng-template let-task="item">
                <span *ngIf="task.lastExecutedAt" [title]="task.lastExecutedAt | localeDate">
                    {{ task.lastExecutedAt | timeAgo }}
                </span>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column
            [heading]="'system.next-execution-at' | translate"
            id="next-execution-at"
            [hiddenByDefault]="true"
        >
            <ng-template let-task="item">
                {{ task.nextExecutionAt | localeDate }}
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'system.last-result' | translate" id="last-result">
            <ng-template let-task="item">
                <vdr-dropdown *ngIf="task.lastResult">
                    <button class="button-small mr-1" vdrDropdownTrigger>
                        <clr-icon shape="details"></clr-icon>
                        {{ 'system.last-result' | translate }}
                    </button>
                    <vdr-dropdown-menu>
                        <div class="result-detail">
                            <vdr-object-tree [value]="task.lastResult"></vdr-object-tree>
                        </div>
                    </vdr-dropdown-menu>
                </vdr-dropdown>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column [heading]="'common.enabled' | translate" id="enabled">
            <ng-template let-task="item">
                <ng-container *ngIf="task.enabled">
                    <vdr-chip [colorType]="'success'">{{ 'common.enabled' | translate }}</vdr-chip>
                </ng-container>
                <ng-container *ngIf="!task.enabled">
                    <vdr-chip [colorType]="'warning'">{{ 'common.disabled' | translate }}</vdr-chip>
                </ng-container>
            </ng-template>
        </vdr-dt2-column>
        <vdr-dt2-column id="actions">
            <ng-template let-task="item">
                <vdr-dropdown *ngIf="!task.isSettled && task.state !== 'FAILED'">
                    <button class="icon-button" vdrDropdownTrigger>
                        <clr-icon shape="ellipsis-vertical" size="12"></clr-icon>
                    </button>
                    <vdr-dropdown-menu vdrPosition="bottom-right">
                        <button
                            type="button"
                            *ngIf="task.enabled"
                            class=""
                            (click)="runTask(task)"
                            [disabled]="!(['UpdateSettings', 'UpdateSystem'] | hasPermission)"
                            vdrDropdownItem
                        >
                            <clr-icon shape="play" class=""></clr-icon>
                            <div>
                                {{ 'system.run-task' | translate }}
                            </div>
                        </button>
                        <button
                            type="button"
                            class="delete-button"
                            (click)="toggleEnabled(task)"
                            [disabled]="!(['UpdateSettings', 'UpdateSystem'] | hasPermission)"
                            vdrDropdownItem
                        >
                            <clr-icon shape="ban" class="is-danger"></clr-icon>
                            <div *ngIf="task.enabled">
                                {{ 'common.disable' | translate }}
                            </div>
                            <div *ngIf="!task.enabled">
                                {{ 'common.enable' | translate }}
                            </div>
                        </button>
                    </vdr-dropdown-menu>
                </vdr-dropdown>
            </ng-template>
        </vdr-dt2-column>
    </vdr-data-table-2>
</vdr-page-body>
`,
      styles: [".result-detail{margin:0 12px}.retry-info{margin-inline-start:6px;color:var(--color-grey-400)}\n"]
    }]
  }], () => [{
    type: DataService
  }, {
    type: NotificationService
  }], null);
})();
var systemRoutes = [{
  path: "jobs",
  component: JobListComponent,
  data: {
    breadcrumb: marker("breadcrumb.job-queue")
  }
}, {
  path: "system-status",
  component: HealthCheckComponent,
  data: {
    breadcrumb: marker("breadcrumb.system-status")
  }
}, {
  path: "scheduled-tasks",
  component: ScheduledTaskListComponent,
  data: {
    breadcrumb: marker("breadcrumb.scheduled-tasks")
  }
}];
var SystemModule = class _SystemModule {
  static {
    this.ɵfac = function SystemModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SystemModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SystemModule,
      declarations: [HealthCheckComponent, JobListComponent, JobStateLabelComponent, ScheduledTaskListComponent],
      imports: [SharedModule, RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [SharedModule, RouterModule.forChild(systemRoutes)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemModule, [{
    type: NgModule,
    args: [{
      declarations: [HealthCheckComponent, JobListComponent, JobStateLabelComponent, ScheduledTaskListComponent],
      imports: [SharedModule, RouterModule.forChild(systemRoutes)]
    }]
  }], null, null);
})();
export {
  GET_SCHEDULED_TASKS_LIST,
  HealthCheckComponent,
  JobListComponent,
  JobStateLabelComponent,
  ScheduledTaskListComponent,
  SystemModule,
  systemRoutes
};
//# sourceMappingURL=@vendure_admin-ui_system.js.map
