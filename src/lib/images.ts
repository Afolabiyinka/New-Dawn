import ballCompetition from "@/assets/Ball Competition.jpeg";
import choirMinistration from "@/assets/Choir_ministration.jpeg";
import drama from "@/assets/drama.jpeg";
import drama3 from "@/assets/Drama3.jpeg";
import mensPicture from "@/assets/Men.jpeg";
import outreach from "@/assets/Outreach.jpeg";
import outreach2 from "@/assets/OUTREACH2.jpeg";
import outreach3 from "@/assets/Outreach3.jpeg";
import firstSunday from "@/assets/Trad.jpeg";
import womensPicture from "@/assets/Women.jpeg";
import youthPicture from "@/assets/Youth.jpeg";
import choir from "@/assets/choir.jpeg";
import choirPose from "@/assets/choir_pose.jpeg";
import donationBackground from "@/assets/donation.jpg";
import homeBackground from "@/assets/home_background.jpg";
import liveStreamsBackground from "@/assets/livestream.jpg";
import churchLogo from "@/assets/RCCG Logo Sticker – Redemption Store.jpg";

//Leaders
import pastor from "@/assets/leaders/Daddy.jpeg";
import pastorWife from "@/assets/leaders/Mummy.jpeg";
import pastorChris from "@/assets/leaders/pastor chris.jpeg";
import ministerTosin from "@/assets/leaders/minister_tosin.jpeg";
import ministerShoniran from "@/assets/leaders/minister_shoniran.jpeg"
import ministerJames from "@/assets/leaders/minister james.jpeg";
import pastorAtService from "@/assets/service-shots/Daddy_on_the_altar.jpeg";
import servicePhoto from "@/assets/service-shots/WhatsApp Image 2026-10-08 at 4.19.37 PM.jpeg";
import servicePhotoTwo from "@/assets/service-shots/random_shot.jpeg";
import servicePhotoThree from "@/assets/service-shots/2random_shot.jpeg";

export const images = {
  logo: churchLogo,
  backgrounds: {
    home: homeBackground,
    donations: donationBackground,
    liveStreams: liveStreamsBackground,
  },
  leaders: {
    pastor,
    pastorWife,
    pastorChris,
    ministerTosin,
    ministerShoniran,
    ministerJames,
  },
  about: [
    { id: "mens-ministry", src: mensPicture, alt: "Men's ministry" },
    { id: "womens-ministry", src: womensPicture, alt: "Women's ministry" },
    { id: "youth-ministry", src: youthPicture, alt: "Youth ministry" },
    { id: "outreach-1", src: outreach, alt: "Community outreach" },
    { id: "choir", src: choirPose, alt: "Church choir" },
    { id: "drama", src: drama3, alt: "Church drama team" },
    {
      id: "outreach-2",
      src: outreach2,
      alt: "Church members serving locally",
    },
    {
      id: "outreach-3",
      src: outreach3,
      alt: "Church members on community outreach",
    },
    { id: "first-sunday", src: firstSunday, alt: "First Sunday celebration" },
    { id: "choir-group", src: choir, alt: "Church choir members" },
    {
      id: "community-event",
      src: ballCompetition,
      alt: "Church community sports event",
    },
  ],
  worship: [
    { src: pastorAtService, alt: "Pastor preaching during a church service" },
    { src: servicePhoto, alt: "Church members gathered for worship" },
    { src: servicePhotoTwo, alt: "Church service" },
    { src: servicePhotoThree, alt: "Church service" },
    { src: choirMinistration, alt: "Choir leading a church ministration" },
    { src: drama, alt: "Church members performing a drama" },
  ],
} as const;
