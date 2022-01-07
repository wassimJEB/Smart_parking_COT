"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5023],{5023:(w,m,u)=>{u.r(m),u.d(m,{ion_accordion:()=>b,ion_accordion_group:()=>v});var c=u(4553),d=u(7629),g=u(6897),l=u(7360);let b=class{constructor(e){var n=this;(0,d.r)(this,e),this.updateListener=()=>this.updateState(!1),this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+E++,this.disabled=!1,this.readonly=!1,this.toggleIcon="chevron-down",this.toggleIconSlot="end",this.setItemDefaults=()=>{const t=this.getSlottedHeaderIonItem();!t||(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:t}=this;if(!t)return;const o=t.querySelector("slot");return o?o.assignedElements&&o.assignedElements().find(r=>"ION-ITEM"===r.tagName):void 0},this.setAria=(t=!1)=>{const o=this.getSlottedHeaderIonItem();if(!o)return;const r=(0,l.g)(o).querySelector("button");!r||r.setAttribute("aria-expanded",`${t}`)},this.slotToggleIcon=()=>{const t=this.getSlottedHeaderIonItem();if(!t)return;const{toggleIconSlot:o,toggleIcon:s}=this;if(t.querySelector(".ion-accordion-toggle-icon"))return;const i=document.createElement("ion-icon");i.slot=o,i.lazy=!1,i.classList.add("ion-accordion-toggle-icon"),i.icon=s,i.setAttribute("aria-hidden","true"),t.appendChild(i)},this.expandAccordion=(t=!1)=>{if(t)return void(this.state=4);if(4===this.state)return;const{contentEl:o,contentElWrapper:s}=this;void 0===o||void 0===s||(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?(0,l.r)(()=>{this.state=8,this.currentRaf=(0,l.r)((0,c.Z)(function*(){const r=s.offsetHeight,i=(0,l.t)(o,2e3);o.style.setProperty("max-height",`${r}px`),yield i,n.state=4,o.style.removeProperty("max-height")}))}):this.state=4)},this.collapseAccordion=(t=!1)=>{if(t)return void(this.state=1);if(1===this.state)return;const{contentEl:o}=this;void 0!==o&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=(0,l.r)((0,c.Z)(function*(){o.style.setProperty("max-height",`${o.offsetHeight}px`),(0,l.r)((0,c.Z)(function*(){const r=(0,l.t)(o,2e3);n.state=2,yield r,n.state=1,o.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>!("undefined"==typeof window||matchMedia("(prefers-reduced-motion: reduce)").matches||!g.c.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated),this.updateState=function(){var t=(0,c.Z)(function*(o=!1){const s=n.accordionGroupEl,r=n.value;if(!s)return;const i=s.value;if(Array.isArray(i)?i.includes(r):i===r)n.expandAccordion(o),n.isNext=n.isPrevious=!1;else{n.collapseAccordion(o);const h=n.getNextSibling(),p=h&&h.value;void 0!==p&&(n.isPrevious=Array.isArray(i)?i.includes(p):i===p);const f=n.getPreviousSibling(),x=f&&f.value;void 0!==x&&(n.isNext=Array.isArray(i)?i.includes(x):i===x)}});return function(){return t.apply(this,arguments)}}(),this.getNextSibling=()=>{if(!this.el)return;const t=this.el.nextElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const t=this.el.previousElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0}}connectedCallback(){const e=this.accordionGroupEl=this.el&&this.el.closest("ion-accordion-group");e&&(this.updateState(!0),(0,l.a)(e,"ionChange",this.updateListener))}disconnectedCallback(){const e=this.accordionGroupEl;e&&(0,l.b)(e,"ionChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),(0,l.r)(()=>{this.setAria(4===this.state||8===this.state)})}toggleExpanded(){const{accordionGroupEl:e,value:n,state:t}=this;e&&e.requestAccordionToggle(n,1===t||2===t)}render(){const{disabled:e,readonly:n}=this,t=(0,g.b)(this),o=4===this.state||8===this.state,s=o?"header expanded":"header",r=o?"content expanded":"content";return this.setAria(o),(0,d.h)(d.H,{class:{[t]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":e,"accordion-readonly":n,"accordion-animated":g.c.getBoolean("animated",!0)}},(0,d.h)("div",{onClick:()=>this.toggleExpanded(),id:"header",part:s,"aria-controls":"content",ref:i=>this.headerEl=i},(0,d.h)("slot",{name:"header"})),(0,d.h)("div",{id:"content",part:r,role:"region","aria-labelledby":"header",ref:i=>this.contentEl=i},(0,d.h)("div",{id:"content-wrapper",ref:i=>this.contentElWrapper=i},(0,d.h)("slot",{name:"content"}))))}static get delegatesFocus(){return!0}get el(){return(0,d.i)(this)}},E=0;b.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};let v=class{constructor(e){(0,d.r)(this,e),this.ionChange=(0,d.e)(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:e,multiple:n}=this;!n&&Array.isArray(e)?this.value=e[0]:this.ionChange.emit({value:this.value})}disabledChanged(){var e=this;return(0,c.Z)(function*(){const{disabled:n}=e,t=yield e.getAccordions();for(const o of t)o.disabled=n})()}readonlyChanged(){var e=this;return(0,c.Z)(function*(){const{readonly:n}=e,t=yield e.getAccordions();for(const o of t)o.readonly=n})()}onKeydown(e){var n=this;return(0,c.Z)(function*(){const t=document.activeElement;if(!t)return;const o="ION-ACCORDION"===t.tagName?t:t.closest("ion-accordion");if(!o||o.closest("ion-accordion-group")!==n.el)return;const r=yield n.getAccordions(),i=r.findIndex(h=>h===o);if(-1===i)return;let a;"ArrowDown"===e.key?a=n.findNextAccordion(r,i):"ArrowUp"===e.key?a=n.findPreviousAccordion(r,i):"Home"===e.key?a=r[0]:"End"===e.key&&(a=r[r.length-1]),void 0!==a&&a!==t&&a.focus()})()}componentDidLoad(){var e=this;return(0,c.Z)(function*(){e.disabled&&e.disabledChanged(),e.readonly&&e.readonlyChanged()})()}requestAccordionToggle(e,n){var t=this;return(0,c.Z)(function*(){const{multiple:o,value:s,readonly:r,disabled:i}=t;if(!r&&!i)if(n)if(o){const a=s||[],h=Array.isArray(a)?a:[a];void 0===h.find(f=>f===e)&&void 0!==e&&(t.value=[...h,e])}else t.value=e;else if(o){const a=s||[],h=Array.isArray(a)?a:[a];t.value=h.filter(p=>p!==e)}else t.value=void 0})()}findNextAccordion(e,n){const t=e[n+1];return void 0===t?e[0]:t}findPreviousAccordion(e,n){const t=e[n-1];return void 0===t?e[e.length-1]:t}getAccordions(){var e=this;return(0,c.Z)(function*(){return Array.from(e.el.querySelectorAll(":scope > ion-accordion"))})()}render(){const{disabled:e,readonly:n,expand:t}=this,o=(0,g.b)(this);return(0,d.h)(d.H,{class:{[o]:!0,"accordion-group-disabled":e,"accordion-group-readonly":n,[`accordion-group-expand-${t}`]:!0},role:"presentation"},(0,d.h)("slot",null))}get el(){return(0,d.i)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};v.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);