import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>
    <Seo title="Home" />
        <h2>我們會在每個上課日通過電子郵件向您發送您孩子的作業</h2>
        {/*
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
                  quality={95}
              formats={["auto", "webp", "avif"]}
                      alt="A Gatsby astronaut"
                      style={{ marginBottom: `1.45rem` }}
        />
                    */}

    <table>
      <tr>
        <th>班級</th>
        <th></th>
      </tr>
      <tr>
        <td>1A</td>
        <td><a href="https://buy.stripe.com/3csbJCflVeLy0Hm9AC" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>1B</td>
        <td><a href="https://buy.stripe.com/28o4ha6Pp6f21Lq28b" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>1C</td>
        <td><a href="https://buy.stripe.com/cN2fZSehRbzmcq428c" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>1D</td>
        <td><a href="https://buy.stripe.com/14k3d6gpZ6f289O8wB" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>1E</td>
        <td><a href="https://buy.stripe.com/aEU5le0r10UI9dS9AG" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>1E2</td>
        <td><a href="https://buy.stripe.com/28o8xq3DdfPC9dS007" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>2A</td>
        <td><a href="https://buy.stripe.com/4gw6pi4HhgTG61GaEM" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>2B</td>
        <td><a href="https://buy.stripe.com/5kA9BuflVavibm0eV3" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>2C</td>
        <td><a href="https://buy.stripe.com/aEUdRK6PpfPC89O7sC" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>2C2</td>
        <td><a href="https://buy.stripe.com/7sIeVOehRfPC61GaEP" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>2D</td>
        <td><a href="https://buy.stripe.com/28oeVOddN9reahW14g" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>2E</td>
        <td><a href="https://buy.stripe.com/6oE7tmc9JgTGahWeV7" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>2E2</td>
        <td><a href="https://buy.stripe.com/bIY14Y7Tt7j6gGk3cq" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>3A</td>
        <td><a href="https://buy.stripe.com/9AQdRK1v5fPCfCg5kz" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>3B</td>
        <td><a href="https://buy.stripe.com/14kbJCb5F46U4XC4gw" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>3C</td>
        <td><a href="https://buy.stripe.com/6oEfZS2z9fPCeycbIZ" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>3C2</td>
        <td><a href="https://buy.stripe.com/14k6pi6Pp1YMcq4cN4" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>3D</td>
        <td><a href="https://buy.stripe.com/8wMeVO2z99redu8fZh" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>3E</td>
        <td><a href="https://buy.stripe.com/6oE7tmc9Jbzm1Lq00k" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>3E2</td>
        <td><a href="https://buy.stripe.com/6oE6pi1v5dHueyceVf" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>4A</td>
        <td><a href="https://buy.stripe.com/6oEaFyc9JcDq61GaF0" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>4B</td>
        <td><a href="https://buy.stripe.com/6oEbJC8Xx1YM3Ty5kH" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>4C</td>
        <td><a href="https://buy.stripe.com/cN28xq7TtgTG9dSaF2" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>4C2</td>
        <td><a href="https://buy.stripe.com/cN2aFyc9J6f261GbJ7" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>4D</td>
        <td><a href="https://buy.stripe.com/00g9BugpZcDq1LqcNc" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>4E</td>
        <td><a href="https://buy.stripe.com/6oE5leehRavi4XC8wX" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>5A</td>
        <td><a href="https://buy.stripe.com/3cs14Y5Ll32Q2Pu6oQ" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>5B</td>
        <td><a href="https://buy.stripe.com/aEU14Yc9JeLydu8eVn" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>5C</td>
        <td><a href="https://buy.stripe.com/9AQ292ddN8na75K7sW" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>5C2</td>
        <td><a href="https://buy.stripe.com/aEU292a1Bavi3TycNh" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>5D</td>
        <td><a href="https://buy.stripe.com/cN2bJCflV0UI75KcNi" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>6A</td>
        <td><a href="https://buy.stripe.com/fZe4ha5Ll0UIfCgaFb" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>6B</td>
        <td><a href="https://buy.stripe.com/00g5le0r1cDq1Lq3cK" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>6C</td>
        <td><a href="https://buy.stripe.com/5kAbJC1v5avidu87t1" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>6C2</td>
        <td><a href="https://buy.stripe.com/aEU7tmb5F46U61G00A" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>6D</td>
        <td><a href="https://buy.stripe.com/6oE00U0r1avi3Ty14F" class="button">按這裡訂閱</a></td>
      </tr>
      <tr>
        <td>6E</td>
        <td><a href="https://buy.stripe.com/8wM14YflV8nabm05kW" class="button">按這裡訂閱</a></td>
      </tr>
    </table>

    <br/>
    <br/>
    <p>如果您有任何問題，請發送電子郵件至 povalab@gmail.com</p>
    <hr/>

  </Layout>
)

export default IndexPage
