import React = require("react");

export type ComponentWithChildren<T = {}> = T & { children?: React.ReactNode };
