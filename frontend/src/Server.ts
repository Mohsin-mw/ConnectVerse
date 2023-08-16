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
      this.get(
        "/explore",
        () => {
          return [
            {
              Image: "https://i.ibb.co/GfSzMqJ/Subtract.png",
              Icon: "https://i.ibb.co/s9X1KPX/Image.png",
              Name: "Apple",
              Description:
                "The official Apple server. Your place to talk about latest tech!",
              membersOnline: "323,450",
              membersTotal: "800,000",
            },
            {
              Image: "https://i.ibb.co/vw6gYpw/Subtract-1.png",
              Icon: "https://i.ibb.co/vYZz4jS/Image-1.png",
              Name: "Pokémon",
              Description:
                "The largest Pokémon community on Discord! Keep up with game/anime news and chat with fellow Pokémon fans!",
              membersOnline: "236,308",
              membersTotal: "735,513",
            },
            {
              Image: "https://i.ibb.co/NCN7n7d/Subtract-2.png",
              Icon: "https://i.ibb.co/mb6QdjX/Image-2.png",
              Name: "Community Architects",
              Description:
                "We are committed to bringing together community mods, admins, etc. to share our biggest passion: Building Communities.",
              membersOnline: "1,606",
              membersTotal: "3,000",
            },
            {
              Image: "https://i.ibb.co/1Ty4Xyj/Subtract-3.png",
              Icon: "https://i.ibb.co/840zdfM/Image-3.png",
              Name: "Animal Lovers",
              Description:
                "A community for animal lovers run by animal enthusiasts!",
              membersOnline: "24,675",
              membersTotal: "77,575",
            },
          ];
        },
        { timing: 1000 }
      );
    },
  });
};
