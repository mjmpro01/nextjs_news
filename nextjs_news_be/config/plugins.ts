export default ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        category: {
          field: "slug",
          references: "name",
          options: {
            locale: "vi",
          },
        },
        new: {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "event-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "car-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "shopping-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "real-estate-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "dining-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "technical-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "travel-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "beauty-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
        "business-new": {
          field: "slug",
          references: "title",
          options: {
            locale: "vi",
          },
        },
      },
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      register: {
        allowedFields: [
          "first_name",
          "last_name",
          "username",
          "gender",
          "birthday",
          "phone",
          "size",
          "address",
        ],
      },
    },
  },
  meilisearch: {
    enabled: true,
    config: {
      // Your meili host
      host: env("MEILISEARCH_HOST", "http://localhost:7700"),
      // Your master key or private key
      apiKey: env("MEILISEARCH_API_KEY", "masterKey"),

      new: {
        settings: {
          searchableAttributes: ["title", "content", "category"],
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          "api::category.category",
          "api::new.new",
        ],
      },
    },
  },
});
