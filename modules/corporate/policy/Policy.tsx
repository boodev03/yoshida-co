import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Policy() {
  return (
    <section className="pt-[82px] mlg:pt-[90px] font-noto-sans">
      {/* Decor */}
      <div className="relative mt-10">
        <div
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 66.67% 100%, 0% 100%, 0% 60%)",
          }}
          className="bg-web-main h-[90%] w-1/2 absolute top-[10%] left-0 z-10"
        >
          <p className="flex flex-col text-white absolute bottom-1/4 left-8 md:left-1/2 md:-translate-x-1/2">
            <span className="section-title text-[13px] md:text-[16px]">
              PRIVACY POLICY
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              プライバシー ポリシー
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/achivement.png" alt="blog-decor" fill />
          </div>

          <div className="hidden md:flex items-center container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              お問い合わせ
            </p>
          </div>
        </div>
      </div>

      <div className="py-[60px] md:py-[120px] container mx-auto space-y-8 mlg:space-y-12">
        <p className="text-xl text-[32px] -tracking-[0.02em] font-bold text-web-dark text-center">
          プライバシーポリシー
        </p>
        <div className="space-y-8 mlg:space-y-12">
          <p className="text-[15px] mlg:text-base text-web-dark">
            株式会社ヨシダ（以下、「当社」）は、個人情報が個人の重要な財産であることを認識し、個人情報を適切に取得・利用し、個人情報に関する法令等を遵守し、個人情報の漏えい等を防止・是正するため、以下のとおり個人情報の取扱方針を定め、細心の注意を払って管理運用します。
            なお、リンク先など他事業者等による個人情報収集は、当プライバシーポリシーの適用範囲ではございません。
          </p>
          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold">
              第1条 個人情報の管理
            </p>
            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">
              当社は、お客さま個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、適切な安全対策を実施し、個人情報の厳重な管理を行ないます。
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold whitespace-pre-line">
              第2条 個人情報の利用目的
            </p>

            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">{`お客さまからお預かりした個人情報は、当社において以下の目的で利用いたします。
お客さまからのご意見・ご感想をいただくため
お客さまからのお問合せや資料請求などに対応するため
市場調査や新しいサービス開発のため
電子メール配信サービスや出版物などの発送のため
当社または関連会社等で取り扱っている商品やサービスに関する情報提供のため
採用に関する情報提供、採用選考及びアンケート調査のため
セミナー、講演、展示会、イベント等の案内、運営、管理のため
その他当社の事業に付帯・関連する事項のため`}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold">
              第3条 適正な管理と保護
            </p>
            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">{`個人情報の管理は、厳重に行うこととし、個人情報に関する不正アクセス、紛失、破壊、改ざん、漏洩を防ぐための適切な予防および是正処置を行います。`}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold">
              第4条 個人情報の第三者への開示
            </p>
            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">{`当社は、以下の場合を除き、第三者に対しデータを開示・提供することはいたしません。

ご本人が事前に同意した場合
法律に基づく場合
当社サービスの利用規約の違反があり、当社の権利、財産やサービスなどを保護するために、個人情報を公開せざるをえないと判断するに足る十分な根拠がある場合 人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難である場合
公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難である場合
国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合合併、会社分割、営業譲渡その他の事由によって個人情報の提供を含む当社の事業の承継が行われる場合`}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold">
              第5条 預託と共同利用
            </p>
            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">{`当社は利用目的の達成に必要な範囲内において、取得した個人情報の全部または一部を業務委託先に預託、または共同利用することがあります。その際、業務委託先としての適格性を十分審査するとともに、契約にあたって守秘義務に関する事項等を規定し、業務委託先に対し必要かつ適切な監督を行います。
共同利用の場合には、共同して利用する個人情報の項目、共同利用者の範囲、共同利用する個人情報の利用目的、共同利用する個人情報の管理責任者の氏名又は名称についてあらかじめ公表いたします。`}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold">
              第6条 ご本人の照会
            </p>
            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">{`ご本人からの個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、迅速に対応いたします。`}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold">
              第7条 免責事項
            </p>
            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">{`当サイトからリンクなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。`}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold">
              第9条 法令等の遵守と見直し
            </p>
            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">{`当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。`}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[15px] mlg:text-base text-web-dark font-bold">
              第10条 個人情報保護に関するお問い合わせ
            </p>
            <p className="text-[15px] mlg:text-base text-web-dark whitespace-pre-line">{`個人情報保護に関するお問い合わせや開示、修正、削除のご依頼がある場合は、soumu@ysd-k.co.jpまでお問い合わせ下さい。

株式会社ヨシダ
〒311-1135 茨城県水戸市六反田町1279-1

令和7年4月13日制定`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
