import React, { PropTypes, Component } from 'react';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var root = createCommonjsModule(function (module, exports) {
    "use strict";

    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };
    exports.root = objectTypes[typeof self === 'undefined' ? 'undefined' : _typeof(self)] && self || objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window;
    /* tslint:disable:no-unused-variable */
    var freeExports = objectTypes[typeof exports === 'undefined' ? 'undefined' : _typeof(exports)] && exports && !exports.nodeType && exports;
    var freeModule = objectTypes[typeof module === 'undefined' ? 'undefined' : _typeof(module)] && module && !module.nodeType && module;
    var freeGlobal = objectTypes[_typeof(commonjsGlobal)] && commonjsGlobal;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
        exports.root = freeGlobal;
    }
    });

var root$1 = interopDefault(root);
var root$$1 = root.root;


var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var isFunction = createCommonjsModule(function (module, exports) {
    "use strict";

    function isFunction(x) {
        return typeof x === 'function';
    }
    exports.isFunction = isFunction;
    });

var isFunction$1 = interopDefault(isFunction);
var isFunction$$1 = isFunction.isFunction;


var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var isArray = createCommonjsModule(function (module, exports) {
  "use strict";

  exports.isArray = Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
  });

var isArray$1 = interopDefault(isArray);
var isArray$$1 = isArray.isArray;


var require$$5$1 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var require$$5$1 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var require$$5$1 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var require$$5$1 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var require$$5$1 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var isObject = createCommonjsModule(function (module, exports) {
    "use strict";

    function isObject(x) {
        return x != null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object';
    }
    exports.isObject = isObject;
    });

var isObject$1 = interopDefault(isObject);
var isObject$$1 = isObject.isObject;


var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var errorObject = createCommonjsModule(function (module, exports) {
  "use strict";
  // typeof any so that it we don't have to cast when comparing a result to the error object

  exports.errorObject = { e: {} };
  });

var errorObject$1 = interopDefault(errorObject);
var errorObject$$1 = errorObject.errorObject;


var require$$0$2 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var require$$0$2 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var require$$0$2 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var require$$0$2 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var require$$0$2 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var tryCatch = createCommonjsModule(function (module, exports) {
    "use strict";

    var errorObject_1 = interopDefault(require$$0$2);
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        } catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    exports.tryCatch = tryCatch;
    ;
    });

var tryCatch$1 = interopDefault(tryCatch);
var tryCatch$$1 = tryCatch.tryCatch;


var require$$2$1 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var require$$2$1 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var require$$2$1 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var require$$2$1 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var require$$2$1 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var UnsubscriptionError = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when one or more errors have occurred during the
     * `unsubscribe` of a {@link Subscription}.
     */
    var UnsubscriptionError = function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            _super.call(this);
            this.errors = errors;
            var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) {
                return i + 1 + ") " + err.toString();
            }).join('\n  ') : '');
            this.name = err.name = 'UnsubscriptionError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return UnsubscriptionError;
    }(Error);
    exports.UnsubscriptionError = UnsubscriptionError;
    });

var UnsubscriptionError$1 = interopDefault(UnsubscriptionError);
var UnsubscriptionError$$1 = UnsubscriptionError.UnsubscriptionError;


var require$$0$3 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var require$$0$3 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var require$$0$3 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var require$$0$3 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var require$$0$3 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var Subscription = createCommonjsModule(function (module, exports) {
    "use strict";

    var isArray_1 = interopDefault(require$$5$1);
    var isObject_1 = interopDefault(require$$4);
    var isFunction_1 = interopDefault(require$$3);
    var tryCatch_1 = interopDefault(require$$2$1);
    var errorObject_1 = interopDefault(require$$0$2);
    var UnsubscriptionError_1 = interopDefault(require$$0$3);
    /**
     * Represents a disposable resource, such as the execution of an Observable. A
     * Subscription has one important method, `unsubscribe`, that takes no argument
     * and just disposes the resource held by the subscription.
     *
     * Additionally, subscriptions may be grouped together through the `add()`
     * method, which will attach a child Subscription to the current Subscription.
     * When a Subscription is unsubscribed, all its children (and its grandchildren)
     * will be unsubscribed as well.
     *
     * @class Subscription
     */
    var Subscription = function () {
        /**
         * @param {function(): void} [unsubscribe] A function describing how to
         * perform the disposal of resources when the `unsubscribe` method is called.
         */
        function Subscription(unsubscribe) {
            /**
             * A flag to indicate whether this Subscription has already been unsubscribed.
             * @type {boolean}
             */
            this.isUnsubscribed = false;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        /**
         * Disposes the resources held by the subscription. May, for instance, cancel
         * an ongoing Observable execution or cancel any other type of work that
         * started when the Subscription was created.
         * @return {void}
         */
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.isUnsubscribed) {
                return;
            }
            this.isUnsubscribed = true;
            var _a = this,
                _unsubscribe = _a._unsubscribe,
                _subscriptions = _a._subscriptions;
            this._subscriptions = null;
            if (isFunction_1.isFunction(_unsubscribe)) {
                var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
                if (trial === errorObject_1.errorObject) {
                    hasErrors = true;
                    (errors = errors || []).push(errorObject_1.errorObject.e);
                }
            }
            if (isArray_1.isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject_1.isObject(sub)) {
                        var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject_1.errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject_1.errorObject.e;
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = errors.concat(err.errors);
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        };
        /**
         * Adds a tear down to be called during the unsubscribe() of this
         * Subscription.
         *
         * If the tear down being added is a subscription that is already
         * unsubscribed, is the same reference `add` is being called on, or is
         * `Subscription.EMPTY`, it will not be added.
         *
         * If this subscription is already in an `isUnsubscribed` state, the passed
         * tear down logic will be executed immediately.
         *
         * @param {TeardownLogic} teardown The additional logic to execute on
         * teardown.
         * @return {Subscription} Returns the Subscription used or created to be
         * added to the inner subscriptions list. This Subscription can be used with
         * `remove()` to remove the passed teardown logic from the inner subscriptions
         * list.
         */
        Subscription.prototype.add = function (teardown) {
            if (!teardown || teardown === this || teardown === Subscription.EMPTY) {
                return;
            }
            var sub = teardown;
            switch (typeof teardown === 'undefined' ? 'undefined' : _typeof(teardown)) {
                case 'function':
                    sub = new Subscription(teardown);
                case 'object':
                    if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
                        break;
                    } else if (this.isUnsubscribed) {
                        sub.unsubscribe();
                    } else {
                        (this._subscriptions || (this._subscriptions = [])).push(sub);
                    }
                    break;
                default:
                    throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            return sub;
        };
        /**
         * Removes a Subscription from the internal list of subscriptions that will
         * unsubscribe during the unsubscribe process of this Subscription.
         * @param {Subscription} subscription The subscription to remove.
         * @return {void}
         */
        Subscription.prototype.remove = function (subscription) {
            // HACK: This might be redundant because of the logic in `add()`
            if (subscription == null || subscription === this || subscription === Subscription.EMPTY) {
                return;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = function (empty) {
            empty.isUnsubscribed = true;
            return empty;
        }(new Subscription());
        return Subscription;
    }();
    exports.Subscription = Subscription;
    });

var Subscription$1 = interopDefault(Subscription);
var Subscription$$1 = Subscription.Subscription;


var require$$0$1 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var require$$0$1 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var require$$0$1 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var require$$0$1 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var require$$0$1 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var Observer = createCommonjsModule(function (module, exports) {
    "use strict";

    exports.empty = {
        isUnsubscribed: true,
        next: function next(value) {},
        error: function error(err) {
            throw err;
        },
        complete: function complete() {}
    };
    });

var Observer$1 = interopDefault(Observer);
var empty = Observer.empty;

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var rxSubscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var root_1 = interopDefault(require$$0);
    var _Symbol = root_1.root.Symbol;
    exports.$$rxSubscriber = typeof _Symbol === 'function' && typeof _Symbol.for === 'function' ? _Symbol.for('rxSubscriber') : '@@rxSubscriber';
    });

var rxSubscriber$1 = interopDefault(rxSubscriber);
var $$rxSubscriber = rxSubscriber.$$rxSubscriber;

var require$$0$4 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var require$$0$4 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var require$$0$4 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var require$$0$4 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var require$$0$4 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var Subscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isFunction_1 = interopDefault(require$$3);
    var Subscription_1 = interopDefault(require$$0$1);
    var Observer_1 = interopDefault(require$$1$2);
    var rxSubscriber_1 = interopDefault(require$$0$4);
    /**
     * Implements the {@link Observer} interface and extends the
     * {@link Subscription} class. While the {@link Observer} is the public API for
     * consuming the values of an {@link Observable}, all Observers get converted to
     * a Subscriber, in order to provide Subscription-like capabilities such as
     * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
     * implementing operators, but it is rarely used as a public API.
     *
     * @class Subscriber<T>
     */
    var Subscriber = function (_super) {
        __extends(Subscriber, _super);
        /**
         * @param {Observer|function(value: T): void} [destinationOrNext] A partially
         * defined Observer or a `next` callback function.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         */
        function Subscriber(destinationOrNext, error, complete) {
            _super.call(this);
            this.syncErrorValue = null;
            this.syncErrorThrown = false;
            this.syncErrorThrowable = false;
            this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    this.destination = Observer_1.empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        this.destination = Observer_1.empty;
                        break;
                    }
                    if ((typeof destinationOrNext === 'undefined' ? 'undefined' : _typeof(destinationOrNext)) === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            this.destination = destinationOrNext;
                            this.destination.add(this);
                        } else {
                            this.syncErrorThrowable = true;
                            this.destination = new SafeSubscriber(this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    this.syncErrorThrowable = true;
                    this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                    break;
            }
        }
        Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return this;
        };
        /**
         * A static factory for a Subscriber, given a (potentially partial) definition
         * of an Observer.
         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
         * Observer represented by the given arguments.
         */
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        /**
         * The {@link Observer} callback to receive notifications of type `next` from
         * the Observable, with a value. The Observable may call this method 0 or more
         * times.
         * @param {T} [value] The `next` value.
         * @return {void}
         */
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        /**
         * The {@link Observer} callback to receive notifications of type `error` from
         * the Observable, with an attached {@link Error}. Notifies the Observer that
         * the Observable has experienced an error condition.
         * @param {any} [err] The `error` exception.
         * @return {void}
         */
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        /**
         * The {@link Observer} callback to receive a valueless notification of type
         * `complete` from the Observable. Notifies the Observer that the Observable
         * has finished sending push-based notifications.
         * @return {void}
         */
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.isUnsubscribed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        return Subscriber;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parent, observerOrNext, error, complete) {
            _super.call(this);
            this._parent = _parent;
            var next;
            var context = this;
            if (isFunction_1.isFunction(observerOrNext)) {
                next = observerOrNext;
            } else if (observerOrNext) {
                context = observerOrNext;
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
            this._context = context;
            this._next = next;
            this._error = error;
            this._complete = complete;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parent = this._parent;
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                } else if (this.__tryOrSetError(_parent, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._error) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._error, err);
                        this.unsubscribe();
                    }
                } else if (!_parent.syncErrorThrowable) {
                    this.unsubscribe();
                    throw err;
                } else {
                    _parent.syncErrorValue = err;
                    _parent.syncErrorThrown = true;
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._complete) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._complete);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._complete);
                        this.unsubscribe();
                    }
                } else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                this.unsubscribe();
                throw err;
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parent = this._parent;
            this._context = null;
            this._parent = null;
            _parent.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber);
    });

var Subscriber$1 = interopDefault(Subscriber);
var Subscriber$$1 = Subscriber.Subscriber;


var require$$1$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var require$$1$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var require$$1$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var require$$1$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var require$$1$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var toSubscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var Subscriber_1 = interopDefault(require$$1$1);
    var rxSubscriber_1 = interopDefault(require$$0$4);
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
                return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber_1.Subscriber();
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports.toSubscriber = toSubscriber;
    });

var toSubscriber$1 = interopDefault(toSubscriber);
var toSubscriber$$1 = toSubscriber.toSubscriber;


var require$$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var require$$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var require$$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var require$$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var require$$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var ponyfill = createCommonjsModule(function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};
});

var ponyfill$1 = interopDefault(ponyfill);

var require$$0$7 = Object.freeze({
	default: ponyfill$1
});

var require$$0$7 = Object.freeze({
	default: ponyfill$1
});

var require$$0$7 = Object.freeze({
	default: ponyfill$1
});

var require$$0$7 = Object.freeze({
	default: ponyfill$1
});

var require$$0$7 = Object.freeze({
	default: ponyfill$1
});

var index$2 = createCommonjsModule(function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ponyfill = interopDefault(require$$0$7);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var root = undefined; /* global window */

	if (typeof commonjsGlobal !== 'undefined') {
		root = commonjsGlobal;
	} else if (typeof window !== 'undefined') {
		root = window;
	}

	var result = (0, _ponyfill2.default)(root);
	exports.default = result;
});

var index$3 = interopDefault(index$2);

var require$$0$6 = Object.freeze({
	default: index$3
});

var require$$0$6 = Object.freeze({
	default: index$3
});

var require$$0$6 = Object.freeze({
	default: index$3
});

var require$$0$6 = Object.freeze({
	default: index$3
});

var require$$0$6 = Object.freeze({
	default: index$3
});

var index = createCommonjsModule(function (module) {
  module.exports = interopDefault(require$$0$6);
});

var index$1 = interopDefault(index);

var require$$0$5 = Object.freeze({
  default: index$1
});

var require$$0$5 = Object.freeze({
  default: index$1
});

var require$$0$5 = Object.freeze({
  default: index$1
});

var require$$0$5 = Object.freeze({
  default: index$1
});

var require$$0$5 = Object.freeze({
  default: index$1
});

var Observable = createCommonjsModule(function (module, exports) {
    "use strict";

    var root_1 = interopDefault(require$$0);
    var toSubscriber_1 = interopDefault(require$$1);
    var symbol_observable_1 = interopDefault(require$$0$5);
    /**
     * A representation of any set of values over any amount of time. This the most basic building block
     * of RxJS.
     *
     * @class Observable<T>
     */
    var Observable = function () {
        /**
         * @constructor
         * @param {Function} subscribe the function that is  called when the Observable is
         * initially subscribed to. This function is given a Subscriber, to which new values
         * can be `next`ed, or an `error` method can be called to raise an error, or
         * `complete` can be called to notify of a successful completion.
         */
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        /**
         * Creates a new Observable, with this Observable as the source, and the passed
         * operator defined as the new observable's operator.
         * @method lift
         * @param {Operator} operator the operator defining the operation to take on the observable
         * @return {Observable} a new observable with the Operator applied
         */
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        /**
         * Registers handlers for handling emitted values, error and completions from the observable, and
         *  executes the observable's subscriber function, which will take action to set up the underlying data stream
         * @method subscribe
         * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
         *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
         * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
         *  the error will be thrown as unhandled
         * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
         * @return {ISubscription} a subscription reference to the registered handlers
         */
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this);
            } else {
                sink.add(this._subscribe(sink));
            }
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
            return sink;
        };
        /**
         * @method forEach
         * @param {Function} next a handler for each value emitted by the observable
         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
         * @return {Promise} a promise that either resolves on observable completion or
         *  rejects with the handled error
         */
        Observable.prototype.forEach = function (next, PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                    PromiseCtor = root_1.root.Rx.config.Promise;
                } else if (root_1.root.Promise) {
                    PromiseCtor = root_1.root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                var subscription = _this.subscribe(function (value) {
                    if (subscription) {
                        // if there is a subscription, then we can surmise
                        // the next handling is asynchronous. Any errors thrown
                        // need to be rejected explicitly and unsubscribe must be
                        // called manually
                        try {
                            next(value);
                        } catch (err) {
                            reject(err);
                            subscription.unsubscribe();
                        }
                    } else {
                        // if there is NO subscription, then we're getting a nexted
                        // value synchronously during subscription. We can just call it.
                        // If it errors, Observable's `subscribe` imple will ensure the
                        // unsubscription logic is called, then synchronously rethrow the error.
                        // After that, Promise will trap the error and send it
                        // down the rejection path.
                        next(value);
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            return this.source.subscribe(subscriber);
        };
        /**
         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
         * @method Symbol.observable
         * @return {Observable} this instance of the observable
         */
        Observable.prototype[symbol_observable_1.default] = function () {
            return this;
        };
        // HACK: Since TypeScript inherits static properties too, we have to
        // fight against TypeScript here so Subject can have a different static create signature
        /**
         * Creates a new cold Observable by calling the Observable constructor
         * @static true
         * @owner Observable
         * @method create
         * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
         * @return {Observable} a new cold observable
         */
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }();
    exports.Observable = Observable;
    });

var Observable$1 = interopDefault(Observable);
var Observable$$1 = Observable.Observable;


var require$$5 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var require$$5 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var require$$5 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var require$$5 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var require$$5 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var ObjectUnsubscribedError = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an action is invalid because the object has been
     * unsubscribed.
     *
     * @see {@link Subject}
     * @see {@link BehaviorSubject}
     *
     * @class ObjectUnsubscribedError
     */
    var ObjectUnsubscribedError = function (_super) {
        __extends(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            var err = _super.call(this, 'object unsubscribed');
            this.name = err.name = 'ObjectUnsubscribedError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return ObjectUnsubscribedError;
    }(Error);
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
    });

var ObjectUnsubscribedError$1 = interopDefault(ObjectUnsubscribedError);
var ObjectUnsubscribedError$$1 = ObjectUnsubscribedError.ObjectUnsubscribedError;


var require$$2$2 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var require$$2$2 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var require$$2$2 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var require$$2$2 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var require$$2$2 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var SubjectSubscription = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = interopDefault(require$$0$1);
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SubjectSubscription = function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            _super.call(this);
            this.subject = subject;
            this.subscriber = subscriber;
            this.isUnsubscribed = false;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.isUnsubscribed) {
                return;
            }
            this.isUnsubscribed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.isUnsubscribed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription_1.Subscription);
    exports.SubjectSubscription = SubjectSubscription;
    });

var SubjectSubscription$1 = interopDefault(SubjectSubscription);
var SubjectSubscription$$1 = SubjectSubscription.SubjectSubscription;


var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var Subject = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = interopDefault(require$$5);
    var Subscriber_1 = interopDefault(require$$1$1);
    var Subscription_1 = interopDefault(require$$0$1);
    var ObjectUnsubscribedError_1 = interopDefault(require$$2$2);
    var SubjectSubscription_1 = interopDefault(require$$1$3);
    var rxSubscriber_1 = interopDefault(require$$0$4);
    /**
     * @class SubjectSubscriber<T>
     */
    var SubjectSubscriber = function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            _super.call(this, destination);
            this.destination = destination;
        }
        return SubjectSubscriber;
    }(Subscriber_1.Subscriber);
    exports.SubjectSubscriber = SubjectSubscriber;
    /**
     * @class Subject<T>
     */
    var Subject = function (_super) {
        __extends(Subject, _super);
        function Subject() {
            _super.call(this);
            this.observers = [];
            this.isUnsubscribed = false;
            this.isStopped = false;
            this.hasError = false;
            this.thrownError = null;
        }
        Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.isUnsubscribed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.isUnsubscribed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.isUnsubscribed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.isUnsubscribed = true;
            this.observers = null;
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.isUnsubscribed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            } else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription_1.Subscription.EMPTY;
            } else if (this.isStopped) {
                subscriber.complete();
                return Subscription_1.Subscription.EMPTY;
            } else {
                this.observers.push(subscriber);
                return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable_1.Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable_1.Observable);
    exports.Subject = Subject;
    /**
     * @class AnonymousSubject<T>
     */
    var AnonymousSubject = function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            _super.call(this);
            this.destination = destination;
            this.source = source;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            } else {
                return Subscription_1.Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject);
    exports.AnonymousSubject = AnonymousSubject;
    });

var Subject$1 = interopDefault(Subject);
var AnonymousSubject = Subject.AnonymousSubject;
var Subject$$1 = Subject.Subject;
var SubjectSubscriber = Subject.SubjectSubscriber;

var require$$2 = Object.freeze({
    default: Subject$1,
    AnonymousSubject: AnonymousSubject,
    Subject: Subject$$1,
    SubjectSubscriber: SubjectSubscriber
});

var require$$2 = Object.freeze({
    default: Subject$1,
    AnonymousSubject: AnonymousSubject,
    Subject: Subject$$1,
    SubjectSubscriber: SubjectSubscriber
});

var require$$2 = Object.freeze({
    default: Subject$1,
    AnonymousSubject: AnonymousSubject,
    Subject: Subject$$1,
    SubjectSubscriber: SubjectSubscriber
});

var require$$2 = Object.freeze({
    default: Subject$1,
    AnonymousSubject: AnonymousSubject,
    Subject: Subject$$1,
    SubjectSubscriber: SubjectSubscriber
});

var require$$2 = Object.freeze({
    default: Subject$1,
    AnonymousSubject: AnonymousSubject,
    Subject: Subject$$1,
    SubjectSubscriber: SubjectSubscriber
});

var throwError = createCommonjsModule(function (module, exports) {
  "use strict";

  function throwError(e) {
    throw e;
  }
  exports.throwError = throwError;
  });

var throwError$1 = interopDefault(throwError);
var throwError$$1 = throwError.throwError;


var require$$1$4 = Object.freeze({
  default: throwError$1,
  throwError: throwError$$1
});

var require$$1$4 = Object.freeze({
  default: throwError$1,
  throwError: throwError$$1
});

var require$$1$4 = Object.freeze({
  default: throwError$1,
  throwError: throwError$$1
});

var require$$1$4 = Object.freeze({
  default: throwError$1,
  throwError: throwError$$1
});

var require$$1$4 = Object.freeze({
  default: throwError$1,
  throwError: throwError$$1
});

var BehaviorSubject = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1 = interopDefault(require$$2);
    var throwError_1 = interopDefault(require$$1$4);
    var ObjectUnsubscribedError_1 = interopDefault(require$$2$2);
    /**
     * @class BehaviorSubject<T>
     */
    var BehaviorSubject = function (_super) {
        __extends(BehaviorSubject, _super);
        function BehaviorSubject(_value) {
            _super.call(this);
            this._value = _value;
        }
        BehaviorSubject.prototype.getValue = function () {
            if (this.hasError) {
                throwError_1.throwError(this.thrownError);
            } else if (this.isUnsubscribed) {
                throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
            } else {
                return this._value;
            }
        };
        Object.defineProperty(BehaviorSubject.prototype, "value", {
            get: function get() {
                return this.getValue();
            },
            enumerable: true,
            configurable: true
        });
        BehaviorSubject.prototype._subscribe = function (subscriber) {
            var subscription = _super.prototype._subscribe.call(this, subscriber);
            if (subscription && !subscription.isUnsubscribed) {
                subscriber.next(this._value);
            }
            return subscription;
        };
        BehaviorSubject.prototype.next = function (value) {
            _super.prototype.next.call(this, this._value = value);
        };
        return BehaviorSubject;
    }(Subject_1.Subject);
    exports.BehaviorSubject = BehaviorSubject;
    });

interopDefault(BehaviorSubject);
var BehaviorSubject$$1 = BehaviorSubject.BehaviorSubject;

var index$5 = createCommonjsModule(function (module) {
    module.exports = Date.now || now;

    function now() {
        return new Date().getTime();
    }
});

var index$6 = interopDefault(index$5);

var require$$0$8 = Object.freeze({
    default: index$6
});

var require$$0$8 = Object.freeze({
    default: index$6
});

var require$$0$8 = Object.freeze({
    default: index$6
});

var require$$0$8 = Object.freeze({
    default: index$6
});

var require$$0$8 = Object.freeze({
    default: index$6
});

var index$4 = createCommonjsModule(function (module) {
  /**
   * Module dependencies.
   */

  var now = interopDefault(require$$0$8);

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing.
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */

  module.exports = function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
      var last = now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function debounced() {
      context = this;
      args = arguments;
      timestamp = now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };
});

var debounce = interopDefault(index$4);

function inputFilterFactory(store) {
  function updateValue(value, callback) {
    var overrideValue = callback(value);
    if (typeof overrideValue === 'string') {
      value = overrideValue;
    }
    store.next(value);
  }

  var InputFilter = function (_Component) {
    inherits(InputFilter, _Component);

    function InputFilter() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      classCallCheck(this, InputFilter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputFilter)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.updateValue = debounce(updateValue, _this.props.debounceTime), _this.handleChange = function (_ref) {
        var value = _ref.target.value;

        if (_this.props.debounceTime > 0) {
          _this.updateValue(value, _this.props.onChange);
        } else {
          updateValue(value, _this.props.onChange);
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(InputFilter, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        updateValue(this.props.initialSearch, this.props.onChange);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.updateValue = debounce(updateValue, nextProps.debounceTime);
      }
    }, {
      key: 'render',
      value: function render() {
        return React__default.createElement('input', _extends({
          className: this.props.classPrefix + '__input',
          onChange: this.handleChange,
          defaultValue: this.props.initialSearch
        }, this.props.inputProps));
      }
    }]);
    return InputFilter;
  }(React.Component);

  InputFilter.displayName = 'InputFilter';
  InputFilter.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    initialSearch: React.PropTypes.string,
    inputProps: React.PropTypes.object,
    onChange: React.PropTypes.func,
    debounceTime: React.PropTypes.number
  };
  InputFilter.defaultProps = {
    classPrefix: 'react-fuzzy-filter',
    inputProps: {},
    onChange: function onChange() {},
    debounceTime: 0
  };


  return InputFilter;
}

var fuse = createCommonjsModule(function (module, exports) {
  /**
   * @license
   * Fuse - Lightweight fuzzy-search
   *
   * Copyright (c) 2012-2016 Kirollos Risk <kirollos@gmail.com>.
   * All Rights Reserved. Apache Software License 2.0
   *
   * Licensed under the Apache License, Version 2.0 (the "License")
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  ;(function (global) {
    'use strict';

    function log() {
      console.log.apply(console, arguments);
    }

    var defaultOptions = {
      // The name of the identifier property. If specified, the returned result will be a list
      // of the items' dentifiers, otherwise it will be a list of the items.
      id: null,

      // Indicates whether comparisons should be case sensitive.

      caseSensitive: false,

      // An array of values that should be included from the searcher's output. When this array
      // contains elements, each result in the list will be of the form `{ item: ..., include1: ..., include2: ... }`.
      // Values you can include are `score`, `matchedLocations`
      include: [],

      // Whether to sort the result list, by score
      shouldSort: true,

      // The search function to use
      // Note that the default search function ([[Function]]) must conform to the following API:
      //
      //  @param pattern The pattern string to search
      //  @param options The search option
      //  [[Function]].constructor = function(pattern, options)
      //
      //  @param text: the string to search in for the pattern
      //  @return Object in the form of:
      //    - isMatch: boolean
      //    - score: Int
      //  [[Function]].prototype.search = function(text)
      searchFn: BitapSearcher,

      // Default sort function
      sortFn: function sortFn(a, b) {
        return a.score - b.score;
      },

      // The get function to use when fetching an object's properties.
      // The default will search nested paths *ie foo.bar.baz*
      getFn: deepValue,

      // List of properties that will be searched. This also supports nested properties.
      keys: [],

      // Will print to the console. Useful for debugging.
      verbose: false,

      // When true, the search algorithm will search individual words **and** the full string,
      // computing the final score as a function of both. Note that when `tokenize` is `true`,
      // the `threshold`, `distance`, and `location` are inconsequential for individual tokens.
      tokenize: false,

      // Regex used to separate words when searching. Only applicable when `tokenize` is `true`.
      tokenSeparator: / +/g
    };

    function Fuse(list, options) {
      var i;
      var len;
      var key;
      var keys;

      this.list = list;
      this.options = options = options || {};

      // Add boolean type options
      for (i = 0, keys = ['sort', 'shouldSort', 'verbose', 'tokenize'], len = keys.length; i < len; i++) {
        key = keys[i];
        this.options[key] = key in options ? options[key] : defaultOptions[key];
      }
      // Add all other options
      for (i = 0, keys = ['searchFn', 'sortFn', 'keys', 'getFn', 'include', 'tokenSeparator'], len = keys.length; i < len; i++) {
        key = keys[i];
        this.options[key] = options[key] || defaultOptions[key];
      }
    }

    Fuse.VERSION = '2.3.0';

    /**
     * Sets a new list for Fuse to match against.
     * @param {Array} list
     * @return {Array} The newly set list
     * @public
     */
    Fuse.prototype.set = function (list) {
      this.list = list;
      return list;
    };

    Fuse.prototype.search = function (pattern) {
      if (this.options.verbose) log('\nSearch term:', pattern, '\n');

      this.pattern = pattern;
      this.results = [];
      this.resultMap = {};
      this._keyMap = null;

      this._prepareSearchers();
      this._startSearch();
      this._computeScore();
      this._sort();

      var output = this._format();
      return output;
    };

    Fuse.prototype._prepareSearchers = function () {
      var options = this.options;
      var pattern = this.pattern;
      var searchFn = options.searchFn;
      var tokens = pattern.split(options.tokenSeparator);
      var i = 0;
      var len = tokens.length;

      if (this.options.tokenize) {
        this.tokenSearchers = [];
        for (; i < len; i++) {
          this.tokenSearchers.push(new searchFn(tokens[i], options));
        }
      }
      this.fullSeacher = new searchFn(pattern, options);
    };

    Fuse.prototype._startSearch = function () {
      var options = this.options;
      var getFn = options.getFn;
      var list = this.list;
      var listLen = list.length;
      var keys = this.options.keys;
      var keysLen = keys.length;
      var key;
      var weight;
      var item = null;
      var i;
      var j;

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (i = 0; i < listLen; i++) {
          this._analyze('', list[i], i, i);
        }
      } else {
        this._keyMap = {};
        // Otherwise, the first item is an Object (hopefully), and thus the searching
        // is done on the values of the keys of each item.
        // Iterate over every item
        for (i = 0; i < listLen; i++) {
          item = list[i];
          // Iterate over every key
          for (j = 0; j < keysLen; j++) {
            key = keys[j];
            if (typeof key !== 'string') {
              weight = 1 - key.weight || 1;
              this._keyMap[key.name] = {
                weight: weight
              };
              if (key.weight <= 0 || key.weight > 1) {
                throw new Error('Key weight has to be > 0 and <= 1');
              }
              key = key.name;
            } else {
              this._keyMap[key] = {
                weight: 1
              };
            }
            this._analyze(key, getFn(item, key, []), item, i);
          }
        }
      }
    };

    Fuse.prototype._analyze = function (key, text, entity, index) {
      var options = this.options;
      var words;
      var scores;
      var exists = false;
      var existingResult;
      var averageScore;
      var finalScore;
      var scoresLen;
      var mainSearchResult;
      var tokenSearcher;
      var termScores;
      var word;
      var tokenSearchResult;
      var i;
      var j;

      // Check if the text can be searched
      if (text === undefined || text === null) {
        return;
      }

      scores = [];

      if (typeof text === 'string') {
        words = text.split(options.tokenSeparator);

        if (options.verbose) log('---------\nKey:', key);
        if (options.verbose) log('Record:', words);

        if (this.options.tokenize) {
          for (i = 0; i < this.tokenSearchers.length; i++) {
            tokenSearcher = this.tokenSearchers[i];
            termScores = [];
            for (j = 0; j < words.length; j++) {
              word = words[j];
              tokenSearchResult = tokenSearcher.search(word);
              if (tokenSearchResult.isMatch) {
                exists = true;
                termScores.push(tokenSearchResult.score);
                scores.push(tokenSearchResult.score);
              } else {
                termScores.push(1);
                scores.push(1);
              }
            }
            if (options.verbose) log('Token scores:', termScores);
          }

          averageScore = scores[0];
          scoresLen = scores.length;
          for (i = 1; i < scoresLen; i++) {
            averageScore += scores[i];
          }
          averageScore = averageScore / scoresLen;

          if (options.verbose) log('Token score average:', averageScore);
        }

        // Get the result
        mainSearchResult = this.fullSeacher.search(text);
        if (options.verbose) log('Full text score:', mainSearchResult.score);

        finalScore = mainSearchResult.score;
        if (averageScore !== undefined) {
          finalScore = (finalScore + averageScore) / 2;
        }

        if (options.verbose) log('Score average:', finalScore);

        // If a match is found, add the item to <rawResults>, including its score
        if (exists || mainSearchResult.isMatch) {
          // Check if the item already exists in our results
          existingResult = this.resultMap[index];

          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            this.resultMap[index] = {
              item: entity,
              output: [{
                key: key,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            this.results.push(this.resultMap[index]);
          }
        }
      } else if (isArray(text)) {
        for (i = 0; i < text.length; i++) {
          this._analyze(key, text[i], entity, index);
        }
      }
    };

    Fuse.prototype._computeScore = function () {
      var i;
      var j;
      var keyMap = this._keyMap;
      var totalScore;
      var output;
      var scoreLen;
      var score;
      var weight;
      var results = this.results;
      var bestScore;
      var nScore;

      if (this.options.verbose) log('\n\nComputing score:\n');

      for (i = 0; i < results.length; i++) {
        totalScore = 0;
        output = results[i].output;
        scoreLen = output.length;

        bestScore = 1;

        for (j = 0; j < scoreLen; j++) {
          score = output[j].score;
          weight = keyMap ? keyMap[output[j].key].weight : 1;

          nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            totalScore += nScore;
            output[j].nScore = nScore;
          }
        }

        if (bestScore === 1) {
          results[i].score = totalScore / scoreLen;
        } else {
          results[i].score = bestScore;
        }

        if (this.options.verbose) log(results[i]);
      }
    };

    Fuse.prototype._sort = function () {
      var options = this.options;
      if (options.shouldSort) {
        if (options.verbose) log('\n\nSorting....');
        this.results.sort(options.sortFn);
      }
    };

    Fuse.prototype._format = function () {
      var options = this.options;
      var getFn = options.getFn;
      var finalOutput = [];
      var item;
      var i;
      var len;
      var results = this.results;
      var replaceValue;
      var getItemAtIndex;
      var include = options.include;

      if (options.verbose) log('\n\nOutput:\n\n', results);

      // Helper function, here for speed-up, which replaces the item with its value,
      // if the options specifies it,
      replaceValue = options.id ? function (index) {
        results[index].item = getFn(results[index].item, options.id, [])[0];
      } : function () {};

      getItemAtIndex = function getItemAtIndex(index) {
        var record = results[index];
        var data;
        var j;
        var output;
        var _item;
        var _result;

        // If `include` has values, put the item in the result
        if (include.length > 0) {
          data = {
            item: record.item
          };
          if (include.indexOf('matches') !== -1) {
            output = record.output;
            data.matches = [];
            for (j = 0; j < output.length; j++) {
              _item = output[j];
              _result = {
                indices: _item.matchedIndices
              };
              if (_item.key) {
                _result.key = _item.key;
              }
              data.matches.push(_result);
            }
          }

          if (include.indexOf('score') !== -1) {
            data.score = results[index].score;
          }
        } else {
          data = record.item;
        }

        return data;
      };

      // From the results, push into a new array only the item identifier (if specified)
      // of the entire item.  This is because we don't want to return the <results>,
      // since it contains other metadata
      for (i = 0, len = results.length; i < len; i++) {
        replaceValue(i);
        item = getItemAtIndex(i);
        finalOutput.push(item);
      }

      return finalOutput;
    };

    // Helpers

    function deepValue(obj, path, list) {
      var firstSegment;
      var remaining;
      var dotIndex;
      var value;
      var i;
      var len;

      if (!path) {
        // If there's no path left, we've gotten to the object we care about.
        list.push(obj);
      } else {
        dotIndex = path.indexOf('.');

        if (dotIndex !== -1) {
          firstSegment = path.slice(0, dotIndex);
          remaining = path.slice(dotIndex + 1);
        } else {
          firstSegment = path;
        }

        value = obj[firstSegment];
        if (value !== null && value !== undefined) {
          if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
            list.push(value);
          } else if (isArray(value)) {
            // Search each item in the array.
            for (i = 0, len = value.length; i < len; i++) {
              deepValue(value[i], remaining, list);
            }
          } else if (remaining) {
            // An object. Recurse further.
            deepValue(value, remaining, list);
          }
        }
      }

      return list;
    }

    function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    }

    /**
     * Adapted from "Diff, Match and Patch", by Google
     *
     *   http://code.google.com/p/google-diff-match-patch/
     *
     * Modified by: Kirollos Risk <kirollos@gmail.com>
     * -----------------------------------------------
     * Details: the algorithm and structure was modified to allow the creation of
     * <Searcher> instances with a <search> method which does the actual
     * bitap search. The <pattern> (the string that is searched for) is only defined
     * once per instance and thus it eliminates redundant re-creation when searching
     * over a list of strings.
     *
     * Licensed under the Apache License, Version 2.0 (the "License")
     * you may not use this file except in compliance with the License.
     */
    function BitapSearcher(pattern, options) {
      options = options || {};
      this.options = options;
      this.options.location = options.location || BitapSearcher.defaultOptions.location;
      this.options.distance = 'distance' in options ? options.distance : BitapSearcher.defaultOptions.distance;
      this.options.threshold = 'threshold' in options ? options.threshold : BitapSearcher.defaultOptions.threshold;
      this.options.maxPatternLength = options.maxPatternLength || BitapSearcher.defaultOptions.maxPatternLength;

      this.pattern = options.caseSensitive ? pattern : pattern.toLowerCase();
      this.patternLen = pattern.length;

      if (this.patternLen <= this.options.maxPatternLength) {
        this.matchmask = 1 << this.patternLen - 1;
        this.patternAlphabet = this._calculatePatternAlphabet();
      }
    }

    BitapSearcher.defaultOptions = {
      // Approximately where in the text is the pattern expected to be found?
      location: 0,

      // Determines how close the match must be to the fuzzy location (specified above).
      // An exact letter match which is 'distance' characters away from the fuzzy location
      // would score as a complete mismatch. A distance of '0' requires the match be at
      // the exact location specified, a threshold of '1000' would require a perfect match
      // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
      distance: 100,

      // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
      // (of both letters and location), a threshold of '1.0' would match anything.
      threshold: 0.6,

      // Machine word size
      maxPatternLength: 32
    };

    /**
     * Initialize the alphabet for the Bitap algorithm.
     * @return {Object} Hash of character locations.
     * @private
     */
    BitapSearcher.prototype._calculatePatternAlphabet = function () {
      var mask = {},
          i = 0;

      for (i = 0; i < this.patternLen; i++) {
        mask[this.pattern.charAt(i)] = 0;
      }

      for (i = 0; i < this.patternLen; i++) {
        mask[this.pattern.charAt(i)] |= 1 << this.pattern.length - i - 1;
      }

      return mask;
    };

    /**
     * Compute and return the score for a match with `e` errors and `x` location.
     * @param {number} errors Number of errors in match.
     * @param {number} location Location of match.
     * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
     * @private
     */
    BitapSearcher.prototype._bitapScore = function (errors, location) {
      var accuracy = errors / this.patternLen,
          proximity = Math.abs(this.options.location - location);

      if (!this.options.distance) {
        // Dodge divide by zero error.
        return proximity ? 1.0 : accuracy;
      }
      return accuracy + proximity / this.options.distance;
    };

    /**
     * Compute and return the result of the search
     * @param {String} text The text to search in
     * @return {Object} Literal containing:
     *                          {Boolean} isMatch Whether the text is a match or not
     *                          {Decimal} score Overall score for the match
     * @public
     */
    BitapSearcher.prototype.search = function (text) {
      var options = this.options;
      var i;
      var j;
      var textLen;
      var location;
      var threshold;
      var bestLoc;
      var binMin;
      var binMid;
      var binMax;
      var start, finish;
      var bitArr;
      var lastBitArr;
      var charMatch;
      var score;
      var locations;
      var matches;
      var isMatched;
      var matchMask;
      var matchedIndices;
      var matchesLen;
      var match;

      text = options.caseSensitive ? text : text.toLowerCase();

      if (this.pattern === text) {
        // Exact match
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      if (this.patternLen > options.maxPatternLength) {
        matches = text.match(new RegExp(this.pattern.replace(options.tokenSeparator, '|')));
        isMatched = !!matches;

        if (isMatched) {
          matchedIndices = [];
          for (i = 0, matchesLen = matches.length; i < matchesLen; i++) {
            match = matches[i];
            matchedIndices.push([text.indexOf(match), match.length - 1]);
          }
        }

        return {
          isMatch: isMatched,
          // TODO: revisit this score
          score: isMatched ? 0.5 : 1,
          matchedIndices: matchedIndices
        };
      }

      location = options.location;
      // Set starting location at beginning text and initialize the alphabet.
      textLen = text.length;
      // Highest score beyond which we give up.
      threshold = options.threshold;
      // Is there a nearby exact match? (speedup)
      bestLoc = text.indexOf(this.pattern, location);

      // a mask of the matches
      matchMask = [];
      for (i = 0; i < textLen; i++) {
        matchMask[i] = 0;
      }

      if (bestLoc != -1) {
        threshold = Math.min(this._bitapScore(0, bestLoc), threshold);
        // What about in the other direction? (speed up)
        bestLoc = text.lastIndexOf(this.pattern, location + this.patternLen);

        if (bestLoc != -1) {
          threshold = Math.min(this._bitapScore(0, bestLoc), threshold);
        }
      }

      bestLoc = -1;
      score = 1;
      locations = [];
      binMax = this.patternLen + textLen;

      for (i = 0; i < this.patternLen; i++) {
        // Scan for the best match; each iteration allows for one more error.
        // Run a binary search to determine how far from the match location we can stray
        // at this error level.
        binMin = 0;
        binMid = binMax;
        while (binMin < binMid) {
          if (this._bitapScore(i, location + binMid) <= threshold) {
            binMin = binMid;
          } else {
            binMax = binMid;
          }
          binMid = Math.floor((binMax - binMin) / 2 + binMin);
        }

        // Use the result from this iteration as the maximum for the next.
        binMax = binMid;
        start = Math.max(1, location - binMid + 1);
        finish = Math.min(location + binMid, textLen) + this.patternLen;

        // Initialize the bit array
        bitArr = Array(finish + 2);

        bitArr[finish + 1] = (1 << i) - 1;

        for (j = finish; j >= start; j--) {
          charMatch = this.patternAlphabet[text.charAt(j - 1)];

          if (charMatch) {
            matchMask[j - 1] = 1;
          }

          if (i === 0) {
            // First pass: exact match.
            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
          } else {
            // Subsequent passes: fuzzy match.
            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch | ((lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1) | lastBitArr[j + 1];
          }
          if (bitArr[j] & this.matchmask) {
            score = this._bitapScore(i, j - 1);

            // This match will almost certainly be better than any existing match.
            // But check anyway.
            if (score <= threshold) {
              // Indeed it is
              threshold = score;
              bestLoc = j - 1;
              locations.push(bestLoc);

              if (bestLoc > location) {
                // When passing loc, don't exceed our current distance from loc.
                start = Math.max(1, 2 * location - bestLoc);
              } else {
                // Already passed loc, downhill from here on in.
                break;
              }
            }
          }
        }

        // No hope for a (better) match at greater error levels.
        if (this._bitapScore(i + 1, location) > threshold) {
          break;
        }
        lastBitArr = bitArr;
      }

      matchedIndices = this._getMatchedIndices(matchMask);

      // Count exact matches (those with a score of 0) to be "almost" exact
      return {
        isMatch: bestLoc >= 0,
        score: score === 0 ? 0.001 : score,
        matchedIndices: matchedIndices
      };
    };

    BitapSearcher.prototype._getMatchedIndices = function (matchMask) {
      var matchedIndices = [];
      var start = -1;
      var end = -1;
      var i = 0;
      var match;
      var len = matchMask.length;
      for (; i < len; i++) {
        match = matchMask[i];
        if (match && start === -1) {
          start = i;
        } else if (!match && start !== -1) {
          end = i - 1;
          matchedIndices.push([start, end]);
          start = -1;
        }
      }
      if (matchMask[i - 1]) {
        matchedIndices.push([start, i - 1]);
      }
      return matchedIndices;
    };

    // Export to Common JS Loader
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = Fuse;
    } else if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(function () {
        return Fuse;
      });
    } else {
      // Browser globals (root is window)
      global.Fuse = Fuse;
    }
  })(commonjsGlobal);
});

var Fuse = interopDefault(fuse);

function filterResultsFactory(store) {
  var FilterResults = function (_Component) {
    inherits(FilterResults, _Component);

    function FilterResults() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      classCallCheck(this, FilterResults);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FilterResults)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
        search: null
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(FilterResults, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.subscription = store.subscribe(function (search) {
          return _this2.setState({ search: search });
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.subscription.unsubscribe();
      }
    }, {
      key: 'prefilterItems',
      value: function prefilterItems(search) {
        var items = this.props.items;
        this.props.prefilters.forEach(function (_ref) {
          var regex = _ref.regex;
          var handler = _ref.handler;

          var matches = search.match(regex) || [];
          search = search.replace(regex, '').trim();
          matches.forEach(function (match) {
            items = handler(match, items, Fuse);
          });
        });
        return { items: items, search: search };
      }
    }, {
      key: 'filterItems',
      value: function filterItems() {
        var _prefilterItems = this.prefilterItems(this.state.search || '');

        var items = _prefilterItems.items;
        var search = _prefilterItems.search;

        if (search.trim() === '') {
          return this.props.defaultAllItems ? items : [];
        } else {
          var fuse = new Fuse(items, this.props.fuseConfig);
          return fuse.search(search);
        }
      }
    }, {
      key: 'renderItems',
      value: function renderItems(items) {
        var _this3 = this;

        return items.map(function (item, i) {
          return _this3.props.renderItem(item, i);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var rawItems = this.filterItems();
        var items = this.renderItems(rawItems);
        if (typeof this.props.renderContainer === 'function') {
          return this.props.renderContainer(items, rawItems);
        }
        if (this.props.wrapper) {
          return React__default.createElement(this.props.wrapper, this.props.wrapperProps, items);
        }
        return React__default.createElement(
          'span',
          { className: this.props.classPrefix + '__results-container' },
          items
        );
      }
    }]);
    return FilterResults;
  }(React.Component);

  FilterResults.displayName = 'FilterResults';
  FilterResults.propTypes = {
    renderItem: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired,
    defaultAllItems: React.PropTypes.bool,
    classPrefix: React.PropTypes.string,
    wrapper: React.PropTypes.any,
    wrapperProps: React.PropTypes.object,
    renderContainer: React.PropTypes.func,
    fuseConfig: React.PropTypes.shape({
      keys: React.PropTypes.array.isRequired,
      id: React.PropTypes.string,
      caseSensitive: React.PropTypes.bool,
      shouldSort: React.PropTypes.bool,
      searchFn: React.PropTypes.func,
      getFn: React.PropTypes.func,
      sortFn: React.PropTypes.func,
      location: React.PropTypes.number,
      threshold: React.PropTypes.number,
      distance: React.PropTypes.number,
      maxPatternLength: React.PropTypes.number,
      verbose: React.PropTypes.bool,
      tokenize: React.PropTypes.bool,
      tokenSeparator: React.PropTypes.any
    }).isRequired,
    prefilters: React.PropTypes.arrayOf(React.PropTypes.shape({
      regex: React.PropTypes.any.isRequired,
      handler: React.PropTypes.func.isRequired
    }).isRequired).isRequired
  };
  FilterResults.defaultProps = {
    defaultAllItems: true,
    classPrefix: 'react-fuzzy-filter',
    wrapperProps: {},
    prefilters: []
  };


  return FilterResults;
}

function fuzzyFilterFactory() {
  var store = new BehaviorSubject$$1();
  return {
    InputFilter: inputFilterFactory(store),
    FilterResults: filterResultsFactory(store)
  };
}

export default fuzzyFilterFactory;