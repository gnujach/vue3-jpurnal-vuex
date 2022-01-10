export default {
  name: "daybook",
  path: "/daybook",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ "../views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry-selected",
      component: () =>
        import(
          /* webpackChunkName: "entry-selected" */ "../views/EntrySelected.vue"
        ),
    },
  ],
};
