import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useheaderCb, useiconBoxCb, useoptionsFlexCb, userestBoxCb, uselogoCb, useAboutDescCb, useDescriptionFlexCb, usedescription1Cb, usebuttonsBoxCb, useButtonsCb, useburgerBoxCb, useorderFromFlexCb, useAppsCb, useappsBox1Cb, useappsBox2Cb, useBrowseMenuPageCb, useFlex60Cb, useFlex58Cb, useFlex55Cb, useFlex56Cb, useFlex64Cb, useFlex62Cb, useFlex63Cb, useFlex176Cb, useAboutPageCb, useFlex264Cb, useFlex261Cb, useFlex262Cb, useFlex265Cb, useFlex263Cb, useFlex258Cb, useFlex259Cb, useFlex260Cb, useBrowsePageCb, useFlex290Cb, useFlex291Cb, useFlex288Cb, useFlex285Cb, useFlex279Cb, useFlex271Cb, useFlex267Cb, useFlex272Cb, useFlex268Cb, useFlex280Cb, useFlex273Cb, useFlex269Cb, useFlex274Cb, useFlex270Cb, useFlex289Cb, useFlex286Cb, useFlex281Cb, useFlex275Cb, useFlex282Cb, useFlex276Cb, useFlex287Cb, useFlex283Cb, useFlex277Cb, useFlex284Cb, useFlex278Cb, useTastePageCb, useFlex294Cb, useFlex295Cb, useFlex293Cb, useClientPageCb, useFlex307Cb, useFlex308Cb, useFlex305Cb, useFlex303Cb, useFlex301Cb, useFlex304Cb, useFlex302Cb, useFlex306Cb, useFlex309Cb, useArticlePageCb, useFlex320Cb, useFlex317Cb, useFlex315Cb, useFlex311Cb, useFlex312Cb, useFlex316Cb, useFlex313Cb, useFlex314Cb, useFlex318Cb, useFlex321Cb, useFlex319Cb, useBookingPageCb, useFlex349Cb, useFlex345Cb, useFlex341Cb, useFlex342Cb, useFlex335Cb, useFlex336Cb, useFlex343Cb, useFlex337Cb, useFlex338Cb, useFlex344Cb, useFlex339Cb, useFlex340Cb, useFlex350Cb, useFlex346Cb, useFlex347Cb, useFlex348Cb, useFollowPageCb, useFlex356Cb, useFlex354Cb, useFlex352Cb, useFlex353Cb, useFlex357Cb, useFlex355Cb, useRatingPageCb, useFlex365Cb, useFlex361Cb, useFlex359Cb, useFlex360Cb, useFlex366Cb, useFlex362Cb, useFlex363Cb, useFlex367Cb, useFlex364Cb, useHomeCb, useAboutCb, useMenuCb, usePagesCb, useCartCb, userestImageCb, useOrderCb, useReservateCb, usedescription2Cb, usetext1Cb, usetext2Cb, useButton1Cb, useButton2Cb, useburgerImageCb, usetodayTextCb, usepostmatesCb, useDoordarshCb, userappiCb, usegrubhubCb, useTextBox49Cb, useImage29Cb, useTextBox43Cb, useTextBox44Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useTextBox48Cb, useImage30Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useImage31Cb, useTextBox53Cb, useTextBox54Cb, useTextBox55Cb, useImage32Cb, useButton32Cb, useButton33Cb, useTextBox225Cb, useTextBox226Cb, useButton53Cb, useButton54Cb, useTextBox223Cb, useImage129Cb, useImage130Cb, useImage131Cb, useImage132Cb, useImage133Cb, useTextBox224Cb, useImage126Cb, useTextBox220Cb, useImage127Cb, useTextBox221Cb, useTextBox222Cb, useImage128Cb, useTextBox251Cb, useTextBox252Cb, useButton55Cb, useButton56Cb, useImage134Cb, useTextBox231Cb, useTextBox232Cb, useTextBox227Cb, useTextBox233Cb, useTextBox234Cb, useImage135Cb, useTextBox228Cb, useImage136Cb, useTextBox235Cb, useTextBox236Cb, useTextBox229Cb, useTextBox237Cb, useTextBox238Cb, useImage137Cb, useTextBox230Cb, useImage138Cb, useTextBox243Cb, useTextBox244Cb, useTextBox239Cb, useTextBox245Cb, useTextBox246Cb, useImage139Cb, useTextBox240Cb, useImage140Cb, useTextBox247Cb, useTextBox248Cb, useTextBox241Cb, useTextBox249Cb, useTextBox250Cb, useImage141Cb, useTextBox242Cb, useImage142Cb, useTextBox253Cb, useTextBox254Cb, useButton57Cb, useButton58Cb, useTextBox262Cb, useTextBox263Cb, useButton61Cb, useButton62Cb, useImage151Cb, useTextBox259Cb, useTextBox260Cb, useImage145Cb, useTextBox257Cb, useTextBox258Cb, useImage146Cb, useImage147Cb, useImage148Cb, useImage149Cb, useImage144Cb, useImage150Cb, useTextBox261Cb, useImage152Cb, useTextBox264Cb, useTextBox265Cb, useImage153Cb, useTextBox266Cb, useTextBox267Cb, useImage154Cb, useTextBox268Cb, useTextBox269Cb, useTextBox270Cb, useTextBox271Cb, useImage155Cb, useTextBox272Cb, useTextBox273Cb, useTextBox274Cb, useImage156Cb, useTextBox276Cb, useTextBox275Cb, useButton64Cb, useInput21Cb, useTextBox290Cb, useTextBox284Cb, useInput15Cb, useInput16Cb, useTextBox285Cb, useTextBox286Cb, useInput17Cb, useInput18Cb, useTextBox287Cb, useTextBox288Cb, useInput19Cb, useInput20Cb, useTextBox289Cb, useTextBox294Cb, useTextBox295Cb, useTextBox291Cb, useImage157Cb, useTextBox292Cb, useImage158Cb, useTextBox293Cb, useImage159Cb, useImage164Cb, useImage165Cb, useImage160Cb, useImage161Cb, useImage162Cb, useImage163Cb, useTextBox297Cb, useTextBox296Cb, useTextBox314Cb, useImage166Cb, useImage167Cb, useImage168Cb, useImage169Cb, useTextBox298Cb, useTextBox299Cb, useTextBox300Cb, useTextBox301Cb, useTextBox302Cb, useTextBox303Cb, useTextBox304Cb, useTextBox305Cb, useTextBox306Cb, useTextBox307Cb, useTextBox308Cb, useTextBox309Cb, useTextBox310Cb, useTextBox311Cb, useTextBox312Cb, useTextBox313Cb, useTextBox315Cb, useImage175Cb, useImage170Cb, useImage171Cb, useImage172Cb, useImage173Cb, useImage174Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const headerProps = useStore((state)=>state["Home"]["header"]);
const headerIoProps = useIoStore((state)=>state["Home"]["header"]);
const headerCb = useheaderCb()
const iconBoxProps = useStore((state)=>state["Home"]["iconBox"]);
const iconBoxIoProps = useIoStore((state)=>state["Home"]["iconBox"]);
const iconBoxCb = useiconBoxCb()
const optionsFlexProps = useStore((state)=>state["Home"]["optionsFlex"]);
const optionsFlexIoProps = useIoStore((state)=>state["Home"]["optionsFlex"]);
const optionsFlexCb = useoptionsFlexCb()
const restBoxProps = useStore((state)=>state["Home"]["restBox"]);
const restBoxIoProps = useIoStore((state)=>state["Home"]["restBox"]);
const restBoxCb = userestBoxCb()
const logoProps = useStore((state)=>state["Home"]["logo"]);
const logoIoProps = useIoStore((state)=>state["Home"]["logo"]);
const logoCb = uselogoCb()
const AboutDescProps = useStore((state)=>state["Home"]["AboutDesc"]);
const AboutDescIoProps = useIoStore((state)=>state["Home"]["AboutDesc"]);
const AboutDescCb = useAboutDescCb()
const DescriptionFlexProps = useStore((state)=>state["Home"]["DescriptionFlex"]);
const DescriptionFlexIoProps = useIoStore((state)=>state["Home"]["DescriptionFlex"]);
const DescriptionFlexCb = useDescriptionFlexCb()
const description1Props = useStore((state)=>state["Home"]["description1"]);
const description1IoProps = useIoStore((state)=>state["Home"]["description1"]);
const description1Cb = usedescription1Cb()
const buttonsBoxProps = useStore((state)=>state["Home"]["buttonsBox"]);
const buttonsBoxIoProps = useIoStore((state)=>state["Home"]["buttonsBox"]);
const buttonsBoxCb = usebuttonsBoxCb()
const ButtonsProps = useStore((state)=>state["Home"]["Buttons"]);
const ButtonsIoProps = useIoStore((state)=>state["Home"]["Buttons"]);
const ButtonsCb = useButtonsCb()
const burgerBoxProps = useStore((state)=>state["Home"]["burgerBox"]);
const burgerBoxIoProps = useIoStore((state)=>state["Home"]["burgerBox"]);
const burgerBoxCb = useburgerBoxCb()
const orderFromFlexProps = useStore((state)=>state["Home"]["orderFromFlex"]);
const orderFromFlexIoProps = useIoStore((state)=>state["Home"]["orderFromFlex"]);
const orderFromFlexCb = useorderFromFlexCb()
const AppsProps = useStore((state)=>state["Home"]["Apps"]);
const AppsIoProps = useIoStore((state)=>state["Home"]["Apps"]);
const AppsCb = useAppsCb()
const appsBox1Props = useStore((state)=>state["Home"]["appsBox1"]);
const appsBox1IoProps = useIoStore((state)=>state["Home"]["appsBox1"]);
const appsBox1Cb = useappsBox1Cb()
const appsBox2Props = useStore((state)=>state["Home"]["appsBox2"]);
const appsBox2IoProps = useIoStore((state)=>state["Home"]["appsBox2"]);
const appsBox2Cb = useappsBox2Cb()
const BrowseMenuPageProps = useStore((state)=>state["Home"]["BrowseMenuPage"]);
const BrowseMenuPageIoProps = useIoStore((state)=>state["Home"]["BrowseMenuPage"]);
const BrowseMenuPageCb = useBrowseMenuPageCb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex176Props = useStore((state)=>state["Home"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Home"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const AboutPageProps = useStore((state)=>state["Home"]["AboutPage"]);
const AboutPageIoProps = useIoStore((state)=>state["Home"]["AboutPage"]);
const AboutPageCb = useAboutPageCb()
const Flex264Props = useStore((state)=>state["Home"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["Home"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex261Props = useStore((state)=>state["Home"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["Home"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex262Props = useStore((state)=>state["Home"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["Home"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex265Props = useStore((state)=>state["Home"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["Home"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Flex263Props = useStore((state)=>state["Home"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["Home"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Flex258Props = useStore((state)=>state["Home"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Home"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex259Props = useStore((state)=>state["Home"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["Home"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex260Props = useStore((state)=>state["Home"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["Home"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const BrowsePageProps = useStore((state)=>state["Home"]["BrowsePage"]);
const BrowsePageIoProps = useIoStore((state)=>state["Home"]["BrowsePage"]);
const BrowsePageCb = useBrowsePageCb()
const Flex290Props = useStore((state)=>state["Home"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["Home"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex291Props = useStore((state)=>state["Home"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["Home"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex288Props = useStore((state)=>state["Home"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["Home"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex285Props = useStore((state)=>state["Home"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["Home"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex279Props = useStore((state)=>state["Home"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["Home"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex271Props = useStore((state)=>state["Home"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["Home"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex267Props = useStore((state)=>state["Home"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["Home"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex272Props = useStore((state)=>state["Home"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["Home"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex268Props = useStore((state)=>state["Home"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["Home"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex280Props = useStore((state)=>state["Home"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["Home"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex273Props = useStore((state)=>state["Home"]["Flex273"]);
const Flex273IoProps = useIoStore((state)=>state["Home"]["Flex273"]);
const Flex273Cb = useFlex273Cb()
const Flex269Props = useStore((state)=>state["Home"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["Home"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex274Props = useStore((state)=>state["Home"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["Home"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Flex270Props = useStore((state)=>state["Home"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["Home"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex289Props = useStore((state)=>state["Home"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["Home"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex286Props = useStore((state)=>state["Home"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["Home"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex281Props = useStore((state)=>state["Home"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["Home"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex275Props = useStore((state)=>state["Home"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["Home"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex282Props = useStore((state)=>state["Home"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["Home"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex276Props = useStore((state)=>state["Home"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["Home"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex287Props = useStore((state)=>state["Home"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["Home"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex283Props = useStore((state)=>state["Home"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["Home"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex277Props = useStore((state)=>state["Home"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["Home"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex284Props = useStore((state)=>state["Home"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["Home"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex278Props = useStore((state)=>state["Home"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["Home"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const TastePageProps = useStore((state)=>state["Home"]["TastePage"]);
const TastePageIoProps = useIoStore((state)=>state["Home"]["TastePage"]);
const TastePageCb = useTastePageCb()
const Flex294Props = useStore((state)=>state["Home"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["Home"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex295Props = useStore((state)=>state["Home"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["Home"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Flex293Props = useStore((state)=>state["Home"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["Home"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const ClientPageProps = useStore((state)=>state["Home"]["ClientPage"]);
const ClientPageIoProps = useIoStore((state)=>state["Home"]["ClientPage"]);
const ClientPageCb = useClientPageCb()
const Flex307Props = useStore((state)=>state["Home"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["Home"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex308Props = useStore((state)=>state["Home"]["Flex308"]);
const Flex308IoProps = useIoStore((state)=>state["Home"]["Flex308"]);
const Flex308Cb = useFlex308Cb()
const Flex305Props = useStore((state)=>state["Home"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["Home"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const Flex303Props = useStore((state)=>state["Home"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["Home"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex301Props = useStore((state)=>state["Home"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["Home"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex304Props = useStore((state)=>state["Home"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["Home"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex302Props = useStore((state)=>state["Home"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["Home"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex306Props = useStore((state)=>state["Home"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["Home"]["Flex306"]);
const Flex306Cb = useFlex306Cb()
const Flex309Props = useStore((state)=>state["Home"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["Home"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const ArticlePageProps = useStore((state)=>state["Home"]["ArticlePage"]);
const ArticlePageIoProps = useIoStore((state)=>state["Home"]["ArticlePage"]);
const ArticlePageCb = useArticlePageCb()
const Flex320Props = useStore((state)=>state["Home"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["Home"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex317Props = useStore((state)=>state["Home"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["Home"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex315Props = useStore((state)=>state["Home"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["Home"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex311Props = useStore((state)=>state["Home"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["Home"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const Flex312Props = useStore((state)=>state["Home"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["Home"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const Flex316Props = useStore((state)=>state["Home"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["Home"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Flex313Props = useStore((state)=>state["Home"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["Home"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex314Props = useStore((state)=>state["Home"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["Home"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Flex318Props = useStore((state)=>state["Home"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["Home"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex321Props = useStore((state)=>state["Home"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["Home"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Flex319Props = useStore((state)=>state["Home"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["Home"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const BookingPageProps = useStore((state)=>state["Home"]["BookingPage"]);
const BookingPageIoProps = useIoStore((state)=>state["Home"]["BookingPage"]);
const BookingPageCb = useBookingPageCb()
const Flex349Props = useStore((state)=>state["Home"]["Flex349"]);
const Flex349IoProps = useIoStore((state)=>state["Home"]["Flex349"]);
const Flex349Cb = useFlex349Cb()
const Flex345Props = useStore((state)=>state["Home"]["Flex345"]);
const Flex345IoProps = useIoStore((state)=>state["Home"]["Flex345"]);
const Flex345Cb = useFlex345Cb()
const Flex341Props = useStore((state)=>state["Home"]["Flex341"]);
const Flex341IoProps = useIoStore((state)=>state["Home"]["Flex341"]);
const Flex341Cb = useFlex341Cb()
const Flex342Props = useStore((state)=>state["Home"]["Flex342"]);
const Flex342IoProps = useIoStore((state)=>state["Home"]["Flex342"]);
const Flex342Cb = useFlex342Cb()
const Flex335Props = useStore((state)=>state["Home"]["Flex335"]);
const Flex335IoProps = useIoStore((state)=>state["Home"]["Flex335"]);
const Flex335Cb = useFlex335Cb()
const Flex336Props = useStore((state)=>state["Home"]["Flex336"]);
const Flex336IoProps = useIoStore((state)=>state["Home"]["Flex336"]);
const Flex336Cb = useFlex336Cb()
const Flex343Props = useStore((state)=>state["Home"]["Flex343"]);
const Flex343IoProps = useIoStore((state)=>state["Home"]["Flex343"]);
const Flex343Cb = useFlex343Cb()
const Flex337Props = useStore((state)=>state["Home"]["Flex337"]);
const Flex337IoProps = useIoStore((state)=>state["Home"]["Flex337"]);
const Flex337Cb = useFlex337Cb()
const Flex338Props = useStore((state)=>state["Home"]["Flex338"]);
const Flex338IoProps = useIoStore((state)=>state["Home"]["Flex338"]);
const Flex338Cb = useFlex338Cb()
const Flex344Props = useStore((state)=>state["Home"]["Flex344"]);
const Flex344IoProps = useIoStore((state)=>state["Home"]["Flex344"]);
const Flex344Cb = useFlex344Cb()
const Flex339Props = useStore((state)=>state["Home"]["Flex339"]);
const Flex339IoProps = useIoStore((state)=>state["Home"]["Flex339"]);
const Flex339Cb = useFlex339Cb()
const Flex340Props = useStore((state)=>state["Home"]["Flex340"]);
const Flex340IoProps = useIoStore((state)=>state["Home"]["Flex340"]);
const Flex340Cb = useFlex340Cb()
const Flex350Props = useStore((state)=>state["Home"]["Flex350"]);
const Flex350IoProps = useIoStore((state)=>state["Home"]["Flex350"]);
const Flex350Cb = useFlex350Cb()
const Flex346Props = useStore((state)=>state["Home"]["Flex346"]);
const Flex346IoProps = useIoStore((state)=>state["Home"]["Flex346"]);
const Flex346Cb = useFlex346Cb()
const Flex347Props = useStore((state)=>state["Home"]["Flex347"]);
const Flex347IoProps = useIoStore((state)=>state["Home"]["Flex347"]);
const Flex347Cb = useFlex347Cb()
const Flex348Props = useStore((state)=>state["Home"]["Flex348"]);
const Flex348IoProps = useIoStore((state)=>state["Home"]["Flex348"]);
const Flex348Cb = useFlex348Cb()
const FollowPageProps = useStore((state)=>state["Home"]["FollowPage"]);
const FollowPageIoProps = useIoStore((state)=>state["Home"]["FollowPage"]);
const FollowPageCb = useFollowPageCb()
const Flex356Props = useStore((state)=>state["Home"]["Flex356"]);
const Flex356IoProps = useIoStore((state)=>state["Home"]["Flex356"]);
const Flex356Cb = useFlex356Cb()
const Flex354Props = useStore((state)=>state["Home"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["Home"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const Flex352Props = useStore((state)=>state["Home"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["Home"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Flex353Props = useStore((state)=>state["Home"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["Home"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex357Props = useStore((state)=>state["Home"]["Flex357"]);
const Flex357IoProps = useIoStore((state)=>state["Home"]["Flex357"]);
const Flex357Cb = useFlex357Cb()
const Flex355Props = useStore((state)=>state["Home"]["Flex355"]);
const Flex355IoProps = useIoStore((state)=>state["Home"]["Flex355"]);
const Flex355Cb = useFlex355Cb()
const RatingPageProps = useStore((state)=>state["Home"]["RatingPage"]);
const RatingPageIoProps = useIoStore((state)=>state["Home"]["RatingPage"]);
const RatingPageCb = useRatingPageCb()
const Flex365Props = useStore((state)=>state["Home"]["Flex365"]);
const Flex365IoProps = useIoStore((state)=>state["Home"]["Flex365"]);
const Flex365Cb = useFlex365Cb()
const Flex361Props = useStore((state)=>state["Home"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["Home"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const Flex359Props = useStore((state)=>state["Home"]["Flex359"]);
const Flex359IoProps = useIoStore((state)=>state["Home"]["Flex359"]);
const Flex359Cb = useFlex359Cb()
const Flex360Props = useStore((state)=>state["Home"]["Flex360"]);
const Flex360IoProps = useIoStore((state)=>state["Home"]["Flex360"]);
const Flex360Cb = useFlex360Cb()
const Flex366Props = useStore((state)=>state["Home"]["Flex366"]);
const Flex366IoProps = useIoStore((state)=>state["Home"]["Flex366"]);
const Flex366Cb = useFlex366Cb()
const Flex362Props = useStore((state)=>state["Home"]["Flex362"]);
const Flex362IoProps = useIoStore((state)=>state["Home"]["Flex362"]);
const Flex362Cb = useFlex362Cb()
const Flex363Props = useStore((state)=>state["Home"]["Flex363"]);
const Flex363IoProps = useIoStore((state)=>state["Home"]["Flex363"]);
const Flex363Cb = useFlex363Cb()
const Flex367Props = useStore((state)=>state["Home"]["Flex367"]);
const Flex367IoProps = useIoStore((state)=>state["Home"]["Flex367"]);
const Flex367Cb = useFlex367Cb()
const Flex364Props = useStore((state)=>state["Home"]["Flex364"]);
const Flex364IoProps = useIoStore((state)=>state["Home"]["Flex364"]);
const Flex364Cb = useFlex364Cb()
const HomeProps = useStore((state)=>state["Home"]["Home"]);
const HomeIoProps = useIoStore((state)=>state["Home"]["Home"]);
const HomeCb = useHomeCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const MenuProps = useStore((state)=>state["Home"]["Menu"]);
const MenuIoProps = useIoStore((state)=>state["Home"]["Menu"]);
const MenuCb = useMenuCb()
const PagesProps = useStore((state)=>state["Home"]["Pages"]);
const PagesIoProps = useIoStore((state)=>state["Home"]["Pages"]);
const PagesCb = usePagesCb()
const CartProps = useStore((state)=>state["Home"]["Cart"]);
const CartIoProps = useIoStore((state)=>state["Home"]["Cart"]);
const CartCb = useCartCb()
const restImageProps = useStore((state)=>state["Home"]["restImage"]);
const restImageIoProps = useIoStore((state)=>state["Home"]["restImage"]);
const restImageCb = userestImageCb()
const OrderProps = useStore((state)=>state["Home"]["Order"]);
const OrderIoProps = useIoStore((state)=>state["Home"]["Order"]);
const OrderCb = useOrderCb()
const ReservateProps = useStore((state)=>state["Home"]["Reservate"]);
const ReservateIoProps = useIoStore((state)=>state["Home"]["Reservate"]);
const ReservateCb = useReservateCb()
const description2Props = useStore((state)=>state["Home"]["description2"]);
const description2IoProps = useIoStore((state)=>state["Home"]["description2"]);
const description2Cb = usedescription2Cb()
const text1Props = useStore((state)=>state["Home"]["text1"]);
const text1IoProps = useIoStore((state)=>state["Home"]["text1"]);
const text1Cb = usetext1Cb()
const text2Props = useStore((state)=>state["Home"]["text2"]);
const text2IoProps = useIoStore((state)=>state["Home"]["text2"]);
const text2Cb = usetext2Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const burgerImageProps = useStore((state)=>state["Home"]["burgerImage"]);
const burgerImageIoProps = useIoStore((state)=>state["Home"]["burgerImage"]);
const burgerImageCb = useburgerImageCb()
const todayTextProps = useStore((state)=>state["Home"]["todayText"]);
const todayTextIoProps = useIoStore((state)=>state["Home"]["todayText"]);
const todayTextCb = usetodayTextCb()
const postmatesProps = useStore((state)=>state["Home"]["postmates"]);
const postmatesIoProps = useIoStore((state)=>state["Home"]["postmates"]);
const postmatesCb = usepostmatesCb()
const DoordarshProps = useStore((state)=>state["Home"]["Doordarsh"]);
const DoordarshIoProps = useIoStore((state)=>state["Home"]["Doordarsh"]);
const DoordarshCb = useDoordarshCb()
const rappiProps = useStore((state)=>state["Home"]["rappi"]);
const rappiIoProps = useIoStore((state)=>state["Home"]["rappi"]);
const rappiCb = userappiCb()
const grubhubProps = useStore((state)=>state["Home"]["grubhub"]);
const grubhubIoProps = useIoStore((state)=>state["Home"]["grubhub"]);
const grubhubCb = usegrubhubCb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const Button32Props = useStore((state)=>state["Home"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["Home"]["Button32"]);
const Button32Cb = useButton32Cb()
const Button33Props = useStore((state)=>state["Home"]["Button33"]);
const Button33IoProps = useIoStore((state)=>state["Home"]["Button33"]);
const Button33Cb = useButton33Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const Button53Props = useStore((state)=>state["Home"]["Button53"]);
const Button53IoProps = useIoStore((state)=>state["Home"]["Button53"]);
const Button53Cb = useButton53Cb()
const Button54Props = useStore((state)=>state["Home"]["Button54"]);
const Button54IoProps = useIoStore((state)=>state["Home"]["Button54"]);
const Button54Cb = useButton54Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const Image129Props = useStore((state)=>state["Home"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["Home"]["Image129"]);
const Image129Cb = useImage129Cb()
const Image130Props = useStore((state)=>state["Home"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["Home"]["Image130"]);
const Image130Cb = useImage130Cb()
const Image131Props = useStore((state)=>state["Home"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["Home"]["Image131"]);
const Image131Cb = useImage131Cb()
const Image132Props = useStore((state)=>state["Home"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["Home"]["Image132"]);
const Image132Cb = useImage132Cb()
const Image133Props = useStore((state)=>state["Home"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["Home"]["Image133"]);
const Image133Cb = useImage133Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const Image126Props = useStore((state)=>state["Home"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["Home"]["Image126"]);
const Image126Cb = useImage126Cb()
const TextBox220Props = useStore((state)=>state["Home"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Home"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const Image127Props = useStore((state)=>state["Home"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["Home"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox221Props = useStore((state)=>state["Home"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Home"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["Home"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const Image128Props = useStore((state)=>state["Home"]["Image128"]);
const Image128IoProps = useIoStore((state)=>state["Home"]["Image128"]);
const Image128Cb = useImage128Cb()
const TextBox251Props = useStore((state)=>state["Home"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["Home"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const TextBox252Props = useStore((state)=>state["Home"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["Home"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const Button55Props = useStore((state)=>state["Home"]["Button55"]);
const Button55IoProps = useIoStore((state)=>state["Home"]["Button55"]);
const Button55Cb = useButton55Cb()
const Button56Props = useStore((state)=>state["Home"]["Button56"]);
const Button56IoProps = useIoStore((state)=>state["Home"]["Button56"]);
const Button56Cb = useButton56Cb()
const Image134Props = useStore((state)=>state["Home"]["Image134"]);
const Image134IoProps = useIoStore((state)=>state["Home"]["Image134"]);
const Image134Cb = useImage134Cb()
const TextBox231Props = useStore((state)=>state["Home"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox232Props = useStore((state)=>state["Home"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox233Props = useStore((state)=>state["Home"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["Home"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const TextBox234Props = useStore((state)=>state["Home"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["Home"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const Image135Props = useStore((state)=>state["Home"]["Image135"]);
const Image135IoProps = useIoStore((state)=>state["Home"]["Image135"]);
const Image135Cb = useImage135Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Image136Props = useStore((state)=>state["Home"]["Image136"]);
const Image136IoProps = useIoStore((state)=>state["Home"]["Image136"]);
const Image136Cb = useImage136Cb()
const TextBox235Props = useStore((state)=>state["Home"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["Home"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const TextBox236Props = useStore((state)=>state["Home"]["TextBox236"]);
const TextBox236IoProps = useIoStore((state)=>state["Home"]["TextBox236"]);
const TextBox236Cb = useTextBox236Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox237Props = useStore((state)=>state["Home"]["TextBox237"]);
const TextBox237IoProps = useIoStore((state)=>state["Home"]["TextBox237"]);
const TextBox237Cb = useTextBox237Cb()
const TextBox238Props = useStore((state)=>state["Home"]["TextBox238"]);
const TextBox238IoProps = useIoStore((state)=>state["Home"]["TextBox238"]);
const TextBox238Cb = useTextBox238Cb()
const Image137Props = useStore((state)=>state["Home"]["Image137"]);
const Image137IoProps = useIoStore((state)=>state["Home"]["Image137"]);
const Image137Cb = useImage137Cb()
const TextBox230Props = useStore((state)=>state["Home"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const Image138Props = useStore((state)=>state["Home"]["Image138"]);
const Image138IoProps = useIoStore((state)=>state["Home"]["Image138"]);
const Image138Cb = useImage138Cb()
const TextBox243Props = useStore((state)=>state["Home"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["Home"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const TextBox244Props = useStore((state)=>state["Home"]["TextBox244"]);
const TextBox244IoProps = useIoStore((state)=>state["Home"]["TextBox244"]);
const TextBox244Cb = useTextBox244Cb()
const TextBox239Props = useStore((state)=>state["Home"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["Home"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const TextBox245Props = useStore((state)=>state["Home"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["Home"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const TextBox246Props = useStore((state)=>state["Home"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["Home"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const Image139Props = useStore((state)=>state["Home"]["Image139"]);
const Image139IoProps = useIoStore((state)=>state["Home"]["Image139"]);
const Image139Cb = useImage139Cb()
const TextBox240Props = useStore((state)=>state["Home"]["TextBox240"]);
const TextBox240IoProps = useIoStore((state)=>state["Home"]["TextBox240"]);
const TextBox240Cb = useTextBox240Cb()
const Image140Props = useStore((state)=>state["Home"]["Image140"]);
const Image140IoProps = useIoStore((state)=>state["Home"]["Image140"]);
const Image140Cb = useImage140Cb()
const TextBox247Props = useStore((state)=>state["Home"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["Home"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const TextBox248Props = useStore((state)=>state["Home"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["Home"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const TextBox241Props = useStore((state)=>state["Home"]["TextBox241"]);
const TextBox241IoProps = useIoStore((state)=>state["Home"]["TextBox241"]);
const TextBox241Cb = useTextBox241Cb()
const TextBox249Props = useStore((state)=>state["Home"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["Home"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox250Props = useStore((state)=>state["Home"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["Home"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const Image141Props = useStore((state)=>state["Home"]["Image141"]);
const Image141IoProps = useIoStore((state)=>state["Home"]["Image141"]);
const Image141Cb = useImage141Cb()
const TextBox242Props = useStore((state)=>state["Home"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["Home"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const Image142Props = useStore((state)=>state["Home"]["Image142"]);
const Image142IoProps = useIoStore((state)=>state["Home"]["Image142"]);
const Image142Cb = useImage142Cb()
const TextBox253Props = useStore((state)=>state["Home"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["Home"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox254Props = useStore((state)=>state["Home"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["Home"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const Button57Props = useStore((state)=>state["Home"]["Button57"]);
const Button57IoProps = useIoStore((state)=>state["Home"]["Button57"]);
const Button57Cb = useButton57Cb()
const Button58Props = useStore((state)=>state["Home"]["Button58"]);
const Button58IoProps = useIoStore((state)=>state["Home"]["Button58"]);
const Button58Cb = useButton58Cb()
const TextBox262Props = useStore((state)=>state["Home"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["Home"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const TextBox263Props = useStore((state)=>state["Home"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["Home"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const Button61Props = useStore((state)=>state["Home"]["Button61"]);
const Button61IoProps = useIoStore((state)=>state["Home"]["Button61"]);
const Button61Cb = useButton61Cb()
const Button62Props = useStore((state)=>state["Home"]["Button62"]);
const Button62IoProps = useIoStore((state)=>state["Home"]["Button62"]);
const Button62Cb = useButton62Cb()
const Image151Props = useStore((state)=>state["Home"]["Image151"]);
const Image151IoProps = useIoStore((state)=>state["Home"]["Image151"]);
const Image151Cb = useImage151Cb()
const TextBox259Props = useStore((state)=>state["Home"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["Home"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox260Props = useStore((state)=>state["Home"]["TextBox260"]);
const TextBox260IoProps = useIoStore((state)=>state["Home"]["TextBox260"]);
const TextBox260Cb = useTextBox260Cb()
const Image145Props = useStore((state)=>state["Home"]["Image145"]);
const Image145IoProps = useIoStore((state)=>state["Home"]["Image145"]);
const Image145Cb = useImage145Cb()
const TextBox257Props = useStore((state)=>state["Home"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Home"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox258Props = useStore((state)=>state["Home"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["Home"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const Image146Props = useStore((state)=>state["Home"]["Image146"]);
const Image146IoProps = useIoStore((state)=>state["Home"]["Image146"]);
const Image146Cb = useImage146Cb()
const Image147Props = useStore((state)=>state["Home"]["Image147"]);
const Image147IoProps = useIoStore((state)=>state["Home"]["Image147"]);
const Image147Cb = useImage147Cb()
const Image148Props = useStore((state)=>state["Home"]["Image148"]);
const Image148IoProps = useIoStore((state)=>state["Home"]["Image148"]);
const Image148Cb = useImage148Cb()
const Image149Props = useStore((state)=>state["Home"]["Image149"]);
const Image149IoProps = useIoStore((state)=>state["Home"]["Image149"]);
const Image149Cb = useImage149Cb()
const Image144Props = useStore((state)=>state["Home"]["Image144"]);
const Image144IoProps = useIoStore((state)=>state["Home"]["Image144"]);
const Image144Cb = useImage144Cb()
const Image150Props = useStore((state)=>state["Home"]["Image150"]);
const Image150IoProps = useIoStore((state)=>state["Home"]["Image150"]);
const Image150Cb = useImage150Cb()
const TextBox261Props = useStore((state)=>state["Home"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["Home"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const Image152Props = useStore((state)=>state["Home"]["Image152"]);
const Image152IoProps = useIoStore((state)=>state["Home"]["Image152"]);
const Image152Cb = useImage152Cb()
const TextBox264Props = useStore((state)=>state["Home"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["Home"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const TextBox265Props = useStore((state)=>state["Home"]["TextBox265"]);
const TextBox265IoProps = useIoStore((state)=>state["Home"]["TextBox265"]);
const TextBox265Cb = useTextBox265Cb()
const Image153Props = useStore((state)=>state["Home"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["Home"]["Image153"]);
const Image153Cb = useImage153Cb()
const TextBox266Props = useStore((state)=>state["Home"]["TextBox266"]);
const TextBox266IoProps = useIoStore((state)=>state["Home"]["TextBox266"]);
const TextBox266Cb = useTextBox266Cb()
const TextBox267Props = useStore((state)=>state["Home"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["Home"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()
const Image154Props = useStore((state)=>state["Home"]["Image154"]);
const Image154IoProps = useIoStore((state)=>state["Home"]["Image154"]);
const Image154Cb = useImage154Cb()
const TextBox268Props = useStore((state)=>state["Home"]["TextBox268"]);
const TextBox268IoProps = useIoStore((state)=>state["Home"]["TextBox268"]);
const TextBox268Cb = useTextBox268Cb()
const TextBox269Props = useStore((state)=>state["Home"]["TextBox269"]);
const TextBox269IoProps = useIoStore((state)=>state["Home"]["TextBox269"]);
const TextBox269Cb = useTextBox269Cb()
const TextBox270Props = useStore((state)=>state["Home"]["TextBox270"]);
const TextBox270IoProps = useIoStore((state)=>state["Home"]["TextBox270"]);
const TextBox270Cb = useTextBox270Cb()
const TextBox271Props = useStore((state)=>state["Home"]["TextBox271"]);
const TextBox271IoProps = useIoStore((state)=>state["Home"]["TextBox271"]);
const TextBox271Cb = useTextBox271Cb()
const Image155Props = useStore((state)=>state["Home"]["Image155"]);
const Image155IoProps = useIoStore((state)=>state["Home"]["Image155"]);
const Image155Cb = useImage155Cb()
const TextBox272Props = useStore((state)=>state["Home"]["TextBox272"]);
const TextBox272IoProps = useIoStore((state)=>state["Home"]["TextBox272"]);
const TextBox272Cb = useTextBox272Cb()
const TextBox273Props = useStore((state)=>state["Home"]["TextBox273"]);
const TextBox273IoProps = useIoStore((state)=>state["Home"]["TextBox273"]);
const TextBox273Cb = useTextBox273Cb()
const TextBox274Props = useStore((state)=>state["Home"]["TextBox274"]);
const TextBox274IoProps = useIoStore((state)=>state["Home"]["TextBox274"]);
const TextBox274Cb = useTextBox274Cb()
const Image156Props = useStore((state)=>state["Home"]["Image156"]);
const Image156IoProps = useIoStore((state)=>state["Home"]["Image156"]);
const Image156Cb = useImage156Cb()
const TextBox276Props = useStore((state)=>state["Home"]["TextBox276"]);
const TextBox276IoProps = useIoStore((state)=>state["Home"]["TextBox276"]);
const TextBox276Cb = useTextBox276Cb()
const TextBox275Props = useStore((state)=>state["Home"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["Home"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const Button64Props = useStore((state)=>state["Home"]["Button64"]);
const Button64IoProps = useIoStore((state)=>state["Home"]["Button64"]);
const Button64Cb = useButton64Cb()
const Input21Props = useStore((state)=>state["Home"]["Input21"]);
const Input21IoProps = useIoStore((state)=>state["Home"]["Input21"]);
const Input21Cb = useInput21Cb()
const TextBox290Props = useStore((state)=>state["Home"]["TextBox290"]);
const TextBox290IoProps = useIoStore((state)=>state["Home"]["TextBox290"]);
const TextBox290Cb = useTextBox290Cb()
const TextBox284Props = useStore((state)=>state["Home"]["TextBox284"]);
const TextBox284IoProps = useIoStore((state)=>state["Home"]["TextBox284"]);
const TextBox284Cb = useTextBox284Cb()
const Input15Props = useStore((state)=>state["Home"]["Input15"]);
const Input15IoProps = useIoStore((state)=>state["Home"]["Input15"]);
const Input15Cb = useInput15Cb()
const Input16Props = useStore((state)=>state["Home"]["Input16"]);
const Input16IoProps = useIoStore((state)=>state["Home"]["Input16"]);
const Input16Cb = useInput16Cb()
const TextBox285Props = useStore((state)=>state["Home"]["TextBox285"]);
const TextBox285IoProps = useIoStore((state)=>state["Home"]["TextBox285"]);
const TextBox285Cb = useTextBox285Cb()
const TextBox286Props = useStore((state)=>state["Home"]["TextBox286"]);
const TextBox286IoProps = useIoStore((state)=>state["Home"]["TextBox286"]);
const TextBox286Cb = useTextBox286Cb()
const Input17Props = useStore((state)=>state["Home"]["Input17"]);
const Input17IoProps = useIoStore((state)=>state["Home"]["Input17"]);
const Input17Cb = useInput17Cb()
const Input18Props = useStore((state)=>state["Home"]["Input18"]);
const Input18IoProps = useIoStore((state)=>state["Home"]["Input18"]);
const Input18Cb = useInput18Cb()
const TextBox287Props = useStore((state)=>state["Home"]["TextBox287"]);
const TextBox287IoProps = useIoStore((state)=>state["Home"]["TextBox287"]);
const TextBox287Cb = useTextBox287Cb()
const TextBox288Props = useStore((state)=>state["Home"]["TextBox288"]);
const TextBox288IoProps = useIoStore((state)=>state["Home"]["TextBox288"]);
const TextBox288Cb = useTextBox288Cb()
const Input19Props = useStore((state)=>state["Home"]["Input19"]);
const Input19IoProps = useIoStore((state)=>state["Home"]["Input19"]);
const Input19Cb = useInput19Cb()
const Input20Props = useStore((state)=>state["Home"]["Input20"]);
const Input20IoProps = useIoStore((state)=>state["Home"]["Input20"]);
const Input20Cb = useInput20Cb()
const TextBox289Props = useStore((state)=>state["Home"]["TextBox289"]);
const TextBox289IoProps = useIoStore((state)=>state["Home"]["TextBox289"]);
const TextBox289Cb = useTextBox289Cb()
const TextBox294Props = useStore((state)=>state["Home"]["TextBox294"]);
const TextBox294IoProps = useIoStore((state)=>state["Home"]["TextBox294"]);
const TextBox294Cb = useTextBox294Cb()
const TextBox295Props = useStore((state)=>state["Home"]["TextBox295"]);
const TextBox295IoProps = useIoStore((state)=>state["Home"]["TextBox295"]);
const TextBox295Cb = useTextBox295Cb()
const TextBox291Props = useStore((state)=>state["Home"]["TextBox291"]);
const TextBox291IoProps = useIoStore((state)=>state["Home"]["TextBox291"]);
const TextBox291Cb = useTextBox291Cb()
const Image157Props = useStore((state)=>state["Home"]["Image157"]);
const Image157IoProps = useIoStore((state)=>state["Home"]["Image157"]);
const Image157Cb = useImage157Cb()
const TextBox292Props = useStore((state)=>state["Home"]["TextBox292"]);
const TextBox292IoProps = useIoStore((state)=>state["Home"]["TextBox292"]);
const TextBox292Cb = useTextBox292Cb()
const Image158Props = useStore((state)=>state["Home"]["Image158"]);
const Image158IoProps = useIoStore((state)=>state["Home"]["Image158"]);
const Image158Cb = useImage158Cb()
const TextBox293Props = useStore((state)=>state["Home"]["TextBox293"]);
const TextBox293IoProps = useIoStore((state)=>state["Home"]["TextBox293"]);
const TextBox293Cb = useTextBox293Cb()
const Image159Props = useStore((state)=>state["Home"]["Image159"]);
const Image159IoProps = useIoStore((state)=>state["Home"]["Image159"]);
const Image159Cb = useImage159Cb()
const Image164Props = useStore((state)=>state["Home"]["Image164"]);
const Image164IoProps = useIoStore((state)=>state["Home"]["Image164"]);
const Image164Cb = useImage164Cb()
const Image165Props = useStore((state)=>state["Home"]["Image165"]);
const Image165IoProps = useIoStore((state)=>state["Home"]["Image165"]);
const Image165Cb = useImage165Cb()
const Image160Props = useStore((state)=>state["Home"]["Image160"]);
const Image160IoProps = useIoStore((state)=>state["Home"]["Image160"]);
const Image160Cb = useImage160Cb()
const Image161Props = useStore((state)=>state["Home"]["Image161"]);
const Image161IoProps = useIoStore((state)=>state["Home"]["Image161"]);
const Image161Cb = useImage161Cb()
const Image162Props = useStore((state)=>state["Home"]["Image162"]);
const Image162IoProps = useIoStore((state)=>state["Home"]["Image162"]);
const Image162Cb = useImage162Cb()
const Image163Props = useStore((state)=>state["Home"]["Image163"]);
const Image163IoProps = useIoStore((state)=>state["Home"]["Image163"]);
const Image163Cb = useImage163Cb()
const TextBox297Props = useStore((state)=>state["Home"]["TextBox297"]);
const TextBox297IoProps = useIoStore((state)=>state["Home"]["TextBox297"]);
const TextBox297Cb = useTextBox297Cb()
const TextBox296Props = useStore((state)=>state["Home"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["Home"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const TextBox314Props = useStore((state)=>state["Home"]["TextBox314"]);
const TextBox314IoProps = useIoStore((state)=>state["Home"]["TextBox314"]);
const TextBox314Cb = useTextBox314Cb()
const Image166Props = useStore((state)=>state["Home"]["Image166"]);
const Image166IoProps = useIoStore((state)=>state["Home"]["Image166"]);
const Image166Cb = useImage166Cb()
const Image167Props = useStore((state)=>state["Home"]["Image167"]);
const Image167IoProps = useIoStore((state)=>state["Home"]["Image167"]);
const Image167Cb = useImage167Cb()
const Image168Props = useStore((state)=>state["Home"]["Image168"]);
const Image168IoProps = useIoStore((state)=>state["Home"]["Image168"]);
const Image168Cb = useImage168Cb()
const Image169Props = useStore((state)=>state["Home"]["Image169"]);
const Image169IoProps = useIoStore((state)=>state["Home"]["Image169"]);
const Image169Cb = useImage169Cb()
const TextBox298Props = useStore((state)=>state["Home"]["TextBox298"]);
const TextBox298IoProps = useIoStore((state)=>state["Home"]["TextBox298"]);
const TextBox298Cb = useTextBox298Cb()
const TextBox299Props = useStore((state)=>state["Home"]["TextBox299"]);
const TextBox299IoProps = useIoStore((state)=>state["Home"]["TextBox299"]);
const TextBox299Cb = useTextBox299Cb()
const TextBox300Props = useStore((state)=>state["Home"]["TextBox300"]);
const TextBox300IoProps = useIoStore((state)=>state["Home"]["TextBox300"]);
const TextBox300Cb = useTextBox300Cb()
const TextBox301Props = useStore((state)=>state["Home"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["Home"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const TextBox302Props = useStore((state)=>state["Home"]["TextBox302"]);
const TextBox302IoProps = useIoStore((state)=>state["Home"]["TextBox302"]);
const TextBox302Cb = useTextBox302Cb()
const TextBox303Props = useStore((state)=>state["Home"]["TextBox303"]);
const TextBox303IoProps = useIoStore((state)=>state["Home"]["TextBox303"]);
const TextBox303Cb = useTextBox303Cb()
const TextBox304Props = useStore((state)=>state["Home"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["Home"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const TextBox305Props = useStore((state)=>state["Home"]["TextBox305"]);
const TextBox305IoProps = useIoStore((state)=>state["Home"]["TextBox305"]);
const TextBox305Cb = useTextBox305Cb()
const TextBox306Props = useStore((state)=>state["Home"]["TextBox306"]);
const TextBox306IoProps = useIoStore((state)=>state["Home"]["TextBox306"]);
const TextBox306Cb = useTextBox306Cb()
const TextBox307Props = useStore((state)=>state["Home"]["TextBox307"]);
const TextBox307IoProps = useIoStore((state)=>state["Home"]["TextBox307"]);
const TextBox307Cb = useTextBox307Cb()
const TextBox308Props = useStore((state)=>state["Home"]["TextBox308"]);
const TextBox308IoProps = useIoStore((state)=>state["Home"]["TextBox308"]);
const TextBox308Cb = useTextBox308Cb()
const TextBox309Props = useStore((state)=>state["Home"]["TextBox309"]);
const TextBox309IoProps = useIoStore((state)=>state["Home"]["TextBox309"]);
const TextBox309Cb = useTextBox309Cb()
const TextBox310Props = useStore((state)=>state["Home"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["Home"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const TextBox311Props = useStore((state)=>state["Home"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["Home"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const TextBox312Props = useStore((state)=>state["Home"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["Home"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const TextBox313Props = useStore((state)=>state["Home"]["TextBox313"]);
const TextBox313IoProps = useIoStore((state)=>state["Home"]["TextBox313"]);
const TextBox313Cb = useTextBox313Cb()
const TextBox315Props = useStore((state)=>state["Home"]["TextBox315"]);
const TextBox315IoProps = useIoStore((state)=>state["Home"]["TextBox315"]);
const TextBox315Cb = useTextBox315Cb()
const Image175Props = useStore((state)=>state["Home"]["Image175"]);
const Image175IoProps = useIoStore((state)=>state["Home"]["Image175"]);
const Image175Cb = useImage175Cb()
const Image170Props = useStore((state)=>state["Home"]["Image170"]);
const Image170IoProps = useIoStore((state)=>state["Home"]["Image170"]);
const Image170Cb = useImage170Cb()
const Image171Props = useStore((state)=>state["Home"]["Image171"]);
const Image171IoProps = useIoStore((state)=>state["Home"]["Image171"]);
const Image171Cb = useImage171Cb()
const Image172Props = useStore((state)=>state["Home"]["Image172"]);
const Image172IoProps = useIoStore((state)=>state["Home"]["Image172"]);
const Image172Cb = useImage172Cb()
const Image173Props = useStore((state)=>state["Home"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["Home"]["Image173"]);
const Image173Cb = useImage173Cb()
const Image174Props = useStore((state)=>state["Home"]["Image174"]);
const Image174IoProps = useIoStore((state)=>state["Home"]["Image174"]);
const Image174Cb = useImage174Cb()

  return (<>
  <Flex className="p-Home header bpt" {...headerProps} {...headerCb} {...headerIoProps}>
<Flex className="p-Home iconBox bpt" {...iconBoxProps} {...iconBoxCb} {...iconBoxIoProps}>
<Flex className="p-Home restBox bpt" {...restBoxProps} {...restBoxCb} {...restBoxIoProps}>
<Image className="p-Home restImage bpt" {...restImageProps} {...restImageCb} {...restImageIoProps}/>
</Flex>
<Flex className="p-Home optionsFlex bpt" {...optionsFlexProps} {...optionsFlexCb} {...optionsFlexIoProps}>
<TextBox className="p-Home Home bpt" {...HomeProps} {...HomeCb} {...HomeIoProps}/>
<TextBox className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<TextBox className="p-Home Menu bpt" {...MenuProps} {...MenuCb} {...MenuIoProps}/>
<TextBox className="p-Home Pages bpt" {...PagesProps} {...PagesCb} {...PagesIoProps}/>
<TextBox className="p-Home Cart bpt" {...CartProps} {...CartCb} {...CartIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home logo bpt" {...logoProps} {...logoCb} {...logoIoProps}>
<Button className="p-Home Order bpt" {...OrderProps} {...OrderCb} {...OrderIoProps}/>
<Button className="p-Home Reservate bpt" {...ReservateProps} {...ReservateCb} {...ReservateIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home AboutDesc bpt" {...AboutDescProps} {...AboutDescCb} {...AboutDescIoProps}>
<Flex className="p-Home DescriptionFlex bpt" {...DescriptionFlexProps} {...DescriptionFlexCb} {...DescriptionFlexIoProps}>
<Flex className="p-Home description1 bpt" {...description1Props} {...description1Cb} {...description1IoProps}>
<TextBox className="p-Home text1 bpt" {...text1Props} {...text1Cb} {...text1IoProps}/>
<TextBox className="p-Home text2 bpt" {...text2Props} {...text2Cb} {...text2IoProps}/>
</Flex>
<TextBox className="p-Home description2 bpt" {...description2Props} {...description2Cb} {...description2IoProps}/>
<Flex className="p-Home buttonsBox bpt" {...buttonsBoxProps} {...buttonsBoxCb} {...buttonsBoxIoProps}>
<Flex className="p-Home Buttons bpt" {...ButtonsProps} {...ButtonsCb} {...ButtonsIoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home burgerBox bpt" {...burgerBoxProps} {...burgerBoxCb} {...burgerBoxIoProps}>
<Image className="p-Home burgerImage bpt" {...burgerImageProps} {...burgerImageCb} {...burgerImageIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home orderFromFlex bpt" {...orderFromFlexProps} {...orderFromFlexCb} {...orderFromFlexIoProps}>
<TextBox className="p-Home todayText bpt" {...todayTextProps} {...todayTextCb} {...todayTextIoProps}/>
<Flex className="p-Home Apps bpt" {...AppsProps} {...AppsCb} {...AppsIoProps}>
<Flex className="p-Home appsBox1 bpt" {...appsBox1Props} {...appsBox1Cb} {...appsBox1IoProps}>
<Image className="p-Home Doordarsh bpt" {...DoordarshProps} {...DoordarshCb} {...DoordarshIoProps}/>
<Image className="p-Home postmates bpt" {...postmatesProps} {...postmatesCb} {...postmatesIoProps}/>
</Flex>
<Flex className="p-Home appsBox2 bpt" {...appsBox2Props} {...appsBox2Cb} {...appsBox2IoProps}>
<Image className="p-Home rappi bpt" {...rappiProps} {...rappiCb} {...rappiIoProps}/>
<Image className="p-Home grubhub bpt" {...grubhubProps} {...grubhubCb} {...grubhubIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home BrowseMenuPage bpt" {...BrowseMenuPageProps} {...BrowseMenuPageCb} {...BrowseMenuPageIoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Flex>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<Button className="p-Home Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
<Button className="p-Home Button33 bpt" {...Button33Props} {...Button33Cb} {...Button33IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home AboutPage bpt" {...AboutPageProps} {...AboutPageCb} {...AboutPageIoProps}>
<Flex className="p-Home Flex265 bpt" {...Flex265Props} {...Flex265Cb} {...Flex265IoProps}>
<Image className="p-Home Image130 bpt" {...Image130Props} {...Image130Cb} {...Image130IoProps}/>
<Image className="p-Home Image133 bpt" {...Image133Props} {...Image133Cb} {...Image133IoProps}/>
<Image className="p-Home Image129 bpt" {...Image129Props} {...Image129Cb} {...Image129IoProps}/>
<Image className="p-Home Image131 bpt" {...Image131Props} {...Image131Cb} {...Image131IoProps}/>
<Image className="p-Home Image132 bpt" {...Image132Props} {...Image132Cb} {...Image132IoProps}/>
<Flex className="p-Home Flex263 bpt" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<TextBox className="p-Home TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<Flex className="p-Home Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Image className="p-Home Image128 bpt" {...Image128Props} {...Image128Cb} {...Image128IoProps}/>
<TextBox className="p-Home TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
</Flex>
<Flex className="p-Home Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<Image className="p-Home Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
<TextBox className="p-Home TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
</Flex>
<Flex className="p-Home Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Image className="p-Home Image126 bpt" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
<TextBox className="p-Home TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<Flex className="p-Home Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<TextBox className="p-Home TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
</Flex>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<Flex className="p-Home Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Button className="p-Home Button54 bpt" {...Button54Props} {...Button54Cb} {...Button54IoProps}/>
<Button className="p-Home Button53 bpt" {...Button53Props} {...Button53Cb} {...Button53IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home BrowsePage bpt" {...BrowsePageProps} {...BrowsePageCb} {...BrowsePageIoProps}>
<TextBox className="p-Home TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
<TextBox className="p-Home TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
<Flex className="p-Home Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<Flex className="p-Home Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<Flex className="p-Home Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Flex className="p-Home Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Flex className="p-Home Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<TextBox className="p-Home TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
</Flex>
<Image className="p-Home Image141 bpt" {...Image141Props} {...Image141Cb} {...Image141IoProps}/>
<TextBox className="p-Home TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<TextBox className="p-Home TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
</Flex>
<Flex className="p-Home Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Flex className="p-Home Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox className="p-Home TextBox241 bpt" {...TextBox241Props} {...TextBox241Cb} {...TextBox241IoProps}/>
</Flex>
<Image className="p-Home Image140 bpt" {...Image140Props} {...Image140Cb} {...Image140IoProps}/>
<TextBox className="p-Home TextBox247 bpt" {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
<TextBox className="p-Home TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<Flex className="p-Home Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<Flex className="p-Home Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<TextBox className="p-Home TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
</Flex>
<Image className="p-Home Image138 bpt" {...Image138Props} {...Image138Cb} {...Image138IoProps}/>
<TextBox className="p-Home TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
<TextBox className="p-Home TextBox244 bpt" {...TextBox244Props} {...TextBox244Cb} {...TextBox244IoProps}/>
</Flex>
<Flex className="p-Home Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Flex className="p-Home Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<TextBox className="p-Home TextBox240 bpt" {...TextBox240Props} {...TextBox240Cb} {...TextBox240IoProps}/>
</Flex>
<Image className="p-Home Image139 bpt" {...Image139Props} {...Image139Cb} {...Image139IoProps}/>
<TextBox className="p-Home TextBox246 bpt" {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
<TextBox className="p-Home TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<Flex className="p-Home Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<Flex className="p-Home Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<Flex className="p-Home Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<Flex className="p-Home Flex267 bpt" {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}>
<TextBox className="p-Home TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
</Flex>
<Image className="p-Home Image134 bpt" {...Image134Props} {...Image134Cb} {...Image134IoProps}/>
<TextBox className="p-Home TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<TextBox className="p-Home TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
</Flex>
<Flex className="p-Home Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<Flex className="p-Home Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<TextBox className="p-Home TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
</Flex>
<Image className="p-Home Image135 bpt" {...Image135Props} {...Image135Cb} {...Image135IoProps}/>
<TextBox className="p-Home TextBox234 bpt" {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
<TextBox className="p-Home TextBox233 bpt" {...TextBox233Props} {...TextBox233Cb} {...TextBox233IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Flex className="p-Home Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<Flex className="p-Home Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<TextBox className="p-Home TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
</Flex>
<Image className="p-Home Image137 bpt" {...Image137Props} {...Image137Cb} {...Image137IoProps}/>
<TextBox className="p-Home TextBox238 bpt" {...TextBox238Props} {...TextBox238Cb} {...TextBox238IoProps}/>
<TextBox className="p-Home TextBox237 bpt" {...TextBox237Props} {...TextBox237Cb} {...TextBox237IoProps}/>
</Flex>
<Flex className="p-Home Flex273 bpt" {...Flex273Props} {...Flex273Cb} {...Flex273IoProps}>
<Flex className="p-Home Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<TextBox className="p-Home TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
</Flex>
<Image className="p-Home Image136 bpt" {...Image136Props} {...Image136Cb} {...Image136IoProps}/>
<TextBox className="p-Home TextBox235 bpt" {...TextBox235Props} {...TextBox235Cb} {...TextBox235IoProps}/>
<TextBox className="p-Home TextBox236 bpt" {...TextBox236Props} {...TextBox236Cb} {...TextBox236IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex290 bpt" {...Flex290Props} {...Flex290Cb} {...Flex290IoProps}>
<Button className="p-Home Button55 bpt" {...Button55Props} {...Button55Cb} {...Button55IoProps}/>
<Button className="p-Home Button56 bpt" {...Button56Props} {...Button56Cb} {...Button56IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home TastePage bpt" {...TastePageProps} {...TastePageCb} {...TastePageIoProps}>
<Flex className="p-Home Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<TextBox className="p-Home TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
<TextBox className="p-Home TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<Flex className="p-Home Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<Button className="p-Home Button58 bpt" {...Button58Props} {...Button58Cb} {...Button58IoProps}/>
<Button className="p-Home Button57 bpt" {...Button57Props} {...Button57Cb} {...Button57IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<Image className="p-Home Image142 bpt" {...Image142Props} {...Image142Cb} {...Image142IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ClientPage bpt" {...ClientPageProps} {...ClientPageCb} {...ClientPageIoProps}>
<Flex className="p-Home Flex309 bpt" {...Flex309Props} {...Flex309Cb} {...Flex309IoProps}>
<TextBox className="p-Home TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
</Flex>
<TextBox className="p-Home TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
<TextBox className="p-Home TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
<Flex className="p-Home Flex308 bpt" {...Flex308Props} {...Flex308Cb} {...Flex308IoProps}>
<Flex className="p-Home Flex306 bpt" {...Flex306Props} {...Flex306Cb} {...Flex306IoProps}>
<Image className="p-Home Image150 bpt" {...Image150Props} {...Image150Cb} {...Image150IoProps}/>
</Flex>
<Flex className="p-Home Flex305 bpt" {...Flex305Props} {...Flex305Cb} {...Flex305IoProps}>
<Flex className="p-Home Flex304 bpt" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<Flex className="p-Home Flex302 bpt" {...Flex302Props} {...Flex302Cb} {...Flex302IoProps}>
<Image className="p-Home Image144 bpt" {...Image144Props} {...Image144Cb} {...Image144IoProps}/>
</Flex>
<Image className="p-Home Image149 bpt" {...Image149Props} {...Image149Cb} {...Image149IoProps}/>
<Image className="p-Home Image148 bpt" {...Image148Props} {...Image148Cb} {...Image148IoProps}/>
<Image className="p-Home Image147 bpt" {...Image147Props} {...Image147Cb} {...Image147IoProps}/>
<Image className="p-Home Image146 bpt" {...Image146Props} {...Image146Cb} {...Image146IoProps}/>
</Flex>
<TextBox className="p-Home TextBox260 bpt" {...TextBox260Props} {...TextBox260Cb} {...TextBox260IoProps}/>
<TextBox className="p-Home TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
<Flex className="p-Home Flex303 bpt" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<Image className="p-Home Image145 bpt" {...Image145Props} {...Image145Cb} {...Image145IoProps}/>
<Flex className="p-Home Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<TextBox className="p-Home TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<TextBox className="p-Home TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
</Flex>
</Flex>
</Flex>
<Image className="p-Home Image151 bpt" {...Image151Props} {...Image151Cb} {...Image151IoProps}/>
</Flex>
<Flex className="p-Home Flex307 bpt" {...Flex307Props} {...Flex307Cb} {...Flex307IoProps}>
<Button className="p-Home Button62 bpt" {...Button62Props} {...Button62Cb} {...Button62IoProps}/>
<Button className="p-Home Button61 bpt" {...Button61Props} {...Button61Cb} {...Button61IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ArticlePage bpt" {...ArticlePageProps} {...ArticlePageCb} {...ArticlePageIoProps}>
<Flex className="p-Home Flex321 bpt" {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<TextBox className="p-Home TextBox276 bpt" {...TextBox276Props} {...TextBox276Cb} {...TextBox276IoProps}/>
<Flex className="p-Home Flex319 bpt" {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<TextBox className="p-Home TextBox275 bpt" {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex320 bpt" {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<Flex className="p-Home Flex318 bpt" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Image className="p-Home Image156 bpt" {...Image156Props} {...Image156Cb} {...Image156IoProps}/>
<TextBox className="p-Home TextBox274 bpt" {...TextBox274Props} {...TextBox274Cb} {...TextBox274IoProps}/>
<TextBox className="p-Home TextBox273 bpt" {...TextBox273Props} {...TextBox273Cb} {...TextBox273IoProps}/>
<TextBox className="p-Home TextBox272 bpt" {...TextBox272Props} {...TextBox272Cb} {...TextBox272IoProps}/>
</Flex>
<Flex className="p-Home Flex317 bpt" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Flex className="p-Home Flex316 bpt" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Flex className="p-Home Flex313 bpt" {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Image className="p-Home Image154 bpt" {...Image154Props} {...Image154Cb} {...Image154IoProps}/>
<TextBox className="p-Home TextBox268 bpt" {...TextBox268Props} {...TextBox268Cb} {...TextBox268IoProps}/>
<TextBox className="p-Home TextBox269 bpt" {...TextBox269Props} {...TextBox269Cb} {...TextBox269IoProps}/>
</Flex>
<Flex className="p-Home Flex314 bpt" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Image className="p-Home Image155 bpt" {...Image155Props} {...Image155Cb} {...Image155IoProps}/>
<TextBox className="p-Home TextBox271 bpt" {...TextBox271Props} {...TextBox271Cb} {...TextBox271IoProps}/>
<TextBox className="p-Home TextBox270 bpt" {...TextBox270Props} {...TextBox270Cb} {...TextBox270IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex315 bpt" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Flex className="p-Home Flex312 bpt" {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<Image className="p-Home Image153 bpt" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
<TextBox className="p-Home TextBox266 bpt" {...TextBox266Props} {...TextBox266Cb} {...TextBox266IoProps}/>
<TextBox className="p-Home TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
</Flex>
<Flex className="p-Home Flex311 bpt" {...Flex311Props} {...Flex311Cb} {...Flex311IoProps}>
<Image className="p-Home Image152 bpt" {...Image152Props} {...Image152Cb} {...Image152IoProps}/>
<TextBox className="p-Home TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
<TextBox className="p-Home TextBox265 bpt" {...TextBox265Props} {...TextBox265Cb} {...TextBox265IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home BookingPage bpt" {...BookingPageProps} {...BookingPageCb} {...BookingPageIoProps}>
<Flex className="p-Home Flex350 bpt" {...Flex350Props} {...Flex350Cb} {...Flex350IoProps}>
<TextBox className="p-Home TextBox295 bpt" {...TextBox295Props} {...TextBox295Cb} {...TextBox295IoProps}/>
<TextBox className="p-Home TextBox294 bpt" {...TextBox294Props} {...TextBox294Cb} {...TextBox294IoProps}/>
<Flex className="p-Home Flex348 bpt" {...Flex348Props} {...Flex348Cb} {...Flex348IoProps}>
<Image className="p-Home Image159 bpt" {...Image159Props} {...Image159Cb} {...Image159IoProps}/>
<TextBox className="p-Home TextBox293 bpt" {...TextBox293Props} {...TextBox293Cb} {...TextBox293IoProps}/>
</Flex>
<Flex className="p-Home Flex347 bpt" {...Flex347Props} {...Flex347Cb} {...Flex347IoProps}>
<Image className="p-Home Image158 bpt" {...Image158Props} {...Image158Cb} {...Image158IoProps}/>
<TextBox className="p-Home TextBox292 bpt" {...TextBox292Props} {...TextBox292Cb} {...TextBox292IoProps}/>
</Flex>
<Flex className="p-Home Flex346 bpt" {...Flex346Props} {...Flex346Cb} {...Flex346IoProps}>
<Image className="p-Home Image157 bpt" {...Image157Props} {...Image157Cb} {...Image157IoProps}/>
<TextBox className="p-Home TextBox291 bpt" {...TextBox291Props} {...TextBox291Cb} {...TextBox291IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex349 bpt" {...Flex349Props} {...Flex349Cb} {...Flex349IoProps}>
<Flex className="p-Home Flex345 bpt" {...Flex345Props} {...Flex345Cb} {...Flex345IoProps}>
<Flex className="p-Home Flex342 bpt" {...Flex342Props} {...Flex342Cb} {...Flex342IoProps}>
<Flex className="p-Home Flex335 bpt" {...Flex335Props} {...Flex335Cb} {...Flex335IoProps}>
<TextBox className="p-Home TextBox284 bpt" {...TextBox284Props} {...TextBox284Cb} {...TextBox284IoProps}/>
<Input className="p-Home Input15 bpt" {...Input15Props} {...Input15Cb} {...Input15IoProps}/>
</Flex>
<Flex className="p-Home Flex336 bpt" {...Flex336Props} {...Flex336Cb} {...Flex336IoProps}>
<TextBox className="p-Home TextBox285 bpt" {...TextBox285Props} {...TextBox285Cb} {...TextBox285IoProps}/>
<Input className="p-Home Input16 bpt" {...Input16Props} {...Input16Cb} {...Input16IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex343 bpt" {...Flex343Props} {...Flex343Cb} {...Flex343IoProps}>
<Flex className="p-Home Flex337 bpt" {...Flex337Props} {...Flex337Cb} {...Flex337IoProps}>
<TextBox className="p-Home TextBox286 bpt" {...TextBox286Props} {...TextBox286Cb} {...TextBox286IoProps}/>
<Input className="p-Home Input17 bpt" {...Input17Props} {...Input17Cb} {...Input17IoProps}/>
</Flex>
<Flex className="p-Home Flex338 bpt" {...Flex338Props} {...Flex338Cb} {...Flex338IoProps}>
<TextBox className="p-Home TextBox287 bpt" {...TextBox287Props} {...TextBox287Cb} {...TextBox287IoProps}/>
<Input className="p-Home Input18 bpt" {...Input18Props} {...Input18Cb} {...Input18IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex344 bpt" {...Flex344Props} {...Flex344Cb} {...Flex344IoProps}>
<Flex className="p-Home Flex340 bpt" {...Flex340Props} {...Flex340Cb} {...Flex340IoProps}>
<TextBox className="p-Home TextBox289 bpt" {...TextBox289Props} {...TextBox289Cb} {...TextBox289IoProps}/>
<Input className="p-Home Input20 bpt" {...Input20Props} {...Input20Cb} {...Input20IoProps}/>
</Flex>
<Flex className="p-Home Flex339 bpt" {...Flex339Props} {...Flex339Cb} {...Flex339IoProps}>
<TextBox className="p-Home TextBox288 bpt" {...TextBox288Props} {...TextBox288Cb} {...TextBox288IoProps}/>
<Input className="p-Home Input19 bpt" {...Input19Props} {...Input19Cb} {...Input19IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex341 bpt" {...Flex341Props} {...Flex341Cb} {...Flex341IoProps}>
<TextBox className="p-Home TextBox290 bpt" {...TextBox290Props} {...TextBox290Cb} {...TextBox290IoProps}/>
<Input className="p-Home Input21 bpt" {...Input21Props} {...Input21Cb} {...Input21IoProps}/>
</Flex>
<Button className="p-Home Button64 bpt" {...Button64Props} {...Button64Cb} {...Button64IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FollowPage bpt" {...FollowPageProps} {...FollowPageCb} {...FollowPageIoProps}>
<Flex className="p-Home Flex357 bpt" {...Flex357Props} {...Flex357Cb} {...Flex357IoProps}>
<TextBox className="p-Home TextBox297 bpt" {...TextBox297Props} {...TextBox297Cb} {...TextBox297IoProps}/>
<Flex className="p-Home Flex355 bpt" {...Flex355Props} {...Flex355Cb} {...Flex355IoProps}>
<TextBox className="p-Home TextBox296 bpt" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex356 bpt" {...Flex356Props} {...Flex356Cb} {...Flex356IoProps}>
<Image className="p-Home Image165 bpt" {...Image165Props} {...Image165Cb} {...Image165IoProps}/>
<Image className="p-Home Image164 bpt" {...Image164Props} {...Image164Cb} {...Image164IoProps}/>
<Flex className="p-Home Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<Flex className="p-Home Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<Image className="p-Home Image163 bpt" {...Image163Props} {...Image163Cb} {...Image163IoProps}/>
<Image className="p-Home Image162 bpt" {...Image162Props} {...Image162Cb} {...Image162IoProps}/>
</Flex>
<Flex className="p-Home Flex352 bpt" {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<Image className="p-Home Image161 bpt" {...Image161Props} {...Image161Cb} {...Image161IoProps}/>
<Image className="p-Home Image160 bpt" {...Image160Props} {...Image160Cb} {...Image160IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home RatingPage bpt" {...RatingPageProps} {...RatingPageCb} {...RatingPageIoProps}>
<Flex className="p-Home Flex367 bpt" {...Flex367Props} {...Flex367Cb} {...Flex367IoProps}>
<Image className="p-Home Image175 bpt" {...Image175Props} {...Image175Cb} {...Image175IoProps}/>
<TextBox className="p-Home TextBox315 bpt" {...TextBox315Props} {...TextBox315Cb} {...TextBox315IoProps}/>
<Flex className="p-Home Flex364 bpt" {...Flex364Props} {...Flex364Cb} {...Flex364IoProps}>
<Image className="p-Home Image174 bpt" {...Image174Props} {...Image174Cb} {...Image174IoProps}/>
<Image className="p-Home Image173 bpt" {...Image173Props} {...Image173Cb} {...Image173IoProps}/>
<Image className="p-Home Image172 bpt" {...Image172Props} {...Image172Cb} {...Image172IoProps}/>
<Image className="p-Home Image171 bpt" {...Image171Props} {...Image171Cb} {...Image171IoProps}/>
<Image className="p-Home Image170 bpt" {...Image170Props} {...Image170Cb} {...Image170IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex366 bpt" {...Flex366Props} {...Flex366Cb} {...Flex366IoProps}>
<Flex className="p-Home Flex363 bpt" {...Flex363Props} {...Flex363Cb} {...Flex363IoProps}>
<TextBox className="p-Home TextBox313 bpt" {...TextBox313Props} {...TextBox313Cb} {...TextBox313IoProps}/>
<TextBox className="p-Home TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
<TextBox className="p-Home TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
<TextBox className="p-Home TextBox310 bpt" {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
<TextBox className="p-Home TextBox309 bpt" {...TextBox309Props} {...TextBox309Cb} {...TextBox309IoProps}/>
<TextBox className="p-Home TextBox308 bpt" {...TextBox308Props} {...TextBox308Cb} {...TextBox308IoProps}/>
<TextBox className="p-Home TextBox307 bpt" {...TextBox307Props} {...TextBox307Cb} {...TextBox307IoProps}/>
<TextBox className="p-Home TextBox306 bpt" {...TextBox306Props} {...TextBox306Cb} {...TextBox306IoProps}/>
</Flex>
<Flex className="p-Home Flex362 bpt" {...Flex362Props} {...Flex362Cb} {...Flex362IoProps}>
<TextBox className="p-Home TextBox305 bpt" {...TextBox305Props} {...TextBox305Cb} {...TextBox305IoProps}/>
<TextBox className="p-Home TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
<TextBox className="p-Home TextBox303 bpt" {...TextBox303Props} {...TextBox303Cb} {...TextBox303IoProps}/>
<TextBox className="p-Home TextBox302 bpt" {...TextBox302Props} {...TextBox302Cb} {...TextBox302IoProps}/>
<TextBox className="p-Home TextBox301 bpt" {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
<TextBox className="p-Home TextBox300 bpt" {...TextBox300Props} {...TextBox300Cb} {...TextBox300IoProps}/>
<TextBox className="p-Home TextBox299 bpt" {...TextBox299Props} {...TextBox299Cb} {...TextBox299IoProps}/>
<TextBox className="p-Home TextBox298 bpt" {...TextBox298Props} {...TextBox298Cb} {...TextBox298IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex365 bpt" {...Flex365Props} {...Flex365Cb} {...Flex365IoProps}>
<TextBox className="p-Home TextBox314 bpt" {...TextBox314Props} {...TextBox314Cb} {...TextBox314IoProps}/>
<Flex className="p-Home Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<Flex className="p-Home Flex359 bpt" {...Flex359Props} {...Flex359Cb} {...Flex359IoProps}>
<Image className="p-Home Image166 bpt" {...Image166Props} {...Image166Cb} {...Image166IoProps}/>
<Image className="p-Home Image167 bpt" {...Image167Props} {...Image167Cb} {...Image167IoProps}/>
</Flex>
<Flex className="p-Home Flex360 bpt" {...Flex360Props} {...Flex360Cb} {...Flex360IoProps}>
<Image className="p-Home Image168 bpt" {...Image168Props} {...Image168Cb} {...Image168IoProps}/>
<Image className="p-Home Image169 bpt" {...Image169Props} {...Image169Cb} {...Image169IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
