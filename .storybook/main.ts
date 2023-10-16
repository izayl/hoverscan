import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'
import { fileURLToPath } from 'url'

type Options = {
  schemes: string[]
}
class AnySchemeUriPlugin {
  constructor(public options: Options) {}

  apply(compiler) {
    compiler.hooks.compilation.tap(
      'AnySchemeUriPlugin',
      (compilation, { normalModuleFactory }) => {
        Array.from(this.options.schemes).forEach(scheme => {
          normalModuleFactory.hooks.resolveForScheme
            .for(scheme)
            .tap('AnySchemeUriPlugin', resourceData => {
              const uri = resourceData.resource.replace(
                `${scheme}:~assets`,
                `file://${path.resolve(__dirname, '../assets')}`
              )

              const url = new URL(uri)
              const path_ = fileURLToPath(url)
              const query = url.search
              const fragment = url.hash

              resourceData.path = path_
              resourceData.query = query
              resourceData.fragment = fragment
              resourceData.resource = path_ + query + fragment

              return true
            })
        })
      }
    )
  }
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpack: async config => {
    if (!config.plugins) config.plugins = []
    config.plugins.push(new AnySchemeUriPlugin({ schemes: ['data-base64'] }))
    return config
  },
  webpackFinal: async config => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, '../src/'),
      }
    }

    return config
  },
}

export default config
