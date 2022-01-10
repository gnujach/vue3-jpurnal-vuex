// import { loadEntries } from "./actions";

export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem mollit laborum commodo ex laborum in elit nostrud dolor velit consectetur sint dolore culpa. Pariatur sint consequat commodo dolor exercitation aliquip nisi. Ipsum sint voluptate cupidatat reprehenderit consequat aute commodo quis aute.",
      picture: null,
    },
    {
      id: new Date().getTime() + 100,
      date: new Date().toDateString(),
      text: "In adipisicing dolor irure duis sint eiusmod consequat. Ea ut sunt et irure do magna et. Nulla dolor do nulla minim velit incididunt.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Laborum cillum incididunt ipsum pariatur id est aliquip mollit exercitation aliquip. Ad ut laborum ipsum minim mollit quis enim ex. Commodo nisi ut amet do ad sit in nostrud nostrud labore. Do nulla aute voluptate eiusmod excepteur cillum labore ex occaecat irure amet. Cupidatat proident consequat adipisicing proident aliqua irure sit anim deserunt commodo exercitation.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Non non non mollit cillum sunt laboris. Eiusmod sint laborum et labore veniam amet adipisicing eiusmod enim pariatur. Deserunt Lorem excepteur occaecat in laboris ipsum commodo.",
      picture: null,
    },
  ],
});
