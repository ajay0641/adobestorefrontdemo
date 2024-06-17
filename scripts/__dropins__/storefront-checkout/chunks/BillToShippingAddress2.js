import"@dropins/tools/event-bus.js";import{j as m,i as _,u as B,l as I}from"./getStoreConfig.js";import{s as C}from"./setBillingAddress.js";import{classes as x}from"@dropins/tools/lib.js";import{Checkbox as y,Skeleton as N,SkeletonRow as j}from"@dropins/tools/components.js";/* empty css                     */import{jsx as a}from"@dropins/tools/preact-jsx-runtime.js";import{useText as z}from"@dropins/tools/i18n.js";import{useState as T,useEffect as k}from"@dropins/tools/preact-compat.js";const U=({className:r,isInitialized:t=!0,checked:n=!0,...s})=>{const e=z({title:"Checkout.BillToShippingAddress.title"});return t?a("div",{className:x(["checkout-bill-to-shipping-address",r]),children:a(y,{"data-testid":"bill-to-shipping-checkbox",className:"checkout-bill-to-shipping-address__checkbox",checked:n,name:"checkout-bill-to-shipping-address__checkbox",label:e.title,...s})}):a(w,{})},w=()=>a(N,{className:"bill-to-shipping-address__skeleton",children:a(j,{variant:"row",size:"small"})}),v="is_bill_to_shipping_address";function F(r,t,n){const s=r[n],e=t[n];return s===void 0&&e===void 0||s===null&&e===null?!0:typeof s=="object"&&typeof e=="object"?JSON.stringify(s)===JSON.stringify(e):s===e}function S(r,t,n){return!t&&!n?!0:!t||!n?!1:r.every(s=>{const e=s.code;return F(t,n,e)})}const H=({isBillToShipping:r})=>{var A;const[t,n]=T(!1),{fields:s}=B(),e=_.value.data,p=(e==null?void 0:e.id)||"",c=!!e,o=e==null?void 0:e.billingAddress,d=(A=e==null?void 0:e.shippingAddresses)==null?void 0:A[0],u=!!d,h=!!(o&&d),i=I.value.data,g=i==null?void 0:i.defaultShippingAddress,f=i==null?void 0:i.defaultBillingAddress,b=!!(g&&f);return k(()=>{if(t)return;const l=localStorage.getItem(v);l&&(n(!0),r.value={checked:l==="true",setByUser:!1})},[t,r]),k(()=>{if(!s||!c||h||!b)return;n(!0);const l=S(s,f,g);r.value={checked:l,setByUser:!1}},[f,g,s,c,h,b,r,t]),k(()=>{if(t||!s||!c)return;n(!0);const l=S(s,o,d);r.value={checked:o?l:r.value.checked,setByUser:!1}},[o,s,c,r,t,d]),{cartId:p,isInitialized:t,hasShippingAddress:u}},Y=({children:r,...t})=>{const n=m.value.checked,{cartId:s,hasShippingAddress:e,isInitialized:p}=H({isBillToShipping:m});return a(U,{...t,checked:n,isInitialized:p,onChange:o=>{const u=o.target.checked;if(m.value={checked:u,setByUser:!0},localStorage.setItem(v,u.toString()),!p||!u||!e)return;const h=new AbortController;return C({signal:h.signal,cartId:s,input:{same_as_shipping:!0}}).catch(i=>{console.error(i)}),()=>{h.abort()}},disabled:_.value.pending})};export{Y as B,v as a,S as c};
//# sourceMappingURL=BillToShippingAddress2.js.map
