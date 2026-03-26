(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`.form`),t=document.querySelector(`.workouts`),n=document.querySelector(`.form__input--type`),r=document.querySelector(`.form__input--distance`),i=document.querySelector(`.form__input--duration`),a=document.querySelector(`.form__input--cadence`),o=document.querySelector(`.form__input--elevation`),s=class{date=new Date;id=(Date.now()+``).slice(-10);clicks=0;constructor(e,t,n){this.coords=e,this.distance=t,this.duration=n}_setDescription(){this.description=`${this.type[0].toUpperCase()}${this.type.slice(1)} on ${[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`][this.date.getMonth()]} ${this.date.getDate()}`}click(){this.clicks++}},c=class extends s{type=`running`;constructor(e,t,n,r){super(e,t,n),this.cadence=r,this.type=`running`,this.calcPace(),this._setDescription()}calcPace(){return this.pace=this.duration/this.distance,this.pace}},l=class extends s{type=`cycling`;constructor(e,t,n,r){super(e,t,n),this.elevationGain=r,this.type=`cycling`,this.calcSpeed(),this._setDescription()}calcSpeed(){return this.speed=this.distance/(this.duration/60),this.speed}};new class{#e;#t=13;#n;#r=[];constructor(){this._getPosition(),this._getLocalStorage(),e.addEventListener(`submit`,this._newWorkout.bind(this)),n.addEventListener(`change`,this._toggleElevationField.bind(this)),t.addEventListener(`click`,this._moveToPopup.bind(this))}_getPosition(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){alert(`Could not get your position`)})}_loadMap(e){let{latitude:t}=e.coords,{longitude:n}=e.coords,r=[t,n];this.#e=L.map(`map`).setView(r,this.#t),L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`,{attribution:`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}).addTo(this.#e),this.#e.on(`click`,this._showForm.bind(this)),this.#r.forEach(e=>{this._renderWorkoutMarker(e)})}_showForm(t){this.#n=t,e.classList.remove(`hidden`),r.focus()}_hideForm(){r.value=i.value=a.value=o.value=``,e.style.display=`none`,e.classList.add(`hidden`),setTimeout(()=>e.style.display=`grid`,1e3)}_toggleElevationField(){a.closest(`.form__row`).classList.toggle(`form__row--hidden`),o.closest(`.form__row`).classList.toggle(`form__row--hidden`)}_newWorkout(e){let t=(...e)=>e.every(e=>Number.isFinite(e)),s=(...e)=>e.every(e=>e>0);e.preventDefault();let u=n.value,d=+r.value,f=+i.value,{lat:p,lng:m}=this.#n.latlng,h;if(u===`running`){let e=+a.value;if(!t(d,f,e)||!s(d,f,e))return alert(`Inputs have to be positive numbers!`);h=new c([p,m],d,f,e),this.#r.push(h)}if(u===`cycling`){let e=+o.value;if(!t(d,f,e)||!s(d,f))return alert(`Inputs have to be positive numbers!`);h=new l([p,m],d,f,e),this.#r.push(h)}this._renderWorkoutMarker(h),this._renderWorkout(h),this._hideForm(),this._setLocalStorage()}_renderWorkoutMarker(e){L.marker(e.coords).addTo(this.#e).bindPopup(L.popup({maxWidth:250,minWidth:100,autoClose:!1,closeOnClick:!1,className:`${e.type}-popup`})).setPopupContent(`${e.type===`running`?`🏃‍♂️`:`🚴‍♀️`} ${e.description}`).openPopup()}_renderWorkout(t){let n=`
      <li class="workout workout--${t.type}" data-id="${t.id}">
        <h2 class="workout__title">${t.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${t.type===`running`?`🏃‍♂️`:`🚴‍♀️`}</span>
          <span class="workout__value">${t.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${t.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;t.type===`running`&&(n+=`
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${t.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${t.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `),t.type===`cycling`&&(n+=`
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${t.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${t.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `),e.insertAdjacentHTML(`afterend`,n)}_moveToPopup(e){let t=e.target.closest(`.workout`);if(!t)return;let n=this.#r.find(e=>e.id===t.dataset.id);this.#e.setView(n.coords,this.#t,{animate:!0,pan:{duration:1}})}_setLocalStorage(){localStorage.setItem(`workouts`,JSON.stringify(this.#r))}_getLocalStorage(){let e=JSON.parse(localStorage.getItem(`workouts`));e&&(this.#r=e,this.#r.forEach(e=>{this._renderWorkout(e)}))}reset(){localStorage.removeItem(`workouts`),location.reload()}};