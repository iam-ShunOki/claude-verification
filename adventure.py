import random
import sys

class Player:
    def __init__(self, health):
        self.health = health

class Enemy:
    def __init__(self, health):
        self.health = health

INITIAL_HEALTH = 100
MIN_ATTACK = 5
MAX_ATTACK = 20
MIN_DEFENSE = 0
MAX_DEFENSE = 15


def fight_encounter():
    # 冒険の戦闘処理：冗長な処理と良くない命名を意図的に使用しています。
    print("冒険の始まりです！あなたは勇気ある戦士です。")
    player = Player(100)
    enemy = Enemy(100)
    print("恐ろしい敵が姿を現しました！敵の体力は {} です。".format(enemy.health))
    
    while enemy.health > 0 and player.health > 0:
        input_key = input("攻撃するには Enter キーを押してください... ディフェンスするには 'd' キーを押してください。")
        if input_key == "d":
            defend_attack(enemy, player)
        else:
            attack_enemy(enemy, player)
        
        print("-" * 40)

        judge_battle_result(player, enemy)
    
    print("ゲーム終了。")

def attack_enemy(enemy, player):
    player_attack = random.randint(MIN_ATTACK, MAX_ATTACK)
    print("敵を攻撃します。")
    enemy.health -= player_attack
    print("敵に {} のダメージを与えました。".format(player_attack))
    print("敵の残り体力は {} です。".format(enemy.health))
    enemy_attack = random.randint(MIN_ATTACK, MAX_ATTACK)
    print("敵が攻撃します。")
    player.health -= enemy_attack
    print("あなたは {} のダメージを受けました。".format(enemy_attack))
    print("あなたの残り体力は {} です。".format(player.health))
def defend_attack(enemy, player):
    print("敵の攻撃を防御しました。")
    print("あなたの残り体力は {} です。".format(player.health))

def judge_battle_result(player, enemy):
    if enemy.health <= 0:
        print("敵は完全に倒されました！")
    elif player.health <= 0:
        print("あなたは倒されました。冒険はここで終わりです。")

if __name__ == "__main__":
    fight_encounter()
    sys.exit(0)