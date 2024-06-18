var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/ol/events/Event.js
var BaseEvent, Event_default;
var init_Event = __esm({
  "node_modules/ol/events/Event.js"() {
    BaseEvent = class {
      /**
       * @param {string} type Type.
       */
      constructor(type) {
        this.propagationStopped;
        this.defaultPrevented;
        this.type = type;
        this.target = null;
      }
      /**
       * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
       * will be fired.
       * @api
       */
      preventDefault() {
        this.defaultPrevented = true;
      }
      /**
       * Stop event propagation.
       * @api
       */
      stopPropagation() {
        this.propagationStopped = true;
      }
    };
    Event_default = BaseEvent;
  }
});

// node_modules/ol/ObjectEventType.js
var ObjectEventType_default;
var init_ObjectEventType = __esm({
  "node_modules/ol/ObjectEventType.js"() {
    ObjectEventType_default = {
      /**
       * Triggered when a property is changed.
       * @event module:ol/Object.ObjectEvent#propertychange
       * @api
       */
      PROPERTYCHANGE: "propertychange"
    };
  }
});

// node_modules/ol/Disposable.js
var Disposable, Disposable_default;
var init_Disposable = __esm({
  "node_modules/ol/Disposable.js"() {
    Disposable = class {
      constructor() {
        this.disposed = false;
      }
      /**
       * Clean up.
       */
      dispose() {
        if (!this.disposed) {
          this.disposed = true;
          this.disposeInternal();
        }
      }
      /**
       * Extension point for disposable objects.
       * @protected
       */
      disposeInternal() {
      }
    };
    Disposable_default = Disposable;
  }
});

// node_modules/ol/array.js
function binarySearch(haystack, needle, comparator) {
  let mid, cmp;
  comparator = comparator || ascending;
  let low = 0;
  let high = haystack.length;
  let found = false;
  while (low < high) {
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle);
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid;
      found = !cmp;
    }
  }
  return found ? low : ~low;
}
function ascending(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function linearFindNearest(arr, target, direction) {
  if (arr[0] <= target) {
    return 0;
  }
  const n = arr.length;
  if (target <= arr[n - 1]) {
    return n - 1;
  }
  if (typeof direction === "function") {
    for (let i = 1; i < n; ++i) {
      const candidate = arr[i];
      if (candidate === target) {
        return i;
      }
      if (candidate < target) {
        if (direction(target, arr[i - 1], candidate) > 0) {
          return i - 1;
        }
        return i;
      }
    }
    return n - 1;
  }
  if (direction > 0) {
    for (let i = 1; i < n; ++i) {
      if (arr[i] < target) {
        return i - 1;
      }
    }
    return n - 1;
  }
  if (direction < 0) {
    for (let i = 1; i < n; ++i) {
      if (arr[i] <= target) {
        return i;
      }
    }
    return n - 1;
  }
  for (let i = 1; i < n; ++i) {
    if (arr[i] == target) {
      return i;
    }
    if (arr[i] < target) {
      if (arr[i - 1] - target < target - arr[i]) {
        return i - 1;
      }
      return i;
    }
  }
  return n - 1;
}
function reverseSubArray(arr, begin, end) {
  while (begin < end) {
    const tmp = arr[begin];
    arr[begin] = arr[end];
    arr[end] = tmp;
    ++begin;
    --end;
  }
}
function extend(arr, data) {
  const extension = Array.isArray(data) ? data : [data];
  const length = extension.length;
  for (let i = 0; i < length; i++) {
    arr[arr.length] = extension[i];
  }
}
function equals(arr1, arr2) {
  const len1 = arr1.length;
  if (len1 !== arr2.length) {
    return false;
  }
  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
function isSorted(arr, func, strict) {
  const compare = func || ascending;
  return arr.every(function(currentVal, index) {
    if (index === 0) {
      return true;
    }
    const res = compare(arr[index - 1], currentVal);
    return !(res > 0 || strict && res === 0);
  });
}
var init_array = __esm({
  "node_modules/ol/array.js"() {
  }
});

// node_modules/ol/functions.js
function TRUE() {
  return true;
}
function FALSE() {
  return false;
}
function VOID() {
}
function memoizeOne(fn) {
  let called = false;
  let lastResult;
  let lastArgs;
  let lastThis;
  return function() {
    const nextArgs = Array.prototype.slice.call(arguments);
    if (!called || this !== lastThis || !equals(nextArgs, lastArgs)) {
      called = true;
      lastThis = this;
      lastArgs = nextArgs;
      lastResult = fn.apply(this, arguments);
    }
    return lastResult;
  };
}
var init_functions = __esm({
  "node_modules/ol/functions.js"() {
    init_array();
  }
});

// node_modules/ol/obj.js
function clear(object) {
  for (const property in object) {
    delete object[property];
  }
}
function isEmpty(object) {
  let property;
  for (property in object) {
    return false;
  }
  return !property;
}
var init_obj = __esm({
  "node_modules/ol/obj.js"() {
  }
});

// node_modules/ol/events/Target.js
var Target, Target_default;
var init_Target = __esm({
  "node_modules/ol/events/Target.js"() {
    init_Disposable();
    init_Event();
    init_functions();
    init_obj();
    Target = class extends Disposable_default {
      /**
       * @param {*} [target] Default event target for dispatched events.
       */
      constructor(target) {
        super();
        this.eventTarget_ = target;
        this.pendingRemovals_ = null;
        this.dispatching_ = null;
        this.listeners_ = null;
      }
      /**
       * @param {string} type Type.
       * @param {import("../events.js").Listener} listener Listener.
       */
      addEventListener(type, listener) {
        if (!type || !listener) {
          return;
        }
        const listeners = this.listeners_ || (this.listeners_ = {});
        const listenersForType = listeners[type] || (listeners[type] = []);
        if (!listenersForType.includes(listener)) {
          listenersForType.push(listener);
        }
      }
      /**
       * Dispatches an event and calls all listeners listening for events
       * of this type. The event parameter can either be a string or an
       * Object with a `type` property.
       *
       * @param {import("./Event.js").default|string} event Event object.
       * @return {boolean|undefined} `false` if anyone called preventDefault on the
       *     event object or if any of the listeners returned false.
       * @api
       */
      dispatchEvent(event) {
        const isString = typeof event === "string";
        const type = isString ? event : event.type;
        const listeners = this.listeners_ && this.listeners_[type];
        if (!listeners) {
          return;
        }
        const evt = isString ? new Event_default(event) : (
          /** @type {Event} */
          event
        );
        if (!evt.target) {
          evt.target = this.eventTarget_ || this;
        }
        const dispatching = this.dispatching_ || (this.dispatching_ = {});
        const pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});
        if (!(type in dispatching)) {
          dispatching[type] = 0;
          pendingRemovals[type] = 0;
        }
        ++dispatching[type];
        let propagate;
        for (let i = 0, ii = listeners.length; i < ii; ++i) {
          if ("handleEvent" in listeners[i]) {
            propagate = /** @type {import("../events.js").ListenerObject} */
            listeners[i].handleEvent(evt);
          } else {
            propagate = /** @type {import("../events.js").ListenerFunction} */
            listeners[i].call(this, evt);
          }
          if (propagate === false || evt.propagationStopped) {
            propagate = false;
            break;
          }
        }
        if (--dispatching[type] === 0) {
          let pr = pendingRemovals[type];
          delete pendingRemovals[type];
          while (pr--) {
            this.removeEventListener(type, VOID);
          }
          delete dispatching[type];
        }
        return propagate;
      }
      /**
       * Clean up.
       */
      disposeInternal() {
        this.listeners_ && clear(this.listeners_);
      }
      /**
       * Get the listeners for a specified event type. Listeners are returned in the
       * order that they will be called in.
       *
       * @param {string} type Type.
       * @return {Array<import("../events.js").Listener>|undefined} Listeners.
       */
      getListeners(type) {
        return this.listeners_ && this.listeners_[type] || void 0;
      }
      /**
       * @param {string} [type] Type. If not provided,
       *     `true` will be returned if this event target has any listeners.
       * @return {boolean} Has listeners.
       */
      hasListener(type) {
        if (!this.listeners_) {
          return false;
        }
        return type ? type in this.listeners_ : Object.keys(this.listeners_).length > 0;
      }
      /**
       * @param {string} type Type.
       * @param {import("../events.js").Listener} listener Listener.
       */
      removeEventListener(type, listener) {
        if (!this.listeners_) {
          return;
        }
        const listeners = this.listeners_[type];
        if (!listeners) {
          return;
        }
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          if (this.pendingRemovals_ && type in this.pendingRemovals_) {
            listeners[index] = VOID;
            ++this.pendingRemovals_[type];
          } else {
            listeners.splice(index, 1);
            if (listeners.length === 0) {
              delete this.listeners_[type];
            }
          }
        }
      }
    };
    Target_default = Target;
  }
});

// node_modules/ol/events/EventType.js
var EventType_default;
var init_EventType = __esm({
  "node_modules/ol/events/EventType.js"() {
    EventType_default = {
      /**
       * Generic change event. Triggered when the revision counter is increased.
       * @event module:ol/events/Event~BaseEvent#change
       * @api
       */
      CHANGE: "change",
      /**
       * Generic error event. Triggered when an error occurs.
       * @event module:ol/events/Event~BaseEvent#error
       * @api
       */
      ERROR: "error",
      BLUR: "blur",
      CLEAR: "clear",
      CONTEXTMENU: "contextmenu",
      CLICK: "click",
      DBLCLICK: "dblclick",
      DRAGENTER: "dragenter",
      DRAGOVER: "dragover",
      DROP: "drop",
      FOCUS: "focus",
      KEYDOWN: "keydown",
      KEYPRESS: "keypress",
      LOAD: "load",
      RESIZE: "resize",
      TOUCHMOVE: "touchmove",
      WHEEL: "wheel"
    };
  }
});

// node_modules/ol/events.js
function listen(target, type, listener, thisArg, once) {
  if (thisArg && thisArg !== target) {
    listener = listener.bind(thisArg);
  }
  if (once) {
    const originalListener = listener;
    listener = function() {
      target.removeEventListener(type, listener);
      originalListener.apply(this, arguments);
    };
  }
  const eventsKey = {
    target,
    type,
    listener
  };
  target.addEventListener(type, listener);
  return eventsKey;
}
function listenOnce(target, type, listener, thisArg) {
  return listen(target, type, listener, thisArg, true);
}
function unlistenByKey(key) {
  if (key && key.target) {
    key.target.removeEventListener(key.type, key.listener);
    clear(key);
  }
}
var init_events = __esm({
  "node_modules/ol/events.js"() {
    init_obj();
  }
});

// node_modules/ol/Observable.js
function unByKey(key) {
  if (Array.isArray(key)) {
    for (let i = 0, ii = key.length; i < ii; ++i) {
      unlistenByKey(key[i]);
    }
  } else {
    unlistenByKey(
      /** @type {import("./events.js").EventsKey} */
      key
    );
  }
}
var Observable, Observable_default;
var init_Observable = __esm({
  "node_modules/ol/Observable.js"() {
    init_Target();
    init_EventType();
    init_events();
    Observable = class extends Target_default {
      constructor() {
        super();
        this.on = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
        this.onInternal;
        this.once = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
        this.onceInternal;
        this.un = /** @type {ObservableOnSignature<void>} */
        this.unInternal;
        this.revision_ = 0;
      }
      /**
       * Increases the revision counter and dispatches a 'change' event.
       * @api
       */
      changed() {
        ++this.revision_;
        this.dispatchEvent(EventType_default.CHANGE);
      }
      /**
       * Get the version number for this object.  Each time the object is modified,
       * its version number will be incremented.
       * @return {number} Revision.
       * @api
       */
      getRevision() {
        return this.revision_;
      }
      /**
       * @param {string|Array<string>} type Type.
       * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
       * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
       * @protected
       */
      onInternal(type, listener) {
        if (Array.isArray(type)) {
          const len = type.length;
          const keys = new Array(len);
          for (let i = 0; i < len; ++i) {
            keys[i] = listen(this, type[i], listener);
          }
          return keys;
        }
        return listen(
          this,
          /** @type {string} */
          type,
          listener
        );
      }
      /**
       * @param {string|Array<string>} type Type.
       * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
       * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
       * @protected
       */
      onceInternal(type, listener) {
        let key;
        if (Array.isArray(type)) {
          const len = type.length;
          key = new Array(len);
          for (let i = 0; i < len; ++i) {
            key[i] = listenOnce(this, type[i], listener);
          }
        } else {
          key = listenOnce(
            this,
            /** @type {string} */
            type,
            listener
          );
        }
        listener.ol_key = key;
        return key;
      }
      /**
       * Unlisten for a certain type of event.
       * @param {string|Array<string>} type Type.
       * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
       * @protected
       */
      unInternal(type, listener) {
        const key = (
          /** @type {Object} */
          listener.ol_key
        );
        if (key) {
          unByKey(key);
        } else if (Array.isArray(type)) {
          for (let i = 0, ii = type.length; i < ii; ++i) {
            this.removeEventListener(type[i], listener);
          }
        } else {
          this.removeEventListener(type, listener);
        }
      }
    };
    Observable.prototype.on;
    Observable.prototype.once;
    Observable.prototype.un;
    Observable_default = Observable;
  }
});

// node_modules/ol/util.js
function abstract() {
  throw new Error("Unimplemented abstract method.");
}
function getUid(obj) {
  return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}
var uidCounter_;
var init_util = __esm({
  "node_modules/ol/util.js"() {
    uidCounter_ = 0;
  }
});

// node_modules/ol/Object.js
var ObjectEvent, BaseObject, Object_default;
var init_Object = __esm({
  "node_modules/ol/Object.js"() {
    init_Event();
    init_ObjectEventType();
    init_Observable();
    init_util();
    init_obj();
    ObjectEvent = class extends Event_default {
      /**
       * @param {string} type The event type.
       * @param {string} key The property name.
       * @param {*} oldValue The old value for `key`.
       */
      constructor(type, key, oldValue) {
        super(type);
        this.key = key;
        this.oldValue = oldValue;
      }
    };
    BaseObject = class extends Observable_default {
      /**
       * @param {Object<string, *>} [values] An object with key-value pairs.
       */
      constructor(values) {
        super();
        this.on;
        this.once;
        this.un;
        getUid(this);
        this.values_ = null;
        if (values !== void 0) {
          this.setProperties(values);
        }
      }
      /**
       * Gets a value.
       * @param {string} key Key name.
       * @return {*} Value.
       * @api
       */
      get(key) {
        let value;
        if (this.values_ && this.values_.hasOwnProperty(key)) {
          value = this.values_[key];
        }
        return value;
      }
      /**
       * Get a list of object property names.
       * @return {Array<string>} List of property names.
       * @api
       */
      getKeys() {
        return this.values_ && Object.keys(this.values_) || [];
      }
      /**
       * Get an object of all property names and values.
       * @return {Object<string, *>} Object.
       * @api
       */
      getProperties() {
        return this.values_ && Object.assign({}, this.values_) || {};
      }
      /**
       * Get an object of all property names and values.
       * @return {Object<string, *>?} Object.
       */
      getPropertiesInternal() {
        return this.values_;
      }
      /**
       * @return {boolean} The object has properties.
       */
      hasProperties() {
        return !!this.values_;
      }
      /**
       * @param {string} key Key name.
       * @param {*} oldValue Old value.
       */
      notify(key, oldValue) {
        let eventType;
        eventType = `change:${key}`;
        if (this.hasListener(eventType)) {
          this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        }
        eventType = ObjectEventType_default.PROPERTYCHANGE;
        if (this.hasListener(eventType)) {
          this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        }
      }
      /**
       * @param {string} key Key name.
       * @param {import("./events.js").Listener} listener Listener.
       */
      addChangeListener(key, listener) {
        this.addEventListener(`change:${key}`, listener);
      }
      /**
       * @param {string} key Key name.
       * @param {import("./events.js").Listener} listener Listener.
       */
      removeChangeListener(key, listener) {
        this.removeEventListener(`change:${key}`, listener);
      }
      /**
       * Sets a value.
       * @param {string} key Key name.
       * @param {*} value Value.
       * @param {boolean} [silent] Update without triggering an event.
       * @api
       */
      set(key, value, silent) {
        const values = this.values_ || (this.values_ = {});
        if (silent) {
          values[key] = value;
        } else {
          const oldValue = values[key];
          values[key] = value;
          if (oldValue !== value) {
            this.notify(key, oldValue);
          }
        }
      }
      /**
       * Sets a collection of key-value pairs.  Note that this changes any existing
       * properties and adds new ones (it does not remove any existing properties).
       * @param {Object<string, *>} values Values.
       * @param {boolean} [silent] Update without triggering an event.
       * @api
       */
      setProperties(values, silent) {
        for (const key in values) {
          this.set(key, values[key], silent);
        }
      }
      /**
       * Apply any properties from another object without triggering events.
       * @param {BaseObject} source The source object.
       * @protected
       */
      applyProperties(source) {
        if (!source.values_) {
          return;
        }
        Object.assign(this.values_ || (this.values_ = {}), source.values_);
      }
      /**
       * Unsets a property.
       * @param {string} key Key name.
       * @param {boolean} [silent] Unset without triggering an event.
       * @api
       */
      unset(key, silent) {
        if (this.values_ && key in this.values_) {
          const oldValue = this.values_[key];
          delete this.values_[key];
          if (isEmpty(this.values_)) {
            this.values_ = null;
          }
          if (!silent) {
            this.notify(key, oldValue);
          }
        }
      }
    };
    Object_default = BaseObject;
  }
});

// node_modules/ol/CollectionEventType.js
var CollectionEventType_default;
var init_CollectionEventType = __esm({
  "node_modules/ol/CollectionEventType.js"() {
    CollectionEventType_default = {
      /**
       * Triggered when an item is added to the collection.
       * @event module:ol/Collection.CollectionEvent#add
       * @api
       */
      ADD: "add",
      /**
       * Triggered when an item is removed from the collection.
       * @event module:ol/Collection.CollectionEvent#remove
       * @api
       */
      REMOVE: "remove"
    };
  }
});

// node_modules/ol/Collection.js
var Property, CollectionEvent, Collection, Collection_default;
var init_Collection = __esm({
  "node_modules/ol/Collection.js"() {
    init_Object();
    init_CollectionEventType();
    init_Event();
    Property = {
      LENGTH: "length"
    };
    CollectionEvent = class extends Event_default {
      /**
       * @param {import("./CollectionEventType.js").default} type Type.
       * @param {T} element Element.
       * @param {number} index The index of the added or removed element.
       */
      constructor(type, element, index) {
        super(type);
        this.element = element;
        this.index = index;
      }
    };
    Collection = class extends Object_default {
      /**
       * @param {Array<T>} [array] Array.
       * @param {Options} [options] Collection options.
       */
      constructor(array, options) {
        super();
        this.on;
        this.once;
        this.un;
        options = options || {};
        this.unique_ = !!options.unique;
        this.array_ = array ? array : [];
        if (this.unique_) {
          for (let i = 0, ii = this.array_.length; i < ii; ++i) {
            this.assertUnique_(this.array_[i], i);
          }
        }
        this.updateLength_();
      }
      /**
       * Remove all elements from the collection.
       * @api
       */
      clear() {
        while (this.getLength() > 0) {
          this.pop();
        }
      }
      /**
       * Add elements to the collection.  This pushes each item in the provided array
       * to the end of the collection.
       * @param {!Array<T>} arr Array.
       * @return {Collection<T>} This collection.
       * @api
       */
      extend(arr) {
        for (let i = 0, ii = arr.length; i < ii; ++i) {
          this.push(arr[i]);
        }
        return this;
      }
      /**
       * Iterate over each element, calling the provided callback.
       * @param {function(T, number, Array<T>): *} f The function to call
       *     for every element. This function takes 3 arguments (the element, the
       *     index and the array). The return value is ignored.
       * @api
       */
      forEach(f) {
        const array = this.array_;
        for (let i = 0, ii = array.length; i < ii; ++i) {
          f(array[i], i, array);
        }
      }
      /**
       * Get a reference to the underlying Array object. Warning: if the array
       * is mutated, no events will be dispatched by the collection, and the
       * collection's "length" property won't be in sync with the actual length
       * of the array.
       * @return {!Array<T>} Array.
       * @api
       */
      getArray() {
        return this.array_;
      }
      /**
       * Get the element at the provided index.
       * @param {number} index Index.
       * @return {T} Element.
       * @api
       */
      item(index) {
        return this.array_[index];
      }
      /**
       * Get the length of this collection.
       * @return {number} The length of the array.
       * @observable
       * @api
       */
      getLength() {
        return this.get(Property.LENGTH);
      }
      /**
       * Insert an element at the provided index.
       * @param {number} index Index.
       * @param {T} elem Element.
       * @api
       */
      insertAt(index, elem) {
        if (index < 0 || index > this.getLength()) {
          throw new Error("Index out of bounds: " + index);
        }
        if (this.unique_) {
          this.assertUnique_(elem);
        }
        this.array_.splice(index, 0, elem);
        this.updateLength_();
        this.dispatchEvent(
          new CollectionEvent(CollectionEventType_default.ADD, elem, index)
        );
      }
      /**
       * Remove the last element of the collection and return it.
       * Return `undefined` if the collection is empty.
       * @return {T|undefined} Element.
       * @api
       */
      pop() {
        return this.removeAt(this.getLength() - 1);
      }
      /**
       * Insert the provided element at the end of the collection.
       * @param {T} elem Element.
       * @return {number} New length of the collection.
       * @api
       */
      push(elem) {
        if (this.unique_) {
          this.assertUnique_(elem);
        }
        const n = this.getLength();
        this.insertAt(n, elem);
        return this.getLength();
      }
      /**
       * Remove the first occurrence of an element from the collection.
       * @param {T} elem Element.
       * @return {T|undefined} The removed element or undefined if none found.
       * @api
       */
      remove(elem) {
        const arr = this.array_;
        for (let i = 0, ii = arr.length; i < ii; ++i) {
          if (arr[i] === elem) {
            return this.removeAt(i);
          }
        }
        return void 0;
      }
      /**
       * Remove the element at the provided index and return it.
       * Return `undefined` if the collection does not contain this index.
       * @param {number} index Index.
       * @return {T|undefined} Value.
       * @api
       */
      removeAt(index) {
        if (index < 0 || index >= this.getLength()) {
          return void 0;
        }
        const prev = this.array_[index];
        this.array_.splice(index, 1);
        this.updateLength_();
        this.dispatchEvent(
          /** @type {CollectionEvent<T>} */
          new CollectionEvent(CollectionEventType_default.REMOVE, prev, index)
        );
        return prev;
      }
      /**
       * Set the element at the provided index.
       * @param {number} index Index.
       * @param {T} elem Element.
       * @api
       */
      setAt(index, elem) {
        const n = this.getLength();
        if (index >= n) {
          this.insertAt(index, elem);
          return;
        }
        if (index < 0) {
          throw new Error("Index out of bounds: " + index);
        }
        if (this.unique_) {
          this.assertUnique_(elem, index);
        }
        const prev = this.array_[index];
        this.array_[index] = elem;
        this.dispatchEvent(
          /** @type {CollectionEvent<T>} */
          new CollectionEvent(CollectionEventType_default.REMOVE, prev, index)
        );
        this.dispatchEvent(
          /** @type {CollectionEvent<T>} */
          new CollectionEvent(CollectionEventType_default.ADD, elem, index)
        );
      }
      /**
       * @private
       */
      updateLength_() {
        this.set(Property.LENGTH, this.array_.length);
      }
      /**
       * @private
       * @param {T} elem Element.
       * @param {number} [except] Optional index to ignore.
       */
      assertUnique_(elem, except) {
        for (let i = 0, ii = this.array_.length; i < ii; ++i) {
          if (this.array_[i] === elem && i !== except) {
            throw new Error("Duplicate item added to a unique collection");
          }
        }
      }
    };
    Collection_default = Collection;
  }
});

// node_modules/ol/has.js
var ua, FIREFOX, SAFARI, SAFARI_BUG_237906, WEBKIT, MAC, DEVICE_PIXEL_RATIO, WORKER_OFFSCREEN_CANVAS, IMAGE_DECODE, PASSIVE_EVENT_LISTENERS;
var init_has = __esm({
  "node_modules/ol/has.js"() {
    ua = typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" ? navigator.userAgent.toLowerCase() : "";
    FIREFOX = ua.includes("firefox");
    SAFARI = ua.includes("safari") && !ua.includes("chrom");
    SAFARI_BUG_237906 = SAFARI && (ua.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(ua));
    WEBKIT = ua.includes("webkit") && !ua.includes("edge");
    MAC = ua.includes("macintosh");
    DEVICE_PIXEL_RATIO = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1;
    WORKER_OFFSCREEN_CANVAS = typeof WorkerGlobalScope !== "undefined" && typeof OffscreenCanvas !== "undefined" && self instanceof WorkerGlobalScope;
    IMAGE_DECODE = typeof Image !== "undefined" && Image.prototype.decode;
    PASSIVE_EVENT_LISTENERS = function() {
      let passive = false;
      try {
        const options = Object.defineProperty({}, "passive", {
          get: function() {
            passive = true;
          }
        });
        window.addEventListener("_", null, options);
        window.removeEventListener("_", null, options);
      } catch (error) {
      }
      return passive;
    }();
  }
});

// node_modules/ol/asserts.js
function assert(assertion, errorMessage) {
  if (!assertion) {
    throw new Error(errorMessage);
  }
}
var init_asserts = __esm({
  "node_modules/ol/asserts.js"() {
  }
});

// node_modules/ol/transform.js
function create() {
  return [1, 0, 0, 1, 0, 0];
}
function set(transform2, a, b, c, d, e, f) {
  transform2[0] = a;
  transform2[1] = b;
  transform2[2] = c;
  transform2[3] = d;
  transform2[4] = e;
  transform2[5] = f;
  return transform2;
}
function setFromArray(transform1, transform2) {
  transform1[0] = transform2[0];
  transform1[1] = transform2[1];
  transform1[2] = transform2[2];
  transform1[3] = transform2[3];
  transform1[4] = transform2[4];
  transform1[5] = transform2[5];
  return transform1;
}
function apply(transform2, coordinate) {
  const x = coordinate[0];
  const y = coordinate[1];
  coordinate[0] = transform2[0] * x + transform2[2] * y + transform2[4];
  coordinate[1] = transform2[1] * x + transform2[3] * y + transform2[5];
  return coordinate;
}
function makeScale(target, x, y) {
  return set(target, x, 0, 0, y, 0, 0);
}
function compose(transform2, dx1, dy1, sx, sy, angle, dx2, dy2) {
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  transform2[0] = sx * cos;
  transform2[1] = sy * sin;
  transform2[2] = -sx * sin;
  transform2[3] = sy * cos;
  transform2[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
  transform2[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
  return transform2;
}
function makeInverse(target, source) {
  const det = determinant(source);
  assert(det !== 0, "Transformation matrix cannot be inverted");
  const a = source[0];
  const b = source[1];
  const c = source[2];
  const d = source[3];
  const e = source[4];
  const f = source[5];
  target[0] = d / det;
  target[1] = -b / det;
  target[2] = -c / det;
  target[3] = a / det;
  target[4] = (c * f - d * e) / det;
  target[5] = -(a * f - b * e) / det;
  return target;
}
function determinant(mat) {
  return mat[0] * mat[3] - mat[1] * mat[2];
}
function toString(mat) {
  const transformString = "matrix(" + mat.join(", ") + ")";
  if (WORKER_OFFSCREEN_CANVAS) {
    return transformString;
  }
  const node = transformStringDiv || (transformStringDiv = document.createElement("div"));
  node.style.transform = transformString;
  return node.style.transform;
}
var tmp_, transformStringDiv;
var init_transform = __esm({
  "node_modules/ol/transform.js"() {
    init_has();
    init_asserts();
    tmp_ = new Array(6);
  }
});

// node_modules/ol/extent/Relationship.js
var Relationship_default;
var init_Relationship = __esm({
  "node_modules/ol/extent/Relationship.js"() {
    Relationship_default = {
      UNKNOWN: 0,
      INTERSECTING: 1,
      ABOVE: 2,
      RIGHT: 4,
      BELOW: 8,
      LEFT: 16
    };
  }
});

// node_modules/ol/extent.js
function boundingExtent(coordinates2) {
  const extent = createEmpty();
  for (let i = 0, ii = coordinates2.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates2[i]);
  }
  return extent;
}
function _boundingExtentXYs(xs, ys, dest) {
  const minX = Math.min.apply(null, xs);
  const minY = Math.min.apply(null, ys);
  const maxX = Math.max.apply(null, xs);
  const maxY = Math.max.apply(null, ys);
  return createOrUpdate(minX, minY, maxX, maxY, dest);
}
function buffer(extent, value, dest) {
  if (dest) {
    dest[0] = extent[0] - value;
    dest[1] = extent[1] - value;
    dest[2] = extent[2] + value;
    dest[3] = extent[3] + value;
    return dest;
  }
  return [
    extent[0] - value,
    extent[1] - value,
    extent[2] + value,
    extent[3] + value
  ];
}
function clone(extent, dest) {
  if (dest) {
    dest[0] = extent[0];
    dest[1] = extent[1];
    dest[2] = extent[2];
    dest[3] = extent[3];
    return dest;
  }
  return extent.slice();
}
function closestSquaredDistanceXY(extent, x, y) {
  let dx, dy;
  if (x < extent[0]) {
    dx = extent[0] - x;
  } else if (extent[2] < x) {
    dx = x - extent[2];
  } else {
    dx = 0;
  }
  if (y < extent[1]) {
    dy = extent[1] - y;
  } else if (extent[3] < y) {
    dy = y - extent[3];
  } else {
    dy = 0;
  }
  return dx * dx + dy * dy;
}
function containsCoordinate(extent, coordinate) {
  return containsXY(extent, coordinate[0], coordinate[1]);
}
function containsExtent(extent1, extent2) {
  return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}
function containsXY(extent, x, y) {
  return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
function coordinateRelationship(extent, coordinate) {
  const minX = extent[0];
  const minY = extent[1];
  const maxX = extent[2];
  const maxY = extent[3];
  const x = coordinate[0];
  const y = coordinate[1];
  let relationship = Relationship_default.UNKNOWN;
  if (x < minX) {
    relationship = relationship | Relationship_default.LEFT;
  } else if (x > maxX) {
    relationship = relationship | Relationship_default.RIGHT;
  }
  if (y < minY) {
    relationship = relationship | Relationship_default.BELOW;
  } else if (y > maxY) {
    relationship = relationship | Relationship_default.ABOVE;
  }
  if (relationship === Relationship_default.UNKNOWN) {
    relationship = Relationship_default.INTERSECTING;
  }
  return relationship;
}
function createEmpty() {
  return [Infinity, Infinity, -Infinity, -Infinity];
}
function createOrUpdate(minX, minY, maxX, maxY, dest) {
  if (dest) {
    dest[0] = minX;
    dest[1] = minY;
    dest[2] = maxX;
    dest[3] = maxY;
    return dest;
  }
  return [minX, minY, maxX, maxY];
}
function createOrUpdateEmpty(dest) {
  return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, dest);
}
function createOrUpdateFromCoordinate(coordinate, dest) {
  const x = coordinate[0];
  const y = coordinate[1];
  return createOrUpdate(x, y, x, y, dest);
}
function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, dest) {
  const extent = createOrUpdateEmpty(dest);
  return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}
function equals2(extent1, extent2) {
  return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
}
function extend2(extent1, extent2) {
  if (extent2[0] < extent1[0]) {
    extent1[0] = extent2[0];
  }
  if (extent2[2] > extent1[2]) {
    extent1[2] = extent2[2];
  }
  if (extent2[1] < extent1[1]) {
    extent1[1] = extent2[1];
  }
  if (extent2[3] > extent1[3]) {
    extent1[3] = extent2[3];
  }
  return extent1;
}
function extendCoordinate(extent, coordinate) {
  if (coordinate[0] < extent[0]) {
    extent[0] = coordinate[0];
  }
  if (coordinate[0] > extent[2]) {
    extent[2] = coordinate[0];
  }
  if (coordinate[1] < extent[1]) {
    extent[1] = coordinate[1];
  }
  if (coordinate[1] > extent[3]) {
    extent[3] = coordinate[1];
  }
}
function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
  for (; offset < end; offset += stride) {
    extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
  }
  return extent;
}
function extendXY(extent, x, y) {
  extent[0] = Math.min(extent[0], x);
  extent[1] = Math.min(extent[1], y);
  extent[2] = Math.max(extent[2], x);
  extent[3] = Math.max(extent[3], y);
}
function forEachCorner(extent, callback) {
  let val;
  val = callback(getBottomLeft(extent));
  if (val) {
    return val;
  }
  val = callback(getBottomRight(extent));
  if (val) {
    return val;
  }
  val = callback(getTopRight(extent));
  if (val) {
    return val;
  }
  val = callback(getTopLeft(extent));
  if (val) {
    return val;
  }
  return false;
}
function getArea(extent) {
  let area = 0;
  if (!isEmpty2(extent)) {
    area = getWidth(extent) * getHeight(extent);
  }
  return area;
}
function getBottomLeft(extent) {
  return [extent[0], extent[1]];
}
function getBottomRight(extent) {
  return [extent[2], extent[1]];
}
function getCenter(extent) {
  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
}
function getCorner(extent, corner) {
  let coordinate;
  if (corner === "bottom-left") {
    coordinate = getBottomLeft(extent);
  } else if (corner === "bottom-right") {
    coordinate = getBottomRight(extent);
  } else if (corner === "top-left") {
    coordinate = getTopLeft(extent);
  } else if (corner === "top-right") {
    coordinate = getTopRight(extent);
  } else {
    throw new Error("Invalid corner");
  }
  return coordinate;
}
function getForViewAndSize(center, resolution, rotation, size, dest) {
  const [x0, y0, x1, y1, x2, y2, x3, y3] = getRotatedViewport(
    center,
    resolution,
    rotation,
    size
  );
  return createOrUpdate(
    Math.min(x0, x1, x2, x3),
    Math.min(y0, y1, y2, y3),
    Math.max(x0, x1, x2, x3),
    Math.max(y0, y1, y2, y3),
    dest
  );
}
function getRotatedViewport(center, resolution, rotation, size) {
  const dx = resolution * size[0] / 2;
  const dy = resolution * size[1] / 2;
  const cosRotation = Math.cos(rotation);
  const sinRotation = Math.sin(rotation);
  const xCos = dx * cosRotation;
  const xSin = dx * sinRotation;
  const yCos = dy * cosRotation;
  const ySin = dy * sinRotation;
  const x = center[0];
  const y = center[1];
  return [
    x - xCos + ySin,
    y - xSin - yCos,
    x - xCos - ySin,
    y - xSin + yCos,
    x + xCos - ySin,
    y + xSin + yCos,
    x + xCos + ySin,
    y + xSin - yCos,
    x - xCos + ySin,
    y - xSin - yCos
  ];
}
function getHeight(extent) {
  return extent[3] - extent[1];
}
function getIntersection(extent1, extent2, dest) {
  const intersection = dest ? dest : createEmpty();
  if (intersects(extent1, extent2)) {
    if (extent1[0] > extent2[0]) {
      intersection[0] = extent1[0];
    } else {
      intersection[0] = extent2[0];
    }
    if (extent1[1] > extent2[1]) {
      intersection[1] = extent1[1];
    } else {
      intersection[1] = extent2[1];
    }
    if (extent1[2] < extent2[2]) {
      intersection[2] = extent1[2];
    } else {
      intersection[2] = extent2[2];
    }
    if (extent1[3] < extent2[3]) {
      intersection[3] = extent1[3];
    } else {
      intersection[3] = extent2[3];
    }
  } else {
    createOrUpdateEmpty(intersection);
  }
  return intersection;
}
function getTopLeft(extent) {
  return [extent[0], extent[3]];
}
function getTopRight(extent) {
  return [extent[2], extent[3]];
}
function getWidth(extent) {
  return extent[2] - extent[0];
}
function intersects(extent1, extent2) {
  return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
}
function isEmpty2(extent) {
  return extent[2] < extent[0] || extent[3] < extent[1];
}
function returnOrUpdate(extent, dest) {
  if (dest) {
    dest[0] = extent[0];
    dest[1] = extent[1];
    dest[2] = extent[2];
    dest[3] = extent[3];
    return dest;
  }
  return extent;
}
function intersectsSegment(extent, start, end) {
  let intersects3 = false;
  const startRel = coordinateRelationship(extent, start);
  const endRel = coordinateRelationship(extent, end);
  if (startRel === Relationship_default.INTERSECTING || endRel === Relationship_default.INTERSECTING) {
    intersects3 = true;
  } else {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const startX = start[0];
    const startY = start[1];
    const endX = end[0];
    const endY = end[1];
    const slope = (endY - startY) / (endX - startX);
    let x, y;
    if (!!(endRel & Relationship_default.ABOVE) && !(startRel & Relationship_default.ABOVE)) {
      x = endX - (endY - maxY) / slope;
      intersects3 = x >= minX && x <= maxX;
    }
    if (!intersects3 && !!(endRel & Relationship_default.RIGHT) && !(startRel & Relationship_default.RIGHT)) {
      y = endY - (endX - maxX) * slope;
      intersects3 = y >= minY && y <= maxY;
    }
    if (!intersects3 && !!(endRel & Relationship_default.BELOW) && !(startRel & Relationship_default.BELOW)) {
      x = endX - (endY - minY) / slope;
      intersects3 = x >= minX && x <= maxX;
    }
    if (!intersects3 && !!(endRel & Relationship_default.LEFT) && !(startRel & Relationship_default.LEFT)) {
      y = endY - (endX - minX) * slope;
      intersects3 = y >= minY && y <= maxY;
    }
  }
  return intersects3;
}
function applyTransform(extent, transformFn, dest, stops) {
  if (isEmpty2(extent)) {
    return createOrUpdateEmpty(dest);
  }
  let coordinates2 = [];
  if (stops > 1) {
    const width = extent[2] - extent[0];
    const height = extent[3] - extent[1];
    for (let i = 0; i < stops; ++i) {
      coordinates2.push(
        extent[0] + width * i / stops,
        extent[1],
        extent[2],
        extent[1] + height * i / stops,
        extent[2] - width * i / stops,
        extent[3],
        extent[0],
        extent[3] - height * i / stops
      );
    }
  } else {
    coordinates2 = [
      extent[0],
      extent[1],
      extent[2],
      extent[1],
      extent[2],
      extent[3],
      extent[0],
      extent[3]
    ];
  }
  transformFn(coordinates2, coordinates2, 2);
  const xs = [];
  const ys = [];
  for (let i = 0, l = coordinates2.length; i < l; i += 2) {
    xs.push(coordinates2[i]);
    ys.push(coordinates2[i + 1]);
  }
  return _boundingExtentXYs(xs, ys, dest);
}
function wrapX(extent, projection) {
  const projectionExtent = projection.getExtent();
  const center = getCenter(extent);
  if (projection.canWrapX() && (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
    const worldWidth = getWidth(projectionExtent);
    const worldsAway = Math.floor(
      (center[0] - projectionExtent[0]) / worldWidth
    );
    const offset = worldsAway * worldWidth;
    extent[0] -= offset;
    extent[2] -= offset;
  }
  return extent;
}
function wrapAndSliceX(extent, projection) {
  if (projection.canWrapX()) {
    const projectionExtent = projection.getExtent();
    if (!isFinite(extent[0]) || !isFinite(extent[2])) {
      return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
    }
    wrapX(extent, projection);
    const worldWidth = getWidth(projectionExtent);
    if (getWidth(extent) > worldWidth) {
      return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
    }
    if (extent[0] < projectionExtent[0]) {
      return [
        [extent[0] + worldWidth, extent[1], projectionExtent[2], extent[3]],
        [projectionExtent[0], extent[1], extent[2], extent[3]]
      ];
    }
    if (extent[2] > projectionExtent[2]) {
      return [
        [extent[0], extent[1], projectionExtent[2], extent[3]],
        [projectionExtent[0], extent[1], extent[2] - worldWidth, extent[3]]
      ];
    }
  }
  return [extent];
}
var init_extent = __esm({
  "node_modules/ol/extent.js"() {
    init_Relationship();
  }
});

// node_modules/color-space/rgb.js
var rgb_default;
var init_rgb = __esm({
  "node_modules/color-space/rgb.js"() {
    rgb_default = {
      name: "rgb",
      min: [0, 0, 0],
      max: [255, 255, 255],
      channel: ["red", "green", "blue"],
      alias: ["RGB"]
    };
  }
});

// node_modules/color-space/xyz.js
var xyz, xyz_default;
var init_xyz = __esm({
  "node_modules/color-space/xyz.js"() {
    init_rgb();
    xyz = {
      name: "xyz",
      min: [0, 0, 0],
      channel: ["X", "Y", "Z"],
      alias: ["XYZ", "ciexyz", "cie1931"]
    };
    xyz.whitepoint = {
      //1931 2°
      2: {
        //incadescent
        A: [109.85, 100, 35.585],
        // B:[],
        C: [98.074, 100, 118.232],
        D50: [96.422, 100, 82.521],
        D55: [95.682, 100, 92.149],
        //daylight
        D65: [95.045592705167, 100, 108.9057750759878],
        D75: [94.972, 100, 122.638],
        //flourescent
        // F1: [],
        F2: [99.187, 100, 67.395],
        // F3: [],
        // F4: [],
        // F5: [],
        // F6:[],
        F7: [95.044, 100, 108.755],
        // F8: [],
        // F9: [],
        // F10: [],
        F11: [100.966, 100, 64.37],
        // F12: [],
        E: [100, 100, 100]
      },
      //1964  10°
      10: {
        //incadescent
        A: [111.144, 100, 35.2],
        C: [97.285, 100, 116.145],
        D50: [96.72, 100, 81.427],
        D55: [95.799, 100, 90.926],
        //daylight
        D65: [94.811, 100, 107.304],
        D75: [94.416, 100, 120.641],
        //flourescent
        F2: [103.28, 100, 69.026],
        F7: [95.792, 100, 107.687],
        F11: [103.866, 100, 65.627],
        E: [100, 100, 100]
      }
    };
    xyz.max = xyz.whitepoint[2].D65;
    xyz.rgb = function(_xyz, white) {
      white = white || xyz.whitepoint[2].E;
      var x = _xyz[0] / white[0], y = _xyz[1] / white[1], z = _xyz[2] / white[2], r, g, b;
      r = x * 3.240969941904521 + y * -1.537383177570093 + z * -0.498610760293;
      g = x * -0.96924363628087 + y * 1.87596750150772 + z * 0.041555057407175;
      b = x * 0.055630079696993 + y * -0.20397695888897 + z * 1.056971514242878;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r = r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g = g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b = b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    rgb_default.xyz = function(rgb, white) {
      var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.41239079926595 + g * 0.35758433938387 + b * 0.18048078840183;
      var y = r * 0.21263900587151 + g * 0.71516867876775 + b * 0.072192315360733;
      var z = r * 0.019330818715591 + g * 0.11919477979462 + b * 0.95053215224966;
      white = white || xyz.whitepoint[2].E;
      return [x * white[0], y * white[1], z * white[2]];
    };
    xyz_default = xyz;
  }
});

// node_modules/color-space/luv.js
var luv_default;
var init_luv = __esm({
  "node_modules/color-space/luv.js"() {
    init_xyz();
    luv_default = {
      name: "luv",
      //NOTE: luv has no rigidly defined limits
      //easyrgb fails to get proper coords
      //boronine states no rigid limits
      //colorMine refers this ones:
      min: [0, -134, -140],
      max: [100, 224, 122],
      channel: ["lightness", "u", "v"],
      alias: ["LUV", "cieluv", "cie1976"],
      xyz: function(arg, i, o) {
        var _u, _v, l, u, v, x, y, z, xn, yn, zn, un, vn;
        l = arg[0], u = arg[1], v = arg[2];
        if (l === 0)
          return [0, 0, 0];
        var k = 0.0011070564598794539;
        i = i || "D65";
        o = o || 2;
        xn = xyz_default.whitepoint[o][i][0];
        yn = xyz_default.whitepoint[o][i][1];
        zn = xyz_default.whitepoint[o][i][2];
        un = 4 * xn / (xn + 15 * yn + 3 * zn);
        vn = 9 * yn / (xn + 15 * yn + 3 * zn);
        _u = u / (13 * l) + un || 0;
        _v = v / (13 * l) + vn || 0;
        y = l > 8 ? yn * Math.pow((l + 16) / 116, 3) : yn * l * k;
        x = y * 9 * _u / (4 * _v) || 0;
        z = y * (12 - 3 * _u - 20 * _v) / (4 * _v) || 0;
        return [x, y, z];
      }
    };
    xyz_default.luv = function(arg, i, o) {
      var _u, _v, l, u, v, x, y, z, xn, yn, zn, un, vn;
      var e = 0.008856451679035631;
      var k = 903.2962962962961;
      i = i || "D65";
      o = o || 2;
      xn = xyz_default.whitepoint[o][i][0];
      yn = xyz_default.whitepoint[o][i][1];
      zn = xyz_default.whitepoint[o][i][2];
      un = 4 * xn / (xn + 15 * yn + 3 * zn);
      vn = 9 * yn / (xn + 15 * yn + 3 * zn);
      x = arg[0], y = arg[1], z = arg[2];
      _u = 4 * x / (x + 15 * y + 3 * z) || 0;
      _v = 9 * y / (x + 15 * y + 3 * z) || 0;
      var yr = y / yn;
      l = yr <= e ? k * yr : 116 * Math.pow(yr, 1 / 3) - 16;
      u = 13 * l * (_u - un);
      v = 13 * l * (_v - vn);
      return [l, u, v];
    };
  }
});

// node_modules/color-space/lchuv.js
var lchuv, lchuv_default;
var init_lchuv = __esm({
  "node_modules/color-space/lchuv.js"() {
    init_luv();
    init_xyz();
    lchuv = {
      name: "lchuv",
      channel: ["lightness", "chroma", "hue"],
      alias: ["LCHuv", "cielchuv"],
      min: [0, 0, 0],
      max: [100, 100, 360],
      luv: function(luv) {
        var l = luv[0], c = luv[1], h = luv[2], u, v, hr;
        hr = h / 360 * 2 * Math.PI;
        u = c * Math.cos(hr);
        v = c * Math.sin(hr);
        return [l, u, v];
      },
      xyz: function(arg) {
        return luv_default.xyz(lchuv.luv(arg));
      }
    };
    lchuv_default = lchuv;
    luv_default.lchuv = function(luv) {
      var l = luv[0], u = luv[1], v = luv[2];
      var c = Math.sqrt(u * u + v * v);
      var hr = Math.atan2(v, u);
      var h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      return [l, c, h];
    };
    xyz_default.lchuv = function(arg) {
      return luv_default.lchuv(xyz_default.luv(arg));
    };
  }
});

// node_modules/color-parse/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-parse/node_modules/color-name/index.js"(exports, module) {
    "use strict";
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-parse/index.js
function parse(cstr) {
  var m, parts = [], alpha = 1, space;
  if (typeof cstr === "number") {
    return { space: "rgb", values: [cstr >>> 16, (cstr & 65280) >>> 8, cstr & 255], alpha: 1 };
  }
  if (typeof cstr === "number")
    return { space: "rgb", values: [cstr >>> 16, (cstr & 65280) >>> 8, cstr & 255], alpha: 1 };
  cstr = String(cstr).toLowerCase();
  if (import_color_name.default[cstr]) {
    parts = import_color_name.default[cstr].slice();
    space = "rgb";
  } else if (cstr === "transparent") {
    alpha = 0;
    space = "rgb";
    parts = [0, 0, 0];
  } else if (cstr[0] === "#") {
    var base = cstr.slice(1);
    var size = base.length;
    var isShort = size <= 4;
    alpha = 1;
    if (isShort) {
      parts = [
        parseInt(base[0] + base[0], 16),
        parseInt(base[1] + base[1], 16),
        parseInt(base[2] + base[2], 16)
      ];
      if (size === 4) {
        alpha = parseInt(base[3] + base[3], 16) / 255;
      }
    } else {
      parts = [
        parseInt(base[0] + base[1], 16),
        parseInt(base[2] + base[3], 16),
        parseInt(base[4] + base[5], 16)
      ];
      if (size === 8) {
        alpha = parseInt(base[6] + base[7], 16) / 255;
      }
    }
    if (!parts[0])
      parts[0] = 0;
    if (!parts[1])
      parts[1] = 0;
    if (!parts[2])
      parts[2] = 0;
    space = "rgb";
  } else if (m = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(cstr)) {
    var name = m[1];
    space = name.replace(/a$/, "");
    var dims = space === "cmyk" ? 4 : space === "gray" ? 1 : 3;
    parts = m[2].trim().split(/\s*[,\/]\s*|\s+/);
    if (space === "color")
      space = parts.shift();
    parts = parts.map(function(x, i) {
      if (x[x.length - 1] === "%") {
        x = parseFloat(x) / 100;
        if (i === 3)
          return x;
        if (space === "rgb")
          return x * 255;
        if (space[0] === "h")
          return x * 100;
        if (space[0] === "l" && !i)
          return x * 100;
        if (space === "lab")
          return x * 125;
        if (space === "lch")
          return i < 2 ? x * 150 : x * 360;
        if (space[0] === "o" && !i)
          return x;
        if (space === "oklab")
          return x * 0.4;
        if (space === "oklch")
          return i < 2 ? x * 0.4 : x * 360;
        return x;
      }
      if (space[i] === "h" || i === 2 && space[space.length - 1] === "h") {
        if (baseHues[x] !== void 0)
          return baseHues[x];
        if (x.endsWith("deg"))
          return parseFloat(x);
        if (x.endsWith("turn"))
          return parseFloat(x) * 360;
        if (x.endsWith("grad"))
          return parseFloat(x) * 360 / 400;
        if (x.endsWith("rad"))
          return parseFloat(x) * 180 / Math.PI;
      }
      if (x === "none")
        return 0;
      return parseFloat(x);
    });
    alpha = parts.length > dims ? parts.pop() : 1;
  } else if (/[0-9](?:\s|\/|,)/.test(cstr)) {
    parts = cstr.match(/([0-9]+)/g).map(function(value) {
      return parseFloat(value);
    });
    space = cstr.match(/([a-z])/ig)?.join("")?.toLowerCase() || "rgb";
  }
  return {
    space,
    values: parts,
    alpha
  };
}
var import_color_name, color_parse_default, baseHues;
var init_color_parse = __esm({
  "node_modules/color-parse/index.js"() {
    import_color_name = __toESM(require_color_name(), 1);
    color_parse_default = parse;
    baseHues = {
      red: 0,
      orange: 60,
      yellow: 120,
      green: 180,
      blue: 240,
      purple: 300
    };
  }
});

// node_modules/color-space/hsl.js
var hsl_default;
var init_hsl = __esm({
  "node_modules/color-space/hsl.js"() {
    init_rgb();
    hsl_default = {
      name: "hsl",
      min: [0, 0, 0],
      max: [360, 100, 100],
      channel: ["hue", "saturation", "lightness"],
      alias: ["HSL"],
      rgb: function(hsl) {
        var h = hsl[0] / 360, s = hsl[1] / 100, l = hsl[2] / 100, t1, t2, t3, rgb, val, i = 0;
        if (s === 0)
          return val = l * 255, [val, val, val];
        t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        t1 = 2 * l - t2;
        rgb = [0, 0, 0];
        for (; i < 3; ) {
          t3 = h + 1 / 3 * -(i - 1);
          t3 < 0 ? t3++ : t3 > 1 && t3--;
          val = 6 * t3 < 1 ? t1 + (t2 - t1) * 6 * t3 : 2 * t3 < 1 ? t2 : 3 * t3 < 2 ? t1 + (t2 - t1) * (2 / 3 - t3) * 6 : t1;
          rgb[i++] = val * 255;
        }
        return rgb;
      }
    };
    rgb_default.hsl = function(rgb) {
      var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), delta = max - min, h, s, l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
  }
});

// node_modules/color-rgba/index.js
function rgba(color) {
  if (Array.isArray(color) && color.raw)
    color = String.raw(...arguments);
  if (color instanceof Number)
    color = +color;
  var values, i, l;
  var parsed = color_parse_default(color);
  if (!parsed.space)
    return [];
  const min = parsed.space[0] === "h" ? hsl_default.min : rgb_default.min;
  const max = parsed.space[0] === "h" ? hsl_default.max : rgb_default.max;
  values = Array(3);
  values[0] = Math.min(Math.max(parsed.values[0], min[0]), max[0]);
  values[1] = Math.min(Math.max(parsed.values[1], min[1]), max[1]);
  values[2] = Math.min(Math.max(parsed.values[2], min[2]), max[2]);
  if (parsed.space[0] === "h") {
    values = hsl_default.rgb(values);
  }
  values.push(Math.min(Math.max(parsed.alpha, 0), 1));
  return values;
}
var init_color_rgba = __esm({
  "node_modules/color-rgba/index.js"() {
    init_color_parse();
    init_rgb();
    init_hsl();
  }
});

// node_modules/ol/math.js
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx !== 0 || dy !== 0) {
    const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }
  return squaredDistance(x, y, x1, y1);
}
function squaredDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return dx * dx + dy * dy;
}
function solveLinearSystem(mat) {
  const n = mat.length;
  for (let i = 0; i < n; i++) {
    let maxRow = i;
    let maxEl = Math.abs(mat[i][i]);
    for (let r = i + 1; r < n; r++) {
      const absValue = Math.abs(mat[r][i]);
      if (absValue > maxEl) {
        maxEl = absValue;
        maxRow = r;
      }
    }
    if (maxEl === 0) {
      return null;
    }
    const tmp = mat[maxRow];
    mat[maxRow] = mat[i];
    mat[i] = tmp;
    for (let j = i + 1; j < n; j++) {
      const coef = -mat[j][i] / mat[i][i];
      for (let k = i; k < n + 1; k++) {
        if (i == k) {
          mat[j][k] = 0;
        } else {
          mat[j][k] += coef * mat[i][k];
        }
      }
    }
  }
  const x = new Array(n);
  for (let l = n - 1; l >= 0; l--) {
    x[l] = mat[l][n] / mat[l][l];
    for (let m = l - 1; m >= 0; m--) {
      mat[m][n] -= mat[m][l] * x[l];
    }
  }
  return x;
}
function toRadians(angleInDegrees) {
  return angleInDegrees * Math.PI / 180;
}
function modulo(a, b) {
  const r = a % b;
  return r * b < 0 ? r + b : r;
}
function lerp(a, b, x) {
  return a + x * (b - a);
}
function toFixed(n, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(n * factor) / factor;
}
function floor(n, decimals) {
  return Math.floor(toFixed(n, decimals));
}
function ceil(n, decimals) {
  return Math.ceil(toFixed(n, decimals));
}
var init_math = __esm({
  "node_modules/ol/math.js"() {
  }
});

// node_modules/ol/color.js
function asString(color) {
  if (typeof color === "string") {
    return color;
  }
  return toString2(color);
}
function withAlpha(color) {
  if (color.length === 4) {
    return color;
  }
  const output = color.slice();
  output[3] = 1;
  return output;
}
function rgbaToLcha(color) {
  const output = xyz_default.lchuv(rgb_default.xyz(color));
  output[3] = color[3];
  return output;
}
function lchaToRgba(color) {
  const output = xyz_default.rgb(lchuv_default.xyz(color));
  output[3] = color[3];
  return output;
}
function fromString(s) {
  if (cache.hasOwnProperty(s)) {
    return cache[s];
  }
  if (cacheSize >= MAX_CACHE_SIZE) {
    let i = 0;
    for (const key in cache) {
      if ((i++ & 3) === 0) {
        delete cache[key];
        --cacheSize;
      }
    }
  }
  const color = rgba(s);
  if (color.length !== 4) {
    throw new Error('Failed to parse "' + s + '" as color');
  }
  for (const c of color) {
    if (isNaN(c)) {
      throw new Error('Failed to parse "' + s + '" as color');
    }
  }
  normalize(color);
  cache[s] = color;
  ++cacheSize;
  return color;
}
function asArray(color) {
  if (Array.isArray(color)) {
    return color;
  }
  return fromString(color);
}
function normalize(color) {
  color[0] = clamp(color[0] + 0.5 | 0, 0, 255);
  color[1] = clamp(color[1] + 0.5 | 0, 0, 255);
  color[2] = clamp(color[2] + 0.5 | 0, 0, 255);
  color[3] = clamp(color[3], 0, 1);
  return color;
}
function toString2(color) {
  let r = color[0];
  if (r != (r | 0)) {
    r = r + 0.5 | 0;
  }
  let g = color[1];
  if (g != (g | 0)) {
    g = g + 0.5 | 0;
  }
  let b = color[2];
  if (b != (b | 0)) {
    b = b + 0.5 | 0;
  }
  const a = color[3] === void 0 ? 1 : Math.round(color[3] * 100) / 100;
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
function isStringColor(s) {
  try {
    fromString(s);
    return true;
  } catch (_) {
    return false;
  }
}
var MAX_CACHE_SIZE, cache, cacheSize;
var init_color = __esm({
  "node_modules/ol/color.js"() {
    init_lchuv();
    init_color_rgba();
    init_rgb();
    init_xyz();
    init_math();
    MAX_CACHE_SIZE = 1024;
    cache = {};
    cacheSize = 0;
  }
});

// node_modules/ol/style/IconImageCache.js
function getKey(src, crossOrigin, color) {
  const colorString = color ? asString(color) : "null";
  return crossOrigin + ":" + src + ":" + colorString;
}
var IconImageCache, shared;
var init_IconImageCache = __esm({
  "node_modules/ol/style/IconImageCache.js"() {
    init_color();
    IconImageCache = class {
      constructor() {
        this.cache_ = {};
        this.cacheSize_ = 0;
        this.maxCacheSize_ = 32;
      }
      /**
       * FIXME empty description for jsdoc
       */
      clear() {
        this.cache_ = {};
        this.cacheSize_ = 0;
      }
      /**
       * @return {boolean} Can expire cache.
       */
      canExpireCache() {
        return this.cacheSize_ > this.maxCacheSize_;
      }
      /**
       * FIXME empty description for jsdoc
       */
      expire() {
        if (this.canExpireCache()) {
          let i = 0;
          for (const key in this.cache_) {
            const iconImage = this.cache_[key];
            if ((i++ & 3) === 0 && !iconImage.hasListener()) {
              delete this.cache_[key];
              --this.cacheSize_;
            }
          }
        }
      }
      /**
       * @param {string} src Src.
       * @param {?string} crossOrigin Cross origin.
       * @param {import("../color.js").Color} color Color.
       * @return {import("./IconImage.js").default} Icon image.
       */
      get(src, crossOrigin, color) {
        const key = getKey(src, crossOrigin, color);
        return key in this.cache_ ? this.cache_[key] : null;
      }
      /**
       * @param {string} src Src.
       * @param {?string} crossOrigin Cross origin.
       * @param {import("../color.js").Color} color Color.
       * @param {import("./IconImage.js").default} iconImage Icon image.
       */
      set(src, crossOrigin, color, iconImage) {
        const key = getKey(src, crossOrigin, color);
        this.cache_[key] = iconImage;
        ++this.cacheSize_;
      }
      /**
       * Set the cache size of the icon cache. Default is `32`. Change this value when
       * your map uses more than 32 different icon images and you are not caching icon
       * styles on the application level.
       * @param {number} maxCacheSize Cache max size.
       * @api
       */
      setSize(maxCacheSize) {
        this.maxCacheSize_ = maxCacheSize;
        this.expire();
      }
    };
    shared = new IconImageCache();
  }
});

// node_modules/ol/layer/Property.js
var Property_default;
var init_Property = __esm({
  "node_modules/ol/layer/Property.js"() {
    Property_default = {
      OPACITY: "opacity",
      VISIBLE: "visible",
      EXTENT: "extent",
      Z_INDEX: "zIndex",
      MAX_RESOLUTION: "maxResolution",
      MIN_RESOLUTION: "minResolution",
      MAX_ZOOM: "maxZoom",
      MIN_ZOOM: "minZoom",
      SOURCE: "source",
      MAP: "map"
    };
  }
});

// node_modules/ol/layer/Base.js
var BaseLayer, Base_default;
var init_Base = __esm({
  "node_modules/ol/layer/Base.js"() {
    init_Object();
    init_Property();
    init_util();
    init_asserts();
    init_math();
    BaseLayer = class extends Object_default {
      /**
       * @param {Options} options Layer options.
       */
      constructor(options) {
        super();
        this.on;
        this.once;
        this.un;
        this.background_ = options.background;
        const properties = Object.assign({}, options);
        if (typeof options.properties === "object") {
          delete properties.properties;
          Object.assign(properties, options.properties);
        }
        properties[Property_default.OPACITY] = options.opacity !== void 0 ? options.opacity : 1;
        assert(
          typeof properties[Property_default.OPACITY] === "number",
          "Layer opacity must be a number"
        );
        properties[Property_default.VISIBLE] = options.visible !== void 0 ? options.visible : true;
        properties[Property_default.Z_INDEX] = options.zIndex;
        properties[Property_default.MAX_RESOLUTION] = options.maxResolution !== void 0 ? options.maxResolution : Infinity;
        properties[Property_default.MIN_RESOLUTION] = options.minResolution !== void 0 ? options.minResolution : 0;
        properties[Property_default.MIN_ZOOM] = options.minZoom !== void 0 ? options.minZoom : -Infinity;
        properties[Property_default.MAX_ZOOM] = options.maxZoom !== void 0 ? options.maxZoom : Infinity;
        this.className_ = properties.className !== void 0 ? properties.className : "ol-layer";
        delete properties.className;
        this.setProperties(properties);
        this.state_ = null;
      }
      /**
       * Get the background for this layer.
       * @return {BackgroundColor|false} Layer background.
       */
      getBackground() {
        return this.background_;
      }
      /**
       * @return {string} CSS class name.
       */
      getClassName() {
        return this.className_;
      }
      /**
       * This method is not meant to be called by layers or layer renderers because the state
       * is incorrect if the layer is included in a layer group.
       *
       * @param {boolean} [managed] Layer is managed.
       * @return {import("./Layer.js").State} Layer state.
       */
      getLayerState(managed) {
        const state = this.state_ || /** @type {?} */
        {
          layer: this,
          managed: managed === void 0 ? true : managed
        };
        const zIndex = this.getZIndex();
        state.opacity = clamp(Math.round(this.getOpacity() * 100) / 100, 0, 1);
        state.visible = this.getVisible();
        state.extent = this.getExtent();
        state.zIndex = zIndex === void 0 && !state.managed ? Infinity : zIndex;
        state.maxResolution = this.getMaxResolution();
        state.minResolution = Math.max(this.getMinResolution(), 0);
        state.minZoom = this.getMinZoom();
        state.maxZoom = this.getMaxZoom();
        this.state_ = state;
        return state;
      }
      /**
       * @abstract
       * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
       *     modified in place).
       * @return {Array<import("./Layer.js").default>} Array of layers.
       */
      getLayersArray(array) {
        return abstract();
      }
      /**
       * @abstract
       * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
       *     states (to be modified in place).
       * @return {Array<import("./Layer.js").State>} List of layer states.
       */
      getLayerStatesArray(states) {
        return abstract();
      }
      /**
       * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
       * will be visible regardless of extent.
       * @return {import("../extent.js").Extent|undefined} The layer extent.
       * @observable
       * @api
       */
      getExtent() {
        return (
          /** @type {import("../extent.js").Extent|undefined} */
          this.get(Property_default.EXTENT)
        );
      }
      /**
       * Return the maximum resolution of the layer. Returns Infinity if
       * the layer has no maximum resolution set.
       * @return {number} The maximum resolution of the layer.
       * @observable
       * @api
       */
      getMaxResolution() {
        return (
          /** @type {number} */
          this.get(Property_default.MAX_RESOLUTION)
        );
      }
      /**
       * Return the minimum resolution of the layer. Returns 0 if
       * the layer has no minimum resolution set.
       * @return {number} The minimum resolution of the layer.
       * @observable
       * @api
       */
      getMinResolution() {
        return (
          /** @type {number} */
          this.get(Property_default.MIN_RESOLUTION)
        );
      }
      /**
       * Return the minimum zoom level of the layer. Returns -Infinity if
       * the layer has no minimum zoom set.
       * @return {number} The minimum zoom level of the layer.
       * @observable
       * @api
       */
      getMinZoom() {
        return (
          /** @type {number} */
          this.get(Property_default.MIN_ZOOM)
        );
      }
      /**
       * Return the maximum zoom level of the layer. Returns Infinity if
       * the layer has no maximum zoom set.
       * @return {number} The maximum zoom level of the layer.
       * @observable
       * @api
       */
      getMaxZoom() {
        return (
          /** @type {number} */
          this.get(Property_default.MAX_ZOOM)
        );
      }
      /**
       * Return the opacity of the layer (between 0 and 1).
       * @return {number} The opacity of the layer.
       * @observable
       * @api
       */
      getOpacity() {
        return (
          /** @type {number} */
          this.get(Property_default.OPACITY)
        );
      }
      /**
       * @abstract
       * @return {import("../source/Source.js").State} Source state.
       */
      getSourceState() {
        return abstract();
      }
      /**
       * Return the value of this layer's `visible` property. To find out whether the layer
       * is visible on a map, use `isVisible()` instead.
       * @return {boolean} The value of the `visible` property of the layer.
       * @observable
       * @api
       */
      getVisible() {
        return (
          /** @type {boolean} */
          this.get(Property_default.VISIBLE)
        );
      }
      /**
       * Return the Z-index of the layer, which is used to order layers before
       * rendering. Returns undefined if the layer is unmanaged.
       * @return {number|undefined} The Z-index of the layer.
       * @observable
       * @api
       */
      getZIndex() {
        return (
          /** @type {number|undefined} */
          this.get(Property_default.Z_INDEX)
        );
      }
      /**
       * Sets the background color.
       * @param {BackgroundColor} [background] Background color.
       */
      setBackground(background) {
        this.background_ = background;
        this.changed();
      }
      /**
       * Set the extent at which the layer is visible.  If `undefined`, the layer
       * will be visible at all extents.
       * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
       * @observable
       * @api
       */
      setExtent(extent) {
        this.set(Property_default.EXTENT, extent);
      }
      /**
       * Set the maximum resolution at which the layer is visible.
       * @param {number} maxResolution The maximum resolution of the layer.
       * @observable
       * @api
       */
      setMaxResolution(maxResolution) {
        this.set(Property_default.MAX_RESOLUTION, maxResolution);
      }
      /**
       * Set the minimum resolution at which the layer is visible.
       * @param {number} minResolution The minimum resolution of the layer.
       * @observable
       * @api
       */
      setMinResolution(minResolution) {
        this.set(Property_default.MIN_RESOLUTION, minResolution);
      }
      /**
       * Set the maximum zoom (exclusive) at which the layer is visible.
       * Note that the zoom levels for layer visibility are based on the
       * view zoom level, which may be different from a tile source zoom level.
       * @param {number} maxZoom The maximum zoom of the layer.
       * @observable
       * @api
       */
      setMaxZoom(maxZoom) {
        this.set(Property_default.MAX_ZOOM, maxZoom);
      }
      /**
       * Set the minimum zoom (inclusive) at which the layer is visible.
       * Note that the zoom levels for layer visibility are based on the
       * view zoom level, which may be different from a tile source zoom level.
       * @param {number} minZoom The minimum zoom of the layer.
       * @observable
       * @api
       */
      setMinZoom(minZoom) {
        this.set(Property_default.MIN_ZOOM, minZoom);
      }
      /**
       * Set the opacity of the layer, allowed values range from 0 to 1.
       * @param {number} opacity The opacity of the layer.
       * @observable
       * @api
       */
      setOpacity(opacity) {
        assert(typeof opacity === "number", "Layer opacity must be a number");
        this.set(Property_default.OPACITY, opacity);
      }
      /**
       * Set the visibility of the layer (`true` or `false`).
       * @param {boolean} visible The visibility of the layer.
       * @observable
       * @api
       */
      setVisible(visible) {
        this.set(Property_default.VISIBLE, visible);
      }
      /**
       * Set Z-index of the layer, which is used to order layers before rendering.
       * The default Z-index is 0.
       * @param {number} zindex The z-index of the layer.
       * @observable
       * @api
       */
      setZIndex(zindex) {
        this.set(Property_default.Z_INDEX, zindex);
      }
      /**
       * Clean up.
       */
      disposeInternal() {
        if (this.state_) {
          this.state_.layer = null;
          this.state_ = null;
        }
        super.disposeInternal();
      }
    };
    Base_default = BaseLayer;
  }
});

// node_modules/ol/render/EventType.js
var EventType_default2;
var init_EventType2 = __esm({
  "node_modules/ol/render/EventType.js"() {
    EventType_default2 = {
      /**
       * Triggered before a layer is rendered.
       * @event module:ol/render/Event~RenderEvent#prerender
       * @api
       */
      PRERENDER: "prerender",
      /**
       * Triggered after a layer is rendered.
       * @event module:ol/render/Event~RenderEvent#postrender
       * @api
       */
      POSTRENDER: "postrender",
      /**
       * Triggered before layers are composed.  When dispatched by the map, the event object will not have
       * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
       * WebGL layers currently dispatch this event.
       * @event module:ol/render/Event~RenderEvent#precompose
       * @api
       */
      PRECOMPOSE: "precompose",
      /**
       * Triggered after layers are composed.  When dispatched by the map, the event object will not have
       * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
       * WebGL layers currently dispatch this event.
       * @event module:ol/render/Event~RenderEvent#postcompose
       * @api
       */
      POSTCOMPOSE: "postcompose",
      /**
       * Triggered when rendering is complete, i.e. all sources and tiles have
       * finished loading for the current viewport, and all tiles are faded in.
       * The event object will not have a `context` set.
       * @event module:ol/render/Event~RenderEvent#rendercomplete
       * @api
       */
      RENDERCOMPLETE: "rendercomplete"
    };
  }
});

// node_modules/ol/ViewHint.js
var ViewHint_default;
var init_ViewHint = __esm({
  "node_modules/ol/ViewHint.js"() {
    ViewHint_default = {
      ANIMATING: 0,
      INTERACTING: 1
    };
  }
});

// node_modules/ol/ViewProperty.js
var ViewProperty_default;
var init_ViewProperty = __esm({
  "node_modules/ol/ViewProperty.js"() {
    ViewProperty_default = {
      CENTER: "center",
      RESOLUTION: "resolution",
      ROTATION: "rotation"
    };
  }
});

// node_modules/ol/tilegrid/common.js
var DEFAULT_MAX_ZOOM, DEFAULT_TILE_SIZE;
var init_common = __esm({
  "node_modules/ol/tilegrid/common.js"() {
    DEFAULT_MAX_ZOOM = 42;
    DEFAULT_TILE_SIZE = 256;
  }
});

// node_modules/ol/proj/Units.js
var METERS_PER_UNIT;
var init_Units = __esm({
  "node_modules/ol/proj/Units.js"() {
    METERS_PER_UNIT = {
      // use the radius of the Normal sphere
      "radians": 6370997 / (2 * Math.PI),
      "degrees": 2 * Math.PI * 6370997 / 360,
      "ft": 0.3048,
      "m": 1,
      "us-ft": 1200 / 3937
    };
  }
});

// node_modules/ol/proj/Projection.js
var Projection, Projection_default;
var init_Projection = __esm({
  "node_modules/ol/proj/Projection.js"() {
    init_Units();
    Projection = class {
      /**
       * @param {Options} options Projection options.
       */
      constructor(options) {
        this.code_ = options.code;
        this.units_ = /** @type {import("./Units.js").Units} */
        options.units;
        this.extent_ = options.extent !== void 0 ? options.extent : null;
        this.worldExtent_ = options.worldExtent !== void 0 ? options.worldExtent : null;
        this.axisOrientation_ = options.axisOrientation !== void 0 ? options.axisOrientation : "enu";
        this.global_ = options.global !== void 0 ? options.global : false;
        this.canWrapX_ = !!(this.global_ && this.extent_);
        this.getPointResolutionFunc_ = options.getPointResolution;
        this.defaultTileGrid_ = null;
        this.metersPerUnit_ = options.metersPerUnit;
      }
      /**
       * @return {boolean} The projection is suitable for wrapping the x-axis
       */
      canWrapX() {
        return this.canWrapX_;
      }
      /**
       * Get the code for this projection, e.g. 'EPSG:4326'.
       * @return {string} Code.
       * @api
       */
      getCode() {
        return this.code_;
      }
      /**
       * Get the validity extent for this projection.
       * @return {import("../extent.js").Extent} Extent.
       * @api
       */
      getExtent() {
        return this.extent_;
      }
      /**
       * Get the units of this projection.
       * @return {import("./Units.js").Units} Units.
       * @api
       */
      getUnits() {
        return this.units_;
      }
      /**
       * Get the amount of meters per unit of this projection.  If the projection is
       * not configured with `metersPerUnit` or a units identifier, the return is
       * `undefined`.
       * @return {number|undefined} Meters.
       * @api
       */
      getMetersPerUnit() {
        return this.metersPerUnit_ || METERS_PER_UNIT[this.units_];
      }
      /**
       * Get the world extent for this projection.
       * @return {import("../extent.js").Extent} Extent.
       * @api
       */
      getWorldExtent() {
        return this.worldExtent_;
      }
      /**
       * Get the axis orientation of this projection.
       * Example values are:
       * enu - the default easting, northing, elevation.
       * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
       *     or south orientated transverse mercator.
       * wnu - westing, northing, up - some planetary coordinate systems have
       *     "west positive" coordinate systems
       * @return {string} Axis orientation.
       * @api
       */
      getAxisOrientation() {
        return this.axisOrientation_;
      }
      /**
       * Is this projection a global projection which spans the whole world?
       * @return {boolean} Whether the projection is global.
       * @api
       */
      isGlobal() {
        return this.global_;
      }
      /**
       * Set if the projection is a global projection which spans the whole world
       * @param {boolean} global Whether the projection is global.
       * @api
       */
      setGlobal(global) {
        this.global_ = global;
        this.canWrapX_ = !!(global && this.extent_);
      }
      /**
       * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
       */
      getDefaultTileGrid() {
        return this.defaultTileGrid_;
      }
      /**
       * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
       */
      setDefaultTileGrid(tileGrid) {
        this.defaultTileGrid_ = tileGrid;
      }
      /**
       * Set the validity extent for this projection.
       * @param {import("../extent.js").Extent} extent Extent.
       * @api
       */
      setExtent(extent) {
        this.extent_ = extent;
        this.canWrapX_ = !!(this.global_ && extent);
      }
      /**
       * Set the world extent for this projection.
       * @param {import("../extent.js").Extent} worldExtent World extent
       *     [minlon, minlat, maxlon, maxlat].
       * @api
       */
      setWorldExtent(worldExtent) {
        this.worldExtent_ = worldExtent;
      }
      /**
       * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
       * for this projection.
       * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
       * @api
       */
      setGetPointResolution(func) {
        this.getPointResolutionFunc_ = func;
      }
      /**
       * Get the custom point resolution function for this projection (if set).
       * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
       * resolution function (if set).
       */
      getPointResolutionFunc() {
        return this.getPointResolutionFunc_;
      }
    };
    Projection_default = Projection;
  }
});

// node_modules/ol/proj/epsg3857.js
function fromEPSG4326(input, output, dimension) {
  const length = input.length;
  dimension = dimension > 1 ? dimension : 2;
  if (output === void 0) {
    if (dimension > 2) {
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (let i = 0; i < length; i += dimension) {
    output[i] = HALF_SIZE * input[i] / 180;
    let y = RADIUS * Math.log(Math.tan(Math.PI * (+input[i + 1] + 90) / 360));
    if (y > MAX_SAFE_Y) {
      y = MAX_SAFE_Y;
    } else if (y < -MAX_SAFE_Y) {
      y = -MAX_SAFE_Y;
    }
    output[i + 1] = y;
  }
  return output;
}
function toEPSG4326(input, output, dimension) {
  const length = input.length;
  dimension = dimension > 1 ? dimension : 2;
  if (output === void 0) {
    if (dimension > 2) {
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (let i = 0; i < length; i += dimension) {
    output[i] = 180 * input[i] / HALF_SIZE;
    output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / RADIUS)) / Math.PI - 90;
  }
  return output;
}
var RADIUS, HALF_SIZE, EXTENT, WORLD_EXTENT, MAX_SAFE_Y, EPSG3857Projection, PROJECTIONS;
var init_epsg3857 = __esm({
  "node_modules/ol/proj/epsg3857.js"() {
    init_Projection();
    RADIUS = 6378137;
    HALF_SIZE = Math.PI * RADIUS;
    EXTENT = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];
    WORLD_EXTENT = [-180, -85, 180, 85];
    MAX_SAFE_Y = RADIUS * Math.log(Math.tan(Math.PI / 2));
    EPSG3857Projection = class extends Projection_default {
      /**
       * @param {string} code Code.
       */
      constructor(code) {
        super({
          code,
          units: "m",
          extent: EXTENT,
          global: true,
          worldExtent: WORLD_EXTENT,
          getPointResolution: function(resolution, point) {
            return resolution / Math.cosh(point[1] / RADIUS);
          }
        });
      }
    };
    PROJECTIONS = [
      new EPSG3857Projection("EPSG:3857"),
      new EPSG3857Projection("EPSG:102100"),
      new EPSG3857Projection("EPSG:102113"),
      new EPSG3857Projection("EPSG:900913"),
      new EPSG3857Projection("http://www.opengis.net/def/crs/EPSG/0/3857"),
      new EPSG3857Projection("http://www.opengis.net/gml/srs/epsg.xml#3857")
    ];
  }
});

// node_modules/ol/proj/epsg4326.js
var RADIUS2, EXTENT2, METERS_PER_UNIT2, EPSG4326Projection, PROJECTIONS2;
var init_epsg4326 = __esm({
  "node_modules/ol/proj/epsg4326.js"() {
    init_Projection();
    RADIUS2 = 6378137;
    EXTENT2 = [-180, -90, 180, 90];
    METERS_PER_UNIT2 = Math.PI * RADIUS2 / 180;
    EPSG4326Projection = class extends Projection_default {
      /**
       * @param {string} code Code.
       * @param {string} [axisOrientation] Axis orientation.
       */
      constructor(code, axisOrientation) {
        super({
          code,
          units: "degrees",
          extent: EXTENT2,
          axisOrientation,
          global: true,
          metersPerUnit: METERS_PER_UNIT2,
          worldExtent: EXTENT2
        });
      }
    };
    PROJECTIONS2 = [
      new EPSG4326Projection("CRS:84"),
      new EPSG4326Projection("EPSG:4326", "neu"),
      new EPSG4326Projection("urn:ogc:def:crs:OGC:1.3:CRS84"),
      new EPSG4326Projection("urn:ogc:def:crs:OGC:2:84"),
      new EPSG4326Projection("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
      new EPSG4326Projection("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
      new EPSG4326Projection("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
    ];
  }
});

// node_modules/ol/proj/projections.js
function clear2() {
  cache2 = {};
}
function get(code) {
  return cache2[code] || cache2[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function add(code, projection) {
  cache2[code] = projection;
}
var cache2;
var init_projections = __esm({
  "node_modules/ol/proj/projections.js"() {
    cache2 = {};
  }
});

// node_modules/ol/proj/transforms.js
function clear3() {
  transforms = {};
}
function add2(source, destination, transformFn) {
  const sourceCode = source.getCode();
  const destinationCode = destination.getCode();
  if (!(sourceCode in transforms)) {
    transforms[sourceCode] = {};
  }
  transforms[sourceCode][destinationCode] = transformFn;
}
function get2(sourceCode, destinationCode) {
  let transform2;
  if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
    transform2 = transforms[sourceCode][destinationCode];
  }
  return transform2;
}
var transforms;
var init_transforms = __esm({
  "node_modules/ol/proj/transforms.js"() {
    transforms = {};
  }
});

// node_modules/ol/coordinate.js
function add3(coordinate, delta) {
  coordinate[0] += +delta[0];
  coordinate[1] += +delta[1];
  return coordinate;
}
function createStringXY(fractionDigits) {
  return (
    /**
     * @param {Coordinate} coordinate Coordinate.
     * @return {string} String XY.
     */
    function(coordinate) {
      return toStringXY(coordinate, fractionDigits);
    }
  );
}
function format(coordinate, template, fractionDigits) {
  if (coordinate) {
    return template.replace("{x}", coordinate[0].toFixed(fractionDigits)).replace("{y}", coordinate[1].toFixed(fractionDigits));
  }
  return "";
}
function equals3(coordinate1, coordinate2) {
  let equals4 = true;
  for (let i = coordinate1.length - 1; i >= 0; --i) {
    if (coordinate1[i] != coordinate2[i]) {
      equals4 = false;
      break;
    }
  }
  return equals4;
}
function rotate(coordinate, angle) {
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  const x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
  const y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
  coordinate[0] = x;
  coordinate[1] = y;
  return coordinate;
}
function scale(coordinate, scale4) {
  coordinate[0] *= scale4;
  coordinate[1] *= scale4;
  return coordinate;
}
function toStringXY(coordinate, fractionDigits) {
  return format(coordinate, "{x}, {y}", fractionDigits);
}
function wrapX2(coordinate, projection) {
  if (projection.canWrapX()) {
    const worldWidth = getWidth(projection.getExtent());
    const worldsAway = getWorldsAway(coordinate, projection, worldWidth);
    if (worldsAway) {
      coordinate[0] -= worldsAway * worldWidth;
    }
  }
  return coordinate;
}
function getWorldsAway(coordinate, projection, sourceExtentWidth) {
  const projectionExtent = projection.getExtent();
  let worldsAway = 0;
  if (projection.canWrapX() && (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])) {
    sourceExtentWidth = sourceExtentWidth || getWidth(projectionExtent);
    worldsAway = Math.floor(
      (coordinate[0] - projectionExtent[0]) / sourceExtentWidth
    );
  }
  return worldsAway;
}
var init_coordinate = __esm({
  "node_modules/ol/coordinate.js"() {
    init_extent();
  }
});

// node_modules/ol/sphere.js
function getDistance(c1, c2, radius) {
  radius = radius || DEFAULT_RADIUS;
  const lat1 = toRadians(c1[1]);
  const lat2 = toRadians(c2[1]);
  const deltaLatBy2 = (lat2 - lat1) / 2;
  const deltaLonBy2 = toRadians(c2[0] - c1[0]) / 2;
  const a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
  return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
var DEFAULT_RADIUS;
var init_sphere = __esm({
  "node_modules/ol/sphere.js"() {
    init_math();
    DEFAULT_RADIUS = 63710088e-1;
  }
});

// node_modules/ol/console.js
function warn(...args) {
  if (level > levels.warn) {
    return;
  }
  console.warn(...args);
}
var levels, level;
var init_console = __esm({
  "node_modules/ol/console.js"() {
    levels = {
      info: 1,
      warn: 2,
      error: 3,
      none: 4
    };
    level = levels.info;
  }
});

// node_modules/ol/proj.js
var proj_exports = {};
__export(proj_exports, {
  METERS_PER_UNIT: () => METERS_PER_UNIT,
  Projection: () => Projection_default,
  addCommon: () => addCommon,
  addCoordinateTransforms: () => addCoordinateTransforms,
  addEquivalentProjections: () => addEquivalentProjections,
  addEquivalentTransforms: () => addEquivalentTransforms,
  addProjection: () => addProjection,
  addProjections: () => addProjections,
  clearAllProjections: () => clearAllProjections,
  clearUserProjection: () => clearUserProjection,
  cloneTransform: () => cloneTransform,
  createProjection: () => createProjection,
  createSafeCoordinateTransform: () => createSafeCoordinateTransform,
  createTransformFromCoordinateTransform: () => createTransformFromCoordinateTransform,
  disableCoordinateWarning: () => disableCoordinateWarning,
  equivalent: () => equivalent,
  fromLonLat: () => fromLonLat,
  fromUserCoordinate: () => fromUserCoordinate,
  fromUserExtent: () => fromUserExtent,
  fromUserResolution: () => fromUserResolution,
  get: () => get3,
  getPointResolution: () => getPointResolution,
  getTransform: () => getTransform,
  getTransformFromProjections: () => getTransformFromProjections,
  getUserProjection: () => getUserProjection,
  identityTransform: () => identityTransform,
  setUserProjection: () => setUserProjection,
  toLonLat: () => toLonLat,
  toUserCoordinate: () => toUserCoordinate,
  toUserExtent: () => toUserExtent,
  toUserResolution: () => toUserResolution,
  transform: () => transform,
  transformExtent: () => transformExtent,
  transformWithProjections: () => transformWithProjections,
  useGeographic: () => useGeographic
});
function disableCoordinateWarning(disable2) {
  const hide = disable2 === void 0 ? true : disable2;
  showCoordinateWarning = !hide;
}
function cloneTransform(input, output) {
  if (output !== void 0) {
    for (let i = 0, ii = input.length; i < ii; ++i) {
      output[i] = input[i];
    }
    output = output;
  } else {
    output = input.slice();
  }
  return output;
}
function identityTransform(input, output) {
  if (output !== void 0 && input !== output) {
    for (let i = 0, ii = input.length; i < ii; ++i) {
      output[i] = input[i];
    }
    input = output;
  }
  return input;
}
function addProjection(projection) {
  add(projection.getCode(), projection);
  add2(projection, projection, cloneTransform);
}
function addProjections(projections) {
  projections.forEach(addProjection);
}
function get3(projectionLike) {
  return typeof projectionLike === "string" ? get(
    /** @type {string} */
    projectionLike
  ) : (
    /** @type {Projection} */
    projectionLike || null
  );
}
function getPointResolution(projection, resolution, point, units) {
  projection = get3(projection);
  let pointResolution;
  const getter = projection.getPointResolutionFunc();
  if (getter) {
    pointResolution = getter(resolution, point);
    if (units && units !== projection.getUnits()) {
      const metersPerUnit = projection.getMetersPerUnit();
      if (metersPerUnit) {
        pointResolution = pointResolution * metersPerUnit / METERS_PER_UNIT[units];
      }
    }
  } else {
    const projUnits = projection.getUnits();
    if (projUnits == "degrees" && !units || units == "degrees") {
      pointResolution = resolution;
    } else {
      const toEPSG43262 = getTransformFromProjections(
        projection,
        get3("EPSG:4326")
      );
      if (toEPSG43262 === identityTransform && projUnits !== "degrees") {
        pointResolution = resolution * projection.getMetersPerUnit();
      } else {
        let vertices = [
          point[0] - resolution / 2,
          point[1],
          point[0] + resolution / 2,
          point[1],
          point[0],
          point[1] - resolution / 2,
          point[0],
          point[1] + resolution / 2
        ];
        vertices = toEPSG43262(vertices, vertices, 2);
        const width = getDistance(vertices.slice(0, 2), vertices.slice(2, 4));
        const height = getDistance(vertices.slice(4, 6), vertices.slice(6, 8));
        pointResolution = (width + height) / 2;
      }
      const metersPerUnit = units ? METERS_PER_UNIT[units] : projection.getMetersPerUnit();
      if (metersPerUnit !== void 0) {
        pointResolution /= metersPerUnit;
      }
    }
  }
  return pointResolution;
}
function addEquivalentProjections(projections) {
  addProjections(projections);
  projections.forEach(function(source) {
    projections.forEach(function(destination) {
      if (source !== destination) {
        add2(source, destination, cloneTransform);
      }
    });
  });
}
function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
  projections1.forEach(function(projection1) {
    projections2.forEach(function(projection2) {
      add2(projection1, projection2, forwardTransform);
      add2(projection2, projection1, inverseTransform);
    });
  });
}
function clearAllProjections() {
  clear2();
  clear3();
}
function createProjection(projection, defaultCode) {
  if (!projection) {
    return get3(defaultCode);
  }
  if (typeof projection === "string") {
    return get3(projection);
  }
  return (
    /** @type {Projection} */
    projection
  );
}
function createTransformFromCoordinateTransform(coordTransform) {
  return (
    /**
     * @param {Array<number>} input Input.
     * @param {Array<number>} [output] Output.
     * @param {number} [dimension] Dimension.
     * @return {Array<number>} Output.
     */
    function(input, output, dimension) {
      const length = input.length;
      dimension = dimension !== void 0 ? dimension : 2;
      output = output !== void 0 ? output : new Array(length);
      for (let i = 0; i < length; i += dimension) {
        const point = coordTransform(input.slice(i, i + dimension));
        const pointLength = point.length;
        for (let j = 0, jj = dimension; j < jj; ++j) {
          output[i + j] = j >= pointLength ? input[i + j] : point[j];
        }
      }
      return output;
    }
  );
}
function addCoordinateTransforms(source, destination, forward, inverse) {
  const sourceProj = get3(source);
  const destProj = get3(destination);
  add2(
    sourceProj,
    destProj,
    createTransformFromCoordinateTransform(forward)
  );
  add2(
    destProj,
    sourceProj,
    createTransformFromCoordinateTransform(inverse)
  );
}
function fromLonLat(coordinate, projection) {
  disableCoordinateWarning();
  return transform(
    coordinate,
    "EPSG:4326",
    projection !== void 0 ? projection : "EPSG:3857"
  );
}
function toLonLat(coordinate, projection) {
  const lonLat = transform(
    coordinate,
    projection !== void 0 ? projection : "EPSG:3857",
    "EPSG:4326"
  );
  const lon = lonLat[0];
  if (lon < -180 || lon > 180) {
    lonLat[0] = modulo(lon + 180, 360) - 180;
  }
  return lonLat;
}
function equivalent(projection1, projection2) {
  if (projection1 === projection2) {
    return true;
  }
  const equalUnits = projection1.getUnits() === projection2.getUnits();
  if (projection1.getCode() === projection2.getCode()) {
    return equalUnits;
  }
  const transformFunc = getTransformFromProjections(projection1, projection2);
  return transformFunc === cloneTransform && equalUnits;
}
function getTransformFromProjections(sourceProjection, destinationProjection) {
  const sourceCode = sourceProjection.getCode();
  const destinationCode = destinationProjection.getCode();
  let transformFunc = get2(sourceCode, destinationCode);
  if (!transformFunc) {
    transformFunc = identityTransform;
  }
  return transformFunc;
}
function getTransform(source, destination) {
  const sourceProjection = get3(source);
  const destinationProjection = get3(destination);
  return getTransformFromProjections(sourceProjection, destinationProjection);
}
function transform(coordinate, source, destination) {
  const transformFunc = getTransform(source, destination);
  return transformFunc(coordinate, void 0, coordinate.length);
}
function transformExtent(extent, source, destination, stops) {
  const transformFunc = getTransform(source, destination);
  return applyTransform(extent, transformFunc, void 0, stops);
}
function transformWithProjections(point, sourceProjection, destinationProjection) {
  const transformFunc = getTransformFromProjections(
    sourceProjection,
    destinationProjection
  );
  return transformFunc(point);
}
function setUserProjection(projection) {
  userProjection = get3(projection);
}
function clearUserProjection() {
  userProjection = null;
}
function getUserProjection() {
  return userProjection;
}
function useGeographic() {
  setUserProjection("EPSG:4326");
}
function toUserCoordinate(coordinate, sourceProjection) {
  if (!userProjection) {
    return coordinate;
  }
  return transform(coordinate, sourceProjection, userProjection);
}
function fromUserCoordinate(coordinate, destProjection) {
  if (!userProjection) {
    if (showCoordinateWarning && !equals3(coordinate, [0, 0]) && coordinate[0] >= -180 && coordinate[0] <= 180 && coordinate[1] >= -90 && coordinate[1] <= 90) {
      showCoordinateWarning = false;
      warn(
        "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
      );
    }
    return coordinate;
  }
  return transform(coordinate, userProjection, destProjection);
}
function toUserExtent(extent, sourceProjection) {
  if (!userProjection) {
    return extent;
  }
  return transformExtent(extent, sourceProjection, userProjection);
}
function fromUserExtent(extent, destProjection) {
  if (!userProjection) {
    return extent;
  }
  return transformExtent(extent, userProjection, destProjection);
}
function toUserResolution(resolution, sourceProjection) {
  if (!userProjection) {
    return resolution;
  }
  const sourceMetersPerUnit = get3(sourceProjection).getMetersPerUnit();
  const userMetersPerUnit = userProjection.getMetersPerUnit();
  return sourceMetersPerUnit && userMetersPerUnit ? resolution * sourceMetersPerUnit / userMetersPerUnit : resolution;
}
function fromUserResolution(resolution, destProjection) {
  if (!userProjection) {
    return resolution;
  }
  const destMetersPerUnit = get3(destProjection).getMetersPerUnit();
  const userMetersPerUnit = userProjection.getMetersPerUnit();
  return destMetersPerUnit && userMetersPerUnit ? resolution * userMetersPerUnit / destMetersPerUnit : resolution;
}
function createSafeCoordinateTransform(sourceProj, destProj, transform2) {
  return function(coord) {
    let transformed, worldsAway;
    if (sourceProj.canWrapX()) {
      const sourceExtent = sourceProj.getExtent();
      const sourceExtentWidth = getWidth(sourceExtent);
      coord = coord.slice(0);
      worldsAway = getWorldsAway(coord, sourceProj, sourceExtentWidth);
      if (worldsAway) {
        coord[0] = coord[0] - worldsAway * sourceExtentWidth;
      }
      coord[0] = clamp(coord[0], sourceExtent[0], sourceExtent[2]);
      coord[1] = clamp(coord[1], sourceExtent[1], sourceExtent[3]);
      transformed = transform2(coord);
    } else {
      transformed = transform2(coord);
    }
    if (worldsAway && destProj.canWrapX()) {
      transformed[0] += worldsAway * getWidth(destProj.getExtent());
    }
    return transformed;
  };
}
function addCommon() {
  addEquivalentProjections(PROJECTIONS);
  addEquivalentProjections(PROJECTIONS2);
  addEquivalentTransforms(
    PROJECTIONS2,
    PROJECTIONS,
    fromEPSG4326,
    toEPSG4326
  );
}
var showCoordinateWarning, userProjection;
var init_proj = __esm({
  "node_modules/ol/proj.js"() {
    init_Projection();
    init_epsg3857();
    init_epsg4326();
    init_Units();
    init_projections();
    init_transforms();
    init_extent();
    init_math();
    init_coordinate();
    init_sphere();
    init_console();
    showCoordinateWarning = true;
    userProjection = null;
    addCommon();
  }
});

// node_modules/ol/centerconstraint.js
function createExtent(extent, onlyCenter, smooth) {
  return (
    /**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */
    function(center, resolution, size, isMoving, centerShift) {
      if (!center) {
        return void 0;
      }
      if (!resolution && !onlyCenter) {
        return center;
      }
      const viewWidth = onlyCenter ? 0 : size[0] * resolution;
      const viewHeight = onlyCenter ? 0 : size[1] * resolution;
      const shiftX = centerShift ? centerShift[0] : 0;
      const shiftY = centerShift ? centerShift[1] : 0;
      let minX = extent[0] + viewWidth / 2 + shiftX;
      let maxX = extent[2] - viewWidth / 2 + shiftX;
      let minY = extent[1] + viewHeight / 2 + shiftY;
      let maxY = extent[3] - viewHeight / 2 + shiftY;
      if (minX > maxX) {
        minX = (maxX + minX) / 2;
        maxX = minX;
      }
      if (minY > maxY) {
        minY = (maxY + minY) / 2;
        maxY = minY;
      }
      let x = clamp(center[0], minX, maxX);
      let y = clamp(center[1], minY, maxY);
      if (isMoving && smooth && resolution) {
        const ratio = 30 * resolution;
        x += -ratio * Math.log(1 + Math.max(0, minX - center[0]) / ratio) + ratio * Math.log(1 + Math.max(0, center[0] - maxX) / ratio);
        y += -ratio * Math.log(1 + Math.max(0, minY - center[1]) / ratio) + ratio * Math.log(1 + Math.max(0, center[1] - maxY) / ratio);
      }
      return [x, y];
    }
  );
}
function none(center) {
  return center;
}
var init_centerconstraint = __esm({
  "node_modules/ol/centerconstraint.js"() {
    init_math();
  }
});

// node_modules/ol/resolutionconstraint.js
function getViewportClampedResolution(resolution, maxExtent, viewportSize, showFullExtent) {
  const xResolution = getWidth(maxExtent) / viewportSize[0];
  const yResolution = getHeight(maxExtent) / viewportSize[1];
  if (showFullExtent) {
    return Math.min(resolution, Math.max(xResolution, yResolution));
  }
  return Math.min(resolution, Math.min(xResolution, yResolution));
}
function getSmoothClampedResolution(resolution, maxResolution, minResolution) {
  let result = Math.min(resolution, maxResolution);
  const ratio = 50;
  result *= Math.log(1 + ratio * Math.max(0, resolution / maxResolution - 1)) / ratio + 1;
  if (minResolution) {
    result = Math.max(result, minResolution);
    result /= Math.log(1 + ratio * Math.max(0, minResolution / resolution - 1)) / ratio + 1;
  }
  return clamp(result, minResolution / 2, maxResolution * 2);
}
function createSnapToResolutions(resolutions, smooth, maxExtent, showFullExtent) {
  smooth = smooth !== void 0 ? smooth : true;
  return (
    /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function(resolution, direction, size, isMoving) {
      if (resolution !== void 0) {
        const maxResolution = resolutions[0];
        const minResolution = resolutions[resolutions.length - 1];
        const cappedMaxRes = maxExtent ? getViewportClampedResolution(
          maxResolution,
          maxExtent,
          size,
          showFullExtent
        ) : maxResolution;
        if (isMoving) {
          if (!smooth) {
            return clamp(resolution, minResolution, cappedMaxRes);
          }
          return getSmoothClampedResolution(
            resolution,
            cappedMaxRes,
            minResolution
          );
        }
        const capped = Math.min(cappedMaxRes, resolution);
        const z = Math.floor(linearFindNearest(resolutions, capped, direction));
        if (resolutions[z] > cappedMaxRes && z < resolutions.length - 1) {
          return resolutions[z + 1];
        }
        return resolutions[z];
      }
      return void 0;
    }
  );
}
function createSnapToPower(power, maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
  smooth = smooth !== void 0 ? smooth : true;
  minResolution = minResolution !== void 0 ? minResolution : 0;
  return (
    /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function(resolution, direction, size, isMoving) {
      if (resolution !== void 0) {
        const cappedMaxRes = maxExtent ? getViewportClampedResolution(
          maxResolution,
          maxExtent,
          size,
          showFullExtent
        ) : maxResolution;
        if (isMoving) {
          if (!smooth) {
            return clamp(resolution, minResolution, cappedMaxRes);
          }
          return getSmoothClampedResolution(
            resolution,
            cappedMaxRes,
            minResolution
          );
        }
        const tolerance = 1e-9;
        const minZoomLevel = Math.ceil(
          Math.log(maxResolution / cappedMaxRes) / Math.log(power) - tolerance
        );
        const offset = -direction * (0.5 - tolerance) + 0.5;
        const capped = Math.min(cappedMaxRes, resolution);
        const cappedZoomLevel = Math.floor(
          Math.log(maxResolution / capped) / Math.log(power) + offset
        );
        const zoomLevel = Math.max(minZoomLevel, cappedZoomLevel);
        const newResolution = maxResolution / Math.pow(power, zoomLevel);
        return clamp(newResolution, minResolution, cappedMaxRes);
      }
      return void 0;
    }
  );
}
function createMinMaxResolution(maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
  smooth = smooth !== void 0 ? smooth : true;
  return (
    /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function(resolution, direction, size, isMoving) {
      if (resolution !== void 0) {
        const cappedMaxRes = maxExtent ? getViewportClampedResolution(
          maxResolution,
          maxExtent,
          size,
          showFullExtent
        ) : maxResolution;
        if (!smooth || !isMoving) {
          return clamp(resolution, minResolution, cappedMaxRes);
        }
        return getSmoothClampedResolution(
          resolution,
          cappedMaxRes,
          minResolution
        );
      }
      return void 0;
    }
  );
}
var init_resolutionconstraint = __esm({
  "node_modules/ol/resolutionconstraint.js"() {
    init_math();
    init_extent();
    init_array();
  }
});

// node_modules/ol/rotationconstraint.js
function disable(rotation) {
  if (rotation !== void 0) {
    return 0;
  }
  return void 0;
}
function none2(rotation) {
  if (rotation !== void 0) {
    return rotation;
  }
  return void 0;
}
function createSnapToN(n) {
  const theta = 2 * Math.PI / n;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(rotation, isMoving) {
      if (isMoving) {
        return rotation;
      }
      if (rotation !== void 0) {
        rotation = Math.floor(rotation / theta + 0.5) * theta;
        return rotation;
      }
      return void 0;
    }
  );
}
function createSnapToZero(tolerance) {
  const t = tolerance === void 0 ? toRadians(5) : tolerance;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(rotation, isMoving) {
      if (isMoving || rotation === void 0) {
        return rotation;
      }
      if (Math.abs(rotation) <= t) {
        return 0;
      }
      return rotation;
    }
  );
}
var init_rotationconstraint = __esm({
  "node_modules/ol/rotationconstraint.js"() {
    init_math();
  }
});

// node_modules/ol/easing.js
function easeIn(t) {
  return Math.pow(t, 3);
}
function easeOut(t) {
  return 1 - easeIn(1 - t);
}
function inAndOut(t) {
  return 3 * t * t - 2 * t * t * t;
}
function linear(t) {
  return t;
}
var init_easing = __esm({
  "node_modules/ol/easing.js"() {
  }
});

// node_modules/ol/geom/flat/transform.js
function transform2D(flatCoordinates, offset, end, stride, transform2, dest) {
  dest = dest ? dest : [];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    const x = flatCoordinates[j];
    const y = flatCoordinates[j + 1];
    dest[i++] = transform2[0] * x + transform2[2] * y + transform2[4];
    dest[i++] = transform2[1] * x + transform2[3] * y + transform2[5];
  }
  if (dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
}
function rotate2(flatCoordinates, offset, end, stride, angle, anchor, dest) {
  dest = dest ? dest : [];
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const anchorX = anchor[0];
  const anchorY = anchor[1];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    const deltaX = flatCoordinates[j] - anchorX;
    const deltaY = flatCoordinates[j + 1] - anchorY;
    dest[i++] = anchorX + deltaX * cos - deltaY * sin;
    dest[i++] = anchorY + deltaX * sin + deltaY * cos;
    for (let k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
}
function scale2(flatCoordinates, offset, end, stride, sx, sy, anchor, dest) {
  dest = dest ? dest : [];
  const anchorX = anchor[0];
  const anchorY = anchor[1];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    const deltaX = flatCoordinates[j] - anchorX;
    const deltaY = flatCoordinates[j + 1] - anchorY;
    dest[i++] = anchorX + sx * deltaX;
    dest[i++] = anchorY + sy * deltaY;
    for (let k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
}
function translate(flatCoordinates, offset, end, stride, deltaX, deltaY, dest) {
  dest = dest ? dest : [];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    dest[i++] = flatCoordinates[j] + deltaX;
    dest[i++] = flatCoordinates[j + 1] + deltaY;
    for (let k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
}
var init_transform2 = __esm({
  "node_modules/ol/geom/flat/transform.js"() {
  }
});

// node_modules/ol/geom/Geometry.js
var tmpTransform, Geometry, Geometry_default;
var init_Geometry = __esm({
  "node_modules/ol/geom/Geometry.js"() {
    init_Object();
    init_util();
    init_transform();
    init_extent();
    init_proj();
    init_functions();
    init_transform2();
    tmpTransform = create();
    Geometry = class extends Object_default {
      constructor() {
        super();
        this.extent_ = createEmpty();
        this.extentRevision_ = -1;
        this.simplifiedGeometryMaxMinSquaredTolerance = 0;
        this.simplifiedGeometryRevision = 0;
        this.simplifyTransformedInternal = memoizeOne(
          (revision, squaredTolerance, transform2) => {
            if (!transform2) {
              return this.getSimplifiedGeometry(squaredTolerance);
            }
            const clone2 = this.clone();
            clone2.applyTransform(transform2);
            return clone2.getSimplifiedGeometry(squaredTolerance);
          }
        );
      }
      /**
       * Get a transformed and simplified version of the geometry.
       * @abstract
       * @param {number} squaredTolerance Squared tolerance.
       * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
       * @return {Geometry} Simplified geometry.
       */
      simplifyTransformed(squaredTolerance, transform2) {
        return this.simplifyTransformedInternal(
          this.getRevision(),
          squaredTolerance,
          transform2
        );
      }
      /**
       * Make a complete copy of the geometry.
       * @abstract
       * @return {!Geometry} Clone.
       */
      clone() {
        return abstract();
      }
      /**
       * @abstract
       * @param {number} x X.
       * @param {number} y Y.
       * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
       * @param {number} minSquaredDistance Minimum squared distance.
       * @return {number} Minimum squared distance.
       */
      closestPointXY(x, y, closestPoint, minSquaredDistance) {
        return abstract();
      }
      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @return {boolean} Contains (x, y).
       */
      containsXY(x, y) {
        const coord = this.getClosestPoint([x, y]);
        return coord[0] === x && coord[1] === y;
      }
      /**
       * Return the closest point of the geometry to the passed point as
       * {@link module:ol/coordinate~Coordinate coordinate}.
       * @param {import("../coordinate.js").Coordinate} point Point.
       * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
       * @return {import("../coordinate.js").Coordinate} Closest point.
       * @api
       */
      getClosestPoint(point, closestPoint) {
        closestPoint = closestPoint ? closestPoint : [NaN, NaN];
        this.closestPointXY(point[0], point[1], closestPoint, Infinity);
        return closestPoint;
      }
      /**
       * Returns true if this geometry includes the specified coordinate. If the
       * coordinate is on the boundary of the geometry, returns false.
       * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
       * @return {boolean} Contains coordinate.
       * @api
       */
      intersectsCoordinate(coordinate) {
        return this.containsXY(coordinate[0], coordinate[1]);
      }
      /**
       * @abstract
       * @param {import("../extent.js").Extent} extent Extent.
       * @protected
       * @return {import("../extent.js").Extent} extent Extent.
       */
      computeExtent(extent) {
        return abstract();
      }
      /**
       * Get the extent of the geometry.
       * @param {import("../extent.js").Extent} [extent] Extent.
       * @return {import("../extent.js").Extent} extent Extent.
       * @api
       */
      getExtent(extent) {
        if (this.extentRevision_ != this.getRevision()) {
          const extent2 = this.computeExtent(this.extent_);
          if (isNaN(extent2[0]) || isNaN(extent2[1])) {
            createOrUpdateEmpty(extent2);
          }
          this.extentRevision_ = this.getRevision();
        }
        return returnOrUpdate(this.extent_, extent);
      }
      /**
       * Rotate the geometry around a given coordinate. This modifies the geometry
       * coordinates in place.
       * @abstract
       * @param {number} angle Rotation angle in radians.
       * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
       * @api
       */
      rotate(angle, anchor) {
        abstract();
      }
      /**
       * Scale the geometry (with an optional origin).  This modifies the geometry
       * coordinates in place.
       * @abstract
       * @param {number} sx The scaling factor in the x-direction.
       * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
       * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
       *     of the geometry extent).
       * @api
       */
      scale(sx, sy, anchor) {
        abstract();
      }
      /**
       * Create a simplified version of this geometry.  For linestrings, this uses
       * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
       * algorithm.  For polygons, a quantization-based
       * simplification is used to preserve topology.
       * @param {number} tolerance The tolerance distance for simplification.
       * @return {Geometry} A new, simplified version of the original geometry.
       * @api
       */
      simplify(tolerance) {
        return this.getSimplifiedGeometry(tolerance * tolerance);
      }
      /**
       * Create a simplified version of this geometry using the Douglas Peucker
       * algorithm.
       * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
       * @abstract
       * @param {number} squaredTolerance Squared tolerance.
       * @return {Geometry} Simplified geometry.
       */
      getSimplifiedGeometry(squaredTolerance) {
        return abstract();
      }
      /**
       * Get the type of this geometry.
       * @abstract
       * @return {Type} Geometry type.
       */
      getType() {
        return abstract();
      }
      /**
       * Apply a transform function to the coordinates of the geometry.
       * The geometry is modified in place.
       * If you do not want the geometry modified in place, first `clone()` it and
       * then use this function on the clone.
       * @abstract
       * @param {import("../proj.js").TransformFunction} transformFn Transform function.
       * Called with a flat array of geometry coordinates.
       */
      applyTransform(transformFn) {
        abstract();
      }
      /**
       * Test if the geometry and the passed extent intersect.
       * @abstract
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {boolean} `true` if the geometry and the extent intersect.
       */
      intersectsExtent(extent) {
        return abstract();
      }
      /**
       * Translate the geometry.  This modifies the geometry coordinates in place.  If
       * instead you want a new geometry, first `clone()` this geometry.
       * @abstract
       * @param {number} deltaX Delta X.
       * @param {number} deltaY Delta Y.
       * @api
       */
      translate(deltaX, deltaY) {
        abstract();
      }
      /**
       * Transform each coordinate of the geometry from one coordinate reference
       * system to another. The geometry is modified in place.
       * For example, a line will be transformed to a line and a circle to a circle.
       * If you do not want the geometry modified in place, first `clone()` it and
       * then use this function on the clone.
       *
       * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
       *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
       * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
       *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
       * @return {Geometry} This geometry.  Note that original geometry is
       *     modified in place.
       * @api
       */
      transform(source, destination) {
        const sourceProj = get3(source);
        const transformFn = sourceProj.getUnits() == "tile-pixels" ? function(inCoordinates, outCoordinates, stride) {
          const pixelExtent = sourceProj.getExtent();
          const projectedExtent = sourceProj.getWorldExtent();
          const scale4 = getHeight(projectedExtent) / getHeight(pixelExtent);
          compose(
            tmpTransform,
            projectedExtent[0],
            projectedExtent[3],
            scale4,
            -scale4,
            0,
            0,
            0
          );
          transform2D(
            inCoordinates,
            0,
            inCoordinates.length,
            stride,
            tmpTransform,
            outCoordinates
          );
          return getTransform(sourceProj, destination)(
            inCoordinates,
            outCoordinates,
            stride
          );
        } : getTransform(sourceProj, destination);
        this.applyTransform(transformFn);
        return this;
      }
    };
    Geometry_default = Geometry;
  }
});

// node_modules/ol/geom/SimpleGeometry.js
function getLayoutForStride(stride) {
  let layout;
  if (stride == 2) {
    layout = "XY";
  } else if (stride == 3) {
    layout = "XYZ";
  } else if (stride == 4) {
    layout = "XYZM";
  }
  return (
    /** @type {import("./Geometry.js").GeometryLayout} */
    layout
  );
}
function getStrideForLayout(layout) {
  let stride;
  if (layout == "XY") {
    stride = 2;
  } else if (layout == "XYZ" || layout == "XYM") {
    stride = 3;
  } else if (layout == "XYZM") {
    stride = 4;
  }
  return (
    /** @type {number} */
    stride
  );
}
function transformGeom2D(simpleGeometry, transform2, dest) {
  const flatCoordinates = simpleGeometry.getFlatCoordinates();
  if (!flatCoordinates) {
    return null;
  }
  const stride = simpleGeometry.getStride();
  return transform2D(
    flatCoordinates,
    0,
    flatCoordinates.length,
    stride,
    transform2,
    dest
  );
}
var SimpleGeometry, SimpleGeometry_default;
var init_SimpleGeometry = __esm({
  "node_modules/ol/geom/SimpleGeometry.js"() {
    init_Geometry();
    init_util();
    init_extent();
    init_transform2();
    SimpleGeometry = class extends Geometry_default {
      constructor() {
        super();
        this.layout = "XY";
        this.stride = 2;
        this.flatCoordinates;
      }
      /**
       * @param {import("../extent.js").Extent} extent Extent.
       * @protected
       * @return {import("../extent.js").Extent} extent Extent.
       */
      computeExtent(extent) {
        return createOrUpdateFromFlatCoordinates(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          extent
        );
      }
      /**
       * @abstract
       * @return {Array<*> | null} Coordinates.
       */
      getCoordinates() {
        return abstract();
      }
      /**
       * Return the first coordinate of the geometry.
       * @return {import("../coordinate.js").Coordinate} First coordinate.
       * @api
       */
      getFirstCoordinate() {
        return this.flatCoordinates.slice(0, this.stride);
      }
      /**
       * @return {Array<number>} Flat coordinates.
       */
      getFlatCoordinates() {
        return this.flatCoordinates;
      }
      /**
       * Return the last coordinate of the geometry.
       * @return {import("../coordinate.js").Coordinate} Last point.
       * @api
       */
      getLastCoordinate() {
        return this.flatCoordinates.slice(
          this.flatCoordinates.length - this.stride
        );
      }
      /**
       * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
       * @return {import("./Geometry.js").GeometryLayout} Layout.
       * @api
       */
      getLayout() {
        return this.layout;
      }
      /**
       * Create a simplified version of this geometry using the Douglas Peucker algorithm.
       * @param {number} squaredTolerance Squared tolerance.
       * @return {SimpleGeometry} Simplified geometry.
       */
      getSimplifiedGeometry(squaredTolerance) {
        if (this.simplifiedGeometryRevision !== this.getRevision()) {
          this.simplifiedGeometryMaxMinSquaredTolerance = 0;
          this.simplifiedGeometryRevision = this.getRevision();
        }
        if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance) {
          return this;
        }
        const simplifiedGeometry = this.getSimplifiedGeometryInternal(squaredTolerance);
        const simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
        if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) {
          return simplifiedGeometry;
        }
        this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
        return this;
      }
      /**
       * @param {number} squaredTolerance Squared tolerance.
       * @return {SimpleGeometry} Simplified geometry.
       * @protected
       */
      getSimplifiedGeometryInternal(squaredTolerance) {
        return this;
      }
      /**
       * @return {number} Stride.
       */
      getStride() {
        return this.stride;
      }
      /**
       * @param {import("./Geometry.js").GeometryLayout} layout Layout.
       * @param {Array<number>} flatCoordinates Flat coordinates.
       */
      setFlatCoordinates(layout, flatCoordinates) {
        this.stride = getStrideForLayout(layout);
        this.layout = layout;
        this.flatCoordinates = flatCoordinates;
      }
      /**
       * @abstract
       * @param {!Array<*>} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       */
      setCoordinates(coordinates2, layout) {
        abstract();
      }
      /**
       * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
       * @param {Array<*>} coordinates Coordinates.
       * @param {number} nesting Nesting.
       * @protected
       */
      setLayout(layout, coordinates2, nesting) {
        let stride;
        if (layout) {
          stride = getStrideForLayout(layout);
        } else {
          for (let i = 0; i < nesting; ++i) {
            if (coordinates2.length === 0) {
              this.layout = "XY";
              this.stride = 2;
              return;
            }
            coordinates2 = /** @type {Array<unknown>} */
            coordinates2[0];
          }
          stride = coordinates2.length;
          layout = getLayoutForStride(stride);
        }
        this.layout = layout;
        this.stride = stride;
      }
      /**
       * Apply a transform function to the coordinates of the geometry.
       * The geometry is modified in place.
       * If you do not want the geometry modified in place, first `clone()` it and
       * then use this function on the clone.
       * @param {import("../proj.js").TransformFunction} transformFn Transform function.
       * Called with a flat array of geometry coordinates.
       * @api
       */
      applyTransform(transformFn) {
        if (this.flatCoordinates) {
          transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
          this.changed();
        }
      }
      /**
       * Rotate the geometry around a given coordinate. This modifies the geometry
       * coordinates in place.
       * @param {number} angle Rotation angle in counter-clockwise radians.
       * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
       * @api
       */
      rotate(angle, anchor) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
          const stride = this.getStride();
          rotate2(
            flatCoordinates,
            0,
            flatCoordinates.length,
            stride,
            angle,
            anchor,
            flatCoordinates
          );
          this.changed();
        }
      }
      /**
       * Scale the geometry (with an optional origin).  This modifies the geometry
       * coordinates in place.
       * @param {number} sx The scaling factor in the x-direction.
       * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
       * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
       *     of the geometry extent).
       * @api
       */
      scale(sx, sy, anchor) {
        if (sy === void 0) {
          sy = sx;
        }
        if (!anchor) {
          anchor = getCenter(this.getExtent());
        }
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
          const stride = this.getStride();
          scale2(
            flatCoordinates,
            0,
            flatCoordinates.length,
            stride,
            sx,
            sy,
            anchor,
            flatCoordinates
          );
          this.changed();
        }
      }
      /**
       * Translate the geometry.  This modifies the geometry coordinates in place.  If
       * instead you want a new geometry, first `clone()` this geometry.
       * @param {number} deltaX Delta X.
       * @param {number} deltaY Delta Y.
       * @api
       */
      translate(deltaX, deltaY) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
          const stride = this.getStride();
          translate(
            flatCoordinates,
            0,
            flatCoordinates.length,
            stride,
            deltaX,
            deltaY,
            flatCoordinates
          );
          this.changed();
        }
      }
    };
    SimpleGeometry_default = SimpleGeometry;
  }
});

// node_modules/ol/geom/flat/closest.js
function assignClosest(flatCoordinates, offset1, offset2, stride, x, y, closestPoint) {
  const x1 = flatCoordinates[offset1];
  const y1 = flatCoordinates[offset1 + 1];
  const dx = flatCoordinates[offset2] - x1;
  const dy = flatCoordinates[offset2 + 1] - y1;
  let offset;
  if (dx === 0 && dy === 0) {
    offset = offset1;
  } else {
    const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      offset = offset2;
    } else if (t > 0) {
      for (let i = 0; i < stride; ++i) {
        closestPoint[i] = lerp(
          flatCoordinates[offset1 + i],
          flatCoordinates[offset2 + i],
          t
        );
      }
      closestPoint.length = stride;
      return;
    } else {
      offset = offset1;
    }
  }
  for (let i = 0; i < stride; ++i) {
    closestPoint[i] = flatCoordinates[offset + i];
  }
  closestPoint.length = stride;
}
function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
  let x1 = flatCoordinates[offset];
  let y1 = flatCoordinates[offset + 1];
  for (offset += stride; offset < end; offset += stride) {
    const x2 = flatCoordinates[offset];
    const y2 = flatCoordinates[offset + 1];
    const squaredDelta = squaredDistance(x1, y1, x2, y2);
    if (squaredDelta > max) {
      max = squaredDelta;
    }
    x1 = x2;
    y1 = y2;
  }
  return max;
}
function arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max) {
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
    offset = end;
  }
  return max;
}
function assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
  if (offset == end) {
    return minSquaredDistance;
  }
  let i, squaredDistance2;
  if (maxDelta === 0) {
    squaredDistance2 = squaredDistance(
      x,
      y,
      flatCoordinates[offset],
      flatCoordinates[offset + 1]
    );
    if (squaredDistance2 < minSquaredDistance) {
      for (i = 0; i < stride; ++i) {
        closestPoint[i] = flatCoordinates[offset + i];
      }
      closestPoint.length = stride;
      return squaredDistance2;
    }
    return minSquaredDistance;
  }
  tmpPoint = tmpPoint ? tmpPoint : [NaN, NaN];
  let index = offset + stride;
  while (index < end) {
    assignClosest(
      flatCoordinates,
      index - stride,
      index,
      stride,
      x,
      y,
      tmpPoint
    );
    squaredDistance2 = squaredDistance(x, y, tmpPoint[0], tmpPoint[1]);
    if (squaredDistance2 < minSquaredDistance) {
      minSquaredDistance = squaredDistance2;
      for (i = 0; i < stride; ++i) {
        closestPoint[i] = tmpPoint[i];
      }
      closestPoint.length = stride;
      index += stride;
    } else {
      index += stride * Math.max(
        (Math.sqrt(squaredDistance2) - Math.sqrt(minSquaredDistance)) / maxDelta | 0,
        1
      );
    }
  }
  if (isRing) {
    assignClosest(
      flatCoordinates,
      end - stride,
      offset,
      stride,
      x,
      y,
      tmpPoint
    );
    squaredDistance2 = squaredDistance(x, y, tmpPoint[0], tmpPoint[1]);
    if (squaredDistance2 < minSquaredDistance) {
      minSquaredDistance = squaredDistance2;
      for (i = 0; i < stride; ++i) {
        closestPoint[i] = tmpPoint[i];
      }
      closestPoint.length = stride;
    }
  }
  return minSquaredDistance;
}
function assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
  tmpPoint = tmpPoint ? tmpPoint : [NaN, NaN];
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    minSquaredDistance = assignClosestPoint(
      flatCoordinates,
      offset,
      end,
      stride,
      maxDelta,
      isRing,
      x,
      y,
      closestPoint,
      minSquaredDistance,
      tmpPoint
    );
    offset = end;
  }
  return minSquaredDistance;
}
var init_closest = __esm({
  "node_modules/ol/geom/flat/closest.js"() {
    init_math();
  }
});

// node_modules/ol/geom/flat/deflate.js
function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
  for (let i = 0, ii = coordinate.length; i < ii; ++i) {
    flatCoordinates[offset++] = coordinate[i];
  }
  return offset;
}
function deflateCoordinates(flatCoordinates, offset, coordinates2, stride) {
  for (let i = 0, ii = coordinates2.length; i < ii; ++i) {
    const coordinate = coordinates2[i];
    for (let j = 0; j < stride; ++j) {
      flatCoordinates[offset++] = coordinate[j];
    }
  }
  return offset;
}
function deflateCoordinatesArray(flatCoordinates, offset, coordinatess, stride, ends) {
  ends = ends ? ends : [];
  let i = 0;
  for (let j = 0, jj = coordinatess.length; j < jj; ++j) {
    const end = deflateCoordinates(
      flatCoordinates,
      offset,
      coordinatess[j],
      stride
    );
    ends[i++] = end;
    offset = end;
  }
  ends.length = i;
  return ends;
}
var init_deflate = __esm({
  "node_modules/ol/geom/flat/deflate.js"() {
  }
});

// node_modules/ol/geom/flat/simplify.js
function douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
  const n = (end - offset) / stride;
  if (n < 3) {
    for (; offset < end; offset += stride) {
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
    }
    return simplifiedOffset;
  }
  const markers = new Array(n);
  markers[0] = 1;
  markers[n - 1] = 1;
  const stack = [offset, end - stride];
  let index = 0;
  while (stack.length > 0) {
    const last = stack.pop();
    const first = stack.pop();
    let maxSquaredDistance = 0;
    const x1 = flatCoordinates[first];
    const y1 = flatCoordinates[first + 1];
    const x2 = flatCoordinates[last];
    const y2 = flatCoordinates[last + 1];
    for (let i = first + stride; i < last; i += stride) {
      const x = flatCoordinates[i];
      const y = flatCoordinates[i + 1];
      const squaredDistance2 = squaredSegmentDistance(x, y, x1, y1, x2, y2);
      if (squaredDistance2 > maxSquaredDistance) {
        index = i;
        maxSquaredDistance = squaredDistance2;
      }
    }
    if (maxSquaredDistance > squaredTolerance) {
      markers[(index - offset) / stride] = 1;
      if (first + stride < index) {
        stack.push(first, index);
      }
      if (index + stride < last) {
        stack.push(index, last);
      }
    }
  }
  for (let i = 0; i < n; ++i) {
    if (markers[i]) {
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride];
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride + 1];
    }
  }
  return simplifiedOffset;
}
function douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    simplifiedOffset = douglasPeucker(
      flatCoordinates,
      offset,
      end,
      stride,
      squaredTolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset
    );
    simplifiedEnds.push(simplifiedOffset);
    offset = end;
  }
  return simplifiedOffset;
}
function snap(value, tolerance) {
  return tolerance * Math.round(value / tolerance);
}
function quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset) {
  if (offset == end) {
    return simplifiedOffset;
  }
  let x1 = snap(flatCoordinates[offset], tolerance);
  let y1 = snap(flatCoordinates[offset + 1], tolerance);
  offset += stride;
  simplifiedFlatCoordinates[simplifiedOffset++] = x1;
  simplifiedFlatCoordinates[simplifiedOffset++] = y1;
  let x2, y2;
  do {
    x2 = snap(flatCoordinates[offset], tolerance);
    y2 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    if (offset == end) {
      simplifiedFlatCoordinates[simplifiedOffset++] = x2;
      simplifiedFlatCoordinates[simplifiedOffset++] = y2;
      return simplifiedOffset;
    }
  } while (x2 == x1 && y2 == y1);
  while (offset < end) {
    const x3 = snap(flatCoordinates[offset], tolerance);
    const y3 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    if (x3 == x2 && y3 == y2) {
      continue;
    }
    const dx1 = x2 - x1;
    const dy1 = y2 - y1;
    const dx2 = x3 - x1;
    const dy2 = y3 - y1;
    if (dx1 * dy2 == dy1 * dx2 && (dx1 < 0 && dx2 < dx1 || dx1 == dx2 || dx1 > 0 && dx2 > dx1) && (dy1 < 0 && dy2 < dy1 || dy1 == dy2 || dy1 > 0 && dy2 > dy1)) {
      x2 = x3;
      y2 = y3;
      continue;
    }
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    x1 = x2;
    y1 = y2;
    x2 = x3;
    y2 = y3;
  }
  simplifiedFlatCoordinates[simplifiedOffset++] = x2;
  simplifiedFlatCoordinates[simplifiedOffset++] = y2;
  return simplifiedOffset;
}
function quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    simplifiedOffset = quantize(
      flatCoordinates,
      offset,
      end,
      stride,
      tolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset
    );
    simplifiedEnds.push(simplifiedOffset);
    offset = end;
  }
  return simplifiedOffset;
}
var init_simplify = __esm({
  "node_modules/ol/geom/flat/simplify.js"() {
    init_math();
  }
});

// node_modules/ol/geom/flat/inflate.js
function inflateCoordinates(flatCoordinates, offset, end, stride, coordinates2) {
  coordinates2 = coordinates2 !== void 0 ? coordinates2 : [];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    coordinates2[i++] = flatCoordinates.slice(j, j + stride);
  }
  coordinates2.length = i;
  return coordinates2;
}
function inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatess) {
  coordinatess = coordinatess !== void 0 ? coordinatess : [];
  let i = 0;
  for (let j = 0, jj = ends.length; j < jj; ++j) {
    const end = ends[j];
    coordinatess[i++] = inflateCoordinates(
      flatCoordinates,
      offset,
      end,
      stride,
      coordinatess[i]
    );
    offset = end;
  }
  coordinatess.length = i;
  return coordinatess;
}
function inflateMultiCoordinatesArray(flatCoordinates, offset, endss, stride, coordinatesss) {
  coordinatesss = coordinatesss !== void 0 ? coordinatesss : [];
  let i = 0;
  for (let j = 0, jj = endss.length; j < jj; ++j) {
    const ends = endss[j];
    coordinatesss[i++] = ends.length === 1 && ends[0] === offset ? [] : inflateCoordinatesArray(
      flatCoordinates,
      offset,
      ends,
      stride,
      coordinatesss[i]
    );
    offset = ends[ends.length - 1];
  }
  coordinatesss.length = i;
  return coordinatesss;
}
var init_inflate = __esm({
  "node_modules/ol/geom/flat/inflate.js"() {
  }
});

// node_modules/ol/geom/flat/area.js
function linearRing(flatCoordinates, offset, end, stride) {
  let twiceArea = 0;
  let x1 = flatCoordinates[end - stride];
  let y1 = flatCoordinates[end - stride + 1];
  for (; offset < end; offset += stride) {
    const x2 = flatCoordinates[offset];
    const y2 = flatCoordinates[offset + 1];
    twiceArea += y1 * x2 - x1 * y2;
    x1 = x2;
    y1 = y2;
  }
  return twiceArea / 2;
}
function linearRings(flatCoordinates, offset, ends, stride) {
  let area = 0;
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    area += linearRing(flatCoordinates, offset, end, stride);
    offset = end;
  }
  return area;
}
var init_area = __esm({
  "node_modules/ol/geom/flat/area.js"() {
  }
});

// node_modules/ol/geom/LinearRing.js
var LinearRing, LinearRing_default;
var init_LinearRing = __esm({
  "node_modules/ol/geom/LinearRing.js"() {
    init_SimpleGeometry();
    init_closest();
    init_extent();
    init_deflate();
    init_simplify();
    init_inflate();
    init_area();
    LinearRing = class _LinearRing extends SimpleGeometry_default {
      /**
       * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
       *     For internal use, flat coordinates in combination with `layout` are also accepted.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       */
      constructor(coordinates2, layout) {
        super();
        this.maxDelta_ = -1;
        this.maxDeltaRevision_ = -1;
        if (layout !== void 0 && !Array.isArray(coordinates2[0])) {
          this.setFlatCoordinates(
            layout,
            /** @type {Array<number>} */
            coordinates2
          );
        } else {
          this.setCoordinates(
            /** @type {Array<import("../coordinate.js").Coordinate>} */
            coordinates2,
            layout
          );
        }
      }
      /**
       * Make a complete copy of the geometry.
       * @return {!LinearRing} Clone.
       * @api
       */
      clone() {
        return new _LinearRing(this.flatCoordinates.slice(), this.layout);
      }
      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
       * @param {number} minSquaredDistance Minimum squared distance.
       * @return {number} Minimum squared distance.
       */
      closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
          return minSquaredDistance;
        }
        if (this.maxDeltaRevision_ != this.getRevision()) {
          this.maxDelta_ = Math.sqrt(
            maxSquaredDelta(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0
            )
          );
          this.maxDeltaRevision_ = this.getRevision();
        }
        return assignClosestPoint(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          true,
          x,
          y,
          closestPoint,
          minSquaredDistance
        );
      }
      /**
       * Return the area of the linear ring on projected plane.
       * @return {number} Area (on projected plane).
       * @api
       */
      getArea() {
        return linearRing(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }
      /**
       * Return the coordinates of the linear ring.
       * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
       * @api
       */
      getCoordinates() {
        return inflateCoordinates(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }
      /**
       * @param {number} squaredTolerance Squared tolerance.
       * @return {LinearRing} Simplified LinearRing.
       * @protected
       */
      getSimplifiedGeometryInternal(squaredTolerance) {
        const simplifiedFlatCoordinates = [];
        simplifiedFlatCoordinates.length = douglasPeucker(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          squaredTolerance,
          simplifiedFlatCoordinates,
          0
        );
        return new _LinearRing(simplifiedFlatCoordinates, "XY");
      }
      /**
       * Get the type of this geometry.
       * @return {import("./Geometry.js").Type} Geometry type.
       * @api
       */
      getType() {
        return "LinearRing";
      }
      /**
       * Test if the geometry and the passed extent intersect.
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {boolean} `true` if the geometry and the extent intersect.
       * @api
       */
      intersectsExtent(extent) {
        return false;
      }
      /**
       * Set the coordinates of the linear ring.
       * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       * @api
       */
      setCoordinates(coordinates2, layout) {
        this.setLayout(layout, coordinates2, 1);
        if (!this.flatCoordinates) {
          this.flatCoordinates = [];
        }
        this.flatCoordinates.length = deflateCoordinates(
          this.flatCoordinates,
          0,
          coordinates2,
          this.stride
        );
        this.changed();
      }
    };
    LinearRing_default = LinearRing;
  }
});

// node_modules/ol/geom/Point.js
var Point_exports = {};
__export(Point_exports, {
  default: () => Point_default
});
var Point, Point_default;
var init_Point = __esm({
  "node_modules/ol/geom/Point.js"() {
    init_SimpleGeometry();
    init_extent();
    init_deflate();
    init_math();
    Point = class _Point extends SimpleGeometry_default {
      /**
       * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       */
      constructor(coordinates2, layout) {
        super();
        this.setCoordinates(coordinates2, layout);
      }
      /**
       * Make a complete copy of the geometry.
       * @return {!Point} Clone.
       * @api
       */
      clone() {
        const point = new _Point(this.flatCoordinates.slice(), this.layout);
        point.applyProperties(this);
        return point;
      }
      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
       * @param {number} minSquaredDistance Minimum squared distance.
       * @return {number} Minimum squared distance.
       */
      closestPointXY(x, y, closestPoint, minSquaredDistance) {
        const flatCoordinates = this.flatCoordinates;
        const squaredDistance2 = squaredDistance(
          x,
          y,
          flatCoordinates[0],
          flatCoordinates[1]
        );
        if (squaredDistance2 < minSquaredDistance) {
          const stride = this.stride;
          for (let i = 0; i < stride; ++i) {
            closestPoint[i] = flatCoordinates[i];
          }
          closestPoint.length = stride;
          return squaredDistance2;
        }
        return minSquaredDistance;
      }
      /**
       * Return the coordinate of the point.
       * @return {import("../coordinate.js").Coordinate} Coordinates.
       * @api
       */
      getCoordinates() {
        return this.flatCoordinates.slice();
      }
      /**
       * @param {import("../extent.js").Extent} extent Extent.
       * @protected
       * @return {import("../extent.js").Extent} extent Extent.
       */
      computeExtent(extent) {
        return createOrUpdateFromCoordinate(this.flatCoordinates, extent);
      }
      /**
       * Get the type of this geometry.
       * @return {import("./Geometry.js").Type} Geometry type.
       * @api
       */
      getType() {
        return "Point";
      }
      /**
       * Test if the geometry and the passed extent intersect.
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {boolean} `true` if the geometry and the extent intersect.
       * @api
       */
      intersectsExtent(extent) {
        return containsXY(extent, this.flatCoordinates[0], this.flatCoordinates[1]);
      }
      /**
       * @param {!Array<*>} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       * @api
       */
      setCoordinates(coordinates2, layout) {
        this.setLayout(layout, coordinates2, 0);
        if (!this.flatCoordinates) {
          this.flatCoordinates = [];
        }
        this.flatCoordinates.length = deflateCoordinate(
          this.flatCoordinates,
          0,
          coordinates2,
          this.stride
        );
        this.changed();
      }
    };
    Point_default = Point;
  }
});

// node_modules/ol/geom/flat/contains.js
function linearRingContainsExtent(flatCoordinates, offset, end, stride, extent) {
  const outside = forEachCorner(
    extent,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(coordinate) {
      return !linearRingContainsXY(
        flatCoordinates,
        offset,
        end,
        stride,
        coordinate[0],
        coordinate[1]
      );
    }
  );
  return !outside;
}
function linearRingContainsXY(flatCoordinates, offset, end, stride, x, y) {
  let wn = 0;
  let x1 = flatCoordinates[end - stride];
  let y1 = flatCoordinates[end - stride + 1];
  for (; offset < end; offset += stride) {
    const x2 = flatCoordinates[offset];
    const y2 = flatCoordinates[offset + 1];
    if (y1 <= y) {
      if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) {
        wn++;
      }
    } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) {
      wn--;
    }
    x1 = x2;
    y1 = y2;
  }
  return wn !== 0;
}
function linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y) {
  if (ends.length === 0) {
    return false;
  }
  if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) {
    return false;
  }
  for (let i = 1, ii = ends.length; i < ii; ++i) {
    if (linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) {
      return false;
    }
  }
  return true;
}
var init_contains = __esm({
  "node_modules/ol/geom/flat/contains.js"() {
    init_extent();
  }
});

// node_modules/ol/geom/flat/interiorpoint.js
function getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, dest) {
  let i, ii, x, x1, x2, y1, y2;
  const y = flatCenters[flatCentersOffset + 1];
  const intersections = [];
  for (let r = 0, rr = ends.length; r < rr; ++r) {
    const end = ends[r];
    x1 = flatCoordinates[end - stride];
    y1 = flatCoordinates[end - stride + 1];
    for (i = offset; i < end; i += stride) {
      x2 = flatCoordinates[i];
      y2 = flatCoordinates[i + 1];
      if (y <= y1 && y2 <= y || y1 <= y && y <= y2) {
        x = (y - y1) / (y2 - y1) * (x2 - x1) + x1;
        intersections.push(x);
      }
      x1 = x2;
      y1 = y2;
    }
  }
  let pointX = NaN;
  let maxSegmentLength = -Infinity;
  intersections.sort(ascending);
  x1 = intersections[0];
  for (i = 1, ii = intersections.length; i < ii; ++i) {
    x2 = intersections[i];
    const segmentLength = Math.abs(x2 - x1);
    if (segmentLength > maxSegmentLength) {
      x = (x1 + x2) / 2;
      if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) {
        pointX = x;
        maxSegmentLength = segmentLength;
      }
    }
    x1 = x2;
  }
  if (isNaN(pointX)) {
    pointX = flatCenters[flatCentersOffset];
  }
  if (dest) {
    dest.push(pointX, y, maxSegmentLength);
    return dest;
  }
  return [pointX, y, maxSegmentLength];
}
function getInteriorPointsOfMultiArray(flatCoordinates, offset, endss, stride, flatCenters) {
  let interiorPoints = [];
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    interiorPoints = getInteriorPointOfArray(
      flatCoordinates,
      offset,
      ends,
      stride,
      flatCenters,
      2 * i,
      interiorPoints
    );
    offset = ends[ends.length - 1];
  }
  return interiorPoints;
}
var init_interiorpoint = __esm({
  "node_modules/ol/geom/flat/interiorpoint.js"() {
    init_array();
    init_contains();
  }
});

// node_modules/ol/geom/flat/segments.js
function forEach(flatCoordinates, offset, end, stride, callback) {
  let ret;
  offset += stride;
  for (; offset < end; offset += stride) {
    ret = callback(
      flatCoordinates.slice(offset - stride, offset),
      flatCoordinates.slice(offset, offset + stride)
    );
    if (ret) {
      return ret;
    }
  }
  return false;
}
var init_segments = __esm({
  "node_modules/ol/geom/flat/segments.js"() {
  }
});

// node_modules/ol/geom/flat/intersectsextent.js
function intersectsLineString(flatCoordinates, offset, end, stride, extent) {
  const coordinatesExtent = extendFlatCoordinates(
    createEmpty(),
    flatCoordinates,
    offset,
    end,
    stride
  );
  if (!intersects(extent, coordinatesExtent)) {
    return false;
  }
  if (containsExtent(extent, coordinatesExtent)) {
    return true;
  }
  if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2]) {
    return true;
  }
  if (coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) {
    return true;
  }
  return forEach(
    flatCoordinates,
    offset,
    end,
    stride,
    /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */
    function(point1, point2) {
      return intersectsSegment(extent, point1, point2);
    }
  );
}
function intersectsLinearRing(flatCoordinates, offset, end, stride, extent) {
  if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) {
    return true;
  }
  if (linearRingContainsXY(
    flatCoordinates,
    offset,
    end,
    stride,
    extent[0],
    extent[1]
  )) {
    return true;
  }
  if (linearRingContainsXY(
    flatCoordinates,
    offset,
    end,
    stride,
    extent[0],
    extent[3]
  )) {
    return true;
  }
  if (linearRingContainsXY(
    flatCoordinates,
    offset,
    end,
    stride,
    extent[2],
    extent[1]
  )) {
    return true;
  }
  if (linearRingContainsXY(
    flatCoordinates,
    offset,
    end,
    stride,
    extent[2],
    extent[3]
  )) {
    return true;
  }
  return false;
}
function intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent) {
  if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) {
    return false;
  }
  if (ends.length === 1) {
    return true;
  }
  for (let i = 1, ii = ends.length; i < ii; ++i) {
    if (linearRingContainsExtent(
      flatCoordinates,
      ends[i - 1],
      ends[i],
      stride,
      extent
    )) {
      if (!intersectsLineString(
        flatCoordinates,
        ends[i - 1],
        ends[i],
        stride,
        extent
      )) {
        return false;
      }
    }
  }
  return true;
}
var init_intersectsextent = __esm({
  "node_modules/ol/geom/flat/intersectsextent.js"() {
    init_extent();
    init_segments();
    init_contains();
  }
});

// node_modules/ol/geom/flat/reverse.js
function coordinates(flatCoordinates, offset, end, stride) {
  while (offset < end - stride) {
    for (let i = 0; i < stride; ++i) {
      const tmp = flatCoordinates[offset + i];
      flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
      flatCoordinates[end - stride + i] = tmp;
    }
    offset += stride;
    end -= stride;
  }
}
var init_reverse = __esm({
  "node_modules/ol/geom/flat/reverse.js"() {
  }
});

// node_modules/ol/geom/flat/orient.js
function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
  let edge = 0;
  let x1 = flatCoordinates[end - stride];
  let y1 = flatCoordinates[end - stride + 1];
  for (; offset < end; offset += stride) {
    const x2 = flatCoordinates[offset];
    const y2 = flatCoordinates[offset + 1];
    edge += (x2 - x1) * (y2 + y1);
    x1 = x2;
    y1 = y2;
  }
  return edge === 0 ? void 0 : edge > 0;
}
function linearRingsAreOriented(flatCoordinates, offset, ends, stride, right) {
  right = right !== void 0 ? right : false;
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    const isClockwise = linearRingIsClockwise(
      flatCoordinates,
      offset,
      end,
      stride
    );
    if (i === 0) {
      if (right && isClockwise || !right && !isClockwise) {
        return false;
      }
    } else {
      if (right && !isClockwise || !right && isClockwise) {
        return false;
      }
    }
    offset = end;
  }
  return true;
}
function orientLinearRings(flatCoordinates, offset, ends, stride, right) {
  right = right !== void 0 ? right : false;
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    const isClockwise = linearRingIsClockwise(
      flatCoordinates,
      offset,
      end,
      stride
    );
    const reverse = i === 0 ? right && isClockwise || !right && !isClockwise : right && !isClockwise || !right && isClockwise;
    if (reverse) {
      coordinates(flatCoordinates, offset, end, stride);
    }
    offset = end;
  }
  return offset;
}
function inflateEnds(flatCoordinates, ends) {
  const endss = [];
  let offset = 0;
  let prevEndIndex = 0;
  let startOrientation;
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    const orientation = linearRingIsClockwise(flatCoordinates, offset, end, 2);
    if (startOrientation === void 0) {
      startOrientation = orientation;
    }
    if (orientation === startOrientation) {
      endss.push(ends.slice(prevEndIndex, i + 1));
    } else {
      if (endss.length === 0) {
        continue;
      }
      endss[endss.length - 1].push(ends[prevEndIndex]);
    }
    prevEndIndex = i + 1;
    offset = end;
  }
  return endss;
}
var init_orient = __esm({
  "node_modules/ol/geom/flat/orient.js"() {
    init_reverse();
  }
});

// node_modules/ol/geom/Polygon.js
function fromExtent(extent) {
  if (isEmpty2(extent)) {
    throw new Error("Cannot create polygon from empty extent");
  }
  const minX = extent[0];
  const minY = extent[1];
  const maxX = extent[2];
  const maxY = extent[3];
  const flatCoordinates = [
    minX,
    minY,
    minX,
    maxY,
    maxX,
    maxY,
    maxX,
    minY,
    minX,
    minY
  ];
  return new Polygon(flatCoordinates, "XY", [flatCoordinates.length]);
}
var Polygon, Polygon_default;
var init_Polygon = __esm({
  "node_modules/ol/geom/Polygon.js"() {
    init_LinearRing();
    init_Point();
    init_SimpleGeometry();
    init_closest();
    init_extent();
    init_deflate();
    init_array();
    init_interiorpoint();
    init_inflate();
    init_intersectsextent();
    init_orient();
    init_area();
    init_contains();
    init_simplify();
    Polygon = class _Polygon extends SimpleGeometry_default {
      /**
       * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
       *     Array of linear rings that define the polygon. The first linear ring of the
       *     array defines the outer-boundary or surface of the polygon. Each subsequent
       *     linear ring defines a hole in the surface of the polygon. A linear ring is
       *     an array of vertices' coordinates where the first coordinate and the last are
       *     equivalent. (For internal use, flat coordinates in combination with
       *     `layout` and `ends` are also accepted.)
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
       */
      constructor(coordinates2, layout, ends) {
        super();
        this.ends_ = [];
        this.flatInteriorPointRevision_ = -1;
        this.flatInteriorPoint_ = null;
        this.maxDelta_ = -1;
        this.maxDeltaRevision_ = -1;
        this.orientedRevision_ = -1;
        this.orientedFlatCoordinates_ = null;
        if (layout !== void 0 && ends) {
          this.setFlatCoordinates(
            layout,
            /** @type {Array<number>} */
            coordinates2
          );
          this.ends_ = ends;
        } else {
          this.setCoordinates(
            /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
            coordinates2,
            layout
          );
        }
      }
      /**
       * Append the passed linear ring to this polygon.
       * @param {LinearRing} linearRing Linear ring.
       * @api
       */
      appendLinearRing(linearRing2) {
        if (!this.flatCoordinates) {
          this.flatCoordinates = linearRing2.getFlatCoordinates().slice();
        } else {
          extend(this.flatCoordinates, linearRing2.getFlatCoordinates());
        }
        this.ends_.push(this.flatCoordinates.length);
        this.changed();
      }
      /**
       * Make a complete copy of the geometry.
       * @return {!Polygon} Clone.
       * @api
       */
      clone() {
        const polygon = new _Polygon(
          this.flatCoordinates.slice(),
          this.layout,
          this.ends_.slice()
        );
        polygon.applyProperties(this);
        return polygon;
      }
      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
       * @param {number} minSquaredDistance Minimum squared distance.
       * @return {number} Minimum squared distance.
       */
      closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
          return minSquaredDistance;
        }
        if (this.maxDeltaRevision_ != this.getRevision()) {
          this.maxDelta_ = Math.sqrt(
            arrayMaxSquaredDelta(
              this.flatCoordinates,
              0,
              this.ends_,
              this.stride,
              0
            )
          );
          this.maxDeltaRevision_ = this.getRevision();
        }
        return assignClosestArrayPoint(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          true,
          x,
          y,
          closestPoint,
          minSquaredDistance
        );
      }
      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @return {boolean} Contains (x, y).
       */
      containsXY(x, y) {
        return linearRingsContainsXY(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          x,
          y
        );
      }
      /**
       * Return the area of the polygon on projected plane.
       * @return {number} Area (on projected plane).
       * @api
       */
      getArea() {
        return linearRings(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride
        );
      }
      /**
       * Get the coordinate array for this geometry.  This array has the structure
       * of a GeoJSON coordinate array for polygons.
       *
       * @param {boolean} [right] Orient coordinates according to the right-hand
       *     rule (counter-clockwise for exterior and clockwise for interior rings).
       *     If `false`, coordinates will be oriented according to the left-hand rule
       *     (clockwise for exterior and counter-clockwise for interior rings).
       *     By default, coordinate orientation will depend on how the geometry was
       *     constructed.
       * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
       * @api
       */
      getCoordinates(right) {
        let flatCoordinates;
        if (right !== void 0) {
          flatCoordinates = this.getOrientedFlatCoordinates().slice();
          orientLinearRings(flatCoordinates, 0, this.ends_, this.stride, right);
        } else {
          flatCoordinates = this.flatCoordinates;
        }
        return inflateCoordinatesArray(flatCoordinates, 0, this.ends_, this.stride);
      }
      /**
       * @return {Array<number>} Ends.
       */
      getEnds() {
        return this.ends_;
      }
      /**
       * @return {Array<number>} Interior point.
       */
      getFlatInteriorPoint() {
        if (this.flatInteriorPointRevision_ != this.getRevision()) {
          const flatCenter = getCenter(this.getExtent());
          this.flatInteriorPoint_ = getInteriorPointOfArray(
            this.getOrientedFlatCoordinates(),
            0,
            this.ends_,
            this.stride,
            flatCenter,
            0
          );
          this.flatInteriorPointRevision_ = this.getRevision();
        }
        return (
          /** @type {import("../coordinate.js").Coordinate} */
          this.flatInteriorPoint_
        );
      }
      /**
       * Return an interior point of the polygon.
       * @return {Point} Interior point as XYM coordinate, where M is the
       * length of the horizontal intersection that the point belongs to.
       * @api
       */
      getInteriorPoint() {
        return new Point_default(this.getFlatInteriorPoint(), "XYM");
      }
      /**
       * Return the number of rings of the polygon,  this includes the exterior
       * ring and any interior rings.
       *
       * @return {number} Number of rings.
       * @api
       */
      getLinearRingCount() {
        return this.ends_.length;
      }
      /**
       * Return the Nth linear ring of the polygon geometry. Return `null` if the
       * given index is out of range.
       * The exterior linear ring is available at index `0` and the interior rings
       * at index `1` and beyond.
       *
       * @param {number} index Index.
       * @return {LinearRing|null} Linear ring.
       * @api
       */
      getLinearRing(index) {
        if (index < 0 || this.ends_.length <= index) {
          return null;
        }
        return new LinearRing_default(
          this.flatCoordinates.slice(
            index === 0 ? 0 : this.ends_[index - 1],
            this.ends_[index]
          ),
          this.layout
        );
      }
      /**
       * Return the linear rings of the polygon.
       * @return {Array<LinearRing>} Linear rings.
       * @api
       */
      getLinearRings() {
        const layout = this.layout;
        const flatCoordinates = this.flatCoordinates;
        const ends = this.ends_;
        const linearRings2 = [];
        let offset = 0;
        for (let i = 0, ii = ends.length; i < ii; ++i) {
          const end = ends[i];
          const linearRing2 = new LinearRing_default(
            flatCoordinates.slice(offset, end),
            layout
          );
          linearRings2.push(linearRing2);
          offset = end;
        }
        return linearRings2;
      }
      /**
       * @return {Array<number>} Oriented flat coordinates.
       */
      getOrientedFlatCoordinates() {
        if (this.orientedRevision_ != this.getRevision()) {
          const flatCoordinates = this.flatCoordinates;
          if (linearRingsAreOriented(flatCoordinates, 0, this.ends_, this.stride)) {
            this.orientedFlatCoordinates_ = flatCoordinates;
          } else {
            this.orientedFlatCoordinates_ = flatCoordinates.slice();
            this.orientedFlatCoordinates_.length = orientLinearRings(
              this.orientedFlatCoordinates_,
              0,
              this.ends_,
              this.stride
            );
          }
          this.orientedRevision_ = this.getRevision();
        }
        return (
          /** @type {Array<number>} */
          this.orientedFlatCoordinates_
        );
      }
      /**
       * @param {number} squaredTolerance Squared tolerance.
       * @return {Polygon} Simplified Polygon.
       * @protected
       */
      getSimplifiedGeometryInternal(squaredTolerance) {
        const simplifiedFlatCoordinates = [];
        const simplifiedEnds = [];
        simplifiedFlatCoordinates.length = quantizeArray(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          Math.sqrt(squaredTolerance),
          simplifiedFlatCoordinates,
          0,
          simplifiedEnds
        );
        return new _Polygon(simplifiedFlatCoordinates, "XY", simplifiedEnds);
      }
      /**
       * Get the type of this geometry.
       * @return {import("./Geometry.js").Type} Geometry type.
       * @api
       */
      getType() {
        return "Polygon";
      }
      /**
       * Test if the geometry and the passed extent intersect.
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {boolean} `true` if the geometry and the extent intersect.
       * @api
       */
      intersectsExtent(extent) {
        return intersectsLinearRingArray(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          extent
        );
      }
      /**
       * Set the coordinates of the polygon.
       * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       * @api
       */
      setCoordinates(coordinates2, layout) {
        this.setLayout(layout, coordinates2, 2);
        if (!this.flatCoordinates) {
          this.flatCoordinates = [];
        }
        const ends = deflateCoordinatesArray(
          this.flatCoordinates,
          0,
          coordinates2,
          this.stride,
          this.ends_
        );
        this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
        this.changed();
      }
    };
    Polygon_default = Polygon;
  }
});

// node_modules/ol/View.js
function animationCallback(callback, returnValue) {
  setTimeout(function() {
    callback(returnValue);
  }, 0);
}
function createCenterConstraint(options) {
  if (options.extent !== void 0) {
    const smooth = options.smoothExtentConstraint !== void 0 ? options.smoothExtentConstraint : true;
    return createExtent(options.extent, options.constrainOnlyCenter, smooth);
  }
  const projection = createProjection(options.projection, "EPSG:3857");
  if (options.multiWorld !== true && projection.isGlobal()) {
    const extent = projection.getExtent().slice();
    extent[0] = -Infinity;
    extent[2] = Infinity;
    return createExtent(extent, false, false);
  }
  return none;
}
function createResolutionConstraint(options) {
  let resolutionConstraint;
  let maxResolution;
  let minResolution;
  const defaultMaxZoom = 28;
  const defaultZoomFactor = 2;
  let minZoom = options.minZoom !== void 0 ? options.minZoom : DEFAULT_MIN_ZOOM;
  let maxZoom = options.maxZoom !== void 0 ? options.maxZoom : defaultMaxZoom;
  const zoomFactor = options.zoomFactor !== void 0 ? options.zoomFactor : defaultZoomFactor;
  const multiWorld = options.multiWorld !== void 0 ? options.multiWorld : false;
  const smooth = options.smoothResolutionConstraint !== void 0 ? options.smoothResolutionConstraint : true;
  const showFullExtent = options.showFullExtent !== void 0 ? options.showFullExtent : false;
  const projection = createProjection(options.projection, "EPSG:3857");
  const projExtent = projection.getExtent();
  let constrainOnlyCenter = options.constrainOnlyCenter;
  let extent = options.extent;
  if (!multiWorld && !extent && projection.isGlobal()) {
    constrainOnlyCenter = false;
    extent = projExtent;
  }
  if (options.resolutions !== void 0) {
    const resolutions = options.resolutions;
    maxResolution = resolutions[minZoom];
    minResolution = resolutions[maxZoom] !== void 0 ? resolutions[maxZoom] : resolutions[resolutions.length - 1];
    if (options.constrainResolution) {
      resolutionConstraint = createSnapToResolutions(
        resolutions,
        smooth,
        !constrainOnlyCenter && extent,
        showFullExtent
      );
    } else {
      resolutionConstraint = createMinMaxResolution(
        maxResolution,
        minResolution,
        smooth,
        !constrainOnlyCenter && extent,
        showFullExtent
      );
    }
  } else {
    const size = !projExtent ? (
      // use an extent that can fit the whole world if need be
      360 * METERS_PER_UNIT.degrees / projection.getMetersPerUnit()
    ) : Math.max(getWidth(projExtent), getHeight(projExtent));
    const defaultMaxResolution = size / DEFAULT_TILE_SIZE / Math.pow(defaultZoomFactor, DEFAULT_MIN_ZOOM);
    const defaultMinResolution = defaultMaxResolution / Math.pow(defaultZoomFactor, defaultMaxZoom - DEFAULT_MIN_ZOOM);
    maxResolution = options.maxResolution;
    if (maxResolution !== void 0) {
      minZoom = 0;
    } else {
      maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
    }
    minResolution = options.minResolution;
    if (minResolution === void 0) {
      if (options.maxZoom !== void 0) {
        if (options.maxResolution !== void 0) {
          minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
        } else {
          minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
        }
      } else {
        minResolution = defaultMinResolution;
      }
    }
    maxZoom = minZoom + Math.floor(
      Math.log(maxResolution / minResolution) / Math.log(zoomFactor)
    );
    minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);
    if (options.constrainResolution) {
      resolutionConstraint = createSnapToPower(
        zoomFactor,
        maxResolution,
        minResolution,
        smooth,
        !constrainOnlyCenter && extent,
        showFullExtent
      );
    } else {
      resolutionConstraint = createMinMaxResolution(
        maxResolution,
        minResolution,
        smooth,
        !constrainOnlyCenter && extent,
        showFullExtent
      );
    }
  }
  return {
    constraint: resolutionConstraint,
    maxResolution,
    minResolution,
    minZoom,
    zoomFactor
  };
}
function createRotationConstraint(options) {
  const enableRotation = options.enableRotation !== void 0 ? options.enableRotation : true;
  if (enableRotation) {
    const constrainRotation = options.constrainRotation;
    if (constrainRotation === void 0 || constrainRotation === true) {
      return createSnapToZero();
    }
    if (constrainRotation === false) {
      return none2;
    }
    if (typeof constrainRotation === "number") {
      return createSnapToN(constrainRotation);
    }
    return none2;
  }
  return disable;
}
function isNoopAnimation(animation) {
  if (animation.sourceCenter && animation.targetCenter) {
    if (!equals3(animation.sourceCenter, animation.targetCenter)) {
      return false;
    }
  }
  if (animation.sourceResolution !== animation.targetResolution) {
    return false;
  }
  if (animation.sourceRotation !== animation.targetRotation) {
    return false;
  }
  return true;
}
function calculateCenterOn(coordinate, size, position, resolution, rotation) {
  const cosAngle = Math.cos(-rotation);
  let sinAngle = Math.sin(-rotation);
  let rotX = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
  let rotY = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
  rotX += (size[0] / 2 - position[0]) * resolution;
  rotY += (position[1] - size[1] / 2) * resolution;
  sinAngle = -sinAngle;
  const centerX = rotX * cosAngle - rotY * sinAngle;
  const centerY = rotY * cosAngle + rotX * sinAngle;
  return [centerX, centerY];
}
var DEFAULT_MIN_ZOOM, View, View_default;
var init_View = __esm({
  "node_modules/ol/View.js"() {
    init_Object();
    init_ViewHint();
    init_ViewProperty();
    init_common();
    init_proj();
    init_functions();
    init_coordinate();
    init_asserts();
    init_centerconstraint();
    init_math();
    init_resolutionconstraint();
    init_rotationconstraint();
    init_easing();
    init_extent();
    init_array();
    init_Polygon();
    DEFAULT_MIN_ZOOM = 0;
    View = class extends Object_default {
      /**
       * @param {ViewOptions} [options] View options.
       */
      constructor(options) {
        super();
        this.on;
        this.once;
        this.un;
        options = Object.assign({}, options);
        this.hints_ = [0, 0];
        this.animations_ = [];
        this.updateAnimationKey_;
        this.projection_ = createProjection(options.projection, "EPSG:3857");
        this.viewportSize_ = [100, 100];
        this.targetCenter_ = null;
        this.targetResolution_;
        this.targetRotation_;
        this.nextCenter_ = null;
        this.nextResolution_;
        this.nextRotation_;
        this.cancelAnchor_ = void 0;
        if (options.projection) {
          disableCoordinateWarning();
        }
        if (options.center) {
          options.center = fromUserCoordinate(options.center, this.projection_);
        }
        if (options.extent) {
          options.extent = fromUserExtent(options.extent, this.projection_);
        }
        this.applyOptions_(options);
      }
      /**
       * Set up the view with the given options.
       * @param {ViewOptions} options View options.
       */
      applyOptions_(options) {
        const properties = Object.assign({}, options);
        for (const key in ViewProperty_default) {
          delete properties[key];
        }
        this.setProperties(properties, true);
        const resolutionConstraintInfo = createResolutionConstraint(options);
        this.maxResolution_ = resolutionConstraintInfo.maxResolution;
        this.minResolution_ = resolutionConstraintInfo.minResolution;
        this.zoomFactor_ = resolutionConstraintInfo.zoomFactor;
        this.resolutions_ = options.resolutions;
        this.padding_ = options.padding;
        this.minZoom_ = resolutionConstraintInfo.minZoom;
        const centerConstraint = createCenterConstraint(options);
        const resolutionConstraint = resolutionConstraintInfo.constraint;
        const rotationConstraint = createRotationConstraint(options);
        this.constraints_ = {
          center: centerConstraint,
          resolution: resolutionConstraint,
          rotation: rotationConstraint
        };
        this.setRotation(options.rotation !== void 0 ? options.rotation : 0);
        this.setCenterInternal(
          options.center !== void 0 ? options.center : null
        );
        if (options.resolution !== void 0) {
          this.setResolution(options.resolution);
        } else if (options.zoom !== void 0) {
          this.setZoom(options.zoom);
        }
      }
      /**
       * Padding (in css pixels).
       * If the map viewport is partially covered with other content (overlays) along
       * its edges, this setting allows to shift the center of the viewport away from that
       * content. The order of the values in the array is top, right, bottom, left.
       * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
       * @type {Array<number>|undefined}
       * @api
       */
      get padding() {
        return this.padding_;
      }
      set padding(padding) {
        let oldPadding = this.padding_;
        this.padding_ = padding;
        const center = this.getCenterInternal();
        if (center) {
          const newPadding = padding || [0, 0, 0, 0];
          oldPadding = oldPadding || [0, 0, 0, 0];
          const resolution = this.getResolution();
          const offsetX = resolution / 2 * (newPadding[3] - oldPadding[3] + oldPadding[1] - newPadding[1]);
          const offsetY = resolution / 2 * (newPadding[0] - oldPadding[0] + oldPadding[2] - newPadding[2]);
          this.setCenterInternal([center[0] + offsetX, center[1] - offsetY]);
        }
      }
      /**
       * Get an updated version of the view options used to construct the view.  The
       * current resolution (or zoom), center, and rotation are applied to any stored
       * options.  The provided options can be used to apply new min/max zoom or
       * resolution limits.
       * @param {ViewOptions} newOptions New options to be applied.
       * @return {ViewOptions} New options updated with the current view state.
       */
      getUpdatedOptions_(newOptions) {
        const options = this.getProperties();
        if (options.resolution !== void 0) {
          options.resolution = this.getResolution();
        } else {
          options.zoom = this.getZoom();
        }
        options.center = this.getCenterInternal();
        options.rotation = this.getRotation();
        return Object.assign({}, options, newOptions);
      }
      /**
       * Animate the view.  The view's center, zoom (or resolution), and rotation
       * can be animated for smooth transitions between view states.  For example,
       * to animate the view to a new zoom level:
       *
       *     view.animate({zoom: view.getZoom() + 1});
       *
       * By default, the animation lasts one second and uses in-and-out easing.  You
       * can customize this behavior by including `duration` (in milliseconds) and
       * `easing` options (see {@link module:ol/easing}).
       *
       * To chain together multiple animations, call the method with multiple
       * animation objects.  For example, to first zoom and then pan:
       *
       *     view.animate({zoom: 10}, {center: [0, 0]});
       *
       * If you provide a function as the last argument to the animate method, it
       * will get called at the end of an animation series.  The callback will be
       * called with `true` if the animation series completed on its own or `false`
       * if it was cancelled.
       *
       * Animations are cancelled by user interactions (e.g. dragging the map) or by
       * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
       * (or another method that calls one of these).
       *
       * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
       *     options.  Multiple animations can be run in series by passing multiple
       *     options objects.  To run multiple animations in parallel, call the method
       *     multiple times.  An optional callback can be provided as a final
       *     argument.  The callback will be called with a boolean indicating whether
       *     the animation completed without being cancelled.
       * @api
       */
      animate(var_args) {
        if (this.isDef() && !this.getAnimating()) {
          this.resolveConstraints(0);
        }
        const args = new Array(arguments.length);
        for (let i = 0; i < args.length; ++i) {
          let options = arguments[i];
          if (options.center) {
            options = Object.assign({}, options);
            options.center = fromUserCoordinate(
              options.center,
              this.getProjection()
            );
          }
          if (options.anchor) {
            options = Object.assign({}, options);
            options.anchor = fromUserCoordinate(
              options.anchor,
              this.getProjection()
            );
          }
          args[i] = options;
        }
        this.animateInternal.apply(this, args);
      }
      /**
       * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
       */
      animateInternal(var_args) {
        let animationCount = arguments.length;
        let callback;
        if (animationCount > 1 && typeof arguments[animationCount - 1] === "function") {
          callback = arguments[animationCount - 1];
          --animationCount;
        }
        let i = 0;
        for (; i < animationCount && !this.isDef(); ++i) {
          const state = arguments[i];
          if (state.center) {
            this.setCenterInternal(state.center);
          }
          if (state.zoom !== void 0) {
            this.setZoom(state.zoom);
          } else if (state.resolution) {
            this.setResolution(state.resolution);
          }
          if (state.rotation !== void 0) {
            this.setRotation(state.rotation);
          }
        }
        if (i === animationCount) {
          if (callback) {
            animationCallback(callback, true);
          }
          return;
        }
        let start = Date.now();
        let center = this.targetCenter_.slice();
        let resolution = this.targetResolution_;
        let rotation = this.targetRotation_;
        const series = [];
        for (; i < animationCount; ++i) {
          const options = (
            /** @type {AnimationOptions} */
            arguments[i]
          );
          const animation = {
            start,
            complete: false,
            anchor: options.anchor,
            duration: options.duration !== void 0 ? options.duration : 1e3,
            easing: options.easing || inAndOut,
            callback
          };
          if (options.center) {
            animation.sourceCenter = center;
            animation.targetCenter = options.center.slice();
            center = animation.targetCenter;
          }
          if (options.zoom !== void 0) {
            animation.sourceResolution = resolution;
            animation.targetResolution = this.getResolutionForZoom(options.zoom);
            resolution = animation.targetResolution;
          } else if (options.resolution) {
            animation.sourceResolution = resolution;
            animation.targetResolution = options.resolution;
            resolution = animation.targetResolution;
          }
          if (options.rotation !== void 0) {
            animation.sourceRotation = rotation;
            const delta = modulo(options.rotation - rotation + Math.PI, 2 * Math.PI) - Math.PI;
            animation.targetRotation = rotation + delta;
            rotation = animation.targetRotation;
          }
          if (isNoopAnimation(animation)) {
            animation.complete = true;
          } else {
            start += animation.duration;
          }
          series.push(animation);
        }
        this.animations_.push(series);
        this.setHint(ViewHint_default.ANIMATING, 1);
        this.updateAnimations_();
      }
      /**
       * Determine if the view is being animated.
       * @return {boolean} The view is being animated.
       * @api
       */
      getAnimating() {
        return this.hints_[ViewHint_default.ANIMATING] > 0;
      }
      /**
       * Determine if the user is interacting with the view, such as panning or zooming.
       * @return {boolean} The view is being interacted with.
       * @api
       */
      getInteracting() {
        return this.hints_[ViewHint_default.INTERACTING] > 0;
      }
      /**
       * Cancel any ongoing animations.
       * @api
       */
      cancelAnimations() {
        this.setHint(ViewHint_default.ANIMATING, -this.hints_[ViewHint_default.ANIMATING]);
        let anchor;
        for (let i = 0, ii = this.animations_.length; i < ii; ++i) {
          const series = this.animations_[i];
          if (series[0].callback) {
            animationCallback(series[0].callback, false);
          }
          if (!anchor) {
            for (let j = 0, jj = series.length; j < jj; ++j) {
              const animation = series[j];
              if (!animation.complete) {
                anchor = animation.anchor;
                break;
              }
            }
          }
        }
        this.animations_.length = 0;
        this.cancelAnchor_ = anchor;
        this.nextCenter_ = null;
        this.nextResolution_ = NaN;
        this.nextRotation_ = NaN;
      }
      /**
       * Update all animations.
       */
      updateAnimations_() {
        if (this.updateAnimationKey_ !== void 0) {
          cancelAnimationFrame(this.updateAnimationKey_);
          this.updateAnimationKey_ = void 0;
        }
        if (!this.getAnimating()) {
          return;
        }
        const now = Date.now();
        let more = false;
        for (let i = this.animations_.length - 1; i >= 0; --i) {
          const series = this.animations_[i];
          let seriesComplete = true;
          for (let j = 0, jj = series.length; j < jj; ++j) {
            const animation = series[j];
            if (animation.complete) {
              continue;
            }
            const elapsed = now - animation.start;
            let fraction = animation.duration > 0 ? elapsed / animation.duration : 1;
            if (fraction >= 1) {
              animation.complete = true;
              fraction = 1;
            } else {
              seriesComplete = false;
            }
            const progress = animation.easing(fraction);
            if (animation.sourceCenter) {
              const x0 = animation.sourceCenter[0];
              const y0 = animation.sourceCenter[1];
              const x1 = animation.targetCenter[0];
              const y1 = animation.targetCenter[1];
              this.nextCenter_ = animation.targetCenter;
              const x = x0 + progress * (x1 - x0);
              const y = y0 + progress * (y1 - y0);
              this.targetCenter_ = [x, y];
            }
            if (animation.sourceResolution && animation.targetResolution) {
              const resolution = progress === 1 ? animation.targetResolution : animation.sourceResolution + progress * (animation.targetResolution - animation.sourceResolution);
              if (animation.anchor) {
                const size = this.getViewportSize_(this.getRotation());
                const constrainedResolution = this.constraints_.resolution(
                  resolution,
                  0,
                  size,
                  true
                );
                this.targetCenter_ = this.calculateCenterZoom(
                  constrainedResolution,
                  animation.anchor
                );
              }
              this.nextResolution_ = animation.targetResolution;
              this.targetResolution_ = resolution;
              this.applyTargetState_(true);
            }
            if (animation.sourceRotation !== void 0 && animation.targetRotation !== void 0) {
              const rotation = progress === 1 ? modulo(animation.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : animation.sourceRotation + progress * (animation.targetRotation - animation.sourceRotation);
              if (animation.anchor) {
                const constrainedRotation = this.constraints_.rotation(
                  rotation,
                  true
                );
                this.targetCenter_ = this.calculateCenterRotate(
                  constrainedRotation,
                  animation.anchor
                );
              }
              this.nextRotation_ = animation.targetRotation;
              this.targetRotation_ = rotation;
            }
            this.applyTargetState_(true);
            more = true;
            if (!animation.complete) {
              break;
            }
          }
          if (seriesComplete) {
            this.animations_[i] = null;
            this.setHint(ViewHint_default.ANIMATING, -1);
            this.nextCenter_ = null;
            this.nextResolution_ = NaN;
            this.nextRotation_ = NaN;
            const callback = series[0].callback;
            if (callback) {
              animationCallback(callback, true);
            }
          }
        }
        this.animations_ = this.animations_.filter(Boolean);
        if (more && this.updateAnimationKey_ === void 0) {
          this.updateAnimationKey_ = requestAnimationFrame(
            this.updateAnimations_.bind(this)
          );
        }
      }
      /**
       * @param {number} rotation Target rotation.
       * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
       * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
       */
      calculateCenterRotate(rotation, anchor) {
        let center;
        const currentCenter = this.getCenterInternal();
        if (currentCenter !== void 0) {
          center = [currentCenter[0] - anchor[0], currentCenter[1] - anchor[1]];
          rotate(center, rotation - this.getRotation());
          add3(center, anchor);
        }
        return center;
      }
      /**
       * @param {number} resolution Target resolution.
       * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
       * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
       */
      calculateCenterZoom(resolution, anchor) {
        let center;
        const currentCenter = this.getCenterInternal();
        const currentResolution = this.getResolution();
        if (currentCenter !== void 0 && currentResolution !== void 0) {
          const x = anchor[0] - resolution * (anchor[0] - currentCenter[0]) / currentResolution;
          const y = anchor[1] - resolution * (anchor[1] - currentCenter[1]) / currentResolution;
          center = [x, y];
        }
        return center;
      }
      /**
       * Returns the current viewport size.
       * @private
       * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
       * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
       */
      getViewportSize_(rotation) {
        const size = this.viewportSize_;
        if (rotation) {
          const w = size[0];
          const h = size[1];
          return [
            Math.abs(w * Math.cos(rotation)) + Math.abs(h * Math.sin(rotation)),
            Math.abs(w * Math.sin(rotation)) + Math.abs(h * Math.cos(rotation))
          ];
        }
        return size;
      }
      /**
       * Stores the viewport size on the view. The viewport size is not read every time from the DOM
       * to avoid performance hit and layout reflow.
       * This should be done on map size change.
       * Note: the constraints are not resolved during an animation to avoid stopping it
       * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
       */
      setViewportSize(size) {
        this.viewportSize_ = Array.isArray(size) ? size.slice() : [100, 100];
        if (!this.getAnimating()) {
          this.resolveConstraints(0);
        }
      }
      /**
       * Get the view center.
       * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
       * @observable
       * @api
       */
      getCenter() {
        const center = this.getCenterInternal();
        if (!center) {
          return center;
        }
        return toUserCoordinate(center, this.getProjection());
      }
      /**
       * Get the view center without transforming to user projection.
       * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
       */
      getCenterInternal() {
        return (
          /** @type {import("./coordinate.js").Coordinate|undefined} */
          this.get(ViewProperty_default.CENTER)
        );
      }
      /**
       * @return {Constraints} Constraints.
       */
      getConstraints() {
        return this.constraints_;
      }
      /**
       * @return {boolean} Resolution constraint is set
       */
      getConstrainResolution() {
        return this.get("constrainResolution");
      }
      /**
       * @param {Array<number>} [hints] Destination array.
       * @return {Array<number>} Hint.
       */
      getHints(hints) {
        if (hints !== void 0) {
          hints[0] = this.hints_[0];
          hints[1] = this.hints_[1];
          return hints;
        }
        return this.hints_.slice();
      }
      /**
       * Calculate the extent for the current view state and the passed box size.
       * @param {import("./size.js").Size} [size] The pixel dimensions of the box
       * into which the calculated extent should fit. Defaults to the size of the
       * map the view is associated with.
       * If no map or multiple maps are connected to the view, provide the desired
       * box size (e.g. `map.getSize()`).
       * @return {import("./extent.js").Extent} Extent.
       * @api
       */
      calculateExtent(size) {
        const extent = this.calculateExtentInternal(size);
        return toUserExtent(extent, this.getProjection());
      }
      /**
       * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
       * the map's last known viewport size will be used.
       * @return {import("./extent.js").Extent} Extent.
       */
      calculateExtentInternal(size) {
        size = size || this.getViewportSizeMinusPadding_();
        const center = (
          /** @type {!import("./coordinate.js").Coordinate} */
          this.getCenterInternal()
        );
        assert(center, "The view center is not defined");
        const resolution = (
          /** @type {!number} */
          this.getResolution()
        );
        assert(resolution !== void 0, "The view resolution is not defined");
        const rotation = (
          /** @type {!number} */
          this.getRotation()
        );
        assert(rotation !== void 0, "The view rotation is not defined");
        return getForViewAndSize(center, resolution, rotation, size);
      }
      /**
       * Get the maximum resolution of the view.
       * @return {number} The maximum resolution of the view.
       * @api
       */
      getMaxResolution() {
        return this.maxResolution_;
      }
      /**
       * Get the minimum resolution of the view.
       * @return {number} The minimum resolution of the view.
       * @api
       */
      getMinResolution() {
        return this.minResolution_;
      }
      /**
       * Get the maximum zoom level for the view.
       * @return {number} The maximum zoom level.
       * @api
       */
      getMaxZoom() {
        return (
          /** @type {number} */
          this.getZoomForResolution(this.minResolution_)
        );
      }
      /**
       * Set a new maximum zoom level for the view.
       * @param {number} zoom The maximum zoom level.
       * @api
       */
      setMaxZoom(zoom) {
        this.applyOptions_(this.getUpdatedOptions_({ maxZoom: zoom }));
      }
      /**
       * Get the minimum zoom level for the view.
       * @return {number} The minimum zoom level.
       * @api
       */
      getMinZoom() {
        return (
          /** @type {number} */
          this.getZoomForResolution(this.maxResolution_)
        );
      }
      /**
       * Set a new minimum zoom level for the view.
       * @param {number} zoom The minimum zoom level.
       * @api
       */
      setMinZoom(zoom) {
        this.applyOptions_(this.getUpdatedOptions_({ minZoom: zoom }));
      }
      /**
       * Set whether the view should allow intermediary zoom levels.
       * @param {boolean} enabled Whether the resolution is constrained.
       * @api
       */
      setConstrainResolution(enabled) {
        this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: enabled }));
      }
      /**
       * Get the view projection.
       * @return {import("./proj/Projection.js").default} The projection of the view.
       * @api
       */
      getProjection() {
        return this.projection_;
      }
      /**
       * Get the view resolution.
       * @return {number|undefined} The resolution of the view.
       * @observable
       * @api
       */
      getResolution() {
        return (
          /** @type {number|undefined} */
          this.get(ViewProperty_default.RESOLUTION)
        );
      }
      /**
       * Get the resolutions for the view. This returns the array of resolutions
       * passed to the constructor of the View, or undefined if none were given.
       * @return {Array<number>|undefined} The resolutions of the view.
       * @api
       */
      getResolutions() {
        return this.resolutions_;
      }
      /**
       * Get the resolution for a provided extent (in map units) and size (in pixels).
       * @param {import("./extent.js").Extent} extent Extent.
       * @param {import("./size.js").Size} [size] Box pixel size.
       * @return {number} The resolution at which the provided extent will render at
       *     the given size.
       * @api
       */
      getResolutionForExtent(extent, size) {
        return this.getResolutionForExtentInternal(
          fromUserExtent(extent, this.getProjection()),
          size
        );
      }
      /**
       * Get the resolution for a provided extent (in map units) and size (in pixels).
       * @param {import("./extent.js").Extent} extent Extent.
       * @param {import("./size.js").Size} [size] Box pixel size.
       * @return {number} The resolution at which the provided extent will render at
       *     the given size.
       */
      getResolutionForExtentInternal(extent, size) {
        size = size || this.getViewportSizeMinusPadding_();
        const xResolution = getWidth(extent) / size[0];
        const yResolution = getHeight(extent) / size[1];
        return Math.max(xResolution, yResolution);
      }
      /**
       * Return a function that returns a value between 0 and 1 for a
       * resolution. Exponential scaling is assumed.
       * @param {number} [power] Power.
       * @return {function(number): number} Resolution for value function.
       */
      getResolutionForValueFunction(power) {
        power = power || 2;
        const maxResolution = this.getConstrainedResolution(this.maxResolution_);
        const minResolution = this.minResolution_;
        const max = Math.log(maxResolution / minResolution) / Math.log(power);
        return (
          /**
           * @param {number} value Value.
           * @return {number} Resolution.
           */
          function(value) {
            const resolution = maxResolution / Math.pow(power, value * max);
            return resolution;
          }
        );
      }
      /**
       * Get the view rotation.
       * @return {number} The rotation of the view in radians.
       * @observable
       * @api
       */
      getRotation() {
        return (
          /** @type {number} */
          this.get(ViewProperty_default.ROTATION)
        );
      }
      /**
       * Return a function that returns a resolution for a value between
       * 0 and 1. Exponential scaling is assumed.
       * @param {number} [power] Power.
       * @return {function(number): number} Value for resolution function.
       */
      getValueForResolutionFunction(power) {
        const logPower = Math.log(power || 2);
        const maxResolution = this.getConstrainedResolution(this.maxResolution_);
        const minResolution = this.minResolution_;
        const max = Math.log(maxResolution / minResolution) / logPower;
        return (
          /**
           * @param {number} resolution Resolution.
           * @return {number} Value.
           */
          function(resolution) {
            const value = Math.log(maxResolution / resolution) / logPower / max;
            return value;
          }
        );
      }
      /**
       * Returns the size of the viewport minus padding.
       * @private
       * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
       * @return {import("./size.js").Size} Viewport size reduced by the padding.
       */
      getViewportSizeMinusPadding_(rotation) {
        let size = this.getViewportSize_(rotation);
        const padding = this.padding_;
        if (padding) {
          size = [
            size[0] - padding[1] - padding[3],
            size[1] - padding[0] - padding[2]
          ];
        }
        return size;
      }
      /**
       * @return {State} View state.
       */
      getState() {
        const projection = this.getProjection();
        const resolution = this.getResolution();
        const rotation = this.getRotation();
        let center = (
          /** @type {import("./coordinate.js").Coordinate} */
          this.getCenterInternal()
        );
        const padding = this.padding_;
        if (padding) {
          const reducedSize = this.getViewportSizeMinusPadding_();
          center = calculateCenterOn(
            center,
            this.getViewportSize_(),
            [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]],
            resolution,
            rotation
          );
        }
        return {
          center: center.slice(0),
          projection: projection !== void 0 ? projection : null,
          resolution,
          nextCenter: this.nextCenter_,
          nextResolution: this.nextResolution_,
          nextRotation: this.nextRotation_,
          rotation,
          zoom: this.getZoom()
        };
      }
      /**
       * @return {ViewStateLayerStateExtent} Like `FrameState`, but just `viewState` and `extent`.
       */
      getViewStateAndExtent() {
        return {
          viewState: this.getState(),
          extent: this.calculateExtent()
        };
      }
      /**
       * Get the current zoom level. This method may return non-integer zoom levels
       * if the view does not constrain the resolution, or if an interaction or
       * animation is underway.
       * @return {number|undefined} Zoom.
       * @api
       */
      getZoom() {
        let zoom;
        const resolution = this.getResolution();
        if (resolution !== void 0) {
          zoom = this.getZoomForResolution(resolution);
        }
        return zoom;
      }
      /**
       * Get the zoom level for a resolution.
       * @param {number} resolution The resolution.
       * @return {number|undefined} The zoom level for the provided resolution.
       * @api
       */
      getZoomForResolution(resolution) {
        let offset = this.minZoom_ || 0;
        let max, zoomFactor;
        if (this.resolutions_) {
          const nearest = linearFindNearest(this.resolutions_, resolution, 1);
          offset = nearest;
          max = this.resolutions_[nearest];
          if (nearest == this.resolutions_.length - 1) {
            zoomFactor = 2;
          } else {
            zoomFactor = max / this.resolutions_[nearest + 1];
          }
        } else {
          max = this.maxResolution_;
          zoomFactor = this.zoomFactor_;
        }
        return offset + Math.log(max / resolution) / Math.log(zoomFactor);
      }
      /**
       * Get the resolution for a zoom level.
       * @param {number} zoom Zoom level.
       * @return {number} The view resolution for the provided zoom level.
       * @api
       */
      getResolutionForZoom(zoom) {
        if (this.resolutions_) {
          if (this.resolutions_.length <= 1) {
            return 0;
          }
          const baseLevel = clamp(
            Math.floor(zoom),
            0,
            this.resolutions_.length - 2
          );
          const zoomFactor = this.resolutions_[baseLevel] / this.resolutions_[baseLevel + 1];
          return this.resolutions_[baseLevel] / Math.pow(zoomFactor, clamp(zoom - baseLevel, 0, 1));
        }
        return this.maxResolution_ / Math.pow(this.zoomFactor_, zoom - this.minZoom_);
      }
      /**
       * Fit the given geometry or extent based on the given map size and border.
       * The size is pixel dimensions of the box to fit the extent into.
       * In most cases you will want to use the map size, that is `map.getSize()`.
       * Takes care of the map angle.
       * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
       *     extent to fit the view to.
       * @param {FitOptions} [options] Options.
       * @api
       */
      fit(geometryOrExtent, options) {
        let geometry;
        assert(
          Array.isArray(geometryOrExtent) || typeof /** @type {?} */
          geometryOrExtent.getSimplifiedGeometry === "function",
          "Invalid extent or geometry provided as `geometry`"
        );
        if (Array.isArray(geometryOrExtent)) {
          assert(
            !isEmpty2(geometryOrExtent),
            "Cannot fit empty extent provided as `geometry`"
          );
          const extent = fromUserExtent(geometryOrExtent, this.getProjection());
          geometry = fromExtent(extent);
        } else if (geometryOrExtent.getType() === "Circle") {
          const extent = fromUserExtent(
            geometryOrExtent.getExtent(),
            this.getProjection()
          );
          geometry = fromExtent(extent);
          geometry.rotate(this.getRotation(), getCenter(extent));
        } else {
          const userProjection2 = getUserProjection();
          if (userProjection2) {
            geometry = /** @type {import("./geom/SimpleGeometry.js").default} */
            geometryOrExtent.clone().transform(userProjection2, this.getProjection());
          } else {
            geometry = geometryOrExtent;
          }
        }
        this.fitInternal(geometry, options);
      }
      /**
       * Calculate rotated extent
       * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
       * @return {import("./extent").Extent} The rotated extent for the geometry.
       */
      rotatedExtentForGeometry(geometry) {
        const rotation = this.getRotation();
        const cosAngle = Math.cos(rotation);
        const sinAngle = Math.sin(-rotation);
        const coords = geometry.getFlatCoordinates();
        const stride = geometry.getStride();
        let minRotX = Infinity;
        let minRotY = Infinity;
        let maxRotX = -Infinity;
        let maxRotY = -Infinity;
        for (let i = 0, ii = coords.length; i < ii; i += stride) {
          const rotX = coords[i] * cosAngle - coords[i + 1] * sinAngle;
          const rotY = coords[i] * sinAngle + coords[i + 1] * cosAngle;
          minRotX = Math.min(minRotX, rotX);
          minRotY = Math.min(minRotY, rotY);
          maxRotX = Math.max(maxRotX, rotX);
          maxRotY = Math.max(maxRotY, rotY);
        }
        return [minRotX, minRotY, maxRotX, maxRotY];
      }
      /**
       * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
       * @param {FitOptions} [options] Options.
       */
      fitInternal(geometry, options) {
        options = options || {};
        let size = options.size;
        if (!size) {
          size = this.getViewportSizeMinusPadding_();
        }
        const padding = options.padding !== void 0 ? options.padding : [0, 0, 0, 0];
        const nearest = options.nearest !== void 0 ? options.nearest : false;
        let minResolution;
        if (options.minResolution !== void 0) {
          minResolution = options.minResolution;
        } else if (options.maxZoom !== void 0) {
          minResolution = this.getResolutionForZoom(options.maxZoom);
        } else {
          minResolution = 0;
        }
        const rotatedExtent = this.rotatedExtentForGeometry(geometry);
        let resolution = this.getResolutionForExtentInternal(rotatedExtent, [
          size[0] - padding[1] - padding[3],
          size[1] - padding[0] - padding[2]
        ]);
        resolution = isNaN(resolution) ? minResolution : Math.max(resolution, minResolution);
        resolution = this.getConstrainedResolution(resolution, nearest ? 0 : 1);
        const rotation = this.getRotation();
        const sinAngle = Math.sin(rotation);
        const cosAngle = Math.cos(rotation);
        const centerRot = getCenter(rotatedExtent);
        centerRot[0] += (padding[1] - padding[3]) / 2 * resolution;
        centerRot[1] += (padding[0] - padding[2]) / 2 * resolution;
        const centerX = centerRot[0] * cosAngle - centerRot[1] * sinAngle;
        const centerY = centerRot[1] * cosAngle + centerRot[0] * sinAngle;
        const center = this.getConstrainedCenter([centerX, centerY], resolution);
        const callback = options.callback ? options.callback : VOID;
        if (options.duration !== void 0) {
          this.animateInternal(
            {
              resolution,
              center,
              duration: options.duration,
              easing: options.easing
            },
            callback
          );
        } else {
          this.targetResolution_ = resolution;
          this.targetCenter_ = center;
          this.applyTargetState_(false, true);
          animationCallback(callback, true);
        }
      }
      /**
       * Center on coordinate and view position.
       * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
       * @param {import("./size.js").Size} size Box pixel size.
       * @param {import("./pixel.js").Pixel} position Position on the view to center on.
       * @api
       */
      centerOn(coordinate, size, position) {
        this.centerOnInternal(
          fromUserCoordinate(coordinate, this.getProjection()),
          size,
          position
        );
      }
      /**
       * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
       * @param {import("./size.js").Size} size Box pixel size.
       * @param {import("./pixel.js").Pixel} position Position on the view to center on.
       */
      centerOnInternal(coordinate, size, position) {
        this.setCenterInternal(
          calculateCenterOn(
            coordinate,
            size,
            position,
            this.getResolution(),
            this.getRotation()
          )
        );
      }
      /**
       * Calculates the shift between map and viewport center.
       * @param {import("./coordinate.js").Coordinate} center Center.
       * @param {number} resolution Resolution.
       * @param {number} rotation Rotation.
       * @param {import("./size.js").Size} size Size.
       * @return {Array<number>|undefined} Center shift.
       */
      calculateCenterShift(center, resolution, rotation, size) {
        let centerShift;
        const padding = this.padding_;
        if (padding && center) {
          const reducedSize = this.getViewportSizeMinusPadding_(-rotation);
          const shiftedCenter = calculateCenterOn(
            center,
            size,
            [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]],
            resolution,
            rotation
          );
          centerShift = [
            center[0] - shiftedCenter[0],
            center[1] - shiftedCenter[1]
          ];
        }
        return centerShift;
      }
      /**
       * @return {boolean} Is defined.
       */
      isDef() {
        return !!this.getCenterInternal() && this.getResolution() !== void 0;
      }
      /**
       * Adds relative coordinates to the center of the view. Any extent constraint will apply.
       * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
       * @api
       */
      adjustCenter(deltaCoordinates) {
        const center = toUserCoordinate(this.targetCenter_, this.getProjection());
        this.setCenter([
          center[0] + deltaCoordinates[0],
          center[1] + deltaCoordinates[1]
        ]);
      }
      /**
       * Adds relative coordinates to the center of the view. Any extent constraint will apply.
       * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
       */
      adjustCenterInternal(deltaCoordinates) {
        const center = this.targetCenter_;
        this.setCenterInternal([
          center[0] + deltaCoordinates[0],
          center[1] + deltaCoordinates[1]
        ]);
      }
      /**
       * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
       * constraint will apply.
       * @param {number} ratio The ratio to apply on the view resolution.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       * @api
       */
      adjustResolution(ratio, anchor) {
        anchor = anchor && fromUserCoordinate(anchor, this.getProjection());
        this.adjustResolutionInternal(ratio, anchor);
      }
      /**
       * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
       * constraint will apply.
       * @param {number} ratio The ratio to apply on the view resolution.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       */
      adjustResolutionInternal(ratio, anchor) {
        const isMoving = this.getAnimating() || this.getInteracting();
        const size = this.getViewportSize_(this.getRotation());
        const newResolution = this.constraints_.resolution(
          this.targetResolution_ * ratio,
          0,
          size,
          isMoving
        );
        if (anchor) {
          this.targetCenter_ = this.calculateCenterZoom(newResolution, anchor);
        }
        this.targetResolution_ *= ratio;
        this.applyTargetState_();
      }
      /**
       * Adds a value to the view zoom level, optionally using an anchor. Any resolution
       * constraint will apply.
       * @param {number} delta Relative value to add to the zoom level.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       * @api
       */
      adjustZoom(delta, anchor) {
        this.adjustResolution(Math.pow(this.zoomFactor_, -delta), anchor);
      }
      /**
       * Adds a value to the view rotation, optionally using an anchor. Any rotation
       * constraint will apply.
       * @param {number} delta Relative value to add to the zoom rotation, in radians.
       * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
       * @api
       */
      adjustRotation(delta, anchor) {
        if (anchor) {
          anchor = fromUserCoordinate(anchor, this.getProjection());
        }
        this.adjustRotationInternal(delta, anchor);
      }
      /**
       * @param {number} delta Relative value to add to the zoom rotation, in radians.
       * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
       */
      adjustRotationInternal(delta, anchor) {
        const isMoving = this.getAnimating() || this.getInteracting();
        const newRotation = this.constraints_.rotation(
          this.targetRotation_ + delta,
          isMoving
        );
        if (anchor) {
          this.targetCenter_ = this.calculateCenterRotate(newRotation, anchor);
        }
        this.targetRotation_ += delta;
        this.applyTargetState_();
      }
      /**
       * Set the center of the current view. Any extent constraint will apply.
       * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
       * @observable
       * @api
       */
      setCenter(center) {
        this.setCenterInternal(
          center ? fromUserCoordinate(center, this.getProjection()) : center
        );
      }
      /**
       * Set the center using the view projection (not the user projection).
       * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
       */
      setCenterInternal(center) {
        this.targetCenter_ = center;
        this.applyTargetState_();
      }
      /**
       * @param {import("./ViewHint.js").default} hint Hint.
       * @param {number} delta Delta.
       * @return {number} New value.
       */
      setHint(hint, delta) {
        this.hints_[hint] += delta;
        this.changed();
        return this.hints_[hint];
      }
      /**
       * Set the resolution for this view. Any resolution constraint will apply.
       * @param {number|undefined} resolution The resolution of the view.
       * @observable
       * @api
       */
      setResolution(resolution) {
        this.targetResolution_ = resolution;
        this.applyTargetState_();
      }
      /**
       * Set the rotation for this view. Any rotation constraint will apply.
       * @param {number} rotation The rotation of the view in radians.
       * @observable
       * @api
       */
      setRotation(rotation) {
        this.targetRotation_ = rotation;
        this.applyTargetState_();
      }
      /**
       * Zoom to a specific zoom level. Any resolution constrain will apply.
       * @param {number} zoom Zoom level.
       * @api
       */
      setZoom(zoom) {
        this.setResolution(this.getResolutionForZoom(zoom));
      }
      /**
       * Recompute rotation/resolution/center based on target values.
       * Note: we have to compute rotation first, then resolution and center considering that
       * parameters can influence one another in case a view extent constraint is present.
       * @param {boolean} [doNotCancelAnims] Do not cancel animations.
       * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
       * @private
       */
      applyTargetState_(doNotCancelAnims, forceMoving) {
        const isMoving = this.getAnimating() || this.getInteracting() || forceMoving;
        const newRotation = this.constraints_.rotation(
          this.targetRotation_,
          isMoving
        );
        const size = this.getViewportSize_(newRotation);
        const newResolution = this.constraints_.resolution(
          this.targetResolution_,
          0,
          size,
          isMoving
        );
        const newCenter = this.constraints_.center(
          this.targetCenter_,
          newResolution,
          size,
          isMoving,
          this.calculateCenterShift(
            this.targetCenter_,
            newResolution,
            newRotation,
            size
          )
        );
        if (this.get(ViewProperty_default.ROTATION) !== newRotation) {
          this.set(ViewProperty_default.ROTATION, newRotation);
        }
        if (this.get(ViewProperty_default.RESOLUTION) !== newResolution) {
          this.set(ViewProperty_default.RESOLUTION, newResolution);
          this.set("zoom", this.getZoom(), true);
        }
        if (!newCenter || !this.get(ViewProperty_default.CENTER) || !equals3(this.get(ViewProperty_default.CENTER), newCenter)) {
          this.set(ViewProperty_default.CENTER, newCenter);
        }
        if (this.getAnimating() && !doNotCancelAnims) {
          this.cancelAnimations();
        }
        this.cancelAnchor_ = void 0;
      }
      /**
       * If any constraints need to be applied, an animation will be triggered.
       * This is typically done on interaction end.
       * Note: calling this with a duration of 0 will apply the constrained values straight away,
       * without animation.
       * @param {number} [duration] The animation duration in ms.
       * @param {number} [resolutionDirection] Which direction to zoom.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       */
      resolveConstraints(duration, resolutionDirection, anchor) {
        duration = duration !== void 0 ? duration : 200;
        const direction = resolutionDirection || 0;
        const newRotation = this.constraints_.rotation(this.targetRotation_);
        const size = this.getViewportSize_(newRotation);
        const newResolution = this.constraints_.resolution(
          this.targetResolution_,
          direction,
          size
        );
        const newCenter = this.constraints_.center(
          this.targetCenter_,
          newResolution,
          size,
          false,
          this.calculateCenterShift(
            this.targetCenter_,
            newResolution,
            newRotation,
            size
          )
        );
        if (duration === 0 && !this.cancelAnchor_) {
          this.targetResolution_ = newResolution;
          this.targetRotation_ = newRotation;
          this.targetCenter_ = newCenter;
          this.applyTargetState_();
          return;
        }
        anchor = anchor || (duration === 0 ? this.cancelAnchor_ : void 0);
        this.cancelAnchor_ = void 0;
        if (this.getResolution() !== newResolution || this.getRotation() !== newRotation || !this.getCenterInternal() || !equals3(this.getCenterInternal(), newCenter)) {
          if (this.getAnimating()) {
            this.cancelAnimations();
          }
          this.animateInternal({
            rotation: newRotation,
            center: newCenter,
            resolution: newResolution,
            duration,
            easing: easeOut,
            anchor
          });
        }
      }
      /**
       * Notify the View that an interaction has started.
       * The view state will be resolved to a stable one if needed
       * (depending on its constraints).
       * @api
       */
      beginInteraction() {
        this.resolveConstraints(0);
        this.setHint(ViewHint_default.INTERACTING, 1);
      }
      /**
       * Notify the View that an interaction has ended. The view state will be resolved
       * to a stable one if needed (depending on its constraints).
       * @param {number} [duration] Animation duration in ms.
       * @param {number} [resolutionDirection] Which direction to zoom.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       * @api
       */
      endInteraction(duration, resolutionDirection, anchor) {
        anchor = anchor && fromUserCoordinate(anchor, this.getProjection());
        this.endInteractionInternal(duration, resolutionDirection, anchor);
      }
      /**
       * Notify the View that an interaction has ended. The view state will be resolved
       * to a stable one if needed (depending on its constraints).
       * @param {number} [duration] Animation duration in ms.
       * @param {number} [resolutionDirection] Which direction to zoom.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       */
      endInteractionInternal(duration, resolutionDirection, anchor) {
        if (!this.getInteracting()) {
          return;
        }
        this.setHint(ViewHint_default.INTERACTING, -1);
        this.resolveConstraints(duration, resolutionDirection, anchor);
      }
      /**
       * Get a valid position for the view center according to the current constraints.
       * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
       * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
       * This is useful to guess a valid center position at a different zoom level.
       * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
       */
      getConstrainedCenter(targetCenter, targetResolution) {
        const size = this.getViewportSize_(this.getRotation());
        return this.constraints_.center(
          targetCenter,
          targetResolution || this.getResolution(),
          size
        );
      }
      /**
       * Get a valid zoom level according to the current view constraints.
       * @param {number|undefined} targetZoom Target zoom.
       * @param {number} [direction=0] Indicate which resolution should be used
       * by a renderer if the view resolution does not match any resolution of the tile source.
       * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
       * will be used. If -1, the nearest higher resolution will be used.
       * @return {number|undefined} Valid zoom level.
       */
      getConstrainedZoom(targetZoom, direction) {
        const targetRes = this.getResolutionForZoom(targetZoom);
        return this.getZoomForResolution(
          this.getConstrainedResolution(targetRes, direction)
        );
      }
      /**
       * Get a valid resolution according to the current view constraints.
       * @param {number|undefined} targetResolution Target resolution.
       * @param {number} [direction=0] Indicate which resolution should be used
       * by a renderer if the view resolution does not match any resolution of the tile source.
       * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
       * will be used. If -1, the nearest higher resolution will be used.
       * @return {number|undefined} Valid resolution.
       */
      getConstrainedResolution(targetResolution, direction) {
        direction = direction || 0;
        const size = this.getViewportSize_(this.getRotation());
        return this.constraints_.resolution(targetResolution, direction, size);
      }
    };
    View_default = View;
  }
});

// node_modules/ol/layer/Layer.js
function inView(layerState, viewState) {
  if (!layerState.visible) {
    return false;
  }
  const resolution = viewState.resolution;
  if (resolution < layerState.minResolution || resolution >= layerState.maxResolution) {
    return false;
  }
  const zoom = viewState.zoom;
  return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
}
var Layer, Layer_default;
var init_Layer = __esm({
  "node_modules/ol/layer/Layer.js"() {
    init_Base();
    init_EventType();
    init_Property();
    init_EventType2();
    init_View();
    init_asserts();
    init_extent();
    init_events();
    Layer = class extends Base_default {
      /**
       * @param {Options<SourceType>} options Layer options.
       */
      constructor(options) {
        const baseOptions = Object.assign({}, options);
        delete baseOptions.source;
        super(baseOptions);
        this.on;
        this.once;
        this.un;
        this.mapPrecomposeKey_ = null;
        this.mapRenderKey_ = null;
        this.sourceChangeKey_ = null;
        this.renderer_ = null;
        this.sourceReady_ = false;
        this.rendered = false;
        if (options.render) {
          this.render = options.render;
        }
        if (options.map) {
          this.setMap(options.map);
        }
        this.addChangeListener(
          Property_default.SOURCE,
          this.handleSourcePropertyChange_
        );
        const source = options.source ? (
          /** @type {SourceType} */
          options.source
        ) : null;
        this.setSource(source);
      }
      /**
       * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
       * @return {Array<import("./Layer.js").default>} Array of layers.
       */
      getLayersArray(array) {
        array = array ? array : [];
        array.push(this);
        return array;
      }
      /**
       * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
       * @return {Array<import("./Layer.js").State>} List of layer states.
       */
      getLayerStatesArray(states) {
        states = states ? states : [];
        states.push(this.getLayerState());
        return states;
      }
      /**
       * Get the layer source.
       * @return {SourceType|null} The layer source (or `null` if not yet set).
       * @observable
       * @api
       */
      getSource() {
        return (
          /** @type {SourceType} */
          this.get(Property_default.SOURCE) || null
        );
      }
      /**
       * @return {SourceType|null} The source being rendered.
       */
      getRenderSource() {
        return this.getSource();
      }
      /**
       * @return {import("../source/Source.js").State} Source state.
       */
      getSourceState() {
        const source = this.getSource();
        return !source ? "undefined" : source.getState();
      }
      /**
       * @private
       */
      handleSourceChange_() {
        this.changed();
        if (this.sourceReady_ || this.getSource().getState() !== "ready") {
          return;
        }
        this.sourceReady_ = true;
        this.dispatchEvent("sourceready");
      }
      /**
       * @private
       */
      handleSourcePropertyChange_() {
        if (this.sourceChangeKey_) {
          unlistenByKey(this.sourceChangeKey_);
          this.sourceChangeKey_ = null;
        }
        this.sourceReady_ = false;
        const source = this.getSource();
        if (source) {
          this.sourceChangeKey_ = listen(
            source,
            EventType_default.CHANGE,
            this.handleSourceChange_,
            this
          );
          if (source.getState() === "ready") {
            this.sourceReady_ = true;
            setTimeout(() => {
              this.dispatchEvent("sourceready");
            }, 0);
          }
        }
        this.changed();
      }
      /**
       * @param {import("../pixel").Pixel} pixel Pixel.
       * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
       * an array of features.
       */
      getFeatures(pixel) {
        if (!this.renderer_) {
          return Promise.resolve([]);
        }
        return this.renderer_.getFeatures(pixel);
      }
      /**
       * @param {import("../pixel").Pixel} pixel Pixel.
       * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
       */
      getData(pixel) {
        if (!this.renderer_ || !this.rendered) {
          return null;
        }
        return this.renderer_.getData(pixel);
      }
      /**
       * The layer is visible on the map view, i.e. within its min/max resolution or zoom and
       * extent, not set to `visible: false`, and not inside a layer group that is set
       * to `visible: false`.
       * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
       * Only required when the layer is not added to a map.
       * @return {boolean} The layer is visible in the map view.
       * @api
       */
      isVisible(view) {
        let frameState;
        const map = this.getMapInternal();
        if (!view && map) {
          view = map.getView();
        }
        if (view instanceof View_default) {
          frameState = {
            viewState: view.getState(),
            extent: view.calculateExtent()
          };
        } else {
          frameState = view;
        }
        if (!frameState.layerStatesArray && map) {
          frameState.layerStatesArray = map.getLayerGroup().getLayerStatesArray();
        }
        let layerState;
        if (frameState.layerStatesArray) {
          layerState = frameState.layerStatesArray.find(
            (layerState2) => layerState2.layer === this
          );
        } else {
          layerState = this.getLayerState();
        }
        const layerExtent = this.getExtent();
        return inView(layerState, frameState.viewState) && (!layerExtent || intersects(layerExtent, frameState.extent));
      }
      /**
       * Get the attributions of the source of this layer for the given view.
       * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
       * Only required when the layer is not added to a map.
       * @return {Array<string>} Attributions for this layer at the given view.
       * @api
       */
      getAttributions(view) {
        if (!this.isVisible(view)) {
          return [];
        }
        let getAttributions;
        const source = this.getSource();
        if (source) {
          getAttributions = source.getAttributions();
        }
        if (!getAttributions) {
          return [];
        }
        const frameState = view instanceof View_default ? view.getViewStateAndExtent() : view;
        let attributions = getAttributions(frameState);
        if (!Array.isArray(attributions)) {
          attributions = [attributions];
        }
        return attributions;
      }
      /**
       * In charge to manage the rendering of the layer. One layer type is
       * bounded with one layer renderer.
       * @param {?import("../Map.js").FrameState} frameState Frame state.
       * @param {HTMLElement} target Target which the renderer may (but need not) use
       * for rendering its content.
       * @return {HTMLElement|null} The rendered element.
       */
      render(frameState, target) {
        const layerRenderer = this.getRenderer();
        if (layerRenderer.prepareFrame(frameState)) {
          this.rendered = true;
          return layerRenderer.renderFrame(frameState, target);
        }
        return null;
      }
      /**
       * Called when a layer is not visible during a map render.
       */
      unrender() {
        this.rendered = false;
      }
      /**
       * For use inside the library only.
       * @param {import("../Map.js").default|null} map Map.
       */
      setMapInternal(map) {
        if (!map) {
          this.unrender();
        }
        this.set(Property_default.MAP, map);
      }
      /**
       * For use inside the library only.
       * @return {import("../Map.js").default|null} Map.
       */
      getMapInternal() {
        return this.get(Property_default.MAP);
      }
      /**
       * Sets the layer to be rendered on top of other layers on a map. The map will
       * not manage this layer in its layers collection. This
       * is useful for temporary layers. To remove an unmanaged layer from the map,
       * use `#setMap(null)`.
       *
       * To add the layer to a map and have it managed by the map, use
       * {@link module:ol/Map~Map#addLayer} instead.
       * @param {import("../Map.js").default|null} map Map.
       * @api
       */
      setMap(map) {
        if (this.mapPrecomposeKey_) {
          unlistenByKey(this.mapPrecomposeKey_);
          this.mapPrecomposeKey_ = null;
        }
        if (!map) {
          this.changed();
        }
        if (this.mapRenderKey_) {
          unlistenByKey(this.mapRenderKey_);
          this.mapRenderKey_ = null;
        }
        if (map) {
          this.mapPrecomposeKey_ = listen(
            map,
            EventType_default2.PRECOMPOSE,
            function(evt) {
              const renderEvent = (
                /** @type {import("../render/Event.js").default} */
                evt
              );
              const layerStatesArray = renderEvent.frameState.layerStatesArray;
              const layerState = this.getLayerState(false);
              assert(
                !layerStatesArray.some(function(arrayLayerState) {
                  return arrayLayerState.layer === layerState.layer;
                }),
                "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
              );
              layerStatesArray.push(layerState);
            },
            this
          );
          this.mapRenderKey_ = listen(this, EventType_default.CHANGE, map.render, map);
          this.changed();
        }
      }
      /**
       * Set the layer source.
       * @param {SourceType|null} source The layer source.
       * @observable
       * @api
       */
      setSource(source) {
        this.set(Property_default.SOURCE, source);
      }
      /**
       * Get the renderer for this layer.
       * @return {RendererType|null} The layer renderer.
       */
      getRenderer() {
        if (!this.renderer_) {
          this.renderer_ = this.createRenderer();
        }
        return this.renderer_;
      }
      /**
       * @return {boolean} The layer has a renderer.
       */
      hasRenderer() {
        return !!this.renderer_;
      }
      /**
       * Create a renderer for this layer.
       * @return {RendererType} A layer renderer.
       * @protected
       */
      createRenderer() {
        return null;
      }
      /**
       * Clean up.
       */
      disposeInternal() {
        if (this.renderer_) {
          this.renderer_.dispose();
          delete this.renderer_;
        }
        this.setSource(null);
        super.disposeInternal();
      }
    };
    Layer_default = Layer;
  }
});

// node_modules/ol/render/Event.js
var RenderEvent, Event_default2;
var init_Event2 = __esm({
  "node_modules/ol/render/Event.js"() {
    init_Event();
    RenderEvent = class extends Event_default {
      /**
       * @param {import("./EventType.js").default} type Type.
       * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
       *     CSS pixels to rendered pixels.
       * @param {import("../Map.js").FrameState} [frameState] Frame state.
       * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
       */
      constructor(type, inversePixelTransform, frameState, context) {
        super(type);
        this.inversePixelTransform = inversePixelTransform;
        this.frameState = frameState;
        this.context = context;
      }
    };
    Event_default2 = RenderEvent;
  }
});

// node_modules/ol/css.js
var CLASS_HIDDEN, CLASS_UNSELECTABLE, CLASS_CONTROL, CLASS_COLLAPSED, fontRegEx, fontRegExMatchIndex, getFontParameters;
var init_css = __esm({
  "node_modules/ol/css.js"() {
    CLASS_HIDDEN = "ol-hidden";
    CLASS_UNSELECTABLE = "ol-unselectable";
    CLASS_CONTROL = "ol-control";
    CLASS_COLLAPSED = "ol-collapsed";
    fontRegEx = new RegExp(
      [
        "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
        "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
        "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
        "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
        "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
        "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
        `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`
      ].join(""),
      "i"
    );
    fontRegExMatchIndex = [
      "style",
      "variant",
      "weight",
      "size",
      "lineHeight",
      "family"
    ];
    getFontParameters = function(fontSpec) {
      const match = fontSpec.match(fontRegEx);
      if (!match) {
        return null;
      }
      const style = (
        /** @type {FontParameters} */
        {
          lineHeight: "normal",
          size: "1.2em",
          style: "normal",
          weight: "normal",
          variant: "normal"
        }
      );
      for (let i = 0, ii = fontRegExMatchIndex.length; i < ii; ++i) {
        const value = match[i + 1];
        if (value !== void 0) {
          style[fontRegExMatchIndex[i]] = value;
        }
      }
      style.families = style.family.split(/,\s?/);
      return style;
    };
  }
});

// node_modules/ol/dom.js
function createCanvasContext2D(width, height, canvasPool3, settings) {
  let canvas;
  if (canvasPool3 && canvasPool3.length) {
    canvas = /** @type {HTMLCanvasElement} */
    canvasPool3.shift();
  } else if (WORKER_OFFSCREEN_CANVAS) {
    canvas = new OffscreenCanvas(width || 300, height || 300);
  } else {
    canvas = document.createElement("canvas");
  }
  if (width) {
    canvas.width = width;
  }
  if (height) {
    canvas.height = height;
  }
  return (
    /** @type {CanvasRenderingContext2D} */
    canvas.getContext("2d", settings)
  );
}
function releaseCanvas(context) {
  const canvas = context.canvas;
  canvas.width = 1;
  canvas.height = 1;
  context.clearRect(0, 0, 1, 1);
}
function replaceNode(newNode, oldNode) {
  const parent = oldNode.parentNode;
  if (parent) {
    parent.replaceChild(newNode, oldNode);
  }
}
function removeNode(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
function removeChildren(node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
}
function replaceChildren(node, children) {
  const oldChildren = node.childNodes;
  for (let i = 0; true; ++i) {
    const oldChild = oldChildren[i];
    const newChild = children[i];
    if (!oldChild && !newChild) {
      break;
    }
    if (oldChild === newChild) {
      continue;
    }
    if (!oldChild) {
      node.appendChild(newChild);
      continue;
    }
    if (!newChild) {
      node.removeChild(oldChild);
      --i;
      continue;
    }
    node.insertBefore(newChild, oldChild);
  }
}
var init_dom = __esm({
  "node_modules/ol/dom.js"() {
    init_has();
  }
});

// node_modules/ol/render/canvas.js
function measureText(font, text) {
  if (!measureContext) {
    measureContext = createCanvasContext2D(1, 1);
  }
  if (font != measureFont) {
    measureContext.font = font;
    measureFont = measureContext.font;
  }
  return measureContext.measureText(text);
}
function measureTextWidth(font, text) {
  return measureText(font, text).width;
}
function measureAndCacheTextWidth(font, text, cache3) {
  if (text in cache3) {
    return cache3[text];
  }
  const width = text.split("\n").reduce((prev, curr) => Math.max(prev, measureTextWidth(font, curr)), 0);
  cache3[text] = width;
  return width;
}
function getTextDimensions(baseStyle, chunks) {
  const widths = [];
  const heights = [];
  const lineWidths = [];
  let width = 0;
  let lineWidth = 0;
  let height = 0;
  let lineHeight = 0;
  for (let i = 0, ii = chunks.length; i <= ii; i += 2) {
    const text = chunks[i];
    if (text === "\n" || i === ii) {
      width = Math.max(width, lineWidth);
      lineWidths.push(lineWidth);
      lineWidth = 0;
      height += lineHeight;
      continue;
    }
    const font = chunks[i + 1] || baseStyle.font;
    const currentWidth = measureTextWidth(font, text);
    widths.push(currentWidth);
    lineWidth += currentWidth;
    const currentHeight = measureTextHeight(font);
    heights.push(currentHeight);
    lineHeight = Math.max(lineHeight, currentHeight);
  }
  return { width, height, widths, heights, lineWidths };
}
function drawImageOrLabel(context, transform2, opacity, labelOrImage, originX, originY, w, h, x, y, scale4) {
  context.save();
  if (opacity !== 1) {
    context.globalAlpha *= opacity;
  }
  if (transform2) {
    context.transform.apply(context, transform2);
  }
  if (
    /** @type {*} */
    labelOrImage.contextInstructions
  ) {
    context.translate(x, y);
    context.scale(scale4[0], scale4[1]);
    executeLabelInstructions(
      /** @type {Label} */
      labelOrImage,
      context
    );
  } else if (scale4[0] < 0 || scale4[1] < 0) {
    context.translate(x, y);
    context.scale(scale4[0], scale4[1]);
    context.drawImage(
      /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
      labelOrImage,
      originX,
      originY,
      w,
      h,
      0,
      0,
      w,
      h
    );
  } else {
    context.drawImage(
      /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
      labelOrImage,
      originX,
      originY,
      w,
      h,
      x,
      y,
      w * scale4[0],
      h * scale4[1]
    );
  }
  context.restore();
}
function executeLabelInstructions(label, context) {
  const contextInstructions = label.contextInstructions;
  for (let i = 0, ii = contextInstructions.length; i < ii; i += 2) {
    if (Array.isArray(contextInstructions[i + 1])) {
      context[contextInstructions[i]].apply(
        context,
        contextInstructions[i + 1]
      );
    } else {
      context[contextInstructions[i]] = contextInstructions[i + 1];
    }
  }
}
var defaultFont, defaultFillStyle, defaultLineCap, defaultLineDash, defaultLineDashOffset, defaultLineJoin, defaultMiterLimit, defaultStrokeStyle, defaultTextAlign, defaultTextBaseline, defaultPadding, defaultLineWidth, checkedFonts, measureContext, measureFont, textHeights, registerFont, measureTextHeight;
var init_canvas = __esm({
  "node_modules/ol/render/canvas.js"() {
    init_Object();
    init_has();
    init_obj();
    init_dom();
    init_css();
    defaultFont = "10px sans-serif";
    defaultFillStyle = "#000";
    defaultLineCap = "round";
    defaultLineDash = [];
    defaultLineDashOffset = 0;
    defaultLineJoin = "round";
    defaultMiterLimit = 10;
    defaultStrokeStyle = "#000";
    defaultTextAlign = "center";
    defaultTextBaseline = "middle";
    defaultPadding = [0, 0, 0, 0];
    defaultLineWidth = 1;
    checkedFonts = new Object_default();
    measureContext = null;
    textHeights = {};
    registerFont = function() {
      const retries = 100;
      const size = "32px ";
      const referenceFonts = ["monospace", "serif"];
      const len = referenceFonts.length;
      const text = "wmytzilWMYTZIL@#/&?$%10\uF013";
      let interval, referenceWidth;
      function isAvailable(fontStyle, fontWeight, fontFamily) {
        let available = true;
        for (let i = 0; i < len; ++i) {
          const referenceFont = referenceFonts[i];
          referenceWidth = measureTextWidth(
            fontStyle + " " + fontWeight + " " + size + referenceFont,
            text
          );
          if (fontFamily != referenceFont) {
            const width = measureTextWidth(
              fontStyle + " " + fontWeight + " " + size + fontFamily + "," + referenceFont,
              text
            );
            available = available && width != referenceWidth;
          }
        }
        if (available) {
          return true;
        }
        return false;
      }
      function check() {
        let done = true;
        const fonts = checkedFonts.getKeys();
        for (let i = 0, ii = fonts.length; i < ii; ++i) {
          const font = fonts[i];
          if (checkedFonts.get(font) < retries) {
            if (isAvailable.apply(this, font.split("\n"))) {
              clear(textHeights);
              measureContext = null;
              measureFont = void 0;
              checkedFonts.set(font, retries);
            } else {
              checkedFonts.set(font, checkedFonts.get(font) + 1, true);
              done = false;
            }
          }
        }
        if (done) {
          clearInterval(interval);
          interval = void 0;
        }
      }
      return function(fontSpec) {
        const font = getFontParameters(fontSpec);
        if (!font) {
          return;
        }
        const families = font.families;
        for (let i = 0, ii = families.length; i < ii; ++i) {
          const family = families[i];
          const key = font.style + "\n" + font.weight + "\n" + family;
          if (checkedFonts.get(key) === void 0) {
            checkedFonts.set(key, retries, true);
            if (!isAvailable(font.style, font.weight, family)) {
              checkedFonts.set(key, 0, true);
              if (interval === void 0) {
                interval = setInterval(check, 32);
              }
            }
          }
        }
      };
    }();
    measureTextHeight = /* @__PURE__ */ function() {
      let measureElement;
      return function(fontSpec) {
        let height = textHeights[fontSpec];
        if (height == void 0) {
          if (WORKER_OFFSCREEN_CANVAS) {
            const font = getFontParameters(fontSpec);
            const metrics = measureText(fontSpec, "\u017Dg");
            const lineHeight = isNaN(Number(font.lineHeight)) ? 1.2 : Number(font.lineHeight);
            height = lineHeight * (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
          } else {
            if (!measureElement) {
              measureElement = document.createElement("div");
              measureElement.innerHTML = "M";
              measureElement.style.minHeight = "0";
              measureElement.style.maxHeight = "none";
              measureElement.style.height = "auto";
              measureElement.style.padding = "0";
              measureElement.style.border = "none";
              measureElement.style.position = "absolute";
              measureElement.style.display = "block";
              measureElement.style.left = "-99999px";
            }
            measureElement.style.font = fontSpec;
            document.body.appendChild(measureElement);
            height = measureElement.offsetHeight;
            document.body.removeChild(measureElement);
          }
          textHeights[fontSpec] = height;
        }
        return height;
      };
    }();
  }
});

// node_modules/ol/MapEventType.js
var MapEventType_default;
var init_MapEventType = __esm({
  "node_modules/ol/MapEventType.js"() {
    MapEventType_default = {
      /**
       * Triggered after a map frame is rendered.
       * @event module:ol/MapEvent~MapEvent#postrender
       * @api
       */
      POSTRENDER: "postrender",
      /**
       * Triggered when the map starts moving.
       * @event module:ol/MapEvent~MapEvent#movestart
       * @api
       */
      MOVESTART: "movestart",
      /**
       * Triggered after the map is moved.
       * @event module:ol/MapEvent~MapEvent#moveend
       * @api
       */
      MOVEEND: "moveend",
      /**
       * Triggered when loading of additional map data (tiles, images, features) starts.
       * @event module:ol/MapEvent~MapEvent#loadstart
       * @api
       */
      LOADSTART: "loadstart",
      /**
       * Triggered when loading of additional map data has completed.
       * @event module:ol/MapEvent~MapEvent#loadend
       * @api
       */
      LOADEND: "loadend"
    };
  }
});

// node_modules/ol/control/Control.js
var Control_exports = {};
__export(Control_exports, {
  default: () => Control_default
});
var Control, Control_default;
var init_Control = __esm({
  "node_modules/ol/control/Control.js"() {
    init_Object();
    init_MapEventType();
    init_functions();
    init_events();
    init_dom();
    Control = class extends Object_default {
      /**
       * @param {Options} options Control options.
       */
      constructor(options) {
        super();
        const element = options.element;
        if (element && !options.target && !element.style.pointerEvents) {
          element.style.pointerEvents = "auto";
        }
        this.element = element ? element : null;
        this.target_ = null;
        this.map_ = null;
        this.listenerKeys = [];
        if (options.render) {
          this.render = options.render;
        }
        if (options.target) {
          this.setTarget(options.target);
        }
      }
      /**
       * Clean up.
       */
      disposeInternal() {
        removeNode(this.element);
        super.disposeInternal();
      }
      /**
       * Get the map associated with this control.
       * @return {import("../Map.js").default|null} Map.
       * @api
       */
      getMap() {
        return this.map_;
      }
      /**
       * Remove the control from its current map and attach it to the new map.
       * Pass `null` to just remove the control from the current map.
       * Subclasses may set up event handlers to get notified about changes to
       * the map here.
       * @param {import("../Map.js").default|null} map Map.
       * @api
       */
      setMap(map) {
        if (this.map_) {
          removeNode(this.element);
        }
        for (let i = 0, ii = this.listenerKeys.length; i < ii; ++i) {
          unlistenByKey(this.listenerKeys[i]);
        }
        this.listenerKeys.length = 0;
        this.map_ = map;
        if (map) {
          const target = this.target_ ? this.target_ : map.getOverlayContainerStopEvent();
          target.appendChild(this.element);
          if (this.render !== VOID) {
            this.listenerKeys.push(
              listen(map, MapEventType_default.POSTRENDER, this.render, this)
            );
          }
          map.render();
        }
      }
      /**
       * Renders the control.
       * @param {import("../MapEvent.js").default} mapEvent Map event.
       * @api
       */
      render(mapEvent) {
      }
      /**
       * This function is used to set a target element for the control. It has no
       * effect if it is called after the control has been added to the map (i.e.
       * after `setMap` is called on the control). If no `target` is set in the
       * options passed to the control constructor and if `setTarget` is not called
       * then the control is added to the map's overlay container.
       * @param {HTMLElement|string} target Target.
       * @api
       */
      setTarget(target) {
        this.target_ = typeof target === "string" ? document.getElementById(target) : target;
      }
    };
    Control_default = Control;
  }
});

// node_modules/ol/size.js
function hasArea(size) {
  return size[0] > 0 && size[1] > 0;
}
function scale3(size, ratio, dest) {
  if (dest === void 0) {
    dest = [0, 0];
  }
  dest[0] = size[0] * ratio + 0.5 | 0;
  dest[1] = size[1] * ratio + 0.5 | 0;
  return dest;
}
function toSize(size, dest) {
  if (Array.isArray(size)) {
    return size;
  }
  if (dest === void 0) {
    dest = [size, size];
  } else {
    dest[0] = size;
    dest[1] = size;
  }
  return dest;
}
var init_size = __esm({
  "node_modules/ol/size.js"() {
  }
});

// node_modules/ol/ImageState.js
var ImageState_default;
var init_ImageState = __esm({
  "node_modules/ol/ImageState.js"() {
    ImageState_default = {
      IDLE: 0,
      LOADING: 1,
      LOADED: 2,
      ERROR: 3,
      EMPTY: 4
    };
  }
});

// node_modules/ol/Image.js
function listenImage(image, loadHandler, errorHandler) {
  const img = (
    /** @type {HTMLImageElement} */
    image
  );
  let listening = true;
  let decoding = false;
  let loaded = false;
  const listenerKeys = [
    listenOnce(img, EventType_default.LOAD, function() {
      loaded = true;
      if (!decoding) {
        loadHandler();
      }
    })
  ];
  if (img.src && IMAGE_DECODE) {
    decoding = true;
    img.decode().then(function() {
      if (listening) {
        loadHandler();
      }
    }).catch(function(error) {
      if (listening) {
        if (loaded) {
          loadHandler();
        } else {
          errorHandler();
        }
      }
    });
  } else {
    listenerKeys.push(listenOnce(img, EventType_default.ERROR, errorHandler));
  }
  return function unlisten() {
    listening = false;
    listenerKeys.forEach(unlistenByKey);
  };
}
function load(image, src) {
  return new Promise((resolve, reject) => {
    function handleLoad() {
      unlisten();
      resolve(image);
    }
    function handleError() {
      unlisten();
      reject(new Error("Image load error"));
    }
    function unlisten() {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    }
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    if (src) {
      image.src = src;
    }
  });
}
function decodeFallback(image, src) {
  if (src) {
    image.src = src;
  }
  return image.src && IMAGE_DECODE ? new Promise(
    (resolve, reject) => image.decode().then(() => resolve(image)).catch(
      (e) => image.complete && image.width ? resolve(image) : reject(e)
    )
  ) : load(image);
}
var init_Image = __esm({
  "node_modules/ol/Image.js"() {
    init_EventType();
    init_has();
    init_events();
  }
});

// node_modules/ol/source/Source.js
function adaptAttributions(attributionLike) {
  if (!attributionLike) {
    return null;
  }
  if (Array.isArray(attributionLike)) {
    return function(frameState) {
      return attributionLike;
    };
  }
  if (typeof attributionLike === "function") {
    return attributionLike;
  }
  return function(frameState) {
    return [attributionLike];
  };
}
var Source, Source_default;
var init_Source = __esm({
  "node_modules/ol/source/Source.js"() {
    init_Object();
    init_proj();
    Source = class extends Object_default {
      /**
       * @param {Options} options Source options.
       */
      constructor(options) {
        super();
        this.projection = get3(options.projection);
        this.attributions_ = adaptAttributions(options.attributions);
        this.attributionsCollapsible_ = options.attributionsCollapsible !== void 0 ? options.attributionsCollapsible : true;
        this.loading = false;
        this.state_ = options.state !== void 0 ? options.state : "ready";
        this.wrapX_ = options.wrapX !== void 0 ? options.wrapX : false;
        this.interpolate_ = !!options.interpolate;
        this.viewResolver = null;
        this.viewRejector = null;
        const self2 = this;
        this.viewPromise_ = new Promise(function(resolve, reject) {
          self2.viewResolver = resolve;
          self2.viewRejector = reject;
        });
      }
      /**
       * Get the attribution function for the source.
       * @return {?Attribution} Attribution function.
       * @api
       */
      getAttributions() {
        return this.attributions_;
      }
      /**
       * @return {boolean} Attributions are collapsible.
       * @api
       */
      getAttributionsCollapsible() {
        return this.attributionsCollapsible_;
      }
      /**
       * Get the projection of the source.
       * @return {import("../proj/Projection.js").default|null} Projection.
       * @api
       */
      getProjection() {
        return this.projection;
      }
      /**
       * @param {import("../proj/Projection").default} [projection] Projection.
       * @return {Array<number>|null} Resolutions.
       */
      getResolutions(projection) {
        return null;
      }
      /**
       * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
       */
      getView() {
        return this.viewPromise_;
      }
      /**
       * Get the state of the source, see {@link import("./Source.js").State} for possible states.
       * @return {import("./Source.js").State} State.
       * @api
       */
      getState() {
        return this.state_;
      }
      /**
       * @return {boolean|undefined} Wrap X.
       */
      getWrapX() {
        return this.wrapX_;
      }
      /**
       * @return {boolean} Use linear interpolation when resampling.
       */
      getInterpolate() {
        return this.interpolate_;
      }
      /**
       * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
       * @api
       */
      refresh() {
        this.changed();
      }
      /**
       * Set the attributions of the source.
       * @param {AttributionLike|undefined} attributions Attributions.
       *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
       *     or `undefined`.
       * @api
       */
      setAttributions(attributions) {
        this.attributions_ = adaptAttributions(attributions);
        this.changed();
      }
      /**
       * Set the state of the source.
       * @param {import("./Source.js").State} state State.
       */
      setState(state) {
        this.state_ = state;
        this.changed();
      }
    };
    Source_default = Source;
  }
});

// node_modules/ol/renderer/Layer.js
var LayerRenderer, Layer_default2;
var init_Layer2 = __esm({
  "node_modules/ol/renderer/Layer.js"() {
    init_EventType();
    init_ImageState();
    init_Observable();
    init_util();
    LayerRenderer = class extends Observable_default {
      /**
       * @param {LayerType} layer Layer.
       */
      constructor(layer) {
        super();
        this.ready = true;
        this.boundHandleImageChange_ = this.handleImageChange_.bind(this);
        this.layer_ = layer;
        this.declutterExecutorGroup = null;
      }
      /**
       * Asynchronous layer level hit detection.
       * @param {import("../pixel.js").Pixel} pixel Pixel.
       * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
       * an array of features.
       */
      getFeatures(pixel) {
        return abstract();
      }
      /**
       * @param {import("../pixel.js").Pixel} pixel Pixel.
       * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
       */
      getData(pixel) {
        return null;
      }
      /**
       * Determine whether render should be called.
       * @abstract
       * @param {import("../Map.js").FrameState} frameState Frame state.
       * @return {boolean} Layer is ready to be rendered.
       */
      prepareFrame(frameState) {
        return abstract();
      }
      /**
       * Render the layer.
       * @abstract
       * @param {import("../Map.js").FrameState} frameState Frame state.
       * @param {HTMLElement|null} target Target that may be used to render content to.
       * @return {HTMLElement|null} The rendered element.
       */
      renderFrame(frameState, target) {
        return abstract();
      }
      /**
       * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
       * @param {number} zoom Zoom level.
       * @param {import("../Tile.js").default} tile Tile.
       * @return {boolean|void} If `false`, the tile will not be considered loaded.
       */
      loadedTileCallback(tiles, zoom, tile) {
        if (!tiles[zoom]) {
          tiles[zoom] = {};
        }
        tiles[zoom][tile.tileCoord.toString()] = tile;
        return void 0;
      }
      /**
       * Create a function that adds loaded tiles to the tile lookup.
       * @param {import("../source/Tile.js").default} source Tile source.
       * @param {import("../proj/Projection.js").default} projection Projection of the tiles.
       * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
       * @return {function(number, import("../TileRange.js").default):boolean} A function that can be
       *     called with a zoom level and a tile range to add loaded tiles to the lookup.
       * @protected
       */
      createLoadedTileFinder(source, projection, tiles) {
        return (
          /**
           * @param {number} zoom Zoom level.
           * @param {import("../TileRange.js").default} tileRange Tile range.
           * @return {boolean} The tile range is fully loaded.
           */
          (zoom, tileRange) => {
            const callback = this.loadedTileCallback.bind(this, tiles, zoom);
            return source.forEachLoadedTile(projection, zoom, tileRange, callback);
          }
        );
      }
      /**
       * @abstract
       * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
       * @param {import("../Map.js").FrameState} frameState Frame state.
       * @param {number} hitTolerance Hit tolerance in pixels.
       * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
       * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
       * @return {T|undefined} Callback result.
       * @template T
       */
      forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
        return void 0;
      }
      /**
       * @return {LayerType} Layer.
       */
      getLayer() {
        return this.layer_;
      }
      /**
       * Perform action necessary to get the layer rendered after new fonts have loaded
       * @abstract
       */
      handleFontsChanged() {
      }
      /**
       * Handle changes in image state.
       * @param {import("../events/Event.js").default} event Image change event.
       * @private
       */
      handleImageChange_(event) {
        const image = (
          /** @type {import("../Image.js").default} */
          event.target
        );
        if (image.getState() === ImageState_default.LOADED || image.getState() === ImageState_default.ERROR) {
          this.renderIfReadyAndVisible();
        }
      }
      /**
       * Load the image if not already loaded, and register the image change
       * listener if needed.
       * @param {import("../Image.js").default} image Image.
       * @return {boolean} `true` if the image is already loaded, `false` otherwise.
       * @protected
       */
      loadImage(image) {
        let imageState = image.getState();
        if (imageState != ImageState_default.LOADED && imageState != ImageState_default.ERROR) {
          image.addEventListener(EventType_default.CHANGE, this.boundHandleImageChange_);
        }
        if (imageState == ImageState_default.IDLE) {
          image.load();
          imageState = image.getState();
        }
        return imageState == ImageState_default.LOADED;
      }
      /**
       * @protected
       */
      renderIfReadyAndVisible() {
        const layer = this.getLayer();
        if (layer && layer.getVisible() && layer.getSourceState() === "ready") {
          layer.changed();
        }
      }
      /**
       * Clean up.
       */
      disposeInternal() {
        delete this.layer_;
        super.disposeInternal();
      }
    };
    Layer_default2 = LayerRenderer;
  }
});

// node_modules/ol/renderer/canvas/Layer.js
function createPixelContext() {
  pixelContext = createCanvasContext2D(1, 1, void 0, {
    willReadFrequently: true
  });
}
var canvasPool2, pixelContext, CanvasLayerRenderer, Layer_default3;
var init_Layer3 = __esm({
  "node_modules/ol/renderer/canvas/Layer.js"() {
    init_Layer2();
    init_Event2();
    init_EventType2();
    init_transform();
    init_color();
    init_dom();
    init_array();
    init_extent();
    canvasPool2 = [];
    pixelContext = null;
    CanvasLayerRenderer = class extends Layer_default2 {
      /**
       * @param {LayerType} layer Layer.
       */
      constructor(layer) {
        super(layer);
        this.container = null;
        this.renderedResolution;
        this.tempTransform = create();
        this.pixelTransform = create();
        this.inversePixelTransform = create();
        this.context = null;
        this.containerReused = false;
        this.pixelContext_ = null;
        this.frameState = null;
      }
      /**
       * @param {import('../../DataTile.js').ImageLike} image Image.
       * @param {number} col The column index.
       * @param {number} row The row index.
       * @return {Uint8ClampedArray|null} The image data.
       */
      getImageData(image, col, row) {
        if (!pixelContext) {
          createPixelContext();
        }
        pixelContext.clearRect(0, 0, 1, 1);
        let data;
        try {
          pixelContext.drawImage(image, col, row, 1, 1, 0, 0, 1, 1);
          data = pixelContext.getImageData(0, 0, 1, 1).data;
        } catch (err) {
          pixelContext = null;
          return null;
        }
        return data;
      }
      /**
       * @param {import('../../Map.js').FrameState} frameState Frame state.
       * @return {string} Background color.
       */
      getBackground(frameState) {
        const layer = this.getLayer();
        let background = layer.getBackground();
        if (typeof background === "function") {
          background = background(frameState.viewState.resolution);
        }
        return background || void 0;
      }
      /**
       * Get a rendering container from an existing target, if compatible.
       * @param {HTMLElement} target Potential render target.
       * @param {string} transform CSS Transform.
       * @param {string} [backgroundColor] Background color.
       */
      useContainer(target, transform2, backgroundColor) {
        const layerClassName = this.getLayer().getClassName();
        let container, context;
        if (target && target.className === layerClassName && (!backgroundColor || target && target.style.backgroundColor && equals(
          asArray(target.style.backgroundColor),
          asArray(backgroundColor)
        ))) {
          const canvas = target.firstElementChild;
          if (canvas instanceof HTMLCanvasElement) {
            context = canvas.getContext("2d");
          }
        }
        if (context && context.canvas.style.transform === transform2) {
          this.container = target;
          this.context = context;
          this.containerReused = true;
        } else if (this.containerReused) {
          this.container = null;
          this.context = null;
          this.containerReused = false;
        } else if (this.container) {
          this.container.style.backgroundColor = null;
        }
        if (!this.container) {
          container = document.createElement("div");
          container.className = layerClassName;
          let style = container.style;
          style.position = "absolute";
          style.width = "100%";
          style.height = "100%";
          context = createCanvasContext2D();
          const canvas = context.canvas;
          container.appendChild(canvas);
          style = canvas.style;
          style.position = "absolute";
          style.left = "0";
          style.transformOrigin = "top left";
          this.container = container;
          this.context = context;
        }
        if (!this.containerReused && backgroundColor && !this.container.style.backgroundColor) {
          this.container.style.backgroundColor = backgroundColor;
        }
      }
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       * @param {import("../../extent.js").Extent} extent Clip extent.
       * @protected
       */
      clipUnrotated(context, frameState, extent) {
        const topLeft = getTopLeft(extent);
        const topRight = getTopRight(extent);
        const bottomRight = getBottomRight(extent);
        const bottomLeft = getBottomLeft(extent);
        apply(frameState.coordinateToPixelTransform, topLeft);
        apply(frameState.coordinateToPixelTransform, topRight);
        apply(frameState.coordinateToPixelTransform, bottomRight);
        apply(frameState.coordinateToPixelTransform, bottomLeft);
        const inverted = this.inversePixelTransform;
        apply(inverted, topLeft);
        apply(inverted, topRight);
        apply(inverted, bottomRight);
        apply(inverted, bottomLeft);
        context.save();
        context.beginPath();
        context.moveTo(Math.round(topLeft[0]), Math.round(topLeft[1]));
        context.lineTo(Math.round(topRight[0]), Math.round(topRight[1]));
        context.lineTo(Math.round(bottomRight[0]), Math.round(bottomRight[1]));
        context.lineTo(Math.round(bottomLeft[0]), Math.round(bottomLeft[1]));
        context.clip();
      }
      /**
       * @param {import("../../render/EventType.js").default} type Event type.
       * @param {CanvasRenderingContext2D} context Context.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       * @private
       */
      dispatchRenderEvent_(type, context, frameState) {
        const layer = this.getLayer();
        if (layer.hasListener(type)) {
          const event = new Event_default2(
            type,
            this.inversePixelTransform,
            frameState,
            context
          );
          layer.dispatchEvent(event);
        }
      }
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       * @protected
       */
      preRender(context, frameState) {
        this.frameState = frameState;
        this.dispatchRenderEvent_(EventType_default2.PRERENDER, context, frameState);
      }
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       * @protected
       */
      postRender(context, frameState) {
        this.dispatchRenderEvent_(EventType_default2.POSTRENDER, context, frameState);
      }
      /**
       * Creates a transform for rendering to an element that will be rotated after rendering.
       * @param {import("../../coordinate.js").Coordinate} center Center.
       * @param {number} resolution Resolution.
       * @param {number} rotation Rotation.
       * @param {number} pixelRatio Pixel ratio.
       * @param {number} width Width of the rendered element (in pixels).
       * @param {number} height Height of the rendered element (in pixels).
       * @param {number} offsetX Offset on the x-axis in view coordinates.
       * @protected
       * @return {!import("../../transform.js").Transform} Transform.
       */
      getRenderTransform(center, resolution, rotation, pixelRatio, width, height, offsetX) {
        const dx1 = width / 2;
        const dy1 = height / 2;
        const sx = pixelRatio / resolution;
        const sy = -sx;
        const dx2 = -center[0] + offsetX;
        const dy2 = -center[1];
        return compose(
          this.tempTransform,
          dx1,
          dy1,
          sx,
          sy,
          -rotation,
          dx2,
          dy2
        );
      }
      /**
       * Clean up.
       */
      disposeInternal() {
        delete this.frameState;
        super.disposeInternal();
      }
    };
    Layer_default3 = CanvasLayerRenderer;
  }
});

// node_modules/ol/Feature.js
var Feature_exports = {};
__export(Feature_exports, {
  createStyleFunction: () => createStyleFunction,
  default: () => Feature_default
});
function createStyleFunction(obj) {
  if (typeof obj === "function") {
    return obj;
  }
  let styles;
  if (Array.isArray(obj)) {
    styles = obj;
  } else {
    assert(
      typeof /** @type {?} */
      obj.getZIndex === "function",
      "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"
    );
    const style = (
      /** @type {import("./style/Style.js").default} */
      obj
    );
    styles = [style];
  }
  return function() {
    return styles;
  };
}
var Feature, Feature_default;
var init_Feature = __esm({
  "node_modules/ol/Feature.js"() {
    init_Object();
    init_EventType();
    init_asserts();
    init_events();
    Feature = class _Feature extends Object_default {
      /**
       * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
       *     You may pass a Geometry object directly, or an object literal containing
       *     properties. If you pass an object literal, you may include a Geometry
       *     associated with a `geometry` key.
       */
      constructor(geometryOrProperties) {
        super();
        this.on;
        this.once;
        this.un;
        this.id_ = void 0;
        this.geometryName_ = "geometry";
        this.style_ = null;
        this.styleFunction_ = void 0;
        this.geometryChangeKey_ = null;
        this.addChangeListener(this.geometryName_, this.handleGeometryChanged_);
        if (geometryOrProperties) {
          if (typeof /** @type {?} */
          geometryOrProperties.getSimplifiedGeometry === "function") {
            const geometry = (
              /** @type {Geometry} */
              geometryOrProperties
            );
            this.setGeometry(geometry);
          } else {
            const properties = geometryOrProperties;
            this.setProperties(properties);
          }
        }
      }
      /**
       * Clone this feature. If the original feature has a geometry it
       * is also cloned. The feature id is not set in the clone.
       * @return {Feature<Geometry>} The clone.
       * @api
       */
      clone() {
        const clone2 = (
          /** @type {Feature<Geometry>} */
          new _Feature(this.hasProperties() ? this.getProperties() : null)
        );
        clone2.setGeometryName(this.getGeometryName());
        const geometry = this.getGeometry();
        if (geometry) {
          clone2.setGeometry(
            /** @type {Geometry} */
            geometry.clone()
          );
        }
        const style = this.getStyle();
        if (style) {
          clone2.setStyle(style);
        }
        return clone2;
      }
      /**
       * Get the feature's default geometry.  A feature may have any number of named
       * geometries.  The "default" geometry (the one that is rendered by default) is
       * set when calling {@link module:ol/Feature~Feature#setGeometry}.
       * @return {Geometry|undefined} The default geometry for the feature.
       * @api
       * @observable
       */
      getGeometry() {
        return (
          /** @type {Geometry|undefined} */
          this.get(this.geometryName_)
        );
      }
      /**
       * Get the feature identifier.  This is a stable identifier for the feature and
       * is either set when reading data from a remote source or set explicitly by
       * calling {@link module:ol/Feature~Feature#setId}.
       * @return {number|string|undefined} Id.
       * @api
       */
      getId() {
        return this.id_;
      }
      /**
       * Get the name of the feature's default geometry.  By default, the default
       * geometry is named `geometry`.
       * @return {string} Get the property name associated with the default geometry
       *     for this feature.
       * @api
       */
      getGeometryName() {
        return this.geometryName_;
      }
      /**
       * Get the feature's style. Will return what was provided to the
       * {@link module:ol/Feature~Feature#setStyle} method.
       * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
       * @api
       */
      getStyle() {
        return this.style_;
      }
      /**
       * Get the feature's style function.
       * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
       * representing the current style of this feature.
       * @api
       */
      getStyleFunction() {
        return this.styleFunction_;
      }
      /**
       * @private
       */
      handleGeometryChange_() {
        this.changed();
      }
      /**
       * @private
       */
      handleGeometryChanged_() {
        if (this.geometryChangeKey_) {
          unlistenByKey(this.geometryChangeKey_);
          this.geometryChangeKey_ = null;
        }
        const geometry = this.getGeometry();
        if (geometry) {
          this.geometryChangeKey_ = listen(
            geometry,
            EventType_default.CHANGE,
            this.handleGeometryChange_,
            this
          );
        }
        this.changed();
      }
      /**
       * Set the default geometry for the feature.  This will update the property
       * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
       * @param {Geometry|undefined} geometry The new geometry.
       * @api
       * @observable
       */
      setGeometry(geometry) {
        this.set(this.geometryName_, geometry);
      }
      /**
       * Set the style for the feature to override the layer style.  This can be a
       * single style object, an array of styles, or a function that takes a
       * resolution and returns an array of styles. To unset the feature style, call
       * `setStyle()` without arguments or a falsey value.
       * @param {import("./style/Style.js").StyleLike} [style] Style for this feature.
       * @api
       * @fires module:ol/events/Event~BaseEvent#event:change
       */
      setStyle(style) {
        this.style_ = style;
        this.styleFunction_ = !style ? void 0 : createStyleFunction(style);
        this.changed();
      }
      /**
       * Set the feature id.  The feature id is considered stable and may be used when
       * requesting features or comparing identifiers returned from a remote source.
       * The feature id can be used with the
       * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
       * @param {number|string|undefined} id The feature id.
       * @api
       * @fires module:ol/events/Event~BaseEvent#event:change
       */
      setId(id) {
        this.id_ = id;
        this.changed();
      }
      /**
       * Set the property name to be used when getting the feature's default geometry.
       * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
       * this name will be returned.
       * @param {string} name The property name of the default geometry.
       * @api
       */
      setGeometryName(name) {
        this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_);
        this.geometryName_ = name;
        this.addChangeListener(this.geometryName_, this.handleGeometryChanged_);
        this.handleGeometryChanged_();
      }
    };
    Feature_default = Feature;
  }
});

// node_modules/ol/style/Fill.js
var Fill, Fill_default;
var init_Fill = __esm({
  "node_modules/ol/style/Fill.js"() {
    Fill = class _Fill {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options || {};
        this.color_ = options.color !== void 0 ? options.color : null;
      }
      /**
       * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
       * @return {Fill} The cloned style.
       * @api
       */
      clone() {
        const color = this.getColor();
        return new _Fill({
          color: Array.isArray(color) ? color.slice() : color || void 0
        });
      }
      /**
       * Get the fill color.
       * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|null} Color.
       * @api
       */
      getColor() {
        return this.color_;
      }
      /**
       * Set the color.
       *
       * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|null} color Color.
       * @api
       */
      setColor(color) {
        this.color_ = color;
      }
    };
    Fill_default = Fill;
  }
});

// node_modules/ol/geom/flat/interpolate.js
function interpolatePoint(flatCoordinates, offset, end, stride, fraction, dest, dimension) {
  let o, t;
  const n = (end - offset) / stride;
  if (n === 1) {
    o = offset;
  } else if (n === 2) {
    o = offset;
    t = fraction;
  } else if (n !== 0) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    let length = 0;
    const cumulativeLengths = [0];
    for (let i = offset + stride; i < end; i += stride) {
      const x2 = flatCoordinates[i];
      const y2 = flatCoordinates[i + 1];
      length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      cumulativeLengths.push(length);
      x1 = x2;
      y1 = y2;
    }
    const target = fraction * length;
    const index = binarySearch(cumulativeLengths, target);
    if (index < 0) {
      t = (target - cumulativeLengths[-index - 2]) / (cumulativeLengths[-index - 1] - cumulativeLengths[-index - 2]);
      o = offset + (-index - 2) * stride;
    } else {
      o = offset + index * stride;
    }
  }
  dimension = dimension > 1 ? dimension : 2;
  dest = dest ? dest : new Array(dimension);
  for (let i = 0; i < dimension; ++i) {
    dest[i] = o === void 0 ? NaN : t === void 0 ? flatCoordinates[o + i] : lerp(flatCoordinates[o + i], flatCoordinates[o + stride + i], t);
  }
  return dest;
}
var init_interpolate = __esm({
  "node_modules/ol/geom/flat/interpolate.js"() {
    init_array();
    init_math();
  }
});

// node_modules/ol/geom/flat/length.js
function lineStringLength(flatCoordinates, offset, end, stride) {
  let x1 = flatCoordinates[offset];
  let y1 = flatCoordinates[offset + 1];
  let length = 0;
  for (let i = offset + stride; i < end; i += stride) {
    const x2 = flatCoordinates[i];
    const y2 = flatCoordinates[i + 1];
    length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    x1 = x2;
    y1 = y2;
  }
  return length;
}
var init_length = __esm({
  "node_modules/ol/geom/flat/length.js"() {
  }
});

// node_modules/ol/style/Stroke.js
var Stroke, Stroke_default;
var init_Stroke = __esm({
  "node_modules/ol/style/Stroke.js"() {
    Stroke = class _Stroke {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options || {};
        this.color_ = options.color !== void 0 ? options.color : null;
        this.lineCap_ = options.lineCap;
        this.lineDash_ = options.lineDash !== void 0 ? options.lineDash : null;
        this.lineDashOffset_ = options.lineDashOffset;
        this.lineJoin_ = options.lineJoin;
        this.miterLimit_ = options.miterLimit;
        this.width_ = options.width;
      }
      /**
       * Clones the style.
       * @return {Stroke} The cloned style.
       * @api
       */
      clone() {
        const color = this.getColor();
        return new _Stroke({
          color: Array.isArray(color) ? color.slice() : color || void 0,
          lineCap: this.getLineCap(),
          lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
          lineDashOffset: this.getLineDashOffset(),
          lineJoin: this.getLineJoin(),
          miterLimit: this.getMiterLimit(),
          width: this.getWidth()
        });
      }
      /**
       * Get the stroke color.
       * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
       * @api
       */
      getColor() {
        return this.color_;
      }
      /**
       * Get the line cap type for the stroke.
       * @return {CanvasLineCap|undefined} Line cap.
       * @api
       */
      getLineCap() {
        return this.lineCap_;
      }
      /**
       * Get the line dash style for the stroke.
       * @return {Array<number>|null} Line dash.
       * @api
       */
      getLineDash() {
        return this.lineDash_;
      }
      /**
       * Get the line dash offset for the stroke.
       * @return {number|undefined} Line dash offset.
       * @api
       */
      getLineDashOffset() {
        return this.lineDashOffset_;
      }
      /**
       * Get the line join type for the stroke.
       * @return {CanvasLineJoin|undefined} Line join.
       * @api
       */
      getLineJoin() {
        return this.lineJoin_;
      }
      /**
       * Get the miter limit for the stroke.
       * @return {number|undefined} Miter limit.
       * @api
       */
      getMiterLimit() {
        return this.miterLimit_;
      }
      /**
       * Get the stroke width.
       * @return {number|undefined} Width.
       * @api
       */
      getWidth() {
        return this.width_;
      }
      /**
       * Set the color.
       *
       * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
       * @api
       */
      setColor(color) {
        this.color_ = color;
      }
      /**
       * Set the line cap.
       *
       * @param {CanvasLineCap|undefined} lineCap Line cap.
       * @api
       */
      setLineCap(lineCap) {
        this.lineCap_ = lineCap;
      }
      /**
       * Set the line dash.
       *
       * @param {Array<number>|null} lineDash Line dash.
       * @api
       */
      setLineDash(lineDash) {
        this.lineDash_ = lineDash;
      }
      /**
       * Set the line dash offset.
       *
       * @param {number|undefined} lineDashOffset Line dash offset.
       * @api
       */
      setLineDashOffset(lineDashOffset) {
        this.lineDashOffset_ = lineDashOffset;
      }
      /**
       * Set the line join.
       *
       * @param {CanvasLineJoin|undefined} lineJoin Line join.
       * @api
       */
      setLineJoin(lineJoin) {
        this.lineJoin_ = lineJoin;
      }
      /**
       * Set the miter limit.
       *
       * @param {number|undefined} miterLimit Miter limit.
       * @api
       */
      setMiterLimit(miterLimit) {
        this.miterLimit_ = miterLimit;
      }
      /**
       * Set the width.
       *
       * @param {number|undefined} width Width.
       * @api
       */
      setWidth(width) {
        this.width_ = width;
      }
    };
    Stroke_default = Stroke;
  }
});

// node_modules/ol/style/Image.js
var ImageStyle, Image_default;
var init_Image2 = __esm({
  "node_modules/ol/style/Image.js"() {
    init_util();
    init_size();
    ImageStyle = class _ImageStyle {
      /**
       * @param {Options} options Options.
       */
      constructor(options) {
        this.opacity_ = options.opacity;
        this.rotateWithView_ = options.rotateWithView;
        this.rotation_ = options.rotation;
        this.scale_ = options.scale;
        this.scaleArray_ = toSize(options.scale);
        this.displacement_ = options.displacement;
        this.declutterMode_ = options.declutterMode;
      }
      /**
       * Clones the style.
       * @return {ImageStyle} The cloned style.
       * @api
       */
      clone() {
        const scale4 = this.getScale();
        return new _ImageStyle({
          opacity: this.getOpacity(),
          scale: Array.isArray(scale4) ? scale4.slice() : scale4,
          rotation: this.getRotation(),
          rotateWithView: this.getRotateWithView(),
          displacement: this.getDisplacement().slice(),
          declutterMode: this.getDeclutterMode()
        });
      }
      /**
       * Get the symbolizer opacity.
       * @return {number} Opacity.
       * @api
       */
      getOpacity() {
        return this.opacity_;
      }
      /**
       * Determine whether the symbolizer rotates with the map.
       * @return {boolean} Rotate with map.
       * @api
       */
      getRotateWithView() {
        return this.rotateWithView_;
      }
      /**
       * Get the symoblizer rotation.
       * @return {number} Rotation.
       * @api
       */
      getRotation() {
        return this.rotation_;
      }
      /**
       * Get the symbolizer scale.
       * @return {number|import("../size.js").Size} Scale.
       * @api
       */
      getScale() {
        return this.scale_;
      }
      /**
       * Get the symbolizer scale array.
       * @return {import("../size.js").Size} Scale array.
       */
      getScaleArray() {
        return this.scaleArray_;
      }
      /**
       * Get the displacement of the shape
       * @return {Array<number>} Shape's center displacement
       * @api
       */
      getDisplacement() {
        return this.displacement_;
      }
      /**
       * Get the declutter mode of the shape
       * @return {"declutter"|"obstacle"|"none"|undefined} Shape's declutter mode
       * @api
       */
      getDeclutterMode() {
        return this.declutterMode_;
      }
      /**
       * Get the anchor point in pixels. The anchor determines the center point for the
       * symbolizer.
       * @abstract
       * @return {Array<number>} Anchor.
       */
      getAnchor() {
        return abstract();
      }
      /**
       * Get the image element for the symbolizer.
       * @abstract
       * @param {number} pixelRatio Pixel ratio.
       * @return {import('../DataTile.js').ImageLike} Image element.
       */
      getImage(pixelRatio) {
        return abstract();
      }
      /**
       * @abstract
       * @return {import('../DataTile.js').ImageLike} Image element.
       */
      getHitDetectionImage() {
        return abstract();
      }
      /**
       * Get the image pixel ratio.
       * @param {number} pixelRatio Pixel ratio.
       * @return {number} Pixel ratio.
       */
      getPixelRatio(pixelRatio) {
        return 1;
      }
      /**
       * @abstract
       * @return {import("../ImageState.js").default} Image state.
       */
      getImageState() {
        return abstract();
      }
      /**
       * @abstract
       * @return {import("../size.js").Size} Image size.
       */
      getImageSize() {
        return abstract();
      }
      /**
       * Get the origin of the symbolizer.
       * @abstract
       * @return {Array<number>} Origin.
       */
      getOrigin() {
        return abstract();
      }
      /**
       * Get the size of the symbolizer (in pixels).
       * @abstract
       * @return {import("../size.js").Size} Size.
       */
      getSize() {
        return abstract();
      }
      /**
       * Set the displacement.
       *
       * @param {Array<number>} displacement Displacement.
       * @api
       */
      setDisplacement(displacement) {
        this.displacement_ = displacement;
      }
      /**
       * Set the opacity.
       *
       * @param {number} opacity Opacity.
       * @api
       */
      setOpacity(opacity) {
        this.opacity_ = opacity;
      }
      /**
       * Set whether to rotate the style with the view.
       *
       * @param {boolean} rotateWithView Rotate with map.
       * @api
       */
      setRotateWithView(rotateWithView) {
        this.rotateWithView_ = rotateWithView;
      }
      /**
       * Set the rotation.
       *
       * @param {number} rotation Rotation.
       * @api
       */
      setRotation(rotation) {
        this.rotation_ = rotation;
      }
      /**
       * Set the scale.
       *
       * @param {number|import("../size.js").Size} scale Scale.
       * @api
       */
      setScale(scale4) {
        this.scale_ = scale4;
        this.scaleArray_ = toSize(scale4);
      }
      /**
       * @abstract
       * @param {function(import("../events/Event.js").default): void} listener Listener function.
       */
      listenImageChange(listener) {
        abstract();
      }
      /**
       * Load not yet loaded URI.
       * @abstract
       */
      load() {
        abstract();
      }
      /**
       * @abstract
       * @param {function(import("../events/Event.js").default): void} listener Listener function.
       */
      unlistenImageChange(listener) {
        abstract();
      }
    };
    Image_default = ImageStyle;
  }
});

// node_modules/ol/colorlike.js
function asColorLike(color) {
  if (Array.isArray(color)) {
    return toString2(color);
  }
  return color;
}
var init_colorlike = __esm({
  "node_modules/ol/colorlike.js"() {
    init_color();
  }
});

// node_modules/ol/style/RegularShape.js
var RegularShape, RegularShape_default;
var init_RegularShape = __esm({
  "node_modules/ol/style/RegularShape.js"() {
    init_ImageState();
    init_Image2();
    init_color();
    init_colorlike();
    init_dom();
    init_canvas();
    RegularShape = class _RegularShape extends Image_default {
      /**
       * @param {Options} options Options.
       */
      constructor(options) {
        const rotateWithView = options.rotateWithView !== void 0 ? options.rotateWithView : false;
        super({
          opacity: 1,
          rotateWithView,
          rotation: options.rotation !== void 0 ? options.rotation : 0,
          scale: options.scale !== void 0 ? options.scale : 1,
          displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
          declutterMode: options.declutterMode
        });
        this.canvases_;
        this.hitDetectionCanvas_ = null;
        this.fill_ = options.fill !== void 0 ? options.fill : null;
        this.origin_ = [0, 0];
        this.points_ = options.points;
        this.radius_ = options.radius !== void 0 ? options.radius : options.radius1;
        this.radius2_ = options.radius2;
        this.angle_ = options.angle !== void 0 ? options.angle : 0;
        this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
        this.size_;
        this.renderOptions_;
        this.render();
      }
      /**
       * Clones the style.
       * @return {RegularShape} The cloned style.
       * @api
       */
      clone() {
        const scale4 = this.getScale();
        const style = new _RegularShape({
          fill: this.getFill() ? this.getFill().clone() : void 0,
          points: this.getPoints(),
          radius: this.getRadius(),
          radius2: this.getRadius2(),
          angle: this.getAngle(),
          stroke: this.getStroke() ? this.getStroke().clone() : void 0,
          rotation: this.getRotation(),
          rotateWithView: this.getRotateWithView(),
          scale: Array.isArray(scale4) ? scale4.slice() : scale4,
          displacement: this.getDisplacement().slice(),
          declutterMode: this.getDeclutterMode()
        });
        style.setOpacity(this.getOpacity());
        return style;
      }
      /**
       * Get the anchor point in pixels. The anchor determines the center point for the
       * symbolizer.
       * @return {Array<number>} Anchor.
       * @api
       */
      getAnchor() {
        const size = this.size_;
        const displacement = this.getDisplacement();
        const scale4 = this.getScaleArray();
        return [
          size[0] / 2 - displacement[0] / scale4[0],
          size[1] / 2 + displacement[1] / scale4[1]
        ];
      }
      /**
       * Get the angle used in generating the shape.
       * @return {number} Shape's rotation in radians.
       * @api
       */
      getAngle() {
        return this.angle_;
      }
      /**
       * Get the fill style for the shape.
       * @return {import("./Fill.js").default|null} Fill style.
       * @api
       */
      getFill() {
        return this.fill_;
      }
      /**
       * Set the fill style.
       * @param {import("./Fill.js").default|null} fill Fill style.
       * @api
       */
      setFill(fill) {
        this.fill_ = fill;
        this.render();
      }
      /**
       * @return {HTMLCanvasElement} Image element.
       */
      getHitDetectionImage() {
        if (!this.hitDetectionCanvas_) {
          this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
            this.renderOptions_
          );
        }
        return this.hitDetectionCanvas_;
      }
      /**
       * Get the image icon.
       * @param {number} pixelRatio Pixel ratio.
       * @return {HTMLCanvasElement} Image or Canvas element.
       * @api
       */
      getImage(pixelRatio) {
        let image = this.canvases_[pixelRatio];
        if (!image) {
          const renderOptions = this.renderOptions_;
          const context = createCanvasContext2D(
            renderOptions.size * pixelRatio,
            renderOptions.size * pixelRatio
          );
          this.draw_(renderOptions, context, pixelRatio);
          image = context.canvas;
          this.canvases_[pixelRatio] = image;
        }
        return image;
      }
      /**
       * Get the image pixel ratio.
       * @param {number} pixelRatio Pixel ratio.
       * @return {number} Pixel ratio.
       */
      getPixelRatio(pixelRatio) {
        return pixelRatio;
      }
      /**
       * @return {import("../size.js").Size} Image size.
       */
      getImageSize() {
        return this.size_;
      }
      /**
       * @return {import("../ImageState.js").default} Image state.
       */
      getImageState() {
        return ImageState_default.LOADED;
      }
      /**
       * Get the origin of the symbolizer.
       * @return {Array<number>} Origin.
       * @api
       */
      getOrigin() {
        return this.origin_;
      }
      /**
       * Get the number of points for generating the shape.
       * @return {number} Number of points for stars and regular polygons.
       * @api
       */
      getPoints() {
        return this.points_;
      }
      /**
       * Get the (primary) radius for the shape.
       * @return {number} Radius.
       * @api
       */
      getRadius() {
        return this.radius_;
      }
      /**
       * Get the secondary radius for the shape.
       * @return {number|undefined} Radius2.
       * @api
       */
      getRadius2() {
        return this.radius2_;
      }
      /**
       * Get the size of the symbolizer (in pixels).
       * @return {import("../size.js").Size} Size.
       * @api
       */
      getSize() {
        return this.size_;
      }
      /**
       * Get the stroke style for the shape.
       * @return {import("./Stroke.js").default|null} Stroke style.
       * @api
       */
      getStroke() {
        return this.stroke_;
      }
      /**
       * Set the stroke style.
       * @param {import("./Stroke.js").default|null} stroke Stroke style.
       * @api
       */
      setStroke(stroke) {
        this.stroke_ = stroke;
        this.render();
      }
      /**
       * @param {function(import("../events/Event.js").default): void} listener Listener function.
       */
      listenImageChange(listener) {
      }
      /**
       * Load not yet loaded URI.
       */
      load() {
      }
      /**
       * @param {function(import("../events/Event.js").default): void} listener Listener function.
       */
      unlistenImageChange(listener) {
      }
      /**
       * Calculate additional canvas size needed for the miter.
       * @param {string} lineJoin Line join
       * @param {number} strokeWidth Stroke width
       * @param {number} miterLimit Miter limit
       * @return {number} Additional canvas size needed
       * @private
       */
      calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit) {
        if (strokeWidth === 0 || this.points_ === Infinity || lineJoin !== "bevel" && lineJoin !== "miter") {
          return strokeWidth;
        }
        let r1 = this.radius_;
        let r2 = this.radius2_ === void 0 ? r1 : this.radius2_;
        if (r1 < r2) {
          const tmp = r1;
          r1 = r2;
          r2 = tmp;
        }
        const points = this.radius2_ === void 0 ? this.points_ : this.points_ * 2;
        const alpha = 2 * Math.PI / points;
        const a = r2 * Math.sin(alpha);
        const b = Math.sqrt(r2 * r2 - a * a);
        const d = r1 - b;
        const e = Math.sqrt(a * a + d * d);
        const miterRatio = e / a;
        if (lineJoin === "miter" && miterRatio <= miterLimit) {
          return miterRatio * strokeWidth;
        }
        const k = strokeWidth / 2 / miterRatio;
        const l = strokeWidth / 2 * (d / e);
        const maxr = Math.sqrt((r1 + k) * (r1 + k) + l * l);
        const bevelAdd = maxr - r1;
        if (this.radius2_ === void 0 || lineJoin === "bevel") {
          return bevelAdd * 2;
        }
        const aa = r1 * Math.sin(alpha);
        const bb = Math.sqrt(r1 * r1 - aa * aa);
        const dd = r2 - bb;
        const ee = Math.sqrt(aa * aa + dd * dd);
        const innerMiterRatio = ee / aa;
        if (innerMiterRatio <= miterLimit) {
          const innerLength = innerMiterRatio * strokeWidth / 2 - r2 - r1;
          return 2 * Math.max(bevelAdd, innerLength);
        }
        return bevelAdd * 2;
      }
      /**
       * @return {RenderOptions}  The render options
       * @protected
       */
      createRenderOptions() {
        let lineCap = defaultLineCap;
        let lineJoin = defaultLineJoin;
        let miterLimit = 0;
        let lineDash = null;
        let lineDashOffset = 0;
        let strokeStyle;
        let strokeWidth = 0;
        if (this.stroke_) {
          strokeStyle = asColorLike(this.stroke_.getColor() ?? defaultStrokeStyle);
          strokeWidth = this.stroke_.getWidth() ?? defaultLineWidth;
          lineDash = this.stroke_.getLineDash();
          lineDashOffset = this.stroke_.getLineDashOffset() ?? 0;
          lineJoin = this.stroke_.getLineJoin() ?? defaultLineJoin;
          lineCap = this.stroke_.getLineCap() ?? defaultLineCap;
          miterLimit = this.stroke_.getMiterLimit() ?? defaultMiterLimit;
        }
        const add4 = this.calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit);
        const maxRadius = Math.max(this.radius_, this.radius2_ || 0);
        const size = Math.ceil(2 * maxRadius + add4);
        return {
          strokeStyle,
          strokeWidth,
          size,
          lineCap,
          lineDash,
          lineDashOffset,
          lineJoin,
          miterLimit
        };
      }
      /**
       * @protected
       */
      render() {
        this.renderOptions_ = this.createRenderOptions();
        const size = this.renderOptions_.size;
        this.canvases_ = {};
        this.hitDetectionCanvas_ = null;
        this.size_ = [size, size];
      }
      /**
       * @private
       * @param {RenderOptions} renderOptions Render options.
       * @param {CanvasRenderingContext2D} context The rendering context.
       * @param {number} pixelRatio The pixel ratio.
       */
      draw_(renderOptions, context, pixelRatio) {
        context.scale(pixelRatio, pixelRatio);
        context.translate(renderOptions.size / 2, renderOptions.size / 2);
        this.createPath_(context);
        if (this.fill_) {
          let color = this.fill_.getColor();
          if (color === null) {
            color = defaultFillStyle;
          }
          context.fillStyle = asColorLike(color);
          context.fill();
        }
        if (renderOptions.strokeStyle) {
          context.strokeStyle = renderOptions.strokeStyle;
          context.lineWidth = renderOptions.strokeWidth;
          if (renderOptions.lineDash) {
            context.setLineDash(renderOptions.lineDash);
            context.lineDashOffset = renderOptions.lineDashOffset;
          }
          context.lineCap = renderOptions.lineCap;
          context.lineJoin = renderOptions.lineJoin;
          context.miterLimit = renderOptions.miterLimit;
          context.stroke();
        }
      }
      /**
       * @private
       * @param {RenderOptions} renderOptions Render options.
       * @return {HTMLCanvasElement} Canvas containing the icon
       */
      createHitDetectionCanvas_(renderOptions) {
        let context;
        if (this.fill_) {
          let color = this.fill_.getColor();
          let opacity = 0;
          if (typeof color === "string") {
            color = asArray(color);
          }
          if (color === null) {
            opacity = 1;
          } else if (Array.isArray(color)) {
            opacity = color.length === 4 ? color[3] : 1;
          }
          if (opacity === 0) {
            context = createCanvasContext2D(renderOptions.size, renderOptions.size);
            this.drawHitDetectionCanvas_(renderOptions, context);
          }
        }
        return context ? context.canvas : this.getImage(1);
      }
      /**
       * @private
       * @param {CanvasRenderingContext2D} context The context to draw in.
       */
      createPath_(context) {
        let points = this.points_;
        const radius = this.radius_;
        if (points === Infinity) {
          context.arc(0, 0, radius, 0, 2 * Math.PI);
        } else {
          const radius2 = this.radius2_ === void 0 ? radius : this.radius2_;
          if (this.radius2_ !== void 0) {
            points *= 2;
          }
          const startAngle = this.angle_ - Math.PI / 2;
          const step = 2 * Math.PI / points;
          for (let i = 0; i < points; i++) {
            const angle0 = startAngle + i * step;
            const radiusC = i % 2 === 0 ? radius : radius2;
            context.lineTo(radiusC * Math.cos(angle0), radiusC * Math.sin(angle0));
          }
          context.closePath();
        }
      }
      /**
       * @private
       * @param {RenderOptions} renderOptions Render options.
       * @param {CanvasRenderingContext2D} context The context.
       */
      drawHitDetectionCanvas_(renderOptions, context) {
        context.translate(renderOptions.size / 2, renderOptions.size / 2);
        this.createPath_(context);
        context.fillStyle = defaultFillStyle;
        context.fill();
        if (renderOptions.strokeStyle) {
          context.strokeStyle = renderOptions.strokeStyle;
          context.lineWidth = renderOptions.strokeWidth;
          if (renderOptions.lineDash) {
            context.setLineDash(renderOptions.lineDash);
            context.lineDashOffset = renderOptions.lineDashOffset;
          }
          context.lineJoin = renderOptions.lineJoin;
          context.miterLimit = renderOptions.miterLimit;
          context.stroke();
        }
      }
    };
    RegularShape_default = RegularShape;
  }
});

// node_modules/ol/style/Circle.js
var CircleStyle, Circle_default;
var init_Circle = __esm({
  "node_modules/ol/style/Circle.js"() {
    init_RegularShape();
    CircleStyle = class _CircleStyle extends RegularShape_default {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options ? options : { radius: 5 };
        super({
          points: Infinity,
          fill: options.fill,
          radius: options.radius,
          stroke: options.stroke,
          scale: options.scale !== void 0 ? options.scale : 1,
          rotation: options.rotation !== void 0 ? options.rotation : 0,
          rotateWithView: options.rotateWithView !== void 0 ? options.rotateWithView : false,
          displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
          declutterMode: options.declutterMode
        });
      }
      /**
       * Clones the style.
       * @return {CircleStyle} The cloned style.
       * @api
       */
      clone() {
        const scale4 = this.getScale();
        const style = new _CircleStyle({
          fill: this.getFill() ? this.getFill().clone() : void 0,
          stroke: this.getStroke() ? this.getStroke().clone() : void 0,
          radius: this.getRadius(),
          scale: Array.isArray(scale4) ? scale4.slice() : scale4,
          rotation: this.getRotation(),
          rotateWithView: this.getRotateWithView(),
          displacement: this.getDisplacement().slice(),
          declutterMode: this.getDeclutterMode()
        });
        style.setOpacity(this.getOpacity());
        return style;
      }
      /**
       * Set the circle radius.
       *
       * @param {number} radius Circle radius.
       * @api
       */
      setRadius(radius) {
        this.radius_ = radius;
        this.render();
      }
    };
    Circle_default = CircleStyle;
  }
});

// node_modules/ol/style/Style.js
var Style_exports = {};
__export(Style_exports, {
  createDefaultStyle: () => createDefaultStyle,
  createEditingStyle: () => createEditingStyle,
  default: () => Style_default,
  toFunction: () => toFunction
});
function toFunction(obj) {
  let styleFunction;
  if (typeof obj === "function") {
    styleFunction = obj;
  } else {
    let styles;
    if (Array.isArray(obj)) {
      styles = obj;
    } else {
      assert(
        typeof /** @type {?} */
        obj.getZIndex === "function",
        "Expected an `Style` or an array of `Style`"
      );
      const style = (
        /** @type {Style} */
        obj
      );
      styles = [style];
    }
    styleFunction = function() {
      return styles;
    };
  }
  return styleFunction;
}
function createDefaultStyle(feature, resolution) {
  if (!defaultStyles) {
    const fill = new Fill_default({
      color: "rgba(255,255,255,0.4)"
    });
    const stroke = new Stroke_default({
      color: "#3399CC",
      width: 1.25
    });
    defaultStyles = [
      new Style({
        image: new Circle_default({
          fill,
          stroke,
          radius: 5
        }),
        fill,
        stroke
      })
    ];
  }
  return defaultStyles;
}
function createEditingStyle() {
  const styles = {};
  const white = [255, 255, 255, 1];
  const blue = [0, 153, 255, 1];
  const width = 3;
  styles["Polygon"] = [
    new Style({
      fill: new Fill_default({
        color: [255, 255, 255, 0.5]
      })
    })
  ];
  styles["MultiPolygon"] = styles["Polygon"];
  styles["LineString"] = [
    new Style({
      stroke: new Stroke_default({
        color: white,
        width: width + 2
      })
    }),
    new Style({
      stroke: new Stroke_default({
        color: blue,
        width
      })
    })
  ];
  styles["MultiLineString"] = styles["LineString"];
  styles["Circle"] = styles["Polygon"].concat(styles["LineString"]);
  styles["Point"] = [
    new Style({
      image: new Circle_default({
        radius: width * 2,
        fill: new Fill_default({
          color: blue
        }),
        stroke: new Stroke_default({
          color: white,
          width: width / 2
        })
      }),
      zIndex: Infinity
    })
  ];
  styles["MultiPoint"] = styles["Point"];
  styles["GeometryCollection"] = styles["Polygon"].concat(
    styles["LineString"],
    styles["Point"]
  );
  return styles;
}
function defaultGeometryFunction(feature) {
  return feature.getGeometry();
}
var Style, defaultStyles, Style_default;
var init_Style = __esm({
  "node_modules/ol/style/Style.js"() {
    init_Circle();
    init_Fill();
    init_Stroke();
    init_asserts();
    Style = class _Style {
      /**
       * @param {Options} [options] Style options.
       */
      constructor(options) {
        options = options || {};
        this.geometry_ = null;
        this.geometryFunction_ = defaultGeometryFunction;
        if (options.geometry !== void 0) {
          this.setGeometry(options.geometry);
        }
        this.fill_ = options.fill !== void 0 ? options.fill : null;
        this.image_ = options.image !== void 0 ? options.image : null;
        this.renderer_ = options.renderer !== void 0 ? options.renderer : null;
        this.hitDetectionRenderer_ = options.hitDetectionRenderer !== void 0 ? options.hitDetectionRenderer : null;
        this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
        this.text_ = options.text !== void 0 ? options.text : null;
        this.zIndex_ = options.zIndex;
      }
      /**
       * Clones the style.
       * @return {Style} The cloned style.
       * @api
       */
      clone() {
        let geometry = this.getGeometry();
        if (geometry && typeof geometry === "object") {
          geometry = /** @type {import("../geom/Geometry.js").default} */
          geometry.clone();
        }
        return new _Style({
          geometry: geometry ?? void 0,
          fill: this.getFill() ? this.getFill().clone() : void 0,
          image: this.getImage() ? this.getImage().clone() : void 0,
          renderer: this.getRenderer() ?? void 0,
          stroke: this.getStroke() ? this.getStroke().clone() : void 0,
          text: this.getText() ? this.getText().clone() : void 0,
          zIndex: this.getZIndex()
        });
      }
      /**
       * Get the custom renderer function that was configured with
       * {@link #setRenderer} or the `renderer` constructor option.
       * @return {RenderFunction|null} Custom renderer function.
       * @api
       */
      getRenderer() {
        return this.renderer_;
      }
      /**
       * Sets a custom renderer function for this style. When set, `fill`, `stroke`
       * and `image` options of the style will be ignored.
       * @param {RenderFunction|null} renderer Custom renderer function.
       * @api
       */
      setRenderer(renderer) {
        this.renderer_ = renderer;
      }
      /**
       * Sets a custom renderer function for this style used
       * in hit detection.
       * @param {RenderFunction|null} renderer Custom renderer function.
       * @api
       */
      setHitDetectionRenderer(renderer) {
        this.hitDetectionRenderer_ = renderer;
      }
      /**
       * Get the custom renderer function that was configured with
       * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
       * @return {RenderFunction|null} Custom renderer function.
       * @api
       */
      getHitDetectionRenderer() {
        return this.hitDetectionRenderer_;
      }
      /**
       * Get the geometry to be rendered.
       * @return {string|import("../geom/Geometry.js").default|GeometryFunction|null}
       * Feature property or geometry or function that returns the geometry that will
       * be rendered with this style.
       * @api
       */
      getGeometry() {
        return this.geometry_;
      }
      /**
       * Get the function used to generate a geometry for rendering.
       * @return {!GeometryFunction} Function that is called with a feature
       * and returns the geometry to render instead of the feature's geometry.
       * @api
       */
      getGeometryFunction() {
        return this.geometryFunction_;
      }
      /**
       * Get the fill style.
       * @return {import("./Fill.js").default|null} Fill style.
       * @api
       */
      getFill() {
        return this.fill_;
      }
      /**
       * Set the fill style.
       * @param {import("./Fill.js").default|null} fill Fill style.
       * @api
       */
      setFill(fill) {
        this.fill_ = fill;
      }
      /**
       * Get the image style.
       * @return {import("./Image.js").default|null} Image style.
       * @api
       */
      getImage() {
        return this.image_;
      }
      /**
       * Set the image style.
       * @param {import("./Image.js").default} image Image style.
       * @api
       */
      setImage(image) {
        this.image_ = image;
      }
      /**
       * Get the stroke style.
       * @return {import("./Stroke.js").default|null} Stroke style.
       * @api
       */
      getStroke() {
        return this.stroke_;
      }
      /**
       * Set the stroke style.
       * @param {import("./Stroke.js").default|null} stroke Stroke style.
       * @api
       */
      setStroke(stroke) {
        this.stroke_ = stroke;
      }
      /**
       * Get the text style.
       * @return {import("./Text.js").default|null} Text style.
       * @api
       */
      getText() {
        return this.text_;
      }
      /**
       * Set the text style.
       * @param {import("./Text.js").default} text Text style.
       * @api
       */
      setText(text) {
        this.text_ = text;
      }
      /**
       * Get the z-index for the style.
       * @return {number|undefined} ZIndex.
       * @api
       */
      getZIndex() {
        return this.zIndex_;
      }
      /**
       * Set a geometry that is rendered instead of the feature's geometry.
       *
       * @param {string|import("../geom/Geometry.js").default|GeometryFunction} geometry
       *     Feature property or geometry or function returning a geometry to render
       *     for this style.
       * @api
       */
      setGeometry(geometry) {
        if (typeof geometry === "function") {
          this.geometryFunction_ = geometry;
        } else if (typeof geometry === "string") {
          this.geometryFunction_ = function(feature) {
            return (
              /** @type {import("../geom/Geometry.js").default} */
              feature.get(geometry)
            );
          };
        } else if (!geometry) {
          this.geometryFunction_ = defaultGeometryFunction;
        } else if (geometry !== void 0) {
          this.geometryFunction_ = function() {
            return (
              /** @type {import("../geom/Geometry.js").default} */
              geometry
            );
          };
        }
        this.geometry_ = geometry;
      }
      /**
       * Set the z-index.
       *
       * @param {number|undefined} zIndex ZIndex.
       * @api
       */
      setZIndex(zIndex) {
        this.zIndex_ = zIndex;
      }
    };
    defaultStyles = null;
    Style_default = Style;
  }
});

// node_modules/ol/style/Text.js
var DEFAULT_FILL_COLOR, Text, Text_default;
var init_Text = __esm({
  "node_modules/ol/style/Text.js"() {
    init_Fill();
    init_size();
    DEFAULT_FILL_COLOR = "#333";
    Text = class _Text {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options || {};
        this.font_ = options.font;
        this.rotation_ = options.rotation;
        this.rotateWithView_ = options.rotateWithView;
        this.scale_ = options.scale;
        this.scaleArray_ = toSize(options.scale !== void 0 ? options.scale : 1);
        this.text_ = options.text;
        this.textAlign_ = options.textAlign;
        this.justify_ = options.justify;
        this.repeat_ = options.repeat;
        this.textBaseline_ = options.textBaseline;
        this.fill_ = options.fill !== void 0 ? options.fill : new Fill_default({ color: DEFAULT_FILL_COLOR });
        this.maxAngle_ = options.maxAngle !== void 0 ? options.maxAngle : Math.PI / 4;
        this.placement_ = options.placement !== void 0 ? options.placement : "point";
        this.overflow_ = !!options.overflow;
        this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
        this.offsetX_ = options.offsetX !== void 0 ? options.offsetX : 0;
        this.offsetY_ = options.offsetY !== void 0 ? options.offsetY : 0;
        this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;
        this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;
        this.padding_ = options.padding === void 0 ? null : options.padding;
      }
      /**
       * Clones the style.
       * @return {Text} The cloned style.
       * @api
       */
      clone() {
        const scale4 = this.getScale();
        return new _Text({
          font: this.getFont(),
          placement: this.getPlacement(),
          repeat: this.getRepeat(),
          maxAngle: this.getMaxAngle(),
          overflow: this.getOverflow(),
          rotation: this.getRotation(),
          rotateWithView: this.getRotateWithView(),
          scale: Array.isArray(scale4) ? scale4.slice() : scale4,
          text: this.getText(),
          textAlign: this.getTextAlign(),
          justify: this.getJustify(),
          textBaseline: this.getTextBaseline(),
          fill: this.getFill() ? this.getFill().clone() : void 0,
          stroke: this.getStroke() ? this.getStroke().clone() : void 0,
          offsetX: this.getOffsetX(),
          offsetY: this.getOffsetY(),
          backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
          backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
          padding: this.getPadding() || void 0
        });
      }
      /**
       * Get the `overflow` configuration.
       * @return {boolean} Let text overflow the length of the path they follow.
       * @api
       */
      getOverflow() {
        return this.overflow_;
      }
      /**
       * Get the font name.
       * @return {string|undefined} Font.
       * @api
       */
      getFont() {
        return this.font_;
      }
      /**
       * Get the maximum angle between adjacent characters.
       * @return {number} Angle in radians.
       * @api
       */
      getMaxAngle() {
        return this.maxAngle_;
      }
      /**
       * Get the label placement.
       * @return {TextPlacement} Text placement.
       * @api
       */
      getPlacement() {
        return this.placement_;
      }
      /**
       * Get the repeat interval of the text.
       * @return {number|undefined} Repeat interval in pixels.
       * @api
       */
      getRepeat() {
        return this.repeat_;
      }
      /**
       * Get the x-offset for the text.
       * @return {number} Horizontal text offset.
       * @api
       */
      getOffsetX() {
        return this.offsetX_;
      }
      /**
       * Get the y-offset for the text.
       * @return {number} Vertical text offset.
       * @api
       */
      getOffsetY() {
        return this.offsetY_;
      }
      /**
       * Get the fill style for the text.
       * @return {import("./Fill.js").default|null} Fill style.
       * @api
       */
      getFill() {
        return this.fill_;
      }
      /**
       * Determine whether the text rotates with the map.
       * @return {boolean|undefined} Rotate with map.
       * @api
       */
      getRotateWithView() {
        return this.rotateWithView_;
      }
      /**
       * Get the text rotation.
       * @return {number|undefined} Rotation.
       * @api
       */
      getRotation() {
        return this.rotation_;
      }
      /**
       * Get the text scale.
       * @return {number|import("../size.js").Size|undefined} Scale.
       * @api
       */
      getScale() {
        return this.scale_;
      }
      /**
       * Get the symbolizer scale array.
       * @return {import("../size.js").Size} Scale array.
       */
      getScaleArray() {
        return this.scaleArray_;
      }
      /**
       * Get the stroke style for the text.
       * @return {import("./Stroke.js").default|null} Stroke style.
       * @api
       */
      getStroke() {
        return this.stroke_;
      }
      /**
       * Get the text to be rendered.
       * @return {string|Array<string>|undefined} Text.
       * @api
       */
      getText() {
        return this.text_;
      }
      /**
       * Get the text alignment.
       * @return {CanvasTextAlign|undefined} Text align.
       * @api
       */
      getTextAlign() {
        return this.textAlign_;
      }
      /**
       * Get the justification.
       * @return {TextJustify|undefined} Justification.
       * @api
       */
      getJustify() {
        return this.justify_;
      }
      /**
       * Get the text baseline.
       * @return {CanvasTextBaseline|undefined} Text baseline.
       * @api
       */
      getTextBaseline() {
        return this.textBaseline_;
      }
      /**
       * Get the background fill style for the text.
       * @return {import("./Fill.js").default|null} Fill style.
       * @api
       */
      getBackgroundFill() {
        return this.backgroundFill_;
      }
      /**
       * Get the background stroke style for the text.
       * @return {import("./Stroke.js").default|null} Stroke style.
       * @api
       */
      getBackgroundStroke() {
        return this.backgroundStroke_;
      }
      /**
       * Get the padding for the text.
       * @return {Array<number>|null} Padding.
       * @api
       */
      getPadding() {
        return this.padding_;
      }
      /**
       * Set the `overflow` property.
       *
       * @param {boolean} overflow Let text overflow the path that it follows.
       * @api
       */
      setOverflow(overflow) {
        this.overflow_ = overflow;
      }
      /**
       * Set the font.
       *
       * @param {string|undefined} font Font.
       * @api
       */
      setFont(font) {
        this.font_ = font;
      }
      /**
       * Set the maximum angle between adjacent characters.
       *
       * @param {number} maxAngle Angle in radians.
       * @api
       */
      setMaxAngle(maxAngle) {
        this.maxAngle_ = maxAngle;
      }
      /**
       * Set the x offset.
       *
       * @param {number} offsetX Horizontal text offset.
       * @api
       */
      setOffsetX(offsetX) {
        this.offsetX_ = offsetX;
      }
      /**
       * Set the y offset.
       *
       * @param {number} offsetY Vertical text offset.
       * @api
       */
      setOffsetY(offsetY) {
        this.offsetY_ = offsetY;
      }
      /**
       * Set the text placement.
       *
       * @param {TextPlacement} placement Placement.
       * @api
       */
      setPlacement(placement) {
        this.placement_ = placement;
      }
      /**
       * Set the repeat interval of the text.
       * @param {number|undefined} [repeat] Repeat interval in pixels.
       * @api
       */
      setRepeat(repeat) {
        this.repeat_ = repeat;
      }
      /**
       * Set whether to rotate the text with the view.
       *
       * @param {boolean} rotateWithView Rotate with map.
       * @api
       */
      setRotateWithView(rotateWithView) {
        this.rotateWithView_ = rotateWithView;
      }
      /**
       * Set the fill.
       *
       * @param {import("./Fill.js").default|null} fill Fill style.
       * @api
       */
      setFill(fill) {
        this.fill_ = fill;
      }
      /**
       * Set the rotation.
       *
       * @param {number|undefined} rotation Rotation.
       * @api
       */
      setRotation(rotation) {
        this.rotation_ = rotation;
      }
      /**
       * Set the scale.
       *
       * @param {number|import("../size.js").Size|undefined} scale Scale.
       * @api
       */
      setScale(scale4) {
        this.scale_ = scale4;
        this.scaleArray_ = toSize(scale4 !== void 0 ? scale4 : 1);
      }
      /**
       * Set the stroke.
       *
       * @param {import("./Stroke.js").default|null} stroke Stroke style.
       * @api
       */
      setStroke(stroke) {
        this.stroke_ = stroke;
      }
      /**
       * Set the text.
       *
       * @param {string|Array<string>|undefined} text Text.
       * @api
       */
      setText(text) {
        this.text_ = text;
      }
      /**
       * Set the text alignment.
       *
       * @param {CanvasTextAlign|undefined} textAlign Text align.
       * @api
       */
      setTextAlign(textAlign) {
        this.textAlign_ = textAlign;
      }
      /**
       * Set the justification.
       *
       * @param {TextJustify|undefined} justify Justification.
       * @api
       */
      setJustify(justify) {
        this.justify_ = justify;
      }
      /**
       * Set the text baseline.
       *
       * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
       * @api
       */
      setTextBaseline(textBaseline) {
        this.textBaseline_ = textBaseline;
      }
      /**
       * Set the background fill.
       *
       * @param {import("./Fill.js").default|null} fill Fill style.
       * @api
       */
      setBackgroundFill(fill) {
        this.backgroundFill_ = fill;
      }
      /**
       * Set the background stroke.
       *
       * @param {import("./Stroke.js").default|null} stroke Stroke style.
       * @api
       */
      setBackgroundStroke(stroke) {
        this.backgroundStroke_ = stroke;
      }
      /**
       * Set the padding (`[top, right, bottom, left]`).
       *
       * @param {Array<number>|null} padding Padding.
       * @api
       */
      setPadding(padding) {
        this.padding_ = padding;
      }
    };
    Text_default = Text;
  }
});

// node_modules/quickselect/index.js
function quickselect(arr, k, left, right, compare) {
  quickselectStep(arr, k, left || 0, right || arr.length - 1, compare || defaultCompare);
}
function quickselectStep(arr, k, left, right, compare) {
  while (right > left) {
    if (right - left > 600) {
      var n = right - left + 1;
      var m = k - left + 1;
      var z = Math.log(n);
      var s = 0.5 * Math.exp(2 * z / 3);
      var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselectStep(arr, k, newLeft, newRight, compare);
    }
    var t = arr[k];
    var i = left;
    var j = right;
    swap(arr, left, k);
    if (compare(arr[right], t) > 0)
      swap(arr, left, right);
    while (i < j) {
      swap(arr, i, j);
      i++;
      j--;
      while (compare(arr[i], t) < 0)
        i++;
      while (compare(arr[j], t) > 0)
        j--;
    }
    if (compare(arr[left], t) === 0)
      swap(arr, left, j);
    else {
      j++;
      swap(arr, j, right);
    }
    if (j <= k)
      left = j + 1;
    if (k <= j)
      right = j - 1;
  }
}
function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
var init_quickselect = __esm({
  "node_modules/quickselect/index.js"() {
  }
});

// node_modules/rbush/index.js
function findItem(item, items, equalsFn) {
  if (!equalsFn)
    return items.indexOf(item);
  for (let i = 0; i < items.length; i++) {
    if (equalsFn(item, items[i]))
      return i;
  }
  return -1;
}
function calcBBox(node, toBBox) {
  distBBox(node, 0, node.children.length, toBBox, node);
}
function distBBox(node, k, p, toBBox, destNode) {
  if (!destNode)
    destNode = createNode(null);
  destNode.minX = Infinity;
  destNode.minY = Infinity;
  destNode.maxX = -Infinity;
  destNode.maxY = -Infinity;
  for (let i = k; i < p; i++) {
    const child = node.children[i];
    extend3(destNode, node.leaf ? toBBox(child) : child);
  }
  return destNode;
}
function extend3(a, b) {
  a.minX = Math.min(a.minX, b.minX);
  a.minY = Math.min(a.minY, b.minY);
  a.maxX = Math.max(a.maxX, b.maxX);
  a.maxY = Math.max(a.maxY, b.maxY);
  return a;
}
function compareNodeMinX(a, b) {
  return a.minX - b.minX;
}
function compareNodeMinY(a, b) {
  return a.minY - b.minY;
}
function bboxArea(a) {
  return (a.maxX - a.minX) * (a.maxY - a.minY);
}
function bboxMargin(a) {
  return a.maxX - a.minX + (a.maxY - a.minY);
}
function enlargedArea(a, b) {
  return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) * (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
}
function intersectionArea(a, b) {
  const minX = Math.max(a.minX, b.minX);
  const minY = Math.max(a.minY, b.minY);
  const maxX = Math.min(a.maxX, b.maxX);
  const maxY = Math.min(a.maxY, b.maxY);
  return Math.max(0, maxX - minX) * Math.max(0, maxY - minY);
}
function contains(a, b) {
  return a.minX <= b.minX && a.minY <= b.minY && b.maxX <= a.maxX && b.maxY <= a.maxY;
}
function intersects2(a, b) {
  return b.minX <= a.maxX && b.minY <= a.maxY && b.maxX >= a.minX && b.maxY >= a.minY;
}
function createNode(children) {
  return {
    children,
    height: 1,
    leaf: true,
    minX: Infinity,
    minY: Infinity,
    maxX: -Infinity,
    maxY: -Infinity
  };
}
function multiSelect(arr, left, right, n, compare) {
  const stack = [left, right];
  while (stack.length) {
    right = stack.pop();
    left = stack.pop();
    if (right - left <= n)
      continue;
    const mid = left + Math.ceil((right - left) / n / 2) * n;
    quickselect(arr, mid, left, right, compare);
    stack.push(left, mid, mid, right);
  }
}
var RBush;
var init_rbush = __esm({
  "node_modules/rbush/index.js"() {
    init_quickselect();
    RBush = class {
      constructor(maxEntries = 9) {
        this._maxEntries = Math.max(4, maxEntries);
        this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));
        this.clear();
      }
      all() {
        return this._all(this.data, []);
      }
      search(bbox) {
        let node = this.data;
        const result = [];
        if (!intersects2(bbox, node))
          return result;
        const toBBox = this.toBBox;
        const nodesToSearch = [];
        while (node) {
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const childBBox = node.leaf ? toBBox(child) : child;
            if (intersects2(bbox, childBBox)) {
              if (node.leaf)
                result.push(child);
              else if (contains(bbox, childBBox))
                this._all(child, result);
              else
                nodesToSearch.push(child);
            }
          }
          node = nodesToSearch.pop();
        }
        return result;
      }
      collides(bbox) {
        let node = this.data;
        if (!intersects2(bbox, node))
          return false;
        const nodesToSearch = [];
        while (node) {
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const childBBox = node.leaf ? this.toBBox(child) : child;
            if (intersects2(bbox, childBBox)) {
              if (node.leaf || contains(bbox, childBBox))
                return true;
              nodesToSearch.push(child);
            }
          }
          node = nodesToSearch.pop();
        }
        return false;
      }
      load(data) {
        if (!(data && data.length))
          return this;
        if (data.length < this._minEntries) {
          for (let i = 0; i < data.length; i++) {
            this.insert(data[i]);
          }
          return this;
        }
        let node = this._build(data.slice(), 0, data.length - 1, 0);
        if (!this.data.children.length) {
          this.data = node;
        } else if (this.data.height === node.height) {
          this._splitRoot(this.data, node);
        } else {
          if (this.data.height < node.height) {
            const tmpNode = this.data;
            this.data = node;
            node = tmpNode;
          }
          this._insert(node, this.data.height - node.height - 1, true);
        }
        return this;
      }
      insert(item) {
        if (item)
          this._insert(item, this.data.height - 1);
        return this;
      }
      clear() {
        this.data = createNode([]);
        return this;
      }
      remove(item, equalsFn) {
        if (!item)
          return this;
        let node = this.data;
        const bbox = this.toBBox(item);
        const path = [];
        const indexes = [];
        let i, parent, goingUp;
        while (node || path.length) {
          if (!node) {
            node = path.pop();
            parent = path[path.length - 1];
            i = indexes.pop();
            goingUp = true;
          }
          if (node.leaf) {
            const index = findItem(item, node.children, equalsFn);
            if (index !== -1) {
              node.children.splice(index, 1);
              path.push(node);
              this._condense(path);
              return this;
            }
          }
          if (!goingUp && !node.leaf && contains(node, bbox)) {
            path.push(node);
            indexes.push(i);
            i = 0;
            parent = node;
            node = node.children[0];
          } else if (parent) {
            i++;
            node = parent.children[i];
            goingUp = false;
          } else
            node = null;
        }
        return this;
      }
      toBBox(item) {
        return item;
      }
      compareMinX(a, b) {
        return a.minX - b.minX;
      }
      compareMinY(a, b) {
        return a.minY - b.minY;
      }
      toJSON() {
        return this.data;
      }
      fromJSON(data) {
        this.data = data;
        return this;
      }
      _all(node, result) {
        const nodesToSearch = [];
        while (node) {
          if (node.leaf)
            result.push(...node.children);
          else
            nodesToSearch.push(...node.children);
          node = nodesToSearch.pop();
        }
        return result;
      }
      _build(items, left, right, height) {
        const N = right - left + 1;
        let M = this._maxEntries;
        let node;
        if (N <= M) {
          node = createNode(items.slice(left, right + 1));
          calcBBox(node, this.toBBox);
          return node;
        }
        if (!height) {
          height = Math.ceil(Math.log(N) / Math.log(M));
          M = Math.ceil(N / Math.pow(M, height - 1));
        }
        node = createNode([]);
        node.leaf = false;
        node.height = height;
        const N2 = Math.ceil(N / M);
        const N1 = N2 * Math.ceil(Math.sqrt(M));
        multiSelect(items, left, right, N1, this.compareMinX);
        for (let i = left; i <= right; i += N1) {
          const right2 = Math.min(i + N1 - 1, right);
          multiSelect(items, i, right2, N2, this.compareMinY);
          for (let j = i; j <= right2; j += N2) {
            const right3 = Math.min(j + N2 - 1, right2);
            node.children.push(this._build(items, j, right3, height - 1));
          }
        }
        calcBBox(node, this.toBBox);
        return node;
      }
      _chooseSubtree(bbox, node, level2, path) {
        while (true) {
          path.push(node);
          if (node.leaf || path.length - 1 === level2)
            break;
          let minArea = Infinity;
          let minEnlargement = Infinity;
          let targetNode;
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const area = bboxArea(child);
            const enlargement = enlargedArea(bbox, child) - area;
            if (enlargement < minEnlargement) {
              minEnlargement = enlargement;
              minArea = area < minArea ? area : minArea;
              targetNode = child;
            } else if (enlargement === minEnlargement) {
              if (area < minArea) {
                minArea = area;
                targetNode = child;
              }
            }
          }
          node = targetNode || node.children[0];
        }
        return node;
      }
      _insert(item, level2, isNode) {
        const bbox = isNode ? item : this.toBBox(item);
        const insertPath = [];
        const node = this._chooseSubtree(bbox, this.data, level2, insertPath);
        node.children.push(item);
        extend3(node, bbox);
        while (level2 >= 0) {
          if (insertPath[level2].children.length > this._maxEntries) {
            this._split(insertPath, level2);
            level2--;
          } else
            break;
        }
        this._adjustParentBBoxes(bbox, insertPath, level2);
      }
      // split overflowed node into two
      _split(insertPath, level2) {
        const node = insertPath[level2];
        const M = node.children.length;
        const m = this._minEntries;
        this._chooseSplitAxis(node, m, M);
        const splitIndex = this._chooseSplitIndex(node, m, M);
        const newNode = createNode(node.children.splice(splitIndex, node.children.length - splitIndex));
        newNode.height = node.height;
        newNode.leaf = node.leaf;
        calcBBox(node, this.toBBox);
        calcBBox(newNode, this.toBBox);
        if (level2)
          insertPath[level2 - 1].children.push(newNode);
        else
          this._splitRoot(node, newNode);
      }
      _splitRoot(node, newNode) {
        this.data = createNode([node, newNode]);
        this.data.height = node.height + 1;
        this.data.leaf = false;
        calcBBox(this.data, this.toBBox);
      }
      _chooseSplitIndex(node, m, M) {
        let index;
        let minOverlap = Infinity;
        let minArea = Infinity;
        for (let i = m; i <= M - m; i++) {
          const bbox1 = distBBox(node, 0, i, this.toBBox);
          const bbox2 = distBBox(node, i, M, this.toBBox);
          const overlap = intersectionArea(bbox1, bbox2);
          const area = bboxArea(bbox1) + bboxArea(bbox2);
          if (overlap < minOverlap) {
            minOverlap = overlap;
            index = i;
            minArea = area < minArea ? area : minArea;
          } else if (overlap === minOverlap) {
            if (area < minArea) {
              minArea = area;
              index = i;
            }
          }
        }
        return index || M - m;
      }
      // sorts node children by the best axis for split
      _chooseSplitAxis(node, m, M) {
        const compareMinX = node.leaf ? this.compareMinX : compareNodeMinX;
        const compareMinY = node.leaf ? this.compareMinY : compareNodeMinY;
        const xMargin = this._allDistMargin(node, m, M, compareMinX);
        const yMargin = this._allDistMargin(node, m, M, compareMinY);
        if (xMargin < yMargin)
          node.children.sort(compareMinX);
      }
      // total margin of all possible split distributions where each node is at least m full
      _allDistMargin(node, m, M, compare) {
        node.children.sort(compare);
        const toBBox = this.toBBox;
        const leftBBox = distBBox(node, 0, m, toBBox);
        const rightBBox = distBBox(node, M - m, M, toBBox);
        let margin = bboxMargin(leftBBox) + bboxMargin(rightBBox);
        for (let i = m; i < M - m; i++) {
          const child = node.children[i];
          extend3(leftBBox, node.leaf ? toBBox(child) : child);
          margin += bboxMargin(leftBBox);
        }
        for (let i = M - m - 1; i >= m; i--) {
          const child = node.children[i];
          extend3(rightBBox, node.leaf ? toBBox(child) : child);
          margin += bboxMargin(rightBBox);
        }
        return margin;
      }
      _adjustParentBBoxes(bbox, path, level2) {
        for (let i = level2; i >= 0; i--) {
          extend3(path[i], bbox);
        }
      }
      _condense(path) {
        for (let i = path.length - 1, siblings; i >= 0; i--) {
          if (path[i].children.length === 0) {
            if (i > 0) {
              siblings = path[i - 1].children;
              siblings.splice(siblings.indexOf(path[i]), 1);
            } else
              this.clear();
          } else
            calcBBox(path[i], this.toBBox);
        }
      }
    };
  }
});

// node_modules/ol/style/IconImage.js
function get4(image, cacheKey, crossOrigin, imageState, color) {
  let iconImage = cacheKey === void 0 ? void 0 : shared.get(cacheKey, crossOrigin, color);
  if (!iconImage) {
    iconImage = new IconImage(
      image,
      image instanceof HTMLImageElement ? image.src || void 0 : cacheKey,
      crossOrigin,
      imageState,
      color
    );
    shared.set(cacheKey, crossOrigin, color, iconImage);
  }
  return iconImage;
}
var taintedTestContext, IconImage;
var init_IconImage = __esm({
  "node_modules/ol/style/IconImage.js"() {
    init_Target();
    init_EventType();
    init_ImageState();
    init_color();
    init_dom();
    init_Image();
    init_IconImageCache();
    taintedTestContext = null;
    IconImage = class extends Target_default {
      /**
       * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap} image Image.
       * @param {string|undefined} src Src.
       * @param {?string} crossOrigin Cross origin.
       * @param {import("../ImageState.js").default} imageState Image state.
       * @param {import("../color.js").Color} color Color.
       */
      constructor(image, src, crossOrigin, imageState, color) {
        super();
        this.hitDetectionImage_ = null;
        this.image_ = image;
        this.crossOrigin_ = crossOrigin;
        this.canvas_ = {};
        this.color_ = color;
        this.imageState_ = imageState === void 0 ? ImageState_default.IDLE : imageState;
        this.size_ = image && image.width && image.height ? [image.width, image.height] : null;
        this.src_ = src;
        this.tainted_;
      }
      /**
       * @private
       */
      initializeImage_() {
        this.image_ = new Image();
        if (this.crossOrigin_ !== null) {
          this.image_.crossOrigin = this.crossOrigin_;
        }
      }
      /**
       * @private
       * @return {boolean} The image canvas is tainted.
       */
      isTainted_() {
        if (this.tainted_ === void 0 && this.imageState_ === ImageState_default.LOADED) {
          if (!taintedTestContext) {
            taintedTestContext = createCanvasContext2D(1, 1, void 0, {
              willReadFrequently: true
            });
          }
          taintedTestContext.drawImage(this.image_, 0, 0);
          try {
            taintedTestContext.getImageData(0, 0, 1, 1);
            this.tainted_ = false;
          } catch (e) {
            taintedTestContext = null;
            this.tainted_ = true;
          }
        }
        return this.tainted_ === true;
      }
      /**
       * @private
       */
      dispatchChangeEvent_() {
        this.dispatchEvent(EventType_default.CHANGE);
      }
      /**
       * @private
       */
      handleImageError_() {
        this.imageState_ = ImageState_default.ERROR;
        this.dispatchChangeEvent_();
      }
      /**
       * @private
       */
      handleImageLoad_() {
        this.imageState_ = ImageState_default.LOADED;
        this.size_ = [this.image_.width, this.image_.height];
        this.dispatchChangeEvent_();
      }
      /**
       * @param {number} pixelRatio Pixel ratio.
       * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element or image bitmap.
       */
      getImage(pixelRatio) {
        if (!this.image_) {
          this.initializeImage_();
        }
        this.replaceColor_(pixelRatio);
        return this.canvas_[pixelRatio] ? this.canvas_[pixelRatio] : this.image_;
      }
      /**
       * @param {number} pixelRatio Pixel ratio.
       * @return {number} Image or Canvas element.
       */
      getPixelRatio(pixelRatio) {
        this.replaceColor_(pixelRatio);
        return this.canvas_[pixelRatio] ? pixelRatio : 1;
      }
      /**
       * @return {import("../ImageState.js").default} Image state.
       */
      getImageState() {
        return this.imageState_;
      }
      /**
       * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image element.
       */
      getHitDetectionImage() {
        if (!this.image_) {
          this.initializeImage_();
        }
        if (!this.hitDetectionImage_) {
          if (this.isTainted_()) {
            const width = this.size_[0];
            const height = this.size_[1];
            const context = createCanvasContext2D(width, height);
            context.fillRect(0, 0, width, height);
            this.hitDetectionImage_ = context.canvas;
          } else {
            this.hitDetectionImage_ = this.image_;
          }
        }
        return this.hitDetectionImage_;
      }
      /**
       * Get the size of the icon (in pixels).
       * @return {import("../size.js").Size} Image size.
       */
      getSize() {
        return this.size_;
      }
      /**
       * @return {string|undefined} Image src.
       */
      getSrc() {
        return this.src_;
      }
      /**
       * Load not yet loaded URI.
       */
      load() {
        if (this.imageState_ !== ImageState_default.IDLE) {
          return;
        }
        if (!this.image_) {
          this.initializeImage_();
        }
        this.imageState_ = ImageState_default.LOADING;
        try {
          if (this.src_ !== void 0) {
            this.image_.src = this.src_;
          }
        } catch (e) {
          this.handleImageError_();
        }
        if (this.image_ instanceof HTMLImageElement) {
          decodeFallback(this.image_, this.src_).then((image) => {
            this.image_ = image;
            this.handleImageLoad_();
          }).catch(this.handleImageError_.bind(this));
        }
      }
      /**
       * @param {number} pixelRatio Pixel ratio.
       * @private
       */
      replaceColor_(pixelRatio) {
        if (!this.color_ || this.canvas_[pixelRatio] || this.imageState_ !== ImageState_default.LOADED) {
          return;
        }
        const image = this.image_;
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(image.width * pixelRatio);
        canvas.height = Math.ceil(image.height * pixelRatio);
        const ctx = canvas.getContext("2d");
        ctx.scale(pixelRatio, pixelRatio);
        ctx.drawImage(image, 0, 0);
        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = asString(this.color_);
        ctx.fillRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
        ctx.globalCompositeOperation = "destination-in";
        ctx.drawImage(image, 0, 0);
        this.canvas_[pixelRatio] = canvas;
      }
    };
  }
});

// node_modules/ol/style/Icon.js
var Icon_exports = {};
__export(Icon_exports, {
  default: () => Icon_default
});
function calculateScale(width, height, wantedWidth, wantedHeight) {
  if (wantedWidth !== void 0 && wantedHeight !== void 0) {
    return [wantedWidth / width, wantedHeight / height];
  }
  if (wantedWidth !== void 0) {
    return wantedWidth / width;
  }
  if (wantedHeight !== void 0) {
    return wantedHeight / height;
  }
  return 1;
}
var Icon, Icon_default;
var init_Icon = __esm({
  "node_modules/ol/style/Icon.js"() {
    init_EventType();
    init_ImageState();
    init_Image2();
    init_color();
    init_asserts();
    init_IconImage();
    init_util();
    Icon = class _Icon extends Image_default {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options || {};
        const opacity = options.opacity !== void 0 ? options.opacity : 1;
        const rotation = options.rotation !== void 0 ? options.rotation : 0;
        const scale4 = options.scale !== void 0 ? options.scale : 1;
        const rotateWithView = options.rotateWithView !== void 0 ? options.rotateWithView : false;
        super({
          opacity,
          rotation,
          scale: scale4,
          displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
          rotateWithView,
          declutterMode: options.declutterMode
        });
        this.anchor_ = options.anchor !== void 0 ? options.anchor : [0.5, 0.5];
        this.normalizedAnchor_ = null;
        this.anchorOrigin_ = options.anchorOrigin !== void 0 ? options.anchorOrigin : "top-left";
        this.anchorXUnits_ = options.anchorXUnits !== void 0 ? options.anchorXUnits : "fraction";
        this.anchorYUnits_ = options.anchorYUnits !== void 0 ? options.anchorYUnits : "fraction";
        this.crossOrigin_ = options.crossOrigin !== void 0 ? options.crossOrigin : null;
        const image = options.img !== void 0 ? options.img : null;
        let cacheKey = options.src;
        assert(
          !(cacheKey !== void 0 && image),
          "`image` and `src` cannot be provided at the same time"
        );
        if ((cacheKey === void 0 || cacheKey.length === 0) && image) {
          cacheKey = /** @type {HTMLImageElement} */
          image.src || getUid(image);
        }
        assert(
          cacheKey !== void 0 && cacheKey.length > 0,
          "A defined and non-empty `src` or `image` must be provided"
        );
        assert(
          !((options.width !== void 0 || options.height !== void 0) && options.scale !== void 0),
          "`width` or `height` cannot be provided together with `scale`"
        );
        let imageState;
        if (options.src !== void 0) {
          imageState = ImageState_default.IDLE;
        } else if (image !== void 0) {
          if (image instanceof HTMLImageElement) {
            if (image.complete) {
              imageState = image.src ? ImageState_default.LOADED : ImageState_default.IDLE;
            } else {
              imageState = ImageState_default.LOADING;
            }
          } else {
            imageState = ImageState_default.LOADED;
          }
        }
        this.color_ = options.color !== void 0 ? asArray(options.color) : null;
        this.iconImage_ = get4(
          image,
          /** @type {string} */
          cacheKey,
          this.crossOrigin_,
          imageState,
          this.color_
        );
        this.offset_ = options.offset !== void 0 ? options.offset : [0, 0];
        this.offsetOrigin_ = options.offsetOrigin !== void 0 ? options.offsetOrigin : "top-left";
        this.origin_ = null;
        this.size_ = options.size !== void 0 ? options.size : null;
        if (options.width !== void 0 || options.height !== void 0) {
          let width, height;
          if (options.size) {
            [width, height] = options.size;
          } else {
            const image2 = this.getImage(1);
            if (image2.width && image2.height) {
              width = image2.width;
              height = image2.height;
            } else if (image2 instanceof HTMLImageElement) {
              this.initialOptions_ = options;
              const onload = () => {
                this.unlistenImageChange(onload);
                if (!this.initialOptions_) {
                  return;
                }
                const imageSize = this.iconImage_.getSize();
                this.setScale(
                  calculateScale(
                    imageSize[0],
                    imageSize[1],
                    options.width,
                    options.height
                  )
                );
              };
              this.listenImageChange(onload);
              return;
            }
          }
          if (width !== void 0) {
            this.setScale(
              calculateScale(width, height, options.width, options.height)
            );
          }
        }
      }
      /**
       * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
       * @return {Icon} The cloned style.
       * @api
       */
      clone() {
        let scale4, width, height;
        if (this.initialOptions_) {
          width = this.initialOptions_.width;
          height = this.initialOptions_.height;
        } else {
          scale4 = this.getScale();
          scale4 = Array.isArray(scale4) ? scale4.slice() : scale4;
        }
        return new _Icon({
          anchor: this.anchor_.slice(),
          anchorOrigin: this.anchorOrigin_,
          anchorXUnits: this.anchorXUnits_,
          anchorYUnits: this.anchorYUnits_,
          color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
          crossOrigin: this.crossOrigin_,
          offset: this.offset_.slice(),
          offsetOrigin: this.offsetOrigin_,
          opacity: this.getOpacity(),
          rotateWithView: this.getRotateWithView(),
          rotation: this.getRotation(),
          scale: scale4,
          width,
          height,
          size: this.size_ !== null ? this.size_.slice() : void 0,
          src: this.getSrc(),
          displacement: this.getDisplacement().slice(),
          declutterMode: this.getDeclutterMode()
        });
      }
      /**
       * Get the anchor point in pixels. The anchor determines the center point for the
       * symbolizer.
       * @return {Array<number>} Anchor.
       * @api
       */
      getAnchor() {
        let anchor = this.normalizedAnchor_;
        if (!anchor) {
          anchor = this.anchor_;
          const size = this.getSize();
          if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
            if (!size) {
              return null;
            }
            anchor = this.anchor_.slice();
            if (this.anchorXUnits_ == "fraction") {
              anchor[0] *= size[0];
            }
            if (this.anchorYUnits_ == "fraction") {
              anchor[1] *= size[1];
            }
          }
          if (this.anchorOrigin_ != "top-left") {
            if (!size) {
              return null;
            }
            if (anchor === this.anchor_) {
              anchor = this.anchor_.slice();
            }
            if (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") {
              anchor[0] = -anchor[0] + size[0];
            }
            if (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") {
              anchor[1] = -anchor[1] + size[1];
            }
          }
          this.normalizedAnchor_ = anchor;
        }
        const displacement = this.getDisplacement();
        const scale4 = this.getScaleArray();
        return [
          anchor[0] - displacement[0] / scale4[0],
          anchor[1] + displacement[1] / scale4[1]
        ];
      }
      /**
       * Set the anchor point. The anchor determines the center point for the
       * symbolizer.
       *
       * @param {Array<number>} anchor Anchor.
       * @api
       */
      setAnchor(anchor) {
        this.anchor_ = anchor;
        this.normalizedAnchor_ = null;
      }
      /**
       * Get the icon color.
       * @return {import("../color.js").Color} Color.
       * @api
       */
      getColor() {
        return this.color_;
      }
      /**
       * Get the image icon.
       * @param {number} pixelRatio Pixel ratio.
       * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element. If the Icon
       * style was configured with `src` or with a not let loaded `img`, an `ImageBitmap` will be returned.
       * @api
       */
      getImage(pixelRatio) {
        return this.iconImage_.getImage(pixelRatio);
      }
      /**
       * Get the pixel ratio.
       * @param {number} pixelRatio Pixel ratio.
       * @return {number} The pixel ratio of the image.
       * @api
       */
      getPixelRatio(pixelRatio) {
        return this.iconImage_.getPixelRatio(pixelRatio);
      }
      /**
       * @return {import("../size.js").Size} Image size.
       */
      getImageSize() {
        return this.iconImage_.getSize();
      }
      /**
       * @return {import("../ImageState.js").default} Image state.
       */
      getImageState() {
        return this.iconImage_.getImageState();
      }
      /**
       * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image element.
       */
      getHitDetectionImage() {
        return this.iconImage_.getHitDetectionImage();
      }
      /**
       * Get the origin of the symbolizer.
       * @return {Array<number>} Origin.
       * @api
       */
      getOrigin() {
        if (this.origin_) {
          return this.origin_;
        }
        let offset = this.offset_;
        if (this.offsetOrigin_ != "top-left") {
          const size = this.getSize();
          const iconImageSize = this.iconImage_.getSize();
          if (!size || !iconImageSize) {
            return null;
          }
          offset = offset.slice();
          if (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") {
            offset[0] = iconImageSize[0] - size[0] - offset[0];
          }
          if (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") {
            offset[1] = iconImageSize[1] - size[1] - offset[1];
          }
        }
        this.origin_ = offset;
        return this.origin_;
      }
      /**
       * Get the image URL.
       * @return {string|undefined} Image src.
       * @api
       */
      getSrc() {
        return this.iconImage_.getSrc();
      }
      /**
       * Get the size of the icon (in pixels).
       * @return {import("../size.js").Size} Image size.
       * @api
       */
      getSize() {
        return !this.size_ ? this.iconImage_.getSize() : this.size_;
      }
      /**
       * Get the width of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
       * @return {number} Icon width (in pixels).
       * @api
       */
      getWidth() {
        const scale4 = this.getScaleArray();
        if (this.size_) {
          return this.size_[0] * scale4[0];
        }
        if (this.iconImage_.getImageState() == ImageState_default.LOADED) {
          return this.iconImage_.getSize()[0] * scale4[0];
        }
        return void 0;
      }
      /**
       * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
       * @return {number} Icon height (in pixels).
       * @api
       */
      getHeight() {
        const scale4 = this.getScaleArray();
        if (this.size_) {
          return this.size_[1] * scale4[1];
        }
        if (this.iconImage_.getImageState() == ImageState_default.LOADED) {
          return this.iconImage_.getSize()[1] * scale4[1];
        }
        return void 0;
      }
      /**
       * Set the scale.
       *
       * @param {number|import("../size.js").Size} scale Scale.
       * @api
       */
      setScale(scale4) {
        delete this.initialOptions_;
        super.setScale(scale4);
      }
      /**
       * @param {function(import("../events/Event.js").default): void} listener Listener function.
       */
      listenImageChange(listener) {
        this.iconImage_.addEventListener(EventType_default.CHANGE, listener);
      }
      /**
       * Load not yet loaded URI.
       * When rendering a feature with an icon style, the vector renderer will
       * automatically call this method. However, you might want to call this
       * method yourself for preloading or other purposes.
       * @api
       */
      load() {
        this.iconImage_.load();
      }
      /**
       * @param {function(import("../events/Event.js").default): void} listener Listener function.
       */
      unlistenImageChange(listener) {
        this.iconImage_.removeEventListener(EventType_default.CHANGE, listener);
      }
    };
    Icon_default = Icon;
  }
});

// node_modules/ol/expr/expression.js
function typeName(type) {
  const names2 = [];
  for (const namedType of namedTypes) {
    if (includesType(type, namedType)) {
      names2.push(typeNames[namedType]);
    }
  }
  if (names2.length === 0) {
    return "untyped";
  }
  if (names2.length < 3) {
    return names2.join(" or ");
  }
  return names2.slice(0, -1).join(", ") + ", or " + names2[names2.length - 1];
}
function includesType(broad, specific) {
  return (broad & specific) === specific;
}
function overlapsType(oneType, otherType) {
  return !!(oneType & otherType);
}
function isType(type, expected) {
  return type === expected;
}
function newParsingContext() {
  return {
    variables: /* @__PURE__ */ new Set(),
    properties: /* @__PURE__ */ new Set(),
    featureId: false,
    style: {}
  };
}
function getTypeFromHint(typeHint) {
  switch (typeHint) {
    case "string":
      return StringType;
    case "color":
      return ColorType;
    case "number":
      return NumberType;
    case "boolean":
      return BooleanType;
    case "number[]":
      return NumberArrayType;
    default:
      throw new Error(`Unrecognized type hint: ${typeHint}`);
  }
}
function parse2(encoded, context, typeHint) {
  switch (typeof encoded) {
    case "boolean": {
      return new LiteralExpression(BooleanType, encoded);
    }
    case "number": {
      return new LiteralExpression(NumberType, encoded);
    }
    case "string": {
      let type2 = StringType;
      if (isStringColor(encoded)) {
        type2 |= ColorType;
      }
      if (!isType(type2 & typeHint, NoneType)) {
        type2 &= typeHint;
      }
      return new LiteralExpression(type2, encoded);
    }
    default: {
    }
  }
  if (!Array.isArray(encoded)) {
    throw new Error("Expression must be an array or a primitive value");
  }
  if (encoded.length === 0) {
    throw new Error("Empty expression");
  }
  if (typeof encoded[0] === "string") {
    return parseCallExpression(encoded, context, typeHint);
  }
  for (const item of encoded) {
    if (typeof item !== "number") {
      throw new Error("Expected an array of numbers");
    }
  }
  let type = NumberArrayType;
  if (encoded.length === 3 || encoded.length === 4) {
    type |= ColorType;
  }
  if (typeHint) {
    type &= typeHint;
  }
  return new LiteralExpression(type, encoded);
}
function withGetArgs(encoded, context) {
  const arg = parse2(encoded[1], context);
  if (!(arg instanceof LiteralExpression)) {
    throw new Error("Expected a literal argument for get operation");
  }
  if (typeof arg.value !== "string") {
    throw new Error("Expected a string argument for get operation");
  }
  context.properties.add(arg.value);
  if (encoded.length === 3) {
    const hint = parse2(encoded[2], context);
    return [arg, hint];
  }
  return [arg];
}
function withVarArgs(encoded, context, parsedArgs, typeHint) {
  const varName = encoded[1];
  if (typeof varName !== "string") {
    throw new Error("Expected a string argument for var operation");
  }
  context.variables.add(varName);
  if (!("variables" in context.style) || context.style.variables[varName] === void 0) {
    return [new LiteralExpression(AnyType, varName)];
  }
  const initialValue = context.style.variables[varName];
  const arg = (
    /** @type {LiteralExpression} */
    parse2(initialValue, context)
  );
  arg.value = varName;
  if (typeHint && !overlapsType(typeHint, arg.type)) {
    throw new Error(
      `The variable ${varName} has type ${typeName(
        arg.type
      )} but the following type was expected: ${typeName(typeHint)}`
    );
  }
  return [arg];
}
function usesFeatureId(encoded, context) {
  context.featureId = true;
}
function withNoArgs(encoded, context) {
  const operation = encoded[0];
  if (encoded.length !== 1) {
    throw new Error(`Expected no arguments for ${operation} operation`);
  }
  return [];
}
function withArgsCount(minArgs, maxArgs) {
  return function(encoded, context) {
    const operation = encoded[0];
    const argCount = encoded.length - 1;
    if (minArgs === maxArgs) {
      if (argCount !== minArgs) {
        const plural = minArgs === 1 ? "" : "s";
        throw new Error(
          `Expected ${minArgs} argument${plural} for ${operation}, got ${argCount}`
        );
      }
    } else if (argCount < minArgs || argCount > maxArgs) {
      const range = maxArgs === Infinity ? `${minArgs} or more` : `${minArgs} to ${maxArgs}`;
      throw new Error(
        `Expected ${range} arguments for ${operation}, got ${argCount}`
      );
    }
  };
}
function parseArgsOfType(argType) {
  return function(encoded, context) {
    const operation = encoded[0];
    const argCount = encoded.length - 1;
    const args = new Array(argCount);
    for (let i = 0; i < argCount; ++i) {
      const expression = parse2(encoded[i + 1], context);
      if (!overlapsType(argType, expression.type)) {
        const gotType = typeName(argType);
        const expectedType = typeName(expression.type);
        throw new Error(
          `Unexpected type for argument ${i} of ${operation} operation, got ${gotType} but expected ${expectedType}`
        );
      }
      expression.type &= argType;
      args[i] = expression;
    }
    return args;
  };
}
function narrowArgsType(encoded, context, parsedArgs) {
  const operation = encoded[0];
  const argCount = encoded.length - 1;
  let sameType = AnyType;
  for (let i = 0; i < parsedArgs.length; ++i) {
    sameType &= parsedArgs[i].type;
  }
  if (sameType === NoneType) {
    throw new Error(
      `No common type could be found for arguments of ${operation} operation`
    );
  }
  const args = new Array(argCount);
  for (let i = 0; i < argCount; ++i) {
    args[i] = parse2(encoded[i + 1], context, sameType);
  }
  return args;
}
function withOddArgs(encoded, context) {
  const operation = encoded[0];
  const argCount = encoded.length - 1;
  if (argCount % 2 === 0) {
    throw new Error(
      `An odd amount of arguments was expected for operation ${operation}, got ${JSON.stringify(
        argCount
      )} instead`
    );
  }
}
function withEvenArgs(encoded, context) {
  const operation = encoded[0];
  const argCount = encoded.length - 1;
  if (argCount % 2 === 1) {
    throw new Error(
      `An even amount of arguments was expected for operation ${operation}, got ${JSON.stringify(
        argCount
      )} instead`
    );
  }
}
function parseMatchArgs(encoded, context, parsedArgs, typeHint) {
  const argsCount = encoded.length - 1;
  const input = parse2(encoded[1], context);
  let inputType = input.type;
  const fallback = parse2(encoded[encoded.length - 1], context);
  let outputType = typeHint !== void 0 ? typeHint & fallback.type : fallback.type;
  const args = new Array(argsCount - 2);
  for (let i = 0; i < argsCount - 2; i += 2) {
    const match = parse2(encoded[i + 2], context);
    const output = parse2(encoded[i + 3], context);
    inputType &= match.type;
    outputType &= output.type;
    args[i] = match;
    args[i + 1] = output;
  }
  const expectedInputType = StringType | NumberType | BooleanType;
  if (!overlapsType(expectedInputType, inputType)) {
    throw new Error(
      `Expected an input of type ${typeName(
        expectedInputType
      )} for the interpolate operation, got ${typeName(inputType)} instead`
    );
  }
  if (isType(outputType, NoneType)) {
    throw new Error(
      `Could not find a common output type for the following match operation: ` + JSON.stringify(encoded)
    );
  }
  for (let i = 0; i < argsCount - 2; i += 2) {
    const match = parse2(encoded[i + 2], context, inputType);
    const output = parse2(encoded[i + 3], context, outputType);
    args[i] = match;
    args[i + 1] = output;
  }
  return [
    parse2(encoded[1], context, inputType),
    ...args,
    parse2(encoded[encoded.length - 1], context, outputType)
  ];
}
function parseInterpolateArgs(encoded, context, parsedArgs, typeHint) {
  const interpolationType = encoded[1];
  let interpolation;
  switch (interpolationType[0]) {
    case "linear":
      interpolation = 1;
      break;
    case "exponential":
      interpolation = interpolationType[1];
      if (typeof interpolation !== "number") {
        throw new Error(
          `Expected a number base for exponential interpolation, got ${JSON.stringify(interpolation)} instead`
        );
      }
      break;
    default:
      interpolation = null;
  }
  if (!interpolation) {
    throw new Error(
      `Invalid interpolation type: ${JSON.stringify(interpolationType)}`
    );
  }
  interpolation = parse2(interpolation, context);
  let input = parse2(encoded[2], context);
  if (!overlapsType(NumberType, input.type)) {
    throw new Error(
      `Expected an input of type number for the interpolate operation, got ${typeName(input.type)} instead`
    );
  }
  input = parse2(encoded[2], context, NumberType);
  const args = new Array(encoded.length - 3);
  for (let i = 0; i < args.length; i += 2) {
    let stop = parse2(encoded[i + 3], context);
    if (!overlapsType(NumberType, stop.type)) {
      throw new Error(
        `Expected all stop input values in the interpolate operation to be of type number, got ${typeName(stop.type)} at position ${i + 2} instead`
      );
    }
    let output = parse2(encoded[i + 4], context);
    if (!overlapsType(NumberType | ColorType, output.type)) {
      throw new Error(
        `Expected all stop output values in the interpolate operation to be a number or color, got ${typeName(output.type)} at position ${i + 3} instead`
      );
    }
    stop = parse2(encoded[i + 3], context, NumberType);
    output = parse2(encoded[i + 4], context, NumberType | ColorType);
    args[i] = stop;
    args[i + 1] = output;
  }
  return [interpolation, input, ...args];
}
function parseCaseArgs(encoded, context, parsedArgs, typeHint) {
  const fallback = parse2(encoded[encoded.length - 1], context);
  let outputType = typeHint !== void 0 ? typeHint & fallback.type : fallback.type;
  const args = new Array(encoded.length - 1);
  for (let i = 0; i < args.length - 1; i += 2) {
    const condition = parse2(encoded[i + 1], context);
    const output = parse2(encoded[i + 2], context);
    if (!overlapsType(BooleanType, condition.type)) {
      throw new Error(
        `Expected all conditions in the case operation to be of type boolean, got ${typeName(condition.type)} at position ${i} instead`
      );
    }
    outputType &= output.type;
    args[i] = condition;
    args[i + 1] = output;
  }
  if (isType(outputType, NoneType)) {
    throw new Error(
      `Could not find a common output type for the following case operation: ` + JSON.stringify(encoded)
    );
  }
  for (let i = 0; i < args.length - 1; i += 2) {
    args[i + 1] = parse2(encoded[i + 2], context, outputType);
  }
  args[args.length - 1] = parse2(
    encoded[encoded.length - 1],
    context,
    outputType
  );
  return args;
}
function parseInArgs(encoded, context) {
  let haystack = (
    /** @type {any} */
    encoded[2]
  );
  if (!Array.isArray(haystack)) {
    throw new Error(
      `The "in" operator was provided a literal value which was not an array as second argument.`
    );
  }
  if (typeof haystack[0] === "string") {
    if (haystack[0] !== "literal") {
      throw new Error(
        `For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.`
      );
    }
    if (!Array.isArray(haystack[1])) {
      throw new Error(
        `The "in" operator was provided a literal value which was not an array as second argument.`
      );
    }
    haystack = haystack[1];
  }
  let needleType = StringType | NumberType;
  const args = new Array(haystack.length);
  for (let i = 0; i < args.length; i++) {
    const arg = parse2(haystack[i], context);
    needleType &= arg.type;
    args[i] = arg;
  }
  if (isType(needleType, NoneType)) {
    throw new Error(
      `Could not find a common type for the following in operation: ` + JSON.stringify(encoded)
    );
  }
  const needle = parse2(encoded[1], context, needleType);
  return [needle, ...args];
}
function parsePaletteArgs(encoded, context) {
  const index = parse2(encoded[1], context, NumberType);
  if (index.type !== NumberType) {
    throw new Error(
      `The first argument of palette must be an number, got ${typeName(
        index.type
      )} instead`
    );
  }
  const colors = encoded[2];
  if (!Array.isArray(colors)) {
    throw new Error("The second argument of palette must be an array");
  }
  const parsedColors = new Array(colors.length);
  for (let i = 0; i < parsedColors.length; i++) {
    const color = parse2(colors[i], context, ColorType);
    if (!(color instanceof LiteralExpression)) {
      throw new Error(
        `The palette color at index ${i} must be a literal value`
      );
    }
    if (!overlapsType(color.type, ColorType)) {
      throw new Error(
        `The palette color at index ${i} should be of type color, got ${typeName(
          color.type
        )} instead`
      );
    }
    parsedColors[i] = color;
  }
  return [index, ...parsedColors];
}
function createParser(returnType, ...argValidators) {
  return function(encoded, context, typeHint) {
    const operator = encoded[0];
    let parsedArgs = [];
    for (let i = 0; i < argValidators.length; i++) {
      parsedArgs = argValidators[i](encoded, context, parsedArgs, typeHint) || parsedArgs;
    }
    let actualType = typeof returnType === "function" ? returnType(parsedArgs) : returnType;
    if (typeHint !== void 0) {
      if (!overlapsType(actualType, typeHint)) {
        throw new Error(
          `The following expression was expected to return ${typeName(
            typeHint
          )}, but returns ${typeName(actualType)} instead: ${JSON.stringify(
            encoded
          )}`
        );
      }
      actualType &= typeHint;
    }
    if (actualType === NoneType) {
      throw new Error(
        `No matching type was found for the following expression: ${JSON.stringify(
          encoded
        )}`
      );
    }
    return new CallExpression(actualType, operator, ...parsedArgs);
  };
}
function parseCallExpression(encoded, context, typeHint) {
  const operator = encoded[0];
  const parser = parsers[operator];
  if (!parser) {
    throw new Error(`Unknown operator: ${operator}`);
  }
  return parser(encoded, context, typeHint);
}
var numTypes, NoneType, BooleanType, NumberType, StringType, ColorType, NumberArrayType, AnyType, typeNames, namedTypes, LiteralExpression, CallExpression, Ops, parsers;
var init_expression = __esm({
  "node_modules/ol/expr/expression.js"() {
    init_array();
    init_color();
    numTypes = 0;
    NoneType = 0;
    BooleanType = 1 << numTypes++;
    NumberType = 1 << numTypes++;
    StringType = 1 << numTypes++;
    ColorType = 1 << numTypes++;
    NumberArrayType = 1 << numTypes++;
    AnyType = Math.pow(2, numTypes) - 1;
    typeNames = {
      [BooleanType]: "boolean",
      [NumberType]: "number",
      [StringType]: "string",
      [ColorType]: "color",
      [NumberArrayType]: "number[]"
    };
    namedTypes = Object.keys(typeNames).map(Number).sort(ascending);
    LiteralExpression = class {
      /**
       * @param {number} type The value type.
       * @param {LiteralValue} value The literal value.
       */
      constructor(type, value) {
        this.type = type;
        this.value = value;
      }
    };
    CallExpression = class {
      /**
       * @param {number} type The return type.
       * @param {string} operator The operator.
       * @param {...Expression} args The arguments.
       */
      constructor(type, operator, ...args) {
        this.type = type;
        this.operator = operator;
        this.args = args;
      }
    };
    Ops = {
      Get: "get",
      Var: "var",
      Concat: "concat",
      GeometryType: "geometry-type",
      Any: "any",
      All: "all",
      Not: "!",
      Resolution: "resolution",
      Zoom: "zoom",
      Time: "time",
      Equal: "==",
      NotEqual: "!=",
      GreaterThan: ">",
      GreaterThanOrEqualTo: ">=",
      LessThan: "<",
      LessThanOrEqualTo: "<=",
      Multiply: "*",
      Divide: "/",
      Add: "+",
      Subtract: "-",
      Clamp: "clamp",
      Mod: "%",
      Pow: "^",
      Abs: "abs",
      Floor: "floor",
      Ceil: "ceil",
      Round: "round",
      Sin: "sin",
      Cos: "cos",
      Atan: "atan",
      Sqrt: "sqrt",
      Match: "match",
      Between: "between",
      Interpolate: "interpolate",
      Case: "case",
      In: "in",
      Number: "number",
      String: "string",
      Array: "array",
      Color: "color",
      Id: "id",
      Band: "band",
      Palette: "palette"
    };
    parsers = {
      [Ops.Get]: createParser(
        ([_, typeHint]) => {
          if (typeHint !== void 0) {
            return getTypeFromHint(
              /** @type {string} */
              /** @type {LiteralExpression} */
              typeHint.value
            );
          }
          return AnyType;
        },
        withArgsCount(1, 2),
        withGetArgs
      ),
      [Ops.Var]: createParser(
        ([firstArg]) => firstArg.type,
        withArgsCount(1, 1),
        withVarArgs
      ),
      [Ops.Id]: createParser(NumberType | StringType, withNoArgs, usesFeatureId),
      [Ops.Concat]: createParser(
        StringType,
        withArgsCount(2, Infinity),
        parseArgsOfType(AnyType)
      ),
      [Ops.GeometryType]: createParser(StringType, withNoArgs),
      [Ops.Resolution]: createParser(NumberType, withNoArgs),
      [Ops.Zoom]: createParser(NumberType, withNoArgs),
      [Ops.Time]: createParser(NumberType, withNoArgs),
      [Ops.Any]: createParser(
        BooleanType,
        withArgsCount(2, Infinity),
        parseArgsOfType(BooleanType)
      ),
      [Ops.All]: createParser(
        BooleanType,
        withArgsCount(2, Infinity),
        parseArgsOfType(BooleanType)
      ),
      [Ops.Not]: createParser(
        BooleanType,
        withArgsCount(1, 1),
        parseArgsOfType(BooleanType)
      ),
      [Ops.Equal]: createParser(
        BooleanType,
        withArgsCount(2, 2),
        parseArgsOfType(AnyType),
        narrowArgsType
      ),
      [Ops.NotEqual]: createParser(
        BooleanType,
        withArgsCount(2, 2),
        parseArgsOfType(AnyType),
        narrowArgsType
      ),
      [Ops.GreaterThan]: createParser(
        BooleanType,
        withArgsCount(2, 2),
        parseArgsOfType(AnyType),
        narrowArgsType
      ),
      [Ops.GreaterThanOrEqualTo]: createParser(
        BooleanType,
        withArgsCount(2, 2),
        parseArgsOfType(AnyType),
        narrowArgsType
      ),
      [Ops.LessThan]: createParser(
        BooleanType,
        withArgsCount(2, 2),
        parseArgsOfType(AnyType),
        narrowArgsType
      ),
      [Ops.LessThanOrEqualTo]: createParser(
        BooleanType,
        withArgsCount(2, 2),
        parseArgsOfType(AnyType),
        narrowArgsType
      ),
      [Ops.Multiply]: createParser(
        (parsedArgs) => {
          let outputType = NumberType | ColorType;
          for (let i = 0; i < parsedArgs.length; i++) {
            outputType &= parsedArgs[i].type;
          }
          return outputType;
        },
        withArgsCount(2, Infinity),
        parseArgsOfType(NumberType | ColorType),
        narrowArgsType
      ),
      [Ops.Divide]: createParser(
        NumberType,
        withArgsCount(2, 2),
        parseArgsOfType(NumberType)
      ),
      [Ops.Add]: createParser(
        NumberType,
        withArgsCount(2, Infinity),
        parseArgsOfType(NumberType)
      ),
      [Ops.Subtract]: createParser(
        NumberType,
        withArgsCount(2, 2),
        parseArgsOfType(NumberType)
      ),
      [Ops.Clamp]: createParser(
        NumberType,
        withArgsCount(3, 3),
        parseArgsOfType(NumberType)
      ),
      [Ops.Mod]: createParser(
        NumberType,
        withArgsCount(2, 2),
        parseArgsOfType(NumberType)
      ),
      [Ops.Pow]: createParser(
        NumberType,
        withArgsCount(2, 2),
        parseArgsOfType(NumberType)
      ),
      [Ops.Abs]: createParser(
        NumberType,
        withArgsCount(1, 1),
        parseArgsOfType(NumberType)
      ),
      [Ops.Floor]: createParser(
        NumberType,
        withArgsCount(1, 1),
        parseArgsOfType(NumberType)
      ),
      [Ops.Ceil]: createParser(
        NumberType,
        withArgsCount(1, 1),
        parseArgsOfType(NumberType)
      ),
      [Ops.Round]: createParser(
        NumberType,
        withArgsCount(1, 1),
        parseArgsOfType(NumberType)
      ),
      [Ops.Sin]: createParser(
        NumberType,
        withArgsCount(1, 1),
        parseArgsOfType(NumberType)
      ),
      [Ops.Cos]: createParser(
        NumberType,
        withArgsCount(1, 1),
        parseArgsOfType(NumberType)
      ),
      [Ops.Atan]: createParser(
        NumberType,
        withArgsCount(1, 2),
        parseArgsOfType(NumberType)
      ),
      [Ops.Sqrt]: createParser(
        NumberType,
        withArgsCount(1, 1),
        parseArgsOfType(NumberType)
      ),
      [Ops.Match]: createParser(
        (parsedArgs) => {
          let type = AnyType;
          for (let i = 2; i < parsedArgs.length; i += 2) {
            type &= parsedArgs[i].type;
          }
          type &= parsedArgs[parsedArgs.length - 1].type;
          return type;
        },
        withArgsCount(4, Infinity),
        withEvenArgs,
        parseMatchArgs
      ),
      [Ops.Between]: createParser(
        BooleanType,
        withArgsCount(3, 3),
        parseArgsOfType(NumberType)
      ),
      [Ops.Interpolate]: createParser(
        (parsedArgs) => {
          let type = ColorType | NumberType;
          for (let i = 3; i < parsedArgs.length; i += 2) {
            type &= parsedArgs[i].type;
          }
          return type;
        },
        withArgsCount(6, Infinity),
        withEvenArgs,
        parseInterpolateArgs
      ),
      [Ops.Case]: createParser(
        (parsedArgs) => {
          let type = AnyType;
          for (let i = 1; i < parsedArgs.length; i += 2) {
            type &= parsedArgs[i].type;
          }
          type &= parsedArgs[parsedArgs.length - 1].type;
          return type;
        },
        withArgsCount(3, Infinity),
        withOddArgs,
        parseCaseArgs
      ),
      [Ops.In]: createParser(BooleanType, withArgsCount(2, 2), parseInArgs),
      [Ops.Number]: createParser(
        NumberType,
        withArgsCount(1, Infinity),
        parseArgsOfType(AnyType)
      ),
      [Ops.String]: createParser(
        StringType,
        withArgsCount(1, Infinity),
        parseArgsOfType(AnyType)
      ),
      [Ops.Array]: createParser(
        (parsedArgs) => {
          return parsedArgs.length === 3 || parsedArgs.length === 4 ? NumberArrayType | ColorType : NumberArrayType;
        },
        withArgsCount(1, Infinity),
        parseArgsOfType(NumberType)
      ),
      [Ops.Color]: createParser(
        ColorType,
        withArgsCount(3, 4),
        parseArgsOfType(NumberType)
      ),
      [Ops.Band]: createParser(
        NumberType,
        withArgsCount(1, 3),
        parseArgsOfType(NumberType)
      ),
      [Ops.Palette]: createParser(ColorType, withArgsCount(2, 2), parsePaletteArgs)
    };
  }
});

// node_modules/ol/expr/cpu.js
function newEvaluationContext() {
  return {
    variables: {},
    properties: {},
    resolution: NaN,
    featureId: null
  };
}
function buildExpression(encoded, type, context) {
  const expression = parse2(encoded, context);
  if (!overlapsType(type, expression.type)) {
    const expected = typeName(type);
    const actual = typeName(expression.type);
    throw new Error(
      `Expected expression to be of type ${expected}, got ${actual}`
    );
  }
  return compileExpression(expression, context);
}
function compileExpression(expression, context) {
  if (expression instanceof LiteralExpression) {
    if (expression.type === ColorType && typeof expression.value === "string") {
      const colorValue = fromString(expression.value);
      return function() {
        return colorValue;
      };
    }
    return function() {
      return expression.value;
    };
  }
  const operator = expression.operator;
  switch (operator) {
    case Ops.Number:
    case Ops.String: {
      return compileAssertionExpression(expression, context);
    }
    case Ops.Get:
    case Ops.Var: {
      return compileAccessorExpression(expression, context);
    }
    case Ops.Id: {
      return (expression2) => expression2.featureId;
    }
    case Ops.Concat: {
      const args = expression.args.map((e) => compileExpression(e, context));
      return (context2) => "".concat(...args.map((arg) => arg(context2).toString()));
    }
    case Ops.Resolution: {
      return (context2) => context2.resolution;
    }
    case Ops.Any:
    case Ops.All:
    case Ops.Not: {
      return compileLogicalExpression(expression, context);
    }
    case Ops.Equal:
    case Ops.NotEqual:
    case Ops.LessThan:
    case Ops.LessThanOrEqualTo:
    case Ops.GreaterThan:
    case Ops.GreaterThanOrEqualTo: {
      return compileComparisonExpression(expression, context);
    }
    case Ops.Multiply:
    case Ops.Divide:
    case Ops.Add:
    case Ops.Subtract:
    case Ops.Clamp:
    case Ops.Mod:
    case Ops.Pow:
    case Ops.Abs:
    case Ops.Floor:
    case Ops.Ceil:
    case Ops.Round:
    case Ops.Sin:
    case Ops.Cos:
    case Ops.Atan:
    case Ops.Sqrt: {
      return compileNumericExpression(expression, context);
    }
    case Ops.Match: {
      return compileMatchExpression(expression, context);
    }
    case Ops.Interpolate: {
      return compileInterpolateExpression(expression, context);
    }
    default: {
      throw new Error(`Unsupported operator ${operator}`);
    }
  }
}
function compileAssertionExpression(expression, context) {
  const type = expression.operator;
  const length = expression.args.length;
  const args = new Array(length);
  for (let i = 0; i < length; ++i) {
    args[i] = compileExpression(expression.args[i], context);
  }
  switch (type) {
    case Ops.Number:
    case Ops.String: {
      return (context2) => {
        for (let i = 0; i < length; ++i) {
          const value = args[i](context2);
          if (typeof value === type) {
            return value;
          }
        }
        throw new Error(`Expected one of the values to be a ${type}`);
      };
    }
    default: {
      throw new Error(`Unsupported assertion operator ${type}`);
    }
  }
}
function compileAccessorExpression(expression, context) {
  const nameExpression = (
    /** @type {LiteralExpression} */
    expression.args[0]
  );
  const name = (
    /** @type {string} */
    nameExpression.value
  );
  switch (expression.operator) {
    case Ops.Get: {
      return (context2) => context2.properties[name];
    }
    case Ops.Var: {
      return (context2) => context2.variables[name];
    }
    default: {
      throw new Error(`Unsupported accessor operator ${expression.operator}`);
    }
  }
}
function compileComparisonExpression(expression, context) {
  const op = expression.operator;
  const left = compileExpression(expression.args[0], context);
  const right = compileExpression(expression.args[1], context);
  switch (op) {
    case Ops.Equal: {
      return (context2) => left(context2) === right(context2);
    }
    case Ops.NotEqual: {
      return (context2) => left(context2) !== right(context2);
    }
    case Ops.LessThan: {
      return (context2) => left(context2) < right(context2);
    }
    case Ops.LessThanOrEqualTo: {
      return (context2) => left(context2) <= right(context2);
    }
    case Ops.GreaterThan: {
      return (context2) => left(context2) > right(context2);
    }
    case Ops.GreaterThanOrEqualTo: {
      return (context2) => left(context2) >= right(context2);
    }
    default: {
      throw new Error(`Unsupported comparison operator ${op}`);
    }
  }
}
function compileLogicalExpression(expression, context) {
  const op = expression.operator;
  const length = expression.args.length;
  const args = new Array(length);
  for (let i = 0; i < length; ++i) {
    args[i] = compileExpression(expression.args[i], context);
  }
  switch (op) {
    case Ops.Any: {
      return (context2) => {
        for (let i = 0; i < length; ++i) {
          if (args[i](context2)) {
            return true;
          }
        }
        return false;
      };
    }
    case Ops.All: {
      return (context2) => {
        for (let i = 0; i < length; ++i) {
          if (!args[i](context2)) {
            return false;
          }
        }
        return true;
      };
    }
    case Ops.Not: {
      return (context2) => !args[0](context2);
    }
    default: {
      throw new Error(`Unsupported logical operator ${op}`);
    }
  }
}
function compileNumericExpression(expression, context) {
  const op = expression.operator;
  const length = expression.args.length;
  const args = new Array(length);
  for (let i = 0; i < length; ++i) {
    args[i] = compileExpression(expression.args[i], context);
  }
  switch (op) {
    case Ops.Multiply: {
      return (context2) => {
        let value = 1;
        for (let i = 0; i < length; ++i) {
          value *= args[i](context2);
        }
        return value;
      };
    }
    case Ops.Divide: {
      return (context2) => args[0](context2) / args[1](context2);
    }
    case Ops.Add: {
      return (context2) => {
        let value = 0;
        for (let i = 0; i < length; ++i) {
          value += args[i](context2);
        }
        return value;
      };
    }
    case Ops.Subtract: {
      return (context2) => args[0](context2) - args[1](context2);
    }
    case Ops.Clamp: {
      return (context2) => {
        const value = args[0](context2);
        const min = args[1](context2);
        if (value < min) {
          return min;
        }
        const max = args[2](context2);
        if (value > max) {
          return max;
        }
        return value;
      };
    }
    case Ops.Mod: {
      return (context2) => args[0](context2) % args[1](context2);
    }
    case Ops.Pow: {
      return (context2) => Math.pow(args[0](context2), args[1](context2));
    }
    case Ops.Abs: {
      return (context2) => Math.abs(args[0](context2));
    }
    case Ops.Floor: {
      return (context2) => Math.floor(args[0](context2));
    }
    case Ops.Ceil: {
      return (context2) => Math.ceil(args[0](context2));
    }
    case Ops.Round: {
      return (context2) => Math.round(args[0](context2));
    }
    case Ops.Sin: {
      return (context2) => Math.sin(args[0](context2));
    }
    case Ops.Cos: {
      return (context2) => Math.cos(args[0](context2));
    }
    case Ops.Atan: {
      if (length === 2) {
        return (context2) => Math.atan2(args[0](context2), args[1](context2));
      }
      return (context2) => Math.atan(args[0](context2));
    }
    case Ops.Sqrt: {
      return (context2) => Math.sqrt(args[0](context2));
    }
    default: {
      throw new Error(`Unsupported numeric operator ${op}`);
    }
  }
}
function compileMatchExpression(expression, context) {
  const length = expression.args.length;
  const args = new Array(length);
  for (let i = 0; i < length; ++i) {
    args[i] = compileExpression(expression.args[i], context);
  }
  return (context2) => {
    const value = args[0](context2);
    for (let i = 1; i < length; i += 2) {
      if (value === args[i](context2)) {
        return args[i + 1](context2);
      }
    }
    return args[length - 1](context2);
  };
}
function compileInterpolateExpression(expression, context) {
  const length = expression.args.length;
  const args = new Array(length);
  for (let i = 0; i < length; ++i) {
    args[i] = compileExpression(expression.args[i], context);
  }
  return (context2) => {
    const base = args[0](context2);
    const value = args[1](context2);
    let previousInput;
    let previousOutput;
    for (let i = 2; i < length; i += 2) {
      const input = args[i](context2);
      let output = args[i + 1](context2);
      const isColor = Array.isArray(output);
      if (isColor) {
        output = withAlpha(output);
      }
      if (input >= value) {
        if (i === 2) {
          return output;
        }
        if (isColor) {
          return interpolateColor(
            base,
            value,
            previousInput,
            previousOutput,
            input,
            output
          );
        }
        return interpolateNumber(
          base,
          value,
          previousInput,
          previousOutput,
          input,
          output
        );
      }
      previousInput = input;
      previousOutput = output;
    }
    return previousOutput;
  };
}
function interpolateNumber(base, value, input1, output1, input2, output2) {
  const delta = input2 - input1;
  if (delta === 0) {
    return output1;
  }
  const along = value - input1;
  const factor = base === 1 ? along / delta : (Math.pow(base, along) - 1) / (Math.pow(base, delta) - 1);
  return output1 + factor * (output2 - output1);
}
function interpolateColor(base, value, input1, rgba1, input2, rgba2) {
  const delta = input2 - input1;
  if (delta === 0) {
    return rgba1;
  }
  const lcha1 = rgbaToLcha(rgba1);
  const lcha2 = rgbaToLcha(rgba2);
  let deltaHue = lcha2[2] - lcha1[2];
  if (deltaHue > 180) {
    deltaHue -= 360;
  } else if (deltaHue < -180) {
    deltaHue += 360;
  }
  const lcha = [
    interpolateNumber(base, value, input1, lcha1[0], input2, lcha2[0]),
    interpolateNumber(base, value, input1, lcha1[1], input2, lcha2[1]),
    lcha1[2] + interpolateNumber(base, value, input1, 0, input2, deltaHue),
    interpolateNumber(base, value, input1, rgba1[3], input2, rgba2[3])
  ];
  return normalize(lchaToRgba(lcha));
}
var init_cpu = __esm({
  "node_modules/ol/expr/cpu.js"() {
    init_expression();
    init_color();
  }
});

// node_modules/ol/render/canvas/style.js
function always2(context) {
  return true;
}
function rulesToStyleFunction(rules) {
  const parsingContext = newParsingContext();
  const evaluator = buildRuleSet(rules, parsingContext);
  const evaluationContext = newEvaluationContext();
  return function(feature, resolution) {
    evaluationContext.properties = feature.getPropertiesInternal();
    evaluationContext.resolution = resolution;
    if (parsingContext.featureId) {
      const id = feature.getId();
      if (id !== void 0) {
        evaluationContext.featureId = id;
      } else {
        evaluationContext.featureId = null;
      }
    }
    return evaluator(evaluationContext);
  };
}
function flatStylesToStyleFunction(flatStyles) {
  const parsingContext = newParsingContext();
  const length = flatStyles.length;
  const evaluators = new Array(length);
  for (let i = 0; i < length; ++i) {
    evaluators[i] = buildStyle(flatStyles[i], parsingContext);
  }
  const evaluationContext = newEvaluationContext();
  const styles = new Array(length);
  return function(feature, resolution) {
    evaluationContext.properties = feature.getPropertiesInternal();
    evaluationContext.resolution = resolution;
    if (parsingContext.featureId) {
      const id = feature.getId();
      if (id !== void 0) {
        evaluationContext.featureId = id;
      } else {
        evaluationContext.featureId = null;
      }
    }
    let nonNullCount = 0;
    for (let i = 0; i < length; ++i) {
      const style = evaluators[i](evaluationContext);
      if (style) {
        styles[nonNullCount] = style;
        nonNullCount += 1;
      }
    }
    styles.length = nonNullCount;
    return styles;
  };
}
function buildRuleSet(rules, context) {
  const length = rules.length;
  const compiledRules = new Array(length);
  for (let i = 0; i < length; ++i) {
    const rule = rules[i];
    const filter = "filter" in rule ? buildExpression(rule.filter, BooleanType, context) : always2;
    let styles;
    if (Array.isArray(rule.style)) {
      const styleLength = rule.style.length;
      styles = new Array(styleLength);
      for (let j = 0; j < styleLength; ++j) {
        styles[j] = buildStyle(rule.style[j], context);
      }
    } else {
      styles = [buildStyle(rule.style, context)];
    }
    compiledRules[i] = { filter, styles };
  }
  return function(context2) {
    const styles = [];
    let someMatched = false;
    for (let i = 0; i < length; ++i) {
      const filterEvaluator = compiledRules[i].filter;
      if (!filterEvaluator(context2)) {
        continue;
      }
      if (rules[i].else && someMatched) {
        continue;
      }
      someMatched = true;
      for (const styleEvaluator of compiledRules[i].styles) {
        const style = styleEvaluator(context2);
        if (!style) {
          continue;
        }
        styles.push(style);
      }
    }
    return styles;
  };
}
function buildStyle(flatStyle, context) {
  const evaluateFill = buildFill(flatStyle, "", context);
  const evaluateStroke = buildStroke(flatStyle, "", context);
  const evaluateText = buildText(flatStyle, context);
  const evaluateImage = buildImage(flatStyle, context);
  const evaluateZIndex = numberEvaluator(flatStyle, "z-index", context);
  if (!evaluateFill && !evaluateStroke && !evaluateText && !evaluateImage && !isEmpty(flatStyle)) {
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(flatStyle)
    );
  }
  const style = new Style_default();
  return function(context2) {
    let empty = true;
    if (evaluateFill) {
      const fill = evaluateFill(context2);
      if (fill) {
        empty = false;
      }
      style.setFill(fill);
    }
    if (evaluateStroke) {
      const stroke = evaluateStroke(context2);
      if (stroke) {
        empty = false;
      }
      style.setStroke(stroke);
    }
    if (evaluateText) {
      const text = evaluateText(context2);
      if (text) {
        empty = false;
      }
      style.setText(text);
    }
    if (evaluateImage) {
      const image = evaluateImage(context2);
      if (image) {
        empty = false;
      }
      style.setImage(image);
    }
    if (evaluateZIndex) {
      style.setZIndex(evaluateZIndex(context2));
    }
    if (empty) {
      return null;
    }
    return style;
  };
}
function buildFill(flatStyle, prefix, context) {
  const evaluateColor = colorLikeEvaluator(
    flatStyle,
    prefix + "fill-color",
    context
  );
  if (!evaluateColor) {
    return null;
  }
  const fill = new Fill_default();
  return function(context2) {
    const color = evaluateColor(context2);
    if (color === "none") {
      return null;
    }
    fill.setColor(color);
    return fill;
  };
}
function buildStroke(flatStyle, prefix, context) {
  const evaluateWidth = numberEvaluator(
    flatStyle,
    prefix + "stroke-width",
    context
  );
  const evaluateColor = colorLikeEvaluator(
    flatStyle,
    prefix + "stroke-color",
    context
  );
  if (!evaluateWidth && !evaluateColor) {
    return null;
  }
  const evaluateLineCap = stringEvaluator(
    flatStyle,
    prefix + "stroke-line-cap",
    context
  );
  const evaluateLineJoin = stringEvaluator(
    flatStyle,
    prefix + "stroke-line-join",
    context
  );
  const evaluateLineDash = numberArrayEvaluator(
    flatStyle,
    prefix + "stroke-line-dash",
    context
  );
  const evaluateLineDashOffset = numberEvaluator(
    flatStyle,
    prefix + "stroke-line-dash-offset",
    context
  );
  const evaluateMiterLimit = numberEvaluator(
    flatStyle,
    prefix + "stroke-miter-limit",
    context
  );
  const stroke = new Stroke_default();
  return function(context2) {
    if (evaluateColor) {
      const color = evaluateColor(context2);
      if (color === "none") {
        return null;
      }
      stroke.setColor(color);
    }
    if (evaluateWidth) {
      stroke.setWidth(evaluateWidth(context2));
    }
    if (evaluateLineCap) {
      const lineCap = evaluateLineCap(context2);
      if (lineCap !== "butt" && lineCap !== "round" && lineCap !== "square") {
        throw new Error("Expected butt, round, or square line cap");
      }
      stroke.setLineCap(lineCap);
    }
    if (evaluateLineJoin) {
      const lineJoin = evaluateLineJoin(context2);
      if (lineJoin !== "bevel" && lineJoin !== "round" && lineJoin !== "miter") {
        throw new Error("Expected bevel, round, or miter line join");
      }
      stroke.setLineJoin(lineJoin);
    }
    if (evaluateLineDash) {
      stroke.setLineDash(evaluateLineDash(context2));
    }
    if (evaluateLineDashOffset) {
      stroke.setLineDashOffset(evaluateLineDashOffset(context2));
    }
    if (evaluateMiterLimit) {
      stroke.setMiterLimit(evaluateMiterLimit(context2));
    }
    return stroke;
  };
}
function buildText(flatStyle, context) {
  const prefix = "text-";
  const evaluateValue = stringEvaluator(flatStyle, prefix + "value", context);
  if (!evaluateValue) {
    return null;
  }
  const evaluateFill = buildFill(flatStyle, prefix, context);
  const evaluateBackgroundFill = buildFill(
    flatStyle,
    prefix + "background-",
    context
  );
  const evaluateStroke = buildStroke(flatStyle, prefix, context);
  const evaluateBackgroundStroke = buildStroke(
    flatStyle,
    prefix + "background-",
    context
  );
  const evaluateFont = stringEvaluator(flatStyle, prefix + "font", context);
  const evaluateMaxAngle = numberEvaluator(
    flatStyle,
    prefix + "max-angle",
    context
  );
  const evaluateOffsetX = numberEvaluator(
    flatStyle,
    prefix + "offset-x",
    context
  );
  const evaluateOffsetY = numberEvaluator(
    flatStyle,
    prefix + "offset-y",
    context
  );
  const evaluateOverflow = booleanEvaluator(
    flatStyle,
    prefix + "overflow",
    context
  );
  const evaluatePlacement = stringEvaluator(
    flatStyle,
    prefix + "placement",
    context
  );
  const evaluateRepeat = numberEvaluator(flatStyle, prefix + "repeat", context);
  const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
  const evaluateRotateWithView = booleanEvaluator(
    flatStyle,
    prefix + "rotate-with-view",
    context
  );
  const evaluateRotation = numberEvaluator(
    flatStyle,
    prefix + "rotation",
    context
  );
  const evaluateAlign = stringEvaluator(flatStyle, prefix + "align", context);
  const evaluateJustify = stringEvaluator(
    flatStyle,
    prefix + "justify",
    context
  );
  const evaluateBaseline = stringEvaluator(
    flatStyle,
    prefix + "baseline",
    context
  );
  const evaluatePadding = numberArrayEvaluator(
    flatStyle,
    prefix + "padding",
    context
  );
  const text = new Text_default({});
  return function(context2) {
    text.setText(evaluateValue(context2));
    if (evaluateFill) {
      text.setFill(evaluateFill(context2));
    }
    if (evaluateBackgroundFill) {
      text.setBackgroundFill(evaluateBackgroundFill(context2));
    }
    if (evaluateStroke) {
      text.setStroke(evaluateStroke(context2));
    }
    if (evaluateBackgroundStroke) {
      text.setBackgroundStroke(evaluateBackgroundStroke(context2));
    }
    if (evaluateFont) {
      text.setFont(evaluateFont(context2));
    }
    if (evaluateMaxAngle) {
      text.setMaxAngle(evaluateMaxAngle(context2));
    }
    if (evaluateOffsetX) {
      text.setOffsetX(evaluateOffsetX(context2));
    }
    if (evaluateOffsetY) {
      text.setOffsetY(evaluateOffsetY(context2));
    }
    if (evaluateOverflow) {
      text.setOverflow(evaluateOverflow(context2));
    }
    if (evaluatePlacement) {
      const placement = evaluatePlacement(context2);
      if (placement !== "point" && placement !== "line") {
        throw new Error("Expected point or line for text-placement");
      }
      text.setPlacement(placement);
    }
    if (evaluateRepeat) {
      text.setRepeat(evaluateRepeat(context2));
    }
    if (evaluateScale) {
      text.setScale(evaluateScale(context2));
    }
    if (evaluateRotateWithView) {
      text.setRotateWithView(evaluateRotateWithView(context2));
    }
    if (evaluateRotation) {
      text.setRotation(evaluateRotation(context2));
    }
    if (evaluateAlign) {
      const textAlign = evaluateAlign(context2);
      if (textAlign !== "left" && textAlign !== "center" && textAlign !== "right" && textAlign !== "end" && textAlign !== "start") {
        throw new Error(
          "Expected left, right, center, start, or end for text-align"
        );
      }
      text.setTextAlign(textAlign);
    }
    if (evaluateJustify) {
      const justify = evaluateJustify(context2);
      if (justify !== "left" && justify !== "right" && justify !== "center") {
        throw new Error("Expected left, right, or center for text-justify");
      }
      text.setJustify(justify);
    }
    if (evaluateBaseline) {
      const textBaseline = evaluateBaseline(context2);
      if (textBaseline !== "bottom" && textBaseline !== "top" && textBaseline !== "middle" && textBaseline !== "alphabetic" && textBaseline !== "hanging") {
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline"
        );
      }
      text.setTextBaseline(textBaseline);
    }
    if (evaluatePadding) {
      text.setPadding(evaluatePadding(context2));
    }
    return text;
  };
}
function buildImage(flatStyle, context) {
  if ("icon-src" in flatStyle) {
    return buildIcon(flatStyle, context);
  }
  if ("shape-points" in flatStyle) {
    return buildShape(flatStyle, context);
  }
  if ("circle-radius" in flatStyle) {
    return buildCircle(flatStyle, context);
  }
  return null;
}
function buildIcon(flatStyle, context) {
  const prefix = "icon-";
  const srcName = prefix + "src";
  const src = requireString(flatStyle[srcName], srcName);
  const evaluateAnchor = coordinateEvaluator(
    flatStyle,
    prefix + "anchor",
    context
  );
  const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
  const evaluateOpacity = numberEvaluator(
    flatStyle,
    prefix + "opacity",
    context
  );
  const evaluateDisplacement = coordinateEvaluator(
    flatStyle,
    prefix + "displacement",
    context
  );
  const evaluateRotation = numberEvaluator(
    flatStyle,
    prefix + "rotation",
    context
  );
  const evaluateRotateWithView = booleanEvaluator(
    flatStyle,
    prefix + "rotate-with-view",
    context
  );
  const anchorOrigin = optionalIconOrigin(flatStyle, prefix + "anchor-origin");
  const anchorXUnits = optionalIconAnchorUnits(
    flatStyle,
    prefix + "anchor-x-units"
  );
  const anchorYUnits = optionalIconAnchorUnits(
    flatStyle,
    prefix + "anchor-y-units"
  );
  const color = optionalColorLike(flatStyle, prefix + "color");
  const crossOrigin = optionalString(flatStyle, prefix + "cross-origin");
  const offset = optionalNumberArray(flatStyle, prefix + "offset");
  const offsetOrigin = optionalIconOrigin(flatStyle, prefix + "offset-origin");
  const width = optionalNumber(flatStyle, prefix + "width");
  const height = optionalNumber(flatStyle, prefix + "height");
  const size = optionalSize(flatStyle, prefix + "size");
  const declutterMode = optionalDeclutterMode(flatStyle, prefix + "declutter");
  const icon = new Icon_default({
    src,
    anchorOrigin,
    anchorXUnits,
    anchorYUnits,
    color,
    crossOrigin,
    offset,
    offsetOrigin,
    height,
    width,
    size,
    declutterMode
  });
  return function(context2) {
    if (evaluateOpacity) {
      icon.setOpacity(evaluateOpacity(context2));
    }
    if (evaluateDisplacement) {
      icon.setDisplacement(evaluateDisplacement(context2));
    }
    if (evaluateRotation) {
      icon.setRotation(evaluateRotation(context2));
    }
    if (evaluateRotateWithView) {
      icon.setRotateWithView(evaluateRotateWithView(context2));
    }
    if (evaluateScale) {
      icon.setScale(evaluateScale(context2));
    }
    if (evaluateAnchor) {
      icon.setAnchor(evaluateAnchor(context2));
    }
    return icon;
  };
}
function buildShape(flatStyle, context) {
  const prefix = "shape-";
  const pointsName = prefix + "points";
  const points = requireNumber(flatStyle[pointsName], pointsName);
  const evaluateFill = buildFill(flatStyle, prefix, context);
  const evaluateStroke = buildStroke(flatStyle, prefix, context);
  const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
  const evaluateDisplacement = coordinateEvaluator(
    flatStyle,
    prefix + "displacement",
    context
  );
  const evaluateRotation = numberEvaluator(
    flatStyle,
    prefix + "rotation",
    context
  );
  const evaluateRotateWithView = booleanEvaluator(
    flatStyle,
    prefix + "rotate-with-view",
    context
  );
  const radius = optionalNumber(flatStyle, prefix + "radius");
  const radius1 = optionalNumber(flatStyle, prefix + "radius1");
  const radius2 = optionalNumber(flatStyle, prefix + "radius2");
  const angle = optionalNumber(flatStyle, prefix + "angle");
  const declutterMode = optionalDeclutterMode(
    flatStyle,
    prefix + "declutter-mode"
  );
  const shape = new RegularShape_default({
    points,
    radius,
    radius1,
    radius2,
    angle,
    declutterMode
  });
  return function(context2) {
    if (evaluateFill) {
      shape.setFill(evaluateFill(context2));
    }
    if (evaluateStroke) {
      shape.setStroke(evaluateStroke(context2));
    }
    if (evaluateDisplacement) {
      shape.setDisplacement(evaluateDisplacement(context2));
    }
    if (evaluateRotation) {
      shape.setRotation(evaluateRotation(context2));
    }
    if (evaluateRotateWithView) {
      shape.setRotateWithView(evaluateRotateWithView(context2));
    }
    if (evaluateScale) {
      shape.setScale(evaluateScale(context2));
    }
    return shape;
  };
}
function buildCircle(flatStyle, context) {
  const prefix = "circle-";
  const evaluateFill = buildFill(flatStyle, prefix, context);
  const evaluateStroke = buildStroke(flatStyle, prefix, context);
  const evaluateRadius = numberEvaluator(flatStyle, prefix + "radius", context);
  const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
  const evaluateDisplacement = coordinateEvaluator(
    flatStyle,
    prefix + "displacement",
    context
  );
  const evaluateRotation = numberEvaluator(
    flatStyle,
    prefix + "rotation",
    context
  );
  const evaluateRotateWithView = booleanEvaluator(
    flatStyle,
    prefix + "rotate-with-view",
    context
  );
  const declutterMode = optionalDeclutterMode(
    flatStyle,
    prefix + "declutter-mode"
  );
  const circle = new Circle_default({
    radius: 5,
    // this is arbitrary, but required - the evaluated radius is used below
    declutterMode
  });
  return function(context2) {
    if (evaluateRadius) {
      circle.setRadius(evaluateRadius(context2));
    }
    if (evaluateFill) {
      circle.setFill(evaluateFill(context2));
    }
    if (evaluateStroke) {
      circle.setStroke(evaluateStroke(context2));
    }
    if (evaluateDisplacement) {
      circle.setDisplacement(evaluateDisplacement(context2));
    }
    if (evaluateRotation) {
      circle.setRotation(evaluateRotation(context2));
    }
    if (evaluateRotateWithView) {
      circle.setRotateWithView(evaluateRotateWithView(context2));
    }
    if (evaluateScale) {
      circle.setScale(evaluateScale(context2));
    }
    return circle;
  };
}
function numberEvaluator(flatStyle, name, context) {
  if (!(name in flatStyle)) {
    return void 0;
  }
  const evaluator = buildExpression(flatStyle[name], NumberType, context);
  return function(context2) {
    return requireNumber(evaluator(context2), name);
  };
}
function stringEvaluator(flatStyle, name, context) {
  if (!(name in flatStyle)) {
    return null;
  }
  const evaluator = buildExpression(flatStyle[name], StringType, context);
  return function(context2) {
    return requireString(evaluator(context2), name);
  };
}
function booleanEvaluator(flatStyle, name, context) {
  if (!(name in flatStyle)) {
    return null;
  }
  const evaluator = buildExpression(flatStyle[name], BooleanType, context);
  return function(context2) {
    const value = evaluator(context2);
    if (typeof value !== "boolean") {
      throw new Error(`Expected a boolean for ${name}`);
    }
    return value;
  };
}
function colorLikeEvaluator(flatStyle, name, context) {
  if (!(name in flatStyle)) {
    return null;
  }
  const evaluator = buildExpression(
    flatStyle[name],
    ColorType | StringType,
    context
  );
  return function(context2) {
    return requireColorLike(evaluator(context2), name);
  };
}
function numberArrayEvaluator(flatStyle, name, context) {
  if (!(name in flatStyle)) {
    return null;
  }
  const evaluator = buildExpression(flatStyle[name], NumberArrayType, context);
  return function(context2) {
    return requireNumberArray(evaluator(context2), name);
  };
}
function coordinateEvaluator(flatStyle, name, context) {
  if (!(name in flatStyle)) {
    return null;
  }
  const evaluator = buildExpression(flatStyle[name], NumberArrayType, context);
  return function(context2) {
    const array = requireNumberArray(evaluator(context2), name);
    if (array.length !== 2) {
      throw new Error(`Expected two numbers for ${name}`);
    }
    return array;
  };
}
function sizeLikeEvaluator(flatStyle, name, context) {
  if (!(name in flatStyle)) {
    return null;
  }
  const evaluator = buildExpression(
    flatStyle[name],
    NumberArrayType | NumberType,
    context
  );
  return function(context2) {
    return requireSizeLike(evaluator(context2), name);
  };
}
function optionalNumber(flatStyle, property) {
  const value = flatStyle[property];
  if (value === void 0) {
    return void 0;
  }
  if (typeof value !== "number") {
    throw new Error(`Expected a number for ${property}`);
  }
  return value;
}
function optionalSize(flatStyle, property) {
  const encoded = flatStyle[property];
  if (encoded === void 0) {
    return void 0;
  }
  if (typeof encoded === "number") {
    return toSize(encoded);
  }
  if (!Array.isArray(encoded)) {
    throw new Error(`Expected a number or size array for ${property}`);
  }
  if (encoded.length !== 2 || typeof encoded[0] !== "number" || typeof encoded[1] !== "number") {
    throw new Error(`Expected a number or size array for ${property}`);
  }
  return encoded;
}
function optionalString(flatStyle, property) {
  const encoded = flatStyle[property];
  if (encoded === void 0) {
    return void 0;
  }
  if (typeof encoded !== "string") {
    throw new Error(`Expected a string for ${property}`);
  }
  return encoded;
}
function optionalIconOrigin(flatStyle, property) {
  const encoded = flatStyle[property];
  if (encoded === void 0) {
    return void 0;
  }
  if (encoded !== "bottom-left" && encoded !== "bottom-right" && encoded !== "top-left" && encoded !== "top-right") {
    throw new Error(
      `Expected bottom-left, bottom-right, top-left, or top-right for ${property}`
    );
  }
  return encoded;
}
function optionalIconAnchorUnits(flatStyle, property) {
  const encoded = flatStyle[property];
  if (encoded === void 0) {
    return void 0;
  }
  if (encoded !== "pixels" && encoded !== "fraction") {
    throw new Error(`Expected pixels or fraction for ${property}`);
  }
  return encoded;
}
function optionalNumberArray(flatStyle, property) {
  const encoded = flatStyle[property];
  if (encoded === void 0) {
    return void 0;
  }
  return requireNumberArray(encoded, property);
}
function optionalDeclutterMode(flatStyle, property) {
  const encoded = flatStyle[property];
  if (encoded === void 0) {
    return void 0;
  }
  if (typeof encoded !== "string") {
    throw new Error(`Expected a string for ${property}`);
  }
  if (encoded !== "declutter" && encoded !== "obstacle" && encoded !== "none") {
    throw new Error(`Expected declutter, obstacle, or none for ${property}`);
  }
  return encoded;
}
function optionalColorLike(flatStyle, property) {
  const encoded = flatStyle[property];
  if (encoded === void 0) {
    return void 0;
  }
  return requireColorLike(encoded, property);
}
function requireNumberArray(value, property) {
  if (!Array.isArray(value)) {
    throw new Error(`Expected an array for ${property}`);
  }
  const length = value.length;
  for (let i = 0; i < length; ++i) {
    if (typeof value[i] !== "number") {
      throw new Error(`Expected an array of numbers for ${property}`);
    }
  }
  return value;
}
function requireString(value, property) {
  if (typeof value !== "string") {
    throw new Error(`Expected a string for ${property}`);
  }
  return value;
}
function requireNumber(value, property) {
  if (typeof value !== "number") {
    throw new Error(`Expected a number for ${property}`);
  }
  return value;
}
function requireColorLike(value, property) {
  if (typeof value === "string") {
    return value;
  }
  const array = requireNumberArray(value, property);
  const length = array.length;
  if (length < 3 || length > 4) {
    throw new Error(`Expected a color with 3 or 4 values for ${property}`);
  }
  return array;
}
function requireSizeLike(value, property) {
  if (typeof value === "number") {
    return value;
  }
  const size = requireNumberArray(value, property);
  if (size.length !== 2) {
    throw new Error(`Expected an array of two numbers for ${property}`);
  }
  return size;
}
var init_style = __esm({
  "node_modules/ol/render/canvas/style.js"() {
    init_Circle();
    init_Fill();
    init_Icon();
    init_RegularShape();
    init_Stroke();
    init_Style();
    init_Text();
    init_expression();
    init_cpu();
    init_obj();
    init_size();
  }
});

// node_modules/ol/layer/BaseVector.js
function toStyleLike(style) {
  if (style === void 0) {
    return createDefaultStyle;
  }
  if (!style) {
    return null;
  }
  if (typeof style === "function") {
    return style;
  }
  if (style instanceof Style_default) {
    return style;
  }
  if (!Array.isArray(style)) {
    return flatStylesToStyleFunction([style]);
  }
  if (style.length === 0) {
    return [];
  }
  const length = style.length;
  const first = style[0];
  if (first instanceof Style_default) {
    const styles = new Array(length);
    for (let i = 0; i < length; ++i) {
      const candidate = style[i];
      if (!(candidate instanceof Style_default)) {
        throw new Error("Expected a list of style instances");
      }
      styles[i] = candidate;
    }
    return styles;
  }
  if ("style" in first) {
    const rules = new Array(length);
    for (let i = 0; i < length; ++i) {
      const candidate = style[i];
      if (!("style" in candidate)) {
        throw new Error("Expected a list of rules with a style property");
      }
      rules[i] = candidate;
    }
    return rulesToStyleFunction(rules);
  }
  const flatStyles = (
    /** @type {Array<import("../style/flat.js").FlatStyle>} */
    style
  );
  return flatStylesToStyleFunction(flatStyles);
}
var Property3, BaseVectorLayer, BaseVector_default;
var init_BaseVector = __esm({
  "node_modules/ol/layer/BaseVector.js"() {
    init_Layer();
    init_rbush();
    init_Style();
    init_style();
    Property3 = {
      RENDER_ORDER: "renderOrder"
    };
    BaseVectorLayer = class extends Layer_default {
      /**
       * @param {Options<VectorSourceType>} [options] Options.
       */
      constructor(options) {
        options = options ? options : {};
        const baseOptions = Object.assign({}, options);
        delete baseOptions.style;
        delete baseOptions.renderBuffer;
        delete baseOptions.updateWhileAnimating;
        delete baseOptions.updateWhileInteracting;
        super(baseOptions);
        this.declutter_ = options.declutter !== void 0 ? options.declutter : false;
        this.renderBuffer_ = options.renderBuffer !== void 0 ? options.renderBuffer : 100;
        this.style_ = null;
        this.styleFunction_ = void 0;
        this.setStyle(options.style);
        this.updateWhileAnimating_ = options.updateWhileAnimating !== void 0 ? options.updateWhileAnimating : false;
        this.updateWhileInteracting_ = options.updateWhileInteracting !== void 0 ? options.updateWhileInteracting : false;
      }
      /**
       * @return {boolean} Declutter.
       */
      getDeclutter() {
        return this.declutter_;
      }
      /**
       * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
       * that resolves with an array of features. The array will either contain the topmost feature
       * when a hit was detected, or it will be empty.
       *
       * The hit detection algorithm used for this method is optimized for performance, but is less
       * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
       * Text is not considered, and icons are only represented by their bounding box instead of the exact
       * image.
       *
       * @param {import("../pixel.js").Pixel} pixel Pixel.
       * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
       * @api
       */
      getFeatures(pixel) {
        return super.getFeatures(pixel);
      }
      /**
       * @return {number|undefined} Render buffer.
       */
      getRenderBuffer() {
        return this.renderBuffer_;
      }
      /**
       * @return {function(import("../Feature.js").default, import("../Feature.js").default): number|null|undefined} Render
       *     order.
       */
      getRenderOrder() {
        return (
          /** @type {import("../render.js").OrderFunction|null|undefined} */
          this.get(Property3.RENDER_ORDER)
        );
      }
      /**
       * Get the style for features.  This returns whatever was passed to the `style`
       * option at construction or to the `setStyle` method.
       * @return {import("../style/Style.js").StyleLike|null|undefined} Layer style.
       * @api
       */
      getStyle() {
        return this.style_;
      }
      /**
       * Get the style function.
       * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
       * @api
       */
      getStyleFunction() {
        return this.styleFunction_;
      }
      /**
       * @return {boolean} Whether the rendered layer should be updated while
       *     animating.
       */
      getUpdateWhileAnimating() {
        return this.updateWhileAnimating_;
      }
      /**
       * @return {boolean} Whether the rendered layer should be updated while
       *     interacting.
       */
      getUpdateWhileInteracting() {
        return this.updateWhileInteracting_;
      }
      /**
       * Render declutter items for this layer
       * @param {import("../Map.js").FrameState} frameState Frame state.
       */
      renderDeclutter(frameState) {
        if (!frameState.declutterTree) {
          frameState.declutterTree = new RBush(9);
        }
        this.getRenderer().renderDeclutter(frameState);
      }
      /**
       * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
       *     Render order.
       */
      setRenderOrder(renderOrder) {
        this.set(Property3.RENDER_ORDER, renderOrder);
      }
      /**
       * Set the style for features.  This can be a single style object, an array
       * of styles, or a function that takes a feature and resolution and returns
       * an array of styles. If set to `null`, the layer has no style (a `null` style),
       * so only features that have their own styles will be rendered in the layer. Call
       * `setStyle()` without arguments to reset to the default style. See
       * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
       *
       * If your layer has a static style, you can use [flat style]{@link module:ol/style/flat~FlatStyle} object
       * literals instead of using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.):
       * ```js
       * vectorLayer.setStyle({
       *   "fill-color": "yellow",
       *   "stroke-color": "black",
       *   "stroke-width": 4
       * })
       * ```
       *
       * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
       * @api
       */
      setStyle(style) {
        this.style_ = toStyleLike(style);
        this.styleFunction_ = style === null ? void 0 : toFunction(this.style_);
        this.changed();
      }
    };
    BaseVector_default = BaseVectorLayer;
  }
});

// node_modules/ol/render/canvas/Instruction.js
var Instruction, fillInstruction, strokeInstruction, beginPathInstruction, closePathInstruction, Instruction_default;
var init_Instruction = __esm({
  "node_modules/ol/render/canvas/Instruction.js"() {
    Instruction = {
      BEGIN_GEOMETRY: 0,
      BEGIN_PATH: 1,
      CIRCLE: 2,
      CLOSE_PATH: 3,
      CUSTOM: 4,
      DRAW_CHARS: 5,
      DRAW_IMAGE: 6,
      END_GEOMETRY: 7,
      FILL: 8,
      MOVE_TO_LINE_TO: 9,
      SET_FILL_STYLE: 10,
      SET_STROKE_STYLE: 11,
      STROKE: 12
    };
    fillInstruction = [Instruction.FILL];
    strokeInstruction = [Instruction.STROKE];
    beginPathInstruction = [Instruction.BEGIN_PATH];
    closePathInstruction = [Instruction.CLOSE_PATH];
    Instruction_default = Instruction;
  }
});

// node_modules/ol/render/VectorContext.js
var VectorContext, VectorContext_default;
var init_VectorContext = __esm({
  "node_modules/ol/render/VectorContext.js"() {
    VectorContext = class {
      /**
       * Render a geometry with a custom renderer.
       *
       * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
       * @param {import("../Feature.js").FeatureLike} feature Feature.
       * @param {Function} renderer Renderer.
       * @param {Function} hitDetectionRenderer Renderer.
       */
      drawCustom(geometry, feature, renderer, hitDetectionRenderer) {
      }
      /**
       * Render a geometry.
       *
       * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
       */
      drawGeometry(geometry) {
      }
      /**
       * Set the rendering style.
       *
       * @param {import("../style/Style.js").default} style The rendering style.
       */
      setStyle(style) {
      }
      /**
       * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
       * @param {import("../Feature.js").default} feature Feature.
       */
      drawCircle(circleGeometry, feature) {
      }
      /**
       * @param {import("../Feature.js").default} feature Feature.
       * @param {import("../style/Style.js").default} style Style.
       */
      drawFeature(feature, style) {
      }
      /**
       * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
       * @param {import("../Feature.js").default} feature Feature.
       */
      drawGeometryCollection(geometryCollectionGeometry, feature) {
      }
      /**
       * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
       * @param {import("../Feature.js").FeatureLike} feature Feature.
       */
      drawLineString(lineStringGeometry, feature) {
      }
      /**
       * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
       * @param {import("../Feature.js").FeatureLike} feature Feature.
       */
      drawMultiLineString(multiLineStringGeometry, feature) {
      }
      /**
       * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
       * @param {import("../Feature.js").FeatureLike} feature Feature.
       */
      drawMultiPoint(multiPointGeometry, feature) {
      }
      /**
       * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
       * @param {import("../Feature.js").FeatureLike} feature Feature.
       */
      drawMultiPolygon(multiPolygonGeometry, feature) {
      }
      /**
       * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
       * @param {import("../Feature.js").FeatureLike} feature Feature.
       */
      drawPoint(pointGeometry, feature) {
      }
      /**
       * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
       * @param {import("../Feature.js").FeatureLike} feature Feature.
       */
      drawPolygon(polygonGeometry, feature) {
      }
      /**
       * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
       * @param {import("../Feature.js").FeatureLike} feature Feature.
       */
      drawText(geometry, feature) {
      }
      /**
       * @param {import("../style/Fill.js").default} fillStyle Fill style.
       * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
       */
      setFillStrokeStyle(fillStyle, strokeStyle) {
      }
      /**
       * @param {import("../style/Image.js").default} imageStyle Image style.
       * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
       */
      setImageStyle(imageStyle, declutterImageWithText) {
      }
      /**
       * @param {import("../style/Text.js").default} textStyle Text style.
       * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
       */
      setTextStyle(textStyle, declutterImageWithText) {
      }
    };
    VectorContext_default = VectorContext;
  }
});

// node_modules/ol/render/canvas/Builder.js
var CanvasBuilder, Builder_default;
var init_Builder = __esm({
  "node_modules/ol/render/canvas/Builder.js"() {
    init_Instruction();
    init_Relationship();
    init_VectorContext();
    init_colorlike();
    init_extent();
    init_canvas();
    init_array();
    init_inflate();
    CanvasBuilder = class extends VectorContext_default {
      /**
       * @param {number} tolerance Tolerance.
       * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
       * @param {number} resolution Resolution.
       * @param {number} pixelRatio Pixel ratio.
       */
      constructor(tolerance, maxExtent, resolution, pixelRatio) {
        super();
        this.tolerance = tolerance;
        this.maxExtent = maxExtent;
        this.pixelRatio = pixelRatio;
        this.maxLineWidth = 0;
        this.resolution = resolution;
        this.beginGeometryInstruction1_ = null;
        this.beginGeometryInstruction2_ = null;
        this.bufferedMaxExtent_ = null;
        this.instructions = [];
        this.coordinates = [];
        this.tmpCoordinate_ = [];
        this.hitDetectionInstructions = [];
        this.state = /** @type {import("../canvas.js").FillStrokeState} */
        {};
      }
      /**
       * @protected
       * @param {Array<number>} dashArray Dash array.
       * @return {Array<number>} Dash array with pixel ratio applied
       */
      applyPixelRatio(dashArray) {
        const pixelRatio = this.pixelRatio;
        return pixelRatio == 1 ? dashArray : dashArray.map(function(dash) {
          return dash * pixelRatio;
        });
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} stride Stride.
       * @protected
       * @return {number} My end
       */
      appendFlatPointCoordinates(flatCoordinates, stride) {
        const extent = this.getBufferedMaxExtent();
        const tmpCoord = this.tmpCoordinate_;
        const coordinates2 = this.coordinates;
        let myEnd = coordinates2.length;
        for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
          tmpCoord[0] = flatCoordinates[i];
          tmpCoord[1] = flatCoordinates[i + 1];
          if (containsCoordinate(extent, tmpCoord)) {
            coordinates2[myEnd++] = tmpCoord[0];
            coordinates2[myEnd++] = tmpCoord[1];
          }
        }
        return myEnd;
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} offset Offset.
       * @param {number} end End.
       * @param {number} stride Stride.
       * @param {boolean} closed Last input coordinate equals first.
       * @param {boolean} skipFirst Skip first coordinate.
       * @protected
       * @return {number} My end.
       */
      appendFlatLineCoordinates(flatCoordinates, offset, end, stride, closed, skipFirst) {
        const coordinates2 = this.coordinates;
        let myEnd = coordinates2.length;
        const extent = this.getBufferedMaxExtent();
        if (skipFirst) {
          offset += stride;
        }
        let lastXCoord = flatCoordinates[offset];
        let lastYCoord = flatCoordinates[offset + 1];
        const nextCoord = this.tmpCoordinate_;
        let skipped = true;
        let i, lastRel, nextRel;
        for (i = offset + stride; i < end; i += stride) {
          nextCoord[0] = flatCoordinates[i];
          nextCoord[1] = flatCoordinates[i + 1];
          nextRel = coordinateRelationship(extent, nextCoord);
          if (nextRel !== lastRel) {
            if (skipped) {
              coordinates2[myEnd++] = lastXCoord;
              coordinates2[myEnd++] = lastYCoord;
              skipped = false;
            }
            coordinates2[myEnd++] = nextCoord[0];
            coordinates2[myEnd++] = nextCoord[1];
          } else if (nextRel === Relationship_default.INTERSECTING) {
            coordinates2[myEnd++] = nextCoord[0];
            coordinates2[myEnd++] = nextCoord[1];
            skipped = false;
          } else {
            skipped = true;
          }
          lastXCoord = nextCoord[0];
          lastYCoord = nextCoord[1];
          lastRel = nextRel;
        }
        if (closed && skipped || i === offset + stride) {
          coordinates2[myEnd++] = lastXCoord;
          coordinates2[myEnd++] = lastYCoord;
        }
        return myEnd;
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} offset Offset.
       * @param {Array<number>} ends Ends.
       * @param {number} stride Stride.
       * @param {Array<number>} builderEnds Builder ends.
       * @return {number} Offset.
       */
      drawCustomCoordinates_(flatCoordinates, offset, ends, stride, builderEnds) {
        for (let i = 0, ii = ends.length; i < ii; ++i) {
          const end = ends[i];
          const builderEnd = this.appendFlatLineCoordinates(
            flatCoordinates,
            offset,
            end,
            stride,
            false,
            false
          );
          builderEnds.push(builderEnd);
          offset = end;
        }
        return offset;
      }
      /**
       * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       * @param {Function} renderer Renderer.
       * @param {Function} hitDetectionRenderer Renderer.
       */
      drawCustom(geometry, feature, renderer, hitDetectionRenderer) {
        this.beginGeometry(geometry, feature);
        const type = geometry.getType();
        const stride = geometry.getStride();
        const builderBegin = this.coordinates.length;
        let flatCoordinates, builderEnd, builderEnds, builderEndss;
        let offset;
        switch (type) {
          case "MultiPolygon":
            flatCoordinates = /** @type {import("../../geom/MultiPolygon.js").default} */
            geometry.getOrientedFlatCoordinates();
            builderEndss = [];
            const endss = (
              /** @type {import("../../geom/MultiPolygon.js").default} */
              geometry.getEndss()
            );
            offset = 0;
            for (let i = 0, ii = endss.length; i < ii; ++i) {
              const myEnds = [];
              offset = this.drawCustomCoordinates_(
                flatCoordinates,
                offset,
                endss[i],
                stride,
                myEnds
              );
              builderEndss.push(myEnds);
            }
            this.instructions.push([
              Instruction_default.CUSTOM,
              builderBegin,
              builderEndss,
              geometry,
              renderer,
              inflateMultiCoordinatesArray
            ]);
            this.hitDetectionInstructions.push([
              Instruction_default.CUSTOM,
              builderBegin,
              builderEndss,
              geometry,
              hitDetectionRenderer || renderer,
              inflateMultiCoordinatesArray
            ]);
            break;
          case "Polygon":
          case "MultiLineString":
            builderEnds = [];
            flatCoordinates = type == "Polygon" ? (
              /** @type {import("../../geom/Polygon.js").default} */
              geometry.getOrientedFlatCoordinates()
            ) : geometry.getFlatCoordinates();
            offset = this.drawCustomCoordinates_(
              flatCoordinates,
              0,
              /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
              geometry.getEnds(),
              stride,
              builderEnds
            );
            this.instructions.push([
              Instruction_default.CUSTOM,
              builderBegin,
              builderEnds,
              geometry,
              renderer,
              inflateCoordinatesArray
            ]);
            this.hitDetectionInstructions.push([
              Instruction_default.CUSTOM,
              builderBegin,
              builderEnds,
              geometry,
              hitDetectionRenderer || renderer,
              inflateCoordinatesArray
            ]);
            break;
          case "LineString":
          case "Circle":
            flatCoordinates = geometry.getFlatCoordinates();
            builderEnd = this.appendFlatLineCoordinates(
              flatCoordinates,
              0,
              flatCoordinates.length,
              stride,
              false,
              false
            );
            this.instructions.push([
              Instruction_default.CUSTOM,
              builderBegin,
              builderEnd,
              geometry,
              renderer,
              inflateCoordinates
            ]);
            this.hitDetectionInstructions.push([
              Instruction_default.CUSTOM,
              builderBegin,
              builderEnd,
              geometry,
              hitDetectionRenderer || renderer,
              inflateCoordinates
            ]);
            break;
          case "MultiPoint":
            flatCoordinates = geometry.getFlatCoordinates();
            builderEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
            if (builderEnd > builderBegin) {
              this.instructions.push([
                Instruction_default.CUSTOM,
                builderBegin,
                builderEnd,
                geometry,
                renderer,
                inflateCoordinates
              ]);
              this.hitDetectionInstructions.push([
                Instruction_default.CUSTOM,
                builderBegin,
                builderEnd,
                geometry,
                hitDetectionRenderer || renderer,
                inflateCoordinates
              ]);
            }
            break;
          case "Point":
            flatCoordinates = geometry.getFlatCoordinates();
            this.coordinates.push(flatCoordinates[0], flatCoordinates[1]);
            builderEnd = this.coordinates.length;
            this.instructions.push([
              Instruction_default.CUSTOM,
              builderBegin,
              builderEnd,
              geometry,
              renderer
            ]);
            this.hitDetectionInstructions.push([
              Instruction_default.CUSTOM,
              builderBegin,
              builderEnd,
              geometry,
              hitDetectionRenderer || renderer
            ]);
            break;
          default:
        }
        this.endGeometry(feature);
      }
      /**
       * @protected
       * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      beginGeometry(geometry, feature) {
        this.beginGeometryInstruction1_ = [
          Instruction_default.BEGIN_GEOMETRY,
          feature,
          0,
          geometry
        ];
        this.instructions.push(this.beginGeometryInstruction1_);
        this.beginGeometryInstruction2_ = [
          Instruction_default.BEGIN_GEOMETRY,
          feature,
          0,
          geometry
        ];
        this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
      }
      /**
       * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
       */
      finish() {
        return {
          instructions: this.instructions,
          hitDetectionInstructions: this.hitDetectionInstructions,
          coordinates: this.coordinates
        };
      }
      /**
       * Reverse the hit detection instructions.
       */
      reverseHitDetectionInstructions() {
        const hitDetectionInstructions = this.hitDetectionInstructions;
        hitDetectionInstructions.reverse();
        let i;
        const n = hitDetectionInstructions.length;
        let instruction;
        let type;
        let begin = -1;
        for (i = 0; i < n; ++i) {
          instruction = hitDetectionInstructions[i];
          type = /** @type {import("./Instruction.js").default} */
          instruction[0];
          if (type == Instruction_default.END_GEOMETRY) {
            begin = i;
          } else if (type == Instruction_default.BEGIN_GEOMETRY) {
            instruction[2] = i;
            reverseSubArray(this.hitDetectionInstructions, begin, i);
            begin = -1;
          }
        }
      }
      /**
       * @param {import("../../style/Fill.js").default} fillStyle Fill style.
       * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
       */
      setFillStrokeStyle(fillStyle, strokeStyle) {
        const state = this.state;
        if (fillStyle) {
          const fillStyleColor = fillStyle.getColor();
          state.fillStyle = asColorLike(
            fillStyleColor ? fillStyleColor : defaultFillStyle
          );
        } else {
          state.fillStyle = void 0;
        }
        if (strokeStyle) {
          const strokeStyleColor = strokeStyle.getColor();
          state.strokeStyle = asColorLike(
            strokeStyleColor ? strokeStyleColor : defaultStrokeStyle
          );
          const strokeStyleLineCap = strokeStyle.getLineCap();
          state.lineCap = strokeStyleLineCap !== void 0 ? strokeStyleLineCap : defaultLineCap;
          const strokeStyleLineDash = strokeStyle.getLineDash();
          state.lineDash = strokeStyleLineDash ? strokeStyleLineDash.slice() : defaultLineDash;
          const strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
          state.lineDashOffset = strokeStyleLineDashOffset ? strokeStyleLineDashOffset : defaultLineDashOffset;
          const strokeStyleLineJoin = strokeStyle.getLineJoin();
          state.lineJoin = strokeStyleLineJoin !== void 0 ? strokeStyleLineJoin : defaultLineJoin;
          const strokeStyleWidth = strokeStyle.getWidth();
          state.lineWidth = strokeStyleWidth !== void 0 ? strokeStyleWidth : defaultLineWidth;
          const strokeStyleMiterLimit = strokeStyle.getMiterLimit();
          state.miterLimit = strokeStyleMiterLimit !== void 0 ? strokeStyleMiterLimit : defaultMiterLimit;
          if (state.lineWidth > this.maxLineWidth) {
            this.maxLineWidth = state.lineWidth;
            this.bufferedMaxExtent_ = null;
          }
        } else {
          state.strokeStyle = void 0;
          state.lineCap = void 0;
          state.lineDash = null;
          state.lineDashOffset = void 0;
          state.lineJoin = void 0;
          state.lineWidth = void 0;
          state.miterLimit = void 0;
        }
      }
      /**
       * @param {import("../canvas.js").FillStrokeState} state State.
       * @return {Array<*>} Fill instruction.
       */
      createFill(state) {
        const fillStyle = state.fillStyle;
        const fillInstruction2 = [Instruction_default.SET_FILL_STYLE, fillStyle];
        if (typeof fillStyle !== "string") {
          fillInstruction2.push(true);
        }
        return fillInstruction2;
      }
      /**
       * @param {import("../canvas.js").FillStrokeState} state State.
       */
      applyStroke(state) {
        this.instructions.push(this.createStroke(state));
      }
      /**
       * @param {import("../canvas.js").FillStrokeState} state State.
       * @return {Array<*>} Stroke instruction.
       */
      createStroke(state) {
        return [
          Instruction_default.SET_STROKE_STYLE,
          state.strokeStyle,
          state.lineWidth * this.pixelRatio,
          state.lineCap,
          state.lineJoin,
          state.miterLimit,
          this.applyPixelRatio(state.lineDash),
          state.lineDashOffset * this.pixelRatio
        ];
      }
      /**
       * @param {import("../canvas.js").FillStrokeState} state State.
       * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
       */
      updateFillStyle(state, createFill) {
        const fillStyle = state.fillStyle;
        if (typeof fillStyle !== "string" || state.currentFillStyle != fillStyle) {
          if (fillStyle !== void 0) {
            this.instructions.push(createFill.call(this, state));
          }
          state.currentFillStyle = fillStyle;
        }
      }
      /**
       * @param {import("../canvas.js").FillStrokeState} state State.
       * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
       */
      updateStrokeStyle(state, applyStroke) {
        const strokeStyle = state.strokeStyle;
        const lineCap = state.lineCap;
        const lineDash = state.lineDash;
        const lineDashOffset = state.lineDashOffset;
        const lineJoin = state.lineJoin;
        const lineWidth = state.lineWidth;
        const miterLimit = state.miterLimit;
        if (state.currentStrokeStyle != strokeStyle || state.currentLineCap != lineCap || lineDash != state.currentLineDash && !equals(state.currentLineDash, lineDash) || state.currentLineDashOffset != lineDashOffset || state.currentLineJoin != lineJoin || state.currentLineWidth != lineWidth || state.currentMiterLimit != miterLimit) {
          if (strokeStyle !== void 0) {
            applyStroke.call(this, state);
          }
          state.currentStrokeStyle = strokeStyle;
          state.currentLineCap = lineCap;
          state.currentLineDash = lineDash;
          state.currentLineDashOffset = lineDashOffset;
          state.currentLineJoin = lineJoin;
          state.currentLineWidth = lineWidth;
          state.currentMiterLimit = miterLimit;
        }
      }
      /**
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      endGeometry(feature) {
        this.beginGeometryInstruction1_[2] = this.instructions.length;
        this.beginGeometryInstruction1_ = null;
        this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length;
        this.beginGeometryInstruction2_ = null;
        const endGeometryInstruction = [Instruction_default.END_GEOMETRY, feature];
        this.instructions.push(endGeometryInstruction);
        this.hitDetectionInstructions.push(endGeometryInstruction);
      }
      /**
       * Get the buffered rendering extent.  Rendering will be clipped to the extent
       * provided to the constructor.  To account for symbolizers that may intersect
       * this extent, we calculate a buffered extent (e.g. based on stroke width).
       * @return {import("../../extent.js").Extent} The buffered rendering extent.
       * @protected
       */
      getBufferedMaxExtent() {
        if (!this.bufferedMaxExtent_) {
          this.bufferedMaxExtent_ = clone(this.maxExtent);
          if (this.maxLineWidth > 0) {
            const width = this.resolution * (this.maxLineWidth + 1) / 2;
            buffer(this.bufferedMaxExtent_, width, this.bufferedMaxExtent_);
          }
        }
        return this.bufferedMaxExtent_;
      }
    };
    Builder_default = CanvasBuilder;
  }
});

// node_modules/ol/render/canvas/ImageBuilder.js
var CanvasImageBuilder, ImageBuilder_default;
var init_ImageBuilder = __esm({
  "node_modules/ol/render/canvas/ImageBuilder.js"() {
    init_Builder();
    init_Instruction();
    CanvasImageBuilder = class extends Builder_default {
      /**
       * @param {number} tolerance Tolerance.
       * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
       * @param {number} resolution Resolution.
       * @param {number} pixelRatio Pixel ratio.
       */
      constructor(tolerance, maxExtent, resolution, pixelRatio) {
        super(tolerance, maxExtent, resolution, pixelRatio);
        this.hitDetectionImage_ = null;
        this.image_ = null;
        this.imagePixelRatio_ = void 0;
        this.anchorX_ = void 0;
        this.anchorY_ = void 0;
        this.height_ = void 0;
        this.opacity_ = void 0;
        this.originX_ = void 0;
        this.originY_ = void 0;
        this.rotateWithView_ = void 0;
        this.rotation_ = void 0;
        this.scale_ = void 0;
        this.width_ = void 0;
        this.declutterMode_ = void 0;
        this.declutterImageWithText_ = void 0;
      }
      /**
       * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      drawPoint(pointGeometry, feature) {
        if (!this.image_) {
          return;
        }
        this.beginGeometry(pointGeometry, feature);
        const flatCoordinates = pointGeometry.getFlatCoordinates();
        const stride = pointGeometry.getStride();
        const myBegin = this.coordinates.length;
        const myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
        this.instructions.push([
          Instruction_default.DRAW_IMAGE,
          myBegin,
          myEnd,
          this.image_,
          // Remaining arguments to DRAW_IMAGE are in alphabetical order
          this.anchorX_ * this.imagePixelRatio_,
          this.anchorY_ * this.imagePixelRatio_,
          Math.ceil(this.height_ * this.imagePixelRatio_),
          this.opacity_,
          this.originX_ * this.imagePixelRatio_,
          this.originY_ * this.imagePixelRatio_,
          this.rotateWithView_,
          this.rotation_,
          [
            this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
            this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
          ],
          Math.ceil(this.width_ * this.imagePixelRatio_),
          this.declutterMode_,
          this.declutterImageWithText_
        ]);
        this.hitDetectionInstructions.push([
          Instruction_default.DRAW_IMAGE,
          myBegin,
          myEnd,
          this.hitDetectionImage_,
          // Remaining arguments to DRAW_IMAGE are in alphabetical order
          this.anchorX_,
          this.anchorY_,
          this.height_,
          1,
          this.originX_,
          this.originY_,
          this.rotateWithView_,
          this.rotation_,
          this.scale_,
          this.width_,
          this.declutterMode_,
          this.declutterImageWithText_
        ]);
        this.endGeometry(feature);
      }
      /**
       * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      drawMultiPoint(multiPointGeometry, feature) {
        if (!this.image_) {
          return;
        }
        this.beginGeometry(multiPointGeometry, feature);
        const flatCoordinates = multiPointGeometry.getFlatCoordinates();
        const stride = multiPointGeometry.getStride();
        const myBegin = this.coordinates.length;
        const myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
        this.instructions.push([
          Instruction_default.DRAW_IMAGE,
          myBegin,
          myEnd,
          this.image_,
          // Remaining arguments to DRAW_IMAGE are in alphabetical order
          this.anchorX_ * this.imagePixelRatio_,
          this.anchorY_ * this.imagePixelRatio_,
          Math.ceil(this.height_ * this.imagePixelRatio_),
          this.opacity_,
          this.originX_ * this.imagePixelRatio_,
          this.originY_ * this.imagePixelRatio_,
          this.rotateWithView_,
          this.rotation_,
          [
            this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
            this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
          ],
          Math.ceil(this.width_ * this.imagePixelRatio_),
          this.declutterMode_,
          this.declutterImageWithText_
        ]);
        this.hitDetectionInstructions.push([
          Instruction_default.DRAW_IMAGE,
          myBegin,
          myEnd,
          this.hitDetectionImage_,
          // Remaining arguments to DRAW_IMAGE are in alphabetical order
          this.anchorX_,
          this.anchorY_,
          this.height_,
          1,
          this.originX_,
          this.originY_,
          this.rotateWithView_,
          this.rotation_,
          this.scale_,
          this.width_,
          this.declutterMode_,
          this.declutterImageWithText_
        ]);
        this.endGeometry(feature);
      }
      /**
       * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
       */
      finish() {
        this.reverseHitDetectionInstructions();
        this.anchorX_ = void 0;
        this.anchorY_ = void 0;
        this.hitDetectionImage_ = null;
        this.image_ = null;
        this.imagePixelRatio_ = void 0;
        this.height_ = void 0;
        this.scale_ = void 0;
        this.opacity_ = void 0;
        this.originX_ = void 0;
        this.originY_ = void 0;
        this.rotateWithView_ = void 0;
        this.rotation_ = void 0;
        this.width_ = void 0;
        return super.finish();
      }
      /**
       * @param {import("../../style/Image.js").default} imageStyle Image style.
       * @param {Object} [sharedData] Shared data.
       */
      setImageStyle(imageStyle, sharedData) {
        const anchor = imageStyle.getAnchor();
        const size = imageStyle.getSize();
        const origin = imageStyle.getOrigin();
        this.imagePixelRatio_ = imageStyle.getPixelRatio(this.pixelRatio);
        this.anchorX_ = anchor[0];
        this.anchorY_ = anchor[1];
        this.hitDetectionImage_ = imageStyle.getHitDetectionImage();
        this.image_ = imageStyle.getImage(this.pixelRatio);
        this.height_ = size[1];
        this.opacity_ = imageStyle.getOpacity();
        this.originX_ = origin[0];
        this.originY_ = origin[1];
        this.rotateWithView_ = imageStyle.getRotateWithView();
        this.rotation_ = imageStyle.getRotation();
        this.scale_ = imageStyle.getScaleArray();
        this.width_ = size[0];
        this.declutterMode_ = imageStyle.getDeclutterMode();
        this.declutterImageWithText_ = sharedData;
      }
    };
    ImageBuilder_default = CanvasImageBuilder;
  }
});

// node_modules/ol/render/canvas/LineStringBuilder.js
var CanvasLineStringBuilder, LineStringBuilder_default;
var init_LineStringBuilder = __esm({
  "node_modules/ol/render/canvas/LineStringBuilder.js"() {
    init_Builder();
    init_Instruction();
    init_canvas();
    CanvasLineStringBuilder = class extends Builder_default {
      /**
       * @param {number} tolerance Tolerance.
       * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
       * @param {number} resolution Resolution.
       * @param {number} pixelRatio Pixel ratio.
       */
      constructor(tolerance, maxExtent, resolution, pixelRatio) {
        super(tolerance, maxExtent, resolution, pixelRatio);
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} offset Offset.
       * @param {number} end End.
       * @param {number} stride Stride.
       * @private
       * @return {number} end.
       */
      drawFlatCoordinates_(flatCoordinates, offset, end, stride) {
        const myBegin = this.coordinates.length;
        const myEnd = this.appendFlatLineCoordinates(
          flatCoordinates,
          offset,
          end,
          stride,
          false,
          false
        );
        const moveToLineToInstruction = [
          Instruction_default.MOVE_TO_LINE_TO,
          myBegin,
          myEnd
        ];
        this.instructions.push(moveToLineToInstruction);
        this.hitDetectionInstructions.push(moveToLineToInstruction);
        return end;
      }
      /**
       * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      drawLineString(lineStringGeometry, feature) {
        const state = this.state;
        const strokeStyle = state.strokeStyle;
        const lineWidth = state.lineWidth;
        if (strokeStyle === void 0 || lineWidth === void 0) {
          return;
        }
        this.updateStrokeStyle(state, this.applyStroke);
        this.beginGeometry(lineStringGeometry, feature);
        this.hitDetectionInstructions.push(
          [
            Instruction_default.SET_STROKE_STYLE,
            state.strokeStyle,
            state.lineWidth,
            state.lineCap,
            state.lineJoin,
            state.miterLimit,
            defaultLineDash,
            defaultLineDashOffset
          ],
          beginPathInstruction
        );
        const flatCoordinates = lineStringGeometry.getFlatCoordinates();
        const stride = lineStringGeometry.getStride();
        this.drawFlatCoordinates_(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride
        );
        this.hitDetectionInstructions.push(strokeInstruction);
        this.endGeometry(feature);
      }
      /**
       * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      drawMultiLineString(multiLineStringGeometry, feature) {
        const state = this.state;
        const strokeStyle = state.strokeStyle;
        const lineWidth = state.lineWidth;
        if (strokeStyle === void 0 || lineWidth === void 0) {
          return;
        }
        this.updateStrokeStyle(state, this.applyStroke);
        this.beginGeometry(multiLineStringGeometry, feature);
        this.hitDetectionInstructions.push(
          [
            Instruction_default.SET_STROKE_STYLE,
            state.strokeStyle,
            state.lineWidth,
            state.lineCap,
            state.lineJoin,
            state.miterLimit,
            defaultLineDash,
            defaultLineDashOffset
          ],
          beginPathInstruction
        );
        const ends = multiLineStringGeometry.getEnds();
        const flatCoordinates = multiLineStringGeometry.getFlatCoordinates();
        const stride = multiLineStringGeometry.getStride();
        let offset = 0;
        for (let i = 0, ii = ends.length; i < ii; ++i) {
          offset = this.drawFlatCoordinates_(
            flatCoordinates,
            offset,
            /** @type {number} */
            ends[i],
            stride
          );
        }
        this.hitDetectionInstructions.push(strokeInstruction);
        this.endGeometry(feature);
      }
      /**
       * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
       */
      finish() {
        const state = this.state;
        if (state.lastStroke != void 0 && state.lastStroke != this.coordinates.length) {
          this.instructions.push(strokeInstruction);
        }
        this.reverseHitDetectionInstructions();
        this.state = null;
        return super.finish();
      }
      /**
       * @param {import("../canvas.js").FillStrokeState} state State.
       */
      applyStroke(state) {
        if (state.lastStroke != void 0 && state.lastStroke != this.coordinates.length) {
          this.instructions.push(strokeInstruction);
          state.lastStroke = this.coordinates.length;
        }
        state.lastStroke = 0;
        super.applyStroke(state);
        this.instructions.push(beginPathInstruction);
      }
    };
    LineStringBuilder_default = CanvasLineStringBuilder;
  }
});

// node_modules/ol/render/canvas/PolygonBuilder.js
var CanvasPolygonBuilder, PolygonBuilder_default;
var init_PolygonBuilder = __esm({
  "node_modules/ol/render/canvas/PolygonBuilder.js"() {
    init_Builder();
    init_Instruction();
    init_canvas();
    init_simplify();
    CanvasPolygonBuilder = class extends Builder_default {
      /**
       * @param {number} tolerance Tolerance.
       * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
       * @param {number} resolution Resolution.
       * @param {number} pixelRatio Pixel ratio.
       */
      constructor(tolerance, maxExtent, resolution, pixelRatio) {
        super(tolerance, maxExtent, resolution, pixelRatio);
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} offset Offset.
       * @param {Array<number>} ends Ends.
       * @param {number} stride Stride.
       * @private
       * @return {number} End.
       */
      drawFlatCoordinatess_(flatCoordinates, offset, ends, stride) {
        const state = this.state;
        const fill = state.fillStyle !== void 0;
        const stroke = state.strokeStyle !== void 0;
        const numEnds = ends.length;
        this.instructions.push(beginPathInstruction);
        this.hitDetectionInstructions.push(beginPathInstruction);
        for (let i = 0; i < numEnds; ++i) {
          const end = ends[i];
          const myBegin = this.coordinates.length;
          const myEnd = this.appendFlatLineCoordinates(
            flatCoordinates,
            offset,
            end,
            stride,
            true,
            !stroke
          );
          const moveToLineToInstruction = [
            Instruction_default.MOVE_TO_LINE_TO,
            myBegin,
            myEnd
          ];
          this.instructions.push(moveToLineToInstruction);
          this.hitDetectionInstructions.push(moveToLineToInstruction);
          if (stroke) {
            this.instructions.push(closePathInstruction);
            this.hitDetectionInstructions.push(closePathInstruction);
          }
          offset = end;
        }
        if (fill) {
          this.instructions.push(fillInstruction);
          this.hitDetectionInstructions.push(fillInstruction);
        }
        if (stroke) {
          this.instructions.push(strokeInstruction);
          this.hitDetectionInstructions.push(strokeInstruction);
        }
        return offset;
      }
      /**
       * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
       * @param {import("../../Feature.js").default} feature Feature.
       */
      drawCircle(circleGeometry, feature) {
        const state = this.state;
        const fillStyle = state.fillStyle;
        const strokeStyle = state.strokeStyle;
        if (fillStyle === void 0 && strokeStyle === void 0) {
          return;
        }
        this.setFillStrokeStyles_();
        this.beginGeometry(circleGeometry, feature);
        if (state.fillStyle !== void 0) {
          this.hitDetectionInstructions.push([
            Instruction_default.SET_FILL_STYLE,
            defaultFillStyle
          ]);
        }
        if (state.strokeStyle !== void 0) {
          this.hitDetectionInstructions.push([
            Instruction_default.SET_STROKE_STYLE,
            state.strokeStyle,
            state.lineWidth,
            state.lineCap,
            state.lineJoin,
            state.miterLimit,
            defaultLineDash,
            defaultLineDashOffset
          ]);
        }
        const flatCoordinates = circleGeometry.getFlatCoordinates();
        const stride = circleGeometry.getStride();
        const myBegin = this.coordinates.length;
        this.appendFlatLineCoordinates(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride,
          false,
          false
        );
        const circleInstruction = [Instruction_default.CIRCLE, myBegin];
        this.instructions.push(beginPathInstruction, circleInstruction);
        this.hitDetectionInstructions.push(beginPathInstruction, circleInstruction);
        if (state.fillStyle !== void 0) {
          this.instructions.push(fillInstruction);
          this.hitDetectionInstructions.push(fillInstruction);
        }
        if (state.strokeStyle !== void 0) {
          this.instructions.push(strokeInstruction);
          this.hitDetectionInstructions.push(strokeInstruction);
        }
        this.endGeometry(feature);
      }
      /**
       * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      drawPolygon(polygonGeometry, feature) {
        const state = this.state;
        const fillStyle = state.fillStyle;
        const strokeStyle = state.strokeStyle;
        if (fillStyle === void 0 && strokeStyle === void 0) {
          return;
        }
        this.setFillStrokeStyles_();
        this.beginGeometry(polygonGeometry, feature);
        if (state.fillStyle !== void 0) {
          this.hitDetectionInstructions.push([
            Instruction_default.SET_FILL_STYLE,
            defaultFillStyle
          ]);
        }
        if (state.strokeStyle !== void 0) {
          this.hitDetectionInstructions.push([
            Instruction_default.SET_STROKE_STYLE,
            state.strokeStyle,
            state.lineWidth,
            state.lineCap,
            state.lineJoin,
            state.miterLimit,
            defaultLineDash,
            defaultLineDashOffset
          ]);
        }
        const ends = polygonGeometry.getEnds();
        const flatCoordinates = polygonGeometry.getOrientedFlatCoordinates();
        const stride = polygonGeometry.getStride();
        this.drawFlatCoordinatess_(
          flatCoordinates,
          0,
          /** @type {Array<number>} */
          ends,
          stride
        );
        this.endGeometry(feature);
      }
      /**
       * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      drawMultiPolygon(multiPolygonGeometry, feature) {
        const state = this.state;
        const fillStyle = state.fillStyle;
        const strokeStyle = state.strokeStyle;
        if (fillStyle === void 0 && strokeStyle === void 0) {
          return;
        }
        this.setFillStrokeStyles_();
        this.beginGeometry(multiPolygonGeometry, feature);
        if (state.fillStyle !== void 0) {
          this.hitDetectionInstructions.push([
            Instruction_default.SET_FILL_STYLE,
            defaultFillStyle
          ]);
        }
        if (state.strokeStyle !== void 0) {
          this.hitDetectionInstructions.push([
            Instruction_default.SET_STROKE_STYLE,
            state.strokeStyle,
            state.lineWidth,
            state.lineCap,
            state.lineJoin,
            state.miterLimit,
            defaultLineDash,
            defaultLineDashOffset
          ]);
        }
        const endss = multiPolygonGeometry.getEndss();
        const flatCoordinates = multiPolygonGeometry.getOrientedFlatCoordinates();
        const stride = multiPolygonGeometry.getStride();
        let offset = 0;
        for (let i = 0, ii = endss.length; i < ii; ++i) {
          offset = this.drawFlatCoordinatess_(
            flatCoordinates,
            offset,
            endss[i],
            stride
          );
        }
        this.endGeometry(feature);
      }
      /**
       * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
       */
      finish() {
        this.reverseHitDetectionInstructions();
        this.state = null;
        const tolerance = this.tolerance;
        if (tolerance !== 0) {
          const coordinates2 = this.coordinates;
          for (let i = 0, ii = coordinates2.length; i < ii; ++i) {
            coordinates2[i] = snap(coordinates2[i], tolerance);
          }
        }
        return super.finish();
      }
      /**
       * @private
       */
      setFillStrokeStyles_() {
        const state = this.state;
        const fillStyle = state.fillStyle;
        if (fillStyle !== void 0) {
          this.updateFillStyle(state, this.createFill);
        }
        if (state.strokeStyle !== void 0) {
          this.updateStrokeStyle(state, this.applyStroke);
        }
      }
    };
    PolygonBuilder_default = CanvasPolygonBuilder;
  }
});

// node_modules/ol/geom/flat/linechunk.js
function lineChunk(chunkLength, flatCoordinates, offset, end, stride) {
  const chunks = [];
  let cursor = offset;
  let chunkM = 0;
  let currentChunk = flatCoordinates.slice(offset, 2);
  while (chunkM < chunkLength && cursor + stride < end) {
    const [x1, y1] = currentChunk.slice(-2);
    const x2 = flatCoordinates[cursor + stride];
    const y2 = flatCoordinates[cursor + stride + 1];
    const segmentLength = Math.sqrt(
      (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)
    );
    chunkM += segmentLength;
    if (chunkM >= chunkLength) {
      const m = (chunkLength - chunkM + segmentLength) / segmentLength;
      const x = lerp(x1, x2, m);
      const y = lerp(y1, y2, m);
      currentChunk.push(x, y);
      chunks.push(currentChunk);
      currentChunk = [x, y];
      if (chunkM == chunkLength) {
        cursor += stride;
      }
      chunkM = 0;
    } else if (chunkM < chunkLength) {
      currentChunk.push(
        flatCoordinates[cursor + stride],
        flatCoordinates[cursor + stride + 1]
      );
      cursor += stride;
    } else {
      const missing = segmentLength - chunkM;
      const x = lerp(x1, x2, missing / segmentLength);
      const y = lerp(y1, y2, missing / segmentLength);
      currentChunk.push(x, y);
      chunks.push(currentChunk);
      currentChunk = [x, y];
      chunkM = 0;
      cursor += stride;
    }
  }
  if (chunkM > 0) {
    chunks.push(currentChunk);
  }
  return chunks;
}
var init_linechunk = __esm({
  "node_modules/ol/geom/flat/linechunk.js"() {
    init_math();
  }
});

// node_modules/ol/geom/flat/straightchunk.js
function matchingChunk(maxAngle, flatCoordinates, offset, end, stride) {
  let chunkStart = offset;
  let chunkEnd = offset;
  let chunkM = 0;
  let m = 0;
  let start = offset;
  let acos, i, m12, m23, x1, y1, x12, y12, x23, y23;
  for (i = offset; i < end; i += stride) {
    const x2 = flatCoordinates[i];
    const y2 = flatCoordinates[i + 1];
    if (x1 !== void 0) {
      x23 = x2 - x1;
      y23 = y2 - y1;
      m23 = Math.sqrt(x23 * x23 + y23 * y23);
      if (x12 !== void 0) {
        m += m12;
        acos = Math.acos((x12 * x23 + y12 * y23) / (m12 * m23));
        if (acos > maxAngle) {
          if (m > chunkM) {
            chunkM = m;
            chunkStart = start;
            chunkEnd = i;
          }
          m = 0;
          start = i - stride;
        }
      }
      m12 = m23;
      x12 = x23;
      y12 = y23;
    }
    x1 = x2;
    y1 = y2;
  }
  m += m23;
  return m > chunkM ? [start, i] : [chunkStart, chunkEnd];
}
var init_straightchunk = __esm({
  "node_modules/ol/geom/flat/straightchunk.js"() {
  }
});

// node_modules/ol/render/canvas/TextBuilder.js
var TEXT_ALIGN, CanvasTextBuilder, TextBuilder_default;
var init_TextBuilder = __esm({
  "node_modules/ol/render/canvas/TextBuilder.js"() {
    init_Builder();
    init_Instruction();
    init_colorlike();
    init_canvas();
    init_util();
    init_extent();
    init_linechunk();
    init_straightchunk();
    TEXT_ALIGN = {
      "left": 0,
      "center": 0.5,
      "right": 1,
      "top": 0,
      "middle": 0.5,
      "hanging": 0.2,
      "alphabetic": 0.8,
      "ideographic": 0.8,
      "bottom": 1
    };
    CanvasTextBuilder = class extends Builder_default {
      /**
       * @param {number} tolerance Tolerance.
       * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
       * @param {number} resolution Resolution.
       * @param {number} pixelRatio Pixel ratio.
       */
      constructor(tolerance, maxExtent, resolution, pixelRatio) {
        super(tolerance, maxExtent, resolution, pixelRatio);
        this.labels_ = null;
        this.text_ = "";
        this.textOffsetX_ = 0;
        this.textOffsetY_ = 0;
        this.textRotateWithView_ = void 0;
        this.textRotation_ = 0;
        this.textFillState_ = null;
        this.fillStates = {};
        this.fillStates[defaultFillStyle] = { fillStyle: defaultFillStyle };
        this.textStrokeState_ = null;
        this.strokeStates = {};
        this.textState_ = /** @type {import("../canvas.js").TextState} */
        {};
        this.textStates = {};
        this.textKey_ = "";
        this.fillKey_ = "";
        this.strokeKey_ = "";
        this.declutterImageWithText_ = void 0;
      }
      /**
       * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
       */
      finish() {
        const instructions = super.finish();
        instructions.textStates = this.textStates;
        instructions.fillStates = this.fillStates;
        instructions.strokeStates = this.strokeStates;
        return instructions;
      }
      /**
       * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       */
      drawText(geometry, feature) {
        const fillState = this.textFillState_;
        const strokeState = this.textStrokeState_;
        const textState = this.textState_;
        if (this.text_ === "" || !textState || !fillState && !strokeState) {
          return;
        }
        const coordinates2 = this.coordinates;
        let begin = coordinates2.length;
        const geometryType = geometry.getType();
        let flatCoordinates = null;
        let stride = geometry.getStride();
        if (textState.placement === "line" && (geometryType == "LineString" || geometryType == "MultiLineString" || geometryType == "Polygon" || geometryType == "MultiPolygon")) {
          if (!intersects(this.getBufferedMaxExtent(), geometry.getExtent())) {
            return;
          }
          let ends;
          flatCoordinates = geometry.getFlatCoordinates();
          if (geometryType == "LineString") {
            ends = [flatCoordinates.length];
          } else if (geometryType == "MultiLineString") {
            ends = /** @type {import("../../geom/MultiLineString.js").default} */
            geometry.getEnds();
          } else if (geometryType == "Polygon") {
            ends = /** @type {import("../../geom/Polygon.js").default} */
            geometry.getEnds().slice(0, 1);
          } else if (geometryType == "MultiPolygon") {
            const endss = (
              /** @type {import("../../geom/MultiPolygon.js").default} */
              geometry.getEndss()
            );
            ends = [];
            for (let i = 0, ii = endss.length; i < ii; ++i) {
              ends.push(endss[i][0]);
            }
          }
          this.beginGeometry(geometry, feature);
          const repeat = textState.repeat;
          const textAlign = repeat ? void 0 : textState.textAlign;
          let flatOffset = 0;
          for (let o = 0, oo = ends.length; o < oo; ++o) {
            let chunks;
            if (repeat) {
              chunks = lineChunk(
                repeat * this.resolution,
                flatCoordinates,
                flatOffset,
                ends[o],
                stride
              );
            } else {
              chunks = [flatCoordinates.slice(flatOffset, ends[o])];
            }
            for (let c = 0, cc = chunks.length; c < cc; ++c) {
              const chunk = chunks[c];
              let chunkBegin = 0;
              let chunkEnd = chunk.length;
              if (textAlign == void 0) {
                const range = matchingChunk(
                  textState.maxAngle,
                  chunk,
                  0,
                  chunk.length,
                  2
                );
                chunkBegin = range[0];
                chunkEnd = range[1];
              }
              for (let i = chunkBegin; i < chunkEnd; i += stride) {
                coordinates2.push(chunk[i], chunk[i + 1]);
              }
              const end = coordinates2.length;
              flatOffset = ends[o];
              this.drawChars_(begin, end);
              begin = end;
            }
          }
          this.endGeometry(feature);
        } else {
          let geometryWidths = textState.overflow ? null : [];
          switch (geometryType) {
            case "Point":
            case "MultiPoint":
              flatCoordinates = /** @type {import("../../geom/MultiPoint.js").default} */
              geometry.getFlatCoordinates();
              break;
            case "LineString":
              flatCoordinates = /** @type {import("../../geom/LineString.js").default} */
              geometry.getFlatMidpoint();
              break;
            case "Circle":
              flatCoordinates = /** @type {import("../../geom/Circle.js").default} */
              geometry.getCenter();
              break;
            case "MultiLineString":
              flatCoordinates = /** @type {import("../../geom/MultiLineString.js").default} */
              geometry.getFlatMidpoints();
              stride = 2;
              break;
            case "Polygon":
              flatCoordinates = /** @type {import("../../geom/Polygon.js").default} */
              geometry.getFlatInteriorPoint();
              if (!textState.overflow) {
                geometryWidths.push(flatCoordinates[2] / this.resolution);
              }
              stride = 3;
              break;
            case "MultiPolygon":
              const interiorPoints = (
                /** @type {import("../../geom/MultiPolygon.js").default} */
                geometry.getFlatInteriorPoints()
              );
              flatCoordinates = [];
              for (let i = 0, ii = interiorPoints.length; i < ii; i += 3) {
                if (!textState.overflow) {
                  geometryWidths.push(interiorPoints[i + 2] / this.resolution);
                }
                flatCoordinates.push(interiorPoints[i], interiorPoints[i + 1]);
              }
              if (flatCoordinates.length === 0) {
                return;
              }
              stride = 2;
              break;
            default:
          }
          const end = this.appendFlatPointCoordinates(flatCoordinates, stride);
          if (end === begin) {
            return;
          }
          if (geometryWidths && (end - begin) / 2 !== flatCoordinates.length / stride) {
            let beg = begin / 2;
            geometryWidths = geometryWidths.filter((w, i) => {
              const keep = coordinates2[(beg + i) * 2] === flatCoordinates[i * stride] && coordinates2[(beg + i) * 2 + 1] === flatCoordinates[i * stride + 1];
              if (!keep) {
                --beg;
              }
              return keep;
            });
          }
          this.saveTextStates_();
          if (textState.backgroundFill || textState.backgroundStroke) {
            this.setFillStrokeStyle(
              textState.backgroundFill,
              textState.backgroundStroke
            );
            if (textState.backgroundFill) {
              this.updateFillStyle(this.state, this.createFill);
            }
            if (textState.backgroundStroke) {
              this.updateStrokeStyle(this.state, this.applyStroke);
              this.hitDetectionInstructions.push(this.createStroke(this.state));
            }
          }
          this.beginGeometry(geometry, feature);
          let padding = textState.padding;
          if (padding != defaultPadding && (textState.scale[0] < 0 || textState.scale[1] < 0)) {
            let p0 = textState.padding[0];
            let p12 = textState.padding[1];
            let p22 = textState.padding[2];
            let p32 = textState.padding[3];
            if (textState.scale[0] < 0) {
              p12 = -p12;
              p32 = -p32;
            }
            if (textState.scale[1] < 0) {
              p0 = -p0;
              p22 = -p22;
            }
            padding = [p0, p12, p22, p32];
          }
          const pixelRatio = this.pixelRatio;
          this.instructions.push([
            Instruction_default.DRAW_IMAGE,
            begin,
            end,
            null,
            NaN,
            NaN,
            NaN,
            1,
            0,
            0,
            this.textRotateWithView_,
            this.textRotation_,
            [1, 1],
            NaN,
            void 0,
            this.declutterImageWithText_,
            padding == defaultPadding ? defaultPadding : padding.map(function(p) {
              return p * pixelRatio;
            }),
            !!textState.backgroundFill,
            !!textState.backgroundStroke,
            this.text_,
            this.textKey_,
            this.strokeKey_,
            this.fillKey_,
            this.textOffsetX_,
            this.textOffsetY_,
            geometryWidths
          ]);
          const scale4 = 1 / pixelRatio;
          const currentFillStyle = this.state.fillStyle;
          if (textState.backgroundFill) {
            this.state.fillStyle = defaultFillStyle;
            this.hitDetectionInstructions.push(this.createFill(this.state));
          }
          this.hitDetectionInstructions.push([
            Instruction_default.DRAW_IMAGE,
            begin,
            end,
            null,
            NaN,
            NaN,
            NaN,
            1,
            0,
            0,
            this.textRotateWithView_,
            this.textRotation_,
            [scale4, scale4],
            NaN,
            void 0,
            this.declutterImageWithText_,
            padding,
            !!textState.backgroundFill,
            !!textState.backgroundStroke,
            this.text_,
            this.textKey_,
            this.strokeKey_,
            this.fillKey_ ? defaultFillStyle : this.fillKey_,
            this.textOffsetX_,
            this.textOffsetY_,
            geometryWidths
          ]);
          if (textState.backgroundFill) {
            this.state.fillStyle = currentFillStyle;
            this.hitDetectionInstructions.push(this.createFill(this.state));
          }
          this.endGeometry(feature);
        }
      }
      /**
       * @private
       */
      saveTextStates_() {
        const strokeState = this.textStrokeState_;
        const textState = this.textState_;
        const fillState = this.textFillState_;
        const strokeKey = this.strokeKey_;
        if (strokeState) {
          if (!(strokeKey in this.strokeStates)) {
            this.strokeStates[strokeKey] = {
              strokeStyle: strokeState.strokeStyle,
              lineCap: strokeState.lineCap,
              lineDashOffset: strokeState.lineDashOffset,
              lineWidth: strokeState.lineWidth,
              lineJoin: strokeState.lineJoin,
              miterLimit: strokeState.miterLimit,
              lineDash: strokeState.lineDash
            };
          }
        }
        const textKey = this.textKey_;
        if (!(textKey in this.textStates)) {
          this.textStates[textKey] = {
            font: textState.font,
            textAlign: textState.textAlign || defaultTextAlign,
            justify: textState.justify,
            textBaseline: textState.textBaseline || defaultTextBaseline,
            scale: textState.scale
          };
        }
        const fillKey = this.fillKey_;
        if (fillState) {
          if (!(fillKey in this.fillStates)) {
            this.fillStates[fillKey] = {
              fillStyle: fillState.fillStyle
            };
          }
        }
      }
      /**
       * @private
       * @param {number} begin Begin.
       * @param {number} end End.
       */
      drawChars_(begin, end) {
        const strokeState = this.textStrokeState_;
        const textState = this.textState_;
        const strokeKey = this.strokeKey_;
        const textKey = this.textKey_;
        const fillKey = this.fillKey_;
        this.saveTextStates_();
        const pixelRatio = this.pixelRatio;
        const baseline = TEXT_ALIGN[textState.textBaseline];
        const offsetY = this.textOffsetY_ * pixelRatio;
        const text = this.text_;
        const strokeWidth = strokeState ? strokeState.lineWidth * Math.abs(textState.scale[0]) / 2 : 0;
        this.instructions.push([
          Instruction_default.DRAW_CHARS,
          begin,
          end,
          baseline,
          textState.overflow,
          fillKey,
          textState.maxAngle,
          pixelRatio,
          offsetY,
          strokeKey,
          strokeWidth * pixelRatio,
          text,
          textKey,
          1
        ]);
        this.hitDetectionInstructions.push([
          Instruction_default.DRAW_CHARS,
          begin,
          end,
          baseline,
          textState.overflow,
          fillKey ? defaultFillStyle : fillKey,
          textState.maxAngle,
          pixelRatio,
          offsetY,
          strokeKey,
          strokeWidth * pixelRatio,
          text,
          textKey,
          1 / pixelRatio
        ]);
      }
      /**
       * @param {import("../../style/Text.js").default} textStyle Text style.
       * @param {Object} [sharedData] Shared data.
       */
      setTextStyle(textStyle, sharedData) {
        let textState, fillState, strokeState;
        if (!textStyle) {
          this.text_ = "";
        } else {
          const textFillStyle = textStyle.getFill();
          if (!textFillStyle) {
            fillState = null;
            this.textFillState_ = fillState;
          } else {
            fillState = this.textFillState_;
            if (!fillState) {
              fillState = /** @type {import("../canvas.js").FillState} */
              {};
              this.textFillState_ = fillState;
            }
            fillState.fillStyle = asColorLike(
              textFillStyle.getColor() || defaultFillStyle
            );
          }
          const textStrokeStyle = textStyle.getStroke();
          if (!textStrokeStyle) {
            strokeState = null;
            this.textStrokeState_ = strokeState;
          } else {
            strokeState = this.textStrokeState_;
            if (!strokeState) {
              strokeState = /** @type {import("../canvas.js").StrokeState} */
              {};
              this.textStrokeState_ = strokeState;
            }
            const lineDash = textStrokeStyle.getLineDash();
            const lineDashOffset = textStrokeStyle.getLineDashOffset();
            const lineWidth = textStrokeStyle.getWidth();
            const miterLimit = textStrokeStyle.getMiterLimit();
            strokeState.lineCap = textStrokeStyle.getLineCap() || defaultLineCap;
            strokeState.lineDash = lineDash ? lineDash.slice() : defaultLineDash;
            strokeState.lineDashOffset = lineDashOffset === void 0 ? defaultLineDashOffset : lineDashOffset;
            strokeState.lineJoin = textStrokeStyle.getLineJoin() || defaultLineJoin;
            strokeState.lineWidth = lineWidth === void 0 ? defaultLineWidth : lineWidth;
            strokeState.miterLimit = miterLimit === void 0 ? defaultMiterLimit : miterLimit;
            strokeState.strokeStyle = asColorLike(
              textStrokeStyle.getColor() || defaultStrokeStyle
            );
          }
          textState = this.textState_;
          const font = textStyle.getFont() || defaultFont;
          registerFont(font);
          const textScale = textStyle.getScaleArray();
          textState.overflow = textStyle.getOverflow();
          textState.font = font;
          textState.maxAngle = textStyle.getMaxAngle();
          textState.placement = textStyle.getPlacement();
          textState.textAlign = textStyle.getTextAlign();
          textState.repeat = textStyle.getRepeat();
          textState.justify = textStyle.getJustify();
          textState.textBaseline = textStyle.getTextBaseline() || defaultTextBaseline;
          textState.backgroundFill = textStyle.getBackgroundFill();
          textState.backgroundStroke = textStyle.getBackgroundStroke();
          textState.padding = textStyle.getPadding() || defaultPadding;
          textState.scale = textScale === void 0 ? [1, 1] : textScale;
          const textOffsetX = textStyle.getOffsetX();
          const textOffsetY = textStyle.getOffsetY();
          const textRotateWithView = textStyle.getRotateWithView();
          const textRotation = textStyle.getRotation();
          this.text_ = textStyle.getText() || "";
          this.textOffsetX_ = textOffsetX === void 0 ? 0 : textOffsetX;
          this.textOffsetY_ = textOffsetY === void 0 ? 0 : textOffsetY;
          this.textRotateWithView_ = textRotateWithView === void 0 ? false : textRotateWithView;
          this.textRotation_ = textRotation === void 0 ? 0 : textRotation;
          this.strokeKey_ = strokeState ? (typeof strokeState.strokeStyle == "string" ? strokeState.strokeStyle : getUid(strokeState.strokeStyle)) + strokeState.lineCap + strokeState.lineDashOffset + "|" + strokeState.lineWidth + strokeState.lineJoin + strokeState.miterLimit + "[" + strokeState.lineDash.join() + "]" : "";
          this.textKey_ = textState.font + textState.scale + (textState.textAlign || "?") + (textState.repeat || "?") + (textState.justify || "?") + (textState.textBaseline || "?");
          this.fillKey_ = fillState ? typeof fillState.fillStyle == "string" ? fillState.fillStyle : "|" + getUid(fillState.fillStyle) : "";
        }
        this.declutterImageWithText_ = sharedData;
      }
    };
    TextBuilder_default = CanvasTextBuilder;
  }
});

// node_modules/ol/render/canvas/BuilderGroup.js
var BATCH_CONSTRUCTORS, BuilderGroup, BuilderGroup_default;
var init_BuilderGroup = __esm({
  "node_modules/ol/render/canvas/BuilderGroup.js"() {
    init_Builder();
    init_ImageBuilder();
    init_LineStringBuilder();
    init_PolygonBuilder();
    init_TextBuilder();
    BATCH_CONSTRUCTORS = {
      "Circle": PolygonBuilder_default,
      "Default": Builder_default,
      "Image": ImageBuilder_default,
      "LineString": LineStringBuilder_default,
      "Polygon": PolygonBuilder_default,
      "Text": TextBuilder_default
    };
    BuilderGroup = class {
      /**
       * @param {number} tolerance Tolerance.
       * @param {import("../../extent.js").Extent} maxExtent Max extent.
       * @param {number} resolution Resolution.
       * @param {number} pixelRatio Pixel ratio.
       */
      constructor(tolerance, maxExtent, resolution, pixelRatio) {
        this.tolerance_ = tolerance;
        this.maxExtent_ = maxExtent;
        this.pixelRatio_ = pixelRatio;
        this.resolution_ = resolution;
        this.buildersByZIndex_ = {};
      }
      /**
       * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
       */
      finish() {
        const builderInstructions = {};
        for (const zKey in this.buildersByZIndex_) {
          builderInstructions[zKey] = builderInstructions[zKey] || {};
          const builders = this.buildersByZIndex_[zKey];
          for (const builderKey in builders) {
            const builderInstruction = builders[builderKey].finish();
            builderInstructions[zKey][builderKey] = builderInstruction;
          }
        }
        return builderInstructions;
      }
      /**
       * @param {number|undefined} zIndex Z index.
       * @param {import("../canvas.js").BuilderType} builderType Replay type.
       * @return {import("../VectorContext.js").default} Replay.
       */
      getBuilder(zIndex, builderType) {
        const zIndexKey = zIndex !== void 0 ? zIndex.toString() : "0";
        let replays = this.buildersByZIndex_[zIndexKey];
        if (replays === void 0) {
          replays = {};
          this.buildersByZIndex_[zIndexKey] = replays;
        }
        let replay = replays[builderType];
        if (replay === void 0) {
          const Constructor = BATCH_CONSTRUCTORS[builderType];
          replay = new Constructor(
            this.tolerance_,
            this.maxExtent_,
            this.resolution_,
            this.pixelRatio_
          );
          replays[builderType] = replay;
        }
        return replay;
      }
    };
    BuilderGroup_default = BuilderGroup;
  }
});

// node_modules/ol/geom/flat/textpath.js
function drawTextOnPath(flatCoordinates, offset, end, stride, text, startM, maxAngle, scale4, measureAndCacheTextWidth2, font, cache3, rotation) {
  let x2 = flatCoordinates[offset];
  let y2 = flatCoordinates[offset + 1];
  let x1 = 0;
  let y1 = 0;
  let segmentLength = 0;
  let segmentM = 0;
  function advance() {
    x1 = x2;
    y1 = y2;
    offset += stride;
    x2 = flatCoordinates[offset];
    y2 = flatCoordinates[offset + 1];
    segmentM += segmentLength;
    segmentLength = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
  do {
    advance();
  } while (offset < end - stride && segmentM + segmentLength < startM);
  let interpolate = segmentLength === 0 ? 0 : (startM - segmentM) / segmentLength;
  const beginX = lerp(x1, x2, interpolate);
  const beginY = lerp(y1, y2, interpolate);
  const startOffset = offset - stride;
  const startLength = segmentM;
  const endM = startM + scale4 * measureAndCacheTextWidth2(font, text, cache3);
  while (offset < end - stride && segmentM + segmentLength < endM) {
    advance();
  }
  interpolate = segmentLength === 0 ? 0 : (endM - segmentM) / segmentLength;
  const endX = lerp(x1, x2, interpolate);
  const endY = lerp(y1, y2, interpolate);
  let reverse;
  if (rotation) {
    const flat = [beginX, beginY, endX, endY];
    rotate2(flat, 0, 4, 2, rotation, flat, flat);
    reverse = flat[0] > flat[2];
  } else {
    reverse = beginX > endX;
  }
  const PI = Math.PI;
  const result = [];
  const singleSegment = startOffset + stride === offset;
  offset = startOffset;
  segmentLength = 0;
  segmentM = startLength;
  x2 = flatCoordinates[offset];
  y2 = flatCoordinates[offset + 1];
  let previousAngle;
  if (singleSegment) {
    advance();
    previousAngle = Math.atan2(y2 - y1, x2 - x1);
    if (reverse) {
      previousAngle += previousAngle > 0 ? -PI : PI;
    }
    const x = (endX + beginX) / 2;
    const y = (endY + beginY) / 2;
    result[0] = [x, y, (endM - startM) / 2, previousAngle, text];
    return result;
  }
  text = text.replace(/\n/g, " ");
  for (let i = 0, ii = text.length; i < ii; ) {
    advance();
    let angle = Math.atan2(y2 - y1, x2 - x1);
    if (reverse) {
      angle += angle > 0 ? -PI : PI;
    }
    if (previousAngle !== void 0) {
      let delta = angle - previousAngle;
      delta += delta > PI ? -2 * PI : delta < -PI ? 2 * PI : 0;
      if (Math.abs(delta) > maxAngle) {
        return null;
      }
    }
    previousAngle = angle;
    const iStart = i;
    let charLength = 0;
    for (; i < ii; ++i) {
      const index = reverse ? ii - i - 1 : i;
      const len = scale4 * measureAndCacheTextWidth2(font, text[index], cache3);
      if (offset + stride < end && segmentM + segmentLength < startM + charLength + len / 2) {
        break;
      }
      charLength += len;
    }
    if (i === iStart) {
      continue;
    }
    const chars = reverse ? text.substring(ii - iStart, ii - i) : text.substring(iStart, i);
    interpolate = segmentLength === 0 ? 0 : (startM + charLength / 2 - segmentM) / segmentLength;
    const x = lerp(x1, x2, interpolate);
    const y = lerp(y1, y2, interpolate);
    result.push([x, y, charLength / 2, angle, chars]);
    startM += charLength;
  }
  return result;
}
var init_textpath = __esm({
  "node_modules/ol/geom/flat/textpath.js"() {
    init_math();
    init_transform2();
  }
});

// node_modules/ol/render/canvas/Executor.js
function getDeclutterBox(replayImageOrLabelArgs) {
  return replayImageOrLabelArgs[3].declutterBox;
}
function horizontalTextAlign(text, align) {
  if (align === "start") {
    align = rtlRegEx.test(text) ? "right" : "left";
  } else if (align === "end") {
    align = rtlRegEx.test(text) ? "left" : "right";
  }
  return TEXT_ALIGN[align];
}
function createTextChunks(acc, line, i) {
  if (i > 0) {
    acc.push("\n", "");
  }
  acc.push(line, "");
  return acc;
}
var tmpExtent, p1, p2, p3, p4, rtlRegEx, Executor, Executor_default;
var init_Executor = __esm({
  "node_modules/ol/render/canvas/Executor.js"() {
    init_Instruction();
    init_TextBuilder();
    init_transform();
    init_extent();
    init_canvas();
    init_textpath();
    init_array();
    init_length();
    init_transform2();
    tmpExtent = createEmpty();
    p1 = [];
    p2 = [];
    p3 = [];
    p4 = [];
    rtlRegEx = new RegExp(
      /* eslint-disable prettier/prettier */
      "[" + String.fromCharCode(1425) + "-" + String.fromCharCode(2303) + String.fromCharCode(64285) + "-" + String.fromCharCode(65023) + String.fromCharCode(65136) + "-" + String.fromCharCode(65276) + String.fromCharCode(67584) + "-" + String.fromCharCode(69631) + String.fromCharCode(124928) + "-" + String.fromCharCode(126975) + "]"
      /* eslint-enable prettier/prettier */
    );
    Executor = class {
      /**
       * @param {number} resolution Resolution.
       * @param {number} pixelRatio Pixel ratio.
       * @param {boolean} overlaps The replay can have overlapping geometries.
       * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions
       */
      constructor(resolution, pixelRatio, overlaps, instructions) {
        this.overlaps = overlaps;
        this.pixelRatio = pixelRatio;
        this.resolution = resolution;
        this.alignFill_;
        this.instructions = instructions.instructions;
        this.coordinates = instructions.coordinates;
        this.coordinateCache_ = {};
        this.renderedTransform_ = create();
        this.hitDetectionInstructions = instructions.hitDetectionInstructions;
        this.pixelCoordinates_ = null;
        this.viewRotation_ = 0;
        this.fillStates = instructions.fillStates || {};
        this.strokeStates = instructions.strokeStates || {};
        this.textStates = instructions.textStates || {};
        this.widths_ = {};
        this.labels_ = {};
      }
      /**
       * @param {string|Array<string>} text Text.
       * @param {string} textKey Text style key.
       * @param {string} fillKey Fill style key.
       * @param {string} strokeKey Stroke style key.
       * @return {import("../canvas.js").Label} Label.
       */
      createLabel(text, textKey, fillKey, strokeKey) {
        const key = text + textKey + fillKey + strokeKey;
        if (this.labels_[key]) {
          return this.labels_[key];
        }
        const strokeState = strokeKey ? this.strokeStates[strokeKey] : null;
        const fillState = fillKey ? this.fillStates[fillKey] : null;
        const textState = this.textStates[textKey];
        const pixelRatio = this.pixelRatio;
        const scale4 = [
          textState.scale[0] * pixelRatio,
          textState.scale[1] * pixelRatio
        ];
        const textIsArray = Array.isArray(text);
        const align = textState.justify ? TEXT_ALIGN[textState.justify] : horizontalTextAlign(
          Array.isArray(text) ? text[0] : text,
          textState.textAlign || defaultTextAlign
        );
        const strokeWidth = strokeKey && strokeState.lineWidth ? strokeState.lineWidth : 0;
        const chunks = textIsArray ? text : text.split("\n").reduce(createTextChunks, []);
        const { width, height, widths, heights, lineWidths } = getTextDimensions(
          textState,
          chunks
        );
        const renderWidth = width + strokeWidth;
        const contextInstructions = [];
        const w = (renderWidth + 2) * scale4[0];
        const h = (height + strokeWidth) * scale4[1];
        const label = {
          width: w < 0 ? Math.floor(w) : Math.ceil(w),
          height: h < 0 ? Math.floor(h) : Math.ceil(h),
          contextInstructions
        };
        if (scale4[0] != 1 || scale4[1] != 1) {
          contextInstructions.push("scale", scale4);
        }
        if (strokeKey) {
          contextInstructions.push("strokeStyle", strokeState.strokeStyle);
          contextInstructions.push("lineWidth", strokeWidth);
          contextInstructions.push("lineCap", strokeState.lineCap);
          contextInstructions.push("lineJoin", strokeState.lineJoin);
          contextInstructions.push("miterLimit", strokeState.miterLimit);
          contextInstructions.push("setLineDash", [strokeState.lineDash]);
          contextInstructions.push("lineDashOffset", strokeState.lineDashOffset);
        }
        if (fillKey) {
          contextInstructions.push("fillStyle", fillState.fillStyle);
        }
        contextInstructions.push("textBaseline", "middle");
        contextInstructions.push("textAlign", "center");
        const leftRight = 0.5 - align;
        let x = align * renderWidth + leftRight * strokeWidth;
        const strokeInstructions = [];
        const fillInstructions = [];
        let lineHeight = 0;
        let lineOffset = 0;
        let widthHeightIndex = 0;
        let lineWidthIndex = 0;
        let previousFont;
        for (let i = 0, ii = chunks.length; i < ii; i += 2) {
          const text2 = chunks[i];
          if (text2 === "\n") {
            lineOffset += lineHeight;
            lineHeight = 0;
            x = align * renderWidth + leftRight * strokeWidth;
            ++lineWidthIndex;
            continue;
          }
          const font = chunks[i + 1] || textState.font;
          if (font !== previousFont) {
            if (strokeKey) {
              strokeInstructions.push("font", font);
            }
            if (fillKey) {
              fillInstructions.push("font", font);
            }
            previousFont = font;
          }
          lineHeight = Math.max(lineHeight, heights[widthHeightIndex]);
          const fillStrokeArgs = [
            text2,
            x + leftRight * widths[widthHeightIndex] + align * (widths[widthHeightIndex] - lineWidths[lineWidthIndex]),
            0.5 * (strokeWidth + lineHeight) + lineOffset
          ];
          x += widths[widthHeightIndex];
          if (strokeKey) {
            strokeInstructions.push("strokeText", fillStrokeArgs);
          }
          if (fillKey) {
            fillInstructions.push("fillText", fillStrokeArgs);
          }
          ++widthHeightIndex;
        }
        Array.prototype.push.apply(contextInstructions, strokeInstructions);
        Array.prototype.push.apply(contextInstructions, fillInstructions);
        this.labels_[key] = label;
        return label;
      }
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
       * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
       * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
       * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
       * @param {Array<*>} fillInstruction Fill instruction.
       * @param {Array<*>} strokeInstruction Stroke instruction.
       */
      replayTextBackground_(context, p12, p22, p32, p42, fillInstruction2, strokeInstruction2) {
        context.beginPath();
        context.moveTo.apply(context, p12);
        context.lineTo.apply(context, p22);
        context.lineTo.apply(context, p32);
        context.lineTo.apply(context, p42);
        context.lineTo.apply(context, p12);
        if (fillInstruction2) {
          this.alignFill_ = /** @type {boolean} */
          fillInstruction2[2];
          this.fill_(context);
        }
        if (strokeInstruction2) {
          this.setStrokeStyle_(
            context,
            /** @type {Array<*>} */
            strokeInstruction2
          );
          context.stroke();
        }
      }
      /**
       * @private
       * @param {number} sheetWidth Width of the sprite sheet.
       * @param {number} sheetHeight Height of the sprite sheet.
       * @param {number} centerX X.
       * @param {number} centerY Y.
       * @param {number} width Width.
       * @param {number} height Height.
       * @param {number} anchorX Anchor X.
       * @param {number} anchorY Anchor Y.
       * @param {number} originX Origin X.
       * @param {number} originY Origin Y.
       * @param {number} rotation Rotation.
       * @param {import("../../size.js").Size} scale Scale.
       * @param {boolean} snapToPixel Snap to pixel.
       * @param {Array<number>} padding Padding.
       * @param {boolean} fillStroke Background fill or stroke.
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       * @return {ImageOrLabelDimensions} Dimensions for positioning and decluttering the image or label.
       */
      calculateImageOrLabelDimensions_(sheetWidth, sheetHeight, centerX, centerY, width, height, anchorX, anchorY, originX, originY, rotation, scale4, snapToPixel, padding, fillStroke, feature) {
        anchorX *= scale4[0];
        anchorY *= scale4[1];
        let x = centerX - anchorX;
        let y = centerY - anchorY;
        const w = width + originX > sheetWidth ? sheetWidth - originX : width;
        const h = height + originY > sheetHeight ? sheetHeight - originY : height;
        const boxW = padding[3] + w * scale4[0] + padding[1];
        const boxH = padding[0] + h * scale4[1] + padding[2];
        const boxX = x - padding[3];
        const boxY = y - padding[0];
        if (fillStroke || rotation !== 0) {
          p1[0] = boxX;
          p4[0] = boxX;
          p1[1] = boxY;
          p2[1] = boxY;
          p2[0] = boxX + boxW;
          p3[0] = p2[0];
          p3[1] = boxY + boxH;
          p4[1] = p3[1];
        }
        let transform2;
        if (rotation !== 0) {
          transform2 = compose(
            create(),
            centerX,
            centerY,
            1,
            1,
            rotation,
            -centerX,
            -centerY
          );
          apply(transform2, p1);
          apply(transform2, p2);
          apply(transform2, p3);
          apply(transform2, p4);
          createOrUpdate(
            Math.min(p1[0], p2[0], p3[0], p4[0]),
            Math.min(p1[1], p2[1], p3[1], p4[1]),
            Math.max(p1[0], p2[0], p3[0], p4[0]),
            Math.max(p1[1], p2[1], p3[1], p4[1]),
            tmpExtent
          );
        } else {
          createOrUpdate(
            Math.min(boxX, boxX + boxW),
            Math.min(boxY, boxY + boxH),
            Math.max(boxX, boxX + boxW),
            Math.max(boxY, boxY + boxH),
            tmpExtent
          );
        }
        if (snapToPixel) {
          x = Math.round(x);
          y = Math.round(y);
        }
        return {
          drawImageX: x,
          drawImageY: y,
          drawImageW: w,
          drawImageH: h,
          originX,
          originY,
          declutterBox: {
            minX: tmpExtent[0],
            minY: tmpExtent[1],
            maxX: tmpExtent[2],
            maxY: tmpExtent[3],
            value: feature
          },
          canvasTransform: transform2,
          scale: scale4
        };
      }
      /**
       * @private
       * @param {CanvasRenderingContext2D} context Context.
       * @param {number} contextScale Scale of the context.
       * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
       * @param {ImageOrLabelDimensions} dimensions Dimensions.
       * @param {number} opacity Opacity.
       * @param {Array<*>} fillInstruction Fill instruction.
       * @param {Array<*>} strokeInstruction Stroke instruction.
       * @return {boolean} The image or label was rendered.
       */
      replayImageOrLabel_(context, contextScale, imageOrLabel, dimensions, opacity, fillInstruction2, strokeInstruction2) {
        const fillStroke = !!(fillInstruction2 || strokeInstruction2);
        const box = dimensions.declutterBox;
        const canvas = context.canvas;
        const strokePadding = strokeInstruction2 ? strokeInstruction2[2] * dimensions.scale[0] / 2 : 0;
        const intersects3 = box.minX - strokePadding <= canvas.width / contextScale && box.maxX + strokePadding >= 0 && box.minY - strokePadding <= canvas.height / contextScale && box.maxY + strokePadding >= 0;
        if (intersects3) {
          if (fillStroke) {
            this.replayTextBackground_(
              context,
              p1,
              p2,
              p3,
              p4,
              /** @type {Array<*>} */
              fillInstruction2,
              /** @type {Array<*>} */
              strokeInstruction2
            );
          }
          drawImageOrLabel(
            context,
            dimensions.canvasTransform,
            opacity,
            imageOrLabel,
            dimensions.originX,
            dimensions.originY,
            dimensions.drawImageW,
            dimensions.drawImageH,
            dimensions.drawImageX,
            dimensions.drawImageY,
            dimensions.scale
          );
        }
        return true;
      }
      /**
       * @private
       * @param {CanvasRenderingContext2D} context Context.
       */
      fill_(context) {
        if (this.alignFill_) {
          const origin = apply(this.renderedTransform_, [0, 0]);
          const repeatSize = 512 * this.pixelRatio;
          context.save();
          context.translate(origin[0] % repeatSize, origin[1] % repeatSize);
          context.rotate(this.viewRotation_);
        }
        context.fill();
        if (this.alignFill_) {
          context.restore();
        }
      }
      /**
       * @private
       * @param {CanvasRenderingContext2D} context Context.
       * @param {Array<*>} instruction Instruction.
       */
      setStrokeStyle_(context, instruction) {
        context["strokeStyle"] = /** @type {import("../../colorlike.js").ColorLike} */
        instruction[1];
        context.lineWidth = /** @type {number} */
        instruction[2];
        context.lineCap = /** @type {CanvasLineCap} */
        instruction[3];
        context.lineJoin = /** @type {CanvasLineJoin} */
        instruction[4];
        context.miterLimit = /** @type {number} */
        instruction[5];
        context.lineDashOffset = /** @type {number} */
        instruction[7];
        context.setLineDash(
          /** @type {Array<number>} */
          instruction[6]
        );
      }
      /**
       * @private
       * @param {string|Array<string>} text The text to draw.
       * @param {string} textKey The key of the text state.
       * @param {string} strokeKey The key for the stroke state.
       * @param {string} fillKey The key for the fill state.
       * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
       */
      drawLabelWithPointPlacement_(text, textKey, strokeKey, fillKey) {
        const textState = this.textStates[textKey];
        const label = this.createLabel(text, textKey, fillKey, strokeKey);
        const strokeState = this.strokeStates[strokeKey];
        const pixelRatio = this.pixelRatio;
        const align = horizontalTextAlign(
          Array.isArray(text) ? text[0] : text,
          textState.textAlign || defaultTextAlign
        );
        const baseline = TEXT_ALIGN[textState.textBaseline || defaultTextBaseline];
        const strokeWidth = strokeState && strokeState.lineWidth ? strokeState.lineWidth : 0;
        const width = label.width / pixelRatio - 2 * textState.scale[0];
        const anchorX = align * width + 2 * (0.5 - align) * strokeWidth;
        const anchorY = baseline * label.height / pixelRatio + 2 * (0.5 - baseline) * strokeWidth;
        return {
          label,
          anchorX,
          anchorY
        };
      }
      /**
       * @private
       * @param {CanvasRenderingContext2D} context Context.
       * @param {number} contextScale Scale of the context.
       * @param {import("../../transform.js").Transform} transform Transform.
       * @param {Array<*>} instructions Instructions array.
       * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
       * @param {FeatureCallback<T>} [featureCallback] Feature callback.
       * @param {import("../../extent.js").Extent} [hitExtent] Only check
       *     features that intersect this extent.
       * @param {import("rbush").default} [declutterTree] Declutter tree.
       * @return {T|undefined} Callback result.
       * @template T
       */
      execute_(context, contextScale, transform2, instructions, snapToPixel, featureCallback, hitExtent, declutterTree) {
        let pixelCoordinates;
        if (this.pixelCoordinates_ && equals(transform2, this.renderedTransform_)) {
          pixelCoordinates = this.pixelCoordinates_;
        } else {
          if (!this.pixelCoordinates_) {
            this.pixelCoordinates_ = [];
          }
          pixelCoordinates = transform2D(
            this.coordinates,
            0,
            this.coordinates.length,
            2,
            transform2,
            this.pixelCoordinates_
          );
          setFromArray(this.renderedTransform_, transform2);
        }
        let i = 0;
        const ii = instructions.length;
        let d = 0;
        let dd;
        let anchorX, anchorY, prevX, prevY, roundX, roundY, image, text, textKey, strokeKey, fillKey;
        let pendingFill = 0;
        let pendingStroke = 0;
        let lastFillInstruction = null;
        let lastStrokeInstruction = null;
        const coordinateCache = this.coordinateCache_;
        const viewRotation = this.viewRotation_;
        const viewRotationFromTransform = Math.round(Math.atan2(-transform2[1], transform2[0]) * 1e12) / 1e12;
        const state = (
          /** @type {import("../../render.js").State} */
          {
            context,
            pixelRatio: this.pixelRatio,
            resolution: this.resolution,
            rotation: viewRotation
          }
        );
        const batchSize = this.instructions != instructions || this.overlaps ? 0 : 200;
        let feature;
        let x, y, currentGeometry;
        while (i < ii) {
          const instruction = instructions[i];
          const type = (
            /** @type {import("./Instruction.js").default} */
            instruction[0]
          );
          switch (type) {
            case Instruction_default.BEGIN_GEOMETRY:
              feature = /** @type {import("../../Feature.js").FeatureLike} */
              instruction[1];
              currentGeometry = instruction[3];
              if (!feature.getGeometry()) {
                i = /** @type {number} */
                instruction[2];
              } else if (hitExtent !== void 0 && !intersects(hitExtent, currentGeometry.getExtent())) {
                i = /** @type {number} */
                instruction[2] + 1;
              } else {
                ++i;
              }
              break;
            case Instruction_default.BEGIN_PATH:
              if (pendingFill > batchSize) {
                this.fill_(context);
                pendingFill = 0;
              }
              if (pendingStroke > batchSize) {
                context.stroke();
                pendingStroke = 0;
              }
              if (!pendingFill && !pendingStroke) {
                context.beginPath();
                prevX = NaN;
                prevY = NaN;
              }
              ++i;
              break;
            case Instruction_default.CIRCLE:
              d = /** @type {number} */
              instruction[1];
              const x1 = pixelCoordinates[d];
              const y1 = pixelCoordinates[d + 1];
              const x2 = pixelCoordinates[d + 2];
              const y2 = pixelCoordinates[d + 3];
              const dx = x2 - x1;
              const dy = y2 - y1;
              const r = Math.sqrt(dx * dx + dy * dy);
              context.moveTo(x1 + r, y1);
              context.arc(x1, y1, r, 0, 2 * Math.PI, true);
              ++i;
              break;
            case Instruction_default.CLOSE_PATH:
              context.closePath();
              ++i;
              break;
            case Instruction_default.CUSTOM:
              d = /** @type {number} */
              instruction[1];
              dd = instruction[2];
              const geometry = (
                /** @type {import("../../geom/SimpleGeometry.js").default} */
                instruction[3]
              );
              const renderer = instruction[4];
              const fn = instruction.length == 6 ? instruction[5] : void 0;
              state.geometry = geometry;
              state.feature = feature;
              if (!(i in coordinateCache)) {
                coordinateCache[i] = [];
              }
              const coords = coordinateCache[i];
              if (fn) {
                fn(pixelCoordinates, d, dd, 2, coords);
              } else {
                coords[0] = pixelCoordinates[d];
                coords[1] = pixelCoordinates[d + 1];
                coords.length = 2;
              }
              renderer(coords, state);
              ++i;
              break;
            case Instruction_default.DRAW_IMAGE:
              d = /** @type {number} */
              instruction[1];
              dd = /** @type {number} */
              instruction[2];
              image = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
              instruction[3];
              anchorX = /** @type {number} */
              instruction[4];
              anchorY = /** @type {number} */
              instruction[5];
              let height = (
                /** @type {number} */
                instruction[6]
              );
              const opacity = (
                /** @type {number} */
                instruction[7]
              );
              const originX = (
                /** @type {number} */
                instruction[8]
              );
              const originY = (
                /** @type {number} */
                instruction[9]
              );
              const rotateWithView = (
                /** @type {boolean} */
                instruction[10]
              );
              let rotation = (
                /** @type {number} */
                instruction[11]
              );
              const scale4 = (
                /** @type {import("../../size.js").Size} */
                instruction[12]
              );
              let width = (
                /** @type {number} */
                instruction[13]
              );
              const declutterMode = (
                /** @type {"declutter"|"obstacle"|"none"|undefined} */
                instruction[14]
              );
              const declutterImageWithText = (
                /** @type {import("../canvas.js").DeclutterImageWithText} */
                instruction[15]
              );
              if (!image && instruction.length >= 20) {
                text = /** @type {string} */
                instruction[19];
                textKey = /** @type {string} */
                instruction[20];
                strokeKey = /** @type {string} */
                instruction[21];
                fillKey = /** @type {string} */
                instruction[22];
                const labelWithAnchor = this.drawLabelWithPointPlacement_(
                  text,
                  textKey,
                  strokeKey,
                  fillKey
                );
                image = labelWithAnchor.label;
                instruction[3] = image;
                const textOffsetX = (
                  /** @type {number} */
                  instruction[23]
                );
                anchorX = (labelWithAnchor.anchorX - textOffsetX) * this.pixelRatio;
                instruction[4] = anchorX;
                const textOffsetY = (
                  /** @type {number} */
                  instruction[24]
                );
                anchorY = (labelWithAnchor.anchorY - textOffsetY) * this.pixelRatio;
                instruction[5] = anchorY;
                height = image.height;
                instruction[6] = height;
                width = image.width;
                instruction[13] = width;
              }
              let geometryWidths;
              if (instruction.length > 25) {
                geometryWidths = /** @type {number} */
                instruction[25];
              }
              let padding, backgroundFill, backgroundStroke;
              if (instruction.length > 17) {
                padding = /** @type {Array<number>} */
                instruction[16];
                backgroundFill = /** @type {boolean} */
                instruction[17];
                backgroundStroke = /** @type {boolean} */
                instruction[18];
              } else {
                padding = defaultPadding;
                backgroundFill = false;
                backgroundStroke = false;
              }
              if (rotateWithView && viewRotationFromTransform) {
                rotation += viewRotation;
              } else if (!rotateWithView && !viewRotationFromTransform) {
                rotation -= viewRotation;
              }
              let widthIndex = 0;
              for (; d < dd; d += 2) {
                if (geometryWidths && geometryWidths[widthIndex++] < width / this.pixelRatio) {
                  continue;
                }
                const dimensions = this.calculateImageOrLabelDimensions_(
                  image.width,
                  image.height,
                  pixelCoordinates[d],
                  pixelCoordinates[d + 1],
                  width,
                  height,
                  anchorX,
                  anchorY,
                  originX,
                  originY,
                  rotation,
                  scale4,
                  snapToPixel,
                  padding,
                  backgroundFill || backgroundStroke,
                  feature
                );
                const args = [
                  context,
                  contextScale,
                  image,
                  dimensions,
                  opacity,
                  backgroundFill ? (
                    /** @type {Array<*>} */
                    lastFillInstruction
                  ) : null,
                  backgroundStroke ? (
                    /** @type {Array<*>} */
                    lastStrokeInstruction
                  ) : null
                ];
                if (declutterTree) {
                  if (declutterMode === "none") {
                    continue;
                  } else if (declutterMode === "obstacle") {
                    declutterTree.insert(dimensions.declutterBox);
                    continue;
                  } else {
                    let imageArgs;
                    let imageDeclutterBox;
                    if (declutterImageWithText) {
                      const index = dd - d;
                      if (!declutterImageWithText[index]) {
                        declutterImageWithText[index] = args;
                        continue;
                      }
                      imageArgs = declutterImageWithText[index];
                      delete declutterImageWithText[index];
                      imageDeclutterBox = getDeclutterBox(imageArgs);
                      if (declutterTree.collides(imageDeclutterBox)) {
                        continue;
                      }
                    }
                    if (declutterTree.collides(dimensions.declutterBox)) {
                      continue;
                    }
                    if (imageArgs) {
                      declutterTree.insert(imageDeclutterBox);
                      this.replayImageOrLabel_.apply(this, imageArgs);
                    }
                    declutterTree.insert(dimensions.declutterBox);
                  }
                }
                this.replayImageOrLabel_.apply(this, args);
              }
              ++i;
              break;
            case Instruction_default.DRAW_CHARS:
              const begin = (
                /** @type {number} */
                instruction[1]
              );
              const end = (
                /** @type {number} */
                instruction[2]
              );
              const baseline = (
                /** @type {number} */
                instruction[3]
              );
              const overflow = (
                /** @type {number} */
                instruction[4]
              );
              fillKey = /** @type {string} */
              instruction[5];
              const maxAngle = (
                /** @type {number} */
                instruction[6]
              );
              const measurePixelRatio = (
                /** @type {number} */
                instruction[7]
              );
              const offsetY = (
                /** @type {number} */
                instruction[8]
              );
              strokeKey = /** @type {string} */
              instruction[9];
              const strokeWidth = (
                /** @type {number} */
                instruction[10]
              );
              text = /** @type {string} */
              instruction[11];
              textKey = /** @type {string} */
              instruction[12];
              const pixelRatioScale = [
                /** @type {number} */
                instruction[13],
                /** @type {number} */
                instruction[13]
              ];
              const textState = this.textStates[textKey];
              const font = textState.font;
              const textScale = [
                textState.scale[0] * measurePixelRatio,
                textState.scale[1] * measurePixelRatio
              ];
              let cachedWidths;
              if (font in this.widths_) {
                cachedWidths = this.widths_[font];
              } else {
                cachedWidths = {};
                this.widths_[font] = cachedWidths;
              }
              const pathLength = lineStringLength(pixelCoordinates, begin, end, 2);
              const textLength = Math.abs(textScale[0]) * measureAndCacheTextWidth(font, text, cachedWidths);
              if (overflow || textLength <= pathLength) {
                const textAlign = this.textStates[textKey].textAlign;
                const startM = (pathLength - textLength) * horizontalTextAlign(text, textAlign);
                const parts = drawTextOnPath(
                  pixelCoordinates,
                  begin,
                  end,
                  2,
                  text,
                  startM,
                  maxAngle,
                  Math.abs(textScale[0]),
                  measureAndCacheTextWidth,
                  font,
                  cachedWidths,
                  viewRotationFromTransform ? 0 : this.viewRotation_
                );
                drawChars:
                  if (parts) {
                    const replayImageOrLabelArgs = [];
                    let c, cc, chars, label, part;
                    if (strokeKey) {
                      for (c = 0, cc = parts.length; c < cc; ++c) {
                        part = parts[c];
                        chars = /** @type {string} */
                        part[4];
                        label = this.createLabel(chars, textKey, "", strokeKey);
                        anchorX = /** @type {number} */
                        part[2] + (textScale[0] < 0 ? -strokeWidth : strokeWidth);
                        anchorY = baseline * label.height + (0.5 - baseline) * 2 * strokeWidth * textScale[1] / textScale[0] - offsetY;
                        const dimensions = this.calculateImageOrLabelDimensions_(
                          label.width,
                          label.height,
                          part[0],
                          part[1],
                          label.width,
                          label.height,
                          anchorX,
                          anchorY,
                          0,
                          0,
                          part[3],
                          pixelRatioScale,
                          false,
                          defaultPadding,
                          false,
                          feature
                        );
                        if (declutterTree && declutterTree.collides(dimensions.declutterBox)) {
                          break drawChars;
                        }
                        replayImageOrLabelArgs.push([
                          context,
                          contextScale,
                          label,
                          dimensions,
                          1,
                          null,
                          null
                        ]);
                      }
                    }
                    if (fillKey) {
                      for (c = 0, cc = parts.length; c < cc; ++c) {
                        part = parts[c];
                        chars = /** @type {string} */
                        part[4];
                        label = this.createLabel(chars, textKey, fillKey, "");
                        anchorX = /** @type {number} */
                        part[2];
                        anchorY = baseline * label.height - offsetY;
                        const dimensions = this.calculateImageOrLabelDimensions_(
                          label.width,
                          label.height,
                          part[0],
                          part[1],
                          label.width,
                          label.height,
                          anchorX,
                          anchorY,
                          0,
                          0,
                          part[3],
                          pixelRatioScale,
                          false,
                          defaultPadding,
                          false,
                          feature
                        );
                        if (declutterTree && declutterTree.collides(dimensions.declutterBox)) {
                          break drawChars;
                        }
                        replayImageOrLabelArgs.push([
                          context,
                          contextScale,
                          label,
                          dimensions,
                          1,
                          null,
                          null
                        ]);
                      }
                    }
                    if (declutterTree) {
                      declutterTree.load(replayImageOrLabelArgs.map(getDeclutterBox));
                    }
                    for (let i2 = 0, ii2 = replayImageOrLabelArgs.length; i2 < ii2; ++i2) {
                      this.replayImageOrLabel_.apply(this, replayImageOrLabelArgs[i2]);
                    }
                  }
              }
              ++i;
              break;
            case Instruction_default.END_GEOMETRY:
              if (featureCallback !== void 0) {
                feature = /** @type {import("../../Feature.js").FeatureLike} */
                instruction[1];
                const result = featureCallback(feature, currentGeometry);
                if (result) {
                  return result;
                }
              }
              ++i;
              break;
            case Instruction_default.FILL:
              if (batchSize) {
                pendingFill++;
              } else {
                this.fill_(context);
              }
              ++i;
              break;
            case Instruction_default.MOVE_TO_LINE_TO:
              d = /** @type {number} */
              instruction[1];
              dd = /** @type {number} */
              instruction[2];
              x = pixelCoordinates[d];
              y = pixelCoordinates[d + 1];
              roundX = x + 0.5 | 0;
              roundY = y + 0.5 | 0;
              if (roundX !== prevX || roundY !== prevY) {
                context.moveTo(x, y);
                prevX = roundX;
                prevY = roundY;
              }
              for (d += 2; d < dd; d += 2) {
                x = pixelCoordinates[d];
                y = pixelCoordinates[d + 1];
                roundX = x + 0.5 | 0;
                roundY = y + 0.5 | 0;
                if (d == dd - 2 || roundX !== prevX || roundY !== prevY) {
                  context.lineTo(x, y);
                  prevX = roundX;
                  prevY = roundY;
                }
              }
              ++i;
              break;
            case Instruction_default.SET_FILL_STYLE:
              lastFillInstruction = instruction;
              this.alignFill_ = instruction[2];
              if (pendingFill) {
                this.fill_(context);
                pendingFill = 0;
                if (pendingStroke) {
                  context.stroke();
                  pendingStroke = 0;
                }
              }
              context.fillStyle = /** @type {import("../../colorlike.js").ColorLike} */
              instruction[1];
              ++i;
              break;
            case Instruction_default.SET_STROKE_STYLE:
              lastStrokeInstruction = instruction;
              if (pendingStroke) {
                context.stroke();
                pendingStroke = 0;
              }
              this.setStrokeStyle_(
                context,
                /** @type {Array<*>} */
                instruction
              );
              ++i;
              break;
            case Instruction_default.STROKE:
              if (batchSize) {
                pendingStroke++;
              } else {
                context.stroke();
              }
              ++i;
              break;
            default:
              ++i;
              break;
          }
        }
        if (pendingFill) {
          this.fill_(context);
        }
        if (pendingStroke) {
          context.stroke();
        }
        return void 0;
      }
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {number} contextScale Scale of the context.
       * @param {import("../../transform.js").Transform} transform Transform.
       * @param {number} viewRotation View rotation.
       * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
       * @param {import("rbush").default} [declutterTree] Declutter tree.
       */
      execute(context, contextScale, transform2, viewRotation, snapToPixel, declutterTree) {
        this.viewRotation_ = viewRotation;
        this.execute_(
          context,
          contextScale,
          transform2,
          this.instructions,
          snapToPixel,
          void 0,
          void 0,
          declutterTree
        );
      }
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {import("../../transform.js").Transform} transform Transform.
       * @param {number} viewRotation View rotation.
       * @param {FeatureCallback<T>} [featureCallback] Feature callback.
       * @param {import("../../extent.js").Extent} [hitExtent] Only check
       *     features that intersect this extent.
       * @return {T|undefined} Callback result.
       * @template T
       */
      executeHitDetection(context, transform2, viewRotation, featureCallback, hitExtent) {
        this.viewRotation_ = viewRotation;
        return this.execute_(
          context,
          1,
          transform2,
          this.hitDetectionInstructions,
          true,
          featureCallback,
          hitExtent
        );
      }
    };
    Executor_default = Executor;
  }
});

// node_modules/ol/render/canvas/ExecutorGroup.js
function getPixelIndexArray(radius) {
  if (circlePixelIndexArrayCache[radius] !== void 0) {
    return circlePixelIndexArrayCache[radius];
  }
  const size = radius * 2 + 1;
  const maxDistanceSq = radius * radius;
  const distances = new Array(maxDistanceSq + 1);
  for (let i = 0; i <= radius; ++i) {
    for (let j = 0; j <= radius; ++j) {
      const distanceSq = i * i + j * j;
      if (distanceSq > maxDistanceSq) {
        break;
      }
      let distance = distances[distanceSq];
      if (!distance) {
        distance = [];
        distances[distanceSq] = distance;
      }
      distance.push(((radius + i) * size + (radius + j)) * 4 + 3);
      if (i > 0) {
        distance.push(((radius - i) * size + (radius + j)) * 4 + 3);
      }
      if (j > 0) {
        distance.push(((radius + i) * size + (radius - j)) * 4 + 3);
        if (i > 0) {
          distance.push(((radius - i) * size + (radius - j)) * 4 + 3);
        }
      }
    }
  }
  const pixelIndex = [];
  for (let i = 0, ii = distances.length; i < ii; ++i) {
    if (distances[i]) {
      pixelIndex.push(...distances[i]);
    }
  }
  circlePixelIndexArrayCache[radius] = pixelIndex;
  return pixelIndex;
}
var ORDER, ExecutorGroup, circlePixelIndexArrayCache, ExecutorGroup_default;
var init_ExecutorGroup = __esm({
  "node_modules/ol/render/canvas/ExecutorGroup.js"() {
    init_Executor();
    init_array();
    init_extent();
    init_transform();
    init_dom();
    init_obj();
    init_transform2();
    ORDER = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
    ExecutorGroup = class {
      /**
       * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
       * `maxExtent` was set on the Builder for this executor group, the same `maxExtent`
       * should be set here, unless the target context does not exceed that extent (which
       * can be the case when rendering to tiles).
       * @param {number} resolution Resolution.
       * @param {number} pixelRatio Pixel ratio.
       * @param {boolean} overlaps The executor group can have overlapping geometries.
       * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions
       * The serializable instructions.
       * @param {number} [renderBuffer] Optional rendering buffer.
       */
      constructor(maxExtent, resolution, pixelRatio, overlaps, allInstructions, renderBuffer) {
        this.maxExtent_ = maxExtent;
        this.overlaps_ = overlaps;
        this.pixelRatio_ = pixelRatio;
        this.resolution_ = resolution;
        this.renderBuffer_ = renderBuffer;
        this.executorsByZIndex_ = {};
        this.hitDetectionContext_ = null;
        this.hitDetectionTransform_ = create();
        this.createExecutors_(allInstructions);
      }
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {import("../../transform.js").Transform} transform Transform.
       */
      clip(context, transform2) {
        const flatClipCoords = this.getClipCoords(transform2);
        context.beginPath();
        context.moveTo(flatClipCoords[0], flatClipCoords[1]);
        context.lineTo(flatClipCoords[2], flatClipCoords[3]);
        context.lineTo(flatClipCoords[4], flatClipCoords[5]);
        context.lineTo(flatClipCoords[6], flatClipCoords[7]);
        context.clip();
      }
      /**
       * Create executors and populate them using the provided instructions.
       * @private
       * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
       */
      createExecutors_(allInstructions) {
        for (const zIndex in allInstructions) {
          let executors = this.executorsByZIndex_[zIndex];
          if (executors === void 0) {
            executors = {};
            this.executorsByZIndex_[zIndex] = executors;
          }
          const instructionByZindex = allInstructions[zIndex];
          for (const builderType in instructionByZindex) {
            const instructions = instructionByZindex[builderType];
            executors[builderType] = new Executor_default(
              this.resolution_,
              this.pixelRatio_,
              this.overlaps_,
              instructions
            );
          }
        }
      }
      /**
       * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
       * @return {boolean} Has executors of the provided types.
       */
      hasExecutors(executors) {
        for (const zIndex in this.executorsByZIndex_) {
          const candidates = this.executorsByZIndex_[zIndex];
          for (let i = 0, ii = executors.length; i < ii; ++i) {
            if (executors[i] in candidates) {
              return true;
            }
          }
        }
        return false;
      }
      /**
       * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
       * @param {number} resolution Resolution.
       * @param {number} rotation Rotation.
       * @param {number} hitTolerance Hit tolerance in pixels.
       * @param {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default, number): T} callback Feature callback.
       * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
       * @return {T|undefined} Callback result.
       * @template T
       */
      forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance, callback, declutteredFeatures) {
        hitTolerance = Math.round(hitTolerance);
        const contextSize = hitTolerance * 2 + 1;
        const transform2 = compose(
          this.hitDetectionTransform_,
          hitTolerance + 0.5,
          hitTolerance + 0.5,
          1 / resolution,
          -1 / resolution,
          -rotation,
          -coordinate[0],
          -coordinate[1]
        );
        const newContext = !this.hitDetectionContext_;
        if (newContext) {
          this.hitDetectionContext_ = createCanvasContext2D(
            contextSize,
            contextSize,
            void 0,
            { willReadFrequently: true }
          );
        }
        const context = this.hitDetectionContext_;
        if (context.canvas.width !== contextSize || context.canvas.height !== contextSize) {
          context.canvas.width = contextSize;
          context.canvas.height = contextSize;
        } else if (!newContext) {
          context.clearRect(0, 0, contextSize, contextSize);
        }
        let hitExtent;
        if (this.renderBuffer_ !== void 0) {
          hitExtent = createEmpty();
          extendCoordinate(hitExtent, coordinate);
          buffer(
            hitExtent,
            resolution * (this.renderBuffer_ + hitTolerance),
            hitExtent
          );
        }
        const indexes = getPixelIndexArray(hitTolerance);
        let builderType;
        function featureCallback(feature, geometry) {
          const imageData = context.getImageData(
            0,
            0,
            contextSize,
            contextSize
          ).data;
          for (let i2 = 0, ii = indexes.length; i2 < ii; i2++) {
            if (imageData[indexes[i2]] > 0) {
              if (!declutteredFeatures || builderType !== "Image" && builderType !== "Text" || declutteredFeatures.includes(feature)) {
                const idx = (indexes[i2] - 3) / 4;
                const x = hitTolerance - idx % contextSize;
                const y = hitTolerance - (idx / contextSize | 0);
                const result2 = callback(feature, geometry, x * x + y * y);
                if (result2) {
                  return result2;
                }
              }
              context.clearRect(0, 0, contextSize, contextSize);
              break;
            }
          }
          return void 0;
        }
        const zs = Object.keys(this.executorsByZIndex_).map(Number);
        zs.sort(ascending);
        let i, j, executors, executor, result;
        for (i = zs.length - 1; i >= 0; --i) {
          const zIndexKey = zs[i].toString();
          executors = this.executorsByZIndex_[zIndexKey];
          for (j = ORDER.length - 1; j >= 0; --j) {
            builderType = ORDER[j];
            executor = executors[builderType];
            if (executor !== void 0) {
              result = executor.executeHitDetection(
                context,
                transform2,
                rotation,
                featureCallback,
                hitExtent
              );
              if (result) {
                return result;
              }
            }
          }
        }
        return void 0;
      }
      /**
       * @param {import("../../transform.js").Transform} transform Transform.
       * @return {Array<number>|null} Clip coordinates.
       */
      getClipCoords(transform2) {
        const maxExtent = this.maxExtent_;
        if (!maxExtent) {
          return null;
        }
        const minX = maxExtent[0];
        const minY = maxExtent[1];
        const maxX = maxExtent[2];
        const maxY = maxExtent[3];
        const flatClipCoords = [minX, minY, minX, maxY, maxX, maxY, maxX, minY];
        transform2D(flatClipCoords, 0, 8, 2, transform2, flatClipCoords);
        return flatClipCoords;
      }
      /**
       * @return {boolean} Is empty.
       */
      isEmpty() {
        return isEmpty(this.executorsByZIndex_);
      }
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {number} contextScale Scale of the context.
       * @param {import("../../transform.js").Transform} transform Transform.
       * @param {number} viewRotation View rotation.
       * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
       * @param {Array<import("../canvas.js").BuilderType>} [builderTypes] Ordered replay types to replay.
       *     Default is {@link module:ol/render/replay~ORDER}
       * @param {import("rbush").default} [declutterTree] Declutter tree.
       */
      execute(context, contextScale, transform2, viewRotation, snapToPixel, builderTypes, declutterTree) {
        const zs = Object.keys(this.executorsByZIndex_).map(Number);
        zs.sort(ascending);
        if (this.maxExtent_) {
          context.save();
          this.clip(context, transform2);
        }
        builderTypes = builderTypes ? builderTypes : ORDER;
        let i, ii, j, jj, replays, replay;
        if (declutterTree) {
          zs.reverse();
        }
        for (i = 0, ii = zs.length; i < ii; ++i) {
          const zIndexKey = zs[i].toString();
          replays = this.executorsByZIndex_[zIndexKey];
          for (j = 0, jj = builderTypes.length; j < jj; ++j) {
            const builderType = builderTypes[j];
            replay = replays[builderType];
            if (replay !== void 0) {
              replay.execute(
                context,
                contextScale,
                transform2,
                viewRotation,
                snapToPixel,
                declutterTree
              );
            }
          }
        }
        if (this.maxExtent_) {
          context.restore();
        }
      }
    };
    circlePixelIndexArrayCache = {};
    ExecutorGroup_default = ExecutorGroup;
  }
});

// node_modules/ol/render/canvas/Immediate.js
var CanvasImmediateRenderer, Immediate_default;
var init_Immediate = __esm({
  "node_modules/ol/render/canvas/Immediate.js"() {
    init_VectorContext();
    init_colorlike();
    init_transform();
    init_canvas();
    init_array();
    init_extent();
    init_math();
    init_transform2();
    init_SimpleGeometry();
    CanvasImmediateRenderer = class extends VectorContext_default {
      /**
       * @param {CanvasRenderingContext2D} context Context.
       * @param {number} pixelRatio Pixel ratio.
       * @param {import("../../extent.js").Extent} extent Extent.
       * @param {import("../../transform.js").Transform} transform Transform.
       * @param {number} viewRotation View rotation.
       * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
       * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
       */
      constructor(context, pixelRatio, extent, transform2, viewRotation, squaredTolerance, userTransform) {
        super();
        this.context_ = context;
        this.pixelRatio_ = pixelRatio;
        this.extent_ = extent;
        this.transform_ = transform2;
        this.transformRotation_ = transform2 ? toFixed(Math.atan2(transform2[1], transform2[0]), 10) : 0;
        this.viewRotation_ = viewRotation;
        this.squaredTolerance_ = squaredTolerance;
        this.userTransform_ = userTransform;
        this.contextFillState_ = null;
        this.contextStrokeState_ = null;
        this.contextTextState_ = null;
        this.fillState_ = null;
        this.strokeState_ = null;
        this.image_ = null;
        this.imageAnchorX_ = 0;
        this.imageAnchorY_ = 0;
        this.imageHeight_ = 0;
        this.imageOpacity_ = 0;
        this.imageOriginX_ = 0;
        this.imageOriginY_ = 0;
        this.imageRotateWithView_ = false;
        this.imageRotation_ = 0;
        this.imageScale_ = [0, 0];
        this.imageWidth_ = 0;
        this.text_ = "";
        this.textOffsetX_ = 0;
        this.textOffsetY_ = 0;
        this.textRotateWithView_ = false;
        this.textRotation_ = 0;
        this.textScale_ = [0, 0];
        this.textFillState_ = null;
        this.textStrokeState_ = null;
        this.textState_ = null;
        this.pixelCoordinates_ = [];
        this.tmpLocalTransform_ = create();
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} offset Offset.
       * @param {number} end End.
       * @param {number} stride Stride.
       * @private
       */
      drawImages_(flatCoordinates, offset, end, stride) {
        if (!this.image_) {
          return;
        }
        const pixelCoordinates = transform2D(
          flatCoordinates,
          offset,
          end,
          stride,
          this.transform_,
          this.pixelCoordinates_
        );
        const context = this.context_;
        const localTransform = this.tmpLocalTransform_;
        const alpha = context.globalAlpha;
        if (this.imageOpacity_ != 1) {
          context.globalAlpha = alpha * this.imageOpacity_;
        }
        let rotation = this.imageRotation_;
        if (this.transformRotation_ === 0) {
          rotation -= this.viewRotation_;
        }
        if (this.imageRotateWithView_) {
          rotation += this.viewRotation_;
        }
        for (let i = 0, ii = pixelCoordinates.length; i < ii; i += 2) {
          const x = pixelCoordinates[i] - this.imageAnchorX_;
          const y = pixelCoordinates[i + 1] - this.imageAnchorY_;
          if (rotation !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
            const centerX = x + this.imageAnchorX_;
            const centerY = y + this.imageAnchorY_;
            compose(
              localTransform,
              centerX,
              centerY,
              1,
              1,
              rotation,
              -centerX,
              -centerY
            );
            context.save();
            context.transform.apply(context, localTransform);
            context.translate(centerX, centerY);
            context.scale(this.imageScale_[0], this.imageScale_[1]);
            context.drawImage(
              this.image_,
              this.imageOriginX_,
              this.imageOriginY_,
              this.imageWidth_,
              this.imageHeight_,
              -this.imageAnchorX_,
              -this.imageAnchorY_,
              this.imageWidth_,
              this.imageHeight_
            );
            context.restore();
          } else {
            context.drawImage(
              this.image_,
              this.imageOriginX_,
              this.imageOriginY_,
              this.imageWidth_,
              this.imageHeight_,
              x,
              y,
              this.imageWidth_,
              this.imageHeight_
            );
          }
        }
        if (this.imageOpacity_ != 1) {
          context.globalAlpha = alpha;
        }
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} offset Offset.
       * @param {number} end End.
       * @param {number} stride Stride.
       * @private
       */
      drawText_(flatCoordinates, offset, end, stride) {
        if (!this.textState_ || this.text_ === "") {
          return;
        }
        if (this.textFillState_) {
          this.setContextFillState_(this.textFillState_);
        }
        if (this.textStrokeState_) {
          this.setContextStrokeState_(this.textStrokeState_);
        }
        this.setContextTextState_(this.textState_);
        const pixelCoordinates = transform2D(
          flatCoordinates,
          offset,
          end,
          stride,
          this.transform_,
          this.pixelCoordinates_
        );
        const context = this.context_;
        let rotation = this.textRotation_;
        if (this.transformRotation_ === 0) {
          rotation -= this.viewRotation_;
        }
        if (this.textRotateWithView_) {
          rotation += this.viewRotation_;
        }
        for (; offset < end; offset += stride) {
          const x = pixelCoordinates[offset] + this.textOffsetX_;
          const y = pixelCoordinates[offset + 1] + this.textOffsetY_;
          if (rotation !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1) {
            context.save();
            context.translate(x - this.textOffsetX_, y - this.textOffsetY_);
            context.rotate(rotation);
            context.translate(this.textOffsetX_, this.textOffsetY_);
            context.scale(this.textScale_[0], this.textScale_[1]);
            if (this.textStrokeState_) {
              context.strokeText(this.text_, 0, 0);
            }
            if (this.textFillState_) {
              context.fillText(this.text_, 0, 0);
            }
            context.restore();
          } else {
            if (this.textStrokeState_) {
              context.strokeText(this.text_, x, y);
            }
            if (this.textFillState_) {
              context.fillText(this.text_, x, y);
            }
          }
        }
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} offset Offset.
       * @param {number} end End.
       * @param {number} stride Stride.
       * @param {boolean} close Close.
       * @private
       * @return {number} end End.
       */
      moveToLineTo_(flatCoordinates, offset, end, stride, close) {
        const context = this.context_;
        const pixelCoordinates = transform2D(
          flatCoordinates,
          offset,
          end,
          stride,
          this.transform_,
          this.pixelCoordinates_
        );
        context.moveTo(pixelCoordinates[0], pixelCoordinates[1]);
        let length = pixelCoordinates.length;
        if (close) {
          length -= 2;
        }
        for (let i = 2; i < length; i += 2) {
          context.lineTo(pixelCoordinates[i], pixelCoordinates[i + 1]);
        }
        if (close) {
          context.closePath();
        }
        return end;
      }
      /**
       * @param {Array<number>} flatCoordinates Flat coordinates.
       * @param {number} offset Offset.
       * @param {Array<number>} ends Ends.
       * @param {number} stride Stride.
       * @private
       * @return {number} End.
       */
      drawRings_(flatCoordinates, offset, ends, stride) {
        for (let i = 0, ii = ends.length; i < ii; ++i) {
          offset = this.moveToLineTo_(
            flatCoordinates,
            offset,
            ends[i],
            stride,
            true
          );
        }
        return offset;
      }
      /**
       * Render a circle geometry into the canvas.  Rendering is immediate and uses
       * the current fill and stroke styles.
       *
       * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
       * @api
       */
      drawCircle(geometry) {
        if (this.squaredTolerance_) {
          geometry = /** @type {import("../../geom/Circle.js").default} */
          geometry.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          );
        }
        if (!intersects(this.extent_, geometry.getExtent())) {
          return;
        }
        if (this.fillState_ || this.strokeState_) {
          if (this.fillState_) {
            this.setContextFillState_(this.fillState_);
          }
          if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
          }
          const pixelCoordinates = transformGeom2D(
            geometry,
            this.transform_,
            this.pixelCoordinates_
          );
          const dx = pixelCoordinates[2] - pixelCoordinates[0];
          const dy = pixelCoordinates[3] - pixelCoordinates[1];
          const radius = Math.sqrt(dx * dx + dy * dy);
          const context = this.context_;
          context.beginPath();
          context.arc(
            pixelCoordinates[0],
            pixelCoordinates[1],
            radius,
            0,
            2 * Math.PI
          );
          if (this.fillState_) {
            context.fill();
          }
          if (this.strokeState_) {
            context.stroke();
          }
        }
        if (this.text_ !== "") {
          this.drawText_(geometry.getCenter(), 0, 2, 2);
        }
      }
      /**
       * Set the rendering style.  Note that since this is an immediate rendering API,
       * any `zIndex` on the provided style will be ignored.
       *
       * @param {import("../../style/Style.js").default} style The rendering style.
       * @api
       */
      setStyle(style) {
        this.setFillStrokeStyle(style.getFill(), style.getStroke());
        this.setImageStyle(style.getImage());
        this.setTextStyle(style.getText());
      }
      /**
       * @param {import("../../transform.js").Transform} transform Transform.
       */
      setTransform(transform2) {
        this.transform_ = transform2;
      }
      /**
       * Render a geometry into the canvas.  Call
       * {@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.
       *
       * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
       * @api
       */
      drawGeometry(geometry) {
        const type = geometry.getType();
        switch (type) {
          case "Point":
            this.drawPoint(
              /** @type {import("../../geom/Point.js").default} */
              geometry
            );
            break;
          case "LineString":
            this.drawLineString(
              /** @type {import("../../geom/LineString.js").default} */
              geometry
            );
            break;
          case "Polygon":
            this.drawPolygon(
              /** @type {import("../../geom/Polygon.js").default} */
              geometry
            );
            break;
          case "MultiPoint":
            this.drawMultiPoint(
              /** @type {import("../../geom/MultiPoint.js").default} */
              geometry
            );
            break;
          case "MultiLineString":
            this.drawMultiLineString(
              /** @type {import("../../geom/MultiLineString.js").default} */
              geometry
            );
            break;
          case "MultiPolygon":
            this.drawMultiPolygon(
              /** @type {import("../../geom/MultiPolygon.js").default} */
              geometry
            );
            break;
          case "GeometryCollection":
            this.drawGeometryCollection(
              /** @type {import("../../geom/GeometryCollection.js").default} */
              geometry
            );
            break;
          case "Circle":
            this.drawCircle(
              /** @type {import("../../geom/Circle.js").default} */
              geometry
            );
            break;
          default:
        }
      }
      /**
       * Render a feature into the canvas.  Note that any `zIndex` on the provided
       * style will be ignored - features are rendered immediately in the order that
       * this method is called.  If you need `zIndex` support, you should be using an
       * {@link module:ol/layer/Vector~VectorLayer} instead.
       *
       * @param {import("../../Feature.js").default} feature Feature.
       * @param {import("../../style/Style.js").default} style Style.
       * @api
       */
      drawFeature(feature, style) {
        const geometry = style.getGeometryFunction()(feature);
        if (!geometry) {
          return;
        }
        this.setStyle(style);
        this.drawGeometry(geometry);
      }
      /**
       * Render a GeometryCollection to the canvas.  Rendering is immediate and
       * uses the current styles appropriate for each geometry in the collection.
       *
       * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
       */
      drawGeometryCollection(geometry) {
        const geometries = geometry.getGeometriesArray();
        for (let i = 0, ii = geometries.length; i < ii; ++i) {
          this.drawGeometry(geometries[i]);
        }
      }
      /**
       * Render a Point geometry into the canvas.  Rendering is immediate and uses
       * the current style.
       *
       * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
       */
      drawPoint(geometry) {
        if (this.squaredTolerance_) {
          geometry = /** @type {import("../../geom/Point.js").default} */
          geometry.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          );
        }
        const flatCoordinates = geometry.getFlatCoordinates();
        const stride = geometry.getStride();
        if (this.image_) {
          this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
        }
        if (this.text_ !== "") {
          this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
        }
      }
      /**
       * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
       * uses the current style.
       *
       * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
       */
      drawMultiPoint(geometry) {
        if (this.squaredTolerance_) {
          geometry = /** @type {import("../../geom/MultiPoint.js").default} */
          geometry.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          );
        }
        const flatCoordinates = geometry.getFlatCoordinates();
        const stride = geometry.getStride();
        if (this.image_) {
          this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
        }
        if (this.text_ !== "") {
          this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
        }
      }
      /**
       * Render a LineString into the canvas.  Rendering is immediate and uses
       * the current style.
       *
       * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
       */
      drawLineString(geometry) {
        if (this.squaredTolerance_) {
          geometry = /** @type {import("../../geom/LineString.js").default} */
          geometry.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          );
        }
        if (!intersects(this.extent_, geometry.getExtent())) {
          return;
        }
        if (this.strokeState_) {
          this.setContextStrokeState_(this.strokeState_);
          const context = this.context_;
          const flatCoordinates = geometry.getFlatCoordinates();
          context.beginPath();
          this.moveToLineTo_(
            flatCoordinates,
            0,
            flatCoordinates.length,
            geometry.getStride(),
            false
          );
          context.stroke();
        }
        if (this.text_ !== "") {
          const flatMidpoint = geometry.getFlatMidpoint();
          this.drawText_(flatMidpoint, 0, 2, 2);
        }
      }
      /**
       * Render a MultiLineString geometry into the canvas.  Rendering is immediate
       * and uses the current style.
       *
       * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
       */
      drawMultiLineString(geometry) {
        if (this.squaredTolerance_) {
          geometry = /** @type {import("../../geom/MultiLineString.js").default} */
          geometry.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          );
        }
        const geometryExtent = geometry.getExtent();
        if (!intersects(this.extent_, geometryExtent)) {
          return;
        }
        if (this.strokeState_) {
          this.setContextStrokeState_(this.strokeState_);
          const context = this.context_;
          const flatCoordinates = geometry.getFlatCoordinates();
          let offset = 0;
          const ends = (
            /** @type {Array<number>} */
            geometry.getEnds()
          );
          const stride = geometry.getStride();
          context.beginPath();
          for (let i = 0, ii = ends.length; i < ii; ++i) {
            offset = this.moveToLineTo_(
              flatCoordinates,
              offset,
              ends[i],
              stride,
              false
            );
          }
          context.stroke();
        }
        if (this.text_ !== "") {
          const flatMidpoints = geometry.getFlatMidpoints();
          this.drawText_(flatMidpoints, 0, flatMidpoints.length, 2);
        }
      }
      /**
       * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
       * the current style.
       *
       * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} geometry Polygon geometry.
       */
      drawPolygon(geometry) {
        if (this.squaredTolerance_) {
          geometry = /** @type {import("../../geom/Polygon.js").default} */
          geometry.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          );
        }
        if (!intersects(this.extent_, geometry.getExtent())) {
          return;
        }
        if (this.strokeState_ || this.fillState_) {
          if (this.fillState_) {
            this.setContextFillState_(this.fillState_);
          }
          if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
          }
          const context = this.context_;
          context.beginPath();
          this.drawRings_(
            geometry.getOrientedFlatCoordinates(),
            0,
            /** @type {Array<number>} */
            geometry.getEnds(),
            geometry.getStride()
          );
          if (this.fillState_) {
            context.fill();
          }
          if (this.strokeState_) {
            context.stroke();
          }
        }
        if (this.text_ !== "") {
          const flatInteriorPoint = geometry.getFlatInteriorPoint();
          this.drawText_(flatInteriorPoint, 0, 2, 2);
        }
      }
      /**
       * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
       * uses the current style.
       * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
       */
      drawMultiPolygon(geometry) {
        if (this.squaredTolerance_) {
          geometry = /** @type {import("../../geom/MultiPolygon.js").default} */
          geometry.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          );
        }
        if (!intersects(this.extent_, geometry.getExtent())) {
          return;
        }
        if (this.strokeState_ || this.fillState_) {
          if (this.fillState_) {
            this.setContextFillState_(this.fillState_);
          }
          if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
          }
          const context = this.context_;
          const flatCoordinates = geometry.getOrientedFlatCoordinates();
          let offset = 0;
          const endss = geometry.getEndss();
          const stride = geometry.getStride();
          context.beginPath();
          for (let i = 0, ii = endss.length; i < ii; ++i) {
            const ends = endss[i];
            offset = this.drawRings_(flatCoordinates, offset, ends, stride);
          }
          if (this.fillState_) {
            context.fill();
          }
          if (this.strokeState_) {
            context.stroke();
          }
        }
        if (this.text_ !== "") {
          const flatInteriorPoints = geometry.getFlatInteriorPoints();
          this.drawText_(flatInteriorPoints, 0, flatInteriorPoints.length, 2);
        }
      }
      /**
       * @param {import("../canvas.js").FillState} fillState Fill state.
       * @private
       */
      setContextFillState_(fillState) {
        const context = this.context_;
        const contextFillState = this.contextFillState_;
        if (!contextFillState) {
          context.fillStyle = fillState.fillStyle;
          this.contextFillState_ = {
            fillStyle: fillState.fillStyle
          };
        } else {
          if (contextFillState.fillStyle != fillState.fillStyle) {
            contextFillState.fillStyle = fillState.fillStyle;
            context.fillStyle = fillState.fillStyle;
          }
        }
      }
      /**
       * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
       * @private
       */
      setContextStrokeState_(strokeState) {
        const context = this.context_;
        const contextStrokeState = this.contextStrokeState_;
        if (!contextStrokeState) {
          context.lineCap = strokeState.lineCap;
          context.setLineDash(strokeState.lineDash);
          context.lineDashOffset = strokeState.lineDashOffset;
          context.lineJoin = strokeState.lineJoin;
          context.lineWidth = strokeState.lineWidth;
          context.miterLimit = strokeState.miterLimit;
          context.strokeStyle = strokeState.strokeStyle;
          this.contextStrokeState_ = {
            lineCap: strokeState.lineCap,
            lineDash: strokeState.lineDash,
            lineDashOffset: strokeState.lineDashOffset,
            lineJoin: strokeState.lineJoin,
            lineWidth: strokeState.lineWidth,
            miterLimit: strokeState.miterLimit,
            strokeStyle: strokeState.strokeStyle
          };
        } else {
          if (contextStrokeState.lineCap != strokeState.lineCap) {
            contextStrokeState.lineCap = strokeState.lineCap;
            context.lineCap = strokeState.lineCap;
          }
          if (!equals(contextStrokeState.lineDash, strokeState.lineDash)) {
            context.setLineDash(
              contextStrokeState.lineDash = strokeState.lineDash
            );
          }
          if (contextStrokeState.lineDashOffset != strokeState.lineDashOffset) {
            contextStrokeState.lineDashOffset = strokeState.lineDashOffset;
            context.lineDashOffset = strokeState.lineDashOffset;
          }
          if (contextStrokeState.lineJoin != strokeState.lineJoin) {
            contextStrokeState.lineJoin = strokeState.lineJoin;
            context.lineJoin = strokeState.lineJoin;
          }
          if (contextStrokeState.lineWidth != strokeState.lineWidth) {
            contextStrokeState.lineWidth = strokeState.lineWidth;
            context.lineWidth = strokeState.lineWidth;
          }
          if (contextStrokeState.miterLimit != strokeState.miterLimit) {
            contextStrokeState.miterLimit = strokeState.miterLimit;
            context.miterLimit = strokeState.miterLimit;
          }
          if (contextStrokeState.strokeStyle != strokeState.strokeStyle) {
            contextStrokeState.strokeStyle = strokeState.strokeStyle;
            context.strokeStyle = strokeState.strokeStyle;
          }
        }
      }
      /**
       * @param {import("../canvas.js").TextState} textState Text state.
       * @private
       */
      setContextTextState_(textState) {
        const context = this.context_;
        const contextTextState = this.contextTextState_;
        const textAlign = textState.textAlign ? textState.textAlign : defaultTextAlign;
        if (!contextTextState) {
          context.font = textState.font;
          context.textAlign = textAlign;
          context.textBaseline = textState.textBaseline;
          this.contextTextState_ = {
            font: textState.font,
            textAlign,
            textBaseline: textState.textBaseline
          };
        } else {
          if (contextTextState.font != textState.font) {
            contextTextState.font = textState.font;
            context.font = textState.font;
          }
          if (contextTextState.textAlign != textAlign) {
            contextTextState.textAlign = textAlign;
            context.textAlign = textAlign;
          }
          if (contextTextState.textBaseline != textState.textBaseline) {
            contextTextState.textBaseline = textState.textBaseline;
            context.textBaseline = textState.textBaseline;
          }
        }
      }
      /**
       * Set the fill and stroke style for subsequent draw operations.  To clear
       * either fill or stroke styles, pass null for the appropriate parameter.
       *
       * @param {import("../../style/Fill.js").default} fillStyle Fill style.
       * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
       */
      setFillStrokeStyle(fillStyle, strokeStyle) {
        if (!fillStyle) {
          this.fillState_ = null;
        } else {
          const fillStyleColor = fillStyle.getColor();
          this.fillState_ = {
            fillStyle: asColorLike(
              fillStyleColor ? fillStyleColor : defaultFillStyle
            )
          };
        }
        if (!strokeStyle) {
          this.strokeState_ = null;
        } else {
          const strokeStyleColor = strokeStyle.getColor();
          const strokeStyleLineCap = strokeStyle.getLineCap();
          const strokeStyleLineDash = strokeStyle.getLineDash();
          const strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
          const strokeStyleLineJoin = strokeStyle.getLineJoin();
          const strokeStyleWidth = strokeStyle.getWidth();
          const strokeStyleMiterLimit = strokeStyle.getMiterLimit();
          const lineDash = strokeStyleLineDash ? strokeStyleLineDash : defaultLineDash;
          this.strokeState_ = {
            lineCap: strokeStyleLineCap !== void 0 ? strokeStyleLineCap : defaultLineCap,
            lineDash: this.pixelRatio_ === 1 ? lineDash : lineDash.map((n) => n * this.pixelRatio_),
            lineDashOffset: (strokeStyleLineDashOffset ? strokeStyleLineDashOffset : defaultLineDashOffset) * this.pixelRatio_,
            lineJoin: strokeStyleLineJoin !== void 0 ? strokeStyleLineJoin : defaultLineJoin,
            lineWidth: (strokeStyleWidth !== void 0 ? strokeStyleWidth : defaultLineWidth) * this.pixelRatio_,
            miterLimit: strokeStyleMiterLimit !== void 0 ? strokeStyleMiterLimit : defaultMiterLimit,
            strokeStyle: asColorLike(
              strokeStyleColor ? strokeStyleColor : defaultStrokeStyle
            )
          };
        }
      }
      /**
       * Set the image style for subsequent draw operations.  Pass null to remove
       * the image style.
       *
       * @param {import("../../style/Image.js").default} imageStyle Image style.
       */
      setImageStyle(imageStyle) {
        let imageSize;
        if (!imageStyle || !(imageSize = imageStyle.getSize())) {
          this.image_ = null;
          return;
        }
        const imagePixelRatio = imageStyle.getPixelRatio(this.pixelRatio_);
        const imageAnchor = imageStyle.getAnchor();
        const imageOrigin = imageStyle.getOrigin();
        this.image_ = imageStyle.getImage(this.pixelRatio_);
        this.imageAnchorX_ = imageAnchor[0] * imagePixelRatio;
        this.imageAnchorY_ = imageAnchor[1] * imagePixelRatio;
        this.imageHeight_ = imageSize[1] * imagePixelRatio;
        this.imageOpacity_ = imageStyle.getOpacity();
        this.imageOriginX_ = imageOrigin[0];
        this.imageOriginY_ = imageOrigin[1];
        this.imageRotateWithView_ = imageStyle.getRotateWithView();
        this.imageRotation_ = imageStyle.getRotation();
        const imageScale = imageStyle.getScaleArray();
        this.imageScale_ = [
          imageScale[0] * this.pixelRatio_ / imagePixelRatio,
          imageScale[1] * this.pixelRatio_ / imagePixelRatio
        ];
        this.imageWidth_ = imageSize[0] * imagePixelRatio;
      }
      /**
       * Set the text style for subsequent draw operations.  Pass null to
       * remove the text style.
       *
       * @param {import("../../style/Text.js").default} textStyle Text style.
       */
      setTextStyle(textStyle) {
        if (!textStyle) {
          this.text_ = "";
        } else {
          const textFillStyle = textStyle.getFill();
          if (!textFillStyle) {
            this.textFillState_ = null;
          } else {
            const textFillStyleColor = textFillStyle.getColor();
            this.textFillState_ = {
              fillStyle: asColorLike(
                textFillStyleColor ? textFillStyleColor : defaultFillStyle
              )
            };
          }
          const textStrokeStyle = textStyle.getStroke();
          if (!textStrokeStyle) {
            this.textStrokeState_ = null;
          } else {
            const textStrokeStyleColor = textStrokeStyle.getColor();
            const textStrokeStyleLineCap = textStrokeStyle.getLineCap();
            const textStrokeStyleLineDash = textStrokeStyle.getLineDash();
            const textStrokeStyleLineDashOffset = textStrokeStyle.getLineDashOffset();
            const textStrokeStyleLineJoin = textStrokeStyle.getLineJoin();
            const textStrokeStyleWidth = textStrokeStyle.getWidth();
            const textStrokeStyleMiterLimit = textStrokeStyle.getMiterLimit();
            this.textStrokeState_ = {
              lineCap: textStrokeStyleLineCap !== void 0 ? textStrokeStyleLineCap : defaultLineCap,
              lineDash: textStrokeStyleLineDash ? textStrokeStyleLineDash : defaultLineDash,
              lineDashOffset: textStrokeStyleLineDashOffset ? textStrokeStyleLineDashOffset : defaultLineDashOffset,
              lineJoin: textStrokeStyleLineJoin !== void 0 ? textStrokeStyleLineJoin : defaultLineJoin,
              lineWidth: textStrokeStyleWidth !== void 0 ? textStrokeStyleWidth : defaultLineWidth,
              miterLimit: textStrokeStyleMiterLimit !== void 0 ? textStrokeStyleMiterLimit : defaultMiterLimit,
              strokeStyle: asColorLike(
                textStrokeStyleColor ? textStrokeStyleColor : defaultStrokeStyle
              )
            };
          }
          const textFont = textStyle.getFont();
          const textOffsetX = textStyle.getOffsetX();
          const textOffsetY = textStyle.getOffsetY();
          const textRotateWithView = textStyle.getRotateWithView();
          const textRotation = textStyle.getRotation();
          const textScale = textStyle.getScaleArray();
          const textText = textStyle.getText();
          const textTextAlign = textStyle.getTextAlign();
          const textTextBaseline = textStyle.getTextBaseline();
          this.textState_ = {
            font: textFont !== void 0 ? textFont : defaultFont,
            textAlign: textTextAlign !== void 0 ? textTextAlign : defaultTextAlign,
            textBaseline: textTextBaseline !== void 0 ? textTextBaseline : defaultTextBaseline
          };
          this.text_ = textText !== void 0 ? Array.isArray(textText) ? textText.reduce((acc, t, i) => acc += i % 2 ? " " : t, "") : textText : "";
          this.textOffsetX_ = textOffsetX !== void 0 ? this.pixelRatio_ * textOffsetX : 0;
          this.textOffsetY_ = textOffsetY !== void 0 ? this.pixelRatio_ * textOffsetY : 0;
          this.textRotateWithView_ = textRotateWithView !== void 0 ? textRotateWithView : false;
          this.textRotation_ = textRotation !== void 0 ? textRotation : 0;
          this.textScale_ = [
            this.pixelRatio_ * textScale[0],
            this.pixelRatio_ * textScale[1]
          ];
        }
      }
    };
    Immediate_default = CanvasImmediateRenderer;
  }
});

// node_modules/ol/style.js
var init_style2 = __esm({
  "node_modules/ol/style.js"() {
    init_Icon();
    init_Style();
  }
});

// node_modules/ol/render/canvas/hitdetect.js
function createHitDetectionImageData(size, transforms2, features, styleFunction, extent, resolution, rotation) {
  const width = size[0] * HIT_DETECT_RESOLUTION;
  const height = size[1] * HIT_DETECT_RESOLUTION;
  const context = createCanvasContext2D(width, height);
  context.imageSmoothingEnabled = false;
  const canvas = context.canvas;
  const renderer = new Immediate_default(
    context,
    HIT_DETECT_RESOLUTION,
    extent,
    null,
    rotation
  );
  const featureCount = features.length;
  const indexFactor = Math.floor((256 * 256 * 256 - 1) / featureCount);
  const featuresByZIndex = {};
  for (let i = 1; i <= featureCount; ++i) {
    const feature = features[i - 1];
    const featureStyleFunction = feature.getStyleFunction() || styleFunction;
    if (!featureStyleFunction) {
      continue;
    }
    let styles = featureStyleFunction(feature, resolution);
    if (!styles) {
      continue;
    }
    if (!Array.isArray(styles)) {
      styles = [styles];
    }
    const index = i * indexFactor;
    const color = index.toString(16).padStart(7, "#00000");
    for (let j = 0, jj = styles.length; j < jj; ++j) {
      const originalStyle = styles[j];
      const geometry = originalStyle.getGeometryFunction()(feature);
      if (!geometry || !intersects(extent, geometry.getExtent())) {
        continue;
      }
      const style = originalStyle.clone();
      const fill = style.getFill();
      if (fill) {
        fill.setColor(color);
      }
      const stroke = style.getStroke();
      if (stroke) {
        stroke.setColor(color);
        stroke.setLineDash(null);
      }
      style.setText(void 0);
      const image = originalStyle.getImage();
      if (image) {
        const imgSize = image.getImageSize();
        if (!imgSize) {
          continue;
        }
        const imgContext = createCanvasContext2D(
          imgSize[0],
          imgSize[1],
          void 0,
          { alpha: false }
        );
        const img = imgContext.canvas;
        imgContext.fillStyle = color;
        imgContext.fillRect(0, 0, img.width, img.height);
        style.setImage(
          new Icon_default({
            img,
            anchor: image.getAnchor(),
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            offset: image.getOrigin(),
            opacity: 1,
            size: image.getSize(),
            scale: image.getScale(),
            rotation: image.getRotation(),
            rotateWithView: image.getRotateWithView()
          })
        );
      }
      const zIndex = style.getZIndex() || 0;
      let byGeometryType = featuresByZIndex[zIndex];
      if (!byGeometryType) {
        byGeometryType = {};
        featuresByZIndex[zIndex] = byGeometryType;
        byGeometryType["Polygon"] = [];
        byGeometryType["Circle"] = [];
        byGeometryType["LineString"] = [];
        byGeometryType["Point"] = [];
      }
      const type = geometry.getType();
      if (type === "GeometryCollection") {
        const geometries = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          geometry.getGeometriesArrayRecursive()
        );
        for (let i2 = 0, ii = geometries.length; i2 < ii; ++i2) {
          const geometry2 = geometries[i2];
          byGeometryType[geometry2.getType().replace("Multi", "")].push(
            geometry2,
            style
          );
        }
      } else {
        byGeometryType[type.replace("Multi", "")].push(geometry, style);
      }
    }
  }
  const zIndexKeys = Object.keys(featuresByZIndex).map(Number).sort(ascending);
  for (let i = 0, ii = zIndexKeys.length; i < ii; ++i) {
    const byGeometryType = featuresByZIndex[zIndexKeys[i]];
    for (const type in byGeometryType) {
      const geomAndStyle = byGeometryType[type];
      for (let j = 0, jj = geomAndStyle.length; j < jj; j += 2) {
        renderer.setStyle(geomAndStyle[j + 1]);
        for (let k = 0, kk = transforms2.length; k < kk; ++k) {
          renderer.setTransform(transforms2[k]);
          renderer.drawGeometry(geomAndStyle[j]);
        }
      }
    }
  }
  return context.getImageData(0, 0, canvas.width, canvas.height);
}
function hitDetect(pixel, features, imageData) {
  const resultFeatures = [];
  if (imageData) {
    const x = Math.floor(Math.round(pixel[0]) * HIT_DETECT_RESOLUTION);
    const y = Math.floor(Math.round(pixel[1]) * HIT_DETECT_RESOLUTION);
    const index = (clamp(x, 0, imageData.width - 1) + clamp(y, 0, imageData.height - 1) * imageData.width) * 4;
    const r = imageData.data[index];
    const g = imageData.data[index + 1];
    const b = imageData.data[index + 2];
    const i = b + 256 * (g + 256 * r);
    const indexFactor = Math.floor((256 * 256 * 256 - 1) / features.length);
    if (i && i % indexFactor === 0) {
      resultFeatures.push(features[i / indexFactor - 1]);
    }
  }
  return resultFeatures;
}
var HIT_DETECT_RESOLUTION;
var init_hitdetect = __esm({
  "node_modules/ol/render/canvas/hitdetect.js"() {
    init_Immediate();
    init_style2();
    init_array();
    init_math();
    init_dom();
    init_extent();
    HIT_DETECT_RESOLUTION = 0.5;
  }
});

// node_modules/ol/renderer/vector.js
function defaultOrder(feature1, feature2) {
  return parseInt(getUid(feature1), 10) - parseInt(getUid(feature2), 10);
}
function getSquaredTolerance(resolution, pixelRatio) {
  const tolerance = getTolerance(resolution, pixelRatio);
  return tolerance * tolerance;
}
function getTolerance(resolution, pixelRatio) {
  return SIMPLIFY_TOLERANCE * resolution / pixelRatio;
}
function renderCircleGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (fillStyle || strokeStyle) {
    const circleReplay = builderGroup.getBuilder(style.getZIndex(), "Circle");
    circleReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    circleReplay.drawCircle(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(
      style.getZIndex(),
      "Text"
    );
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}
function renderFeature(replayGroup, feature, style, squaredTolerance, listener, transform2, declutterBuilderGroup) {
  let loading = false;
  const imageStyle = style.getImage();
  if (imageStyle) {
    const imageState = imageStyle.getImageState();
    if (imageState == ImageState_default.LOADED || imageState == ImageState_default.ERROR) {
      imageStyle.unlistenImageChange(listener);
    } else {
      if (imageState == ImageState_default.IDLE) {
        imageStyle.load();
      }
      imageStyle.listenImageChange(listener);
      loading = true;
    }
  }
  renderFeatureInternal(
    replayGroup,
    feature,
    style,
    squaredTolerance,
    transform2,
    declutterBuilderGroup
  );
  return loading;
}
function renderFeatureInternal(replayGroup, feature, style, squaredTolerance, transform2, declutterBuilderGroup) {
  const geometry = style.getGeometryFunction()(feature);
  if (!geometry) {
    return;
  }
  const simplifiedGeometry = geometry.simplifyTransformed(
    squaredTolerance,
    transform2
  );
  const renderer = style.getRenderer();
  if (renderer) {
    renderGeometry(replayGroup, simplifiedGeometry, style, feature);
  } else {
    const geometryRenderer = GEOMETRY_RENDERERS[simplifiedGeometry.getType()];
    geometryRenderer(
      replayGroup,
      simplifiedGeometry,
      style,
      feature,
      declutterBuilderGroup
    );
  }
}
function renderGeometry(replayGroup, geometry, style, feature) {
  if (geometry.getType() == "GeometryCollection") {
    const geometries = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      geometry.getGeometries()
    );
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      renderGeometry(replayGroup, geometries[i], style, feature);
    }
    return;
  }
  const replay = replayGroup.getBuilder(style.getZIndex(), "Default");
  replay.drawCustom(
    /** @type {import("../geom/SimpleGeometry.js").default} */
    geometry,
    feature,
    style.getRenderer(),
    style.getHitDetectionRenderer()
  );
}
function renderGeometryCollectionGeometry(replayGroup, geometry, style, feature, declutterBuilderGroup) {
  const geometries = geometry.getGeometriesArray();
  let i, ii;
  for (i = 0, ii = geometries.length; i < ii; ++i) {
    const geometryRenderer = GEOMETRY_RENDERERS[geometries[i].getType()];
    geometryRenderer(
      replayGroup,
      geometries[i],
      style,
      feature,
      declutterBuilderGroup
    );
  }
}
function renderLineStringGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const strokeStyle = style.getStroke();
  if (strokeStyle) {
    const lineStringReplay = builderGroup.getBuilder(
      style.getZIndex(),
      "LineString"
    );
    lineStringReplay.setFillStrokeStyle(null, strokeStyle);
    lineStringReplay.drawLineString(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(
      style.getZIndex(),
      "Text"
    );
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}
function renderMultiLineStringGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const strokeStyle = style.getStroke();
  if (strokeStyle) {
    const lineStringReplay = builderGroup.getBuilder(
      style.getZIndex(),
      "LineString"
    );
    lineStringReplay.setFillStrokeStyle(null, strokeStyle);
    lineStringReplay.drawMultiLineString(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(
      style.getZIndex(),
      "Text"
    );
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}
function renderMultiPolygonGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (strokeStyle || fillStyle) {
    const polygonReplay = builderGroup.getBuilder(style.getZIndex(), "Polygon");
    polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    polygonReplay.drawMultiPolygon(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(
      style.getZIndex(),
      "Text"
    );
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}
function renderPointGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const imageStyle = style.getImage();
  const textStyle = style.getText();
  let declutterImageWithText;
  if (imageStyle) {
    if (imageStyle.getImageState() != ImageState_default.LOADED) {
      return;
    }
    let imageBuilderGroup = builderGroup;
    if (declutterBuilderGroup) {
      const declutterMode = imageStyle.getDeclutterMode();
      if (declutterMode !== "none") {
        imageBuilderGroup = declutterBuilderGroup;
        if (declutterMode === "obstacle") {
          const imageReplay2 = builderGroup.getBuilder(
            style.getZIndex(),
            "Image"
          );
          imageReplay2.setImageStyle(imageStyle, declutterImageWithText);
          imageReplay2.drawPoint(geometry, feature);
        } else if (textStyle && textStyle.getText()) {
          declutterImageWithText = {};
        }
      }
    }
    const imageReplay = imageBuilderGroup.getBuilder(
      style.getZIndex(),
      "Image"
    );
    imageReplay.setImageStyle(imageStyle, declutterImageWithText);
    imageReplay.drawPoint(geometry, feature);
  }
  if (textStyle && textStyle.getText()) {
    let textBuilderGroup = builderGroup;
    if (declutterBuilderGroup) {
      textBuilderGroup = declutterBuilderGroup;
    }
    const textReplay = textBuilderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle, declutterImageWithText);
    textReplay.drawText(geometry, feature);
  }
}
function renderMultiPointGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const imageStyle = style.getImage();
  const textStyle = style.getText();
  let declutterImageWithText;
  if (imageStyle) {
    if (imageStyle.getImageState() != ImageState_default.LOADED) {
      return;
    }
    let imageBuilderGroup = builderGroup;
    if (declutterBuilderGroup) {
      const declutterMode = imageStyle.getDeclutterMode();
      if (declutterMode !== "none") {
        imageBuilderGroup = declutterBuilderGroup;
        if (declutterMode === "obstacle") {
          const imageReplay2 = builderGroup.getBuilder(
            style.getZIndex(),
            "Image"
          );
          imageReplay2.setImageStyle(imageStyle, declutterImageWithText);
          imageReplay2.drawMultiPoint(geometry, feature);
        } else if (textStyle && textStyle.getText()) {
          declutterImageWithText = {};
        }
      }
    }
    const imageReplay = imageBuilderGroup.getBuilder(
      style.getZIndex(),
      "Image"
    );
    imageReplay.setImageStyle(imageStyle, declutterImageWithText);
    imageReplay.drawMultiPoint(geometry, feature);
  }
  if (textStyle && textStyle.getText()) {
    let textBuilderGroup = builderGroup;
    if (declutterBuilderGroup) {
      textBuilderGroup = declutterBuilderGroup;
    }
    const textReplay = textBuilderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle, declutterImageWithText);
    textReplay.drawText(geometry, feature);
  }
}
function renderPolygonGeometry(builderGroup, geometry, style, feature, declutterBuilderGroup) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (fillStyle || strokeStyle) {
    const polygonReplay = builderGroup.getBuilder(style.getZIndex(), "Polygon");
    polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    polygonReplay.drawPolygon(geometry, feature);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = (declutterBuilderGroup || builderGroup).getBuilder(
      style.getZIndex(),
      "Text"
    );
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}
var SIMPLIFY_TOLERANCE, GEOMETRY_RENDERERS;
var init_vector = __esm({
  "node_modules/ol/renderer/vector.js"() {
    init_ImageState();
    init_util();
    SIMPLIFY_TOLERANCE = 0.5;
    GEOMETRY_RENDERERS = {
      "Point": renderPointGeometry,
      "LineString": renderLineStringGeometry,
      "Polygon": renderPolygonGeometry,
      "MultiPoint": renderMultiPointGeometry,
      "MultiLineString": renderMultiLineStringGeometry,
      "MultiPolygon": renderMultiPolygonGeometry,
      "GeometryCollection": renderGeometryCollectionGeometry,
      "Circle": renderCircleGeometry
    };
  }
});

// node_modules/ol/renderer/canvas/VectorLayer.js
var CanvasVectorLayerRenderer, VectorLayer_default;
var init_VectorLayer = __esm({
  "node_modules/ol/renderer/canvas/VectorLayer.js"() {
    init_BuilderGroup();
    init_Layer3();
    init_ExecutorGroup();
    init_EventType2();
    init_ViewHint();
    init_hitdetect();
    init_transform();
    init_extent();
    init_dom();
    init_vector();
    init_array();
    init_proj();
    init_util();
    init_coordinate();
    CanvasVectorLayerRenderer = class extends Layer_default3 {
      /**
       * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
       */
      constructor(vectorLayer) {
        super(vectorLayer);
        this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this);
        this.animatingOrInteracting_;
        this.hitDetectionImageData_ = null;
        this.renderedFeatures_ = null;
        this.renderedRevision_ = -1;
        this.renderedResolution_ = NaN;
        this.renderedExtent_ = createEmpty();
        this.wrappedRenderedExtent_ = createEmpty();
        this.renderedRotation_;
        this.renderedCenter_ = null;
        this.renderedProjection_ = null;
        this.renderedRenderOrder_ = null;
        this.replayGroup_ = null;
        this.replayGroupChanged = true;
        this.declutterExecutorGroup = null;
        this.clipping = true;
        this.compositionContext_ = null;
        this.opacity_ = 1;
      }
      /**
       * @param {ExecutorGroup} executorGroup Executor group.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       * @param {import("rbush").default} [declutterTree] Declutter tree.
       */
      renderWorlds(executorGroup, frameState, declutterTree) {
        const extent = frameState.extent;
        const viewState = frameState.viewState;
        const center = viewState.center;
        const resolution = viewState.resolution;
        const projection = viewState.projection;
        const rotation = viewState.rotation;
        const projectionExtent = projection.getExtent();
        const vectorSource = this.getLayer().getSource();
        const pixelRatio = frameState.pixelRatio;
        const viewHints = frameState.viewHints;
        const snapToPixel = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
        const context = this.compositionContext_;
        const width = Math.round(frameState.size[0] * pixelRatio);
        const height = Math.round(frameState.size[1] * pixelRatio);
        const multiWorld = vectorSource.getWrapX() && projection.canWrapX();
        const worldWidth = multiWorld ? getWidth(projectionExtent) : null;
        const endWorld = multiWorld ? Math.ceil((extent[2] - projectionExtent[2]) / worldWidth) + 1 : 1;
        let world = multiWorld ? Math.floor((extent[0] - projectionExtent[0]) / worldWidth) : 0;
        do {
          const transform2 = this.getRenderTransform(
            center,
            resolution,
            rotation,
            pixelRatio,
            width,
            height,
            world * worldWidth
          );
          executorGroup.execute(
            context,
            1,
            transform2,
            rotation,
            snapToPixel,
            void 0,
            declutterTree
          );
        } while (++world < endWorld);
      }
      setupCompositionContext_() {
        if (this.opacity_ !== 1) {
          const compositionContext = createCanvasContext2D(
            this.context.canvas.width,
            this.context.canvas.height,
            canvasPool2
          );
          this.compositionContext_ = compositionContext;
        } else {
          this.compositionContext_ = this.context;
        }
      }
      releaseCompositionContext_() {
        if (this.opacity_ !== 1) {
          const alpha = this.context.globalAlpha;
          this.context.globalAlpha = this.opacity_;
          this.context.drawImage(this.compositionContext_.canvas, 0, 0);
          this.context.globalAlpha = alpha;
          releaseCanvas(this.compositionContext_);
          canvasPool2.push(this.compositionContext_.canvas);
          this.compositionContext_ = null;
        }
      }
      /**
       * Render declutter items for this layer
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       */
      renderDeclutter(frameState) {
        if (this.declutterExecutorGroup) {
          this.setupCompositionContext_();
          this.renderWorlds(
            this.declutterExecutorGroup,
            frameState,
            frameState.declutterTree
          );
          this.releaseCompositionContext_();
        }
      }
      /**
       * Render the layer.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       * @param {HTMLElement|null} target Target that may be used to render content to.
       * @return {HTMLElement|null} The rendered element.
       */
      renderFrame(frameState, target) {
        const pixelRatio = frameState.pixelRatio;
        const layerState = frameState.layerStatesArray[frameState.layerIndex];
        makeScale(this.pixelTransform, 1 / pixelRatio, 1 / pixelRatio);
        makeInverse(this.inversePixelTransform, this.pixelTransform);
        const canvasTransform = toString(this.pixelTransform);
        this.useContainer(target, canvasTransform, this.getBackground(frameState));
        const context = this.context;
        const canvas = context.canvas;
        const replayGroup = this.replayGroup_;
        const declutterExecutorGroup = this.declutterExecutorGroup;
        let render2 = replayGroup && !replayGroup.isEmpty() || declutterExecutorGroup && !declutterExecutorGroup.isEmpty();
        if (!render2) {
          const hasRenderListeners = this.getLayer().hasListener(EventType_default2.PRERENDER) || this.getLayer().hasListener(EventType_default2.POSTRENDER);
          if (!hasRenderListeners) {
            return null;
          }
        }
        const width = Math.round(frameState.size[0] * pixelRatio);
        const height = Math.round(frameState.size[1] * pixelRatio);
        if (canvas.width != width || canvas.height != height) {
          canvas.width = width;
          canvas.height = height;
          if (canvas.style.transform !== canvasTransform) {
            canvas.style.transform = canvasTransform;
          }
        } else if (!this.containerReused) {
          context.clearRect(0, 0, width, height);
        }
        this.preRender(context, frameState);
        const viewState = frameState.viewState;
        const projection = viewState.projection;
        this.opacity_ = layerState.opacity;
        this.setupCompositionContext_();
        let clipped = false;
        if (render2 && layerState.extent && this.clipping) {
          const layerExtent = fromUserExtent(layerState.extent, projection);
          render2 = intersects(layerExtent, frameState.extent);
          clipped = render2 && !containsExtent(layerExtent, frameState.extent);
          if (clipped) {
            this.clipUnrotated(this.compositionContext_, frameState, layerExtent);
          }
        }
        if (render2) {
          this.renderWorlds(replayGroup, frameState);
        }
        if (clipped) {
          this.compositionContext_.restore();
        }
        this.releaseCompositionContext_();
        this.postRender(context, frameState);
        if (this.renderedRotation_ !== viewState.rotation) {
          this.renderedRotation_ = viewState.rotation;
          this.hitDetectionImageData_ = null;
        }
        return this.container;
      }
      /**
       * Asynchronous layer level hit detection.
       * @param {import("../../pixel.js").Pixel} pixel Pixel.
       * @return {Promise<Array<import("../../Feature").default>>} Promise
       * that resolves with an array of features.
       */
      getFeatures(pixel) {
        return new Promise((resolve) => {
          if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
            const size = [this.context.canvas.width, this.context.canvas.height];
            apply(this.pixelTransform, size);
            const center = this.renderedCenter_;
            const resolution = this.renderedResolution_;
            const rotation = this.renderedRotation_;
            const projection = this.renderedProjection_;
            const extent = this.wrappedRenderedExtent_;
            const layer = this.getLayer();
            const transforms2 = [];
            const width = size[0] * HIT_DETECT_RESOLUTION;
            const height = size[1] * HIT_DETECT_RESOLUTION;
            transforms2.push(
              this.getRenderTransform(
                center,
                resolution,
                rotation,
                HIT_DETECT_RESOLUTION,
                width,
                height,
                0
              ).slice()
            );
            const source = layer.getSource();
            const projectionExtent = projection.getExtent();
            if (source.getWrapX() && projection.canWrapX() && !containsExtent(projectionExtent, extent)) {
              let startX = extent[0];
              const worldWidth = getWidth(projectionExtent);
              let world = 0;
              let offsetX;
              while (startX < projectionExtent[0]) {
                --world;
                offsetX = worldWidth * world;
                transforms2.push(
                  this.getRenderTransform(
                    center,
                    resolution,
                    rotation,
                    HIT_DETECT_RESOLUTION,
                    width,
                    height,
                    offsetX
                  ).slice()
                );
                startX += worldWidth;
              }
              world = 0;
              startX = extent[2];
              while (startX > projectionExtent[2]) {
                ++world;
                offsetX = worldWidth * world;
                transforms2.push(
                  this.getRenderTransform(
                    center,
                    resolution,
                    rotation,
                    HIT_DETECT_RESOLUTION,
                    width,
                    height,
                    offsetX
                  ).slice()
                );
                startX -= worldWidth;
              }
            }
            this.hitDetectionImageData_ = createHitDetectionImageData(
              size,
              transforms2,
              this.renderedFeatures_,
              layer.getStyleFunction(),
              extent,
              resolution,
              rotation
            );
          }
          resolve(
            hitDetect(pixel, this.renderedFeatures_, this.hitDetectionImageData_)
          );
        });
      }
      /**
       * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       * @param {number} hitTolerance Hit tolerance in pixels.
       * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
       * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
       * @return {T|undefined} Callback result.
       * @template T
       */
      forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
        if (!this.replayGroup_) {
          return void 0;
        }
        const resolution = frameState.viewState.resolution;
        const rotation = frameState.viewState.rotation;
        const layer = this.getLayer();
        const features = {};
        const featureCallback = function(feature, geometry, distanceSq) {
          const key = getUid(feature);
          const match = features[key];
          if (!match) {
            if (distanceSq === 0) {
              features[key] = true;
              return callback(feature, layer, geometry);
            }
            matches.push(
              features[key] = {
                feature,
                layer,
                geometry,
                distanceSq,
                callback
              }
            );
          } else if (match !== true && distanceSq < match.distanceSq) {
            if (distanceSq === 0) {
              features[key] = true;
              matches.splice(matches.lastIndexOf(match), 1);
              return callback(feature, layer, geometry);
            }
            match.geometry = geometry;
            match.distanceSq = distanceSq;
          }
          return void 0;
        };
        let result;
        const executorGroups = [this.replayGroup_];
        if (this.declutterExecutorGroup) {
          executorGroups.push(this.declutterExecutorGroup);
        }
        executorGroups.some((executorGroup) => {
          return result = executorGroup.forEachFeatureAtCoordinate(
            coordinate,
            resolution,
            rotation,
            hitTolerance,
            featureCallback,
            executorGroup === this.declutterExecutorGroup && frameState.declutterTree ? frameState.declutterTree.all().map((item) => item.value) : null
          );
        });
        return result;
      }
      /**
       * Perform action necessary to get the layer rendered after new fonts have loaded
       */
      handleFontsChanged() {
        const layer = this.getLayer();
        if (layer.getVisible() && this.replayGroup_) {
          layer.changed();
        }
      }
      /**
       * Handle changes in image style state.
       * @param {import("../../events/Event.js").default} event Image style change event.
       * @private
       */
      handleStyleImageChange_(event) {
        this.renderIfReadyAndVisible();
      }
      /**
       * Determine whether render should be called.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       * @return {boolean} Layer is ready to be rendered.
       */
      prepareFrame(frameState) {
        const vectorLayer = this.getLayer();
        const vectorSource = vectorLayer.getSource();
        if (!vectorSource) {
          return false;
        }
        const animating = frameState.viewHints[ViewHint_default.ANIMATING];
        const interacting = frameState.viewHints[ViewHint_default.INTERACTING];
        const updateWhileAnimating = vectorLayer.getUpdateWhileAnimating();
        const updateWhileInteracting = vectorLayer.getUpdateWhileInteracting();
        if (this.ready && !updateWhileAnimating && animating || !updateWhileInteracting && interacting) {
          this.animatingOrInteracting_ = true;
          return true;
        }
        this.animatingOrInteracting_ = false;
        const frameStateExtent = frameState.extent;
        const viewState = frameState.viewState;
        const projection = viewState.projection;
        const resolution = viewState.resolution;
        const pixelRatio = frameState.pixelRatio;
        const vectorLayerRevision = vectorLayer.getRevision();
        const vectorLayerRenderBuffer = vectorLayer.getRenderBuffer();
        let vectorLayerRenderOrder = vectorLayer.getRenderOrder();
        if (vectorLayerRenderOrder === void 0) {
          vectorLayerRenderOrder = defaultOrder;
        }
        const center = viewState.center.slice();
        const extent = buffer(
          frameStateExtent,
          vectorLayerRenderBuffer * resolution
        );
        const renderedExtent = extent.slice();
        const loadExtents = [extent.slice()];
        const projectionExtent = projection.getExtent();
        if (vectorSource.getWrapX() && projection.canWrapX() && !containsExtent(projectionExtent, frameState.extent)) {
          const worldWidth = getWidth(projectionExtent);
          const gutter = Math.max(getWidth(extent) / 2, worldWidth);
          extent[0] = projectionExtent[0] - gutter;
          extent[2] = projectionExtent[2] + gutter;
          wrapX2(center, projection);
          const loadExtent = wrapX(loadExtents[0], projection);
          if (loadExtent[0] < projectionExtent[0] && loadExtent[2] < projectionExtent[2]) {
            loadExtents.push([
              loadExtent[0] + worldWidth,
              loadExtent[1],
              loadExtent[2] + worldWidth,
              loadExtent[3]
            ]);
          } else if (loadExtent[0] > projectionExtent[0] && loadExtent[2] > projectionExtent[2]) {
            loadExtents.push([
              loadExtent[0] - worldWidth,
              loadExtent[1],
              loadExtent[2] - worldWidth,
              loadExtent[3]
            ]);
          }
        }
        if (this.ready && this.renderedResolution_ == resolution && this.renderedRevision_ == vectorLayerRevision && this.renderedRenderOrder_ == vectorLayerRenderOrder && containsExtent(this.wrappedRenderedExtent_, extent)) {
          if (!equals(this.renderedExtent_, renderedExtent)) {
            this.hitDetectionImageData_ = null;
            this.renderedExtent_ = renderedExtent;
          }
          this.renderedCenter_ = center;
          this.replayGroupChanged = false;
          return true;
        }
        this.replayGroup_ = null;
        const replayGroup = new BuilderGroup_default(
          getTolerance(resolution, pixelRatio),
          extent,
          resolution,
          pixelRatio
        );
        let declutterBuilderGroup;
        if (this.getLayer().getDeclutter()) {
          declutterBuilderGroup = new BuilderGroup_default(
            getTolerance(resolution, pixelRatio),
            extent,
            resolution,
            pixelRatio
          );
        }
        const userProjection2 = getUserProjection();
        let userTransform;
        if (userProjection2) {
          for (let i = 0, ii = loadExtents.length; i < ii; ++i) {
            const extent2 = loadExtents[i];
            const userExtent2 = toUserExtent(extent2, projection);
            vectorSource.loadFeatures(
              userExtent2,
              toUserResolution(resolution, projection),
              userProjection2
            );
          }
          userTransform = getTransformFromProjections(userProjection2, projection);
        } else {
          for (let i = 0, ii = loadExtents.length; i < ii; ++i) {
            vectorSource.loadFeatures(loadExtents[i], resolution, projection);
          }
        }
        const squaredTolerance = getSquaredTolerance(resolution, pixelRatio);
        let ready = true;
        const render2 = (
          /**
           * @param {import("../../Feature.js").default} feature Feature.
           */
          (feature) => {
            let styles;
            const styleFunction = feature.getStyleFunction() || vectorLayer.getStyleFunction();
            if (styleFunction) {
              styles = styleFunction(feature, resolution);
            }
            if (styles) {
              const dirty = this.renderFeature(
                feature,
                squaredTolerance,
                styles,
                replayGroup,
                userTransform,
                declutterBuilderGroup
              );
              ready = ready && !dirty;
            }
          }
        );
        const userExtent = toUserExtent(extent, projection);
        const features = vectorSource.getFeaturesInExtent(userExtent);
        if (vectorLayerRenderOrder) {
          features.sort(vectorLayerRenderOrder);
        }
        for (let i = 0, ii = features.length; i < ii; ++i) {
          render2(features[i]);
        }
        this.renderedFeatures_ = features;
        this.ready = ready;
        const replayGroupInstructions = replayGroup.finish();
        const executorGroup = new ExecutorGroup_default(
          extent,
          resolution,
          pixelRatio,
          vectorSource.getOverlaps(),
          replayGroupInstructions,
          vectorLayer.getRenderBuffer()
        );
        if (declutterBuilderGroup) {
          this.declutterExecutorGroup = new ExecutorGroup_default(
            extent,
            resolution,
            pixelRatio,
            vectorSource.getOverlaps(),
            declutterBuilderGroup.finish(),
            vectorLayer.getRenderBuffer()
          );
        }
        this.renderedResolution_ = resolution;
        this.renderedRevision_ = vectorLayerRevision;
        this.renderedRenderOrder_ = vectorLayerRenderOrder;
        this.renderedExtent_ = renderedExtent;
        this.wrappedRenderedExtent_ = extent;
        this.renderedCenter_ = center;
        this.renderedProjection_ = projection;
        this.replayGroup_ = executorGroup;
        this.hitDetectionImageData_ = null;
        this.replayGroupChanged = true;
        return true;
      }
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       * @param {number} squaredTolerance Squared render tolerance.
       * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
       * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
       * @param {import("../../proj.js").TransformFunction} [transform] Transform from user to view projection.
       * @param {import("../../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
       * @return {boolean} `true` if an image is loading.
       */
      renderFeature(feature, squaredTolerance, styles, builderGroup, transform2, declutterBuilderGroup) {
        if (!styles) {
          return false;
        }
        let loading = false;
        if (Array.isArray(styles)) {
          for (let i = 0, ii = styles.length; i < ii; ++i) {
            loading = renderFeature(
              builderGroup,
              feature,
              styles[i],
              squaredTolerance,
              this.boundHandleStyleImageChange_,
              transform2,
              declutterBuilderGroup
            ) || loading;
          }
        } else {
          loading = renderFeature(
            builderGroup,
            feature,
            styles,
            squaredTolerance,
            this.boundHandleStyleImageChange_,
            transform2,
            declutterBuilderGroup
          );
        }
        return loading;
      }
    };
    VectorLayer_default = CanvasVectorLayerRenderer;
  }
});

// node_modules/ol/layer/Vector.js
var Vector_exports = {};
__export(Vector_exports, {
  default: () => Vector_default
});
var VectorLayer, Vector_default;
var init_Vector = __esm({
  "node_modules/ol/layer/Vector.js"() {
    init_BaseVector();
    init_VectorLayer();
    VectorLayer = class extends BaseVector_default {
      /**
       * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
       */
      constructor(options) {
        super(options);
      }
      createRenderer() {
        return new VectorLayer_default(this);
      }
    };
    Vector_default = VectorLayer;
  }
});

// node_modules/ol/structs/RBush.js
var RBush2, RBush_default;
var init_RBush = __esm({
  "node_modules/ol/structs/RBush.js"() {
    init_rbush();
    init_extent();
    init_util();
    init_obj();
    RBush2 = class {
      /**
       * @param {number} [maxEntries] Max entries.
       */
      constructor(maxEntries) {
        this.rbush_ = new RBush(maxEntries);
        this.items_ = {};
      }
      /**
       * Insert a value into the RBush.
       * @param {import("../extent.js").Extent} extent Extent.
       * @param {T} value Value.
       */
      insert(extent, value) {
        const item = {
          minX: extent[0],
          minY: extent[1],
          maxX: extent[2],
          maxY: extent[3],
          value
        };
        this.rbush_.insert(item);
        this.items_[getUid(value)] = item;
      }
      /**
       * Bulk-insert values into the RBush.
       * @param {Array<import("../extent.js").Extent>} extents Extents.
       * @param {Array<T>} values Values.
       */
      load(extents, values) {
        const items = new Array(values.length);
        for (let i = 0, l = values.length; i < l; i++) {
          const extent = extents[i];
          const value = values[i];
          const item = {
            minX: extent[0],
            minY: extent[1],
            maxX: extent[2],
            maxY: extent[3],
            value
          };
          items[i] = item;
          this.items_[getUid(value)] = item;
        }
        this.rbush_.load(items);
      }
      /**
       * Remove a value from the RBush.
       * @param {T} value Value.
       * @return {boolean} Removed.
       */
      remove(value) {
        const uid = getUid(value);
        const item = this.items_[uid];
        delete this.items_[uid];
        return this.rbush_.remove(item) !== null;
      }
      /**
       * Update the extent of a value in the RBush.
       * @param {import("../extent.js").Extent} extent Extent.
       * @param {T} value Value.
       */
      update(extent, value) {
        const item = this.items_[getUid(value)];
        const bbox = [item.minX, item.minY, item.maxX, item.maxY];
        if (!equals2(bbox, extent)) {
          this.remove(value);
          this.insert(extent, value);
        }
      }
      /**
       * Return all values in the RBush.
       * @return {Array<T>} All.
       */
      getAll() {
        const items = this.rbush_.all();
        return items.map(function(item) {
          return item.value;
        });
      }
      /**
       * Return all values in the given extent.
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {Array<T>} All in extent.
       */
      getInExtent(extent) {
        const bbox = {
          minX: extent[0],
          minY: extent[1],
          maxX: extent[2],
          maxY: extent[3]
        };
        const items = this.rbush_.search(bbox);
        return items.map(function(item) {
          return item.value;
        });
      }
      /**
       * Calls a callback function with each value in the tree.
       * If the callback returns a truthy value, this value is returned without
       * checking the rest of the tree.
       * @param {function(T): *} callback Callback.
       * @return {*} Callback return value.
       */
      forEach(callback) {
        return this.forEach_(this.getAll(), callback);
      }
      /**
       * Calls a callback function with each value in the provided extent.
       * @param {import("../extent.js").Extent} extent Extent.
       * @param {function(T): *} callback Callback.
       * @return {*} Callback return value.
       */
      forEachInExtent(extent, callback) {
        return this.forEach_(this.getInExtent(extent), callback);
      }
      /**
       * @param {Array<T>} values Values.
       * @param {function(T): *} callback Callback.
       * @private
       * @return {*} Callback return value.
       */
      forEach_(values, callback) {
        let result;
        for (let i = 0, l = values.length; i < l; i++) {
          result = callback(values[i]);
          if (result) {
            return result;
          }
        }
        return result;
      }
      /**
       * @return {boolean} Is empty.
       */
      isEmpty() {
        return isEmpty(this.items_);
      }
      /**
       * Remove all values from the RBush.
       */
      clear() {
        this.rbush_.clear();
        this.items_ = {};
      }
      /**
       * @param {import("../extent.js").Extent} [extent] Extent.
       * @return {import("../extent.js").Extent} Extent.
       */
      getExtent(extent) {
        const data = this.rbush_.toJSON();
        return createOrUpdate(data.minX, data.minY, data.maxX, data.maxY, extent);
      }
      /**
       * @param {RBush} rbush R-Tree.
       */
      concat(rbush) {
        this.rbush_.load(rbush.rbush_.all());
        for (const i in rbush.items_) {
          this.items_[i] = rbush.items_[i];
        }
      }
    };
    RBush_default = RBush2;
  }
});

// node_modules/ol/geom/flat/center.js
function linearRingss(flatCoordinates, offset, endss, stride) {
  const flatCenters = [];
  let extent = createEmpty();
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    extent = createOrUpdateFromFlatCoordinates(
      flatCoordinates,
      offset,
      ends[0],
      stride
    );
    flatCenters.push((extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2);
    offset = ends[ends.length - 1];
  }
  return flatCenters;
}
var init_center = __esm({
  "node_modules/ol/geom/flat/center.js"() {
    init_extent();
  }
});

// node_modules/ol/geom.js
var init_geom = __esm({
  "node_modules/ol/geom.js"() {
    init_Point();
  }
});

// node_modules/ol/render/Feature.js
var tmpTransform2, RenderFeature, Feature_default2;
var init_Feature2 = __esm({
  "node_modules/ol/render/Feature.js"() {
    init_transform();
    init_extent();
    init_simplify();
    init_array();
    init_interiorpoint();
    init_proj();
    init_orient();
    init_interpolate();
    init_center();
    init_functions();
    init_transform2();
    tmpTransform2 = create();
    RenderFeature = class _RenderFeature {
      /**
       * @param {Type} type Geometry type.
       * @param {Array<number>} flatCoordinates Flat coordinates. These always need
       *     to be right-handed for polygons.
       * @param {Array<number>} ends Ends.
       * @param {number} stride Stride.
       * @param {Object<string, *>} properties Properties.
       * @param {number|string|undefined} id Feature id.
       */
      constructor(type, flatCoordinates, ends, stride, properties, id) {
        this.styleFunction;
        this.extent_;
        this.id_ = id;
        this.type_ = type;
        this.flatCoordinates_ = flatCoordinates;
        this.flatInteriorPoints_ = null;
        this.flatMidpoints_ = null;
        this.ends_ = ends;
        this.properties_ = properties;
        this.squaredTolerance_;
        this.stride_ = stride;
        this.simplifiedGeometry_;
      }
      /**
       * Get a feature property by its key.
       * @param {string} key Key
       * @return {*} Value for the requested key.
       * @api
       */
      get(key) {
        return this.properties_[key];
      }
      /**
       * Get the extent of this feature's geometry.
       * @return {import("../extent.js").Extent} Extent.
       * @api
       */
      getExtent() {
        if (!this.extent_) {
          this.extent_ = this.type_ === "Point" ? createOrUpdateFromCoordinate(this.flatCoordinates_) : createOrUpdateFromFlatCoordinates(
            this.flatCoordinates_,
            0,
            this.flatCoordinates_.length,
            2
          );
        }
        return this.extent_;
      }
      /**
       * @return {Array<number>} Flat interior points.
       */
      getFlatInteriorPoint() {
        if (!this.flatInteriorPoints_) {
          const flatCenter = getCenter(this.getExtent());
          this.flatInteriorPoints_ = getInteriorPointOfArray(
            this.flatCoordinates_,
            0,
            /** @type {Array<number>} */
            this.ends_,
            2,
            flatCenter,
            0
          );
        }
        return this.flatInteriorPoints_;
      }
      /**
       * @return {Array<number>} Flat interior points.
       */
      getFlatInteriorPoints() {
        if (!this.flatInteriorPoints_) {
          const ends = inflateEnds(this.flatCoordinates_, this.ends_);
          const flatCenters = linearRingss(this.flatCoordinates_, 0, ends, 2);
          this.flatInteriorPoints_ = getInteriorPointsOfMultiArray(
            this.flatCoordinates_,
            0,
            ends,
            2,
            flatCenters
          );
        }
        return this.flatInteriorPoints_;
      }
      /**
       * @return {Array<number>} Flat midpoint.
       */
      getFlatMidpoint() {
        if (!this.flatMidpoints_) {
          this.flatMidpoints_ = interpolatePoint(
            this.flatCoordinates_,
            0,
            this.flatCoordinates_.length,
            2,
            0.5
          );
        }
        return this.flatMidpoints_;
      }
      /**
       * @return {Array<number>} Flat midpoints.
       */
      getFlatMidpoints() {
        if (!this.flatMidpoints_) {
          this.flatMidpoints_ = [];
          const flatCoordinates = this.flatCoordinates_;
          let offset = 0;
          const ends = (
            /** @type {Array<number>} */
            this.ends_
          );
          for (let i = 0, ii = ends.length; i < ii; ++i) {
            const end = ends[i];
            const midpoint = interpolatePoint(flatCoordinates, offset, end, 2, 0.5);
            extend(this.flatMidpoints_, midpoint);
            offset = end;
          }
        }
        return this.flatMidpoints_;
      }
      /**
       * Get the feature identifier.  This is a stable identifier for the feature and
       * is set when reading data from a remote source.
       * @return {number|string|undefined} Id.
       * @api
       */
      getId() {
        return this.id_;
      }
      /**
       * @return {Array<number>} Flat coordinates.
       */
      getOrientedFlatCoordinates() {
        return this.flatCoordinates_;
      }
      /**
       * For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when
       * determining the geometry type in style function (see {@link #getType}).
       * @return {RenderFeature} Feature.
       * @api
       */
      getGeometry() {
        return this;
      }
      /**
       * @param {number} squaredTolerance Squared tolerance.
       * @return {RenderFeature} Simplified geometry.
       */
      getSimplifiedGeometry(squaredTolerance) {
        return this;
      }
      /**
       * Get a transformed and simplified version of the geometry.
       * @param {number} squaredTolerance Squared tolerance.
       * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
       * @return {RenderFeature} Simplified geometry.
       */
      simplifyTransformed(squaredTolerance, transform2) {
        return this;
      }
      /**
       * Get the feature properties.
       * @return {Object<string, *>} Feature properties.
       * @api
       */
      getProperties() {
        return this.properties_;
      }
      /**
       * Get an object of all property names and values.  This has the same behavior as getProperties,
       * but is here to conform with the {@link module:ol/Feature~Feature} interface.
       * @return {Object<string, *>?} Object.
       */
      getPropertiesInternal() {
        return this.properties_;
      }
      /**
       * @return {number} Stride.
       */
      getStride() {
        return this.stride_;
      }
      /**
       * @return {import('../style/Style.js').StyleFunction|undefined} Style
       */
      getStyleFunction() {
        return this.styleFunction;
      }
      /**
       * Get the type of this feature's geometry.
       * @return {Type} Geometry type.
       * @api
       */
      getType() {
        return this.type_;
      }
      /**
       * Transform geometry coordinates from tile pixel space to projected.
       *
       * @param {import("../proj.js").ProjectionLike} projection The data projection
       */
      transform(projection) {
        projection = get3(projection);
        const pixelExtent = projection.getExtent();
        const projectedExtent = projection.getWorldExtent();
        if (pixelExtent && projectedExtent) {
          const scale4 = getHeight(projectedExtent) / getHeight(pixelExtent);
          compose(
            tmpTransform2,
            projectedExtent[0],
            projectedExtent[3],
            scale4,
            -scale4,
            0,
            0,
            0
          );
          transform2D(
            this.flatCoordinates_,
            0,
            this.flatCoordinates_.length,
            2,
            tmpTransform2,
            this.flatCoordinates_
          );
        }
      }
      /**
       * Apply a transform function to the coordinates of the geometry.
       * The geometry is modified in place.
       * If you do not want the geometry modified in place, first `clone()` it and
       * then use this function on the clone.
       * @param {import("../proj.js").TransformFunction} transformFn Transform function.
       */
      applyTransform(transformFn) {
        transformFn(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
      }
      /**
       * @return {RenderFeature} A cloned render feature.
       */
      clone() {
        return new _RenderFeature(
          this.type_,
          this.flatCoordinates_.slice(),
          this.ends_.slice(),
          this.stride_,
          Object.assign({}, this.properties_),
          this.id_
        );
      }
      /**
       * @return {Array<number>} Ends.
       */
      getEnds() {
        return this.ends_;
      }
      /**
       * Add transform and resolution based geometry simplification to this instance.
       * @return {RenderFeature} This render feature.
       */
      enableSimplifyTransformed() {
        this.simplifyTransformed = memoizeOne((squaredTolerance, transform2) => {
          if (squaredTolerance === this.squaredTolerance_) {
            return this.simplifiedGeometry_;
          }
          this.simplifiedGeometry_ = this.clone();
          if (transform2) {
            this.simplifiedGeometry_.applyTransform(transform2);
          }
          const simplifiedFlatCoordinates = this.simplifiedGeometry_.getFlatCoordinates();
          let simplifiedEnds;
          switch (this.type_) {
            case "LineString":
              simplifiedFlatCoordinates.length = douglasPeucker(
                simplifiedFlatCoordinates,
                0,
                this.simplifiedGeometry_.flatCoordinates_.length,
                this.simplifiedGeometry_.stride_,
                squaredTolerance,
                simplifiedFlatCoordinates,
                0
              );
              simplifiedEnds = [simplifiedFlatCoordinates.length];
              break;
            case "MultiLineString":
              simplifiedEnds = [];
              simplifiedFlatCoordinates.length = douglasPeuckerArray(
                simplifiedFlatCoordinates,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                squaredTolerance,
                simplifiedFlatCoordinates,
                0,
                simplifiedEnds
              );
              break;
            case "Polygon":
              simplifiedEnds = [];
              simplifiedFlatCoordinates.length = quantizeArray(
                simplifiedFlatCoordinates,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                Math.sqrt(squaredTolerance),
                simplifiedFlatCoordinates,
                0,
                simplifiedEnds
              );
              break;
            default:
          }
          if (simplifiedEnds) {
            this.simplifiedGeometry_ = new _RenderFeature(
              this.type_,
              simplifiedFlatCoordinates,
              simplifiedEnds,
              2,
              this.properties_,
              this.id_
            );
          }
          this.squaredTolerance_ = squaredTolerance;
          return this.simplifiedGeometry_;
        });
        return this;
      }
    };
    RenderFeature.prototype.getFlatCoordinates = RenderFeature.prototype.getOrientedFlatCoordinates;
    Feature_default2 = RenderFeature;
  }
});

// node_modules/ol/source/VectorEventType.js
var VectorEventType_default;
var init_VectorEventType = __esm({
  "node_modules/ol/source/VectorEventType.js"() {
    VectorEventType_default = {
      /**
       * Triggered when a feature is added to the source.
       * @event module:ol/source/Vector.VectorSourceEvent#addfeature
       * @api
       */
      ADDFEATURE: "addfeature",
      /**
       * Triggered when a feature is updated.
       * @event module:ol/source/Vector.VectorSourceEvent#changefeature
       * @api
       */
      CHANGEFEATURE: "changefeature",
      /**
       * Triggered when the clear method is called on the source.
       * @event module:ol/source/Vector.VectorSourceEvent#clear
       * @api
       */
      CLEAR: "clear",
      /**
       * Triggered when a feature is removed from the source.
       * See {@link module:ol/source/Vector~VectorSource#clear source.clear()} for exceptions.
       * @event module:ol/source/Vector.VectorSourceEvent#removefeature
       * @api
       */
      REMOVEFEATURE: "removefeature",
      /**
       * Triggered when features starts loading.
       * @event module:ol/source/Vector.VectorSourceEvent#featuresloadstart
       * @api
       */
      FEATURESLOADSTART: "featuresloadstart",
      /**
       * Triggered when features finishes loading.
       * @event module:ol/source/Vector.VectorSourceEvent#featuresloadend
       * @api
       */
      FEATURESLOADEND: "featuresloadend",
      /**
       * Triggered if feature loading results in an error.
       * @event module:ol/source/Vector.VectorSourceEvent#featuresloaderror
       * @api
       */
      FEATURESLOADERROR: "featuresloaderror"
    };
  }
});

// node_modules/ol/loadingstrategy.js
function all2(extent, resolution) {
  return [[-Infinity, -Infinity, Infinity, Infinity]];
}
var init_loadingstrategy = __esm({
  "node_modules/ol/loadingstrategy.js"() {
    init_proj();
  }
});

// node_modules/ol/featureloader.js
function loadFeaturesXhr(url, format2, extent, resolution, projection, success, failure) {
  const xhr2 = new XMLHttpRequest();
  xhr2.open(
    "GET",
    typeof url === "function" ? url(extent, resolution, projection) : url,
    true
  );
  if (format2.getType() == "arraybuffer") {
    xhr2.responseType = "arraybuffer";
  }
  xhr2.withCredentials = withCredentials;
  xhr2.onload = function(event) {
    if (!xhr2.status || xhr2.status >= 200 && xhr2.status < 300) {
      const type = format2.getType();
      let source;
      if (type == "json") {
        source = JSON.parse(xhr2.responseText);
      } else if (type == "text") {
        source = xhr2.responseText;
      } else if (type == "xml") {
        source = xhr2.responseXML;
        if (!source) {
          source = new DOMParser().parseFromString(
            xhr2.responseText,
            "application/xml"
          );
        }
      } else if (type == "arraybuffer") {
        source = /** @type {ArrayBuffer} */
        xhr2.response;
      }
      if (source) {
        success(
          /** @type {Array<import("./Feature.js").default>} */
          format2.readFeatures(source, {
            extent,
            featureProjection: projection
          }),
          format2.readProjection(source)
        );
      } else {
        failure();
      }
    } else {
      failure();
    }
  };
  xhr2.onerror = failure;
  xhr2.send();
}
function xhr(url, format2) {
  return function(extent, resolution, projection, success, failure) {
    const source = (
      /** @type {import("./source/Vector").default} */
      this
    );
    loadFeaturesXhr(
      url,
      format2,
      extent,
      resolution,
      projection,
      /**
       * @param {Array<import("./Feature.js").default>} features The loaded features.
       * @param {import("./proj/Projection.js").default} dataProjection Data
       * projection.
       */
      function(features, dataProjection) {
        source.addFeatures(features);
        if (success !== void 0) {
          success(features);
        }
      },
      /* FIXME handle error */
      failure ? failure : VOID
    );
  };
}
var withCredentials;
var init_featureloader = __esm({
  "node_modules/ol/featureloader.js"() {
    init_functions();
    withCredentials = false;
  }
});

// node_modules/ol/source/Vector.js
var Vector_exports2 = {};
__export(Vector_exports2, {
  VectorSourceEvent: () => VectorSourceEvent,
  default: () => Vector_default2
});
var VectorSourceEvent, VectorSource, Vector_default2;
var init_Vector2 = __esm({
  "node_modules/ol/source/Vector.js"() {
    init_Collection();
    init_CollectionEventType();
    init_Event();
    init_EventType();
    init_ObjectEventType();
    init_RBush();
    init_Feature2();
    init_Source();
    init_VectorEventType();
    init_functions();
    init_loadingstrategy();
    init_asserts();
    init_extent();
    init_array();
    init_util();
    init_obj();
    init_events();
    init_featureloader();
    VectorSourceEvent = class extends Event_default {
      /**
       * @param {string} type Type.
       * @param {FeatureClass} [feature] Feature.
       * @param {Array<FeatureClass>} [features] Features.
       */
      constructor(type, feature, features) {
        super(type);
        this.feature = feature;
        this.features = features;
      }
    };
    VectorSource = class extends Source_default {
      /**
       * @param {Options<FeatureClass>} [options] Vector source options.
       */
      constructor(options) {
        options = options || {};
        super({
          attributions: options.attributions,
          interpolate: true,
          projection: void 0,
          state: "ready",
          wrapX: options.wrapX !== void 0 ? options.wrapX : true
        });
        this.on;
        this.once;
        this.un;
        this.loader_ = VOID;
        this.format_ = options.format;
        this.overlaps_ = options.overlaps === void 0 ? true : options.overlaps;
        this.url_ = options.url;
        if (options.loader !== void 0) {
          this.loader_ = options.loader;
        } else if (this.url_ !== void 0) {
          assert(this.format_, "`format` must be set when `url` is set");
          this.loader_ = xhr(
            this.url_,
            /** @type {import("../format/Feature.js").default} */
            this.format_
          );
        }
        this.strategy_ = options.strategy !== void 0 ? options.strategy : all2;
        const useSpatialIndex = options.useSpatialIndex !== void 0 ? options.useSpatialIndex : true;
        this.featuresRtree_ = useSpatialIndex ? new RBush_default() : null;
        this.loadedExtentsRtree_ = new RBush_default();
        this.loadingExtentsCount_ = 0;
        this.nullGeometryFeatures_ = {};
        this.idIndex_ = {};
        this.uidIndex_ = {};
        this.featureChangeKeys_ = {};
        this.featuresCollection_ = null;
        let collection;
        let features;
        if (Array.isArray(options.features)) {
          features = options.features;
        } else if (options.features) {
          collection = options.features;
          features = collection.getArray();
        }
        if (!useSpatialIndex && collection === void 0) {
          collection = new Collection_default(features);
        }
        if (features !== void 0) {
          this.addFeaturesInternal(features);
        }
        if (collection !== void 0) {
          this.bindFeaturesCollection_(collection);
        }
      }
      /**
       * Add a single feature to the source.  If you want to add a batch of features
       * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
       * instead. A feature will not be added to the source if feature with
       * the same id is already there. The reason for this behavior is to avoid
       * feature duplication when using bbox or tile loading strategies.
       * Note: this also applies if an {@link module:ol/Collection~Collection} is used for features,
       * meaning that if a feature with a duplicate id is added in the collection, it will
       * be removed from it right away.
       * @param {FeatureClass} feature Feature to add.
       * @api
       */
      addFeature(feature) {
        this.addFeatureInternal(feature);
        this.changed();
      }
      /**
       * Add a feature without firing a `change` event.
       * @param {FeatureClass} feature Feature.
       * @protected
       */
      addFeatureInternal(feature) {
        const featureKey = getUid(feature);
        if (!this.addToIndex_(featureKey, feature)) {
          if (this.featuresCollection_) {
            this.featuresCollection_.remove(feature);
          }
          return;
        }
        this.setupChangeEvents_(featureKey, feature);
        const geometry = feature.getGeometry();
        if (geometry) {
          const extent = geometry.getExtent();
          if (this.featuresRtree_) {
            this.featuresRtree_.insert(extent, feature);
          }
        } else {
          this.nullGeometryFeatures_[featureKey] = feature;
        }
        this.dispatchEvent(
          new VectorSourceEvent(VectorEventType_default.ADDFEATURE, feature)
        );
      }
      /**
       * @param {string} featureKey Unique identifier for the feature.
       * @param {FeatureClass} feature The feature.
       * @private
       */
      setupChangeEvents_(featureKey, feature) {
        if (feature instanceof Feature_default2) {
          return;
        }
        this.featureChangeKeys_[featureKey] = [
          listen(feature, EventType_default.CHANGE, this.handleFeatureChange_, this),
          listen(
            feature,
            ObjectEventType_default.PROPERTYCHANGE,
            this.handleFeatureChange_,
            this
          )
        ];
      }
      /**
       * @param {string} featureKey Unique identifier for the feature.
       * @param {FeatureClass} feature The feature.
       * @return {boolean} The feature is "valid", in the sense that it is also a
       *     candidate for insertion into the Rtree.
       * @private
       */
      addToIndex_(featureKey, feature) {
        let valid = true;
        if (feature.getId() !== void 0) {
          const id = String(feature.getId());
          if (!(id in this.idIndex_)) {
            this.idIndex_[id] = feature;
          } else if (feature instanceof Feature_default2) {
            const indexedFeature = this.idIndex_[id];
            if (!(indexedFeature instanceof Feature_default2)) {
              valid = false;
            } else {
              if (!Array.isArray(indexedFeature)) {
                this.idIndex_[id] = [indexedFeature, feature];
              } else {
                indexedFeature.push(feature);
              }
            }
          } else {
            valid = false;
          }
        }
        if (valid) {
          assert(
            !(featureKey in this.uidIndex_),
            "The passed `feature` was already added to the source"
          );
          this.uidIndex_[featureKey] = feature;
        }
        return valid;
      }
      /**
       * Add a batch of features to the source.
       * @param {Array<FeatureClass>} features Features to add.
       * @api
       */
      addFeatures(features) {
        this.addFeaturesInternal(features);
        this.changed();
      }
      /**
       * Add features without firing a `change` event.
       * @param {Array<FeatureClass>} features Features.
       * @protected
       */
      addFeaturesInternal(features) {
        const extents = [];
        const newFeatures = [];
        const geometryFeatures = [];
        for (let i = 0, length = features.length; i < length; i++) {
          const feature = features[i];
          const featureKey = getUid(feature);
          if (this.addToIndex_(featureKey, feature)) {
            newFeatures.push(feature);
          }
        }
        for (let i = 0, length = newFeatures.length; i < length; i++) {
          const feature = newFeatures[i];
          const featureKey = getUid(feature);
          this.setupChangeEvents_(featureKey, feature);
          const geometry = feature.getGeometry();
          if (geometry) {
            const extent = geometry.getExtent();
            extents.push(extent);
            geometryFeatures.push(feature);
          } else {
            this.nullGeometryFeatures_[featureKey] = feature;
          }
        }
        if (this.featuresRtree_) {
          this.featuresRtree_.load(extents, geometryFeatures);
        }
        if (this.hasListener(VectorEventType_default.ADDFEATURE)) {
          for (let i = 0, length = newFeatures.length; i < length; i++) {
            this.dispatchEvent(
              new VectorSourceEvent(VectorEventType_default.ADDFEATURE, newFeatures[i])
            );
          }
        }
      }
      /**
       * @param {!Collection<FeatureClass>} collection Collection.
       * @private
       */
      bindFeaturesCollection_(collection) {
        let modifyingCollection = false;
        this.addEventListener(
          VectorEventType_default.ADDFEATURE,
          /**
           * @param {VectorSourceEvent<FeatureClass>} evt The vector source event
           */
          function(evt) {
            if (!modifyingCollection) {
              modifyingCollection = true;
              collection.push(evt.feature);
              modifyingCollection = false;
            }
          }
        );
        this.addEventListener(
          VectorEventType_default.REMOVEFEATURE,
          /**
           * @param {VectorSourceEvent<FeatureClass>} evt The vector source event
           */
          function(evt) {
            if (!modifyingCollection) {
              modifyingCollection = true;
              collection.remove(evt.feature);
              modifyingCollection = false;
            }
          }
        );
        collection.addEventListener(
          CollectionEventType_default.ADD,
          /**
           * @param {import("../Collection.js").CollectionEvent<FeatureClass>} evt The collection event
           */
          (evt) => {
            if (!modifyingCollection) {
              modifyingCollection = true;
              this.addFeature(evt.element);
              modifyingCollection = false;
            }
          }
        );
        collection.addEventListener(
          CollectionEventType_default.REMOVE,
          /**
           * @param {import("../Collection.js").CollectionEvent<FeatureClass>} evt The collection event
           */
          (evt) => {
            if (!modifyingCollection) {
              modifyingCollection = true;
              this.removeFeature(evt.element);
              modifyingCollection = false;
            }
          }
        );
        this.featuresCollection_ = collection;
      }
      /**
       * Remove all features from the source.
       * @param {boolean} [fast] Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#event:removefeature} events.
       * @api
       */
      clear(fast) {
        if (fast) {
          for (const featureId in this.featureChangeKeys_) {
            const keys = this.featureChangeKeys_[featureId];
            keys.forEach(unlistenByKey);
          }
          if (!this.featuresCollection_) {
            this.featureChangeKeys_ = {};
            this.idIndex_ = {};
            this.uidIndex_ = {};
          }
        } else {
          if (this.featuresRtree_) {
            const removeAndIgnoreReturn = (feature) => {
              this.removeFeatureInternal(feature);
            };
            this.featuresRtree_.forEach(removeAndIgnoreReturn);
            for (const id in this.nullGeometryFeatures_) {
              this.removeFeatureInternal(this.nullGeometryFeatures_[id]);
            }
          }
        }
        if (this.featuresCollection_) {
          this.featuresCollection_.clear();
        }
        if (this.featuresRtree_) {
          this.featuresRtree_.clear();
        }
        this.nullGeometryFeatures_ = {};
        const clearEvent = new VectorSourceEvent(VectorEventType_default.CLEAR);
        this.dispatchEvent(clearEvent);
        this.changed();
      }
      /**
       * Iterate through all features on the source, calling the provided callback
       * with each one.  If the callback returns any "truthy" value, iteration will
       * stop and the function will return the same value.
       * Note: this function only iterate through the feature that have a defined geometry.
       *
       * @param {function(FeatureClass): T} callback Called with each feature
       *     on the source.  Return a truthy value to stop iteration.
       * @return {T|undefined} The return value from the last call to the callback.
       * @template T
       * @api
       */
      forEachFeature(callback) {
        if (this.featuresRtree_) {
          return this.featuresRtree_.forEach(callback);
        }
        if (this.featuresCollection_) {
          this.featuresCollection_.forEach(callback);
        }
      }
      /**
       * Iterate through all features whose geometries contain the provided
       * coordinate, calling the callback with each feature.  If the callback returns
       * a "truthy" value, iteration will stop and the function will return the same
       * value.
       *
       * For {@link module:ol/render/Feature~RenderFeature} features, the callback will be
       * called for all features.
       *
       * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
       * @param {function(FeatureClass): T} callback Called with each feature
       *     whose goemetry contains the provided coordinate.
       * @return {T|undefined} The return value from the last call to the callback.
       * @template T
       */
      forEachFeatureAtCoordinateDirect(coordinate, callback) {
        const extent = [coordinate[0], coordinate[1], coordinate[0], coordinate[1]];
        return this.forEachFeatureInExtent(extent, function(feature) {
          const geometry = feature.getGeometry();
          if (geometry instanceof Feature_default2 || geometry.intersectsCoordinate(coordinate)) {
            return callback(feature);
          }
          return void 0;
        });
      }
      /**
       * Iterate through all features whose bounding box intersects the provided
       * extent (note that the feature's geometry may not intersect the extent),
       * calling the callback with each feature.  If the callback returns a "truthy"
       * value, iteration will stop and the function will return the same value.
       *
       * If you are interested in features whose geometry intersects an extent, call
       * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
       *
       * When `useSpatialIndex` is set to false, this method will loop through all
       * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
       *
       * @param {import("../extent.js").Extent} extent Extent.
       * @param {function(FeatureClass): T} callback Called with each feature
       *     whose bounding box intersects the provided extent.
       * @return {T|undefined} The return value from the last call to the callback.
       * @template T
       * @api
       */
      forEachFeatureInExtent(extent, callback) {
        if (this.featuresRtree_) {
          return this.featuresRtree_.forEachInExtent(extent, callback);
        }
        if (this.featuresCollection_) {
          this.featuresCollection_.forEach(callback);
        }
      }
      /**
       * Iterate through all features whose geometry intersects the provided extent,
       * calling the callback with each feature.  If the callback returns a "truthy"
       * value, iteration will stop and the function will return the same value.
       *
       * If you only want to test for bounding box intersection, call the
       * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
       *
       * @param {import("../extent.js").Extent} extent Extent.
       * @param {function(FeatureClass): T} callback Called with each feature
       *     whose geometry intersects the provided extent.
       * @return {T|undefined} The return value from the last call to the callback.
       * @template T
       * @api
       */
      forEachFeatureIntersectingExtent(extent, callback) {
        return this.forEachFeatureInExtent(
          extent,
          /**
           * @param {FeatureClass} feature Feature.
           * @return {T|undefined} The return value from the last call to the callback.
           */
          function(feature) {
            const geometry = feature.getGeometry();
            if (geometry instanceof Feature_default2 || geometry.intersectsExtent(extent)) {
              const result = callback(feature);
              if (result) {
                return result;
              }
            }
          }
        );
      }
      /**
       * Get the features collection associated with this source. Will be `null`
       * unless the source was configured with `useSpatialIndex` set to `false`, or
       * with an {@link module:ol/Collection~Collection} as `features`.
       * @return {Collection<FeatureClass>|null} The collection of features.
       * @api
       */
      getFeaturesCollection() {
        return this.featuresCollection_;
      }
      /**
       * Get a snapshot of the features currently on the source in random order. The returned array
       * is a copy, the features are references to the features in the source.
       * @return {Array<FeatureClass>} Features.
       * @api
       */
      getFeatures() {
        let features;
        if (this.featuresCollection_) {
          features = this.featuresCollection_.getArray().slice(0);
        } else if (this.featuresRtree_) {
          features = this.featuresRtree_.getAll();
          if (!isEmpty(this.nullGeometryFeatures_)) {
            extend(features, Object.values(this.nullGeometryFeatures_));
          }
        }
        return features;
      }
      /**
       * Get all features whose geometry intersects the provided coordinate.
       * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
       * @return {Array<import("../Feature.js").default>} Features.
       * @api
       */
      getFeaturesAtCoordinate(coordinate) {
        const features = [];
        this.forEachFeatureAtCoordinateDirect(coordinate, function(feature) {
          features.push(feature);
        });
        return features;
      }
      /**
       * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
       * all features intersecting the given extent in random order (so it may include
       * features whose geometries do not intersect the extent).
       *
       * When `useSpatialIndex` is set to false, this method will return all
       * features.
       *
       * @param {import("../extent.js").Extent} extent Extent.
       * @param {import("../proj/Projection.js").default} [projection] Include features
       * where `extent` exceeds the x-axis bounds of `projection` and wraps around the world.
       * @return {Array<FeatureClass>} Features.
       * @api
       */
      getFeaturesInExtent(extent, projection) {
        if (this.featuresRtree_) {
          const multiWorld = projection && projection.canWrapX() && this.getWrapX();
          if (!multiWorld) {
            return this.featuresRtree_.getInExtent(extent);
          }
          const extents = wrapAndSliceX(extent, projection);
          return [].concat(
            ...extents.map((anExtent) => this.featuresRtree_.getInExtent(anExtent))
          );
        }
        if (this.featuresCollection_) {
          return this.featuresCollection_.getArray().slice(0);
        }
        return [];
      }
      /**
       * Get the closest feature to the provided coordinate.
       *
       * This method is not available when the source is configured with
       * `useSpatialIndex` set to `false` and the features in this source are of type
       * {@link module:ol/Feature~Feature}.
       * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
       * @param {function(FeatureClass):boolean} [filter] Feature filter function.
       *     The filter function will receive one argument, the {@link module:ol/Feature~Feature feature}
       *     and it should return a boolean value. By default, no filtering is made.
       * @return {FeatureClass} Closest feature.
       * @api
       */
      getClosestFeatureToCoordinate(coordinate, filter) {
        const x = coordinate[0];
        const y = coordinate[1];
        let closestFeature = null;
        const closestPoint = [NaN, NaN];
        let minSquaredDistance = Infinity;
        const extent = [-Infinity, -Infinity, Infinity, Infinity];
        filter = filter ? filter : TRUE;
        this.featuresRtree_.forEachInExtent(
          extent,
          /**
           * @param {FeatureClass} feature Feature.
           */
          function(feature) {
            if (filter(feature)) {
              const geometry = feature.getGeometry();
              const previousMinSquaredDistance = minSquaredDistance;
              minSquaredDistance = geometry instanceof Feature_default2 ? 0 : geometry.closestPointXY(x, y, closestPoint, minSquaredDistance);
              if (minSquaredDistance < previousMinSquaredDistance) {
                closestFeature = feature;
                const minDistance = Math.sqrt(minSquaredDistance);
                extent[0] = x - minDistance;
                extent[1] = y - minDistance;
                extent[2] = x + minDistance;
                extent[3] = y + minDistance;
              }
            }
          }
        );
        return closestFeature;
      }
      /**
       * Get the extent of the features currently in the source.
       *
       * This method is not available when the source is configured with
       * `useSpatialIndex` set to `false`.
       * @param {import("../extent.js").Extent} [extent] Destination extent. If provided, no new extent
       *     will be created. Instead, that extent's coordinates will be overwritten.
       * @return {import("../extent.js").Extent} Extent.
       * @api
       */
      getExtent(extent) {
        return this.featuresRtree_.getExtent(extent);
      }
      /**
       * Get a feature by its identifier (the value returned by feature.getId()). When `RenderFeature`s
       * are used, `getFeatureById()` can return an array of `RenderFeature`s. This allows for handling
       * of `GeometryCollection` geometries, where format readers create one `RenderFeature` per
       * `GeometryCollection` member.
       * Note that the index treats string and numeric identifiers as the same.  So
       * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
       *
       * @param {string|number} id Feature identifier.
       * @return {FeatureClass|Array<RenderFeature>|null} The feature (or `null` if not found).
       * @api
       */
      getFeatureById(id) {
        const feature = this.idIndex_[id.toString()];
        return feature !== void 0 ? feature : null;
      }
      /**
       * Get a feature by its internal unique identifier (using `getUid`).
       *
       * @param {string} uid Feature identifier.
       * @return {FeatureClass|null} The feature (or `null` if not found).
       */
      getFeatureByUid(uid) {
        const feature = this.uidIndex_[uid];
        return feature !== void 0 ? feature : null;
      }
      /**
       * Get the format associated with this source.
       *
       * @return {import("../format/Feature.js").default|undefined} The feature format.
       * @api
       */
      getFormat() {
        return this.format_;
      }
      /**
       * @return {boolean} The source can have overlapping geometries.
       */
      getOverlaps() {
        return this.overlaps_;
      }
      /**
       * Get the url associated with this source.
       *
       * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
       * @api
       */
      getUrl() {
        return this.url_;
      }
      /**
       * @param {Event} event Event.
       * @private
       */
      handleFeatureChange_(event) {
        const feature = (
          /** @type {FeatureClass} */
          event.target
        );
        const featureKey = getUid(feature);
        const geometry = feature.getGeometry();
        if (!geometry) {
          if (!(featureKey in this.nullGeometryFeatures_)) {
            if (this.featuresRtree_) {
              this.featuresRtree_.remove(feature);
            }
            this.nullGeometryFeatures_[featureKey] = feature;
          }
        } else {
          const extent = geometry.getExtent();
          if (featureKey in this.nullGeometryFeatures_) {
            delete this.nullGeometryFeatures_[featureKey];
            if (this.featuresRtree_) {
              this.featuresRtree_.insert(extent, feature);
            }
          } else {
            if (this.featuresRtree_) {
              this.featuresRtree_.update(extent, feature);
            }
          }
        }
        const id = feature.getId();
        if (id !== void 0) {
          const sid = id.toString();
          if (this.idIndex_[sid] !== feature) {
            this.removeFromIdIndex_(feature);
            this.idIndex_[sid] = feature;
          }
        } else {
          this.removeFromIdIndex_(feature);
          this.uidIndex_[featureKey] = feature;
        }
        this.changed();
        this.dispatchEvent(
          new VectorSourceEvent(VectorEventType_default.CHANGEFEATURE, feature)
        );
      }
      /**
       * Returns true if the feature is contained within the source.
       * @param {FeatureClass} feature Feature.
       * @return {boolean} Has feature.
       * @api
       */
      hasFeature(feature) {
        const id = feature.getId();
        if (id !== void 0) {
          return id in this.idIndex_;
        }
        return getUid(feature) in this.uidIndex_;
      }
      /**
       * @return {boolean} Is empty.
       */
      isEmpty() {
        if (this.featuresRtree_) {
          return this.featuresRtree_.isEmpty() && isEmpty(this.nullGeometryFeatures_);
        }
        if (this.featuresCollection_) {
          return this.featuresCollection_.getLength() === 0;
        }
        return true;
      }
      /**
       * @param {import("../extent.js").Extent} extent Extent.
       * @param {number} resolution Resolution.
       * @param {import("../proj/Projection.js").default} projection Projection.
       */
      loadFeatures(extent, resolution, projection) {
        const loadedExtentsRtree = this.loadedExtentsRtree_;
        const extentsToLoad = this.strategy_(extent, resolution, projection);
        for (let i = 0, ii = extentsToLoad.length; i < ii; ++i) {
          const extentToLoad = extentsToLoad[i];
          const alreadyLoaded = loadedExtentsRtree.forEachInExtent(
            extentToLoad,
            /**
             * @param {{extent: import("../extent.js").Extent}} object Object.
             * @return {boolean} Contains.
             */
            function(object) {
              return containsExtent(object.extent, extentToLoad);
            }
          );
          if (!alreadyLoaded) {
            ++this.loadingExtentsCount_;
            this.dispatchEvent(
              new VectorSourceEvent(VectorEventType_default.FEATURESLOADSTART)
            );
            this.loader_.call(
              this,
              extentToLoad,
              resolution,
              projection,
              (features) => {
                --this.loadingExtentsCount_;
                this.dispatchEvent(
                  new VectorSourceEvent(
                    VectorEventType_default.FEATURESLOADEND,
                    void 0,
                    features
                  )
                );
              },
              () => {
                --this.loadingExtentsCount_;
                this.dispatchEvent(
                  new VectorSourceEvent(VectorEventType_default.FEATURESLOADERROR)
                );
              }
            );
            loadedExtentsRtree.insert(extentToLoad, { extent: extentToLoad.slice() });
          }
        }
        this.loading = this.loader_.length < 4 ? false : this.loadingExtentsCount_ > 0;
      }
      refresh() {
        this.clear(true);
        this.loadedExtentsRtree_.clear();
        super.refresh();
      }
      /**
       * Remove an extent from the list of loaded extents.
       * @param {import("../extent.js").Extent} extent Extent.
       * @api
       */
      removeLoadedExtent(extent) {
        const loadedExtentsRtree = this.loadedExtentsRtree_;
        let obj;
        loadedExtentsRtree.forEachInExtent(extent, function(object) {
          if (equals2(object.extent, extent)) {
            obj = object;
            return true;
          }
        });
        if (obj) {
          loadedExtentsRtree.remove(obj);
        }
      }
      /**
       * Remove a single feature from the source.  If you want to remove all features
       * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
       * instead.
       * @param {FeatureClass} feature Feature to remove.
       * @api
       */
      removeFeature(feature) {
        if (!feature) {
          return;
        }
        const featureKey = getUid(feature);
        if (featureKey in this.nullGeometryFeatures_) {
          delete this.nullGeometryFeatures_[featureKey];
        } else {
          if (this.featuresRtree_) {
            this.featuresRtree_.remove(feature);
          }
        }
        const result = this.removeFeatureInternal(feature);
        if (result) {
          this.changed();
        }
      }
      /**
       * Remove feature without firing a `change` event.
       * @param {FeatureClass} feature Feature.
       * @return {FeatureClass|undefined} The removed feature
       *     (or undefined if the feature was not found).
       * @protected
       */
      removeFeatureInternal(feature) {
        const featureKey = getUid(feature);
        const featureChangeKeys = this.featureChangeKeys_[featureKey];
        if (!featureChangeKeys) {
          return;
        }
        featureChangeKeys.forEach(unlistenByKey);
        delete this.featureChangeKeys_[featureKey];
        const id = feature.getId();
        if (id !== void 0) {
          delete this.idIndex_[id.toString()];
        }
        delete this.uidIndex_[featureKey];
        this.dispatchEvent(
          new VectorSourceEvent(VectorEventType_default.REMOVEFEATURE, feature)
        );
        return feature;
      }
      /**
       * Remove a feature from the id index.  Called internally when the feature id
       * may have changed.
       * @param {FeatureClass} feature The feature.
       * @return {boolean} Removed the feature from the index.
       * @private
       */
      removeFromIdIndex_(feature) {
        let removed = false;
        for (const id in this.idIndex_) {
          const indexedFeature = this.idIndex_[id];
          if (feature instanceof Feature_default2 && Array.isArray(indexedFeature) && indexedFeature.includes(feature)) {
            indexedFeature.splice(indexedFeature.indexOf(feature), 1);
          } else if (this.idIndex_[id] === feature) {
            delete this.idIndex_[id];
            removed = true;
            break;
          }
        }
        return removed;
      }
      /**
       * Set the new loader of the source. The next render cycle will use the
       * new loader.
       * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
       * @api
       */
      setLoader(loader) {
        this.loader_ = loader;
      }
      /**
       * Points the source to a new url. The next render cycle will use the new url.
       * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
       * @api
       */
      setUrl(url) {
        assert(this.format_, "`format` must be set when `url` is set");
        this.url_ = url;
        this.setLoader(xhr(url, this.format_));
      }
    };
    Vector_default2 = VectorSource;
  }
});

// node_modules/ol-geocoder/dist/ol-geocoder.js
var require_ol_geocoder = __commonJS({
  "node_modules/ol-geocoder/dist/ol-geocoder.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t((init_Control(), __toCommonJS(Control_exports)), (init_Style(), __toCommonJS(Style_exports)), (init_Icon(), __toCommonJS(Icon_exports)), (init_Vector(), __toCommonJS(Vector_exports)), (init_Vector2(), __toCommonJS(Vector_exports2)), (init_Point(), __toCommonJS(Point_exports)), (init_Feature(), __toCommonJS(Feature_exports)), (init_proj(), __toCommonJS(proj_exports))) : "function" == typeof define && define.amd ? define(["ol/control/Control", "ol/style/Style", "ol/style/Icon", "ol/layer/Vector", "ol/source/Vector", "ol/geom/Point", "ol/Feature", "ol/proj"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Geocoder = t(e.ol.control.Control, e.ol.style.Style, e.ol.style.Icon, e.ol.layer.Vector, e.ol.source.Vector, e.ol.geom.Point, e.ol.Feature, e.ol.proj);
    }(exports, function(e, t, s, r, n, o, a, i) {
      "use strict";
      function l(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      function c(e2) {
        if (e2 && e2.__esModule)
          return e2;
        var t2 = /* @__PURE__ */ Object.create(null);
        return e2 && Object.keys(e2).forEach(function(s2) {
          if ("default" !== s2) {
            var r2 = Object.getOwnPropertyDescriptor(e2, s2);
            Object.defineProperty(t2, s2, r2.get ? r2 : { enumerable: true, get: function() {
              return e2[s2];
            } });
          }
        }), t2.default = e2, Object.freeze(t2);
      }
      var d = l(e), u = l(t), p = l(s), h = l(r), m = l(n), g = l(o), y = l(a), f = c(i), b = "gcd-container", v = "gcd-button-control", w = "gcd-input-query", x = "gcd-input-label", $ = "gcd-input-search", k = { namespace: "ol-geocoder", spin: "gcd-pseudo-rotate", hidden: "gcd-hidden", address: "gcd-address", country: "gcd-country", city: "gcd-city", road: "gcd-road", olControl: "ol-control", glass: { container: "gcd-gl-container", control: "gcd-gl-control", button: "gcd-gl-btn", input: "gcd-gl-input", expanded: "gcd-gl-expanded", search: "gcd-gl-search", result: "gcd-gl-result" }, inputText: { container: "gcd-txt-container", control: "gcd-txt-control", label: "gcd-txt-label", input: "gcd-txt-input", search: "gcd-txt-search", icon: "gcd-txt-glass", result: "gcd-txt-result" } }, S = { containerId: b, buttonControlId: v, inputQueryId: w, inputLabelId: x, inputSearchId: $, cssClasses: k };
      const q = Object.freeze({ __proto__: null, containerId: b, buttonControlId: v, inputQueryId: w, inputLabelId: x, inputSearchId: $, cssClasses: k, default: S }), L = "addresschosen", C = "nominatim", j = "reverse", E = "glass-button", T = "text-input", I = "osm", N = "mapquest", P = "photon", A = "bing", R = "opencage", F = { provider: I, label: "", placeholder: "Search for an address", featureStyle: null, targetType: E, lang: "en-US", limit: 5, keepOpen: false, preventDefault: false, preventPanning: false, preventMarker: false, defaultFlyResolution: 10, debug: false };
      function _(e2, t2 = "Assertion failed") {
        if (!e2) {
          if ("undefined" != typeof Error)
            throw new Error(t2);
          throw t2;
        }
      }
      function M(e2) {
        const t2 = function() {
          if ("performance" in window == 0 && (window.performance = {}), "now" in window.performance == 0) {
            let e3 = Date.now();
            performance.timing && performance.timing.navigationStart && (e3 = performance.timing.navigationStart), window.performance.now = () => Date.now() - e3;
          }
          return window.performance.now();
        }().toString(36);
        return e2 ? e2 + t2 : t2;
      }
      function O(e2) {
        return /^\d+$/u.test(e2);
      }
      function D(e2, t2, s2) {
        if (Array.isArray(e2))
          return void e2.forEach((e3) => D(e3, t2));
        const r2 = Array.isArray(t2) ? t2 : t2.split(/\s+/u);
        let n2 = r2.length;
        for (; n2--; )
          Q(e2, r2[n2]) || z(e2, r2[n2], s2);
      }
      function V(e2, t2, s2) {
        if (Array.isArray(e2))
          return void e2.forEach((e3) => V(e3, t2, s2));
        const r2 = Array.isArray(t2) ? t2 : t2.split(/\s+/u);
        let n2 = r2.length;
        for (; n2--; )
          Q(e2, r2[n2]) && H(e2, r2[n2], s2);
      }
      function Q(e2, t2) {
        return e2.classList ? e2.classList.contains(t2) : G(t2).test(e2.className);
      }
      function B(e2, t2) {
        return e2.replace(/\{\s*([\w-]+)\s*\}/gu, (e3, s2) => {
          const r2 = void 0 === t2[s2] ? "" : t2[s2];
          return String(r2).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
        });
      }
      function U(e2, t2) {
        let s2;
        if (Array.isArray(e2)) {
          if (s2 = document.createElement(e2[0]), e2[1].id && (s2.id = e2[1].id), e2[1].classname && (s2.className = e2[1].classname), e2[1].attr) {
            const { attr: t3 } = e2[1];
            if (Array.isArray(t3)) {
              let e3 = -1;
              for (; ++e3 < t3.length; )
                s2.setAttribute(t3[e3].name, t3[e3].value);
            } else
              s2.setAttribute(t3.name, t3.value);
          }
        } else
          s2 = document.createElement(e2);
        s2.innerHTML = t2;
        const r2 = document.createDocumentFragment();
        for (; s2.childNodes[0]; )
          r2.append(s2.childNodes[0]);
        return s2.append(r2), s2;
      }
      function G(e2) {
        return new RegExp(`(^|\\s+) ${e2} (\\s+|$)`, "u");
      }
      function z(e2, t2, s2) {
        e2.classList ? e2.classList.add(t2) : e2.className = `${e2.className} ${t2}`.trim(), s2 && O(s2) && window.setTimeout(() => H(e2, t2), s2);
      }
      function H(e2, t2, s2) {
        e2.classList ? e2.classList.remove(t2) : e2.className = e2.className.replace(G(t2), " ").trim(), s2 && O(s2) && window.setTimeout(() => z(e2, t2), s2);
      }
      const K = q.cssClasses;
      class J {
        constructor(e2) {
          this.options = e2, this.els = this.createControl();
        }
        createControl() {
          let e2, t2, s2;
          return this.options.targetType === T ? (t2 = `${K.namespace} ${K.inputText.container}`, e2 = U(["div", { id: q.containerId, classname: t2 }], J.input), s2 = { container: e2, control: e2.querySelector(`.${K.inputText.control}`), label: e2.querySelector(`.${K.inputText.label}`), input: e2.querySelector(`.${K.inputText.input}`), search: e2.querySelector(`.${K.inputText.search}`), result: e2.querySelector(`.${K.inputText.result}`) }, s2.label.innerHTML = this.options.label) : (t2 = `${K.namespace} ${K.glass.container}`, e2 = U(["div", { id: q.containerId, classname: t2 }], J.glass), s2 = { container: e2, control: e2.querySelector(`.${K.glass.control}`), button: e2.querySelector(`.${K.glass.button}`), input: e2.querySelector(`.${K.glass.input}`), search: e2.querySelector(`.${K.glass.search}`), result: e2.querySelector(`.${K.glass.result}`) }), s2.input.placeholder = this.options.placeholder, s2;
        }
      }
      function W(e2) {
        return new Promise((t2, s2) => {
          const r2 = function(e3, t3) {
            t3 && "object" == typeof t3 && (e3 += (/\?/u.test(e3) ? "&" : "?") + X(t3));
            return e3;
          }(e2.url, e2.data), n2 = { method: "GET", mode: "cors", credentials: "same-origin" };
          e2.jsonp ? function(e3, t3, s3) {
            const { head: r3 } = document, n3 = document.createElement("script"), o2 = `f${Math.round(Math.random() * Date.now())}`;
            n3.setAttribute("src", `${e3 + (e3.indexOf("?") > 0 ? "&" : "?") + t3}=${o2}`), window[o2] = (e4) => {
              window[o2] = void 0, setTimeout(() => r3.removeChild(n3), 0), s3(e4);
            }, r3.append(n3);
          }(r2, e2.callbackName, t2) : fetch(r2, n2).then((e3) => e3.json()).then(t2).catch(s2);
        });
      }
      function X(e2) {
        return Object.keys(e2).reduce((t2, s2) => (t2.push("object" == typeof e2[s2] ? X(e2[s2]) : `${encodeURIComponent(s2)}=${encodeURIComponent(e2[s2])}`), t2), []).join("&");
      }
      J.glass = `
  <div class="${K.glass.control} ${K.olControl}">
    <button type="button" id="${q.buttonControlId}" class="${K.glass.button}"></button>
    <input type="text" id="${q.inputQueryId}" class="${K.glass.input}" autocomplete="off" placeholder="Search ...">
    <a id="${q.inputSearchId}" class="${K.glass.search} ${K.hidden}"></a>
  </div>
  <ul class="${K.glass.result}"></ul>
`, J.input = `
  <div class="${K.inputText.control}">
    <label type="button" id="${q.inputSearchId}" class="${K.inputText.label}"></label>
    <input type="text" id="${q.inputQueryId}" class="${K.inputText.input}" autocomplete="off" placeholder="Search ...">
    <span class="${K.inputText.icon}"></span>
    <button type="button" id="${q.inputSearchId}" class="${K.inputText.search} ${K.hidden}"></button>
  </div>
  <ul class="${K.inputText.result}"></ul>
`;
      class Y {
        constructor() {
          this.settings = { url: "https://photon.komoot.io/api/", params: { q: "", limit: 10, lang: "en" }, langs: ["de", "it", "fr", "en"] };
        }
        getParameters(e2) {
          return e2.lang = e2.lang.toLowerCase(), { url: this.settings.url, params: { q: e2.query, limit: e2.limit || this.settings.params.limit, lang: this.settings.langs.includes(e2.lang) ? e2.lang : this.settings.params.lang } };
        }
        handleResponse(e2) {
          return 0 === e2.features.length ? [] : e2.features.map((e3) => ({ lon: e3.geometry.coordinates[0], lat: e3.geometry.coordinates[1], address: { name: e3.properties.name, postcode: e3.properties.postcode, city: e3.properties.city, state: e3.properties.state, country: e3.properties.country }, original: { formatted: e3.properties.name, details: e3.properties } }));
        }
      }
      class Z {
        constructor(e2) {
          this.settings = { url: "https://nominatim.openstreetmap.org/search", ...e2, params: { q: "", format: "json", addressdetails: 1, limit: 10, countrycodes: "", viewbox: "", "accept-language": "en-US" } };
        }
        getParameters(e2) {
          return { url: this.settings.url, params: { q: e2.query, format: this.settings.params.format, addressdetails: this.settings.params.addressdetails, limit: e2.limit || this.settings.params.limit, countrycodes: e2.countrycodes || this.settings.params.countrycodes, viewbox: e2.viewbox || this.settings.params.viewbox, "accept-language": e2.lang || this.settings.params["accept-language"] } };
        }
        handleResponse(e2) {
          return 0 === e2.length ? [] : e2.map((e3) => ({ lon: e3.lon, lat: e3.lat, bbox: e3.boundingbox, address: { name: e3.display_name, road: e3.address.road || "", houseNumber: e3.address.house_number || "", postcode: e3.address.postcode, city: e3.address.city || e3.address.town, state: e3.address.state, country: e3.address.country }, original: { formatted: e3.display_name, details: e3.address } }));
        }
      }
      class ee {
        constructor() {
          this.settings = { url: "https://open.mapquestapi.com/nominatim/v1/search.php", params: { q: "", key: "", format: "json", addressdetails: 1, limit: 10, countrycodes: "", "accept-language": "en-US" } };
        }
        getParameters(e2) {
          return { url: this.settings.url, params: { q: e2.query, key: e2.key, format: "json", addressdetails: 1, limit: e2.limit || this.settings.params.limit, countrycodes: e2.countrycodes || this.settings.params.countrycodes, "accept-language": e2.lang || this.settings.params["accept-language"] } };
        }
        handleResponse(e2) {
          return 0 === e2.length ? [] : e2.map((e3) => ({ lon: e3.lon, lat: e3.lat, address: { name: e3.address.neighbourhood || "", road: e3.address.road || "", postcode: e3.address.postcode, city: e3.address.city || e3.address.town, state: e3.address.state, country: e3.address.country }, original: { formatted: e3.display_name, details: e3.address } }));
        }
      }
      class te {
        constructor() {
          this.settings = { url: "https://dev.virtualearth.net/REST/v1/Locations", callbackName: "jsonp", params: { query: "", key: "", includeNeighborhood: 0, maxResults: 10 } };
        }
        getParameters(e2) {
          return { url: this.settings.url, callbackName: this.settings.callbackName, params: { query: e2.query, key: e2.key, includeNeighborhood: e2.includeNeighborhood || this.settings.params.includeNeighborhood, maxResults: e2.maxResults || this.settings.params.maxResults } };
        }
        handleResponse(e2) {
          const { resources: t2 } = e2.resourceSets[0];
          return 0 === t2.length ? [] : t2.map((e3) => ({ lon: e3.point.coordinates[1], lat: e3.point.coordinates[0], address: { name: e3.name }, original: { formatted: e3.address.formattedAddress, details: e3.address } }));
        }
      }
      class se {
        constructor() {
          this.settings = { url: "https://api.opencagedata.com/geocode/v1/json?", params: { q: "", key: "", limit: 10, countrycode: "", pretty: 1, no_annotations: 1 } };
        }
        getParameters(e2) {
          return { url: this.settings.url, params: { q: e2.query, key: e2.key, limit: e2.limit || this.settings.params.limit, countrycode: e2.countrycodes || this.settings.params.countrycodes } };
        }
        handleResponse(e2) {
          return 0 === e2.results.length ? [] : e2.results.map((e3) => ({ lon: e3.geometry.lng, lat: e3.geometry.lat, address: { name: e3.components.house_number || "", road: e3.components.road || "", postcode: e3.components.postcode, city: e3.components.city || e3.components.town, state: e3.components.state, country: e3.components.country }, original: { formatted: e3.formatted, details: e3.components } }));
        }
      }
      const re = q.cssClasses;
      class ne {
        constructor(e2, t2) {
          this.Base = e2, this.layerName = M("geocoder-layer-"), this.layer = new h.default({ name: this.layerName, source: new m.default(), displayInLayerSwitcher: false }), this.options = e2.options, this.options.provider = "string" == typeof this.options.provider ? this.options.provider.toLowerCase() : this.options.provider, this.provider = this.newProvider(), this.els = t2, this.lastQuery = "", this.container = this.els.container, this.registeredListeners = { mapClick: false }, this.setListeners();
        }
        setListeners() {
          const e2 = (e3) => {
            e3.stopPropagation(), Q(this.els.control, re.glass.expanded) ? this.collapse() : this.expand();
          };
          this.els.input.addEventListener("keypress", (e3) => {
            const t2 = e3.target.value.trim();
            (e3.key ? "Enter" === e3.key : e3.which ? 13 === e3.which : !!e3.keyCode && 13 === e3.keyCode) && (e3.preventDefault(), this.query(t2));
          }, false), this.els.input.addEventListener("click", (e3) => e3.stopPropagation(), false), this.els.input.addEventListener("input", (e3) => {
            0 !== e3.target.value.trim().length ? V(this.els.search, re.hidden) : D(this.els.search, re.hidden);
          }, false), this.els.search.addEventListener("click", () => {
            this.els.input.focus(), this.query(this.els.input.value);
          }, false), this.options.targetType === E && this.els.button.addEventListener("click", e2, false);
        }
        query(e2) {
          this.provider || (this.provider = this.newProvider());
          const t2 = this.provider.getParameters({ query: e2, key: this.options.key, lang: this.options.lang, countrycodes: this.options.countrycodes, viewbox: this.options.viewbox, limit: this.options.limit });
          if (this.lastQuery === e2 && this.els.result.firstChild)
            return;
          this.lastQuery = e2, this.clearResults(), D(this.els.search, re.spin);
          const s2 = { url: t2.url, data: t2.params };
          t2.callbackName && (s2.jsonp = true, s2.callbackName = t2.callbackName), W(s2).then((e3) => {
            this.options.debug && console.info(e3), V(this.els.search, re.spin);
            const t3 = this.provider.handleResponse(e3);
            t3 && (this.createList(t3), this.listenMapClick());
          }).catch(() => {
            V(this.els.search, re.spin);
            const e3 = U("li", "<h5>Error! No internet connection?</h5>");
            this.els.result.append(e3);
          });
        }
        createList(e2) {
          const t2 = this.els.result;
          e2.forEach((s2) => {
            let r2;
            if (this.options.provider === I)
              r2 = `<span class="${re.road}">${s2.address.name}</span>`;
            else
              r2 = this.addressTemplate(s2.address);
            if (1 == e2.length)
              this.chosen(s2, r2, s2.address, s2.original);
            else {
              const e3 = U("li", `<a href="#">${r2}</a>`);
              e3.addEventListener("click", (e4) => {
                e4.preventDefault(), this.chosen(s2, r2, s2.address, s2.original);
              }, false), t2.append(e3);
            }
          });
        }
        chosen(e2, t2, s2, r2) {
          const n2 = this.Base.getMap(), o2 = [Number.parseFloat(e2.lon), Number.parseFloat(e2.lat)], a2 = n2.getView().getProjection(), i2 = f.transform(o2, "EPSG:4326", a2);
          let { bbox: l2 } = e2;
          l2 && (l2 = f.transformExtent([parseFloat(l2[2]), parseFloat(l2[0]), parseFloat(l2[3]), parseFloat(l2[1])], "EPSG:4326", a2));
          const c2 = { formatted: t2, details: s2, original: r2 };
          if (false === this.options.keepOpen && this.clearResults(true), true === this.options.preventDefault || true === this.options.preventMarker)
            this.Base.dispatchEvent({ type: L, address: c2, coordinate: i2, bbox: l2, place: e2 });
          else {
            const t3 = this.createFeature(i2, c2);
            this.Base.dispatchEvent({ type: L, address: c2, feature: t3, coordinate: i2, bbox: l2, place: e2 });
          }
          true !== this.options.preventDefault && true !== this.options.preventPanning && (l2 ? n2.getView().fit(l2, { duration: 500 }) : n2.getView().animate({ center: i2, resolution: this.options.defaultFlyResolution, duration: 500 }));
        }
        createFeature(e2) {
          const t2 = new y.default(new g.default(e2));
          return this.addLayer(), t2.setStyle(this.options.featureStyle), t2.setId(M("geocoder-ft-")), this.getSource().addFeature(t2), t2;
        }
        addressTemplate(e2) {
          const t2 = [];
          return e2.name && t2.push(['<span class="', re.road, '">{name}</span>'].join("")), (e2.road || e2.building || e2.house_number) && t2.push(['<span class="', re.road, '">{building} {road} {house_number}</span>'].join("")), (e2.city || e2.town || e2.village) && t2.push(['<span class="', re.city, '">{postcode} {city} {town} {village}</span>'].join("")), (e2.state || e2.country) && t2.push(['<span class="', re.country, '">{state} {country}</span>'].join("")), B(t2.join("<br>"), e2);
        }
        newProvider() {
          switch (this.options.provider) {
            case I:
              return new Z(this.options);
            case N:
              return new ee();
            case P:
              return new Y();
            case A:
              return new te();
            case R:
              return new se();
            default:
              return this.options.provider;
          }
        }
        expand() {
          V(this.els.input, re.spin), D(this.els.control, re.glass.expanded), window.setTimeout(() => this.els.input.focus(), 100), this.listenMapClick();
        }
        collapse() {
          this.els.input.value = "", this.els.input.blur(), D(this.els.search, re.hidden), V(this.els.control, re.glass.expanded), this.clearResults();
        }
        listenMapClick() {
          if (this.registeredListeners.mapClick)
            return;
          const e2 = this, t2 = this.Base.getMap().getTargetElement();
          this.registeredListeners.mapClick = true, t2.addEventListener("click", { handleEvent(s2) {
            e2.clearResults(true), t2.removeEventListener(s2.type, this, false), e2.registeredListeners.mapClick = false;
          } }, false);
        }
        clearResults(e2) {
          e2 && this.options.targetType === E ? this.collapse() : function(e3) {
            for (; e3.firstChild; )
              e3.firstChild.remove();
          }(this.els.result);
        }
        getSource() {
          return this.layer.getSource();
        }
        addLayer() {
          let e2 = false;
          const t2 = this.Base.getMap();
          t2.getLayers().forEach((t3) => {
            t3 === this.layer && (e2 = true);
          }), e2 || t2.addLayer(this.layer);
        }
      }
      class oe extends d.default {
        constructor(e2 = C, t2) {
          _("string" == typeof e2, "@param `type` should be string!"), _(e2 === C || e2 === j, `@param 'type' should be '${C}'
      or '${j}'!`);
          const s2 = { ...F, featureStyle: [new u.default({ image: new p.default({ scale: 0.7, src: "//cdn.rawgit.com/jonataswalker/map-utils/master/images/marker.png" }) })], ...t2 };
          let r2, n2;
          const o2 = new J(s2);
          if (e2 === C && (r2 = o2.els.container), super({ element: r2, ...s2 }), !(this instanceof oe))
            return new oe();
          this.options = s2, this.container = r2, e2 === C && (n2 = new ne(this, o2.els), this.layer = n2.layer);
        }
        getLayer() {
          return this.layer;
        }
        getSource() {
          return this.getLayer().getSource();
        }
        setProvider(e2) {
          this.options.provider = e2;
        }
        setProviderKey(e2) {
          this.options.key = e2;
        }
      }
      return oe;
    });
  }
});

// node_modules/ol/Map.js
init_Object();
init_Collection();
init_CollectionEventType();

// node_modules/ol/renderer/Map.js
init_Disposable();
init_functions();
init_util();
init_transform();
init_extent();
init_IconImageCache();
init_Layer();
init_coordinate();
var MapRenderer = class extends Disposable_default {
  /**
   * @param {import("../Map.js").default} map Map.
   */
  constructor(map) {
    super();
    this.map_ = map;
  }
  /**
   * @abstract
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  dispatchRenderEvent(type, frameState) {
    abstract();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @protected
   */
  calculateMatrices2D(frameState) {
    const viewState = frameState.viewState;
    const coordinateToPixelTransform = frameState.coordinateToPixelTransform;
    const pixelToCoordinateTransform = frameState.pixelToCoordinateTransform;
    compose(
      coordinateToPixelTransform,
      frameState.size[0] / 2,
      frameState.size[1] / 2,
      1 / viewState.resolution,
      -1 / viewState.resolution,
      -viewState.rotation,
      -viewState.center[0],
      -viewState.center[1]
    );
    makeInverse(pixelToCoordinateTransform, coordinateToPixelTransform);
  }
  /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {S} thisArg Value to use as `this` when executing `callback`.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
   * @return {T|undefined} Callback result.
   * @template S,T,U
   */
  forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, callback, thisArg, layerFilter, thisArg2) {
    let result;
    const viewState = frameState.viewState;
    function forEachFeatureAtCoordinate(managed, feature, layer, geometry) {
      return callback.call(thisArg, feature, managed ? layer : null, geometry);
    }
    const projection = viewState.projection;
    const translatedCoordinate = wrapX2(coordinate.slice(), projection);
    const offsets = [[0, 0]];
    if (projection.canWrapX() && checkWrapped) {
      const projectionExtent = projection.getExtent();
      const worldWidth = getWidth(projectionExtent);
      offsets.push([-worldWidth, 0], [worldWidth, 0]);
    }
    const layerStates = frameState.layerStatesArray;
    const numLayers = layerStates.length;
    const matches = (
      /** @type {Array<HitMatch<T>>} */
      []
    );
    const tmpCoord = [];
    for (let i = 0; i < offsets.length; i++) {
      for (let j = numLayers - 1; j >= 0; --j) {
        const layerState = layerStates[j];
        const layer = layerState.layer;
        if (layer.hasRenderer() && inView(layerState, viewState) && layerFilter.call(thisArg2, layer)) {
          const layerRenderer = layer.getRenderer();
          const source = layer.getSource();
          if (layerRenderer && source) {
            const coordinates2 = source.getWrapX() ? translatedCoordinate : coordinate;
            const callback2 = forEachFeatureAtCoordinate.bind(
              null,
              layerState.managed
            );
            tmpCoord[0] = coordinates2[0] + offsets[i][0];
            tmpCoord[1] = coordinates2[1] + offsets[i][1];
            result = layerRenderer.forEachFeatureAtCoordinate(
              tmpCoord,
              frameState,
              hitTolerance,
              callback2,
              matches
            );
          }
          if (result) {
            return result;
          }
        }
      }
    }
    if (matches.length === 0) {
      return void 0;
    }
    const order = 1 / matches.length;
    matches.forEach((m, i) => m.distanceSq += i * order);
    matches.sort((a, b) => a.distanceSq - b.distanceSq);
    matches.some((m) => {
      return result = m.callback(m.feature, m.layer, m.geometry);
    });
    return result;
  }
  /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
   * @return {boolean} Is there a feature at the given coordinate?
   * @template U
   */
  hasFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, layerFilter, thisArg) {
    const hasFeature = this.forEachFeatureAtCoordinate(
      coordinate,
      frameState,
      hitTolerance,
      checkWrapped,
      TRUE,
      this,
      layerFilter,
      thisArg
    );
    return hasFeature !== void 0;
  }
  /**
   * @return {import("../Map.js").default} Map.
   */
  getMap() {
    return this.map_;
  }
  /**
   * Render.
   * @abstract
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  renderFrame(frameState) {
    abstract();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  flushDeclutterItems(frameState) {
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  scheduleExpireIconCache(frameState) {
    if (shared.canExpireCache()) {
      frameState.postRenderFunctions.push(expireIconCache);
    }
  }
};
function expireIconCache(map, frameState) {
  shared.expire();
}
var Map_default = MapRenderer;

// node_modules/ol/renderer/Composite.js
init_ObjectEventType();
init_Event2();
init_EventType2();
init_css();
init_canvas();
init_Layer();
init_events();
init_dom();
var CompositeMapRenderer = class extends Map_default {
  /**
   * @param {import("../Map.js").default} map Map.
   */
  constructor(map) {
    super(map);
    this.fontChangeListenerKey_ = listen(
      checkedFonts,
      ObjectEventType_default.PROPERTYCHANGE,
      map.redrawText.bind(map)
    );
    this.element_ = document.createElement("div");
    const style = this.element_.style;
    style.position = "absolute";
    style.width = "100%";
    style.height = "100%";
    style.zIndex = "0";
    this.element_.className = CLASS_UNSELECTABLE + " ol-layers";
    const container = map.getViewport();
    container.insertBefore(this.element_, container.firstChild || null);
    this.children_ = [];
    this.renderedVisible_ = true;
    this.declutterLayers_ = [];
  }
  /**
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  dispatchRenderEvent(type, frameState) {
    const map = this.getMap();
    if (map.hasListener(type)) {
      const event = new Event_default2(type, void 0, frameState);
      map.dispatchEvent(event);
    }
  }
  disposeInternal() {
    unlistenByKey(this.fontChangeListenerKey_);
    this.element_.parentNode.removeChild(this.element_);
    super.disposeInternal();
  }
  /**
   * Render.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  renderFrame(frameState) {
    if (!frameState) {
      if (this.renderedVisible_) {
        this.element_.style.display = "none";
        this.renderedVisible_ = false;
      }
      return;
    }
    this.calculateMatrices2D(frameState);
    this.dispatchRenderEvent(EventType_default2.PRECOMPOSE, frameState);
    const layerStatesArray = frameState.layerStatesArray.sort(function(a, b) {
      return a.zIndex - b.zIndex;
    });
    const viewState = frameState.viewState;
    this.children_.length = 0;
    const declutterLayers = this.declutterLayers_;
    declutterLayers.length = 0;
    let previousElement = null;
    for (let i = 0, ii = layerStatesArray.length; i < ii; ++i) {
      const layerState = layerStatesArray[i];
      frameState.layerIndex = i;
      const layer = layerState.layer;
      const sourceState = layer.getSourceState();
      if (!inView(layerState, viewState) || sourceState != "ready" && sourceState != "undefined") {
        layer.unrender();
        continue;
      }
      const element = layer.render(frameState, previousElement);
      if (!element) {
        continue;
      }
      if (element !== previousElement) {
        this.children_.push(element);
        previousElement = element;
      }
      if ("getDeclutter" in layer) {
        declutterLayers.push(
          /** @type {import("../layer/BaseVector.js").default} */
          layer
        );
      }
    }
    this.flushDeclutterItems(frameState);
    replaceChildren(this.element_, this.children_);
    this.dispatchRenderEvent(EventType_default2.POSTCOMPOSE, frameState);
    if (!this.renderedVisible_) {
      this.element_.style.display = "";
      this.renderedVisible_ = true;
    }
    this.scheduleExpireIconCache(frameState);
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  flushDeclutterItems(frameState) {
    const layers = this.declutterLayers_;
    for (let i = layers.length - 1; i >= 0; --i) {
      layers[i].renderDeclutter(frameState);
    }
    layers.length = 0;
  }
};
var Composite_default = CompositeMapRenderer;

// node_modules/ol/Map.js
init_EventType();
init_Layer();

// node_modules/ol/layer/Group.js
init_Base();
init_Collection();
init_CollectionEventType();
init_Event();
init_EventType();
init_ObjectEventType();
init_asserts();
init_obj();
init_extent();
init_util();
init_events();
var GroupEvent = class extends Event_default {
  /**
   * @param {EventType} type The event type.
   * @param {BaseLayer} layer The layer.
   */
  constructor(type, layer) {
    super(type);
    this.layer = layer;
  }
};
var Property2 = {
  LAYERS: "layers"
};
var LayerGroup = class _LayerGroup extends Base_default {
  /**
   * @param {Options} [options] Layer options.
   */
  constructor(options) {
    options = options || {};
    const baseOptions = (
      /** @type {Options} */
      Object.assign({}, options)
    );
    delete baseOptions.layers;
    let layers = options.layers;
    super(baseOptions);
    this.on;
    this.once;
    this.un;
    this.layersListenerKeys_ = [];
    this.listenerKeys_ = {};
    this.addChangeListener(Property2.LAYERS, this.handleLayersChanged_);
    if (layers) {
      if (Array.isArray(layers)) {
        layers = new Collection_default(layers.slice(), { unique: true });
      } else {
        assert(
          typeof /** @type {?} */
          layers.getArray === "function",
          "Expected `layers` to be an array or a `Collection`"
        );
      }
    } else {
      layers = new Collection_default(void 0, { unique: true });
    }
    this.setLayers(layers);
  }
  /**
   * @private
   */
  handleLayerChange_() {
    this.changed();
  }
  /**
   * @private
   */
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(unlistenByKey);
    this.layersListenerKeys_.length = 0;
    const layers = this.getLayers();
    this.layersListenerKeys_.push(
      listen(layers, CollectionEventType_default.ADD, this.handleLayersAdd_, this),
      listen(layers, CollectionEventType_default.REMOVE, this.handleLayersRemove_, this)
    );
    for (const id in this.listenerKeys_) {
      this.listenerKeys_[id].forEach(unlistenByKey);
    }
    clear(this.listenerKeys_);
    const layersArray = layers.getArray();
    for (let i = 0, ii = layersArray.length; i < ii; i++) {
      const layer = layersArray[i];
      this.registerLayerListeners_(layer);
      this.dispatchEvent(new GroupEvent("addlayer", layer));
    }
    this.changed();
  }
  /**
   * @param {BaseLayer} layer The layer.
   */
  registerLayerListeners_(layer) {
    const listenerKeys = [
      listen(
        layer,
        ObjectEventType_default.PROPERTYCHANGE,
        this.handleLayerChange_,
        this
      ),
      listen(layer, EventType_default.CHANGE, this.handleLayerChange_, this)
    ];
    if (layer instanceof _LayerGroup) {
      listenerKeys.push(
        listen(layer, "addlayer", this.handleLayerGroupAdd_, this),
        listen(layer, "removelayer", this.handleLayerGroupRemove_, this)
      );
    }
    this.listenerKeys_[getUid(layer)] = listenerKeys;
  }
  /**
   * @param {GroupEvent} event The layer group event.
   */
  handleLayerGroupAdd_(event) {
    this.dispatchEvent(new GroupEvent("addlayer", event.layer));
  }
  /**
   * @param {GroupEvent} event The layer group event.
   */
  handleLayerGroupRemove_(event) {
    this.dispatchEvent(new GroupEvent("removelayer", event.layer));
  }
  /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */
  handleLayersAdd_(collectionEvent) {
    const layer = collectionEvent.element;
    this.registerLayerListeners_(layer);
    this.dispatchEvent(new GroupEvent("addlayer", layer));
    this.changed();
  }
  /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */
  handleLayersRemove_(collectionEvent) {
    const layer = collectionEvent.element;
    const key = getUid(layer);
    this.listenerKeys_[key].forEach(unlistenByKey);
    delete this.listenerKeys_[key];
    this.dispatchEvent(new GroupEvent("removelayer", layer));
    this.changed();
  }
  /**
   * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @return {!Collection<import("./Base.js").default>} Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */
  getLayers() {
    return (
      /** @type {!Collection<import("./Base.js").default>} */
      this.get(Property2.LAYERS)
    );
  }
  /**
   * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @param {!Collection<import("./Base.js").default>} layers Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */
  setLayers(layers) {
    const collection = this.getLayers();
    if (collection) {
      const currentLayers = collection.getArray();
      for (let i = 0, ii = currentLayers.length; i < ii; ++i) {
        this.dispatchEvent(new GroupEvent("removelayer", currentLayers[i]));
      }
    }
    this.set(Property2.LAYERS, layers);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(array) {
    array = array !== void 0 ? array : [];
    this.getLayers().forEach(function(layer) {
      layer.getLayersArray(array);
    });
    return array;
  }
  /**
   * Get the layer states list and use this groups z-index as the default
   * for all layers in this and nested groups, if it is unset at this point.
   * If dest is not provided and this group's z-index is undefined
   * 0 is used a the default z-index.
   * @param {Array<import("./Layer.js").State>} [dest] Optional list
   * of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(dest) {
    const states = dest !== void 0 ? dest : [];
    const pos = states.length;
    this.getLayers().forEach(function(layer) {
      layer.getLayerStatesArray(states);
    });
    const ownLayerState = this.getLayerState();
    let defaultZIndex = ownLayerState.zIndex;
    if (!dest && ownLayerState.zIndex === void 0) {
      defaultZIndex = 0;
    }
    for (let i = pos, ii = states.length; i < ii; i++) {
      const layerState = states[i];
      layerState.opacity *= ownLayerState.opacity;
      layerState.visible = layerState.visible && ownLayerState.visible;
      layerState.maxResolution = Math.min(
        layerState.maxResolution,
        ownLayerState.maxResolution
      );
      layerState.minResolution = Math.max(
        layerState.minResolution,
        ownLayerState.minResolution
      );
      layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
      layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
      if (ownLayerState.extent !== void 0) {
        if (layerState.extent !== void 0) {
          layerState.extent = getIntersection(
            layerState.extent,
            ownLayerState.extent
          );
        } else {
          layerState.extent = ownLayerState.extent;
        }
      }
      if (layerState.zIndex === void 0) {
        layerState.zIndex = defaultZIndex;
      }
    }
    return states;
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return "ready";
  }
};
var Group_default = LayerGroup;

// node_modules/ol/MapEvent.js
init_Event();
var MapEvent = class extends Event_default {
  /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {?import("./Map.js").FrameState} [frameState] Frame state.
   */
  constructor(type, map, frameState) {
    super(type);
    this.map = map;
    this.frameState = frameState !== void 0 ? frameState : null;
  }
};
var MapEvent_default = MapEvent;

// node_modules/ol/MapBrowserEvent.js
var MapBrowserEvent = class extends MapEvent_default {
  /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {EVENT} originalEvent Original event.
   * @param {boolean} [dragging] Is the map currently being dragged?
   * @param {import("./Map.js").FrameState} [frameState] Frame state.
   * @param {Array<PointerEvent>} [activePointers] Active pointers.
   */
  constructor(type, map, originalEvent, dragging, frameState, activePointers) {
    super(type, map, frameState);
    this.originalEvent = originalEvent;
    this.pixel_ = null;
    this.coordinate_ = null;
    this.dragging = dragging !== void 0 ? dragging : false;
    this.activePointers = activePointers;
  }
  /**
   * The map pixel relative to the viewport corresponding to the original event.
   * @type {import("./pixel.js").Pixel}
   * @api
   */
  get pixel() {
    if (!this.pixel_) {
      this.pixel_ = this.map.getEventPixel(this.originalEvent);
    }
    return this.pixel_;
  }
  set pixel(pixel) {
    this.pixel_ = pixel;
  }
  /**
   * The coordinate corresponding to the original browser event.  This will be in the user
   * projection if one is set.  Otherwise it will be in the view projection.
   * @type {import("./coordinate.js").Coordinate}
   * @api
   */
  get coordinate() {
    if (!this.coordinate_) {
      this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
    }
    return this.coordinate_;
  }
  set coordinate(coordinate) {
    this.coordinate_ = coordinate;
  }
  /**
   * Prevents the default browser action.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
   * @api
   */
  preventDefault() {
    super.preventDefault();
    if ("preventDefault" in this.originalEvent) {
      this.originalEvent.preventDefault();
    }
  }
  /**
   * Prevents further propagation of the current event.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
   * @api
   */
  stopPropagation() {
    super.stopPropagation();
    if ("stopPropagation" in this.originalEvent) {
      this.originalEvent.stopPropagation();
    }
  }
};
var MapBrowserEvent_default = MapBrowserEvent;

// node_modules/ol/MapBrowserEventHandler.js
init_EventType();

// node_modules/ol/MapBrowserEventType.js
init_EventType();
var MapBrowserEventType_default = {
  /**
   * A true single click with no dragging and no double click. Note that this
   * event is delayed by 250 ms to ensure that it is not a double click.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
   * @api
   */
  SINGLECLICK: "singleclick",
  /**
   * A click with no dragging. A double click will fire two of this.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
   * @api
   */
  CLICK: EventType_default.CLICK,
  /**
   * A true double click, with no dragging.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
   * @api
   */
  DBLCLICK: EventType_default.DBLCLICK,
  /**
   * Triggered when a pointer is dragged.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
   * @api
   */
  POINTERDRAG: "pointerdrag",
  /**
   * Triggered when a pointer is moved. Note that on touch devices this is
   * triggered when the map is panned, so is not the same as mousemove.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
   * @api
   */
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  POINTERCANCEL: "pointercancel"
};

// node_modules/ol/pointer/EventType.js
var EventType_default3 = {
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  POINTERCANCEL: "pointercancel"
};

// node_modules/ol/MapBrowserEventHandler.js
init_Target();
init_has();
init_events();
var MapBrowserEventHandler = class extends Target_default {
  /**
   * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
   * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
   */
  constructor(map, moveTolerance) {
    super(map);
    this.map_ = map;
    this.clickTimeoutId_;
    this.emulateClicks_ = false;
    this.dragging_ = false;
    this.dragListenerKeys_ = [];
    this.moveTolerance_ = moveTolerance === void 0 ? 1 : moveTolerance;
    this.down_ = null;
    const element = this.map_.getViewport();
    this.activePointers_ = [];
    this.trackedTouches_ = {};
    this.element_ = element;
    this.pointerdownListenerKey_ = listen(
      element,
      EventType_default3.POINTERDOWN,
      this.handlePointerDown_,
      this
    );
    this.originalPointerMoveEvent_;
    this.relayedListenerKey_ = listen(
      element,
      EventType_default3.POINTERMOVE,
      this.relayMoveEvent_,
      this
    );
    this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this);
    this.element_.addEventListener(
      EventType_default.TOUCHMOVE,
      this.boundHandleTouchMove_,
      PASSIVE_EVENT_LISTENERS ? { passive: false } : false
    );
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  emulateClick_(pointerEvent) {
    let newEvent = new MapBrowserEvent_default(
      MapBrowserEventType_default.CLICK,
      this.map_,
      pointerEvent
    );
    this.dispatchEvent(newEvent);
    if (this.clickTimeoutId_ !== void 0) {
      clearTimeout(this.clickTimeoutId_);
      this.clickTimeoutId_ = void 0;
      newEvent = new MapBrowserEvent_default(
        MapBrowserEventType_default.DBLCLICK,
        this.map_,
        pointerEvent
      );
      this.dispatchEvent(newEvent);
    } else {
      this.clickTimeoutId_ = setTimeout(() => {
        this.clickTimeoutId_ = void 0;
        const newEvent2 = new MapBrowserEvent_default(
          MapBrowserEventType_default.SINGLECLICK,
          this.map_,
          pointerEvent
        );
        this.dispatchEvent(newEvent2);
      }, 250);
    }
  }
  /**
   * Keeps track on how many pointers are currently active.
   *
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  updateActivePointers_(pointerEvent) {
    const event = pointerEvent;
    const id = event.pointerId;
    if (event.type == MapBrowserEventType_default.POINTERUP || event.type == MapBrowserEventType_default.POINTERCANCEL) {
      delete this.trackedTouches_[id];
      for (const pointerId in this.trackedTouches_) {
        if (this.trackedTouches_[pointerId].target !== event.target) {
          delete this.trackedTouches_[pointerId];
          break;
        }
      }
    } else if (event.type == MapBrowserEventType_default.POINTERDOWN || event.type == MapBrowserEventType_default.POINTERMOVE) {
      this.trackedTouches_[id] = event;
    }
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerUp_(pointerEvent) {
    this.updateActivePointers_(pointerEvent);
    const newEvent = new MapBrowserEvent_default(
      MapBrowserEventType_default.POINTERUP,
      this.map_,
      pointerEvent,
      void 0,
      void 0,
      this.activePointers_
    );
    this.dispatchEvent(newEvent);
    if (this.emulateClicks_ && !newEvent.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(pointerEvent)) {
      this.emulateClick_(this.down_);
    }
    if (this.activePointers_.length === 0) {
      this.dragListenerKeys_.forEach(unlistenByKey);
      this.dragListenerKeys_.length = 0;
      this.dragging_ = false;
      this.down_ = null;
    }
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} If the left mouse button was pressed.
   * @private
   */
  isMouseActionButton_(pointerEvent) {
    return pointerEvent.button === 0;
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerDown_(pointerEvent) {
    this.emulateClicks_ = this.activePointers_.length === 0;
    this.updateActivePointers_(pointerEvent);
    const newEvent = new MapBrowserEvent_default(
      MapBrowserEventType_default.POINTERDOWN,
      this.map_,
      pointerEvent,
      void 0,
      void 0,
      this.activePointers_
    );
    this.dispatchEvent(newEvent);
    this.down_ = new PointerEvent(pointerEvent.type, pointerEvent);
    Object.defineProperty(this.down_, "target", {
      writable: false,
      value: pointerEvent.target
    });
    if (this.dragListenerKeys_.length === 0) {
      const doc = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        listen(
          doc,
          MapBrowserEventType_default.POINTERMOVE,
          this.handlePointerMove_,
          this
        ),
        listen(doc, MapBrowserEventType_default.POINTERUP, this.handlePointerUp_, this),
        /* Note that the listener for `pointercancel is set up on
         * `pointerEventHandler_` and not `documentPointerEventHandler_` like
         * the `pointerup` and `pointermove` listeners.
         *
         * The reason for this is the following: `TouchSource.vacuumTouches_()`
         * issues `pointercancel` events, when there was no `touchend` for a
         * `touchstart`. Now, let's say a first `touchstart` is registered on
         * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
         * But `documentPointerEventHandler_` doesn't know about the first
         * `touchstart`. If there is no `touchend` for the `touchstart`, we can
         * only receive a `touchcancel` from `pointerEventHandler_`, because it is
         * only registered there.
         */
        listen(
          this.element_,
          MapBrowserEventType_default.POINTERCANCEL,
          this.handlePointerUp_,
          this
        )
      );
      if (this.element_.getRootNode && this.element_.getRootNode() !== doc) {
        this.dragListenerKeys_.push(
          listen(
            this.element_.getRootNode(),
            MapBrowserEventType_default.POINTERUP,
            this.handlePointerUp_,
            this
          )
        );
      }
    }
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerMove_(pointerEvent) {
    if (this.isMoving_(pointerEvent)) {
      this.updateActivePointers_(pointerEvent);
      this.dragging_ = true;
      const newEvent = new MapBrowserEvent_default(
        MapBrowserEventType_default.POINTERDRAG,
        this.map_,
        pointerEvent,
        this.dragging_,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(newEvent);
    }
  }
  /**
   * Wrap and relay a pointermove event.
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  relayMoveEvent_(pointerEvent) {
    this.originalPointerMoveEvent_ = pointerEvent;
    const dragging = !!(this.down_ && this.isMoving_(pointerEvent));
    this.dispatchEvent(
      new MapBrowserEvent_default(
        MapBrowserEventType_default.POINTERMOVE,
        this.map_,
        pointerEvent,
        dragging
      )
    );
  }
  /**
   * Flexible handling of a `touch-action: none` css equivalent: because calling
   * `preventDefault()` on a `pointermove` event does not stop native page scrolling
   * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
   * when an interaction (currently `DragPan` handles the event.
   * @param {TouchEvent} event Event.
   * @private
   */
  handleTouchMove_(event) {
    const originalEvent = this.originalPointerMoveEvent_;
    if ((!originalEvent || originalEvent.defaultPrevented) && (typeof event.cancelable !== "boolean" || event.cancelable === true)) {
      event.preventDefault();
    }
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} Is moving.
   * @private
   */
  isMoving_(pointerEvent) {
    return this.dragging_ || Math.abs(pointerEvent.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(pointerEvent.clientY - this.down_.clientY) > this.moveTolerance_;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    if (this.relayedListenerKey_) {
      unlistenByKey(this.relayedListenerKey_);
      this.relayedListenerKey_ = null;
    }
    this.element_.removeEventListener(
      EventType_default.TOUCHMOVE,
      this.boundHandleTouchMove_
    );
    if (this.pointerdownListenerKey_) {
      unlistenByKey(this.pointerdownListenerKey_);
      this.pointerdownListenerKey_ = null;
    }
    this.dragListenerKeys_.forEach(unlistenByKey);
    this.dragListenerKeys_.length = 0;
    this.element_ = null;
    super.disposeInternal();
  }
};
var MapBrowserEventHandler_default = MapBrowserEventHandler;

// node_modules/ol/Map.js
init_MapEventType();

// node_modules/ol/MapProperty.js
var MapProperty_default = {
  LAYERGROUP: "layergroup",
  SIZE: "size",
  TARGET: "target",
  VIEW: "view"
};

// node_modules/ol/Map.js
init_ObjectEventType();
init_EventType2();

// node_modules/ol/TileQueue.js
init_EventType();

// node_modules/ol/structs/PriorityQueue.js
init_asserts();
init_obj();
var DROP = Infinity;
var PriorityQueue = class {
  /**
   * @param {function(T): number} priorityFunction Priority function.
   * @param {function(T): string} keyFunction Key function.
   */
  constructor(priorityFunction, keyFunction) {
    this.priorityFunction_ = priorityFunction;
    this.keyFunction_ = keyFunction;
    this.elements_ = [];
    this.priorities_ = [];
    this.queuedElements_ = {};
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.elements_.length = 0;
    this.priorities_.length = 0;
    clear(this.queuedElements_);
  }
  /**
   * Remove and return the highest-priority element. O(log N).
   * @return {T} Element.
   */
  dequeue() {
    const elements = this.elements_;
    const priorities = this.priorities_;
    const element = elements[0];
    if (elements.length == 1) {
      elements.length = 0;
      priorities.length = 0;
    } else {
      elements[0] = /** @type {T} */
      elements.pop();
      priorities[0] = /** @type {number} */
      priorities.pop();
      this.siftUp_(0);
    }
    const elementKey = this.keyFunction_(element);
    delete this.queuedElements_[elementKey];
    return element;
  }
  /**
   * Enqueue an element. O(log N).
   * @param {T} element Element.
   * @return {boolean} The element was added to the queue.
   */
  enqueue(element) {
    assert(
      !(this.keyFunction_(element) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue"
    );
    const priority = this.priorityFunction_(element);
    if (priority != DROP) {
      this.elements_.push(element);
      this.priorities_.push(priority);
      this.queuedElements_[this.keyFunction_(element)] = true;
      this.siftDown_(0, this.elements_.length - 1);
      return true;
    }
    return false;
  }
  /**
   * @return {number} Count.
   */
  getCount() {
    return this.elements_.length;
  }
  /**
   * Gets the index of the left child of the node at the given index.
   * @param {number} index The index of the node to get the left child for.
   * @return {number} The index of the left child.
   * @private
   */
  getLeftChildIndex_(index) {
    return index * 2 + 1;
  }
  /**
   * Gets the index of the right child of the node at the given index.
   * @param {number} index The index of the node to get the right child for.
   * @return {number} The index of the right child.
   * @private
   */
  getRightChildIndex_(index) {
    return index * 2 + 2;
  }
  /**
   * Gets the index of the parent of the node at the given index.
   * @param {number} index The index of the node to get the parent for.
   * @return {number} The index of the parent.
   * @private
   */
  getParentIndex_(index) {
    return index - 1 >> 1;
  }
  /**
   * Make this a heap. O(N).
   * @private
   */
  heapify_() {
    let i;
    for (i = (this.elements_.length >> 1) - 1; i >= 0; i--) {
      this.siftUp_(i);
    }
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.elements_.length === 0;
  }
  /**
   * @param {string} key Key.
   * @return {boolean} Is key queued.
   */
  isKeyQueued(key) {
    return key in this.queuedElements_;
  }
  /**
   * @param {T} element Element.
   * @return {boolean} Is queued.
   */
  isQueued(element) {
    return this.isKeyQueued(this.keyFunction_(element));
  }
  /**
   * @param {number} index The index of the node to move down.
   * @private
   */
  siftUp_(index) {
    const elements = this.elements_;
    const priorities = this.priorities_;
    const count = elements.length;
    const element = elements[index];
    const priority = priorities[index];
    const startIndex = index;
    while (index < count >> 1) {
      const lIndex = this.getLeftChildIndex_(index);
      const rIndex = this.getRightChildIndex_(index);
      const smallerChildIndex = rIndex < count && priorities[rIndex] < priorities[lIndex] ? rIndex : lIndex;
      elements[index] = elements[smallerChildIndex];
      priorities[index] = priorities[smallerChildIndex];
      index = smallerChildIndex;
    }
    elements[index] = element;
    priorities[index] = priority;
    this.siftDown_(startIndex, index);
  }
  /**
   * @param {number} startIndex The index of the root.
   * @param {number} index The index of the node to move up.
   * @private
   */
  siftDown_(startIndex, index) {
    const elements = this.elements_;
    const priorities = this.priorities_;
    const element = elements[index];
    const priority = priorities[index];
    while (index > startIndex) {
      const parentIndex = this.getParentIndex_(index);
      if (priorities[parentIndex] > priority) {
        elements[index] = elements[parentIndex];
        priorities[index] = priorities[parentIndex];
        index = parentIndex;
      } else {
        break;
      }
    }
    elements[index] = element;
    priorities[index] = priority;
  }
  /**
   * FIXME empty description for jsdoc
   */
  reprioritize() {
    const priorityFunction = this.priorityFunction_;
    const elements = this.elements_;
    const priorities = this.priorities_;
    let index = 0;
    const n = elements.length;
    let element, i, priority;
    for (i = 0; i < n; ++i) {
      element = elements[i];
      priority = priorityFunction(element);
      if (priority == DROP) {
        delete this.queuedElements_[this.keyFunction_(element)];
      } else {
        priorities[index] = priority;
        elements[index++] = element;
      }
    }
    elements.length = index;
    priorities.length = index;
    this.heapify_();
  }
};
var PriorityQueue_default = PriorityQueue;

// node_modules/ol/TileState.js
var TileState_default = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  /**
   * Indicates that tile loading failed
   * @type {number}
   */
  ERROR: 3,
  EMPTY: 4
};

// node_modules/ol/TileQueue.js
var TileQueue = class extends PriorityQueue_default {
  /**
   * @param {PriorityFunction} tilePriorityFunction Tile priority function.
   * @param {function(): ?} tileChangeCallback Function called on each tile change event.
   */
  constructor(tilePriorityFunction, tileChangeCallback) {
    super(
      /**
       * @param {Array} element Element.
       * @return {number} Priority.
       */
      function(element) {
        return tilePriorityFunction.apply(null, element);
      },
      /**
       * @param {Array} element Element.
       * @return {string} Key.
       */
      function(element) {
        return (
          /** @type {import("./Tile.js").default} */
          element[0].getKey()
        );
      }
    );
    this.boundHandleTileChange_ = this.handleTileChange.bind(this);
    this.tileChangeCallback_ = tileChangeCallback;
    this.tilesLoading_ = 0;
    this.tilesLoadingKeys_ = {};
  }
  /**
   * @param {Array} element Element.
   * @return {boolean} The element was added to the queue.
   */
  enqueue(element) {
    const added = super.enqueue(element);
    if (added) {
      const tile = element[0];
      tile.addEventListener(EventType_default.CHANGE, this.boundHandleTileChange_);
    }
    return added;
  }
  /**
   * @return {number} Number of tiles loading.
   */
  getTilesLoading() {
    return this.tilesLoading_;
  }
  /**
   * @param {import("./events/Event.js").default} event Event.
   * @protected
   */
  handleTileChange(event) {
    const tile = (
      /** @type {import("./Tile.js").default} */
      event.target
    );
    const state = tile.getState();
    if (state === TileState_default.LOADED || state === TileState_default.ERROR || state === TileState_default.EMPTY) {
      if (state !== TileState_default.ERROR) {
        tile.removeEventListener(EventType_default.CHANGE, this.boundHandleTileChange_);
      }
      const tileKey = tile.getKey();
      if (tileKey in this.tilesLoadingKeys_) {
        delete this.tilesLoadingKeys_[tileKey];
        --this.tilesLoading_;
      }
      this.tileChangeCallback_();
    }
  }
  /**
   * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
   * @param {number} maxNewLoads Maximum number of new tiles to load.
   */
  loadMoreTiles(maxTotalLoading, maxNewLoads) {
    let newLoads = 0;
    let state, tile, tileKey;
    while (this.tilesLoading_ < maxTotalLoading && newLoads < maxNewLoads && this.getCount() > 0) {
      tile = /** @type {import("./Tile.js").default} */
      this.dequeue()[0];
      tileKey = tile.getKey();
      state = tile.getState();
      if (state === TileState_default.IDLE && !(tileKey in this.tilesLoadingKeys_)) {
        this.tilesLoadingKeys_[tileKey] = true;
        ++this.tilesLoading_;
        ++newLoads;
        tile.load();
      }
    }
  }
};
var TileQueue_default = TileQueue;
function getTilePriority(frameState, tile, tileSourceKey, tileCenter, tileResolution) {
  if (!frameState || !(tileSourceKey in frameState.wantedTiles)) {
    return DROP;
  }
  if (!frameState.wantedTiles[tileSourceKey][tile.getKey()]) {
    return DROP;
  }
  const center = frameState.viewState.center;
  const deltaX = tileCenter[0] - center[0];
  const deltaY = tileCenter[1] - center[1];
  return 65536 * Math.log(tileResolution) + Math.sqrt(deltaX * deltaX + deltaY * deltaY) / tileResolution;
}

// node_modules/ol/Map.js
init_View();
init_ViewHint();
init_has();
init_functions();
init_transform();
init_asserts();
init_extent();

// node_modules/ol/control/Attribution.js
init_Control();
init_EventType();
init_css();
init_array();
init_dom();
var Attribution = class extends Control_default {
  /**
   * @param {Options} [options] Attribution options.
   */
  constructor(options) {
    options = options ? options : {};
    super({
      element: document.createElement("div"),
      render: options.render,
      target: options.target
    });
    this.ulElement_ = document.createElement("ul");
    this.collapsed_ = options.collapsed !== void 0 ? options.collapsed : true;
    this.userCollapsed_ = this.collapsed_;
    this.overrideCollapsible_ = options.collapsible !== void 0;
    this.collapsible_ = options.collapsible !== void 0 ? options.collapsible : true;
    if (!this.collapsible_) {
      this.collapsed_ = false;
    }
    const className = options.className !== void 0 ? options.className : "ol-attribution";
    const tipLabel = options.tipLabel !== void 0 ? options.tipLabel : "Attributions";
    const expandClassName = options.expandClassName !== void 0 ? options.expandClassName : className + "-expand";
    const collapseLabel = options.collapseLabel !== void 0 ? options.collapseLabel : "\u203A";
    const collapseClassName = options.collapseClassName !== void 0 ? options.collapseClassName : className + "-collapse";
    if (typeof collapseLabel === "string") {
      this.collapseLabel_ = document.createElement("span");
      this.collapseLabel_.textContent = collapseLabel;
      this.collapseLabel_.className = collapseClassName;
    } else {
      this.collapseLabel_ = collapseLabel;
    }
    const label = options.label !== void 0 ? options.label : "i";
    if (typeof label === "string") {
      this.label_ = document.createElement("span");
      this.label_.textContent = label;
      this.label_.className = expandClassName;
    } else {
      this.label_ = label;
    }
    const activeLabel = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    this.toggleButton_ = document.createElement("button");
    this.toggleButton_.setAttribute("type", "button");
    this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
    this.toggleButton_.title = tipLabel;
    this.toggleButton_.appendChild(activeLabel);
    this.toggleButton_.addEventListener(
      EventType_default.CLICK,
      this.handleClick_.bind(this),
      false
    );
    const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL + (this.collapsed_ && this.collapsible_ ? " " + CLASS_COLLAPSED : "") + (this.collapsible_ ? "" : " ol-uncollapsible");
    const element = this.element;
    element.className = cssClasses;
    element.appendChild(this.toggleButton_);
    element.appendChild(this.ulElement_);
    this.renderedAttributions_ = [];
    this.renderedVisible_ = true;
  }
  /**
   * Collect a list of visible attributions and set the collapsible state.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {Array<string>} Attributions.
   * @private
   */
  collectSourceAttributions_(frameState) {
    const visibleAttributions = Array.from(
      new Set(
        this.getMap().getAllLayers().flatMap((layer) => layer.getAttributions(frameState))
      )
    );
    const collapsible = !this.getMap().getAllLayers().some(
      (layer) => layer.getSource() && layer.getSource().getAttributionsCollapsible() === false
    );
    if (!this.overrideCollapsible_) {
      this.setCollapsible(collapsible);
    }
    return visibleAttributions;
  }
  /**
   * @private
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  updateElement_(frameState) {
    if (!frameState) {
      if (this.renderedVisible_) {
        this.element.style.display = "none";
        this.renderedVisible_ = false;
      }
      return;
    }
    const attributions = this.collectSourceAttributions_(frameState);
    const visible = attributions.length > 0;
    if (this.renderedVisible_ != visible) {
      this.element.style.display = visible ? "" : "none";
      this.renderedVisible_ = visible;
    }
    if (equals(attributions, this.renderedAttributions_)) {
      return;
    }
    removeChildren(this.ulElement_);
    for (let i = 0, ii = attributions.length; i < ii; ++i) {
      const element = document.createElement("li");
      element.innerHTML = attributions[i];
      this.ulElement_.appendChild(element);
    }
    this.renderedAttributions_ = attributions;
  }
  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(event) {
    event.preventDefault();
    this.handleToggle_();
    this.userCollapsed_ = this.collapsed_;
  }
  /**
   * @private
   */
  handleToggle_() {
    this.element.classList.toggle(CLASS_COLLAPSED);
    if (this.collapsed_) {
      replaceNode(this.collapseLabel_, this.label_);
    } else {
      replaceNode(this.label_, this.collapseLabel_);
    }
    this.collapsed_ = !this.collapsed_;
    this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
  }
  /**
   * Return `true` if the attribution is collapsible, `false` otherwise.
   * @return {boolean} True if the widget is collapsible.
   * @api
   */
  getCollapsible() {
    return this.collapsible_;
  }
  /**
   * Set whether the attribution should be collapsible.
   * @param {boolean} collapsible True if the widget is collapsible.
   * @api
   */
  setCollapsible(collapsible) {
    if (this.collapsible_ === collapsible) {
      return;
    }
    this.collapsible_ = collapsible;
    this.element.classList.toggle("ol-uncollapsible");
    if (this.userCollapsed_) {
      this.handleToggle_();
    }
  }
  /**
   * Collapse or expand the attribution according to the passed parameter. Will
   * not do anything if the attribution isn't collapsible or if the current
   * collapsed state is already the one requested.
   * @param {boolean} collapsed True if the widget is collapsed.
   * @api
   */
  setCollapsed(collapsed) {
    this.userCollapsed_ = collapsed;
    if (!this.collapsible_ || this.collapsed_ === collapsed) {
      return;
    }
    this.handleToggle_();
  }
  /**
   * Return `true` when the attribution is currently collapsed or `false`
   * otherwise.
   * @return {boolean} True if the widget is collapsed.
   * @api
   */
  getCollapsed() {
    return this.collapsed_;
  }
  /**
   * Update the attribution element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */
  render(mapEvent) {
    this.updateElement_(mapEvent.frameState);
  }
};
var Attribution_default = Attribution;

// node_modules/ol/control/defaults.js
init_Collection();

// node_modules/ol/control/Rotate.js
init_Control();
init_EventType();
init_css();
init_easing();
var Rotate = class extends Control_default {
  /**
   * @param {Options} [options] Rotate options.
   */
  constructor(options) {
    options = options ? options : {};
    super({
      element: document.createElement("div"),
      render: options.render,
      target: options.target
    });
    const className = options.className !== void 0 ? options.className : "ol-rotate";
    const label = options.label !== void 0 ? options.label : "\u21E7";
    const compassClassName = options.compassClassName !== void 0 ? options.compassClassName : "ol-compass";
    this.label_ = null;
    if (typeof label === "string") {
      this.label_ = document.createElement("span");
      this.label_.className = compassClassName;
      this.label_.textContent = label;
    } else {
      this.label_ = label;
      this.label_.classList.add(compassClassName);
    }
    const tipLabel = options.tipLabel ? options.tipLabel : "Reset rotation";
    const button = document.createElement("button");
    button.className = className + "-reset";
    button.setAttribute("type", "button");
    button.title = tipLabel;
    button.appendChild(this.label_);
    button.addEventListener(
      EventType_default.CLICK,
      this.handleClick_.bind(this),
      false
    );
    const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL;
    const element = this.element;
    element.className = cssClasses;
    element.appendChild(button);
    this.callResetNorth_ = options.resetNorth ? options.resetNorth : void 0;
    this.duration_ = options.duration !== void 0 ? options.duration : 250;
    this.autoHide_ = options.autoHide !== void 0 ? options.autoHide : true;
    this.rotation_ = void 0;
    if (this.autoHide_) {
      this.element.classList.add(CLASS_HIDDEN);
    }
  }
  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(event) {
    event.preventDefault();
    if (this.callResetNorth_ !== void 0) {
      this.callResetNorth_();
    } else {
      this.resetNorth_();
    }
  }
  /**
   * @private
   */
  resetNorth_() {
    const map = this.getMap();
    const view = map.getView();
    if (!view) {
      return;
    }
    const rotation = view.getRotation();
    if (rotation !== void 0) {
      if (this.duration_ > 0 && rotation % (2 * Math.PI) !== 0) {
        view.animate({
          rotation: 0,
          duration: this.duration_,
          easing: easeOut
        });
      } else {
        view.setRotation(0);
      }
    }
  }
  /**
   * Update the rotate control element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */
  render(mapEvent) {
    const frameState = mapEvent.frameState;
    if (!frameState) {
      return;
    }
    const rotation = frameState.viewState.rotation;
    if (rotation != this.rotation_) {
      const transform2 = "rotate(" + rotation + "rad)";
      if (this.autoHide_) {
        const contains2 = this.element.classList.contains(CLASS_HIDDEN);
        if (!contains2 && rotation === 0) {
          this.element.classList.add(CLASS_HIDDEN);
        } else if (contains2 && rotation !== 0) {
          this.element.classList.remove(CLASS_HIDDEN);
        }
      }
      this.label_.style.transform = transform2;
    }
    this.rotation_ = rotation;
  }
};
var Rotate_default = Rotate;

// node_modules/ol/control/Zoom.js
init_Control();
init_EventType();
init_css();
init_easing();
var Zoom = class extends Control_default {
  /**
   * @param {Options} [options] Zoom options.
   */
  constructor(options) {
    options = options ? options : {};
    super({
      element: document.createElement("div"),
      target: options.target
    });
    const className = options.className !== void 0 ? options.className : "ol-zoom";
    const delta = options.delta !== void 0 ? options.delta : 1;
    const zoomInClassName = options.zoomInClassName !== void 0 ? options.zoomInClassName : className + "-in";
    const zoomOutClassName = options.zoomOutClassName !== void 0 ? options.zoomOutClassName : className + "-out";
    const zoomInLabel = options.zoomInLabel !== void 0 ? options.zoomInLabel : "+";
    const zoomOutLabel = options.zoomOutLabel !== void 0 ? options.zoomOutLabel : "\u2013";
    const zoomInTipLabel = options.zoomInTipLabel !== void 0 ? options.zoomInTipLabel : "Zoom in";
    const zoomOutTipLabel = options.zoomOutTipLabel !== void 0 ? options.zoomOutTipLabel : "Zoom out";
    const inElement = document.createElement("button");
    inElement.className = zoomInClassName;
    inElement.setAttribute("type", "button");
    inElement.title = zoomInTipLabel;
    inElement.appendChild(
      typeof zoomInLabel === "string" ? document.createTextNode(zoomInLabel) : zoomInLabel
    );
    inElement.addEventListener(
      EventType_default.CLICK,
      this.handleClick_.bind(this, delta),
      false
    );
    const outElement = document.createElement("button");
    outElement.className = zoomOutClassName;
    outElement.setAttribute("type", "button");
    outElement.title = zoomOutTipLabel;
    outElement.appendChild(
      typeof zoomOutLabel === "string" ? document.createTextNode(zoomOutLabel) : zoomOutLabel
    );
    outElement.addEventListener(
      EventType_default.CLICK,
      this.handleClick_.bind(this, -delta),
      false
    );
    const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL;
    const element = this.element;
    element.className = cssClasses;
    element.appendChild(inElement);
    element.appendChild(outElement);
    this.duration_ = options.duration !== void 0 ? options.duration : 250;
  }
  /**
   * @param {number} delta Zoom delta.
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(delta, event) {
    event.preventDefault();
    this.zoomByDelta_(delta);
  }
  /**
   * @param {number} delta Zoom delta.
   * @private
   */
  zoomByDelta_(delta) {
    const map = this.getMap();
    const view = map.getView();
    if (!view) {
      return;
    }
    const currentZoom = view.getZoom();
    if (currentZoom !== void 0) {
      const newZoom = view.getConstrainedZoom(currentZoom + delta);
      if (this.duration_ > 0) {
        if (view.getAnimating()) {
          view.cancelAnimations();
        }
        view.animate({
          zoom: newZoom,
          duration: this.duration_,
          easing: easeOut
        });
      } else {
        view.setZoom(newZoom);
      }
    }
  }
};
var Zoom_default = Zoom;

// node_modules/ol/control/defaults.js
function defaults(options) {
  options = options ? options : {};
  const controls = new Collection_default();
  const zoomControl = options.zoom !== void 0 ? options.zoom : true;
  if (zoomControl) {
    controls.push(new Zoom_default(options.zoomOptions));
  }
  const rotateControl = options.rotate !== void 0 ? options.rotate : true;
  if (rotateControl) {
    controls.push(new Rotate_default(options.rotateOptions));
  }
  const attributionControl = options.attribution !== void 0 ? options.attribution : true;
  if (attributionControl) {
    controls.push(new Attribution_default(options.attributionOptions));
  }
  return controls;
}

// node_modules/ol/interaction/defaults.js
init_Collection();

// node_modules/ol/interaction/Interaction.js
init_Object();

// node_modules/ol/interaction/Property.js
var Property_default2 = {
  ACTIVE: "active"
};

// node_modules/ol/interaction/Interaction.js
init_easing();
var Interaction = class extends Object_default {
  /**
   * @param {InteractionOptions} [options] Options.
   */
  constructor(options) {
    super();
    this.on;
    this.once;
    this.un;
    if (options && options.handleEvent) {
      this.handleEvent = options.handleEvent;
    }
    this.map_ = null;
    this.setActive(true);
  }
  /**
   * Return whether the interaction is currently active.
   * @return {boolean} `true` if the interaction is active, `false` otherwise.
   * @observable
   * @api
   */
  getActive() {
    return (
      /** @type {boolean} */
      this.get(Property_default2.ACTIVE)
    );
  }
  /**
   * Get the map associated with this interaction.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */
  getMap() {
    return this.map_;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */
  handleEvent(mapBrowserEvent) {
    return true;
  }
  /**
   * Activate or deactivate the interaction.
   * @param {boolean} active Active.
   * @observable
   * @api
   */
  setActive(active) {
    this.set(Property_default2.ACTIVE, active);
  }
  /**
   * Remove the interaction from its current map and attach it to the new map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMap(map) {
    this.map_ = map;
  }
};
function pan(view, delta, duration) {
  const currentCenter = view.getCenterInternal();
  if (currentCenter) {
    const center = [currentCenter[0] + delta[0], currentCenter[1] + delta[1]];
    view.animateInternal({
      duration: duration !== void 0 ? duration : 250,
      easing: linear,
      center: view.getConstrainedCenter(center)
    });
  }
}
function zoomByDelta(view, delta, anchor, duration) {
  const currentZoom = view.getZoom();
  if (currentZoom === void 0) {
    return;
  }
  const newZoom = view.getConstrainedZoom(currentZoom + delta);
  const newResolution = view.getResolutionForZoom(newZoom);
  if (view.getAnimating()) {
    view.cancelAnimations();
  }
  view.animate({
    resolution: newResolution,
    anchor,
    duration: duration !== void 0 ? duration : 250,
    easing: easeOut
  });
}
var Interaction_default = Interaction;

// node_modules/ol/interaction/DoubleClickZoom.js
var DoubleClickZoom = class extends Interaction_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super();
    options = options ? options : {};
    this.delta_ = options.delta ? options.delta : 1;
    this.duration_ = options.duration !== void 0 ? options.duration : 250;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
   * doubleclick) and eventually zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(mapBrowserEvent) {
    let stopEvent = false;
    if (mapBrowserEvent.type == MapBrowserEventType_default.DBLCLICK) {
      const browserEvent = (
        /** @type {MouseEvent} */
        mapBrowserEvent.originalEvent
      );
      const map = mapBrowserEvent.map;
      const anchor = mapBrowserEvent.coordinate;
      const delta = browserEvent.shiftKey ? -this.delta_ : this.delta_;
      const view = map.getView();
      zoomByDelta(view, delta, anchor, this.duration_);
      browserEvent.preventDefault();
      stopEvent = true;
    }
    return !stopEvent;
  }
};
var DoubleClickZoom_default = DoubleClickZoom;

// node_modules/ol/interaction/Pointer.js
var PointerInteraction = class extends Interaction_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    super(
      /** @type {import("./Interaction.js").InteractionOptions} */
      options
    );
    if (options.handleDownEvent) {
      this.handleDownEvent = options.handleDownEvent;
    }
    if (options.handleDragEvent) {
      this.handleDragEvent = options.handleDragEvent;
    }
    if (options.handleMoveEvent) {
      this.handleMoveEvent = options.handleMoveEvent;
    }
    if (options.handleUpEvent) {
      this.handleUpEvent = options.handleUpEvent;
    }
    if (options.stopDown) {
      this.stopDown = options.stopDown;
    }
    this.handlingDownUpSequence = false;
    this.targetPointers = [];
  }
  /**
   * Returns the current number of pointers involved in the interaction,
   * e.g. `2` when two fingers are used.
   * @return {number} The number of pointers.
   * @api
   */
  getPointerCount() {
    return this.targetPointers.length;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */
  handleDownEvent(mapBrowserEvent) {
    return false;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */
  handleDragEvent(mapBrowserEvent) {
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
   * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
   * detected.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */
  handleEvent(mapBrowserEvent) {
    if (!mapBrowserEvent.originalEvent) {
      return true;
    }
    let stopEvent = false;
    this.updateTrackedPointers_(mapBrowserEvent);
    if (this.handlingDownUpSequence) {
      if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERDRAG) {
        this.handleDragEvent(mapBrowserEvent);
        mapBrowserEvent.originalEvent.preventDefault();
      } else if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERUP) {
        const handledUp = this.handleUpEvent(mapBrowserEvent);
        this.handlingDownUpSequence = handledUp && this.targetPointers.length > 0;
      }
    } else {
      if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERDOWN) {
        const handled = this.handleDownEvent(mapBrowserEvent);
        this.handlingDownUpSequence = handled;
        stopEvent = this.stopDown(handled);
      } else if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERMOVE) {
        this.handleMoveEvent(mapBrowserEvent);
      }
    }
    return !stopEvent;
  }
  /**
   * Handle pointer move events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */
  handleMoveEvent(mapBrowserEvent) {
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */
  handleUpEvent(mapBrowserEvent) {
    return false;
  }
  /**
   * This function is used to determine if "down" events should be propagated
   * to other interactions or should be stopped.
   * @param {boolean} handled Was the event handled by the interaction?
   * @return {boolean} Should the `down` event be stopped?
   */
  stopDown(handled) {
    return handled;
  }
  /**
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @private
   */
  updateTrackedPointers_(mapBrowserEvent) {
    if (mapBrowserEvent.activePointers) {
      this.targetPointers = mapBrowserEvent.activePointers;
    }
  }
};
function centroid(pointerEvents) {
  const length = pointerEvents.length;
  let clientX = 0;
  let clientY = 0;
  for (let i = 0; i < length; i++) {
    clientX += pointerEvents[i].clientX;
    clientY += pointerEvents[i].clientY;
  }
  return { clientX: clientX / length, clientY: clientY / length };
}
var Pointer_default = PointerInteraction;

// node_modules/ol/interaction/DragPan.js
init_functions();

// node_modules/ol/events/condition.js
init_functions();
init_has();
init_asserts();
function all(var_args) {
  const conditions = arguments;
  return function(event) {
    let pass = true;
    for (let i = 0, ii = conditions.length; i < ii; ++i) {
      pass = pass && conditions[i](event);
      if (!pass) {
        break;
      }
    }
    return pass;
  };
}
var altShiftKeysOnly = function(mapBrowserEvent) {
  const originalEvent = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    mapBrowserEvent.originalEvent
  );
  return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
};
var focus = function(event) {
  const targetElement = event.map.getTargetElement();
  const activeElement = event.map.getOwnerDocument().activeElement;
  return targetElement.contains(activeElement);
};
var focusWithTabindex = function(event) {
  return event.map.getTargetElement().hasAttribute("tabindex") ? focus(event) : true;
};
var always = TRUE;
var mouseActionButton = function(mapBrowserEvent) {
  const originalEvent = (
    /** @type {MouseEvent} */
    mapBrowserEvent.originalEvent
  );
  return originalEvent.button == 0 && !(WEBKIT && MAC && originalEvent.ctrlKey);
};
var noModifierKeys = function(mapBrowserEvent) {
  const originalEvent = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    mapBrowserEvent.originalEvent
  );
  return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
var platformModifierKey = function(mapBrowserEvent) {
  const originalEvent = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    mapBrowserEvent.originalEvent
  );
  return MAC ? originalEvent.metaKey : originalEvent.ctrlKey;
};
var shiftKeyOnly = function(mapBrowserEvent) {
  const originalEvent = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    mapBrowserEvent.originalEvent
  );
  return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
};
var targetNotEditable = function(mapBrowserEvent) {
  const originalEvent = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    mapBrowserEvent.originalEvent
  );
  const tagName = (
    /** @type {Element} */
    originalEvent.target.tagName
  );
  return tagName !== "INPUT" && tagName !== "SELECT" && tagName !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
  // different type like `SVGElement`.
  // @ts-ignore
  !originalEvent.target.isContentEditable;
};
var mouseOnly = function(mapBrowserEvent) {
  const pointerEvent = (
    /** @type {import("../MapBrowserEvent").default} */
    mapBrowserEvent.originalEvent
  );
  assert(
    pointerEvent !== void 0,
    "mapBrowserEvent must originate from a pointer event"
  );
  return pointerEvent.pointerType == "mouse";
};
var primaryAction = function(mapBrowserEvent) {
  const pointerEvent = (
    /** @type {import("../MapBrowserEvent").default} */
    mapBrowserEvent.originalEvent
  );
  assert(
    pointerEvent !== void 0,
    "mapBrowserEvent must originate from a pointer event"
  );
  return pointerEvent.isPrimary && pointerEvent.button === 0;
};

// node_modules/ol/interaction/DragPan.js
init_easing();
init_coordinate();
var DragPan = class extends Pointer_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super({
      stopDown: FALSE
    });
    options = options ? options : {};
    this.kinetic_ = options.kinetic;
    this.lastCentroid = null;
    this.lastPointersCount_;
    this.panning_ = false;
    const condition = options.condition ? options.condition : all(noModifierKeys, primaryAction);
    this.condition_ = options.onFocusOnly ? all(focusWithTabindex, condition) : condition;
    this.noKinetic_ = false;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(mapBrowserEvent) {
    const map = mapBrowserEvent.map;
    if (!this.panning_) {
      this.panning_ = true;
      map.getView().beginInteraction();
    }
    const targetPointers = this.targetPointers;
    const centroid2 = map.getEventPixel(centroid(targetPointers));
    if (targetPointers.length == this.lastPointersCount_) {
      if (this.kinetic_) {
        this.kinetic_.update(centroid2[0], centroid2[1]);
      }
      if (this.lastCentroid) {
        const delta = [
          this.lastCentroid[0] - centroid2[0],
          centroid2[1] - this.lastCentroid[1]
        ];
        const map2 = mapBrowserEvent.map;
        const view = map2.getView();
        scale(delta, view.getResolution());
        rotate(delta, view.getRotation());
        view.adjustCenterInternal(delta);
      }
    } else if (this.kinetic_) {
      this.kinetic_.begin();
    }
    this.lastCentroid = centroid2;
    this.lastPointersCount_ = targetPointers.length;
    mapBrowserEvent.originalEvent.preventDefault();
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(mapBrowserEvent) {
    const map = mapBrowserEvent.map;
    const view = map.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const distance = this.kinetic_.getDistance();
        const angle = this.kinetic_.getAngle();
        const center = view.getCenterInternal();
        const centerpx = map.getPixelFromCoordinateInternal(center);
        const dest = map.getCoordinateFromPixelInternal([
          centerpx[0] - distance * Math.cos(angle),
          centerpx[1] - distance * Math.sin(angle)
        ]);
        view.animateInternal({
          center: view.getConstrainedCenter(dest),
          duration: 500,
          easing: easeOut
        });
      }
      if (this.panning_) {
        this.panning_ = false;
        view.endInteraction();
      }
      return false;
    }
    if (this.kinetic_) {
      this.kinetic_.begin();
    }
    this.lastCentroid = null;
    return true;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(mapBrowserEvent) {
    if (this.targetPointers.length > 0 && this.condition_(mapBrowserEvent)) {
      const map = mapBrowserEvent.map;
      const view = map.getView();
      this.lastCentroid = null;
      if (view.getAnimating()) {
        view.cancelAnimations();
      }
      if (this.kinetic_) {
        this.kinetic_.begin();
      }
      this.noKinetic_ = this.targetPointers.length > 1;
      return true;
    }
    return false;
  }
};
var DragPan_default = DragPan;

// node_modules/ol/interaction/DragRotate.js
init_functions();
init_rotationconstraint();
var DragRotate = class extends Pointer_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    super({
      stopDown: FALSE
    });
    this.condition_ = options.condition ? options.condition : altShiftKeysOnly;
    this.lastAngle_ = void 0;
    this.duration_ = options.duration !== void 0 ? options.duration : 250;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(mapBrowserEvent) {
    if (!mouseOnly(mapBrowserEvent)) {
      return;
    }
    const map = mapBrowserEvent.map;
    const view = map.getView();
    if (view.getConstraints().rotation === disable) {
      return;
    }
    const size = map.getSize();
    const offset = mapBrowserEvent.pixel;
    const theta = Math.atan2(size[1] / 2 - offset[1], offset[0] - size[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const delta = theta - this.lastAngle_;
      view.adjustRotationInternal(-delta);
    }
    this.lastAngle_ = theta;
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(mapBrowserEvent) {
    if (!mouseOnly(mapBrowserEvent)) {
      return true;
    }
    const map = mapBrowserEvent.map;
    const view = map.getView();
    view.endInteraction(this.duration_);
    return false;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(mapBrowserEvent) {
    if (!mouseOnly(mapBrowserEvent)) {
      return false;
    }
    if (mouseActionButton(mapBrowserEvent) && this.condition_(mapBrowserEvent)) {
      const map = mapBrowserEvent.map;
      map.getView().beginInteraction();
      this.lastAngle_ = void 0;
      return true;
    }
    return false;
  }
};
var DragRotate_default = DragRotate;

// node_modules/ol/interaction/DragBox.js
init_Event();

// node_modules/ol/render/Box.js
init_Disposable();
init_Polygon();
var RenderBox = class extends Disposable_default {
  /**
   * @param {string} className CSS class name.
   */
  constructor(className) {
    super();
    this.geometry_ = null;
    this.element_ = document.createElement("div");
    this.element_.style.position = "absolute";
    this.element_.style.pointerEvents = "auto";
    this.element_.className = "ol-box " + className;
    this.map_ = null;
    this.startPixel_ = null;
    this.endPixel_ = null;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.setMap(null);
  }
  /**
   * @private
   */
  render_() {
    const startPixel = this.startPixel_;
    const endPixel = this.endPixel_;
    const px = "px";
    const style = this.element_.style;
    style.left = Math.min(startPixel[0], endPixel[0]) + px;
    style.top = Math.min(startPixel[1], endPixel[1]) + px;
    style.width = Math.abs(endPixel[0] - startPixel[0]) + px;
    style.height = Math.abs(endPixel[1] - startPixel[1]) + px;
  }
  /**
   * @param {import("../Map.js").default|null} map Map.
   */
  setMap(map) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const style = this.element_.style;
      style.left = "inherit";
      style.top = "inherit";
      style.width = "inherit";
      style.height = "inherit";
    }
    this.map_ = map;
    if (this.map_) {
      this.map_.getOverlayContainer().appendChild(this.element_);
    }
  }
  /**
   * @param {import("../pixel.js").Pixel} startPixel Start pixel.
   * @param {import("../pixel.js").Pixel} endPixel End pixel.
   */
  setPixels(startPixel, endPixel) {
    this.startPixel_ = startPixel;
    this.endPixel_ = endPixel;
    this.createOrUpdateGeometry();
    this.render_();
  }
  /**
   * Creates or updates the cached geometry.
   */
  createOrUpdateGeometry() {
    const startPixel = this.startPixel_;
    const endPixel = this.endPixel_;
    const pixels = [
      startPixel,
      [startPixel[0], endPixel[1]],
      endPixel,
      [endPixel[0], startPixel[1]]
    ];
    const coordinates2 = pixels.map(
      this.map_.getCoordinateFromPixelInternal,
      this.map_
    );
    coordinates2[4] = coordinates2[0].slice();
    if (!this.geometry_) {
      this.geometry_ = new Polygon_default([coordinates2]);
    } else {
      this.geometry_.setCoordinates([coordinates2]);
    }
  }
  /**
   * @return {import("../geom/Polygon.js").default} Geometry.
   */
  getGeometry() {
    return this.geometry_;
  }
};
var Box_default = RenderBox;

// node_modules/ol/interaction/DragBox.js
var DragBoxEventType = {
  /**
   * Triggered upon drag box start.
   * @event DragBoxEvent#boxstart
   * @api
   */
  BOXSTART: "boxstart",
  /**
   * Triggered on drag when box is active.
   * @event DragBoxEvent#boxdrag
   * @api
   */
  BOXDRAG: "boxdrag",
  /**
   * Triggered upon drag box end.
   * @event DragBoxEvent#boxend
   * @api
   */
  BOXEND: "boxend",
  /**
   * Triggered upon drag box canceled.
   * @event DragBoxEvent#boxcancel
   * @api
   */
  BOXCANCEL: "boxcancel"
};
var DragBoxEvent = class extends Event_default {
  /**
   * @param {string} type The event type.
   * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
   */
  constructor(type, coordinate, mapBrowserEvent) {
    super(type);
    this.coordinate = coordinate;
    this.mapBrowserEvent = mapBrowserEvent;
  }
};
var DragBox = class extends Pointer_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super();
    this.on;
    this.once;
    this.un;
    options = options ? options : {};
    this.box_ = new Box_default(options.className || "ol-dragbox");
    this.minArea_ = options.minArea !== void 0 ? options.minArea : 64;
    if (options.onBoxEnd) {
      this.onBoxEnd = options.onBoxEnd;
    }
    this.startPixel_ = null;
    this.condition_ = options.condition ? options.condition : mouseActionButton;
    this.boxEndCondition_ = options.boxEndCondition ? options.boxEndCondition : this.defaultBoxEndCondition;
  }
  /**
   * The default condition for determining whether the boxend event
   * should fire.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
   *     leading to the box end.
   * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
   * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
   * @return {boolean} Whether or not the boxend condition should be fired.
   */
  defaultBoxEndCondition(mapBrowserEvent, startPixel, endPixel) {
    const width = endPixel[0] - startPixel[0];
    const height = endPixel[1] - startPixel[1];
    return width * width + height * height >= this.minArea_;
  }
  /**
   * Returns geometry of last drawn box.
   * @return {import("../geom/Polygon.js").default} Geometry.
   * @api
   */
  getGeometry() {
    return this.box_.getGeometry();
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(mapBrowserEvent) {
    this.box_.setPixels(this.startPixel_, mapBrowserEvent.pixel);
    this.dispatchEvent(
      new DragBoxEvent(
        DragBoxEventType.BOXDRAG,
        mapBrowserEvent.coordinate,
        mapBrowserEvent
      )
    );
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(mapBrowserEvent) {
    this.box_.setMap(null);
    const completeBox = this.boxEndCondition_(
      mapBrowserEvent,
      this.startPixel_,
      mapBrowserEvent.pixel
    );
    if (completeBox) {
      this.onBoxEnd(mapBrowserEvent);
    }
    this.dispatchEvent(
      new DragBoxEvent(
        completeBox ? DragBoxEventType.BOXEND : DragBoxEventType.BOXCANCEL,
        mapBrowserEvent.coordinate,
        mapBrowserEvent
      )
    );
    return false;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(mapBrowserEvent) {
    if (this.condition_(mapBrowserEvent)) {
      this.startPixel_ = mapBrowserEvent.pixel;
      this.box_.setMap(mapBrowserEvent.map);
      this.box_.setPixels(this.startPixel_, this.startPixel_);
      this.dispatchEvent(
        new DragBoxEvent(
          DragBoxEventType.BOXSTART,
          mapBrowserEvent.coordinate,
          mapBrowserEvent
        )
      );
      return true;
    }
    return false;
  }
  /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */
  onBoxEnd(event) {
  }
};
var DragBox_default = DragBox;

// node_modules/ol/interaction/DragZoom.js
init_easing();
var DragZoom = class extends DragBox_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const condition = options.condition ? options.condition : shiftKeyOnly;
    super({
      condition,
      className: options.className || "ol-dragzoom",
      minArea: options.minArea
    });
    this.duration_ = options.duration !== void 0 ? options.duration : 200;
    this.out_ = options.out !== void 0 ? options.out : false;
  }
  /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */
  onBoxEnd(event) {
    const map = this.getMap();
    const view = (
      /** @type {!import("../View.js").default} */
      map.getView()
    );
    let geometry = this.getGeometry();
    if (this.out_) {
      const rotatedExtent = view.rotatedExtentForGeometry(geometry);
      const resolution = view.getResolutionForExtentInternal(rotatedExtent);
      const factor = view.getResolution() / resolution;
      geometry = geometry.clone();
      geometry.scale(factor * factor);
    }
    view.fitInternal(geometry, {
      duration: this.duration_,
      easing: easeOut
    });
  }
};
var DragZoom_default = DragZoom;

// node_modules/ol/interaction/KeyboardPan.js
init_EventType();

// node_modules/ol/events/Key.js
var Key_default = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown"
};

// node_modules/ol/interaction/KeyboardPan.js
init_coordinate();
var KeyboardPan = class extends Interaction_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super();
    options = options || {};
    this.defaultCondition_ = function(mapBrowserEvent) {
      return noModifierKeys(mapBrowserEvent) && targetNotEditable(mapBrowserEvent);
    };
    this.condition_ = options.condition !== void 0 ? options.condition : this.defaultCondition_;
    this.duration_ = options.duration !== void 0 ? options.duration : 100;
    this.pixelDelta_ = options.pixelDelta !== void 0 ? options.pixelDelta : 128;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides the direction to pan to (if an arrow key was
   * pressed).
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(mapBrowserEvent) {
    let stopEvent = false;
    if (mapBrowserEvent.type == EventType_default.KEYDOWN) {
      const keyEvent = (
        /** @type {KeyboardEvent} */
        mapBrowserEvent.originalEvent
      );
      const key = keyEvent.key;
      if (this.condition_(mapBrowserEvent) && (key == Key_default.DOWN || key == Key_default.LEFT || key == Key_default.RIGHT || key == Key_default.UP)) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        const mapUnitsDelta = view.getResolution() * this.pixelDelta_;
        let deltaX = 0, deltaY = 0;
        if (key == Key_default.DOWN) {
          deltaY = -mapUnitsDelta;
        } else if (key == Key_default.LEFT) {
          deltaX = -mapUnitsDelta;
        } else if (key == Key_default.RIGHT) {
          deltaX = mapUnitsDelta;
        } else {
          deltaY = mapUnitsDelta;
        }
        const delta = [deltaX, deltaY];
        rotate(delta, view.getRotation());
        pan(view, delta, this.duration_);
        keyEvent.preventDefault();
        stopEvent = true;
      }
    }
    return !stopEvent;
  }
};
var KeyboardPan_default = KeyboardPan;

// node_modules/ol/interaction/KeyboardZoom.js
init_EventType();
var KeyboardZoom = class extends Interaction_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super();
    options = options ? options : {};
    this.condition_ = options.condition ? options.condition : function(mapBrowserEvent) {
      return !platformModifierKey(mapBrowserEvent) && targetNotEditable(mapBrowserEvent);
    };
    this.delta_ = options.delta ? options.delta : 1;
    this.duration_ = options.duration !== void 0 ? options.duration : 100;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
   * key pressed was '+' or '-').
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(mapBrowserEvent) {
    let stopEvent = false;
    if (mapBrowserEvent.type == EventType_default.KEYDOWN || mapBrowserEvent.type == EventType_default.KEYPRESS) {
      const keyEvent = (
        /** @type {KeyboardEvent} */
        mapBrowserEvent.originalEvent
      );
      const key = keyEvent.key;
      if (this.condition_(mapBrowserEvent) && (key === "+" || key === "-")) {
        const map = mapBrowserEvent.map;
        const delta = key === "+" ? this.delta_ : -this.delta_;
        const view = map.getView();
        zoomByDelta(view, delta, void 0, this.duration_);
        keyEvent.preventDefault();
        stopEvent = true;
      }
    }
    return !stopEvent;
  }
};
var KeyboardZoom_default = KeyboardZoom;

// node_modules/ol/Kinetic.js
var Kinetic = class {
  /**
   * @param {number} decay Rate of decay (must be negative).
   * @param {number} minVelocity Minimum velocity (pixels/millisecond).
   * @param {number} delay Delay to consider to calculate the kinetic
   *     initial values (milliseconds).
   */
  constructor(decay, minVelocity, delay) {
    this.decay_ = decay;
    this.minVelocity_ = minVelocity;
    this.delay_ = delay;
    this.points_ = [];
    this.angle_ = 0;
    this.initialVelocity_ = 0;
  }
  /**
   * FIXME empty description for jsdoc
   */
  begin() {
    this.points_.length = 0;
    this.angle_ = 0;
    this.initialVelocity_ = 0;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   */
  update(x, y) {
    this.points_.push(x, y, Date.now());
  }
  /**
   * @return {boolean} Whether we should do kinetic animation.
   */
  end() {
    if (this.points_.length < 6) {
      return false;
    }
    const delay = Date.now() - this.delay_;
    const lastIndex = this.points_.length - 3;
    if (this.points_[lastIndex + 2] < delay) {
      return false;
    }
    let firstIndex = lastIndex - 3;
    while (firstIndex > 0 && this.points_[firstIndex + 2] > delay) {
      firstIndex -= 3;
    }
    const duration = this.points_[lastIndex + 2] - this.points_[firstIndex + 2];
    if (duration < 1e3 / 60) {
      return false;
    }
    const dx = this.points_[lastIndex] - this.points_[firstIndex];
    const dy = this.points_[lastIndex + 1] - this.points_[firstIndex + 1];
    this.angle_ = Math.atan2(dy, dx);
    this.initialVelocity_ = Math.sqrt(dx * dx + dy * dy) / duration;
    return this.initialVelocity_ > this.minVelocity_;
  }
  /**
   * @return {number} Total distance travelled (pixels).
   */
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  /**
   * @return {number} Angle of the kinetic panning animation (radians).
   */
  getAngle() {
    return this.angle_;
  }
};
var Kinetic_default = Kinetic;

// node_modules/ol/interaction/MouseWheelZoom.js
init_EventType();
init_has();
init_math();
var MouseWheelZoom = class extends Interaction_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    super(
      /** @type {import("./Interaction.js").InteractionOptions} */
      options
    );
    this.totalDelta_ = 0;
    this.lastDelta_ = 0;
    this.maxDelta_ = options.maxDelta !== void 0 ? options.maxDelta : 1;
    this.duration_ = options.duration !== void 0 ? options.duration : 250;
    this.timeout_ = options.timeout !== void 0 ? options.timeout : 80;
    this.useAnchor_ = options.useAnchor !== void 0 ? options.useAnchor : true;
    this.constrainResolution_ = options.constrainResolution !== void 0 ? options.constrainResolution : false;
    const condition = options.condition ? options.condition : always;
    this.condition_ = options.onFocusOnly ? all(focusWithTabindex, condition) : condition;
    this.lastAnchor_ = null;
    this.startTime_ = void 0;
    this.timeoutId_;
    this.mode_ = void 0;
    this.trackpadEventGap_ = 400;
    this.trackpadTimeoutId_;
    this.deltaPerZoom_ = 300;
  }
  /**
   * @private
   */
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const map = this.getMap();
    if (!map) {
      return;
    }
    const view = map.getView();
    view.endInteraction(
      void 0,
      this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0,
      this.lastAnchor_
    );
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
   * zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(mapBrowserEvent) {
    if (!this.condition_(mapBrowserEvent)) {
      return true;
    }
    const type = mapBrowserEvent.type;
    if (type !== EventType_default.WHEEL) {
      return true;
    }
    const map = mapBrowserEvent.map;
    const wheelEvent = (
      /** @type {WheelEvent} */
      mapBrowserEvent.originalEvent
    );
    wheelEvent.preventDefault();
    if (this.useAnchor_) {
      this.lastAnchor_ = mapBrowserEvent.coordinate;
    }
    let delta;
    if (mapBrowserEvent.type == EventType_default.WHEEL) {
      delta = wheelEvent.deltaY;
      if (FIREFOX && wheelEvent.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
        delta /= DEVICE_PIXEL_RATIO;
      }
      if (wheelEvent.deltaMode === WheelEvent.DOM_DELTA_LINE) {
        delta *= 40;
      }
    }
    if (delta === 0) {
      return false;
    }
    this.lastDelta_ = delta;
    const now = Date.now();
    if (this.startTime_ === void 0) {
      this.startTime_ = now;
    }
    if (!this.mode_ || now - this.startTime_ > this.trackpadEventGap_) {
      this.mode_ = Math.abs(delta) < 4 ? "trackpad" : "wheel";
    }
    const view = map.getView();
    if (this.mode_ === "trackpad" && !(view.getConstrainResolution() || this.constrainResolution_)) {
      if (this.trackpadTimeoutId_) {
        clearTimeout(this.trackpadTimeoutId_);
      } else {
        if (view.getAnimating()) {
          view.cancelAnimations();
        }
        view.beginInteraction();
      }
      this.trackpadTimeoutId_ = setTimeout(
        this.endInteraction_.bind(this),
        this.timeout_
      );
      view.adjustZoom(-delta / this.deltaPerZoom_, this.lastAnchor_);
      this.startTime_ = now;
      return false;
    }
    this.totalDelta_ += delta;
    const timeLeft = Math.max(this.timeout_ - (now - this.startTime_), 0);
    clearTimeout(this.timeoutId_);
    this.timeoutId_ = setTimeout(
      this.handleWheelZoom_.bind(this, map),
      timeLeft
    );
    return false;
  }
  /**
   * @private
   * @param {import("../Map.js").default} map Map.
   */
  handleWheelZoom_(map) {
    const view = map.getView();
    if (view.getAnimating()) {
      view.cancelAnimations();
    }
    let delta = -clamp(
      this.totalDelta_,
      -this.maxDelta_ * this.deltaPerZoom_,
      this.maxDelta_ * this.deltaPerZoom_
    ) / this.deltaPerZoom_;
    if (view.getConstrainResolution() || this.constrainResolution_) {
      delta = delta ? delta > 0 ? 1 : -1 : 0;
    }
    zoomByDelta(view, delta, this.lastAnchor_, this.duration_);
    this.mode_ = void 0;
    this.totalDelta_ = 0;
    this.lastAnchor_ = null;
    this.startTime_ = void 0;
    this.timeoutId_ = void 0;
  }
  /**
   * Enable or disable using the mouse's location as an anchor when zooming
   * @param {boolean} useAnchor true to zoom to the mouse's location, false
   * to zoom to the center of the map
   * @api
   */
  setMouseAnchor(useAnchor) {
    this.useAnchor_ = useAnchor;
    if (!useAnchor) {
      this.lastAnchor_ = null;
    }
  }
};
var MouseWheelZoom_default = MouseWheelZoom;

// node_modules/ol/interaction/PinchRotate.js
init_functions();
init_rotationconstraint();
var PinchRotate = class extends Pointer_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const pointerOptions = (
      /** @type {import("./Pointer.js").Options} */
      options
    );
    if (!pointerOptions.stopDown) {
      pointerOptions.stopDown = FALSE;
    }
    super(pointerOptions);
    this.anchor_ = null;
    this.lastAngle_ = void 0;
    this.rotating_ = false;
    this.rotationDelta_ = 0;
    this.threshold_ = options.threshold !== void 0 ? options.threshold : 0.3;
    this.duration_ = options.duration !== void 0 ? options.duration : 250;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(mapBrowserEvent) {
    let rotationDelta = 0;
    const touch0 = this.targetPointers[0];
    const touch1 = this.targetPointers[1];
    const angle = Math.atan2(
      touch1.clientY - touch0.clientY,
      touch1.clientX - touch0.clientX
    );
    if (this.lastAngle_ !== void 0) {
      const delta = angle - this.lastAngle_;
      this.rotationDelta_ += delta;
      if (!this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_) {
        this.rotating_ = true;
      }
      rotationDelta = delta;
    }
    this.lastAngle_ = angle;
    const map = mapBrowserEvent.map;
    const view = map.getView();
    if (view.getConstraints().rotation === disable) {
      return;
    }
    this.anchor_ = map.getCoordinateFromPixelInternal(
      map.getEventPixel(centroid(this.targetPointers))
    );
    if (this.rotating_) {
      map.render();
      view.adjustRotationInternal(rotationDelta, this.anchor_);
    }
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(mapBrowserEvent) {
    if (this.targetPointers.length < 2) {
      const map = mapBrowserEvent.map;
      const view = map.getView();
      view.endInteraction(this.duration_);
      return false;
    }
    return true;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(mapBrowserEvent) {
    if (this.targetPointers.length >= 2) {
      const map = mapBrowserEvent.map;
      this.anchor_ = null;
      this.lastAngle_ = void 0;
      this.rotating_ = false;
      this.rotationDelta_ = 0;
      if (!this.handlingDownUpSequence) {
        map.getView().beginInteraction();
      }
      return true;
    }
    return false;
  }
};
var PinchRotate_default = PinchRotate;

// node_modules/ol/interaction/PinchZoom.js
init_functions();
var PinchZoom = class extends Pointer_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const pointerOptions = (
      /** @type {import("./Pointer.js").Options} */
      options
    );
    if (!pointerOptions.stopDown) {
      pointerOptions.stopDown = FALSE;
    }
    super(pointerOptions);
    this.anchor_ = null;
    this.duration_ = options.duration !== void 0 ? options.duration : 400;
    this.lastDistance_ = void 0;
    this.lastScaleDelta_ = 1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(mapBrowserEvent) {
    let scaleDelta = 1;
    const touch0 = this.targetPointers[0];
    const touch1 = this.targetPointers[1];
    const dx = touch0.clientX - touch1.clientX;
    const dy = touch0.clientY - touch1.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (this.lastDistance_ !== void 0) {
      scaleDelta = this.lastDistance_ / distance;
    }
    this.lastDistance_ = distance;
    const map = mapBrowserEvent.map;
    const view = map.getView();
    if (scaleDelta != 1) {
      this.lastScaleDelta_ = scaleDelta;
    }
    this.anchor_ = map.getCoordinateFromPixelInternal(
      map.getEventPixel(centroid(this.targetPointers))
    );
    map.render();
    view.adjustResolutionInternal(scaleDelta, this.anchor_);
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(mapBrowserEvent) {
    if (this.targetPointers.length < 2) {
      const map = mapBrowserEvent.map;
      const view = map.getView();
      const direction = this.lastScaleDelta_ > 1 ? 1 : -1;
      view.endInteraction(this.duration_, direction);
      return false;
    }
    return true;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(mapBrowserEvent) {
    if (this.targetPointers.length >= 2) {
      const map = mapBrowserEvent.map;
      this.anchor_ = null;
      this.lastDistance_ = void 0;
      this.lastScaleDelta_ = 1;
      if (!this.handlingDownUpSequence) {
        map.getView().beginInteraction();
      }
      return true;
    }
    return false;
  }
};
var PinchZoom_default = PinchZoom;

// node_modules/ol/interaction/defaults.js
function defaults2(options) {
  options = options ? options : {};
  const interactions = new Collection_default();
  const kinetic = new Kinetic_default(-5e-3, 0.05, 100);
  const altShiftDragRotate = options.altShiftDragRotate !== void 0 ? options.altShiftDragRotate : true;
  if (altShiftDragRotate) {
    interactions.push(new DragRotate_default());
  }
  const doubleClickZoom = options.doubleClickZoom !== void 0 ? options.doubleClickZoom : true;
  if (doubleClickZoom) {
    interactions.push(
      new DoubleClickZoom_default({
        delta: options.zoomDelta,
        duration: options.zoomDuration
      })
    );
  }
  const dragPan = options.dragPan !== void 0 ? options.dragPan : true;
  if (dragPan) {
    interactions.push(
      new DragPan_default({
        onFocusOnly: options.onFocusOnly,
        kinetic
      })
    );
  }
  const pinchRotate = options.pinchRotate !== void 0 ? options.pinchRotate : true;
  if (pinchRotate) {
    interactions.push(new PinchRotate_default());
  }
  const pinchZoom = options.pinchZoom !== void 0 ? options.pinchZoom : true;
  if (pinchZoom) {
    interactions.push(
      new PinchZoom_default({
        duration: options.zoomDuration
      })
    );
  }
  const keyboard = options.keyboard !== void 0 ? options.keyboard : true;
  if (keyboard) {
    interactions.push(new KeyboardPan_default());
    interactions.push(
      new KeyboardZoom_default({
        delta: options.zoomDelta,
        duration: options.zoomDuration
      })
    );
  }
  const mouseWheelZoom = options.mouseWheelZoom !== void 0 ? options.mouseWheelZoom : true;
  if (mouseWheelZoom) {
    interactions.push(
      new MouseWheelZoom_default({
        onFocusOnly: options.onFocusOnly,
        duration: options.zoomDuration
      })
    );
  }
  const shiftDragZoom = options.shiftDragZoom !== void 0 ? options.shiftDragZoom : true;
  if (shiftDragZoom) {
    interactions.push(
      new DragZoom_default({
        duration: options.zoomDuration
      })
    );
  }
  return interactions;
}

// node_modules/ol/Map.js
init_array();
init_proj();
init_util();
init_size();
init_events();
init_dom();
init_console();
function removeLayerMapProperty(layer) {
  if (layer instanceof Layer_default) {
    layer.setMapInternal(null);
    return;
  }
  if (layer instanceof Group_default) {
    layer.getLayers().forEach(removeLayerMapProperty);
  }
}
function setLayerMapProperty(layer, map) {
  if (layer instanceof Layer_default) {
    layer.setMapInternal(map);
    return;
  }
  if (layer instanceof Group_default) {
    const layers = layer.getLayers().getArray();
    for (let i = 0, ii = layers.length; i < ii; ++i) {
      setLayerMapProperty(layers[i], map);
    }
  }
}
var Map = class extends Object_default {
  /**
   * @param {MapOptions} [options] Map options.
   */
  constructor(options) {
    super();
    options = options || {};
    this.on;
    this.once;
    this.un;
    const optionsInternal = createOptionsInternal(options);
    this.renderComplete_;
    this.loaded_ = true;
    this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this);
    this.maxTilesLoading_ = options.maxTilesLoading !== void 0 ? options.maxTilesLoading : 16;
    this.pixelRatio_ = options.pixelRatio !== void 0 ? options.pixelRatio : DEVICE_PIXEL_RATIO;
    this.postRenderTimeoutHandle_;
    this.animationDelayKey_;
    this.animationDelay_ = this.animationDelay_.bind(this);
    this.coordinateToPixelTransform_ = create();
    this.pixelToCoordinateTransform_ = create();
    this.frameIndex_ = 0;
    this.frameState_ = null;
    this.previousExtent_ = null;
    this.viewPropertyListenerKey_ = null;
    this.viewChangeListenerKey_ = null;
    this.layerGroupPropertyListenerKeys_ = null;
    this.viewport_ = document.createElement("div");
    this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "");
    this.viewport_.style.position = "relative";
    this.viewport_.style.overflow = "hidden";
    this.viewport_.style.width = "100%";
    this.viewport_.style.height = "100%";
    this.overlayContainer_ = document.createElement("div");
    this.overlayContainer_.style.position = "absolute";
    this.overlayContainer_.style.zIndex = "0";
    this.overlayContainer_.style.width = "100%";
    this.overlayContainer_.style.height = "100%";
    this.overlayContainer_.style.pointerEvents = "none";
    this.overlayContainer_.className = "ol-overlaycontainer";
    this.viewport_.appendChild(this.overlayContainer_);
    this.overlayContainerStopEvent_ = document.createElement("div");
    this.overlayContainerStopEvent_.style.position = "absolute";
    this.overlayContainerStopEvent_.style.zIndex = "0";
    this.overlayContainerStopEvent_.style.width = "100%";
    this.overlayContainerStopEvent_.style.height = "100%";
    this.overlayContainerStopEvent_.style.pointerEvents = "none";
    this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent";
    this.viewport_.appendChild(this.overlayContainerStopEvent_);
    this.mapBrowserEventHandler_ = null;
    this.moveTolerance_ = options.moveTolerance;
    this.keyboardEventTarget_ = optionsInternal.keyboardEventTarget;
    this.targetChangeHandlerKeys_ = null;
    this.targetElement_ = null;
    this.resizeObserver_ = new ResizeObserver(() => this.updateSize());
    this.controls = optionsInternal.controls || defaults();
    this.interactions = optionsInternal.interactions || defaults2({
      onFocusOnly: true
    });
    this.overlays_ = optionsInternal.overlays;
    this.overlayIdIndex_ = {};
    this.renderer_ = null;
    this.postRenderFunctions_ = [];
    this.tileQueue_ = new TileQueue_default(
      this.getTilePriority.bind(this),
      this.handleTileChange_.bind(this)
    );
    this.addChangeListener(
      MapProperty_default.LAYERGROUP,
      this.handleLayerGroupChanged_
    );
    this.addChangeListener(MapProperty_default.VIEW, this.handleViewChanged_);
    this.addChangeListener(MapProperty_default.SIZE, this.handleSizeChanged_);
    this.addChangeListener(MapProperty_default.TARGET, this.handleTargetChanged_);
    this.setProperties(optionsInternal.values);
    const map = this;
    if (options.view && !(options.view instanceof View_default)) {
      options.view.then(function(viewOptions) {
        map.setView(new View_default(viewOptions));
      });
    }
    this.controls.addEventListener(
      CollectionEventType_default.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
       */
      (event) => {
        event.element.setMap(this);
      }
    );
    this.controls.addEventListener(
      CollectionEventType_default.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
       */
      (event) => {
        event.element.setMap(null);
      }
    );
    this.interactions.addEventListener(
      CollectionEventType_default.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */
      (event) => {
        event.element.setMap(this);
      }
    );
    this.interactions.addEventListener(
      CollectionEventType_default.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */
      (event) => {
        event.element.setMap(null);
      }
    );
    this.overlays_.addEventListener(
      CollectionEventType_default.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */
      (event) => {
        this.addOverlayInternal_(event.element);
      }
    );
    this.overlays_.addEventListener(
      CollectionEventType_default.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */
      (event) => {
        const id = event.element.getId();
        if (id !== void 0) {
          delete this.overlayIdIndex_[id.toString()];
        }
        event.element.setMap(null);
      }
    );
    this.controls.forEach(
      /**
       * @param {import("./control/Control.js").default} control Control.
       */
      (control) => {
        control.setMap(this);
      }
    );
    this.interactions.forEach(
      /**
       * @param {import("./interaction/Interaction.js").default} interaction Interaction.
       */
      (interaction) => {
        interaction.setMap(this);
      }
    );
    this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  /**
   * Add the given control to the map.
   * @param {import("./control/Control.js").default} control Control.
   * @api
   */
  addControl(control) {
    this.getControls().push(control);
  }
  /**
   * Add the given interaction to the map. If you want to add an interaction
   * at another point of the collection use `getInteractions()` and the methods
   * available on {@link module:ol/Collection~Collection}. This can be used to
   * stop the event propagation from the handleEvent function. The interactions
   * get to handle the events in the reverse order of this collection.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
   * @api
   */
  addInteraction(interaction) {
    this.getInteractions().push(interaction);
  }
  /**
   * Adds the given layer to the top of this map. If you want to add a layer
   * elsewhere in the stack, use `getLayers()` and the methods available on
   * {@link module:ol/Collection~Collection}.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @api
   */
  addLayer(layer) {
    const layers = this.getLayerGroup().getLayers();
    layers.push(layer);
  }
  /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
   * @private
   */
  handleLayerAdd_(event) {
    setLayerMapProperty(event.layer, this);
  }
  /**
   * Add the given overlay to the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @api
   */
  addOverlay(overlay) {
    this.getOverlays().push(overlay);
  }
  /**
   * This deals with map's overlay collection changes.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @private
   */
  addOverlayInternal_(overlay) {
    const id = overlay.getId();
    if (id !== void 0) {
      this.overlayIdIndex_[id.toString()] = overlay;
    }
    overlay.setMap(this);
  }
  /**
   *
   * Clean up.
   */
  disposeInternal() {
    this.controls.clear();
    this.interactions.clear();
    this.overlays_.clear();
    this.resizeObserver_.disconnect();
    this.setTarget(null);
    super.disposeInternal();
  }
  /**
   * Detect features that intersect a pixel on the viewport, and execute a
   * callback with each intersecting feature. Layers included in the detection can
   * be configured through the `layerFilter` option in `options`.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
   *     called with two arguments. The first argument is one
   *     {@link module:ol/Feature~Feature feature} or
   *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
   *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
   *     unmanaged layers. To stop detection, callback functions can return a
   *     truthy value.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {T|undefined} Callback result, i.e. the return value of last
   * callback execution, or the first truthy callback return value.
   * @template T
   * @api
   */
  forEachFeatureAtPixel(pixel, callback, options) {
    if (!this.frameState_ || !this.renderer_) {
      return;
    }
    const coordinate = this.getCoordinateFromPixelInternal(pixel);
    options = options !== void 0 ? options : {};
    const hitTolerance = options.hitTolerance !== void 0 ? options.hitTolerance : 0;
    const layerFilter = options.layerFilter !== void 0 ? options.layerFilter : TRUE;
    const checkWrapped = options.checkWrapped !== false;
    return this.renderer_.forEachFeatureAtCoordinate(
      coordinate,
      this.frameState_,
      hitTolerance,
      checkWrapped,
      callback,
      null,
      layerFilter,
      null
    );
  }
  /**
   * Get all features that intersect a pixel on the viewport.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
   * an empty array if none were found.
   * @api
   */
  getFeaturesAtPixel(pixel, options) {
    const features = [];
    this.forEachFeatureAtPixel(
      pixel,
      function(feature) {
        features.push(feature);
      },
      options
    );
    return features;
  }
  /**
   * Get all layers from all layer groups.
   * @return {Array<import("./layer/Layer.js").default>} Layers.
   * @api
   */
  getAllLayers() {
    const layers = [];
    function addLayersFrom(layerGroup) {
      layerGroup.forEach(function(layer) {
        if (layer instanceof Group_default) {
          addLayersFrom(layer.getLayers());
        } else {
          layers.push(layer);
        }
      });
    }
    addLayersFrom(this.getLayers());
    return layers;
  }
  /**
   * Detect if features intersect a pixel on the viewport. Layers included in the
   * detection can be configured through the `layerFilter` option.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {boolean} Is there a feature at the given pixel?
   * @api
   */
  hasFeatureAtPixel(pixel, options) {
    if (!this.frameState_ || !this.renderer_) {
      return false;
    }
    const coordinate = this.getCoordinateFromPixelInternal(pixel);
    options = options !== void 0 ? options : {};
    const layerFilter = options.layerFilter !== void 0 ? options.layerFilter : TRUE;
    const hitTolerance = options.hitTolerance !== void 0 ? options.hitTolerance : 0;
    const checkWrapped = options.checkWrapped !== false;
    return this.renderer_.hasFeatureAtCoordinate(
      coordinate,
      this.frameState_,
      hitTolerance,
      checkWrapped,
      layerFilter,
      null
    );
  }
  /**
   * Returns the coordinate in user projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   * @api
   */
  getEventCoordinate(event) {
    return this.getCoordinateFromPixel(this.getEventPixel(event));
  }
  /**
   * Returns the coordinate in view projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   */
  getEventCoordinateInternal(event) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(event));
  }
  /**
   * Returns the map pixel position for a browser event relative to the viewport.
   * @param {UIEvent|{clientX: number, clientY: number}} event Event.
   * @return {import("./pixel.js").Pixel} Pixel.
   * @api
   */
  getEventPixel(event) {
    const viewport = this.viewport_;
    const viewportPosition = viewport.getBoundingClientRect();
    const viewportSize = this.getSize();
    const scaleX = viewportPosition.width / viewportSize[0];
    const scaleY = viewportPosition.height / viewportSize[1];
    const eventPosition = (
      //FIXME Are we really calling this with a TouchEvent anywhere?
      "changedTouches" in event ? (
        /** @type {TouchEvent} */
        event.changedTouches[0]
      ) : (
        /** @type {MouseEvent} */
        event
      )
    );
    return [
      (eventPosition.clientX - viewportPosition.left) / scaleX,
      (eventPosition.clientY - viewportPosition.top) / scaleY
    ];
  }
  /**
   * Get the target in which this map is rendered.
   * Note that this returns what is entered as an option or in setTarget:
   * if that was an element, it returns an element; if a string, it returns that.
   * @return {HTMLElement|string|undefined} The Element or id of the Element that the
   *     map is rendered in.
   * @observable
   * @api
   */
  getTarget() {
    return (
      /** @type {HTMLElement|string|undefined} */
      this.get(MapProperty_default.TARGET)
    );
  }
  /**
   * Get the DOM element into which this map is rendered. In contrast to
   * `getTarget` this method always return an `Element`, or `null` if the
   * map has no target.
   * @return {HTMLElement} The element that the map is rendered in.
   * @api
   */
  getTargetElement() {
    return this.targetElement_;
  }
  /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * user projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   * @api
   */
  getCoordinateFromPixel(pixel) {
    return toUserCoordinate(
      this.getCoordinateFromPixelInternal(pixel),
      this.getView().getProjection()
    );
  }
  /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * map view projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   */
  getCoordinateFromPixelInternal(pixel) {
    const frameState = this.frameState_;
    if (!frameState) {
      return null;
    }
    return apply(frameState.pixelToCoordinateTransform, pixel.slice());
  }
  /**
   * Get the map controls. Modifying this collection changes the controls
   * associated with the map.
   * @return {Collection<import("./control/Control.js").default>} Controls.
   * @api
   */
  getControls() {
    return this.controls;
  }
  /**
   * Get the map overlays. Modifying this collection changes the overlays
   * associated with the map.
   * @return {Collection<import("./Overlay.js").default>} Overlays.
   * @api
   */
  getOverlays() {
    return this.overlays_;
  }
  /**
   * Get an overlay by its identifier (the value returned by overlay.getId()).
   * Note that the index treats string and numeric identifiers as the same. So
   * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
   * @param {string|number} id Overlay identifier.
   * @return {import("./Overlay.js").default} Overlay.
   * @api
   */
  getOverlayById(id) {
    const overlay = this.overlayIdIndex_[id.toString()];
    return overlay !== void 0 ? overlay : null;
  }
  /**
   * Get the map interactions. Modifying this collection changes the interactions
   * associated with the map.
   *
   * Interactions are used for e.g. pan, zoom and rotate.
   * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
   * @api
   */
  getInteractions() {
    return this.interactions;
  }
  /**
   * Get the layergroup associated with this map.
   * @return {LayerGroup} A layer group containing the layers in this map.
   * @observable
   * @api
   */
  getLayerGroup() {
    return (
      /** @type {LayerGroup} */
      this.get(MapProperty_default.LAYERGROUP)
    );
  }
  /**
   * Clear any existing layers and add layers to the map.
   * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
   * @api
   */
  setLayers(layers) {
    const group = this.getLayerGroup();
    if (layers instanceof Collection_default) {
      group.setLayers(layers);
      return;
    }
    const collection = group.getLayers();
    collection.clear();
    collection.extend(layers);
  }
  /**
   * Get the collection of layers associated with this map.
   * @return {!Collection<import("./layer/Base.js").default>} Layers.
   * @api
   */
  getLayers() {
    const layers = this.getLayerGroup().getLayers();
    return layers;
  }
  /**
   * @return {boolean} Layers have sources that are still loading.
   */
  getLoadingOrNotReady() {
    const layerStatesArray = this.getLayerGroup().getLayerStatesArray();
    for (let i = 0, ii = layerStatesArray.length; i < ii; ++i) {
      const state = layerStatesArray[i];
      if (!state.visible) {
        continue;
      }
      const renderer = state.layer.getRenderer();
      if (renderer && !renderer.ready) {
        return true;
      }
      const source = state.layer.getSource();
      if (source && source.loading) {
        return true;
      }
    }
    return false;
  }
  /**
   * Get the pixel for a coordinate.  This takes a coordinate in the user
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   * @api
   */
  getPixelFromCoordinate(coordinate) {
    const viewCoordinate = fromUserCoordinate(
      coordinate,
      this.getView().getProjection()
    );
    return this.getPixelFromCoordinateInternal(viewCoordinate);
  }
  /**
   * Get the pixel for a coordinate.  This takes a coordinate in the map view
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   */
  getPixelFromCoordinateInternal(coordinate) {
    const frameState = this.frameState_;
    if (!frameState) {
      return null;
    }
    return apply(
      frameState.coordinateToPixelTransform,
      coordinate.slice(0, 2)
    );
  }
  /**
   * Get the map renderer.
   * @return {import("./renderer/Map.js").default|null} Renderer
   */
  getRenderer() {
    return this.renderer_;
  }
  /**
   * Get the size of this map.
   * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
   * @observable
   * @api
   */
  getSize() {
    return (
      /** @type {import("./size.js").Size|undefined} */
      this.get(MapProperty_default.SIZE)
    );
  }
  /**
   * Get the view associated with this map. A view manages properties such as
   * center and resolution.
   * @return {View} The view that controls this map.
   * @observable
   * @api
   */
  getView() {
    return (
      /** @type {View} */
      this.get(MapProperty_default.VIEW)
    );
  }
  /**
   * Get the element that serves as the map viewport.
   * @return {HTMLElement} Viewport.
   * @api
   */
  getViewport() {
    return this.viewport_;
  }
  /**
   * Get the element that serves as the container for overlays.  Elements added to
   * this container will let mousedown and touchstart events through to the map,
   * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
   * events.
   * @return {!HTMLElement} The map's overlay container.
   */
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  /**
   * Get the element that serves as a container for overlays that don't allow
   * event propagation. Elements added to this container won't let mousedown and
   * touchstart events through to the map, so clicks and gestures on an overlay
   * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
   * @return {!HTMLElement} The map's overlay container that stops events.
   */
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  /**
   * @return {!Document} The document where the map is displayed.
   */
  getOwnerDocument() {
    const targetElement = this.getTargetElement();
    return targetElement ? targetElement.ownerDocument : document;
  }
  /**
   * @param {import("./Tile.js").default} tile Tile.
   * @param {string} tileSourceKey Tile source key.
   * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
   * @param {number} tileResolution Tile resolution.
   * @return {number} Tile priority.
   */
  getTilePriority(tile, tileSourceKey, tileCenter, tileResolution) {
    return getTilePriority(
      this.frameState_,
      tile,
      tileSourceKey,
      tileCenter,
      tileResolution
    );
  }
  /**
   * @param {UIEvent} browserEvent Browser event.
   * @param {string} [type] Type.
   */
  handleBrowserEvent(browserEvent, type) {
    type = type || browserEvent.type;
    const mapBrowserEvent = new MapBrowserEvent_default(type, this, browserEvent);
    this.handleMapBrowserEvent(mapBrowserEvent);
  }
  /**
   * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
   */
  handleMapBrowserEvent(mapBrowserEvent) {
    if (!this.frameState_) {
      return;
    }
    const originalEvent = (
      /** @type {PointerEvent} */
      mapBrowserEvent.originalEvent
    );
    const eventType = originalEvent.type;
    if (eventType === EventType_default3.POINTERDOWN || eventType === EventType_default.WHEEL || eventType === EventType_default.KEYDOWN) {
      const doc = this.getOwnerDocument();
      const rootNode = this.viewport_.getRootNode ? this.viewport_.getRootNode() : doc;
      const target = (
        /** @type {Node} */
        originalEvent.target
      );
      if (
        // Abort if the target is a child of the container for elements whose events are not meant
        // to be handled by map interactions.
        this.overlayContainerStopEvent_.contains(target) || // Abort if the event target is a child of the container that is no longer in the page.
        // It's possible for the target to no longer be in the page if it has been removed in an
        // event listener, this might happen in a Control that recreates it's content based on
        // user interaction either manually or via a render in something like https://reactjs.org/
        !(rootNode === doc ? doc.documentElement : rootNode).contains(target)
      ) {
        return;
      }
    }
    mapBrowserEvent.frameState = this.frameState_;
    if (this.dispatchEvent(mapBrowserEvent) !== false) {
      const interactionsArray = this.getInteractions().getArray().slice();
      for (let i = interactionsArray.length - 1; i >= 0; i--) {
        const interaction = interactionsArray[i];
        if (interaction.getMap() !== this || !interaction.getActive() || !this.getTargetElement()) {
          continue;
        }
        const cont = interaction.handleEvent(mapBrowserEvent);
        if (!cont || mapBrowserEvent.propagationStopped) {
          break;
        }
      }
    }
  }
  /**
   * @protected
   */
  handlePostRender() {
    const frameState = this.frameState_;
    const tileQueue = this.tileQueue_;
    if (!tileQueue.isEmpty()) {
      let maxTotalLoading = this.maxTilesLoading_;
      let maxNewLoads = maxTotalLoading;
      if (frameState) {
        const hints = frameState.viewHints;
        if (hints[ViewHint_default.ANIMATING] || hints[ViewHint_default.INTERACTING]) {
          const lowOnFrameBudget = Date.now() - frameState.time > 8;
          maxTotalLoading = lowOnFrameBudget ? 0 : 8;
          maxNewLoads = lowOnFrameBudget ? 0 : 2;
        }
      }
      if (tileQueue.getTilesLoading() < maxTotalLoading) {
        tileQueue.reprioritize();
        tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
      }
    }
    if (frameState && this.renderer_ && !frameState.animate) {
      if (this.renderComplete_ === true) {
        if (this.hasListener(EventType_default2.RENDERCOMPLETE)) {
          this.renderer_.dispatchRenderEvent(
            EventType_default2.RENDERCOMPLETE,
            frameState
          );
        }
        if (this.loaded_ === false) {
          this.loaded_ = true;
          this.dispatchEvent(
            new MapEvent_default(MapEventType_default.LOADEND, this, frameState)
          );
        }
      } else if (this.loaded_ === true) {
        this.loaded_ = false;
        this.dispatchEvent(
          new MapEvent_default(MapEventType_default.LOADSTART, this, frameState)
        );
      }
    }
    const postRenderFunctions = this.postRenderFunctions_;
    for (let i = 0, ii = postRenderFunctions.length; i < ii; ++i) {
      postRenderFunctions[i](this, frameState);
    }
    postRenderFunctions.length = 0;
  }
  /**
   * @private
   */
  handleSizeChanged_() {
    if (this.getView() && !this.getView().getAnimating()) {
      this.getView().resolveConstraints(0);
    }
    this.render();
  }
  /**
   * @private
   */
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, ii = this.targetChangeHandlerKeys_.length; i < ii; ++i) {
        unlistenByKey(this.targetChangeHandlerKeys_[i]);
      }
      this.targetChangeHandlerKeys_ = null;
      this.viewport_.removeEventListener(
        EventType_default.CONTEXTMENU,
        this.boundHandleBrowserEvent_
      );
      this.viewport_.removeEventListener(
        EventType_default.WHEEL,
        this.boundHandleBrowserEvent_
      );
      this.mapBrowserEventHandler_.dispose();
      this.mapBrowserEventHandler_ = null;
      removeNode(this.viewport_);
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const rootNode = this.targetElement_.getRootNode();
      if (rootNode instanceof ShadowRoot) {
        this.resizeObserver_.unobserve(rootNode.host);
      }
      this.setSize(void 0);
    }
    const target = this.getTarget();
    const targetElement = typeof target === "string" ? document.getElementById(target) : target;
    this.targetElement_ = targetElement;
    if (!targetElement) {
      if (this.renderer_) {
        clearTimeout(this.postRenderTimeoutHandle_);
        this.postRenderTimeoutHandle_ = void 0;
        this.postRenderFunctions_.length = 0;
        this.renderer_.dispose();
        this.renderer_ = null;
      }
      if (this.animationDelayKey_) {
        cancelAnimationFrame(this.animationDelayKey_);
        this.animationDelayKey_ = void 0;
      }
    } else {
      targetElement.appendChild(this.viewport_);
      if (!this.renderer_) {
        this.renderer_ = new Composite_default(this);
      }
      this.mapBrowserEventHandler_ = new MapBrowserEventHandler_default(
        this,
        this.moveTolerance_
      );
      for (const key in MapBrowserEventType_default) {
        this.mapBrowserEventHandler_.addEventListener(
          MapBrowserEventType_default[key],
          this.handleMapBrowserEvent.bind(this)
        );
      }
      this.viewport_.addEventListener(
        EventType_default.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        false
      );
      this.viewport_.addEventListener(
        EventType_default.WHEEL,
        this.boundHandleBrowserEvent_,
        PASSIVE_EVENT_LISTENERS ? { passive: false } : false
      );
      const keyboardEventTarget = !this.keyboardEventTarget_ ? targetElement : this.keyboardEventTarget_;
      this.targetChangeHandlerKeys_ = [
        listen(
          keyboardEventTarget,
          EventType_default.KEYDOWN,
          this.handleBrowserEvent,
          this
        ),
        listen(
          keyboardEventTarget,
          EventType_default.KEYPRESS,
          this.handleBrowserEvent,
          this
        )
      ];
      const rootNode = targetElement.getRootNode();
      if (rootNode instanceof ShadowRoot) {
        this.resizeObserver_.observe(rootNode.host);
      }
      this.resizeObserver_.observe(targetElement);
    }
    this.updateSize();
  }
  /**
   * @private
   */
  handleTileChange_() {
    this.render();
  }
  /**
   * @private
   */
  handleViewPropertyChanged_() {
    this.render();
  }
  /**
   * @private
   */
  handleViewChanged_() {
    if (this.viewPropertyListenerKey_) {
      unlistenByKey(this.viewPropertyListenerKey_);
      this.viewPropertyListenerKey_ = null;
    }
    if (this.viewChangeListenerKey_) {
      unlistenByKey(this.viewChangeListenerKey_);
      this.viewChangeListenerKey_ = null;
    }
    const view = this.getView();
    if (view) {
      this.updateViewportSize_(this.getSize());
      this.viewPropertyListenerKey_ = listen(
        view,
        ObjectEventType_default.PROPERTYCHANGE,
        this.handleViewPropertyChanged_,
        this
      );
      this.viewChangeListenerKey_ = listen(
        view,
        EventType_default.CHANGE,
        this.handleViewPropertyChanged_,
        this
      );
      view.resolveConstraints(0);
    }
    this.render();
  }
  /**
   * @private
   */
  handleLayerGroupChanged_() {
    if (this.layerGroupPropertyListenerKeys_) {
      this.layerGroupPropertyListenerKeys_.forEach(unlistenByKey);
      this.layerGroupPropertyListenerKeys_ = null;
    }
    const layerGroup = this.getLayerGroup();
    if (layerGroup) {
      this.handleLayerAdd_(new GroupEvent("addlayer", layerGroup));
      this.layerGroupPropertyListenerKeys_ = [
        listen(layerGroup, ObjectEventType_default.PROPERTYCHANGE, this.render, this),
        listen(layerGroup, EventType_default.CHANGE, this.render, this),
        listen(layerGroup, "addlayer", this.handleLayerAdd_, this),
        listen(layerGroup, "removelayer", this.handleLayerRemove_, this)
      ];
    }
    this.render();
  }
  /**
   * @return {boolean} Is rendered.
   */
  isRendered() {
    return !!this.frameState_;
  }
  /**
   * @private
   */
  animationDelay_() {
    this.animationDelayKey_ = void 0;
    this.renderFrame_(Date.now());
  }
  /**
   * Requests an immediate render in a synchronous manner.
   * @api
   */
  renderSync() {
    if (this.animationDelayKey_) {
      cancelAnimationFrame(this.animationDelayKey_);
    }
    this.animationDelay_();
  }
  /**
   * Redraws all text after new fonts have loaded
   */
  redrawText() {
    const layerStates = this.getLayerGroup().getLayerStatesArray();
    for (let i = 0, ii = layerStates.length; i < ii; ++i) {
      const layer = layerStates[i].layer;
      if (layer.hasRenderer()) {
        layer.getRenderer().handleFontsChanged();
      }
    }
  }
  /**
   * Request a map rendering (at the next animation frame).
   * @api
   */
  render() {
    if (this.renderer_ && this.animationDelayKey_ === void 0) {
      this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_);
    }
  }
  /**
   * This method is meant to be called in a layer's `prerender` listener. It causes all collected
   * declutter items to be decluttered and rendered on the map immediately. This is useful for
   * layers that need to appear entirely above the decluttered items of layers lower in the layer
   * stack.
   * @api
   */
  flushDeclutterItems() {
    const frameState = this.frameState_;
    if (!frameState) {
      return;
    }
    this.renderer_.flushDeclutterItems(frameState);
  }
  /**
   * Remove the given control from the map.
   * @param {import("./control/Control.js").default} control Control.
   * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
   *     if the control was not found).
   * @api
   */
  removeControl(control) {
    return this.getControls().remove(control);
  }
  /**
   * Remove the given interaction from the map.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
   * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
   *     undefined if the interaction was not found).
   * @api
   */
  removeInteraction(interaction) {
    return this.getInteractions().remove(interaction);
  }
  /**
   * Removes the given layer from the map.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
   *     layer was not found).
   * @api
   */
  removeLayer(layer) {
    const layers = this.getLayerGroup().getLayers();
    return layers.remove(layer);
  }
  /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
   * @private
   */
  handleLayerRemove_(event) {
    removeLayerMapProperty(event.layer);
  }
  /**
   * Remove the given overlay from the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
   *     if the overlay was not found).
   * @api
   */
  removeOverlay(overlay) {
    return this.getOverlays().remove(overlay);
  }
  /**
   * @param {number} time Time.
   * @private
   */
  renderFrame_(time) {
    const size = this.getSize();
    const view = this.getView();
    const previousFrameState = this.frameState_;
    let frameState = null;
    if (size !== void 0 && hasArea(size) && view && view.isDef()) {
      const viewHints = view.getHints(
        this.frameState_ ? this.frameState_.viewHints : void 0
      );
      const viewState = view.getState();
      frameState = {
        animate: false,
        coordinateToPixelTransform: this.coordinateToPixelTransform_,
        declutterTree: null,
        extent: getForViewAndSize(
          viewState.center,
          viewState.resolution,
          viewState.rotation,
          size
        ),
        index: this.frameIndex_++,
        layerIndex: 0,
        layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
        pixelRatio: this.pixelRatio_,
        pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
        postRenderFunctions: [],
        size,
        tileQueue: this.tileQueue_,
        time,
        usedTiles: {},
        viewState,
        viewHints,
        wantedTiles: {},
        mapId: getUid(this),
        renderTargets: {}
      };
      if (viewState.nextCenter && viewState.nextResolution) {
        const rotation = isNaN(viewState.nextRotation) ? viewState.rotation : viewState.nextRotation;
        frameState.nextExtent = getForViewAndSize(
          viewState.nextCenter,
          viewState.nextResolution,
          rotation,
          size
        );
      }
    }
    this.frameState_ = frameState;
    this.renderer_.renderFrame(frameState);
    if (frameState) {
      if (frameState.animate) {
        this.render();
      }
      Array.prototype.push.apply(
        this.postRenderFunctions_,
        frameState.postRenderFunctions
      );
      if (previousFrameState) {
        const moveStart = !this.previousExtent_ || !isEmpty2(this.previousExtent_) && !equals2(frameState.extent, this.previousExtent_);
        if (moveStart) {
          this.dispatchEvent(
            new MapEvent_default(MapEventType_default.MOVESTART, this, previousFrameState)
          );
          this.previousExtent_ = createOrUpdateEmpty(this.previousExtent_);
        }
      }
      const idle = this.previousExtent_ && !frameState.viewHints[ViewHint_default.ANIMATING] && !frameState.viewHints[ViewHint_default.INTERACTING] && !equals2(frameState.extent, this.previousExtent_);
      if (idle) {
        this.dispatchEvent(
          new MapEvent_default(MapEventType_default.MOVEEND, this, frameState)
        );
        clone(frameState.extent, this.previousExtent_);
      }
    }
    this.dispatchEvent(new MapEvent_default(MapEventType_default.POSTRENDER, this, frameState));
    this.renderComplete_ = this.hasListener(MapEventType_default.LOADSTART) || this.hasListener(MapEventType_default.LOADEND) || this.hasListener(EventType_default2.RENDERCOMPLETE) ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady() : void 0;
    if (!this.postRenderTimeoutHandle_) {
      this.postRenderTimeoutHandle_ = setTimeout(() => {
        this.postRenderTimeoutHandle_ = void 0;
        this.handlePostRender();
      }, 0);
    }
  }
  /**
   * Sets the layergroup of this map.
   * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
   * @observable
   * @api
   */
  setLayerGroup(layerGroup) {
    const oldLayerGroup = this.getLayerGroup();
    if (oldLayerGroup) {
      this.handleLayerRemove_(new GroupEvent("removelayer", oldLayerGroup));
    }
    this.set(MapProperty_default.LAYERGROUP, layerGroup);
  }
  /**
   * Set the size of this map.
   * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
   * @observable
   * @api
   */
  setSize(size) {
    this.set(MapProperty_default.SIZE, size);
  }
  /**
   * Set the target element to render this map into.
   * @param {HTMLElement|string} [target] The Element or id of the Element
   *     that the map is rendered in.
   * @observable
   * @api
   */
  setTarget(target) {
    this.set(MapProperty_default.TARGET, target);
  }
  /**
   * Set the view for this map.
   * @param {View|Promise<import("./View.js").ViewOptions>} view The view that controls this map.
   * It is also possible to pass a promise that resolves to options for constructing a view.  This
   * alternative allows view properties to be resolved by sources or other components that load
   * view-related metadata.
   * @observable
   * @api
   */
  setView(view) {
    if (!view || view instanceof View_default) {
      this.set(MapProperty_default.VIEW, view);
      return;
    }
    this.set(MapProperty_default.VIEW, new View_default());
    const map = this;
    view.then(function(viewOptions) {
      map.setView(new View_default(viewOptions));
    });
  }
  /**
   * Force a recalculation of the map viewport size.  This should be called when
   * third-party code changes the size of the map viewport.
   * @api
   */
  updateSize() {
    const targetElement = this.getTargetElement();
    let size = void 0;
    if (targetElement) {
      const computedStyle = getComputedStyle(targetElement);
      const width = targetElement.offsetWidth - parseFloat(computedStyle["borderLeftWidth"]) - parseFloat(computedStyle["paddingLeft"]) - parseFloat(computedStyle["paddingRight"]) - parseFloat(computedStyle["borderRightWidth"]);
      const height = targetElement.offsetHeight - parseFloat(computedStyle["borderTopWidth"]) - parseFloat(computedStyle["paddingTop"]) - parseFloat(computedStyle["paddingBottom"]) - parseFloat(computedStyle["borderBottomWidth"]);
      if (!isNaN(width) && !isNaN(height)) {
        size = [width, height];
        if (!hasArea(size) && !!(targetElement.offsetWidth || targetElement.offsetHeight || targetElement.getClientRects().length)) {
          warn(
            "No map visible because the map container's width or height are 0."
          );
        }
      }
    }
    const oldSize = this.getSize();
    if (size && (!oldSize || !equals(size, oldSize))) {
      this.setSize(size);
      this.updateViewportSize_(size);
    }
  }
  /**
   * Recomputes the viewport size and save it on the view object (if any)
   * @param {import("./size.js").Size|undefined} size The size.
   * @private
   */
  updateViewportSize_(size) {
    const view = this.getView();
    if (view) {
      view.setViewportSize(size);
    }
  }
};
function createOptionsInternal(options) {
  let keyboardEventTarget = null;
  if (options.keyboardEventTarget !== void 0) {
    keyboardEventTarget = typeof options.keyboardEventTarget === "string" ? document.getElementById(options.keyboardEventTarget) : options.keyboardEventTarget;
  }
  const values = {};
  const layerGroup = options.layers && typeof /** @type {?} */
  options.layers.getLayers === "function" ? (
    /** @type {LayerGroup} */
    options.layers
  ) : new Group_default({
    layers: (
      /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */
      options.layers
    )
  });
  values[MapProperty_default.LAYERGROUP] = layerGroup;
  values[MapProperty_default.TARGET] = options.target;
  values[MapProperty_default.VIEW] = options.view instanceof View_default ? options.view : new View_default();
  let controls;
  if (options.controls !== void 0) {
    if (Array.isArray(options.controls)) {
      controls = new Collection_default(options.controls.slice());
    } else {
      assert(
        typeof /** @type {?} */
        options.controls.getArray === "function",
        "Expected `controls` to be an array or an `ol/Collection.js`"
      );
      controls = options.controls;
    }
  }
  let interactions;
  if (options.interactions !== void 0) {
    if (Array.isArray(options.interactions)) {
      interactions = new Collection_default(options.interactions.slice());
    } else {
      assert(
        typeof /** @type {?} */
        options.interactions.getArray === "function",
        "Expected `interactions` to be an array or an `ol/Collection.js`"
      );
      interactions = options.interactions;
    }
  }
  let overlays;
  if (options.overlays !== void 0) {
    if (Array.isArray(options.overlays)) {
      overlays = new Collection_default(options.overlays.slice());
    } else {
      assert(
        typeof /** @type {?} */
        options.overlays.getArray === "function",
        "Expected `overlays` to be an array or an `ol/Collection.js`"
      );
      overlays = options.overlays;
    }
  } else {
    overlays = new Collection_default();
  }
  return {
    controls,
    interactions,
    keyboardEventTarget,
    overlays,
    values
  };
}
var Map_default2 = Map;

// node_modules/ol/control/MousePosition.js
init_Control();
init_proj();
init_events();
init_coordinate();
var PROJECTION = "projection";
var COORDINATE_FORMAT = "coordinateFormat";
var MousePosition = class extends Control_default {
  /**
   * @param {Options} [options] Mouse position options.
   */
  constructor(options) {
    options = options ? options : {};
    const element = document.createElement("div");
    element.className = options.className !== void 0 ? options.className : "ol-mouse-position";
    super({
      element,
      render: options.render,
      target: options.target
    });
    this.on;
    this.once;
    this.un;
    this.addChangeListener(PROJECTION, this.handleProjectionChanged_);
    if (options.coordinateFormat) {
      this.setCoordinateFormat(options.coordinateFormat);
    }
    if (options.projection) {
      this.setProjection(options.projection);
    }
    this.renderOnMouseOut_ = options.placeholder !== void 0;
    this.placeholder_ = this.renderOnMouseOut_ ? options.placeholder : "&#160;";
    this.renderedHTML_ = element.innerHTML;
    this.mapProjection_ = null;
    this.transform_ = null;
    this.wrapX_ = options.wrapX === false ? false : true;
  }
  /**
   * @private
   */
  handleProjectionChanged_() {
    this.transform_ = null;
  }
  /**
   * Return the coordinate format type used to render the current position or
   * undefined.
   * @return {import("../coordinate.js").CoordinateFormat|undefined} The format to render the current
   *     position in.
   * @observable
   * @api
   */
  getCoordinateFormat() {
    return (
      /** @type {import("../coordinate.js").CoordinateFormat|undefined} */
      this.get(COORDINATE_FORMAT)
    );
  }
  /**
   * Return the projection that is used to report the mouse position.
   * @return {import("../proj/Projection.js").default|undefined} The projection to report mouse
   *     position in.
   * @observable
   * @api
   */
  getProjection() {
    return (
      /** @type {import("../proj/Projection.js").default|undefined} */
      this.get(PROJECTION)
    );
  }
  /**
   * @param {MouseEvent} event Browser event.
   * @protected
   */
  handleMouseMove(event) {
    const map = this.getMap();
    this.updateHTML_(map.getEventPixel(event));
  }
  /**
   * @param {Event} event Browser event.
   * @protected
   */
  handleMouseOut(event) {
    this.updateHTML_(null);
  }
  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(map) {
    super.setMap(map);
    if (map) {
      const viewport = map.getViewport();
      this.listenerKeys.push(
        listen(viewport, EventType_default3.POINTERMOVE, this.handleMouseMove, this)
      );
      if (this.renderOnMouseOut_) {
        this.listenerKeys.push(
          listen(viewport, EventType_default3.POINTEROUT, this.handleMouseOut, this)
        );
      }
      this.updateHTML_(null);
    }
  }
  /**
   * Set the coordinate format type used to render the current position.
   * @param {import("../coordinate.js").CoordinateFormat} format The format to render the current
   *     position in.
   * @observable
   * @api
   */
  setCoordinateFormat(format2) {
    this.set(COORDINATE_FORMAT, format2);
  }
  /**
   * Set the projection that is used to report the mouse position.
   * @param {import("../proj.js").ProjectionLike} projection The projection to report mouse
   *     position in.
   * @observable
   * @api
   */
  setProjection(projection) {
    this.set(PROJECTION, get3(projection));
  }
  /**
   * @param {?import("../pixel.js").Pixel} pixel Pixel.
   * @private
   */
  updateHTML_(pixel) {
    let html = this.placeholder_;
    if (pixel && this.mapProjection_) {
      if (!this.transform_) {
        const projection = this.getProjection();
        if (projection) {
          this.transform_ = getTransformFromProjections(
            this.mapProjection_,
            projection
          );
        } else {
          this.transform_ = identityTransform;
        }
      }
      const map = this.getMap();
      const coordinate = map.getCoordinateFromPixelInternal(pixel);
      if (coordinate) {
        const userProjection2 = getUserProjection();
        if (userProjection2) {
          this.transform_ = getTransformFromProjections(
            this.mapProjection_,
            userProjection2
          );
        }
        this.transform_(coordinate, coordinate);
        if (this.wrapX_) {
          const projection = userProjection2 || this.getProjection() || this.mapProjection_;
          wrapX2(coordinate, projection);
        }
        const coordinateFormat = this.getCoordinateFormat();
        if (coordinateFormat) {
          html = coordinateFormat(coordinate);
        } else {
          html = coordinate.toString();
        }
      }
    }
    if (!this.renderedHTML_ || html !== this.renderedHTML_) {
      this.element.innerHTML = html;
      this.renderedHTML_ = html;
    }
  }
  /**
   * Update the projection. Rendering of the coordinates is done in
   * `handleMouseMove` and `handleMouseUp`.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */
  render(mapEvent) {
    const frameState = mapEvent.frameState;
    if (!frameState) {
      this.mapProjection_ = null;
    } else {
      if (this.mapProjection_ != frameState.viewState.projection) {
        this.mapProjection_ = frameState.viewState.projection;
        this.transform_ = null;
      }
    }
  }
};
var MousePosition_default = MousePosition;

// node_modules/ol/source/TileImage.js
init_EventType();

// node_modules/ol/Tile.js
init_Target();
init_EventType();
init_util();
init_easing();
var Tile = class extends Target_default {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {Options} [options] Tile options.
   */
  constructor(tileCoord, state, options) {
    super();
    options = options ? options : {};
    this.tileCoord = tileCoord;
    this.state = state;
    this.interimTile = null;
    this.key = "";
    this.transition_ = options.transition === void 0 ? 250 : options.transition;
    this.transitionStarts_ = {};
    this.interpolate = !!options.interpolate;
  }
  /**
   * @protected
   */
  changed() {
    this.dispatchEvent(EventType_default.CHANGE);
  }
  /**
   * Called by the tile cache when the tile is removed from the cache due to expiry
   */
  release() {
    if (this.state === TileState_default.ERROR) {
      this.setState(TileState_default.EMPTY);
    }
  }
  /**
   * @return {string} Key.
   */
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  /**
   * Get the interim tile most suitable for rendering using the chain of interim
   * tiles. This corresponds to the  most recent tile that has been loaded, if no
   * such tile exists, the original tile is returned.
   * @return {!Tile} Best tile for rendering.
   */
  getInterimTile() {
    let tile = this.interimTile;
    if (!tile) {
      return this;
    }
    do {
      if (tile.getState() == TileState_default.LOADED) {
        this.transition_ = 0;
        return tile;
      }
      tile = tile.interimTile;
    } while (tile);
    return this;
  }
  /**
   * Goes through the chain of interim tiles and discards sections of the chain
   * that are no longer relevant.
   */
  refreshInterimChain() {
    let tile = this.interimTile;
    if (!tile) {
      return;
    }
    let prev = this;
    do {
      if (tile.getState() == TileState_default.LOADED) {
        tile.interimTile = null;
        break;
      }
      if (tile.getState() == TileState_default.LOADING) {
        prev = tile;
      } else if (tile.getState() == TileState_default.IDLE) {
        prev.interimTile = tile.interimTile;
      } else {
        prev = tile;
      }
      tile = prev.interimTile;
    } while (tile);
  }
  /**
   * Get the tile coordinate for this tile.
   * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
   * @api
   */
  getTileCoord() {
    return this.tileCoord;
  }
  /**
   * @return {import("./TileState.js").default} State.
   */
  getState() {
    return this.state;
  }
  /**
   * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
   * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
   * when the tile cannot be loaded. Otherwise the tile cannot be removed from
   * the tile queue and will block other requests.
   * @param {import("./TileState.js").default} state State.
   * @api
   */
  setState(state) {
    if (this.state !== TileState_default.ERROR && this.state > state) {
      throw new Error("Tile load sequence violation");
    }
    this.state = state;
    this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @abstract
   * @api
   */
  load() {
    abstract();
  }
  /**
   * Get the alpha value for rendering.
   * @param {string} id An id for the renderer.
   * @param {number} time The render frame time.
   * @return {number} A number between 0 and 1.
   */
  getAlpha(id, time) {
    if (!this.transition_) {
      return 1;
    }
    let start = this.transitionStarts_[id];
    if (!start) {
      start = time;
      this.transitionStarts_[id] = start;
    } else if (start === -1) {
      return 1;
    }
    const delta = time - start + 1e3 / 60;
    if (delta >= this.transition_) {
      return 1;
    }
    return easeIn(delta / this.transition_);
  }
  /**
   * Determine if a tile is in an alpha transition.  A tile is considered in
   * transition if tile.getAlpha() has not yet been called or has been called
   * and returned 1.
   * @param {string} id An id for the renderer.
   * @return {boolean} The tile is in transition.
   */
  inTransition(id) {
    if (!this.transition_) {
      return false;
    }
    return this.transitionStarts_[id] !== -1;
  }
  /**
   * Mark a transition as complete.
   * @param {string} id An id for the renderer.
   */
  endTransition(id) {
    if (this.transition_) {
      this.transitionStarts_[id] = -1;
    }
  }
};
var Tile_default = Tile;

// node_modules/ol/ImageTile.js
init_dom();
init_Image();
var ImageTile = class extends Tile_default {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @param {import("./Tile.js").Options} [options] Tile options.
   */
  constructor(tileCoord, state, src, crossOrigin, tileLoadFunction, options) {
    super(tileCoord, state, options);
    this.crossOrigin_ = crossOrigin;
    this.src_ = src;
    this.key = src;
    this.image_ = new Image();
    if (crossOrigin !== null) {
      this.image_.crossOrigin = crossOrigin;
    }
    this.unlisten_ = null;
    this.tileLoadFunction_ = tileLoadFunction;
  }
  /**
   * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */
  getImage() {
    return this.image_;
  }
  /**
   * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
   * @param {HTMLCanvasElement|HTMLImageElement} element Element.
   */
  setImage(element) {
    this.image_ = element;
    this.state = TileState_default.LOADED;
    this.unlistenImage_();
    this.changed();
  }
  /**
   * Tracks loading or read errors.
   *
   * @private
   */
  handleImageError_() {
    this.state = TileState_default.ERROR;
    this.unlistenImage_();
    this.image_ = getBlankImage();
    this.changed();
  }
  /**
   * Tracks successful image load.
   *
   * @private
   */
  handleImageLoad_() {
    const image = (
      /** @type {HTMLImageElement} */
      this.image_
    );
    if (image.naturalWidth && image.naturalHeight) {
      this.state = TileState_default.LOADED;
    } else {
      this.state = TileState_default.EMPTY;
    }
    this.unlistenImage_();
    this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   *
   * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
   * that checks for error status codes and reloads only when the status code is
   * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
   * made already:
   *
   * ```js
   * const retryCodes = [408, 429, 500, 502, 503, 504];
   * const retries = {};
   * source.setTileLoadFunction((tile, src) => {
   *   const image = tile.getImage();
   *   fetch(src)
   *     .then((response) => {
   *       if (retryCodes.includes(response.status)) {
   *         retries[src] = (retries[src] || 0) + 1;
   *         if (retries[src] <= 3) {
   *           setTimeout(() => tile.load(), retries[src] * 1000);
   *         }
   *         return Promise.reject();
   *       }
   *       return response.blob();
   *     })
   *     .then((blob) => {
   *       const imageUrl = URL.createObjectURL(blob);
   *       image.src = imageUrl;
   *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
   *     })
   *     .catch(() => tile.setState(3)); // error
   * });
   * ```
   *
   * @api
   */
  load() {
    if (this.state == TileState_default.ERROR) {
      this.state = TileState_default.IDLE;
      this.image_ = new Image();
      if (this.crossOrigin_ !== null) {
        this.image_.crossOrigin = this.crossOrigin_;
      }
    }
    if (this.state == TileState_default.IDLE) {
      this.state = TileState_default.LOADING;
      this.changed();
      this.tileLoadFunction_(this, this.src_);
      this.unlisten_ = listenImage(
        this.image_,
        this.handleImageLoad_.bind(this),
        this.handleImageError_.bind(this)
      );
    }
  }
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */
  unlistenImage_() {
    if (this.unlisten_) {
      this.unlisten_();
      this.unlisten_ = null;
    }
  }
};
function getBlankImage() {
  const ctx = createCanvasContext2D(1, 1);
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, 1, 1);
  return ctx.canvas;
}
var ImageTile_default = ImageTile;

// node_modules/ol/reproj/common.js
var ERROR_THRESHOLD = 0.5;

// node_modules/ol/reproj/Tile.js
init_EventType();

// node_modules/ol/reproj/Triangulation.js
init_extent();
init_proj();
init_math();
var MAX_SUBDIVISION = 10;
var MAX_TRIANGLE_WIDTH = 0.25;
var Triangulation = class {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
   * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
   * @param {number} errorThreshold Acceptable error (in source units).
   * @param {?number} destinationResolution The (optional) resolution of the destination.
   */
  constructor(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold, destinationResolution) {
    this.sourceProj_ = sourceProj;
    this.targetProj_ = targetProj;
    let transformInvCache = {};
    const transformInv = getTransform(this.targetProj_, this.sourceProj_);
    this.transformInv_ = function(c) {
      const key = c[0] + "/" + c[1];
      if (!transformInvCache[key]) {
        transformInvCache[key] = transformInv(c);
      }
      return transformInvCache[key];
    };
    this.maxSourceExtent_ = maxSourceExtent;
    this.errorThresholdSquared_ = errorThreshold * errorThreshold;
    this.triangles_ = [];
    this.wrapsXInSource_ = false;
    this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!maxSourceExtent && !!this.sourceProj_.getExtent() && getWidth(maxSourceExtent) >= getWidth(this.sourceProj_.getExtent());
    this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? getWidth(this.sourceProj_.getExtent()) : null;
    this.targetWorldWidth_ = this.targetProj_.getExtent() ? getWidth(this.targetProj_.getExtent()) : null;
    const destinationTopLeft = getTopLeft(targetExtent);
    const destinationTopRight = getTopRight(targetExtent);
    const destinationBottomRight = getBottomRight(targetExtent);
    const destinationBottomLeft = getBottomLeft(targetExtent);
    const sourceTopLeft = this.transformInv_(destinationTopLeft);
    const sourceTopRight = this.transformInv_(destinationTopRight);
    const sourceBottomRight = this.transformInv_(destinationBottomRight);
    const sourceBottomLeft = this.transformInv_(destinationBottomLeft);
    const maxSubdivision = MAX_SUBDIVISION + (destinationResolution ? Math.max(
      0,
      Math.ceil(
        Math.log2(
          getArea(targetExtent) / (destinationResolution * destinationResolution * 256 * 256)
        )
      )
    ) : 0);
    this.addQuad_(
      destinationTopLeft,
      destinationTopRight,
      destinationBottomRight,
      destinationBottomLeft,
      sourceTopLeft,
      sourceTopRight,
      sourceBottomRight,
      sourceBottomLeft,
      maxSubdivision
    );
    if (this.wrapsXInSource_) {
      let leftBound = Infinity;
      this.triangles_.forEach(function(triangle, i, arr) {
        leftBound = Math.min(
          leftBound,
          triangle.source[0][0],
          triangle.source[1][0],
          triangle.source[2][0]
        );
      });
      this.triangles_.forEach((triangle) => {
        if (Math.max(
          triangle.source[0][0],
          triangle.source[1][0],
          triangle.source[2][0]
        ) - leftBound > this.sourceWorldWidth_ / 2) {
          const newTriangle = [
            [triangle.source[0][0], triangle.source[0][1]],
            [triangle.source[1][0], triangle.source[1][1]],
            [triangle.source[2][0], triangle.source[2][1]]
          ];
          if (newTriangle[0][0] - leftBound > this.sourceWorldWidth_ / 2) {
            newTriangle[0][0] -= this.sourceWorldWidth_;
          }
          if (newTriangle[1][0] - leftBound > this.sourceWorldWidth_ / 2) {
            newTriangle[1][0] -= this.sourceWorldWidth_;
          }
          if (newTriangle[2][0] - leftBound > this.sourceWorldWidth_ / 2) {
            newTriangle[2][0] -= this.sourceWorldWidth_;
          }
          const minX = Math.min(
            newTriangle[0][0],
            newTriangle[1][0],
            newTriangle[2][0]
          );
          const maxX = Math.max(
            newTriangle[0][0],
            newTriangle[1][0],
            newTriangle[2][0]
          );
          if (maxX - minX < this.sourceWorldWidth_ / 2) {
            triangle.source = newTriangle;
          }
        }
      });
    }
    transformInvCache = {};
  }
  /**
   * Adds triangle to the triangulation.
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @private
   */
  addTriangle_(a, b, c, aSrc, bSrc, cSrc) {
    this.triangles_.push({
      source: [aSrc, bSrc, cSrc],
      target: [a, b, c]
    });
  }
  /**
   * Adds quad (points in clock-wise order) to the triangulation
   * (and reprojects the vertices) if valid.
   * Performs quad subdivision if needed to increase precision.
   *
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
   * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
   * @private
   */
  addQuad_(a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {
    const sourceQuadExtent = boundingExtent([aSrc, bSrc, cSrc, dSrc]);
    const sourceCoverageX = this.sourceWorldWidth_ ? getWidth(sourceQuadExtent) / this.sourceWorldWidth_ : null;
    const sourceWorldWidth = (
      /** @type {number} */
      this.sourceWorldWidth_
    );
    const wrapsX = this.sourceProj_.canWrapX() && sourceCoverageX > 0.5 && sourceCoverageX < 1;
    let needsSubdivision = false;
    if (maxSubdivision > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const targetQuadExtent = boundingExtent([a, b, c, d]);
        const targetCoverageX = getWidth(targetQuadExtent) / this.targetWorldWidth_;
        needsSubdivision = targetCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
      }
      if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
        needsSubdivision = sourceCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
      }
    }
    if (!needsSubdivision && this.maxSourceExtent_) {
      if (isFinite(sourceQuadExtent[0]) && isFinite(sourceQuadExtent[1]) && isFinite(sourceQuadExtent[2]) && isFinite(sourceQuadExtent[3])) {
        if (!intersects(sourceQuadExtent, this.maxSourceExtent_)) {
          return;
        }
      }
    }
    let isNotFinite = 0;
    if (!needsSubdivision) {
      if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) || !isFinite(bSrc[0]) || !isFinite(bSrc[1]) || !isFinite(cSrc[0]) || !isFinite(cSrc[1]) || !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
        if (maxSubdivision > 0) {
          needsSubdivision = true;
        } else {
          isNotFinite = (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ? 8 : 0) + (!isFinite(bSrc[0]) || !isFinite(bSrc[1]) ? 4 : 0) + (!isFinite(cSrc[0]) || !isFinite(cSrc[1]) ? 2 : 0) + (!isFinite(dSrc[0]) || !isFinite(dSrc[1]) ? 1 : 0);
          if (isNotFinite != 1 && isNotFinite != 2 && isNotFinite != 4 && isNotFinite != 8) {
            return;
          }
        }
      }
    }
    if (maxSubdivision > 0) {
      if (!needsSubdivision) {
        const center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
        const centerSrc = this.transformInv_(center);
        let dx;
        if (wrapsX) {
          const centerSrcEstimX = (modulo(aSrc[0], sourceWorldWidth) + modulo(cSrc[0], sourceWorldWidth)) / 2;
          dx = centerSrcEstimX - modulo(centerSrc[0], sourceWorldWidth);
        } else {
          dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
        }
        const dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
        const centerSrcErrorSquared = dx * dx + dy * dy;
        needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
      }
      if (needsSubdivision) {
        if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
          const bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
          const bcSrc = this.transformInv_(bc);
          const da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
          const daSrc = this.transformInv_(da);
          this.addQuad_(
            a,
            b,
            bc,
            da,
            aSrc,
            bSrc,
            bcSrc,
            daSrc,
            maxSubdivision - 1
          );
          this.addQuad_(
            da,
            bc,
            c,
            d,
            daSrc,
            bcSrc,
            cSrc,
            dSrc,
            maxSubdivision - 1
          );
        } else {
          const ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
          const abSrc = this.transformInv_(ab);
          const cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
          const cdSrc = this.transformInv_(cd);
          this.addQuad_(
            a,
            ab,
            cd,
            d,
            aSrc,
            abSrc,
            cdSrc,
            dSrc,
            maxSubdivision - 1
          );
          this.addQuad_(
            ab,
            b,
            c,
            cd,
            abSrc,
            bSrc,
            cSrc,
            cdSrc,
            maxSubdivision - 1
          );
        }
        return;
      }
    }
    if (wrapsX) {
      if (!this.canWrapXInSource_) {
        return;
      }
      this.wrapsXInSource_ = true;
    }
    if ((isNotFinite & 11) == 0) {
      this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
    }
    if ((isNotFinite & 14) == 0) {
      this.addTriangle_(a, c, b, aSrc, cSrc, bSrc);
    }
    if (isNotFinite) {
      if ((isNotFinite & 13) == 0) {
        this.addTriangle_(b, d, a, bSrc, dSrc, aSrc);
      }
      if ((isNotFinite & 7) == 0) {
        this.addTriangle_(b, d, c, bSrc, dSrc, cSrc);
      }
    }
  }
  /**
   * Calculates extent of the `source` coordinates from all the triangles.
   *
   * @return {import("../extent.js").Extent} Calculated extent.
   */
  calculateSourceExtent() {
    const extent = createEmpty();
    this.triangles_.forEach(function(triangle, i, arr) {
      const src = triangle.source;
      extendCoordinate(extent, src[0]);
      extendCoordinate(extent, src[1]);
      extendCoordinate(extent, src[2]);
    });
    return extent;
  }
  /**
   * @return {Array<Triangle>} Array of the calculated triangles.
   */
  getTriangles() {
    return this.triangles_;
  }
};
var Triangulation_default = Triangulation;

// node_modules/ol/reproj.js
init_extent();
init_dom();
init_proj();
init_math();
var brokenDiagonalRendering_;
var canvasPool = [];
function drawTestTriangle(ctx, u1, v1, u2, v2) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(u1, v1);
  ctx.lineTo(u2, v2);
  ctx.closePath();
  ctx.save();
  ctx.clip();
  ctx.fillRect(0, 0, Math.max(u1, u2) + 1, Math.max(v1, v2));
  ctx.restore();
}
function verifyBrokenDiagonalRendering(data, offset) {
  return Math.abs(data[offset * 4] - 210) > 2 || Math.abs(data[offset * 4 + 3] - 0.75 * 255) > 2;
}
function isBrokenDiagonalRendering() {
  if (brokenDiagonalRendering_ === void 0) {
    const ctx = createCanvasContext2D(6, 6, canvasPool);
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = "rgba(210, 0, 0, 0.75)";
    drawTestTriangle(ctx, 4, 5, 4, 0);
    drawTestTriangle(ctx, 4, 5, 0, 5);
    const data = ctx.getImageData(0, 0, 3, 3).data;
    brokenDiagonalRendering_ = verifyBrokenDiagonalRendering(data, 0) || verifyBrokenDiagonalRendering(data, 4) || verifyBrokenDiagonalRendering(data, 8);
    releaseCanvas(ctx);
    canvasPool.push(ctx.canvas);
  }
  return brokenDiagonalRendering_;
}
function calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution) {
  const sourceCenter = transform(targetCenter, targetProj, sourceProj);
  let sourceResolution = getPointResolution(
    targetProj,
    targetResolution,
    targetCenter
  );
  const targetMetersPerUnit = targetProj.getMetersPerUnit();
  if (targetMetersPerUnit !== void 0) {
    sourceResolution *= targetMetersPerUnit;
  }
  const sourceMetersPerUnit = sourceProj.getMetersPerUnit();
  if (sourceMetersPerUnit !== void 0) {
    sourceResolution /= sourceMetersPerUnit;
  }
  const sourceExtent = sourceProj.getExtent();
  if (!sourceExtent || containsCoordinate(sourceExtent, sourceCenter)) {
    const compensationFactor = getPointResolution(sourceProj, sourceResolution, sourceCenter) / sourceResolution;
    if (isFinite(compensationFactor) && compensationFactor > 0) {
      sourceResolution /= compensationFactor;
    }
  }
  return sourceResolution;
}
function calculateSourceExtentResolution(sourceProj, targetProj, targetExtent, targetResolution) {
  const targetCenter = getCenter(targetExtent);
  let sourceResolution = calculateSourceResolution(
    sourceProj,
    targetProj,
    targetCenter,
    targetResolution
  );
  if (!isFinite(sourceResolution) || sourceResolution <= 0) {
    forEachCorner(targetExtent, function(corner) {
      sourceResolution = calculateSourceResolution(
        sourceProj,
        targetProj,
        corner,
        targetResolution
      );
      return isFinite(sourceResolution) && sourceResolution > 0;
    });
  }
  return sourceResolution;
}
function render(width, height, pixelRatio, sourceResolution, sourceExtent, targetResolution, targetExtent, triangulation, sources, gutter, renderEdges, interpolate, drawSingle) {
  const context = createCanvasContext2D(
    Math.round(pixelRatio * width),
    Math.round(pixelRatio * height),
    canvasPool
  );
  if (!interpolate) {
    context.imageSmoothingEnabled = false;
  }
  if (sources.length === 0) {
    return context.canvas;
  }
  context.scale(pixelRatio, pixelRatio);
  function pixelRound(value) {
    return Math.round(value * pixelRatio) / pixelRatio;
  }
  context.globalCompositeOperation = "lighter";
  const sourceDataExtent = createEmpty();
  sources.forEach(function(src, i, arr) {
    extend2(sourceDataExtent, src.extent);
  });
  let stitchContext;
  if (!drawSingle || sources.length !== 1 || gutter !== 0) {
    const canvasWidthInUnits = getWidth(sourceDataExtent);
    const canvasHeightInUnits = getHeight(sourceDataExtent);
    stitchContext = createCanvasContext2D(
      Math.round(pixelRatio * canvasWidthInUnits / sourceResolution),
      Math.round(pixelRatio * canvasHeightInUnits / sourceResolution),
      canvasPool
    );
    if (!interpolate) {
      stitchContext.imageSmoothingEnabled = false;
    }
    const stitchScale = pixelRatio / sourceResolution;
    sources.forEach(function(src, i, arr) {
      const xPos = src.extent[0] - sourceDataExtent[0];
      const yPos = -(src.extent[3] - sourceDataExtent[3]);
      const srcWidth = getWidth(src.extent);
      const srcHeight = getHeight(src.extent);
      if (src.image.width > 0 && src.image.height > 0) {
        stitchContext.drawImage(
          src.image,
          gutter,
          gutter,
          src.image.width - 2 * gutter,
          src.image.height - 2 * gutter,
          xPos * stitchScale,
          yPos * stitchScale,
          srcWidth * stitchScale,
          srcHeight * stitchScale
        );
      }
    });
  }
  const targetTopLeft = getTopLeft(targetExtent);
  triangulation.getTriangles().forEach(function(triangle, i, arr) {
    const source = triangle.source;
    const target = triangle.target;
    let x0 = source[0][0], y0 = source[0][1];
    let x1 = source[1][0], y1 = source[1][1];
    let x2 = source[2][0], y2 = source[2][1];
    const u0 = pixelRound((target[0][0] - targetTopLeft[0]) / targetResolution);
    const v0 = pixelRound(
      -(target[0][1] - targetTopLeft[1]) / targetResolution
    );
    const u1 = pixelRound((target[1][0] - targetTopLeft[0]) / targetResolution);
    const v1 = pixelRound(
      -(target[1][1] - targetTopLeft[1]) / targetResolution
    );
    const u2 = pixelRound((target[2][0] - targetTopLeft[0]) / targetResolution);
    const v2 = pixelRound(
      -(target[2][1] - targetTopLeft[1]) / targetResolution
    );
    const sourceNumericalShiftX = x0;
    const sourceNumericalShiftY = y0;
    x0 = 0;
    y0 = 0;
    x1 -= sourceNumericalShiftX;
    y1 -= sourceNumericalShiftY;
    x2 -= sourceNumericalShiftX;
    y2 -= sourceNumericalShiftY;
    const augmentedMatrix = [
      [x1, y1, 0, 0, u1 - u0],
      [x2, y2, 0, 0, u2 - u0],
      [0, 0, x1, y1, v1 - v0],
      [0, 0, x2, y2, v2 - v0]
    ];
    const affineCoefs = solveLinearSystem(augmentedMatrix);
    if (!affineCoefs) {
      return;
    }
    context.save();
    context.beginPath();
    if (isBrokenDiagonalRendering() || !interpolate) {
      context.moveTo(u1, v1);
      const steps = 4;
      const ud = u0 - u1;
      const vd = v0 - v1;
      for (let step = 0; step < steps; step++) {
        context.lineTo(
          u1 + pixelRound((step + 1) * ud / steps),
          v1 + pixelRound(step * vd / (steps - 1))
        );
        if (step != steps - 1) {
          context.lineTo(
            u1 + pixelRound((step + 1) * ud / steps),
            v1 + pixelRound((step + 1) * vd / (steps - 1))
          );
        }
      }
      context.lineTo(u2, v2);
    } else {
      context.moveTo(u1, v1);
      context.lineTo(u0, v0);
      context.lineTo(u2, v2);
    }
    context.clip();
    context.transform(
      affineCoefs[0],
      affineCoefs[2],
      affineCoefs[1],
      affineCoefs[3],
      u0,
      v0
    );
    context.translate(
      sourceDataExtent[0] - sourceNumericalShiftX,
      sourceDataExtent[3] - sourceNumericalShiftY
    );
    let image;
    if (stitchContext) {
      image = stitchContext.canvas;
      context.scale(
        sourceResolution / pixelRatio,
        -sourceResolution / pixelRatio
      );
    } else {
      const source2 = sources[0];
      const extent = source2.extent;
      image = source2.image;
      context.scale(
        getWidth(extent) / image.width,
        -getHeight(extent) / image.height
      );
    }
    context.drawImage(image, 0, 0);
    context.restore();
  });
  if (stitchContext) {
    releaseCanvas(stitchContext);
    canvasPool.push(stitchContext.canvas);
  }
  if (renderEdges) {
    context.save();
    context.globalCompositeOperation = "source-over";
    context.strokeStyle = "black";
    context.lineWidth = 1;
    triangulation.getTriangles().forEach(function(triangle, i, arr) {
      const target = triangle.target;
      const u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
      const v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
      const u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
      const v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
      const u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
      const v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;
      context.beginPath();
      context.moveTo(u1, v1);
      context.lineTo(u0, v0);
      context.lineTo(u2, v2);
      context.closePath();
      context.stroke();
    });
    context.restore();
  }
  return context.canvas;
}

// node_modules/ol/reproj/Tile.js
init_math();
init_extent();
init_events();
init_dom();
var ReprojTile = class extends Tile_default {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
   * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} gutter Gutter of the source tiles.
   * @param {FunctionType} getTileFunction
   *     Function returning source tiles (z, x, y, pixelRatio).
   * @param {number} [errorThreshold] Acceptable reprojection error (in px).
   * @param {boolean} [renderEdges] Render reprojection edges.
   * @param {import("../Tile.js").Options} [options] Tile options.
   */
  constructor(sourceProj, sourceTileGrid, targetProj, targetTileGrid, tileCoord, wrappedTileCoord, pixelRatio, gutter, getTileFunction, errorThreshold, renderEdges, options) {
    super(tileCoord, TileState_default.IDLE, options);
    this.renderEdges_ = renderEdges !== void 0 ? renderEdges : false;
    this.pixelRatio_ = pixelRatio;
    this.gutter_ = gutter;
    this.canvas_ = null;
    this.sourceTileGrid_ = sourceTileGrid;
    this.targetTileGrid_ = targetTileGrid;
    this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;
    this.sourceTiles_ = [];
    this.sourcesListenerKeys_ = null;
    this.sourceZ_ = 0;
    const targetExtent = targetTileGrid.getTileCoordExtent(
      this.wrappedTileCoord_
    );
    const maxTargetExtent = this.targetTileGrid_.getExtent();
    let maxSourceExtent = this.sourceTileGrid_.getExtent();
    const limitedTargetExtent = maxTargetExtent ? getIntersection(targetExtent, maxTargetExtent) : targetExtent;
    if (getArea(limitedTargetExtent) === 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    const sourceProjExtent = sourceProj.getExtent();
    if (sourceProjExtent) {
      if (!maxSourceExtent) {
        maxSourceExtent = sourceProjExtent;
      } else {
        maxSourceExtent = getIntersection(maxSourceExtent, sourceProjExtent);
      }
    }
    const targetResolution = targetTileGrid.getResolution(
      this.wrappedTileCoord_[0]
    );
    const sourceResolution = calculateSourceExtentResolution(
      sourceProj,
      targetProj,
      limitedTargetExtent,
      targetResolution
    );
    if (!isFinite(sourceResolution) || sourceResolution <= 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    const errorThresholdInPixels = errorThreshold !== void 0 ? errorThreshold : ERROR_THRESHOLD;
    this.triangulation_ = new Triangulation_default(
      sourceProj,
      targetProj,
      limitedTargetExtent,
      maxSourceExtent,
      sourceResolution * errorThresholdInPixels,
      targetResolution
    );
    if (this.triangulation_.getTriangles().length === 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
    let sourceExtent = this.triangulation_.calculateSourceExtent();
    if (maxSourceExtent) {
      if (sourceProj.canWrapX()) {
        sourceExtent[1] = clamp(
          sourceExtent[1],
          maxSourceExtent[1],
          maxSourceExtent[3]
        );
        sourceExtent[3] = clamp(
          sourceExtent[3],
          maxSourceExtent[1],
          maxSourceExtent[3]
        );
      } else {
        sourceExtent = getIntersection(sourceExtent, maxSourceExtent);
      }
    }
    if (!getArea(sourceExtent)) {
      this.state = TileState_default.EMPTY;
    } else {
      const sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(
        sourceExtent,
        this.sourceZ_
      );
      for (let srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
        for (let srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
          const tile = getTileFunction(this.sourceZ_, srcX, srcY, pixelRatio);
          if (tile) {
            this.sourceTiles_.push(tile);
          }
        }
      }
      if (this.sourceTiles_.length === 0) {
        this.state = TileState_default.EMPTY;
      }
    }
  }
  /**
   * Get the HTML Canvas element for this tile.
   * @return {HTMLCanvasElement} Canvas.
   */
  getImage() {
    return this.canvas_;
  }
  /**
   * @private
   */
  reproject_() {
    const sources = [];
    this.sourceTiles_.forEach((tile) => {
      if (tile && tile.getState() == TileState_default.LOADED) {
        sources.push({
          extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
          image: tile.getImage()
        });
      }
    });
    this.sourceTiles_.length = 0;
    if (sources.length === 0) {
      this.state = TileState_default.ERROR;
    } else {
      const z = this.wrappedTileCoord_[0];
      const size = this.targetTileGrid_.getTileSize(z);
      const width = typeof size === "number" ? size : size[0];
      const height = typeof size === "number" ? size : size[1];
      const targetResolution = this.targetTileGrid_.getResolution(z);
      const sourceResolution = this.sourceTileGrid_.getResolution(
        this.sourceZ_
      );
      const targetExtent = this.targetTileGrid_.getTileCoordExtent(
        this.wrappedTileCoord_
      );
      this.canvas_ = render(
        width,
        height,
        this.pixelRatio_,
        sourceResolution,
        this.sourceTileGrid_.getExtent(),
        targetResolution,
        targetExtent,
        this.triangulation_,
        sources,
        this.gutter_,
        this.renderEdges_,
        this.interpolate
      );
      this.state = TileState_default.LOADED;
    }
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.state == TileState_default.IDLE) {
      this.state = TileState_default.LOADING;
      this.changed();
      let leftToLoad = 0;
      this.sourcesListenerKeys_ = [];
      this.sourceTiles_.forEach((tile) => {
        const state = tile.getState();
        if (state == TileState_default.IDLE || state == TileState_default.LOADING) {
          leftToLoad++;
          const sourceListenKey = listen(
            tile,
            EventType_default.CHANGE,
            function(e) {
              const state2 = tile.getState();
              if (state2 == TileState_default.LOADED || state2 == TileState_default.ERROR || state2 == TileState_default.EMPTY) {
                unlistenByKey(sourceListenKey);
                leftToLoad--;
                if (leftToLoad === 0) {
                  this.unlistenSources_();
                  this.reproject_();
                }
              }
            },
            this
          );
          this.sourcesListenerKeys_.push(sourceListenKey);
        }
      });
      if (leftToLoad === 0) {
        setTimeout(this.reproject_.bind(this), 0);
      } else {
        this.sourceTiles_.forEach(function(tile, i, arr) {
          const state = tile.getState();
          if (state == TileState_default.IDLE) {
            tile.load();
          }
        });
      }
    }
  }
  /**
   * @private
   */
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(unlistenByKey);
    this.sourcesListenerKeys_ = null;
  }
  /**
   * Remove from the cache due to expiry
   */
  release() {
    if (this.canvas_) {
      releaseCanvas(this.canvas_.getContext("2d"));
      canvasPool.push(this.canvas_);
      this.canvas_ = null;
    }
    super.release();
  }
};
var Tile_default2 = ReprojTile;

// node_modules/ol/structs/LRUCache.js
init_asserts();
var LRUCache = class {
  /**
   * @param {number} [highWaterMark] High water mark.
   */
  constructor(highWaterMark) {
    this.highWaterMark = highWaterMark !== void 0 ? highWaterMark : 2048;
    this.count_ = 0;
    this.entries_ = {};
    this.oldest_ = null;
    this.newest_ = null;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  /**
   * Expire the cache.
   * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
   */
  expireCache(keep) {
    while (this.canExpireCache()) {
      this.pop();
    }
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.count_ = 0;
    this.entries_ = {};
    this.oldest_ = null;
    this.newest_ = null;
  }
  /**
   * @param {string} key Key.
   * @return {boolean} Contains key.
   */
  containsKey(key) {
    return this.entries_.hasOwnProperty(key);
  }
  /**
   * @param {function(T, string, LRUCache<T>): ?} f The function
   *     to call for every entry from the oldest to the newer. This function takes
   *     3 arguments (the entry value, the entry key and the LRUCache object).
   *     The return value is ignored.
   */
  forEach(f) {
    let entry = this.oldest_;
    while (entry) {
      f(entry.value_, entry.key_, this);
      entry = entry.newer;
    }
  }
  /**
   * @param {string} key Key.
   * @param {*} [options] Options (reserved for subclasses).
   * @return {T} Value.
   */
  get(key, options) {
    const entry = this.entries_[key];
    assert(
      entry !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    );
    if (entry === this.newest_) {
      return entry.value_;
    }
    if (entry === this.oldest_) {
      this.oldest_ = /** @type {Entry} */
      this.oldest_.newer;
      this.oldest_.older = null;
    } else {
      entry.newer.older = entry.older;
      entry.older.newer = entry.newer;
    }
    entry.newer = null;
    entry.older = this.newest_;
    this.newest_.newer = entry;
    this.newest_ = entry;
    return entry.value_;
  }
  /**
   * Remove an entry from the cache.
   * @param {string} key The entry key.
   * @return {T} The removed entry.
   */
  remove(key) {
    const entry = this.entries_[key];
    assert(
      entry !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    );
    if (entry === this.newest_) {
      this.newest_ = /** @type {Entry} */
      entry.older;
      if (this.newest_) {
        this.newest_.newer = null;
      }
    } else if (entry === this.oldest_) {
      this.oldest_ = /** @type {Entry} */
      entry.newer;
      if (this.oldest_) {
        this.oldest_.older = null;
      }
    } else {
      entry.newer.older = entry.older;
      entry.older.newer = entry.newer;
    }
    delete this.entries_[key];
    --this.count_;
    return entry.value_;
  }
  /**
   * @return {number} Count.
   */
  getCount() {
    return this.count_;
  }
  /**
   * @return {Array<string>} Keys.
   */
  getKeys() {
    const keys = new Array(this.count_);
    let i = 0;
    let entry;
    for (entry = this.newest_; entry; entry = entry.older) {
      keys[i++] = entry.key_;
    }
    return keys;
  }
  /**
   * @return {Array<T>} Values.
   */
  getValues() {
    const values = new Array(this.count_);
    let i = 0;
    let entry;
    for (entry = this.newest_; entry; entry = entry.older) {
      values[i++] = entry.value_;
    }
    return values;
  }
  /**
   * @return {T} Last value.
   */
  peekLast() {
    return this.oldest_.value_;
  }
  /**
   * @return {string} Last key.
   */
  peekLastKey() {
    return this.oldest_.key_;
  }
  /**
   * Get the key of the newest item in the cache.  Throws if the cache is empty.
   * @return {string} The newest key.
   */
  peekFirstKey() {
    return this.newest_.key_;
  }
  /**
   * Return an entry without updating least recently used time.
   * @param {string} key Key.
   * @return {T|undefined} Value.
   */
  peek(key) {
    return this.entries_[key]?.value_;
  }
  /**
   * @return {T} value Value.
   */
  pop() {
    const entry = this.oldest_;
    delete this.entries_[entry.key_];
    if (entry.newer) {
      entry.newer.older = null;
    }
    this.oldest_ = /** @type {Entry} */
    entry.newer;
    if (!this.oldest_) {
      this.newest_ = null;
    }
    --this.count_;
    return entry.value_;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  replace(key, value) {
    this.get(key);
    this.entries_[key].value_ = value;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  set(key, value) {
    assert(
      !(key in this.entries_),
      "Tried to set a value for a key that is used already"
    );
    const entry = {
      key_: key,
      newer: null,
      older: this.newest_,
      value_: value
    };
    if (!this.newest_) {
      this.oldest_ = entry;
    } else {
      this.newest_.newer = entry;
    }
    this.newest_ = entry;
    this.entries_[key] = entry;
    ++this.count_;
  }
  /**
   * Set a maximum number of entries for the cache.
   * @param {number} size Cache size.
   * @api
   */
  setSize(size) {
    this.highWaterMark = size;
  }
};
var LRUCache_default = LRUCache;

// node_modules/ol/tilecoord.js
function createOrUpdate2(z, x, y, tileCoord) {
  if (tileCoord !== void 0) {
    tileCoord[0] = z;
    tileCoord[1] = x;
    tileCoord[2] = y;
    return tileCoord;
  }
  return [z, x, y];
}
function getKeyZXY(z, x, y) {
  return z + "/" + x + "/" + y;
}
function getKey2(tileCoord) {
  return getKeyZXY(tileCoord[0], tileCoord[1], tileCoord[2]);
}
function fromKey(key) {
  return key.split("/").map(Number);
}
function hash(tileCoord) {
  return (tileCoord[1] << tileCoord[0]) + tileCoord[2];
}
function withinExtentAndZ(tileCoord, tileGrid) {
  const z = tileCoord[0];
  const x = tileCoord[1];
  const y = tileCoord[2];
  if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) {
    return false;
  }
  const tileRange = tileGrid.getFullTileRange(z);
  if (!tileRange) {
    return true;
  }
  return tileRange.containsXY(x, y);
}

// node_modules/ol/TileCache.js
var TileCache = class extends LRUCache_default {
  clear() {
    while (this.getCount() > 0) {
      this.pop().release();
    }
    super.clear();
  }
  /**
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(usedTiles) {
    while (this.canExpireCache()) {
      const tile = this.peekLast();
      if (tile.getKey() in usedTiles) {
        break;
      } else {
        this.pop().release();
      }
    }
  }
  /**
   * Prune all tiles from the cache that don't have the same z as the newest tile.
   */
  pruneExceptNewestZ() {
    if (this.getCount() === 0) {
      return;
    }
    const key = this.peekFirstKey();
    const tileCoord = fromKey(key);
    const z = tileCoord[0];
    this.forEach((tile) => {
      if (tile.tileCoord[0] !== z) {
        this.remove(getKey2(tile.tileCoord));
        tile.release();
      }
    });
  }
};
var TileCache_default = TileCache;

// node_modules/ol/source/TileEventType.js
var TileEventType_default = {
  /**
   * Triggered when a tile starts loading.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
   * @api
   */
  TILELOADSTART: "tileloadstart",
  /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadend
   * @api
   */
  TILELOADEND: "tileloadend",
  /**
   * Triggered if tile loading results in an error. Note that this is not the
   * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
   * for details.
   * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
   * @api
   */
  TILELOADERROR: "tileloaderror"
};

// node_modules/ol/source/Tile.js
init_Event();
init_Source();
init_util();
init_asserts();
init_proj();

// node_modules/ol/TileRange.js
var TileRange = class {
  /**
   * @param {number} minX Minimum X.
   * @param {number} maxX Maximum X.
   * @param {number} minY Minimum Y.
   * @param {number} maxY Maximum Y.
   */
  constructor(minX, maxX, minY, maxY) {
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
  }
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {boolean} Contains tile coordinate.
   */
  contains(tileCoord) {
    return this.containsXY(tileCoord[1], tileCoord[2]);
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Contains.
   */
  containsTileRange(tileRange) {
    return this.minX <= tileRange.minX && tileRange.maxX <= this.maxX && this.minY <= tileRange.minY && tileRange.maxY <= this.maxY;
  }
  /**
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @return {boolean} Contains coordinate.
   */
  containsXY(x, y) {
    return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Equals.
   */
  equals(tileRange) {
    return this.minX == tileRange.minX && this.minY == tileRange.minY && this.maxX == tileRange.maxX && this.maxY == tileRange.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   */
  extend(tileRange) {
    if (tileRange.minX < this.minX) {
      this.minX = tileRange.minX;
    }
    if (tileRange.maxX > this.maxX) {
      this.maxX = tileRange.maxX;
    }
    if (tileRange.minY < this.minY) {
      this.minY = tileRange.minY;
    }
    if (tileRange.maxY > this.maxY) {
      this.maxY = tileRange.maxY;
    }
  }
  /**
   * @return {number} Height.
   */
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  /**
   * @return {import("./size.js").Size} Size.
   */
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  /**
   * @return {number} Width.
   */
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Intersects.
   */
  intersects(tileRange) {
    return this.minX <= tileRange.maxX && this.maxX >= tileRange.minX && this.minY <= tileRange.maxY && this.maxY >= tileRange.minY;
  }
};
function createOrUpdate3(minX, maxX, minY, maxY, tileRange) {
  if (tileRange !== void 0) {
    tileRange.minX = minX;
    tileRange.maxX = maxX;
    tileRange.minY = minY;
    tileRange.maxY = maxY;
    return tileRange;
  }
  return new TileRange(minX, maxX, minY, maxY);
}
var TileRange_default = TileRange;

// node_modules/ol/tilegrid/TileGrid.js
init_common();
init_asserts();
init_math();
init_extent();
init_intersectsextent();
init_array();
init_size();
var tmpTileCoord = [0, 0, 0];
var DECIMALS = 5;
var TileGrid = class {
  /**
   * @param {Options} options Tile grid options.
   */
  constructor(options) {
    this.minZoom = options.minZoom !== void 0 ? options.minZoom : 0;
    this.resolutions_ = options.resolutions;
    assert(
      isSorted(
        this.resolutions_,
        /**
         * @param {number} a First resolution
         * @param {number} b Second resolution
         * @return {number} Comparison result
         */
        (a, b) => b - a,
        true
      ),
      "`resolutions` must be sorted in descending order"
    );
    let zoomFactor;
    if (!options.origins) {
      for (let i = 0, ii = this.resolutions_.length - 1; i < ii; ++i) {
        if (!zoomFactor) {
          zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
        } else {
          if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
            zoomFactor = void 0;
            break;
          }
        }
      }
    }
    this.zoomFactor_ = zoomFactor;
    this.maxZoom = this.resolutions_.length - 1;
    this.origin_ = options.origin !== void 0 ? options.origin : null;
    this.origins_ = null;
    if (options.origins !== void 0) {
      this.origins_ = options.origins;
      assert(
        this.origins_.length == this.resolutions_.length,
        "Number of `origins` and `resolutions` must be equal"
      );
    }
    const extent = options.extent;
    if (extent !== void 0 && !this.origin_ && !this.origins_) {
      this.origin_ = getTopLeft(extent);
    }
    assert(
      !this.origin_ && this.origins_ || this.origin_ && !this.origins_,
      "Either `origin` or `origins` must be configured, never both"
    );
    this.tileSizes_ = null;
    if (options.tileSizes !== void 0) {
      this.tileSizes_ = options.tileSizes;
      assert(
        this.tileSizes_.length == this.resolutions_.length,
        "Number of `tileSizes` and `resolutions` must be equal"
      );
    }
    this.tileSize_ = options.tileSize !== void 0 ? options.tileSize : !this.tileSizes_ ? DEFAULT_TILE_SIZE : null;
    assert(
      !this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_,
      "Either `tileSize` or `tileSizes` must be configured, never both"
    );
    this.extent_ = extent !== void 0 ? extent : null;
    this.fullTileRanges_ = null;
    this.tmpSize_ = [0, 0];
    this.tmpExtent_ = [0, 0, 0, 0];
    if (options.sizes !== void 0) {
      this.fullTileRanges_ = options.sizes.map((size, z) => {
        const tileRange = new TileRange_default(
          Math.min(0, size[0]),
          Math.max(size[0] - 1, -1),
          Math.min(0, size[1]),
          Math.max(size[1] - 1, -1)
        );
        if (extent) {
          const restrictedTileRange = this.getTileRangeForExtentAndZ(extent, z);
          tileRange.minX = Math.max(restrictedTileRange.minX, tileRange.minX);
          tileRange.maxX = Math.min(restrictedTileRange.maxX, tileRange.maxX);
          tileRange.minY = Math.max(restrictedTileRange.minY, tileRange.minY);
          tileRange.maxY = Math.min(restrictedTileRange.maxY, tileRange.maxY);
        }
        return tileRange;
      });
    } else if (extent) {
      this.calculateTileRanges_(extent);
    }
  }
  /**
   * Call a function with each tile coordinate for a given extent and zoom level.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} zoom Integer zoom level.
   * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
   * @api
   */
  forEachTileCoord(extent, zoom, callback) {
    const tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
    for (let i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i) {
      for (let j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j) {
        callback([zoom, i, j]);
      }
    }
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {boolean} Callback succeeded.
   */
  forEachTileCoordParentTileRange(tileCoord, callback, tempTileRange, tempExtent) {
    let tileRange, x, y;
    let tileCoordExtent = null;
    let z = tileCoord[0] - 1;
    if (this.zoomFactor_ === 2) {
      x = tileCoord[1];
      y = tileCoord[2];
    } else {
      tileCoordExtent = this.getTileCoordExtent(tileCoord, tempExtent);
    }
    while (z >= this.minZoom) {
      if (x !== void 0 && y !== void 0) {
        x = Math.floor(x / 2);
        y = Math.floor(y / 2);
        tileRange = createOrUpdate3(x, x, y, y, tempTileRange);
      } else {
        tileRange = this.getTileRangeForExtentAndZ(
          tileCoordExtent,
          z,
          tempTileRange
        );
      }
      if (callback(z, tileRange)) {
        return true;
      }
      --z;
    }
    return false;
  }
  /**
   * Get the extent for this tile grid, if it was configured.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }
  /**
   * Get the maximum zoom level for the grid.
   * @return {number} Max zoom.
   * @api
   */
  getMaxZoom() {
    return this.maxZoom;
  }
  /**
   * Get the minimum zoom level for the grid.
   * @return {number} Min zoom.
   * @api
   */
  getMinZoom() {
    return this.minZoom;
  }
  /**
   * Get the origin for the grid at the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {import("../coordinate.js").Coordinate} Origin.
   * @api
   */
  getOrigin(z) {
    if (this.origin_) {
      return this.origin_;
    }
    return this.origins_[z];
  }
  /**
   * Get the resolution for the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {number} Resolution.
   * @api
   */
  getResolution(z) {
    return this.resolutions_[z];
  }
  /**
   * Get the list of resolutions for the tile grid.
   * @return {Array<number>} Resolutions.
   * @api
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */
  getTileCoordChildTileRange(tileCoord, tempTileRange, tempExtent) {
    if (tileCoord[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const minX = tileCoord[1] * 2;
        const minY = tileCoord[2] * 2;
        return createOrUpdate3(
          minX,
          minX + 1,
          minY,
          minY + 1,
          tempTileRange
        );
      }
      const tileCoordExtent = this.getTileCoordExtent(
        tileCoord,
        tempExtent || this.tmpExtent_
      );
      return this.getTileRangeForExtentAndZ(
        tileCoordExtent,
        tileCoord[0] + 1,
        tempTileRange
      );
    }
    return null;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */
  getTileRangeForTileCoordAndZ(tileCoord, z, tempTileRange) {
    if (z > this.maxZoom || z < this.minZoom) {
      return null;
    }
    const tileCoordZ = tileCoord[0];
    const tileCoordX = tileCoord[1];
    const tileCoordY = tileCoord[2];
    if (z === tileCoordZ) {
      return createOrUpdate3(
        tileCoordX,
        tileCoordY,
        tileCoordX,
        tileCoordY,
        tempTileRange
      );
    }
    if (this.zoomFactor_) {
      const factor = Math.pow(this.zoomFactor_, z - tileCoordZ);
      const minX = Math.floor(tileCoordX * factor);
      const minY = Math.floor(tileCoordY * factor);
      if (z < tileCoordZ) {
        return createOrUpdate3(minX, minX, minY, minY, tempTileRange);
      }
      const maxX = Math.floor(factor * (tileCoordX + 1)) - 1;
      const maxY = Math.floor(factor * (tileCoordY + 1)) - 1;
      return createOrUpdate3(minX, maxX, minY, maxY, tempTileRange);
    }
    const tileCoordExtent = this.getTileCoordExtent(tileCoord, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(tileCoordExtent, z, tempTileRange);
  }
  /**
   * Get a tile range for the given extent and integer zoom level.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
   * @return {import("../TileRange.js").default} Tile range.
   */
  getTileRangeForExtentAndZ(extent, z, tempTileRange) {
    this.getTileCoordForXYAndZ_(extent[0], extent[3], z, false, tmpTileCoord);
    const minX = tmpTileCoord[1];
    const minY = tmpTileCoord[2];
    this.getTileCoordForXYAndZ_(extent[2], extent[1], z, true, tmpTileCoord);
    const maxX = tmpTileCoord[1];
    const maxY = tmpTileCoord[2];
    return createOrUpdate3(minX, maxX, minY, maxY, tempTileRange);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {import("../coordinate.js").Coordinate} Tile center.
   */
  getTileCoordCenter(tileCoord) {
    const origin = this.getOrigin(tileCoord[0]);
    const resolution = this.getResolution(tileCoord[0]);
    const tileSize = toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
    return [
      origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
      origin[1] - (tileCoord[2] + 0.5) * tileSize[1] * resolution
    ];
  }
  /**
   * Get the extent of a tile coordinate.
   *
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getTileCoordExtent(tileCoord, tempExtent) {
    const origin = this.getOrigin(tileCoord[0]);
    const resolution = this.getResolution(tileCoord[0]);
    const tileSize = toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
    const minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
    const minY = origin[1] - (tileCoord[2] + 1) * tileSize[1] * resolution;
    const maxX = minX + tileSize[0] * resolution;
    const maxY = minY + tileSize[1] * resolution;
    return createOrUpdate(minX, minY, maxX, maxY, tempExtent);
  }
  /**
   * Get the tile coordinate for the given map coordinate and resolution.  This
   * method considers that coordinates that intersect tile boundaries should be
   * assigned the higher tile coordinate.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndResolution(coordinate, resolution, opt_tileCoord) {
    return this.getTileCoordForXYAndResolution_(
      coordinate[0],
      coordinate[1],
      resolution,
      false,
      opt_tileCoord
    );
  }
  /**
   * Note that this method should not be called for resolutions that correspond
   * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
   * @param {number} x X.
   * @param {number} y Y.
   * @param {number} resolution Resolution (for a non-integer zoom level).
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */
  getTileCoordForXYAndResolution_(x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
    const z = this.getZForResolution(resolution);
    const scale4 = resolution / this.getResolution(z);
    const origin = this.getOrigin(z);
    const tileSize = toSize(this.getTileSize(z), this.tmpSize_);
    let tileCoordX = scale4 * (x - origin[0]) / resolution / tileSize[0];
    let tileCoordY = scale4 * (origin[1] - y) / resolution / tileSize[1];
    if (reverseIntersectionPolicy) {
      tileCoordX = ceil(tileCoordX, DECIMALS) - 1;
      tileCoordY = ceil(tileCoordY, DECIMALS) - 1;
    } else {
      tileCoordX = floor(tileCoordX, DECIMALS);
      tileCoordY = floor(tileCoordY, DECIMALS);
    }
    return createOrUpdate2(z, tileCoordX, tileCoordY, opt_tileCoord);
  }
  /**
   * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
   * they should have separate implementations.  This method is for integer zoom
   * levels.  The other method should only be called for resolutions corresponding
   * to non-integer zoom levels.
   * @param {number} x Map x coordinate.
   * @param {number} y Map y coordinate.
   * @param {number} z Integer zoom level.
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */
  getTileCoordForXYAndZ_(x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
    const origin = this.getOrigin(z);
    const resolution = this.getResolution(z);
    const tileSize = toSize(this.getTileSize(z), this.tmpSize_);
    let tileCoordX = (x - origin[0]) / resolution / tileSize[0];
    let tileCoordY = (origin[1] - y) / resolution / tileSize[1];
    if (reverseIntersectionPolicy) {
      tileCoordX = ceil(tileCoordX, DECIMALS) - 1;
      tileCoordY = ceil(tileCoordY, DECIMALS) - 1;
    } else {
      tileCoordX = floor(tileCoordX, DECIMALS);
      tileCoordY = floor(tileCoordY, DECIMALS);
    }
    return createOrUpdate2(z, tileCoordX, tileCoordY, opt_tileCoord);
  }
  /**
   * Get a tile coordinate given a map coordinate and zoom level.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} z Integer zoom level, e.g. the result of a `getZForResolution()` method call
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndZ(coordinate, z, opt_tileCoord) {
    return this.getTileCoordForXYAndZ_(
      coordinate[0],
      coordinate[1],
      z,
      false,
      opt_tileCoord
    );
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {number} Tile resolution.
   */
  getTileCoordResolution(tileCoord) {
    return this.resolutions_[tileCoord[0]];
  }
  /**
   * Get the tile size for a zoom level. The type of the return value matches the
   * `tileSize` or `tileSizes` that the tile grid was configured with. To always
   * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
   * @param {number} z Z.
   * @return {number|import("../size.js").Size} Tile size.
   * @api
   */
  getTileSize(z) {
    if (this.tileSize_) {
      return this.tileSize_;
    }
    return this.tileSizes_[z];
  }
  /**
   * @param {number} z Zoom level.
   * @return {import("../TileRange.js").default|null} Extent tile range for the specified zoom level.
   */
  getFullTileRange(z) {
    if (!this.fullTileRanges_) {
      return this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, z) : null;
    }
    return this.fullTileRanges_[z];
  }
  /**
   * @param {number} resolution Resolution.
   * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
   *     If 0, the nearest resolution will be used.
   *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
   *     nearest lower resolution (higher Z) will be used. Default is 0.
   *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
   *
   * For example to change tile Z at the midpoint of zoom levels
   * ```js
   * function(value, high, low) {
   *   return value - low * Math.sqrt(high / low);
   * }
   * ```
   * @return {number} Z.
   * @api
   */
  getZForResolution(resolution, opt_direction) {
    const z = linearFindNearest(
      this.resolutions_,
      resolution,
      opt_direction || 0
    );
    return clamp(z, this.minZoom, this.maxZoom);
  }
  /**
   * The tile with the provided tile coordinate intersects the given viewport.
   * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
   * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
   * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
   */
  tileCoordIntersectsViewport(tileCoord, viewport) {
    return intersectsLinearRing(
      viewport,
      0,
      viewport.length,
      2,
      this.getTileCoordExtent(tileCoord)
    );
  }
  /**
   * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
   * @private
   */
  calculateTileRanges_(extent) {
    const length = this.resolutions_.length;
    const fullTileRanges = new Array(length);
    for (let z = this.minZoom; z < length; ++z) {
      fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
    }
    this.fullTileRanges_ = fullTileRanges;
  }
};
var TileGrid_default = TileGrid;

// node_modules/ol/tilegrid.js
init_common();
init_proj();
init_extent();
init_size();
function getForProjection(projection) {
  let tileGrid = projection.getDefaultTileGrid();
  if (!tileGrid) {
    tileGrid = createForProjection(projection);
    projection.setDefaultTileGrid(tileGrid);
  }
  return tileGrid;
}
function wrapX3(tileGrid, tileCoord, projection) {
  const z = tileCoord[0];
  const center = tileGrid.getTileCoordCenter(tileCoord);
  const projectionExtent = extentFromProjection(projection);
  if (!containsCoordinate(projectionExtent, center)) {
    const worldWidth = getWidth(projectionExtent);
    const worldsAway = Math.ceil(
      (projectionExtent[0] - center[0]) / worldWidth
    );
    center[0] += worldWidth * worldsAway;
    return tileGrid.getTileCoordForCoordAndZ(center, z);
  }
  return tileCoord;
}
function createForExtent(extent, maxZoom, tileSize, corner) {
  corner = corner !== void 0 ? corner : "top-left";
  const resolutions = resolutionsFromExtent(extent, maxZoom, tileSize);
  return new TileGrid_default({
    extent,
    origin: getCorner(extent, corner),
    resolutions,
    tileSize
  });
}
function createXYZ(options) {
  const xyzOptions = options || {};
  const extent = xyzOptions.extent || get3("EPSG:3857").getExtent();
  const gridOptions = {
    extent,
    minZoom: xyzOptions.minZoom,
    tileSize: xyzOptions.tileSize,
    resolutions: resolutionsFromExtent(
      extent,
      xyzOptions.maxZoom,
      xyzOptions.tileSize,
      xyzOptions.maxResolution
    )
  };
  return new TileGrid_default(gridOptions);
}
function resolutionsFromExtent(extent, maxZoom, tileSize, maxResolution) {
  maxZoom = maxZoom !== void 0 ? maxZoom : DEFAULT_MAX_ZOOM;
  tileSize = toSize(tileSize !== void 0 ? tileSize : DEFAULT_TILE_SIZE);
  const height = getHeight(extent);
  const width = getWidth(extent);
  maxResolution = maxResolution > 0 ? maxResolution : Math.max(width / tileSize[0], height / tileSize[1]);
  const length = maxZoom + 1;
  const resolutions = new Array(length);
  for (let z = 0; z < length; ++z) {
    resolutions[z] = maxResolution / Math.pow(2, z);
  }
  return resolutions;
}
function createForProjection(projection, maxZoom, tileSize, corner) {
  const extent = extentFromProjection(projection);
  return createForExtent(extent, maxZoom, tileSize, corner);
}
function extentFromProjection(projection) {
  projection = get3(projection);
  let extent = projection.getExtent();
  if (!extent) {
    const half = 180 * METERS_PER_UNIT.degrees / projection.getMetersPerUnit();
    extent = createOrUpdate(-half, -half, half, half);
  }
  return extent;
}

// node_modules/ol/source/Tile.js
init_size();
var TileSource = class extends Source_default {
  /**
   * @param {Options} options SourceTile source options.
   */
  constructor(options) {
    super({
      attributions: options.attributions,
      attributionsCollapsible: options.attributionsCollapsible,
      projection: options.projection,
      state: options.state,
      wrapX: options.wrapX,
      interpolate: options.interpolate
    });
    this.on;
    this.once;
    this.un;
    this.opaque_ = options.opaque !== void 0 ? options.opaque : false;
    this.tilePixelRatio_ = options.tilePixelRatio !== void 0 ? options.tilePixelRatio : 1;
    this.tileGrid = options.tileGrid !== void 0 ? options.tileGrid : null;
    const tileSize = [256, 256];
    if (this.tileGrid) {
      toSize(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), tileSize);
    }
    this.tileCache = new TileCache_default(options.cacheSize || 0);
    this.tmpSize = [0, 0];
    this.key_ = options.key || "";
    this.tileOptions = {
      transition: options.transition,
      interpolate: options.interpolate
    };
    this.zDirection = options.zDirection ? options.zDirection : 0;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.tileCache.canExpireCache();
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(projection, usedTiles) {
    const tileCache = this.getTileCacheForProjection(projection);
    if (tileCache) {
      tileCache.expireCache(usedTiles);
    }
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {number} z Zoom level.
   * @param {import("../TileRange.js").default} tileRange Tile range.
   * @param {function(import("../Tile.js").default):(boolean|void)} callback Called with each
   *     loaded tile.  If the callback returns `false`, the tile will not be
   *     considered loaded.
   * @return {boolean} The tile range is fully covered with loaded tiles.
   */
  forEachLoadedTile(projection, z, tileRange, callback) {
    const tileCache = this.getTileCacheForProjection(projection);
    if (!tileCache) {
      return false;
    }
    let covered = true;
    let tile, tileCoordKey, loaded;
    for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
      for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
        tileCoordKey = getKeyZXY(z, x, y);
        loaded = false;
        if (tileCache.containsKey(tileCoordKey)) {
          tile = /** @type {!import("../Tile.js").default} */
          tileCache.get(tileCoordKey);
          loaded = tile.getState() === TileState_default.LOADED;
          if (loaded) {
            loaded = callback(tile) !== false;
          }
        }
        if (!loaded) {
          covered = false;
        }
      }
    }
    return covered;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */
  getGutterForProjection(projection) {
    return 0;
  }
  /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */
  getKey() {
    return this.key_;
  }
  /**
   * Set the value to be used as the key for all tiles in the source.
   * @param {string} key The key for tiles.
   * @protected
   */
  setKey(key) {
    if (this.key_ !== key) {
      this.key_ = key;
      this.changed();
    }
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */
  getOpaque(projection) {
    return this.opaque_;
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions(projection) {
    const tileGrid = projection ? this.getTileGridForProjection(projection) : this.tileGrid;
    if (!tileGrid) {
      return null;
    }
    return tileGrid.getResolutions();
  }
  /**
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../Tile.js").default} Tile.
   */
  getTile(z, x, y, pixelRatio, projection) {
    return abstract();
  }
  /**
   * Return the tile grid of the tile source.
   * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
   * @api
   */
  getTileGrid() {
    return this.tileGrid;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */
  getTileGridForProjection(projection) {
    if (!this.tileGrid) {
      return getForProjection(projection);
    }
    return this.tileGrid;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   * @protected
   */
  getTileCacheForProjection(projection) {
    const sourceProjection = this.getProjection();
    assert(
      sourceProjection === null || equivalent(sourceProjection, projection),
      "A VectorTile source can only be rendered if it has a projection compatible with the view projection."
    );
    return this.tileCache;
  }
  /**
   * Get the tile pixel ratio for this source. Subclasses may override this
   * method, which is meant to return a supported pixel ratio that matches the
   * provided `pixelRatio` as close as possible.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */
  getTilePixelRatio(pixelRatio) {
    return this.tilePixelRatio_;
  }
  /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   */
  getTilePixelSize(z, pixelRatio, projection) {
    const tileGrid = this.getTileGridForProjection(projection);
    const tilePixelRatio = this.getTilePixelRatio(pixelRatio);
    const tileSize = toSize(tileGrid.getTileSize(z), this.tmpSize);
    if (tilePixelRatio == 1) {
      return tileSize;
    }
    return scale3(tileSize, tilePixelRatio, this.tmpSize);
  }
  /**
   * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
   * is outside the resolution and extent range of the tile grid, `null` will be
   * returned.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../proj/Projection.js").default} [projection] Projection.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
   *     null if no tile URL should be created for the passed `tileCoord`.
   */
  getTileCoordForTileUrlFunction(tileCoord, projection) {
    projection = projection !== void 0 ? projection : this.getProjection();
    const tileGrid = this.getTileGridForProjection(projection);
    if (this.getWrapX() && projection.isGlobal()) {
      tileCoord = wrapX3(tileGrid, tileCoord, projection);
    }
    return withinExtentAndZ(tileCoord, tileGrid) ? tileCoord : null;
  }
  /**
   * Remove all cached tiles from the source. The next render cycle will fetch new tiles.
   * @api
   */
  clear() {
    this.tileCache.clear();
  }
  refresh() {
    this.clear();
    super.refresh();
  }
  /**
   * Increases the cache size if needed
   * @param {number} tileCount Minimum number of tiles needed.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  updateCacheSize(tileCount, projection) {
    const tileCache = this.getTileCacheForProjection(projection);
    if (tileCount > tileCache.highWaterMark) {
      tileCache.highWaterMark = tileCount;
    }
  }
  /**
   * Marks a tile coord as being used, without triggering a load.
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  useTile(z, x, y, projection) {
  }
};
var TileSourceEvent = class extends Event_default {
  /**
   * @param {string} type Type.
   * @param {import("../Tile.js").default} tile The tile.
   */
  constructor(type, tile) {
    super(type);
    this.tile = tile;
  }
};
var Tile_default3 = TileSource;

// node_modules/ol/tileurlfunction.js
init_math();
function createFromTemplate(template, tileGrid) {
  const zRegEx = /\{z\}/g;
  const xRegEx = /\{x\}/g;
  const yRegEx = /\{y\}/g;
  const dashYRegEx = /\{-y\}/g;
  return (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(tileCoord, pixelRatio, projection) {
      if (!tileCoord) {
        return void 0;
      }
      return template.replace(zRegEx, tileCoord[0].toString()).replace(xRegEx, tileCoord[1].toString()).replace(yRegEx, tileCoord[2].toString()).replace(dashYRegEx, function() {
        const z = tileCoord[0];
        const range = tileGrid.getFullTileRange(z);
        if (!range) {
          throw new Error(
            "The {-y} placeholder requires a tile grid with extent"
          );
        }
        const y = range.getHeight() - tileCoord[2] - 1;
        return y.toString();
      });
    }
  );
}
function createFromTemplates(templates, tileGrid) {
  const len = templates.length;
  const tileUrlFunctions = new Array(len);
  for (let i = 0; i < len; ++i) {
    tileUrlFunctions[i] = createFromTemplate(templates[i], tileGrid);
  }
  return createFromTileUrlFunctions(tileUrlFunctions);
}
function createFromTileUrlFunctions(tileUrlFunctions) {
  if (tileUrlFunctions.length === 1) {
    return tileUrlFunctions[0];
  }
  return (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(tileCoord, pixelRatio, projection) {
      if (!tileCoord) {
        return void 0;
      }
      const h = hash(tileCoord);
      const index = modulo(h, tileUrlFunctions.length);
      return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
    }
  );
}
function expandUrl(url) {
  const urls = [];
  let match = /\{([a-z])-([a-z])\}/.exec(url);
  if (match) {
    const startCharCode = match[1].charCodeAt(0);
    const stopCharCode = match[2].charCodeAt(0);
    let charCode;
    for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
      urls.push(url.replace(match[0], String.fromCharCode(charCode)));
    }
    return urls;
  }
  match = /\{(\d+)-(\d+)\}/.exec(url);
  if (match) {
    const stop = parseInt(match[2], 10);
    for (let i = parseInt(match[1], 10); i <= stop; i++) {
      urls.push(url.replace(match[0], i.toString()));
    }
    return urls;
  }
  urls.push(url);
  return urls;
}

// node_modules/ol/source/UrlTile.js
init_util();
var UrlTile = class _UrlTile extends Tile_default3 {
  /**
   * @param {Options} options Image tile options.
   */
  constructor(options) {
    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      opaque: options.opaque,
      projection: options.projection,
      state: options.state,
      tileGrid: options.tileGrid,
      tilePixelRatio: options.tilePixelRatio,
      wrapX: options.wrapX,
      transition: options.transition,
      interpolate: options.interpolate,
      key: options.key,
      attributionsCollapsible: options.attributionsCollapsible,
      zDirection: options.zDirection
    });
    this.generateTileUrlFunction_ = this.tileUrlFunction === _UrlTile.prototype.tileUrlFunction;
    this.tileLoadFunction = options.tileLoadFunction;
    if (options.tileUrlFunction) {
      this.tileUrlFunction = options.tileUrlFunction;
    }
    this.urls = null;
    if (options.urls) {
      this.setUrls(options.urls);
    } else if (options.url) {
      this.setUrl(options.url);
    }
    this.tileLoadingKeys_ = {};
  }
  /**
   * Return the tile load function of the source.
   * @return {import("../Tile.js").LoadFunction} TileLoadFunction
   * @api
   */
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  /**
   * Return the tile URL function of the source.
   * @return {import("../Tile.js").UrlFunction} TileUrlFunction
   * @api
   */
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
  }
  /**
   * Return the URLs used for this source.
   * When a tileUrlFunction is used instead of url or urls,
   * null will be returned.
   * @return {!Array<string>|null} URLs.
   * @api
   */
  getUrls() {
    return this.urls;
  }
  /**
   * Handle tile change events.
   * @param {import("../events/Event.js").default} event Event.
   * @protected
   */
  handleTileChange(event) {
    const tile = (
      /** @type {import("../Tile.js").default} */
      event.target
    );
    const uid = getUid(tile);
    const tileState = tile.getState();
    let type;
    if (tileState == TileState_default.LOADING) {
      this.tileLoadingKeys_[uid] = true;
      type = TileEventType_default.TILELOADSTART;
    } else if (uid in this.tileLoadingKeys_) {
      delete this.tileLoadingKeys_[uid];
      type = tileState == TileState_default.ERROR ? TileEventType_default.TILELOADERROR : tileState == TileState_default.LOADED ? TileEventType_default.TILELOADEND : void 0;
    }
    if (type != void 0) {
      this.dispatchEvent(new TileSourceEvent(type, tile));
    }
  }
  /**
   * Set the tile load function of the source.
   * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @api
   */
  setTileLoadFunction(tileLoadFunction) {
    this.tileCache.clear();
    this.tileLoadFunction = tileLoadFunction;
    this.changed();
  }
  /**
   * Set the tile URL function of the source.
   * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
   * @param {string} [key] Optional new tile key for the source.
   * @api
   */
  setTileUrlFunction(tileUrlFunction, key) {
    this.tileUrlFunction = tileUrlFunction;
    this.tileCache.pruneExceptNewestZ();
    if (typeof key !== "undefined") {
      this.setKey(key);
    } else {
      this.changed();
    }
  }
  /**
   * Set the URL to use for requests.
   * @param {string} url URL.
   * @api
   */
  setUrl(url) {
    const urls = expandUrl(url);
    this.urls = urls;
    this.setUrls(urls);
  }
  /**
   * Set the URLs to use for requests.
   * @param {Array<string>} urls URLs.
   * @api
   */
  setUrls(urls) {
    this.urls = urls;
    const key = urls.join("\n");
    if (this.generateTileUrlFunction_) {
      this.setTileUrlFunction(createFromTemplates(urls, this.tileGrid), key);
    } else {
      this.setKey(key);
    }
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {string|undefined} Tile URL.
   */
  tileUrlFunction(tileCoord, pixelRatio, projection) {
    return void 0;
  }
  /**
   * Marks a tile coord as being used, without triggering a load.
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   */
  useTile(z, x, y) {
    const tileCoordKey = getKeyZXY(z, x, y);
    if (this.tileCache.containsKey(tileCoordKey)) {
      this.tileCache.get(tileCoordKey);
    }
  }
};
var UrlTile_default = UrlTile;

// node_modules/ol/source/TileImage.js
init_proj();
init_util();
var TileImage = class extends UrlTile_default {
  /**
   * @param {!Options} options Image tile options.
   */
  constructor(options) {
    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      opaque: options.opaque,
      projection: options.projection,
      state: options.state,
      tileGrid: options.tileGrid,
      tileLoadFunction: options.tileLoadFunction ? options.tileLoadFunction : defaultTileLoadFunction,
      tilePixelRatio: options.tilePixelRatio,
      tileUrlFunction: options.tileUrlFunction,
      url: options.url,
      urls: options.urls,
      wrapX: options.wrapX,
      transition: options.transition,
      interpolate: options.interpolate !== void 0 ? options.interpolate : true,
      key: options.key,
      attributionsCollapsible: options.attributionsCollapsible,
      zDirection: options.zDirection
    });
    this.crossOrigin = options.crossOrigin !== void 0 ? options.crossOrigin : null;
    this.tileClass = options.tileClass !== void 0 ? options.tileClass : ImageTile_default;
    this.tileCacheForProjection = {};
    this.tileGridForProjection = {};
    this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;
    this.renderReprojectionEdges_ = false;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    if (this.tileCache.canExpireCache()) {
      return true;
    }
    for (const key in this.tileCacheForProjection) {
      if (this.tileCacheForProjection[key].canExpireCache()) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(projection, usedTiles) {
    const usedTileCache = this.getTileCacheForProjection(projection);
    this.tileCache.expireCache(
      this.tileCache == usedTileCache ? usedTiles : {}
    );
    for (const id in this.tileCacheForProjection) {
      const tileCache = this.tileCacheForProjection[id];
      tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
    }
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */
  getGutterForProjection(projection) {
    if (this.getProjection() && projection && !equivalent(this.getProjection(), projection)) {
      return 0;
    }
    return this.getGutter();
  }
  /**
   * @return {number} Gutter.
   */
  getGutter() {
    return 0;
  }
  /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */
  getKey() {
    let key = super.getKey();
    if (!this.getInterpolate()) {
      key += ":disable-interpolation";
    }
    return key;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */
  getOpaque(projection) {
    if (this.getProjection() && projection && !equivalent(this.getProjection(), projection)) {
      return false;
    }
    return super.getOpaque(projection);
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */
  getTileGridForProjection(projection) {
    const thisProj = this.getProjection();
    if (this.tileGrid && (!thisProj || equivalent(thisProj, projection))) {
      return this.tileGrid;
    }
    const projKey = getUid(projection);
    if (!(projKey in this.tileGridForProjection)) {
      this.tileGridForProjection[projKey] = getForProjection(projection);
    }
    return this.tileGridForProjection[projKey];
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   */
  getTileCacheForProjection(projection) {
    const thisProj = this.getProjection();
    if (!thisProj || equivalent(thisProj, projection)) {
      return this.tileCache;
    }
    const projKey = getUid(projection);
    if (!(projKey in this.tileCacheForProjection)) {
      this.tileCacheForProjection[projKey] = new TileCache_default(
        this.tileCache.highWaterMark
      );
    }
    return this.tileCacheForProjection[projKey];
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {string} key The key set on the tile.
   * @return {!ImageTile} Tile.
   * @private
   */
  createTile_(z, x, y, pixelRatio, projection, key) {
    const tileCoord = [z, x, y];
    const urlTileCoord = this.getTileCoordForTileUrlFunction(
      tileCoord,
      projection
    );
    const tileUrl = urlTileCoord ? this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : void 0;
    const tile = new this.tileClass(
      tileCoord,
      tileUrl !== void 0 ? TileState_default.IDLE : TileState_default.EMPTY,
      tileUrl !== void 0 ? tileUrl : "",
      this.crossOrigin,
      this.tileLoadFunction,
      this.tileOptions
    );
    tile.key = key;
    tile.addEventListener(EventType_default.CHANGE, this.handleTileChange.bind(this));
    return tile;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!(ImageTile|ReprojTile)} Tile.
   */
  getTile(z, x, y, pixelRatio, projection) {
    const sourceProjection = this.getProjection();
    if (!sourceProjection || !projection || equivalent(sourceProjection, projection)) {
      return this.getTileInternal(
        z,
        x,
        y,
        pixelRatio,
        sourceProjection || projection
      );
    }
    const cache3 = this.getTileCacheForProjection(projection);
    const tileCoord = [z, x, y];
    let tile;
    const tileCoordKey = getKey2(tileCoord);
    if (cache3.containsKey(tileCoordKey)) {
      tile = cache3.get(tileCoordKey);
    }
    const key = this.getKey();
    if (tile && tile.key == key) {
      return tile;
    }
    const sourceTileGrid = this.getTileGridForProjection(sourceProjection);
    const targetTileGrid = this.getTileGridForProjection(projection);
    const wrappedTileCoord = this.getTileCoordForTileUrlFunction(
      tileCoord,
      projection
    );
    const newTile = new Tile_default2(
      sourceProjection,
      sourceTileGrid,
      projection,
      targetTileGrid,
      tileCoord,
      wrappedTileCoord,
      this.getTilePixelRatio(pixelRatio),
      this.getGutter(),
      (z2, x2, y2, pixelRatio2) => this.getTileInternal(z2, x2, y2, pixelRatio2, sourceProjection),
      this.reprojectionErrorThreshold_,
      this.renderReprojectionEdges_,
      this.tileOptions
    );
    newTile.key = key;
    if (tile) {
      newTile.interimTile = tile;
      newTile.refreshInterimChain();
      cache3.replace(tileCoordKey, newTile);
    } else {
      cache3.set(tileCoordKey, newTile);
    }
    return newTile;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {!import("../proj/Projection.js").default} projection Projection.
   * @return {!ImageTile} Tile.
   * @protected
   */
  getTileInternal(z, x, y, pixelRatio, projection) {
    let tile = null;
    const tileCoordKey = getKeyZXY(z, x, y);
    const key = this.getKey();
    if (!this.tileCache.containsKey(tileCoordKey)) {
      tile = this.createTile_(z, x, y, pixelRatio, projection, key);
      this.tileCache.set(tileCoordKey, tile);
    } else {
      tile = this.tileCache.get(tileCoordKey);
      if (tile.key != key) {
        const interimTile = tile;
        tile = this.createTile_(z, x, y, pixelRatio, projection, key);
        if (interimTile.getState() == TileState_default.IDLE) {
          tile.interimTile = interimTile.interimTile;
        } else {
          tile.interimTile = interimTile;
        }
        tile.refreshInterimChain();
        this.tileCache.replace(tileCoordKey, tile);
      }
    }
    return tile;
  }
  /**
   * Sets whether to render reprojection edges or not (usually for debugging).
   * @param {boolean} render Render the edges.
   * @api
   */
  setRenderReprojectionEdges(render2) {
    if (this.renderReprojectionEdges_ == render2) {
      return;
    }
    this.renderReprojectionEdges_ = render2;
    for (const id in this.tileCacheForProjection) {
      this.tileCacheForProjection[id].clear();
    }
    this.changed();
  }
  /**
   * Sets the tile grid to use when reprojecting the tiles to the given
   * projection instead of the default tile grid for the projection.
   *
   * This can be useful when the default tile grid cannot be created
   * (e.g. projection has no extent defined) or
   * for optimization reasons (custom tile size, resolutions, ...).
   *
   * @param {import("../proj.js").ProjectionLike} projection Projection.
   * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
   * @api
   */
  setTileGridForProjection(projection, tilegrid) {
    const proj = get3(projection);
    if (proj) {
      const projKey = getUid(proj);
      if (!(projKey in this.tileGridForProjection)) {
        this.tileGridForProjection[projKey] = tilegrid;
      }
    }
  }
  clear() {
    super.clear();
    for (const id in this.tileCacheForProjection) {
      this.tileCacheForProjection[id].clear();
    }
  }
};
function defaultTileLoadFunction(imageTile, src) {
  imageTile.getImage().src = src;
}
var TileImage_default = TileImage;

// node_modules/ol/source/XYZ.js
var XYZ = class extends TileImage_default {
  /**
   * @param {Options} [options] XYZ options.
   */
  constructor(options) {
    options = options || {};
    const projection = options.projection !== void 0 ? options.projection : "EPSG:3857";
    const tileGrid = options.tileGrid !== void 0 ? options.tileGrid : createXYZ({
      extent: extentFromProjection(projection),
      maxResolution: options.maxResolution,
      maxZoom: options.maxZoom,
      minZoom: options.minZoom,
      tileSize: options.tileSize
    });
    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      crossOrigin: options.crossOrigin,
      interpolate: options.interpolate,
      opaque: options.opaque,
      projection,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      tileGrid,
      tileLoadFunction: options.tileLoadFunction,
      tilePixelRatio: options.tilePixelRatio,
      tileUrlFunction: options.tileUrlFunction,
      url: options.url,
      urls: options.urls,
      wrapX: options.wrapX !== void 0 ? options.wrapX : true,
      transition: options.transition,
      attributionsCollapsible: options.attributionsCollapsible,
      zDirection: options.zDirection
    });
    this.gutter_ = options.gutter !== void 0 ? options.gutter : 0;
  }
  /**
   * @return {number} Gutter.
   */
  getGutter() {
    return this.gutter_;
  }
};
var XYZ_default = XYZ;

// node_modules/ol/source/OSM.js
var ATTRIBUTION = '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
var OSM = class extends XYZ_default {
  /**
   * @param {Options} [options] Open Street Map options.
   */
  constructor(options) {
    options = options || {};
    let attributions;
    if (options.attributions !== void 0) {
      attributions = options.attributions;
    } else {
      attributions = [ATTRIBUTION];
    }
    const crossOrigin = options.crossOrigin !== void 0 ? options.crossOrigin : "anonymous";
    const url = options.url !== void 0 ? options.url : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    super({
      attributions,
      attributionsCollapsible: false,
      cacheSize: options.cacheSize,
      crossOrigin,
      interpolate: options.interpolate,
      maxZoom: options.maxZoom !== void 0 ? options.maxZoom : 19,
      opaque: options.opaque !== void 0 ? options.opaque : true,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      tileLoadFunction: options.tileLoadFunction,
      transition: options.transition,
      url,
      wrapX: options.wrapX,
      zDirection: options.zDirection
    });
  }
};
var OSM_default = OSM;

// node_modules/ol/layer/BaseTile.js
init_Layer();

// node_modules/ol/layer/TileProperty.js
var TileProperty_default = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
};

// node_modules/ol/layer/BaseTile.js
var BaseTileLayer = class extends Layer_default {
  /**
   * @param {Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({}, options);
    delete baseOptions.preload;
    delete baseOptions.useInterimTilesOnError;
    super(baseOptions);
    this.on;
    this.once;
    this.un;
    this.setPreload(options.preload !== void 0 ? options.preload : 0);
    this.setUseInterimTilesOnError(
      options.useInterimTilesOnError !== void 0 ? options.useInterimTilesOnError : true
    );
  }
  /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */
  getPreload() {
    return (
      /** @type {number} */
      this.get(TileProperty_default.PRELOAD)
    );
  }
  /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */
  setPreload(preload) {
    this.set(TileProperty_default.PRELOAD, preload);
  }
  /**
   * Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */
  getUseInterimTilesOnError() {
    return (
      /** @type {boolean} */
      this.get(TileProperty_default.USE_INTERIM_TILES_ON_ERROR)
    );
  }
  /**
   * Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */
  setUseInterimTilesOnError(useInterimTilesOnError) {
    this.set(TileProperty_default.USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
  }
  /**
   * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
   * a four element RGBA array will be returned.  For data tiles, the array length will match the
   * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
   * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   */
  getData(pixel) {
    return super.getData(pixel);
  }
};
var BaseTile_default = BaseTileLayer;

// node_modules/ol/renderer/canvas/TileLayer.js
init_Layer3();
init_transform();
init_array();
init_extent();
init_proj();
init_util();
init_size();
var CanvasTileLayerRenderer = class extends Layer_default3 {
  /**
   * @param {LayerType} tileLayer Tile layer.
   */
  constructor(tileLayer) {
    super(tileLayer);
    this.extentChanged = true;
    this.renderedExtent_ = null;
    this.renderedPixelRatio;
    this.renderedProjection = null;
    this.renderedRevision;
    this.renderedTiles = [];
    this.newTiles_ = false;
    this.tmpExtent = createEmpty();
    this.tmpTileRange_ = new TileRange_default(0, 0, 0, 0);
  }
  /**
   * @protected
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean} Tile is drawable.
   */
  isDrawableTile(tile) {
    const tileLayer = this.getLayer();
    const tileState = tile.getState();
    const useInterimTilesOnError = tileLayer.getUseInterimTilesOnError();
    return tileState == TileState_default.LOADED || tileState == TileState_default.EMPTY || tileState == TileState_default.ERROR && !useInterimTilesOnError;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {!import("../../Tile.js").default} Tile.
   */
  getTile(z, x, y, frameState) {
    const pixelRatio = frameState.pixelRatio;
    const projection = frameState.viewState.projection;
    const tileLayer = this.getLayer();
    const tileSource = tileLayer.getSource();
    let tile = tileSource.getTile(z, x, y, pixelRatio, projection);
    if (tile.getState() == TileState_default.ERROR) {
      if (tileLayer.getUseInterimTilesOnError() && tileLayer.getPreload() > 0) {
        this.newTiles_ = true;
      }
    }
    if (!this.isDrawableTile(tile)) {
      tile = tile.getInterimTile();
    }
    return tile;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   */
  getData(pixel) {
    const frameState = this.frameState;
    if (!frameState) {
      return null;
    }
    const layer = this.getLayer();
    const coordinate = apply(
      frameState.pixelToCoordinateTransform,
      pixel.slice()
    );
    const layerExtent = layer.getExtent();
    if (layerExtent) {
      if (!containsCoordinate(layerExtent, coordinate)) {
        return null;
      }
    }
    const pixelRatio = frameState.pixelRatio;
    const projection = frameState.viewState.projection;
    const viewState = frameState.viewState;
    const source = layer.getRenderSource();
    const tileGrid = source.getTileGridForProjection(viewState.projection);
    const tilePixelRatio = source.getTilePixelRatio(frameState.pixelRatio);
    for (let z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z) {
      const tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
      const tile = source.getTile(
        z,
        tileCoord[1],
        tileCoord[2],
        pixelRatio,
        projection
      );
      if (!(tile instanceof ImageTile_default || tile instanceof Tile_default2) || tile instanceof Tile_default2 && tile.getState() === TileState_default.EMPTY) {
        return null;
      }
      if (tile.getState() !== TileState_default.LOADED) {
        continue;
      }
      const tileOrigin = tileGrid.getOrigin(z);
      const tileSize = toSize(tileGrid.getTileSize(z));
      const tileResolution = tileGrid.getResolution(z);
      const col = Math.floor(
        tilePixelRatio * ((coordinate[0] - tileOrigin[0]) / tileResolution - tileCoord[1] * tileSize[0])
      );
      const row = Math.floor(
        tilePixelRatio * ((tileOrigin[1] - coordinate[1]) / tileResolution - tileCoord[2] * tileSize[1])
      );
      const gutter = Math.round(
        tilePixelRatio * source.getGutterForProjection(viewState.projection)
      );
      return this.getImageData(tile.getImage(), col + gutter, row + gutter);
    }
    return null;
  }
  /**
   * @param {Object<number, Object<string, import("../../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */
  loadedTileCallback(tiles, zoom, tile) {
    if (this.isDrawableTile(tile)) {
      return super.loadedTileCallback(tiles, zoom, tile);
    }
    return false;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(frameState) {
    return !!this.getLayer().getSource();
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(frameState, target) {
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    const viewState = frameState.viewState;
    const projection = viewState.projection;
    const viewResolution = viewState.resolution;
    const viewCenter = viewState.center;
    const rotation = viewState.rotation;
    const pixelRatio = frameState.pixelRatio;
    const tileLayer = this.getLayer();
    const tileSource = tileLayer.getSource();
    const sourceRevision = tileSource.getRevision();
    const tileGrid = tileSource.getTileGridForProjection(projection);
    const z = tileGrid.getZForResolution(viewResolution, tileSource.zDirection);
    const tileResolution = tileGrid.getResolution(z);
    let extent = frameState.extent;
    const resolution = frameState.viewState.resolution;
    const tilePixelRatio = tileSource.getTilePixelRatio(pixelRatio);
    const width = Math.round(getWidth(extent) / resolution * pixelRatio);
    const height = Math.round(getHeight(extent) / resolution * pixelRatio);
    const layerExtent = layerState.extent && fromUserExtent(layerState.extent, projection);
    if (layerExtent) {
      extent = getIntersection(
        extent,
        fromUserExtent(layerState.extent, projection)
      );
    }
    const dx = tileResolution * width / 2 / tilePixelRatio;
    const dy = tileResolution * height / 2 / tilePixelRatio;
    const canvasExtent = [
      viewCenter[0] - dx,
      viewCenter[1] - dy,
      viewCenter[0] + dx,
      viewCenter[1] + dy
    ];
    const tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
    const tilesToDrawByZ = {};
    tilesToDrawByZ[z] = {};
    const findLoadedTiles = this.createLoadedTileFinder(
      tileSource,
      projection,
      tilesToDrawByZ
    );
    const tmpExtent2 = this.tmpExtent;
    const tmpTileRange = this.tmpTileRange_;
    this.newTiles_ = false;
    const viewport = rotation ? getRotatedViewport(
      viewState.center,
      resolution,
      rotation,
      frameState.size
    ) : void 0;
    for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
      for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
        if (rotation && !tileGrid.tileCoordIntersectsViewport([z, x, y], viewport)) {
          continue;
        }
        const tile = this.getTile(z, x, y, frameState);
        if (this.isDrawableTile(tile)) {
          const uid = getUid(this);
          if (tile.getState() == TileState_default.LOADED) {
            tilesToDrawByZ[z][tile.tileCoord.toString()] = tile;
            let inTransition = tile.inTransition(uid);
            if (inTransition && layerState.opacity !== 1) {
              tile.endTransition(uid);
              inTransition = false;
            }
            if (!this.newTiles_ && (inTransition || !this.renderedTiles.includes(tile))) {
              this.newTiles_ = true;
            }
          }
          if (tile.getAlpha(uid, frameState.time) === 1) {
            continue;
          }
        }
        const childTileRange = tileGrid.getTileCoordChildTileRange(
          tile.tileCoord,
          tmpTileRange,
          tmpExtent2
        );
        let covered = false;
        if (childTileRange) {
          covered = findLoadedTiles(z + 1, childTileRange);
        }
        if (!covered) {
          tileGrid.forEachTileCoordParentTileRange(
            tile.tileCoord,
            findLoadedTiles,
            tmpTileRange,
            tmpExtent2
          );
        }
      }
    }
    const canvasScale = tileResolution / viewResolution * pixelRatio / tilePixelRatio;
    compose(
      this.pixelTransform,
      frameState.size[0] / 2,
      frameState.size[1] / 2,
      1 / pixelRatio,
      1 / pixelRatio,
      rotation,
      -width / 2,
      -height / 2
    );
    const canvasTransform = toString(this.pixelTransform);
    this.useContainer(target, canvasTransform, this.getBackground(frameState));
    const context = this.context;
    const canvas = context.canvas;
    makeInverse(this.inversePixelTransform, this.pixelTransform);
    compose(
      this.tempTransform,
      width / 2,
      height / 2,
      canvasScale,
      canvasScale,
      0,
      -width / 2,
      -height / 2
    );
    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;
    } else if (!this.containerReused) {
      context.clearRect(0, 0, width, height);
    }
    if (layerExtent) {
      this.clipUnrotated(context, frameState, layerExtent);
    }
    if (!tileSource.getInterpolate()) {
      context.imageSmoothingEnabled = false;
    }
    this.preRender(context, frameState);
    this.renderedTiles.length = 0;
    let zs = Object.keys(tilesToDrawByZ).map(Number);
    zs.sort(ascending);
    let clips, clipZs, currentClip;
    if (layerState.opacity === 1 && (!this.containerReused || tileSource.getOpaque(frameState.viewState.projection))) {
      zs = zs.reverse();
    } else {
      clips = [];
      clipZs = [];
    }
    for (let i = zs.length - 1; i >= 0; --i) {
      const currentZ = zs[i];
      const currentTilePixelSize = tileSource.getTilePixelSize(
        currentZ,
        pixelRatio,
        projection
      );
      const currentResolution = tileGrid.getResolution(currentZ);
      const currentScale = currentResolution / tileResolution;
      const dx2 = currentTilePixelSize[0] * currentScale * canvasScale;
      const dy2 = currentTilePixelSize[1] * currentScale * canvasScale;
      const originTileCoord = tileGrid.getTileCoordForCoordAndZ(
        getTopLeft(canvasExtent),
        currentZ
      );
      const originTileExtent = tileGrid.getTileCoordExtent(originTileCoord);
      const origin = apply(this.tempTransform, [
        tilePixelRatio * (originTileExtent[0] - canvasExtent[0]) / tileResolution,
        tilePixelRatio * (canvasExtent[3] - originTileExtent[3]) / tileResolution
      ]);
      const tileGutter = tilePixelRatio * tileSource.getGutterForProjection(projection);
      const tilesToDraw = tilesToDrawByZ[currentZ];
      for (const tileCoordKey in tilesToDraw) {
        const tile = (
          /** @type {import("../../ImageTile.js").default} */
          tilesToDraw[tileCoordKey]
        );
        const tileCoord = tile.tileCoord;
        const xIndex = originTileCoord[1] - tileCoord[1];
        const nextX = Math.round(origin[0] - (xIndex - 1) * dx2);
        const yIndex = originTileCoord[2] - tileCoord[2];
        const nextY = Math.round(origin[1] - (yIndex - 1) * dy2);
        const x = Math.round(origin[0] - xIndex * dx2);
        const y = Math.round(origin[1] - yIndex * dy2);
        const w = nextX - x;
        const h = nextY - y;
        const transition = z === currentZ;
        const inTransition = transition && tile.getAlpha(getUid(this), frameState.time) !== 1;
        let contextSaved = false;
        if (!inTransition) {
          if (clips) {
            currentClip = [x, y, x + w, y, x + w, y + h, x, y + h];
            for (let i2 = 0, ii = clips.length; i2 < ii; ++i2) {
              if (z !== currentZ && currentZ < clipZs[i2]) {
                const clip = clips[i2];
                if (intersects(
                  [x, y, x + w, y + h],
                  [clip[0], clip[3], clip[4], clip[7]]
                )) {
                  if (!contextSaved) {
                    context.save();
                    contextSaved = true;
                  }
                  context.beginPath();
                  context.moveTo(currentClip[0], currentClip[1]);
                  context.lineTo(currentClip[2], currentClip[3]);
                  context.lineTo(currentClip[4], currentClip[5]);
                  context.lineTo(currentClip[6], currentClip[7]);
                  context.moveTo(clip[6], clip[7]);
                  context.lineTo(clip[4], clip[5]);
                  context.lineTo(clip[2], clip[3]);
                  context.lineTo(clip[0], clip[1]);
                  context.clip();
                }
              }
            }
            clips.push(currentClip);
            clipZs.push(currentZ);
          } else {
            context.clearRect(x, y, w, h);
          }
        }
        this.drawTileImage(
          tile,
          frameState,
          x,
          y,
          w,
          h,
          tileGutter,
          transition
        );
        if (clips && !inTransition) {
          if (contextSaved) {
            context.restore();
          }
          this.renderedTiles.unshift(tile);
        } else {
          this.renderedTiles.push(tile);
        }
        this.updateUsedTiles(frameState.usedTiles, tileSource, tile);
      }
    }
    this.renderedRevision = sourceRevision;
    this.renderedResolution = tileResolution;
    this.extentChanged = !this.renderedExtent_ || !equals2(this.renderedExtent_, canvasExtent);
    this.renderedExtent_ = canvasExtent;
    this.renderedPixelRatio = pixelRatio;
    this.renderedProjection = projection;
    this.manageTilePyramid(
      frameState,
      tileSource,
      tileGrid,
      pixelRatio,
      projection,
      extent,
      z,
      tileLayer.getPreload()
    );
    this.scheduleExpireCache(frameState, tileSource);
    this.postRender(context, frameState);
    if (layerState.extent) {
      context.restore();
    }
    context.imageSmoothingEnabled = true;
    if (canvasTransform !== canvas.style.transform) {
      canvas.style.transform = canvasTransform;
    }
    return this.container;
  }
  /**
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} x Left of the tile.
   * @param {number} y Top of the tile.
   * @param {number} w Width of the tile.
   * @param {number} h Height of the tile.
   * @param {number} gutter Tile gutter.
   * @param {boolean} transition Apply an alpha transition.
   */
  drawTileImage(tile, frameState, x, y, w, h, gutter, transition) {
    const image = this.getTileImage(tile);
    if (!image) {
      return;
    }
    const uid = getUid(this);
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    const alpha = layerState.opacity * (transition ? tile.getAlpha(uid, frameState.time) : 1);
    const alphaChanged = alpha !== this.context.globalAlpha;
    if (alphaChanged) {
      this.context.save();
      this.context.globalAlpha = alpha;
    }
    this.context.drawImage(
      image,
      gutter,
      gutter,
      image.width - 2 * gutter,
      image.height - 2 * gutter,
      x,
      y,
      w,
      h
    );
    if (alphaChanged) {
      this.context.restore();
    }
    if (alpha !== layerState.opacity) {
      frameState.animate = true;
    } else if (transition) {
      tile.endTransition(uid);
    }
  }
  /**
   * @return {HTMLCanvasElement} Image
   */
  getImage() {
    const context = this.context;
    return context ? context.canvas : null;
  }
  /**
   * Get the image from a tile.
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @protected
   */
  getTileImage(tile) {
    return tile.getImage();
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @protected
   */
  scheduleExpireCache(frameState, tileSource) {
    if (tileSource.canExpireCache()) {
      const postRenderFunction = function(tileSource2, map, frameState2) {
        const tileSourceKey = getUid(tileSource2);
        if (tileSourceKey in frameState2.usedTiles) {
          tileSource2.expireCache(
            frameState2.viewState.projection,
            frameState2.usedTiles[tileSourceKey]
          );
        }
      }.bind(null, tileSource);
      frameState.postRenderFunctions.push(
        /** @type {import("../../Map.js").PostRenderFunction} */
        postRenderFunction
      );
    }
  }
  /**
   * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import('../../Tile.js').default} tile Tile.
   * @protected
   */
  updateUsedTiles(usedTiles, tileSource, tile) {
    const tileSourceKey = getUid(tileSource);
    if (!(tileSourceKey in usedTiles)) {
      usedTiles[tileSourceKey] = {};
    }
    usedTiles[tileSourceKey][tile.getKey()] = true;
  }
  /**
   * Manage tile pyramid.
   * This function performs a number of functions related to the tiles at the
   * current zoom and lower zoom levels:
   * - registers idle tiles in frameState.wantedTiles so that they are not
   *   discarded by the tile queue
   * - enqueues missing tiles
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import("../../tilegrid/TileGrid.js").default} tileGrid Tile grid.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../proj/Projection.js").default} projection Projection.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {number} currentZ Current Z.
   * @param {number} preload Load low resolution tiles up to `preload` levels.
   * @param {function(import("../../Tile.js").default):void} [tileCallback] Tile callback.
   * @protected
   */
  manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio, projection, extent, currentZ, preload, tileCallback) {
    const tileSourceKey = getUid(tileSource);
    if (!(tileSourceKey in frameState.wantedTiles)) {
      frameState.wantedTiles[tileSourceKey] = {};
    }
    const wantedTiles = frameState.wantedTiles[tileSourceKey];
    const tileQueue = frameState.tileQueue;
    const minZoom = tileGrid.getMinZoom();
    const rotation = frameState.viewState.rotation;
    const viewport = rotation ? getRotatedViewport(
      frameState.viewState.center,
      frameState.viewState.resolution,
      rotation,
      frameState.size
    ) : void 0;
    let tileCount = 0;
    let tile, tileRange, tileResolution, x, y, z;
    for (z = minZoom; z <= currentZ; ++z) {
      tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z, tileRange);
      tileResolution = tileGrid.getResolution(z);
      for (x = tileRange.minX; x <= tileRange.maxX; ++x) {
        for (y = tileRange.minY; y <= tileRange.maxY; ++y) {
          if (rotation && !tileGrid.tileCoordIntersectsViewport([z, x, y], viewport)) {
            continue;
          }
          if (currentZ - z <= preload) {
            ++tileCount;
            tile = tileSource.getTile(z, x, y, pixelRatio, projection);
            if (tile.getState() == TileState_default.IDLE) {
              wantedTiles[tile.getKey()] = true;
              if (!tileQueue.isKeyQueued(tile.getKey())) {
                tileQueue.enqueue([
                  tile,
                  tileSourceKey,
                  tileGrid.getTileCoordCenter(tile.tileCoord),
                  tileResolution
                ]);
              }
            }
            if (tileCallback !== void 0) {
              tileCallback(tile);
            }
          } else {
            tileSource.useTile(z, x, y, projection);
          }
        }
      }
    }
    tileSource.updateCacheSize(tileCount, projection);
  }
};
var TileLayer_default = CanvasTileLayerRenderer;

// node_modules/ol/layer/Tile.js
var TileLayer = class extends BaseTile_default {
  /**
   * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(options) {
    super(options);
  }
  createRenderer() {
    return new TileLayer_default(this);
  }
};
var Tile_default4 = TileLayer;

// resources/js/index.ts
init_View();
init_coordinate();

// node_modules/ol/index.js
init_Feature();

// resources/js/index.ts
init_proj();
init_Vector2();
init_Vector();
init_geom();
var import_ol_geocoder = __toESM(require_ol_geocoder(), 1);
init_style2();
window["traineratwot"] = {};
var mPoint = class {
  constructor(view, projection) {
    this.view = view;
    this.projection = projection;
  }
  onChange(callback) {
    try {
      this.view.on("change", () => {
        const [lat, lon] = this.getCoordinates();
        callback(lat, lon);
      });
    } catch (e) {
      console.error(e);
    }
  }
  getCoordinates() {
    return this.view.getCenter();
  }
  setCoordinates(lat, lon) {
    this.view.setCenter(fromLonLat([lat, lon], this.projection));
  }
};
function GetPointMap(id, lat = 0, lon = 0, zoom = 10, lang = "en-US") {
  const projection = "EPSG:4326";
  const mousePositionControl = new MousePosition_default({
    coordinateFormat: createStringXY(4),
    projection,
    className: `mouse-position-${id}`,
    target: document.getElementById(`OSMap-${id}`)
  });
  let point = new Feature_default({
    projection,
    geometry: new Point_default(fromLonLat([lat, lon], projection))
  });
  const vectorSource = new Vector_default2({
    features: [point]
  });
  const vectorLayer = new Vector_default({
    source: vectorSource
  });
  const MapLayer = new Tile_default4({
    source: new OSM_default()
  });
  const target = document.getElementById(`OSMap-${id}`);
  const view = new View_default({
    projection,
    center: fromLonLat([lat, lon], projection),
    zoom
  });
  const map = new Map_default2({
    controls: defaults().extend([mousePositionControl]),
    layers: [
      MapLayer,
      vectorLayer
    ],
    target,
    view
  });
  const geocoder = new import_ol_geocoder.default("nominatim", {
    provider: "osm",
    lang,
    //en-US, fr-FR
    placeholder: "\u041F\u043E\u0438\u0441\u043A...",
    limit: 5,
    keepOpen: true
  });
  map.addControl(geocoder);
  try {
    geocoder.on("addresschosen", function(evt) {
      console.log(evt);
      const feature = evt.feature;
      const coordinate = evt.coordinate;
      feature.setStyle(new Style_default({
        image: new Icon_default({
          color: "rgba(0, 0, 0, 0)",
          crossOrigin: "anonymous",
          src: "https://openlayers.org/en/latest/examples/data/dot.png",
          scale: 0.01
        })
      }));
      view.setCenter(fromLonLat([coordinate[0], coordinate[1]], projection));
    });
  } catch (e) {
    console.error(e);
  }
  function updateCenter() {
    const [lat2, lon2] = map.getView().getCenter();
    point.getGeometry().setCoordinates([lat2, lon2]);
  }
  try {
    map.on("movestart", updateCenter);
    map.on("moveend", updateCenter);
  } catch (e) {
    console.warn(e);
  }
  target.classList.add("map-done");
  return new mPoint(view, projection);
}
window["traineratwot"].GetPointMap = GetPointMap;
/*! Bundled license information:

ol-geocoder/dist/ol-geocoder.js:
  (*!
   * ol-geocoder - v4.3.1
   * A geocoder extension compatible with OpenLayers v6.x, v7.x & v8.x
   * https://github.com/Dominique92/ol-geocoder
   * Built: 15/09/2023 16:57:41
   *)
*/
//# sourceMappingURL=filament-openstreetmap.js.map
