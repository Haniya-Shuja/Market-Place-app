

import { createClient } from '@sanity/client';
import { Buffer } from 'buffer';

const client = createClient({
  projectId: 'evjl29ge',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skkwNOzJTMuO9D2PXS2QPWIjHKyokhIy3GX8GYBIGW6IKzw7OhgkqFX9eB81BbgZMAXoRJipftEO6wWAJDcRqAy9w2kHItHPQmK56Oo6DQzqek3oYviyrtHrspiZ59DD3JD06pBUTlTxkXXz3F8ESUCGFVgrfFbniySbbOXAZaYBqtRpEdGC'
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error.message);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage, // Fixed typo
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product "${product.title}" uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product "${product.title}" skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', product.title, error.message);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error.message);
  }
}

importProducts();
