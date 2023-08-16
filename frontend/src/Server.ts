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
        { timing: 1000 }
      );
      this.get(
        "/dms",
        () => {
          return {
            directMessages: [
              {
                userName: "Alan",
                avatar: "https://i.ibb.co/27jBR0k/Group-582.png",
              },
              {
                userName: "John",
                avatar: "https://i.ibb.co/2tPQWMG/Group-583.png",
              },
              {
                userName: "Jane",
                avatar: "https://i.ibb.co/LZxnJhS/Group-584.png",
              },
              {
                userName: "Emily",
                avatar: "https://i.ibb.co/kQdqcSs/Group-585.png",
              },
              {
                userName: "Michael",
                avatar: "https://i.ibb.co/CbmxRHf/Group-587.png",
              },
              {
                userName: "David",
                avatar: "https://i.ibb.co/zxHZrzh/Profile-Picture.png",
              },
              {
                userName: "Sarah",
                avatar: "https://i.ibb.co/4sFXx1G/Status.png",
              },
            ],
          };
        },
        { timing: 1000 }
      );
      this.get(
        "/user",
        () => {
          return {
            user: {
              name: "Mohsin",
              userName: "m_m_w",
              avatar: "https://i.ibb.co/h8C6k3R/Server-2.png",
            },
          };
        },
        { timing: 1000 }
      );
    },
  });
};
