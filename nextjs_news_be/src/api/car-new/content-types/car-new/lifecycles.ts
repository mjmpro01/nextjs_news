import { CATEGORY_ENUM } from "../../../../common/enum";
import { debug } from "../../../../common/utils";
export default {
  async afterCreate(event) {
    const { result } = event;
    const { id } = result;

    const commonNew = await strapi.entityService.findOne(
      "api::car-new.car-new",
      id,
      {
        populate: {
          avatar: true,
        },
      }
    );
    if (commonNew) {
      let updateNew;
      if (commonNew?.avatar?.id) {
        updateNew = await strapi.entityService.create("api::new.new", {
          data: {
            title: commonNew.title,
            content: commonNew.content,
            slug: commonNew.slug,
            avatar: {
              id: commonNew?.avatar?.id,
            },
            category: {
              id: CATEGORY_ENUM.VEHICLE,
            },
            is_outstanding: commonNew?.is_outstanding || false,
          },
        });
      } else {
        updateNew = await strapi.entityService.create("api::new.new", {
          data: {
            title: commonNew.title,
            content: commonNew.content,
            slug: commonNew.slug,
            category: {
              id: CATEGORY_ENUM.VEHICLE,
            },
            is_outstanding: commonNew?.is_outstanding || false,

          },
        });
      }
      debug(updateNew);
      if (updateNew?.id) {
        await strapi.entityService.update("api::car-new.car-new", id, {
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

    const commonNew = await strapi.entityService.findOne(
      "api::car-new.car-new",
      id,
      {
        populate: {
          avatar: true,
          new: true,
        },
      }
    );

    if (commonNew?.new?.id && commonNew?.avatar?.id) {
      await strapi.entityService.update("api::new.new", commonNew?.new?.id, {
        data: {
          title: commonNew.title,
          content: commonNew.content,
          slug: commonNew.slug,
          avatar: {
            id: commonNew?.avatar?.id,
          },
          is_outstanding: commonNew?.is_outstanding || false,

        },
      });
    } else {
      await strapi.entityService.update("api::new.new", commonNew?.new?.id, {
        data: {
          title: commonNew.title,
          content: commonNew.content,
          is_outstanding: commonNew?.is_outstanding || false,
        },
      });
    }
  },
};
