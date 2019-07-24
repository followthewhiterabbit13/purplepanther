import React from 'react'
import styled from 'styled-components'

class Widget extends React.Component {
  componentDidMount() {
    let script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://widget.alongside.com/widgets/js/horizontal/148446'
    )
    script.setAttribute('id', 'qimpleWidget')
    script.setAttribute('async', 'true')
    script.onload = function() {
      document.getElementById('widgetFallbackText').remove()
    }
    document.getElementById('widgetWrapper').appendChild(script)
  }

  render() {
    return (
      <div id="widgetWrapper" className={this.props.className}>
        <p id="widgetFallbackText">
          You seem to have an AdBlocker on that is blocking our list of jobs.
          Check them out{' '}
          <a
            href="https://jobs.alongside.com/employer-profile/highline-beta"
            title="Highline BETA jobs on Alongside">
            here instead
          </a>
          .
        </p>
      </div>
    )
  }
}

const CareersList = styled(Widget)`
  a {
    color: #357ffa !important;
  }

  #jobs_widget_container {
    padding: 0 !important;
    & h3,
    & > a {
      display: none !important;
    }
  }

  #qimple_jobs_wrapper {
    background: none;
    border: none;
    margin: 0 0 1em 0;
    padding: 0;
  }

  #jobsTable {
    th:nth-child(2),
    td:nth-child(2) {
      display: none !important;
    }
    th:nth-child(n + 4),
    td:nth-child(n + 4) {
      display: none !important;
    }
    th {
      font-family: MarkPro;
      line-height: 38px;
      font-size: 20px;
      color: white !important;
      padding: 0 !important;
    }
    th,
    td {
      background: none !important;
      color: white;
      font-family: MarkPro;
      line-height: 38px;
      font-size: 18px;
    }
    td {
      border-color: #c5c5c5 !important;
      padding: 24px 0;
    }
  }
`

export default CareersList
