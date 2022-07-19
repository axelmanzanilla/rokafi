import { Container, Product, Title } from "./RecommendedStyles";
import HomeTarget from "../HomeTarget/HomeTarget";
import ImageCointainer from "../ImageContainer/ImageContainer";

function Recommended(props) {
    let products = [
        {
            name: "Xbox",
            image: "https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
            price: 19999
        },
        {
            name: "PlayStation",
            image: "https://m.media-amazon.com/images/I/61gimpyy0UL._AC_SX466_.jpg",
            price: 9999
        },
        {
            name: "Nintendo",
            image: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
            price: 9999
        },
        {
            name: "Xiaomi",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVERgSEhIREhISEhISERESEhERERERGBQZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QD0zPy40NTUBDAwMEA8QHhISHjEnJCs0NDQ0NDQ0NDQ0MTQ0NDQxNDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NTQ0Mf/AABEIAPUAzgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABUEAACAQICAwkJCwgJAwUBAAABAgADEQQFEiExBgcyQVFhcXSzEyI0UoGRsbLTFCQzcnOCkpOhwdEVFiNCU1Ri4hdDY6K00uHw8YOkxERkZaPCJf/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAQQCAQQCAwAAAAAAAAABAhEDBBIhMTJxQRMUIlFSgQVCYf/aAAwDAQACEQMRAD8A6pm+aLRQHRapUdtClSTh1H5ByDlPFINChi376vX7nf8AqKAUKo5C574nnBtF0aWnjKtRtfcQlCl/DdFqOw5CdOx+KJPY25ydQA2k8gjK27I3uI/tsR9Y0L3Gf22I+saU2ZbplV+50UfEPrGjTJCattiFZmI5gBzyufdpUoke68FXpUyQO6XrqbnkV1Abo0rwHtZqjg/7bEfWN+ML3If22I+m34w8DjKVamtWi4dG2MrNxbQRfURxg6xHXtz/AEm/GBF8DJwv9tX+sb8Yg0P7XEfWN+Mc0yNV79Nr+cff54d4yNjRon9rX+sb8Ygof2tf6xo80aaAnJjbL/a4j6xvxlZnmcUsLRNarWrgDgr3Vru3IBfnHnHTLNzOX76NVmqFBclKdJEXiL1nIvblsjj50QRblKiC++HjqzsKTYjRFyFojujqvKzG4+wjnMCbrsyOypmR/wCng/ZxGc4dsGr4Wmvg+2wt3VrA90YDbcEN0C3FGcjxLOGBKsqMAtVVKK4IuRY8Y1eebI6aLaTbtq+OiiepkouUUqTrl8kz86cz/aZn9DCeygG6fM/HzT6OE9lJ6LH0SWvRR/bKPv5fxRUtukzX9U5mekYYeilAN0eccmY/9v7OXyLHwJH7OP7GtdL+KM1+ceccmZebD+zhHdHnH/yPmw/sppWMbvD7SP7YPXv+KKFN0ea21nNL8y4W320oDuhzTlzX6OF9nL+xMcRIfaR/bD79/wAUZ38vZrxHNvo4X2cBz7OAL/8A9Ww18DDN9gp3mro079EUxkftV+x/euvFGXy7fRxdGsExCuyAgOlWmUqqOXbrPRo9B2TsuU5nSxNFa9JgyOLixvbmnJt12WpXwjkqO6UUarSe3fKVGkyg8hAIty2PFLzegrMEqUr96yUq4XiTTRDq6SzeYTNlxuEqNuHKskdy4Nrg/hcT8svYUpV7r8Y1LDMymxdloi3CAZS7W6QoXymWmC+FxPy69hSma3yqhXCIQbH3UoB5D3ByJWWR7M3n+ZPhScLRZkZAgxNWmStWtWKhiocawi3ACjnve8zf5xYmi7Kz1Ki3KVsLiWerRqqCQ9N6b30TtFwLi3kj+62qajHH0w3ca2g7stz7nrhAHRyOCdIXB2G4txTOUEr46stOioqVWspYbAALadR9gAAJJPPt1REubN7uMzBcPmvuWi7nB5hQGJw6MSWRihdbnlAR0J2kBb6xNDu43Ye4tClRpiriqyl1Vi2hTphtEMwXvmJYEBQRfRbXsBxOSYui+fYWnh2D0cJhvciVRsrNSouGccxZmseMATS74O5mviXp4rCkGvSTubUy4pl6YYupRibBlZm22vca9Vi0QlW7ka3H7vmxVYYbE06aVHDmjUoaYp1CgLMrKxJVrAkG+u1tWqb2i97+Q+kH0A+Wcy3G7ksUmKTF4tFoCgrilSDq71HZSpdypItZjx3JA1WvfpWG2eU/dGVya3cDrxoxxzGmgRY2xnNN3Xhq/Hy3tqk6U05ru48NX4+W9tUiJY+y33xMFo4lK42VEZG+Ojaiecq4+jKDDrN/u7wulhWfjo1Uf5pJRvXv5Jg8OJ2dNK8fo5GpVZPZKpiSUWN01klEljZUhSiGzQRIF5AGxOsxxEi0pyQlO0TYKNjS045Tp3McCX6Ip3sLL55FyJqIKjhRojyxgmEYUFwJuxjMPgavyNX1Gj+9Fwm6phvUWRc3fRoVFHCalUvzDQaSt6PhN1PDeosxavtHS0Pi/ZusH8Lifll7ClMdvtVNHBU+uIP+3czY4P4XEfLr2FKYTfnJ9w0yB3oxqFjyXw7gffMpsXZzDBZ1icPUL4WrUpuRZtCxV1HjowKsBzg2jOY7p8bXUpVrko2plp06NBXHI3c1XSHMZWd01EHgsw0rbSBew6L6/IOSO40UhU/QlmpsDYNbTVSLhXsANIXtcCxK3Gq0ROy/3tdWa0Pi1uyM7m7The9wD+VKJHEtYnmHcyPvE7nh2XTGmbLrueSwv/vpjRRlVySGWaSsIe98rf8A5jWNRQw0eMXNiTrNiPsMcwp73z/bb8DBFdVKh0xtoto25jGxszm27jw0fHy3tqk6QZzfdt4aPj5b29SIlj7On5vhu6Ua1PjenVReZip0T57TluFFwDyi868/D+d985Q1PRqOniVKifRYr906Wll2vRztZHp+yXSEevI1JixsollQw3LrM0NpGdK+hhKZMkpQkhaYEMiVuRJRS7EhQILQ7QFZGxtiGaNER4pCKx2J8jJgchBc62PBEeYhBc7eISGwLG52nzCNOxdEPHKTSqk7TSqk/QaWO9Hwm6nhvUSRsen6Cr8jV9RpI3ouE3VMN6iTFqnbR0dB4y9m5wnwuI+XXsKUgbqcoTFYWph3OitRbB7E9yqKdJHtxgHbzGPZIxbu5Ykn3VUFzrNl0VH2ASyvMxqs8vZzlNfCVTRxKFHF9EnWlRfGRtjKf+ZBHfEKo0iSAFRbljzAbTPUmJwNN10KiI6HWUdEqJf4rAgeS0iYXIcJSN6WHoU28anSSmfOIUS3/wDDCb325VsMpxFcWr1F0VQ/1SbbH+I6r8lgOWbQmWBwqf70vxiThV/3f8YFElKTtkFVvqH/ABJtJLDn9A4vvPljioF2fdCMYlGhJjTGLYxswBiGnON23ho+Uy3t3nRmM51u18NHymW9u8RPF2darDvj0mcvz2mfd1amuq9UuTyBwGJ/vTqVcd8ekzn2c0gMfWbjY0vN3FP9Zt0zqT9GPWRuK9hYHDgCw/5lkqxnDrJWjLpPkyrhDLQgI6Eji05Gw5GQkMrHisSVhY6GSsbdgvOeIR5zbZt9EY7nGhEdgSbnbFKkfFOLCRtiog5gn6Cr8hV9RoN6LhN1PDeokkZinver8hW7NpVb27EbCR71w2y4/q05Jj1HaOjouIy9m7yLZX63W9IlmZWZFsr9brekSwJlLNAZMSTATExCsBhGAxLGMAmMbMUTEEwIsS5jZimMQxgRY25nOt2p9+j4+W9vUnRCZzrdt4YPlMu7epESxeR2DEbT0mYPPPDqn/T7JJvMR98xGep77c8q0z/dA+6bNN5f0ZdX4/2LwqyxSjeRcAl5cFdEc8tm+TPCNq2RO5AdMQY64jUihsLRiXWOQiIxURikLQkkpAEjsKI4SKFOSFSLCRNjUSvzNPe1bq9bs2lBvbf+JhvUSajNU961+r1+yaZfe2/8TDeokyZ3yjdplUX7Nzkh1V+t1vSJYXjGFUK+IAAAFcahs10aZP2kx0mVlrDvCvBCJgACYgmAmJJgRsBjbGKYxsmAmETG3izGmMCLCJnOt2vhg+Pl3b1J0Qzne7bwsfHy7t6kRLF2deY3W/OfTMnugT3wD41NPsZhNPhnuGHOTKHdGnfo3M6nyEEekzXh4nRm1H5Y7FZWssKkr8uawk52lk/IhClAjvGSY5VaRi2uNIrY8sWFiaYj6rExpWICQwkeCQECRsntEKkWEgDiNvi1HTyDWYcvof4obzdPetfq1fsmmO3tz/hMN6iTS5tinbDVtVh7nr35fg2lNvSoCzAgEe5MMdYB16C8sz5k01Zs0zTTo2OW1CxxDE3Puqot7BdShUGocygc9ryUTIOU7K/XK/rCS7yskxRMSTCvCJgRsBMSTDiGaAgMYgwExJMBMSxiDDYxJgREsZzzdr4WPjZf21WdBYznu7XwsfGy/tqkCeLyfo6nhHs3lI+2M7oKF6d/FYN5DqPpERhjq8pliyh6ZU8YImlvbJMoit0HEz2CNpNLapEooVNjtBsemSpc+zOrSoj12kZGuYvGNYRig0siuCtvksaUkoJFoywpLYXMok6L4KxLkKL+YSBUxgDaI79htUGwX4x4vTK3dBnWi/caZ/StbSYf1SEavnnbzDXxiTMnwgCDznnPLJqNR3MTlultiG3dG2mw8VdQ/ExynQkx6doapFuBx5K7NU961ur1+zaUG9QSHNiR7zw2wA37xOX/AHrmmzdPetfq1fsmmY3qeGep4b1EmXM7aNunVRfs2OVbK+w++62wgjaJJvAvwmI+XXsKUTeVkpdhwrwiYRMCNgYxJgvEkwFYCY2xhs0QYEWAmIYwyY2YEWEZz/dt4X5cv7arN+Zz/dt4V87L+2qQRZi7fo6RhDq8pk6g9jK/BnvfPJizXNGbG6oLG0BpaY2Hb0yPoyejXGiYy6WijL4ZKUU+UUmbLZfnD75Gwx1SyzenenfkIMrsINU1RdxMclUi1wi3je6HNRh6NxY1HuKanXdgOERyD8BxyTSdUpl2NgAWJ5ABcmc3zXMHxFY1GuAbhF8RNdh08vOTI4sX1J2+kWZMn04Uu2DKgXrBmJZncszHWWY3JJnT8BTtTHQJzbJvhU6SP7pnS8Ge8HRJ6r4K9G7bYTbYFEDnXApmU1/IxnCe9K/VsR2TTI71HDOv/wBHhuXxUmuzZvelfquI7Jplt6LhN1PC+qsz5ezbh8TZ/r4j5dewpRN4o8PEfLr2FKNEyBCXYZMImFeETAgHeIZoktCJgKwExJMBMQTAQGMSYDCMCIJz/dv4T5cv7erN/Of7t/CT05f21WC7LcXb9HRcCe8B5z6TJqtK3KHvTI5GP2yUGsZumjHB/jZLUxxl0hbjjCNH0MqfBdHkg4lL02B2g2IlPhlsbTU1KQYHlIt022Sgq0tFj0y7FK00U5oU0yLuorFcIQP1yqeQm5+wGYROEDzibHdc/vdBy1B9it+Mx1pv0yqH9mHUP8ydgzo1FPiup8l/wnRMsrXS3JqnOr3UN81umazJcVdRc6+Pp45XqYWrHpZ7ZNF/VOuJDRJa4iZiSN7fI1mze9a/Vq/ZNM7vRcNupYX1Vl7mze9q/V6/ZNKLei4bdTwvqrM2dU0bdM+GbBz3+I6wvYUoxpR6pw8R1hewpSNeVkZ9ii0STCvBeBWGTEkwiYgmAWGWiSYIRgRBCMF4UABMBu38JPTl/bVZv5gN2nhXly/tqsF2WYu36NhlFfRqFDse4+dfV948suqi8czNZSr3HEfvmhwGJFRNfC4+nlnTyR/2Ofhnf4sdpPJlNpXONEyVQeUSXyXxlTosUMhZlh/1wPjc3IZJRo8LEWOsHURyiVJuLs00pRpnO92FTXTp+KrufnEAeqfPM1zzTbtqBSul+CyFVPEQGv5++t5Jm026PLsnZ07X000cTOmsjTH8O3EeCdvNyGW+VVSraJlVhBr0TJCko1uMcE8o5JKa3cFMW4tM3WEfSEddbSjynF3trmhGsTmzjtkdXHJTjwVmbeDVur1+zaUm9Hwm6nhfVWX2cL72r9Xr9k0od6Pht1LC+qsx5+0btP0/Zr63CxHWF7ClIl5JxB77EdYXsKUhEysU/IWWhFom8K8Cuw7wrwXhXgIO8K8F4UABBBBAATA7svCvnZf21Sb4TBbsvCx8bLu2qQLcXk/RscVh7k9JkfDVGRrjZLqrS1npPpkKvhp04yT4Zy5RadosUdai3G0RFMkG0qaTsjXH+ktEqq4uNTcYkZRr0Wxnu9ljReSUaVlF7SejTPKJqhIr91OU+6cMQo/S0zp0udgNa/OGrptOWDkNww2g6iDO1I0w26/JAKvdEGiKl2VhsD/rKebjHSeSadHm2vZLr4M+tw7lvXfyZnD1OI8LiPLLJ6YqJq4Q+2VI2aLCzKbW5I9hsSUOvy84nQkr6OY6XZJwGKKPY3Gux6Zt8sxQddsx+Lw4de6JwrecR7JMxKMFY2tqmbNDcrXZfgyfTlT6Nbnae9a5/wDbV+yaZrei+EbqWF9VZpsycNg65H7rX7JpmN6Lht1LC+qs5OXs7unqm0a7FcKv1hf8PTkG8m4vhV+sL2FKQZAqyeQd4V4tV1X5Bfi57beiJcazblMCDVBXhQQQECCCFAAQ4UOAAmD3Y+GD4+W9vUm8mD3Y+F/Py3t6kRbi7/o6dVTvj0n0xh6UnOvfHpPpiCk1qRmcbKivhpAOkjXE0T05CxGFB4pdGfwyiWN9obw2JDC/HySxoPM5VRqbXGzjlng8UGA1xzhxaHjyc0+y6RoMVhVrU2ptx61bjVhsYf72XjFJ5IVplap8GyMk1T6OX7osE9F++FmB0W5CP1WHKOfolUHvOs59kyYygUJCVAO8fbY7bEcan/WckxuBq0KhpVVKuvFtBB2Mp41PLOjp9QpKn2jnajTbXuXRZZZjNE6BOrij2Z0LWqLsJ124m4jKRH45c4HFB1NN9jC0tk+bMq6plzlua6eExFNj3y4av5R3JtcRvR8NupYX1VmXq1mpB+UU6qHnUowM1G9Hw26lhfUWcvWJKSa+Ts/4+bljafwzW4vhV+sL2FKQJOxnCr9YXsKcgzMTy+QumhbZo6vGKDb0xBMk4bgkcrLa5IBNjqFnUk82uRYEWuEHCgggRBBBBAA4IIIDDEwW7HwwfHy3t6k3omB3Y+GD4+W9vUiLcXZ1h+Eek+mJi34R6T6YmakUCTEMkchRgQcRhwRrGqUlRGovxlDNOyyJi8MHWxl0J1wyjJivldjeExIIBB1GWCtqmXpu1J9FuDfzc8vcLWvbkiyQrlBiyXwyejkG4kfOcoo4yloOLMt9B1A00J4xyjlHH5jJAF9cCsQbiZ65tdmpP4fTORZxlVXDVO51RtuUcX0aijjU+kbRIiOVII4p2bMsvpYqiUqrcHXq1MrcTKeI/wDBuJyfO8nqYar3Op3ym5p1ALLUTlHIRxji8oJ2Yc+7iXZg1Gn2flHoi5pUDU2fjNNw3Tomarek4bdSwnqLMXXb9G4/gf1TNpvS8NupYT1FmfWeSNf+P8JGtxnCr9YXsKcgXlhi+FX6wvYU5XGZC7L5EvB8fCOtTqXSC/xcE2Nr2tbZIl45SdRtXS2W2d7z8/QdUbgRb4QLw7woIEQ4IZhQAOCCGIDDEwO7HwwfHy3t6k3wmB3Z+GD5TLO2qxF2Hs6zUXWek+mIkt01npMaZJepFTi0MwotkiCJJEHwFEMIqFJBZW5hhA4/iGwyswOJKPoNqF9XMfwmjdZT5pg7jSA1jbzy6Ek1tZnyRae6Jd4apeSmQWmXyrGkd620cvGJp8NUDCU5IuLNOGakhtGKm8YzvLaeJolG2Hvke12puBqYfeOMXEm1acaRrapUnzaLGuHF9HFc4wj0TUpONF0Rw3IRomxB4wRrB55rt6Ud+3UsL6iyx3wMm7thnrot6tCk5IA11KIUll5yuth84cYldvS8NupYT1RHnnuphpsWxSXwa3GcLEdYX/D0pXmT87/RVizaqWJ0Rp/qpiFAUBjxBlVQD/CeWQDyHbxiUjyqpAggggVAgEEAgAqCCCAAhiFFCAwCc73eVwmKLtsQ5e56Fq1SZ0UTC75mVVHpitTUsAmi6rrNgQQbcdreYtyRFuJ0zpaZpTZjo1ENybDS0SfIdckitOIbm93606S0cZSaoEUKlanoaZQCyq6tYNYar3GoC99s0FPfHy5eB7sXmFKmB5u6WmhODXZFxyp1VnUdMGJZZzlN9PLxtGKPOKNIHtI8N9fLfFxf1NL2kW6K+Q2TfcTeMsbMxX9LGW+Li/qaXtIk76uWeLjPqaXtIb1+yLwz+Ebe8Q6XEw530st5MX9TS9pD/pTy3kxf1NP2klvj+xfSm+0W+YYYo+muy95cZXirgc8xeI3zcsdSpXF6/wCxpe0kDA74uBQm4xJW+q1KnftJa8sJQpvkqjgyRnaXB19TcRiqlpgqO+3lqjWuM8lGn7SHW33MsI1U8aTydypC/wD9ky7kmbnCTj0ajdFXCYHEu2xcLiCeK57kwA8pIHlmX3ouG/Ng8IPLoKfQRMPuz3fvjk9y4ek1HDM66WkdOrWIIIBA1KL2OiLkkDXxTpu9Xkz0cO9WopRqpUKpNyqKoUDzKo6VMhJ2yeOLiuTcYmgjoUdVdWFmVhcEdEo/zeKfBVj3Pip1k7tojkVtJWA6SYIIiU0mg/ye3jUfqW9pB+T28aj9S3tIIIyG1A/J7eNR+pb2kH5PbxqP1Le0gggG1AGXt41H6lvaRX5MbxqP1Le0ggiDagvyc/jUfqG/zwfk9/Go/UN7SCCMNqDGXv41H6hvaRFTL2IILUSDqI7i3tIIIEaMrjd7XDsxqCoELteyUyACdurTsem1+eNLvdUhsxDj5n80EERaL/o/X96qfQ/mhfmAv70/0P5oIIAF+YK/vVT6H80Wm98pNvddT6A/zQQQAkf0bp+91foD/NIrbgVuR7qqaj4n80KCABfmEv71U+h/NB+YS/vVT6H80OCACfzCX96qfQ/mhfmCh1HE1Poj8YIIAXmTb3mDosKrXquNhN/SxJHzSBzTZqAoAAAAFgBqAAggiJI//9k=",
            price: 9999
        },
        {
            name: "PlayStation",
            image: "https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
            price: 9999
        },
        {
            name: "Nintendo",
            image: "https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
            price: 9999
        },
        {
            name: "Xbox",
            image: "https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
            price: 9999
        },
        {
            name: "PlayStation",
            image: "https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
            price: 9999
        },
        {
            name: "Nintendo",
            image: "https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
            price: 9999
        }
    ]
    return (
        <HomeTarget title={ props.title }>
            <Container>
            {
                products ? (
                    products.map((product, i) => 
                        <Product key={i}>
                            <Title>{product.name}</Title>
                            <ImageCointainer src={ product.image } w="100%" h="100px" />
                            $ {product.price}
                        </Product>
                    )
                ) : (
                    <p>ERROR</p>
                )
            }
            </Container>
        </HomeTarget>
    );
}

export default Recommended;