(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define('react-fuzzy-filter', ['react'], factory) :
	(global.ReactFuzzyFilter = factory(global.React));
}(this, (function (React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;
var __global = typeof commonjsGlobal !== 'undefined' && commonjsGlobal;
var _root = __window || __global || __self;
var root_1 = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();


var root = {
    root: root_1
};

function isFunction(x) {
  return typeof x === 'function';
}
var isFunction_2 = isFunction;


var isFunction_1 = {
  isFunction: isFunction_2
};

var isArray_1 = Array.isArray || function (x) {
	return x && typeof x.length === 'number';
};


var isArray = {
	isArray: isArray_1
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

function isObject(x) {
  return x != null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === 'object';
}
var isObject_2 = isObject;


var isObject_1 = {
  isObject: isObject_2
};

// typeof any so that it we don't have to cast when comparing a result to the error object

var errorObject_1 = { e: {} };


var errorObject = {
	errorObject: errorObject_1
};

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    } catch (e) {
        errorObject.errorObject.e = e;
        return errorObject.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
var tryCatch_2 = tryCatch;



var tryCatch_1 = {
    tryCatch: tryCatch_2
};

var __extends$3 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
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
    __extends$3(UnsubscriptionError, _super);
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
var UnsubscriptionError_2 = UnsubscriptionError;


var UnsubscriptionError_1 = {
    UnsubscriptionError: UnsubscriptionError_2
};

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
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
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
        if (this.closed) {
            return;
        }
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(errorObject.errorObject.e.errors) : [errorObject.errorObject.e]);
            }
        }
        if (isArray.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
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
     * If this subscription is already in an `closed` state, the passed
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
        if (!teardown || teardown === Subscription.EMPTY) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown === 'undefined' ? 'undefined' : _typeof(teardown)) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                } else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                } else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        } else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        } else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription());
    return Subscription;
}();
var Subscription_2 = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
    }, []);
}


var Subscription_1 = {
    Subscription: Subscription_2
};

var empty = {
    closed: true,
    next: function next(value) {},
    error: function error(err) {
        throw err;
    },
    complete: function complete() {}
};


var Observer = {
    empty: empty
};

var rxSubscriber = createCommonjsModule(function (module, exports) {
  "use strict";

  var _Symbol = root.root.Symbol;
  exports.rxSubscriber = typeof _Symbol === 'function' && typeof _Symbol.for === 'function' ? _Symbol.for('rxSubscriber') : '@@rxSubscriber';
  /**
   * @deprecated use rxSubscriber instead
   */
  exports.$$rxSubscriber = exports.rxSubscriber;
  
});

var __extends$2 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

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
    __extends$2(Subscriber, _super);
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
                this.destination = Observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer.empty;
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
    Subscriber.prototype[rxSubscriber.rxSubscriber] = function () {
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
        if (this.closed) {
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
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription);
var Subscriber_2 = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = function (_super) {
    __extends$2(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            } else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            } else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function wrappedComplete() {
                    return _this._complete.call(_this._context);
                };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
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
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber);


var Subscriber_1 = {
    Subscriber: Subscriber_2
};

function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber.rxSubscriber]) {
            return nextOrObserver[rxSubscriber.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
var toSubscriber_2 = toSubscriber;


var toSubscriber_1 = {
    toSubscriber: toSubscriber_2
};

var observable = createCommonjsModule(function (module, exports) {
    "use strict";

    function getSymbolObservable(context) {
        var $$observable;
        var _Symbol = context.Symbol;
        if (typeof _Symbol === 'function') {
            if (_Symbol.observable) {
                $$observable = _Symbol.observable;
            } else {
                $$observable = _Symbol('observable');
                _Symbol.observable = $$observable;
            }
        } else {
            $$observable = '@@observable';
        }
        return $$observable;
    }
    exports.getSymbolObservable = getSymbolObservable;
    exports.observable = getSymbolObservable(root.root);
    /**
     * @deprecated use observable instead
     */
    exports.$$observable = exports.observable;
    
});

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
        var observable$$1 = new Observable();
        observable$$1.source = this;
        observable$$1.operator = operator;
        return observable$$1;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        } else {
            sink.add(this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
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
            if (root.root.Rx && root.root.Rx.config && root.root.Rx.config.Promise) {
                PromiseCtor = root.root.Rx.config.Promise;
            } else if (root.root.Promise) {
                PromiseCtor = root.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
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
                    // If it errors, Observable's `subscribe` will ensure the
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
    Observable.prototype[observable.observable] = function () {
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
var Observable_2 = Observable;


var Observable_1 = {
    Observable: Observable_2
};

var __extends$4 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
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
    __extends$4(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error);
var ObjectUnsubscribedError_2 = ObjectUnsubscribedError;


var ObjectUnsubscribedError_1 = {
    ObjectUnsubscribedError: ObjectUnsubscribedError_2
};

var __extends$5 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = function (_super) {
    __extends$5(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription);
var SubjectSubscription_2 = SubjectSubscription;


var SubjectSubscription_1 = {
    SubjectSubscription: SubjectSubscription_2
};

var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = function (_super) {
    __extends$1(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber);
var SubjectSubscriber_1 = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = function (_super) {
    __extends$1(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
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
        if (this.closed) {
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
        if (this.closed) {
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
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
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
var Subject_2 = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = function (_super) {
    __extends$1(AnonymousSubject, _super);
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
var AnonymousSubject_1 = AnonymousSubject;


var Subject_1 = {
    SubjectSubscriber: SubjectSubscriber_1,
    Subject: Subject_2,
    AnonymousSubject: AnonymousSubject_1
};

var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * @class BehaviorSubject<T>
 */
var BehaviorSubject = function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        _super.call(this);
        this._value = _value;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function get() {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        } else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject);
var BehaviorSubject_2 = BehaviorSubject;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    invariant_1(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var index = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

var index$1 = function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  var debounced = function debounced() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

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
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, InputFilter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InputFilter.__proto__ || Object.getPrototypeOf(InputFilter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        value: _this.props.initialSearch || ''
      }, _this.updateValue = index$1(updateValue, _this.props.debounceTime), _this.handleChange = function (_ref2) {
        var value = _ref2.target.value;

        _this.setState({ value: value });
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
        this.updateValue = index$1(updateValue, nextProps.debounceTime);
        if (nextProps.initialSearch !== this.props.initialSearch) {
          updateValue(nextProps.initialSearch, this.props.onChange);
          this.setState({ value: nextProps.initialSearch });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return React__default.createElement('input', _extends({
          className: this.props.classPrefix + '__input',
          onChange: this.handleChange,
          value: this.state.value
        }, this.props.inputProps));
      }
    }]);
    return InputFilter;
  }(React.Component);

  InputFilter.displayName = 'InputFilter';
  InputFilter.propTypes = {
    classPrefix: index.string.isRequired,
    initialSearch: index.string,
    inputProps: index.object,
    onChange: index.func,
    debounceTime: index.number
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
  /*!
   * Fuse.js v3.0.4 - Lightweight fuzzy-search (http://fusejs.io)
   * 
   * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
   * All Rights Reserved. Apache Software License 2.0
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   */
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function () {
    return (/******/function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/var installedModules = {};
        /******/
        /******/ // The require function
        /******/function __webpack_require__(moduleId) {
          /******/
          /******/ // Check if module is in cache
          /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
          }
          /******/ // Create a new module (and put it into the cache)
          /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
          /******/
          /******/ // Execute the module function
          /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/
          /******/ // Flag the module as loaded
          /******/module.l = true;
          /******/
          /******/ // Return the exports of the module
          /******/return module.exports;
          /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/__webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/__webpack_require__.c = installedModules;
        /******/
        /******/ // identity function for calling harmony imports with the correct context
        /******/__webpack_require__.i = function (value) {
          return value;
        };
        /******/
        /******/ // define getter function for harmony exports
        /******/__webpack_require__.d = function (exports, name, getter) {
          /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
              /******/configurable: false,
              /******/enumerable: true,
              /******/get: getter
              /******/ });
            /******/
          }
          /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__webpack_require__.n = function (module) {
          /******/var getter = module && module.__esModule ?
          /******/function getDefault() {
            return module['default'];
          } :
          /******/function getModuleExports() {
            return module;
          };
          /******/__webpack_require__.d(getter, 'a', getter);
          /******/return getter;
          /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/__webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/__webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/return __webpack_require__(__webpack_require__.s = 8);
        /******/
      }(
      /************************************************************************/
      /******/[
      /* 0 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (obj) {
          return Object.prototype.toString.call(obj) === '[object Array]';
        };

        /***/
      },
      /* 1 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        var bitapRegexSearch = __webpack_require__(5);
        var bitapSearch = __webpack_require__(7);
        var patternAlphabet = __webpack_require__(4);

        var Bitap = function () {
          function Bitap(pattern, _ref) {
            var _ref$location = _ref.location,
                location = _ref$location === undefined ? 0 : _ref$location,
                _ref$distance = _ref.distance,
                distance = _ref$distance === undefined ? 100 : _ref$distance,
                _ref$threshold = _ref.threshold,
                threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
                _ref$maxPatternLength = _ref.maxPatternLength,
                maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
                _ref$isCaseSensitive = _ref.isCaseSensitive,
                isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
                _ref$tokenSeparator = _ref.tokenSeparator,
                tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
                _ref$findAllMatches = _ref.findAllMatches,
                findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
                _ref$minMatchCharLeng = _ref.minMatchCharLength,
                minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

            _classCallCheck(this, Bitap);

            this.options = {
              location: location,
              distance: distance,
              threshold: threshold,
              maxPatternLength: maxPatternLength,
              isCaseSensitive: isCaseSensitive,
              tokenSeparator: tokenSeparator,
              findAllMatches: findAllMatches,
              minMatchCharLength: minMatchCharLength
            };

            this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

            if (this.pattern.length <= maxPatternLength) {
              this.patternAlphabet = patternAlphabet(this.pattern);
            }
          }

          _createClass(Bitap, [{
            key: 'search',
            value: function search(text) {
              if (!this.options.isCaseSensitive) {
                text = text.toLowerCase();
              }

              // Exact match
              if (this.pattern === text) {
                return {
                  isMatch: true,
                  score: 0,
                  matchedIndices: [[0, text.length - 1]]
                };
              }

              // When pattern length is greater than the machine word length, just do a a regex comparison
              var _options = this.options,
                  maxPatternLength = _options.maxPatternLength,
                  tokenSeparator = _options.tokenSeparator;

              if (this.pattern.length > maxPatternLength) {
                return bitapRegexSearch(text, this.pattern, tokenSeparator);
              }

              // Otherwise, use Bitap algorithm
              var _options2 = this.options,
                  location = _options2.location,
                  distance = _options2.distance,
                  threshold = _options2.threshold,
                  findAllMatches = _options2.findAllMatches,
                  minMatchCharLength = _options2.minMatchCharLength;

              return bitapSearch(text, this.pattern, this.patternAlphabet, {
                location: location,
                distance: distance,
                threshold: threshold,
                findAllMatches: findAllMatches,
                minMatchCharLength: minMatchCharLength
              });
            }
          }]);

          return Bitap;
        }();

        // let x = new Bitap("od mn war", {})
        // let result = x.search("Old Man's War")
        // console.log(result)

        module.exports = Bitap;

        /***/
      },
      /* 2 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var isArray = __webpack_require__(0);

        var deepValue = function deepValue(obj, path, list) {
          if (!path) {
            // If there's no path left, we've gotten to the object we care about.
            list.push(obj);
          } else {
            var dotIndex = path.indexOf('.');
            var firstSegment = path;
            var remaining = null;

            if (dotIndex !== -1) {
              firstSegment = path.slice(0, dotIndex);
              remaining = path.slice(dotIndex + 1);
            }

            var value = obj[firstSegment];

            if (value !== null && value !== undefined) {
              if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
                list.push(value);
              } else if (isArray(value)) {
                // Search each item in the array.
                for (var i = 0, len = value.length; i < len; i += 1) {
                  deepValue(value[i], remaining, list);
                }
              } else if (remaining) {
                // An object. Recurse further.
                deepValue(value, remaining, list);
              }
            }
          }

          return list;
        };

        module.exports = function (obj, path) {
          return deepValue(obj, path, []);
        };

        /***/
      },
      /* 3 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function () {
          var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

          var matchedIndices = [];
          var start = -1;
          var end = -1;
          var i = 0;

          for (var len = matchmask.length; i < len; i += 1) {
            var match = matchmask[i];
            if (match && start === -1) {
              start = i;
            } else if (!match && start !== -1) {
              end = i - 1;
              if (end - start + 1 >= minMatchCharLength) {
                matchedIndices.push([start, end]);
              }
              start = -1;
            }
          }

          // (i-1 - start) + 1 => i - start
          if (matchmask[i - 1] && i - start >= minMatchCharLength) {
            matchedIndices.push([start, i - 1]);
          }

          return matchedIndices;
        };

        /***/
      },
      /* 4 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (pattern) {
          var mask = {};
          var len = pattern.length;

          for (var i = 0; i < len; i += 1) {
            mask[pattern.charAt(i)] = 0;
          }

          for (var _i = 0; _i < len; _i += 1) {
            mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
          }

          return mask;
        };

        /***/
      },
      /* 5 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (text, pattern) {
          var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

          var matches = text.match(new RegExp(pattern.replace(tokenSeparator, '|')));
          var isMatch = !!matches;
          var matchedIndices = [];

          if (isMatch) {
            for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
              var match = matches[i];
              matchedIndices.push([text.indexOf(match), match.length - 1]);
            }
          }

          return {
            // TODO: revisit this score
            score: isMatch ? 0.5 : 1,
            isMatch: isMatch,
            matchedIndices: matchedIndices
          };
        };

        /***/
      },
      /* 6 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (pattern, _ref) {
          var _ref$errors = _ref.errors,
              errors = _ref$errors === undefined ? 0 : _ref$errors,
              _ref$currentLocation = _ref.currentLocation,
              currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
              _ref$expectedLocation = _ref.expectedLocation,
              expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
              _ref$distance = _ref.distance,
              distance = _ref$distance === undefined ? 100 : _ref$distance;

          var accuracy = errors / pattern.length;
          var proximity = Math.abs(expectedLocation - currentLocation);

          if (!distance) {
            // Dodge divide by zero error.
            return proximity ? 1.0 : accuracy;
          }

          return accuracy + proximity / distance;
        };

        /***/
      },
      /* 7 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var bitapScore = __webpack_require__(6);
        var matchedIndices = __webpack_require__(3);

        module.exports = function (text, pattern, patternAlphabet, _ref) {
          var _ref$location = _ref.location,
              location = _ref$location === undefined ? 0 : _ref$location,
              _ref$distance = _ref.distance,
              distance = _ref$distance === undefined ? 100 : _ref$distance,
              _ref$threshold = _ref.threshold,
              threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
              _ref$findAllMatches = _ref.findAllMatches,
              findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
              _ref$minMatchCharLeng = _ref.minMatchCharLength,
              minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

          var expectedLocation = location;
          // Set starting location at beginning text and initialize the alphabet.
          var textLen = text.length;
          // Highest score beyond which we give up.
          var currentThreshold = threshold;
          // Is there a nearby exact match? (speedup)
          var bestLocation = text.indexOf(pattern, expectedLocation);

          var patternLen = pattern.length;

          // a mask of the matches
          var matchMask = [];
          for (var i = 0; i < textLen; i += 1) {
            matchMask[i] = 0;
          }

          if (bestLocation != -1) {
            var score = bitapScore(pattern, {
              errors: 0,
              currentLocation: bestLocation,
              expectedLocation: expectedLocation,
              distance: distance
            });
            currentThreshold = Math.min(score, currentThreshold);

            // What about in the other direction? (speed up)
            bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

            if (bestLocation != -1) {
              var _score = bitapScore(pattern, {
                errors: 0,
                currentLocation: bestLocation,
                expectedLocation: expectedLocation,
                distance: distance
              });
              currentThreshold = Math.min(_score, currentThreshold);
            }
          }

          // Reset the best location
          bestLocation = -1;

          var lastBitArr = [];
          var finalScore = 1;
          var binMax = patternLen + textLen;

          var mask = 1 << patternLen - 1;

          for (var _i = 0; _i < patternLen; _i += 1) {
            // Scan for the best match; each iteration allows for one more error.
            // Run a binary search to determine how far from the match location we can stray
            // at this error level.
            var binMin = 0;
            var binMid = binMax;

            while (binMin < binMid) {
              var _score3 = bitapScore(pattern, {
                errors: _i,
                currentLocation: expectedLocation + binMid,
                expectedLocation: expectedLocation,
                distance: distance
              });

              if (_score3 <= currentThreshold) {
                binMin = binMid;
              } else {
                binMax = binMid;
              }

              binMid = Math.floor((binMax - binMin) / 2 + binMin);
            }

            // Use the result from this iteration as the maximum for the next.
            binMax = binMid;

            var start = Math.max(1, expectedLocation - binMid + 1);
            var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

            // Initialize the bit array
            var bitArr = Array(finish + 2);

            bitArr[finish + 1] = (1 << _i) - 1;

            for (var j = finish; j >= start; j -= 1) {
              var currentLocation = j - 1;
              var charMatch = patternAlphabet[text.charAt(currentLocation)];

              if (charMatch) {
                matchMask[currentLocation] = 1;
              }

              // First pass: exact match
              bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

              // Subsequent passes: fuzzy match
              if (_i !== 0) {
                bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
              }

              if (bitArr[j] & mask) {
                finalScore = bitapScore(pattern, {
                  errors: _i,
                  currentLocation: currentLocation,
                  expectedLocation: expectedLocation,
                  distance: distance
                });

                // This match will almost certainly be better than any existing match.
                // But check anyway.
                if (finalScore <= currentThreshold) {
                  // Indeed it is
                  currentThreshold = finalScore;
                  bestLocation = currentLocation;

                  // Already passed `loc`, downhill from here on in.
                  if (bestLocation <= expectedLocation) {
                    break;
                  }

                  // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                  start = Math.max(1, 2 * expectedLocation - bestLocation);
                }
              }
            }

            // No hope for a (better) match at greater error levels.  
            var _score2 = bitapScore(pattern, {
              errors: _i + 1,
              currentLocation: expectedLocation,
              expectedLocation: expectedLocation,
              distance: distance
            });

            if (_score2 > currentThreshold) {
              break;
            }

            lastBitArr = bitArr;
          }

          // Count exact matches (those with a score of 0) to be "almost" exact
          return {
            isMatch: bestLocation >= 0,
            score: finalScore === 0 ? 0.001 : finalScore,
            matchedIndices: matchedIndices(matchMask, minMatchCharLength)
          };
        };

        /***/
      },
      /* 8 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        var Bitap = __webpack_require__(1);
        var deepValue = __webpack_require__(2);
        var isArray = __webpack_require__(0);

        var Fuse = function () {
          function Fuse(list, _ref) {
            var _ref$location = _ref.location,
                location = _ref$location === undefined ? 0 : _ref$location,
                _ref$distance = _ref.distance,
                distance = _ref$distance === undefined ? 100 : _ref$distance,
                _ref$threshold = _ref.threshold,
                threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
                _ref$maxPatternLength = _ref.maxPatternLength,
                maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
                _ref$caseSensitive = _ref.caseSensitive,
                caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
                _ref$tokenSeparator = _ref.tokenSeparator,
                tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
                _ref$findAllMatches = _ref.findAllMatches,
                findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
                _ref$minMatchCharLeng = _ref.minMatchCharLength,
                minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
                _ref$id = _ref.id,
                id = _ref$id === undefined ? null : _ref$id,
                _ref$keys = _ref.keys,
                keys = _ref$keys === undefined ? [] : _ref$keys,
                _ref$shouldSort = _ref.shouldSort,
                shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
                _ref$getFn = _ref.getFn,
                getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
                _ref$sortFn = _ref.sortFn,
                sortFn = _ref$sortFn === undefined ? function (a, b) {
              return a.score - b.score;
            } : _ref$sortFn,
                _ref$tokenize = _ref.tokenize,
                tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
                _ref$matchAllTokens = _ref.matchAllTokens,
                matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
                _ref$includeMatches = _ref.includeMatches,
                includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
                _ref$includeScore = _ref.includeScore,
                includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
                _ref$verbose = _ref.verbose,
                verbose = _ref$verbose === undefined ? false : _ref$verbose;

            _classCallCheck(this, Fuse);

            this.options = {
              location: location,
              distance: distance,
              threshold: threshold,
              maxPatternLength: maxPatternLength,
              isCaseSensitive: caseSensitive,
              tokenSeparator: tokenSeparator,
              findAllMatches: findAllMatches,
              minMatchCharLength: minMatchCharLength,
              id: id,
              keys: keys,
              includeMatches: includeMatches,
              includeScore: includeScore,
              shouldSort: shouldSort,
              getFn: getFn,
              sortFn: sortFn,
              verbose: verbose,
              tokenize: tokenize,
              matchAllTokens: matchAllTokens
            };

            this.setCollection(list);
          }

          _createClass(Fuse, [{
            key: 'setCollection',
            value: function setCollection(list) {
              this.list = list;
              return list;
            }
          }, {
            key: 'search',
            value: function search(pattern) {
              this._log('---------\nSearch pattern: "' + pattern + '"');

              var _prepareSearchers2 = this._prepareSearchers(pattern),
                  tokenSearchers = _prepareSearchers2.tokenSearchers,
                  fullSearcher = _prepareSearchers2.fullSearcher;

              var _search2 = this._search(tokenSearchers, fullSearcher),
                  weights = _search2.weights,
                  results = _search2.results;

              this._computeScore(weights, results);

              if (this.options.shouldSort) {
                this._sort(results);
              }

              return this._format(results);
            }
          }, {
            key: '_prepareSearchers',
            value: function _prepareSearchers() {
              var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

              var tokenSearchers = [];

              if (this.options.tokenize) {
                // Tokenize on the separator
                var tokens = pattern.split(this.options.tokenSeparator);
                for (var i = 0, len = tokens.length; i < len; i += 1) {
                  tokenSearchers.push(new Bitap(tokens[i], this.options));
                }
              }

              var fullSearcher = new Bitap(pattern, this.options);

              return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
            }
          }, {
            key: '_search',
            value: function _search() {
              var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              var fullSearcher = arguments[1];

              var list = this.list;
              var resultMap = {};
              var results = [];

              // Check the first item in the list, if it's a string, then we assume
              // that every item in the list is also a string, and thus it's a flattened array.
              if (typeof list[0] === 'string') {
                // Iterate over every item
                for (var i = 0, len = list.length; i < len; i += 1) {
                  this._analyze({
                    key: '',
                    value: list[i],
                    record: i,
                    index: i
                  }, {
                    resultMap: resultMap,
                    results: results,
                    tokenSearchers: tokenSearchers,
                    fullSearcher: fullSearcher
                  });
                }

                return { weights: null, results: results };
              }

              // Otherwise, the first item is an Object (hopefully), and thus the searching
              // is done on the values of the keys of each item.
              var weights = {};
              for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
                var item = list[_i];
                // Iterate over every key
                for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
                  var key = this.options.keys[j];
                  if (typeof key !== 'string') {
                    weights[key.name] = {
                      weight: 1 - key.weight || 1
                    };
                    if (key.weight <= 0 || key.weight > 1) {
                      throw new Error('Key weight has to be > 0 and <= 1');
                    }
                    key = key.name;
                  } else {
                    weights[key] = {
                      weight: 1
                    };
                  }

                  this._analyze({
                    key: key,
                    value: this.options.getFn(item, key),
                    record: item,
                    index: _i
                  }, {
                    resultMap: resultMap,
                    results: results,
                    tokenSearchers: tokenSearchers,
                    fullSearcher: fullSearcher
                  });
                }
              }

              return { weights: weights, results: results };
            }
          }, {
            key: '_analyze',
            value: function _analyze(_ref2, _ref3) {
              var key = _ref2.key,
                  value = _ref2.value,
                  record = _ref2.record,
                  index = _ref2.index;
              var _ref3$tokenSearchers = _ref3.tokenSearchers,
                  tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
                  _ref3$fullSearcher = _ref3.fullSearcher,
                  fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
                  _ref3$resultMap = _ref3.resultMap,
                  resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
                  _ref3$results = _ref3.results,
                  results = _ref3$results === undefined ? [] : _ref3$results;

              // Check if the texvaluet can be searched
              if (value === undefined || value === null) {
                return;
              }

              var exists = false;
              var averageScore = -1;
              var numTextMatches = 0;

              if (typeof value === 'string') {
                this._log('\nKey: ' + (key === '' ? '-' : key));

                var mainSearchResult = fullSearcher.search(value);
                this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

                if (this.options.tokenize) {
                  var words = value.split(this.options.tokenSeparator);
                  var scores = [];

                  for (var i = 0; i < tokenSearchers.length; i += 1) {
                    var tokenSearcher = tokenSearchers[i];

                    this._log('\nPattern: "' + tokenSearcher.pattern + '"');

                    // let tokenScores = []
                    var hasMatchInText = false;

                    for (var j = 0; j < words.length; j += 1) {
                      var word = words[j];
                      var tokenSearchResult = tokenSearcher.search(word);
                      var obj = {};
                      if (tokenSearchResult.isMatch) {
                        obj[word] = tokenSearchResult.score;
                        exists = true;
                        hasMatchInText = true;
                        scores.push(tokenSearchResult.score);
                      } else {
                        obj[word] = 1;
                        if (!this.options.matchAllTokens) {
                          scores.push(1);
                        }
                      }
                      this._log('Token: "' + word + '", score: ' + obj[word]);
                      // tokenScores.push(obj)
                    }

                    if (hasMatchInText) {
                      numTextMatches += 1;
                    }
                  }

                  averageScore = scores[0];
                  var scoresLen = scores.length;
                  for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
                    averageScore += scores[_i2];
                  }
                  averageScore = averageScore / scoresLen;

                  this._log('Token score average:', averageScore);
                }

                var finalScore = mainSearchResult.score;
                if (averageScore > -1) {
                  finalScore = (finalScore + averageScore) / 2;
                }

                this._log('Score average:', finalScore);

                var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

                this._log('\nCheck Matches: ' + checkTextMatches);

                // If a match is found, add the item to <rawResults>, including its score
                if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
                  // Check if the item already exists in our results
                  var existingResult = resultMap[index];

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
                    resultMap[index] = {
                      item: record,
                      output: [{
                        key: key,
                        score: finalScore,
                        matchedIndices: mainSearchResult.matchedIndices
                      }]
                    };

                    results.push(resultMap[index]);
                  }
                }
              } else if (isArray(value)) {
                for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
                  this._analyze({
                    key: key,
                    value: value[_i3],
                    record: record,
                    index: index
                  }, {
                    resultMap: resultMap,
                    results: results,
                    tokenSearchers: tokenSearchers,
                    fullSearcher: fullSearcher
                  });
                }
              }
            }
          }, {
            key: '_computeScore',
            value: function _computeScore(weights, results) {
              this._log('\n\nComputing score:\n');

              for (var i = 0, len = results.length; i < len; i += 1) {
                var output = results[i].output;
                var scoreLen = output.length;

                var totalScore = 0;
                var bestScore = 1;

                for (var j = 0; j < scoreLen; j += 1) {
                  var score = output[j].score;
                  var weight = weights ? weights[output[j].key].weight : 1;
                  var nScore = score * weight;

                  if (weight !== 1) {
                    bestScore = Math.min(bestScore, nScore);
                  } else {
                    output[j].nScore = nScore;
                    totalScore += nScore;
                  }
                }

                results[i].score = bestScore === 1 ? totalScore / scoreLen : bestScore;

                this._log(results[i]);
              }
            }
          }, {
            key: '_sort',
            value: function _sort(results) {
              this._log('\n\nSorting....');
              results.sort(this.options.sortFn);
            }
          }, {
            key: '_format',
            value: function _format(results) {
              var finalOutput = [];

              this._log('\n\nOutput:\n\n', results);

              var transformers = [];

              if (this.options.includeMatches) {
                transformers.push(function (result, data) {
                  var output = result.output;
                  data.matches = [];

                  for (var i = 0, len = output.length; i < len; i += 1) {
                    var item = output[i];
                    var obj = {
                      indices: item.matchedIndices
                    };
                    if (item.key) {
                      obj.key = item.key;
                    }
                    data.matches.push(obj);
                  }
                });
              }

              if (this.options.includeScore) {
                transformers.push(function (result, data) {
                  data.score = result.score;
                });
              }

              for (var i = 0, len = results.length; i < len; i += 1) {
                var result = results[i];

                if (this.options.id) {
                  result.item = this.options.getFn(result.item, this.options.id)[0];
                }

                if (!transformers.length) {
                  finalOutput.push(result.item);
                  continue;
                }

                var data = {
                  item: result.item
                };

                for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
                  transformers[j](result, data);
                }

                finalOutput.push(data);
              }

              return finalOutput;
            }
          }, {
            key: '_log',
            value: function _log() {
              if (this.options.verbose) {
                var _console;

                (_console = console).log.apply(_console, arguments);
              }
            }
          }]);

          return Fuse;
        }();

        module.exports = Fuse;

        /***/
      }])
    );
  });
  
});

var Fuse = unwrapExports(fuse);

function filterResultsFactory(store) {
  var FilterResults = function (_Component) {
    inherits(FilterResults, _Component);

    function FilterResults() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, FilterResults);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FilterResults.__proto__ || Object.getPrototypeOf(FilterResults)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
        this.props.prefilters.forEach(function (_ref2) {
          var regex = _ref2.regex,
              handler = _ref2.handler;

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
        var _prefilterItems = this.prefilterItems(this.state.search || ''),
            items = _prefilterItems.items,
            search = _prefilterItems.search;

        if (search.trim() === '') {
          return this.props.defaultAllItems ? items : [];
        } else {
          var fuse = new Fuse(items, this.props.fuseConfig);
          return fuse.search(search);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var filteredItems = this.filterItems();
        return this.props.children(filteredItems);
      }
    }]);
    return FilterResults;
  }(React.Component);

  FilterResults.displayName = 'FilterResults';
  FilterResults.propTypes = {
    children: index.func.isRequired,
    items: index.array.isRequired,
    defaultAllItems: index.bool,
    fuseConfig: index.shape({
      keys: index.array.isRequired,
      id: index.string,
      caseSensitive: index.bool,
      shouldSort: index.bool,
      searchFn: index.func,
      getFn: index.func,
      sortFn: index.func,
      location: index.number,
      threshold: index.number,
      distance: index.number,
      maxPatternLength: index.number,
      verbose: index.bool,
      tokenize: index.bool,
      tokenSeparator: index.any
    }).isRequired,
    prefilters: index.arrayOf(index.shape({
      regex: index.any.isRequired,
      handler: index.func.isRequired
    }).isRequired).isRequired
  };
  FilterResults.defaultProps = {
    defaultAllItems: true,
    prefilters: []
  };


  return FilterResults;
}

function fuzzyFilterFactory() {
  var store = new BehaviorSubject_2();
  return {
    InputFilter: inputFilterFactory(store),
    FilterResults: filterResultsFactory(store)
  };
}

return fuzzyFilterFactory;

})));
