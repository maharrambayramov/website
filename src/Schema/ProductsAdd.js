import * as yup from 'yup';

export const ProductsAdd = yup
.object()
.shape({
    name: yup.string().required(),
    logo: yup.string().required(),
    website: yup.string()
})