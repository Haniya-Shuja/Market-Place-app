// import { defineType } from "sanity"

// export const product = defineType({
//     name: "product",
//     title: "Product",
//     type: "document",
//     fields: [

        


//         {
//             name: "title",
//             title: "Title",
//             validation: (rule) => rule.required(),
//             type: "string"
//         },
//         {
//             name:"description",
//             type:"text",
//             validation: (rule) => rule.required(),
//             title:"Description",
//         },
//         {
//             name: "productImage",
//             type: "image",
//             validation: (rule) => rule.required(),
//             title: "Product Image"
//         },
//         {
//             name: "price",
//             type: "number",
//             validation: (rule) => rule.required(),
//             title: "Price",
//         },
//         {
//             name: "tags",
//             type: "array",
//             title: "Tags",
//             of: [{ type: "string" }]
//         },
//         {
//             name:"dicountPercentage",
//             type:"number",
//             title:"Discount Percentage",
//         },
//         {
//             name:"isNew",
//             type:"boolean",
//             title:"New Badge",
//         }
//     ]
// })


import { defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true, // Enable image cropping
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().positive(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Tags for filtering products",
    },
    {
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
      validation: (rule) => rule.min(0).max(100),
    },
    {
      name: "isNew",
      title: "New Badge",
      type: "boolean",
      description: "Display 'New' badge on this product",
    },
  ],
});
