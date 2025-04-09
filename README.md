# OpenAI Training

OpenAI APIの学習を目的としたリポジトリです。
以下のソースの学習ができる環境を提供します。

- [OpenAI API](https://platform.openai.com/docs/overview)
- [OpenAI Cookbook](https://cookbook.openai.com/)

仮想環境は`pyenv`を使用し、必要なパッケージは`requirements.txt`に記載し、`pip install -r requirements.txt`をコマンド実行することでインストールします。


## 仮想環境の構築

Gitリポジトリをクローンした後、仮想環境を作り直してパッケージをインストールすれば、元の環境を再現できます。

```bash
python -m venv myenv # 仮想環境の作成
source myenv/bin/activate  # 仮想環境の有効化
pip install -r requirements.txt # パッケージのインストール
```

```bash
# 仮想環境の無効化
deactivate
```