import { Box, Title } from "@components/atoms";

import { Layout } from "@components/template";
import React from "react";
import dynamic from "next/dynamic";

const BannerSliderDynamic = dynamic(
    (): any =>
        import("../components/organisms").then((mod) => mod.BannerSlider),
    { ssr: false }
);
const SalesSliderDynamic = dynamic(
    (): any => import("@components/organisms").then((mod) => mod.SalesSlider),
    { ssr: false }
);
const DoctorsSliderDynamic = dynamic(
    (): any => import("@components/organisms").then((mod) => mod.DoctorsSlider),
    { ssr: false }
);

const FeedbackSliderDynamic = dynamic(
    (): any =>
        import("@components/organisms").then((mod) => mod.FeedbackSlider),
    { ssr: false }
);

const AboutDynamic = dynamic(
    (): any => import("@components/organisms").then((mod) => mod.About),
    { ssr: false }
);
const RatingDynamic = dynamic(
    (): any => import("@components/organisms").then((mod) => mod.Rating),
    { ssr: false }
);

const Index = (props: any) => {
    //console.log("props", props);
    return (
        <Layout
            isMobile={props.isMobile}
            title={"Intellect Nedical Group"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={null}
        >
            <BannerSliderDynamic />
            <Box>
                <Title text={"Акции"} />
                <section>
                    <SalesSliderDynamic />
                </section>

                <Title text={"Врачи"} />
                <section>
                    <DoctorsSliderDynamic />
                </section>

                <Title text={"О центре"} />
                <section>
                    <AboutDynamic />
                </section>
            </Box>

            <FeedbackSliderDynamic />

            <Box>
                <Title text={"Рейтинг клиники в сервисах"} />
                <RatingDynamic />
            </Box>
        </Layout>
    );
};

export default Index;
