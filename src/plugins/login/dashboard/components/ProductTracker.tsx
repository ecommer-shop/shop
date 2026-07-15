
import React, { useEffect, useRef } from 'react';
import { useLocation } from '@tanstack/react-router';
import { useChannel } from '@vendure/dashboard';

const ProductTracker = () => {
  const { activeChannel } = useChannel();
  const location = useLocation();
  const prevUrlRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    const currentUrl = location.pathname;
    const prevUrl = prevUrlRef.current;

    // Regular expression to match '/products/' followed by an ID (numeric or alphanumeric)
    const productDetailRegex = /\/products\/[a-zA-Z0-9]+$/;

    if (prevUrl === '/products/new' && currentUrl.match(productDetailRegex)) {
      // Product successfully created, fire dataLayer event
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'seller_add_product',
        seller_id: activeChannel?.code,
      });
    }

    prevUrlRef.current = currentUrl;
  }, [location.pathname]);

  return null;
};

export default ProductTracker;
