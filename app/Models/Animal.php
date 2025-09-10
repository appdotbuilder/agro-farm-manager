<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Animal
 *
 * @property int $id
 * @property string $type
 * @property string $breed
 * @property string $enclosure
 * @property \Illuminate\Support\Carbon|null $birth_date
 * @property float|null $weight
 * @property string $reproductive_status
 * @property string $health_status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\HealthRecord> $healthRecords
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\FeedingSchedule> $feedingSchedules
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Transaction> $transactions
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Animal newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Animal newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Animal query()
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereBreed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereEnclosure($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereBirthDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereWeight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereReproductiveStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereHealthStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Animal whereId($value)
 * @method static \Database\Factories\AnimalFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Animal extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'type',
        'breed',
        'enclosure',
        'birth_date',
        'weight',
        'reproductive_status',
        'health_status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'birth_date' => 'date',
        'weight' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the health records for the animal.
     */
    public function healthRecords(): HasMany
    {
        return $this->hasMany(HealthRecord::class);
    }

    /**
     * Get the feeding schedules for the animal.
     */
    public function feedingSchedules(): HasMany
    {
        return $this->hasMany(FeedingSchedule::class);
    }

    /**
     * Get the transactions for the animal.
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    /**
     * Calculate the total feed cost for this animal.
     */
    public function getTotalFeedCostAttribute(): float
    {
        return $this->feedingSchedules()->sum('total_cost');
    }

    /**
     * Calculate the total health cost for this animal.
     */
    public function getTotalHealthCostAttribute(): float
    {
        return $this->healthRecords()->sum('cost');
    }

    /**
     * Calculate the cost of production for this animal.
     */
    public function getCostOfProductionAttribute(): float
    {
        return $this->getTotalFeedCostAttribute() + $this->getTotalHealthCostAttribute();
    }
}