import postcssJitProps from 'postcss-jit-props';
import openProps from 'open-props';

const config = {
    plugins: [
        postcssJitProps(openProps),
    ]
};

export default config;