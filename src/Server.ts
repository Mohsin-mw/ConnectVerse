import { createServer } from "miragejs";

export const Server = () => {
  createServer({
    routes() {
      this.namespace = "api";
      this.get(
        "/movies",
        () => {
          return {
            navigation: [
              {
                name: "server-1",
                icon: "https://i.ibb.co/h8C6k3R/Server-2.png",
              },
              {
                name: "server-2",
                icon: "https://i.ibb.co/T23mfB5/Server-1.png",
              },
              {
                name: "server-3",
                icon: "https://i.ibb.co/6ZMPFcH/Server.png",
              },
              {
                name: "server-4",
                icon: "https://i.ibb.co/mFLFR9Q/Server-Icon-1.png",
              },
            ],
          };
        },
        { timing: 4000 }
      );
    },
  });
};
