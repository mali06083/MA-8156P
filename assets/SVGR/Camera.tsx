import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M23.901 8.567 18.995 1.96a.507.507 0 0 0-.349-.201l-6.59-.743a.534.534 0 0 0-.113 0l-6.59.744a.5.5 0 0 0-.348.2L.099 8.567a.505.505 0 0 0 .021.628l11.687 13.703a.253.253 0 0 0 .384 0L23.879 9.195a.504.504 0 0 0 .022-.628zm-1.369.243a.102.102 0 0 1-.099.08H20.05a.405.405 0 0 0-.325.205l-5.652 10.077-.009.014a.151.151 0 0 1-.26-.152l4.569-9.714.009-.02a.303.303 0 0 0-.283-.412H5.901l-.021.002a.304.304 0 0 0-.253.431l4.569 9.714.006.015a.152.152 0 0 1-.276.123L4.275 9.096l-.014-.024a.405.405 0 0 0-.338-.183H1.553a.101.101 0 0 1-.007-.199l2.362-.509.027-.007a.404.404 0 0 0 .282-.299l.953-4.218.004-.013a.102.102 0 0 1 .117-.063.102.102 0 0 1 .079.103l-.174 3.665v.019a.203.203 0 0 0 .345.133l5.034-5.06.012-.01a.107.107 0 0 1 .147.153L7.019 7.208l-.014.019a.252.252 0 0 0 .21.392h9.569l.021-.001a.253.253 0 0 0 .176-.41l-3.716-4.624-.009-.013a.108.108 0 0 1 .025-.137.107.107 0 0 1 .143.008l5.034 5.06.015.014a.201.201 0 0 0 .329-.166l-.172-3.666V3.67a.101.101 0 0 1 .199-.013l.954 4.218.007.027c.042.14.157.248.302.279l2.362.509.013.004a.1.1 0 0 1 .065.116z" />
  </Svg>
)

export default SvgComponent
