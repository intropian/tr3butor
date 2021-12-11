import React, { Suspense, useState } from 'react'
import { ScDaoHeader } from './styled'
import { DecorBlocks } from '../DecorBlocks/DecorBlocks'
import { Button } from '../Button/Button'
import { Discord, Globe } from '../../libs/icons'
import { Preloader } from '../Preloader/Preloader'
import { redirectTo } from '../../utilits/common'
import { ContributorsModal } from '../Modal/ContributorsModal'

interface DaoCardProps {
  title: string;
  tags?: string[];
  description?: string;
  imageUrl: string;
  backgroundColor?: string;
  website?: string;
  discord?: string;
  scenario?: 'first' | 'second' | 'third';
  mcap?: string;
  tvl?: string;
  volume?: string;
  founded?: string;
}

// TODO: ASAP BRICK ON COMPONENTS AND DIVIDE IT IN STORIES!
export const DaoHeader: React.FC<DaoCardProps> = ({
  title,
  tags,
  description,
  imageUrl,
  website,
  discord,
  backgroundColor,
  scenario,
  mcap,
  tvl,
  volume,
  founded,
  ...props
}) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <ScDaoHeader color={backgroundColor}>
      <div className="container flex">
        <DecorBlocks scenario={scenario} zIndex={0} />
        <div className="info">
          <div className="top flex">
            <Suspense fallback={<Preloader height="120px" width="140px" />}>
              <img src={imageUrl} alt={title} />
            </Suspense>
            <div>
              {tags && (
                <ul>
                  {tags?.map((tag, key) => (
                    <li key={key}>#{tag}</li>
                  ))}
                </ul>
              )}
              <h3>{title}</h3>
              <span>{description}</span>
            </div>
          </div>
          <div className="buttons">
            <Button
              label="add to favorites"
              simplify
              borderColor="white"
              primary={false}
            />
            {website && (
              <Button
                label="website"
                simplify
                borderColor="white"
                onlyIcon
                onClick={() => redirectTo(website)}
                icon={<Globe />}
              />
            )}
            {discord && (
              <Button
                label="discord"
                simplify
                borderColor="white"
                onlyIcon
                onClick={() => redirectTo(discord)}
                icon={<Discord />}
              />
            )}
          </div>
        </div>
        <div className="statistics">
          <div className="tab">
            <div>
              <span>contributors</span>
              <p>
                <img src="/images/demo/ava.png" />
                <img src="/images/demo/ava_1.png" />
                <img src="/images/demo/ava_2.png" />
                <img src="/images/demo/ava_3.png" />
                <i onClick={() => setShowModal(true)}>125</i>
              </p>
            </div>
            <div>
              <span>mcap</span>
              <p>{mcap}</p>
            </div>
            <div>
              <span>volume</span>
              <p>{volume}</p>
            </div>
          </div>
          <div className="tab">
            <div>
              <span>followers</span>
              <p>
                <img src="/images/demo/ava_4.png" />
                <img src="/images/demo/ava_5.png" />
                <img src="/images/demo/ava_2.png" />
                <img src="/images/demo/ava_1.png" />
                <i onClick={() => setShowModal(true)}>2140</i>
              </p>
            </div>
            <div>
              <span>founded</span>
              <p>{founded}</p>
            </div>
            <div>
              <span>TVL</span>
              <p>{tvl}</p>
            </div>
          </div>
        </div>
      </div>
      {showModal && <ContributorsModal onClose={() => setShowModal(false)} />}
    </ScDaoHeader>
  )
}
