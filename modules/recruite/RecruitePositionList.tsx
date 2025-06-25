"use client";
import RecruitePosition from "./RecruitePosition";

export default function RecruitePositionList() {
  return (
    <div className="wrapper">
      <RecruitePosition
        index={1}
        title="営業"
        description="お客様と見積・納期交渉など、製品に関するコミュニケーションの中心を担います。"
        leftDescImage="/images/recruit/03 calling.webp"
        positions={[
          {
            title: "お客様との打ち合わせ",
            description: `お客様への受注活動や見積書・契約書の作成を行い、製品開発部門とお客様をつなぐ橋渡し役を担います。`,
          },
          {
            title: "受注管理",
            description: `受注製品の作番発行・管理から請求書作成、売掛金管理までを一元対応し、納品までのプロセスを管理します。`,
          },
          {
            title: "受注活動",
            description: `エネルギー・医薬・宇宙などを含む多様な分野で新規顧客の開拓に挑戦し、ヨシダの技術的な強みを提案します。`,
          },
        ]}
      />
      <RecruitePosition
        index={2}
        title="設計"
        description={`お客様へのヒアリングからプロジェクト管理まで、<span class="text-brand-accent">グローブボックスを中心とした装置の設計工程</span>を一貫して担当します。`}
        positions={[
          {
            title: "ヒアリング",
            description: `営業担当とお客様の打合せに同席し、お客様のニーズをきめ細かく汲み取り、仕様を決定します。`,
            image: "/images/recruit/03 calling.webp",
          },
          {
            title: "設計",
            description: `概念設計、強度解析、製作設計に至るまで、製造部や品質保証部など関連部門と連携し進めます。`,
            image: "/images/recruit/04 sales car.webp",
          },
          {
            title: "プロジェクト管理",
            description: `概念設計、強度解析、製作設計に至るまで、製造部や品質保証部など関連部門と連携し進めます。`,
            image: "/images/recruit/05 designing with cad.webp",
          },
        ]}
      />
      <RecruitePosition
        index={3}
        title="生産管理"
        description={`多くの部署と連携しながら、材料の発注から納品まで一貫して管理します。`}
        positions={[
          {
            title: "生産計画・工程管理",
            description: `工程表を作成し、他部署と<span class="text-brand-accent">連携して</span>打合せを行います。現場の進捗状況を<span class="text-brand-accent">把握・管理し、</span>納期<span class="text-brand-accent">の</span>遅延を防ぎます。`,
            image: "/images/recruit/06 discussing the design.webp",
          },
          {
            title: "材料手配",
            description: `図面から部品<span class="text-brand-accent">を</span>展開し、材料の発注から受け入れまで<span class="text-brand-accent">を担当します。</span>材質証明<span class="text-brand-accent">などの書類管理も</span>行います。`,
            image: "/images/recruit/07 interdepartmental cooperation.webp",
          },
          {
            title: "製品出荷",
            description: `納品日程に応じて、梱包<span class="text-brand-accent">や</span>車両手配のスケジュールを組み、安全に出荷します。`,
            image: "/images/recruit/09 process planning.webp",
          },
        ]}
      />
      <RecruitePosition
        index={4}
        title="製造"
        description={`<p class="text-center">製缶・溶接、機械加工、旋盤の3工程からなる製造部です。</p>`}
        positions={[
          {
            title: "製缶・溶接",
            description: `原子力機器や一般産業機器の溶接・組立を行い、TIGなど多様な溶接法で各種材質・板厚に対応します。`,
            image: "/images/recruit/10 material procurement.webp",
          },
          {
            title: "マシニング",
            description: `マシニングセンター加工、NCプログラム作成、加工精度の測定を行い、生産設備・測定器の管理も担当します。`,
            image: "/images/recruit/11 shipping products.webp",
          },
          {
            title: "旋盤",
            description: `NCフライスによる加工、NCプログラム作成、加工精度測定のほか、NC旋盤やターニング加工も担当します。`,
            image: "/images/recruit/12 working on a computer.webp",
          },
        ]}
      />
      <RecruitePosition
        index={5}
        title="品質保証"
        description={`<p class="text-center">製造関連のデータ収集や調査、納品先でのお客様ヒアリングなどを通じて、お客様が安心して製品を使用できるよう、品質のコントロールを行います。</p>`}
        positions={[
          {
            title: "要領書作成・材料確認",
            description: `原子力製品に関する要領書を作成し、立会検査にて使用材料や寸法を確認します。。`,
            image: "/images/recruit/13 tig welding.webp",
          },
          {
            title: "機器を使用した検査",
            description: `ノギスやコンベックスなどの測定器を用いて金属加工品の検査・試験を行い、結果を報告書にまとめます`,
            image: "/images/recruit/14 large cnc machining.webp",
          },
          {
            title: "立会検査・報告書作成",
            description: `3次元測定機による精密測定と、PT（浸透探傷）検査を実施します。`,
            image: "/images/recruit/15 lathe machining.webp",
          },
        ]}
      />
    </div>
  );
}
