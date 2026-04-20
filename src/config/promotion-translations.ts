import { LanguageCode } from '@vendure/core';
import {
  orderFixedDiscount,
  orderPercentageDiscount,
  hasFacetValues,
  minimumOrderAmount,
  containsProducts,
  customerGroup,
  buyXGetYFreeCondition,
} from '@vendure/core';
import { orderLineFixedDiscount } from '@vendure/core/dist/config/promotion/actions/order-line-fixed-discount-action';
import { discountOnItemWithFacets } from '@vendure/core/dist/config/promotion/actions/facet-values-percentage-discount-action';
import { productsPercentageDiscount } from '@vendure/core/dist/config/promotion/actions/product-percentage-discount-action';
import { freeShipping } from '@vendure/core/dist/config/promotion/actions/free-shipping-action';
import { buyXGetYFreeAction } from '@vendure/core/dist/config/promotion/actions/buy-x-get-y-free-action';

orderFixedDiscount.description.push({ languageCode: LanguageCode.es, value: 'Descuento fijo en el pedido' });
orderPercentageDiscount.description.push({ languageCode: LanguageCode.es, value: 'Descuento porcentual en el pedido' });
hasFacetValues.description.push({ languageCode: LanguageCode.es, value: 'Comprar mínimo N productos con ciertas facetas' });
minimumOrderAmount.description.push({ languageCode: LanguageCode.es, value: 'Si el total del pedido supera el monto mínimo' });
containsProducts.description.push({ languageCode: LanguageCode.es, value: 'Comprar mínimo N productos específicos' });
customerGroup.description.push({ languageCode: LanguageCode.es, value: 'El cliente pertenece a un grupo específico' });
buyXGetYFreeCondition.description.push({ languageCode: LanguageCode.es, value: 'Comprar X productos y obtener Y gratis' });
orderLineFixedDiscount.description.push({ languageCode: LanguageCode.es, value: 'Descuento fijo en línea de pedido' });
discountOnItemWithFacets.description.push({ languageCode: LanguageCode.es, value: 'Descuento porcentual en productos con ciertas facetas' });
productsPercentageDiscount.description.push({ languageCode: LanguageCode.es, value: 'Descuento porcentual en productos específicos' });
freeShipping.description.push({ languageCode: LanguageCode.es, value: 'Envío gratis' });
buyXGetYFreeAction.description.push({ languageCode: LanguageCode.es, value: 'Comprar X productos y obtener Y gratis' });
