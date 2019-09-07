module.exports = {
  context: {
    link: '#',
    attributes: 'aria-label="descriptive text about banner action and / or image"',
    image: {
      defaultSrc: '/images/banner/banner-320_176.jpg',
      sources: [
        {
          src: '/images/banner/banner-320_176.jpg',
          mediaQuery: '(max-width: 480px)'
        },
        {
          src: '/images/banner/banner-768_416.jpg',
          mediaQuery: '(max-width: 960px)'
        },
        {
          src: '/images/banner/banner-1024_416.jpg',
          mediaQuery: '(max-width: 1328px)'
        },
        {
          src: '/images/banner/banner-1920_512.jpg',
          mediaQuery: ''
        }
      ],
      alt: 'banner-image'
    },
    imageCategory: {
      class: 'banner__image',
      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      dataSrc: '/images/banner/banner-1920_512.jpg',
      alt: 'image alt text'
    }
  },
  variants: [
    {
      name: 'secondary',
      view: 'banner--secondary.hbs',
      context: {
        icon: {
          id: 'arrow-right',
          title: 'Arrow right icon'
        },
        text: 'Clothing'
      }
    },
    {
      name: 'category',
      view: 'banner--category.hbs',
      context: {
        buttonCollapse: {
          tag: 'button',
          class: 'banner__button banner__button-collapse',
          attributes: 'type="button" aria-label="button"',
          text: 'More about test',
          iconAfter: {
            id: 'angle-down'
          }
        },
        buttonClose: {
          tag: 'button',
          class: 'banner__button banner__button-close margin-vc-xs',
          attributes: 'type="button" aria-label="button"',
          text: 'Hide details',
          iconAfter: {
            id: 'angle-up'
          }
        },
        buttonMore: {
          tag: 'a',
          class: 'banner__button banner__button-more margin-vc-xs',
          attributes: 'aria-label="button" tabindex="0"',
          text: 'View All',
          iconAfter: {
            id: 'arrow-right'
          }
        },
        textContent: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil saepe modi iste deleniti ut impedit necessitatibus architecto at. Itaque nobis praesentium velit nesciunt voluptates ipsa error sint consectetur culpa? Minus sunt numquam aspernatur, illo itaque quos nobis magni expedita non harum odit soluta, mollitia totam ad aliquam dolorem accusamus assumenda ea incidunt? Voluptas esse quas blanditiis. Asperiores, nulla assumenda. Expedita repellendus reprehenderit officiis sequi saepe nulla, harum recusandae quaerat maiores enim id architecto sint modi veniam velit et temporibus veritatis magni reiciendis molestiae amet sed aspernatur voluptas. Consequuntur, impedit. Iure, laborum incidunt consectetur sequi recusandae mollitia fugiat praesentium quas omnis officia eius ducimus soluta reiciendis ipsam alias adipisci expedita eos obcaecati eum vero exercitationem qui accusamus maiores. Assumenda, voluptas! Ipsum iusto tenetur quidem eligendi, dolores eos assumenda asperiores consequatur ipsa accusantium ex inventore, modi, corrupti non! Quisquam, reprehenderit perferendis voluptatem, debitis rerum, nisi nam velit labore laboriosam error maxime? Veritatis optio molestiae esse tempore labore amet aut odit deleniti nesciunt itaque, delectus sunt, aliquam eius laborum! Vel fuga sit officiis? Dolorem nihil ad fugit voluptates, doloremque sit provident cumque. Sapiente pariatur inventore architecto at quam nemo ipsum, quos ipsa impedit tempore commodi voluptatum recusandae nulla totam eaque dolorum praesentium animi, laborum voluptatibus! Incidunt doloremque doloribus voluptas? A, rem quaerat. Natus numquam quae illo veritatis saepe similique vel ab, error sapiente sed eum modi cumque non praesentium itaque dolorem laboriosam, culpa explicabo voluptatibus voluptate! Quis delectus atque repellendus odio ducimus? Officia adipisci exercitationem nemo non fugiat accusamus atque. Vel tempore expedita, harum nisi ut commodi quas consequatur delectus. Quis perferendis ratione reprehenderit omnis libero tempore, dolores deleniti obcaecati odio officiis. Ipsa iste adipisci sint tempore explicabo optio veritatis quam in hic laboriosam deleniti, repellat quo aliquam minus similique. Delectus a provident sit odit eligendi deserunt, et officia ratione velit in.</p>'
      }
    }
  ]
};
