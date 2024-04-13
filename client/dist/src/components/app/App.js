import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import css from './App.module.scss';
import { Outlet, Link } from 'react-router-dom';
import pngEx from '@/assets/ex.png';
import jpgEx from '@/assets/VK.jpg';
import Appstore from '@/assets/appstore.svg';
export var App = function () {
    var _a = useState(0), counter = _a[0], setCounter = _a[1];
    useEffect(function () {
        var interval = setInterval(function () {
            setCounter(function (prev) { return prev + 1; });
        }, 1000);
        return function () {
            clearInterval(interval);
        };
    }, []);
    return _jsxs(_Fragment, { children: [_jsxs("h1", { children: ["PLATFORM: ", __PLATFORM__] }), _jsxs("div", { style: { width: 100, height: 100 }, children: [_jsx("img", { src: pngEx, alt: 'example' }), _jsx("img", { src: jpgEx, alt: 'example' }), _jsx(Appstore, { color: 'red', width: 50, height: 50 })] }), _jsx(Link, { to: '/about', children: "about" }), _jsx(Link, { to: '/profile', children: "profile" }), _jsx("div", { className: 'px-2 py-3 font-bold font-black opacity-50 text-yellow-300', children: counter }), _jsx("div", { className: css.button, children: counter }), _jsx(Outlet, {})] });
};
