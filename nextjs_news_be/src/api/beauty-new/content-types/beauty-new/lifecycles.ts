import { CATEGORY_ENUM } from "../../../../common/enum";
import { debug } from "../../../../common/utils";
export default {
  async afterCreate(event) {
    const { result } = event;
    const { id } = result;

    const beautyNew = await strapi.entityService.findOne(
      "api::beauty-new.beauty-new",
      id,
      {
        populate: {
          avatar: true,
        },
      }
    );
    if (beautyNew) {
      let updateNew;
      if (beautyNew?.avatar?.id) {
        updateNew = await strapi.entityService.create("api::new.new", {
          data: {
            title: beautyNew.title,
            content: beautyNew.content,
            slug: beautyNew.slug,
            avatar: {
              id: beautyNew?.avatar?.id,
            },
            category: {
              id: CATEGORY_ENUM.BEAUTIFY,
            },
            is_outstanding: beautyNew?.is_outstanding || false,
            short_description: beautyNew?.short_description || "",
          },
        });
      } else {
        updateNew = await strapi.entityService.create("api::new.new", {
          data: {
            title: beautyNew.title,
            content: beautyNew.content,
            slug: beautyNew.slug,
            category: {
              id: CATEGORY_ENUM.BEAUTIFY,
            },
            is_outstanding: beautyNew?.is_outstanding || false,
            short_description: beautyNew?.short_description || "",
          },
        });
      }
      debug(updateNew);
      if (updateNew?.id) {
        await strapi.entityService.update("api::beauty-new.beauty-new", id, {
          data: {
            new: {
              id: updateNew.id,
            },
          },
        });
      }
    }
  },
  async afterUpdate(event) {
    const { result } = event;
    const { id } = result;

    const beautyNew = await strapi.entityService.findOne(
      "api::beauty-new.beauty-new",
      id,
      {
        populate: {
          avatar: true,
          new: true,
        },
      }
    );

    if (beautyNew?.new?.id && beautyNew?.avatar?.id) {
      await strapi.entityService.update("api::new.new", beautyNew?.new?.id, {
        data: {
          title: beautyNew.title,
          content: beautyNew.content,
          slug: beautyNew.slug,
          avatar: {
            id: beautyNew?.avatar?.id,
          },
          is_outstanding: beautyNew?.is_outstanding || false,
          short_description: beautyNew?.short_description || "",
          publishedAt: beautyNew?.publishedAt,
        },
      });
    } else {
      await strapi.entityService.update("api::new.new", beautyNew?.new?.id, {
        data: {
          title: beautyNew.title,
          content: beautyNew.content,
          is_outstanding: beautyNew?.is_outstanding || false,
          short_description: beautyNew?.short_description || "",
          publishedAt: beautyNew?.publishedAt,
        },
      });
    }
  },
};
