const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Definir o modo (development ou production)
  entry: './src/index.js', // Ponto de entrada da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída dos arquivos compilados
    filename: 'bundle.js', // Nome do arquivo de bundle
    publicPath: '/', // Caminho público para assets (importante para devServer e roteamento)
    clean: true, // Limpa a pasta dist antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Arquivos JS e JSX
        exclude: /node_modules/, // Excluir pasta node_modules
        use: {
          loader: 'babel-loader', // Usar babel-loader para transpilar
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Presets do Babel
          }
        }
      },
      {
        test: /\.css$/i, // Arquivos CSS
        use: ['style-loader', 'css-loader'] // Loaders para CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Arquivos de imagem
        type: 'asset/resource', // Usar asset modules do Webpack 5
        generator: {
            filename: 'images/[hash][ext][query]' // Organizar imagens na pasta images
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Arquivos de fonte
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[hash][ext][query]' // Organizar fontes na pasta fonts
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolver extensões automaticamente
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Usar index.html como template
      filename: 'index.html' // Nome do arquivo HTML gerado
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Servir arquivos estáticos da pasta public
    },
    historyApiFallback: true, // Redireciona 404s para index.html (para React Router)
    port: 8080, // Porta do servidor de desenvolvimento
    hot: true, // Habilitar Hot Module Replacement (HMR)
    open: true, // Abrir navegador automaticamente
    compress: true, // Habilitar compressão gzip
  },
  devtool: 'eval-source-map' // Source maps para facilitar depuração em desenvolvimento
}; 