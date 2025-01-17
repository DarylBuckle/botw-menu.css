import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import 'botw-menu.css'


const App = () => {

  return (
    <div className="">
      <nav className='navbar botw-menu-item br-none bl-none bt-none fixed-top' style={{ position: "fixed", opacity: 1 }}>
          <div className="botw-menu-item-content" style={{ width: "100%" }}>
            <div className="text-center botw-text mt-3">
              <h5 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='http://github.com/darylbuckle/botw-menu.css'>Source</a></h5>
              <h2 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='.'>Examples</a></h2>
              <h5 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='http://github.com/darylbuckle/react-botw-menu-components'>React Components</a></h5>
            </div>
          </div>
      </nav>

      

      <div className='container' style={{marginTop:'150px'}}>
        <h1 className='mb-5'>botw-menu.css examples</h1>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Menu Item</h2>
          <div className='row'>
            <div className='col-md-12'>

              <div className="botw-menu-item-container">
                <div 
                  className={"botw-menu-item"} 
                >
                  <div className="botw-menu-item-content">
                    <h3 className={"menu-title"}>{"Apple"}</h3>
                    <hr />
                    A scrumptious apple.
                    <br />
                    Eat it to restore some hearts.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-1'>Grid Menu</h2>
          <p className='mb-4'>
            Images not included.
          </p>
          <div className='row'>
            <div className='col-md-12'>

            <div className="botw-grid-menu">
              <div className="botw-page">
                
                <div className="botw-menu-item-container">
                  <div 
                    className={"botw-menu-item grid"} 
                  >
                    <div className="botw-menu-item-content">
      
                    </div>
                  </div>
                </div>

                <div className="botw-menu-item-container">
                  <div className="active-corner" />
                  <div className="active-corner" />
                  <div className="active-corner" />
                  <div className="active-corner" />
                  <div 
                    className={"botw-menu-item grid active"} 
                  >
                    <div className="botw-menu-item-content">
      
                    </div>
                  </div>
                </div>

                <div className="botw-menu-item-container">
                  <div 
                    className={"botw-menu-item grid empty"} 
                  >
                    <div className="botw-menu-item-content">
      
                    </div>
                  </div>
                </div>

                <div className="botw-menu-item-container">
                  <div 
                    className={"botw-menu-item grid"} 
                  >
                    <div className="botw-menu-item-content">
                      <div className="botw-menu-item-name">Apple</div>
                      <div className="botw-menu-item-count">
                        <span>x</span>
                        <span>26</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="botw-menu-item-container">
                  <div 
                    className={"botw-menu-item grid"} 
                  >
                    <div className="botw-menu-item-content">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABoCAYAAADo4j4RAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAZaADAAQAAAABAAAAaAAAAAB/MNYdAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAzXUlEQVR4Ae2dC7SmV1nf93v5ruc6Z2ZyIxAiTcDEJhG0RSuLSbtKxVYo4AwV5K6gCJgYFTBgTrxUwDABrK2CIi4UXHOgEa1gl12LYXUhwVarNgkBQsiFud/P7fu+99rf/9nvPueEZObMTCbkNLJn9rf3u+/7+e/nsvd7Oc592204CiQbbUS1c1E0Oxu/cevW+ModO6Ldu3eT9G33uFBAYMwCxiN0Hj1C2hM6acNNeOf27b3h2KZLyjK+KCnSvb/48f909xMagUeY3OMOiokr5+rZ7dsvaE9u/S/VwT3XHBjlF3x1GHe/44qr7z/vyLHvmp37z4uMXWP9RyHKHklcPAJ2j31SbzSxVLv0imrh0FPHRvPt9pFD+QN7913S7cXPUe/bt2/fMGN9rKnxuE+U5V/v2r49eeuffnghiqp3pZu2un4aV0+abEfDg/vdQrv370WEKw8dety5+rEGI7S/ISYaRJj0yai/6fZ6791XLZVpedfRIpm56up931WNnnX9H35wH4P+RyHCHndO0eoI3PKzc3ODOq7el/Sm4RbnNreqYt++QxcOJyZ+WOW2bdu24Ux4jetcuw0Biia1fW6uUji+f8/Hok1b7ojiKJnsp3Vx/LA7kSQmwgDFyqjcE9ltGFACt7zlM58ZlVF1a93qun47jrvFwO2fX972Gz/+U1exj6lOspd5QmG0YUARVQO3uEOHbqvHN+9vR3WypePyvXv298qJLS9Vmd273YYas8Z0rt2GmmDglrf/+Z8fS8bHP550Om5TN3HFscPueFX/OxkEu3fPFueaCButvQ0Fiohz15VX2gaxOL7wm9XERfPjadSaqIfVniNHr3r/T97wPJVhz/KEVvgbDhTpDe1b3jn30a9H7ckP97pddx4i7MCDe9xoctMrBMoT3W04UETwFW7J5n8zmTrvGCKsU5w47A6Psn9166uvm56bmysppj3LE9JtSFACt8x+7MP3lun0H4yjW8bdKNt76NAFxeSma4XEmRy71HUd1bt2JfXsbGp+u8Vj6aiNiCpbtI3t8jL5VNqfvG5Taz7ef+CAG1162YsY8W3b+Zn7pqGL+O7mmyN3xRWRu+uuyN15RR3N7SijKJKeEnetuqayAaNztSuvFEC2D+IewuO6H9qwoATzuKzLv3W9zYcm2vu23nfiuGu5/GqtelilqufmEiO+J3UF8UVMMxRWqe/c/Nvfvrmqe09dqrNnp3H0VJeNvhC3kzu2DIcPRrfeOnASh3OrEBtQs+H0gA3r7CxoP7zdtX2cy/iGBUVEQNTErNr5P/yJN/7VsTR9YbKwXHzpyMJVg/vv/55+FH2R/Jr8FQ44ODs7PuncBUer6mktl1w1yKvvmUrSy6s8vziOi5mtZRFHg9xVw8It19VoOBocPPS6N9xXFOWdSbvzv5LR0S910/p+95T9B6PZ3Y3pvdvoXcviEzfdeWcNgNVjCdKGBaVZeRpf9k+mZr74f1rtF47Hi+XeA4fTv7l0y8vqD3zg7w4eP/6MI7968zOWi+KZY2lydVVU3+lcctGmMk5joJqualflI9CtXV3ldVlkpRsUdVQW0XiRdaLh4pM3LS4/Oa6y5xRV9ZNR27nBpvHF+Qc333PgdS/9Yp+9alZV/zCz6O6J5uayh3PTbOJB2gVIJiKbYT+6YMOBIu5gSjEio2TCxgWb0/Rv4lbPTbYW0yNHDrq7TjztTT8wmn/tZO26SZ2kM3HsakpWVeyKHACKEnzMRXVVRmRGUZlFblQmUV64uBzBLdy+qYa1i6s6cVXd6o2iqF3HE9lg3EXxNWNVfE1RtN9QlN1ib3/ivn2vfPU/lOnY/+wm6eeTPPpq9JH3HWeMDTfRhefqc6KLpNwed7cCBHQNSpa09Miw/O4oci8YtVqv+Ogdf3vJvfv313eMxqJ/+r3Xulsvjly3zl1WRWVdVTUoRGWOlVWyaMsSMCpAQjvUhSPDOcBwWeGSCs7JBnBO5qKkcu1k6NrdAU9rVK7OIW4VGWNF1CYWVXGcVGniKOUWi3E3H01VS1H/YNGfvDOukv/t0vbnyrz423/+u//xoAh5LsTa4wYK6znisAuumHOIhhW9cOQXZi/O6+wHy9i9brqun90GlbTTdR964EF3x713uTvna9f/zu93tzxja315ueCWAAEgXJWx8AGhlq8hsEBBbEVFjs8MkLhWOMQMK1yrlbt+vOBa7SF8SR0Yiga8jUZ9udKlrohadRG36mHdroZVz41cJx7gl6KOW0y69ULaiZZbvbrf7t/4og/c+OuY8zH+UXHMt1R8PRSICIuHeeOOvBkgWqPng9BL2tngOWNR1Ofo3pVRXI9Y52kRxZd20vjLaez6UeYWOAv7++F50eVxhrhiTUtkAQbs4VJxB4bSMoAUBbTBxxkegtcloDjASJfdRHLcRT3qpZBgCCeJm0q4qZAchJv4V0ZdqrejrOxGeVXERVS4Mh6R3oaHWrAk8i5qsWrGk8Mznbfe9uZf2fWi2Xd+7dEC8y0BxcCYvTlxs1EZNUDs/7mfG4uG/R/gmP4lZV1sn8riaVYspEyiwgQQekICJopMaZ/X3+y6rY6bYIUfXTji/o4F/oMQtEQkaXvSQakMINM+WOyOPHWbEVvf4QYGipgyKkvXqYZuKjnq+mM8h9EvEVeAMDwBTssAIUAArQIcnNR2XG5xUd71vuoyPCwBWQMJ/Bu1kjhpOZeOuTru5vlwOHVifPJNVL3+ijvZJz0K95iDYqbkXISucEX9+te3DrS3/EuI/ZJ0sX5+JyovTiCYxE0exQgi4lEdI8kTlASgsOZJGyH7Z5hmHzE23kL+L8+7PYtL7sBEy83kmSsp+LFhD1Op5b4Bbb8vGrqXoSuGiLWyTFw3XnSb0j1uqnfQpX0I305omzPNaEQHB+CQRmzJxBA51THYoK2aLT+hOpFYw6yLAJy1QzwhH86qi7TKRu5w7V75sR//tXft+N0dB7QQz9Yie0xBaSyScuE1b996sFW97lDteKireGYLESMACoICRJguFKrFFeIOV8Xog0RlmBqEQpm7TrvjtvR67kB6wnURL4dPHHP/d+xC95zBvPtylbq5YcrxfumeCZFeSn48oqVkwZ039qDbMvkNF6dLdAF3SEwN4CARWCabwkAFgcGl6CxsJA5ZMWYERKnAYDARXiEGokScVZCFUGbl4jCbWeqmP0Ti789JXzZSgeszcmE4Z1RpvcIMNXLbZhMsqeKB1/78804Uyx/YNKqfTj3IEFWjGDs01g9codlBASnlitVXcQFQpnMrcsGDtNq1IeZEZxoRdtCNA9iJowfcVy662H13HrtPZ233QBa7p9PYy9uH3SW9r7qx7v2u295P6wv02kZUiZBQW3qFhS5OMACM+sSD0zUSylAZUBADACuMBACNUg8E10rRr7icxglzJjZ0B3vT1+26fucf77h1x4Dcs+KWcw4Kg8Wq2h5Hc7PF3a9688snFo7/3nRedoYuRiezXTA9ASAo8jpJUJyxq1DgiC3N30Ao4R2zbJkvxi0+gltyN40MT1stwMnd3oUT7q4icb9XbXJfyefdjwPCj47d4y5Ov04jx7x+EEPYokZMBSdqihsUChyFAkIupOtuDWnocwAByCpxMcaEjAWXGhQGiFUQQAIGQ6Aqs2oxK6463om30cJnzpZbziko0h8yb2t3cfv+V/7UzZsHw58Zy/IWY0b9linrFY4QoWVZQWjAqFrcWVQu4BRKR06XUEf5bPOwftA3hCUSropQqq2+K9LC9ZaG7pnH7nTPK7/mvrP7Nee64ggIOJI57JX1w4gNpYzwFBPTWFxpcgJHXpIUcVhxylaWHVcxtiLSmGBoaC9vC0rFjYPojwkW6JkKYVyiWxbG0teR/Zm7rryLIxm1eWYurJEzq/UIpRv9UQFM+8tT5334sty9HNWtqcdojaiEuBVwGRdoEkw7h1tGiKxcHgpmTDwHnBFEyBD0CmWhonswPimh0WZfd09ZfsA9CWU+Af/BgFAKdsAYqBMsKekOjCKa8kSHiAZAILpCcYi88uQtDyDqcQjbgsgsAB0EUKYknsWpy9iXlHmCqc0mst1yS0nbDeDc5aTD0zZ9dyQddwfTqbpqTURTM9OO9fZ9b9351tvPxjw+J5xiHMKxyP5XvOnSB+LsfZctDF4QF6VoiXmCyBIXyKfN6mfEElUS8xnWVw7hOZUyYLRV0K57U3HMpeiR6WjJjcdLbgLP0vW+CyGTHh7eiwEGS8thYbkUMQWRlO7YzziOU8yJ6CK+nOJrl6KB1gKEPgumDSiIUsbEOrKyVlw/jR6JYHWZy/qRrisb8cVxDhwKr9d5mQ9HSXt67KcpdfvZmMdrh0cbZ+6CyPr6q3/imnaW/8lFo8ElLs84cUcQa/QyeaGCxJaUdgl3FInEFSGeAxImw3EHnNDm6KNTDQBDpioAiIJa9Tw8oaWHHGH10kiHPPYrLhEIEB9rzQG6oz3jEM2qZO+RcfIhUaZrI34TKi5OoWo9QkwVmxiH7Yso5o0NDVbSCVuEcYpbWpzS4BFtS+i1BeMWQjhoPu66o8mYOwS3RO3xut2ZiCa3Tu7Phtk1N77/xjM2jx8Vp9TbtqXokOLrL3v1Ne28+NRFy8efwgasqEcj2mVGah0hLGy4j8EFkRyKiCgtMk02iTKkA5QRFkUa4lqsUqyuRQVMUsfm2TemdICKOceNJ3x5lVX7gOsKwNK+ItpCuSOkqQ/lN079C3N8VU3AIdIhONowcLSQzKsacbG1DYa4yjVOcTsoY2HlcEoFJ6eVzGO4ZVBc0J3s/hRFZs9U4dtUQidnEgYOue+Vr/zuVh3fdtH8iUtctgiHZFALB40dpiuz9sTssuQ1c5lDSkdOW4LUDpMyhaFZSkdIHIkLpETktVHDUrM6ClPa0vEIK9iAVI9qw8xdgQIIYgP5Yg8BukZ9CwhxCEXMY0YX1QzFJbYgOH1xINMAIi4WCD4sWGE5fgjrDlhQ4pQF5rCI/XyCXf4BFshRdEu72+c8bbxq9SbiqfOmv3osOf5d6JUM8BDkJvjo/NROlDkjB90iNzurV+DKPT/2Y/8ak/FDFx45colbFiDYqBIlLQgfWhZBx5DzIqARn+60O0mgjo2RuMCQR+KpeZYb+Uogzt7AuAoiOCw1TmXxxFGyBpTaVGV29taGFoO4SsopZ5+SA4jAsPYJQ5yoi2ij6UYH+MYdJBswBgbZEmsMg9Njxq06VCAqp6oykCkEqIhhDH7rt8rjqsi5lZNfNt2dfiHF5uZ26PDVeic4tQukO3WpJteGoz0IgHzpta+9YXo0uqV/5FjtFpdQDXCI7EXjBEJZRBpGn1rsK0ys2FaRGYn2ylRZAcFRiM1QaWpDokziTVwSA0KH+Bi+h9e1EMcyszqcAq8cJtqBIlxWIrKy+zzHBBBEQeEXvHEBoNCHcQN9C19xi65LgaHizMODRbq4iUUmaasf/ZOy18ZXZjFqnzKm8BlDUefLmeuNdX6W0mCyA5vg9LiF2Z+eYxzNpnCu/NKrXnXDU7LhLf2jR6p6cYm+kAMm+yHiGO1x+mrXXcIeVEkgnPSCdILEjrbMNdxTYkYVhLWIjFdehyEZV2Bddcfx6I0Occ69kA2ElIeWxknSFQUgZCj1nH1KxqYx28de5WseEBFPTqHAMEKrP6y2uk+SzGAtBF9I8RXPyikZl90CwyKzdLXRuJWmqWvgGKIAooUh46LKkyrnvmVRPfu3Zt//g6rGo1GnRW9RaF3HAB4KSJHd0j9+tKqz5QjrR0ewjIxSbfrsaZI2SwhKmhSyCC7rCBFhK9w2aLpWOWuddK5FbLUB3UxUJU09jVJFJaJymzDVoBAnxG4kQNi6jwClwCwu9gK22ANH0+YUmueYpO42yVrxjMeyaLzhEHGFxJc4RBajKXrKcBJBmry4R576qss47IwO8eV3//StE2eA4ZytzgeZ6093foSif3G6G0kocGpHx16HsFP/0qtef8NTFgDkIIAsA0g1ZGQoZClWNm/Ys74xtWqAEJEukV4xcUYoIEQzGQA6nZXpq9mpTIuI2lBoI1NBgUAfnCu5RQBYnHdu4Tj+KPHDzi3DHTp+lxldKYQgak9DUSgvx6aw4vi9YkF4DpHFhR5piGsFGYJxhEAROHCOxBj3K5vTBok0CsnRbmgeWGhHCZoPp9taFB6UuBhxh7NOXvaBd773aokwlP66ND8tTkGHVHe/4vW/8ORji+/unzha18USQhdQdOKqgSBlTHdI/JhOYOACQcM2AHzUZiEwRDABogTNUbpGx+gqTJOma7iZZPsO26+QVkBsU7KqT1xl1T97Gy8u4JISwGjKLCyFcis07LCqpR/kdXSPs7iqsLYETvC6xmvPUgKO9lR2tEK+0lTXDimJiGNkfWu/ZU84SeGbRckYSw4ps1HJPZ9evz/+vVT7e7wIo8mf1J0UFPqhO/p//vPb985csuuSI8deEA+Pcz98kWUEKBIlQ/wEhEHse8WMQpFIGFFT3SKLvRNlSDCugJgKBZ6opyIitjaFBKbkMeKM8wSyQBTAmqicykpmCz1bFAIFrinhHjWpYgrlG1dzB5FHI2geQCSWFFoeBIboBkoTivhszA0EI7iAUJrqMUSOwqw8A7G1pJb0D20iCGkVz/xMt6BLdatAt6uR8VpJp+VOCkqofbA1Pb0py/9FnC3RONxRLERuiAxf4tgjQlxUhKKR0X2KAW2F0ICj0XM+5QepApBBQNg+RHG8KGNWlJSvZisPII2st/Iq480d+qK+1WN+EmnGJYyhXgPIWlCsrsYhxQ5hsfS8SIJENiJxDOn0ywMSHiAobyCovPJIDweoJEFyn06ntNA468cIz/AYgCl7xqjDM7tdpLVWPikUXy9cF5Tz5vcdyc+/7Dh7gs3cHqQTRsBJrMuR5x1WqZwIgZ51NQTiJpSdS0kha7mKiJoAtDZF7tiBy0QLexK1Jy5RARkENlkmIz41NiIwcSXANEnaVZNm4Rwijp7RtRzdmdd45EnnTgwrXO3CETrXguieW8QhnmNETp9uxWyK1oW4JHi6VzmeG7BzO3WlMtrRq4JGqxY9ZHTebIpFMZ+PUsNduPdCFT2lOykoaozuIt7SKY6+/PLDm+L0aZ5wjE4E1l7BVipR0V/4qDuNluc9zKmcfOjFZqEjdrhLCNWYugYQGTrKsMJUEMcIEOkrJZvY0+SJc5/d+q0VNoBYuyrX+AAK7QkUO/UVcZvVLwDCBtGapC/jimD6Um7V2hIwGp7SdA6G5La42pAT11GAhgSxUj04xD1YwEh+JNvfucsv2qcuT+k0+5M7du7KXIiTbzhvnlrXuk/tWZRMgSFQ1JWIwWI2rxGf1JMhq01iRyvdzqpoxI5JaJD3HG3/oQcaSgCU59TYFXBGiS/g0gzFrn4fyatfRGBVcv9F51oCAXGqM6yajaqBwnht5QOciB2sroeAYbqEcgKUMnaPpwFEU6UTm3b4bZaSgSIcvJTw62qY5eerxqErrlgXlLCGVf7hbjcjYUw84vkNfwCo227NStYqDitShNEgAgjadCsuZy0QKl/DUbrSwnUNsW1Xr0pkaCOpoxoV5tjeTBuumtn7+qHf0EfIV9jkSbnX0iG0qfVrCh0OsLiILMUNR5o1RhmV8736tS69IhACl1jYpPF4H92oLd+xTUliGq/U2ELL9KXg9CShstycTz/V76lBaWqOt7sHajZqEUpZ8tj2FHRns1AZgRIIrREGkEKaysiFaxEugKLyJn/hDs1S6SqndMUl/hTqWvlrAVFcLrSlOOVqxGKNeDSimwhb5QQTYeIAgSBgNB8aMPEESDJvZQLbNe16YHTth+C7x97hWuBoWDYdrhvIbThcGqOAa6Sbe53uxJNI4vnD7apySndqULbyhDnuUK/1jfM4jW/F2uFBJTsWh/LKlbhSKOJpfkF8qeWQphGuJTSXK/UCsdWGfChrM+U6gELUKBCooHzFZXYHChhZBIZ27X4B6aaVSXmWutaxmblKM2BIMz0jcERg5XugbG9inKI0uiEuYMQhAkR3SoPdY+Qgjf940zD80ps4hkQzBtaFgsqNOzUoodBouEemIbtzfqASNr9ZSnqYTVwRCCsCBuKKaHIKQ3oYmEKlya1NU105ASinUPkhVFxebaqsduncMbSZI/LseWArDCFl5orAkMcDQ1ziawUM6QjEVwBD5Sm7lkOUb88NQFhxhYktgUPXUvY8usxjrJHjsRW2UrLlBIsfjgGiOD0oLYnKCxQCWZilLh/Rhek/YibvY1gD50edPY7nruq0zVkXOEoHhKYDocQhGq28nIaiMoFzQqj8EF9bx2ba5AnoYEAoDF7pLM+6xKIqJrCUuafO3cCKJyKrnLAg3Y5T0CVwgxS77rUbKCz3kjS+I7ZyLZC08s0zXuMGgSbxhZelFbhDYOmakz57tkCgCCQeYTZOIsumrGkHLwKEnT98a9YX2eu6U4PCSzlqYanbPjHf6x+rdZyecKPDlD1dq7ZKiKBrV7CIp7TgQ164XguW0taCo3gAQaFOX+QNEHblORZV3jMQdPvGOEIKnTHpVFd3oWVpeYtLoBBvwDGrC3AMJAAxUExc+bh/mkZAmPDxU2rAMIAaAI1jmIOGpKmYuDEk2OULCHmuAzgKOdxMwrmXjvBJOqk7LfE1xru5R0adw2WrtSlKeag5biEpxDEMS0RVKxpdGIVAEHGDU3xtnkTX2mvVDfUVBvAEurzdKtZTJmwE6cxbTBIMjfUkCqgB9WsxiCzyMPewKTTdEQCg87UKXF16nSFyqhnPIdIlnpM0HXHGQ0OOGm39kOwlqEV0of8eHCIGcZYXkzOjmc3kYtOf2p2SU2jbbyB5L7AXp4cLHrAuUx7j0t0/HXiJFiKgVrSWjUJda2bBB4CUH4gdOECnMErXbJWnUHnyxGserq6LMcTSJB7uKABE3CFFrf0H3GGEF/GlE4KHmry/sMoRcItOez3HNKHaMG7xedIfq8reD3+VwdcAwpwFhukUhimFrzVhhGxMYmkNkcZD3HAOBNG57em4U4JiDTRfpKva7YMAgmREdrfbyFxuOMlp5CJuQ8gVUAKhRewwO6WFdKWF9ACWxJTaQdzUbPyqog9xpT8gGIBUpRQ7bAYwNYQ2nWEKGsJCFi/KFDZiTQeLqqv2DATlwQUGHqHpGUKdb5n+oDwUNk6BpEHXhPWiofs1JCXfTLmxsGyP0uhwEdWDIksMac/STtLWZN1PZ8jiBeablX1Sd1riS7X5vNMD3VbbxS1udgBM3Rt3yTx3gAeciOrURN1M48UhOuWRiArEVpqYS2WC6CLqDROmYPcfaLPUcCSVAcDElJ+a2kFmkkaerHJVhYjmrVGuIbbPAGuiYnGVF1jiIin4EjHoz66U7okuIE2HSMioDnV1bQq+AUi6RuJLXMEbk6bswxpUr2SvOMFA7zZXpQsUjcT2jy3J/PXd+pzi3y/nAZPBg3mK+AKYgnvmJQ+8lTxRWCPS6nEYU0Rhc+64pWFOY5HX6LW8THzRnWYtMZSLC1Da4ogaS6ri9mxF+9wiLrGuzHrS6oYr9DoDzyJQhylq9Ut5GwcQ0p6ZvVrpkEDrwFtVIjzeDADdpBLxdXZFHYag4ZrIol7QJx4MtScyEjL+VV3i4wJGDxDK6pLzXMEF/2nSbgF5cziILZ+uDWRa6Z75+u60kFMzM+3u3hEPyrUwiWOeKkHpu7LdZ7vKJAFJW5h4HpZZgiw6Z5QANX7X6sYa5AkXcYA5v4QgjKjDf6Mk0+M+jIkl0mvu59u0RHRdQzxRUqc7NU9amvr0SavpyoPw4cDRQGl0RcGjSbZhpBt7qJw2PRgCT31pvRAS0XA8d/gpBC6xtUW+QoHKf//jh+M5hgZWdIrSvdLTM+zcGC+2qMoV+vjCKdz6oPDVBtVfiOoDFbd2u3GSVJjGNaAU6JiIx4FsMn2UMt3GC0Nus3BkImDQBxXvCfJODXFkK0EtS0rT0XI0GSyCiFJ0AxfYHEQcNgRIFhM92gQGK0pVDUSJL1FP1yovz4UGq/KmY7i2UNwhTqK9AIQBRB3TH2qLip5DBITnOHGXqUA/NBNfYnyV0yzUt7z6VBg2jBY3cFTSnJ1OMUgJ73Xd+qA0T47H2ej+LG5nZZK241aKddqOJMJinoA3gqh/7WMmehwi667cMuwvE1YWElNgdnZKK9lhekWE1PhEECIiMLOzCVrUp9tJghHdE9Q4RNVUBy9imqf/oGOkJwSQnW+ZHkEXGCASXRJja7iEuDjFRBptKVS+wPA+WFrs3smXgifbO4V4f6kevSXGqIg1SyTkM0hOimUSr+sM8FOWmr2JYXDXo5fzblq6WPBUYIUIK1H2EmEW57ZtKQ8oJY8HlanOnrCa4Cy97iwOswcWJOpYY/7hBUKIZzqBHkws0Y9X4BDVVjf5IirKXS8UoR58PoS1FS/RBuXMujKAuFYISUx00YY2fQLE6xPErkAwLy7wHGFKnb4lsvxOXYB4LpFiDwreAKGcQBEQHgwijQtK3vIo5Mt5cDS/rMp0h29dtz4oTRMz7373iaXE3VPwZCLAYKnysHOPD3EJBBEO4pfI7SLoG56rgqvs/ZMKHSAxYSIIQtrKhjP83VI6YMDesgIMZiKCm8iSWGGGpidUHzC8qNKKbvKads0wELhU8CufkPomtpAaBgRdeavKM6aY23bxtBFAMH1i16sgSYdIsWt1ekKvhiJgSCO6Ji4wuFYirkY8Y6SES594kt91QQHvuuZTTKqfFMXvLPd4ILozVlc9XmfGZx2sMOMGCAA4WunSahUKxIjYEMZkuFa2PITzK5ry2m9oKWvSK2OG4CR5ue+5wu6hqy2B1EzG+iLNgJP4guLGcWofctj+o+EqD7QXTd4AIJ+2PAgCANGEzxiDKXlCcYi4Y2RAN5YW8WY7skJSqnkAWG0Wp4BX9hopiWycOmNR1Wm1vqRKd93Fy0SncOvrFFVu7gGMH60+duSC/s+0RpNXJb3lqhpf4i0fdny6FQJxeLfZE4gJ6SVO0dgIpog85BS32IMs4hS13Sh4O7jz2FCHckxP3OJ1im/HN0ielhLNCSBFVFZtiRDiFIEZOErpKmegKG7tBjA8V62IMROtDUBUDBtEZkVN69JCi6svDUJj8NmrBTR/Gxt5fHEhSXnvvBv/9auuv/4LjJ7nsI0CK219c0TTW9eJxHpT69KPzA7bo9FbFsenefNsPC7HJlw23jNuKYJeEZdInKFfAnH8qDVyWhIYWtWaieSHp6yBqhKeW/yMPKAqEgjvAVEZE2/GBV6kqS9xxmod36txmMo3XXnukLgSIADQeNMb4ZpGbJPYXNuq15CCJ2ouEN5Q8cisFrFlZYMYm+m75UH5QdWZ27X+o6unBYoai2ZnKwFz1a2/9Llhq/1fs/4U+5PxMu+Pu6yPbtGmEhNZeqQEmEI6BiI1fOyJxaXXJw2RbQmrdUHk0+yKmQXiGgBawcY1MhogfMMJAktGgHSa5eta5WhETYtMnks8sH5zKUA8p5h4ol8BoDTTHVzbfpf6OuNSWxICIhSBeQKLhKUSRq5yDAG3Akiddsfi9qb+ETcoP60cvuinJk/pTk98hSaaLynwxtbOpbHJ7ePDBR5iHvBI79AUGVNnOP4RzsSPjtvtWo82UhuqTUxKj3xjYoioOgaM6jT1TBxSz6YnEGzGulIZT2S1YeCpnABXKwqVTjyIrGDyBlA8h3iC6yE6pRvH0FiIB0A03uBCPIRKtz4tgR9dmNM4GWbaK3szm9LcFR992Y3XHdjFx+PsBemm1MkCLYDTdvr0n7jl6p3vuH2YdD5R9KY4oBxDlI25rNt2GQeVhXb6iDJxilliWGSBeBr1ChEZtsxcnS+aoaDVLrEXVr4B4QnsFb4ILU7w3riEuIWUNQ5pxJmBYXkCBs8sfT7E51ptKF2cITFmXMLAdO25hfSgtEkTgR/i1iYQ10JRkjaPkgxaP/pESNydSnpbOEJaKj/1kPrrXJwZp6xprFvCLf3JF/eHiwlvXvJ0ZsbXMVCjkk8aFBM3ABhhwmt0lk59ASRnodl0XnRJQPhVR35TxossteOJb+lkq131YQQnsgJ6k6d8AWNcRlEDiXLiEPURdIn40/YhlBcwEluyOwSMXBizxa09S175UVtUXXUk6DpGhDsWa2uc7/L1493bX3/9bpMNO6RR13dnxClqLuiWZ97yi18YtDu35egW3iOpUPwo/I4bwim5cYq4Bc8AC20qZTY33GBflkA3GGdoY6lzKTgkGAYregBAPZdotbOi8VLUyvernTZUpkmzPUfIgzyytDwwq2WsHukGDJyl0ESWwKAh7dp1TTMPdeIcER0fnMXDNaeXqsNXdDjlaPOS2JjrwyXFsDIu2a0PBp2mO2NQ1rbbHeY7B71JDncnk4oXfApe7Bmh8DMUvomvIMYgujaW5hm0fcBABJG4ARwvkpq4ASExBlAmjjwgHgSIqfLm1wKEYWFlfZteVAk4D6CByMAFkgGgdMUhqBdd9Yr5q2tZIyKxiPMwcJQmcGAz5a14IhGLTlwStboo+MmkP909sLzoPkoxt+2mm06LS1T2rEAJ3PLPdr7tr4at9JMFG8qqO1EWADPibSusM7hFHINegbieY7w1JvluFtQK1yC2FBcXGPcIPBE+rG6FeNVj4mbScm0rXGEDnAdW+UrzocTTCreoDfPkkR50iUDwRylK07IHDlG6cYquuQzJK2iguD0whJzVwiUc0rb7VZ8PHJRx/elX/eKbjsyih0/3JVR1cNY6JYyuVRQ7l7oT23vZMKnzIfc9Rm6IxQVZudelFcc0oYLkfEKoVaa4Jmq6oGlIqkiJCr2OkK4QEA0xyRaYckoX5VTFi64QJ19tND7kCQSlKRR3BG7xccQWeeH+iIgs51u0qI1VqV5A+TT1bZ1ZLjmIX4HCMwx8yW8yHtuM8bNY2d7E1zj9Xz/L0y+/UjJwyw+85623D6L0E1mX++idiRJrzGVwypDBiVNyBuo5BhFD3PYUKyIoiCwglNWl9IZL7PasOEfEhyJe2UNQA4lVDSd5HSP48XCMiK6VH0LpGDPSqS8gjHOIq82g0I1jDGWJDZF+jeOSog3t4Yjm+iGhskk3LuGwNm73kObTUdSLv3D3wtG/Vms33XSTx1AXp+EeNaeoj15Z7Fzs9F7czyeSuhjyNYxRZNwCx7RMPjccQ9lEt/NsjTcrjwmFVedz/Bo1ICCSQi+2xDE+7g8oPVCq48WUrkM+iYrzE8AwMBmLcQmVjGvI11FKAfvy5TcqyREqSlkFIVU5walP46iVAnCJFDyLMe5OIrqmYj6h+BHEVvVZPlBKWVNVof564VlzihoO3LLtlp//wihJbhu1OazsTlQ1lljObeIBPpf1hdeHcHK4oBBHsLRWlfXaa1a7KfqQJs4QoQMgCrXifWgcQb7pEGbirS/POXb7lzFaX5TXJtHyLY7IaoARtQSIVrs8w/T7DMUpY0pdczUvOHw5K0+qwNH3LqXg406vbven0vZUa9/ysfzPVPZMFLzKy50TTlFDvWG5c6ndfVG/nEBe8XgLumXEG00xHxoQn/h/4gq+g2lrW3G/ulU/xC2ESEHfaAGb6KKMF10CpSlP6EWSB0ptW57qqAyhrgWe3W+HgCbeSJfYkvmrfK1MT2SFnmtstVJODUU2HuI442MK2wkDYIijjEtQ8HF3vOxNT6dI0j97xY3X7zsbLlEf1rciZ+sCt/ybnTf8FfrjkwPs86IzyfMPcIssMXTLiN1tBnvn5v3no2wFMzmFWsF6oMH0gnRD0CumZxquMSvLE12codN+r1dUz7cRHiUN4aqFJU5ZrWscFgCh7kO4g3LSLYFDiAqJVS8gGJe4g6qeSzD9426XD05Pp73N/Wo4GH1E9Pycx1zRM3LnjFPU6zj7lhOt9nbEVxxxHhbBLbzdz2qytcqiC/+Yl46KcV5yM3pNXNeEtsqhhNKU76+9mFK+QAhc4UWZrxM4wtRW0456CdwiLtG9kQGrW+JLpw6isRFXneua/qz1JpFsG1OwysS1qsQaaYCiDhvmpDdWdScneYjB/cmON1z/BZnB0ilq9kzdo+YUdShu0SB+aOcNt9PgJ/OkG2WdiTyDWzI+hz4K3MKKMmtMusU4gxXMBLXipSuMY5it5ZHmLTCf7y0t4gILrzMs0xF0KPAsTmhcpHzG5Y/jfVyi6hinlYuAUhBivNprNnTDLhzCMh6B5AGhsl5cErvQvukNyjV4WGhoUidSPc79UvZqvZlxfd/zNtFkvSdWVOZk7pxyijpJ6/IWNo4/FNX9XtGZKPJ8RFKG6JVukYEKEVnSWnGJ3jnnesUzcYuTJ5CCXrFvn6gcmbbqVU5l1JbIyLWlcy1ukUfSW1tK140viTSlI3msMJcNl6gx0vgR9ynbP5ViMWtbuSuuqSgwVCNmoSX9btWe4AuXk60vHygOfEJlT+eIfqXNb4qcE05Rm3CKcctL3nPD7akbfG/d6f49f9k0LboTxYDPjo/4iNkQOx4rzWWN99yiVe5Fkj3Sw2TNcmLyXtcQKg3Pt4t9GqHpDRGauiqna+MM7sdbO1zr84cjuGIg7oDcelxMoIg75KUX1jpxibiDqsYBKmS6Q6HgUgYnWL6eLxfzzFtrbLzqbWKf5qpPv+Y1s8PmiN6gXtv+6cbPGSjqMADzI+9+Gx/nH70g6o99qrPp4tRNXuCWu5P1Mk9Y6ruLAiWYyGYaG7EDwT0Y+r6k9wJERJeB4NMMLIiUkTbC8yVX3pbw357kU9JcR26Z6yXCAaHydX/E/kFY8PUiaC2VDAjAEgB4CntAKC8sDAxDdLWyNoytsXbdGptKO9PdrMzy31GT692DX9vtI8XV3Tl3gGNKDvaO5t7+/ndypv+28sSBXn5ib1lxYywtB24Mkdbnawxdfd6D7bWJHWYvUSQxYjerCHXmpSUnu0AKXCJDT57YfQ/K69zKiywfSlyZM0oSCzMktCQtw7CG2YgIKPVpXKEAbwVU2Oraj49jPUps6p9ASnst190yU44/+Yqkff70X/7bl/708/TuCS70YK2d6Y8fw5nWWqd84BgdV+/49et+mS8UvrA186Rj/c2XJO3xTcWwNVbv4xvx96V99wCfjTqqx5S0QjV/vAfG6wZ9HVTnUjyb4ZYosABnzBPOEy5CwmXiQ7xEoIAkuTmH0v5BXqu/4QDKSETpVbiId59UNnCA4sZBhCayVBZvKIlD4ArFxUl69TPR3x3gG2StiXHXm+KNsry5B3+an4+i5ZM6dfuYOeMUPi+ur/f88dvfezmbrN9uDY5fWxx7oFweHI8HoxF/F4A/x8QDYFN8TG2L4oxG7xH6vYaA8RygpReWn8qYIaCQfK+YucDZqleaLsLsjLr+WpxmXxwSICpAngGpsnSwssZ1rXpkeutL/ahd0gTOWOw6m8fK/oWXJ/0LL7l3eWn4rBe95vrjG5ZTNF05JlCHzyn9h1+/4SudfPTCUW/qPcl5l0UTk+dHE/1+pdcrOhxRLBLuwR/GGDiBmFiEGEO89IiO9U1siJvwiVZqs2ptAZNmusDSmzwtbKU3ZX050pROZTOBydO1gUJ79qSvQmvPl5G5/BCv9jrikqhq8yTP2JYtbjkr3idAHq2C91QT3b5FTnpGXUm0/dGN73tLry7fFc/v6Q0X95ajwVJSZDxeAKfoW1nY0Daw1cGJR7Rq1YKPBxEnsFaylL1ayaIqF5IUt0NNO9TyGapuBfwlN6/gDAr6dIXem84BkEgmXLuoeuePRdNPe2a1GG1+14t/7M3vOBccouHLnfN9im/24b8CQ4LjubMuvXb2ug/80dtu+Xxr5pJP9Nu9p6YLDxSjpfkk589iFXqgD/lkD/OtNNNQDEAgi6WugsJlyA7lfZE16SKsF22mg1n9EmFGeFU3witUFUA3UKhDOd0nsWMVAaJ6cVF1ptJ47NJrjh2rN//oS1/x5v+uBUcbKzZGGMbZhmH4Z1v/rOrt4jFYibVd7/iNS3mg83290fwLysX7qtHCkSgfoGfQLxWHmXpwQZ/U8Nyx2lUYtB3NeEqKjg1clGvixlOhsKoTN06hTf05EGUFQKQnrCmsBf58yyoQAkPAoNr4+hwiq90av+JZx5airS/d8Zrr/vKzn51Nt227iZOfFW2knh6VWzvkR9XQmVbW6hL3/P7sLJ/unHpbpyrfmiw92B3N76nypUHMN6d5g0tbPi/KfPtedCkuGohvQE4E897Sg4BrOMMKr+aLQ8xQsI8hkA4YMICBYCJKil0izEw2FeXYgQ/Dp51O1JmaitqXPP3Y8aHb8fI3/ur/0CnwtbOzOtE5p+5xA0WzEDD6Fry45uO/vPNlvTr5ndbwwHg2f3+ZL51ICv5IprjGzldMlzS0/+ZRm47w4Gi1rzily5Fm6YRK8XcjiZlIIqERU6bwhTZ/CE9PovOHp5L2xJjrbH1SHU1v/TzHPZ/MR8t/+pI33npvWFRq/ly7tVM4122fVntSkLtvvjnRivvEr7znsijufryfzz+rXPx6MVo4lPBtX/5EI+dmWrDiDRtxQ2wjcZMmM6KxpIxzlOflkR+H6jVenKK3ukxkqY6AQImJh9jb8FpUz3VmLnTJ9Pn38H7lfxtG5Se3v/G9n6c56/ixBESDfdxB0SDkwkR37dzZ4xuf7xqvqrdEwwer0eKDLltajsshwLALlZ4RDb0jbsTXFWkyW/Sup2YlmcR/K6lrj6YBoVr6bC0nwQICNcOrT91u1N60xbWmzjtex/3PjhazT5R7996249Y57VttfM+lxudgNMZ6zpS62v5mp+FuGBeAUXh1f+rn+EM/7+gUBydGi/eV2dLxpNDr4XANf4wFIkNU/hutWe3mSPNWGRkSTXp13BSGlYQneSsG1kR8IdjgFb6B3J6cdq3JrRV/NPqL+dLot9zi8b988exHD6pptbmbP+x86Iqt9Y4dq3+L0vp6DH82FCiap8SZvnS9Y8eO8lPvffe1sev+dr86fnm5fF81XDxYFXx8uc7QxHyblrejZBPBHQ0Aer1S+h8G4MvZfFGARyx4WBHrSbdK7J1Me6SUO6Jxj0+LT5x/L6+E/0GxsPQnL/mlD91FERoLXLE73nbTbn8/TYnfQrfhQNHc1+qZv9i5c2YQRR+ejEcvdMMH63xpT5QtLfJtaNQudkCtgzE9q9yBN/TnU2Xawh363pe+uBR3eVe/3+WAunXvqErv4C3aLyMJ706GS3e0XO/eH579IN9E9Ewnrni8gNAYgtuQoITB6dhCHCPTczQzcSV/a+vZiVt4bpnt/75q+fCTq2HOI00Awr0a7u+z5UlHdW/iwTLP72m3e19ZXB7e2UnLu8tR9sBM6+iea2d3P8x8/ezstvRzbttjrifCnE4n3NCgaALiGoVrN2e7ZmexVI89o6qy759fOnHRRKf1jTwvv1ItH7nn8PEnH3jDBz8YHpxX1RUnXfVctzs+dOfWeru+ZXbTrE5pTGStFNoAkQ0PSqBRDUF3o7b1tVJxT0h/pHAt8ZW/kQF4pPH/fwPK2sHLKnY3z0a7WfUhfaOv/jDOb4ffpsC3KXCuKPD/AEQ5l8wiY5JaAAAAAElFTkSuQmCC" />
                      <div className="botw-menu-item-count">
                        <span>x</span>
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-1'>Tab Menu</h2>
          <p className='mb-4'>
            Images not included (FontAwesome).
          </p>
          <div className='row'>
            <div className='col-md-12'>

              <div className="botw-tabs">
                <div className="botw-tab-menu" style={{textAlign: "left"}}>

                  <button className="botw-tab-menu-item">
                    <div className="tab-name">Database</div>
                    <div className="tab-img">
                      <i className="fa fa-database" />
                    </div> 
                    <hr />
                  </button>

                  <button className="botw-tab-menu-item active">
                    <div className="tab-name">Folder</div>
                    <div className="tab-img">
                      <i className="fa fa-folder" />
                    </div> 
                    <hr />
                  </button>

                  <button className="botw-tab-menu-item">
                    <div className="tab-name"></div>
                    <div className="tab-img">
                      <i className="fa fa-heart" />
                    </div> 
                    <hr />
                  </button>

                  <button className="botw-tab-menu-item">
                    <div className="tab-name">No Image</div>
                    <hr />
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Button</h2>
          <div className='row'>
            <div className='col-md-12'>

              <button style={{ margin: "5px 20px 50px", display: "inline-block" }} className="botw-button">
                Back
                <div className="botw-button-content">
                  B
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
