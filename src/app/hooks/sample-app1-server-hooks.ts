import { useCallback, useEffect, useState } from 'react';
import { getProductList } from '../services/sample-app1-server';
import { Product } from '../models/SampleApp1Server/product';

export const useGetProductList = () => {
  const [product, setProduct] = useState<Product[]>([]);

  const requestProduct = useCallback(() => {
    let ignore = false;
    getProductList()
      .then((data) => {
        if (!ignore) {
          setProduct(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestProduct();
  }, [requestProduct]);

  return { requestSampleApp1ServerProduct: requestProduct, sampleApp1ServerProduct: product, setSampleApp1ServerProduct: setProduct };
}
