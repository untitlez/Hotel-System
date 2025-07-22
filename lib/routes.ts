export const Routes = {
  dashboard: {
    base: "/dashboard",
    room: "/dashboard/room/",
    createRoom: "/dashboard/room/create-room/",
    booking: "/dashboard/booking/",
    member: "/dashboard/member/",
  },

  pages: {
    home: "/",
    profile: "/profile/",
    property: "/property/",
    booking: "/booking/",
  },

  auth: {
    login: "/login/",
    signUp: "/sign-up/",
  },

  navbar: {
    id: {
      hero: "hero",
      property: "property-home",
      location: "location",
      review: "review",
      fqa: "fqa",
      cta: "cta",
      footer: "footer",
    },
    property: {
      hotel: "/property?search=Hotel",
      villa: "/property?search=Villa",
      resort: "/property?search=Resort",
    },
    location: {
      sydney: "/property?search=sydney",
      melbourne: "/property?search=melbourne",
      brisbane: "/property?search=brisbane",
      perth: "/property?search=perth",
      adelaide: "/property?search=adelaide",
      goldCoast: "/property?search=goldCoast",
      canberra: "/property?search=canberra",
      hobart: "/property?search=hobart",
    },
  },
};
