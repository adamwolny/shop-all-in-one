import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const image = searchParams.get("image");
    const category = searchParams.get("category");
    const title = searchParams.get("title");

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            position: "relative",
          }}
        >
          <img
            alt={`${title}`}
            height="100%"
            src={`${image}`}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            width="100%"
          />
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "50px",
            }}
          >
            <div
              style={{
                width: "100%",
                fontSize: 45,
                fontWeight: 600,
                borderRadius: 10,
                color: "#000000",
                fontFamily: "Inter",
                marginBottom: 25,
              }}
            >
              {title}
            </div>
            <div
              style={{
                width: "100%",
                fontSize: 30,
                fontWeight: 600,
                color: "#000000",
                fontFamily: "Inter",
              }}
            >
              {category}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
      },
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
