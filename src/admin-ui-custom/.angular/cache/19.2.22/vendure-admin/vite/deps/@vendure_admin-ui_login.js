import {
  ADMIN_UI_VERSION,
  AUTH_REDIRECT_PARAM,
  AuthService,
  FormFieldControlDirective,
  LocalizationService,
  SharedModule,
  getAppConfig
} from "./chunk-YDQAHX43.js";
import {
  ClrAlert,
  ClrAlertItem,
  ClrAlertText,
  ClrCheckbox,
  ClrCheckboxWrapper,
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
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-XNNVMMYZ.js";
import {
  Router,
  RouterModule
} from "./chunk-A2BPDF5Y.js";
import {
  HttpClient
} from "./chunk-FRAMVYFW.js";
import {
  AsyncPipe,
  NgIf
} from "./chunk-3WBC65NO.js";
import {
  Component,
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OXIDPESK.js";
import {
  map
} from "./chunk-OGZ4D63M.js";
import "./chunk-D3BILYUK.js";
import "./chunk-TXDUYLVM.js";

// ../../node_modules/@vendure/admin-ui/fesm2022/vendure-admin-ui-login.mjs
var _c0 = (a0) => ({
  brand: a0
});
function LoginComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 20);
    ɵɵtext(1, " Photo by ");
    ɵɵelementStart(2, "a", 21);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtext(4, " on ");
    ɵɵelementStart(5, "a", 21);
    ɵɵtext(6, "Unsplash");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("href", ctx_r0.imageCreatorUrl, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.imageCreator);
    ɵɵadvance(2);
    ɵɵproperty("href", ctx_r0.imageUnsplashUrl, ɵɵsanitizeUrl);
  }
}
function LoginComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.imageLocation);
  }
}
function LoginComponent_img_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl)("alt", ctx_r0.imageUrl);
  }
}
function LoginComponent_img_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 24);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(authService, router, httpClient, localizationService) {
    this.authService = authService;
    this.router = router;
    this.httpClient = httpClient;
    this.localizationService = localizationService;
    this.username = "";
    this.password = "";
    this.rememberMe = false;
    this.version = ADMIN_UI_VERSION;
    this.brand = getAppConfig().brand;
    this.hideVendureBranding = getAppConfig().hideVendureBranding;
    this.customImageUrl = getAppConfig().loginImageUrl;
    this.imageUrl = "";
    this.imageUnsplashUrl = "";
    this.imageLocation = "";
    this.imageCreator = "";
    this.imageCreatorUrl = "";
    if (this.customImageUrl) {
      this.imageUrl = this.customImageUrl;
    } else {
      this.loadImage();
    }
  }
  ngOnInit() {
    this.direction$ = this.localizationService.direction$;
  }
  logIn() {
    this.errorMessage = void 0;
    this.authService.logIn(this.username, this.password, this.rememberMe).subscribe((result) => {
      switch (result.__typename) {
        case "CurrentUser":
          const redirect = this.getRedirectRoute();
          this.router.navigateByUrl(redirect ? redirect : "/");
          break;
        case "InvalidCredentialsError":
        case "NativeAuthStrategyError":
          this.errorMessage = result.message;
          break;
      }
    });
  }
  loadImage() {
    this.httpClient.get("https://login-image.vendure.io").toPromise().then((res) => {
      this.updateImage(res);
    });
  }
  updateImage(res) {
    const user = res.user;
    const location = res.location;
    this.imageUrl = res.urls.regular + "?utm_source=Vendure+Login+Image&utm_medium=referral";
    this.imageCreator = user.name;
    this.imageLocation = location.name;
    this.imageCreatorUrl = user.links.html + "?utm_source=Vendure+Login+Image&utm_medium=referral";
    this.imageUnsplashUrl = res.links.html;
  }
  /**
   * Attempts to read a redirect param from the current url and parse it into a
   * route from which the user was redirected after a 401 error.
   */
  getRedirectRoute() {
    let redirectTo;
    const re = new RegExp(`${AUTH_REDIRECT_PARAM}=(.*)`);
    try {
      const redirectToParam = window.location.search.match(re);
      if (redirectToParam && 1 < redirectToParam.length) {
        redirectTo = atob(decodeURIComponent(redirectToParam[1]));
      }
    } catch (e) {
    }
    return redirectTo;
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(HttpClient), ɵɵdirectiveInject(LocalizationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LoginComponent,
      selectors: [["vdr-login"]],
      standalone: false,
      decls: 36,
      vars: 37,
      consts: [[1, "login-wrapper", 3, "dir"], [1, "login-wrapper-inner"], [1, "login-wrapper-image"], [1, "login-wrapper-image-content"], [1, "login-wrapper-image-title"], [1, "login-wrapper-image-copyright"], ["class", "creator", 4, "ngIf"], ["class", "location", 4, "ngIf"], [3, "src", "alt", 4, "ngIf"], [1, "login-wrapper-form"], [1, "login-title"], [1, "login-form"], [1, "login-group"], ["type", "text", "name", "username", "id", "login_username", 1, "username", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "password", "type", "password", "id", "login_password", 1, "password", 3, "ngModelChange", "ngModel", "placeholder"], [1, "login-error", 3, "clrAlertType", "clrAlertClosable"], [1, "alert-text"], ["type", "checkbox", "clrCheckbox", "", "id", "rememberme", "name", "rememberme", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "button", "primary", "login-button", 3, "click", "disabled"], ["class", "login-wrapper-logo", "src", "assets/logo-login.webp", 4, "ngIf"], [1, "creator"], ["target", "_blank", 3, "href"], [1, "location"], [3, "src", "alt"], ["src", "assets/logo-login.webp", 1, "login-wrapper-logo"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
          ɵɵtext(6);
          ɵɵpipe(7, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(8, "div", 5);
          ɵɵtemplate(9, LoginComponent_p_9_Template, 7, 3, "p", 6)(10, LoginComponent_p_10_Template, 2, 1, "p", 7);
          ɵɵelementEnd()();
          ɵɵtemplate(11, LoginComponent_img_11_Template, 1, 2, "img", 8);
          ɵɵelementEnd();
          ɵɵelementStart(12, "div", 9)(13, "p", 10);
          ɵɵtext(14);
          ɵɵpipe(15, "translate");
          ɵɵelementEnd();
          ɵɵelementStart(16, "form", 11)(17, "div", 12)(18, "input", 13);
          ɵɵpipe(19, "translate");
          ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            ɵɵtwoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelementStart(20, "input", 14);
          ɵɵpipe(21, "translate");
          ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) {
            ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelementStart(22, "clr-alert", 15)(23, "clr-alert-item")(24, "span", 16);
          ɵɵtext(25);
          ɵɵelementEnd()()();
          ɵɵelementStart(26, "clr-checkbox-wrapper")(27, "input", 17);
          ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_27_listener($event) {
            ɵɵtwoWayBindingSet(ctx.rememberMe, $event) || (ctx.rememberMe = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelementStart(28, "label");
          ɵɵtext(29);
          ɵɵpipe(30, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(31, "div")(32, "button", 18);
          ɵɵlistener("click", function LoginComponent_Template_button_click_32_listener() {
            return ctx.logIn();
          });
          ɵɵtext(33);
          ɵɵpipe(34, "translate");
          ɵɵelementEnd()()()()();
          ɵɵtemplate(35, LoginComponent_img_35_Template, 1, 0, "img", 19);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("dir", ɵɵpipeBind1(1, 20, ctx.direction$));
          ɵɵadvance(6);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 22, "common.login-image-title"), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.imageCreator);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.imageLocation);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.imageUrl);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(15, 24, "common.login-title", ɵɵpureFunction1(35, _c0, ctx.hideVendureBranding ? ctx.brand : "Vendure")), " ");
          ɵɵadvance(4);
          ɵɵtwoWayProperty("ngModel", ctx.username);
          ɵɵproperty("placeholder", ɵɵpipeBind1(19, 27, "common.username"));
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.password);
          ɵɵproperty("placeholder", ɵɵpipeBind1(21, 29, "common.password"));
          ɵɵadvance(2);
          ɵɵclassProp("visible", ctx.errorMessage);
          ɵɵproperty("clrAlertType", "danger")("clrAlertClosable", false);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ctx.errorMessage, " ");
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.rememberMe);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(30, 31, "common.remember-me"));
          ɵɵadvance(3);
          ɵɵproperty("disabled", !ctx.username || !ctx.password);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(34, 33, "common.login"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ctx.hideVendureBranding);
        }
      },
      dependencies: [ClrAlert, ClrAlertItem, ClrAlertText, ClrLabel, ClrCheckbox, ClrCheckboxWrapper, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, Dir, FormFieldControlDirective, AsyncPipe, TranslatePipe],
      styles: [".login-wrapper[_ngcontent-%COMP%]{background:var(--color-weight-100);background-image:none;height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]{background:var(--login-wrapper-inner-bg);width:1120px;height:590px;display:flex;justify-content:flex-start;align-items:stretch;position:relative;border-radius:var(--border-radius);border:1px solid var(--color-weight-150);overflow:hidden}@media (max-width: 992px){.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]{flex-direction:column;height:auto;width:100%}}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]{height:100%;flex-grow:1;position:relative}@media (max-width: 992px){.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]{height:300px}}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover;object-position:center;position:relative;z-index:1}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]   .login-wrapper-image-content[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;bottom:0;z-index:10;background:#020024;background:linear-gradient(180deg,#02002400,#000000bf);display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;padding:30px}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]   .login-wrapper-image-content[_ngcontent-%COMP%]   .login-wrapper-image-title[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:700;color:#fff;margin-bottom:20px}@media (max-width: 992px){.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]   .login-wrapper-image-content[_ngcontent-%COMP%]   .login-wrapper-image-title[_ngcontent-%COMP%]{font-size:1.2rem}}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]   .login-wrapper-image-content[_ngcontent-%COMP%]   .login-wrapper-image-copyright[_ngcontent-%COMP%]{opacity:.8}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]   .login-wrapper-image-content[_ngcontent-%COMP%]   .login-wrapper-image-copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.6rem;color:#fff;margin:0!important}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]   .login-wrapper-image-content[_ngcontent-%COMP%]   .login-wrapper-image-copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:underline}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-form[_ngcontent-%COMP%]{height:100%;width:400px;padding:40px;display:flex;flex-direction:column;align-items:stretch;justify-content:center;box-shadow:0 20px 25px #0000001a;overflow:hidden;flex-shrink:0}@media (max-width: 992px){.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-form[_ngcontent-%COMP%]{height:auto;width:100%;padding:20px}}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-form[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem;margin-bottom:20px;color:var(--color-weight-600)}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-form[_ngcontent-%COMP%]   .login-group[_ngcontent-%COMP%]   input.username[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-form[_ngcontent-%COMP%]   .login-group[_ngcontent-%COMP%]   input.password[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:15px;padding:12px 16px!important;background:#fff;font-size:14px;line-height:22px;color:#52667a;outline:none;-webkit-appearance:none}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-form[_ngcontent-%COMP%]   .login-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%!important;margin-top:20px!important}.login-wrapper[_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-logo[_ngcontent-%COMP%]{width:60px;height:auto;position:absolute;right:20px;top:20px}.login-button[_ngcontent-%COMP%]{width:100%;margin-top:var(--space-unit);justify-content:center}.version[_ngcontent-%COMP%]{flex:1;flex-grow:1;display:flex;align-items:flex-end;justify-content:center;color:var(--color-grey-300)}.version[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-inline-start:5px}.login-error[_ngcontent-%COMP%]{max-height:0;overflow:hidden;display:block}.login-error.visible[_ngcontent-%COMP%]{max-height:46px;transition:max-height .2s;animation:_ngcontent-%COMP%_shake .82s cubic-bezier(.36,.07,.19,.97) both;animation-delay:.2s;transform:translateZ(0);backface-visibility:hidden;perspective:1000px}@keyframes _ngcontent-%COMP%_shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.login-wrapper[dir=rtl][_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-logo[_ngcontent-%COMP%]{right:auto;left:20px}.login-wrapper[dir=rtl][_ngcontent-%COMP%]   .login-wrapper-inner[_ngcontent-%COMP%]   .login-wrapper-image[_ngcontent-%COMP%]   .login-wrapper-image-content[_ngcontent-%COMP%]{left:auto;right:0}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "vdr-login",
      standalone: false,
      template: `<div class="login-wrapper" [dir]="direction$ | async">
    <div class="login-wrapper-inner">
        <div class="login-wrapper-image">
            <div class="login-wrapper-image-content">
                <div class="login-wrapper-image-title">
                    {{ 'common.login-image-title' | translate }}
                </div>
                <div class="login-wrapper-image-copyright">
                    <p *ngIf="imageCreator" class="creator">
                        Photo by <a [href]="imageCreatorUrl" target="_blank">{{ imageCreator }}</a> on
                        <a [href]="imageUnsplashUrl" target="_blank">Unsplash</a>
                    </p>
                    <p *ngIf="imageLocation" class="location">{{ imageLocation }}</p>
                </div>
            </div>
            <img *ngIf="imageUrl" [src]="imageUrl" [alt]="imageUrl" />
        </div>
        <div class="login-wrapper-form">
            <p class="login-title">
                {{ 'common.login-title' | translate : { brand: hideVendureBranding ? brand : 'Vendure' } }}
            </p>
            <form class="login-form">
                <div class="login-group">
                    <input
                        class="username"
                        type="text"
                        name="username"
                        id="login_username"
                        [(ngModel)]="username"
                        [placeholder]="'common.username' | translate"
                    />
                    <input
                        class="password"
                        name="password"
                        type="password"
                        id="login_password"
                        [(ngModel)]="password"
                        [placeholder]="'common.password' | translate"
                    />
                    <clr-alert
                        [clrAlertType]="'danger'"
                        [clrAlertClosable]="false"
                        [class.visible]="errorMessage"
                        class="login-error"
                    >
                        <clr-alert-item>
                            <span class="alert-text">
                                {{ errorMessage }}
                            </span>
                        </clr-alert-item>
                    </clr-alert>
                    <clr-checkbox-wrapper>
                        <input
                            type="checkbox"
                            clrCheckbox
                            id="rememberme"
                            name="rememberme"
                            [(ngModel)]="rememberMe"
                        />
                        <label>{{ 'common.remember-me' | translate }}</label>
                    </clr-checkbox-wrapper>
                    <div>
                        <button
                            type="submit"
                            class="button primary login-button"
                            (click)="logIn()"
                            [disabled]="!username || !password"
                        >
                            {{ 'common.login' | translate }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <img class="login-wrapper-logo" src="assets/logo-login.webp" *ngIf="!hideVendureBranding" />
    </div>
</div>
`,
      styles: [".login-wrapper{background:var(--color-weight-100);background-image:none;height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}.login-wrapper .login-wrapper-inner{background:var(--login-wrapper-inner-bg);width:1120px;height:590px;display:flex;justify-content:flex-start;align-items:stretch;position:relative;border-radius:var(--border-radius);border:1px solid var(--color-weight-150);overflow:hidden}@media (max-width: 992px){.login-wrapper .login-wrapper-inner{flex-direction:column;height:auto;width:100%}}.login-wrapper .login-wrapper-inner .login-wrapper-image{height:100%;flex-grow:1;position:relative}@media (max-width: 992px){.login-wrapper .login-wrapper-inner .login-wrapper-image{height:300px}}.login-wrapper .login-wrapper-inner .login-wrapper-image img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;position:relative;z-index:1}.login-wrapper .login-wrapper-inner .login-wrapper-image .login-wrapper-image-content{width:100%;height:100%;position:absolute;left:0;bottom:0;z-index:10;background:#020024;background:linear-gradient(180deg,#02002400,#000000bf);display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;padding:30px}.login-wrapper .login-wrapper-inner .login-wrapper-image .login-wrapper-image-content .login-wrapper-image-title{font-size:1.6rem;font-weight:700;color:#fff;margin-bottom:20px}@media (max-width: 992px){.login-wrapper .login-wrapper-inner .login-wrapper-image .login-wrapper-image-content .login-wrapper-image-title{font-size:1.2rem}}.login-wrapper .login-wrapper-inner .login-wrapper-image .login-wrapper-image-content .login-wrapper-image-copyright{opacity:.8}.login-wrapper .login-wrapper-inner .login-wrapper-image .login-wrapper-image-content .login-wrapper-image-copyright p{font-size:.6rem;color:#fff;margin:0!important}.login-wrapper .login-wrapper-inner .login-wrapper-image .login-wrapper-image-content .login-wrapper-image-copyright a{color:#fff;text-decoration:underline}.login-wrapper .login-wrapper-inner .login-wrapper-form{height:100%;width:400px;padding:40px;display:flex;flex-direction:column;align-items:stretch;justify-content:center;box-shadow:0 20px 25px #0000001a;overflow:hidden;flex-shrink:0}@media (max-width: 992px){.login-wrapper .login-wrapper-inner .login-wrapper-form{height:auto;width:100%;padding:20px}}.login-wrapper .login-wrapper-inner .login-wrapper-form .login-title{font-weight:700;font-size:1.2rem;margin-bottom:20px;color:var(--color-weight-600)}.login-wrapper .login-wrapper-inner .login-wrapper-form .login-group input.username,.login-wrapper .login-wrapper-inner .login-wrapper-form .login-group input.password{display:block;width:100%;margin-bottom:15px;padding:12px 16px!important;background:#fff;font-size:14px;line-height:22px;color:#52667a;outline:none;-webkit-appearance:none}.login-wrapper .login-wrapper-inner .login-wrapper-form .login-group .btn{width:100%!important;margin-top:20px!important}.login-wrapper .login-wrapper-inner .login-wrapper-logo{width:60px;height:auto;position:absolute;right:20px;top:20px}.login-button{width:100%;margin-top:var(--space-unit);justify-content:center}.version{flex:1;flex-grow:1;display:flex;align-items:flex-end;justify-content:center;color:var(--color-grey-300)}.version span+span{margin-inline-start:5px}.login-error{max-height:0;overflow:hidden;display:block}.login-error.visible{max-height:46px;transition:max-height .2s;animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;animation-delay:.2s;transform:translateZ(0);backface-visibility:hidden;perspective:1000px}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.login-wrapper[dir=rtl] .login-wrapper-inner .login-wrapper-logo{right:auto;left:20px}.login-wrapper[dir=rtl] .login-wrapper-inner .login-wrapper-image .login-wrapper-image-content{left:auto;right:0}\n"]
    }]
  }], () => [{
    type: AuthService
  }, {
    type: Router
  }, {
    type: HttpClient
  }, {
    type: LocalizationService
  }], null);
})();
var LoginGuard = class _LoginGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate(route) {
    return this.authService.checkAuthenticatedStatus().pipe(map((authenticated) => {
      if (authenticated) {
        this.router.navigate(["/"]);
      }
      return !authenticated;
    }));
  }
  static {
    this.ɵfac = function LoginGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginGuard)(ɵɵinject(Router), ɵɵinject(AuthService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LoginGuard,
      factory: _LoginGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: AuthService
  }], null);
})();
var loginRoutes = [{
  path: "",
  component: LoginComponent,
  pathMatch: "full",
  canActivate: [LoginGuard]
}];
var LoginModule = class _LoginModule {
  static {
    this.ɵfac = function LoginModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LoginModule,
      declarations: [LoginComponent],
      imports: [SharedModule, RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [SharedModule, RouterModule.forChild(loginRoutes)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, RouterModule.forChild(loginRoutes)],
      exports: [],
      declarations: [LoginComponent]
    }]
  }], null, null);
})();
export {
  LoginComponent,
  LoginGuard,
  LoginModule,
  loginRoutes
};
//# sourceMappingURL=@vendure_admin-ui_login.js.map
