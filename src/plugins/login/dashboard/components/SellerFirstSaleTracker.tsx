
import { useEffect, useRef } from 'react';
import { useChannel } from '@vendure/dashboard';
import type { PageContextValue } from '@vendure/dashboard';

const SellerFirstSaleTracker = ({ context }: { context: PageContextValue }) => {
  const { activeChannel } = useChannel();
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) {
      return;
    }

    const state = (context?.entity as any)?.state;

    if (state === 'PaymentSettled') {
      firedRef.current = true;
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'seller_first_sale',
        seller_id: activeChannel?.code,
        days_since_creation: undefined,
      });
    }
  }, [context?.entity, activeChannel?.code]);

  return null;
};

export default SellerFirstSaleTracker;
