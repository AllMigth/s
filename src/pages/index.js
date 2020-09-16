import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Button extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_lUSrwZbNaEeIj7kml4WTXqdC00VYLvERQs', {
      betas: ['checkout_beta_4'],
    })
  }


  render() {
    return (
      <form
        onSubmit={event => {
          console.log('hello?')
          event.preventDefault()
          this.stripe
            .redirectToCheckout({
              items: [{ sku: 'sku_H5KehPcbUkdld3', quantity: 1 }],

              // Note that it is not guaranteed your customers will be redirected to this
              // URL *100%* of the time, it's possible that they could e.g. close the
              // tab between form submission and the redirect.
              successUrl: 'https://store-optafolio.netlify.app/success',
              cancelUrl: 'https://store-optafolio.netlify.app/canceled',
            })
            .then(function(result) {
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer.
                var displayError = document.getElementById('error-message')
                displayError.textContent = result.error.message
              }
            })
        }}
      >
        <button type="submit">Obtener mi portafolio</button>
      </form>
    )
  }
}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Un portafolio profesional aumenta tu nivel profesional</h1>
    <Button />
  </Layout>
)
export default IndexPage
