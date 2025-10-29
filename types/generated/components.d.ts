import type { Schema, Struct } from '@strapi/strapi';

export interface CoreMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_core_menu_items';
  info: {
    displayName: 'menu_item';
    icon: 'bulletList';
  };
  attributes: {
    enabled: Schema.Attribute.Boolean;
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'core.menu-item': CoreMenuItem;
    }
  }
}
