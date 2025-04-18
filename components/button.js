"use client";

import clsx from "clsx";

export default function Button({
    children,
    onClick,
    variant = "primary",
    size = "",
    className = "",
    type = "button",
    ...props
}) {
    const baseStyles = "rounded-xl font-medium focus:outline-none transition-colors duration-200";

    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
    };

    const variantStyles = {
        primary: "bg-[#FF4240] text-white hover:bg-[#FF4240]-900",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        ghost: "bg-transparent text-blue-600 hover:underline",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
